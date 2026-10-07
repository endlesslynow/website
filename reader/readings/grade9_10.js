/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 10, book pages 62-62, PDF pages 69-69 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «منفجرناشده» is written «منفجر ناشده»; «ازجملهٔ» is written «از جملهٔ»; «باشندکه» is written «باشند که»; «هرجایی» is written «هر جایی»; «هرجا» is written «هر جا».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-10',
  group: 'Dari · grade 9',
  label: 'Lesson 10',
  name: "saa-haa-ti ih-ti-maa-lee-yi maw-joo-di-ya-ti maa-yin-haa wa mu-him-maa-ti mun-fa-jir naa-shu-da",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_10.jpg',
    alt: "A pale object half buried in dry, cracked ground."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_10.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "saa-haat":                                                                          { fa: "ساحات", mean: "areas" },
    "ih-ti-maa-lee":                                                                     { fa: "احتمالی", mean: "possible, likely" },
    "maw-joo-di-yat":                                                                    { fa: "موجودیت", mean: "existence, presence" },
    "maa-yin-haa":                                                                       { fa: "ماین‌ها", mean: "mines" },
    "wa":                                                                                { fa: "و", mean: "and" },
    "mu-him-maat":                                                                       { fa: "مهمات", mean: "ammunition, shells" },
    "mun-fa-jir":                                                                        { fa: "منفجر", mean: "exploded" },
    "naa-shu-da":                                                                        { fa: "ناشده", mean: "not (yet) become (mun-fa-jir naa-shu-da, unexploded)" },
    "dar":                                                                               { fa: "در", mean: "in" },
    "dar a-sa-ri":                                                                       { fa: "در اثر", mean: "as a result of" },
    "a-sar":                                                                             { fa: "اثر", mean: "work (of writing or art)" },
    "jang-haa":                                                                          { fa: "جنگ‌ها", mean: "fights, wars" },
    "too-laa-nee":                                                                       { fa: "طولانی", mean: "long" },
    "af-ghaa-nis-taan":                                                                  { fa: "افغانستان", mean: "Afghanistan" },
    "an-waa":                                                                            { fa: "انواع", mean: "kinds" },
    "goo-naa-goon":                                                                      { fa: "گوناگون", mean: "various" },
    "si-laah-haa":                                                                       { fa: "سلاح‌ها", mean: "weapons" },
    "mun-fa-jir naa-shu-da":                                                             { fa: "منفجر ناشده", mean: "unexploded" },
    "pa-raa-gan-da":                                                                     { fa: "پراگنده", mean: "scattered, spread" },
    "pa-raa-gan-da shu-da and":                                                          { fa: "پراگنده شده اند", mean: "have been scattered" },
    "pa-raa-gan-da shu-dan":                                                             { fa: "پراگنده شدن", mean: "to scatter, to spread" },
    "shu-da":                                                                            { fa: "شده", mean: "become; been" },
    "shu-dan":                                                                           { fa: "شدن", mean: "to become" },
    "and":                                                                               { fa: "اند", mean: "are; after a word like shu-da, have" },
    "az":                                                                                { fa: "از", mean: "from, of" },
    "az jum-la-yi":                                                                      { fa: "از جملهٔ", mean: "among, one of" },
    "jum-la":                                                                            { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "een":                                                                               { fa: "این", mean: "this" },
    "ma-waad":                                                                           { fa: "مواد", mean: "materials, things" },
    "may-baa-shand":                                                                     { fa: "می‌باشند", mean: "are" },
    "bu-dan":                                                                            { fa: "بودن", mean: "to be" },
    "dee-dan":                                                                           { fa: "دیدن", mean: "to see; seeing" },
    "tash-khees":                                                                        { fa: "تشخیص", mean: "recognizing" },
    "tash-khees daa-dan":                                                                { fa: "تشخیص دادن", mean: "recognizing" },
    "daa-dan":                                                                           { fa: "دادن", mean: "to give" },
    "kaar":                                                                              { fa: "کار", mean: "work, a job" },
    "aa-saa-nay":                                                                        { fa: "آسانی", mean: "easy (aa-saan + -ay, an easy …)" },
    "neest":                                                                             { fa: "نیست", mean: "is not" },
    "zee-raa":                                                                           { fa: "زیرا", mean: "because" },
    "aan-haa":                                                                           { fa: "آن‌ها", mean: "they, them" },
    "ak-sar":                                                                            { fa: "اکثر", mean: "mostly" },
    "zayr":                                                                              { fa: "زیر", mean: "under" },
    "za-meen":                                                                           { fa: "زمین", mean: "ground, earth" },
    "gor":                                                                               { fa: "گور", mean: "grave; buried" },
    "gor shu-da and":                                                                    { fa: "گور شده اند", mean: "have been buried" },
    "gor shu-dan":                                                                       { fa: "گور شدن", mean: "to be buried" },
    "am-maa":                                                                            { fa: "اما", mean: "but" },
    "roy":                                                                               { fa: "روی", mean: "face" },
    "qa-raar":                                                                           { fa: "قرار", mean: "place, rest" },
    "qa-raar daa-rand":                                                                  { fa: "قرار دارند", mean: "lie" },
    "qa-raar daash-tan":                                                                 { fa: "قرار داشتن", mean: "to be placed, to lie" },
    "daa-rand":                                                                          { fa: "دارند", mean: "have" },
    "daash-tan":                                                                         { fa: "داشتن", mean: "to have" },
    "shi-naakht":                                                                        { fa: "شناخت", mean: "recognizing, knowing" },
    "dush-waa-ray":                                                                      { fa: "دشواری", mean: "difficult (dush-waar + -ay, a: “a difficult …”)" },
    "pas":                                                                               { fa: "پس", mean: "then, so" },
    "baa-yad":                                                                           { fa: "باید", mean: "must, should" },
    "shaa-gir-daan":                                                                     { fa: "شاگردان", mean: "students" },
    "a-zeez":                                                                            { fa: "عزیز", mean: "Aziz; dear" },
    "jid-dan":                                                                           { fa: "جدا", mean: "seriously, with great care" },
    "ta-waj-juh":                                                                        { fa: "توجه", mean: "attention" },
    "ta-waj-juh daash-ta baa-shand":                                                     { fa: "توجه داشته باشند", mean: "should pay attention" },
    "ta-waj-juh daash-tan":                                                              { fa: "توجه داشتن", mean: "to pay attention" },
    "daash-ta":                                                                          { fa: "داشته", mean: "had" },
    "baa-shand":                                                                         { fa: "باشند", mean: "be" },
    "ki":                                                                                { fa: "که", mean: "that, which, who" },
    "ba":                                                                                { fa: "به", mean: "to" },
    "ash-yaa":                                                                           { fa: "اشیا", mean: "objects, things" },
    "naa-shi-naakh-ta":                                                                  { fa: "ناشناخته", mean: "unknown" },
    "dast":                                                                              { fa: "دست", mean: "hand" },
    "dast na-za-nand":                                                                   { fa: "دست نزنند", mean: "not touch" },
    "dast za-dan":                                                                       { fa: "دست زدن", mean: "to set about" },
    "na-za-nand":                                                                        { fa: "نزنند", mean: "do not hit; (with dast) do not touch" },
    "za-dan":                                                                            { fa: "زدن", mean: "to hit" },
    "seem-haa":                                                                          { fa: "سیم‌ها", mean: "wires" },
    "raa":                                                                               { fa: "را", mean: "marks the object of the verb" },
    "kash":                                                                              { fa: "کش", mean: "pulling" },
    "kash yaa qat na-na-maa-yand":                                                       { fa: "کش یا قطع ننمایند", mean: "not pull or cut" },
    "yaa":                                                                               { fa: "یا", mean: "or" },
    "qat":                                                                               { fa: "قطع", mean: "cutting" },
    "na-na-maa-yand":                                                                    { fa: "ننمایند", mean: "do not do" },
    "na-mo-dan":                                                                         { fa: "نمودن", mean: "to do; to show; to seem" },
    "an-daakh-tan":                                                                      { fa: "انداختن", mean: "throwing; to throw" },
    "sang":                                                                              { fa: "سنگ", mean: "stone" },
    "dee-gar":                                                                           { fa: "دیگر", mean: "other; more; anymore" },
    "ba ta-ra-fi":                                                                       { fa: "به طرف", mean: "toward" },
    "ta-raf":                                                                            { fa: "طرف", mean: "side; the other person" },
    "khud-daa-ree":                                                                      { fa: "خودداری", mean: "refraining, holding back" },
    "khud-daa-ree na-maa-yand":                                                          { fa: "خودداری نمایند", mean: "refrain" },
    "khud-daa-ree na-mo-dan":                                                            { fa: "خودداری نمودن", mean: "to refrain, to keep from" },
    "na-maa-yand":                                                                       { fa: "نمایند", mean: "do" },
    "bi-si-yaar":                                                                        { fa: "بسیار", mean: "much, very" },
    "kha-tar-naak":                                                                      { fa: "خطرناک", mean: "dangerous" },
    "boo-da":                                                                            { fa: "بوده", mean: "has been" },
    "baa-is":                                                                            { fa: "باعث", mean: "cause" },
    "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad": { fa: "باعث زخمی یا کشته شدن انسان‌ها و حیوانات می‌گردد", mean: "can wound or kill people and animals - literally becomes the cause of the wounding or killing of people and animals" },
    "zakh-mee":                                                                          { fa: "زخمی", mean: "wounded" },
    "kush-ta":                                                                           { fa: "کشته", mean: "killed" },
    "kush-tan":                                                                          { fa: "کشتن", mean: "to kill" },
    "in-saan-haa":                                                                       { fa: "انسان‌ها", mean: "people, human beings" },
    "in-saan":                                                                           { fa: "انسان", mean: "a person, a human being" },
    "ha-ya-waa-naat":                                                                    { fa: "حیوانات", mean: "animals" },
    "may-gar-dad":                                                                       { fa: "می‌گردد", mean: "becomes, turns" },
    "gar-dee-dan":                                                                       { fa: "گردیدن", mean: "to become, to turn" },
    "mum-kin":                                                                           { fa: "ممکن", mean: "possible; perhaps" },
    "ast":                                                                               { fa: "است", mean: "is" },
    "har":                                                                               { fa: "هر", mean: "every" },
    "jaa":                                                                               { fa: "جا", mean: "place" },
    "pay-daa":                                                                           { fa: "پیدا", mean: "found, visible" },
    "pay-daa sha-wand":                                                                  { fa: "پیدا شوند", mean: "be found" },
    "pay-daa shu-dan":                                                                   { fa: "پیدا شدن", mean: "to be found, to appear" },
    "sha-wand":                                                                          { fa: "شوند", mean: "become; be" },
    "may-ta-waan":                                                                       { fa: "می‌توان", mean: "one can" },
    "hat-taa":                                                                           { fa: "حتا", mean: "even" },
    "baagh-cha-haa":                                                                     { fa: "باغچه‌ها", mean: "small gardens" },
    "za-meen-haa":                                                                       { fa: "زمین‌ها", mean: "lands, fields" },
    "zi-raa-a-tee":                                                                      { fa: "زراعتی", mean: "for farming" },
    "sa-rak-haa":                                                                        { fa: "سرک‌ها", mean: "roads" },
    "ma-kaa-tib":                                                                        { fa: "مکاتب", mean: "schools" },
    "ghay-ra":                                                                           { fa: "غیره", mean: "and so on, other" },
    "jaa-haa":                                                                           { fa: "جاها", mean: "places" },
    "deed":                                                                              { fa: "دید", mean: "saw" },
    "ma-naa-tiq":                                                                        { fa: "مناطق", mean: "areas" },
    "zayl":                                                                              { fa: "ذیل", mean: "below, following" },
    "pay-daa may-sha-wand":                                                              { fa: "پیدا می‌شوند", mean: "are found" },
    "may-sha-wand":                                                                      { fa: "می‌شوند", mean: "become, are" },
    "raa-haa":                                                                           { fa: "راه‌ها", mean: "paths, roads" },
    "gu-zar-gaah-haa":                                                                   { fa: "گذرگاه‌ها", mean: "crossings, passes" },
    "sa-rak-haa-yay":                                                                    { fa: "سرک‌هایی", mean: "roads (which)" },
    "maw-rid":                                                                           { fa: "مورد", mean: "object, case" },
    "maw-ri-di is-ti-faa-da qa-raar na-gi-rif-ta and":                                   { fa: "مورد استفاده قرار نگرفته اند", mean: "have not been used" },
    "is-ti-faa-da":                                                                      { fa: "استفاده", mean: "use" },
    "na-gi-rif-ta":                                                                      { fa: "نگرفته", mean: "not taken" },
    "gi-rif-tan":                                                                        { fa: "گرفتن", mean: "to take" },
    "ki-naar":                                                                           { fa: "کنار", mean: "side, edge" },
    "saa-haa-tay":                                                                       { fa: "ساحاتی", mean: "areas (which)" },
    "door":                                                                              { fa: "دور", mean: "far" },
    "door daa-da-ni":                                                                    { fa: "دور دادن", mean: "turning around" },
    "wa-saa-yit":                                                                        { fa: "وسایط", mean: "means, vehicles" },
    "wa-saa-yi-ti naq-li-ya":                                                            { fa: "وسایط نقلیه", mean: "vehicles" },
    "naq-li-ya":                                                                         { fa: "نقلیه", mean: "of transport (wa-saa-yit-i naq-li-ya, vehicles)" },
    "mo-tar-haa":                                                                        { fa: "موترها", mean: "cars" },
    "baa-shad":                                                                          { fa: "باشد", mean: "be, should be" },
    "daa-khil":                                                                          { fa: "داخل", mean: "inside" },
    "pul-chak-haa":                                                                      { fa: "پلچک‌ها", mean: "small bridges, culverts" },
    "ma-bar-haa":                                                                        { fa: "معبرها", mean: "crossings, passages" },
    "la-ba-haa":                                                                         { fa: "لبه‌ها", mean: "edges" },
    "pul-haa":                                                                           { fa: "پل‌ها", mean: "bridges" },
    "ta-meer-haa":                                                                       { fa: "تعمیرها", mean: "buildings" },
    "way-raa-na":                                                                        { fa: "ویرانه", mean: "ruined; ruins" },
    "makh-roo-ba":                                                                       { fa: "مخروبه", mean: "broken-down" },
    "dar-waa-za":                                                                        { fa: "دروازه", mean: "gate" },
    "kunj-haa":                                                                          { fa: "کنج‌ها", mean: "corners" },
    "u-taaq-haa":                                                                        { fa: "اتاق‌ها", mean: "rooms" },
    "ma-naa-zi-lay":                                                                     { fa: "منازلی", mean: "houses (which)" },
    "khaa-lee":                                                                          { fa: "خالی", mean: "empty" },
    "at-raaf":                                                                           { fa: "اطراف", mean: "sides, surroundings" },
    "chaah-haa":                                                                         { fa: "چاه‌ها", mean: "wells" },
    "ma-naa-bi":                                                                         { fa: "منابع", mean: "sources" },
    "aab":                                                                               { fa: "آب", mean: "water" },
    "pos-ta-haa":                                                                        { fa: "پوسته‌ها", mean: "posts, checkpoints" },
    "am-ni-ya-tee":                                                                      { fa: "امنیتی", mean: "security" },
    "takh-reeb":                                                                         { fa: "تخریب", mean: "destruction" },
    "takh-reeb shu-da":                                                                  { fa: "تخریب شده", mean: "destroyed" },
    "fa-ro-raf-ta-gee-haa":                                                              { fa: "فرورفته‌گی‌ها", mean: "dips, hollows" },
    "ba shak-li makh-fee-gaah":                                                          { fa: "به شکل مخفی‌گاه", mean: "as a hiding place" },
    "shakl":                                                                             { fa: "شکل", mean: "form, shape" },
    "makh-fee-gaah":                                                                     { fa: "مخفی‌گاه", mean: "hiding place" },
    "qaa-bil":                                                                           { fa: "قابل", mean: "able, fit (qaa-bil-i is-ti-faa-da, usable)" },
    "qaa-bi-li is-ti-faa-da":                                                            { fa: "قابل استفاده", mean: "usable" },
    "dars":                                                                              { fa: "درس", mean: "lesson" },
    "na-tee-ja":                                                                         { fa: "نتیجه", mean: "result" },
    "na-tee-ja may-gee-raym":                                                            { fa: "نتیجه می‌گیریم", mean: "we conclude" },
    "na-tee-ja gi-rif-tan":                                                              { fa: "نتیجه گرفتن", mean: "to conclude" },
    "may-gee-raym":                                                                      { fa: "می‌گیریم", mean: "we take; (with na-tee-ja) we conclude" },
    "jaa-yay":                                                                           { fa: "جایی", mean: "a place" },
    "dast na-za-need":                                                                   { fa: "دست نزنید", mean: "do not touch" },
    "na-za-need":                                                                        { fa: "نزنید", mean: "do not hit; (with dast) do not touch" },
    "dar soo-ra-ti":                                                                     { fa: "در صورت", mean: "in case of" },
    "soo-rat":                                                                           { fa: "صورت", mean: "face, outward form" },
    "mu-shaa-hi-da":                                                                     { fa: "مشاهده", mean: "seeing" },
    "da-faa-tir":                                                                        { fa: "دفاتر", mean: "offices" },
    "maa-yin":                                                                           { fa: "ماین", mean: "mine" },
    "maa-yin paa-kee":                                                                   { fa: "ماین پاکی", mean: "mine clearance" },
    "paa-kee":                                                                           { fa: "پاکی", mean: "cleaning (maa-yin paa-kee, mine clearance)" },
    "mas-oo-leen":                                                                       { fa: "مسؤولین", mean: "officials, the people in charge" },
    "ma-hal":                                                                            { fa: "محل", mean: "place" },
    "kha-bar":                                                                           { fa: "خبر", mean: "news, word" },
    "kha-bar bi-di-heed":                                                                { fa: "خبر بدهید", mean: "tell" },
    "kha-bar daa-dan":                                                                   { fa: "خبر دادن", mean: "to tell, to inform" },
    "bi-di-heed":                                                                        { fa: "بدهید", mean: "give (said to more than one)" }
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
    "say": "saa-haa-ti ih-ti-maa-lee-yi maw-joo-di-ya-ti maa-yin-haa wa mu-him-maa-ti mun-fa-jir naa-shu-da",
    "mean": "Places where mines and unexploded shells may be",
    "words": [
      [
        "ساحات",
        "saa-haa-ti",
        "saa-haat"
      ],
      [
        "احتمالی",
        "ih-ti-maa-lee-yi",
        "ih-ti-maa-lee"
      ],
      [
        "موجودیت",
        "maw-joo-di-ya-ti",
        "maw-joo-di-yat"
      ],
      [
        "ماین‌ها",
        "maa-yin-haa",
        "maa-yin-haa"
      ],
      [
        "و",
        "wa",
        "wa"
      ],
      [
        "مهمات",
        "mu-him-maa-ti",
        "mu-him-maat"
      ],
      [
        "منفجر",
        "mun-fa-jir",
        "mun-fa-jir"
      ],
      [
        "ناشده",
        "naa-shu-da",
        "naa-shu-da"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "dar a-sa-ri jang-haa-yi too-laa-nee dar af-ghaa-nis-taan an-waa-yi goo-naa-goo-ni si-laah-haa wa mu-him-maa-ti mun-fa-jir naa-shu-da pa-raa-gan-da shu-da and.",
        "mean": "As a result of the long wars in Afghanistan, many kinds of weapons and unexploded shells have been scattered around.",
        "words": [
          [
            "در",
            "dar",
            "dar",
            "dar a-sa-ri"
          ],
          [
            "اثر",
            "a-sa-ri",
            "a-sar",
            "dar a-sa-ri"
          ],
          [
            "جنگ‌های",
            "jang-haa-yi",
            "jang-haa"
          ],
          [
            "طولانی",
            "too-laa-nee",
            "too-laa-nee"
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
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "گوناگون",
            "goo-naa-goo-ni",
            "goo-naa-goon"
          ],
          [
            "سلاح‌ها",
            "si-laah-haa",
            "si-laah-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مهمات",
            "mu-him-maa-ti",
            "mu-him-maat"
          ],
          [
            "منفجر",
            "mun-fa-jir",
            "mun-fa-jir",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ناشده",
            "naa-shu-da",
            "naa-shu-da",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "پراگنده",
            "pa-raa-gan-da",
            "pa-raa-gan-da",
            "pa-raa-gan-da shu-da and",
            "pa-raa-gan-da shu-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "pa-raa-gan-da shu-da and",
            "shu-dan",
            "pa-raa-gan-da shu-dan"
          ],
          [
            "اند.",
            "and",
            "and",
            "pa-raa-gan-da shu-da and",
            "pa-raa-gan-da shu-dan"
          ]
        ]
      },
      {
        "say": "az jum-la-yi een ma-waad, maa-yin-haa wa mu-him-maa-ti mun-fa-jir naa-shu-da may-baa-shand.",
        "mean": "Among these things are mines and unexploded shells.",
        "words": [
          [
            "از",
            "az",
            "az",
            "az jum-la-yi"
          ],
          [
            "جملهٔ",
            "jum-la-yi",
            "jum-la",
            "az jum-la-yi"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "مواد،",
            "ma-waad",
            "ma-waad"
          ],
          [
            "ماین‌ها",
            "maa-yin-haa",
            "maa-yin-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مهمات",
            "mu-him-maa-ti",
            "mu-him-maat"
          ],
          [
            "منفجر",
            "mun-fa-jir",
            "mun-fa-jir",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ناشده",
            "naa-shu-da",
            "naa-shu-da",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "می‌باشند.",
            "may-baa-shand",
            "may-baa-shand",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "dee-dan wa tash-khees daa-dan maa-yin-haa kaa-ri aa-saa-nay neest;",
        "mean": "Seeing and recognizing mines is not easy,",
        "words": [
          [
            "دیدن",
            "dee-dan",
            "dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تشخیص",
            "tash-khees",
            "tash-khees",
            "tash-khees daa-dan"
          ],
          [
            "دادن",
            "daa-dan",
            "daa-dan",
            "tash-khees daa-dan"
          ],
          [
            "ماین‌ها",
            "maa-yin-haa",
            "maa-yin-haa"
          ],
          [
            "کار",
            "kaa-ri",
            "kaar"
          ],
          [
            "آسانی",
            "aa-saa-nay",
            "aa-saa-nay"
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
        "say": "zee-raa aan-haa ak-sar dar zay-ri za-meen gor shu-da and;",
        "mean": "because they are mostly buried under the ground;",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "اکثر",
            "ak-sar",
            "ak-sar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زیر",
            "zay-ri",
            "zayr"
          ],
          [
            "زمین",
            "za-meen",
            "za-meen"
          ],
          [
            "گور",
            "gor",
            "gor",
            "gor shu-da and",
            "gor shu-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "gor shu-da and",
            "shu-dan",
            "gor shu-dan"
          ],
          [
            "اند؛",
            "and",
            "and",
            "gor shu-da and",
            "gor shu-dan"
          ]
        ]
      },
      {
        "say": "am-maa mu-him-maa-ti mun-fa-jir naa-shu-da dar ro-yi za-meen qa-raar daa-rand wa shi-naakh-ti aan-haa kaa-ri dush-waa-ray neest;",
        "mean": "but unexploded shells lie on the ground, and recognizing them is not hard.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "مهمات",
            "mu-him-maa-ti",
            "mu-him-maat"
          ],
          [
            "منفجر",
            "mun-fa-jir",
            "mun-fa-jir",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ناشده",
            "naa-shu-da",
            "naa-shu-da",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "روی",
            "ro-yi",
            "roy"
          ],
          [
            "زمین",
            "za-meen",
            "za-meen"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "qa-raar daa-rand",
            "qa-raar daash-tan"
          ],
          [
            "دارند",
            "daa-rand",
            "daa-rand",
            "qa-raar daa-rand",
            "daash-tan",
            "qa-raar daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شناخت",
            "shi-naakh-ti",
            "shi-naakht"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "کار",
            "kaa-ri",
            "kaar"
          ],
          [
            "دشواری",
            "dush-waa-ray",
            "dush-waa-ray"
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
        "say": "pas baa-yad shaa-gir-daa-ni a-zeez jid-dan ta-waj-juh daash-ta baa-shand ki ba ash-yaa-yi naa-shi-naakh-ta dast na-za-nand, seem-haa-yi naa-shi-naakh-ta raa kash yaa qat na-na-maa-yand wa az an-daakh-ta-ni sang yaa ash-yaa-yi dee-gar ba ta-ra-fi maa-yin-haa wa mu-him-maa-ti mun-fa-jir naa-shu-da khud-daa-ree na-maa-yand.",
        "mean": "So, dear students, you must take great care not to touch unknown objects, not to pull or cut unknown wires, and not to throw stones or other things at mines and unexploded shells.",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "شاگردان",
            "shaa-gir-daa-ni",
            "shaa-gir-daan"
          ],
          [
            "عزیز",
            "a-zeez",
            "a-zeez"
          ],
          [
            "جدا",
            "jid-dan",
            "jid-dan"
          ],
          [
            "توجه",
            "ta-waj-juh",
            "ta-waj-juh",
            "ta-waj-juh daash-ta baa-shand",
            "ta-waj-juh daash-tan"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "ta-waj-juh daash-ta baa-shand",
            "daash-tan",
            "ta-waj-juh daash-tan"
          ],
          [
            "باشند",
            "baa-shand",
            "baa-shand",
            "ta-waj-juh daash-ta baa-shand",
            "bu-dan",
            "ta-waj-juh daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "اشیای",
            "ash-yaa-yi",
            "ash-yaa"
          ],
          [
            "ناشناخته",
            "naa-shi-naakh-ta",
            "naa-shi-naakh-ta"
          ],
          [
            "دست",
            "dast",
            "dast",
            "dast na-za-nand",
            "dast za-dan"
          ],
          [
            "نزنند،",
            "na-za-nand",
            "na-za-nand",
            "dast na-za-nand",
            "za-dan",
            "dast za-dan"
          ],
          [
            "سیم‌های",
            "seem-haa-yi",
            "seem-haa"
          ],
          [
            "ناشناخته",
            "naa-shi-naakh-ta",
            "naa-shi-naakh-ta"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "کش",
            "kash",
            "kash",
            "kash yaa qat na-na-maa-yand"
          ],
          [
            "یا",
            "yaa",
            "yaa",
            "kash yaa qat na-na-maa-yand"
          ],
          [
            "قطع",
            "qat",
            "qat",
            "kash yaa qat na-na-maa-yand"
          ],
          [
            "ننمایند",
            "na-na-maa-yand",
            "na-na-maa-yand",
            "kash yaa qat na-na-maa-yand",
            "na-mo-dan"
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
            "انداختن",
            "an-daakh-ta-ni",
            "an-daakh-tan"
          ],
          [
            "سنگ",
            "sang",
            "sang"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "اشیای",
            "ash-yaa-yi",
            "ash-yaa"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba ta-ra-fi"
          ],
          [
            "طرف",
            "ta-ra-fi",
            "ta-raf",
            "ba ta-ra-fi"
          ],
          [
            "ماین‌ها",
            "maa-yin-haa",
            "maa-yin-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مهمات",
            "mu-him-maa-ti",
            "mu-him-maat"
          ],
          [
            "منفجر",
            "mun-fa-jir",
            "mun-fa-jir",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ناشده",
            "naa-shu-da",
            "naa-shu-da",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "خودداری",
            "khud-daa-ree",
            "khud-daa-ree",
            "khud-daa-ree na-maa-yand",
            "khud-daa-ree na-mo-dan"
          ],
          [
            "نمایند.",
            "na-maa-yand",
            "na-maa-yand",
            "khud-daa-ree na-maa-yand",
            "na-mo-dan",
            "khud-daa-ree na-mo-dan"
          ]
        ]
      },
      {
        "say": "an-daakh-ta-ni sang yaa ash-yaa-yi dee-gar ba ta-ra-fi maa-yin-haa wa mu-him-maa-ti mun-fa-jir naa-shu-da bi-si-yaar kha-tar-naak boo-da wa baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad.",
        "mean": "Throwing stones or other things at mines and unexploded shells is very dangerous, and can wound or kill people and animals.",
        "words": [
          [
            "انداختن",
            "an-daakh-ta-ni",
            "an-daakh-tan"
          ],
          [
            "سنگ",
            "sang",
            "sang"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "اشیای",
            "ash-yaa-yi",
            "ash-yaa"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba ta-ra-fi"
          ],
          [
            "طرف",
            "ta-ra-fi",
            "ta-raf",
            "ba ta-ra-fi"
          ],
          [
            "ماین‌ها",
            "maa-yin-haa",
            "maa-yin-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مهمات",
            "mu-him-maa-ti",
            "mu-him-maat"
          ],
          [
            "منفجر",
            "mun-fa-jir",
            "mun-fa-jir",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ناشده",
            "naa-shu-da",
            "naa-shu-da",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ],
          [
            "خطرناک",
            "kha-tar-naak",
            "kha-tar-naak"
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
            "باعث",
            "baa-i-si",
            "baa-is",
            "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad"
          ],
          [
            "زخمی",
            "zakh-mee",
            "zakh-mee",
            "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad"
          ],
          [
            "یا",
            "yaa",
            "yaa",
            "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad"
          ],
          [
            "کشته",
            "kush-ta",
            "kush-ta",
            "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad",
            "kush-tan"
          ],
          [
            "شدن",
            "shu-da-ni",
            "shu-dan",
            "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad"
          ],
          [
            "انسان‌ها",
            "in-saan-haa",
            "in-saan-haa",
            "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad",
            "in-saan"
          ],
          [
            "و",
            "wa",
            "wa",
            "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad"
          ],
          [
            "حیوانات",
            "ha-ya-waa-naat",
            "ha-ya-waa-naat",
            "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "baa-i-si zakh-mee yaa kush-ta shu-da-ni in-saan-haa wa ha-ya-waa-naat may-gar-dad",
            "gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "maa-yin-haa wa mu-him-maa-ti mun-fa-jir naa-shu-da, mum-kin ast dar har jaa pay-daa sha-wand.",
        "mean": "Mines and unexploded shells may be found anywhere.",
        "words": [
          [
            "ماین‌ها",
            "maa-yin-haa",
            "maa-yin-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مهمات",
            "mu-him-maa-ti",
            "mu-him-maat"
          ],
          [
            "منفجر",
            "mun-fa-jir",
            "mun-fa-jir",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ناشده،",
            "naa-shu-da",
            "naa-shu-da",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ممکن",
            "mum-kin",
            "mum-kin"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "جا",
            "jaa",
            "jaa"
          ],
          [
            "پیدا",
            "pay-daa",
            "pay-daa",
            "pay-daa sha-wand",
            "pay-daa shu-dan"
          ],
          [
            "شوند.",
            "sha-wand",
            "sha-wand",
            "pay-daa sha-wand",
            "shu-dan",
            "pay-daa shu-dan"
          ]
        ]
      },
      {
        "say": "mu-him-maa-ti mun-fa-jir naa-shu-da raa may-ta-waan dar har jaa, hat-taa dar baagh-cha-haa, za-meen-haa-yi zi-raa-a-tee, sa-rak-haa, ma-kaa-tib wa ghay-ra jaa-haa deed;",
        "mean": "Unexploded shells can be seen anywhere, even in gardens, farmland, roads, schools and other places;",
        "words": [
          [
            "مهمات",
            "mu-him-maa-ti",
            "mu-him-maat"
          ],
          [
            "منفجر",
            "mun-fa-jir",
            "mun-fa-jir",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ناشده",
            "naa-shu-da",
            "naa-shu-da",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "می‌توان",
            "may-ta-waan",
            "may-ta-waan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "جا،",
            "jaa",
            "jaa"
          ],
          [
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "باغچه‌ها،",
            "baagh-cha-haa",
            "baagh-cha-haa"
          ],
          [
            "زمین‌های",
            "za-meen-haa-yi",
            "za-meen-haa"
          ],
          [
            "زراعتی،",
            "zi-raa-a-tee",
            "zi-raa-a-tee"
          ],
          [
            "سرک‌ها،",
            "sa-rak-haa",
            "sa-rak-haa"
          ],
          [
            "مکاتب",
            "ma-kaa-tib",
            "ma-kaa-tib"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غیره",
            "ghay-ra",
            "ghay-ra"
          ],
          [
            "جاها",
            "jaa-haa",
            "jaa-haa"
          ],
          [
            "دید؛",
            "deed",
            "deed",
            "dee-dan"
          ]
        ]
      },
      {
        "say": "am-maa maa-yin-haa ak-sar dar ma-naa-ti-qi zayl pay-daa may-sha-wand:",
        "mean": "but mines are mostly found in the following places:",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "ماین‌ها",
            "maa-yin-haa",
            "maa-yin-haa"
          ],
          [
            "اکثر",
            "ak-sar",
            "ak-sar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مناطق",
            "ma-naa-ti-qi",
            "ma-naa-tiq"
          ],
          [
            "ذیل",
            "zayl",
            "zayl"
          ],
          [
            "پیدا",
            "pay-daa",
            "pay-daa",
            "pay-daa may-sha-wand"
          ],
          [
            "می‌شوند:",
            "may-sha-wand",
            "may-sha-wand",
            "pay-daa may-sha-wand",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar raa-haa, gu-zar-gaah-haa wa sa-rak-haa-yay ki maw-ri-di is-ti-faa-da qa-raar na-gi-rif-ta and.",
        "mean": "On paths, crossings and roads that have not been used.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "راه‌ها،",
            "raa-haa",
            "raa-haa"
          ],
          [
            "گذرگاه‌ها",
            "gu-zar-gaah-haa",
            "gu-zar-gaah-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سرک‌هایی",
            "sa-rak-haa-yay",
            "sa-rak-haa-yay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di is-ti-faa-da qa-raar na-gi-rif-ta and"
          ],
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da",
            "maw-ri-di is-ti-faa-da qa-raar na-gi-rif-ta and"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "maw-ri-di is-ti-faa-da qa-raar na-gi-rif-ta and"
          ],
          [
            "نگرفته",
            "na-gi-rif-ta",
            "na-gi-rif-ta",
            "maw-ri-di is-ti-faa-da qa-raar na-gi-rif-ta and",
            "gi-rif-tan"
          ],
          [
            "اند.",
            "and",
            "and",
            "maw-ri-di is-ti-faa-da qa-raar na-gi-rif-ta and"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar ki-naa-ri sa-rak-haa wa raa-haa",
        "mean": "Beside roads and paths.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "سرک‌ها",
            "sa-rak-haa",
            "sa-rak-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "راه‌ها",
            "raa-haa",
            "raa-haa"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar saa-haa-tay ki jaa-yi door daa-da-ni wa-saa-yi-ti naq-li-ya wa mo-tar-haa baa-shad.",
        "mean": "In places where vehicles and cars turn around.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ساحاتی",
            "saa-haa-tay",
            "saa-haa-tay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "جای",
            "jaa-yi",
            "jaa"
          ],
          [
            "دور",
            "door",
            "door",
            "door daa-da-ni"
          ],
          [
            "دادن",
            "daa-da-ni",
            "daa-dan",
            "door daa-da-ni"
          ],
          [
            "وسایط",
            "wa-saa-yi-ti",
            "wa-saa-yit",
            "wa-saa-yi-ti naq-li-ya"
          ],
          [
            "نقلیه",
            "naq-li-ya",
            "naq-li-ya",
            "wa-saa-yi-ti naq-li-ya"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "موترها",
            "mo-tar-haa",
            "mo-tar-haa"
          ],
          [
            "باشد.",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar daa-khil yaa ki-naa-ri pul-chak-haa, ma-bar-haa wa la-ba-haa-yi pul-haa.",
        "mean": "In or beside small bridges, crossings and the edges of bridges.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "داخل",
            "daa-khil",
            "daa-khil"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "پلچک‌ها،",
            "pul-chak-haa",
            "pul-chak-haa"
          ],
          [
            "معبر‌ها",
            "ma-bar-haa",
            "ma-bar-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "لبه‌های",
            "la-ba-haa-yi",
            "la-ba-haa"
          ],
          [
            "پل‌ها.",
            "pul-haa",
            "pul-haa"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar daa-khil yaa ki-naa-ri ta-meer-haa-yi way-raa-na wa makh-roo-ba.",
        "mean": "In or beside ruined and broken-down buildings.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "داخل",
            "daa-khil",
            "daa-khil"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "تعمیرهای",
            "ta-meer-haa-yi",
            "ta-meer-haa"
          ],
          [
            "ویرانه",
            "way-raa-na",
            "way-raa-na"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مخروبه.",
            "makh-roo-ba",
            "makh-roo-ba"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar dar-waa-za wa kunj-haa-yi u-taaq-haa-yi ma-naa-zi-lay ki khaa-lee baa-shand.",
        "mean": "In the doorways and corners of the rooms of empty houses.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دروازه",
            "dar-waa-za",
            "dar-waa-za"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کنج‌های",
            "kunj-haa-yi",
            "kunj-haa"
          ],
          [
            "اتاق‌های",
            "u-taaq-haa-yi",
            "u-taaq-haa"
          ],
          [
            "منازلی",
            "ma-naa-zi-lay",
            "ma-naa-zi-lay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "خالی",
            "khaa-lee",
            "khaa-lee"
          ],
          [
            "باشند.",
            "baa-shand",
            "baa-shand",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar daa-khil wa at-raa-fi chaah-haa wa dee-gar ma-naa-bi-yi aab.",
        "mean": "In and around wells and other water sources.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "داخل",
            "daa-khil",
            "daa-khil"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اطراف",
            "at-raa-fi",
            "at-raaf"
          ],
          [
            "چاه‌ها",
            "chaah-haa",
            "chaah-haa"
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
            "منابع",
            "ma-naa-bi-yi",
            "ma-naa-bi"
          ],
          [
            "آب.",
            "aab",
            "aab"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar at-raa-fi pos-ta-haa-yi am-ni-ya-tee wa wa-saa-yi-ti takh-reeb shu-da.",
        "mean": "Around security posts and destroyed vehicles.",
        "words": [
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
            "پوسته‌های",
            "pos-ta-haa-yi",
            "pos-ta-haa"
          ],
          [
            "امنیتی",
            "am-ni-ya-tee",
            "am-ni-ya-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "وسایط",
            "wa-saa-yi-ti",
            "wa-saa-yit"
          ],
          [
            "تخریب",
            "takh-reeb",
            "takh-reeb",
            "takh-reeb shu-da"
          ],
          [
            "شده.",
            "shu-da",
            "shu-da",
            "takh-reeb shu-da",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar fa-ro-raf-ta-gee-haa-yi za-meen ki ba shak-li makh-fee-gaah qaa-bi-li is-ti-faa-da baa-shad.",
        "mean": "In dips in the ground that could be used as a hiding place.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "فرورفته‌گی‌های",
            "fa-ro-raf-ta-gee-haa-yi",
            "fa-ro-raf-ta-gee-haa"
          ],
          [
            "زمین",
            "za-meen",
            "za-meen"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba shak-li makh-fee-gaah"
          ],
          [
            "شکل",
            "shak-li",
            "shakl",
            "ba shak-li makh-fee-gaah"
          ],
          [
            "مخفی‌گاه",
            "makh-fee-gaah",
            "makh-fee-gaah",
            "ba shak-li makh-fee-gaah"
          ],
          [
            "قابل",
            "qaa-bi-li",
            "qaa-bil",
            "qaa-bi-li is-ti-faa-da"
          ],
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da",
            "qaa-bi-li is-ti-faa-da"
          ],
          [
            "باشد.",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "pas az een dars na-tee-ja may-gee-raym ki maa-yin-haa wa mu-him-maa-ti mun-fa-jir naa-shu-da mum-kin ast dar har jaa-yay pay-daa sha-wand;",
        "mean": "From this lesson we conclude that mines and unexploded shells may be found anywhere;",
        "words": [
          [
            "پس",
            "pas",
            "pas"
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
            "درس",
            "dars",
            "dars"
          ],
          [
            "نتیجه",
            "na-tee-ja",
            "na-tee-ja",
            "na-tee-ja may-gee-raym",
            "na-tee-ja gi-rif-tan"
          ],
          [
            "می‌گیریم",
            "may-gee-raym",
            "may-gee-raym",
            "na-tee-ja may-gee-raym",
            "gi-rif-tan",
            "na-tee-ja gi-rif-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "ماین‌ها",
            "maa-yin-haa",
            "maa-yin-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مهمات",
            "mu-him-maa-ti",
            "mu-him-maat"
          ],
          [
            "منفجر",
            "mun-fa-jir",
            "mun-fa-jir",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ناشده",
            "naa-shu-da",
            "naa-shu-da",
            "mun-fa-jir naa-shu-da"
          ],
          [
            "ممکن",
            "mum-kin",
            "mum-kin"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "جایی",
            "jaa-yay",
            "jaa-yay"
          ],
          [
            "پیدا",
            "pay-daa",
            "pay-daa",
            "pay-daa sha-wand",
            "pay-daa shu-dan"
          ],
          [
            "شوند؛",
            "sha-wand",
            "sha-wand",
            "pay-daa sha-wand",
            "shu-dan",
            "pay-daa shu-dan"
          ]
        ]
      },
      {
        "say": "ba aan-haa dast na-za-need wa dar soo-ra-ti mu-shaa-hi-da-yi aan-haa, ba da-faa-ti-ri maa-yin paa-kee yaa mas-oo-lee-ni ma-hal kha-bar bi-di-heed.",
        "mean": "do not touch them, and if you see them, tell the mine clearance offices or the local authorities.",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "دست",
            "dast",
            "dast",
            "dast na-za-need"
          ],
          [
            "نزنید",
            "na-za-need",
            "na-za-need",
            "dast na-za-need",
            "za-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar soo-ra-ti"
          ],
          [
            "صورت",
            "soo-ra-ti",
            "soo-rat",
            "dar soo-ra-ti"
          ],
          [
            "مشاهدهٔ",
            "mu-shaa-hi-da-yi",
            "mu-shaa-hi-da"
          ],
          [
            "آن‌ها،",
            "aan-haa",
            "aan-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دفاتر",
            "da-faa-ti-ri",
            "da-faa-tir"
          ],
          [
            "ماین",
            "maa-yin",
            "maa-yin",
            "maa-yin paa-kee"
          ],
          [
            "پاکی",
            "paa-kee",
            "paa-kee",
            "maa-yin paa-kee"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "مسؤولین",
            "mas-oo-lee-ni",
            "mas-oo-leen"
          ],
          [
            "محل",
            "ma-hal",
            "ma-hal"
          ],
          [
            "خبر",
            "kha-bar",
            "kha-bar",
            "kha-bar bi-di-heed",
            "kha-bar daa-dan"
          ],
          [
            "بدهید.",
            "bi-di-heed",
            "bi-di-heed",
            "kha-bar bi-di-heed",
            "daa-dan",
            "kha-bar daa-dan"
          ]
        ]
      }
    ]
  ]
});
