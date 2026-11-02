# Dashes

**世界秘线**

An esoteric atlas on a 3D globe, tracing how magic, astrology and secret wisdom traveled the Earth over 5,000 years, with every legend set beside the evidence.

一张三维地球上的神秘学地图，追踪魔法、占星与秘传智慧五千年来在地球上的流传路线，每一个传说都和证据放在一起对照。

## About

Dashes maps 13 major esoteric currents across the globe. All 13 are fully traced: 169 stops, 169 routes of transmission and 68 historical events, from the rock art of Siberia and the passage tombs of Ireland to global yoga, Tibetan Buddhism in exile and Afro-Caribbean diaspora religions. Each stop shows who carried the knowledge, why it moved when it did, and where the tradition's own story differs from the historical record.

## Run

No build step. Open `index.html` in a browser (internet needed for the globe libraries), or serve the folder with any static host such as GitHub Pages.

## Deploy

The deployable package lives in `dashes-final/`. After editing the working files, run `./deploy.sh`, then upload the contents of `dashes-final/` so that `index.html` sits at the site root. See `DEPLOY.md` for the full checklist, and run `./check-live.sh` to verify the live site.

## Files

- `index.html` page and styles
- `app.js` globe, timeline, panels, language and theme logic
- `data.js` Chinese content
- `data.en.js` English content, matched to `data.js` by id
- `vendor/` self-hosted globe.gl, topojson-client and world-atlas files
- `_headers` long cache for versioned vendor files

Built with [globe.gl](https://github.com/vasturiano/globe.gl) and [world-atlas](https://github.com/topojson/world-atlas).
