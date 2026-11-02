(function () {
  const D = window.DASHES, EN = window.DASHES_EN || {};
  const LINE = Object.fromEntries(D.lines.map(l => [l.id, l]));
  const ST = Object.fromEntries(D.stations.map(s => [s.id, s]));
  const EV = Object.fromEntries((D.events || []).map(e => [e.id, e]));

  // ---------- 语言 ----------
  // 界面文字在这里；内容的英文在 data.en.js，缺了就自动用中文
  const UI = {
    zh: {
      subtitle: '世界秘线', allLines: '主要神秘学源流', all: '全选', open: '已展开', todo: '待展开', todoSuffix: '（待展开）',
      count: n => `${n} 站`, stop: (i, n) => `第 ${i} / ${n} 站`, notYet: '这一站还没讲，内容待补。', lineEmpty: '这条线的站点还没加。',
      claimed: '宣称', verified: '考证', none: '无', how: '怎么传到这里', why: '为什么', next: '接着传到',
      evidence: '证据类型', sources: '来源', tbd: '待补', unlabeled: '未标注', legendTag: '（传说）', bg: '背景',
      legendKnown: '有记载的传播', legendLegend: '传说中的路线', legendEvent: '背景事件',
      theme: '配色', compass: '回到正北', fold: '收起', close: '关闭', play: '播放',
      year: y => y < 0 ? `公元前 ${-y}` : `公元 ${Math.max(1, y)}`, short: y => y < 0 ? `前${-y}` : `${y}`, tick: y => y < 0 ? `前${-y}` : y === 1 ? '公元' : `${y}`
    },
    en: {
      subtitle: 'Esoteric currents across the Earth', allLines: 'Major esoteric currents', all: 'All', open: 'Open', todo: 'Coming', todoSuffix: ' (coming)',
      count: n => `${n} stops`, stop: (i, n) => `Stop ${i} / ${n}`, notYet: 'Not written yet.', lineEmpty: 'No stops added yet.',
      claimed: 'Claimed', verified: 'Verified', none: 'None', how: 'How it got here', why: 'Why', next: 'Passed on to',
      evidence: 'Evidence', sources: 'Sources', tbd: 'To be added', unlabeled: 'Not labeled', legendTag: ' (legend)', bg: 'Context',
      legendKnown: 'Recorded transmission', legendLegend: 'Legendary route', legendEvent: 'Context event',
      theme: 'Theme', compass: 'Reset to north', fold: 'Collapse', close: 'Close', play: 'Play',
      year: y => y < 0 ? `${-y} BCE` : `${Math.max(1, y)} CE`, short: y => y < 0 ? `${-y} BCE` : `${y}`, tick: y => y < 0 ? `${-y} BCE` : y === 1 ? 'CE' : `${y}`
    }
  };
  let LANG = 'zh';
  const t = k => UI[LANG][k];
  // 取内容字段：英文模式下优先读 data.en.js
  const tx = (kind, id, f, obj) => { const e = LANG === 'en' && EN[kind] && EN[kind][id]; return e && e[f] != null ? e[f] : obj[f]; };
  const S = (s, f) => tx('stations', s.id, f, s);
  const LN = (l, f) => tx('lines', l.id, f, l);
  const E = (e, f) => tx('events', e.id, f, e);
  const K = (k, f) => tx('links', `${k.from}>${k.to}`, f, k);

  // ---------- 配色主题 ----------
  // 颜色都写在 index.html 顶部的 CSS 里（:root[data-theme="ink"] / [data-theme="paper"]），这里只负责读取
  // 西方主线用 --accent；其他线：纸主题用 data.js 里的 color，墨主题用下面的 DARK_PALETTE
  const DARK_PALETTE = ['#d9a752', '#8fb0d6', '#7cc0a2', '#d39a73', '#b4a0d4', '#a6c287', '#e0b06a', '#d08f5c', '#86bfb9', '#a2b3d4', '#d48f7d', '#c4c27c', '#a59f95'];
  const THEMES = { ink: { name: { zh: '墨', en: 'Ink' }, dark: true }, paper: { name: { zh: '纸', en: 'Paper' }, dark: false } };
  let T = { dark: true };
  const readTheme = k => { const cs = getComputedStyle(document.documentElement), v = n => cs.getPropertyValue(n).trim(); return { ...THEMES[k], accent: v('--accent'), anchor: v('--anchor'), legend: v('--legend'), ocean: v('--ocean'), land: v('--land'), landLine: v('--land-line'), border: v('--border'), atmo: v('--atmo') }; };
  const colorOf = id => id === 'west' ? T.accent : T.dark ? (DARK_PALETTE[D.lines.findIndex(l => l.id === id)] || T.anchor) : LINE[id].color;
  const probe = document.createElement('i');
  const rgbOf = c => { probe.style.color = c; document.body.appendChild(probe); const m = getComputedStyle(probe).color.match(/[\d.]+/g) || [128, 128, 128]; probe.remove(); return m.slice(0, 3).join(','); };

  // ---------- 时间刻度：前面压缩，后面展开 ----------
  const SEG = [[0, 0.25, -3000, -500], [0.25, 0.55, -500, 1000], [0.55, 1, 1000, 2025]];
  const toYear = f => { for (const [a, b, y0, y1] of SEG) if (f <= b) return Math.round(y0 + (f - a) / (b - a) * (y1 - y0)); return 2025; };
  const toFrac = y => { for (const [a, b, y0, y1] of SEG) if (y <= y1) return a + (y - y0) / (y1 - y0) * (b - a); return 1; };

  const latestYearOf = id => Math.max(...D.stations.filter(s => s.line === id).map(s => s.year));
  let activeLine = null, lastActive = null;
  const visibleLines = new Set(['west']);
  let year = latestYearOf('west'), selected = null, shownLine = null, playing = false, globeReady = false;

  // ---------- 地球 ----------
  const el = document.getElementById('globe');
  const mapData = fetch('vendor/countries-110m.json').then(r => r.json());
  const globe = new Globe(el, { animateIn: true })
    .backgroundColor('rgba(0,0,0,0)')
    .showAtmosphere(true).atmosphereAltitude(0.13)
    .width(window.innerWidth).height(window.innerHeight)
    .lineHoverPrecision(0.7);
  const mat = globe.globeMaterial();
  mat.color.set('#000000'); mat.emissiveIntensity = 1; mat.shininess = 0; // 平涂的海，不受光照影响
  const ctl = globe.controls();
  ctl.enableDamping = true;
  ctl.enablePan = false;                                             // 不允许把地球拖离中心
  ctl.minPolarAngle = Math.PI * 0.14; ctl.maxPolarAngle = Math.PI * 0.86; // 不让视角翻到两极正上方
  const HOME = { lat: 30, altitude: 2.1 };
  globe.pointOfView({ lat: HOME.lat, lng: 25, altitude: HOME.altitude });

  // 陆地 + 很淡的国界线（国界是现代的，只用来帮助辨认位置）
  mapData
    .then(topo => {
      const land = topojson.merge(topo, topo.objects.countries.geometries);
      const borders = topojson.mesh(topo, topo.objects.countries, (a, b) => a !== b);
      globe.polygonsData([{ type: 'Feature', geometry: land }])
        .polygonSideColor(() => 'rgba(0,0,0,0)')
        .polygonAltitude(0.004);
      globe.pathsData(borders.coordinates)
        .pathPoints(d => d).pathPointLat(p => p[1]).pathPointLng(p => p[0])
        .pathPointAlt(0.0046).pathStroke(null)
        .pathTransitionDuration(0);
      paintGlobe();
      globeReady = true;
      render();
    });

  // ---------- 站点标记（HTML，支持中文） ----------
  const pins = [];
  D.stations.forEach(s => pins.push({ kind: 'station', s, lat: s.lat, lng: s.lng, year: s.year, lineId: s.line }));
  D.lines.filter(l => l.status !== 'open' && l.anchor).forEach(l => pins.push({ kind: 'anchor', l, lat: l.anchor.lat, lng: l.anchor.lng, year: l.anchor.year, lineId: l.id }));
  pins.forEach(p => {
    const e = document.createElement('div');
    e.className = 'pin' + (p.kind === 'anchor' ? ' todo' : '');
    e.innerHTML = '<span class="d"></span><span class="t"></span>';
    e.addEventListener('click', ev => { ev.stopPropagation(); p.kind === 'anchor' ? showLine(p.l) : select(p.s.id, false); });
    p.el = e;
  });
  const pinText = () => pins.forEach(p => p.el.querySelector('.t').textContent = p.kind === 'anchor' ? LN(p.l, 'name') + t('todoSuffix') : S(p.s, 'title'));
  globe.htmlElementsData([])
    .htmlLat('lat').htmlLng('lng').htmlAltitude(0.01)
    .htmlElement(p => p.el)
    .htmlTransitionDuration(0)
    .htmlElementVisibilityModifier((e, v) => {
      e.style.opacity = v ? (e.dataset.dim === '1' ? .18 : 1) : 0;
      e.style.pointerEvents = v ? 'auto' : 'none';
    });

  // ---------- 传播弧线 ----------
  const ang = (a, b) => { const r = Math.PI / 180, p1 = a.lat * r, p2 = b.lat * r, dp = p2 - p1, dl = (b.lng - a.lng) * r; const h = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2; return 2 * Math.asin(Math.min(1, Math.sqrt(h))); };
  // 虚线按绝对长度计算（单位：弧度），所以长弧短弧上的虚线一样长、间距一样、流动速度一样
  const DASH = { known: [0.035, 0.018], legend: [0.004, 0.01] };
  const arcs = D.links.map(k => ({ ...k, a: ST[k.from], b: ST[k.to] })).filter(k => k.a && k.b)
    .map(k => { const d = Math.max(ang(k.a, k.b), 0.02), [dl, dg] = DASH[k.kind] || DASH.known; return { ...k, d, dl: Math.min(dl / d, 0.45), dg: Math.min(dg / d, 0.25) }; });
  globe.arcsData([])
    .arcStartLat(d => d.a.lat).arcStartLng(d => d.a.lng)
    .arcEndLat(d => d.b.lat).arcEndLng(d => d.b.lng)
    .arcStroke(d => d.kind === 'legend' ? 0.25 : 0.45)
    .arcDashLength(d => d.dl).arcDashGap(d => d.dg)
    .arcDashAnimateTime(d => d.kind === 'legend' ? 0 : d.d * 18000)
    .arcAltitudeAutoScale(0.35)
    .arcsTransitionDuration(800)
    .arcLabel(d => `${S(d.a, 'title')} → ${S(d.b, 'title')}${d.kind === 'legend' ? '<br>' + t('legendTag').trim() : ''}`)
    .onArcClick(d => select(d.to, true));

  function arcColor(d) {
    const c = d.kind === 'legend' ? T.legend : colorOf(d.b.line);
    return activeLine && d.b.line !== activeLine ? `rgba(${rgbOf(c)},.18)` : c;
  }

  function paintGlobe() {
    mat.emissive.set(T.ocean);
    globe.atmosphereColor(T.atmo)
      .polygonCapColor(() => T.land).polygonStrokeColor(() => T.landLine)
      .pathColor(() => T.border)
      .arcColor(arcColor);
  }

  // ---------- 按年份刷新 ----------
  function render() {
    const vis = pins.filter(p => visibleLines.has(p.lineId) && p.year <= year);
    pins.forEach(p => {
      const dim = !!activeLine && p.lineId !== activeLine;
      p.el.classList.toggle('sel', p.kind === 'station' && p.s.id === selected);
      p.el.dataset.dim = dim ? '1' : '';
      p.el.classList.toggle('dim', dim);
      if (p.year <= year && visibleLines.has(p.lineId)) p.el.style.opacity = dim ? .18 : 1;
    });
    globe.htmlElementsData(globeReady ? vis : []);
    globe.arcsData(globeReady ? arcs.filter(k => visibleLines.has(k.b.line) && k.a.year <= year && k.b.year <= year) : []);
    document.getElementById('year').textContent = t('year')(year);
    const f = toFrac(year) * 100;
    document.querySelector('#track .fill').style.width = f + '%';
    document.querySelector('#track .knob').style.left = f + '%';
    syncLineUI();
    if (lastActive !== activeLine) { lastActive = activeLine; paintGlobe(); }
  }

  // ---------- 时间轴：刻度 + 站点 + 背景事件 ----------
  const track = document.getElementById('track'), tip = document.getElementById('tip');
  const TICKS = [-3000, -2000, -1000, -500, 1, 500, 1000, 1500, 2000];
  const ticks = TICKS.map(y => { const d = document.createElement('div'); d.className = 'tick'; d.style.left = toFrac(y) * 100 + '%'; track.appendChild(d); return [d, y]; });
  const marks = D.stations.map(s => { const m = document.createElement('div'); m.className = 'mk'; m.style.left = toFrac(s.year) * 100 + '%'; track.appendChild(m); return [m, s]; });
  const evMarks = (D.events || []).map(e => { const m = document.createElement('div'); m.className = 'ev'; m.style.left = toFrac(e.year) * 100 + '%'; track.appendChild(m); return [m, e]; });
  function trackText() {
    ticks.forEach(([d, y]) => d.textContent = t('tick')(y));
    marks.forEach(([m, s]) => m.dataset.tip = `<b>${S(s, 'yearLabel')}</b><span>${S(s, 'title')}</span>`);
    evMarks.forEach(([m, e]) => m.dataset.tip = `<b>${t('bg')} · ${t('short')(e.year)}</b> ${E(e, 'title')}${E(e, 'note') ? `<span>${E(e, 'note')}</span>` : ''}`);
  }
  track.addEventListener('mousemove', e => {
    const m = e.target.closest('[data-tip]');
    if (!m) { tip.style.opacity = 0; return; }
    tip.innerHTML = m.dataset.tip; tip.style.opacity = 1;
    const r = tip.getBoundingClientRect();
    tip.style.left = Math.min(window.innerWidth - r.width - 12, Math.max(12, e.clientX - r.width / 2)) + 'px';
    tip.style.top = (e.clientY - r.height - 14) + 'px';
  });
  track.addEventListener('mouseleave', () => tip.style.opacity = 0);
  const setFromX = x => { const r = track.getBoundingClientRect(); year = toYear(Math.min(1, Math.max(0, (x - r.left) / r.width))); render(); };
  track.addEventListener('pointerdown', e => { stop(); track.setPointerCapture(e.pointerId); setFromX(e.clientX); });
  track.addEventListener('pointermove', e => { if (track.hasPointerCapture(e.pointerId)) setFromX(e.clientX); });

  const playBtn = document.getElementById('play');
  let timer = null;
  function stop() { playing = false; clearInterval(timer); playBtn.textContent = '▶'; }
  playBtn.onclick = () => {
    if (playing) return stop();
    const latestVisible = Math.max(-3000, ...D.stations.filter(s => visibleLines.has(s.line)).map(s => s.year));
    if (year >= latestVisible) year = -3000;
    playing = true; playBtn.textContent = '❚❚';
    timer = setInterval(() => {
      year = toYear(Math.min(1, toFrac(year) + 0.0025));
      render();
      if (year >= 2025) stop();
    }, 40);
  };

  // ---------- 左侧：全球主要神秘学源流 ----------
  const lines = document.getElementById('lines');
  function buildLines() {
    const keep = lines.querySelector('.lscroll') ? lines.querySelector('.lscroll').scrollTop : 0;
    const allChecked = visibleLines.size === D.lines.length;
    lines.innerHTML = `<div class="lbl"><button id="fold" aria-label="${t('fold')}">‹</button><span class="lt">${t('allLines')}</span><span class="lctl"><label class="allbox"><span>${t('all')}</span><input id="all" class="cbx" type="checkbox"${allChecked ? ' checked' : ''} aria-label="${t('all')}"></label></span></div><div class="lscroll sc">` + D.lines.map(l =>
      `<div class="ln ${l.status === 'open' ? '' : 'todo'}${activeLine === l.id ? ' on' : ''}" data-id="${l.id}"><span class="dot" style="background:${l.status === 'open' ? colorOf(l.id) : T.anchor}"></span><span class="name">${LN(l, 'name')}</span><input class="cbx vis" type="checkbox" data-id="${l.id}"${visibleLines.has(l.id) ? ' checked' : ''} aria-label="${LN(l, 'name')}"></div>`
    ).join('') + '</div>';
    lines.querySelector('.lscroll').scrollTop = keep;
    document.getElementById('fold').onclick = e => { e.stopPropagation(); setFold(true); };
    document.getElementById('all').onchange = e => { e.stopPropagation(); setAll(e.target.checked); };
    lines.querySelectorAll('.vis').forEach(cb => cb.onchange = e => { e.stopPropagation(); toggleLine(cb.dataset.id, cb.checked); });
    syncGutter();
  }

  function syncGutter() {
    const sc = lines.querySelector('.lscroll');
    if (!sc) return;
    const sbw = Math.max(0, sc.offsetWidth - sc.clientWidth);
    lines.style.setProperty('--sbw', sbw + 'px');
  }

  function syncLineUI() {
    lines.querySelectorAll('.ln').forEach(row => row.classList.toggle('on', row.dataset.id === activeLine));
    lines.querySelectorAll('.vis').forEach(cb => cb.checked = visibleLines.has(cb.dataset.id));
    const all = document.getElementById('all');
    if (all) all.checked = visibleLines.size === D.lines.length;
  }

  function focusLine(l) {
    const same = D.stations.filter(s => s.line === l.id).sort((a, b) => a.year - b.year);
    if (!same.length) return showLine(l);
    activeLine = l.id;
    visibleLines.add(l.id);
    year = latestYearOf(l.id);
    select(same[0].id, true);
    syncLineUI();
  }

  function toggleLine(id, on) {
    if (on) visibleLines.add(id);
    else {
      visibleLines.delete(id);
      if (activeLine === id) { activeLine = null; selected = null; shownLine = null; detail.classList.remove('show'); }
    }
    render(); syncLineUI();
    if (activeLine === null) relayout();
  }

  function setAll(on) {
    if (on) D.lines.forEach(l => visibleLines.add(l.id));
    else {
      visibleLines.clear();
      activeLine = null; selected = null; shownLine = null;
      detail.classList.remove('show');
    }
    render(); syncLineUI(); relayout();
  }

  lines.addEventListener('click', e => {
    if (e.target.closest('.cbx')) return;
    const r = e.target.closest('.ln'); if (!r) return;
    const l = LINE[r.dataset.id];
    if (l.status === 'open') focusLine(l);
    else showLine(l);
  });

  // ---------- 右侧：详情 ----------
  const detail = document.getElementById('detail'), body = document.getElementById('dbody');
  const closeDetail = () => { detail.classList.remove('show'); activeLine = null; selected = null; shownLine = null; render(); syncLineUI(); relayout(); };
  document.getElementById('close').onclick = closeDetail;

  function select(id, jump, keepView) {
    const s = ST[id]; selected = id; shownLine = null; activeLine = s.line; visibleLines.add(s.line);
    if (jump || s.year > year) { stop(); year = Math.max(year, s.year); }
    if (!keepView) globe.pointOfView({ lat: s.lat, lng: s.lng, altitude: 2.0 }, 900);
    const l = LINE[s.line], c = colorOf(s.line), sy = t('short');
    const same = D.stations.filter(x => x.line === s.line).sort((a, b) => a.year - b.year);
    const i = same.indexOf(s);
    const num = sid => { const n = same.findIndex(x => x.id === sid); return n < 0 ? '' : n + 1; };
    const prev = body.querySelector('.side'), keep = prev ? prev.scrollTop : null;
    const list = same.map((x, j) => `<li class="${x.id === id ? 'on' : ''} ${x.year > year ? 'later' : ''}" data-go="${x.id}"><span class="n">${j + 1}</span><span class="y">${sy(x.year)}</span>${S(x, 'title')}</li>`).join('');
    const inc = arcs.filter(k => k.to === id).sort((a, b) => (a.kind === 'legend') - (b.kind === 'legend'));
    const out = arcs.filter(k => k.from === id && k.kind !== 'legend');
    const incHtml = inc.map(k => `
      <div class="tr ${k.kind}">
        <button class="go" data-go="${k.from}"><span class="nn">${num(k.from)}</span>${S(ST[k.from], 'title')}${k.kind === 'legend' ? t('legendTag') : ''}</button>
        ${K(k, 'via') ? `<p>${K(k, 'via')}</p>` : (K(k, 'note') ? `<p>${K(k, 'note')}</p>` : '')}
        ${K(k, 'why') ? `<p class="why"><b>${t('why')}</b>${K(k, 'why')}</p>` : ''}
        ${(k.bg || []).filter(b => EV[b]).map(b => `<span class="tag">${t('bg')} · ${sy(EV[b].year)} ${E(EV[b], 'title')}</span>`).join('')}
      </div>`).join('');
    const outHtml = out.map(k => `<button class="go" data-go="${k.to}"><span class="nn">${num(k.to)}</span>${S(ST[k.to], 'title')}</button>`).join('');
    const src = S(s, 'sources');
    body.innerHTML = `
      <div class="dwrap">
        <div class="side sc"><div class="cnt">${LN(l, 'name')} · ${t('count')(same.length)}</div><ol class="stl">${list}</ol></div>
        <div class="main sc">
          <span class="chip" style="background:${c}">${t('stop')(i + 1, same.length)}</span>
          <h2>${S(s, 'title')}</h2>
          <div class="meta">${S(s, 'place')} · ${S(s, 'yearLabel')}</div>
          ${s.claimed || s.verified ? `<div class="vs"><div><b>${t('claimed')}</b>${S(s, 'claimed') || t('none')}</div><div><b>${t('verified')}</b>${S(s, 'verified') || t('none')}</div></div>` : ''}
          <div class="sec">${S(s, 'note') || `<span class="empty">${t('notYet')}</span>`}</div>
          ${incHtml ? `<div class="sec"><span class="hd">${t('how')}</span>${incHtml}</div>` : ''}
          ${outHtml ? `<div class="sec"><span class="hd">${t('next')}</span><div class="outs">${outHtml}</div></div>` : ''}
          <div class="sec"><b>${t('evidence')}</b>${S(s, 'evidence') || t('unlabeled')}</div>
          <div class="sec"><b>${t('sources')}</b>${src && src.length ? '<ul>' + src.map(x => `<li>${x}</li>`).join('') + '</ul>' : `<span class="empty">${t('tbd')}</span>`}</div>
        </div>
      </div>`;
    body.querySelectorAll('[data-go]').forEach(b => b.onclick = () => select(b.dataset.go, true));
    detail.classList.add('show');
    // 列表保持原来的滚动位置；只有当前站跑出视野时（比如用键盘或点地球）才把它滚到中间
    const side = body.querySelector('.side'), on = body.querySelector('.stl .on');
    if (keep !== null) side.scrollTop = keep;
    if (on && (on.offsetTop < side.scrollTop || on.offsetTop + on.offsetHeight > side.scrollTop + side.clientHeight)) side.scrollTop = on.offsetTop - (side.clientHeight - on.offsetHeight) / 2;
    render(); syncLineUI(); relayout();
  }

  function showLine(l, keepView) {
    activeLine = null; selected = null; shownLine = l.id;
    if (l.anchor) { if (l.anchor.year > year) year = l.anchor.year; if (!keepView) globe.pointOfView({ lat: l.anchor.lat, lng: l.anchor.lng, altitude: 2.0 }, 900); }
    body.innerHTML = `
      <div class="main"><span class="chip" style="background:${T.anchor}">${t('todo')}</span>
      <h2>${LN(l, 'name')}</h2>
      <div class="meta">${LN(l, 'origin')} · ${LN(l, 'span')}</div>
      <div class="sec"><span class="empty">${t('lineEmpty')}</span></div></div>`;
    detail.classList.add('show');
    render(); syncLineUI(); relayout();
  }

  // 键盘：左右键切换上一站 / 下一站，Esc 关闭详情
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && detail.classList.contains('show')) return closeDetail();
    if (!selected || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
    const s = ST[selected], same = D.stations.filter(x => x.line === s.line).sort((a, b) => a.year - b.year);
    const n = same[same.indexOf(s) + (e.key === 'ArrowRight' ? 1 : -1)];
    n && select(n.id, true);
  });

  // ---------- 指北针：保持现在看的经度，回到正北朝上、正常倾角和默认大小 ----------
  const compass = document.getElementById('compass');
  compass.onclick = () => { const v = globe.pointOfView(); globe.pointOfView({ lat: HOME.lat, lng: v.lng, altitude: HOME.altitude }, 1000); };

  // ---------- 面板让位：地球自动移到没被挡住的区域中间 ----------
  const cam = globe.camera(), unfold = document.getElementById('unfold');
  const off = { x: 0, y: 0 }; let raf = null;
  const applyOffset = () => { const W = window.innerWidth, H = window.innerHeight; cam.setViewOffset(W, H, -off.x, -off.y, W, H); };
  function relayout(instant) {
    const W = window.innerWidth, H = window.innerHeight, mobile = W <= 760, open = detail.classList.contains('show');
    const left = mobile || lines.classList.contains('folded') ? 0 : 24 + lines.offsetWidth;
    const right = open && !mobile ? 24 + detail.offsetWidth : 0;
    const top = 70, bottom = open && mobile ? H * 0.45 + 100 : 90;
    const tx = (left + W - right) / 2 - W / 2, ty = (top + H - bottom) / 2 - H / 2;
    cancelAnimationFrame(raf);
    if (instant) { off.x = tx; off.y = ty; return applyOffset(); }
    const t0 = performance.now(), fx = off.x, fy = off.y;
    const step = now => {
      const k = Math.min(1, (now - t0) / 500), e = 1 - Math.pow(1 - k, 3);
      off.x = fx + (tx - fx) * e; off.y = fy + (ty - fy) * e; applyOffset();
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }

  // ---------- 左侧面板收起 / 展开（会记住上次的状态） ----------
  function setFold(f) {
    lines.classList.toggle('folded', f); unfold.classList.toggle('show', f);
    try { localStorage.setItem('dashes-fold', f ? '1' : '0'); } catch (e) {}
    relayout();
  }
  unfold.onclick = () => setFold(false);

  // ---------- 右上角：配色 ----------
  const themes = document.getElementById('themes');
  Object.entries(THEMES).forEach(([k, th]) => {
    const b = document.createElement('button');
    b.dataset.t = k;
    b.innerHTML = '<span></span>';
    b.onclick = () => applyTheme(k);
    themes.appendChild(b);
  });
  let themeKey = null;
  function refreshDetail() {
    if (selected) select(selected, false, true);
    else if (shownLine) showLine(LINE[shownLine], true);
  }
  function applyTheme(k) {
    if (!THEMES[k]) k = 'ink';
    const first = themeKey === null;
    themeKey = k;
    document.documentElement.dataset.theme = k;
    T = readTheme(k);
    themes.querySelectorAll('button').forEach(b => { b.classList.toggle('on', b.dataset.t === k); b.title = THEMES[b.dataset.t].name[LANG]; });
    pins.forEach(p => { const c = p.kind === 'anchor' ? T.anchor : colorOf(p.lineId); p.el.style.setProperty('--c', c); p.el.style.setProperty('--cr', rgbOf(c)); });
    marks.forEach(([m, s]) => m.style.background = colorOf(s.line));
    buildLines(); refreshDetail();
    // 切换时地球先淡出，换好颜色再淡入，避免一下子闪过去
    if (first) paintGlobe();
    else { el.style.transition = 'opacity .3s'; el.style.opacity = 0; setTimeout(() => { paintGlobe(); el.style.opacity = 1; }, 300); }
    try { localStorage.setItem('dashes-theme', k); } catch (e) {}
  }

  // ---------- 右上角：语言 ----------
  const langs = document.getElementById('langs');
  langs.querySelectorAll('button').forEach(b => b.onclick = () => applyLang(b.dataset.l));
  function applyLang(l) {
    LANG = UI[l] ? l : 'zh';
    document.documentElement.lang = LANG === 'en' ? 'en' : 'zh';
    langs.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.l === LANG));
    document.querySelectorAll('[data-zh]').forEach(n => n.textContent = n.dataset[LANG] || n.dataset.zh); // 带 data-zh / data-en 的文字
    document.getElementById('unfold').textContent = t('allLines') + ' ›';
    document.querySelectorAll('[data-i]').forEach(n => n.textContent = t(n.dataset.i));
    compass.title = t('compass'); compass.setAttribute('aria-label', t('compass'));
    document.getElementById('close').setAttribute('aria-label', t('close'));
    playBtn.setAttribute('aria-label', t('play'));
    themes.querySelectorAll('button').forEach(b => b.title = THEMES[b.dataset.t].name[LANG]);
    pinText(); trackText(); buildLines(); refreshDetail(); render();
    try { localStorage.setItem('dashes-lang', LANG); } catch (e) {}
  }

  // ---------- 启动：读取上次的语言和配色（也可以用 ?lang=en&theme=paper） ----------
  let qs = new URLSearchParams(location.search), savedLang = null, savedTheme = null;
  try { savedLang = localStorage.getItem('dashes-lang'); savedTheme = localStorage.getItem('dashes-theme'); } catch (e) {}
  LANG = UI[qs.get('lang') || savedLang] ? (qs.get('lang') || savedLang) : 'zh';
  applyTheme(qs.get('theme') || savedTheme || 'ink');
  applyLang(LANG);
  try { if (localStorage.getItem('dashes-fold') === '1') { lines.classList.add('folded'); unfold.classList.add('show'); } } catch (e) {}

  window.addEventListener('resize', () => { globe.width(window.innerWidth).height(window.innerHeight); relayout(true); syncGutter(); });
  render();
  relayout(true);
})();
