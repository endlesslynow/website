/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 1, book pages 2-2, PDF pages 9-9 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «جهاندار‌نیکوفر‌نامور» is written «جهاندار نیکوفر نامور»; «برخامه» is written «بر خامه»; «نوازشگرو» is written «نوازشگر و»; «درخرگهٔ» is written «در خرگهٔ»; «ابََر» is written «اَبَر»; «اگرآب» is written «اگر آب»; «احمدیاسین» is written «احمد یاسین».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-01',
  group: 'Dari · grade 9',
  label: 'Lesson 1',
  name: "hamd",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_01.jpg',
    alt: "A girl in a white headscarf raises her open hands in prayer."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_01.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "hamd":                      { fa: "حمد", mean: "praise of God" },
    "ba":                        { fa: "به", mean: "to" },
    "naam":                      { fa: "نام", mean: "name" },
    "su-khan":                   { fa: "سخن", mean: "speech, words" },
    "su-khan par-wa-ri":         { fa: "سخن پرور", mean: "the nurturer of speech" },
    "par-war":                   { fa: "پرور", mean: "nurturing (su-khan par-war, nurturer of speech)" },
    "baa-hu-nar":                { fa: "باهنر", mean: "skillful" },
    "ja-haan-daar":              { fa: "جهاندار", mean: "ruler of the world" },
    "nay-ko-far":                { fa: "نیکوفر", mean: "glorious, of fine splendor" },
    "naam-war":                  { fa: "نامور", mean: "renowned, famous" },
    "khu-daa-wand":              { fa: "خداوند", mean: "God, the Lord" },
    "das-toor":                  { fa: "دستور", mean: "rule, order; grammar" },
    "wa":                        { fa: "و", mean: "and" },
    "zu-baan":                   { fa: "زبان", mean: "language; tongue" },
    "far":                       { fa: "فر", mean: "splendor, glory" },
    "far af-zaa-yi":             { fa: "فر افزای", mean: "who adds splendor to" },
    "af-zaa":                    { fa: "افزا", mean: "adding, increasing (far af-zaa, adding splendor)" },
    "aa-yeen":                   { fa: "آیین", mean: "way, custom, rite" },
    "daa-nish-wa-raan":          { fa: "دانشوران", mean: "the learned, scholars" },
    "khu-daa-yay":               { fa: "خدایی", mean: "the God (who …)" },
    "ki":                        { fa: "که", mean: "that, which, who" },
    "saw-gand":                  { fa: "سوگند", mean: "oath" },
    "saw-gand bar khaa-ma kard": { fa: "سوگند بر خامه کرد", mean: "swore by the pen, as God does in the Quran" },
    "saw-gand kar-dan":          { fa: "سوگند کردن", mean: "to swear" },
    "bar":                       { fa: "بر", mean: "on, upon" },
    "khaa-ma":                   { fa: "خامه", mean: "pen" },
    "kard":                      { fa: "کرد", mean: "did, made" },
    "kar-dan":                   { fa: "کردن", mean: "to do, to make" },
    "khaan-dan":                 { fa: "خواندن", mean: "to read, to recite" },
    "bi-far-mood":               { fa: "بفرمود", mean: "commanded" },
    "far-moo-dan":               { fa: "فرمودن", mean: "to say, to command (polite)" },
    "ham":                       { fa: "هم", mean: "also, too" },
    "naa-ma":                    { fa: "نامه", mean: "book; letter" },
    "az-oo":                     { fa: "ازو", mean: "from him (az + oo)" },
    "yaaft":                     { fa: "یافت", mean: "found" },
    "yaaf-tan":                  { fa: "یافتن", mean: "to find" },
    "an-day-sha":                { fa: "اندیشه", mean: "thought" },
    "pay-daa-yi-shash":          { fa: "پیدایشش", mean: "its beginning, its coming into being" },
    "khi-rad":                   { fa: "خرد", mean: "reason, wisdom" },
    "poo-ya":                    { fa: "پویه", mean: "running, moving" },
    "poo-ya gaa-ree":            { fa: "پویه گاری", mean: "movement, striving" },
    "gaa-ree":                   { fa: "گاری", mean: "(with poo-ya) movement, striving" },
    "ra-waan":                   { fa: "روان", mean: "soul; flowing" },
    "paa-yi-shash":              { fa: "پایشش", mean: "its lasting, its endurance" },
    "na-waa-zish-gar":           { fa: "نوازشگر", mean: "kind, caressing" },
    "daad-gar":                  { fa: "دادگر", mean: "just" },
    "rah-na-maay":               { fa: "رهنمای", mean: "guide" },
    "ta-waan-bakhsh":            { fa: "توانبخش", mean: "giving strength" },
    "yak-taa":                   { fa: "یکتا", mean: "the One, unique" },
    "daa-nish":                  { fa: "دانش", mean: "knowledge" },
    "daa-nish fa-zaay":          { fa: "دانش فزای", mean: "who increases knowledge" },
    "fa-zaay":                   { fa: "فزای", mean: "increasing (daa-nish fa-zaay, increasing knowledge)" },
    "dar":                       { fa: "در", mean: "in" },
    "khar-gah":                  { fa: "خرگه", mean: "tent" },
    "aa-si-maan":                { fa: "آسمان", mean: "sky" },
    "za-meen":                   { fa: "زمین", mean: "ground, earth" },
    "aa-fa-reed":                { fa: "آفرید", mean: "created" },
    "aa-fa-ree-dan":             { fa: "آفریدن", mean: "to create" },
    "mah":                       { fa: "مه", mean: "moon" },
    "kah-ka-shaan":              { fa: "کهکشان", mean: "galaxy, the Milky Way" },
    "baa-laa":                   { fa: "بالا", mean: "top, height" },
    "ay-waan":                   { fa: "ایوان", mean: "hall, porch" },
    "ni-gaa-reen":               { fa: "نگارین", mean: "painted, adorned" },
    "si-pihr":                   { fa: "سپهر", mean: "the heavens, the sky" },
    "gay-tee":                   { fa: "گیتی", mean: "the world" },
    "ba-ree-nash":               { fa: "برینش", mean: "his highest (ba-reen + -ash)" },
    "da-rakh-shan-da":           { fa: "درخشنده", mean: "shining" },
    "mihr":                      { fa: "مهر", mean: "the sun; love" },
    "ki-naar":                   { fa: "کنار", mean: "side, edge" },
    "rah":                       { fa: "ره", mean: "road, way" },
    "shee-ree":                  { fa: "شیری", mean: "milky (rah-i shee-ree, the Milky Way)" },
    "ha-zaa-raan":               { fa: "هزاران", mean: "thousands" },
    "a-bar":                     { fa: "ابر", mean: "great, super-, above" },
    "akh-tar":                   { fa: "اختر", mean: "star" },
    "aa-tash":                   { fa: "آتش", mean: "fire" },
    "aa-tash fi-shaan":          { fa: "آتش فشان", mean: "fire-spewing" },
    "fi-shaan":                  { fa: "فشان", mean: "spewing, scattering (aa-tash fi-shaan, fire-spewing)" },
    "aa-raast":                  { fa: "آراست", mean: "adorned" },
    "aa-raas-tan":               { fa: "آراستن", mean: "to adorn" },
    "gar-doon":                  { fa: "گردون", mean: "the sky, the turning heavens" },
    "peer":                      { fa: "پیر", mean: "old" },
    "bah-raam":                  { fa: "بهرام", mean: "Mars (the planet)" },
    "naa-heed":                  { fa: "ناهید", mean: "Venus (the planet)" },
    "kay-waan":                  { fa: "کیوان", mean: "Saturn (the planet)" },
    "teer":                      { fa: "تیر", mean: "Mercury (the planet); arrow" },
    "ha-ma":                     { fa: "همه", mean: "all, every" },
    "beem":                      { fa: "بیم", mean: "fear" },
    "u-meed":                    { fa: "امید", mean: "hope" },
    "az":                        { fa: "از", mean: "from, of" },
    "az aa-ni oo-yi":            { fa: "از آن اوی", mean: "belongs to Him - literally of His" },
    "aan":                       { fa: "آن", mean: "that" },
    "oo":                        { fa: "او", mean: "he, she; his, her" },
    "tan":                       { fa: "تن", mean: "body" },
    "maa":                       { fa: "ما", mean: "we" },
    "far-maan":                  { fa: "فرمان", mean: "command" },
    "sha-wad":                   { fa: "شود", mean: "become" },
    "shu-dan":                   { fa: "شدن", mean: "to become" },
    "khoon":                     { fa: "خون", mean: "blood" },
    "khoo-ni khaa-ma":           { fa: "خون خامه", mean: "ink - literally the blood of the pen" },
    "a-gar":                     { fa: "اگر", mean: "if" },
    "aab":                       { fa: "آب", mean: "water" },
    "rood":                      { fa: "رود", mean: "river" },
    "paa-yaan":                  { fa: "پایان", mean: "end" },
    "na-yaa-yad":                { fa: "نیاید", mean: "would not come" },
    "aa-ma-dan":                 { fa: "آمدن", mean: "to come" },
    "nu-wish-tash":              { fa: "نوشتش", mean: "writing it, writing His (praise)" },
    "du-rood":                   { fa: "درود", mean: "praise, blessing; greeting" },
    "si-paas":                   { fa: "سپاس", mean: "thanks" },
    "sa-taa-yish":               { fa: "ستایش", mean: "praise" },
    "wa-raa":                    { fa: "ورا", mean: "him (oo raa)" },
    "dar-khor":                  { fa: "درخور", mean: "worthy, due" },
    "ast":                       { fa: "است", mean: "is" },
    "khus-raw":                  { fa: "خسرو", mean: "king" },
    "yaa-war":                   { fa: "یاور", mean: "helper" },
    "daa-war":                   { fa: "داور", mean: "judge" },
    "ah-mad":                    { fa: "احمد", mean: "Ahmad" },
    "yaa-seen":                  { fa: "یاسین", mean: "Yasin" },
    "far-khaa-ree":              { fa: "فرخاری", mean: "Farkhari, from Farkhar in Takhar" }
  },

  // How the letters of the pronunciations are said, as in Onion Skin.
  sounds: [
    [
      "aa",
      "as in “father”"
    ],
    [
      "a",
      "as in “cat”; a word’s last a, as in “sofa”"
    ],
    [
      "ay",
      "as in “say”"
    ],
    [
      "ee",
      "as in “see”"
    ],
    [
      "i",
      "as in “sit”"
    ],
    [
      "o",
      "as in “go”"
    ],
    [
      "oo",
      "as in “food”"
    ],
    [
      "u",
      "as in “put”"
    ],
    [
      "aw",
      "as in “cow”"
    ],
    [
      "kh",
      "the rough h in Scottish “loch”"
    ],
    [
      "gh",
      "a French r"
    ],
    [
      "q",
      "a k made deep in the throat"
    ],
    [
      "-",
      "between syllables; -i at the end of a word joins it to the next, “of”"
    ]
  ],

  // The lesson. Each word: [the word as printed, its pronunciation in this
  // sentence, then the entries from "words" its slip shows, in order].
  title: {
    "say": "hamd",
    "mean": "Praise of God",
    "words": [
      [
        "حمد",
        "hamd",
        "hamd"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "ba naa-mi su-khan par-wa-ri baa-hu-nar",
        "mean": "In the name of the skillful nurturer of speech,",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "نام",
            "naa-mi",
            "naam"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan",
            "su-khan par-wa-ri"
          ],
          [
            "پرور",
            "par-wa-ri",
            "par-war",
            "su-khan par-wa-ri"
          ],
          [
            "باهنر",
            "baa-hu-nar",
            "baa-hu-nar"
          ]
        ]
      },
      {
        "say": "ja-haan-daa-ri nay-ko-fa-ri naam-war",
        "mean": "the glorious, renowned Lord of the world,",
        "words": [
          [
            "جهاندار",
            "ja-haan-daa-ri",
            "ja-haan-daar"
          ],
          [
            "نیکوفر",
            "nay-ko-fa-ri",
            "nay-ko-far"
          ],
          [
            "نامور",
            "naam-war",
            "naam-war"
          ]
        ]
      }
    ],
    [
      {
        "say": "khu-daa-wan-di das-toor wa naam wa zu-baan",
        "mean": "the Lord of rules, of names and of language,",
        "words": [
          [
            "خداوند",
            "khu-daa-wan-di",
            "khu-daa-wand"
          ],
          [
            "دستور",
            "das-toor",
            "das-toor"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نام",
            "naam",
            "naam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زبان",
            "zu-baan",
            "zu-baan"
          ]
        ]
      },
      {
        "say": "far af-zaa-yi aa-yee-ni daa-nish-wa-raan",
        "mean": "who adds splendor to the ways of the learned;",
        "words": [
          [
            "فر",
            "far",
            "far",
            "far af-zaa-yi"
          ],
          [
            "افزای",
            "af-zaa-yi",
            "af-zaa",
            "far af-zaa-yi"
          ],
          [
            "آیین",
            "aa-yee-ni",
            "aa-yeen"
          ],
          [
            "دانشوران",
            "daa-nish-wa-raan",
            "daa-nish-wa-raan"
          ]
        ]
      }
    ],
    [
      {
        "say": "khu-daa-yay ki saw-gand bar khaa-ma kard",
        "mean": "the God who swore by the pen,",
        "words": [
          [
            "خدایی",
            "khu-daa-yay",
            "khu-daa-yay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "سوگند",
            "saw-gand",
            "saw-gand",
            "saw-gand bar khaa-ma kard",
            "saw-gand kar-dan"
          ],
          [
            "بر",
            "bar",
            "bar",
            "saw-gand bar khaa-ma kard",
            "saw-gand kar-dan"
          ],
          [
            "خامه",
            "khaa-ma",
            "khaa-ma",
            "saw-gand bar khaa-ma kard",
            "saw-gand kar-dan"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "saw-gand bar khaa-ma kard",
            "kar-dan",
            "saw-gand kar-dan"
          ]
        ]
      },
      {
        "say": "ba khaan-dan bi-far-mood wa ham naa-ma kard",
        "mean": "who commanded reading, and also made a book;",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خواندن",
            "khaan-dan",
            "khaan-dan"
          ],
          [
            "بفرمود",
            "bi-far-mood",
            "bi-far-mood",
            "far-moo-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "نامه",
            "naa-ma",
            "naa-ma"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "az-oo yaaft an-day-sha pay-daa-yi-shash",
        "mean": "from Him thought found its beginning,",
        "words": [
          [
            "ازو",
            "az-oo",
            "az-oo"
          ],
          [
            "یافت",
            "yaaft",
            "yaaft",
            "yaaf-tan"
          ],
          [
            "اندیشه",
            "an-day-sha",
            "an-day-sha"
          ],
          [
            "پیدایشش",
            "pay-daa-yi-shash",
            "pay-daa-yi-shash"
          ]
        ]
      },
      {
        "say": "khi-rad poo-ya gaa-ree ra-waan paa-yi-shash",
        "mean": "reason its movement, and the soul its lasting;",
        "words": [
          [
            "خرد",
            "khi-rad",
            "khi-rad"
          ],
          [
            "پویه",
            "poo-ya",
            "poo-ya",
            "poo-ya gaa-ree"
          ],
          [
            "گاری",
            "gaa-ree",
            "gaa-ree",
            "poo-ya gaa-ree"
          ],
          [
            "روان",
            "ra-waan",
            "ra-waan"
          ],
          [
            "پایشش",
            "paa-yi-shash",
            "paa-yi-shash"
          ]
        ]
      }
    ],
    [
      {
        "say": "na-waa-zish-gar wa daad-gar, rah-na-maay",
        "mean": "kind and just, our guide,",
        "words": [
          [
            "نوازشگر",
            "na-waa-zish-gar",
            "na-waa-zish-gar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دادگر،",
            "daad-gar",
            "daad-gar"
          ],
          [
            "رهنمای",
            "rah-na-maay",
            "rah-na-maay"
          ]
        ]
      },
      {
        "say": "ta-waan-bakhsh wa yak-taa-yi daa-nish fa-zaay",
        "mean": "the giver of strength, the One who increases knowledge;",
        "words": [
          [
            "توانبخش",
            "ta-waan-bakhsh",
            "ta-waan-bakhsh"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یکتای",
            "yak-taa-yi",
            "yak-taa"
          ],
          [
            "دانش",
            "daa-nish",
            "daa-nish",
            "daa-nish fa-zaay"
          ],
          [
            "فزای",
            "fa-zaay",
            "fa-zaay",
            "daa-nish fa-zaay"
          ]
        ]
      }
    ],
    [
      {
        "say": "khu-daa-yay ki dar khar-ga-hi aa-si-maan",
        "mean": "the God who, in the tent of the sky,",
        "words": [
          [
            "خدایی",
            "khu-daa-yay",
            "khu-daa-yay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "خرگهٔ",
            "khar-ga-hi",
            "khar-gah"
          ],
          [
            "آسمان",
            "aa-si-maan",
            "aa-si-maan"
          ]
        ]
      },
      {
        "say": "za-meen aa-fa-reed wa mah wa kah-ka-shaan",
        "mean": "created the earth, the moon and the galaxy;",
        "words": [
          [
            "زمین",
            "za-meen",
            "za-meen"
          ],
          [
            "آفرید",
            "aa-fa-reed",
            "aa-fa-reed",
            "aa-fa-ree-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مه",
            "mah",
            "mah"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کهکشان",
            "kah-ka-shaan",
            "kah-ka-shaan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ba baa-laa-yi ay-waan, ni-gaa-reen si-pihr",
        "mean": "high above in the hall, the painted heavens,",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بالای",
            "baa-laa-yi",
            "baa-laa"
          ],
          [
            "ایوان،",
            "ay-waan",
            "ay-waan"
          ],
          [
            "نگارین",
            "ni-gaa-reen",
            "ni-gaa-reen"
          ],
          [
            "سپهر",
            "si-pihr",
            "si-pihr"
          ]
        ]
      },
      {
        "say": "ba gay-tee-yi ba-ree-nash da-rakh-shan-da mihr",
        "mean": "and in His high world the shining sun;",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "گیتی",
            "gay-tee-yi",
            "gay-tee"
          ],
          [
            "برینش",
            "ba-ree-nash",
            "ba-ree-nash"
          ],
          [
            "درخشنده",
            "da-rakh-shan-da",
            "da-rakh-shan-da"
          ],
          [
            "مهر",
            "mihr",
            "mihr"
          ]
        ]
      }
    ],
    [
      {
        "say": "ki-naa-ri ra-hi shee-ree-yi kah-ka-shaan",
        "mean": "beside the milky road of the galaxy,",
        "words": [
          [
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "رهٔ",
            "ra-hi",
            "rah"
          ],
          [
            "شیری",
            "shee-ree-yi",
            "shee-ree"
          ],
          [
            "کهکشان",
            "kah-ka-shaan",
            "kah-ka-shaan"
          ]
        ]
      },
      {
        "say": "ha-zaa-raan a-bar akh-ta-ri aa-tash fi-shaan",
        "mean": "thousands of great stars spewing fire;",
        "words": [
          [
            "هزاران",
            "ha-zaa-raan",
            "ha-zaa-raan"
          ],
          [
            "اَبَر",
            "a-bar",
            "a-bar"
          ],
          [
            "اختر",
            "akh-ta-ri",
            "akh-tar"
          ],
          [
            "آتش",
            "aa-tash",
            "aa-tash",
            "aa-tash fi-shaan"
          ],
          [
            "فشان",
            "fi-shaan",
            "fi-shaan",
            "aa-tash fi-shaan"
          ]
        ]
      }
    ],
    [
      {
        "say": "khu-daa-yay ki aa-raast gar-doo-ni peer",
        "mean": "the God who adorned the ancient sky",
        "words": [
          [
            "خدایی",
            "khu-daa-yay",
            "khu-daa-yay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "آراست",
            "aa-raast",
            "aa-raast",
            "aa-raas-tan"
          ],
          [
            "گردون",
            "gar-doo-ni",
            "gar-doon"
          ],
          [
            "پیر",
            "peer",
            "peer"
          ]
        ]
      },
      {
        "say": "ba bah-raam wa naa-heed wa kay-waan wa teer",
        "mean": "with Mars, Venus, Saturn and Mercury.",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بهرام",
            "bah-raam",
            "bah-raam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناهید",
            "naa-heed",
            "naa-heed"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کیوان",
            "kay-waan",
            "kay-waan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تیر",
            "teer",
            "teer"
          ]
        ]
      }
    ],
    [
      {
        "say": "ha-ma beem wa u-meed az aa-ni oo-yi",
        "mean": "All fear and hope belong to Him;",
        "words": [
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "بیم",
            "beem",
            "beem"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امید",
            "u-meed",
            "u-meed"
          ],
          [
            "از",
            "az",
            "az",
            "az aa-ni oo-yi"
          ],
          [
            "آن",
            "aa-ni",
            "aan",
            "az aa-ni oo-yi"
          ],
          [
            "اوی",
            "oo-yi",
            "oo",
            "az aa-ni oo-yi"
          ]
        ]
      },
      {
        "say": "ra-waan wa ta-ni maa ba far-maa-ni oo-yi",
        "mean": "our soul and body are at His command.",
        "words": [
          [
            "روان",
            "ra-waan",
            "ra-waan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تن",
            "ta-ni",
            "tan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "فرمان",
            "far-maa-ni",
            "far-maan"
          ],
          [
            "اوی",
            "oo-yi",
            "oo"
          ]
        ]
      }
    ],
    [
      {
        "say": "sha-wad khoo-ni khaa-ma a-gar aa-bi rood",
        "mean": "If the water of a river became ink,",
        "words": [
          [
            "شود",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ],
          [
            "خون",
            "khoo-ni",
            "khoon",
            "khoo-ni khaa-ma"
          ],
          [
            "خامه",
            "khaa-ma",
            "khaa-ma",
            "khoo-ni khaa-ma"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "آب",
            "aa-bi",
            "aab"
          ],
          [
            "رود",
            "rood",
            "rood"
          ]
        ]
      },
      {
        "say": "ba paa-yaan na-yaa-yad nu-wish-tash du-rood",
        "mean": "writing His praise would never come to an end.",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "پایان",
            "paa-yaan",
            "paa-yaan"
          ],
          [
            "نیاید",
            "na-yaa-yad",
            "na-yaa-yad",
            "aa-ma-dan"
          ],
          [
            "نوشتش",
            "nu-wish-tash",
            "nu-wish-tash"
          ],
          [
            "درود",
            "du-rood",
            "du-rood"
          ]
        ]
      }
    ],
    [
      {
        "say": "si-paas wa sa-taa-yish wa-raa dar-khor ast",
        "mean": "Thanks and praise are His due,",
        "words": [
          [
            "سپاس",
            "si-paas",
            "si-paas"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ستایش",
            "sa-taa-yish",
            "sa-taa-yish"
          ],
          [
            "ورا",
            "wa-raa",
            "wa-raa"
          ],
          [
            "درخور",
            "dar-khor",
            "dar-khor"
          ],
          [
            "است",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "ki oo khus-raw wa yaa-war wa daa-war ast",
        "mean": "for He is the King, the Helper and the Judge.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "خسرو",
            "khus-raw",
            "khus-raw"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یاور",
            "yaa-war",
            "yaa-war"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "داور",
            "daa-war",
            "daa-war"
          ],
          [
            "است",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "“ah-mad yaa-seen far-khaa-ree”",
        "mean": "Ahmad Yasin Farkhari",
        "words": [
          [
            "«احمد",
            "ah-mad",
            "ah-mad"
          ],
          [
            "یاسین",
            "yaa-seen",
            "yaa-seen"
          ],
          [
            "فرخاری»",
            "far-khaa-ree",
            "far-khaa-ree"
          ]
        ]
      }
    ]
  ]
});
