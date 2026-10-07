/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 17, book pages 110-111, PDF pages 117-118 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «سختی‌ه‌ا» is written «سختی‌ها»; «انسان‌ه‌ا» is written «انسان‌ها»; «ضربه‌ه‌ا» is written «ضربه‌ها»; «آن‌ه‌ا» is written «آن‌ها»; «مصیبت‌ه‌ا» is written «مصیبت‌ها»; «خساره‌ه‌ا» is written «خساره‌ها»; «خیلی‌ه‌ا» is written «خیلی‌ها»; garbled letters are typed from the page as ««وَلَنَبْلُوَنَّکُم بِشَیءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ (ط) وَبَشِّرِ الصَّابِرِینَ» البقره / ۱۵۵.»; «البقره /» is written «البقره/».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-17',
  group: 'Dari · grade 9',
  label: 'Lesson 17',
  name: "mu-baa-ri-za baa sakh-tee-haa",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_17.jpg',
    alt: "Two children carrying heavy sacks along a rough road."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_17.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "mu-baa-ri-za":            { fa: "مبارزه", mean: "struggle, control" },
    "baa":                     { fa: "با", mean: "with" },
    "sakh-tee-haa":            { fa: "سختی‌ها", mean: "hardships" },
    "wa":                      { fa: "و", mean: "and" },
    "push-ti-kaar":            { fa: "پشتکار", mean: "perseverance" },
    "dar":                     { fa: "در", mean: "in" },
    "kaar-haa":                { fa: "کارها", mean: "works, jobs" },
    "raaz":                    { fa: "راز", mean: "secret" },
    "mu-waf-fa-qi-yat":        { fa: "موفقیت", mean: "success" },
    "in-saan":                 { fa: "انسان", mean: "a person, a human being" },
    "zin-da-gee":              { fa: "زنده‌گی", mean: "life" },
    "ast":                     { fa: "است", mean: "is" },
    "zee-raa":                 { fa: "زیرا", mean: "because" },
    "kaar-zaar":               { fa: "کارزار", mean: "struggle, battlefield" },
    "ha-yaat":                 { fa: "حیات", mean: "life" },
    "mam-lo":                  { fa: "مملو", mean: "full" },
    "az":                      { fa: "از", mean: "from, of" },
    "fa-raaz":                 { fa: "فراز", mean: "rise, high point" },
    "fu-rood-haa":             { fa: "فرودها", mean: "falls, low points" },
    "aaz-maa-yish":            { fa: "آزمایش", mean: "test, trial" },
    "im-ti-haan-haa-st":       { fa: "امتحان‌هاست", mean: "are tests" },
    "ba":                      { fa: "به", mean: "to" },
    "sar-man-zil#joined":      { fa: "سرمنزل", say: "sar-man-zil", mean: "destination" },
    "maq-sood":                { fa: "مقصود", mean: "aim, goal" },
    "ka-say":                  { fa: "کسی", mean: "someone" },
    "may-ra-sad":              { fa: "می‌رسد", mean: "arrives, reaches" },
    "ra-see-dan":              { fa: "رسیدن", mean: "to arrive, to reach" },
    "ki":                      { fa: "که", mean: "that, which, who" },
    "taab":                    { fa: "تاب", mean: "endurance" },
    "ta-waan":                 { fa: "توان", mean: "strength, ability" },
    "mu-qaa-bi-la":            { fa: "مقابله", mean: "facing, resistance" },
    "sakh-tee-haa-yi":         { fa: "سختی‌های", mean: "hardships" },
    "rooz-gaar":               { fa: "روزگار", mean: "time, era" },
    "raa":                     { fa: "را", mean: "marks the object of the verb" },
    "daash-ta":                { fa: "داشته", mean: "had" },
    "daash-tan":               { fa: "داشتن", mean: "to have" },
    "baa-shad":                { fa: "باشد", mean: "be, should be" },
    "bu-dan":                  { fa: "بودن", mean: "to be" },
    "chu-naan-ki":             { fa: "چنان‌که", mean: "as, for example" },
    "shaykh":                  { fa: "شیخ", mean: "sheikh - a title for a great teacher or poet" },
    "sa-dee":                  { fa: "سعدی", mean: "Sa’di, the Persian poet from Shiraz who died about 1292" },
    "guf-ta":                  { fa: "گفته", mean: "said" },
    "guf-tan":                 { fa: "گفتن", mean: "to say, to tell" },
    "naa-bur-da":              { fa: "نابرده", mean: "not having endured" },
    "bur-dan":                 { fa: "بردن", mean: "to take away, to carry" },
    "ranj":                    { fa: "رنج", mean: "hardship, suffering" },
    "ganj":                    { fa: "گنج", mean: "treasure" },
    "mu-yas-sar":              { fa: "میسر", mean: "possible, attainable" },
    "na-may-sha-wad":          { fa: "نمی‌شود", mean: "cannot be, does not become" },
    "shu-dan":                 { fa: "شدن", mean: "to become" },
    "muzd":                    { fa: "مزد", mean: "reward, wage" },
    "aan":                     { fa: "آن", mean: "that" },
    "gi-rift":                 { fa: "گرفت", mean: "took; began" },
    "gi-rif-tan":              { fa: "گرفتن", mean: "to take" },
    "jaan":                    { fa: "جان", mean: "soul, life" },
    "bi-raa-dar":              { fa: "برادر", mean: "brother" },
    "kaar":                    { fa: "کار", mean: "work, a job" },
    "kard":                    { fa: "کرد", mean: "did, made" },
    "kar-dan":                 { fa: "کردن", mean: "to do, to make" },
    "ha-meen-tawr":            { fa: "همین‌طور", mean: "likewise" },
    "a-gar":                   { fa: "اگر", mean: "if" },
    "shaa-gir-daan":           { fa: "شاگردان", mean: "students" },
    "dars":                    { fa: "درس", mean: "lesson" },
    "na-khaa-nand":            { fa: "نخوانند", mean: "do not study, may not read" },
    "khaan-dan":               { fa: "خواندن", mean: "to read, to recite" },
    "zah-mat":                 { fa: "زحمت", mean: "effort, hardship" },
    "na-ka-shand":             { fa: "نکشند", mean: "do not endure, do not make" },
    "ka-shee-dan":             { fa: "کشیدن", mean: "to pull; to bear" },
    "as-lan":                  { fa: "اصلاً", mean: "at all" },
    "ni-mat":                  { fa: "نعمت", mean: "favor, blessing" },
    "bu-zurg":                 { fa: "بزرگ", mean: "big, great" },
    "ilm":                     { fa: "علم", mean: "knowledge, learning" },
    "daa-nish":                { fa: "دانش", mean: "knowledge" },
    "bah-ra-war":              { fa: "بهره‌ور", mean: "benefiting, benefited" },
    "na-may-sha-wand":         { fa: "نمی‌شوند", mean: "do not become, are not" },
    "na-tee-ja":               { fa: "نتیجه", mean: "result" },
    "im-ti-haan":              { fa: "امتحان", mean: "examination, test" },
    "naa-kaam":                { fa: "ناکام", mean: "unsuccessful, failed" },
    "may-maa-nand":            { fa: "می‌مانند", mean: "remain" },
    "maan-dan":                { fa: "ماندن", mean: "to remain, to stay" },
    "ha-meen-goo-na":          { fa: "همین‌گونه", mean: "likewise, in the same way" },
    "ba-raa-yi":               { fa: "برای", mean: "for" },
    "khu-daa":                 { fa: "خدا", mean: "God" },
    "sa-aa-dat":               { fa: "سعادت", mean: "happiness" },
    "daa-rayn":                { fa: "دارین", mean: "the two worlds, this life and the next" },
    "in-saan-haa":             { fa: "انسان‌ها", mean: "people, human beings" },
    "nah-wee":                 { fa: "نحوی", mean: "a way, manner" },
    "an-haa":                  { fa: "انحا", mean: "ways, manners" },
    "shak-lee":                { fa: "شکلی", mean: "a form, way" },
    "ash-kaal":                { fa: "اشکال", mean: "shapes, forms" },
    "maw-rid":                 { fa: "مورد", mean: "object, case" },
    "qa-raar":                 { fa: "قرار", mean: "place, rest" },
    "may-gee-rand":            { fa: "می‌گیرند", mean: "take, receive" },
    "khu-daa-wand":            { fa: "خداوند", mean: "God, the Lord" },
    "af-raad":                 { fa: "افراد", mean: "individuals, members" },
    "sha-kee-baa":             { fa: "شکیبا", mean: "patient, steadfast" },
    "saa-bir":                 { fa: "صابر", mean: "patient" },
    "muzh-da":                 { fa: "مژده", mean: "good news" },
    "nayk":                    { fa: "نیک", mean: "good" },
    "may-di-had":              { fa: "می‌دهد", mean: "gives" },
    "daa-dan":                 { fa: "دادن", mean: "to give" },
    "wa-la-na-blu-wan-na-kum": { fa: "وَلَنَبْلُوَنَّکُم", mean: "and We will surely test you" },
    "bi-shay-in":              { fa: "بِشَیءٍ", mean: "with something, with some" },
    "man":                     { fa: "من", mean: "I" },
    "al-khaw-fi":              { fa: "الْخَوْفِ", mean: "fear" },
    "wal-joo-i":               { fa: "وَالْجُوعِ", mean: "and hunger" },
    "wa-naq-sin":              { fa: "وَنَقْصٍ", mean: "and loss" },
    "al-am-waa-li":            { fa: "الْأَمْوَالِ", mean: "possessions, wealth" },
    "wal-an-fu-si":            { fa: "وَالْأَنفُسِ", mean: "and lives" },
    "was-sa-ma-raa-ti":        { fa: "وَالثَّمَرَاتِ", mean: "and fruits" },
    "waq-fi mut-laq":          { fa: "(ط)", mean: "an Arabic recitation stop sign" },
    "wa-bash-shi-ris":         { fa: "وَبَشِّرِ", mean: "and give good news" },
    "saa-bi-reen":             { fa: "الصَّابِرِینَ", mean: "the patient" },
    "al-ba-qa-ra":             { fa: "البقره", mean: "Al-Baqara, the Cow, Quran chapter 2" },
    "sad-u pan-jaa-hu panj":   { fa: "۱۵۵", mean: "155" },
    "al-bat-ta":               { fa: "البته", mean: "of course" },
    "shu-maa":                 { fa: "شما", mean: "you (more than one, or polite)" },
    "chee-zay":                { fa: "چیزی", mean: "something" },
    "tars":                    { fa: "ترس", mean: "fear" },
    "gur-sin-na-gee":          { fa: "گرسنه‌گی", mean: "hunger" },
    "nuq-saan":                { fa: "نقصان", mean: "loss, decrease" },
    "maal-haa":                { fa: "مال‌ها", mean: "possessions, property" },
    "jaan-haa":                { fa: "جان‌ها", mean: "lives" },
    "may-wa-haa":              { fa: "میوه‌ها", mean: "fruits" },
    "bi-yaaz-maa-yeem":        { fa: "بیازماییم", mean: "we test" },
    "aaz-mo-dan":              { fa: "آزمودن", mean: "to test" },
    "ba-shaa-rat":             { fa: "بشارت", mean: "good news" },
    "dah":                     { fa: "ده", mean: "ten" },
    "saa-bi-raan":             { fa: "صابران", mean: "patient people" },
    "ka-saa-nay":              { fa: "کسانی", mean: "people (who)" },
    "ib-ti-laa":               { fa: "ابتلا", mean: "affliction, trial" },
    "aaz-maa-yish-haa-yi":     { fa: "آزمایش‌های", mean: "tests, trials" },
    "mu-qaa-wa-mat":           { fa: "مقاومت", mean: "resistance" },
    "is-taa-da-gee":           { fa: "ایستاده‌گی", mean: "steadfastness" },
    "may-na-maa-yand":         { fa: "می‌نمایند", mean: "seem, look" },
    "na-mo-dan":               { fa: "نمودن", mean: "to do; to show; to seem" },
    "sar-an-jaam":             { fa: "سرانجام", mean: "finally, in the end" },
    "pee-rooz":                { fa: "پیروز", mean: "victorious, successful" },
    "may-sha-wand":            { fa: "می‌شوند", mean: "become, are" },
    "mush-ki-laat":            { fa: "مشکلات", mean: "problems" },
    "zar-ba-haa":              { fa: "ضربه‌ها", mean: "blows" },
    "maw-joo-daat":            { fa: "موجودات", mean: "creatures, beings" },
    "jaa-mid":                 { fa: "جامد", mean: "inanimate, solid" },
    "ta-baah":                 { fa: "تباه", mean: "ruined, destroyed" },
    "naa-bood":                { fa: "نابود", mean: "destroyed" },
    "may-saa-zad":             { fa: "می‌سازد", mean: "makes" },
    "saakh-tan":               { fa: "ساختن", mean: "to make, to build" },
    "qud-rat":                 { fa: "قدرت", mean: "power" },
    "ta-waa-naa-yay":          { fa: "توانایی", mean: "strong (ta-waa-naa + -ay, a: “a strong …”)" },
    "aan-haa":                 { fa: "آن‌ها", mean: "they, them" },
    "may-kaa-had":             { fa: "می‌کاهد", mean: "reduces" },
    "kaas-tan":                { fa: "کاستن", mean: "to reduce" },
    "wa-lay":                  { fa: "ولی", mean: "but" },
    "zin-da":                  { fa: "زنده", mean: "alive" },
    "ta-ha-ruk":               { fa: "تحرک", mean: "movement, energy" },
    "bakh-shee-da":            { fa: "بخشیده", mean: "having given" },
    "bakh-shee-dan":           { fa: "بخشیدن", mean: "to give, to grant; to forgive" },
    "nee-roo-man-dash-aan":    { fa: "نیرومندشان", mean: "makes them strong, their strength" },
    "mu-see-bat-haa":          { fa: "مصیبت‌ها", mean: "calamities" },
    "ta-kaa-mul":              { fa: "تکامل", mean: "development, perfection" },
    "paa-yaa-daa-ree":         { fa: "پایداری", mean: "endurance, stability" },
    "ba-shar":                 { fa: "بشر", mean: "humankind" },
    "khay-lee":                { fa: "خیلی", mean: "very" },
    "rah-gu-shaa":             { fa: "رهگشا", mean: "helpful, opening the way" },
    "mu-sir":                  { fa: "موثر", mean: "effective" },
    "mu-qad-da-ma-yi":         { fa: "مقدمهٔ", mean: "preface, introduction" },
    "ka-maal":                 { fa: "کمال", mean: "perfection" },
    "pesh-raft":               { fa: "پیشرفت", mean: "progress" },
    "sha-raa-yit":             { fa: "شرایط", mean: "conditions" },
    "dush-waar":               { fa: "دشوار", mean: "difficult" },
    "naa-gu-waar":             { fa: "ناگوار", mean: "unpleasant" },
    "aa-da-mee":               { fa: "آدمی", mean: "man, human being" },
    "nee-roo-mand":            { fa: "نیرومند", mean: "strong" },
    "chaa-buk":                { fa: "چابک", mean: "agile" },
    "baar":                    { fa: "بار", mean: "time, occasion; load" },
    "may-aa-wa-rad":           { fa: "می‌آورد", mean: "brings" },
    "aa-war-dan":              { fa: "آوردن", mean: "to bring" },
    "ma-saa-yib":              { fa: "مصایب", mean: "misfortunes" },
    "waq-tay":                 { fa: "وقتی", mean: "when" },
    "and":                     { fa: "اند", mean: "are; after a word like shu-da, have" },
    "bah-ra":                  { fa: "بهره", mean: "benefit" },
    "jo-yad":                  { fa: "جوید", mean: "may seek, benefit" },
    "jus-tan":                 { fa: "جستن", mean: "to seek, to look for" },
    "sabr":                    { fa: "صبر", mean: "patience" },
    "sha-kee-baa-yee":         { fa: "شکیبایی", mean: "endurance" },
    "is-ti-qaa-mat":           { fa: "استقامت", mean: "steadfastness" },
    "rooh":                    { fa: "روح", mean: "spirit, soul" },
    "khud":                    { fa: "خود", mean: "own; self" },
    "bakh-shad":               { fa: "بخشد", mean: "give, grant" },
    "am-maa":                  { fa: "اما", mean: "but" },
    "ba-raa-bar":              { fa: "برابر", mean: "front (dar ba-raa-bar-i, toward, before); equal" },
    "na-na-mo-da":             { fa: "ننموده", mean: "not having done, not stopping" },
    "zaa-noo":                 { fa: "زانو", mean: "knee" },
    "dar-aa-yad":              { fa: "درآید", mean: "enters, falls" },
    "dar-aa-ma-dan":           { fa: "درآمدن", mean: "to come in; to take a form" },
    "naa-la":                  { fa: "ناله", mean: "moan, wail" },
    "shi-kwa":                 { fa: "شکوه", mean: "complaint, lament" },
    "sar-di-had":              { fa: "سردهد", mean: "begins, gives voice" },
    "sar daa-dan":             { fa: "سر دادن", mean: "to begin, give voice to" },
    "een":                     { fa: "این", mean: "this" },
    "soo-rat":                 { fa: "صورت", mean: "face, outward form" },
    "ba-raa-yash":             { fa: "برایش", mean: "for him, for her" },
    "naa-khosh-aa-yand":       { fa: "ناخوشایند", mean: "unpleasant" },
    "ka-shaa-kash":            { fa: "کشاکش", mean: "struggle" },
    "dahr":                    { fa: "دهر", mean: "time, the world" },
    "paa":                     { fa: "پا", mean: "foot, leg" },
    "may-uf-tad":              { fa: "می‌افتد", mean: "falls" },
    "uf-taa-dan":              { fa: "افتادن", mean: "to fall" },
    "dast":                    { fa: "دست", mean: "hand" },
    "may-di-hand":             { fa: "می‌دهند", mean: "give" },
    "kha-saa-ra-haa":          { fa: "خساره‌ها", mean: "losses" },
    "za-rar-haa-yi":           { fa: "ضررهای", mean: "harms, losses" },
    "zi-yaa-dee":              { fa: "زیادی", mean: "many, a great amount" },
    "mu-ta-ham-mil":           { fa: "متحمل", mean: "bearing, suffering" },
    "may-gar-dand":            { fa: "می‌گردند", mean: "become, turn" },
    "gar-dee-dan":             { fa: "گردیدن", mean: "to become, to turn" },
    "jub-raan":                { fa: "جبران", mean: "compensation, repair" },
    "khi-lee-haa":             { fa: "خیلی‌ها", mean: "very, extremely" },
    "ha-daf-mand":             { fa: "هدفمند", mean: "purposeful" },
    "khi-rad-mand":            { fa: "خردمند", mean: "wise man" },
    "baa-yad":                 { fa: "باید", mean: "must, should" },
    "ma-saa-ee":               { fa: "مساعی", mean: "efforts" },
    "pay-geer":                { fa: "پیگیر", mean: "persistent" },
    "ta-laash-haa-yi":         { fa: "تلاش‌های", mean: "efforts" },
    "khas-ta-gee-naa-pa-zeer": { fa: "خسته‌گی‌ناپذیر", mean: "tireless" },
    "fu-tuw-wat":              { fa: "فتوت", mean: "futuwwat, the code of chivalry of the Sufis and ayyars" },
    "paa-y-mar-dee":           { fa: "پایمردی", mean: "steadfastness, courage" },
    "a-ma-lan":                { fa: "عملاً", mean: "in practice" },
    "is-baat":                 { fa: "اثبات", mean: "proof, proving" },
    "bi-ra-saa-nad":           { fa: "برساند", mean: "bring" },
    "ra-saan-dan":             { fa: "رساندن", mean: "to bring, to deliver" },
    "mas-dar":                 { fa: "مصدر", mean: "source" },
    "khi-da-maat":             { fa: "خدمات", mean: "services" },
    "mu-feed":                 { fa: "مفید", mean: "useful, beneficial" },
    "ar-zin-da":               { fa: "ارزنده", mean: "valuable" },
    "khaa-na-waa-da":          { fa: "خانواده", mean: "family" },
    "kish-war":                { fa: "کشور", mean: "country" },
    "man-ti-qa":               { fa: "منطقه", mean: "area, region" },
    "ja-haan":                 { fa: "جهان", mean: "world" },
    "gar-dad":                 { fa: "گردد", mean: "become" },
    "mard":                    { fa: "مرد", mean: "man" },
    "sang":                    { fa: "سنگ", mean: "stone" },
    "zee-reen":                { fa: "زیرین", mean: "lower" },
    "aa-si-yaa":               { fa: "آسیا", mean: "mill" },
    "ta-ham-mul":              { fa: "تحمل", mean: "bearing, enduring" },
    "ranj-haa":                { fa: "رنج‌ها", mean: "sufferings" },
    "gham-haa":                { fa: "غم‌ها", mean: "sorrows" },
    "raah":                    { fa: "راه", mean: "way, road" },
    "khi-rad-man-daan":        { fa: "خردمندان", mean: "wise people" },
    "sha-heed":                { fa: "شهید", mean: "martyr, martyred" },
    "bal-khee":                { fa: "بلخی", mean: "of Balkh" },
    "chi":                     { fa: "چه", mean: "what; how" },
    "zay-baa":                 { fa: "زیبا", mean: "beautiful" },
    "su-roo-da":               { fa: "سروده", mean: "written (a poem)" },
    "su-roo-dan":              { fa: "سرودن", mean: "to write a poem" },
    "gham":                    { fa: "غم", mean: "grief, sorrow" },
    "cho":                     { fa: "چو", mean: "like (short for choon)" },
    "aa-tash":                 { fa: "آتش", mean: "fire" },
    "dood":                    { fa: "دود", mean: "smoke" },
    "boo-dee":                 { fa: "بودی", mean: "had there been" },
    "taa-reek":                { fa: "تاریک", mean: "dark" },
    "jaa-wi-daa-na":           { fa: "جاودانه", mean: "forever, eternal" },
    "da-reen":                 { fa: "درین", mean: "in this" },
    "gay-tee":                 { fa: "گیتی", mean: "the world" },
    "sa-ra-sar":               { fa: "سراسر", mean: "all over, entirely" },
    "gar":                     { fa: "گر", mean: "if" },
    "bi-gar-dee":              { fa: "بگردی", mean: "you may travel, turn" },
    "khi-rad-man-dee":         { fa: "خردمندی", mean: "a wise person, wisdom" },
    "na-yaa-bee":              { fa: "نیابی", mean: "you do not find" },
    "yaaf-tan":                { fa: "یافتن", mean: "to find" },
    "shaad-maa-na":            { fa: "شادمانه", mean: "happily, entirely happy" }
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
    "say": "mu-baa-ri-za baa sakh-tee-haa",
    "mean": "Fighting hardship",
    "words": [
      [
        "مبارزه",
        "mu-baa-ri-za",
        "mu-baa-ri-za"
      ],
      [
        "با",
        "baa",
        "baa"
      ],
      [
        "سختی‌ها",
        "sakh-tee-haa",
        "sakh-tee-haa"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "mu-baa-ri-za baa sakh-tee-haa wa push-ti-kaar dar kaar-haa, raa-zi mu-waf-fa-qi-ya-ti in-saan dar zin-da-gee ast;",
        "mean": "Struggling against hardships and persevering in one's work are the secret of success in life,",
        "words": [
          [
            "مبارزه",
            "mu-baa-ri-za",
            "mu-baa-ri-za"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "سختی‌ها",
            "sakh-tee-haa",
            "sakh-tee-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پشتکار",
            "push-ti-kaar",
            "push-ti-kaar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کارها،",
            "kaar-haa",
            "kaar-haa"
          ],
          [
            "راز",
            "raa-zi",
            "raaz"
          ],
          [
            "موفقیت",
            "mu-waf-fa-qi-ya-ti",
            "mu-waf-fa-qi-yat"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زنده‌گی",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "zee-raa kaar-zaa-ri ha-yaat mam-lo az fa-raaz wa fu-rood-haa wa aaz-maa-yish wa im-ti-haan-haa-st.",
        "mean": "because the struggle of life is full of ups and downs, trials and tests.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "کارزار",
            "kaar-zaa-ri",
            "kaar-zaar"
          ],
          [
            "حیات",
            "ha-yaat",
            "ha-yaat"
          ],
          [
            "مملو",
            "mam-lo",
            "mam-lo"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "فراز",
            "fa-raaz",
            "fa-raaz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرودها",
            "fu-rood-haa",
            "fu-rood-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آزمایش",
            "aaz-maa-yish",
            "aaz-maa-yish"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امتحان‌هاست.",
            "im-ti-haan-haa-st",
            "im-ti-haan-haa-st"
          ]
        ]
      },
      {
        "say": "ba sar-man-zi-li maq-sood ka-say may-ra-sad ki taab wa ta-waa-ni mu-qaa-bi-la baa sakh-tee-haa-yi-yi rooz-gaar raa daash-ta baa-shad;",
        "mean": "A person reaches the desired destination only if they have the endurance and strength to face life's hardships.",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سرمنزل",
            "sar-man-zi-li",
            "sar-man-zil#joined"
          ],
          [
            "مقصود",
            "maq-sood",
            "maq-sood"
          ],
          [
            "کسی",
            "ka-say",
            "ka-say"
          ],
          [
            "می‌رسد",
            "may-ra-sad",
            "may-ra-sad",
            "ra-see-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تاب",
            "taab",
            "taab"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "توان",
            "ta-waa-ni",
            "ta-waan"
          ],
          [
            "مقابله",
            "mu-qaa-bi-la",
            "mu-qaa-bi-la"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "سختی‌های",
            "sakh-tee-haa-yi-yi",
            "sakh-tee-haa-yi"
          ],
          [
            "روزگار",
            "rooz-gaar",
            "rooz-gaar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
          ],
          [
            "باشد؛",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "chu-naan-ki shaykh sa-dee guf-ta ast:",
        "mean": "As Shaykh Sa'di has said:",
        "words": [
          [
            "چنان‌که",
            "chu-naan-ki",
            "chu-naan-ki"
          ],
          [
            "شیخ",
            "shaykh",
            "shaykh"
          ],
          [
            "سعدی",
            "sa-dee",
            "sa-dee"
          ],
          [
            "گفته",
            "guf-ta",
            "guf-ta",
            "guf-tan"
          ],
          [
            "است:",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "naa-bur-da ranj ganj mu-yas-sar na-may-sha-wad",
        "mean": "Without enduring hardship, treasure cannot be gained;",
        "words": [
          [
            "نابرده",
            "naa-bur-da",
            "naa-bur-da",
            "bur-dan"
          ],
          [
            "رنج",
            "ranj",
            "ranj"
          ],
          [
            "گنج",
            "ganj",
            "ganj"
          ],
          [
            "میسر",
            "mu-yas-sar",
            "mu-yas-sar"
          ],
          [
            "نمی‌شود",
            "na-may-sha-wad",
            "na-may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "muz-di aan gi-rift jaa-ni bi-raa-dar ki kaar kard",
        "mean": "dear brother, the one who worked received the reward.",
        "words": [
          [
            "مزد",
            "muz-di",
            "muzd"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "گرفت",
            "gi-rift",
            "gi-rift",
            "gi-rif-tan"
          ],
          [
            "جان",
            "jaa-ni",
            "jaan"
          ],
          [
            "برادر",
            "bi-raa-dar",
            "bi-raa-dar"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "کار",
            "kaar",
            "kaar"
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
        "say": "ha-meen-tawr a-gar shaa-gir-daan dars na-khaa-nand wa zah-mat na-ka-shand as-lan az ni-ma-ti bu-zur-gi ilm wa daa-nish bah-ra-war na-may-sha-wand wa dar na-tee-ja dar im-ti-haan naa-kaam may-maa-nand,",
        "mean": "Likewise, if students do not study and work hard, they do not benefit at all from the great blessing of learning and knowledge and consequently fail their examinations.",
        "words": [
          [
            "همین‌طور",
            "ha-meen-tawr",
            "ha-meen-tawr"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "شاگردان",
            "shaa-gir-daan",
            "shaa-gir-daan"
          ],
          [
            "درس",
            "dars",
            "dars"
          ],
          [
            "نخوانند",
            "na-khaa-nand",
            "na-khaa-nand",
            "khaan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زحمت",
            "zah-mat",
            "zah-mat"
          ],
          [
            "نکشند",
            "na-ka-shand",
            "na-ka-shand",
            "ka-shee-dan"
          ],
          [
            "اصلاً",
            "as-lan",
            "as-lan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نعمت",
            "ni-ma-ti",
            "ni-mat"
          ],
          [
            "بزرگ",
            "bu-zur-gi",
            "bu-zurg"
          ],
          [
            "علم",
            "ilm",
            "ilm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دانش",
            "daa-nish",
            "daa-nish"
          ],
          [
            "بهره‌ور",
            "bah-ra-war",
            "bah-ra-war"
          ],
          [
            "نمی‌شوند",
            "na-may-sha-wand",
            "na-may-sha-wand",
            "shu-dan"
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
            "نتیجه",
            "na-tee-ja",
            "na-tee-ja"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "امتحان",
            "im-ti-haan",
            "im-ti-haan"
          ],
          [
            "ناکام",
            "naa-kaam",
            "naa-kaam"
          ],
          [
            "می‌مانند،",
            "may-maa-nand",
            "may-maa-nand",
            "maan-dan"
          ]
        ]
      },
      {
        "say": "ha-meen-goo-na ba-raa-yi ra-see-dan ba khu-daa wa sa-aa-da-ti daa-rayn, in-saan-haa ba nah-wee az an-haa wa ba shak-lee az ash-kaal maw-ri-di im-ti-haan wa aaz-maa-yish qa-raar may-gee-rand",
        "mean": "In the same way, to reach God and happiness in both worlds, people are tested and tried in one way or another,",
        "words": [
          [
            "همین‌گونه",
            "ha-meen-goo-na",
            "ha-meen-goo-na"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "رسیدن",
            "ra-see-dan",
            "ra-see-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سعادت",
            "sa-aa-da-ti",
            "sa-aa-dat"
          ],
          [
            "دارین،",
            "daa-rayn",
            "daa-rayn"
          ],
          [
            "انسان‌ها",
            "in-saan-haa",
            "in-saan-haa",
            "in-saan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "نحوی",
            "nah-wee",
            "nah-wee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "انحا",
            "an-haa",
            "an-haa"
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
            "شکلی",
            "shak-lee",
            "shak-lee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اشکال",
            "ash-kaal",
            "ash-kaal"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "امتحان",
            "im-ti-haan",
            "im-ti-haan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آزمایش",
            "aaz-maa-yish",
            "aaz-maa-yish"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "می‌گیرند",
            "may-gee-rand",
            "may-gee-rand",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "wa khu-daa-wand ba af-raa-di sha-kee-baa wa saa-bir muzh-da-yi nayk may-di-had:",
        "mean": "and God gives good news to patient and steadfast people:",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خداوند",
            "khu-daa-wand",
            "khu-daa-wand"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "افراد",
            "af-raa-di",
            "af-raad"
          ],
          [
            "شکیبا",
            "sha-kee-baa",
            "sha-kee-baa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صابر",
            "saa-bir",
            "saa-bir"
          ],
          [
            "مژده",
            "muzh-da-yi",
            "muzh-da"
          ],
          [
            "نیک",
            "nayk",
            "nayk"
          ],
          [
            "می‌دهد:",
            "may-di-had",
            "may-di-had",
            "daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "“wa-la-na-blu-wan-na-kum bi-shay-in man al-khaw-fi wal-joo-i wa-naq-sin man al-am-waa-li wal-an-fu-si was-sa-ma-raa-ti waq-fi mut-laq wa-bash-shi-ris saa-bi-reen” al-ba-qa-ra sad-u pan-jaa-hu panj.",
        "mean": "“We will certainly test you with some fear and hunger, and loss of property, lives and fruit; but give good news to those who are patient.” Al-Baqara, 155.",
        "words": [
          [
            "«وَلَنَبْلُوَنَّکُم",
            "wa-la-na-blu-wan-na-kum",
            "wa-la-na-blu-wan-na-kum"
          ],
          [
            "بِشَیءٍ",
            "bi-shay-in",
            "bi-shay-in"
          ],
          [
            "مِّنَ",
            "man",
            "man"
          ],
          [
            "الْخَوْفِ",
            "al-khaw-fi",
            "al-khaw-fi"
          ],
          [
            "وَالْجُوعِ",
            "wal-joo-i",
            "wal-joo-i"
          ],
          [
            "وَنَقْصٍ",
            "wa-naq-sin",
            "wa-naq-sin"
          ],
          [
            "مِّنَ",
            "man",
            "man"
          ],
          [
            "الْأَمْوَالِ",
            "al-am-waa-li",
            "al-am-waa-li"
          ],
          [
            "وَالْأَنفُسِ",
            "wal-an-fu-si",
            "wal-an-fu-si"
          ],
          [
            "وَالثَّمَرَاتِ",
            "was-sa-ma-raa-ti",
            "was-sa-ma-raa-ti"
          ],
          [
            "(ط)",
            "waq-fi mut-laq",
            "waq-fi mut-laq"
          ],
          [
            "وَبَشِّرِ",
            "wa-bash-shi-ris",
            "wa-bash-shi-ris"
          ],
          [
            "الصَّابِرِینَ»",
            "saa-bi-reen",
            "saa-bi-reen"
          ],
          [
            "البقره/",
            "al-ba-qa-ra",
            "al-ba-qa-ra"
          ],
          [
            "۱۵۵.",
            "sad-u pan-jaa-hu panj",
            "sad-u pan-jaa-hu panj"
          ]
        ]
      },
      {
        "say": "wa al-bat-ta shu-maa raa ba chee-zay az tars wa gur-sin-na-gee wa nuq-saa-ni maal-haa wa jaan-haa wa may-wa-haa bi-yaaz-maa-yeem wa ba-shaa-rat dah saa-bi-raan raa.",
        "mean": "And indeed, we will test you with some fear, hunger and loss of wealth, lives and fruit; give good news to the patient.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "البته",
            "al-bat-ta",
            "al-bat-ta"
          ],
          [
            "شما",
            "shu-maa",
            "shu-maa"
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
            "چیزی",
            "chee-zay",
            "chee-zay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "ترس",
            "tars",
            "tars"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گرسنه‌گی",
            "gur-sin-na-gee",
            "gur-sin-na-gee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نقصان",
            "nuq-saa-ni",
            "nuq-saan"
          ],
          [
            "مال‌ها",
            "maal-haa",
            "maal-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جان‌ها",
            "jaan-haa",
            "jaan-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "میوه‌ها",
            "may-wa-haa",
            "may-wa-haa"
          ],
          [
            "بیازماییم",
            "bi-yaaz-maa-yeem",
            "bi-yaaz-maa-yeem",
            "aaz-mo-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بشارت",
            "ba-shaa-rat",
            "ba-shaa-rat"
          ],
          [
            "ده",
            "dah",
            "dah"
          ],
          [
            "صابران",
            "saa-bi-raan",
            "saa-bi-raan"
          ],
          [
            "را.",
            "raa",
            "raa"
          ]
        ]
      }
    ],
    [
      {
        "say": "ka-saa-nay ki dar ib-ti-laa wa aaz-maa-yish-haa-yi-yi rooz-gaar, mu-qaa-wa-mat wa is-taa-da-gee may-na-maa-yand, sar-an-jaam pee-rooz may-sha-wand.",
        "mean": "Those who show resistance and perseverance through life's afflictions and tests ultimately succeed.",
        "words": [
          [
            "کسانی",
            "ka-saa-nay",
            "ka-saa-nay"
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
            "ابتلا",
            "ib-ti-laa",
            "ib-ti-laa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آزمایش‌های",
            "aaz-maa-yish-haa-yi-yi",
            "aaz-maa-yish-haa-yi"
          ],
          [
            "روزگار،",
            "rooz-gaar",
            "rooz-gaar"
          ],
          [
            "مقاومت",
            "mu-qaa-wa-mat",
            "mu-qaa-wa-mat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ایستاده‌گی",
            "is-taa-da-gee",
            "is-taa-da-gee"
          ],
          [
            "می‌نمایند،",
            "may-na-maa-yand",
            "may-na-maa-yand",
            "na-mo-dan"
          ],
          [
            "سرانجام",
            "sar-an-jaam",
            "sar-an-jaam"
          ],
          [
            "پیروز",
            "pee-rooz",
            "pee-rooz"
          ],
          [
            "می‌شوند.",
            "may-sha-wand",
            "may-sha-wand",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "mush-ki-laat wa zar-ba-haa maw-joo-daa-ti jaa-mid raa ta-baah wa naa-bood may-saa-zad wa az qud-rat wa ta-waa-naa-ya-yi aan-haa may-kaa-had;",
        "mean": "Difficulties and blows ruin and destroy inanimate things and reduce their power and ability,",
        "words": [
          [
            "مشکلات",
            "mush-ki-laat",
            "mush-ki-laat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ضربه‌ها",
            "zar-ba-haa",
            "zar-ba-haa"
          ],
          [
            "موجودات",
            "maw-joo-daa-ti",
            "maw-joo-daat"
          ],
          [
            "جامد",
            "jaa-mid",
            "jaa-mid"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "تباه",
            "ta-baah",
            "ta-baah"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نابود",
            "naa-bood",
            "naa-bood"
          ],
          [
            "می‌سازد",
            "may-saa-zad",
            "may-saa-zad",
            "saakh-tan"
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
            "قدرت",
            "qud-rat",
            "qud-rat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "توانایی",
            "ta-waa-naa-ya-yi",
            "ta-waa-naa-yay"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "می‌کاهد؛",
            "may-kaa-had",
            "may-kaa-had",
            "kaas-tan"
          ]
        ]
      },
      {
        "say": "wa-lay ba maw-joo-daa-ti zin-da, ta-ha-ruk bakh-shee-da wa nee-roo-man-dash-aan may-saa-zad,",
        "mean": "but they give movement to living things and make them stronger.",
        "words": [
          [
            "ولی",
            "wa-lay",
            "wa-lay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "موجودات",
            "maw-joo-daa-ti",
            "maw-joo-daat"
          ],
          [
            "زنده،",
            "zin-da",
            "zin-da"
          ],
          [
            "تحرک",
            "ta-ha-ruk",
            "ta-ha-ruk"
          ],
          [
            "بخشیده",
            "bakh-shee-da",
            "bakh-shee-da",
            "bakh-shee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نیرومندشان",
            "nee-roo-man-dash-aan",
            "nee-roo-man-dash-aan"
          ],
          [
            "می‌سازد،",
            "may-saa-zad",
            "may-saa-zad",
            "saakh-tan"
          ]
        ]
      },
      {
        "say": "mu-see-bat-haa, mush-ki-laat wa sakh-tee-haa ba-raa-yi ta-kaa-mul wa paa-yaa-daa-ree-yi ba-shar khay-lee rah-gu-shaa wa mu-sir ast.",
        "mean": "Calamities, problems and hardships greatly help human beings develop and endure.",
        "words": [
          [
            "مصیبت‌ها،",
            "mu-see-bat-haa",
            "mu-see-bat-haa"
          ],
          [
            "مشکلات",
            "mush-ki-laat",
            "mush-ki-laat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سختی‌ها",
            "sakh-tee-haa",
            "sakh-tee-haa"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "تکامل",
            "ta-kaa-mul",
            "ta-kaa-mul"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پایداری",
            "paa-yaa-daa-ree-yi",
            "paa-yaa-daa-ree"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "خیلی",
            "khay-lee",
            "khay-lee"
          ],
          [
            "رهگشا",
            "rah-gu-shaa",
            "rah-gu-shaa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "موثر",
            "mu-sir",
            "mu-sir"
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
        "say": "sakh-tee-haa mu-qad-da-ma-yi ka-maal wa pesh-raf-ti in-saan ast wa zin-da-gee kar-dan dar sha-raa-yi-ti dush-waar wa naa-gu-waar, aa-da-mee raa nee-roo-mand wa chaa-buk ba baar may-aa-wa-rad.",
        "mean": "Hardship is the prelude to human perfection and progress, and living in difficult and unpleasant conditions makes a person strong and agile.",
        "words": [
          [
            "سختی‌ها",
            "sakh-tee-haa",
            "sakh-tee-haa"
          ],
          [
            "مقدمهٔ",
            "mu-qad-da-ma-yi",
            "mu-qad-da-ma-yi"
          ],
          [
            "کمال",
            "ka-maal",
            "ka-maal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پیشرفت",
            "pesh-raf-ti",
            "pesh-raft"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زنده‌گی",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "کردن",
            "kar-dan",
            "kar-dan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "شرایط",
            "sha-raa-yi-ti",
            "sha-raa-yit"
          ],
          [
            "دشوار",
            "dush-waar",
            "dush-waar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناگوار،",
            "naa-gu-waar",
            "naa-gu-waar"
          ],
          [
            "آدمی",
            "aa-da-mee",
            "aa-da-mee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نیرومند",
            "nee-roo-mand",
            "nee-roo-mand"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چابک",
            "chaa-buk",
            "chaa-buk"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بار",
            "baar",
            "baar"
          ],
          [
            "می‌آورد.",
            "may-aa-wa-rad",
            "may-aa-wa-rad",
            "aa-war-dan"
          ]
        ]
      },
      {
        "say": "ma-saa-yib wa sakh-tee-haa, waq-tay ni-mat and ki in-saan az aan-haa bah-ra jo-yad wa baa sabr wa sha-kee-baa-yee wa is-ti-qaa-mat roo-hi khud raa ka-maal bakh-shad;",
        "mean": "Misfortunes and hardships are blessings when a person benefits from them and perfects their spirit through patience, forbearance and steadfastness.",
        "words": [
          [
            "مصایب",
            "ma-saa-yib",
            "ma-saa-yib"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سختی‌ها،",
            "sakh-tee-haa",
            "sakh-tee-haa"
          ],
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "نعمت",
            "ni-mat",
            "ni-mat"
          ],
          [
            "اند",
            "and",
            "and"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "بهره",
            "bah-ra",
            "bah-ra"
          ],
          [
            "جوید",
            "jo-yad",
            "jo-yad",
            "jus-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "صبر",
            "sabr",
            "sabr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شکیبایی",
            "sha-kee-baa-yee",
            "sha-kee-baa-yee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استقامت",
            "is-ti-qaa-mat",
            "is-ti-qaa-mat"
          ],
          [
            "روح",
            "roo-hi",
            "rooh"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "کمال",
            "ka-maal",
            "ka-maal"
          ],
          [
            "بخشد؛",
            "bakh-shad",
            "bakh-shad",
            "bakh-shee-dan"
          ]
        ]
      },
      {
        "say": "am-maa a-gar in-saan dar ba-raa-ba-ri sakh-tee-haa mu-baa-ri-za na-na-mo-da wa dar ba-raa-ba-ri aan ba zaa-noo dar-aa-yad wa naa-la wa shi-kwa sar-di-had;",
        "mean": "But if a person does not struggle against hardship, falls to their knees before it, and begins to lament and complain,",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "برابر",
            "ba-raa-ba-ri",
            "ba-raa-bar"
          ],
          [
            "سختی‌ها",
            "sakh-tee-haa",
            "sakh-tee-haa"
          ],
          [
            "مبارزه",
            "mu-baa-ri-za",
            "mu-baa-ri-za"
          ],
          [
            "ننموده",
            "na-na-mo-da",
            "na-na-mo-da",
            "na-mo-dan"
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
            "برابر",
            "ba-raa-ba-ri",
            "ba-raa-bar"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "زانو",
            "zaa-noo",
            "zaa-noo"
          ],
          [
            "درآید",
            "dar-aa-yad",
            "dar-aa-yad",
            "dar-aa-ma-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناله",
            "naa-la",
            "naa-la"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شکوه",
            "shi-kwa",
            "shi-kwa"
          ],
          [
            "سردهد؛",
            "sar-di-had",
            "sar-di-had",
            "sar daa-dan"
          ]
        ]
      },
      {
        "say": "dar een soo-rat aaz-maa-yish wa ib-ti-laa ba-raa-yash naa-khosh-aa-yand ast wa dar ka-shaa-ka-shi dahr wa rooz-gaar az paa may-uf-tad.",
        "mean": "then the test and affliction become painful, and the person falls in the struggle of time and life.",
        "words": [
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
            "صورت",
            "soo-rat",
            "soo-rat"
          ],
          [
            "آزمایش",
            "aaz-maa-yish",
            "aaz-maa-yish"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ابتلا",
            "ib-ti-laa",
            "ib-ti-laa"
          ],
          [
            "برایش",
            "ba-raa-yash",
            "ba-raa-yash"
          ],
          [
            "ناخوشایند",
            "naa-khosh-aa-yand",
            "naa-khosh-aa-yand"
          ],
          [
            "است",
            "ast",
            "ast"
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
            "کشاکش",
            "ka-shaa-ka-shi",
            "ka-shaa-kash"
          ],
          [
            "دهر",
            "dahr",
            "dahr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روزگار",
            "rooz-gaar",
            "rooz-gaar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "پا",
            "paa",
            "paa"
          ],
          [
            "می‌افتد.",
            "may-uf-tad",
            "may-uf-tad",
            "uf-taa-dan"
          ]
        ]
      },
      {
        "say": "een af-raad ta-waa-ni mu-qaa-bi-la raa az dast may-di-hand wa kha-saa-ra-haa wa za-rar-haa-yi-yi zi-yaa-dee raa mu-ta-ham-mil may-gar-dand ki jub-raa-ni aan khi-lee-haa dush-waar ast.",
        "mean": "Such people lose the ability to cope and suffer many losses and harms that are very difficult to repair.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "افراد",
            "af-raad",
            "af-raad"
          ],
          [
            "توان",
            "ta-waa-ni",
            "ta-waan"
          ],
          [
            "مقابله",
            "mu-qaa-bi-la",
            "mu-qaa-bi-la"
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
            "دست",
            "dast",
            "dast"
          ],
          [
            "می‌دهند",
            "may-di-hand",
            "may-di-hand",
            "daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خساره‌ها",
            "kha-saa-ra-haa",
            "kha-saa-ra-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ضررهای",
            "za-rar-haa-yi-yi",
            "za-rar-haa-yi"
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
            "متحمل",
            "mu-ta-ham-mil",
            "mu-ta-ham-mil"
          ],
          [
            "می‌گردند",
            "may-gar-dand",
            "may-gar-dand",
            "gar-dee-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "جبران",
            "jub-raa-ni",
            "jub-raan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "خیلی‌ها",
            "khi-lee-haa",
            "khi-lee-haa"
          ],
          [
            "دشوار",
            "dush-waar",
            "dush-waar"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "in-saa-ni ha-daf-mand wa khi-rad-mand baa-yad baa ma-saa-ee-yi pay-geer wa ta-laash-haa-yi-yi khas-ta-gee-naa-pa-zeer, fu-tuw-wat wa paa-y-mar-dee-yi khud raa a-ma-lan ba is-baat bi-ra-saa-nad",
        "mean": "A purposeful and wise person must prove their courage and perseverance in practice through persistent effort and tireless work,",
        "words": [
          [
            "انسان",
            "in-saa-ni",
            "in-saan"
          ],
          [
            "هدفمند",
            "ha-daf-mand",
            "ha-daf-mand"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خردمند",
            "khi-rad-mand",
            "khi-rad-mand"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "مساعی",
            "ma-saa-ee-yi",
            "ma-saa-ee"
          ],
          [
            "پیگیر",
            "pay-geer",
            "pay-geer"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تلاش‌های",
            "ta-laash-haa-yi-yi",
            "ta-laash-haa-yi"
          ],
          [
            "خسته‌گی‌ناپذیر،",
            "khas-ta-gee-naa-pa-zeer",
            "khas-ta-gee-naa-pa-zeer"
          ],
          [
            "فتوت",
            "fu-tuw-wat",
            "fu-tuw-wat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پایمردی",
            "paa-y-mar-dee-yi",
            "paa-y-mar-dee"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "عملاً",
            "a-ma-lan",
            "a-ma-lan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "اثبات",
            "is-baat",
            "is-baat"
          ],
          [
            "برساند",
            "bi-ra-saa-nad",
            "bi-ra-saa-nad",
            "ra-saan-dan"
          ]
        ]
      },
      {
        "say": "wa dar na-tee-ja mas-da-ri khi-da-maa-ti mu-feed wa ar-zin-da ba-raa-yi khud, khaa-na-waa-da, kish-war, man-ti-qa wa ja-haan gar-dad.",
        "mean": "and consequently become a source of useful and valuable service to themselves, their family, country, region and the world.",
        "words": [
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
            "نتیجه",
            "na-tee-ja",
            "na-tee-ja"
          ],
          [
            "مصدر",
            "mas-da-ri",
            "mas-dar"
          ],
          [
            "خدمات",
            "khi-da-maa-ti",
            "khi-da-maat"
          ],
          [
            "مفید",
            "mu-feed",
            "mu-feed"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ارزنده",
            "ar-zin-da",
            "ar-zin-da"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "خود،",
            "khud",
            "khud"
          ],
          [
            "خانواده،",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "کشور،",
            "kish-war",
            "kish-war"
          ],
          [
            "منطقه",
            "man-ti-qa",
            "man-ti-qa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "گردد.",
            "gar-dad",
            "gar-dad",
            "gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mard baa-yad ki dar ka-shaa-ka-shi dahr",
        "mean": "A person should, in the struggle of time,",
        "words": [
          [
            "مرد",
            "mard",
            "mard"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
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
            "کشاکش",
            "ka-shaa-ka-shi",
            "ka-shaa-kash"
          ],
          [
            "دهر",
            "dahr",
            "dahr"
          ]
        ]
      },
      {
        "say": "san-gi zee-ree-ni aa-si-yaa baa-shad",
        "mean": "be the lower millstone.",
        "words": [
          [
            "سنگ",
            "san-gi",
            "sang"
          ],
          [
            "زیرین",
            "zee-ree-ni",
            "zee-reen"
          ],
          [
            "آسیا",
            "aa-si-yaa",
            "aa-si-yaa"
          ],
          [
            "باشد",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mu-baa-ri-za baa sakh-tee-haa wa ta-ham-mu-li ranj-haa wa gham-haa raa-hi khi-rad-man-daan ast;",
        "mean": "Struggling with hardship and enduring pain and sorrow is the way of the wise.",
        "words": [
          [
            "مبارزه",
            "mu-baa-ri-za",
            "mu-baa-ri-za"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "سختی‌ها",
            "sakh-tee-haa",
            "sakh-tee-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تحمل",
            "ta-ham-mu-li",
            "ta-ham-mul"
          ],
          [
            "رنج‌ها",
            "ranj-haa",
            "ranj-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غم‌ها",
            "gham-haa",
            "gham-haa"
          ],
          [
            "راه",
            "raa-hi",
            "raah"
          ],
          [
            "خردمندان",
            "khi-rad-man-daan",
            "khi-rad-man-daan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "chu-naan-ki sha-heed bal-khee chi zay-baa su-roo-da ast:",
        "mean": "As Shahid Balkhi has written so beautifully:",
        "words": [
          [
            "چنانکه",
            "chu-naan-ki",
            "chu-naan-ki"
          ],
          [
            "شهید",
            "sha-heed",
            "sha-heed"
          ],
          [
            "بلخی",
            "bal-khee",
            "bal-khee"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "زیبا",
            "zay-baa",
            "zay-baa"
          ],
          [
            "سروده",
            "su-roo-da",
            "su-roo-da",
            "su-roo-dan"
          ],
          [
            "است:",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "a-gar gham raa cho aa-tash dood boo-dee",
        "mean": "If sorrow, like fire, had smoke,",
        "words": [
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "غم",
            "gham",
            "gham"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "چو",
            "cho",
            "cho"
          ],
          [
            "آتش",
            "aa-tash",
            "aa-tash"
          ],
          [
            "دود",
            "dood",
            "dood"
          ],
          [
            "بودی",
            "boo-dee",
            "boo-dee",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "ja-haan taa-reek boo-dee jaa-wi-daa-na",
        "mean": "the world would be dark forever.",
        "words": [
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "تاریک",
            "taa-reek",
            "taa-reek"
          ],
          [
            "بودی",
            "boo-dee",
            "boo-dee",
            "bu-dan"
          ],
          [
            "جاودانه",
            "jaa-wi-daa-na",
            "jaa-wi-daa-na"
          ]
        ]
      }
    ],
    [
      {
        "say": "da-reen gay-tee sa-ra-sar gar bi-gar-dee",
        "mean": "If you were to travel throughout this whole world,",
        "words": [
          [
            "درین",
            "da-reen",
            "da-reen"
          ],
          [
            "گیتی",
            "gay-tee",
            "gay-tee"
          ],
          [
            "سراسر",
            "sa-ra-sar",
            "sa-ra-sar"
          ],
          [
            "گر",
            "gar",
            "gar"
          ],
          [
            "بگردی",
            "bi-gar-dee",
            "bi-gar-dee",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "khi-rad-man-dee na-yaa-bee shaad-maa-na",
        "mean": "you would not find a wise person entirely happy.",
        "words": [
          [
            "خردمندی",
            "khi-rad-man-dee",
            "khi-rad-man-dee"
          ],
          [
            "نیابی",
            "na-yaa-bee",
            "na-yaa-bee",
            "yaaf-tan"
          ],
          [
            "شادمانه",
            "shaad-maa-na",
            "shaad-maa-na"
          ]
        ]
      }
    ]
  ]
});
