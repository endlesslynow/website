/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 2, book pages 8-8, PDF pages 15-15 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «می کرد» is written «می‌کرد»; «کاخ های» is written «کاخ‌های».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-02',
  group: 'Dari · grade 9',
  label: 'Lesson 2',
  name: "naa-ti sha-reef",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_02.jpg',
    alt: "The Prophet's Mosque in Medina, with its white minarets, lit up at dusk."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_02.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "naat":              { fa: "نعت", mean: "praise of the Prophet" },
    "sha-reef":          { fa: "شریف", mean: "noble, honored" },
    "taa-reekh":         { fa: "تاریخ", mean: "history; date" },
    "bar":               { fa: "بر", mean: "on, upon" },
    "du":                { fa: "دو", mean: "two" },
    "du raa-hee-yi":     { fa: "دو راهی", mean: "a crossroads, a fork in the road" },
    "raa-hee":           { fa: "راهی", mean: "road (du raa-hee, a crossroads)" },
    "mar-mooz":          { fa: "مرموز", mean: "mysterious" },
    "sar-na-wisht":      { fa: "سرنوشت", mean: "fate" },
    "is-taa-da":         { fa: "استاده", mean: "standing" },
    "bood":              { fa: "بود", mean: "was" },
    "bu-dan":            { fa: "بودن", mean: "to be" },
    "wa":                { fa: "و", mean: "and" },
    "chashm":            { fa: "چشم", mean: "eye" },
    "ba":                { fa: "به", mean: "to" },
    "zul-mat":           { fa: "ظلمت", mean: "darkness" },
    "si-pur-da":         { fa: "سپرده", mean: "given over, entrusted" },
    "si-pur-da bood":    { fa: "سپرده بود", mean: "had given" },
    "si-pur-dan":        { fa: "سپردن", mean: "to give over, to entrust" },
    "oo":                { fa: "او", mean: "he, she; his, her" },
    "aa-mad":            { fa: "آمد", mean: "came" },
    "aa-ma-dan":         { fa: "آمدن", mean: "to come" },
    "chi-raagh":         { fa: "چراغ", mean: "lamp" },
    "hi-daa-yat":        { fa: "هدایت", mean: "guidance" },
    "ba-dast":           { fa: "به‌دست", mean: "in hand" },
    "raah":              { fa: "راه", mean: "way, road" },
    "na-jaat":           { fa: "نجات", mean: "salvation, rescue" },
    "raa":               { fa: "را", mean: "marks the object of the verb" },
    "dil":               { fa: "دل", mean: "heart" },
    "tee-ra-gee":        { fa: "تیره‌گی", mean: "darkness" },
    "gu-shood":          { fa: "گشود", mean: "opened" },
    "gu-sho-dan":        { fa: "گشودن", mean: "to open" },
    "in-saan":           { fa: "انسان", mean: "a person, a human being" },
    "zayr":              { fa: "زیر", mean: "under" },
    "khir-man":          { fa: "خرمن", mean: "heap, harvest pile" },
    "zan-jeer":          { fa: "زنجیر", mean: "chain" },
    "may-kha-zeed":      { fa: "می‌خزید", mean: "crawled" },
    "kha-zee-dan":       { fa: "خزیدن", mean: "to creep, to crawl" },
    "dar":               { fa: "در", mean: "in" },
    "dar band":          { fa: "در بند", mean: "in chains, captive" },
    "band":              { fa: "بند", mean: "bond, chain" },
    "gar-dan":           { fa: "گردن", mean: "neck" },
    "aa-zaad":           { fa: "آزاد", mean: "free" },
    "aa-da-mee":         { fa: "آدمی", mean: "man, human being" },
    "kham":              { fa: "خم", mean: "bent" },
    "gash-ta":           { fa: "گشته", mean: "turned" },
    "gash-tan":          { fa: "گشتن", mean: "to become; to turn; to wander" },
    "pusht":             { fa: "پشت", mean: "back" },
    "ja-haan":           { fa: "جهان", mean: "world" },
    "baar":              { fa: "بار", mean: "time, occasion; load" },
    "zulm":              { fa: "ظلم", mean: "oppression, injustice" },
    "ran-gay":           { fa: "رنگی", mean: "a color, a trace" },
    "na-bood":           { fa: "نبود", mean: "was not" },
    "za":                { fa: "ز", mean: "from (short for az)" },
    "aa-dam":            { fa: "آدم", mean: "man, human being" },
    "bo-yay":            { fa: "بویی", mean: "a scent" },
    "mar-du-mee":        { fa: "مردمی", mean: "humanity, kindness" },
    "aas-taan":          { fa: "آستان", mean: "threshold" },
    "khu-daa-yaan":      { fa: "خدایان", mean: "gods" },
    "mar-ma-reen":       { fa: "مرمرین", mean: "marble" },
    "khaak":             { fa: "خاک", mean: "dust, earth" },
    "may-ni-haad":       { fa: "می‌نهاد", mean: "put, laid" },
    "ni-haa-dan":        { fa: "نهادن", mean: "to put, to place" },
    "sar":               { fa: "سر", mean: "head" },
    "pur":               { fa: "پر", mean: "full" },
    "pur ghu-roor":      { fa: "پُر غرور", mean: "proud, full of pride" },
    "ghu-roor":          { fa: "غرور", mean: "pride" },
    "ma-bad":            { fa: "معبد", mean: "temple" },
    "za-maa-na":         { fa: "زمانه", mean: "the age, the times" },
    "mih-raab":          { fa: "محراب", mean: "prayer niche, altar" },
    "qarn-haa":          { fa: "قرن‌ها", mean: "centuries" },
    "may-kard":          { fa: "می‌کرد", mean: "used to do, kept doing" },
    "may-kard bo-sa":    { fa: "می‌کرد بوسه", mean: "kissed - literally did a kiss" },
    "kar-dan":           { fa: "کردن", mean: "to do, to make" },
    "bo-sa kar-dan":     { fa: "بوسه کردن", mean: "to kiss" },
    "bo-sa":             { fa: "بوسه", mean: "kiss" },
    "paa":               { fa: "پا", mean: "foot, leg" },
    "but":               { fa: "بت", mean: "idol" },
    "pool":              { fa: "پول", mean: "money" },
    "zor":               { fa: "زور", mean: "force" },
    "bas":               { fa: "بس", mean: "many; enough" },
    "kaakh-haa":         { fa: "کاخ‌ها", mean: "mansions, palaces" },
    "mar-mar":           { fa: "مرمر", mean: "marble" },
    "qasr-haa":          { fa: "قصرها", mean: "palaces" },
    "aaj":               { fa: "عاج", mean: "ivory" },
    "push-ta-haa":       { fa: "پشته‌ها", mean: "heaps, mounds" },
    "jum-ju-ma-haa":     { fa: "جمجمه‌ها", mean: "skulls" },
    "ees-taa-da":        { fa: "ایستاده", mean: "standing" },
    "ees-taa-dan":       { fa: "ایستادن", mean: "to stand" },
    "bazm":              { fa: "بزم", mean: "feast, party" },
    "may-gu-saa-ree":    { fa: "میگساری", mean: "wine drinking" },
    "khal-wat":          { fa: "خلوت", mean: "privacy, solitude" },
    "ha-was":            { fa: "هوس", mean: "lust, desire" },
    "khoon":             { fa: "خون", mean: "blood" },
    "ka-saan":           { fa: "کسان", mean: "people" },
    "jaam":              { fa: "جام", mean: "cup, goblet" },
    "khi-saan":          { fa: "خسان", mean: "the base, the mean" },
    "jaa":               { fa: "جا", mean: "place" },
    "jaa-yi baa-da":     { fa: "جای باده", mean: "instead of wine - literally the place of wine" },
    "baa-da":            { fa: "باده", mean: "wine" },
    "az":                { fa: "از", mean: "from, of" },
    "hi-jaaz":           { fa: "حجاز", mean: "the Hijaz, the land of Mecca and Medina" },
    "qur-aan":           { fa: "قرآن", mean: "the Quran" },
    "taaj":              { fa: "تاج", mean: "crown" },
    "ka-raa-ma-tay":     { fa: "کرامتی", mean: "dignity (ka-raa-mat + -ay)" },
    "ni-haad":           { fa: "نهاد", mean: "put, placed" },
    "zaa-waaz":          { fa: "زآواز", mean: "from the sound (za + aa-waaz)" },
    "ha-ma":             { fa: "همه", mean: "all, every" },
    "zan-jeer-haa":      { fa: "زنجیرها", mean: "chains" },
    "shi-kast":          { fa: "شکست", mean: "broke" },
    "shi-kas-tan":       { fa: "شکستن", mean: "to break" },
    "sar ba fa-lak":     { fa: "سر به فلک", mean: "sky-high - literally head to the sky" },
    "fa-lak":            { fa: "فلک", mean: "the sky, the heavens" },
    "lar-za":            { fa: "لرزه", mean: "trembling" },
    "lar-za aw-fi-taad": { fa: "لرزه اوفتاد", mean: "began to shake" },
    "lar-za uf-taa-dan": { fa: "لرزه افتادن", mean: "to start shaking" },
    "aw-fi-taad":        { fa: "اوفتاد", mean: "fell (an old form of uf-taad)" },
    "uf-taa-dan":        { fa: "افتادن", mean: "to fall" }
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
    "say": "naa-ti sha-reef",
    "mean": "Praise of the Prophet",
    "words": [
      [
        "نعت",
        "naa-ti",
        "naat"
      ],
      [
        "شریف",
        "sha-reef",
        "sha-reef"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "taa-reekh bar du raa-hee-yi mar-moo-zi sar-na-wisht",
        "mean": "History stood at the mysterious crossroads of fate,",
        "words": [
          [
            "تاریخ",
            "taa-reekh",
            "taa-reekh"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "دو",
            "du",
            "du",
            "du raa-hee-yi"
          ],
          [
            "راهی",
            "raa-hee-yi",
            "raa-hee",
            "du raa-hee-yi"
          ],
          [
            "مرموز",
            "mar-moo-zi",
            "mar-mooz"
          ],
          [
            "سرنوشت",
            "sar-na-wisht",
            "sar-na-wisht"
          ]
        ]
      },
      {
        "say": "is-taa-da bood wa chashm ba zul-mat si-pur-da bood",
        "mean": "its eyes given over to the darkness.",
        "words": [
          [
            "استاده",
            "is-taa-da",
            "is-taa-da"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چشم",
            "chashm",
            "chashm"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ظلمت",
            "zul-mat",
            "zul-mat"
          ],
          [
            "سپرده",
            "si-pur-da",
            "si-pur-da",
            "si-pur-da bood",
            "si-pur-dan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "si-pur-da bood",
            "bu-dan",
            "si-pur-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "“oo” aa-mad wa chi-raa-ghi hi-daa-yat ba-das-ti oo",
        "mean": "“He” came with the lamp of guidance in his hand,",
        "words": [
          [
            "«او»",
            "oo",
            "oo"
          ],
          [
            "آمد",
            "aa-mad",
            "aa-mad",
            "aa-ma-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چراغ",
            "chi-raa-ghi",
            "chi-raagh"
          ],
          [
            "هدایت",
            "hi-daa-yat",
            "hi-daa-yat"
          ],
          [
            "به‌دست",
            "ba-das-ti",
            "ba-dast"
          ],
          [
            "او",
            "oo",
            "oo"
          ]
        ]
      },
      {
        "say": "raa-hi na-jaat raa ba di-li tee-ra-gee gu-shood",
        "mean": "and opened the road of salvation into the heart of darkness.",
        "words": [
          [
            "راه",
            "raa-hi",
            "raah"
          ],
          [
            "نجات",
            "na-jaat",
            "na-jaat"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دل",
            "di-li",
            "dil"
          ],
          [
            "تیره‌گی",
            "tee-ra-gee",
            "tee-ra-gee"
          ],
          [
            "گشود",
            "gu-shood",
            "gu-shood",
            "gu-sho-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "in-saan ba zay-ri khir-ma-ni zan-jeer may-kha-zeed",
        "mean": "Mankind crawled under a heap of chains;",
        "words": [
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "زیر",
            "zay-ri",
            "zayr"
          ],
          [
            "خرمن",
            "khir-ma-ni",
            "khir-man"
          ],
          [
            "زنجیر",
            "zan-jeer",
            "zan-jeer"
          ],
          [
            "می‌خزید",
            "may-kha-zeed",
            "may-kha-zeed",
            "kha-zee-dan"
          ]
        ]
      },
      {
        "say": "dar band bood gar-da-ni aa-zaa-di aa-da-mee",
        "mean": "the free neck of man was in bondage.",
        "words": [
          [
            "در",
            "dar",
            "dar",
            "dar band"
          ],
          [
            "بند",
            "band",
            "band",
            "dar band"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "گردن",
            "gar-da-ni",
            "gar-dan"
          ],
          [
            "آزاد",
            "aa-zaa-di",
            "aa-zaad"
          ],
          [
            "آدمی",
            "aa-da-mee",
            "aa-da-mee"
          ]
        ]
      }
    ],
    [
      {
        "say": "kham gash-ta bood push-ti ja-haan zay-ri baa-ri zulm",
        "mean": "The back of the world was bent under the load of oppression;",
        "words": [
          [
            "خم",
            "kham",
            "kham"
          ],
          [
            "گشته",
            "gash-ta",
            "gash-ta",
            "gash-tan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "پشت",
            "push-ti",
            "pusht"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "زیر",
            "zay-ri",
            "zayr"
          ],
          [
            "بار",
            "baa-ri",
            "baar"
          ],
          [
            "ظلم",
            "zulm",
            "zulm"
          ]
        ]
      },
      {
        "say": "ran-gay na-bood za aa-dam wa bo-yay za mar-du-mee",
        "mean": "there was no trace of man, no scent of kindness.",
        "words": [
          [
            "رنگی",
            "ran-gay",
            "ran-gay"
          ],
          [
            "نبود",
            "na-bood",
            "na-bood",
            "bu-dan"
          ],
          [
            "ز",
            "za",
            "za"
          ],
          [
            "آدم",
            "aa-dam",
            "aa-dam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بویی",
            "bo-yay",
            "bo-yay"
          ],
          [
            "ز",
            "za",
            "za"
          ],
          [
            "مردمی",
            "mar-du-mee",
            "mar-du-mee"
          ]
        ]
      }
    ],
    [
      {
        "say": "in-saan ba aas-taa-ni khu-daa-yaa-ni mar-ma-reen",
        "mean": "At the threshold of marble gods",
        "words": [
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "آستان",
            "aas-taa-ni",
            "aas-taan"
          ],
          [
            "خدایان",
            "khu-daa-yaa-ni",
            "khu-daa-yaan"
          ],
          [
            "مرمرین",
            "mar-ma-reen",
            "mar-ma-reen"
          ]
        ]
      },
      {
        "say": "bar khaak may-ni-haad sa-ri pur ghu-roor raa",
        "mean": "man laid his proud head in the dust.",
        "words": [
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "خاک",
            "khaak",
            "khaak"
          ],
          [
            "می‌نهاد",
            "may-ni-haad",
            "may-ni-haad",
            "ni-haa-dan"
          ],
          [
            "سر",
            "sa-ri",
            "sar"
          ],
          [
            "پُر",
            "pur",
            "pur",
            "pur ghu-roor"
          ],
          [
            "غرور",
            "ghu-roor",
            "ghu-roor",
            "pur ghu-roor"
          ],
          [
            "را",
            "raa",
            "raa"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar ma-ba-di za-maa-na-yi ba mih-raa-bi qarn-haa",
        "mean": "In the temple of the age, at the altar of the centuries,",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "معبد",
            "ma-ba-di",
            "ma-bad"
          ],
          [
            "زمانه",
            "za-maa-na-yi",
            "za-maa-na"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "محراب",
            "mih-raa-bi",
            "mih-raab"
          ],
          [
            "قرن‌ها",
            "qarn-haa",
            "qarn-haa"
          ]
        ]
      },
      {
        "say": "may-kard bo-sa paa-yi bu-ti pool wa zor raa",
        "mean": "he kissed the feet of the idol of money and force.",
        "words": [
          [
            "می‌کرد",
            "may-kard",
            "may-kard",
            "may-kard bo-sa",
            "kar-dan",
            "bo-sa kar-dan"
          ],
          [
            "بوسه",
            "bo-sa",
            "bo-sa",
            "may-kard bo-sa",
            "bo-sa kar-dan"
          ],
          [
            "پای",
            "paa-yi",
            "paa"
          ],
          [
            "بُت",
            "bu-ti",
            "but"
          ],
          [
            "پول",
            "pool",
            "pool"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زور",
            "zor",
            "zor"
          ],
          [
            "را",
            "raa",
            "raa"
          ]
        ]
      }
    ],
    [
      {
        "say": "bas kaakh-haa-yi mar-mar wa bas qasr-haa-yi aaj",
        "mean": "Many marble mansions and many ivory palaces",
        "words": [
          [
            "بس",
            "bas",
            "bas"
          ],
          [
            "کاخ‌های",
            "kaakh-haa-yi",
            "kaakh-haa"
          ],
          [
            "مرمر",
            "mar-mar",
            "mar-mar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بس",
            "bas",
            "bas"
          ],
          [
            "قصرهای",
            "qasr-haa-yi",
            "qasr-haa"
          ],
          [
            "عاج",
            "aaj",
            "aaj"
          ]
        ]
      },
      {
        "say": "bar push-ta-haa-yi jum-ju-ma-haa ees-taa-da bood",
        "mean": "stood on heaps of skulls.",
        "words": [
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "پشته‌های",
            "push-ta-haa-yi",
            "push-ta-haa"
          ],
          [
            "جُمجُمه‌ها",
            "jum-ju-ma-haa",
            "jum-ju-ma-haa"
          ],
          [
            "ایستاده",
            "ees-taa-da",
            "ees-taa-da",
            "ees-taa-dan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar baz-mi may-gu-saa-ree wa dar khal-wa-ti ha-was",
        "mean": "At drinking feasts and in the privacy of lust,",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بزم",
            "baz-mi",
            "bazm"
          ],
          [
            "میگساری",
            "may-gu-saa-ree",
            "may-gu-saa-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "خلوت",
            "khal-wa-ti",
            "khal-wat"
          ],
          [
            "هوس",
            "ha-was",
            "ha-was"
          ]
        ]
      },
      {
        "say": "khoo-ni ka-saan ba jaa-mi khi-saan jaa-yi baa-da bood",
        "mean": "the blood of the people was in the cups of the base instead of wine.",
        "words": [
          [
            "خون",
            "khoo-ni",
            "khoon"
          ],
          [
            "کسان",
            "ka-saan",
            "ka-saan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "جام",
            "jaa-mi",
            "jaam"
          ],
          [
            "خسان",
            "khi-saan",
            "khi-saan"
          ],
          [
            "جای",
            "jaa-yi",
            "jaa",
            "jaa-yi baa-da"
          ],
          [
            "باده",
            "baa-da",
            "baa-da",
            "jaa-yi baa-da"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "“oo” az hi-jaaz aa-mad wa qur-aan ba-das-ti oo",
        "mean": "“He” came from the Hijaz with the Quran in his hand,",
        "words": [
          [
            "«او»",
            "oo",
            "oo"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "حجاز",
            "hi-jaaz",
            "hi-jaaz"
          ],
          [
            "آمد",
            "aa-mad",
            "aa-mad",
            "aa-ma-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قرآن",
            "qur-aan",
            "qur-aan"
          ],
          [
            "به‌دست",
            "ba-das-ti",
            "ba-dast"
          ],
          [
            "او",
            "oo",
            "oo"
          ]
        ]
      },
      {
        "say": "taa-ji ka-raa-ma-tay ba sa-ri aa-da-mee ni-haad",
        "mean": "and placed a crown of dignity on the head of man.",
        "words": [
          [
            "تاج",
            "taa-ji",
            "taaj"
          ],
          [
            "کرامتی",
            "ka-raa-ma-tay",
            "ka-raa-ma-tay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سر",
            "sa-ri",
            "sar"
          ],
          [
            "آدمی",
            "aa-da-mee",
            "aa-da-mee"
          ],
          [
            "نهاد",
            "ni-haad",
            "ni-haad",
            "ni-haa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "zaa-waa-zi paa-yi oo ha-ma zan-jeer-haa shi-kast",
        "mean": "At the sound of his footsteps all the chains broke;",
        "words": [
          [
            "زآواز",
            "zaa-waa-zi",
            "zaa-waaz"
          ],
          [
            "پای",
            "paa-yi",
            "paa"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "زنجیرها",
            "zan-jeer-haa",
            "zan-jeer-haa"
          ],
          [
            "شکست",
            "shi-kast",
            "shi-kast",
            "shi-kas-tan"
          ]
        ]
      },
      {
        "say": "bar kaakh-haa-yi sar ba fa-lak lar-za aw-fi-taad",
        "mean": "the sky-high palaces began to shake.",
        "words": [
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "کاخ‌های",
            "kaakh-haa-yi",
            "kaakh-haa"
          ],
          [
            "سر",
            "sar",
            "sar",
            "sar ba fa-lak"
          ],
          [
            "به",
            "ba",
            "ba",
            "sar ba fa-lak"
          ],
          [
            "فلک",
            "fa-lak",
            "fa-lak",
            "sar ba fa-lak"
          ],
          [
            "لرزه",
            "lar-za",
            "lar-za",
            "lar-za aw-fi-taad",
            "lar-za uf-taa-dan"
          ],
          [
            "اوفتاد",
            "aw-fi-taad",
            "aw-fi-taad",
            "lar-za aw-fi-taad",
            "uf-taa-dan",
            "lar-za uf-taa-dan"
          ]
        ]
      }
    ]
  ]
});
