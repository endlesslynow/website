/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 18, book pages 116-117, PDF pages 123-124 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «شده اند» is written «شده‌اند»; «داشته اند» is written «داشته‌اند»; «کم نظیر» is written «کم‌نظیر»; «دیوار نگاره‌های» is written «دیوارنگاره‌های»; «نشان دهندهٔ» is written «نشان‌دهندهٔ»; «رنگ روغنی» is written «رنگ‌روغنی»; «غول پیکر» is written «غول‌پیکر»; «تخته سنگ‌ها» is written «تخته‌سنگ‌ها»; «سه صد» is written «سه‌صد»; «تراشیده شده» is written «تراشیده‌شده».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-18',
  group: 'Dari · grade 9',
  label: 'Lesson 18',
  name: "mu-jas-sa-ma-haa-yi-yi bo-daa dar baa-mi-yaan",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_18.jpg',
    alt: "One of the giant standing Buddha statues carved into the cliffs of Bamiyan before its destruction."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_18.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "mu-jas-sa-ma-haa-yi":       { fa: "مجسمه‌های", mean: "statues" },
    "bo-daa":                    { fa: "بودا", mean: "Buddha" },
    "dar":                       { fa: "در", mean: "in" },
    "baa-mi-yaan":               { fa: "بامیان", mean: "Bamiyan" },
    "wi-laa-yat":                { fa: "ولایت", mean: "rule, province" },
    "hash-taa-du panj":          { fa: "۸۵", mean: "85" },
    "kee-lo-mi-tree":            { fa: "کیلومتری", mean: "kilometers, at a distance of kilometers" },
    "sha-maal":                  { fa: "شمال", mean: "north" },
    "gharb":                     { fa: "غرب", mean: "west" },
    "kaa-bul":                   { fa: "کابل", mean: "Kabul" },
    "ya-kay":                    { fa: "یکی", mean: "one" },
    "az":                        { fa: "از", mean: "from, of" },
    "dar-ra-haa-yi":             { fa: "دره‌های", mean: "valleys" },
    "koh":                       { fa: "کوه", mean: "mountain" },
    "hin-do-kush":               { fa: "هندوکش", mean: "Hindu Kush" },
    "waa-qi":                    { fa: "واقع", mean: "situated; becoming" },
    "ast":                       { fa: "است", mean: "is" },
    "een":                       { fa: "این", mean: "this" },
    "ba":                        { fa: "به", mean: "to" },
    "khaa-tir":                  { fa: "خاطر", mean: "mind, memory" },
    "daash-tan":                 { fa: "داشتن", mean: "to have" },
    "du":                        { fa: "دو", mean: "two" },
    "pay-ka-ra":                 { fa: "پیکره", mean: "figure, statue" },
    "mu-jas-sa-ma-yi":           { fa: "مجسمهٔ", mean: "statue" },
    "bu-zurg":                   { fa: "بزرگ", mean: "big, great" },
    "aan":                       { fa: "آن", mean: "that" },
    "shuh-rat":                  { fa: "شهرت", mean: "fame" },
    "ja-haa-nay":                { fa: "جهانی", mean: "a world" },
    "daa-rad":                   { fa: "دارد", mean: "has" },
    "baa":                       { fa: "با", mean: "with" },
    "ir-ti-faa":                 { fa: "ارتفاع", mean: "height" },
    "pan-jaa-hu sih":            { fa: "۵۳", mean: "fifty-three" },
    "mi-tr":                     { fa: "متر", mean: "meter" },
    "wa":                        { fa: "و", mean: "and" },
    "see-u panj":                { fa: "۳۵", mean: "thirty-five" },
    "tan-dees-haa-yi":           { fa: "تندیس‌های", mean: "figures, statues" },
    "ko-chak-tar":               { fa: "کوچکتر", mean: "smaller" },
    "at-raaf":                   { fa: "اطراف", mean: "sides, surroundings" },
    "bar":                       { fa: "بر", mean: "on, upon" },
    "roy":                       { fa: "روی", mean: "face" },
    "sakh-ra-haa-yi":            { fa: "صخره‌های", mean: "cliffs, rocks" },
    "sang":                      { fa: "سنگ", mean: "stone" },
    "ta-raa-shee-da-shu-da-and": { fa: "تراشیده‌شده‌اند", mean: "have been carved" },
    "ta-raa-shee-dan":           { fa: "تراشیدن", mean: "to carve" },
    "kaar":                      { fa: "کار", mean: "work, a job" },
    "saakh-ti-maan":             { fa: "ساختمان", mean: "construction, building" },
    "mu-jas-sa-ma-haa":          { fa: "مجسمه‌ها", mean: "statues" },
    "qarn":                      { fa: "قرن", mean: "century" },
    "du-wum":                    { fa: "دوم", mean: "second" },
    "mee-laa-dee#full":          { fa: "میلادی", say: "mee-laa-dee", mean: "AD, Gregorian" },
    "aa-ghaaz":                  { fa: "آغاز", mean: "beginning" },
    "qaw-lee":                   { fa: "قولی", mean: "an account, a saying" },
    "taa":                       { fa: "تا", mean: "so that; until; to" },
    "chi-haa-rum":               { fa: "چهارم", mean: "fourth" },
    "i-daa-ma":                  { fa: "ادامه", mean: "continuation" },
    "yaaf-ta":                   { fa: "یافته", mean: "found; having been carried" },
    "yaaf-tan":                  { fa: "یافتن", mean: "to find" },
    "maz-koor":                  { fa: "مذکور", mean: "mentioned, known" },
    "faa-si-la-yi":              { fa: "فاصلهٔ", mean: "interval, distance" },
    "chi-haar-sad":              { fa: "۴۰۰", mean: "four hundred" },
    "ham-dee-gar":               { fa: "هم‌دیگر", mean: "each other" },
    "faa-si-la":                 { fa: "فاصله", mean: "distance" },
    "daash-ta-and":              { fa: "داشته‌اند", mean: "have had" },
    "kaar-haa":                  { fa: "کارها", mean: "works, jobs" },
    "kam-na-zeer":               { fa: "کم‌نظیر", mean: "unique, rare" },
    "ja-haan":                   { fa: "جهان", mean: "world" },
    "ma-kaa-nee":                { fa: "مکانی", mean: "a place" },
    "ki":                        { fa: "که", mean: "that, which, who" },
    "qa-raar":                   { fa: "قرار", mean: "place, rest" },
    "haa-wee":                   { fa: "حاوی", mean: "containing" },
    "dee-waar-ni-gaa-ra-haa-yi": { fa: "دیوارنگاره‌های", mean: "wall paintings" },
    "zay-baa-yee":               { fa: "زیبایی", mean: "beauty" },
    "ni-shaan-di-han-da-yi":     { fa: "نشان‌دهندهٔ", mean: "showing, indicating" },
    "ma-da-nee-yat":             { fa: "مدنیت", mean: "civilization" },
    "gu-zash-ta":                { fa: "گذشته", mean: "the past; passed" },
    "gu-zash-tan":               { fa: "گذشتن", mean: "to pass" },
    "yo-naa-nee":                { fa: "یونانی", mean: "Greek" },
    "roo-mee":                   { fa: "رومی", mean: "Rumi, of Rome" },
    "saa-saa-nee":               { fa: "ساسانی", mean: "Sasanian" },
    "mu-ha-qi-qaan":             { fa: "محققان", mean: "researchers" },
    "may-go-yand":               { fa: "می‌گویند", mean: "they say; they call" },
    "guf-tan":                   { fa: "گفتن", mean: "to say, to tell" },
    "ba-raa-yi":                 { fa: "برای", mean: "for" },
    "aan-haa":                   { fa: "آن‌ها", mean: "they, them" },
    "saa-bit":                   { fa: "ثابت", mean: "proved, fixed" },
    "shu-da":                    { fa: "شده", mean: "become; been" },
    "shu-dan":                   { fa: "شدن", mean: "to become" },
    "a-wa-leen":                 { fa: "اولین", mean: "first" },
    "na-qaa-shee-haa-yi":        { fa: "نقاشی‌های", mean: "paintings" },
    "rang-ro-gha-nee":           { fa: "رنگ‌روغنی", mean: "oil-painted, oil painting" },
    "sad-haa":                   { fa: "صدها", mean: "hundreds" },
    "saal":                      { fa: "سال", mean: "year" },
    "qabl":                      { fa: "قبل", mean: "before" },
    "ro-gha-nee":                { fa: "روغنی", mean: "oil, oily" },
    "ow-ro-paa":                 { fa: "اروپا", mean: "Europe" },
    "ghaar-haa-yi":              { fa: "غارهای", mean: "caves" },
    "ha-waa-lee":                { fa: "حوالی", mean: "surroundings, vicinity" },
    "ghool-pay-kar":             { fa: "غول‌پیکر", mean: "gigantic" },
    "bood":                      { fa: "بود", mean: "was" },
    "bu-dan":                    { fa: "بودن", mean: "to be" },
    "af-ghaa-nis-taan":          { fa: "افغانستان", mean: "Afghanistan" },
    "ka-shee-da":                { fa: "کشیده", mean: "drawn, portrayed" },
    "ka-shee-dan":               { fa: "کشیدن", mean: "to pull; to bear" },
    "ma-raa-kiz":                { fa: "مراکز", mean: "centers" },
    "mu-him":                    { fa: "مهم", mean: "important" },
    "ta-mad-dun":                { fa: "تمدن", mean: "civilization" },
    "bo-daa-yee":                { fa: "بودایی", mean: "Buddhist" },
    "ruh-baa-naan":              { fa: "رهبانان", mean: "monks" },
    "zi-yaa-dee":                { fa: "زیادی", mean: "many, a great amount" },
    "ghaar-haa":                 { fa: "غارها", mean: "caves" },
    "takh-ta-sang-haa":          { fa: "تخته‌سنگ‌ها", mean: "rock slabs, ledges" },
    "naz-deek":                  { fa: "نزدیک", mean: "near" },
    "a-zeem":                    { fa: "عَظِیْمٍ", mean: "Arabic: great" },
    "zin-da-gee":                { fa: "زنده‌گی", mean: "life" },
    "may-kar-dand":              { fa: "می‌کردند", mean: "used to do" },
    "kar-dan":                   { fa: "کردن", mean: "to do, to make" },
    "guf-ta":                    { fa: "گفته", mean: "said" },
    "may-sha-wad":               { fa: "می‌شود", mean: "becomes" },
    "khaa-bee-da-yi":            { fa: "خوابیدهٔ", mean: "reclining, sleeping" },
    "dee-ga-ray":                { fa: "دیگری", mean: "someone else" },
    "neez":                      { fa: "نیز", mean: "also, too" },
    "bayn":                      { fa: "بین", mean: "between" },
    "but":                       { fa: "بت", mean: "idol" },
    "zayr":                      { fa: "زیر", mean: "under" },
    "khaak":                     { fa: "خاک", mean: "dust, earth" },
    "khaa-bee-da":               { fa: "خوابیده", mean: "reclining, asleep" },
    "khaa-bee-dan":              { fa: "خوابیدن", mean: "to sleep, lie down" },
    "pro-fe-sor":                { fa: "پروفیسور", mean: "professor" },
    "zum-ri-yaa-lay":            { fa: "زمریالی", mean: "Zemaryalai" },
    "tar-zee":                   { fa: "طرزی", mean: "Tarzi" },
    "may-go-yad":                { fa: "می‌گوید", mean: "says" },
    "say-yaah":                  { fa: "سیاح", mean: "traveler, tourist" },
    "ma-roof":                   { fa: "معروف", mean: "famous" },
    "chee-nee":                  { fa: "چینی", mean: "Chinese" },
    "hee-waan":                  { fa: "هیوان", mean: "Xuan, in Xuanzang" },
    "tsong":                     { fa: "تسونگ", mean: "Zang, in Xuanzang" },
    "sha-shum":                  { fa: "ششم", mean: "sixth" },
    "ki-naar":                   { fa: "کنار", mean: "side, edge" },
    "but-haa":                   { fa: "بت‌ها", mean: "idols" },
    "u-boor":                    { fa: "عبور", mean: "crossing, passing" },
    "kar-da":                    { fa: "کرده", mean: "done" },
    "ki-taab":                   { fa: "کتاب", mean: "book" },
    "khaa-ti-raat":              { fa: "خاطرات", mean: "memoirs, memories" },
    "khud":                      { fa: "خود", mean: "own; self" },
    "dar-baa-ra-yi":             { fa: "دربارهٔ", mean: "about" },
    "yak":                       { fa: "یک", mean: "one, a" },
    "mu-qaa-bil":                { fa: "مقابل", mean: "front; against" },
    "mu-jas-sa-ma":              { fa: "مجسمه", mean: "statue" },
    "chas-pee-da":               { fa: "چسپیده", mean: "attached, stuck" },
    "chas-pee-dan":              { fa: "چسپیدن", mean: "to stick, be attached" },
    "su-khan":                   { fa: "سخن", mean: "speech, words" },
    "tan-dees":                  { fa: "تندیس", mean: "figure, statue" },
    "khaa-bee-da-yee":           { fa: "خوابیده‌یی", mean: "a reclining one" },
    "oo":                        { fa: "او", mean: "he, she; his, her" },
    "khaa-ri-jee":               { fa: "خارجی", mean: "foreign" },
    "pay":                       { fa: "پی", mean: "following, consequence" },
    "kashf":                     { fa: "کشف", mean: "discovery, discovering" },
    "and":                       { fa: "اند", mean: "are; after a word like shu-da, have" },
    "hu-dood":                   { fa: "حدود", mean: "about; limits" },
    "sih-sad":                   { fa: "سه‌صد", mean: "three hundred" },
    "tool":                      { fa: "طول", mean: "length" },
    "way":                       { fa: "وی", mean: "he, she" },
    "a-gar":                     { fa: "اگر", mean: "if" },
    "yaaft":                     { fa: "یافت", mean: "found" },
    "sha-wad":                   { fa: "شود", mean: "become" },
    "bu-zurg-ta-reen":           { fa: "بزرگترین", mean: "largest, greatest" },
    "khaa-had":                  { fa: "خواهد", mean: "will" },
    "khaas-tan":                 { fa: "خواستن", mean: "to want" },
    "a-jaa-yib":                 { fa: "عجایب", mean: "wonders" },
    "haft-gaa-na-yi":            { fa: "هفتگانهٔ", mean: "seven, sevenfold" },
    "af-zood":                   { fa: "افزود", mean: "added" },
    "af-zo-dan":                 { fa: "افزودن", mean: "to add" },
    "pay-ka-ra-yi":              { fa: "پیکرهٔ", mean: "figure, statue, with ezafe" },
    "ta-raa-shee-da-shu-da":     { fa: "تراشیده‌شده", mean: "carved" },
    "dee-waa-ra-yi":             { fa: "دیوارهٔ", mean: "wall, cliff face" },
    "ko-hee":                    { fa: "کوهی", mean: "mountainous, of a mountain" },
    "qalb":                      { fa: "قلب", mean: "heart" },
    "koh-haa":                   { fa: "کوه‌ها", mean: "mountains" },
    "jum-la":                    { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "gan-jee-na-haa-yi":         { fa: "گنجینه‌های", mean: "treasures" },
    "ar-zish-mand":              { fa: "ارزشمند", mean: "valuable" },
    "baas-taa-nee":              { fa: "باستانی", mean: "ancient" },
    "aa-si-yaa":                 { fa: "آسیا", mean: "mill" },
    "boo-dand":                  { fa: "بودند", mean: "were" },
    "daw-raan":                  { fa: "دوران", mean: "period, era" },
    "baas-taan":                 { fa: "باستان", mean: "ancient times" },
    "gu-zar-gaah":               { fa: "گذرگاه", mean: "crossing place, passage" },
    "kaa-ra-waan-haa-yi":        { fa: "کاروان‌های", mean: "caravans" },
    "jaa-da":                    { fa: "جاده", mean: "road, street" },
    "ab-ree-sham":               { fa: "ابریشم", mean: "silk" },
    "boo-da":                    { fa: "بوده", mean: "has been" },
    "im-pi-raa-to-ree":          { fa: "امپراتوری", mean: "empire" },
    "room":                      { fa: "روم", mean: "Rome" },
    "raa":                       { fa: "را", mean: "marks the object of the verb" },
    "hind":                      { fa: "هند", mean: "India" },
    "cheen":                     { fa: "چین", mean: "China" },
    "mur-ta-bit":                { fa: "مرتبط", mean: "connected, linked" },
    "may-saakh-ta":              { fa: "می‌ساخته", mean: "used to make, link" },
    "saakh-tan":                 { fa: "ساختن", mean: "to make, to build" },
    "taw-quf-gaah-haa-yi":       { fa: "توقف‌گاه‌های", mean: "stopping places" },
    "sar-za-meen":               { fa: "سرزمین", mean: "land, country" },
    "paad-shaa-hee":             { fa: "پادشاهی", mean: "kingship" },
    "ku-han":                    { fa: "کهن", mean: "ancient, old" },
    "ko-shaan":                  { fa: "کوشان", mean: "Kushan" },
    "un-waan":                   { fa: "عنوان", mean: "title, capacity (ba un-waan, as)" },
    "kaa-noon":                  { fa: "کانون", mean: "center, focus" },
    "il-mee":                    { fa: "علمی", mean: "scholarly, scientific" },
    "far-han-gee":               { fa: "فرهنگی", mean: "cultural" },
    "maz-ha-bee":                { fa: "مذهبی", mean: "religious" },
    "hin-ree":                   { fa: "هنری", mean: "Henry" },
    "ma-hal":                    { fa: "محل", mean: "place" },
    "zi-yaa-rat":                { fa: "زیارت", mean: "pilgrimage, visiting a shrine" },
    "ih-daa":                    { fa: "اهدا", mean: "giving as a gift" },
    "maw-qo-faat":               { fa: "موقوفات", mean: "endowments" },
    "na-zar":                    { fa: "نظر", mean: "sight, view; opinion" },
    "ja-haan-gar-dee":           { fa: "جهانگردی", mean: "tourism" },
    "aa-saar":                   { fa: "آثار", mean: "works" },
    "kish-war":                  { fa: "کشور", mean: "country" },
    "maa":                       { fa: "ما", mean: "we" },
    "li-haaz":                   { fa: "لحاظ", mean: "point of view" },
    "to-rees-tee":               { fa: "توریستی", mean: "touristic" },
    "si-yaa-ha-tee":             { fa: "سیاحتی", mean: "touristic" },
    "a-waa-yi-dee":              { fa: "عوایدی", mean: "income, revenues" },
    "daash-ta":                  { fa: "داشته", mean: "had" }
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
    "say": "mu-jas-sa-ma-haa-yi-yi bo-daa dar baa-mi-yaan",
    "mean": "The Buddha statues in Bamiyan",
    "words": [
      [
        "مجسمه‌های",
        "mu-jas-sa-ma-haa-yi-yi",
        "mu-jas-sa-ma-haa-yi"
      ],
      [
        "بودا",
        "bo-daa",
        "bo-daa"
      ],
      [
        "در",
        "dar",
        "dar"
      ],
      [
        "بامیان",
        "baa-mi-yaan",
        "baa-mi-yaan"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "wi-laa-ya-ti baa-mi-yaan dar hash-taa-du panj kee-lo-mi-tree-yi sha-maa-li ghar-bi kaa-bul dar ya-kay az dar-ra-haa-yi-yi ko-hi hin-do-kush waa-qi ast.",
        "mean": "Bamiyan Province lies 85 kilometers northwest of Kabul in one of the valleys of the Hindu Kush.",
        "words": [
          [
            "ولایت",
            "wi-laa-ya-ti",
            "wi-laa-yat"
          ],
          [
            "بامیان",
            "baa-mi-yaan",
            "baa-mi-yaan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "۸۵",
            "hash-taa-du panj",
            "hash-taa-du panj"
          ],
          [
            "کیلومتری",
            "kee-lo-mi-tree-yi",
            "kee-lo-mi-tree"
          ],
          [
            "شمال",
            "sha-maa-li",
            "sha-maal"
          ],
          [
            "غرب",
            "ghar-bi",
            "gharb"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دره‌های",
            "dar-ra-haa-yi-yi",
            "dar-ra-haa-yi"
          ],
          [
            "کوه",
            "ko-hi",
            "koh"
          ],
          [
            "هندوکش",
            "hin-do-kush",
            "hin-do-kush"
          ],
          [
            "واقع",
            "waa-qi",
            "waa-qi"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "een wi-laa-yat ba khaa-ti-ri daash-ta-ni du pay-ka-ra (mu-jas-sa-ma-yi) bu-zur-gi aan, shuh-ra-ti ja-haa-nay daa-rad.",
        "mean": "The province is known around the world for its two great figures, or statues.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "ولایت",
            "wi-laa-yat",
            "wi-laa-yat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خاطر",
            "khaa-ti-ri",
            "khaa-tir"
          ],
          [
            "داشتن",
            "daash-ta-ni",
            "daash-tan"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "پیکره",
            "pay-ka-ra",
            "pay-ka-ra"
          ],
          [
            "(مجسمهٔ)",
            "mu-jas-sa-ma-yi",
            "mu-jas-sa-ma-yi"
          ],
          [
            "بزرگ",
            "bu-zur-gi",
            "bu-zurg"
          ],
          [
            "آن،",
            "aan",
            "aan"
          ],
          [
            "شهرت",
            "shuh-ra-ti",
            "shuh-rat"
          ],
          [
            "جهانی",
            "ja-haa-nay",
            "ja-haa-nay"
          ],
          [
            "دارد.",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "mu-jas-sa-ma-haa-yi-yi bu-zur-gi bo-daa baa ir-ti-faa-yi pan-jaa-hu sih mi-tr wa see-u panj mi-tr baa tan-dees-haa-yi-yi ko-chak-tar dar at-raa-fi mu-jas-sa-ma-yi bu-zurg bar ro-yi sakh-ra-haa-yi-yi sang ta-raa-shee-da-shu-da-and.",
        "mean": "The great Buddha statues, 53 and 35 meters high, together with smaller figures around the larger statue, were carved into the rock cliffs.",
        "words": [
          [
            "مجسمه‌های",
            "mu-jas-sa-ma-haa-yi-yi",
            "mu-jas-sa-ma-haa-yi"
          ],
          [
            "بزرگ",
            "bu-zur-gi",
            "bu-zurg"
          ],
          [
            "بودا",
            "bo-daa",
            "bo-daa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "ارتفاع",
            "ir-ti-faa-yi",
            "ir-ti-faa"
          ],
          [
            "۵۳",
            "pan-jaa-hu sih",
            "pan-jaa-hu sih"
          ],
          [
            "متر",
            "mi-tr",
            "mi-tr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "۳۵",
            "see-u panj",
            "see-u panj"
          ],
          [
            "متر",
            "mi-tr",
            "mi-tr"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "تندیس‌های",
            "tan-dees-haa-yi-yi",
            "tan-dees-haa-yi"
          ],
          [
            "کوچکتر",
            "ko-chak-tar",
            "ko-chak-tar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اطراف",
            "at-raa-fi",
            "at-raaf"
          ],
          [
            "مجسمهٔ",
            "mu-jas-sa-ma-yi",
            "mu-jas-sa-ma-yi"
          ],
          [
            "بزرگ",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "روی",
            "ro-yi",
            "roy"
          ],
          [
            "صخره‌های",
            "sakh-ra-haa-yi-yi",
            "sakh-ra-haa-yi"
          ],
          [
            "سنگ",
            "sang",
            "sang"
          ],
          [
            "تراشیده‌شده‌اند.",
            "ta-raa-shee-da-shu-da-and",
            "ta-raa-shee-da-shu-da-and",
            "ta-raa-shee-dan"
          ]
        ]
      },
      {
        "say": "kaa-ri saakh-ti-maa-ni een mu-jas-sa-ma-haa dar qar-ni du-wu-mi mee-laa-dee aa-ghaaz wa ba qaw-lee taa qar-ni chi-haa-ru-mi mee-laa-dee i-daa-ma yaaf-ta ast.",
        "mean": "Construction of these statues began in the second century AD and, according to one account, continued until the fourth century.",
        "words": [
          [
            "کار",
            "kaa-ri",
            "kaar"
          ],
          [
            "ساختمان",
            "saakh-ti-maa-ni",
            "saakh-ti-maan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "مجسمه‌ها",
            "mu-jas-sa-ma-haa",
            "mu-jas-sa-ma-haa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn"
          ],
          [
            "دوم",
            "du-wu-mi",
            "du-wum"
          ],
          [
            "میلادی",
            "mee-laa-dee",
            "mee-laa-dee#full"
          ],
          [
            "آغاز",
            "aa-ghaaz",
            "aa-ghaaz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "قولی",
            "qaw-lee",
            "qaw-lee"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn"
          ],
          [
            "چهارم",
            "chi-haa-ru-mi",
            "chi-haa-rum"
          ],
          [
            "میلادی",
            "mee-laa-dee",
            "mee-laa-dee#full"
          ],
          [
            "ادامه",
            "i-daa-ma",
            "i-daa-ma"
          ],
          [
            "یافته",
            "yaaf-ta",
            "yaaf-ta",
            "yaaf-tan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "mu-jas-sa-ma-haa-yi-yi maz-koor ba faa-si-la-yi chi-haar-sad mi-tr az ham-dee-gar faa-si-la daash-ta-and.",
        "mean": "The two statues stood four hundred meters apart.",
        "words": [
          [
            "مجسمه‌های",
            "mu-jas-sa-ma-haa-yi-yi",
            "mu-jas-sa-ma-haa-yi"
          ],
          [
            "مذکور",
            "maz-koor",
            "maz-koor"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "فاصلهٔ",
            "faa-si-la-yi",
            "faa-si-la-yi"
          ],
          [
            "۴۰۰",
            "chi-haar-sad",
            "chi-haar-sad"
          ],
          [
            "متر",
            "mi-tr",
            "mi-tr"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "هم‌دیگر",
            "ham-dee-gar",
            "ham-dee-gar"
          ],
          [
            "فاصله",
            "faa-si-la",
            "faa-si-la"
          ],
          [
            "داشته‌اند.",
            "daash-ta-and",
            "daash-ta-and",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mu-jas-sa-ma-haa-yi-yi baa-mi-yaan ya-kay az kaar-haa-yi kam-na-zee-ri ja-haan ast.",
        "mean": "The statues of Bamiyan are among the world's unique works.",
        "words": [
          [
            "مجسمه‌های",
            "mu-jas-sa-ma-haa-yi-yi",
            "mu-jas-sa-ma-haa-yi"
          ],
          [
            "بامیان",
            "baa-mi-yaan",
            "baa-mi-yaan"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کارهای",
            "kaar-haa-yi",
            "kaar-haa"
          ],
          [
            "کم‌نظیر",
            "kam-na-zee-ri",
            "kam-na-zeer"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "ma-kaa-nee ki mu-jas-sa-ma-haa-yi-yi bo-daa dar aan qa-raar daa-rad, haa-wee-yi dee-waar-ni-gaa-ra-haa-yi-yi zay-baa-yee ast ki ni-shaan-di-han-da-yi ma-da-nee-ya-ti gu-zash-ta-yi yo-naa-nee, roo-mee wa saa-saa-nee ast.",
        "mean": "The place where the Buddha statues stand contains beautiful wall paintings that show the ancient Greek, Roman and Sasanian civilizations.",
        "words": [
          [
            "مکانی",
            "ma-kaa-nee",
            "ma-kaa-nee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مجسمه‌های",
            "mu-jas-sa-ma-haa-yi-yi",
            "mu-jas-sa-ma-haa-yi"
          ],
          [
            "بودا",
            "bo-daa",
            "bo-daa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "دارد،",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ],
          [
            "حاوی",
            "haa-wee-yi",
            "haa-wee"
          ],
          [
            "دیوارنگاره‌های",
            "dee-waar-ni-gaa-ra-haa-yi-yi",
            "dee-waar-ni-gaa-ra-haa-yi"
          ],
          [
            "زیبایی",
            "zay-baa-yee",
            "zay-baa-yee"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "نشان‌دهندهٔ",
            "ni-shaan-di-han-da-yi",
            "ni-shaan-di-han-da-yi"
          ],
          [
            "مدنیت",
            "ma-da-nee-ya-ti",
            "ma-da-nee-yat"
          ],
          [
            "گذشتهٔ",
            "gu-zash-ta-yi",
            "gu-zash-ta",
            "gu-zash-tan"
          ],
          [
            "یونانی،",
            "yo-naa-nee",
            "yo-naa-nee"
          ],
          [
            "رومی",
            "roo-mee",
            "roo-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ساسانی",
            "saa-saa-nee",
            "saa-saa-nee"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "mu-ha-qi-qaan may-go-yand, ba-raa-yi aan-haa saa-bit shu-da ast ki a-wa-leen na-qaa-shee-haa-yi-yi rang-ro-gha-nee-yi ja-haan, sad-haa saal qabl az na-qaa-shee-haa-yi-yi ro-gha-nee-yi ow-ro-paa dar ghaar-haa-yi-yi ha-waa-lee-yi du mu-jas-sa-ma-yi ghool-pay-kar bood ki dar af-ghaa-nis-taan ka-shee-da shu-da ast.",
        "mean": "Researchers say they have established that the world's first oil paintings were made in caves near the two giant statues in Afghanistan, hundreds of years before Europe's oil paintings.",
        "words": [
          [
            "محققان",
            "mu-ha-qi-qaan",
            "mu-ha-qi-qaan"
          ],
          [
            "می‌گویند،",
            "may-go-yand",
            "may-go-yand",
            "guf-tan"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "ثابت",
            "saa-bit",
            "saa-bit"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "اولین",
            "a-wa-leen",
            "a-wa-leen"
          ],
          [
            "نقاشی‌های",
            "na-qaa-shee-haa-yi-yi",
            "na-qaa-shee-haa-yi"
          ],
          [
            "رنگ‌روغنی",
            "rang-ro-gha-nee-yi",
            "rang-ro-gha-nee"
          ],
          [
            "جهان،",
            "ja-haan",
            "ja-haan"
          ],
          [
            "صدها",
            "sad-haa",
            "sad-haa"
          ],
          [
            "سال",
            "saal",
            "saal"
          ],
          [
            "قبل",
            "qabl",
            "qabl"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نقاشی‌های",
            "na-qaa-shee-haa-yi-yi",
            "na-qaa-shee-haa-yi"
          ],
          [
            "روغنی",
            "ro-gha-nee-yi",
            "ro-gha-nee"
          ],
          [
            "اروپا",
            "ow-ro-paa",
            "ow-ro-paa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "غارهای",
            "ghaar-haa-yi-yi",
            "ghaar-haa-yi"
          ],
          [
            "حوالی",
            "ha-waa-lee-yi",
            "ha-waa-lee"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "مجسمهٔ",
            "mu-jas-sa-ma-yi",
            "mu-jas-sa-ma-yi"
          ],
          [
            "غول‌پیکر",
            "ghool-pay-kar",
            "ghool-pay-kar"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
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
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "کشیده",
            "ka-shee-da",
            "ka-shee-da",
            "ka-shee-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "baa-mi-yaan dar gu-zash-ta ya-kay az ma-raa-ki-zi mu-hi-mi ta-mad-du-ni bo-daa-yee bood wa ruh-baa-naa-ni zi-yaa-dee dar ghaar-haa ro-yi takh-ta-sang-haa, naz-deek ba du mu-jas-sa-ma-yi a-zeem zin-da-gee may-kar-dand.",
        "mean": "In the past Bamiyan was an important center of Buddhist civilization, and many monks lived in caves and on rocky ledges near the two immense statues.",
        "words": [
          [
            "بامیان",
            "baa-mi-yaan",
            "baa-mi-yaan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "گذشته",
            "gu-zash-ta",
            "gu-zash-ta",
            "gu-zash-tan"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مراکز",
            "ma-raa-ki-zi",
            "ma-raa-kiz"
          ],
          [
            "مهم",
            "mu-hi-mi",
            "mu-him"
          ],
          [
            "تمدن",
            "ta-mad-du-ni",
            "ta-mad-dun"
          ],
          [
            "بودایی",
            "bo-daa-yee",
            "bo-daa-yee"
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
            "رهبانان",
            "ruh-baa-naa-ni",
            "ruh-baa-naan"
          ],
          [
            "زیادی",
            "zi-yaa-dee",
            "zi-yaa-dee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "غارها",
            "ghaar-haa",
            "ghaar-haa"
          ],
          [
            "روی",
            "ro-yi",
            "roy"
          ],
          [
            "تخته‌سنگ‌ها،",
            "takh-ta-sang-haa",
            "takh-ta-sang-haa"
          ],
          [
            "نزدیک",
            "naz-deek",
            "naz-deek"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "مجسمهٔ",
            "mu-jas-sa-ma-yi",
            "mu-jas-sa-ma-yi"
          ],
          [
            "عظیم",
            "a-zeem",
            "a-zeem"
          ],
          [
            "زنده‌گی",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "می‌کردند.",
            "may-kar-dand",
            "may-kar-dand",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "guf-ta may-sha-wad, mu-jas-sa-ma-yi khaa-bee-da-yi dee-ga-ray neez dar bay-ni du bu-ti bu-zurg zay-ri khaak khaa-bee-da ast.",
        "mean": "It is said that another reclining statue lies buried beneath the ground between the two great Buddhas.",
        "words": [
          [
            "گفته",
            "guf-ta",
            "guf-ta",
            "guf-tan"
          ],
          [
            "می‌شود،",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ],
          [
            "مجسمهٔ",
            "mu-jas-sa-ma-yi",
            "mu-jas-sa-ma-yi"
          ],
          [
            "خوابیدهٔ",
            "khaa-bee-da-yi",
            "khaa-bee-da-yi"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بین",
            "bay-ni",
            "bayn"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "بت",
            "bu-ti",
            "but"
          ],
          [
            "بزرگ",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "زیر",
            "zay-ri",
            "zayr"
          ],
          [
            "خاک",
            "khaak",
            "khaak"
          ],
          [
            "خوابیده",
            "khaa-bee-da",
            "khaa-bee-da",
            "khaa-bee-dan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "pro-fe-sor zum-ri-yaa-lay tar-zee may-go-yad: “say-yaa-hi ma-roo-fi chee-nee “hee-waan tsong” dar qar-ni sha-shu-mi mee-laa-dee az ki-naa-ri but-haa-yi bo-daa dar baa-mi-yaan u-boor kar-da, dar ki-taa-bi khaa-ti-raa-ti khud dar-baa-ra-yi yak bu-ti khaa-bee-da dar mu-qaa-bi-li du mu-jas-sa-ma-yi chas-pee-da ba koh dar baa-mi-yaan su-khan guf-ta ast.”",
        "mean": "Professor Zemaryalai Tarzi says: “The famous Chinese traveler Xuanzang passed the Buddha figures in Bamiyan in the sixth century AD and wrote in his memoir about a reclining Buddha opposite the two statues attached to the mountain.”",
        "words": [
          [
            "پروفیسور",
            "pro-fe-sor",
            "pro-fe-sor"
          ],
          [
            "زمریالی",
            "zum-ri-yaa-lay",
            "zum-ri-yaa-lay"
          ],
          [
            "طرزی",
            "tar-zee",
            "tar-zee"
          ],
          [
            "می‌گوید:",
            "may-go-yad",
            "may-go-yad",
            "guf-tan"
          ],
          [
            "«سیاح",
            "say-yaa-hi",
            "say-yaah"
          ],
          [
            "معروف",
            "ma-roo-fi",
            "ma-roof"
          ],
          [
            "چینی",
            "chee-nee",
            "chee-nee"
          ],
          [
            "«هیوان",
            "hee-waan",
            "hee-waan"
          ],
          [
            "تسونگ»",
            "tsong",
            "tsong"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn"
          ],
          [
            "ششم",
            "sha-shu-mi",
            "sha-shum"
          ],
          [
            "میلادی",
            "mee-laa-dee",
            "mee-laa-dee#full"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "بت‌های",
            "but-haa-yi",
            "but-haa"
          ],
          [
            "بودا",
            "bo-daa",
            "bo-daa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بامیان",
            "baa-mi-yaan",
            "baa-mi-yaan"
          ],
          [
            "عبور",
            "u-boor",
            "u-boor"
          ],
          [
            "کرده،",
            "kar-da",
            "kar-da",
            "kar-dan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کتاب",
            "ki-taa-bi",
            "ki-taab"
          ],
          [
            "خاطرات",
            "khaa-ti-raa-ti",
            "khaa-ti-raat"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "دربارهٔ",
            "dar-baa-ra-yi",
            "dar-baa-ra-yi"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "بت",
            "bu-ti",
            "but"
          ],
          [
            "خوابیده",
            "khaa-bee-da",
            "khaa-bee-da",
            "khaa-bee-dan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مقابل",
            "mu-qaa-bi-li",
            "mu-qaa-bil"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "مجسمه",
            "mu-jas-sa-ma-yi",
            "mu-jas-sa-ma"
          ],
          [
            "چسپیده",
            "chas-pee-da",
            "chas-pee-da",
            "chas-pee-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کوه",
            "koh",
            "koh"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بامیان",
            "baa-mi-yaan",
            "baa-mi-yaan"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan"
          ],
          [
            "گفته",
            "guf-ta",
            "guf-ta",
            "guf-tan"
          ],
          [
            "است.»",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "tar-zee may-go-yad:",
        "mean": "Tarzi says:",
        "words": [
          [
            "طرزی",
            "tar-zee",
            "tar-zee"
          ],
          [
            "می‌گوید:",
            "may-go-yad",
            "may-go-yad",
            "guf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "“tan-dee-si khaa-bee-da-yee ki oo wa mu-ha-qi-qaa-ni khaa-ri-jee dar pa-yi kash-fi aan and hu-doo-di sih-sad mi-tr tool daa-rad.",
        "mean": "“The reclining statue that he and foreign researchers are trying to discover is about three hundred meters long.",
        "words": [
          [
            "«تندیس",
            "tan-dee-si",
            "tan-dees"
          ],
          [
            "خوابیده‌یی",
            "khaa-bee-da-yee",
            "khaa-bee-da-yee"
          ],
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
            "و",
            "wa",
            "wa"
          ],
          [
            "محققان",
            "mu-ha-qi-qaa-ni",
            "mu-ha-qi-qaan"
          ],
          [
            "خارجی",
            "khaa-ri-jee",
            "khaa-ri-jee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "پی",
            "pa-yi",
            "pay"
          ],
          [
            "کشف",
            "kash-fi",
            "kashf"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "اند",
            "and",
            "and"
          ],
          [
            "حدود",
            "hu-doo-di",
            "hu-dood"
          ],
          [
            "سه‌صد",
            "sih-sad",
            "sih-sad"
          ],
          [
            "متر",
            "mi-tr",
            "mi-tr"
          ],
          [
            "طول",
            "tool",
            "tool"
          ],
          [
            "دارد.",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "way may-go-yad: a-gar mu-jas-sa-ma-yi khaa-bee-da yaaft sha-wad, bu-zurg-ta-reen mu-jas-sa-ma-yi ja-haan khaa-had bood wa ba a-jaa-yi-bi haft-gaa-na-yi ja-haan khaa-had af-zood.”",
        "mean": "He says that if the reclining statue is found, it will be the largest statue in the world and will add to the seven wonders of the world.”",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "می‌گوید:",
            "may-go-yad",
            "may-go-yad",
            "guf-tan"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "مجسمهٔ",
            "mu-jas-sa-ma-yi",
            "mu-jas-sa-ma-yi"
          ],
          [
            "خوابیده",
            "khaa-bee-da",
            "khaa-bee-da",
            "khaa-bee-dan"
          ],
          [
            "یافت",
            "yaaft",
            "yaaft",
            "yaaf-tan"
          ],
          [
            "شود،",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ],
          [
            "بزرگترین",
            "bu-zurg-ta-reen",
            "bu-zurg-ta-reen"
          ],
          [
            "مجسمهٔ",
            "mu-jas-sa-ma-yi",
            "mu-jas-sa-ma-yi"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "خواهد",
            "khaa-had",
            "khaa-had",
            "khaas-tan"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "عجایب",
            "a-jaa-yi-bi",
            "a-jaa-yib"
          ],
          [
            "هفتگانهٔ",
            "haft-gaa-na-yi",
            "haft-gaa-na-yi"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "خواهد",
            "khaa-had",
            "khaa-had",
            "khaas-tan"
          ],
          [
            "افزود.»",
            "af-zood",
            "af-zood",
            "af-zo-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "du pay-ka-ra-yi ta-raa-shee-da-shu-da dar dee-waa-ra-yi ko-hee dar baa-mi-yaan wa dar qal-bi koh-haa-yi hin-do-kush az jum-la-yi gan-jee-na-haa-yi-yi ar-zish-man-di baas-taa-nee-yi aa-si-yaa boo-dand.",
        "mean": "The two figures carved into a mountainside in Bamiyan, in the heart of the Hindu Kush, were among Asia's valuable ancient treasures.",
        "words": [
          [
            "دو",
            "du",
            "du"
          ],
          [
            "پیکرهٔ",
            "pay-ka-ra-yi",
            "pay-ka-ra-yi"
          ],
          [
            "تراشیده‌شده",
            "ta-raa-shee-da-shu-da",
            "ta-raa-shee-da-shu-da"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دیوارهٔ",
            "dee-waa-ra-yi",
            "dee-waa-ra-yi"
          ],
          [
            "کوهی",
            "ko-hee",
            "ko-hee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بامیان",
            "baa-mi-yaan",
            "baa-mi-yaan"
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
            "قلب",
            "qal-bi",
            "qalb"
          ],
          [
            "کوه‌های",
            "koh-haa-yi",
            "koh-haa"
          ],
          [
            "هندوکش",
            "hin-do-kush",
            "hin-do-kush"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "جمله",
            "jum-la-yi",
            "jum-la"
          ],
          [
            "گنجینه‌های",
            "gan-jee-na-haa-yi-yi",
            "gan-jee-na-haa-yi"
          ],
          [
            "ارزشمند",
            "ar-zish-man-di",
            "ar-zish-mand"
          ],
          [
            "باستانی",
            "baas-taa-nee-yi",
            "baas-taa-nee"
          ],
          [
            "آسیا",
            "aa-si-yaa",
            "aa-si-yaa"
          ],
          [
            "بودند.",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar daw-raa-ni baas-taan, af-ghaa-nis-taan, gu-zar-gaa-hi kaa-ra-waan-haa-yi-yi jaa-da-yi ab-ree-sham boo-da ast ki im-pi-raa-to-ree-yi room raa ba hind wa cheen mur-ta-bit may-saakh-ta ast;",
        "mean": "In ancient times Afghanistan was a crossing place for caravans on the Silk Road, which linked the Roman Empire with India and China.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دوران",
            "daw-raa-ni",
            "daw-raan"
          ],
          [
            "باستان،",
            "baas-taan",
            "baas-taan"
          ],
          [
            "افغانستان،",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "گذرگاه",
            "gu-zar-gaa-hi",
            "gu-zar-gaah"
          ],
          [
            "کاروان‌های",
            "kaa-ra-waan-haa-yi-yi",
            "kaa-ra-waan-haa-yi"
          ],
          [
            "جادهٔ",
            "jaa-da-yi",
            "jaa-da"
          ],
          [
            "ابریشم",
            "ab-ree-sham",
            "ab-ree-sham"
          ],
          [
            "بوده",
            "boo-da",
            "boo-da",
            "bu-dan"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "امپراتوری",
            "im-pi-raa-to-ree-yi",
            "im-pi-raa-to-ree"
          ],
          [
            "روم",
            "room",
            "room"
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
            "هند",
            "hind",
            "hind"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چین",
            "cheen",
            "cheen"
          ],
          [
            "مرتبط",
            "mur-ta-bit",
            "mur-ta-bit"
          ],
          [
            "می‌ساخته",
            "may-saakh-ta",
            "may-saakh-ta",
            "saakh-tan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "ya-kay az taw-quf-gaah-haa-yi-yi een jaa-da sar-za-mee-ni paad-shaa-hee-yi ku-ha-ni “ko-shaan” bood.",
        "mean": "One of the road's stopping places was the land of the ancient Kushan kingdom.",
        "words": [
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "توقف‌گاه‌های",
            "taw-quf-gaah-haa-yi-yi",
            "taw-quf-gaah-haa-yi"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "جاده",
            "jaa-da",
            "jaa-da"
          ],
          [
            "سرزمین",
            "sar-za-mee-ni",
            "sar-za-meen"
          ],
          [
            "پادشاهی",
            "paad-shaa-hee-yi",
            "paad-shaa-hee"
          ],
          [
            "کهن",
            "ku-ha-ni",
            "ku-han"
          ],
          [
            "«کوشان»",
            "ko-shaan",
            "ko-shaan"
          ],
          [
            "بود.",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "baa-mi-yaan ba un-waa-ni kaa-noo-ni il-mee, far-han-gee, maz-ha-bee, hin-ree, ma-ha-li zi-yaa-rat wa ih-daa-yi maw-qo-faa-ti maz-ha-bee bood.",
        "mean": "Bamiyan was a center of learning, culture, religion and art, a place of pilgrimage and the giving of religious endowments.",
        "words": [
          [
            "بامیان",
            "baa-mi-yaan",
            "baa-mi-yaan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "عنوان",
            "un-waa-ni",
            "un-waan"
          ],
          [
            "کانون",
            "kaa-noo-ni",
            "kaa-noon"
          ],
          [
            "علمی،",
            "il-mee",
            "il-mee"
          ],
          [
            "فرهنگی،",
            "far-han-gee",
            "far-han-gee"
          ],
          [
            "مذهبی،",
            "maz-ha-bee",
            "maz-ha-bee"
          ],
          [
            "هنری،",
            "hin-ree",
            "hin-ree"
          ],
          [
            "محل",
            "ma-ha-li",
            "ma-hal"
          ],
          [
            "زیارت",
            "zi-yaa-rat",
            "zi-yaa-rat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اهدای",
            "ih-daa-yi",
            "ih-daa"
          ],
          [
            "موقوفات",
            "maw-qo-faa-ti",
            "maw-qo-faat"
          ],
          [
            "مذهبی",
            "maz-ha-bee",
            "maz-ha-bee"
          ],
          [
            "بود.",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mu-jas-sa-ma-haa-yi-yi bo-daa dar baa-mi-yaan, az na-za-ri far-han-gee wa ja-haan-gar-dee ya-kay az aa-saa-ri bu-zur-gi kish-wa-ri maa boo-da wa az li-haa-zi to-rees-tee (si-yaa-ha-tee) a-waa-yi-dee-yi zi-yaa-dee raa ba-raa-yi af-ghaa-nis-taan dar pay daash-ta ast.",
        "mean": "From cultural and tourism perspectives, the Buddha statues of Bamiyan were among our country's great monuments and brought considerable tourism income to Afghanistan.",
        "words": [
          [
            "مجسمه‌های",
            "mu-jas-sa-ma-haa-yi-yi",
            "mu-jas-sa-ma-haa-yi"
          ],
          [
            "بودا",
            "bo-daa",
            "bo-daa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بامیان،",
            "baa-mi-yaan",
            "baa-mi-yaan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نظر",
            "na-za-ri",
            "na-zar"
          ],
          [
            "فرهنگی",
            "far-han-gee",
            "far-han-gee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جهانگردی",
            "ja-haan-gar-dee",
            "ja-haan-gar-dee"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "بزرگ",
            "bu-zur-gi",
            "bu-zurg"
          ],
          [
            "کشور",
            "kish-wa-ri",
            "kish-war"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "بوده",
            "boo-da",
            "boo-da",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "لحاظ",
            "li-haa-zi",
            "li-haaz"
          ],
          [
            "توریستی",
            "to-rees-tee",
            "to-rees-tee"
          ],
          [
            "(سیاحتی)",
            "si-yaa-ha-tee",
            "si-yaa-ha-tee"
          ],
          [
            "عوایدی",
            "a-waa-yi-dee-yi",
            "a-waa-yi-dee"
          ],
          [
            "زیادی",
            "zi-yaa-dee",
            "zi-yaa-dee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "پی",
            "pay",
            "pay"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      }
    ]
  ]
});
