/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 26, book pages 168-168, PDF pages 175-175 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «دراین» is written «در این»; «نمی‌کنمو» is written «نمی‌کنم و».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-26',
  group: 'Dari · grade 9',
  label: 'Lesson 26',
  name: "a-za-mat wa bu-zur-gee-yi ja-haan",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_26.jpg',
    alt: "The sun and the planets in their orbits against the stars."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_26.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "a-za-mat":                                { fa: "عظمت", mean: "greatness, grandeur" },
    "wa":                                      { fa: "و", mean: "and" },
    "bu-zur-gee":                              { fa: "بزرگی", mean: "greatness" },
    "ja-haan":                                 { fa: "جهان", mean: "world" },
    "di-lam":                                  { fa: "دلم", mean: "my heart (di-lam may-khaa-had, I wish)" },
    "may-khaa-had":                            { fa: "می‌خواهد", mean: "wants" },
    "khaas-tan":                               { fa: "خواستن", mean: "to want" },
    "bar":                                     { fa: "بر", mean: "on, upon" },
    "baal-haa":                                { fa: "بال‌ها", mean: "wings" },
    "baad":                                    { fa: "باد", mean: "wind" },
    "bi-ni-shee-nam":                          { fa: "بنشینم", mean: "I sit" },
    "ni-shas-tan":                             { fa: "نشستن", mean: "to sit" },
    "aan-chi":                                 { fa: "آن‌چه", mean: "what, that which" },
    "raa":                                     { fa: "را", mean: "marks the object of the verb" },
    "ki":                                      { fa: "که", mean: "that, which, who" },
    "par-war-di-gaar":                         { fa: "پروردگار", mean: "the Lord" },
    "az":                                      { fa: "از", mean: "from, of" },
    "mi-yaan":                                 { fa: "میان", mean: "middle, among" },
    "zul-mat":                                 { fa: "ظلمت", mean: "darkness" },
    "aash-fi-ta-gee":                          { fa: "آشفته‌گی", mean: "chaos, disorder" },
    "pa-deed":                                 { fa: "پدید", mean: "visible, appearing" },
    "pa-deed aa-war-da":                       { fa: "پدید آورده", mean: "has brought into being" },
    "pa-deed aa-war-dan":                      { fa: "پدید آوردن", mean: "to create, to bring into being" },
    "aa-war-da":                               { fa: "آورده", mean: "brought" },
    "aa-war-dan":                              { fa: "آوردن", mean: "to bring" },
    "zayr":                                    { fa: "زیر", mean: "under" },
    "zay-ri paa bi-gu-zaa-ram":                { fa: "زیر پا بگذارم", mean: "travel across - literally put under my feet" },
    "paa":                                     { fa: "پا", mean: "foot, leg" },
    "bi-gu-zaa-ram":                           { fa: "بگذارم", mean: "I put" },
    "gu-zaash-tan":                            { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "taa":                                     { fa: "تا", mean: "so that; until; to" },
    "taa ma-gar":                              { fa: "تا مگر", mean: "so that perhaps" },
    "ma-gar":                                  { fa: "مگر", mean: "except; unless" },
    "ro-zay":                                  { fa: "روزی", mean: "a day (roz + -ay)" },
    "ba":                                      { fa: "به", mean: "to" },
    "paa-yaan":                                { fa: "پایان", mean: "end" },
    "een":                                     { fa: "این", mean: "this" },
    "dar-yaa":                                 { fa: "دریا", mean: "sea; river" },
    "bay-ka-raan":                             { fa: "بی‌کران", mean: "boundless" },
    "ba-ra-sam":                               { fa: "برسم", mean: "I reach" },
    "ra-see-dan":                              { fa: "رسیدن", mean: "to arrive, to reach" },
    "aan":                                     { fa: "آن", mean: "that" },
    "sar-za-meen":                             { fa: "سرزمین", mean: "land, country" },
    "khu-daa-wand":                            { fa: "خداوند", mean: "God, the Lord" },
    "sar-hadd":                                { fa: "سرحد", mean: "border" },
    "khil-qa-tash":                            { fa: "خلقتش", mean: "His creation" },
    "qa-raar":                                 { fa: "قرار", mean: "place, rest" },
    "qa-raar daa-da":                          { fa: "قرار داده", mean: "has made" },
    "daa-da":                                  { fa: "داده", mean: "given" },
    "daa-dan":                                 { fa: "دادن", mean: "to give" },
    "fu-rood":                                 { fa: "فرود", mean: "down, landing" },
    "fu-rood aa-yam":                          { fa: "فرود آیم", mean: "land" },
    "fu-rood aa-ma-dan":                       { fa: "فرود آمدن", mean: "to land, to come down" },
    "aa-yam":                                  { fa: "آیم", mean: "I come" },
    "aa-ma-dan":                               { fa: "آمدن", mean: "to come" },
    "az ham ak-noon":                          { fa: "از هم اکنون", mean: "from this very moment" },
    "ham":                                     { fa: "هم", mean: "also, too" },
    "ak-noon":                                 { fa: "اکنون", mean: "now" },
    "dar":                                     { fa: "در", mean: "in" },
    "sa-far":                                  { fa: "سفر", mean: "travel" },
    "door":                                    { fa: "دور", mean: "far" },
    "door wa da-raaz":                         { fa: "دور و دراز", mean: "long, far-reaching" },
    "da-raaz":                                 { fa: "دراز", mean: "long" },
    "si-taa-ra-gaan":                          { fa: "ستاره‌گان", mean: "stars" },
    "baa":                                     { fa: "با", mean: "with" },
    "da-rakh-shan-da-gee":                     { fa: "درخشنده‌گی", mean: "shining, brightness" },
    "jaa-wi-daa-nee":                          { fa: "جاویدانی", mean: "lasting, eternal" },
    "khud":                                    { fa: "خود", mean: "own; self" },
    "mee-bee-nam":                             { fa: "می‌بینم", mean: "I see" },
    "dee-dan":                                 { fa: "دیدن", mean: "to see; seeing" },
    "raah":                                    { fa: "راه", mean: "way, road" },
    "ha-zaa-raan":                             { fa: "هزاران", mean: "thousands" },
    "saa-la":                                  { fa: "ساله", mean: "years old" },
    "dil":                                     { fa: "دل", mean: "heart" },
    "af-laak":                                 { fa: "افلاک", mean: "the heavens" },
    "may-pay-maa-yand":                        { fa: "می‌پیمایند", mean: "travel over" },
    "pay-mo-dan":                              { fa: "پیمودن", mean: "to travel over, to measure" },
    "ni-haa-yee":                              { fa: "نهایی", mean: "final, last" },
    "bi-ra-sand":                              { fa: "برسند", mean: "they attend to, reach" },
    "am-maa":                                  { fa: "اما", mean: "but" },
    "ba-deen":                                 { fa: "بدین", mean: "by this, in this" },
    "ba-deen had":                             { fa: "بدین حد", mean: "this far" },
    "had":                                     { fa: "حد", mean: "extent, limit" },
    "ik-ti-faa":                               { fa: "اکتفا", mean: "making do, being content" },
    "ik-ti-faa na-mee-ku-nam":                 { fa: "اکتفا نمی‌کنم", mean: "I am not content (the book's note: I am not satisfied, I do not think it enough)" },
    "ik-ti-faa kar-dan":                       { fa: "اکتفا کردن", mean: "to make do with, to be content with" },
    "na-mee-ku-nam":                           { fa: "نمی‌کنم", mean: "I do not" },
    "kar-dan":                                 { fa: "کردن", mean: "to do, to make" },
    "ham-chu-naan":                            { fa: "همچنان", mean: "likewise, just so" },
    "baa-laa":                                 { fa: "بالا", mean: "top, height" },
    "may-ra-wam":                              { fa: "می‌روم", mean: "I go" },
    "raf-tan":                                 { fa: "رفتن", mean: "to go" },
    "ba-daan-jaa":                             { fa: "بدانجا", mean: "to that place" },
    "may-ra-sam":                              { fa: "می‌رسم", mean: "I reach" },
    "dee-gar":                                 { fa: "دیگر", mean: "other; more; anymore" },
    "fa-lak":                                  { fa: "فلک", mean: "the sky, the heavens" },
    "raa-hee":                                 { fa: "راهی", mean: "road (du raa-hee, a crossroads)" },
    "neest":                                   { fa: "نیست", mean: "is not" },
    "bu-dan":                                  { fa: "بودن", mean: "to be" },
    "da-lee-raa-na":                           { fa: "دلیرانه", mean: "bravely, courageous" },
    "qa-lam-raw":                              { fa: "قلمرو", mean: "realm" },
    "bay-paa-yaan":                            { fa: "بی‌پایان", mean: "endless" },
    "khaa-mo-shee":                            { fa: "خاموشی", mean: "silence" },
    "may-gu-zaa-ram":                          { fa: "می‌گذارم", mean: "I put" },
    "chaa-ba-kee":                             { fa: "چابکی", mean: "quickness" },
    "noor":                                    { fa: "نور", mean: "light" },
    "shi-taa-baan":                            { fa: "شتابان", mean: "hurrying" },
    "may-gu-za-ram":                           { fa: "می‌گذرم", mean: "I pass" },
    "gu-zash-tan":                             { fa: "گذشتن", mean: "to pass" },
    "naa-ga-haan":                             { fa: "ناگهان", mean: "suddenly" },
    "waa-rid":                                 { fa: "وارد", mean: "entering, entered" },
    "waa-ri-di dun-yaa-yi taa-za may-sha-wam": { fa: "وارد دنیای تازه می‌شوم", mean: "I enter a new world" },
    "dun-yaa":                                 { fa: "دنیا", mean: "world" },
    "taa-za":                                  { fa: "تازه", mean: "fresh" },
    "may-sha-wam":                             { fa: "می‌شوم", mean: "I become" },
    "shu-dan":                                 { fa: "شدن", mean: "to become" },
    "aa-si-maan":                              { fa: "آسمان", mean: "sky" },
    "abr-haa":                                 { fa: "ابرها", mean: "clouds" },
    "dar ha-ra-ka-tand":                       { fa: "در حرکتند", mean: "are moving" },
    "ha-ra-ka-tand":                           { fa: "حرکتند", mean: "are in motion (ha-ra-kat + and)" },
    "za-mee-nash":                             { fa: "زمینش", mean: "its land" },
    "rood-khaa-na-haa":                        { fa: "رودخانه‌ها", mean: "rivers" },
    "ba so-yi":                                { fa: "به سوی", mean: "toward" },
    "so":                                      { fa: "سو", mean: "side, direction" },
    "dar-yaa-haa":                             { fa: "دریاها", mean: "seas" },
    "ja-ra-yaan":                              { fa: "جریان", mean: "course, progress" },
    "ja-ra-yaan daa-rand":                     { fa: "جریان دارند", mean: "flow" },
    "ja-ra-yaan daash-tan":                    { fa: "جریان داشتن", mean: "to flow" },
    "daa-rand":                                { fa: "دارند", mean: "have" },
    "daash-tan":                               { fa: "داشتن", mean: "to have" },
    "yak":                                     { fa: "یک", mean: "one, a" },
    "jaa-da":                                  { fa: "جاده", mean: "road, street" },
    "khal-wat":                                { fa: "خلوت", mean: "privacy, solitude" },
    "rah-gu-za-ray":                           { fa: "رهگذری", mean: "a passer-by" },
    "man":                                     { fa: "من", mean: "I" },
    "naz-deek":                                { fa: "نزدیک", mean: "near" },
    "naz-deek may-sha-wad":                    { fa: "نزدیک می‌شود", mean: "comes near" },
    "naz-deek shu-dan":                        { fa: "نزدیک شدن", mean: "to come near" },
    "may-sha-wad":                             { fa: "می‌شود", mean: "becomes" },
    "may-pur-sad":                             { fa: "می‌پرسد", mean: "asks" },
    "pur-see-dan":                             { fa: "پرسیدن", mean: "to ask" },
    "ay":                                      { fa: "ای", mean: "O (when calling someone)" },
    "mu-saa-fir":                              { fa: "مسافر", mean: "traveler" },
    "baa-yist":                                { fa: "بایست", mean: "must, had to" },
    "chu-neen":                                { fa: "چنین", mean: "so, like this" },
    "shi-taab":                                { fa: "شتاب", mean: "haste" },
    "ku-jaa":                                  { fa: "کجا", mean: "where" },
    "may-ra-wee":                              { fa: "می‌روی", mean: "you go" },
    "may-go-yam":                              { fa: "می‌گویم", mean: "I say" },
    "guf-tan":                                 { fa: "گفتن", mean: "to say, to tell" },
    "aa-khir":                                 { fa: "آخر", mean: "in the end; last" },
    "sa-far may-ku-nam":                       { fa: "سفر می‌کنم", mean: "I am traveling" },
    "sa-far kar-dan":                          { fa: "سفر کردن", mean: "to travel" },
    "may-ku-nam":                              { fa: "می‌کنم", mean: "I do, I add" },
    "may-khaa-ham":                            { fa: "می‌خواهم", mean: "I want" },
    "ba-ra-wam":                               { fa: "بروم", mean: "I go" },
    "jal-la ja-laa-lu-hu":                     { fa: "(ج)", mean: "may his glory be exalted - said after God’s name; (ج) is short for it" },
    "khil-qat":                                { fa: "خلقت", mean: "creation" },
    "qa-raar daa-da ast":                      { fa: "قرار داده است", mean: "has made" },
    "ast":                                     { fa: "است", mean: "is" },
    "zee":                                     { fa: "ذی", mean: "having (zee ha-yaat, a living thing)" },
    "zee ha-yaa-tay":                          { fa: "ذی حیاتی", mean: "a living being" },
    "ha-yaa-tay":                              { fa: "حیاتی", mean: "life (with -ay)" },
    "nafs":                                    { fa: "نفس", mean: "self" },
    "nafs na-may-ka-shad":                     { fa: "نفس نمی‌کشد", mean: "breathes" },
    "nafs ka-shee-dan":                        { fa: "نفس کشیدن", mean: "to breathe" },
    "na-may-ka-shad":                          { fa: "نمی‌کشد", mean: "does not pull; (with na-fas) does not breathe" },
    "ka-shee-dan":                             { fa: "کشیدن", mean: "to pull; to bear" },
    "may-go-yad":                              { fa: "می‌گوید", mean: "says" },
    "oh":                                      { fa: "اوه", mean: "oh" },
    "bay-hoo-da":                              { fa: "بیهوده", mean: "for nothing, in vain" },
    "ranj":                                    { fa: "رنج", mean: "hardship, suffering" },
    "khaysh":                                  { fa: "خویش", mean: "own; self" },
    "ham-waar":                                { fa: "هموار", mean: "smooth, level" },
    "ham-waar ma-kun":                         { fa: "هموار مکن", mean: "do not take upon yourself - literally do not lay smooth" },
    "ma-kun":                                  { fa: "مکن", mean: "do not do" },
    "na-may-daa-nee":                          { fa: "نمی‌دانی", mean: "you do not know" },
    "daa-nis-tan":                             { fa: "دانستن", mean: "to know" },
    "may-khaa-hee":                            { fa: "می‌خواهی", mean: "you want" },
    "aa-lam":                                  { fa: "عالم", mean: "realm, world" },
    "qa-dam":                                  { fa: "قدم", mean: "step, foot" },
    "qa-dam gu-zaa-ree":                       { fa: "قدم گذاری", mean: "set foot" },
    "qa-dam gu-zaash-tan":                     { fa: "قدم گذاشتن", mean: "to set foot" },
    "gu-zaa-ree":                              { fa: "گذاری", mean: "you put" },
    "fikr":                                    { fa: "فکر", mean: "thought" },
    "door par-waa-zi":                         { fa: "دور پرواز", mean: "far-flying" },
    "par-waaz":                                { fa: "پرواز", mean: "flight" },
    "u-qaab":                                  { fa: "عقاب", mean: "eagle" },
    "u-qaab aa-saa-yat":                       { fa: "عقاب آسایت", mean: "your eagle-like" },
    "aa-saa-yat":                              { fa: "آسایت", mean: "like … of yours (u-qaab aa-saa-yat, your eagle-like)" },
    "baaz-daar":                               { fa: "بازدار", mean: "hold back" },
    "baaz-daash-tan":                          { fa: "بازداشتن", mean: "to hold back, to stop" },
    "tu":                                      { fa: "تو", mean: "you (one person)" },
    "kash-tee":                                { fa: "کشتی", mean: "ship" },
    "tund-raw":                                { fa: "تندرو", mean: "swift" },
    "kha-yaal":                                { fa: "خیال", mean: "imagination" },
    "ha-meen":                                 { fa: "همین", mean: "this very, this same" },
    "jaa":                                     { fa: "جا", mean: "place" },
    "lan-gar":                                 { fa: "لنگر", mean: "anchor" },
    "lan-gar an-daaz":                         { fa: "لنگر انداز", mean: "drop anchor" },
    "lan-gar an-daakh-tan":                    { fa: "لنگر انداختن", mean: "to drop anchor" },
    "an-daaz":                                 { fa: "انداز", mean: "sounding, casting" },
    "an-daakh-tan":                            { fa: "انداختن", mean: "throwing; to throw" },
    "zee-raa":                                 { fa: "زیرا", mean: "because" },
    "ta-raa":                                  { fa: "ترا", mean: "you (tu raa)" },
    "besh":                                    { fa: "بیش", mean: "more" },
    "i-jaa-za":                                { fa: "اجازه", mean: "permission" },
    "fried-rish":                              { fa: "فریدریش", mean: "Friedrich" },
    "shee-lar":                                { fa: "شیلر", mean: "Schiller, a German poet who died in 1805" }
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
    "say": "a-za-mat wa bu-zur-gee-yi ja-haan",
    "mean": "The greatness of the world",
    "words": [
      [
        "عظمت",
        "a-za-mat",
        "a-za-mat"
      ],
      [
        "و",
        "wa",
        "wa"
      ],
      [
        "بزرگی",
        "bu-zur-gee-yi",
        "bu-zur-gee"
      ],
      [
        "جهان",
        "ja-haan",
        "ja-haan"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "di-lam may-khaa-had bar baal-haa-yi baad bi-ni-shee-nam wa aan-chi raa ki par-war-di-gaa-ri ja-haan az mi-yaa-ni zul-mat wa aash-fi-ta-gee pa-deed aa-war-da, zay-ri paa bi-gu-zaa-ram;",
        "mean": "I wish I could sit on the wings of the wind and travel across all that the Lord of the world has brought out of darkness and chaos,",
        "words": [
          [
            "دلم",
            "di-lam",
            "di-lam"
          ],
          [
            "می‌خواهد",
            "may-khaa-had",
            "may-khaa-had",
            "khaas-tan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "بال‌های",
            "baal-haa-yi",
            "baal-haa"
          ],
          [
            "باد",
            "baad",
            "baad"
          ],
          [
            "بنشینم",
            "bi-ni-shee-nam",
            "bi-ni-shee-nam",
            "ni-shas-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آن‌چه",
            "aan-chi",
            "aan-chi"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "پروردگار",
            "par-war-di-gaa-ri",
            "par-war-di-gaar"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "میان",
            "mi-yaa-ni",
            "mi-yaan"
          ],
          [
            "ظلمت",
            "zul-mat",
            "zul-mat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آشفته‌گی",
            "aash-fi-ta-gee",
            "aash-fi-ta-gee"
          ],
          [
            "پدید",
            "pa-deed",
            "pa-deed",
            "pa-deed aa-war-da",
            "pa-deed aa-war-dan"
          ],
          [
            "آورده،",
            "aa-war-da",
            "aa-war-da",
            "pa-deed aa-war-da",
            "aa-war-dan",
            "pa-deed aa-war-dan"
          ],
          [
            "زیر",
            "zay-ri",
            "zayr",
            "zay-ri paa bi-gu-zaa-ram"
          ],
          [
            "پا",
            "paa",
            "paa",
            "zay-ri paa bi-gu-zaa-ram"
          ],
          [
            "بگذارم؛",
            "bi-gu-zaa-ram",
            "bi-gu-zaa-ram",
            "zay-ri paa bi-gu-zaa-ram",
            "gu-zaash-tan"
          ]
        ]
      },
      {
        "say": "taa ma-gar ro-zay ba paa-yaa-ni een dar-yaa-yi bay-ka-raan ba-ra-sam wa ba aan sar-za-meen ki khu-daa-wand, sar-had-di ja-haa-ni khil-qa-tash qa-raar daa-da, fu-rood aa-yam.",
        "mean": "so that one day I might reach the end of this boundless sea and land in the country that God has made the border of His created world.",
        "words": [
          [
            "تا",
            "taa",
            "taa",
            "taa ma-gar"
          ],
          [
            "مگر",
            "ma-gar",
            "ma-gar",
            "taa ma-gar"
          ],
          [
            "روزی",
            "ro-zay",
            "ro-zay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "پایان",
            "paa-yaa-ni",
            "paa-yaan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "دریای",
            "dar-yaa-yi",
            "dar-yaa"
          ],
          [
            "بی‌کران",
            "bay-ka-raan",
            "bay-ka-raan"
          ],
          [
            "برسم",
            "ba-ra-sam",
            "ba-ra-sam",
            "ra-see-dan"
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "سرزمین",
            "sar-za-meen",
            "sar-za-meen"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "خداوند،",
            "khu-daa-wand",
            "khu-daa-wand"
          ],
          [
            "سرحد",
            "sar-had-di",
            "sar-hadd"
          ],
          [
            "جهان",
            "ja-haa-ni",
            "ja-haan"
          ],
          [
            "خلقتش",
            "khil-qa-tash",
            "khil-qa-tash"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "qa-raar daa-da"
          ],
          [
            "داده،",
            "daa-da",
            "daa-da",
            "qa-raar daa-da",
            "daa-dan"
          ],
          [
            "فرود",
            "fu-rood",
            "fu-rood",
            "fu-rood aa-yam",
            "fu-rood aa-ma-dan"
          ],
          [
            "آیم.",
            "aa-yam",
            "aa-yam",
            "fu-rood aa-yam",
            "aa-ma-dan",
            "fu-rood aa-ma-dan"
          ]
        ]
      },
      {
        "say": "az ham ak-noon dar een sa-fa-ri door wa da-raaz, si-taa-ra-gaan raa baa da-rakh-shan-da-gee-yi jaa-wi-daa-nee-yi khud mee-bee-nam ki raa-hi ha-zaa-raan saa-la raa dar di-li af-laak may-pay-maa-yand, taa ba sar-za-mee-ni ni-haa-yee-yi sa-fa-ri khud bi-ra-sand;",
        "mean": "Already on this long journey I see the stars with their eternal shining, traveling roads thousands of years long through the heart of the heavens to reach the last land of their journey;",
        "words": [
          [
            "از",
            "az",
            "az",
            "az ham ak-noon"
          ],
          [
            "هم",
            "ham",
            "ham",
            "az ham ak-noon"
          ],
          [
            "اکنون",
            "ak-noon",
            "ak-noon",
            "az ham ak-noon"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "سفر",
            "sa-fa-ri",
            "sa-far"
          ],
          [
            "دور",
            "door",
            "door",
            "door wa da-raaz"
          ],
          [
            "و",
            "wa",
            "wa",
            "door wa da-raaz"
          ],
          [
            "دراز،",
            "da-raaz",
            "da-raaz",
            "door wa da-raaz"
          ],
          [
            "ستاره‌گان",
            "si-taa-ra-gaan",
            "si-taa-ra-gaan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "درخشنده‌گی",
            "da-rakh-shan-da-gee-yi",
            "da-rakh-shan-da-gee"
          ],
          [
            "جاویدانی",
            "jaa-wi-daa-nee-yi",
            "jaa-wi-daa-nee"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "می‌بینم",
            "mee-bee-nam",
            "mee-bee-nam",
            "dee-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "راه",
            "raa-hi",
            "raah"
          ],
          [
            "هزاران",
            "ha-zaa-raan",
            "ha-zaa-raan"
          ],
          [
            "ساله",
            "saa-la",
            "saa-la"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دل",
            "di-li",
            "dil"
          ],
          [
            "افلاک",
            "af-laak",
            "af-laak"
          ],
          [
            "می‌پیمایند،",
            "may-pay-maa-yand",
            "may-pay-maa-yand",
            "pay-mo-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سرزمین",
            "sar-za-mee-ni",
            "sar-za-meen"
          ],
          [
            "نهایی",
            "ni-haa-yee-yi",
            "ni-haa-yee"
          ],
          [
            "سفر",
            "sa-fa-ri",
            "sa-far"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "برسند؛",
            "bi-ra-sand",
            "bi-ra-sand",
            "ra-see-dan"
          ]
        ]
      },
      {
        "say": "am-maa ba-deen had ik-ti-faa na-mee-ku-nam wa ham-chu-naan baa-laa may-ra-wam wa ba-daan-jaa may-ra-sam ki dee-gar si-taa-ra-gaa-ni fa-lak raa dar aan raa-hee neest;",
        "mean": "but I am not content with this far; I keep going higher and reach a place where the stars of the sky have no road;",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "بدین",
            "ba-deen",
            "ba-deen",
            "ba-deen had"
          ],
          [
            "حد",
            "had",
            "had",
            "ba-deen had"
          ],
          [
            "اکتفا",
            "ik-ti-faa",
            "ik-ti-faa",
            "ik-ti-faa na-mee-ku-nam",
            "ik-ti-faa kar-dan"
          ],
          [
            "نمی‌کنم",
            "na-mee-ku-nam",
            "na-mee-ku-nam",
            "ik-ti-faa na-mee-ku-nam",
            "kar-dan",
            "ik-ti-faa kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "بالا",
            "baa-laa",
            "baa-laa"
          ],
          [
            "می‌روم",
            "may-ra-wam",
            "may-ra-wam",
            "raf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بدانجا",
            "ba-daan-jaa",
            "ba-daan-jaa"
          ],
          [
            "می‌رسم",
            "may-ra-sam",
            "may-ra-sam",
            "ra-see-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "ستاره‌گان",
            "si-taa-ra-gaa-ni",
            "si-taa-ra-gaan"
          ],
          [
            "فلک",
            "fa-lak",
            "fa-lak"
          ],
          [
            "را",
            "raa",
            "raa"
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
            "راهی",
            "raa-hee",
            "raa-hee"
          ],
          [
            "نیست؛",
            "neest",
            "neest",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "da-lee-raa-na paa dar qa-lam-ra-wi bay-paa-yaa-ni zul-mat wa khaa-mo-shee may-gu-zaa-ram wa ba chaa-ba-kee-yi noor, shi-taa-baan az aan may-gu-za-ram,",
        "mean": "boldly I set foot in the endless realm of darkness and silence, and pass through it in haste, as quick as light;",
        "words": [
          [
            "دلیرانه",
            "da-lee-raa-na",
            "da-lee-raa-na"
          ],
          [
            "پا",
            "paa",
            "paa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قلمرو",
            "qa-lam-ra-wi",
            "qa-lam-raw"
          ],
          [
            "بی‌پایان",
            "bay-paa-yaa-ni",
            "bay-paa-yaan"
          ],
          [
            "ظلمت",
            "zul-mat",
            "zul-mat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خاموشی",
            "khaa-mo-shee",
            "khaa-mo-shee"
          ],
          [
            "می‌گذارم",
            "may-gu-zaa-ram",
            "may-gu-zaa-ram",
            "gu-zaash-tan"
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
            "چابکی",
            "chaa-ba-kee-yi",
            "chaa-ba-kee"
          ],
          [
            "نور،",
            "noor",
            "noor"
          ],
          [
            "شتابان",
            "shi-taa-baan",
            "shi-taa-baan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "می‌گذرم،",
            "may-gu-za-ram",
            "may-gu-za-ram",
            "gu-zash-tan"
          ]
        ]
      },
      {
        "say": "naa-ga-haan waa-ri-di dun-yaa-yi taa-za may-sha-wam ki dar aa-si-maa-ni aan abr-haa dar ha-ra-ka-tand wa dar za-mee-nash rood-khaa-na-haa ba so-yi dar-yaa-haa ja-ra-yaan daa-rand,",
        "mean": "suddenly I enter a new world where clouds move in its sky and rivers flow toward the seas on its land;",
        "words": [
          [
            "ناگهان",
            "naa-ga-haan",
            "naa-ga-haan"
          ],
          [
            "وارد",
            "waa-ri-di",
            "waa-rid",
            "waa-ri-di dun-yaa-yi taa-za may-sha-wam"
          ],
          [
            "دنیای",
            "dun-yaa-yi",
            "dun-yaa",
            "waa-ri-di dun-yaa-yi taa-za may-sha-wam"
          ],
          [
            "تازه",
            "taa-za",
            "taa-za",
            "waa-ri-di dun-yaa-yi taa-za may-sha-wam"
          ],
          [
            "می‌شوم",
            "may-sha-wam",
            "may-sha-wam",
            "waa-ri-di dun-yaa-yi taa-za may-sha-wam",
            "shu-dan"
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
            "آسمان",
            "aa-si-maa-ni",
            "aa-si-maan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "ابرها",
            "abr-haa",
            "abr-haa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar ha-ra-ka-tand"
          ],
          [
            "حرکتند",
            "ha-ra-ka-tand",
            "ha-ra-ka-tand",
            "dar ha-ra-ka-tand"
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
            "زمینش",
            "za-mee-nash",
            "za-mee-nash"
          ],
          [
            "رودخانه‌ها",
            "rood-khaa-na-haa",
            "rood-khaa-na-haa"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba so-yi"
          ],
          [
            "سوی",
            "so-yi",
            "so",
            "ba so-yi"
          ],
          [
            "دریاها",
            "dar-yaa-haa",
            "dar-yaa-haa"
          ],
          [
            "جریان",
            "ja-ra-yaan",
            "ja-ra-yaan",
            "ja-ra-yaan daa-rand",
            "ja-ra-yaan daash-tan"
          ],
          [
            "دارند،",
            "daa-rand",
            "daa-rand",
            "ja-ra-yaan daa-rand",
            "daash-tan",
            "ja-ra-yaan daash-tan"
          ]
        ]
      },
      {
        "say": "dar yak jaa-da-yi khal-wat rah-gu-za-ray ba man naz-deek may-sha-wad; may-pur-sad:",
        "mean": "on a lonely road a passer-by comes up to me and asks:",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "جادهٔ",
            "jaa-da-yi",
            "jaa-da"
          ],
          [
            "خلوت",
            "khal-wat",
            "khal-wat"
          ],
          [
            "رهگذری",
            "rah-gu-za-ray",
            "rah-gu-za-ray"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "نزدیک",
            "naz-deek",
            "naz-deek",
            "naz-deek may-sha-wad",
            "naz-deek shu-dan"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "naz-deek may-sha-wad",
            "shu-dan",
            "naz-deek shu-dan"
          ],
          [
            "می‌پرسد:",
            "may-pur-sad",
            "may-pur-sad",
            "pur-see-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ay mu-saa-fir baa-yist!",
        "mean": "Traveler, stop!",
        "words": [
          [
            "ای",
            "ay",
            "ay"
          ],
          [
            "مسافر",
            "mu-saa-fir",
            "mu-saa-fir"
          ],
          [
            "بایست!",
            "baa-yist",
            "baa-yist"
          ]
        ]
      },
      {
        "say": "baa chu-neen shi-taab ba ku-jaa may-ra-wee?",
        "mean": "Where are you going in such a hurry?",
        "words": [
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "چنین",
            "chu-neen",
            "chu-neen"
          ],
          [
            "شتاب",
            "shi-taab",
            "shi-taab"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کجا",
            "ku-jaa",
            "ku-jaa"
          ],
          [
            "می‌روی؟",
            "may-ra-wee",
            "may-ra-wee",
            "raf-tan"
          ]
        ]
      },
      {
        "say": "may-go-yam: ba so-yi aa-khi-ri dun-yaa sa-far may-ku-nam, may-khaa-ham ba-daan-jaa ba-ra-wam ki khu-daa-wand jal-la ja-laa-lu-hu aan raa sar-had-di dun-yaa-yi khil-qat qa-raar daa-da ast wa dee-gar dar aan zee ha-yaa-tay nafs na-may-ka-shad.",
        "mean": "I say: I am traveling to the end of the world; I want to go to the place God (may His glory be exalted) has made the border of the created world, where no living thing breathes any more.",
        "words": [
          [
            "می‌گویم:",
            "may-go-yam",
            "may-go-yam",
            "guf-tan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba so-yi"
          ],
          [
            "سوی",
            "so-yi",
            "so",
            "ba so-yi"
          ],
          [
            "آخر",
            "aa-khi-ri",
            "aa-khir"
          ],
          [
            "دنیا",
            "dun-yaa",
            "dun-yaa"
          ],
          [
            "سفر",
            "sa-far",
            "sa-far",
            "sa-far may-ku-nam",
            "sa-far kar-dan"
          ],
          [
            "می‌کنم،",
            "may-ku-nam",
            "may-ku-nam",
            "sa-far may-ku-nam",
            "kar-dan",
            "sa-far kar-dan"
          ],
          [
            "می‌خواهم",
            "may-khaa-ham",
            "may-khaa-ham",
            "khaas-tan"
          ],
          [
            "بدانجا",
            "ba-daan-jaa",
            "ba-daan-jaa"
          ],
          [
            "بروم",
            "ba-ra-wam",
            "ba-ra-wam",
            "raf-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "خداوند",
            "khu-daa-wand",
            "khu-daa-wand"
          ],
          [
            "(ج)",
            "jal-la ja-laa-lu-hu",
            "jal-la ja-laa-lu-hu"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "سرحد",
            "sar-had-di",
            "sar-hadd"
          ],
          [
            "دنیای",
            "dun-yaa-yi",
            "dun-yaa"
          ],
          [
            "خلقت",
            "khil-qat",
            "khil-qat"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "qa-raar daa-da ast"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "qa-raar daa-da ast",
            "daa-dan"
          ],
          [
            "است",
            "ast",
            "ast",
            "qa-raar daa-da ast"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
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
            "ذی",
            "zee",
            "zee",
            "zee ha-yaa-tay"
          ],
          [
            "حیاتی",
            "ha-yaa-tay",
            "ha-yaa-tay",
            "zee ha-yaa-tay"
          ],
          [
            "نفس",
            "nafs",
            "nafs",
            "nafs na-may-ka-shad",
            "nafs ka-shee-dan"
          ],
          [
            "نمی‌کشد.",
            "na-may-ka-shad",
            "na-may-ka-shad",
            "nafs na-may-ka-shad",
            "ka-shee-dan",
            "nafs ka-shee-dan"
          ]
        ]
      },
      {
        "say": "may-go-yad: oh, baa-yist;",
        "mean": "He says: Oh, stop;",
        "words": [
          [
            "می‌گوید:",
            "may-go-yad",
            "may-go-yad",
            "guf-tan"
          ],
          [
            "اوه،",
            "oh",
            "oh"
          ],
          [
            "بایست؛",
            "baa-yist",
            "baa-yist"
          ]
        ]
      },
      {
        "say": "bay-hoo-da ran-ji sa-far raa bar khaysh ham-waar ma-kun.",
        "mean": "do not take the hardship of the journey upon yourself for nothing.",
        "words": [
          [
            "بیهوده",
            "bay-hoo-da",
            "bay-hoo-da"
          ],
          [
            "رنج",
            "ran-ji",
            "ranj"
          ],
          [
            "سفر",
            "sa-far",
            "sa-far"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "هموار",
            "ham-waar",
            "ham-waar",
            "ham-waar ma-kun"
          ],
          [
            "مکن.",
            "ma-kun",
            "ma-kun",
            "ham-waar ma-kun",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "ma-gar na-may-daa-nee ki may-khaa-hee ba aa-la-mi bay-paa-yaan wa bay-ka-raan qa-dam gu-zaa-ree?",
        "mean": "Do you not know that you want to set foot in an endless, boundless world?",
        "words": [
          [
            "مگر",
            "ma-gar",
            "ma-gar"
          ],
          [
            "نمی‌دانی",
            "na-may-daa-nee",
            "na-may-daa-nee",
            "daa-nis-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "می‌خواهی",
            "may-khaa-hee",
            "may-khaa-hee",
            "khaas-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "عالم",
            "aa-la-mi",
            "aa-lam"
          ],
          [
            "بی‌پایان",
            "bay-paa-yaan",
            "bay-paa-yaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بی‌کران",
            "bay-ka-raan",
            "bay-ka-raan"
          ],
          [
            "قدم",
            "qa-dam",
            "qa-dam",
            "qa-dam gu-zaa-ree",
            "qa-dam gu-zaash-tan"
          ],
          [
            "گذاری؟",
            "gu-zaa-ree",
            "gu-zaa-ree",
            "qa-dam gu-zaa-ree",
            "gu-zaash-tan",
            "qa-dam gu-zaash-tan"
          ]
        ]
      },
      {
        "say": "ay fik-ri door par-waa-zi man!",
        "mean": "O my far-flying thought!",
        "words": [
          [
            "ای",
            "ay",
            "ay"
          ],
          [
            "فکر",
            "fik-ri",
            "fikr"
          ],
          [
            "دور",
            "door",
            "door",
            "door par-waa-zi"
          ],
          [
            "پرواز",
            "par-waa-zi",
            "par-waaz",
            "door par-waa-zi"
          ],
          [
            "من!",
            "man",
            "man"
          ]
        ]
      },
      {
        "say": "baal-haa-yi u-qaab aa-saa-yat raa az par-waaz baaz-daar wa tu ay kash-tee-yi tund-ra-wi kha-yaa-li man!",
        "mean": "hold back your eagle wings from flight, and you, swift ship of my imagination,",
        "words": [
          [
            "بال‌های",
            "baal-haa-yi",
            "baal-haa"
          ],
          [
            "عقاب",
            "u-qaab",
            "u-qaab",
            "u-qaab aa-saa-yat"
          ],
          [
            "آسایت",
            "aa-saa-yat",
            "aa-saa-yat",
            "u-qaab aa-saa-yat"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "پرواز",
            "par-waaz",
            "par-waaz"
          ],
          [
            "بازدار",
            "baaz-daar",
            "baaz-daar",
            "baaz-daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "ای",
            "ay",
            "ay"
          ],
          [
            "کشتی",
            "kash-tee-yi",
            "kash-tee"
          ],
          [
            "تندرو",
            "tund-ra-wi",
            "tund-raw"
          ],
          [
            "خیال",
            "kha-yaa-li",
            "kha-yaal"
          ],
          [
            "من!",
            "man",
            "man"
          ]
        ]
      },
      {
        "say": "ha-meen jaa lan-gar an-daaz; zee-raa ta-raa besh az een i-jaa-za-yi sa-far neest.",
        "mean": "drop anchor right here, for you are not allowed to travel any further.",
        "words": [
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "جا",
            "jaa",
            "jaa"
          ],
          [
            "لنگر",
            "lan-gar",
            "lan-gar",
            "lan-gar an-daaz",
            "lan-gar an-daakh-tan"
          ],
          [
            "انداز؛",
            "an-daaz",
            "an-daaz",
            "lan-gar an-daaz",
            "an-daakh-tan",
            "lan-gar an-daakh-tan"
          ],
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "ترا",
            "ta-raa",
            "ta-raa"
          ],
          [
            "بیش",
            "besh",
            "besh"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "اجازهٔ",
            "i-jaa-za-yi",
            "i-jaa-za"
          ],
          [
            "سفر",
            "sa-far",
            "sa-far"
          ],
          [
            "نیست.",
            "neest",
            "neest",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "(fried-rish shee-lar)",
        "mean": "(Friedrich Schiller)",
        "words": [
          [
            "(فریدریش",
            "fried-rish",
            "fried-rish"
          ],
          [
            "شیلر)",
            "shee-lar",
            "shee-lar"
          ]
        ]
      }
    ]
  ]
});
