/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 15, book pages 94-95, PDF pages 101-102 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «هرگوشه» is written «هر گوشه»; «عبیداالله» is written «عبیدالله»; «بت پرستی» is written «بت‌پرستی».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-15',
  group: 'Dari · grade 9',
  label: 'Lesson 15',
  name: "a-da-bee-yaa-ti da-ree dar qu-roo-ni haf-tum wa hash-tu-mi hij-ree. qa-ma-ree.",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_15.jpg',
    alt: "An open book standing upright with its pages spread in a circle."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_15.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "a-da-bee-yaat":         { fa: "ادبیات", mean: "literature" },
    "da-ree":                { fa: "دری", mean: "Dari, the Persian of Afghanistan" },
    "dar":                   { fa: "در", mean: "in" },
    "qu-roon":               { fa: "قرون", mean: "centuries" },
    "haf-tum":               { fa: "هفتم", mean: "seventh" },
    "wa":                    { fa: "و", mean: "and" },
    "hash-tum":              { fa: "هشتم", mean: "eighth" },
    "hij-ree":               { fa: "ه", mean: "short for hij-ree, of the Islamic calendar" },
    "qa-ma-ree":             { fa: "ق", mean: "short for qa-ma-ree, lunar" },
    "qarn-haa":              { fa: "قرن‌ها", mean: "centuries" },
    "wah-shat-naak-ta-reen": { fa: "وحشتناک‌ترین", mean: "most terrible" },
    "daw-raan":              { fa: "دوران", mean: "period, era" },
    "een":                   { fa: "این", mean: "this" },
    "sar-za-meen":           { fa: "سرزمین", mean: "land, country" },
    "ast":                   { fa: "است", mean: "is" },
    "lash-ka-ri-yaan":       { fa: "لشکریان", mean: "soldiers, armies" },
    "chan-geez-khaan":       { fa: "چنگیزخان", mean: "Genghis Khan" },
    "baa":                   { fa: "با", mean: "with" },
    "qatl":                  { fa: "قتل", mean: "killing, slaughter" },
    "ta-baa-hee":            { fa: "تباهی", mean: "destruction, ruin" },
    "way-raa-nee":           { fa: "ویرانی", mean: "devastation, ruin" },
    "na-tan-haa":            { fa: "نه‌تنها", mean: "not only" },
    "mar-du-maan":           { fa: "مردمان", mean: "people" },
    "bee-di-faa":            { fa: "بی‌دفاع", mean: "defenseless" },
    "maa":                   { fa: "ما", mean: "we" },
    "raa":                   { fa: "را", mean: "marks the object of the verb" },
    "ba":                    { fa: "به", mean: "to" },
    "sha-haa-dat":           { fa: "شهادت", mean: "martyrdom, being killed" },
    "ra-saa-nee-dand":       { fa: "رسانیدند", mean: "they brought, caused" },
    "ra-saan-dan":           { fa: "رساندن", mean: "to bring, to deliver" },
    "bal-ki":                { fa: "بلکه", mean: "but rather" },
    "ma-da-nee-yat":         { fa: "مدنیت", mean: "civilization" },
    "naa-bood":              { fa: "نابود", mean: "destroyed" },
    "kar-dand":              { fa: "کردند", mean: "they did" },
    "kar-dan":               { fa: "کردن", mean: "to do, to make" },
    "rushd":                 { fa: "رشد", mean: "growth" },
    "po-yaa-yee":            { fa: "پویایی", mean: "vitality, dynamism" },
    "raw-naq":               { fa: "رونق", mean: "flourishing, prosperity" },
    "baa-zaar":              { fa: "بازار", mean: "market" },
    "aan":                   { fa: "آن", mean: "that" },
    "neez":                  { fa: "نیز", mean: "also, too" },
    "sakht":                 { fa: "سخت", mean: "hard, severe" },
    "zar-ba":                { fa: "ضربه", mean: "blow" },
    "za-dand":               { fa: "زدند", mean: "they struck" },
    "za-dan":                { fa: "زدن", mean: "to hit" },
    "gar-chi":               { fa: "گرچه", mean: "although" },
    "mu-qaa-wi-mat-haa":     { fa: "مقاومت‌های", mean: "acts of resistance" },
    "da-lee-raa-na":         { fa: "دلیرانه", mean: "bravely, courageous" },
    "ba-raa-bar":            { fa: "برابر", mean: "front (dar ba-raa-bar-i, toward, before); equal" },
    "si-paah":               { fa: "سپاه", mean: "army" },
    "mu-haa-jim":            { fa: "مهاجم", mean: "invading, invader" },
    "way":                   { fa: "وی", mean: "he, she" },
    "har":                   { fa: "هر", mean: "every" },
    "go-sha":                { fa: "گوشه", mean: "corner" },
    "soo-rat":               { fa: "صورت", mean: "face, outward form" },
    "may-gi-rift":           { fa: "می‌گرفت", mean: "took place, was taking" },
    "gi-rif-tan":            { fa: "گرفتن", mean: "to take" },
    "wa-lay":                { fa: "ولی", mean: "but" },
    "shi-kast":              { fa: "شکست", mean: "broke" },
    "shi-kas-tan":           { fa: "شکستن", mean: "to break" },
    "sul-taan":              { fa: "سلطان", mean: "sultan, ruler" },
    "mu-ham-mad":            { fa: "محمد", mean: "Muhammad" },
    "khaa-razm-shaah":       { fa: "خوارزمشاه", mean: "Khwarazmshah" },
    "ha-ma":                 { fa: "همه", mean: "all, every" },
    "far-zan-daan":          { fa: "فرزندان", mean: "children, sons" },
    "oo":                    { fa: "او", mean: "he, she; his, her" },
    "sul-ta":                { fa: "سلطه", mean: "rule, domination" },
    "bar":                   { fa: "بر", mean: "on, upon" },
    "ma-naa-tiq":            { fa: "مناطق", mean: "areas" },
    "kaa-mil":               { fa: "کامل", mean: "full, complete" },
    "shud":                  { fa: "شد", mean: "became; was" },
    "shu-dan":               { fa: "شدن", mean: "to become" },
    "aan-haa":               { fa: "آن‌ها", mean: "they, them" },
    "mar-dum":               { fa: "مردم", mean: "people" },
    "ba-yaa-baan-gard":      { fa: "بیابانگرد", mean: "nomadic, desert-roaming" },
    "boo-dand":              { fa: "بودند", mean: "were" },
    "bu-dan":                { fa: "بودن", mean: "to be" },
    "pas":                   { fa: "پس", mean: "then, so" },
    "az":                    { fa: "از", mean: "from, of" },
    "ta-sal-lut":            { fa: "تسلط", mean: "control, domination" },
    "dee-gar":               { fa: "دیگر", mean: "other; more; anymore" },
    "tad-reej":              { fa: "تدریج", mean: "gradualness (ba tad-reej, gradually)" },
    "ba-zay":                { fa: "بعضی", mean: "some" },
    "ru-soom":               { fa: "رسوم", mean: "customs" },
    "aa-daab":               { fa: "آداب", mean: "customs, practices" },
    "aq-waam":               { fa: "اقوام", mean: "peoples, ethnic groups" },
    "taa-bi":                { fa: "تابع", mean: "subject, subordinate" },
    "pa-zee-rif-tand":       { fa: "پذیرفتند", mean: "they accepted, adopted" },
    "pa-zee-ruf-tan":        { fa: "پذیرفتن", mean: "to accept" },
    "taht":                  { fa: "تحت", mean: "under" },
    "ta-seer":               { fa: "تأثیر", mean: "effect, influence" },
    "qa-raar":               { fa: "قرار", mean: "place, rest" },
    "gi-rif-tand":           { fa: "گرفتند", mean: "took" },
    "waz":                   { fa: "وضع", mean: "condition, situation" },
    "ni-zaa-mee":            { fa: "نظامی", mean: "Nizami, a Persian poet of the 1100s" },
    "si-yaa-see":            { fa: "سیاسی", mean: "political" },
    "ij-ti-maa-ee":          { fa: "اجتماعی", mean: "social" },
    "daw-ra":                { fa: "دوره", mean: "period" },
    "fa-raa-waan":           { fa: "فراوان", mean: "abundant, great" },
    "daasht":                { fa: "داشت", mean: "had" },
    "daash-tan":             { fa: "داشتن", mean: "to have" },
    "shu-a-raa":             { fa: "شعرا", mean: "poets" },
    "dard":                  { fa: "درد", mean: "pain" },
    "an-gayz":               { fa: "انگیز", mean: "stirring (ha-ya-jaan an-gayz, thrilling)" },
    "in-hi-taat":            { fa: "انحطاط", mean: "decline" },
    "a-meeq":                { fa: "عمیق", mean: "deep" },
    "waa-zh-goon":           { fa: "واژگون", mean: "overturned" },
    "ar-zish-haa-yee":       { fa: "ارزش‌هایی", mean: "values" },
    "dee-nee":               { fa: "دینی", mean: "religious" },
    "a-ham-mee-yat":         { fa: "اهمیت", mean: "importance" },
    "na-daash-tan":          { fa: "نداشتن", mean: "not having" },
    "ilm":                   { fa: "علم", mean: "knowledge, learning" },
    "hu-nar":                { fa: "هنر", mean: "art, skill" },
    "ra-waaj":               { fa: "رواج", mean: "spread, prevalence" },
    "naa-mar-do-mee":        { fa: "نامردمی", mean: "inhumanity, meanness" },
    "naa-raas-tee":          { fa: "ناراستی", mean: "dishonesty" },
    "tas-weer":              { fa: "تصویر", mean: "picture" },
    "ka-shee-da":            { fa: "کشیده", mean: "drawn, portrayed" },
    "ka-shee-dan":           { fa: "کشیدن", mean: "to pull; to bear" },
    "and":                   { fa: "اند", mean: "are; after a word like shu-da, have" },
    "sayf":                  { fa: "سیف", mean: "Sayf" },
    "far-ghaa-nee":          { fa: "فرغانی", mean: "Farghani" },
    "go-yad":                { fa: "گوید", mean: "says" },
    "guf-tan":               { fa: "گفتن", mean: "to say, to tell" },
    "a-ja-bam":              { fa: "عجبم", mean: "I wonder" },
    "taa":                   { fa: "تا", mean: "so that; until; to" },
    "khud":                  { fa: "خود", mean: "own; self" },
    "za-maan":               { fa: "زمان", mean: "time" },
    "chi":                   { fa: "چه", mean: "what; how" },
    "bood":                  { fa: "بود", mean: "was" },
    "kaa-ma-dan":            { fa: "کامدن", mean: "that my coming, archaic" },
    "man":                   { fa: "من", mean: "I" },
    "ba-so-yi":              { fa: "بسوی", mean: "toward" },
    "mulk":                  { fa: "ملک", mean: "realm, kingdom" },
    "ja-haan":               { fa: "جهان", mean: "world" },
    "sar":                   { fa: "سر", mean: "head" },
    "khaa-kee":              { fa: "خاکی", mean: "soil, a piece of land" },
    "ki":                    { fa: "که", mean: "that, which, who" },
    "paa-yi-gaah":           { fa: "پایگاه", mean: "dwelling place, base" },
    "tu-st":                 { fa: "تست", mean: "is yours" },
    "khoon":                 { fa: "خون", mean: "blood" },
    "a-zee-zaan":            { fa: "عزیزان", mean: "dear ones" },
    "ba-saan":               { fa: "بسان", mean: "like, in the manner of" },
    "aab":                   { fa: "آب", mean: "water" },
    "ra-waan":               { fa: "روان", mean: "soul; flowing" },
    "raa-yat":               { fa: "رایت", mean: "banner" },
    "is-laam":               { fa: "اسلام", mean: "Islam" },
    "sar-shi-kas-ta":        { fa: "سرشکسته", mean: "bowed, broken, humiliated" },
    "az-ee-raa":             { fa: "ازیرا", mean: "because, for" },
    "daw-lat":               { fa: "دولت", mean: "state, government" },
    "deen":                  { fa: "دین", mean: "religion" },
    "peer":                  { fa: "پیر", mean: "old" },
    "bakht":                 { fa: "بخت", mean: "fortune" },
    "kufr":                  { fa: "کفر", mean: "unbelief" },
    "ja-waan":               { fa: "جوان", mean: "young" },
    "bee-aql":               { fa: "بی‌عقل", mean: "without reason, foolish" },
    "gi-rif-ta":             { fa: "گرفته", mean: "taken; having taken" },
    "wi-laa-yat":            { fa: "ولایت", mean: "rule, province" },
    "haal":                  { fa: "حال", mean: "state, condition" },
    "bar-ra":                { fa: "بره", mean: "lamb" },
    "choon":                 { fa: "چون", mean: "like, as; when; because" },
    "cho":                   { fa: "چو", mean: "like (short for choon)" },
    "gurg":                  { fa: "گرگ", mean: "wolf" },
    "sha-baan":              { fa: "شبان", mean: "shepherd" },
    "sha-yaa-teen":          { fa: "شیاطین", mean: "demons" },
    "shu-da":                { fa: "شده", mean: "become; been" },
    "zulm":                  { fa: "ظلم", mean: "oppression, injustice" },
    "ta-ad-dee":             { fa: "تعدّی", mean: "aggression, transgression" },
    "aan-chi":               { fa: "آن‌چه", mean: "what, that which" },
    "mee-raas":              { fa: "میراث", mean: "inheritance" },
    "aa-da-mee-yaan":        { fa: "آدمیان", mean: "human beings" },
    "hamd":                  { fa: "حمد", mean: "praise of God" },
    "khu-daa-wand":          { fa: "خداوند", mean: "God, the Lord" },
    "goo":                   { fa: "گوی", mean: "say" },
    "ha-mee":                { fa: "همی", mean: "(an old word showing an action going on) was …-ing" },
    "kun":                   { fa: "کن", mean: "do, make" },
    "shukr":                 { fa: "شکر", mean: "thanks, gratitude" },
    "nayk":                  { fa: "نیک", mean: "good" },
    "bad":                   { fa: "بد", mean: "bad" },
    "gu-za-raan":            { fa: "گذران", mean: "passing, temporary" },
    "dard-haa":              { fa: "دردها", mean: "pains, sufferings" },
    "ba-laa-haa-yee":        { fa: "بلاهایی", mean: "disasters" },
    "jawr":                  { fa: "جور", mean: "cruelty" },
    "ghaa-rat-ga-raan":      { fa: "غارتگران", mean: "plunderers" },
    "ka-shee-dand":          { fa: "کشیدند", mean: "they endured, drew" },
    "naa-sa-maa-nee-haa-yi": { fa: "نابسامانی‌های", mean: "disorders" },
    "da-waam-daar":          { fa: "دوامدار", mean: "continuing, lasting" },
    "shi-kaa-yat-haa-yi":    { fa: "شکایت‌های", mean: "complaints" },
    "dard-an-geez":          { fa: "دردانگیز", mean: "painful, anguished" },
    "aa-saar":               { fa: "آثار", mean: "works" },
    "ash-aar":               { fa: "اشعار", mean: "poems, verses" },
    "na-wee-san-da-gaan":    { fa: "نویسنده‌گان", mean: "writers" },
    "mu-shaa-hi-da":         { fa: "مشاهده", mean: "seeing" },
    "may-sha-wad":           { fa: "می‌شود", mean: "becomes" },
    "shak-kee":              { fa: "شکی", mean: "doubt" },
    "neest":                 { fa: "نیست", mean: "is not" },
    "ta-daad":               { fa: "تعداد", mean: "number" },
    "zi-yaa-dee":            { fa: "زیادی", mean: "many, a great amount" },
    "daa-nish-man-daan":     { fa: "دانشمندان", mean: "scholars, scientists" },
    "ri-jaal":               { fa: "رجال", mean: "leading men, figures" },
    "shar#law":              { fa: "شرع", say: "shar", mean: "religious law" },
    "si-yaa-sat":            { fa: "سیاست", mean: "politics" },
    "ba-raa-yi":             { fa: "برای", mean: "for" },
    "ba-dast":               { fa: "به‌دست", mean: "in hand" },
    "aa-war-dan":            { fa: "آوردن", mean: "to bring" },
    "ma-qaa-maat":           { fa: "مقامات", mean: "Maqamat; stations" },
    "dun-ya-wee":            { fa: "دنیوی", mean: "worldly" },
    "ta-ba-qaat":            { fa: "طبقات", mean: "classes, groups" },
    "faa-sid":               { fa: "فاسد", mean: "corrupt" },
    "gum-raah":              { fa: "گمراه", mean: "misguided" },
    "haa-kim":               { fa: "حاکم", mean: "ruling, ruler" },
    "ham-na-waa":            { fa: "همنوا", mean: "allied, in agreement" },
    "shu-dand":              { fa: "شدند", mean: "they became" },
    "khid-mat":              { fa: "خدمت", mean: "service" },
    "aa-naan":               { fa: "آنان", mean: "they, them" },
    "gu-roo-hee":            { fa: "گروهی", mean: "a group, a kind" },
    "dard-haa-yi":           { fa: "دردهای", mean: "pains" },
    "dil":                   { fa: "دل", mean: "heart" },
    "na-see-hat":            { fa: "نصیحت", mean: "advice" },
    "an-darz":               { fa: "اندرز", mean: "counsel" },
    "yaa":                   { fa: "یا", mean: "or" },
    "sho-khee":              { fa: "شوخی", mean: "insolence, playfulness" },
    "mu-taa-yi-ba":          { fa: "مطایبه", mean: "jest, humor" },
    "ba-yaan":               { fa: "بیان", mean: "expression" },
    "may-daash-tand":        { fa: "می‌داشتند", mean: "they had, expressed" },
    "ak-sar":                { fa: "اکثر", mean: "mostly" },
    "shaa-i-raan":           { fa: "شاعران", mean: "poets" },
    "gu-roh":                { fa: "گروه", mean: "group" },
    "aw-wal":                { fa: "اول", mean: "first" },
    "baz-ee-haa":            { fa: "بعضی‌ها", mean: "some people" },
    "sa-dee":                { fa: "سعدی", mean: "Sa’di, the Persian poet from Shiraz who died about 1292" },
    "haa-fiz":               { fa: "حافظ", mean: "Hafiz, the poet of Shiraz; one who knows the Quran by heart" },
    "du-wum":                { fa: "دوم", mean: "second" },
    "u-bay-dul-laah":        { fa: "عبیدالله", mean: "Ubaydullah" },
    "zaa-kaa-nee":           { fa: "زاکانی", mean: "Zakani" },
    "sakht-ta-reen":         { fa: "سخت‌ترین", mean: "harshest, hardest" },
    "tund-ta-reen":          { fa: "تندترین", mean: "sharpest, strongest" },
    "in-ti-qaad-haa-yi":     { fa: "انتقادهای", mean: "criticisms" },
    "nazm":                  { fa: "نظم", mean: "verse, order" },
    "nasr":                  { fa: "نثر", mean: "prose" },
    "aa-war-da":             { fa: "آورده", mean: "brought" },
    "baad":                  { fa: "باد", mean: "wind" },
    "in-ti-qaad":            { fa: "انتقاد", mean: "criticism" },
    "maa-hee-yat":           { fa: "ماهیت", mean: "nature, essence" },
    "asr":                   { fa: "عصر", mean: "age, era" },
    "par-da-yi":             { fa: "پردهٔ", mean: "veil, covering" },
    "tanz":                  { fa: "طنز", mean: "satire" },
    "ta-na":                 { fa: "طعنه", mean: "mockery, taunt" },
    "ni-shaan":              { fa: "نشان", mean: "sign, show" },
    "daa-da":                { fa: "داده", mean: "given" },
    "daa-dan":               { fa: "دادن", mean: "to give" },
    "baad#after":            { fa: "بعد", say: "baad", mean: "after, then" },
    "mu-sul-maan":           { fa: "مسلمان", mean: "Muslim" },
    "ya-kay":                { fa: "یکی", mean: "one" },
    "hu-laa-koo":            { fa: "هلاکو", mean: "Hulagu" },
    "ra-see-dan":            { fa: "رسیدن", mean: "to arrive, to reach" },
    "sal-ta-nat":            { fa: "سلطنت", mean: "throne, rule" },
    "naa-ma-yay":            { fa: "نامه‌یی", mean: "a letter" },
    "u-la-maa-yi":           { fa: "علمای", mean: "scholars, with ezafe" },
    "bagh-daad":             { fa: "بغداد", mean: "Baghdad" },
    "na-wisht":              { fa: "نوشت", mean: "wrote" },
    "na-wish-tan":           { fa: "نوشتن", mean: "to write" },
    "haa-mee":               { fa: "حامی", mean: "defender" },
    "pay-raw":               { fa: "پیرو", mean: "follower" },
    "sha-ree-at":            { fa: "شریعت", mean: "religious law" },
    "mu-ham-ma-dee":         { fa: "محمدی", mean: "of Muhammad" },
    "mu-ar-ri-fee":          { fa: "معرفی", mean: "introduction, making known" },
    "kard":                  { fa: "کرد", mean: "did, made" },
    "amr":                   { fa: "امر", mean: "order, command" },
    "sa-bab":                { fa: "سبب", mean: "cause, reason" },
    "qu-wat":                { fa: "قوت", mean: "strength" },
    "mus-li-meen":           { fa: "مسلمین", mean: "Muslims" },
    "ma-na-wee":             { fa: "معنوی", mean: "semantic, spiritual" },
    "kuf-faar":              { fa: "کفار", mean: "unbelievers" },
    "bil-aa-khi-ra":         { fa: "بالآخره", mean: "finally" },
    "mu-qad-das":            { fa: "مقدس", mean: "holy, sacred" },
    "ta-lee-maat":           { fa: "تعلیمات", mean: "teachings" },
    "zin-da-gee-saaz":       { fa: "زنده‌گی‌ساز", mean: "life-giving" },
    "qu-loob":               { fa: "قلوب", mean: "hearts" },
    "mu-ghul-haa":           { fa: "مغول‌ها", mean: "Mongols" },
    "gu-zaasht":             { fa: "گذاشت", mean: "put, named" },
    "gu-zaash-tan":          { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "ee-maan":               { fa: "ایمان", mean: "faith" },
    "ghaa-zaan":             { fa: "غازان", mean: "Ghazan" },
    "a-meer":                { fa: "امیر", mean: "emir, prince; also part of names" },
    "mu-ghul":               { fa: "مغول", mean: "Mongol" },
    "u-ma-raa":              { fa: "امرا", mean: "princes, emirs" },
    "qud-rat":               { fa: "قدرت", mean: "power" },
    "mu-sul-maa-naan":       { fa: "مسلمانان", mean: "Muslims" },
    "fu-zo-nee":             { fa: "فزونی", mean: "increase" },
    "gi-rift":               { fa: "گرفت", mean: "took; began" },
    "du-baa-ra":             { fa: "دوباره", mean: "again" },
    "ras-mee-yat":           { fa: "رسمیت", mean: "official status" },
    "yaaft":                 { fa: "یافت", mean: "found" },
    "yaaf-tan":              { fa: "یافتن", mean: "to find" },
    "khaan":                 { fa: "خان", mean: "khan, a title; part of names" },
    "su-koot":               { fa: "سکوت", mean: "silence, quietly" },
    "but-pa-ras-tee":        { fa: "بت‌پرستی", mean: "idolatry" },
    "mu-khaa-li-fat":        { fa: "مخالفت", mean: "opposition" },
    "par-daakht":            { fa: "پرداخت", mean: "took up" },
    "par-daakh-tan":         { fa: "پرداختن", mean: "to busy oneself (with ba), to take up; to pay" },
    "takh-reeb":             { fa: "تخریب", mean: "destruction" },
    "but-haa":               { fa: "بت‌ها", mean: "idols" },
    "but-khaa-na-haa":       { fa: "بتخانه‌ها", mean: "temples of idols" },
    "but-pa-ras-taan":       { fa: "بت‌پرستان", mean: "idolaters" },
    "dar-aa-yand":           { fa: "درآیند", mean: "may enter, adopt" },
    "dar-aa-ma-dan":         { fa: "درآمدن", mean: "to come in; to take a form" },
    "sar-za-meen-haa-yi":    { fa: "سرزمین‌های", mean: "lands" },
    "as-lee":                { fa: "اصلی", mean: "original, main" },
    "baaz-gar-dand":         { fa: "بازگردند", mean: "may return" },
    "baaz-gash-tan":         { fa: "بازگشتن", mean: "to return" },
    "a-qaa-yid":             { fa: "عقاید", mean: "beliefs" },
    "iz-haar":               { fa: "اظهار", mean: "expression, declaring" },
    "na-ku-nand":            { fa: "نکنند", mean: "may not do, do not" },
    "dar-gee-ro-daar":       { fa: "درگیرودار", mean: "turmoil, struggle" },
    "ham-la":                { fa: "حمله", mean: "attack" },
    "u-da-yee":              { fa: "عده‌یی", mean: "a number, a group" },
    "ma-shaa-yikh":          { fa: "مشایخ", mean: "religious elders, shaykhs" },
    "bu-zurg":               { fa: "بزرگ", mean: "big, great" },
    "maa-nand":              { fa: "مانند", mean: "like" },
    "shaykh":                { fa: "شیخ", mean: "sheikh - a title for a great teacher or poet" },
    "naj-mud-deen":          { fa: "نجم‌الدین", mean: "Najmuddin" },
    "kob-raa":               { fa: "کبری", mean: "Kubra" },
    "fa-ree-dud-deen":       { fa: "فریدالدین", mean: "Fariduddin" },
    "at-taar":               { fa: "عطار", mean: "Attar" },
    "ra-see-dand":           { fa: "رسیدند", mean: "arrived" },
    "bar-khay":              { fa: "برخی", mean: "some" },
    "pa-naah-gaah-haa-yi":   { fa: "پناهگاه‌های", mean: "refuges" },
    "far-han-gee":           { fa: "فرهنگی", mean: "cultural" },
    "ja-deed":               { fa: "جدید", mean: "new" },
    "aa-si-yaa-yi":          { fa: "آسیای", mean: "Asia, with ezafe" },
    "sa-gheer":              { fa: "صغیر", mean: "minor, small" },
    "shaam":                 { fa: "شام", mean: "evening" },
    "faars":                 { fa: "فارس", mean: "Fars, Persia" },
    "kir-maan":              { fa: "کرمان", mean: "Kerman" },
    "bi-laad":               { fa: "بلاد", mean: "lands, regions" },
    "sa-nad":                { fa: "سند", mean: "document, certificate" },
    "hind":                  { fa: "هند", mean: "India" },
    "raf-tand":              { fa: "رفتند", mean: "they went" },
    "raf-tan":               { fa: "رفتن", mean: "to go" },
    "a-sar":                 { fa: "اثر", mean: "work (of writing or art)" },
    "roo-hee-ya-yi":         { fa: "روحیهٔ", mean: "spirit, morale" },
    "aa-seeb":               { fa: "آسیب", mean: "harm, injury" },
    "dee-da":                { fa: "دیده", mean: "seen; eye" },
    "dee-dan":               { fa: "دیدن", mean: "to see; seeing" },
    "ta-saw-wuf":            { fa: "تصوف", mean: "Sufism" },
    "roy":                   { fa: "روی", mean: "face" },
    "aa-war-dand":           { fa: "آوردند", mean: "they brought" },
    "shi'r":                 { fa: "شعر", mean: "poetry, poem" },
    "faa-ri-see":            { fa: "فارسی", mean: "Persian" },
    "hu-zoor":               { fa: "حضور", mean: "presence" },
    "qa-see-da-haa":         { fa: "قصیده‌ها", mean: "qasidas, odes" },
    "kam":                   { fa: "کم", mean: "few, little" },
    "gha-zal":               { fa: "غزل", mean: "ghazal, a short love poem" },
    "daa-staan-haa":         { fa: "داستان‌ها", mean: "stories" },
    "guf-ta":                { fa: "گفته", mean: "said" },
    "ir-faa-nee":            { fa: "عرفانی", mean: "mystical, Sufi" },
    "aa-meekh-ta":           { fa: "آمیخته", mean: "mixed, blended" },
    "aa-meekh-tan":          { fa: "آمیختن", mean: "to mix, blend" },
    "ma-baa-his":            { fa: "مباحث", mean: "discussions, topics" },
    "tar-bi-ya-tee":         { fa: "تربیتی", mean: "of education" },
    "baysh-tar":             { fa: "بیشتر", mean: "more" },
    "maw-laa-naa":           { fa: "مولانا", mean: "Mawlana, our master, a title of Rumi" },
    "ja-laal-ud-deen":       { fa: "جلال‌الدین", mean: "Jalaluddin" },
    "bal-khee":              { fa: "بلخی", mean: "of Balkh" },
    "ma-roof":               { fa: "معروف", mean: "famous" },
    "roo-mee":               { fa: "رومی", mean: "Rumi, of Rome" },
    "man-zo-ma-yi":          { fa: "منظومهٔ", mean: "long poem" },
    "mu-fas-sal":            { fa: "مفصل", mean: "detailed, long" },
    "ma-jaa-mi":             { fa: "مجامع", mean: "collections, assemblies" },
    "su-rood":               { fa: "سرود", mean: "composed, sang" },
    "su-roo-dan":            { fa: "سرودن", mean: "to write a poem" },
    "im-roz":                { fa: "امروز", mean: "today" },
    "ham-chu-naan":          { fa: "همچنان", mean: "likewise, just so" },
    "shuh-rat":              { fa: "شهرت", mean: "fame" },
    "khaa-had":              { fa: "خواهد", mean: "will" },
    "khaas-tan":             { fa: "خواستن", mean: "to want" },
    "ki-naar":               { fa: "کنار", mean: "side, edge" },
    "fakh-rud-deen":         { fa: "فخرالدین", mean: "Fakhruddin" },
    "i-raa-qee":             { fa: "عراقی", mean: "Iraqi" },
    "dee-ga-raan":           { fa: "دیگران", mean: "others" },
    "shee-raa-zee":          { fa: "شیرازی", mean: "Shirazi, of Shiraz" },
    "paa-yaan":              { fa: "پایان", mean: "end" },
    "ahd":                   { fa: "عهد", mean: "age, period" },
    "hay-see-yat":           { fa: "حیث", mean: "capacity, role (ba hay-see, as)" },
    "gha-zal-sa-raa-yi":     { fa: "غزلسرای", mean: "ghazal poet" },
    "bi-si-yaar":            { fa: "بسیار", mean: "much, very" },
    "ta-baa-ruz":            { fa: "تبارز", mean: "emergence, distinction" },
    "may-ku-nad":            { fa: "می‌کند", mean: "does, makes" },
    "jaa-wi-daa-nee":        { fa: "جاویدانی", mean: "lasting, eternal" },
    "may-aa-wa-rad":         { fa: "می‌آورد", mean: "brings" }
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
    "say": "a-da-bee-yaa-ti da-ree dar qu-roo-ni haf-tum wa hash-tu-mi hij-ree. qa-ma-ree.",
    "mean": "Dari literature in the seventh and eighth centuries AH",
    "words": [
      [
        "ادبیات",
        "a-da-bee-yaa-ti",
        "a-da-bee-yaat"
      ],
      [
        "دری",
        "da-ree",
        "da-ree"
      ],
      [
        "در",
        "dar",
        "dar"
      ],
      [
        "قرون",
        "qu-roo-ni",
        "qu-roon"
      ],
      [
        "هفتم",
        "haf-tum",
        "haf-tum"
      ],
      [
        "و",
        "wa",
        "wa"
      ],
      [
        "هشتم",
        "hash-tu-mi",
        "hash-tum"
      ],
      [
        "ه.",
        "hij-ree",
        "hij-ree"
      ],
      [
        "ق.",
        "qa-ma-ree",
        "qa-ma-ree"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "qarn-haa-yi haf-tum wa hash-tu-mi hij-ree. qa-ma-ree. wah-shat-naak-ta-reen daw-raa-ni een sar-za-meen ast,",
        "mean": "The seventh and eighth centuries AH were the most terrible period for this land.",
        "words": [
          [
            "قرن‌های",
            "qarn-haa-yi",
            "qarn-haa"
          ],
          [
            "هفتم",
            "haf-tum",
            "haf-tum"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هشتم",
            "hash-tu-mi",
            "hash-tum"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree"
          ],
          [
            "ق.",
            "qa-ma-ree",
            "qa-ma-ree"
          ],
          [
            "وحشتناک‌ترین",
            "wah-shat-naak-ta-reen",
            "wah-shat-naak-ta-reen"
          ],
          [
            "دوران",
            "daw-raa-ni",
            "daw-raan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "سرزمین",
            "sar-za-meen",
            "sar-za-meen"
          ],
          [
            "است،",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "lash-ka-ri-yaa-ni chan-geez-khaan baa qatl wa ta-baa-hee wa way-raa-nee, na-tan-haa mar-du-maa-ni bee-di-faa-yi maa raa ba sha-haa-dat ra-saa-nee-dand; bal-ki ma-da-nee-yat raa naa-bood kar-dand wa ba rushd wa po-yaa-yee-yi a-da-bee-yaat wa raw-na-qi baa-zaa-ri aan neez sakht zar-ba za-dand.",
        "mean": "Genghis Khan's armies brought slaughter, destruction and ruin: they not only killed our defenseless people, but destroyed civilization and dealt a severe blow to the growth and vitality of literature and to its flourishing.",
        "words": [
          [
            "لشکریان",
            "lash-ka-ri-yaa-ni",
            "lash-ka-ri-yaan"
          ],
          [
            "چنگیزخان",
            "chan-geez-khaan",
            "chan-geez-khaan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "قتل",
            "qatl",
            "qatl"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تباهی",
            "ta-baa-hee",
            "ta-baa-hee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ویرانی،",
            "way-raa-nee",
            "way-raa-nee"
          ],
          [
            "نه‌تنها",
            "na-tan-haa",
            "na-tan-haa"
          ],
          [
            "مردمان",
            "mar-du-maa-ni",
            "mar-du-maan"
          ],
          [
            "بی‌دفاع",
            "bee-di-faa-yi",
            "bee-di-faa"
          ],
          [
            "ما",
            "maa",
            "maa"
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
            "شهادت",
            "sha-haa-dat",
            "sha-haa-dat"
          ],
          [
            "رسانیدند؛",
            "ra-saa-nee-dand",
            "ra-saa-nee-dand",
            "ra-saan-dan"
          ],
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "مدنیت",
            "ma-da-nee-yat",
            "ma-da-nee-yat"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نابود",
            "naa-bood",
            "naa-bood"
          ],
          [
            "کردند",
            "kar-dand",
            "kar-dand",
            "kar-dan"
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
            "رشد",
            "rushd",
            "rushd"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پویایی",
            "po-yaa-yee-yi",
            "po-yaa-yee"
          ],
          [
            "ادبیات",
            "a-da-bee-yaat",
            "a-da-bee-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رونق",
            "raw-na-qi",
            "raw-naq"
          ],
          [
            "بازار",
            "baa-zaa-ri",
            "baa-zaar"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "سخت",
            "sakht",
            "sakht"
          ],
          [
            "ضربه",
            "zar-ba",
            "zar-ba"
          ],
          [
            "زدند.",
            "za-dand",
            "za-dand",
            "za-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "gar-chi mu-qaa-wi-mat-haa-yi da-lee-raa-na dar ba-raa-ba-ri si-paa-hi mu-haa-ji-mi way dar har go-sha soo-rat may-gi-rift;",
        "mean": "Although brave resistance to his invading army took place everywhere,",
        "words": [
          [
            "گرچه",
            "gar-chi",
            "gar-chi"
          ],
          [
            "مقاومت‌های",
            "mu-qaa-wi-mat-haa-yi",
            "mu-qaa-wi-mat-haa"
          ],
          [
            "دلیرانه",
            "da-lee-raa-na",
            "da-lee-raa-na"
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
            "سپاه",
            "si-paa-hi",
            "si-paah"
          ],
          [
            "مهاجم",
            "mu-haa-ji-mi",
            "mu-haa-jim"
          ],
          [
            "وی",
            "way",
            "way"
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
            "گوشه",
            "go-sha",
            "go-sha"
          ],
          [
            "صورت",
            "soo-rat",
            "soo-rat"
          ],
          [
            "می‌گرفت؛",
            "may-gi-rift",
            "may-gi-rift",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "wa-lay baa shi-kas-ti sul-taan mu-ham-mad khaa-razm-shaah wa ha-ma far-zan-daa-ni oo, sul-ta-yi lash-ka-ri-yaan bar ha-ma ma-naa-tiq kaa-mil shud.",
        "mean": "after Sultan Muhammad Khwarazmshah and all his sons were defeated, the armies gained complete control of every region.",
        "words": [
          [
            "ولی",
            "wa-lay",
            "wa-lay"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "شکست",
            "shi-kas-ti",
            "shi-kast",
            "shi-kas-tan"
          ],
          [
            "سلطان",
            "sul-taan",
            "sul-taan"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "خوارزمشاه",
            "khaa-razm-shaah",
            "khaa-razm-shaah"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "فرزندان",
            "far-zan-daa-ni",
            "far-zan-daan"
          ],
          [
            "او،",
            "oo",
            "oo"
          ],
          [
            "سلطهٔ",
            "sul-ta-yi",
            "sul-ta"
          ],
          [
            "لشکریان",
            "lash-ka-ri-yaan",
            "lash-ka-ri-yaan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "مناطق",
            "ma-naa-tiq",
            "ma-naa-tiq"
          ],
          [
            "کامل",
            "kaa-mil",
            "kaa-mil"
          ],
          [
            "شد.",
            "shud",
            "shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "aan-haa mar-du-mi ba-yaa-baan-gard boo-dand wa pas az ta-sal-lut bar ma-naa-ti-qi dee-gar, ba tad-reej ba-zay az ru-soom wa aa-daa-bi aq-waa-mi taa-bi raa pa-zee-rif-tand wa tah-ti ta-see-ri aan qa-raar gi-rif-tand.",
        "mean": "They were nomadic people, and after taking control of other regions they gradually adopted some of the customs and practices of the subject peoples and came under their influence.",
        "words": [
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "مردم",
            "mar-du-mi",
            "mar-dum"
          ],
          [
            "بیابانگرد",
            "ba-yaa-baan-gard",
            "ba-yaa-baan-gard"
          ],
          [
            "بودند",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
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
            "تسلط",
            "ta-sal-lut",
            "ta-sal-lut"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "مناطق",
            "ma-naa-ti-qi",
            "ma-naa-tiq"
          ],
          [
            "دیگر،",
            "dee-gar",
            "dee-gar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تدریج",
            "tad-reej",
            "tad-reej"
          ],
          [
            "بعضی",
            "ba-zay",
            "ba-zay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "رسوم",
            "ru-soom",
            "ru-soom"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آداب",
            "aa-daa-bi",
            "aa-daab"
          ],
          [
            "اقوام",
            "aq-waa-mi",
            "aq-waam"
          ],
          [
            "تابع",
            "taa-bi",
            "taa-bi"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "پذیرفتند",
            "pa-zee-rif-tand",
            "pa-zee-rif-tand",
            "pa-zee-ruf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تحت",
            "tah-ti",
            "taht"
          ],
          [
            "تأثیر",
            "ta-see-ri",
            "ta-seer"
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
            "گرفتند.",
            "gi-rif-tand",
            "gi-rif-tand",
            "gi-rif-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "wa-zi ni-zaa-mee, si-yaa-see wa ij-ti-maa-ee bar a-da-bee-yaa-ti een daw-ra neez ta-see-ri fa-raa-waan daasht.",
        "mean": "The military, political and social situation greatly affected the literature of this period.",
        "words": [
          [
            "وضع",
            "wa-zi",
            "waz"
          ],
          [
            "نظامی،",
            "ni-zaa-mee",
            "ni-zaa-mee"
          ],
          [
            "سیاسی",
            "si-yaa-see",
            "si-yaa-see"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اجتماعی",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "دوره",
            "daw-ra",
            "daw-ra"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "تأثیر",
            "ta-see-ri",
            "ta-seer"
          ],
          [
            "فراوان",
            "fa-raa-waan",
            "fa-raa-waan"
          ],
          [
            "داشت.",
            "daasht",
            "daasht",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "shu-a-raa wa-zi dard an-gay-zi in-hi-taa-ti a-mee-qi ij-ti-maa-ee wa waa-zh-goon shu-da-ni ha-ma ar-zish-haa-yee-yi dee-nee wa ij-ti-maa-ee wa a-ham-mee-yat na-daash-ta-ni ilm wa hu-nar wa ra-waa-ji naa-mar-do-mee wa naa-raas-tee raa ba tas-weer ka-shee-da and,",
        "mean": "Poets portrayed the painful condition of deep social decline, the overturning of all religious and social values, the lack of importance given to learning and art, and the spread of inhumanity and dishonesty.",
        "words": [
          [
            "شعرا",
            "shu-a-raa",
            "shu-a-raa"
          ],
          [
            "وضع",
            "wa-zi",
            "waz"
          ],
          [
            "درد",
            "dard",
            "dard"
          ],
          [
            "انگیز",
            "an-gay-zi",
            "an-gayz"
          ],
          [
            "انحطاط",
            "in-hi-taa-ti",
            "in-hi-taat"
          ],
          [
            "عمیق",
            "a-mee-qi",
            "a-meeq"
          ],
          [
            "اجتماعی",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "واژگون",
            "waa-zh-goon",
            "waa-zh-goon"
          ],
          [
            "شدن",
            "shu-da-ni",
            "shu-dan"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "ارزش‌هایی",
            "ar-zish-haa-yee-yi",
            "ar-zish-haa-yee"
          ],
          [
            "دینی",
            "dee-nee",
            "dee-nee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اجتماعی",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اهمیت",
            "a-ham-mee-yat",
            "a-ham-mee-yat"
          ],
          [
            "نداشتن",
            "na-daash-ta-ni",
            "na-daash-tan",
            "daash-tan"
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
            "هنر",
            "hu-nar",
            "hu-nar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رواج",
            "ra-waa-ji",
            "ra-waaj"
          ],
          [
            "نامردمی",
            "naa-mar-do-mee",
            "naa-mar-do-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناراستی",
            "naa-raas-tee",
            "naa-raas-tee"
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
            "تصویر",
            "tas-weer",
            "tas-weer"
          ],
          [
            "کشیده",
            "ka-shee-da",
            "ka-shee-da",
            "ka-shee-dan"
          ],
          [
            "اند،",
            "and",
            "and"
          ]
        ]
      },
      {
        "say": "sayf far-ghaa-nee go-yad:",
        "mean": "Sayf Farghani says:",
        "words": [
          [
            "سیف",
            "sayf",
            "sayf"
          ],
          [
            "فرغانی",
            "far-ghaa-nee",
            "far-ghaa-nee"
          ],
          [
            "گوید:",
            "go-yad",
            "go-yad",
            "guf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar a-ja-bam taa khud aan za-maan chi za-maan bood",
        "mean": "I wonder what sort of time that time truly was,",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "عجبم",
            "a-ja-bam",
            "a-ja-bam"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "زمان",
            "za-maan",
            "za-maan"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "زمان",
            "za-maan",
            "za-maan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "kaa-ma-dan man ba-so-yi mul-ki ja-haan bood",
        "mean": "when my coming into the realm of the world took place.",
        "words": [
          [
            "کامدن",
            "kaa-ma-dan",
            "kaa-ma-dan"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "بسوی",
            "ba-so-yi",
            "ba-so-yi"
          ],
          [
            "ملک",
            "mul-ki",
            "mulk"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "bar sa-ri khaa-kee ki paa-yi-gaa-hi man wa tu-st",
        "mean": "Over the soil that is the dwelling place of you and me,",
        "words": [
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "سر",
            "sa-ri",
            "sar"
          ],
          [
            "خاکی",
            "khaa-kee",
            "khaa-kee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "پایگاه",
            "paa-yi-gaa-hi",
            "paa-yi-gaah"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تست",
            "tu-st",
            "tu-st"
          ]
        ]
      },
      {
        "say": "khoo-ni a-zee-zaan ba-saa-ni aa-bi ra-waan bood",
        "mean": "the blood of dear ones flowed like running water.",
        "words": [
          [
            "خون",
            "khoo-ni",
            "khoon"
          ],
          [
            "عزیزان",
            "a-zee-zaan",
            "a-zee-zaan"
          ],
          [
            "بسان",
            "ba-saa-ni",
            "ba-saan"
          ],
          [
            "آب",
            "aa-bi",
            "aab"
          ],
          [
            "روان",
            "ra-waan",
            "ra-waan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "raa-ya-ti is-laam sar-shi-kas-ta az-ee-raa",
        "mean": "The banner of Islam was bowed and broken because",
        "words": [
          [
            "رایت",
            "raa-ya-ti",
            "raa-yat"
          ],
          [
            "اسلام",
            "is-laam",
            "is-laam"
          ],
          [
            "سرشکسته",
            "sar-shi-kas-ta",
            "sar-shi-kas-ta"
          ],
          [
            "ازیرا",
            "az-ee-raa",
            "az-ee-raa"
          ]
        ]
      },
      {
        "say": "daw-la-ti deen peer wa bakh-ti kufr ja-waan bood",
        "mean": "the fortune of religion was old and the fortune of unbelief young.",
        "words": [
          [
            "دولت",
            "daw-la-ti",
            "daw-lat"
          ],
          [
            "دین",
            "deen",
            "deen"
          ],
          [
            "پیر",
            "peer",
            "peer"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بخت",
            "bakh-ti",
            "bakht"
          ],
          [
            "کفر",
            "kufr",
            "kufr"
          ],
          [
            "جوان",
            "ja-waan",
            "ja-waan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "mar-du-mi bee-aql wa deen gi-rif-ta wi-laa-yat",
        "mean": "People without reason or faith had taken power;",
        "words": [
          [
            "مردم",
            "mar-du-mi",
            "mar-dum"
          ],
          [
            "بی‌عقل",
            "bee-aql",
            "bee-aql"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دین",
            "deen",
            "deen"
          ],
          [
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "gi-rif-tan"
          ],
          [
            "ولایت",
            "wi-laa-yat",
            "wi-laa-yat"
          ]
        ]
      },
      {
        "say": "haa-li bar-ra choon bood cho gurg sha-baan bood",
        "mean": "what could the lamb's condition be when the wolf was shepherd?",
        "words": [
          [
            "حال",
            "haa-li",
            "haal"
          ],
          [
            "بره",
            "bar-ra",
            "bar-ra"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "چو",
            "cho",
            "cho"
          ],
          [
            "گرگ",
            "gurg",
            "gurg"
          ],
          [
            "شبان",
            "sha-baan",
            "sha-baan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "mul-ki sha-yaa-teen shu-da ba zulm wa ta-ad-dee",
        "mean": "The realm had become the demons' through oppression and aggression,",
        "words": [
          [
            "ملک",
            "mul-ki",
            "mulk"
          ],
          [
            "شیاطین",
            "sha-yaa-teen",
            "sha-yaa-teen"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ظلم",
            "zulm",
            "zulm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تعدّی",
            "ta-ad-dee",
            "ta-ad-dee"
          ]
        ]
      },
      {
        "say": "aan-chi ba mee-raas az aan aa-da-mee-yaan bood",
        "mean": "that which had been inherited from humankind.",
        "words": [
          [
            "آن‌چه",
            "aan-chi",
            "aan-chi"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "میراث",
            "mee-raas",
            "mee-raas"
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
            "آدمیان",
            "aa-da-mee-yaan",
            "aa-da-mee-yaan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "ham-di khu-daa-wand goo “sayf” wa ha-mee kun shukr ki nayk wa ba-di ja-haan gu-za-raan bood",
        "mean": "Praise God, Sayf, and give thanks, for both the good and bad of the world pass away.",
        "words": [
          [
            "حمد",
            "ham-di",
            "hamd"
          ],
          [
            "خداوند",
            "khu-daa-wand",
            "khu-daa-wand"
          ],
          [
            "گوی",
            "goo",
            "goo",
            "guf-tan"
          ],
          [
            "«سیف»",
            "sayf",
            "sayf"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "همی",
            "ha-mee",
            "ha-mee"
          ],
          [
            "کن",
            "kun",
            "kun",
            "kar-dan"
          ],
          [
            "شکر",
            "shukr",
            "shukr"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "نیک",
            "nayk",
            "nayk"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بد",
            "ba-di",
            "bad"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "گذران",
            "gu-za-raan",
            "gu-za-raan"
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
        "say": "dard-haa wa ba-laa-haa-yee ki mar-dum az jaw-ri ghaa-rat-ga-raan ka-shee-dand wa naa-sa-maa-nee-haa-yi-yi da-waam-daa-ri ij-ti-maa-ee, ba soo-ra-ti shi-kaa-yat-haa-yi-yi dard-an-geez dar aa-saar wa ash-aa-ri shu-a-raa wa na-wee-san-da-gaa-ni een daw-ra mu-shaa-hi-da may-sha-wad.",
        "mean": "The suffering and disasters people endured from the cruelty of the plunderers, and the continuing social disorder, appear as anguished complaints in the works and poems of the period's poets and writers.",
        "words": [
          [
            "دردها",
            "dard-haa",
            "dard-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بلاهایی",
            "ba-laa-haa-yee",
            "ba-laa-haa-yee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "جور",
            "jaw-ri",
            "jawr"
          ],
          [
            "غارتگران",
            "ghaa-rat-ga-raan",
            "ghaa-rat-ga-raan"
          ],
          [
            "کشیدند",
            "ka-shee-dand",
            "ka-shee-dand",
            "ka-shee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نابسامانی‌های",
            "naa-sa-maa-nee-haa-yi-yi",
            "naa-sa-maa-nee-haa-yi"
          ],
          [
            "دوامدار",
            "da-waam-daa-ri",
            "da-waam-daar"
          ],
          [
            "اجتماعی،",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "صورت",
            "soo-ra-ti",
            "soo-rat"
          ],
          [
            "شکایت‌های",
            "shi-kaa-yat-haa-yi-yi",
            "shi-kaa-yat-haa-yi"
          ],
          [
            "دردانگیز",
            "dard-an-geez",
            "dard-an-geez"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آثار",
            "aa-saar",
            "aa-saar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اشعار",
            "ash-aa-ri",
            "ash-aar"
          ],
          [
            "شعرا",
            "shu-a-raa",
            "shu-a-raa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نویسنده‌گان",
            "na-wee-san-da-gaa-ni",
            "na-wee-san-da-gaan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "دوره",
            "daw-ra",
            "daw-ra"
          ],
          [
            "مشاهده",
            "mu-shaa-hi-da",
            "mu-shaa-hi-da"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "dar een shak-kee neest ki ta-daa-di zi-yaa-dee az daa-nish-man-daan wa ri-jaa-li shar wa si-yaa-sat ba-raa-yi ba-dast aa-war-da-ni ma-qaa-maa-ti dun-ya-wee, ta-ba-qaa-ti faa-sid wa gum-raa-hi haa-kim, ham-na-waa shu-dand wa dar khid-ma-ti aa-naan qa-raar gi-rif-tand",
        "mean": "There is no doubt that many scholars and men of religion and politics sided with the corrupt and misguided ruling classes in order to obtain worldly positions and entered their service,",
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
            "شکی",
            "shak-kee",
            "shak-kee"
          ],
          [
            "نیست",
            "neest",
            "neest",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تعداد",
            "ta-daa-di",
            "ta-daad"
          ],
          [
            "زیادی",
            "zi-yaa-dee",
            "zi-yaa-dee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دانشمندان",
            "daa-nish-man-daan",
            "daa-nish-man-daan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رجال",
            "ri-jaa-li",
            "ri-jaal"
          ],
          [
            "شرع",
            "shar",
            "shar#law"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سیاست",
            "si-yaa-sat",
            "si-yaa-sat"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "به‌دست",
            "ba-dast",
            "ba-dast"
          ],
          [
            "آوردن",
            "aa-war-da-ni",
            "aa-war-dan"
          ],
          [
            "مقامات",
            "ma-qaa-maa-ti",
            "ma-qaa-maat"
          ],
          [
            "دنیوی،",
            "dun-ya-wee",
            "dun-ya-wee"
          ],
          [
            "طبقات",
            "ta-ba-qaa-ti",
            "ta-ba-qaat"
          ],
          [
            "فاسد",
            "faa-sid",
            "faa-sid"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گمراه",
            "gum-raa-hi",
            "gum-raah"
          ],
          [
            "حاکم،",
            "haa-kim",
            "haa-kim"
          ],
          [
            "همنوا",
            "ham-na-waa",
            "ham-na-waa"
          ],
          [
            "شدند",
            "shu-dand",
            "shu-dand",
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
            "خدمت",
            "khid-ma-ti",
            "khid-mat"
          ],
          [
            "آنان",
            "aa-naan",
            "aa-naan"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "گرفتند",
            "gi-rif-tand",
            "gi-rif-tand",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "wa gu-roo-hee dard-haa-yi-yi dil raa ba soo-ra-ti na-see-hat wa an-darz wa yaa sho-khee wa mu-taa-yi-ba ba-yaan may-daash-tand.",
        "mean": "while another group expressed their heart's pain through advice, counsel, humor and jest.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گروهی",
            "gu-roo-hee",
            "gu-roo-hee"
          ],
          [
            "دردهای",
            "dard-haa-yi-yi",
            "dard-haa-yi"
          ],
          [
            "دل",
            "dil",
            "dil"
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
            "صورت",
            "soo-ra-ti",
            "soo-rat"
          ],
          [
            "نصیحت",
            "na-see-hat",
            "na-see-hat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اندرز",
            "an-darz",
            "an-darz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "شوخی",
            "sho-khee",
            "sho-khee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مطایبه",
            "mu-taa-yi-ba",
            "mu-taa-yi-ba"
          ],
          [
            "بیان",
            "ba-yaan",
            "ba-yaan"
          ],
          [
            "می‌داشتند.",
            "may-daash-tand",
            "may-daash-tand",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "ak-sa-ri shaa-i-raan wa daa-nish-man-daan az gu-ro-hi aw-wal boo-dand; wa-lay baz-ee-haa choon sa-dee wa haa-fiz az gu-ro-hi du-wum.",
        "mean": "Most poets and scholars belonged to the first group, but some, such as Sa'di and Hafiz, belonged to the second.",
        "words": [
          [
            "اکثر",
            "ak-sa-ri",
            "ak-sar"
          ],
          [
            "شاعران",
            "shaa-i-raan",
            "shaa-i-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دانشمندان",
            "daa-nish-man-daan",
            "daa-nish-man-daan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "گروه",
            "gu-ro-hi",
            "gu-roh"
          ],
          [
            "اول",
            "aw-wal",
            "aw-wal"
          ],
          [
            "بودند؛",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ],
          [
            "ولی",
            "wa-lay",
            "wa-lay"
          ],
          [
            "بعضی‌ها",
            "baz-ee-haa",
            "baz-ee-haa"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "سعدی",
            "sa-dee",
            "sa-dee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حافظ",
            "haa-fiz",
            "haa-fiz"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "گروه",
            "gu-ro-hi",
            "gu-roh"
          ],
          [
            "دوم.",
            "du-wum",
            "du-wum"
          ]
        ]
      }
    ],
    [
      {
        "say": "u-bay-dul-laah zaa-kaa-nee, sakht-ta-reen wa tund-ta-reen in-ti-qaad-haa-yi-yi ij-ti-maa-ee raa dar nazm wa nasr aa-war-da wa wa-zi za-maa-ni khud raa ba baa-di in-ti-qaad gi-rif-ta wa maa-hee-ya-ti ri-jaa-li dee-nee wa si-yaa-see-yi asr raa dar par-da-yi tanz wa ta-na ba mar-dum ni-shaan daa-da ast.",
        "mean": "Ubaydullah Zakani put the harshest and sharpest social criticism into verse and prose, subjected the conditions of his time to criticism, and showed people the nature of the age's religious and political figures under the veil of satire and mockery.",
        "words": [
          [
            "عبیدالله",
            "u-bay-dul-laah",
            "u-bay-dul-laah"
          ],
          [
            "زاکانی،",
            "zaa-kaa-nee",
            "zaa-kaa-nee"
          ],
          [
            "سخت‌ترین",
            "sakht-ta-reen",
            "sakht-ta-reen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تندترین",
            "tund-ta-reen",
            "tund-ta-reen"
          ],
          [
            "انتقادهای",
            "in-ti-qaad-haa-yi-yi",
            "in-ti-qaad-haa-yi"
          ],
          [
            "اجتماعی",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
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
            "نظم",
            "nazm",
            "nazm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "آورده",
            "aa-war-da",
            "aa-war-da",
            "aa-war-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "وضع",
            "wa-zi",
            "waz"
          ],
          [
            "زمان",
            "za-maa-ni",
            "za-maan"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "باد",
            "baa-di",
            "baad"
          ],
          [
            "انتقاد",
            "in-ti-qaad",
            "in-ti-qaad"
          ],
          [
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ماهیت",
            "maa-hee-ya-ti",
            "maa-hee-yat"
          ],
          [
            "رجال",
            "ri-jaa-li",
            "ri-jaal"
          ],
          [
            "دینی",
            "dee-nee",
            "dee-nee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سیاسی",
            "si-yaa-see-yi",
            "si-yaa-see"
          ],
          [
            "عصر",
            "asr",
            "asr"
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
            "پردهٔ",
            "par-da-yi",
            "par-da-yi"
          ],
          [
            "طنز",
            "tanz",
            "tanz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "طعنه",
            "ta-na",
            "ta-na"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "نشان",
            "ni-shaan",
            "ni-shaan"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "daa-dan"
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
        "say": "baad az mu-sul-maan shu-da-ni ya-kay az far-zan-daa-ni hu-laa-koo wa ra-see-dan ba sal-ta-nat, naa-ma-yay ba u-la-maa-yi-yi bagh-daad na-wisht wa khud raa haa-mee-yi dee-ni is-laam wa pay-ra-wi sha-ree-a-ti mu-ham-ma-dee mu-ar-ri-fee kard.",
        "mean": "After one of Hulagu's sons became Muslim and came to the throne, he wrote a letter to the scholars of Baghdad and presented himself as a defender of Islam and a follower of the law of Muhammad.",
        "words": [
          [
            "بعد",
            "baad",
            "baad#after"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مسلمان",
            "mu-sul-maan",
            "mu-sul-maan"
          ],
          [
            "شدن",
            "shu-da-ni",
            "shu-dan"
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
            "فرزندان",
            "far-zan-daa-ni",
            "far-zan-daan"
          ],
          [
            "هلاکو",
            "hu-laa-koo",
            "hu-laa-koo"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "سلطنت،",
            "sal-ta-nat",
            "sal-ta-nat"
          ],
          [
            "نامه‌یی",
            "naa-ma-yay",
            "naa-ma-yay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "علمای",
            "u-la-maa-yi-yi",
            "u-la-maa-yi"
          ],
          [
            "بغداد",
            "bagh-daad",
            "bagh-daad"
          ],
          [
            "نوشت",
            "na-wisht",
            "na-wisht",
            "na-wish-tan"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "حامی",
            "haa-mee-yi",
            "haa-mee"
          ],
          [
            "دین",
            "dee-ni",
            "deen"
          ],
          [
            "اسلام",
            "is-laam",
            "is-laam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پیرو",
            "pay-ra-wi",
            "pay-raw"
          ],
          [
            "شریعت",
            "sha-ree-a-ti",
            "sha-ree-at"
          ],
          [
            "محمدی",
            "mu-ham-ma-dee",
            "mu-ham-ma-dee"
          ],
          [
            "معرفی",
            "mu-ar-ri-fee",
            "mu-ar-ri-fee"
          ],
          [
            "کرد.",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "een amr sa-ba-bi qu-wa-ti mus-li-meen wa shi-kas-ti ma-na-wee-yi kuf-faar shud.",
        "mean": "This strengthened the Muslims and brought a moral defeat to the unbelievers.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "امر",
            "amr",
            "amr"
          ],
          [
            "سبب",
            "sa-ba-bi",
            "sa-bab"
          ],
          [
            "قوت",
            "qu-wa-ti",
            "qu-wat"
          ],
          [
            "مسلمین",
            "mus-li-meen",
            "mus-li-meen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شکست",
            "shi-kas-ti",
            "shi-kast",
            "shi-kas-tan"
          ],
          [
            "معنوی",
            "ma-na-wee-yi",
            "ma-na-wee"
          ],
          [
            "کفار",
            "kuf-faar",
            "kuf-faar"
          ],
          [
            "شد.",
            "shud",
            "shud",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "bil-aa-khi-ra dee-ni mu-qad-da-si is-laam wa ta-lee-maa-ti zin-da-gee-saa-zi aan bar qu-loo-bi mu-ghul-haa neez ta-seer gu-zaasht",
        "mean": "Finally, the holy religion of Islam and its life-giving teachings also influenced the hearts of the Mongols,",
        "words": [
          [
            "بالآخره",
            "bil-aa-khi-ra",
            "bil-aa-khi-ra"
          ],
          [
            "دین",
            "dee-ni",
            "deen"
          ],
          [
            "مقدس",
            "mu-qad-da-si",
            "mu-qad-das"
          ],
          [
            "اسلام",
            "is-laam",
            "is-laam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تعلیمات",
            "ta-lee-maa-ti",
            "ta-lee-maat"
          ],
          [
            "زنده‌گی‌ساز",
            "zin-da-gee-saa-zi",
            "zin-da-gee-saaz"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "قلوب",
            "qu-loo-bi",
            "qu-loob"
          ],
          [
            "مغول‌ها",
            "mu-ghul-haa",
            "mu-ghul-haa"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "تأثیر",
            "ta-seer",
            "ta-seer"
          ],
          [
            "گذاشت",
            "gu-zaasht",
            "gu-zaasht",
            "gu-zaash-tan"
          ]
        ]
      },
      {
        "say": "wa baa ee-maan aa-war-da-ni “ghaa-zaan” a-mee-ri mu-ghul wa u-ma-raa-yi oo, qud-rat wa qu-wa-ti mu-sul-maa-naan fu-zo-nee gi-rift wa dee-ni is-laam du-baa-ra ras-mee-yat yaaft.",
        "mean": "and when Ghazan, the Mongol emir, and his commanders accepted the faith, the Muslims' power and strength increased and Islam again gained official status.",
        "words": [
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
            "ایمان",
            "ee-maan",
            "ee-maan"
          ],
          [
            "آوردن",
            "aa-war-da-ni",
            "aa-war-dan"
          ],
          [
            "«غازان»",
            "ghaa-zaan",
            "ghaa-zaan"
          ],
          [
            "امیر",
            "a-mee-ri",
            "a-meer"
          ],
          [
            "مغول",
            "mu-ghul",
            "mu-ghul"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امرای",
            "u-ma-raa-yi",
            "u-ma-raa"
          ],
          [
            "او،",
            "oo",
            "oo"
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
            "قوت",
            "qu-wa-ti",
            "qu-wat"
          ],
          [
            "مسلمانان",
            "mu-sul-maa-naan",
            "mu-sul-maa-naan"
          ],
          [
            "فزونی",
            "fu-zo-nee",
            "fu-zo-nee"
          ],
          [
            "گرفت",
            "gi-rift",
            "gi-rift",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دین",
            "dee-ni",
            "deen"
          ],
          [
            "اسلام",
            "is-laam",
            "is-laam"
          ],
          [
            "دوباره",
            "du-baa-ra",
            "du-baa-ra"
          ],
          [
            "رسمیت",
            "ras-mee-yat",
            "ras-mee-yat"
          ],
          [
            "یافت.",
            "yaaft",
            "yaaft",
            "yaaf-tan"
          ]
        ]
      },
      {
        "say": "ghaa-zaan khaan ba su-koot baa but-pa-ras-tee ba mu-khaa-li-fat par-daakht wa baa takh-ree-bi but-haa wa but-khaa-na-haa ba but-pa-ras-taan amr kard ki yaa ba is-laam dar-aa-yand wa yaa ba sar-za-meen-haa-yi-yi as-lee-yi khud baaz-gar-dand wa yaa a-qaa-yi-di khud raa iz-haar na-ku-nand.",
        "mean": "Ghazan Khan openly opposed idolatry; he destroyed idols and temples and ordered idolaters either to accept Islam, return to their original lands, or refrain from expressing their beliefs.",
        "words": [
          [
            "غازان",
            "ghaa-zaan",
            "ghaa-zaan"
          ],
          [
            "خان",
            "khaan",
            "khaan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سکوت",
            "su-koot",
            "su-koot"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "بت‌پرستی",
            "but-pa-ras-tee",
            "but-pa-ras-tee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مخالفت",
            "mu-khaa-li-fat",
            "mu-khaa-li-fat"
          ],
          [
            "پرداخت",
            "par-daakht",
            "par-daakht",
            "par-daakh-tan"
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
            "تخریب",
            "takh-ree-bi",
            "takh-reeb"
          ],
          [
            "بت‌ها",
            "but-haa",
            "but-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بتخانه‌ها",
            "but-khaa-na-haa",
            "but-khaa-na-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بت‌پرستان",
            "but-pa-ras-taan",
            "but-pa-ras-taan"
          ],
          [
            "امر",
            "amr",
            "amr"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "kar-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "اسلام",
            "is-laam",
            "is-laam"
          ],
          [
            "درآیند",
            "dar-aa-yand",
            "dar-aa-yand",
            "dar-aa-ma-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سرزمین‌های",
            "sar-za-meen-haa-yi-yi",
            "sar-za-meen-haa-yi"
          ],
          [
            "اصلی",
            "as-lee-yi",
            "as-lee"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "بازگردند",
            "baaz-gar-dand",
            "baaz-gar-dand",
            "baaz-gash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "عقاید",
            "a-qaa-yi-di",
            "a-qaa-yid"
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
            "اظهار",
            "iz-haar",
            "iz-haar"
          ],
          [
            "نکنند.",
            "na-ku-nand",
            "na-ku-nand",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar-gee-ro-daa-ri ham-la-yi mu-ghul, u-da-yee az ma-shaa-yi-khi bu-zurg; maa-nand: shaykh naj-mud-deen kob-raa, shaykh fa-ree-dud-deen at-taar ba sha-haa-dat ra-see-dand",
        "mean": "Amid the turmoil of the Mongol invasion, a number of great religious leaders, including Shaykh Najmuddin Kubra and Shaykh Fariduddin Attar, were martyred,",
        "words": [
          [
            "درگیرودار",
            "dar-gee-ro-daa-ri",
            "dar-gee-ro-daar"
          ],
          [
            "حملهٔ",
            "ham-la-yi",
            "ham-la"
          ],
          [
            "مغول،",
            "mu-ghul",
            "mu-ghul"
          ],
          [
            "عده‌یی",
            "u-da-yee",
            "u-da-yee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مشایخ",
            "ma-shaa-yi-khi",
            "ma-shaa-yikh"
          ],
          [
            "بزرگ؛",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "شیخ",
            "shaykh",
            "shaykh"
          ],
          [
            "نجم‌الدین",
            "naj-mud-deen",
            "naj-mud-deen"
          ],
          [
            "کبری،",
            "kob-raa",
            "kob-raa"
          ],
          [
            "شیخ",
            "shaykh",
            "shaykh"
          ],
          [
            "فریدالدین",
            "fa-ree-dud-deen",
            "fa-ree-dud-deen"
          ],
          [
            "عطار",
            "at-taar",
            "at-taar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "شهادت",
            "sha-haa-dat",
            "sha-haa-dat"
          ],
          [
            "رسیدند",
            "ra-see-dand",
            "ra-see-dand",
            "ra-see-dan"
          ]
        ]
      },
      {
        "say": "wa bar-khay ba pa-naah-gaah-haa-yi-yi far-han-gee-yi ja-deed; maa-nand: aa-si-yaa-yi-yi sa-gheer, shaam wa faars wa kir-maan, bi-laa-di sa-nad wa hind raf-tand.",
        "mean": "while some went to new cultural refuges such as Asia Minor, Syria, Fars, Kerman, and the lands of Sindh and India.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "برخی",
            "bar-khay",
            "bar-khay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "پناهگاه‌های",
            "pa-naah-gaah-haa-yi-yi",
            "pa-naah-gaah-haa-yi"
          ],
          [
            "فرهنگی",
            "far-han-gee-yi",
            "far-han-gee"
          ],
          [
            "جدید؛",
            "ja-deed",
            "ja-deed"
          ],
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "آسیای",
            "aa-si-yaa-yi-yi",
            "aa-si-yaa-yi"
          ],
          [
            "صغیر،",
            "sa-gheer",
            "sa-gheer"
          ],
          [
            "شام",
            "shaam",
            "shaam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فارس",
            "faars",
            "faars"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کرمان،",
            "kir-maan",
            "kir-maan"
          ],
          [
            "بلاد",
            "bi-laa-di",
            "bi-laad"
          ],
          [
            "سند",
            "sa-nad",
            "sa-nad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هند",
            "hind",
            "hind"
          ],
          [
            "رفتند.",
            "raf-tand",
            "raf-tand",
            "raf-tan"
          ]
        ]
      },
      {
        "say": "mar-du-mi mu-sul-maan ki dar a-sa-ri shi-kas-ti lash-ka-ri-yaa-ni mu-ghul, roo-hee-ya-yi aa-naan neez sakht aa-seeb dee-da bood; ba ta-saw-wuf roy aa-war-dand.",
        "mean": "The Muslim people, whose spirit had been badly damaged by defeat at the hands of the Mongol armies, turned to Sufism.",
        "words": [
          [
            "مردم",
            "mar-du-mi",
            "mar-dum"
          ],
          [
            "مسلمان",
            "mu-sul-maan",
            "mu-sul-maan"
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
            "اثر",
            "a-sa-ri",
            "a-sar"
          ],
          [
            "شکست",
            "shi-kas-ti",
            "shi-kast",
            "shi-kas-tan"
          ],
          [
            "لشکریان",
            "lash-ka-ri-yaa-ni",
            "lash-ka-ri-yaan"
          ],
          [
            "مغول،",
            "mu-ghul",
            "mu-ghul"
          ],
          [
            "روحیهٔ",
            "roo-hee-ya-yi",
            "roo-hee-ya-yi"
          ],
          [
            "آنان",
            "aa-naan",
            "aa-naan"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "سخت",
            "sakht",
            "sakht"
          ],
          [
            "آسیب",
            "aa-seeb",
            "aa-seeb"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-dan"
          ],
          [
            "بود؛",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تصوف",
            "ta-saw-wuf",
            "ta-saw-wuf"
          ],
          [
            "روی",
            "roy",
            "roy"
          ],
          [
            "آوردند.",
            "aa-war-dand",
            "aa-war-dand",
            "aa-war-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "shi'-ri faa-ri-see-yi da-ree dar een daw-ra neez hu-zoor daasht, qa-see-da-haa kam shu-da bood wa gha-zal fu-zo-nee may-gi-rift, daa-staan-haa neez guf-ta shud",
        "mean": "Dari Persian poetry remained present in this period; qasidas became fewer, ghazals increased, and stories were also told.",
        "words": [
          [
            "شعر",
            "shi'-ri",
            "shi'r"
          ],
          [
            "فارسی",
            "faa-ri-see-yi",
            "faa-ri-see"
          ],
          [
            "دری",
            "da-ree",
            "da-ree"
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
            "دوره",
            "daw-ra",
            "daw-ra"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "حضور",
            "hu-zoor",
            "hu-zoor"
          ],
          [
            "داشت،",
            "daasht",
            "daasht",
            "daash-tan"
          ],
          [
            "قصیده‌ها",
            "qa-see-da-haa",
            "qa-see-da-haa"
          ],
          [
            "کم",
            "kam",
            "kam"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
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
            "غزل",
            "gha-zal",
            "gha-zal"
          ],
          [
            "فزونی",
            "fu-zo-nee",
            "fu-zo-nee"
          ],
          [
            "می‌گرفت،",
            "may-gi-rift",
            "may-gi-rift",
            "gi-rif-tan"
          ],
          [
            "داستان‌ها",
            "daa-staan-haa",
            "daa-staan-haa"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "گفته",
            "guf-ta",
            "guf-ta",
            "guf-tan"
          ],
          [
            "شد",
            "shud",
            "shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "wa naz-mi ir-faa-nee aa-meekh-ta baa ma-baa-hi-si tar-bi-ya-tee wa ij-ti-maa-ee, ra-waa-ji baysh-tar yaaft.",
        "mean": "Mystical verse blended with educational and social subjects became more widespread.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نظم",
            "naz-mi",
            "nazm"
          ],
          [
            "عرفانی",
            "ir-faa-nee",
            "ir-faa-nee"
          ],
          [
            "آمیخته",
            "aa-meekh-ta",
            "aa-meekh-ta",
            "aa-meekh-tan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "مباحث",
            "ma-baa-hi-si",
            "ma-baa-his"
          ],
          [
            "تربیتی",
            "tar-bi-ya-tee",
            "tar-bi-ya-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اجتماعی،",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "رواج",
            "ra-waa-ji",
            "ra-waaj"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "یافت.",
            "yaaft",
            "yaaft",
            "yaaf-tan"
          ]
        ]
      },
      {
        "say": "maw-laa-naa ja-laal-ud-deen mu-ham-mad bal-khee ma-roof ba maw-laa-naa-yi roo-mee, man-zo-ma-yi mu-fas-sa-li ma-jaa-mi-yi ir-faa-nee raa su-rood ki taa im-roz ma-roof ast; ham-chu-naan shuh-rat khaa-had daasht.",
        "mean": "Mawlana Jalaluddin Muhammad Balkhi, known as Rumi, composed a long poem of mystical teachings that remains famous today and will continue to be renowned.",
        "words": [
          [
            "مولانا",
            "maw-laa-naa",
            "maw-laa-naa"
          ],
          [
            "جلال‌الدین",
            "ja-laal-ud-deen",
            "ja-laal-ud-deen"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "بلخی",
            "bal-khee",
            "bal-khee"
          ],
          [
            "معروف",
            "ma-roof",
            "ma-roof"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مولانای",
            "maw-laa-naa-yi",
            "maw-laa-naa"
          ],
          [
            "رومی،",
            "roo-mee",
            "roo-mee"
          ],
          [
            "منظومهٔ",
            "man-zo-ma-yi",
            "man-zo-ma-yi"
          ],
          [
            "مفصل",
            "mu-fas-sa-li",
            "mu-fas-sal"
          ],
          [
            "مجامع",
            "ma-jaa-mi-yi",
            "ma-jaa-mi"
          ],
          [
            "عرفانی",
            "ir-faa-nee",
            "ir-faa-nee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "سرود",
            "su-rood",
            "su-rood",
            "su-roo-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "امروز",
            "im-roz",
            "im-roz"
          ],
          [
            "معروف",
            "ma-roof",
            "ma-roof"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ],
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "شهرت",
            "shuh-rat",
            "shuh-rat"
          ],
          [
            "خواهد",
            "khaa-had",
            "khaa-had",
            "khaas-tan"
          ],
          [
            "داشت.",
            "daasht",
            "daasht",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar ki-naa-ri sa-dee, maw-laa-naa, fakh-rud-deen i-raa-qee wa dee-ga-raan, haa-fi-zi shee-raa-zee dar paa-yaa-ni een ahd ba hay-see-ya-ti gha-zal-sa-raa-yi-yi bi-si-yaar ma-roof ta-baa-ruz may-ku-nad wa shuh-ra-ti jaa-wi-daa-nee ba-dast may-aa-wa-rad.",
        "mean": "Alongside Sa'di, Mawlana, Fakhruddin Iraqi and others, Hafiz Shirazi emerged at the end of this age as a very famous ghazal poet and gained lasting renown.",
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
            "سعدی،",
            "sa-dee",
            "sa-dee"
          ],
          [
            "مولانا،",
            "maw-laa-naa",
            "maw-laa-naa"
          ],
          [
            "فخرالدین",
            "fakh-rud-deen",
            "fakh-rud-deen"
          ],
          [
            "عراقی",
            "i-raa-qee",
            "i-raa-qee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دیگران،",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "حافظ",
            "haa-fi-zi",
            "haa-fiz"
          ],
          [
            "شیرازی",
            "shee-raa-zee",
            "shee-raa-zee"
          ],
          [
            "در",
            "dar",
            "dar"
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
            "عهد",
            "ahd",
            "ahd"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "حیث",
            "hay-see-ya-ti",
            "hay-see-yat"
          ],
          [
            "غزلسرای",
            "gha-zal-sa-raa-yi-yi",
            "gha-zal-sa-raa-yi"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ],
          [
            "معروف",
            "ma-roof",
            "ma-roof"
          ],
          [
            "تبارز",
            "ta-baa-ruz",
            "ta-baa-ruz"
          ],
          [
            "می‌کند",
            "may-ku-nad",
            "may-ku-nad",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شهرت",
            "shuh-ra-ti",
            "shuh-rat"
          ],
          [
            "جاویدانی",
            "jaa-wi-daa-nee",
            "jaa-wi-daa-nee"
          ],
          [
            "به‌دست",
            "ba-dast",
            "ba-dast"
          ],
          [
            "می‌آورد.",
            "may-aa-wa-rad",
            "may-aa-wa-rad",
            "aa-war-dan"
          ]
        ]
      }
    ]
  ]
});
