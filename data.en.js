/* BUILD 2026-10-29 all-lines-v1 */
/*
  Dashes 的英文内容。结构和 data.js 一一对应，用 id 关联。
  哪一项没写英文，网站就自动显示中文，不会出错。
  links 用 "起点>终点" 作为 id，比如 "egypt>alexandria"。
*/
window.DASHES_EN = {
  lines: {
    west: { name: "Western main line", origin: "Egypt · Mesopotamia → Europe", span: "2400 BCE to today" },
    kabbalah: { name: "Jewish Kabbalah", origin: "Babylonia · Palestine → Spain → Safed", span: "6th century BCE to today" },
    islam: { name: "Islamic esotericism", origin: "Arabia → Persia → North Africa", span: "610 to today" },
    iran: { name: "Iranian · Gnostic", origin: "Persia → Mesopotamia", span: "1000 BCE to today" },
    christian: { name: "Christian mysticism", origin: "Egyptian desert → Byzantium → Europe", span: "200 to today" },
    pagan: { name: "European paganism", origin: "Celtic · Norse → modern Wicca", span: "3000 BCE to today" },
    india: { name: "Indian yoga · Tantra", origin: "Indus and Ganges valleys", span: "2500 BCE to today" },
    vajrayana: { name: "Tantric Buddhism", origin: "India → Tibet → East Asia", span: "700 to today" },
    china: { name: "Chinese Daoist · fangshu", origin: "Yellow and Yangtze river valleys", span: "1200 BCE to today" },
    japankorea: { name: "Japan · Korea", origin: "Japan · Korean peninsula", span: "500 BCE to today" },
    africa: { name: "Africa · diaspora", origin: "West Africa → Caribbean · Brazil", span: "1000 to today" },
    meso: { name: "Mesoamerica · Andes", origin: "Mexico · Peru", span: "1200 BCE to today" },
    shaman: { name: "Shamanism (base layer)", origin: "Siberia · worldwide", span: "3000 BCE to today" }
  },

  stations: {
    egypt: {
      title: "Egyptian heka and funerary spells", place: "Saqqara · Thebes", yearLabel: "From c. 2400 BCE", evidence: "Texts · Archaeology",
      note: "Heka was both the power of magic and a god. Egyptians didn't see magic and religion as opposites: the gods used heka to create the world, and people used it to fend off misfortune. Two core ideas: a name is the essence of a thing, and writing itself has power. Funerary texts evolved from the Pyramid Texts to the Coffin Texts to the Book of the Dead, which even has a spell asking the heart not to testify against its owner at judgment.",
      sources: ["Pyramid Texts (Pyramid of Unas, Saqqara)", "Book of the Dead, Papyrus of Ani (British Museum)", "Horus stelae (cures for snake and scorpion bites)"]
    },
    babylon: {
      title: "Babylonian celestial omens", place: "Babylon · Nineveh", yearLabel: "From c. 1800 BCE", evidence: "Texts",
      note: "The sky was a letter from the gods to the king. Omens were about the state, not individuals. A bad omen could be undone by ritual, most famously with a \"substitute king.\" The twelve equal zodiac signs only appeared around the 5th century BCE, and the oldest known personal horoscope dates to about 410 BCE.",
      sources: ["Enūma Anu Enlil omen tablets", "Assyrian royal astrological letters (Nineveh archive)"]
    },
    croton: {
      title: "The Pythagoreans", place: "Croton (southern Italy)", yearLabel: "c. 530 BCE", evidence: "Texts (mostly late)",
      claimed: "Studied in Egypt and Babylon; had a golden thigh; appeared in two cities at once",
      verified: "Left no writings; contemporary evidence is scattered, and the detailed biographies come about 800 years later",
      note: "The soul is immortal and is reborn. All things are number (octave 2:1, fifth 3:2, fourth 4:3). A community with inner and outer circles that refused to eat beans. The teachings reached Plato through Philolaus and Archytas.",
      sources: ["Xenophanes fragment (the puppy with a friend's soul)", "Iamblichus, On the Pythagorean Life (4th century, late)"]
    },
    athens: {
      title: "Plato: soul and cosmos", place: "Athens", yearLabel: "c. 380 BCE", evidence: "Texts",
      claimed: "Atlantis was a real ancient civilization, its story passed from Egyptian priests to Solon",
      verified: "It appears only in Plato's own dialogues with no independent evidence; scholars generally read it as his own allegory",
      note: "Plato turned the Pythagorean ideas about number and soul into a full cosmology. In the Timaeus, a divine craftsman shapes the cosmos after eternal Forms using mathematical ratios, and the cosmos itself is a living being with a soul. Human souls come from the stars, and philosophy is how a soul remembers the world of Forms and climbs back up. The cave allegory says the same thing: what we usually see are shadows on a wall. \"The visible world is a shadow of a higher one\" became the foundation of Western esotericism for the next two thousand years. Plato was friends with the Pythagoreans of southern Italy, Archytas among them.",
      sources: ["Plato, Timaeus (cosmology, Atlantis)", "Plato, Republic (the cave)", "Plato, Phaedo (immortality of the soul)"]
    },
    alexandria: {
      title: "Hermetica · magical papyri · Gnostics", place: "Alexandria", yearLabel: "c. 300 BCE to 300 CE", evidence: "Texts",
      claimed: "The Corpus Hermeticum holds the teachings of Thoth (Hermes), Egypt's ancient god of wisdom",
      verified: "Scholars date it to roughly the 1st to 3rd centuries CE, written in Greek",
      note: "After Alexander's death this city became the great melting pot of the Mediterranean: Greek philosophy, Egyptian priestly tradition, Babylonian astrology and Jewish scripture all met here. Three things grew out of it: Hellenistic astrology (the Babylonian zodiac plus Egyptian decans, still the skeleton of today's horoscope); the Greek Magical Papyri (spells mixing the names of gods from every tradition); and the Corpus Hermeticum, which taught that through gnosis a person can know God and return to the higher world. Gnostics were active here too, seeing the material world as a prison built by a false god. Egypt's Thoth was identified with the Greek Hermes as \"Thrice-Great Hermes.\"",
      sources: ["Corpus Hermeticum", "Greek Magical Papyri", "Ptolemy, Tetrabiblos (c. 150 CE, the summa of Hellenistic astrology)", "Nag Hammadi library (Gnostic texts found in Egypt in 1945)"]
    },
    rome: {
      title: "Neoplatonism and theurgy", place: "Rome · Syria", yearLabel: "c. 250 to 300 CE", evidence: "Texts",
      note: "Plotinus studied in Alexandria and later taught in Rome. He said everything flows out of the One: the One → Intellect → Soul → matter, growing darker the further down it goes. Practice means turning inward and returning to the One; his student Porphyry wrote that Plotinus reached union with the One several times. Later, Iamblichus in Syria argued that thinking alone isn't enough and that ritual is needed to bring divine power down. This is theurgy. From then on philosophy and ritual were bound together, the theoretical root of all later ritual magic.",
      sources: ["Plotinus, Enneads (edited by Porphyry)", "Porphyry, Life of Plotinus", "Iamblichus, On the Mysteries"]
    },
    baghdad: {
      title: "Arabic alchemy and astrology", place: "Baghdad · Harran", yearLabel: "c. 800 to 900 CE", evidence: "Texts",
      claimed: "A huge body of alchemical writing by the 8th-century master Jabir ibn Hayyan alone",
      verified: "Scholars think most of it was written by a school in the 9th and 10th centuries under his name",
      note: "The Abbasid caliphs in Baghdad launched a translation movement, turning Greek, Persian and Indian books into Arabic. Nearby, the Sabians of Harran honored Hermes as a prophet and kept Hermetic traditions alive. The Jabirian texts taught the sulfur and mercury theory: every metal is sulfur and mercury in different proportions, so in principle one can be turned into another. Abu Ma'shar's astrology later had a huge impact in Europe. English words like alchemy and elixir come from Arabic.",
      sources: ["Jabirian corpus", "Abu Ma'shar, Great Introduction to Astrology"]
    },
    constantinople: {
      title: "Byzantium's Greek books go west", place: "Constantinople", yearLabel: "1438 to 1453", evidence: "Texts",
      note: "After the western Roman Empire fell, most of Western Europe stopped reading Greek, but Byzantium in the east never stopped speaking it. Manuscripts of Plato, the Neoplatonists and the Corpus Hermeticum survived for a thousand years in its monasteries and among its scholars. The 11th-century scholar Michael Psellos read the Hermetic texts closely, and the surviving manuscripts are thought to go back to his circle. In 1438 the elderly philosopher Gemistos Plethon traveled to Italy with the Byzantine emperor for a church council, and his talks on Plato captivated the Medici. When the city fell to the Ottomans in 1453, more scholars fled to Italy with manuscripts.",
      sources: ["Works of Michael Psellos (11th century)", "Plethon, On the Differences between Plato and Aristotle (1439)"]
    },
    toledo: {
      title: "Arabic books into Latin", place: "Toledo", yearLabel: "c. 1100 to 1250", evidence: "Texts",
      note: "When Castile took Toledo in 1085, the city's Arabic libraries stayed behind. Translation was often a relay: a Jewish scholar read the text aloud in Spanish, and a Christian scholar wrote it down in Latin. That is how alchemy, astrology, mathematics and medicine came back into Europe; Gerard of Cremona alone translated more than seventy works. In the mid-13th century the court of Alfonso X translated the Arabic magic book Ghāyat al-Ḥakīm, known in Europe as Picatrix, a handbook of astral magic and talismans.",
      sources: ["Picatrix (Ghāyat al-Ḥakīm)", "Latin translations by Gerard of Cremona"]
    },
    florence: {
      title: "Ficino translates the Corpus Hermeticum", place: "Florence", yearLabel: "1463", evidence: "Texts",
      claimed: "Hermes was an Egyptian sage as old as Moses, or older",
      verified: "In 1614 Isaac Casaubon showed from the Greek vocabulary that the texts were written in the Christian era",
      note: "Cosimo de' Medici got hold of a Greek manuscript of the Corpus Hermeticum and told Ficino to set aside his Plato translation and do this first, because everyone believed Hermes was far older than Plato. Ficino later wrote Three Books on Life, which teaches how to draw down good planetary influences with music, scents and colors: a gentle kind of astral magic. His friend Pico della Mirandola brought Kabbalah into Christianity and in 1486 wrote the 900 Theses, trying to show that every wisdom tradition teaches the same truth.",
      sources: ["Ficino's Latin Corpus Hermeticum (printed 1471)", "Ficino, Three Books on Life (1489)", "Pico, 900 Theses and Oration on the Dignity of Man (1486)"]
    },
    cologne: {
      title: "Agrippa's Three Books of Occult Philosophy", place: "Cologne", yearLabel: "1533", evidence: "Texts",
      claimed: "Agrippa wrote the Fourth Book of Occult Philosophy; his black dog was a demon",
      verified: "The Fourth Book appeared after his death and is a forgery, as his student Johann Weyer publicly said; Weyer also said the dog was just a dog",
      note: "Agrippa compiled everything from the earlier stops into one encyclopedia: Ficino's astral magic, the Christian Kabbalah of Pico and Reuchlin, and Arabic magic from Toledo. The three books match three worlds: the natural (elements, hidden properties of herbs and stones), the celestial (number, music, astrology, magic squares) and the divine (holy names, angels, Kabbalah). The \"occulta\" in the title means \"hidden,\" like the invisible force that lets a magnet pull iron, not \"spooky.\" He finished a draft in 1510, but the full work wasn't printed until 1533. Oddly, in 1530 he first published On the Uncertainty and Vanity of the Sciences, which attacked all learning, magic included.",
      sources: ["Three Books of Occult Philosophy (full Cologne edition, 1533)", "On the Uncertainty and Vanity of the Sciences (1530)", "Johann Weyer, On the Tricks of Demons (1563)"]
    },
    prague: {
      title: "John Dee and the court of Rudolf II", place: "Prague", yearLabel: "1584 to 1589", evidence: "Texts · Objects",
      claimed: "Angels taught the Enochian language and cosmic secrets through the medium Edward Kelley",
      verified: "The séance records are real manuscripts, but every word of the angels came through Kelley, whose reliability has always been doubted",
      note: "John Dee advised Elizabeth I and was an expert in mathematics and navigation. Later in life he and the medium Edward Kelley used an obsidian mirror and a crystal ball to \"speak with angels,\" recording an angelic language later called Enochian. In the 1580s they traveled to central Europe. Emperor Rudolf II in Prague was obsessed with alchemy and curiosities, and his court was full of alchemists and astrologers; Tycho Brahe and Kepler came later. Here magic, science and court politics were all mixed together.",
      sources: ["Dee, Monas Hieroglyphica (1564)", "Dee's séance diaries (British Library)", "Dee's obsidian mirror (British Museum)"]
    },
    kassel: {
      title: "The Rosicrucian manifestos", place: "Kassel", yearLabel: "1614", evidence: "Texts",
      claimed: "Founder Christian Rosenkreuz was born in 1378, lived to 106, and his tomb was rediscovered 120 years after his death",
      verified: "Most likely an allegory; scholars generally link it to the circle of the Tübingen theologian Johann Valentin Andreae",
      note: "From 1614 a series of anonymous pamphlets appeared in Germany about a man named Rosenkreuz who traveled east as a youth, learned secret wisdom and founded a hidden brotherhood to reform all knowledge and religion. People across Europe wrote public letters asking to join, but no one ever found the order. It may never have existed, yet the idea of an \"invisible brotherhood\" inspired Freemasonry and countless secret societies.",
      sources: ["Fama Fraternitatis (1614, Kassel)", "Confessio Fraternitatis (1615)", "The Chymical Wedding of Christian Rosenkreutz (1616)"]
    },
    london1717: {
      title: "The first Grand Lodge of Freemasons", place: "London", yearLabel: "1717", evidence: "Texts",
      claimed: "Freemasonry began with the builders of Solomon's Temple, or with the medieval Knights Templar",
      verified: "The traceable roots are English and Scottish stonemasons' guilds; the 1717 Grand Lodge is the first firm organizational point",
      note: "In 1717 four London lodges met in a tavern and formed the first Grand Lodge. Freemasonry grew out of medieval stonemasons' guilds that later began admitting gentlemen who weren't masons. It uses building symbols (compass, square, Solomon's Temple) to teach moral self-improvement, with graded initiation rituals kept secret. It isn't a magical order itself, but its structure of graded initiation plus secret ritual became the template for almost every later esoteric group, including the Golden Dawn.",
      sources: ["Anderson, Constitutions of the Free-Masons (1723)", "Scottish lodge records (from 1599)"]
    },
    paris: {
      title: "Lévi and the birth of \"occultism\"", place: "Paris", yearLabel: "1854 to 1856", evidence: "Texts",
      claimed: "The tarot comes from ancient Egyptian secret wisdom",
      verified: "The tarot appeared in 15th-century Italy as a card game; the Egyptian theory was proposed by Court de Gébelin in 1781 with no evidence",
      note: "Éliphas Lévi, born Alphonse Louis Constant, had studied at a seminary. His Dogma and Ritual of High Magic repackaged everything before him into one system: Kabbalah, tarot, astrology and alchemy were all expressions of a single \"ancient wisdom.\" He matched the 22 tarot trumps to the 22 Hebrew letters, a scheme the Golden Dawn later adopted and that shapes most tarot systems today. The word \"occultism\" itself caught on among this group of French writers.",
      sources: ["Lévi, Dogma and Ritual of High Magic (1854 to 1856)", "Court de Gébelin, Le Monde primitif, vol. 8 (1781)"]
    },
    newyork: {
      title: "The Theosophical Society", place: "New York", yearLabel: "1875", evidence: "Texts",
      claimed: "The teachings came from hidden Masters in the Himalayas through mysteriously appearing letters",
      verified: "In 1885 the Society for Psychical Research sent an investigator whose report judged the letters to be forged; the Theosophical Society has never accepted this",
      note: "Helena Blavatsky, from a Russian noble family, and the American lawyer Henry Olcott founded the Theosophical Society in New York. She blended Western esotericism with Hindu and Buddhist ideas in Isis Unveiled and The Secret Doctrine. It was the first time \"Eastern wisdom\" entered Western occultism on a large scale; words like karma, reincarnation and \"Masters\" spread in the West largely because of her.",
      sources: ["Blavatsky, Isis Unveiled (1877)", "Blavatsky, The Secret Doctrine (1888)", "Society for Psychical Research, Hodgson Report (1885)"]
    },
    adyar: {
      title: "Theosophical headquarters move to India", place: "Adyar (Chennai)", yearLabel: "1882", evidence: "Texts",
      note: "Blavatsky and Olcott went to India in 1879 and in 1882 settled their headquarters at Adyar, outside Madras (now Chennai). Olcott formally became a Buddhist in Ceylon, founded Buddhist schools and helped design the Buddhist flag still used today. The Society also got involved in the Indian independence movement; Annie Besant later served as president of the Indian National Congress. Knowledge began to flow back: Eastern traditions reached the West through Theosophy's \"translation,\" and in turn changed how some Asians understood their own traditions.",
      sources: ["Olcott, A Buddhist Catechism (1881)", "Theosophical Society archives"]
    },
    london1888: {
      title: "The Golden Dawn", place: "London", yearLabel: "1888", evidence: "Texts",
      claimed: "The order's authority came from an old cipher manuscript and a charter from a senior German adept, Fräulein Sprengel",
      verified: "The cipher manuscript is real, but Fräulein Sprengel was almost certainly invented by the founder Westcott",
      note: "Three Freemasons, Westcott, Mathers and Woodman, founded the Golden Dawn in London. It combined the Kabbalistic Tree of Life, Lévi's tarot correspondences, Agrippa's magic squares and seals, Dee's Enochian and the Egyptian gods into one graded curriculum, with exams at every level. Members included the poet W. B. Yeats and Aleister Crowley, who later went his own way. Infighting split it around 1900, but its teaching material largely defined 20th-century Western ritual magic and tarot; the most common tarot deck today, the Waite-Smith deck, came from its members.",
      sources: ["Golden Dawn cipher manuscript", "Regardie, The Golden Dawn (1937 to 1940, published all the teachings)", "Waite-Smith tarot (1909)"]
    },
    cairo1904: {
      title: "Crowley's Book of the Law", place: "Cairo", yearLabel: "1904", evidence: "Texts · Objects",
      claimed: "The Book of the Law was dictated to Crowley by a superhuman being called Aiwass",
      verified: "Only Crowley and his wife ever said so; there were no other witnesses",
      note: "Crowley came out of the Golden Dawn. In 1904 he and his wife were honeymooning in Cairo, where he said a being named Aiwass dictated the three chapters of The Book of the Law, announcing a new \"Aeon of Horus\" with the central line \"Do what thou wilt.\" Shortly before, in a Cairo museum, he had seen an ancient Egyptian stela whose exhibit number happened to be 666; his followers later called it the Stele of Revealing. He fused the Golden Dawn system with this book to create Thelema. After more than four thousand years, the line comes back to Egypt.",
      sources: ["Crowley, The Book of the Law (recorded 1904, printed 1909)", "Stele of Revealing (Egyptian Museum, Cairo)"]
    },
    ascona: {
      title: "Jung and the Eranos conferences", place: "Ascona (Switzerland)", yearLabel: "From 1933", evidence: "Texts",
      note: "Olga Fröbe-Kapteyn, a Dutch woman, started an annual gathering called Eranos at her home on Lake Maggiore, inviting scholars to speak on spirituality and myth, East and West. Regulars included the psychologist Carl Jung, the historian of religion Mircea Eliade, the Kabbalah scholar Gershom Scholem and the scholar of Islamic mysticism Henry Corbin. Jung reread alchemy, Gnosticism and astrology as psychological processes: alchemy isn't about turning lead into gold but about a person's inner transformation. For the first time esotericism entered modern life as psychology, and this also laid the groundwork for its academic study.",
      sources: ["Eranos-Jahrbuch (from 1933)", "Jung, Psychology and Alchemy (1944)"]
    },
    bigsur: {
      title: "The New Age movement", place: "Big Sur, California", yearLabel: "From the 1960s", evidence: "Texts",
      claimed: "The Age of Aquarius is coming and will bring a collective leap in human consciousness",
      verified: "It's a belief with no agreed timetable; accounts vary widely",
      note: "In 1962 the Esalen Institute opened on the coast at Big Sur and became the center of the \"human potential movement,\" where meditation, yoga, massage and psychology all met. The counterculture of the 60s and 70s mixed Theosophy, Eastern spirituality, astrology, tarot and psychology into the New Age movement. For the first time esotericism went from small secret societies to a mass consumer product: the mind-body-spirit shelf, horoscopes and crystals all sit at the end of this line.",
      sources: ["Esalen Institute (founded 1962)", "Ferguson, The Aquarian Conspiracy (1980)"]
    },
    ezekiel: {
      title: "Ezekiel's chariot vision", place: "Babylon, by the Kebar River", yearLabel: "c. 593 BCE", evidence: "Texts",
      note: "In 597 BCE King Jehoiachin of Judah and a group of nobles were taken to Babylon. In the fifth year of the exile the priest Ezekiel had a vision by the Kebar River: four living creatures, four wheels with wheels inside them, a throne above, and a figure like a human being on the throne. The passage became a core image of later Jewish mysticism; 'merkavah,' chariot, became shorthand for the appearance of God. The Temple still stood, but the exile raised a real question: had God left?",
      sources: ["Ezekiel 1", "2 Kings 24-25", "Babylonian Chronicle (ABC 5)"]
    },
    qumran: {
      title: "1 Enoch and the ascent tradition", place: "Qumran (west shore of the Dead Sea)", yearLabel: "c. 300 BCE", evidence: "Texts · Archaeology",
      claimed: "The Book of Enoch was written by Enoch himself",
      verified: "Scholars date it to the 3rd to 1st centuries BCE, edited by several hands over time",
      note: "In the Second Temple period Jewish writers composed books in Enoch's name: he sees the fallen angels, the flood, the workings of the cosmos, the heavens and God's throne. These books never entered the Hebrew Bible, but the Qumran caves preserved more than a dozen manuscripts of them, so they circulated widely. Ascent, angels and secret knowledge were taken up later by rabbinic mysticism and Kabbalah.",
      sources: ["1 Enoch (full text in Ge'ez)", "Qumran fragments 4Q201-4Q212", "Genesis 6:1-4"]
    },
    yavneh: {
      title: "The rabbis draw a line: chariot and orchard", place: "Yavneh (Jamnia)", yearLabel: "c. 100 CE", evidence: "Texts",
      claimed: "All four really entered the heavenly orchard",
      verified: "This is a Talmudic story about the danger of mystical practice, not a historical record of four men",
      note: "In 70 CE Rome burned the Second Temple, and the rabbis regrouped at Yavneh. They put mystical knowledge under strict limits: the Work of Creation could be discussed by two people, the Work of the Chariot by one, and only if he already understood it himself. A story tells of four who entered the 'orchard': one died, one went mad, one destroyed the planting, and only Rabbi Akiva came out in peace. The story is a warning and also evidence that people really were practicing ascent and vision.",
      sources: ["Mishnah Hagigah 2:1", "Babylonian Talmud, Hagigah 14b-16a"]
    },
    sefer_yetzirah: {
      title: "Sefer Yetzirah: numbers and letters", place: "Palestine (place unknown)", yearLabel: "c. 450 CE", evidence: "Texts",
      claimed: "Written by Abraham",
      verified: "Scholars date it to the 2nd to 6th centuries CE; the author is unknown and Greek thought may have shaped it",
      note: "This short book, only a few thousand words, says God made the world in thirty-two ways: ten sefirot and twenty-two Hebrew letters. These sefirot are not yet the ten attributes on the later Tree of Life; they are closer to ten numbers or ten depths. Three mother letters, seven double letters and twelve single letters correspond to elements, planets, months and parts of the body. Creation is a linguistic event: God speaks and the world appears. Later Kabbalah, amulets and golem legends all took material from this book.",
      sources: ["Sefer Yetzirah, short and long recensions", "Cairo Genizah fragments", "Scholem, Major Trends in Jewish Mysticism"]
    },
    hekhalot: {
      title: "Palaces and chariot: the ascent texts", place: "Palestine · Babylonia", yearLabel: "c. 600 CE", evidence: "Texts",
      claimed: "These texts were passed down orally by Rabbi Ishmael and Rabbi Akiva",
      verified: "Scholars date them to the 5th to 8th centuries; the authors are unknown and the material was edited over a long period",
      note: "Between the 5th and 8th centuries a group of texts circulated in the names of Rabbi Ishmael and Rabbi Akiva: Hekhalot Rabbati, Hekhalot Zutarti, 3 Enoch. The practitioner fasted, prayed, recited names, drew seals and passed through seven palaces until he saw the chariot and the throne. The texts even describe the 'measure' of God (Shiur Qomah) in concrete detail. This was not speculation but a dangerous technique: the angels at the gates interrogate the traveler, and a wrong answer can hurt.",
      sources: ["Hekhalot Rabbati", "3 Enoch (Sefer Hekhalot)", "Cairo Genizah fragments", "Scholem, Major Trends in Jewish Mysticism"]
    },
    ashkenaz: {
      title: "The pietists of the Rhineland", place: "Speyer · Worms · Mainz", yearLabel: "c. 1150", evidence: "Texts",
      claimed: "Eleazar of Worms made a golem",
      verified: "His writings do contain a recipe for creating a man, but no contemporary source says he actually made a moving golem",
      note: "In the 12th-century Jewish communities of the Rhineland a group known as Hasidei Ashkenaz, the pietists, appeared. They did not call themselves Kabbalists, but their practices were close: rearranging letters, counting the numerical value of divine names, breaking prayers into codes. Eleazar of Worms (c. 1176-1238) wrote Sodei Razaya, which even contains a recipe for making a golem. The violence of the Crusades pushed this circle toward repentance, martyrdom and the hidden will of God.",
      sources: ["Sefer Hasidim", "Eleazar of Worms, Sodei Razaya", "Scholem, Major Trends in Jewish Mysticism"]
    },
    provence: {
      title: "The Bahir and Provençal Kabbalah", place: "Narbonne · Lunel", yearLabel: "c. 1180", evidence: "Texts",
      claimed: "The Bahir is the teaching of the 1st-century Rabbi Nehunya",
      verified: "Scholars place its composition in Provence in the second half of the 12th century, drawing on older oral material and Spanish Neoplatonism",
      note: "In the second half of the 12th century the Sefer Bahir appeared in Provence. It was the first text to describe the ten sefirot as ten powers flowing from God, and it also talks about the feminine Shekhinah, the transmigration of souls and permutations of the divine name. The book claims the authority of the 1st-century Rabbi Nehunya, but it was written much later. Isaac the Blind (c. 1160-1235) taught Kabbalah around Narbonne, and his students carried it into Catalonia.",
      sources: ["Sefer Bahir", "Letters of Isaac the Blind", "Scholem, Origins of the Kabbalah"]
    },
    girona: {
      title: "The Girona school", place: "Girona", yearLabel: "c. 1230", evidence: "Texts",
      note: "Provençal Kabbalah crossed the Pyrenees and formed a school at Girona. Ezra ben Solomon, Azriel and Nahmanides (1194-1270) described the sefirot as the inner structure of God while insisting on law and commentary. In 1263 Nahmanides was forced into a public debate with a Christian convert, and afterward he wrote more concealed commentary. Here Kabbalah moved from a teaching whispered among a few to a theology that could be taught inside the community.",
      sources: ["Nahmanides, Commentary on the Torah", "Azriel, Commentary on the Aggadot", "Scholem, Origins of the Kabbalah"]
    },
    abulafia: {
      title: "Abulafia: letters and prophetic experience", place: "Palermo · Sicily", yearLabel: "c. 1270", evidence: "Texts",
      claimed: "He saw God and received prophetic power",
      verified: "His texts record a subjective experience with no independent evidence; scholars treat him as the fullest medieval case of 'ecstatic Kabbalah'",
      note: "Abraham Abulafia (1240-c. 1291) was born in Zaragoza and spent his life moving around the Mediterranean. His Kabbalah was of another kind: instead of studying the ten powers of God, he used letter permutations, breathing and body posture to push consciousness into a prophetic state. He claimed to have received the 'spirit of prophecy' and even went to Rome to see the pope. Both churchmen and rabbis opposed him, but his methods later influenced Christian Kabbalah and modern meditation.",
      sources: ["Abulafia, Sefer ha-Ot (Book of the Sign)", "Abulafia, The Book of Letter Combination", "Idel, The Mystical Experience in Abraham Abulafia"]
    },
    zohar: {
      title: "The Zohar", place: "Castile · Guadalajara", yearLabel: "c. 1280", evidence: "Texts",
      claimed: "The Zohar is the teaching of the 2nd-century Rabbi Shimon bar Yochai",
      verified: "Scholars agree it was mainly written by Moses de León in the 1280s, with some sections later; its Aramaic is an artificial archaizing style",
      note: "In the 1280s Moses de León (c. 1240-1305) wrote the Zohar in Castile. It is in Aramaic and pretends to be a dialogue between the 2nd-century Rabbi Shimon bar Yochai and his companions. It describes how Ein Sof, the Infinite, appears through the ten sefirot, how the Shekhinah is in exile, and what lies behind every sentence of the Law. De León sold manuscripts to wealthy patrons. After his death a patron went to his widow for more, and she said her husband had written them all himself. The book became the canon of Kabbalah and was first printed at Mantua in 1558.",
      sources: ["Zohar (Mantua edition, 1558)", "Scholem, Major Trends in Jewish Mysticism", "Liebes, Studies in the Zohar"]
    },
    expulsion: {
      title: "Expulsion and dispersal", place: "Iberia → the Ottoman Empire", yearLabel: "1492", evidence: "Texts",
      claimed: "Spain expelled all its Jews",
      verified: "The decree was aimed at Jews, but some converted and stayed; the exact numbers and destinations are still debated",
      note: "In 1492 the Alhambra Decree gave the Jews of Spain four months to convert or leave. In 1497 Portugal forced conversion as well. Tens of thousands left for North Africa, Italy, the Netherlands and the Ottoman Empire. The center of Kabbalah moved with them: manuscripts, scholars and patrons all scattered. Printing houses in Italy began to print the Zohar, and Safed, on a hill in Galilee, received the next wave.",
      sources: ["Alhambra Decree (1492)", "Portuguese conversion decree (1497)", "Scholem, Major Trends in Jewish Mysticism"]
    },
    cordovero: {
      title: "Cordovero and Safed", place: "Safed (Galilee)", yearLabel: "c. 1550", evidence: "Texts",
      note: "In the 16th century Safed became the new center of Kabbalah. Moses Cordovero (1522-1570) wrote Pardes Rimonim, arranging the scattered teachings about the sefirot into one system: how the ten sefirot mirror one another and correspond to divine names, law and the world. His contemporary Joseph Karo (1488-1575), while writing the legal code Shulhan Arukh, recorded a maggid, a heavenly voice, that came to teach him every day. Here Kabbalah was both theology and part of a life governed by law.",
      sources: ["Cordovero, Pardes Rimonim", "Karo, Maggid Mesharim", "Scholem, Major Trends in Jewish Mysticism"]
    },
    luria: {
      title: "Luria: contraction, shattering, repair", place: "Safed (Galilee)", yearLabel: "c. 1570", evidence: "Texts",
      claimed: "Luria could see people's past lives and spoke with the prophet Elijah",
      verified: "These accounts come from Vital and other students; Luria himself left no systematic writings",
      note: "Isaac Luria (1534-1572) was only one generation after Cordovero, but he told a very different story of the cosmos. Before creation God contracted (tzimtzum) to leave a space. Light poured into vessels, the vessels shattered, and sparks of light fell into the world. Every commandment a person performs gathers the sparks back: this is tikkun, repair. Luria wrote almost nothing; his student Hayyim Vital arranged the lectures into Etz Hayyim, the Tree of Life. This version became the most widespread form of modern Kabbalah.",
      sources: ["Vital, Etz Hayyim (Tree of Life)", "Vital, Sha'ar ha-Gilgulim", "Scholem, Major Trends in Jewish Mysticism", "Fine, Physician of the Soul, Healer of the Cosmos"]
    },
    sabbatai: {
      title: "Sabbatai Zevi and the messianic storm", place: "Smyrna (Izmir)", yearLabel: "1666", evidence: "Texts",
      claimed: "He was the Messiah who would restore Israel",
      verified: "In 1666 he was arrested and converted to Islam; the movement split, and some followers kept their faith in secret",
      note: "In 1665 Sabbatai Zevi (1626-1676) of Smyrna, urged on by Nathan of Gaza, declared himself the Messiah. The news spread through Europe and the Ottoman Empire; Jews sold their property and prepared to return to Jerusalem. In 1666 the Ottoman authorities arrested him, and he chose to convert to Islam. The movement collapsed. It was the largest messianic movement in Kabbalah's history, and it left many people asking whether calculating the end from Kabbalah could be trusted at all.",
      sources: ["Scholem, Sabbatai Sevi: The Mystical Messiah", "Letters of Nathan of Gaza", "Contemporary community records"]
    },
    hasidism: {
      title: "Hasidism: Kabbalah in daily life", place: "Medzhybizh (Podolia)", yearLabel: "c. 1740", evidence: "Texts · Oral tradition",
      claimed: "The Baal Shem Tov performed countless miracles",
      verified: "The main story collection was written half a century after his death; historical details are hard to confirm, but the movement did begin in his generation",
      note: "The Baal Shem Tov, Israel ben Eliezer (c. 1700-1760), worked in Podolia. He did not teach a complicated cosmology. He taught devekut, cleaving to God in daily life: eating, dancing and telling stories could all be service. His students spread the movement through Eastern Europe, building communities around the tzaddik, the righteous leader. Kabbalah moved from the scholar's study to the ordinary person's table. Opposition came quickly: in 1772 the Vilna Gaon ordered the Hasidim expelled from the community.",
      sources: ["Shivhei ha-Besht (1814)", "Scholem, Major Trends in Jewish Mysticism", "Idel, Hasidism: Between Ecstasy and Magic"]
    },
    berlin: {
      title: "Jewish studies: Kabbalah becomes an object of research", place: "Berlin", yearLabel: "1819", evidence: "Texts",
      note: "In 1819 a group of Jewish intellectuals in Berlin founded the Society for Jewish Culture and Science. They wanted to study Judaism as history: collecting manuscripts, making bibliographies, and in 1822 founding a journal. Kabbalah entered the modern academic catalogue for the first time. But many of these scholars saw it as superstition that needed to be cleared away. A century later Gershom Scholem would try to rescue the subject from that contempt.",
      sources: ["Zeitschrift für die Wissenschaft des Judentums (from 1822)", "Scholem, Major Trends in Jewish Mysticism, introduction", "Schorsch, From Text to Context (1994)"]
    },
    scholem: {
      title: "Scholem and the academic study of Kabbalah", place: "Jerusalem", yearLabel: "1925", evidence: "Texts",
      claimed: "Kabbalah is the innermost life of the Jewish people",
      verified: "That is Scholem's interpretive frame, not one all scholars accept; later scholars such as Idel stress Kabbalah's multiple and cross-cultural sources",
      note: "In 1923 Gershom Scholem, then 26, moved from Berlin to Palestine, and in 1925 he began teaching at the Hebrew University. He pulled Kabbalah away from both 'superstition' and 'national spirit' and made it a documented history: who wrote what, when, and how manuscripts traveled. His Major Trends in Jewish Mysticism (1941) became the standard introduction. He also attended the Eranos conferences with Jung and Eliade. Kabbalah now had its own academic archive.",
      sources: ["Scholem, Major Trends in Jewish Mysticism (1941)", "Scholem, Origins of the Kabbalah", "Biale, Gershom Scholem: Kabbalah and Counter-History"]
    },
    losangeles: {
      title: "The Kabbalah Centre and popular Kabbalah", place: "Los Angeles", yearLabel: "1965", evidence: "Texts · Objects",
      claimed: "The red string and the courses come from the original Kabbalah of three thousand years ago",
      verified: "The precursor of the Kabbalah Centre was founded in 1965; the red string has a place in Jewish folk amulets, but the astrological readings and paid courses are modern repackaging, and the ancient texts contain no such package",
      note: "In 1965 Philip Berg founded the precursor of the Kabbalah Centre in the United States; its headquarters later settled in Los Angeles. It mixed passages from the Zohar, the Tree of Life, red string, astrology and self-help, and spread through courses and celebrity endorsement. Madonna and other stars wearing the red string brought it into the public eye in the 2000s. Scholars criticize it for stripping away law and Hebrew context; the Centre says it is translating ancient wisdom for modern people. Here Kabbalah became a spiritual product you can buy.",
      sources: ["Myers, Kabbalah and the Spiritual Quest: The Kabbalah Centre in America (2007)", "Kabbalah Centre publications", "Yehuda Berg, The Power of Kabbalah (2002)"]
    },
    mecca: {
      title: "Mecca: revelation and the night journey", place: "Mecca", yearLabel: "c. 610", evidence: "Texts",
      note: "Around 610, Muhammad received the first revelation in a cave outside Mecca, and the Quran became the shared text of every later Muslim seeker. The Quran contains the Light Verse (24:35), which became central to Sufi readings of divine light, and the Night Journey (17:1), which became a model for ascent and the inner journey. Early Muslims did not treat esotericism as a separate discipline; it grew inside recitation and night prayer.",
      sources: ["Quran 24:35 (Light Verse)", "Quran 17:1 (Night Journey)", "Ibn Hisham, Life of the Prophet"]
    },
    basra: {
      title: "Basra: asceticism and the love of God", place: "Basra", yearLabel: "c. 700", evidence: "Texts",
      claimed: "Rabia's poems are all hers",
      verified: "Her verses first appear in later Sufi anthologies, and attribution is debated",
      note: "In the late 7th and 8th centuries, ascetics in Basra and Kufa wore wool (suf), stressing repentance, poverty and love of God. The woman poet Rabia (c. 714-801) separated love from reward, saying she loved God before paradise. Hasan al-Basri taught inner scrutiny and distinguished outward law from inward states. The later Sufi map of stations and states began to take shape here.",
      sources: ["Sulami, Classes of the Sufis", "Attar, Memorial of the Friends of God", "Rabia's poems and biographies"]
    },
    baghdad_sufi: {
      title: "Baghdad: Junayd, Hallaj and Sufi psychology", place: "Baghdad", yearLabel: "c. 900", evidence: "Texts",
      claimed: "Hallaj worked miracles and his body would not decay",
      verified: "Such stories come from later hagiography; his execution is a firm historical event",
      note: "Abbasid Baghdad brought Greek philosophy, Persian practice and Islamic theology together. Junayd (c. 835-910) taught sobriety after intoxication and tied Sufism back to law. Hallaj (858-922) said 'I am the Truth' and was executed. The scandal forced Sufis to explain whether union with God was metaphor, experience or heresy. Sufi psychology, with the reproachful soul and the peaceful soul, took shape in this circle.",
      sources: ["Letters of Junayd", "Hallaj, The Tawasin", "Sulami, Classes of the Sufis"]
    },
    tus: {
      title: "Tus: Ghazali and the legitimizing of Sufism", place: "Tus (Khorasan)", yearLabel: "c. 1100", evidence: "Texts",
      note: "Al-Ghazali (1058-1111) taught at the Nizamiyya in Baghdad, then went through a crisis of faith, left the chair and traveled before returning to Tus. In The Revival of the Religious Sciences he placed Sufi inner practice inside orthodox law; in The Deliverance from Error he described the soul's path from sense and imagination to reason and beyond. Without him Sufism might have remained a suspect movement; with him it became teachable and respectable.",
      sources: ["Ghazali, The Revival of the Religious Sciences", "Ghazali, The Deliverance from Error", "Ghazali, The Niche of Lights"]
    },
    murcia: {
      title: "Murcia: Ibn Arabi and the unity of being", place: "Murcia (al-Andalus)", yearLabel: "c. 1200", evidence: "Texts",
      claimed: "Ibn Arabi founded the doctrine of the unity of being",
      verified: "He did not use the later term; commentators systematized it, and scholars still debate his position",
      note: "Ibn Arabi (1165-1240) was born in Murcia, met the woman saint Fatima in Seville, and later lived in Mecca, Cairo and Damascus. In The Meccan Revelations and The Bezels of Wisdom he taught that being is one and that everything is a manifestation of the divine names. He also described the imaginal world, a real level between sense and reason. Later Sufis treated the unity of being as the highest and most dangerous doctrine; critics said it blurred Creator and creation.",
      sources: ["Ibn Arabi, The Meccan Revelations", "Ibn Arabi, The Bezels of Wisdom", "Afifi, The Mystical Philosophy of Ibn Arabi"]
    },
    konya: {
      title: "Konya: Rumi and the whirling prayer", place: "Konya", yearLabel: "c. 1240", evidence: "Texts",
      claimed: "Rumi and Shams became soulmates the moment they met in the street",
      verified: "The meeting story comes from later hagiography; they did meet around 1244",
      note: "Rumi (1207-1273) was born in Balkh and came with his family to Konya. In 1244 he met the wandering ascetic Shams, and after Shams disappeared Rumi began the Masnavi and the collection of Shams. He did not teach a complicated metaphysics; he taught separation, longing and love. The reed flute sighs because it was cut from the reed bed. His son Sultan Walad organized the Mevlevi order, and the whirling sama became a ritual, not a performance.",
      sources: ["Rumi, Masnavi", "Rumi, Divan-i Shams", "Sultan Walad, The Book of Walad"]
    },
    cairo_buni: {
      title: "Cairo: al-Buni and letter magic", place: "Cairo", yearLabel: "c. 1300", evidence: "Texts",
      claimed: "The Sun of Wisdom is al-Buni's own book",
      verified: "Surviving versions were expanded by later hands; authorship and dating are disputed",
      note: "Ahmad al-Buni (d. 1225) worked in North Africa and Egypt and wrote Shams al-Ma'arif, the Sun of Wisdom, which organized divine names, letter values, planets and talismans into a practical magic. It taught how to use letter combinations for protection and how to time operations by the planets. Manuscripts circulated from Morocco to India; orthodox scholars condemned the book and also copied it.",
      sources: ["al-Buni, Shams al-Ma'arif", "al-Buni, The Secrets of Letters", "Studies of Islamic magical manuscripts"]
    },
    tabriz_hurufi: {
      title: "Tabriz: Hurufism and the letter messiah", place: "Tabriz", yearLabel: "c. 1400", evidence: "Texts",
      claimed: "Fazlallah was a divine incarnation",
      verified: "That is his followers' claim; he was executed by Timur in 1394",
      note: "In the late 14th century Fazlallah Astarabadi (1339-1394) founded the Hurufi movement in Iran. He linked the numerical values of Arabic letters to the human face and name, claimed that the letters contained the divine word, and presented himself as the manifestation of Truth. Followers spread through Timurid and Ottoman lands and were persecuted. Hurufism pushed Sufi letter meditation into a messianic movement and became a template for later movements.",
      sources: ["Fazlallah, The Book of Eternity", "Hurufi poetry", "Studies of Hurufism"]
    },
    istanbul_sufi: {
      title: "Istanbul: Ottoman Sufi orders", place: "Istanbul", yearLabel: "c. 1500", evidence: "Texts · Objects",
      note: "After 1453 Istanbul became the Ottoman capital, and Mevlevi, Bektashi and Naqshbandi orders all established centers there. Sufism was not only private devotion outside the mosque; it entered the court, the army and the guilds. The Bektashis were tied to the Janissaries, and the Mevlevis performed the sama at court. Ottoman scholars also kept commenting on Ibn Arabi, and in the 17th century his school was still being reorganized.",
      sources: ["Ottoman order archives", "Evliya Celebi, Book of Travels", "The Ibn Arabi commentary tradition"]
    },
    aceh: {
      title: "Aceh: the Southeast Asian Sufi network", place: "Aceh (Sumatra)", yearLabel: "c. 1600", evidence: "Texts",
      claimed: "Fansuri was a heretic",
      verified: "That was Raniri's judgment; modern scholars tend to see Fansuri as a controversial Sufi poet",
      note: "In the 16th and 17th centuries Aceh was a port of Indian Ocean trade and Islamic learning. Hamzah Fansuri wrote Sufi poetry in Malay on the unity of being; Nur al-Din al-Raniri came from India, refuted him and drew a line between orthodox Sufism and heresy. The debate shows that Sufism did not only travel west from Arabia; it also moved east along sea routes and became entangled with local language and court politics.",
      sources: ["Poems of Hamzah Fansuri", "Raniri, The Gift of Truth", "Southeast Asian Islamic manuscripts"]
    },
    touba: {
      title: "Touba: West African Sufism and empire", place: "Touba (Senegal)", yearLabel: "1887", evidence: "Texts · Oral tradition",
      claimed: "Amadou Bamba performed countless miracles",
      verified: "The main accounts come from internal biography; the founding of Touba and the order's social role are documented",
      note: "In the 18th and 19th centuries the Tijaniyya and Muridiyya orders rose in West Africa. Amadou Bamba (1853-1927) founded the Muridiyya, turning labor, discipline and obedience to the shaykh into spiritual practice, and built the city of Touba under French colonial rule. Sufism here was not only mysticism; it was a social network of organization, education and resistance. Amulets, dreams and miracles loom large in oral memory.",
      sources: ["Murid oral tradition", "Letters of Amadou Bamba", "Studies of West African Sufism"]
    },
    cairo_guenon: {
      title: "Cairo: Guénon and Traditionalism", place: "Cairo", yearLabel: "1930", evidence: "Texts",
      claimed: "Guénon was the heir of a hidden Sufi master",
      verified: "His Sufi identity and Cairo life are documented; the hidden transmission claim comes mainly from followers",
      note: "In 1930 the Frenchman René Guénon (Abd al-Wahid Yahya) moved to Cairo, married an Egyptian woman and lived an ordinary Sufi life. In East and West and The Crisis of the Modern World he argued that modernity cuts off the vertical dimension of tradition and that only the primordial tradition and Eastern metaphysics can restore it. His Traditionalism later shaped Schuon, Nasr and much of the modern esoteric world.",
      sources: ["Guénon, East and West", "Guénon, The Crisis of the Modern World", "Chacornac, The Simple Life of René Guénon"]
    },
    zoroaster: {
      title: "Zarathustra and the two principles", place: "Bactria · Persia", yearLabel: "c. 1000 BCE", evidence: "Texts",
      claimed: "Zarathustra lived in the 6th century BCE",
      verified: "There is no consensus; language and textual layers support an earlier date, with proposals from 1500 to 600 BCE",
      note: "Zarathustra taught a supreme good god, Ahura Mazda, opposed by the destructive spirit Angra Mainyu. Humans can choose between them, and a final judgment will separate good from evil. Fire is a symbol of purity, not a god. This dualism and eschatology later shaped Judaism, Christianity, Gnosticism and Manichaeism.",
      sources: ["The Gathas", "The Avesta", "Greek accounts of Persia"]
    },
    persepolis: {
      title: "Persepolis: Ahura Mazda and kingship", place: "Persepolis", yearLabel: "c. 550 BCE", evidence: "Texts · Archaeology",
      note: "Darius I began building Persepolis around 518 BCE. In the reliefs, delegations from the provinces bring gifts while the king sits beneath the winged disc of Ahura Mazda. Kingship was not merely political; it staged the opposition between cosmic order (asha) and the lie (druj). The magi handled fire sacrifice, astrology and dream interpretation, and Greeks lumped their learning together as 'Eastern wisdom'.",
      sources: ["Persepolis reliefs and Elamite archive", "Herodotus, Histories", "The Avesta"]
    },
    dura: {
      title: "Dura-Europos: the Mithraic mysteries", place: "Dura-Europos (Syria)", yearLabel: "c. 200", evidence: "Archaeology · Objects",
      claimed: "The Mithraic mysteries are Persian Zoroastrianism",
      verified: "Scholars see an independent cult formed in the Greek and Roman world, borrowing the Persian name rather than the state religion",
      note: "Dura-Europos was a trade city on the Syrian desert edge, and archaeologists found a Mithraeum there with a fresco of Mithras killing the bull, surrounded by the zodiac and the winds. The mysteries spread in the Roman Empire from the 2nd to the 4th centuries, and only initiates knew the rites. Mithras was connected to the Persian figure, but the Roman cult was not a direct import. Its name and image traveled west and became one of the clearest archaeological cases of an ancient mystery cult.",
      sources: ["Mithraeum frescoes at Dura-Europos", "Plutarch, Life of Pompey", "Beck, The Religion of the Mithras Cult"]
    },
    ctesiphon: {
      title: "Ctesiphon: Mani and the war of light and dark", place: "Ctesiphon (Mesopotamia)", yearLabel: "c. 300", evidence: "Texts",
      note: "Ctesiphon was the capital of the Parthian and Sasanian empires. In the 3rd century Mani (216-274) taught a more radical dualism: light and dark, good and evil, soul and matter, at war from the beginning to the end. He presented himself as the successor of Jesus, the Buddha and Zarathustra, and used paintings and poetry to teach. Manichaeism was persecuted by the Persian state but traveled the Silk Road to Central Asia, China and the Mediterranean.",
      sources: ["Coptic Manichaean texts", "Augustine, Confessions", "The Cologne Mani Codex"]
    },
    harran: {
      title: "Harran: Sabians and Hermes", place: "Harran (northern Mesopotamia)", yearLabel: "c. 800", evidence: "Texts",
      note: "Harran was an ancient cult center of the moon god Sin in northern Mesopotamia. In Islamic times its Sabians claimed the authority of Hermes and the prophet Idris, and kept astral worship, alchemy and divination. The Abbasid translation movement turned the Greek and Babylonian texts in their hands into Arabic. Harran thus became a door through which the Hermetic tradition entered the Islamic world.",
      sources: ["Sabian texts from Harran", "Ibn al-Nadim, The Catalogue", "Green, The City of the Moon God"]
    },
    yazd: {
      title: "Yazd: the survival of Zoroastrianism", place: "Yazd", yearLabel: "c. 1000", evidence: "Texts · Objects",
      note: "After the Arab conquest Zoroastrianism shrank in Iran but survived in villages around Yazd and Kerman. In the 9th and 10th centuries priests compiled the Denkard in Middle Persian, organizing doctrine, ritual and cosmology, and the sacred fire was passed down in the fire temples. The fire temple at Yazd still burns today, though many rituals and texts were restored from memory and oral tradition.",
      sources: ["The Denkard", "Inscriptions from the Yazd fire temple", "Boyce, Zoroastrians"]
    },
    aleppo: {
      title: "Aleppo: Suhrawardi and illumination", place: "Aleppo", yearLabel: "c. 1190", evidence: "Texts",
      claimed: "He was executed for spreading heresy",
      verified: "The reasons are disputed between politics and doctrine; the traditional account says Saladin ordered it",
      note: "Suhrawardi (1154-1191) was born in northwestern Iran and taught the philosophy of illumination (hikmat al-ishraq) in Aleppo. He described the cosmos as an emanation from the Light of Lights, with levels of light and darkness interwoven, and taught that intuition and purification return the soul to the East of light. He mixed Platonic forms, Persian light metaphysics and Islamic mysticism, was accused by orthodox scholars, and was executed in Aleppo.",
      sources: ["Suhrawardi, The Wisdom of Illumination", "Suhrawardi, The Structure of Light", "Corbin, History of Islamic Philosophy"]
    },
    turfan: {
      title: "Turfan: Manichaeism goes east", place: "Turfan (Gaochang)", yearLabel: "c. 800", evidence: "Texts · Archaeology",
      note: "The Turfan basin was the royal seat of the Uyghur kingdom of Gaochang. In the 8th and 9th centuries the Uyghur khagan made Manichaeism the state religion, and Manichaean monks translated scriptures into Uyghur, Sogdian and Chinese and painted murals. In the early 20th century German expeditions found a large cache of Manichaean fragments at Turfan, including hymns, gospels and cosmic diagrams. Manichaeism started in Persia, crossed Central Asia, and left traces in southeastern China.",
      sources: ["Manichaean fragments from Turfan", "Uyghur Manichaean texts", "Klimkeit, Gnosis on the Silk Road"]
    },
    isfahan: {
      title: "Isfahan: Mulla Sadra", place: "Isfahan", yearLabel: "c. 1600", evidence: "Texts",
      note: "The Safavid dynasty made Twelver Shiism the state religion in the 16th century, and Isfahan became the imperial capital. Mulla Sadra (1571-1636) wrote The Four Journeys there, combining Suhrawardi's illumination, Ibn Arabi's unity of being and Shi'i theology into a system of the primacy of existence and the bodily nature of the soul. His philosophy later became a core subject in Iranian seminaries and is still taught today.",
      sources: ["Mulla Sadra, The Four Journeys", "Mulla Sadra, Knowledge and Existence", "Nasr, Islamic Philosophy"]
    },
    mumbai: {
      title: "Mumbai: the Parsis and the translation of the Avesta", place: "Mumbai", yearLabel: "c. 1800", evidence: "Texts · Objects",
      note: "From the 8th century groups of Zoroastrians fled Persia to the west coast of India and later settled in Bombay, where they became known as Parsis. In the 19th century Parsi scholars and British Orientalists edited the Avesta and introduced Zoroastrianism to Europe. The Parsi community of Bombay was prominent in commerce and civic life and built fire temples and towers of silence. The translations carried 'Persian wisdom' into Western esotericism.",
      sources: ["Translations of the Avesta", "Parsi community archives", "Boyce, Zoroastrians"]
    },
    shiraz: {
      title: "Shiraz: Shaykhism and the Bab", place: "Shiraz", yearLabel: "1844", evidence: "Texts",
      claimed: "The Bab was the hidden Imam",
      verified: "That is the followers' claim; he first called himself a 'gate' and later raised his status, and orthodox Shiism rejects it",
      note: "In the early 19th century Shaykh Ahmad founded the Shaykhi school in Iran, stressing a spiritual link to the hidden Imam. In 1844 the Bab, from Shiraz, declared himself the gate to the hidden Imam and was later treated by his followers as a new prophet. The Babi movement was suppressed but gave birth to the Baha'i faith. It mixed Shi'i messianism, number symbolism and modern revelation.",
      sources: ["The Bab, Bayan", "Baha'i scriptures", "MacEoin, The Babi Movement"]
    },
    tehran: {
      title: "Tehran: Nasr and Traditionalism", place: "Tehran", yearLabel: "c. 1970", evidence: "Texts",
      note: "In the 20th century Tehran University became a center of Iranian philosophy. Hossein Nasr (1933-) trained there and later introduced Suhrawardi, Mulla Sadra and Ibn Arabi to the English-speaking world, and joined the Traditionalist school. He criticized modern technological civilization and called for a return to sacred tradition. After the 1979 revolution he moved to the United States, but illuminationist philosophy and Traditionalism continue in Iran.",
      sources: ["Nasr, Knowledge and the Sacred", "Nasr, Islamic Cosmological Doctrines", "Sedgwick, Traditionalism"]
    },
    alexandria200: {
      title: "Alexandria: Origen and allegory", place: "Alexandria", yearLabel: "c. 200", evidence: "Texts",
      claimed: "Origen is an uncontroversial orthodox father",
      verified: "He was controversial in his lifetime and was condemned by some churches after his death; East and West judge him differently",
      note: "At the end of the 2nd century Origen taught in Alexandria and read scripture on three levels: literal, moral and spiritual. He read the Song of Songs as the soul's love for God, and taught that all things will finally return to God (apocatastasis), perhaps even the devil. This gave Christian mysticism its first complete hermeneutics, and it also made him a suspect figure for some later churches.",
      sources: ["Origen, On First Principles", "Origen, Against Celsus", "Eusebius, Church History"]
    },
    nitria: {
      title: "Nitria: the desert fathers and inner warfare", place: "Nitria (Egyptian desert)", yearLabel: "c. 300", evidence: "Texts",
      note: "In the 3rd and 4th centuries monks moved into the Egyptian desert: Antony, Macarius and Evagrius. They described practice as inner warfare, with eight kinds of thoughts dragging the mind away and prayer as the only weapon. Evagrius said prayer is conversation with God, and that apatheia is not coldness but healed desire. The desert experience was collected in the Sayings of the Fathers and became a common root of Eastern and Western monasticism.",
      sources: ["Sayings of the Desert Fathers", "Evagrius, Practical Treatise", "Athanasius, Life of Antony"]
    },
    cappadocia: {
      title: "Cappadocia: Gregory of Nyssa and divine darkness", place: "Cappadocia", yearLabel: "c. 380", evidence: "Texts",
      note: "In the 4th century Basil, Gregory of Nyssa and Gregory of Nazianzus defended the Trinity in Cappadocia. Gregory of Nyssa wrote The Life of Moses, saying that the closer the soul comes to God, the more it discovers that God is darkness: not the absence of light, but light too strong for the eye. He also taught epektasis, the soul forever moving forward and never satisfied. Apophatic theology later learned to speak by negation, and one of its sources is here.",
      sources: ["Gregory of Nyssa, The Life of Moses", "Gregory of Nyssa, On the Soul and Resurrection", "Basil, On the Holy Spirit"]
    },
    constantinople500: {
      title: "Constantinople: Pseudo-Dionysius and negative theology", place: "Constantinople", yearLabel: "c. 500", evidence: "Texts",
      claimed: "The author was Dionysius, a disciple of the apostle Paul",
      verified: "Scholars identify a Syrian monk of the late 5th century writing under an apostolic name",
      note: "Around the end of the 5th century an anonymous Syrian monk wrote under the name of Dionysius: The Divine Names, The Mystical Theology and The Celestial Hierarchy. He said God exceeds every name and every being, so affirmative theology must give way to negative theology, and finally even the name 'God' must be dropped for a 'divine ignorance'. He arranged the angels in nine ranks and described church ritual as an image of the heavenly order. Thomas Aquinas and the whole medieval mystical tradition quoted him constantly.",
      sources: ["Pseudo-Dionysius, The Mystical Theology", "Pseudo-Dionysius, The Celestial Hierarchy", "Lubac, Pseudo-Dionysius"]
    },
    sinai: {
      title: "Sinai: John Climacus and the ladder", place: "Mount Sinai", yearLabel: "c. 600", evidence: "Texts",
      note: "John Climacus lived as a monk on Mount Sinai and wrote The Ladder of Divine Ascent, dividing the path into thirty steps from renunciation of the world to love. He called the monastic life the life of angels, but insisted that every step depends on grace; the highest stage is not visions but love. The book circulated in the Orthodox and Latin churches, and Sinai became a center of pilgrimage and manuscripts.",
      sources: ["John Climacus, The Ladder of Divine Ascent", "Sinai manuscripts", "Byzantine monastic tradition"]
    },
    clairvaux: {
      title: "Clairvaux: Bernard and the order of love", place: "Clairvaux", yearLabel: "c. 1150", evidence: "Texts",
      note: "In the 12th century Bernard founded the abbey of Clairvaux and wrote On Loving God and the Sermons on the Song of Songs. He described four stages of love: loving God for one's own sake, loving God for God's sake, loving oneself for God's sake, and finally loving oneself only for God. This was not abstract theory but the daily experience of the cloister: humility, obedience, tears and peace. The Cistercian reform put love back at the center of monastic life.",
      sources: ["Bernard, On Loving God", "Bernard, Sermons on the Song of Songs", "Bernard's biographies"]
    },
    cologne1300: {
      title: "Cologne: Eckhart and the spark of the soul", place: "Cologne", yearLabel: "c. 1300", evidence: "Texts",
      claimed: "Eckhart is a heretic",
      verified: "Some propositions were condemned after his death, but he was not formally condemned in his lifetime; scholars still debate his orthodoxy",
      note: "Eckhart (c. 1260-1328) preached in Cologne and distinguished the Godhead from God: the Godhead is an abyss beyond persons, and in the soul there is a spark of the same nature. He taught Gelassenheit, the letting-go by which a person empties the self and lets God be born in the soul. His teaching was examined by the church and some propositions were condemned after his death, but Tauler, Suso and later German mysticism inherited him.",
      sources: ["Eckhart, German Sermons", "Eckhart, Latin Works", "McGinn, Eckhart"]
    },
    norwich: {
      title: "Norwich: Julian and divine love", place: "Norwich", yearLabel: "1373", evidence: "Texts",
      note: "In 1373 Julian, gravely ill, received a series of visions and later wrote Revelations of Divine Love. She saw a small thing like a hazelnut and was told that it was the whole world, held in God's hand; she also said that God does all things well. Her theology does not avoid sin and suffering, but insists that love is the final answer. She is one of the most important women mystics of the Middle Ages.",
      sources: ["Julian of Norwich, Revelations of Divine Love", "The Norwich manuscript", "Modern studies"]
    },
    avila: {
      title: "Ávila: Teresa and the interior castle", place: "Ávila", yearLabel: "c. 1560", evidence: "Texts",
      note: "Teresa (1515-1582) reformed the Carmelite order at Ávila and wrote The Interior Castle and her Life. She compared the soul to a castle with seven mansions, the deeper ones bringing the soul closer to God, and taught that mental prayer is not thinking more but loving more. She knew mystical favor and also dryness and doubt. Her books put women's experience into theology, and she was later named a Doctor of the Church.",
      sources: ["Teresa, The Interior Castle", "Teresa, Life", "Teresa, The Way of Perfection"]
    },
    loyola: {
      title: "Loyola: Ignatius and imaginative prayer", place: "Loyola", yearLabel: "c. 1550", evidence: "Texts",
      note: "After being wounded, Ignatius (1491-1556) read the lives of the saints and wrote the Spiritual Exercises. He taught people to enter the Gospel scenes with imagination, seeing, hearing and smelling, so that the story becomes their own experience; he also taught the discernment of spirits, reading whether an inner movement comes from consolation or desolation. The Jesuits carried the method around the world, and it became a foundation of modern spiritual direction and retreats.",
      sources: ["Ignatius, The Spiritual Exercises", "Ignatius, Autobiography", "Jesuit archives"]
    },
    paris1700: {
      title: "Paris: Madame Guyon and Quietism", place: "Paris", yearLabel: "c. 1700", evidence: "Texts",
      claimed: "Madame Guyon is a heretic",
      verified: "Her books were banned and Quietism was condemned, but she was not formally excommunicated; her reputation remains disputed",
      note: "At the end of the 17th century Madame Guyon spread 'pure love' and 'quiet' in France: a person should surrender salvation, merit and even spiritual consolation, and love God alone. Her books influenced Fénelon and provoked Bossuet and the church. In 1699 her works were banned and Quietism was condemned as heresy. The 'selfless love' she described kept echoing through Western mysticism.",
      sources: ["Madame Guyon, A Short and Easy Method of Prayer", "Madame Guyon, Autobiography", "Fénelon, Maxims of the Saints"]
    },
    london1911: {
      title: "London: Underhill and the modern study of mysticism", place: "London", yearLabel: "1911", evidence: "Texts",
      note: "Evelyn Underhill (1875-1941) wrote Mysticism in London in 1911, dividing Christian mysticism into the path of purgation and the state of union, and placing it alongside psychology and comparative religion. She did not want to reduce mysticism to psychology; she wanted to show that it is an experience that can be studied. Her book brought mysticism into English university classrooms and influenced later spiritual movements.",
      sources: ["Underhill, Mysticism", "Underhill, The Spiritual Life", "Modern studies"]
    },
    newgrange: {
      title: "Newgrange: the winter solstice and the passage tomb", place: "Boyne Valley (Ireland)", yearLabel: "c. 3000 BCE", evidence: "Archaeology",
      note: "Newgrange was built around 3200 BCE, earlier than the pyramids. At dawn on the winter solstice the sun enters through an opening above the doorway and travels down the passage to the chamber for about seventeen minutes. This is not decoration; it ties the shortest day of the year to the house of the dead. Light returns, and the ancestors remain. The Neolithic people of Ireland had no writing, but they carved spirals, lozenges and sun symbols on the stones.",
      sources: ["Newgrange excavation reports", "O'Kelly, Newgrange", "Irish heritage archive"]
    },
    stonehenge: {
      title: "Stonehenge: solstice alignment", place: "Salisbury Plain", yearLabel: "c. 2500 BCE", evidence: "Archaeology",
      claimed: "Druids performed ancient rituals at Stonehenge",
      verified: "There is no evidence that Iron Age druids used Stonehenge; modern Druid rituals began in the 18th century",
      note: "Stonehenge was built in stages between about 3000 and 2000 BCE. The summer solstice sunrise and the winter solstice sunset align with the central avenue and the axis of the stones. The bluestones were dragged from the Preseli hills in Wales, and some weigh several tons. It may have been a cemetery, an observatory, a pilgrimage site, or all three. Modern Druids and New Age groups celebrate the solstice here, but their rituals are a 20th-century invention, not an unbroken survival.",
      sources: ["English Heritage archive", "Parker Pearson, Stonehenge", "Archaeoastronomy studies"]
    },
    anglesey: {
      title: "Anglesey: the Celtic druids", place: "Anglesey (Wales)", yearLabel: "c. 300 BCE", evidence: "Texts · Archaeology",
      claimed: "Druids were white-robed priests who cut mistletoe with a golden sickle",
      verified: "That is the picture in Pliny and other Roman writers, full of exotic detail; archaeology cannot confirm it directly",
      note: "Roman writers called the Celtic priests druids and said they handled sacrifice, law, medicine and astronomy, teaching orally and writing nothing down. Tacitus records that in 60 CE the Roman army attacked Anglesey and destroyed the druids' sacred groves. Archaeology has found no 'druid temple', but it has found weapons, skulls and ritual deposits. The druid image comes half from classical prejudice and half from medieval Irish and Welsh literature.",
      sources: ["Tacitus, Annals", "Caesar, Gallic War", "The Cattle Raid of Cooley"]
    },
    uppsala: {
      title: "Uppsala: the Norse gods and the temple", place: "Uppsala (Sweden)", yearLabel: "c. 800", evidence: "Texts · Archaeology",
      claimed: "The temple at Uppsala sacrificed humans every year",
      verified: "The main source is Adam of Bremen's second-hand account; archaeology has no direct proof, though scattered traces of human sacrifice exist in the Norse world",
      note: "Adam of Bremen wrote in the 11th century that Uppsala had a golden temple to Thor, Odin and Freyja, with a great sacrifice every nine years that included human victims. Archaeology at Old Uppsala has found many cremation graves and the remains of a great hall, but not the temple. Norse myth survives mainly in the 13th-century Eddas and sagas, written in a Christian age.",
      sources: ["Adam of Bremen, History of the Archbishops of Hamburg", "The Poetic Edda", "The Prose Edda"]
    },
    jelling: {
      title: "Jelling: runes and Christianization", place: "Jelling (Denmark)", yearLabel: "c. 1000", evidence: "Archaeology · Objects",
      claimed: "Runes were originally divination symbols",
      verified: "Runes were mainly a writing system; there are ancient charm inscriptions, but no continuous Norse divination system; modern rune casting is a 20th-century reconstruction",
      note: "The Jelling stones were raised by the 10th-century Danish king Harald Bluetooth. One says that Harald made the Danes Christian; the other shows Christ and a great serpent. Runes were used in the Germanic world for memorials, law and charms, not necessarily for divination. Turning rune stones into a divination tool is mainly a 20th-century occult invention.",
      sources: ["The Jelling stone inscriptions", "National Museum of Denmark", "Handbooks of runology"]
    },
    salem: {
      title: "Salem: witch trials and colonial fear", place: "Salem (Massachusetts)", yearLabel: "1692", evidence: "Texts",
      claimed: "The victims of Salem were real witches",
      verified: "There is no evidence; the trials relied on visions and hearsay, and most victims were ordinary community members",
      note: "In 1692 a group of girls in Salem Village, Massachusetts, accused their neighbors of witchcraft. The trials lasted months; nineteen people were hanged and one was pressed to death. The accusations were entangled with land disputes, family feuds and Puritan fear. The 'witch' was not a survivor of an ancient pagan religion but a criminal image produced by early modern Europe and colonial America. Modern Wicca remembers Salem as a martyr story, but the history is more complicated.",
      sources: ["Salem trial records", "Boynton, Salem Possessed", "Studies of early modern witchcraft"]
    },
    bamberg: {
      title: "Bamberg: the early modern witch hunt", place: "Bamberg (Germany)", yearLabel: "c. 1620", evidence: "Texts",
      claimed: "Witch hunts mainly happened in the Middle Ages",
      verified: "The peak was in the 15th to 17th centuries, especially 1560 to 1630; the Middle Ages saw relatively fewer trials",
      note: "In the 16th and 17th centuries European witch hunting reached its peak. Bamberg burned hundreds of people in the 1620s, including mayors, councillors and wealthy merchants; torture produced confessions that implicated still more people. The witch hunt was not 'medieval darkness' but a product of the early modern state, the Reformation and print. Victims were of both sexes and all ages, though women were the majority.",
      sources: ["Bamberg trial records", "Levack, The Witch-Hunt in Early Modern Europe", "Studies of European witchcraft"]
    },
    essex: {
      title: "Essex: cunning folk and charms", place: "Essex (England)", yearLabel: "c. 1600", evidence: "Texts",
      claimed: "Cunning folk were secret pagans",
      verified: "Most were Christians who attended church; their practice was part of folk religion, not an underground paganism",
      note: "In early modern English villages, cunning folk used herbs, charms, divination and ritual to find lost objects, heal the sick and undo spells. They were not Satanists, and many went to church. The church saw them as competitors, but ordinary people depended on them. Witch trials usually targeted poor women accused by neighbors, not these professional healers.",
      sources: ["Early modern English church court records", "Thomas, Religion and the Decline of Magic", "Studies of folk medicine"]
    },
    highcliffe: {
      title: "Highcliffe: Gardner and modern Wicca", place: "Highcliffe (England)", yearLabel: "1954", evidence: "Texts",
      claimed: "Wicca is the direct descendant of an ancient witch religion",
      verified: "Scholars see Wicca as a mid-20th-century synthesis; Gardner's 'ancient lineage' has no independent evidence",
      note: "Gerald Gardner made Wicca public in the 1950s, claiming he had received an ancient secret tradition from the witches of the New Forest. In fact, Wiccan ritual, the wheel of the year, coven structure and the goddess/god framework drew mainly on 20th-century Freemasonry, the Golden Dawn, folklore studies and Gardner's own invention. Witchcraft Today appeared in 1954, just as Britain repealed the Witchcraft Act of 1736.",
      sources: ["Gardner, Witchcraft Today", "Hutton, The Triumph of the Moon", "The British Witchcraft Act (repealed 1951)"]
    },
    brighton: {
      title: "Brighton: Doreen Valiente and the Book of Shadows", place: "Brighton", yearLabel: "c. 1960", evidence: "Texts",
      claimed: "The Book of Shadows is an ancient oral text",
      verified: "The surviving text was compiled and rewritten in the 20th century by Gardner, Valiente and others",
      note: "Doreen Valiente (1922-1999) was one of Wicca's most important ritual authors. She helped Gardner rewrite the Book of Shadows, cutting passages that clearly came from the Golden Dawn and Freemasonry and adding more poetic invocations of the goddess. She later helped found her own tradition. Many Wiccan prayers and festival structures can be traced to her pen.",
      sources: ["Valiente, The Rebirth of Witchcraft", "The Book of Shadows", "Hutton, The Triumph of the Moon"]
    },
    reykjavik: {
      title: "Reykjavik: the Asatru revival", place: "Reykjavik", yearLabel: "1972", evidence: "Texts · Objects",
      claimed: "Asatru is the direct continuation of ancient Norse religion",
      verified: "It is a 20th-century revival, and its rituals and theology were reconstructed",
      note: "In 1972 the Icelandic poet Sveinbjorn Beinteinsson founded the Asatruarfelagid, bringing the Norse gods back into public life. It is not a continuous survival of the old religion but a product of modern nationalism and Romanticism; the fellowship conducts weddings, funerals and naming ceremonies and is recognized by the state. Today's heathenry has many branches, some focused on myth, some on folklore, and some entangled with far-right politics.",
      sources: ["Asatruarfelagid archives", "Icelandic state church register", "Studies of modern paganism"]
    },
    glastonbury: {
      title: "Glastonbury: ley lines and the New Age", place: "Glastonbury", yearLabel: "c. 1970", evidence: "Texts · Objects",
      claimed: "Glastonbury was the center of ancient druids and the Holy Grail",
      verified: "The Grail and Arthurian legends are late, ley lines have no scientific evidence, and the modern spiritual meaning is a 20th-century construction",
      note: "In the 20th century Glastonbury became a center of British alternative spirituality: the Grail legend, King Arthur, ley lines, Stonehenge, hippies and music festivals all became entangled. Dion Fortune and later groups called it Avalon and treated ley lines as ancient energy paths. Archaeology and geology do not support ley lines, but Glastonbury's pull is real: it puts landscape, myth and modern spirituality in one place.",
      sources: ["Glastonbury archaeology", "Hutton, Pagan Britain", "Critiques of ley line research"]
    },
    indus: {
      title: "Indus: seals and seated figures", place: "Mohenjo-daro", yearLabel: "c. 2500 BCE", evidence: "Archaeology · Objects",
      claimed: "The 'lord of beasts' on an Indus seal is the later Shiva and the origin of yoga",
      verified: "The seal shows a seated figure with a horned headdress; it cannot prove Shiva or yoga, and the Indus script is still undeciphered",
      note: "The Indus civilization built Mohenjo-daro and Harappa between about 2600 and 1900 BCE, with drains, standard bricks and seals. One seal shows a seated figure with a horned headdress. Early scholars called it the 'lord of beasts' and later readers treated it as evidence of Shiva and yoga. The interpretation is famous but thin: the script is unread, and we do not know what the people called the figure.",
      sources: ["Mohenjo-daro excavation reports", "Catalogue of Indus seals", "Possehl, The Indus Civilization"]
    },
    vedic: {
      title: "Vedic: fire sacrifice and soma", place: "Punjab · upper Ganges", yearLabel: "c. 1500 BCE", evidence: "Texts · Oral tradition",
      note: "The Rigveda is the oldest Indian poetry collection, formed around 1500 to 1200 BCE and preserved orally by priestly families for millennia. Sacrifice centered on fire (Agni) and soma: fire carried offerings to the gods, and soma gave humans and gods the same intoxication. The cosmic order was rita, which later became dharma. 'Yoga' at this stage did not mean posture; it meant yoking or connecting.",
      sources: ["The Rigveda", "The Samaveda", "Olivelle, Early Vedic Religion"]
    },
    upanishads: {
      title: "Upanishads: the self and the absolute", place: "Varanasi · Ganges valley", yearLabel: "c. 800 BCE", evidence: "Texts",
      note: "Between about 800 and 400 BCE, forest teachers and students turned Vedic sacrifice into inner questions: Who am I? Where does the world come from? The Brihadaranyaka Upanishad says 'I am Brahman'; the Chandogya says 'you are that'. The method is negation: 'not this, not that' (neti neti). Rebirth and karma take shape here, and later yoga, Vedanta and Buddhism all draw on this material.",
      sources: ["Brihadaranyaka Upanishad", "Chandogya Upanishad", "Taittiriya Upanishad"]
    },
    gita: {
      title: "Bhagavad Gita: three yogas", place: "Kurukshetra", yearLabel: "c. 200 BCE", evidence: "Texts",
      note: "The Bhagavad Gita is embedded in the Mahabharata. Arjuna collapses before battle, and Krishna tells him to act without clinging to results (karma yoga), to see the self through knowledge (jnana yoga), and to surrender to God through love (bhakti yoga). The poem puts three paths into one dialogue and became the most popular devotional text of Hinduism. Gandhi, Tilak and modern yoga teachers all read it, each in a different way.",
      sources: ["The Bhagavad Gita", "The Mahabharata", "Malinar, The Bhagavad Gita"]
    },
    patanjali: {
      title: "Patanjali: the eight limbs and stilling the mind", place: "Pataliputra", yearLabel: "c. 200 CE", evidence: "Texts",
      claimed: "The Yoga Sutras are the modern gym practice of postures",
      verified: "The sutras ask only for a steady, comfortable seat; modern postural yoga is a later mix of hatha, gymnastics and military training",
      note: "Patanjali (c. 2nd to 4th century CE) organized earlier practice into the Yoga Sutras: the goal is stilling the movements of the mind, and the method has eight limbs, from ethics and discipline through posture, breath, withdrawal, concentration, meditation and absorption. His philosophy is dualist: purusha, pure consciousness, is separate from prakriti, nature. The 'posture' in the sutras is simply a stable seat, not the hundreds of modern poses.",
      sources: ["Patanjali, Yoga Sutras", "Vyasa, Commentary on the Yoga Sutras", "Bryant, The Yoga Sutras of Patanjali"]
    },
    ujjain: {
      title: "Ujjain: Indian astrology and the nine planets", place: "Ujjain", yearLabel: "c. 500", evidence: "Texts · Objects",
      note: "Ujjain was a meridian and astrological center. In the 5th and 6th centuries Indian astronomers combined the Greek zodiac and planetary theory with the local 27 lunar mansions and the nine planets (navagraha), forming the astrology known as jyotisha. The Surya Siddhanta and related texts made eclipses and planetary positions calculable. Astrology was not a marginal superstition; it shaped religious time, marriage and temple layout.",
      sources: ["Surya Siddhanta", "Vedanga Jyotisha", "Studies of Indian astrology"]
    },
    srinagar: {
      title: "Srinagar: Kashmir Shaivism", place: "Srinagar (Kashmir)", yearLabel: "c. 1000", evidence: "Texts",
      note: "Kashmir Shaivism taught that Shiva is consciousness itself and that the world is its self-manifestation. Abhinavagupta (c. 950-1016) wrote the Tantraloka, systematizing ritual, mandala, mantra, aesthetics and Vedanta. He taught recognition (pratyabhijna): you do not become Shiva, you recognize that you already are. Kundalini, chakras and mantra were theorized in this tradition.",
      sources: ["Abhinavagupta, Tantraloka", "The Shiva Sutras", "Sanderson, Kashmir Shaivism"]
    },
    gorakhpur: {
      title: "Gorakhpur: hatha yoga and the Nath order", place: "Gorakhpur", yearLabel: "c. 1200", evidence: "Texts · Oral tradition",
      note: "Gorakhnath (c. 11th to 12th century) is honored as the founder of the Nath order. Hatha yoga treated the body as a tool: postures, breath retention, locks, seals, and the goal of raising kundalini through the central channel. The Hatha Yoga Pradipika of the 15th century systematized the techniques, stressing purification, diet and a guru. It overlapped with Buddhist tantra, Shaivism and folk magic.",
      sources: ["Hatha Yoga Pradipika", "Nath oral tradition", "Mallinson, Hatha Yoga"]
    },
    rishikesh: {
      title: "Rishikesh: Sivananda and modern yoga", place: "Rishikesh", yearLabel: "c. 1920", evidence: "Texts",
      note: "Swami Sivananda (1887-1963) founded the Divine Life Society at Rishikesh and divided yoga into four paths: action, knowledge, devotion and royal yoga. He sent students to the West and packaged postures, breathing, vegetarianism and meditation as a 'yoga lifestyle'. In 1893 Vivekananda had become famous at the Chicago Parliament of Religions, and Indian yoga entered the English-speaking world on a large scale. Rishikesh became a center of pilgrimage and teacher training.",
      sources: ["Sivananda, Yoga Practice", "Vivekananda, Chicago Addresses", "Strauss, Positioning Yoga"]
    },
    mysore: {
      title: "Mysore: Krishnamacharya and modern postural yoga", place: "Mysore", yearLabel: "c. 1930", evidence: "Texts · Oral tradition",
      note: "Tirumalai Krishnamacharya (1888-1989) taught yoga at the Mysore palace, mixing traditional postures, breath, Indian wrestling, gymnastics and British military training into flowing sequences. His students Iyengar, Pattabhi Jois and Desikachar carried different versions to the West. The most common modern styles, Ashtanga, Iyengar and vinyasa, all trace back to him and to 20th-century body culture.",
      sources: ["Krishnamacharya, The Heart of Yoga", "Iyengar, Light on Yoga", "Singleton, The Body of Yoga"]
    },
    varanasi2000: {
      title: "Varanasi: global yoga and the pilgrimage economy", place: "Varanasi", yearLabel: "c. 2000", evidence: "Texts · Objects",
      note: "By the late 20th century yoga had become a global industry: gyms, teacher trainings, clothing, retreats and social media. Varanasi and Rishikesh host large numbers of foreign students, and the cremation grounds, priests and ascetics by the Ganges become the backdrop of 'spiritual tourism'. Indians argue over whether yoga is Hindu practice or a universal health technique. In 2015 the United Nations made 21 June the International Day of Yoga, and the argument continues.",
      sources: ["UN resolution on the International Day of Yoga (2015)", "Singleton, The Body of Yoga", "Studies of Indian pilgrimage tourism"]
    },
    nalanda: {
      title: "Nalanda: highest yoga tantra and the monastic university", place: "Nalanda (India)", yearLabel: "c. 700", evidence: "Texts · Archaeology",
      note: "In the 7th century Nalanda was the largest Buddhist university in India and a center of tantra. The highest yoga tantras were systematized there, with deity systems such as Chakrasamvara, Guhyasamaja and Yamantaka, together with initiation, mandala, mantra and visualization. 'Secret' did not mean hidden in a corner; it meant a fast path taken after vows and initiation. The monastery preserved a vast ritual and artistic literature. Turkic armies destroyed it at the end of the 12th century, and monks and manuscripts fled to Tibet and Nepal.",
      sources: ["Nalanda excavation reports", "Tibetan Buddhist canon", "Davidson, Indian Esoteric Buddhism"]
    },
    swat: {
      title: "Swat: Padmasambhava and Uddiyana", place: "Swat (Uddiyana)", yearLabel: "c. 800", evidence: "Texts · Archaeology",
      claimed: "Padmasambhava entered Tibet in the 8th century and subdued its spirits",
      verified: "The tradition says so, but the biographies and treasure texts about him are later, and history and legend are layered",
      note: "Padmasambhava is honored in Tibetan Buddhism as the 'second Buddha'. Tradition says he was born in Uddiyana, today's Swat, and brought tantra to Tibet in the 8th century. His biographies are full of miracles and subjugated spirits, and the historical details are hard to verify. But Uddiyana was indeed a center of tantra in the northwest, and the name Padmasambhava is bound up with a whole tradition of hidden treasure texts.",
      sources: ["Life of Padmasambhava", "Treasure texts", "Swat archaeology"]
    },
    samye: {
      title: "Samye: Tibet's first monastery", place: "Samye (north bank of the Yarlung Tsangpo)", yearLabel: "c. 800", evidence: "Texts · Archaeology",
      note: "Around 779 the Tibetan king Trisong Detsen founded Samye, with Shantarakshita and Padmasambhava presiding. It was the first monastery in Tibet to have Buddha, teaching and community together, and its architecture mixed Indian, Chinese and Tibetan styles. The translation college at Samye turned Sanskrit and Chinese scriptures into Tibetan, and the Nyingma tantric and treasure traditions began here.",
      sources: ["Samye monastery history", "The Testament of Ba", "Tibetan Buddhist canon"]
    },
    lhasa850: {
      title: "Lhasa: the Tibetan empire and translation", place: "Lhasa", yearLabel: "c. 850", evidence: "Texts",
      note: "In the 8th and 9th centuries the Tibetan empire made Buddhism the state religion, and Lhasa became a center of translation and tantric ritual. King Tri Ralpachen pushed the translation of scriptures and standardized terminology. In 842 Langdarma persecuted Buddhism, monasteries were destroyed and monks forced to return to lay life. The 'first diffusion' of Buddhism in Tibet ended, and tantric lineages went underground and into families.",
      sources: ["The Testament of Ba", "The Blue Annals", "Tibetan historical records"]
    },
    toling: {
      title: "Toling: Atisha and the stages of the path", place: "Toling (Ngari)", yearLabel: "c. 1050", evidence: "Texts",
      note: "At the end of the 10th century King Yeshe Ö of Guge founded Toling, sent Rinchen Zangpo to study in India, and invited Atisha to Tibet. Atisha (982-1054) wrote the Lamp for the Path to Enlightenment, arranging vows, sutra and tantra into stages and founding the Kadam school. The 'later diffusion' of translation and monastic reform began here, and the scholarly system of Tibetan Buddhism was rebuilt.",
      sources: ["Atisha, Lamp for the Path to Enlightenment", "The Blue Annals", "Tibetan Buddhist canon"]
    },
    sakya: {
      title: "Sakya: the path and its fruit, and Sakya Pandita", place: "Sakya (Tsang)", yearLabel: "1073", evidence: "Texts · Objects",
      note: "In 1073 the Khön family founded Sakya monastery and the Sakya school. The 'path and its fruit' (Lamdre) divides tantric practice into path and result and stresses the guru, initiation and the deity. In the 13th century Sakya Pandita (1182-1251) and his nephew Phagpa allied with the Mongols, and the Sakya school became the imperial Buddhism of the Yuan dynasty. Phagpa created the Mongolian script for Kublai Khan.",
      sources: ["Sakya Genealogy", "Collected Works of Phagpa", "Lamdre texts"]
    },
    dvagpo: {
      title: "Dagpo: Kagyu and Mahamudra", place: "Dagpo (southern Tibet)", yearLabel: "c. 1120", evidence: "Texts",
      note: "The Kagyu lineage passed from Marpa and Milarepa to Gampopa (1079-1153), who founded a monastery at Dagpo. Mahamudra points directly at the nature of mind and does not depend on elaborate ritual; the 'four great and eight lesser' Kagyu branches later spread across Tibet. Milarepa's songs and ascetic life became one of the most popular biographies in Tibetan Buddhism.",
      sources: ["Milarepa, The Hundred Thousand Songs", "Gampopa, Jewel Ornament of Liberation", "Kagyu histories"]
    },
    lhasa1409: {
      title: "Lhasa: Tsongkhapa and the Gelug", place: "Lhasa", yearLabel: "1409", evidence: "Texts · Objects",
      note: "In 1409 Tsongkhapa (1357-1419) founded the Great Prayer Festival in Lhasa and established Ganden monastery, and the Gelug school took shape. He stressed monastic discipline, a firm base in sutra and step-by-step practice, placing tantra strictly after sutra. The Gelug later became the largest school in Tibet, and both the Dalai and Panchen reincarnation lines come from it.",
      sources: ["Tsongkhapa, Great Treatise on the Stages of the Path", "History of Tibetan Buddhism", "Ganden monastery records"]
    },
    karakorum: {
      title: "Karakorum: the Mongol court and Tibetan Buddhism", place: "Karakorum (Mongolia)", yearLabel: "c. 1250", evidence: "Texts · Archaeology",
      note: "In 1247 Sakya Pandita met the Mongol prince Köten at Liangzhou, and Tibet entered the political framework of the Mongol empire. After Kublai Khan took the throne, Phagpa became imperial preceptor, and Tibetan Buddhism entered the Yuan court. Karakorum, the early Mongol capital, was a religious marketplace where Tibetan Buddhism, Islam and Christianity coexisted.",
      sources: ["Sakya Genealogy", "History of the Yuan", "Collected Works of Phagpa"]
    },
    koyasan: {
      title: "Koyasan: Kukai and Shingon", place: "Koyasan (Japan)", yearLabel: "c. 900", evidence: "Texts · Objects",
      note: "In 804 Kukai (774-835) traveled to Chang'an with a Japanese embassy, studied tantra under Huiguo, and on his return founded Kongobuji on Mount Koya and the Shingon school. Shingon uses mandala, mudra, mantra and visualization and teaches that buddhahood can be realized in this very body. Kukai also built reservoirs and schools and is one of the major figures of Japanese cultural history.",
      sources: ["Kukai, The Meaning of the Three Teachings", "Kukai, Collected Poems", "Koyasan archives"]
    },
    beijing: {
      title: "Beijing: Tibetan Buddhism at the Qing court", place: "Beijing", yearLabel: "c. 1700", evidence: "Texts · Objects",
      note: "In the 17th and 18th centuries the Qing emperors used Tibetan Buddhism to govern Mongolia and Tibet. Kangxi, Yongzheng and Qianlong built lamaseries in Beijing and invited Tibetan and Mongol monks to perform rituals; Qianlong converted the Yonghegong into a Tibetan Buddhist temple. Thangkas, ritual objects, mandalas and Tibetan scriptures in the palace show that Tibetan Buddhism had entered the center of the empire.",
      sources: ["Yonghegong archives", "Qing court Tibetan Buddhist objects", "Draft History of the Qing"]
    },
    dharamsala: {
      title: "Dharamsala: exile and global transmission", place: "Dharamsala (India)", yearLabel: "1959", evidence: "Texts",
      note: "In 1959 the 14th Dalai Lama and tens of thousands of Tibetans fled to India and established a government and monasteries in Dharamsala. The four major schools, the geshe curriculum, debate and tantric colleges were rebuilt in exile; Western disciples and hippies came to Dharamsala, and Tibetan Buddhism entered the global scene.",
      sources: ["Dalai Lama, Freedom in Exile", "Tibetan exile archives", "Studies of Tibetan Buddhism"]
    },
    newyork1970: {
      title: "New York: Tibetan Buddhism goes west", place: "New York", yearLabel: "c. 1970", evidence: "Texts",
      note: "In the 1970s Tibetan Buddhism reached America. Chögyam Trungpa founded Shambhala centers in Colorado, and Sogyal Rinpoche, Kalu Rinpoche and others built centers in Europe and America; meditation, debate and tantric courses entered English. 'Mindfulness' was later stripped of its religious context and entered hospitals and companies, but its root is still Buddhist meditation.",
      sources: ["Trungpa, Cutting Through Spiritual Materialism", "Sogyal Rinpoche, The Tibetan Book of Living and Dying", "Studies of American Tibetan Buddhism"]
    },
    anyang: {
      title: "Anyang: oracle bone divination", place: "Yinxu (Anyang)", yearLabel: "c. 1200 BCE", evidence: "Archaeology · Objects",
      note: "Shang kings at Anyang divined with turtle shells and ox scapulae: they drilled and burned them, read the cracks, and carved the question and answer beside them. They asked about harvests, war, illness, sacrifice and the king's dreams. Divination is not the origin of Daoism, but it is the substrate of later fangshu: humans can communicate with unseen powers, and the exchange has rules, costs and taboos. Oracle bone script is also the earliest mature writing system in China.",
      sources: ["Yinxu oracle bone inscriptions", "Records of the Grand Historian, Annals of Yin", "Handbooks of oracle bone studies"]
    },
    luoyang: {
      title: "Luoyang: Laozi and the Daodejing", place: "Luoyang", yearLabel: "c. 500 BCE", evidence: "Texts",
      claimed: "Laozi was Confucius's teacher and the founder of Daoism",
      verified: "The Daodejing is a collection of sayings compiled in the Warring States period; Laozi's historical identity is unclear, and his deification came later",
      note: "The Daodejing is only about five thousand characters. It says the Dao cannot be named, that de is its manifestation, and that wuwei is not doing nothing but not forcing. It teaches cyclical return and the strategy of softness over hardness. The author, date and unity of the text are still debated, but it became a shared classic of Daoism, political thought and Chinese art.",
      sources: ["Daodejing", "Records of the Grand Historian, Laozi and Han Fei", "Liu Xiaogan, Laozi studies"]
    },
    linzi: {
      title: "Linzi: yin-yang and the five phases", place: "Linzi (Qi)", yearLabel: "c. 300 BCE", evidence: "Texts",
      note: "In the Warring States period the Jixia academy in Qi gathered scholars from many schools. Zou Yan combined yin-yang with the five phases into a cosmic political theory: dynasties rise and fall according to the transfer of the five powers, and sky, color, direction and season resonate with one another. This framework later entered medicine, feng shui, astrology, alchemy and martial arts. It was the operating system of traditional Chinese cosmology, not just superstition.",
      sources: ["Records of the Grand Historian, Mencius and Xunzi", "Lüshi Chunqiu", "Studies of yin-yang and the five phases"]
    },
    xianyang: {
      title: "Xianyang: fangshi and the elixir of life", place: "Xianyang (Qin)", yearLabel: "c. 200 BCE", evidence: "Texts · Archaeology",
      note: "After Qin Shi Huang unified China, fangshi told him that the islands of Penglai, Fangzhang and Yingzhou held an elixir of immortality. He sent Xu Fu to sea with boys and girls, toured the coast repeatedly, and died on the road. Han fangshi continued to make gold, take substances, practice breathing and sexual arts, and perform sacrifices; Daoism later absorbed these techniques. The fangshi were not yet Daoist priests, but they were their predecessors.",
      sources: ["Records of the Grand Historian, Annals of Qin Shi Huang", "Book of Han, Sacrifices", "Li Ling, Chinese Fangshu"]
    },
    heming: {
      title: "Heming: the Celestial Masters", place: "Heming Mountain (Sichuan)", yearLabel: "c. 142", evidence: "Texts · Oral tradition",
      claimed: "Zhang Daoling saw the Most High Lord Lao at Heming Mountain and received sword, seal and scriptures",
      verified: "That is the internal Daoist narrative; sources only confirm that a Celestial Masters movement appeared in Sichuan in the late Eastern Han",
      note: "In the late Eastern Han, Zhang Daoling founded the Celestial Masters (Five Pecks of Rice) movement in Sichuan. It set up twenty-four parishes, healed through talisman water and confession, and used the 'three officials' to record sins. Followers paid five pecks of rice, confessed faults and gathered regularly. It turned the Dao of Laozi into an organized religion with rituals, clergy and community. Zhang Daoling became the first heavenly master, and Heming Mountain became its ancestral site.",
      sources: ["Records of the Three Kingdoms, Biography of Zhang Lu", "Book of the Later Han, Liu Yan", "Yunji Qiqian"]
    },
    jurong: {
      title: "Jurong: Ge Hong and the Baopuzi", place: "Jurong (Jiangsu)", yearLabel: "c. 320", evidence: "Texts",
      note: "Ge Hong (283-343) came from a southern gentry family and wrote the Inner Chapters of the Baopuzi, combining alchemy, diet, breathing, talismans and Confucian ethics. He called gold elixir the highest medicine: gold survives fire without changing, so eating it could make the body endure. He also recorded herbs, minerals and medical recipes. External alchemy later declined because of poisoning and cost, but Ge Hong's experiments are important for the history of Chinese chemistry.",
      sources: ["Ge Hong, Baopuzi, Inner Chapters", "Ge Hong, Emergency Prescriptions", "Book of Jin, Biography of Ge Hong"]
    },
    maoshan: {
      title: "Maoshan: the Shangqing revelations", place: "Maoshan (Jiangsu)", yearLabel: "c. 365", evidence: "Texts",
      note: "In the Xingning era of the Eastern Jin (364-370), Yang Xi claimed that immortals such as Wei Huacun revealed scriptures to him at Maoshan, and he wrote them down as the Shangqing canon. Shangqing practice uses 'visualization': the adept imagines gods, sun, moon and stars inside the body and gradually ascends through higher heavens. It is not mere philosophy but a detailed visual technology. Maoshan later became a major center of Shangqing and Zhengyi Daoism.",
      sources: ["Shangqing Dadong Zhenjing", "Zhengao", "Robinet, Shangqing Daoism"]
    },
    shaolin: {
      title: "Shaolin: Chan and daoyin", place: "Shaolin Monastery (Henan)", yearLabel: "c. 500", evidence: "Texts · Objects",
      claimed: "Bodhidharma sat facing a wall at Shaolin for nine years and created Shaolin kung fu and the Yijinjing",
      verified: "Bodhidharma's wall-gazing is a Chan legend; Shaolin martial arts were systematized much later, and the Yijinjing appeared in the 17th century",
      note: "Shaolin Monastery was founded in 495, and in the 6th century Bodhidharma was claimed as the first Chan patriarch in China, but 'Bodhidharma created the fists' is a later legend. The monastery prospered in the Tang after helping Li Shimin, and monk soldiers and martial arts developed into a system in the Ming and Qing. Daoyin, breathing, standing and boxing borrowed from one another, producing the idea of 'Chan and martial arts as one'. Today Shaolin kung fu is religion, performance and industry at once.",
      sources: ["Further Biographies of Eminent Monks", "Shaolin Monastery Gazetteer", "Studies of Shaolin martial arts"]
    },
    wudang: {
      title: "Wudang: internal alchemy and the Zhang Sanfeng legend", place: "Wudang Mountains (Hubei)", yearLabel: "c. 1200", evidence: "Texts · Objects",
      claimed: "Zhang Sanfeng created taijiquan at Wudang and founded the internal martial arts",
      verified: "Zhang Sanfeng is a Yuan-Ming legendary Daoist; taiji manuals and lineages took shape in the 17th to 19th centuries, and there is no reliable evidence linking him directly to taijiquan",
      note: "The Ming court honored Wudang as the 'Great Peak' and the Yongle emperor rebuilt its palaces, making the cult of Zhenwu a state sacrifice. Internal alchemists treated Wudang as a sacred site, and Zhang Sanfeng's legend grew in the Ming and Qing. Taijiquan, xingyiquan and baguazhang were later grouped as 'internal' martial arts and attached to Wudang. There was real internal alchemy and real martial arts, but 'Zhang Sanfeng created the boxing' is a layered legend.",
      sources: ["Taihe Mountain Gazetteer", "History of the Ming, Techniques and Arts", "Studies of taijiquan origins"]
    },
    beijing1445: {
      title: "Beijing: the Daoist canon", place: "Beijing", yearLabel: "1445", evidence: "Texts · Objects",
      note: "In 1445, the tenth year of the Zhengtong era, the Zhengtong Daozang was printed: more than 1,400 titles and 5,300 fascicles, arranged in the Three Caverns and Four Supplements. It collected scriptures, liturgy, talismans, alchemy, biographies and mountain gazetteers, the largest Daoist collection ever made. The Wanli emperor later added a supplement. Without this canon, many medieval Daoist texts would be lost today.",
      sources: ["Zhengtong Daozang", "Xu Daozang", "Descriptive catalogue of the Daoist canon"]
    },
    beijing1700: {
      title: "Beijing: the Jesuits translate the Dao", place: "Beijing", yearLabel: "c. 1700", evidence: "Texts",
      note: "In the 17th and 18th centuries Jesuits in Beijing read the Daodejing and translated it into Latin and French. They wanted to show that ancient Chinese books contained 'God' and natural law, and some compared the Dao to the Greek Logos. Enlightenment thinkers took up these translations: some used China to criticize Christianity, others to argue for absolute monarchy. The image of 'Eastern wisdom' was partly made by the Jesuits.",
      sources: ["Latin translation of the Daodejing", "Jesuit letters from China", "Mungello, Curious Land"]
    },
    sanfrancisco: {
      title: "San Francisco: qigong and the Dao goes west", place: "San Francisco", yearLabel: "c. 1970", evidence: "Texts · Objects",
      note: "In the 1960s and 1970s the American counterculture brought taijiquan, qigong, acupuncture and the Daodejing into the mainstream. San Francisco, New York and California offered yoga, Zen and Daoist courses, while Chinese immigrants and martial arts teachers taught in Chinatown. 'Dao' was translated as flow, nature or the Way, which opened understanding but also stripped away ritual, precepts and community.",
      sources: ["Studies of the American counterculture", "History of taijiquan in America", "English translations of the Daodejing"]
    },
    izumo: {
      title: "Izumo: Shinto myth and Okuninushi", place: "Izumo (Japan)", yearLabel: "c. 500 BCE", evidence: "Archaeology · Oral tradition",
      claimed: "Izumo Taisha was founded in the 1st millennium BCE and is the oldest shrine in Japan",
      verified: "The present building dates from the 18th century, and archaeology reaches only ancient ritual sites, not a founding date",
      note: "Izumo Taisha honors Okuninushi, who in myth cedes the land to the line of Amaterasu in exchange for a great palace. This is the 'transfer of the land' in the Kojiki and Nihon Shoki, and it is how the Yamato court folded Izumo into its own mythic system. Izumo itself has ancient ritual sites and huge pillar holes, showing that it was a religious center for a long time.",
      sources: ["Kojiki", "Nihon Shoki", "Izumo Taisha excavation reports"]
    },
    ise: {
      title: "Ise: Amaterasu and the imperial ancestress", place: "Ise (Japan)", yearLabel: "c. 700", evidence: "Texts · Archaeology",
      note: "Ise Jingu honors Amaterasu, the sun goddess treated as the ancestor of the imperial house. Every twenty years the shrine holds the shikinen sengu, tearing down the buildings and rebuilding them on an adjacent site, so architecture and ritual preserve a form centuries old. Ise's cult was bound to the imperial institution and was magnified by State Shinto after the Meiji Restoration. It is both an ancient shrine and a modern political construction.",
      sources: ["Kojiki", "Nihon Shoki", "Ise Jingu sengu records"]
    },
    koyasan_jp: {
      title: "Koyasan: Kukai and Shingon tantra", place: "Koyasan (Japan)", yearLabel: "804", evidence: "Texts · Objects",
      note: "In 804 Kukai traveled to Chang'an with a Japanese embassy, studied tantra under Huiguo, and on his return founded Kongobuji on Mount Koya and the Shingon school. Shingon uses mandala, mudra, mantra and visualization and teaches that buddhahood can be realized in this very body. Kukai also built reservoirs and schools and is one of the major figures of Japanese cultural history. The Okunoin cemetery at Koyasan is one of the largest in Japan.",
      sources: ["Kukai, The Meaning of the Three Teachings", "Kukai, Collected Poems", "Koyasan archives"]
    },
    kyoto1000: {
      title: "Kyoto: Onmyodo and Abe no Seimei", place: "Kyoto", yearLabel: "c. 1000", evidence: "Texts · Objects",
      claimed: "Abe no Seimei commanded shikigami and knew everything in advance",
      verified: "Seimei was a real historical figure, but the shikigami and miracle stories come mainly from later legend and literature",
      note: "Heian Kyoto had an Onmyo-ryo, a bureau of yin-yang specialists who used astrolabes, calendars, astrology and spells to judge fortune, exorcise spirits and choose auspicious days. Abe no Seimei (921-1005) was the most famous onmyoji, later turned into a character in fiction, film and anime. Onmyodo mixed Chinese yin-yang and five phases, astronomy and calendrics with Japanese kami worship, and was part of court life.",
      sources: ["Konjaku Monogatari", "Seimei Monogatari", "Studies of Onmyodo"]
    },
    yoshino: {
      title: "Yoshino: Shugendo", place: "Yoshino (Japan)", yearLabel: "c. 1100", evidence: "Texts · Oral tradition",
      note: "Shugendo treats mountains as training grounds. Ascetics (yamabushi) fast, sit under waterfalls, recite spells and walk the peaks, seeking union with the gods and buddhas. En no Gyoja, a 7th-century figure, is honored as the founder, but the system took shape from the Heian to the medieval period. The routes of Yoshino, Kumano and Omine formed a pilgrimage network serving both the court and ordinary people.",
      sources: ["En no Gyoja legends", "Shugendo ritual texts", "Studies of Yoshino-Kumano pilgrimage"]
    },
    kamakura: {
      title: "Kamakura: Zen", place: "Kamakura (Japan)", yearLabel: "c. 1200", evidence: "Texts · Objects",
      note: "In the 12th and 13th centuries Eisai brought Rinzai Zen to Japan and Dogen brought Soto Zen. Zen stresses seated meditation, koans and teacher-disciple certification, and it quickly won the support of the Kamakura shogunate and the warrior class. The five great Zen monasteries of Kamakura were built, and Zen temple culture shaped tea, gardens, calligraphy and martial arts.",
      sources: ["Eisai, Kozen Gokokuron", "Dogen, Shobogenzo", "Records of the Kamakura Five Mountains"]
    },
    seoul1000: {
      title: "Seoul: mudang and Korean shamanism", place: "Seoul (Korea)", yearLabel: "c. 1000", evidence: "Texts · Oral tradition",
      note: "Korean shamanism is led by the mudang, and the ritual is called gut. Through song, dance, divination, spirit possession and offerings, it handles illness, funerals, moving house, fortune and family conflict. The Joseon dynasty made Confucianism the state ideology and suppressed shamanism, but both court and commoners depended on it. Mudang are still active in Seoul today, and shamanism is also presented as Korean traditional culture.",
      sources: ["Annals of the Joseon Dynasty", "Oral tradition of gut", "Studies of Korean shamanism"]
    },
    andong: {
      title: "Andong: feng shui and the Confucian academy", place: "Andong (Korea)", yearLabel: "c. 1100", evidence: "Texts · Objects",
      note: "Korean pungsu, or feng shui, treats mountain shapes, water flow, orientation and ancestral grave sites as one system of fortune and misfortune. Andong's Hahoe village and Dosan Seowon combine geomancy, Confucian ritual and gentry culture. The seowon enshrined worthies, taught students and kept libraries, and was the local center of the scholar-elite; feng shui determined the siting of villages, houses and graves.",
      sources: ["Hahoe village archives", "Dosan Seowon records", "Studies of Korean feng shui"]
    },
    kamakura1253: {
      title: "Kamakura: Nichiren and the Lotus Sutra", place: "Kamakura (Japan)", yearLabel: "1253", evidence: "Texts",
      note: "In 1253 Nichiren declared in Kamakura that the Lotus Sutra was the true teaching for the age of mappo, and that chanting 'Namu Myoho Renge Kyo' could bring buddhahood. He attacked other schools, was persecuted by the shogunate and exiled to Sado. The Nichiren schools later split into many branches, and modern movements such as Soka Gakkai and Rissho Koseikai trace themselves to him. His militancy and martyr image are unusual in Japanese religious history.",
      sources: ["Nichiren, Rissho Ankoku Ron", "Nichiren's letters", "Studies of Nichiren Buddhism"]
    },
    kyoto1500: {
      title: "Kyoto: Yoshida Shinto", place: "Kyoto", yearLabel: "c. 1500", evidence: "Texts",
      note: "Yoshida Kanetomo (1435-1511) founded Yoshida Shinto in Kyoto, also called 'unique Shinto'. He taught that Shinto is the root of all things and that Buddhism and Confucianism flow from it; he organized the genealogy of shrines and made the Yoshida family the authority over Shinto priests nationwide. Yoshida Shinto prepared the theology and organization for State Shinto after the Meiji Restoration.",
      sources: ["Yoshida Kanetomo, Yuiitsu Shinto Myobo Yoshu", "Shinto Taii", "History of Japanese Shinto"]
    },
    okayama: {
      title: "Okayama: Kurozumi-kyo", place: "Okayama (Japan)", yearLabel: "1814", evidence: "Texts · Oral tradition",
      note: "Kurozumi Munetada (1780-1850) founded Kurozumi-kyo in Okayama. After a severe illness and a mystical experience, he believed he was united with Amaterasu and could heal people and teach a practice of 'union with the kami'. Kurozumi-kyo was classified as a Shinto sect in the Meiji period and stressed daily work, gratitude and ancestor veneration. It is an early example of the Japanese 'new religions'.",
      sources: ["Kurozumi Munetada, Kurozumi-kyo scriptures", "Kurozumi-kyo archives", "Studies of Japanese new religions"]
    },
    ayabe: {
      title: "Ayabe: Omoto", place: "Ayabe (Japan)", yearLabel: "c. 1900", evidence: "Texts · Objects",
      note: "In 1892 Deguchi Nao began preaching in Ayabe, and with Deguchi Onisaburo she built the Omoto movement. Omoto mixed Shinto, Buddhism, Christianity and apocalyptic prophecy, stressing the unity of all religions and world peace. The Japanese government suppressed it repeatedly in the 20th century, but it influenced many later new religions and spiritual movements.",
      sources: ["Deguchi Nao, Omoto revelations", "Deguchi Onisaburo, Reikai Monogatari", "Studies of Omoto"]
    },
    ife: {
      title: "Ife: Ifa divination and the city-state", place: "Ile-Ife (Nigeria)", yearLabel: "c. 1000", evidence: "Oral tradition · Archaeology",
      note: "Yoruba creation myth makes Ile-Ife the place where the world began, where Oduduwa descended from heaven and founded kingship. Ifa divination is performed by the babalawo, who casts palm nuts or a divination chain to produce one of 256 odu, each with its own story, offering and taboo. The heads and pottery of Ife show that the city was prosperous by the 11th to 14th centuries. Ifa is not 'tribal superstition'; it is a system of memory, ethics and decision-making.",
      sources: ["Ifa oral tradition", "Ife excavation reports", "Abiodun, Ifa Divination"]
    },
    mbanza: {
      title: "Mbanza Kongo: nkisi and the cosmos", place: "Mbanza Kongo (Angola)", yearLabel: "c. 1600", evidence: "Texts · Objects",
      note: "The Kongo kingdom met the Portuguese at the end of the 15th century, and the court accepted Christianity, but the local cosmology did not disappear. Kongo people used the dikenga cosmogram to map the world of the living, the world of the ancestors and the water between them. An nkisi is an object filled with herbs, minerals and ancestral power, used by the nganga. Christian crosses and saints entered Kongo ritual, producing a two-level religion.",
      sources: ["Kongo kingdom archives", "Studies of nkisi objects", "Thornton, The Kongo Religion"]
    },
    ouidah: {
      title: "Ouidah: Vodun and the Atlantic trade", place: "Ouidah (Benin)", yearLabel: "c. 1700", evidence: "Texts · Oral tradition",
      note: "Ouidah was the port of the kingdom of Dahomey and a major point in the transatlantic slave trade. Its Vodun cult honors a whole pantheon of gods (vodun), communicating through offerings, drums, song, dance and possession. The irony is that the slave trade carried large numbers of West Africans to the Americas and with them Vodun, orisha and ancestor worship. Ouidah's Door of No Return is now a site of memory.",
      sources: ["Ouidah oral tradition", "Dahomey kingdom archives", "Studies of Vodun"]
    },
    elmina: {
      title: "Elmina: the Middle Passage", place: "Elmina (Ghana)", yearLabel: "c. 1800", evidence: "Texts · Objects",
      note: "Elmina Castle was built in 1482 and was one of the earliest European forts in sub-Saharan Africa. It began as a gold trade post and later became a transit point in the slave trade. Captured Africans were held, sorted and shipped across the Atlantic. Religion was not stripped from the body: amulets, herbs, drum patterns and divine names went into the holds and grew again in the Americas.",
      sources: ["Elmina Castle archives", "Trans-Atlantic Slave Trade Database", "History of Ghana"]
    },
    haiti: {
      title: "Haiti: revolution and Vodou", place: "Haiti", yearLabel: "1791", evidence: "Texts · Oral tradition",
      claimed: "The ceremony at Bois Caiman directly launched the Haitian revolution",
      verified: "Bois Caiman is a central memory of the revolution, but the exact date, participants and role are debated, and the revolution had deeper social and economic causes",
      note: "In 1791 a slave uprising broke out in northern Saint-Domingue, and in 1804 Haiti became the first state founded by formerly enslaved Africans. Vodou supplied organization, oath and protection: ritual brought people from different plantations together, and the gods and ancestors gave the rebels legitimacy. The ceremony at Bois Caiman became a founding myth. Colonial powers and churches later demonized Vodou, but it remained the daily religion of Haiti.",
      sources: ["Archives of the Haitian Revolution", "Bois Caiman oral tradition", "Dubois, Haitian Vodou"]
    },
    havana: {
      title: "Havana: Santeria", place: "Havana (Cuba)", yearLabel: "c. 1800", evidence: "Texts · Oral tradition",
      note: "Cuban Santeria, or Lucumi, comes from Yoruba orisha worship. Enslaved people matched orishas to Catholic saints: Shango to Saint Barbara, Oshun to the Virgin of Charity. Cabildos, mutual-aid societies, gave Africans a legal space to gather, and ritual, drumming, divination and initiation survived in a colonial society. Today Santeria has followers in Cuba, the United States and the Dominican Republic.",
      sources: ["Cuban cabildo archives", "Santeria oral tradition", "Brandon, Santeria"]
    },
    salvador: {
      title: "Salvador: Candomble", place: "Salvador (Bahia, Brazil)", yearLabel: "c. 1800", evidence: "Texts · Oral tradition",
      note: "Candomble in Bahia preserved Yoruba, Fon and Bantu deities and rituals. Each terreiro, a ritual house, serves a group of orixas and maintains relations with them through drums, song, dance, offerings and divination. Slavery and Catholicism did not destroy it; it became a center of community organization, resistance and cultural identity.",
      sources: ["Bahia terreiro archives", "Candomble oral tradition", "Bastide, Candomble"]
    },
    neworleans: {
      title: "New Orleans: hoodoo and Voodoo", place: "New Orleans (United States)", yearLabel: "c. 1800", evidence: "Texts · Oral tradition",
      note: "Congo Square in New Orleans was a Sunday gathering place for enslaved people, where drums, dance and African gods appeared in public. In the 19th century Marie Laveau became the most famous Voodoo queen, mixing Catholicism, herbs, charms and community service. Hoodoo is more personal rootwork and charm use, not necessarily a congregation. Today New Orleans Voodoo is both a tourist symbol and a living tradition.",
      sources: ["Congo Square archives", "Legends of Marie Laveau", "Studies of hoodoo"]
    },
    lagos: {
      title: "Lagos: the Aladura independent churches", place: "Lagos (Nigeria)", yearLabel: "c. 1900", evidence: "Texts · Oral tradition",
      note: "In the early 20th century a group of Aladura ('prayer people') churches appeared in Nigeria, stressing healing, prophecy, dreams and direct experience of the Holy Spirit. They broke away from Anglican and colonial churches because African believers were dissatisfied with their forms. Aladura combined Christianity with Yoruba traditions of healing and prophecy and became part of the African independent church movement.",
      sources: ["Aladura church archives", "History of Nigerian Christianity", "Studies of African independent churches"]
    },
    kingston: {
      title: "Kingston: Rastafari", place: "Kingston (Jamaica)", yearLabel: "c. 1930", evidence: "Texts · Oral tradition",
      note: "In the 1930s the Rastafari movement appeared in Jamaica, treating the Ethiopian emperor Haile Selassie I as the Messiah and calling Western institutions and colonialism 'Babylon'. It stressed repatriation to Africa, ital diet, ganja and reggae music. It is not 'magic' in the traditional sense, but it wove the Bible, African identity and political resistance into a way of life.",
      sources: ["Rastafari oral tradition", "Haile Selassie archives", "Studies of Jamaican religion"]
    },
    paris2000: {
      title: "Paris: African diaspora and the global market", place: "Paris", yearLabel: "c. 2000", evidence: "Texts · Objects",
      note: "At the end of the 20th century African diaspora religions entered the global market: African immigrants in Paris, London and New York opened botánicas, consultation practices and drum workshops, while museums put nkisi, masks and ritual objects behind glass. On one side is living ritual, on the other an art market and a 'tribal' imagination. Who has the right to explain, sell and display these traditions is a new argument.",
      sources: ["Studies of the African diaspora", "Paris African art market", "History of museum collections"]
    },
    sanlorenzo: {
      title: "San Lorenzo: the Olmec and the jaguar", place: "San Lorenzo (Mexico)", yearLabel: "c. 1200 BCE", evidence: "Archaeology · Objects",
      note: "The Olmec built platforms, plazas and drains at San Lorenzo and carved colossal basalt heads. The heads wear helmets and have broad noses and thick lips, and probably represent rulers. Olmec art repeatedly shows a jaguar-human composite that scholars call the 'were-jaguar', linked to shamanic transformation, the rain god and the maize god. The Olmec left no readable script, but their images and rituals shaped the Maya, Zapotec and central Mexico.",
      sources: ["San Lorenzo excavation reports", "Studies of Olmec art", "Coe, The Olmec"]
    },
    laventa: {
      title: "La Venta: the Olmec ritual center", place: "La Venta (Mexico)", yearLabel: "c. 900 BCE", evidence: "Archaeology · Objects",
      note: "La Venta was built on a raised platform in the marshes, with basalt columns, altars, jade and complex burials. Archaeologists found groups of greenstone axes, magnetite mirrors and jaguar reliefs, showing that this was not only political power but a priestly center for dealing with gods, ancestors and directions. The Olmec moved rubber, cacao and jade through their networks and spread their cosmology across Mesoamerica.",
      sources: ["La Venta excavation reports", "Studies of Olmec jade", "Diehl, The Olmec"]
    },
    izapa: {
      title: "Izapa: early Maya stelae", place: "Izapa (Guatemala/Mexico border)", yearLabel: "c. 300 BCE", evidence: "Archaeology · Objects",
      note: "Izapa sat at the edge of the Pacific rainforest and was a ritual center of the late Preclassic. Its stelae show humans, birds, trees and serpents, and some scholars read them as early versions of the world tree and the hero twins. Izapa was not a huge city, but its images connect the Olmec tradition to the later Maya classic period.",
      sources: ["Izapa excavation reports", "Studies of early Maya images", "Coe, The Maya"]
    },
    teotihuacan: {
      title: "Teotihuacan: the feathered serpent and the pantheon", place: "Teotihuacan (Mexico)", yearLabel: "c. 200", evidence: "Archaeology · Objects",
      note: "In the 1st to 6th centuries Teotihuacan was the largest city in the Americas, with the Pyramids of the Sun and Moon and the Temple of the Feathered Serpent on one axis. More than a thousand apartment compounds housed artisans, merchants and priests from many regions. The image of Quetzalcoatl, the feathered serpent, took shape here and was inherited by the Toltecs and Aztecs. The city collapsed suddenly in the 7th century, for reasons still debated.",
      sources: ["Teotihuacan archaeological project", "Studies of Quetzalcoatl", "Cowgill, Teotihuacan"]
    },
    palenque: {
      title: "Palenque: Pakal and the Maya cosmos", place: "Palenque (Mexico)", yearLabel: "c. 700", evidence: "Archaeology · Texts",
      claimed: "The carving on Pakal's sarcophagus lid shows an astronaut piloting a spaceship",
      verified: "That is a 20th-century popular misreading; the relief shows Pakal entering the underworld, the world tree and the myth of solar rebirth",
      note: "Palenque reached its height in the 7th century. King Pakal (603-683) was buried in the Temple of the Inscriptions, and the lid of his sarcophagus carries a complex cosmic image: the world tree, the underworld, the sun and the ancestors. Maya inscriptions record dynastic history, war and ritual as well as astronomical cycles. Palenque's architecture, stucco reliefs and texts are among the fullest sources for Maya religion.",
      sources: ["Palenque inscriptions", "Studies of Pakal's tomb", "Martin and Grube, Chronicle of the Maya Kings"]
    },
    chichen: {
      title: "Chichen Itza: the feathered serpent and the cenote", place: "Chichen Itza (Yucatan, Mexico)", yearLabel: "c. 900", evidence: "Archaeology · Objects",
      note: "Chichen Itza was the center of power in northern Yucatan from the 9th to the 12th centuries. At the spring and autumn equinox, El Castillo casts a shadow like a serpent sliding down the stairway. The nearby cenote was treated as an entrance to the rain god and the underworld, and archaeologists dredged jade, gold, incense and human remains from it. Maya and Toltec images are mixed here.",
      sources: ["Chichen Itza excavation reports", "Studies of Yucatan cenotes", "Maya-Toltec studies"]
    },
    tenochtitlan: {
      title: "Tenochtitlan: Aztec calendar and sacrifice", place: "Tenochtitlan (Mexico City)", yearLabel: "c. 1500", evidence: "Texts · Archaeology",
      note: "The Aztecs founded Tenochtitlan in 1325 on an island in Lake Texcoco. The Templo Mayor served the rain god Tlaloc and the war god Huitzilopochtli, with offerings of food, incense, animals and humans. The Aztec calendar interlocked a 260-day ritual cycle with a 365-day solar year and governed war, agriculture and sacrifice. In 1521 the Spanish took the city, tore down the temples and used the stone to build churches.",
      sources: ["Florentine Codex", "Templo Mayor excavations", "Studies of the Aztec calendar"]
    },
    cusco: {
      title: "Cusco: the Inca and the sun", place: "Cusco (Peru)", yearLabel: "c. 1450", evidence: "Archaeology · Texts",
      note: "Cusco was the capital of the Inca empire. The Coricancha, the sun temple, had walls covered in gold and served Inti. The Inca used the ceque system to link the city to surrounding mountains, springs and ancestral shrines in radiating lines, each maintained by priests. The bodies of dead emperors were mummified and continued to take part in politics. Inca cosmology held mountains, water, sun and ancestors in one order.",
      sources: ["Inca chronicles", "Cusco archaeology", "Studies of the ceque system"]
    },
    machupicchu: {
      title: "Machu Picchu: mountain and astronomy", place: "Machu Picchu (Peru)", yearLabel: "c. 1450", evidence: "Archaeology · Objects",
      claimed: "Machu Picchu was the 'lost city' of the Inca, rediscovered only in 1911",
      verified: "It was a royal estate of Pachacuti, not the imperial capital; local farmers always knew it, and Bingham only brought it to the English-speaking world",
      note: "Machu Picchu was built on a ridge above the Urubamba valley, with terraces, temples, canals and an observatory. The windows of the sun temple align with the solstice sunrise, and the Intihuatana stone may have been used for astronomical observation. It was not 'lost' but a royal estate and ritual center in the mountains; the Spanish never found it, but local people always knew it.",
      sources: ["Machu Picchu archaeology", "Bingham's diaries", "Studies of Inca astronomy"]
    },
    potosi: {
      title: "Potosi: the silver mountain and Andean cosmology", place: "Potosi (Bolivia)", yearLabel: "c. 1600", evidence: "Texts · Archaeology",
      note: "In 1545 the Spanish found a huge silver deposit at Potosi, and the city grew into one of the richest mining centers of the colonial world. Thousands of Andean natives were forced into the mines through the mita labor system, and many died. Underground, miners honored El Tio, a mine spirit, placing Catholic saints alongside Pachamama and the mountain gods. The silver mountain was both wealth and a site of sacrifice and suffering.",
      sources: ["Potosi colonial archives", "Studies of the mita", "Andean miners' beliefs"]
    },
    guadalupe: {
      title: "Guadalupe: the Virgin and mestizaje", place: "Mexico City (Tepeyac)", yearLabel: "1531", evidence: "Texts · Objects",
      claimed: "The Virgin appeared to Juan Diego in 1531 and printed her image on his cloak",
      verified: "That is the Catholic tradition; the earliest written records come later, and the image and story took shape over time, with scholars debating the details",
      note: "In 1531, tradition says the Virgin Mary appeared on Tepeyac hill to the indigenous Juan Diego, spoke Nahuatl and left her image on his cloak. The Virgin of Guadalupe later became the patron of Mexico and has been read as a replacement for, or continuation of, the indigenous goddess Tonantzin. Her image joins Catholicism, indigeneity and mestizo identity, and is the most famous case of religious syncretism in the Americas.",
      sources: ["Guadalupe traditional texts", "Basilica of Guadalupe archives", "Studies of Mexican religion"]
    },
    chiapas: {
      title: "Chiapas: Maya revival and autonomy", place: "Chiapas (Mexico)", yearLabel: "1994", evidence: "Texts · Oral tradition",
      note: "On 1 January 1994 the Zapatista Army of National Liberation rose in Chiapas, demanding land, autonomy and indigenous rights. The uprising brought Maya languages, myths and community organization into politics and attracted the global alter-globalization movement. Maya religion in Chiapas is not preserved in a museum; it continues to change in autonomous villages, churches, markets and rituals.",
      sources: ["Zapatista texts", "Studies of Maya Chiapas", "Mexican indigenous movements"]
    },
    siberia: {
      title: "Siberia: rock art, drums and spirits", place: "Siberia", yearLabel: "c. 3000 BCE", evidence: "Archaeology · Oral tradition",
      note: "Siberian rock art shows horned figures, drums, deer and birds, and archaeologists often link them to shamanic ritual, though direct proof is hard. The word shaman comes from Evenki and means 'one who knows'. A shaman enters trance with drum and dance, invites spirits to possess him, heals the sick, finds game for hunters and guides the dead. It is not one unified religion but a set of techniques shared by many northern peoples.",
      sources: ["Siberian rock art", "Evenki oral tradition", "Eliade, Shamanism"]
    },
    altai: {
      title: "Altai: Pazyryk and the shaman", place: "Altai (Pazyryk)", yearLabel: "c. 300 BCE", evidence: "Archaeology · Objects",
      note: "The frozen tombs of Pazyryk preserved mummies, tattoos, horse gear, felt and musical instruments from the 4th to 3rd centuries BCE. The tattoos show deer, felines and mythic creatures, and the headdresses and grave goods show that the dead were both political leaders and ritual specialists. The permafrost preserved organic materials, so archaeologists could see shamanic costumes, drums and traces of hallucinogenic plants.",
      sources: ["Pazyryk excavation reports", "Rudenko, Frozen Tombs of Siberia", "Studies of Altai rock art"]
    },
    sami: {
      title: "Sami: the noaidi and the drum", place: "Sami (northern Europe)", yearLabel: "c. 1000", evidence: "Texts · Objects",
      note: "The Sami ritual specialist, the noaidi, used a drum, song (yoik) and trance to deal with gods, ancestors and animals. The drumhead was painted with gods, people and game, and the drumstick was made of reindeer antler. Christian missionaries suppressed Sami shamanism from the medieval period, confiscating and burning drums and treating the noaidi as allies of the devil. Today Sami people are reviving language, yoik and craft, but the shamanic rituals are not fully restored.",
      sources: ["Sami drums and oral tradition", "Nordic missionary records", "Studies of Sami religion"]
    },
    siberia1700: {
      title: "Siberia: Tungus shamans and ethnography", place: "Siberia (Tungus)", yearLabel: "c. 1700", evidence: "Texts · Oral tradition",
      note: "In the 18th and 19th centuries Russian colonists, exiles and travelers entered Siberia and wrote down many accounts of 'shamans'. They used the word to cover Tungus, Yakut, Buryat and other peoples, compressing complex rituals into one label. Later ethnographers found that shamans could be male or female, hereditary or called, and that some healed, some divined, and some only presided at sacrifices.",
      sources: ["Siberian ethnography", "Russian travelers' accounts", "Shirokogoroff, Psychomental Complex of the Tungus"]
    },
    amazon: {
      title: "Amazon: ayahuasca", place: "Amazon (Iquitos)", yearLabel: "c. 1500", evidence: "Texts · Oral tradition",
      note: "Amazonian ayahuasca is brewed from the Banisteriopsis caapi vine and DMT-containing plants, and drinking it produces intense visual and bodily experience. Indigenous peoples use it for diagnosis, healing, divination and communication with spirits, animals and ancestors; different peoples have different recipes and songs. It is not an ancient global secret but local knowledge of the Amazon basin, later carried away by the New Age and drug tourism.",
      sources: ["Amazonian oral tradition", "Ethnobotanical studies of ayahuasca", "Luna, Ayahuasca"]
    },
    andes1000: {
      title: "Andes: curanderos and Pachamama", place: "Andes (Cusco)", yearLabel: "c. 1000", evidence: "Texts · Oral tradition",
      note: "Andean curanderos read coca leaves and make despachos, offering bundles for Pachamama, the earth mother, and the apu, the mountain spirits. Ritual handles illness, migration, planting, mining and family conflict. Spanish colonizers matched Andean gods to Catholic saints, but the mountain gods and the earth mother never disappeared. Today Andean ritual mixes Catholicism, indigenous practice and New Age elements.",
      sources: ["Andean oral tradition", "Studies of coca leaf divination", "Studies of Pachamama and the apu"]
    },
    seoul1200: {
      title: "Seoul: mudang and spirit possession", place: "Seoul (Korea)", yearLabel: "c. 1200", evidence: "Texts · Oral tradition",
      note: "Korean mudang communicate with gods, ancestors, mountain spirits and household deities through possession and the ritual called gut. Some mudang inherit the role, while others are called after illness or visions; ritual uses song, dance, drums, paper flowers, food and divination. The Joseon dynasty ruled through Confucianism and suppressed shamanism, but court and commoners alike depended on it. Mudang are still active in Seoul today.",
      sources: ["Annals of the Joseon Dynasty", "Oral tradition of gut", "Studies of Korean shamanism"]
    },
    karakorum1200: {
      title: "Karakorum: Tengri and Mongol shamans", place: "Karakorum (Mongolia)", yearLabel: "c. 1200", evidence: "Texts · Oral tradition",
      note: "The Mongols called the highest sky god Tengri, and Genghis Khan's legitimacy came from 'the strength of the eternal sky'. Shamans at court divined, healed, presided over sky sacrifices and oaths, and could curse enemies. The Mongol empire put many religions side by side: shamanism, Buddhism, Islam and Christianity all appeared at Karakorum. Tengri worship later intertwined with Tibetan Buddhism and Mongol nationalism.",
      sources: ["The Secret History of the Mongols", "Franciscan travel accounts", "Studies of Mongol shamanism"]
    },
    arctic: {
      title: "Arctic: the Inuit angakkuq", place: "Arctic (Greenland)", yearLabel: "c. 1800", evidence: "Texts · Oral tradition",
      note: "The Inuit ritual specialist, the angakkuq, used fasting, song, drum and trance to let the soul leave the body, visit Sedna, the mother of the sea, or recover a stolen soul from the sky. People consulted them for illness, game, bad weather and death. Christian missionaries and colonial governments suppressed the angakkuq as 'witches', but oral tradition and some practice survived in Arctic communities.",
      sources: ["Inuit oral tradition", "Arctic ethnography", "Studies of shamanism"]
    },
    losangeles1968: {
      title: "Los Angeles: Castaneda and New Age shamanism", place: "Los Angeles", yearLabel: "1968", evidence: "Texts",
      claimed: "Castaneda studied with the Yaqui sorcerer Don Juan in Mexico and recorded genuine shamanic knowledge",
      verified: "The truth of his fieldwork and of Don Juan has long been disputed; scholars generally treat the books as a mix of ethnography, fiction and philosophy, not reliable first-hand record",
      note: "In 1968 Castaneda published The Teachings of Don Juan, claiming he had studied 'separate reality' with a Yaqui sorcerer named Don Juan. The book sold millions and made 'shaman' a keyword of the 60s and 70s counterculture. Journalists and scholars later questioned his fieldwork, the existence of Don Juan and the sources; true or not, the books shaped the modern image of shamanism: hallucinogens, shapeshifting, energy and secret teachers.",
      sources: ["Castaneda, The Teachings of Don Juan", "de Mille, The Don Juan Papers", "Studies of shamanism"]
    },
    newyork1980: {
      title: "New York: Harner and core shamanism", place: "New York", yearLabel: "1980", evidence: "Texts · Oral tradition",
      note: "In 1980 the anthropologist Michael Harner published The Way of the Shaman and proposed 'core shamanism': extract techniques from many cultures and teach Westerners to enter a 'shamanic state of consciousness' with drumming, find animal helpers and teachers. He ran workshops and sold recordings, turning shamanism into a course. Critics say this strips away context, ethics and community and is cultural appropriation; supporters say it offers modern people a practice they can actually do.",
      sources: ["Harner, The Way of the Shaman", "Core shamanism workshop materials", "Studies of shamanism and cultural appropriation"]
    }
  },

  events: {
    e332: { title: "Alexander conquers Egypt", note: "Greeks begin ruling Egypt; Alexandria is founded the next year" },
    e331: { title: "Alexander defeats Persia", note: "The whole Near East enters the Hellenistic world" },
    e244: { title: "Rome's third-century crisis", note: "Civil war, plague and a collapsing currency push many toward inner practice and salvation religions" },
    e391: { title: "Serapeum of Alexandria destroyed", note: "As Rome turns Christian, pagan learning is suppressed" },
    e529: { title: "Justinian closes the Athenian school", note: "The last Platonist philosophers briefly flee to Persia" },
    e762: { title: "Abbasids found Baghdad", note: "They go on to fund a huge translation movement" },
    e711: { title: "Muslim armies enter Iberia", note: "Most of Spain becomes part of the Islamic world" },
    e1085: { title: "Castile takes Toledo", note: "Large Arabic libraries pass into Christian hands" },
    e1453: { title: "Fall of Constantinople", note: "The Ottomans take the city and Byzantine scholars flee west" },
    e1455: { title: "Printing spreads in Europe", note: "Gutenberg prints the Bible and books start to be mass-produced" },
    e1517: { title: "The Reformation begins", note: "Luther's 95 Theses split Western Christianity" },
    e1618: { title: "Thirty Years' War begins", note: "Catholic and Protestant conflict becomes a Europe-wide war" },
    e1687: { title: "Newton's Principia", note: "A landmark of the Scientific Revolution; magic is gradually pushed out of the universities" },
    e1848: { title: "Spiritualism craze in America", note: "The Fox sisters' \"rappings\" make séances popular across America and Europe" },
    e1858: { title: "British Crown rule in India", note: "Western interest in \"Eastern wisdom\" grows" },
    e1859: { title: "Darwin's On the Origin of Species", note: "Traditional religion is shaken; some turn to \"ancient wisdom\"" },
    e1914: { title: "World War I", note: "After mass death, spiritualism and spiritual seeking surge again" },
    e1965: { title: "US immigration reform", note: "Many Asian immigrants and spiritual teachers arrive in the US" },
    e586: { title: "Babylon takes Jerusalem", note: "The First Temple is destroyed and the Judean elite is deported to Babylon" },
    e70: { title: "Rome destroys the Second Temple", note: "The Jerusalem Temple burns and the rabbinic center moves to Yavneh" },
    e1492: { title: "Jews expelled from Spain", note: "The Alhambra Decree; exiles carry Kabbalah to Italy, North Africa and the Ottoman Empire" },
    e1558: { title: "The Zohar is first printed", note: "The Mantua edition; Kabbalah enters the age of print" },
    e1648: { title: "Khmelnytsky uprising", note: "Massacres of Jews in Ukraine and Poland raise messianic expectations" },
    e1772: { title: "Vilna Gaon bans the Hasidim", note: "Lithuanian rabbinic leaders break with the Hasidic movement" },
    e1945: { title: "World War II ends and the Holocaust is revealed", note: "European Jewish communities are destroyed; the center of Kabbalah study shifts to Jerusalem and America" },
    e1948: { title: "The State of Israel is founded", note: "Jerusalem becomes a center of Jewish studies" },
    e610: { title: "Muhammad receives the first revelation at Mecca", note: "He moves to Medina in 622 and the Muslim community begins" },
    e922: { title: "Hallaj is executed", note: "The Baghdad Sufi is accused of deifying himself and publicly executed" },
    e1258: { title: "The Mongols sack Baghdad", note: "The Abbasid caliphate ends and scholars, orders and manuscripts scatter" },
    e1798: { title: "Napoleon invades Egypt", note: "European colonialism enters the Arab world and Sufi orders face the modern state" },
    e224: { title: "The Sasanian empire is founded", note: "Ardashir I unifies Persia and makes Zoroastrianism the state religion" },
    e651: { title: "Arab conquest of Persia", note: "The Sasanian empire falls and Zoroastrians become a minority" },
    e1501: { title: "The Safavid dynasty is founded", note: "Twelver Shiism becomes the state religion of Iran" },
    e1979: { title: "The Iranian revolution", note: "The Pahlavi monarchy falls and religious politics and Traditionalism are reshuffled" },
    e325: { title: "The Council of Nicaea", note: "The first great ecumenical council fixes the core creed of the Trinity" },
    e1540: { title: "The Society of Jesus is founded", note: "Ignatius's order receives papal approval, tying spirituality to global mission" },
    e1699: { title: "Quietism is condemned", note: "Madame Guyon's works are banned and the Catholic Church rejects the 'pure love' path" },
    e60: { title: "Rome attacks Anglesey", note: "Tacitus records the destruction of the druids' sacred groves, a heavy blow to Celtic priestly tradition" },
    e1486: { title: "The Malleus Maleficarum is published", note: "The witch-hunting manual spreads and ties witchcraft to a demonic pact" },
    e1692: { title: "The Salem witch trials", note: "The Massachusetts colony tries and executes people accused of witchcraft" },
    e1951: { title: "Britain repeals its Witchcraft Act", note: "The 1736 act is repealed, allowing modern Wicca to work in public" },
    e1972: { title: "The Icelandic Asatru fellowship is founded", note: "Norse paganism reorganizes within a modern state" },
    e1893: { title: "Vivekananda speaks at the Chicago Parliament of Religions", note: "Indian yoga and Vedanta enter the English-speaking world on a large scale" },
    e1947: { title: "Indian independence and Partition", note: "The nation-state is reshaped and Hindu, Muslim and Sikh boundaries are redrawn" },
    e2015: { title: "The UN establishes the International Day of Yoga", note: "21 June becomes a global yoga day, and India promotes yoga as soft power" },
    e779: { title: "Samye monastery is founded", note: "Tibet's first full Buddhist monastery opens the first diffusion of Buddhism" },
    e842: { title: "Langdarma persecutes Buddhism", note: "Monasteries are destroyed and the first diffusion ends" },
    e1247: { title: "Sakya Pandita meets the Mongols", note: "Tibet enters the Mongol imperial framework and the Sakya school becomes Yuan imperial Buddhism" },
    e1959: { title: "The 14th Dalai Lama goes into exile", note: "Tibetan Buddhism rebuilds in exile and spreads globally" },
    e184: { title: "The Yellow Turban rebellion", note: "The Way of Great Peace organizes a mass uprising, and Daoism becomes entangled with political violence" },
    e1281: { title: "The Yuan court burns Daoist texts", note: "After Buddhist-Daoist debates, Kublai Khan orders part of the Daoist canon destroyed" },
    e1445: { title: "The Zhengtong Daozang is printed", note: "The Ming compiles the great Daoist canon in more than 5,300 fascicles" },
    e1966: { title: "The Cultural Revolution begins", note: "Temples, monasteries and local rituals suffer massive destruction" },
    e712: { title: "The Kojiki is compiled", note: "Japan's earliest myth-history joins the imperial genealogy to Shinto myth" },
    e804: { title: "Kukai travels to Tang China", note: "He studies tantra in Chang'an and later founds Shingon in Japan" },
    e1868: { title: "The Meiji Restoration", note: "Japan separates Shinto from Buddhism and promotes State Shinto" },
    e1945jp: { title: "Japan surrenders", note: "State Shinto is dissolved and the emperor renounces divine status" },
    e1791: { title: "The Haitian slave uprising", note: "A revolt on northern plantations eventually leads to Haitian independence" },
    e1804: { title: "Haiti becomes independent", note: "Haiti becomes the first state founded by formerly enslaved Africans" },
    e1884: { title: "The Berlin Conference", note: "European powers partition Africa and redraw colonial borders" },
    e1960: { title: "Nigerian independence", note: "African decolonization accelerates, and independent churches and new religious movements grow" },
    e1521: { title: "Tenochtitlan falls", note: "The Spanish and their indigenous allies take the Aztec capital and the colonial era begins" },
    e1533: { title: "The Inca empire falls", note: "The Spanish execute Atahualpa and the Inca political system collapses" },
    e1911: { title: "Bingham reaches Machu Picchu", note: "Machu Picchu enters the English-speaking world, though local farmers always knew it" },
    e1994: { title: "The Zapatista uprising", note: "An indigenous and peasant movement in Chiapas brings autonomy, land and Maya identity to global attention" },
    e1206: { title: "Genghis Khan founds the Mongol empire", note: "Tengri worship and shamanic ritual become part of imperial legitimacy" },
    e1968: { title: "The Teachings of Don Juan is published", note: "Castaneda's book makes 'shaman' a keyword of the Western counterculture" },
    e1980: { title: "The Way of the Shaman is published", note: "Harner proposes 'core shamanism' and turns shamanic technique into Western workshops" }
  },

  links: {
    "egypt>alexandria": { via: "Egyptian priests began writing Egyptian history and religion in Greek, and Greeks identified Egypt's wisdom god Thoth with their own Hermes.", why: "After Alexander conquered Egypt, Greeks ruled it for nearly three centuries, and the two cultures were put into the same city." },
    "babylon>alexandria": { via: "The Babylonian priest Berossus wrote Babylonian history and astrology in Greek. \"Chaldean\" astrology entered the Greek world and merged with the Egyptian decans.", why: "Alexander's defeat of Persia brought the whole Near East under Hellenistic kingdoms, so scholars could move between them." },
    "croton>athens": { via: "The Pythagorean Philolaus wrote the teachings down for the first time; Plato traveled to southern Italy and Sicily and became friends with the Pythagorean Archytas.", why: "The Croton community was scattered by riots. Its members spread out, and what had been passed on by word of mouth finally got written down." },
    "athens>alexandria": { via: "Plato's works became the most respected philosophy of the Hellenistic age, and the Hermetic and Gnostic texts borrow heavily from the cosmology of the Timaeus.", why: "Alexandria had the largest library of the time and drew scholars from across the Mediterranean." },
    "alexandria>rome": { via: "Plotinus studied philosophy in Alexandria under Ammonius for eleven years, then opened a school in Rome in 244.", why: "Third-century Rome was torn by civil war and plague, and many people stopped trusting the outer world and looked inward for salvation." },
    "rome>constantinople": { via: "Greek manuscripts of the Neoplatonists and the Corpus Hermeticum were copied generation after generation in Byzantine monasteries and by court scholars.", why: "After the western empire collapsed, almost no one in Western Europe read Greek; the eastern empire always spoke Greek and never had that break." },
    "alexandria>baghdad": { via: "Greek books were first translated into Syriac by scholars of the Church of the East; the Sabians of Harran kept up the cult of Hermes; the Abbasids in Baghdad paid for large-scale translation into Arabic.", why: "Christian Rome suppressed pagan learning and pushed Greek scholarship east; the new Arab empire needed knowledge and had the money." },
    "baghdad>toledo": { via: "Arabic books on alchemy, astrology, medicine and magic spread with the Islamic world into Spain, where cities like Córdoba and Toledo held large libraries.", why: "Most of the Iberian peninsula belonged to the Islamic world for centuries; when Christian kingdoms took cities back, the books stayed." },
    "toledo>florence": { via: "Latin translations circulated in European universities and monasteries. Astral magic handbooks like Picatrix are thought to be among the sources of Ficino's Three Books on Life.", why: "From the 12th century European universities were growing and hungry for new knowledge." },
    "constantinople>florence": { via: "In 1438 Plethon came to Florence with the Byzantine delegation for the council on church union, and his talks on Plato captivated Cosimo de' Medici. Later a monk brought a manuscript of the Corpus Hermeticum from Macedonia.", why: "With the Ottomans closing in, Byzantium asked the Western church for help; after the city fell, scholars fled west with their books." },
    "florence>cologne": { via: "Agrippa read Ficino, Pico and Reuchlin and compiled their astral magic and Christian Kabbalah into his Three Books.", why: "Printing spread these books across Europe within decades, so a young German could read the latest ideas from Florence." },
    "cologne>prague": { via: "John Dee owned Agrippa's books, and his magical system borrowed heavily from Agrippa's categories and tables.", why: "After the Reformation, rulers competed for knowledge and power, and emperors like Rudolf II spent fortunes on alchemists and magicians." },
    "prague>kassel": { via: "Alchemy, Paracelsian medicine and end-times prophecy from the Prague court and Protestant circles in central Europe circulated among German Protestant scholars.", why: "Tension between Catholics and Protestants kept rising. Many felt the world was about to collapse and hoped for a \"universal reformation.\" Four years after the manifestos, the Thirty Years' War broke out." },
    "kassel>london1717": { via: "Rosicrucian ideals reached England and drew in scholars such as the alchemy enthusiast Elias Ashmole, also one of the first recorded gentleman Freemasons (initiated 1646).", why: "After the English Civil War, intellectuals from rival churches needed somewhere to meet that sidestepped religious division." },
    "london1717>paris": { via: "Freemasonry spread across Europe in the 18th century and grew many mystical high-degree rites in France; the 19th-century French occult scene grew out of these groups.", why: "The Scientific Revolution and the Enlightenment pushed magic out of the universities and churches, so it hid in private societies." },
    "paris>newyork": { via: "Blavatsky read Lévi and other French occultists widely, and their influence is all over Isis Unveiled.", why: "America was in the middle of a spiritualism craze, and many people wanted to study the spirit world \"scientifically.\"" },
    "newyork>adyar": { via: "Blavatsky and Olcott moved to India themselves and recruited members there.", why: "Britain ruled India and Westerners were fascinated by \"Eastern wisdom\"; many Indian intellectuals also wanted to revive their own traditions." },
    "paris>london1888": { via: "The Golden Dawn founders Mathers and Westcott were deeply influenced by Lévi; their tarot and Hebrew letter correspondences came straight from him, with changes.", why: "Victorian science and industry left some people feeling the world had lost its magic, and they set out to recover a \"lost ancient wisdom.\"" },
    "newyork>london1888": { via: "Several Golden Dawn founders were Theosophists, and the two groups shared many members.", why: "Both answered the same sense of loss: dissatisfied with the established church, and with pure science too." },
    "london1888>cairo1904": { via: "Crowley joined the Golden Dawn in 1898, learned the whole system, then fell out with Mathers and went his own way.", why: "The Golden Dawn split around 1900 through infighting, and its members scattered." },
    "adyar>ascona": { via: "Eranos founder Olga Fröbe-Kapteyn had been deeply influenced by Theosophy and first wanted a meeting place for Eastern and Western spirituality.", why: "After World War I, Europeans lost faith in reason and progress and began taking myth, religion and the unconscious seriously again." },
    "ascona>bigsur": { via: "Jung's and Eliade's ideas became hugely popular in America, and Esalen brought Jungian psychology, Eastern practice and mythology into its programs.", why: "Postwar America's middle class grew prosperous, and a younger generation looked for meaning outside the traditional churches." },
    "adyar>bigsur": { via: "Jiddu Krishnamurti, raised by the Theosophical Society, lived and taught in California; Indian yoga teachers kept arriving, such as Yogananda, who came to Boston in 1920.", why: "After the 1965 immigration reform more Indian teachers came to America, right as the 60s counterculture took off." },
    "cairo1904>bigsur": { via: "Crowley's Thelema had a branch in California, and his image became one of the icons of the 60s counterculture, even appearing on a Beatles album cover.", why: "Young people in the 60s were rebelling against traditional morality, and \"Do what thou wilt\" suited them perfectly." },
    "croton>egypt": { note: "Later legend: the young Pythagoras studied with Egyptian priests" },
    "croton>babylon": { note: "Later legend: Pythagoras studied with the Chaldeans in Babylon" },
    "egypt>florence": { note: "The claimed chain: Ficino believed wisdom passed from Hermes to Orpheus, Pythagoras and Plato, straight from ancient Egypt" },
    "ezekiel>qumran": { via: "The exile's vision traditions and angel traditions continued in Second Temple apocalyptic literature; manuscripts of 1 Enoch were found at Qumran.", why: "In the Persian and Hellenistic periods Jewish writers composed visions and ascent stories in the names of ancient figures, and Enoch was the most popular.", bg: ["e586"] },
    "qumran>yavneh": { via: "After the Temple was destroyed, the Pharisees regrouped at Yavneh and folded the energy of apocalyptic literature into law and oral tradition.", why: "Rome crushed the Jewish revolt, and the center of Judaism moved from Temple and priesthood to rabbis and synagogue.", bg: ["e70"] },
    "yavneh>sefer_yetzirah": { via: "Sefer Yetzirah compressed the creation story into numbers and letters, running parallel to chariot practice.", why: "Early Jewish mysticism had two paths: seeing God's throne, and thinking about how God made the world." },
    "yavneh>hekhalot": { via: "Rabbis kept studying Ezekiel 1, and the chariot vision became specialized knowledge; between the 5th and 8th centuries it produced Hekhalot Rabbati and related texts.", why: "The academies of Palestine and Babylonia gradually wrote down oral tradition, and mystical practice continued in small circles." },
    "sefer_yetzirah>ashkenaz": { via: "Sefer Yetzirah was repeatedly commented on in the Rhineland; Eleazar of Worms and others put letter combinations and divine-name calculations into prayer practice.", why: "In the 12th century European Jewish communities were flourishing, and scholars combined older texts with local pietist traditions." },
    "hekhalot>ashkenaz": { via: "Angel names, divine names and recitation techniques from the palace texts were absorbed into Rhineland pietist prayer and letter combination.", why: "Early ascent texts kept circulating in manuscripts and ritual, and 12th-century European scholars reorganized them." },
    "ashkenaz>provence": { via: "Scholars moved between the Rhineland and Provence, and early texts and oral traditions traveled south with them.", why: "After the Crusades damaged Rhineland communities, some scholars moved toward the Mediterranean coast." },
    "provence>girona": { via: "Isaac the Blind's students carried Kabbalah to Catalonia; Nahmanides wrote his commentary at Girona.", why: "Provence and Catalonia belonged to one Mediterranean Jewish cultural sphere, with dense family and scholarly networks." },
    "girona>abulafia": { via: "Abulafia was born in Catalonia, knew the local Kabbalah, and later developed letter meditation in Italy.", why: "In the same period Kabbalah split into two paths: one about the structure of God, one about human consciousness." },
    "girona>zohar": { via: "Kabbalists in Castile inherited the Girona theology of the sefirot, and Moses de León wrote the Zohar.", why: "In the second half of the 13th century Castilian Jewish communities were prosperous and mystical writing flourished." },
    "zohar>expulsion": { via: "The Zohar circulated among Spanish Jews; after the 1492 expulsion, manuscripts and scholars scattered together.", why: "The Reconquista was completed, and the Alhambra Decree expelled the Jews.", bg: ["e1492"] },
    "expulsion>cordovero": { via: "Sephardic exiles and their books reached the Ottoman Empire, and Safed became the center of Kabbalah.", why: "The Ottomans welcomed the exiles, and Safed, near Meron, prospered as a commercial and scholarly town.", bg: ["e1492"] },
    "cordovero>luria": { via: "Luria studied with Cordovero's circle in Safed and then developed his own system.", why: "Cordovero died in 1570, and Luria's teaching spread among a small group of students." },
    "luria>sabbatai": { via: "Lurianic ideas about repair circulated in the 17th century and became the language of the messianic movement.", why: "The massacres of 1648 and the hardships of exile convinced many that the messianic age was near.", bg: ["e1648"] },
    "sabbatai>hasidism": { via: "After Sabbatai's failure, messianic energy turned inward; the Baal Shem Tov emphasized joy and being with God in daily life.", why: "In the 18th century Jewish communities in Podolia and Ukraine, shaken by violence, looked for new spiritual leaders.", bg: ["e1648"] },
    "hasidism>berlin": { via: "Hasidism spread through Eastern Europe and entered the view of German Jews; a new generation of scholars in Berlin began studying Judaism, including Kabbalah, historically.", why: "Jewish enlightenment and emancipation let some Jews enter universities, and they wanted to reinterpret their religion through scholarship." },
    "berlin>scholem": { via: "Scholem grew up in Berlin, turned to Jewish mysticism at university, and moved to Palestine in 1923.", why: "Zionism and the Jewish studies movement made young scholars want to rebuild Jewish culture from within." },
    "scholem>losangeles": { via: "Scholem's books and the scholars trained at the Hebrew University brought Kabbalah texts into the English-speaking world; in the 1960s popular Kabbalah appeared in California.", why: "Postwar American middle-class interest in exotic spirituality turned Kabbalah into a self-help course.", bg: ["e1945"] },
    "mecca>basra": { via: "After the conquests, Muslim armies built garrison cities at Basra and Kufa, and ascetics and reciters gathered there.", why: "The center of gravity moved from the Arabian Peninsula to the conquered lands, and new cities became arenas of religious debate.", bg: ["e610"] },
    "basra>baghdad_sufi": { via: "The Abbasids founded Baghdad and Sufi teachers and scholars were drawn to the new capital.", why: "The imperial center moved east, and court patronage and colleges brought scholars together." },
    "baghdad_sufi>tus": { via: "Al-Ghazali taught in Baghdad and later returned to Tus; his books carried Sufi practice into the orthodox curriculum.", why: "The Seljuk network of colleges spread his works quickly." },
    "baghdad_sufi>murcia": { via: "Ibn Arabi read eastern Sufi texts, and Andalusian scholars traveled east for pilgrimage and study.", why: "Spain and the eastern Islamic world were linked by pilgrimage, trade and scholarship." },
    "murcia>konya": { via: "Ibn Arabi's students and books circulated in Anatolia, and Rumi's circle knew the Andalusian tradition.", why: "The Mongol invasions pushed scholars and Sufis toward Anatolia." },
    "konya>cairo_buni": { via: "Mevlevi lodges and Sufi teachers moved between Anatolia and Egypt.", why: "The Mamluks patronized Sufi institutions in Cairo." },
    "konya>tabriz_hurufi": { via: "Sufi networks linked Anatolia and Iran, and Hurufi ideas traveled along the same routes.", why: "Trade and pilgrimage routes connected the two regions." },
    "tabriz_hurufi>istanbul_sufi": { via: "Hurufi followers and Sufi teachers moved into Ottoman territory.", why: "Timur's persecution scattered the Hurufis." },
    "istanbul_sufi>aceh": { via: "Ottoman influence and Indian Ocean trade carried Sufi orders and texts to Aceh.", why: "Aceh was a major port and an Ottoman ally in the Indian Ocean." },
    "cairo_buni>touba": { via: "Tijani and Murid teachings spread across North and West Africa through pilgrimage and trade.", why: "Sufi networks connected Egypt, the Maghreb and Senegal." },
    "cairo_buni>cairo_guenon": { via: "Cairo's Sufi institutions and intellectual life drew Guénon, who converted and settled there.", why: "The city remained a center of Islamic learning and a refuge for European traditionalists." },
    "zoroaster>persepolis": { via: "Zarathustra's teaching was inherited by the priestly class of the Persian empire, and Darius put Ahura Mazda above royal power in his inscriptions.", why: "The Achaemenids unified Persia and needed a religion that tied kingship to cosmic order." },
    "persepolis>dura": { via: "The name and image of Mithras traveled west with the Persian and Hellenistic world and became a mystery cult among Roman frontier troops.", why: "Roman legions served in the East and carried Mithras worship back to frontier cities." },
    "persepolis>ctesiphon": { via: "The Parthian and Sasanian empires connected the religious and court traditions of Persia to Ctesiphon.", why: "The empire moved west to the Tigris, and Ctesiphon became the new center of power." },
    "ctesiphon>harran": { via: "Manichaeism and the Sabian cult met in upper Mesopotamia, and Harran preserved astral and Hermetic traditions.", why: "Northern Mesopotamia was a crossroads of religion and trade." },
    "ctesiphon>turfan": { via: "Manichaeism left Ctesiphon and traveled the Silk Road to Central Asia and the Uyghur kingdom of Gaochang.", why: "The Uyghur khagan made Manichaeism the state religion in the 8th century, and merchants and monks carried the texts east." },
    "ctesiphon>yazd": { via: "After the fall of the Sasanians, Zoroastrian priests retreated to Yazd and Kerman and preserved fire temples and scriptures.", why: "After the Arab conquest non-Muslims paid a tax, and communities contracted into more remote areas." },
    "yazd>mumbai": { via: "Some Zoroastrians migrated to the west coast of India after the 8th century and later formed the Parsi community of Bombay.", why: "Persecution and trade opportunities drove migration." },
    "ctesiphon>aleppo": { via: "Suhrawardi combined Persian light metaphysics with Islamic mysticism and taught in Aleppo.", why: "He encountered Greek and Islamic traditions in the academic centers of the eastern Mediterranean." },
    "aleppo>isfahan": { via: "Suhrawardi's illumination was inherited by Safavid scholars, and Mulla Sadra systematized it.", why: "The Safavids made Shi'i philosophy part of the state's religious culture." },
    "isfahan>shiraz": { via: "Shaykhism spread in Iran, and the Babi movement grew out of Shi'i messianic expectation in Shiraz.", why: "Religious and political crisis in 19th-century Iran produced new messianic movements." },
    "shiraz>tehran": { via: "Babi history and Traditionalism continued to be discussed in the intellectual circles of Tehran University.", why: "Modern Iranian higher education put Islamic philosophy and Western thought side by side." },
    "alexandria200>nitria": { via: "Origen's allegorical reading and the Egyptian monastic tradition shared the same landscape, and monks carried his books into the desert.", why: "Alexandria was the intellectual center of the Mediterranean, and the nearby desert offered space for withdrawal." },
    "nitria>cappadocia": { via: "Lives and sayings of the desert fathers reached Cappadocia, and Basil and Gregory of Nyssa wrote monastic experience into theology.", why: "Fourth-century Cappadocian scholars met Egyptian tradition in the monasteries of Asia Minor." },
    "cappadocia>constantinople500": { via: "Gregory of Nyssa's negative theology and Basil's monastic rule reached Constantinople, and Pseudo-Dionysius continued the path.", why: "Constantinople was the academic and ecclesiastical center of the Eastern empire." },
    "constantinople500>sinai": { via: "Pseudo-Dionysius's hierarchy and monastic theology reached Sinai, and John Climacus wrote the ascent as thirty steps.", why: "Sinai was a center of pilgrimage and manuscripts where Byzantine monastic texts gathered." },
    "sinai>clairvaux": { via: "The Ladder was translated into Latin, and Bernard continued the ascent of love in his sermons on the Song of Songs.", why: "Twelfth-century Latin monasteries took a growing interest in Greek and Eastern spiritual texts." },
    "clairvaux>cologne1300": { via: "Cistercian love mysticism and biblical commentary reached the Rhineland, and Eckhart preached the abyss of the Godhead in Cologne.", why: "Monastic and university networks carried Cistercian texts into German-speaking lands." },
    "cologne1300>norwich": { via: "Manuscripts of negative theology and Rhineland mysticism circulated in England, and Julian's visions share the language of The Cloud of Unknowing.", why: "Fourteenth-century English monasteries and lay readers copied continental mystical texts." },
    "cologne1300>avila": { via: "Spanish Carmelites read Rhineland and Flemish mysticism, and Teresa wrote her own version of the interior castle.", why: "Sixteenth-century Spanish reform and print made these texts easier to obtain." },
    "avila>loyola": { via: "Teresa and Ignatius lived in the same 16th-century Spain, and Carmelite and Jesuit spirituality referred to each other.", why: "Spanish Catholic reform stressed both inner experience and institutional rebuilding." },
    "avila>paris1700": { via: "Teresa's works were widely translated in 17th-century France, and Madame Guyon's 'pure love' connected to Spanish mysticism.", why: "French Catholicism was torn by debates over interior prayer and quiet." },
    "paris1700>london1911": { via: "Underhill studied French and Spanish mystical texts and placed Quietism in modern religious psychology.", why: "Comparative religion and psychology gave mysticism a new scholarly language in the early 20th century." },
    "norwich>london1911": { via: "Julian's manuscripts were rediscovered and translated in the 20th century, and Underhill placed her in the English mystical tradition.", why: "Modern publishing and women's studies brought medieval women authors into academic view." },
    "newgrange>stonehenge": { via: "Neolithic Britain and Ireland shared passage tombs, stone circles and solstice ritual, and buildings and ideas traveled by sea.", why: "Atlantic farming communities traded and shared a common cosmology." },
    "stonehenge>anglesey": { via: "Iron Age Celtic priests inherited the sacred landscapes of Britain and passed ritual knowledge orally.", why: "Before Rome, local priests and tribal elites controlled religion in Britain." },
    "anglesey>uppsala": { via: "Celtic and Germanic priestly traditions both stressed oral tradition, nature worship and sacrifice, and Roman writers called both 'barbarian religion'.", why: "Iron Age European religions developed in similar social structures and were later described together by Roman and Christian authors." },
    "uppsala>jelling": { via: "Norse sacrificial tradition continued through the Viking Age until the Danish court converted in the 10th century and carved Christianity into the Jelling stones.", why: "Danish kings needed alliance with Christian Europe, and conversion was also a political choice." },
    "jelling>bamberg": { via: "After Christianization, surviving pagan customs were reinterpreted as a demonic pact, and witch trials peaked in the early modern period.", why: "The Reformation, state building and print amplified the fear of heresy." },
    "bamberg>salem": { via: "The manuals and fears of the European witch hunt crossed the Atlantic to Puritan New England.", why: "The Salem trials shared the theology and legal language of European witch hunting." },
    "bamberg>essex": { via: "Folk healers and witch trials coexisted in Europe, and church records documented both.", why: "Village society depended on cunning folk, while the church wanted a monopoly on ritual and healing." },
    "essex>highcliffe": { via: "Nineteenth- and twentieth-century folklorists collected charms and rituals, and Gardner wove this material into Wicca.", why: "Romanticism and folklore revival made 'ancient folk belief' attractive to modern seekers." },
    "highcliffe>brighton": { via: "Gardner's group split in the 1950s, and Doreen Valiente helped rewrite the rituals and form her own tradition.", why: "Once Wicca went public it fragmented quickly, with rival groups claiming orthodoxy." },
    "highcliffe>reykjavik": { via: "The modern pagan revival spread from Britain to the Nordic countries, and Iceland's Asatru fellowship reorganized local myth as religion.", why: "Nationalism and the counterculture made northern Europeans reclaim their pre-Christian past." },
    "reykjavik>glastonbury": { via: "Modern paganism and the New Age met at Glastonbury, where ley lines, the Grail and Arthur were folded into one landscape myth.", why: "The alternative spirituality of the 1970s treated the English countryside as a lost sacred landscape." },
    "indus>vedic": { via: "After the Indus cities declined, Vedic culture rose in the Ganges-Yamuna region; the two share some symbols and rituals but differ in language, people and urban form.", why: "Climate, rivers and migration changed the settlement pattern of South Asia in the second millennium BCE." },
    "vedic>upanishads": { via: "Forest books and Upanishads grew inside the Vedic priestly tradition, turning the outer sacrifice into an inner question.", why: "Between the 8th and 5th centuries BCE cities and renunciant groups grew, challenging the priests' monopoly." },
    "upanishads>gita": { via: "Upanishadic ideas of self, Brahman and karma entered the epic, and the Gita organized knowledge, action and love into three paths.", why: "The epic age needed a theology that could include different castes and ways of practice." },
    "gita>patanjali": { via: "Classical yoga organized epic and Upanishadic practice into eight limbs, and Patanjali compressed it into sutras.", why: "Indian scholarship around the turn of the era liked to compress oral knowledge into memorable sutras." },
    "patanjali>ujjain": { via: "Classical Indian learning treated yoga, astrology, medicine and grammar as related sciences, and Ujjain was an astrological center.", why: "Courts and temples needed calendars, horoscopes and ritual experts." },
    "patanjali>srinagar": { via: "Kashmir Shaivism combined Yoga Sutra meditation with tantric ritual and mantra, and Abhinavagupta wrote systematic commentaries.", why: "Kashmiri courts and monasteries patronized philosophy and ritual." },
    "srinagar>gorakhpur": { via: "Tantric body cosmology, chakras and kundalini entered the Nath order and hatha yoga, with Gorakhnath as the founding figure.", why: "Between the 11th and 13th centuries North Indian groups turned monastic philosophy into bodily technique." },
    "gorakhpur>rishikesh": { via: "Hatha postures, breath and ascetic practice reached the Himalayan foothills, and Sivananda organized them into a modern curriculum.", why: "Late 19th-century Indian reform and print brought practice into public education." },
    "rishikesh>mysore": { via: "Krishnamacharya studied in North India and the Himalayas, then returned south and combined hatha postures with modern gymnastics.", why: "The Mysore court and 20th-century body culture gave yoga a new stage." },
    "mysore>varanasi2000": { via: "Modern postural yoga traveled from Mysore to Europe and America, then flowed back to Varanasi and Rishikesh as yoga tourism.", why: "Globalization, social media and the wellness industry turned yoga into a transnational commodity." },
    "nalanda>swat": { via: "Nalanda's tantric and mahasiddha traditions reached Uddiyana in the northwest, where the Padmasambhava cycle took root.", why: "The northwest was a crossroads of mountains, trade and pilgrimage, and tantric centers followed those routes." },
    "swat>samye": { via: "Padmasambhava came from Uddiyana to Tibet and took part in founding Samye, bringing tantric ritual and treasure traditions.", why: "Trisong Detsen needed a religious system that could integrate local beliefs and Buddhism." },
    "samye>lhasa850": { via: "Samye's translation college and monastic network turned tantric texts into Tibetan, and Lhasa became the center of imperial Buddhism.", why: "The Tibetan empire made Buddhism the state religion and needed standardized language and ritual." },
    "lhasa850>toling": { via: "After Langdarma's persecution, Buddhism re-entered from the Guge kingdom in Ngari, and Toling became the translation center of the later diffusion.", why: "After the empire collapsed, local kings patronized revival, and Ngari was closely linked to northwestern India." },
    "toling>sakya": { via: "Atisha's Kadam school and the Sakya path-and-fruit tradition ran in parallel during the later diffusion, and Sakya became a major academic center.", why: "In the 11th and 12th centuries monastic networks and Tibetan students in India brought new tantric translations back." },
    "sakya>dvagpo": { via: "The later diffusion set Sakya, Kagyu and other schools in competition, and the Kagyu established its own lineage at Dagpo.", why: "Tibetan local nobles and monasteries competed for patronage and students." },
    "dvagpo>lhasa1409": { via: "Kagyu Mahamudra and Tsongkhapa's disciplined reform competed in the same monastic culture, and the Gelug took shape in Lhasa.", why: "At the end of the 14th century lax discipline in Tibetan monasteries provoked a reform movement." },
    "sakya>karakorum": { via: "Sakya Pandita met the Mongol prince Köten, Phagpa entered Kublai's court, and Tibetan Buddhism became the state religion of the Yuan.", why: "The Mongol empire needed cross-ethnic religious legitimacy, and the Sakya school needed political protection." },
    "lhasa1409>beijing": { via: "The Gelug later became the largest Tibetan school, and Qing emperors managed Mongolia and Tibet through the Dalai and Panchen lamas and resident lamas in Beijing.", why: "The Qing made Tibetan Buddhism part of frontier governance and imperial ritual." },
    "karakorum>beijing": { via: "The Mongol court's Tibetan Buddhist tradition continued into the Yuan and Qing, and Beijing became the imperial center of Tibetan Buddhism.", why: "The Yuan and Qing both ruled Mongolia and Tibet and needed Tibetan ritual and legitimacy at court." },
    "nalanda>koyasan": { via: "Indian tantra reached Tang China through Shubhakarasimha and Vajrabodhi, and Kukai studied in Chang'an and brought it to Japan as Shingon.", why: "In the 8th and 9th centuries East Asian pilgrims carried Indian and Chinese tantric texts to Japan." },
    "lhasa1409>dharamsala": { via: "The Gelug Dalai Lama line went into exile in India in 1959, and Dharamsala became the center of exiled Tibetan Buddhism.", why: "Chinese forces entered Tibet, and the Dalai Lama and tens of thousands of Tibetans left." },
    "dharamsala>newyork1970": { via: "Exiled monks and Western disciples brought Tibetan Buddhism to Europe and America, and meditation centers appeared in New York, Colorado and California.", why: "The counterculture of the 60s and 70s and its interest in Eastern spirituality gave Tibetan Buddhism an audience." },
    "anyang>luoyang": { via: "Shang divination, sacrifice and the idea of heaven's mandate were inherited by the Zhou, and Luoyang became a center of ritual and cosmology.", why: "After overthrowing the Shang, the Zhou needed a new theory of heaven's mandate that joined divination to moral rule." },
    "luoyang>linzi": { via: "The Jixia academy of the Warring States discussed Laozi's Dao together with yin-yang and the five phases.", why: "Competing states let scholars move between courts, and intellectual competition flourished." },
    "linzi>xianyang": { via: "After Qin unified China, yin-yang and five-phase cosmology legitimized the new dynasty, and fangshi brought the islands and the elixir into the court.", why: "The empire needed a cosmology that explained heaven's mandate and dynastic legitimacy." },
    "xianyang>heming": { via: "Han fangshu, Huang-Lao thought and local cults met in Sichuan, and Zhang Daoling deified Laozi and founded the Celestial Masters.", why: "In the late Eastern Han, social crisis let local magnates and religious communities fill the gap left by state power." },
    "heming>jurong": { via: "Celestial Masters communities and rituals reached the Jiangnan region, and Ge Hong organized alchemy, talismans and Confucian ethics in the Baopuzi.", why: "After the fall of the Western Jin, gentry families moved south and Jiangnan became a new center of Daoism and fangshu." },
    "jurong>maoshan": { via: "Ge Hong's alchemical lineage and the Jiangnan immortal tradition prepared the ground for the Shangqing revelations at Maoshan.", why: "Eastern Jin gentry patronized Daoism, and Maoshan was close to Jiankang and Jurong." },
    "maoshan>shaolin": { via: "Buddhist and Daoist practice in the Northern and Southern dynasties both worked on body and breath, and Chan, daoyin and visualization borrowed from one another.", why: "After Buddhism arrived, monasteries and temples competed for patrons in the same cultural region." },
    "shaolin>wudang": { via: "Shaolin and Wudang martial traditions competed in the Ming and Qing, and the labels 'internal' and 'external' tied the two mountains together.", why: "Martial schools needed ancestral halls and lineage stories, and famous mountains were the best advertisement." },
    "wudang>beijing1445": { via: "The Ming court honored Wudang as the Great Peak, Daoist ritual entered the palace, and the Zhengtong Daozang was printed in Beijing.", why: "The Yongle emperor legitimized his usurpation with the aid of Zhenwu, and court and Daoism needed each other." },
    "beijing1445>beijing1700": { via: "Jesuits in Beijing read the Daoist canon and the Daodejing and translated Daoist texts into European languages.", why: "Missionaries needed to understand Chinese classics, and European intellectuals wanted 'Eastern wisdom'." },
    "beijing1700>sanfrancisco": { via: "European and later English translations of the Daodejing entered the American counterculture of the 1960s.", why: "Vietnam, counterculture and the Eastern spirituality boom made Daoist texts popular reading." },
    "izumo>ise": { via: "The Kojiki tells the transfer of the land from Izumo to the line of Amaterasu, folding Izumo's cult into the Ise and imperial system.", why: "After the Yamato court unified the islands, it needed to absorb local gods into its own myth." },
    "ise>koyasan_jp": { via: "Heian Buddhism and Shinto interpreted each other, and Ise's shrine was linked to Shingon through the unity of kami and buddhas.", why: "Court and aristocracy patronized both shrines and temples, and kami-buddha syncretism became mainstream." },
    "koyasan_jp>kyoto1000": { via: "Kukai's Shingon entered the Kyoto court, and Onmyodo, calendrics and tantric ritual borrowed from one another.", why: "The Heian court needed experts in calendars, divination and exorcism." },
    "kyoto1000>yoshino": { via: "Court Onmyodo and mountain religion combined, and Shugendo developed in the mountains of Yoshino and Kumano.", why: "In the late Heian period aristocrats and monks treated mountains as spaces of practice and pilgrimage." },
    "kyoto1000>kamakura": { via: "Heian Buddhism and court culture reached Kamakura, and Zen rose under the warrior government.", why: "The Kamakura shogunate needed new religious legitimacy, and Zen and warrior culture attracted each other." },
    "kamakura>kamakura1253": { via: "Buddhist competition in Kamakura was intense, and Nichiren launched his Lotus Sutra claim there.", why: "Earthquakes, famine and the Mongol threat made mappo, the age of decline, vivid in 13th-century Japan." },
    "seoul1000>kamakura": { via: "Korean Buddhist and Zen monks traveled to Japan and gave the Kamakura Zen schools continental resources and networks.", why: "Maritime trade and monastic travel linked Korea, Japan and China." },
    "seoul1000>andong": { via: "Korean shamanism and feng shui entered local elite life, and Andong's villages and academies combined the two.", why: "The Joseon state ruled through Confucianism, but local society still relied on shamans and geomancy." },
    "yoshino>kyoto1500": { via: "Shugendo's mountain practice and kami genealogy were absorbed by Yoshida Shinto, whose theorists reorganized shrines nationwide.", why: "In the Muromachi period Shinto competed with Buddhism and Confucianism, and the Yoshida family sought a unified system." },
    "kyoto1500>okayama": { via: "Yoshida Shinto's theology and organization reached the provinces, and Kurozumi-kyo combined Shinto, healing and daily practice in Okayama.", why: "Late Edo social crisis produced new religious movements." },
    "okayama>ayabe": { via: "Kurozumi-kyo and other new religions prepared the ground for Omoto, and Deguchi Nao began preaching in Ayabe.", why: "Social change after the Meiji Restoration pushed more people toward new religious groups." },
    "ife>ouidah": { via: "Yoruba Ifa, orisha and ancestor worship traveled to Ouidah and Dahomey along trade and slave routes.", why: "Trade routes between Ife and Ouidah carried Yoruba religion into Fon country." },
    "mbanza>elmina": { via: "Kongo trade with the Portuguese carried nkisi, cosmology and enslaved people to the Gold Coast.", why: "Atlantic trade connected Central Africa and the West African coast." },
    "ouidah>elmina": { via: "Ouidah and Elmina were both slave-trade ports, and gods, amulets and rituals traveled along the coast.", why: "European ships and African middlemen mixed religious practices from different regions." },
    "elmina>haiti": { via: "The transatlantic slave trade carried West and Central African religions to the Caribbean, and Haitian Vodou preserved Dahomean and Kongo elements.", why: "The French plantation economy of Saint-Domingue depended on masses of African slaves." },
    "elmina>havana": { via: "The Cuban slave trade brought Yoruba and Kongo traditions to Havana and formed Santeria.", why: "Spanish sugar and slavery in Cuba moved large numbers of Africans to the Caribbean." },
    "elmina>salvador": { via: "The Brazilian slave trade carried West and Central African religions to Bahia and formed Candomble.", why: "The Portuguese plantation economy of Brazil depended on African slaves." },
    "elmina>neworleans": { via: "The slave trade in the southern United States brought African religions to New Orleans, and Congo Square became a public gathering place.", why: "The Mississippi and Caribbean trade carried Africans and their religions to Louisiana." },
    "haiti>havana": { via: "After the Haitian revolution, French and African-descended refugees fled to Cuba and brought Vodou and other Caribbean traditions.", why: "The 1790s revolution sent many migrants and slaves to eastern Cuba." },
    "havana>neworleans": { via: "Trade and migration between Cuba and Louisiana linked Santeria, Vodou and hoodoo.", why: "The port network of the Gulf of Mexico carried Caribbean religions into the southern United States." },
    "havana>salvador": { via: "Cuban and Brazilian port cities shared the rituals, divine names and organization of African diaspora religions.", why: "Shipping and the slave trade inside the Iberian colonial world connected the two." },
    "lagos>paris2000": { via: "Nigerian immigrants and independent churches brought Aladura and Yoruba religion into European cities.", why: "Late 20th-century migration and globalization brought African religions into the European market." },
    "kingston>paris2000": { via: "Reggae, Rastafari and African identity politics reached Europe through the music industry.", why: "Jamaican migration and popular music carried Caribbean religion into global youth culture." },
    "sanlorenzo>laventa": { via: "Olmec political and ritual power moved from San Lorenzo to La Venta, and art, jade and jaguar imagery continued.", why: "River changes and political competition shifted the Olmec center." },
    "laventa>izapa": { via: "Olmec images and ritual traveled down the Pacific coast to Izapa and merged with early Maya stelae.", why: "Trade and migration along the Pacific coast carried Mesoamerican religious symbols south." },
    "izapa>teotihuacan": { via: "Preclassic images and cosmology entered central Mexico, and Teotihuacan systematized the feathered serpent, rain god and pyramid tradition.", why: "Teotihuacan became the largest city and pilgrimage center in Mesoamerica around the turn of the era." },
    "teotihuacan>palenque": { via: "Teotihuacan's feathered serpent, warfare and trade networks entered the Maya lowlands, and Palenque's dynasty wrote them into its inscriptions.", why: "Teotihuacan intervened in Maya city-states in the 4th to 6th centuries, and merchants and envoys carried its images." },
    "palenque>chichen": { via: "Classic Maya cosmology, calendars and ballgame traditions reached northern Yucatan, and Chichen Itza combined them with Toltec elements.", why: "Alliances, wars and trade among Maya city-states spread religious symbols across the lowlands." },
    "chichen>tenochtitlan": { via: "The feathered serpent, calendar and sacrifice traditions reached central Mexico, and the Aztecs treated Quetzalcoatl as an ancestor of culture and kingship.", why: "Toltec legend and Aztec migration memory connected the two regions." },
    "tenochtitlan>guadalupe": { via: "After the Spanish conquest, the Catholic Virgin appeared at Tepeyac and replaced or covered the cult of the indigenous goddess Tonantzin.", why: "The colonial church needed a new cult at an indigenous sacred site." },
    "guadalupe>chiapas": { via: "Guadalupe's mestizo identity and indigenous theology continued in Chiapas, where Maya communities combined Catholicism, traditional ritual and autonomous politics.", why: "Indigenous movements and liberation theology in southern Mexico brought religious symbols into politics." },
    "cusco>machupicchu": { via: "The Inca court expanded from Cusco into the Urubamba valley, and Pachacuti built a royal estate on the ridge.", why: "The Inca used architecture, roads and ritual to bring conquered regions into the cosmic order of the capital." },
    "machupicchu>potosi": { via: "Inca mountain roads and mining traditions were taken over by the Spanish, and the silver mines of Potosi brought Andean labor and ritual into the colonial economy.", why: "The Spanish used the Inca mita labor system to work the silver mines." },
    "potosi>guadalupe": { via: "Colonial silver tied the Andes and Mexico into one Catholic empire, and miners and missionaries mixed saints, mountain gods and the Virgin.", why: "The Spanish silver routes and missionary networks connected the two American centers." },
    "siberia>altai": { via: "Siberian and Altaic rock art, drums, deer cults and trance techniques share a northern shamanic tradition.", why: "Steppe and forest hunting and herding communities interacted over a long period." },
    "siberia>sami": { via: "Sami, Nenets, Evenki and other circumpolar peoples share drums, song, animal helpers and trance techniques.", why: "Arctic tundra and taiga hunting cultures had similar ecologies and ritual needs." },
    "siberia>siberia1700": { via: "Russian colonization and ethnography recorded, classified, displayed and suppressed Siberian shamanic practice.", why: "In the 18th century Russia expanded east and needed to know and govern local peoples." },
    "siberia1700>arctic": { via: "Siberian and Arctic ethnography put Inuit, Sami and Tungus rituals into one comparative 'shamanism' frame.", why: "Explorers, missionaries and scholars collected material around the Arctic and created comparative religion." },
    "siberia1700>losangeles1968": { via: "Ethnographic material on Siberian shamanism entered Western popular culture, and Castaneda rewrote the shaman as a countercultural hero.", why: "The 60s counterculture treated non-Western spirituality as a resource against modernity." },
    "losangeles1968>newyork1980": { via: "Castaneda's bestsellers brought 'shaman' to the mass market, and Harner extracted techniques for workshops.", why: "The American New Age needed a practice that could be learned and sold." },
    "amazon>andes1000": { via: "Amazonian and Andean healing traditions influenced each other before and after the conquest, and coca, ayahuasca and mountain gods met on the eastern slopes.", why: "The eastern slopes of the Andes are a transition zone between Amazonia and the highlands." },
    "amazon>losangeles1968": { via: "In the late 20th century ayahuasca was carried to Europe and America by drug tourism and the New Age, becoming a gateway to 'shamanic experience'.", why: "Amazonian tourism, ethnobotany and psychedelic culture pushed ayahuasca global." },
    "seoul1200>karakorum1200": { via: "Mongol and Korean shamans both honored sky gods, mountain gods and ancestors, and the 13th-century imperial network brought ritual specialists into contact.", why: "After the Mongol invasions of Korea, people and religious knowledge moved across the empire." },
    "karakorum1200>siberia1700": { via: "The Mongol empire's Tengri worship and shamanic tradition remained on the steppe, and later Russian ethnography compared it with Siberian shamanism.", why: "The Mongol legacy and steppe trade passed religious practice to later peoples." },
    "andes1000>newyork1980": { via: "Andean curanderismo and Pachamama worship entered global New Age networks, and New York workshops placed them beside core shamanism.", why: "Migration, tourism and the spiritual market carried Andean ritual to North America." }
  }
};
