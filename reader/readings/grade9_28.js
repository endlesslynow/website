/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 28, book pages 177-178, PDF pages 184-185 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «امیرحبیب االله خان» is written «امیر حبیب‌الله خان»; «حبیب‌االله» is written «حبیب‌الله»; «اساسی(سرمقاله)» is written «اساسی (سرمقاله)»; «وشیوهٔ» is written «و شیوهٔ»; «برضد» is written «بر ضد»; «درآخرین» is written «در آخرین»; «درختم» is written «در ختم».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-28',
  group: 'Dari · grade 9',
  label: 'Lesson 28',
  name: "si-raaj-ul-akh-baar",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_28.jpg',
    alt: "Open newspapers lying on top of each other."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_28.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "si-raaj-ul-akh-baar":                                  { fa: "سراج‌الاخبار", mean: "Siraj al-Akhbar, The Lamp of the News, the newspaper Mahmud Tarzi edited" },
    "ja-ree-da":                                            { fa: "جریده", mean: "journal, newspaper" },
    "af-ghaa-ni-ya":                                        { fa: "افغانیه", mean: "Afghan (in the newspaper's full name)" },
    "baad#after":                                           { fa: "بعد", say: "baad", mean: "after, then" },
    "az":                                                   { fa: "از", mean: "from, of" },
    "sham-sun-na-haar":                                     { fa: "شمس‌النهار", mean: "Shams al-Nahar, The Sun of the Day, the first Afghan newspaper, from 1873" },
    "du-wo-meen":                                           { fa: "دومین", mean: "second" },
    "ja-ree-da-yay":                                        { fa: "جریده‌یی", mean: "a newspaper" },
    "bood":                                                 { fa: "بود", mean: "was" },
    "bu-dan":                                               { fa: "بودن", mean: "to be" },
    "ki":                                                   { fa: "که", mean: "that, which, who" },
    "dar":                                                  { fa: "در", mean: "in" },
    "saal":                                                 { fa: "سال", mean: "year" },
    "yak ha-zaa-ru du-sa-du na-wad":                        { fa: "۱۲۹۰", mean: "1290" },
    "hij-ree#year":                                         { fa: "هجری", say: "hij-ree", mean: "of the Islamic calendar, which counts from the Prophet's move to Medina in 622" },
    "hij-ree":                                              { fa: "ه", mean: "short for hij-ree, of the Islamic calendar" },
    "hij-ree sham-see":                                     { fa: "ه ش", mean: "Hijri Shamsi, of the solar calendar" },
    "sham-see":                                             { fa: "ش", mean: "short for sham-see, solar (of the Afghan solar calendar)" },
    "za-maan":                                              { fa: "زمان", mean: "time" },
    "hu-koo-mat":                                           { fa: "حکومت", mean: "government, rule" },
    "a-meer":                                               { fa: "امیر", mean: "emir, prince; also part of names" },
    "ha-bee-bul-laah":                                      { fa: "حبیب‌الله", mean: "Habibullah" },
    "khaan":                                                { fa: "خان", mean: "khan, a title; part of names" },
    "nashr":                                                { fa: "نشر", mean: "publishing" },
    "nashr gar-deed":                                       { fa: "نشر گردید", mean: "was published" },
    "nashr gar-dee-dan":                                    { fa: "نشر گردیدن", mean: "to be published" },
    "gar-deed":                                             { fa: "گردید", mean: "became" },
    "gar-dee-dan":                                          { fa: "گردیدن", mean: "to become, to turn" },
    "si-raaj":                                              { fa: "سراج", mean: "Siraj, lamp" },
    "si-raaj al-akh-baar":                                  { fa: "سراج الاخبار", mean: "Siraj al-Akhbar, The Lamp of the News, a newspaper" },
    "al-akh-baar":                                          { fa: "الاخبار", mean: "al-Akhbar, the news" },
    "mar-du-mee":                                           { fa: "مردمی", mean: "humanity, kindness" },
    "wa":                                                   { fa: "و", mean: "and" },
    "na-wish-ta-haa-yi":                                    { fa: "نوشته‌های", mean: "writings" },
    "aan":                                                  { fa: "آن", mean: "that" },
    "maw-rid":                                              { fa: "مورد", mean: "object, case" },
    "maw-ri-di pa-san-di mar-dum":                          { fa: "مورد پسند مردم", mean: "liked by the people" },
    "pa-sand":                                              { fa: "پسند", mean: "liking" },
    "mar-dum":                                              { fa: "مردم", mean: "people" },
    "ast":                                                  { fa: "است", mean: "is" },
    "een":                                                  { fa: "این", mean: "this" },
    "az na-za-ri":                                          { fa: "از نظر", mean: "in the view of" },
    "na-zar":                                               { fa: "نظر", mean: "sight, view; opinion" },
    "muh-ta-waa":                                           { fa: "محتوا", mean: "content" },
    "maw-zoo-haa-yay":                                      { fa: "موضوع‌هایی", mean: "subjects" },
    "choon":                                                { fa: "چون", mean: "like, as; when; because" },
    "ma-qaa-la":                                            { fa: "مقاله", mean: "article" },
    "a-saa-see":                                            { fa: "اساسی", mean: "basic" },
    "sar-ma-qaa-la":                                        { fa: "سرمقاله", mean: "editorial" },
    "ha-waa-dis":                                           { fa: "حوادث", mean: "cases, events" },
    "daa-khi-lee":                                          { fa: "داخلی", mean: "internal, inner" },
    "khaa-ri-jee":                                          { fa: "خارجی", mean: "foreign" },
    "klee-sha":                                             { fa: "کلیشه", mean: "page, plate (klee-sha-yi a-da-bi-yaat, the literary page)" },
    "a-da-bee-yaat":                                        { fa: "ادبیات", mean: "literature" },
    "su-toon-haa":                                          { fa: "ستون‌ها", mean: "pillars, columns" },
    "ikh-ti-saa-see":                                       { fa: "اختصاصی", mean: "special" },
    "ilm":                                                  { fa: "علم", mean: "knowledge, learning" },
    "fan":                                                  { fa: "فن", mean: "art, skill" },
    "akh-laaq":                                             { fa: "اخلاق", mean: "character, manners, morals" },
    "mu-saa-fi-rat":                                        { fa: "مسافرت", mean: "travel" },
    "si-yaa-hat":                                           { fa: "سیاحت", mean: "touring, travel" },
    "daa-nish":                                             { fa: "دانش", mean: "knowledge" },
    "hik-mat":                                              { fa: "حکمت", mean: "philosophy, wisdom" },
    "ma-taa-lib":                                           { fa: "مطالب", mean: "subjects, material" },
    "as-ka-ree":                                            { fa: "عسکری", mean: "military" },
    "maw-zoo-aat":                                          { fa: "موضوعات", mean: "subjects, topics" },
    "maw-zoo":                                              { fa: "موضوع", mean: "subject, point" },
    "taa-ree-khee":                                         { fa: "تاریخی", mean: "historical" },
    "hu-qoo-qee":                                           { fa: "حقوقی", mean: "rights; legal" },
    "hu-qooq":                                              { fa: "حقوق", mean: "rights" },
    "raa":                                                  { fa: "را", mean: "marks the object of the verb" },
    "dar bar may-gi-rift":                                  { fa: "در بر می‌گرفت", mean: "included" },
    "dar bar gi-rif-tan":                                   { fa: "در بر گرفتن", mean: "to include" },
    "bar":                                                  { fa: "بر", mean: "on, upon" },
    "may-gi-rift":                                          { fa: "می‌گرفت", mean: "took place, was taking" },
    "gi-rif-tan":                                           { fa: "گرفتن", mean: "to take" },
    "u-loom":                                               { fa: "علوم", mean: "sciences" },
    "a-dab":                                                { fa: "ادب", mean: "literature, learning" },
    "si-yaa-sat":                                           { fa: "سیاست", mean: "politics" },
    "baa":                                                  { fa: "با", mean: "with" },
    "rawsh":                                                { fa: "روش", mean: "method, way" },
    "shay-wa":                                              { fa: "شیوه", mean: "style, way" },
    "way-zha":                                              { fa: "ویژه", mean: "special (ba way-zha, especially)" },
    "bahs":                                                 { fa: "بحث", mean: "discussion, debate" },
    "bahs may-kard":                                        { fa: "بحث می‌کرد", mean: "discussed" },
    "bahs kar-dan":                                         { fa: "بحث کردن", mean: "to discuss" },
    "may-kard":                                             { fa: "می‌کرد", mean: "used to do, kept doing" },
    "kar-dan":                                              { fa: "کردن", mean: "to do, to make" },
    "ba":                                                   { fa: "به", mean: "to" },
    "sar-mu-har-ri-ree":                                    { fa: "سرمحرری", mean: "being chief editor" },
    "mah-mood":                                             { fa: "محمود", mean: "Mahmud" },
    "tar-zee":                                              { fa: "طرزی", mean: "Tarzi" },
    "ham-kaa-ree":                                          { fa: "همکاری", mean: "working together" },
    "ab-dur-rah-maan":                                      { fa: "عبدالرحمان", mean: "Abdur Rahman" },
    "lo-deen":                                              { fa: "لودین", mean: "Ludin" },
    "ab-dul-haa-dee":                                       { fa: "عبدالهادی", mean: "Abdul Hadi" },
    "daa-wee":                                              { fa: "داوی", mean: "Dawi" },
    "dee-ga-raan":                                          { fa: "دیگران", mean: "others" },
    "ba nashr may-ra-seed":                                 { fa: "به نشر می‌رسید", mean: "was published" },
    "ba nashr ra-see-dan":                                  { fa: "به نشر رسیدن", mean: "to be published" },
    "may-ra-seed":                                          { fa: "می‌رسید", mean: "reached; (with ba nashr) was published" },
    "ra-see-dan":                                           { fa: "رسیدن", mean: "to arrive, to reach" },
    "ha-daf":                                               { fa: "هدف", mean: "goal" },
    "um-da-yi":                                             { fa: "عمدهٔ", mean: "main, major" },
    "ham-kaa-raan":                                         { fa: "همکاران", mean: "colleagues" },
    "qa-la-mee":                                            { fa: "قلمی", mean: "of the pen, writing" },
    "ro-shan":                                              { fa: "روشن", mean: "bright, light" },
    "ro-shan saa-zee-yi":                                   { fa: "روشن سازی", mean: "enlightening" },
    "saa-zee":                                              { fa: "سازی", mean: "making (ro-shan saa-zee, enlightening)" },
    "az-haan":                                              { fa: "اذهان", mean: "minds" },
    "tab-leegh":                                            { fa: "تبلیغ", mean: "spreading, promoting" },
    "tarz":                                                 { fa: "طرز", mean: "style, manner" },
    "fikr":                                                 { fa: "فکر", mean: "thought" },
    "ja-haan":                                              { fa: "جهان", mean: "world" },
    "qarn":                                                 { fa: "قرن", mean: "century" },
    "bees-tum":                                             { fa: "بیستم", mean: "twentieth" },
    "aan-haa":                                              { fa: "آن‌ها", mean: "they, them" },
    "ta-lab":                                               { fa: "طلب", mean: "seeking" },
    "fa-raa-gi-rif-tan":                                    { fa: "فراگرفتن", mean: "to learn" },
    "far-hang":                                             { fa: "فرهنگ", mean: "culture" },
    "ja-deed":                                              { fa: "جدید", mean: "new" },
    "baa-laa-bur-dan":                                      { fa: "بالابردن", mean: "raising" },
    "sat-h":                                                { fa: "سطح", mean: "level" },
    "aa-gaa-hee":                                           { fa: "آگاهی", mean: "awareness, knowledge" },
    "u-moo-mee":                                            { fa: "عمومی", mean: "general, public" },
    "fahm":                                                 { fa: "فهم", mean: "understanding" },
    "dark":                                                 { fa: "درک", mean: "understanding" },
    "ma-saa-yil":                                           { fa: "مسایل", mean: "issues, matters" },
    "naw-saa-zee":                                          { fa: "نوسازی", mean: "modernizing" },
    "baaz-saa-zee":                                         { fa: "بازسازی", mean: "rebuilding" },
    "a-ham-mee-yat":                                        { fa: "اهمیت", mean: "importance" },
    "takh-neek":                                            { fa: "تخنیک", mean: "technique" },
    "zi-raa-at":                                            { fa: "زراعت", mean: "farming" },
    "ta-raq-qee":                                           { fa: "ترقی", mean: "progress" },
    "san-at":                                               { fa: "صنعت", mean: "industry" },
    "ti-jaa-rat":                                           { fa: "تجارت", mean: "trade" },
    "da-wat":                                               { fa: "دعوت", mean: "invitation, call" },
    "tash-weeq":                                            { fa: "تشویق", mean: "encouraging" },
    "rah-na-maa-yee":                                       { fa: "رهنمایی", mean: "guidance" },
    "tah-reer":                                             { fa: "تحریر", mean: "writing" },
    "ni-gaa-rish":                                          { fa: "نگارش", mean: "writing" },
    "saa-da":                                               { fa: "ساده", mean: "simple, plain" },
    "il-mee":                                               { fa: "علمی", mean: "scholarly, scientific" },
    "waa-rid":                                              { fa: "وارد", mean: "entering, entered" },
    "waa-ri-di zu-baan kard":                               { fa: "وارد زبان کرد", mean: "brought into the language" },
    "zu-baan":                                              { fa: "زبان", mean: "language; tongue" },
    "kard":                                                 { fa: "کرد", mean: "did, made" },
    "sabk":                                                 { fa: "سبک", mean: "style" },
    "naw":                                                  { fa: "نو", mean: "new" },
    "ra-waaj":                                              { fa: "رواج", mean: "spread, prevalence" },
    "ra-waaj daad":                                         { fa: "رواج داد", mean: "made popular" },
    "ra-waaj daa-dan":                                      { fa: "رواج دادن", mean: "to make popular, to spread" },
    "daad":                                                 { fa: "داد", mean: "gave" },
    "daa-dan":                                              { fa: "دادن", mean: "to give" },
    "ma-qaa-la-haa":                                        { fa: "مقاله‌ها", mean: "articles" },
    "an-day-sha-haa":                                       { fa: "اندیشه‌ها", mean: "thoughts" },
    "mu-him":                                               { fa: "مهم", mean: "important" },
    "ha-yaa-tay":                                           { fa: "حیاتی", mean: "life (with -ay)" },
    "maa-nand":                                             { fa: "مانند", mean: "like" },
    "wa-tan-dos-tee":                                       { fa: "وطن‌دوستی", mean: "patriotism" },
    "it-ti-haad":                                           { fa: "اتحاد", mean: "unity" },
    "aa-zaa-dee":                                           { fa: "آزادی", mean: "freedom" },
    "su-khan":                                              { fa: "سخن", mean: "speech, words" },
    "su-khan may-guft":                                     { fa: "سخن می‌گفت", mean: "spoke" },
    "su-khan guf-tan":                                      { fa: "سخن گفتن", mean: "to speak" },
    "may-guft":                                             { fa: "می‌گفت", mean: "spoke, was saying" },
    "guf-tan":                                              { fa: "گفتن", mean: "to say, to tell" },
    "a-lay-hi":                                             { fa: "علیه", mean: "against" },
    "a-lay-hi-yi":                                          { fa: "علیه", mean: "against" },
    "zulm":                                                 { fa: "ظلم", mean: "oppression, injustice" },
    "is-ti-maar":                                           { fa: "استعمار", mean: "colonialism" },
    "tash-weeq na-mo-da":                                   { fa: "تشویق نموده", mean: "having encouraged" },
    "tash-weeq na-mo-dan":                                  { fa: "تشویق نمودن", mean: "to encourage" },
    "na-mo-da":                                             { fa: "نموده", mean: "having done" },
    "na-mo-dan":                                            { fa: "نمودن", mean: "to do; to show; to seem" },
    "aa-naan":                                              { fa: "آنان", mean: "they, them" },
    "aa-zaa-dee khaa-hee":                                  { fa: "آزادی خواهی", mean: "the wish for freedom" },
    "khaa-hee":                                             { fa: "خواهی", mean: "you want" },
    "khaas-tan":                                            { fa: "خواستن", mean: "to want" },
    "da-wat may-na-mood":                                   { fa: "دعوت می‌نمود", mean: "called" },
    "da-wat na-mo-dan":                                     { fa: "دعوت نمودن", mean: "to invite" },
    "may-na-mood":                                          { fa: "می‌نمود", mean: "did" },
    "na-tan-haa":                                           { fa: "نه‌تنها", mean: "not only" },
    "rah-na-maay":                                          { fa: "رهنمای", mean: "guide" },
    "fik-ree":                                              { fa: "فکری", mean: "thought, intellectual" },
    "tar-bi-ya-tee":                                        { fa: "تربیتی", mean: "of education" },
    "ja-waa-naan":                                          { fa: "جوانان", mean: "young people" },
    "daa-khil":                                             { fa: "داخل", mean: "inside" },
    "kish-war":                                             { fa: "کشور", mean: "country" },
    "bal-ki":                                               { fa: "بلکه", mean: "but rather" },
    "af-kaar":                                              { fa: "افکار", mean: "thoughts, ideas" },
    "mar-du-maan":                                          { fa: "مردمان", mean: "people" },
    "is-laah":                                              { fa: "اصلاح", mean: "reform, correction" },
    "is-laah ta-lab":                                       { fa: "اصلاح طلب", mean: "reform-minded" },
    "raw-shan-fikr":                                        { fa: "روشنفکر", mean: "educated, enlightened" },
    "kish-war-haa":                                         { fa: "کشورها", mean: "countries" },
    "ham-saa-ya":                                           { fa: "همسایه", mean: "neighbor; neighboring" },
    "man-ti-qa":                                            { fa: "منطقه", mean: "area, region" },
    "neez":                                                 { fa: "نیز", mean: "also, too" },
    "a-sar":                                                { fa: "اثر", mean: "work (of writing or art)" },
    "a-sar gu-zaasht":                                      { fa: "اثر گذاشت", mean: "had an effect" },
    "a-sar gu-zaash-tan":                                   { fa: "اثر گذاشتن", mean: "to have an effect" },
    "gu-zaasht":                                            { fa: "گذاشت", mean: "put, named" },
    "gu-zaash-tan":                                         { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "ha-la-qaat":                                           { fa: "حلقات", mean: "circles" },
    "raw-shan-fik-ree":                                     { fa: "روشنفکری", mean: "of educated people" },
    "bu-khaa-raa":                                          { fa: "بخارا", mean: "Bukhara" },
    "sa-mar-qand":                                          { fa: "سمرقند", mean: "Samarkand" },
    "faars":                                                { fa: "فارس", mean: "Fars, Persia" },
    "hind":                                                 { fa: "هند", mean: "India" },
    "tur-ki-ya":                                            { fa: "ترکیه", mean: "Turkey" },
    "mesr":                                                 { fa: "مصر", mean: "Egypt" },
    "ba ghawr":                                             { fa: "به غور", mean: "carefully" },
    "ghawr":                                                { fa: "غور", mean: "depth (ba ghawr, carefully)" },
    "mu-taa-li-a":                                          { fa: "مطالعه", mean: "study, reading" },
    "mu-taa-li-a may-kar-dand":                             { fa: "مطالعه می‌کردند", mean: "read, studied" },
    "mu-taa-li-a kar-dan":                                  { fa: "مطالعه کردن", mean: "to read, to study" },
    "may-kar-dand":                                         { fa: "می‌کردند", mean: "used to do" },
    "il-haam":                                              { fa: "الهام", mean: "inspiration" },
    "il-haam may-gi-rif-tand":                              { fa: "الهام می‌گرفتند", mean: "took inspiration" },
    "il-haam gi-rif-tan":                                   { fa: "الهام گرفتن", mean: "to take inspiration" },
    "may-gi-rif-tand":                                      { fa: "می‌گرفتند", mean: "took; (with qa-raar) came to be" },
    "mus-tash-ri-qaan":                                     { fa: "مستشرقان", mean: "orientalists, western scholars of the East" },
    "na-wee-san-da-gaan":                                   { fa: "نویسنده‌گان", mean: "writers" },
    "ja-raa-yid":                                           { fa: "جراید", mean: "newspapers" },
    "aa-si-yaa":                                            { fa: "آسیا", mean: "mill" },
    "da-ra-ja":                                             { fa: "درجه", mean: "rank, degree" },
    "du-wum":                                               { fa: "دوم", mean: "second" },
    "hi-saab":                                              { fa: "حساب", mean: "calculation, account" },
    "hi-saab kar-da boo-dand":                              { fa: "حساب کرده بودند", mean: "had counted" },
    "hi-saab kar-dan":                                      { fa: "حساب کردن", mean: "to count" },
    "kar-da":                                               { fa: "کرده", mean: "done" },
    "boo-dand":                                             { fa: "بودند", mean: "were" },
    "am-maa":                                               { fa: "اما", mean: "but" },
    "daw-lat-haa":                                          { fa: "دولت‌ها", mean: "governments" },
    "daw-lat":                                              { fa: "دولت", mean: "state, government" },
    "ro-si-ya":                                             { fa: "روسیه", mean: "Russia" },
    "ta-zaa-ree":                                           { fa: "تزاری", mean: "of the tsars" },
    "bar-ta-naa-wee":                                       { fa: "برتانوی", mean: "British" },
    "a-sar bakh-shee-yi":                                   { fa: "اثر بخشی", mean: "influence" },
    "bakh-shee":                                            { fa: "بخشی", mean: "a part" },
    "bakhsh":                                               { fa: "بخش", mean: "Bakhsh; part" },
    "roz":                                                  { fa: "روز", mean: "day" },
    "roz af-zoo-ni":                                        { fa: "روز افزون", mean: "growing" },
    "af-zoon":                                              { fa: "افزون", mean: "increasing, more" },
    "ba ha-raas uf-taa-dand":                               { fa: "به هراس افتادند", mean: "became alarmed" },
    "ba ha-raas uf-taa-dan":                                { fa: "به هراس افتادن", mean: "to become afraid" },
    "ha-raas":                                              { fa: "هراس", mean: "fear" },
    "uf-taa-dand":                                          { fa: "افتادند", mean: "fell" },
    "uf-taa-dan":                                           { fa: "افتادن", mean: "to fall" },
    "bar zi-di":                                            { fa: "بر ضد", mean: "against" },
    "zid":                                                  { fa: "ضد", mean: "anti-, against" },
    "ma-naa-fi":                                            { fa: "منافع", mean: "interests, benefits" },
    "khud":                                                 { fa: "خود", mean: "own; self" },
    "dee-dand":                                             { fa: "دیدند", mean: "saw" },
    "dee-dan":                                              { fa: "دیدن", mean: "to see; seeing" },
    "az een ro":                                            { fa: "از این رو", mean: "for this reason" },
    "ro":                                                   { fa: "رو", mean: "face" },
    "baar-haa":                                             { fa: "بارها", mean: "many times" },
    "ta-qaa-zaa":                                           { fa: "تقاضا", mean: "request" },
    "ji-law-gee-ree":                                       { fa: "جلوگیری", mean: "prevention, stopping" },
    "si-yaa-see":                                           { fa: "سیاسی", mean: "political" },
    "na-mo-dand":                                           { fa: "نمودند", mean: "they did" },
    "dast":                                                 { fa: "دست", mean: "hand" },
    "dast an-dar-kaa-ri":                                   { fa: "دست اندرکار", mean: "involved, working on" },
    "an-dar-kaar":                                          { fa: "اندرکار", mean: "at work (dast an-dar-kaar, involved)" },
    "zayr":                                                 { fa: "زیر", mean: "under" },
    "zay-ri baa-ri fi-shaar-haa-yi si-yaa-see na-raf-tand": { fa: "زیر بار فشارهای سیاسی نرفتند", mean: "did not give in to political pressure - literally did not go under the load of political pressures" },
    "baar":                                                 { fa: "بار", mean: "time, occasion; load" },
    "fi-shaar-haa":                                         { fa: "فشارها", mean: "pressures" },
    "na-raf-tand":                                          { fa: "نرفتند", mean: "did not go" },
    "raf-tan":                                              { fa: "رفتن", mean: "to go" },
    "lahn":                                                 { fa: "لحن", mean: "tone" },
    "tund":                                                 { fa: "تند", mean: "fast, strong" },
    "tund-tar":                                             { fa: "تندتر", mean: "sharper" },
    "saakh-tand":                                           { fa: "ساختند", mean: "made" },
    "saakh-tan":                                            { fa: "ساختن", mean: "to make, to build" },
    "amr":                                                  { fa: "امر", mean: "order, command" },
    "baa-is":                                               { fa: "باعث", mean: "cause" },
    "baa-is shud":                                          { fa: "باعث شد", mean: "caused" },
    "shud":                                                 { fa: "شد", mean: "became; was" },
    "shu-dan":                                              { fa: "شدن", mean: "to become" },
    "taa":                                                  { fa: "تا", mean: "so that; until; to" },
    "wu-rood":                                              { fa: "ورود", mean: "entry, entering" },
    "mu-ta-waq-qif":                                        { fa: "متوقف", mean: "stopped" },
    "mu-ta-waq-qif gar-dad":                                { fa: "متوقف گردد", mean: "be stopped" },
    "mu-ta-waq-qif gar-dee-dan":                            { fa: "متوقف گردیدن", mean: "to be stopped" },
    "gar-dad":                                              { fa: "گردد", mean: "become" },
    "pas":                                                  { fa: "پس", mean: "then, so" },
    "shu-maa-ra":                                           { fa: "شماره", mean: "issue; number" },
    "sha-shum":                                             { fa: "ششم", mean: "sixth" },
    "hash-tum":                                             { fa: "هشتم", mean: "eighth" },
    "du":                                                   { fa: "دو", mean: "two" },
    "mu-har-rir":                                           { fa: "محرر", mean: "editor" },
    "zin-daa-nee":                                          { fa: "زندانی", mean: "prisoner, imprisoned" },
    "zin-daa-nee shu-dand":                                 { fa: "زندانی شدند", mean: "were imprisoned" },
    "zin-daa-nee shu-dan":                                  { fa: "زندانی شدن", mean: "to be imprisoned" },
    "shu-dand":                                             { fa: "شدند", mean: "they became" },
    "tan-haa":                                              { fa: "تنها", mean: "only; alone" },
    "maand":                                                { fa: "ماند", mean: "remained" },
    "maan-dan":                                             { fa: "ماندن", mean: "to remain, to stay" },
    "ham-waa-ra":                                           { fa: "همواره", mean: "always" },
    "ta-laash":                                             { fa: "تلاش", mean: "effort, trying" },
    "ta-laash may-kard":                                    { fa: "تلاش می‌کرد", mean: "kept trying" },
    "ta-laash kar-dan":                                     { fa: "تلاش کردن", mean: "to try" },
    "bu-land":                                              { fa: "بلند", mean: "high, tall, loud" },
    "ni-gah-daa-rad":                                       { fa: "نگه‌دارد", mean: "keep" },
    "ni-gah-daash-tan":                                     { fa: "نگه‌داشتن", mean: "to keep" },
    "dush-waa-ree-haa":                                     { fa: "دشواری‌ها", mean: "difficulties" },
    "goo-naa-goon":                                         { fa: "گوناگون", mean: "various" },
    "ba had-dee":                                           { fa: "به حدی", mean: "so great" },
    "had-dee":                                              { fa: "حدی", mean: "an extent" },
    "dee-gar":                                              { fa: "دیگر", mean: "other; more; anymore" },
    "pur-kaar":                                             { fa: "پرکار", mean: "hard-working" },
    "na-ta-waa-nist":                                       { fa: "نتوانست", mean: "could not" },
    "ta-waa-nis-tan":                                       { fa: "توانستن", mean: "to be able, can" },
    "ha-ma":                                                { fa: "همه", mean: "all, every" },
    "fi-shaar":                                             { fa: "فشار", mean: "pressure" },
    "um-da-ta-reen":                                        { fa: "عمده‌ترین", mean: "greatest, main" },
    "ta-ham-mul":                                           { fa: "تحمل", mean: "bearing, enduring" },
    "ta-ham-mul ku-nad":                                    { fa: "تحمل کند", mean: "bear" },
    "ta-ham-mul kar-dan":                                   { fa: "تحمل کردن", mean: "to bear" },
    "ku-nad":                                               { fa: "کند", mean: "does" },
    "naa-gu-zeer":                                          { fa: "ناگزیر", mean: "obliged, inevitably" },
    "mu-ta-waq-qif kard":                                   { fa: "متوقف کرد", mean: "stopped" },
    "mu-ta-waq-qif kar-dan":                                { fa: "متوقف کردن", mean: "to stop" },
    "jaa-lib":                                              { fa: "جالب", mean: "interesting" },
    "jaa-lib ast":                                          { fa: "جالب است", mean: "it is interesting" },
    "bi-daa-need":                                          { fa: "بدانید", mean: "know (said to more than one)" },
    "daa-nis-tan":                                          { fa: "دانستن", mean: "to know" },
    "aa-khi-reen":                                          { fa: "آخرین", mean: "last" },
    "chan-deen":                                            { fa: "چندین", mean: "several" },
    "jaa":                                                  { fa: "جا", mean: "place" },
    "khatm":                                                { fa: "ختم", mean: "ending" },
    "ma-zaa-meen":                                          { fa: "مضامین", mean: "articles, contents" },
    "lafz":                                                 { fa: "لفظ", mean: "word" },
    "baa-qee":                                              { fa: "باقی", mean: "remaining" },
    "baa-qee daa-rad":                                      { fa: "باقی دارد", mean: "to be continued - literally it has a remainder" },
    "daa-rad":                                              { fa: "دارد", mean: "has" },
    "daash-tan":                                            { fa: "داشتن", mean: "to have" },
    "aa-ma-da":                                             { fa: "آمده", mean: "come" },
    "aa-ma-dan":                                            { fa: "آمدن", mean: "to come" },
    "daa-rad-haa":                                          { fa: "داردها", mean: "“to be continueds” (daa-rad + -haa)" },
    "ham-chu-naan":                                         { fa: "همچنان", mean: "likewise, just so" },
    "baa-qee maand":                                        { fa: "باقی ماند", mean: "remained" },
    "baa-qee maan-dan":                                     { fa: "باقی ماندن", mean: "to remain" },
    "maa-sheen":                                            { fa: "ماشین", mean: "machine (maa-shee-ni chaap, printing press)" },
    "chaap":                                                { fa: "چاپ", mean: "printing" },
    "na-raft":                                              { fa: "نرفت", mean: "did not go" }
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
    "say": "si-raaj-ul-akh-baar",
    "mean": "Siraj al-Akhbar",
    "words": [
      [
        "سراج‌الاخبار",
        "si-raaj-ul-akh-baar",
        "si-raaj-ul-akh-baar"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "ja-ree-da-yi si-raaj-ul-akh-baa-ri af-ghaa-ni-ya baad az ja-ree-da-yi sham-sun-na-haar, du-wo-meen ja-ree-da-yay bood ki dar saa-li yak ha-zaa-ru du-sa-du na-wad hij-ree hij-ree. sham-see. dar za-maa-ni hu-koo-ma-ti a-meer ha-bee-bul-laah khaan nashr gar-deed.",
        "mean": "The newspaper Siraj al-Akhbar-i Afghaniya was the second newspaper, after Shams al-Nahar, and was published in 1290 of the solar calendar (1911), in the reign of Amir Habibullah Khan.",
        "words": [
          [
            "جریدهٔ",
            "ja-ree-da-yi",
            "ja-ree-da"
          ],
          [
            "سراج‌الاخبار",
            "si-raaj-ul-akh-baa-ri",
            "si-raaj-ul-akh-baar"
          ],
          [
            "افغانیه",
            "af-ghaa-ni-ya",
            "af-ghaa-ni-ya"
          ],
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
            "جریدهٔ",
            "ja-ree-da-yi",
            "ja-ree-da"
          ],
          [
            "شمس‌النهار،",
            "sham-sun-na-haar",
            "sham-sun-na-haar"
          ],
          [
            "دومین",
            "du-wo-meen",
            "du-wo-meen"
          ],
          [
            "جریده‌یی",
            "ja-ree-da-yay",
            "ja-ree-da-yay"
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
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۱۲۹۰",
            "yak ha-zaa-ru du-sa-du na-wad",
            "yak ha-zaa-ru du-sa-du na-wad"
          ],
          [
            "هجری",
            "hij-ree",
            "hij-ree#year"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree",
            "hij-ree sham-see"
          ],
          [
            "ش.",
            "sham-see",
            "sham-see",
            "hij-ree sham-see"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زمان",
            "za-maa-ni",
            "za-maan"
          ],
          [
            "حکومت",
            "hu-koo-ma-ti",
            "hu-koo-mat"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "حبیب‌الله",
            "ha-bee-bul-laah",
            "ha-bee-bul-laah"
          ],
          [
            "خان",
            "khaan",
            "khaan"
          ],
          [
            "نشر",
            "nashr",
            "nashr",
            "nashr gar-deed",
            "nashr gar-dee-dan"
          ],
          [
            "گردید.",
            "gar-deed",
            "gar-deed",
            "nashr gar-deed",
            "gar-dee-dan",
            "nashr gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "si-raaj al-akh-baar ja-ree-da-yi mar-du-mee bood wa na-wish-ta-haa-yi-yi aan maw-ri-di pa-san-di mar-dum ast.",
        "mean": "Siraj al-Akhbar was a newspaper for the people, and its writing is liked by the people.",
        "words": [
          [
            "سراج",
            "si-raaj",
            "si-raaj",
            "si-raaj al-akh-baar"
          ],
          [
            "الاخبار",
            "al-akh-baar",
            "al-akh-baar",
            "si-raaj al-akh-baar"
          ],
          [
            "جریدهٔ",
            "ja-ree-da-yi",
            "ja-ree-da"
          ],
          [
            "مردمی",
            "mar-du-mee",
            "mar-du-mee"
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
            "نوشته‌های",
            "na-wish-ta-haa-yi-yi",
            "na-wish-ta-haa-yi"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di pa-san-di mar-dum"
          ],
          [
            "پسند",
            "pa-san-di",
            "pa-sand",
            "maw-ri-di pa-san-di mar-dum"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum",
            "maw-ri-di pa-san-di mar-dum"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "een ja-ree-da az na-za-ri muh-ta-waa maw-zoo-haa-yay; choon: ma-qaa-la-yi a-saa-see (sar-ma-qaa-la), ha-waa-di-si daa-khi-lee wa khaa-ri-jee, klee-sha-yi a-da-bee-yaat, su-toon-haa-yi ikh-ti-saa-see; choon: ilm wa fa-ni akh-laaq, mu-saa-fi-rat wa si-yaa-hat, daa-nish wa hik-mat, ma-taa-li-bi as-ka-ree, maw-zoo-aa-ti taa-ree-khee wa hu-qoo-qee raa dar bar may-gi-rift wa az u-loom wa a-dab wa si-yaa-sat baa rawsh wa shay-wa-yi way-zha bahs may-kard.",
        "mean": "In content this newspaper included subjects such as an editorial, home and foreign news, a literary page, and special columns such as ethics, travel, knowledge and wisdom, military matters, and history and law, and it discussed science, literature and politics in its own way.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "جریده",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "از",
            "az",
            "az",
            "az na-za-ri"
          ],
          [
            "نظر",
            "na-za-ri",
            "na-zar",
            "az na-za-ri"
          ],
          [
            "محتوا",
            "muh-ta-waa",
            "muh-ta-waa"
          ],
          [
            "موضوع‌هایی؛",
            "maw-zoo-haa-yay",
            "maw-zoo-haa-yay"
          ],
          [
            "چون:",
            "choon",
            "choon"
          ],
          [
            "مقالهٔ",
            "ma-qaa-la-yi",
            "ma-qaa-la"
          ],
          [
            "اساسی",
            "a-saa-see",
            "a-saa-see"
          ],
          [
            "(سرمقاله)،",
            "sar-ma-qaa-la",
            "sar-ma-qaa-la"
          ],
          [
            "حوادث",
            "ha-waa-di-si",
            "ha-waa-dis"
          ],
          [
            "داخلی",
            "daa-khi-lee",
            "daa-khi-lee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خارجی،",
            "khaa-ri-jee",
            "khaa-ri-jee"
          ],
          [
            "کلیشهٔ",
            "klee-sha-yi",
            "klee-sha"
          ],
          [
            "ادبیات،",
            "a-da-bee-yaat",
            "a-da-bee-yaat"
          ],
          [
            "ستون‌های",
            "su-toon-haa-yi",
            "su-toon-haa"
          ],
          [
            "اختصاصی؛",
            "ikh-ti-saa-see",
            "ikh-ti-saa-see"
          ],
          [
            "چون:",
            "choon",
            "choon"
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
            "فن",
            "fa-ni",
            "fan"
          ],
          [
            "اخلاق،",
            "akh-laaq",
            "akh-laaq"
          ],
          [
            "مسافرت",
            "mu-saa-fi-rat",
            "mu-saa-fi-rat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سیاحت،",
            "si-yaa-hat",
            "si-yaa-hat"
          ],
          [
            "دانش",
            "daa-nish",
            "daa-nish"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حکمت،",
            "hik-mat",
            "hik-mat"
          ],
          [
            "مطالب",
            "ma-taa-li-bi",
            "ma-taa-lib"
          ],
          [
            "عسکری،",
            "as-ka-ree",
            "as-ka-ree"
          ],
          [
            "موضوعات",
            "maw-zoo-aa-ti",
            "maw-zoo-aat",
            "maw-zoo"
          ],
          [
            "تاریخی",
            "taa-ree-khee",
            "taa-ree-khee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حقوقی",
            "hu-qoo-qee",
            "hu-qoo-qee",
            "hu-qooq"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar bar may-gi-rift",
            "dar bar gi-rif-tan"
          ],
          [
            "بر",
            "bar",
            "bar",
            "dar bar may-gi-rift",
            "dar bar gi-rif-tan"
          ],
          [
            "می‌گرفت",
            "may-gi-rift",
            "may-gi-rift",
            "dar bar may-gi-rift",
            "gi-rif-tan",
            "dar bar gi-rif-tan"
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
            "علوم",
            "u-loom",
            "u-loom",
            "ilm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادب",
            "a-dab",
            "a-dab"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "روش",
            "rawsh",
            "rawsh"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شیوهٔ",
            "shay-wa-yi",
            "shay-wa"
          ],
          [
            "ویژه",
            "way-zha",
            "way-zha"
          ],
          [
            "بحث",
            "bahs",
            "bahs",
            "bahs may-kard",
            "bahs kar-dan"
          ],
          [
            "می‌کرد.",
            "may-kard",
            "may-kard",
            "bahs may-kard",
            "kar-dan",
            "bahs kar-dan"
          ]
        ]
      },
      {
        "say": "een ja-ree-da ba sar-mu-har-ri-ree-yi mah-moo-di tar-zee wa ham-kaa-ree-yi ab-dur-rah-maan lo-deen wa ab-dul-haa-dee daa-wee wa dee-ga-raan ba nashr may-ra-seed.",
        "mean": "This newspaper was published with Mahmud Tarzi as chief editor, working with Abdul Rahman Ludin, Abdul Hadi Dawi and others.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "جریده",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سرمحرری",
            "sar-mu-har-ri-ree-yi",
            "sar-mu-har-ri-ree"
          ],
          [
            "محمود",
            "mah-moo-di",
            "mah-mood"
          ],
          [
            "طرزی",
            "tar-zee",
            "tar-zee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "همکاری",
            "ham-kaa-ree-yi",
            "ham-kaa-ree"
          ],
          [
            "عبدالرحمان",
            "ab-dur-rah-maan",
            "ab-dur-rah-maan"
          ],
          [
            "لودین",
            "lo-deen",
            "lo-deen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عبدالهادی",
            "ab-dul-haa-dee",
            "ab-dul-haa-dee"
          ],
          [
            "داوی",
            "daa-wee",
            "daa-wee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دیگران",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba nashr may-ra-seed",
            "ba nashr ra-see-dan"
          ],
          [
            "نشر",
            "nashr",
            "nashr",
            "ba nashr may-ra-seed",
            "ba nashr ra-see-dan"
          ],
          [
            "می‌رسید.",
            "may-ra-seed",
            "may-ra-seed",
            "ba nashr may-ra-seed",
            "ra-see-dan",
            "ba nashr ra-see-dan"
          ]
        ]
      },
      {
        "say": "ha-da-fi um-da-yi si-raaj al-akh-baar wa ham-kaa-raa-ni qa-la-mee-yi aan ro-shan saa-zee-yi az-haa-ni mar-dum wa tab-lee-ghi tar-zi fik-ri ja-haa-ni qar-ni bees-tum ba mar-dum bood",
        "mean": "The main aim of Siraj al-Akhbar and its writers was to enlighten people's minds and to spread the twentieth-century way of thinking among them,",
        "words": [
          [
            "هدف",
            "ha-da-fi",
            "ha-daf"
          ],
          [
            "عمدهٔ",
            "um-da-yi",
            "um-da-yi"
          ],
          [
            "سراج",
            "si-raaj",
            "si-raaj",
            "si-raaj al-akh-baar"
          ],
          [
            "الاخبار",
            "al-akh-baar",
            "al-akh-baar",
            "si-raaj al-akh-baar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "همکاران",
            "ham-kaa-raa-ni",
            "ham-kaa-raan"
          ],
          [
            "قلمی",
            "qa-la-mee-yi",
            "qa-la-mee"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "روشن",
            "ro-shan",
            "ro-shan",
            "ro-shan saa-zee-yi"
          ],
          [
            "سازی",
            "saa-zee-yi",
            "saa-zee",
            "ro-shan saa-zee-yi"
          ],
          [
            "اذهان",
            "az-haa-ni",
            "az-haan"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تبلیغ",
            "tab-lee-ghi",
            "tab-leegh"
          ],
          [
            "طرز",
            "tar-zi",
            "tarz"
          ],
          [
            "فکر",
            "fik-ri",
            "fikr"
          ],
          [
            "جهان",
            "ja-haa-ni",
            "ja-haan"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn"
          ],
          [
            "بیستم",
            "bees-tum",
            "bees-tum"
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
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "wa aan-haa raa ba ta-la-bi ilm wa fa-raa-gi-rif-ta-ni daa-nish wa far-han-gi ja-deed, baa-laa-bur-da-ni sat-h-i aa-gaa-hee-yi u-moo-mee, fahm wa dar-ki ma-saa-yil, naw-saa-zee wa baaz-saa-zee, a-ham-mee-ya-ti takh-nee-ki zi-raa-at, ta-raq-qee-yi san-at, ti-jaa-rat, da-wat, tash-weeq wa rah-na-maa-yee may-kard.",
        "mean": "and it invited, encouraged and guided them to seek science, to learn new knowledge and culture, to raise general awareness, to understand issues, to modernize and rebuild, and to see the importance of farming technique and of progress in industry and trade.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
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
            "طلب",
            "ta-la-bi",
            "ta-lab"
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
            "فراگرفتن",
            "fa-raa-gi-rif-ta-ni",
            "fa-raa-gi-rif-tan"
          ],
          [
            "دانش",
            "daa-nish",
            "daa-nish"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرهنگ",
            "far-han-gi",
            "far-hang"
          ],
          [
            "جدید،",
            "ja-deed",
            "ja-deed"
          ],
          [
            "بالابردن",
            "baa-laa-bur-da-ni",
            "baa-laa-bur-dan"
          ],
          [
            "سطح",
            "sat-h-i",
            "sat-h"
          ],
          [
            "آگاهی",
            "aa-gaa-hee-yi",
            "aa-gaa-hee"
          ],
          [
            "عمومی،",
            "u-moo-mee",
            "u-moo-mee"
          ],
          [
            "فهم",
            "fahm",
            "fahm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "درک",
            "dar-ki",
            "dark"
          ],
          [
            "مسایل،",
            "ma-saa-yil",
            "ma-saa-yil"
          ],
          [
            "نوسازی",
            "naw-saa-zee",
            "naw-saa-zee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بازسازی،",
            "baaz-saa-zee",
            "baaz-saa-zee"
          ],
          [
            "اهمیت",
            "a-ham-mee-ya-ti",
            "a-ham-mee-yat"
          ],
          [
            "تخنیک",
            "takh-nee-ki",
            "takh-neek"
          ],
          [
            "زراعت،",
            "zi-raa-at",
            "zi-raa-at"
          ],
          [
            "ترقی",
            "ta-raq-qee-yi",
            "ta-raq-qee"
          ],
          [
            "صنعت،",
            "san-at",
            "san-at"
          ],
          [
            "تجارت،",
            "ti-jaa-rat",
            "ti-jaa-rat"
          ],
          [
            "دعوت،",
            "da-wat",
            "da-wat"
          ],
          [
            "تشویق",
            "tash-weeq",
            "tash-weeq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رهنمایی",
            "rah-na-maa-yee",
            "rah-na-maa-yee"
          ],
          [
            "می‌کرد.",
            "may-kard",
            "may-kard",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "een ja-ree-da, tar-zi tah-reer wa ni-gaa-ri-shi saa-da wa il-mee raa waa-ri-di zu-baan kard wa sab-ki naw raa ra-waaj daad.",
        "mean": "This newspaper brought a simple, scientific way of writing into the language and made the new style popular.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "جریده،",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "طرز",
            "tar-zi",
            "tarz"
          ],
          [
            "تحریر",
            "tah-reer",
            "tah-reer"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نگارش",
            "ni-gaa-ri-shi",
            "ni-gaa-rish"
          ],
          [
            "ساده",
            "saa-da",
            "saa-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "علمی",
            "il-mee",
            "il-mee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "وارد",
            "waa-ri-di",
            "waa-rid",
            "waa-ri-di zu-baan kard"
          ],
          [
            "زبان",
            "zu-baan",
            "zu-baan",
            "waa-ri-di zu-baan kard"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "waa-ri-di zu-baan kard",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سبک",
            "sab-ki",
            "sabk"
          ],
          [
            "نو",
            "naw",
            "naw"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "رواج",
            "ra-waaj",
            "ra-waaj",
            "ra-waaj daad",
            "ra-waaj daa-dan"
          ],
          [
            "داد.",
            "daad",
            "daad",
            "ra-waaj daad",
            "daa-dan",
            "ra-waaj daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ma-qaa-la-haa-yi si-raaj al-akh-baar az an-day-sha-haa-yi mu-hi-mi ha-yaa-tay; maa-nand: wa-tan-dos-tee, it-ti-haad wa aa-zaa-dee su-khan may-guft wa mar-dum raa a-lay-hi-yi zulm wa is-ti-maar tash-weeq na-mo-da wa aa-naan raa ba aa-zaa-dee khaa-hee da-wat may-na-mood.",
        "mean": "The articles of Siraj al-Akhbar spoke of vital ideas such as patriotism, unity and freedom, encouraged people against oppression and colonialism, and called them to seek freedom.",
        "words": [
          [
            "مقاله‌های",
            "ma-qaa-la-haa-yi",
            "ma-qaa-la-haa"
          ],
          [
            "سراج",
            "si-raaj",
            "si-raaj",
            "si-raaj al-akh-baar"
          ],
          [
            "الاخبار",
            "al-akh-baar",
            "al-akh-baar",
            "si-raaj al-akh-baar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اندیشه‌های",
            "an-day-sha-haa-yi",
            "an-day-sha-haa"
          ],
          [
            "مهم",
            "mu-hi-mi",
            "mu-him"
          ],
          [
            "حیاتی؛",
            "ha-yaa-tay",
            "ha-yaa-tay"
          ],
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "وطن‌دوستی،",
            "wa-tan-dos-tee",
            "wa-tan-dos-tee"
          ],
          [
            "اتحاد",
            "it-ti-haad",
            "it-ti-haad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آزادی",
            "aa-zaa-dee",
            "aa-zaa-dee"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan",
            "su-khan may-guft",
            "su-khan guf-tan"
          ],
          [
            "می‌گفت",
            "may-guft",
            "may-guft",
            "su-khan may-guft",
            "guf-tan",
            "su-khan guf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "علیه",
            "a-lay-hi-yi",
            "a-lay-hi",
            "a-lay-hi-yi"
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
            "استعمار",
            "is-ti-maar",
            "is-ti-maar"
          ],
          [
            "تشویق",
            "tash-weeq",
            "tash-weeq",
            "tash-weeq na-mo-da",
            "tash-weeq na-mo-dan"
          ],
          [
            "نموده",
            "na-mo-da",
            "na-mo-da",
            "tash-weeq na-mo-da",
            "na-mo-dan",
            "tash-weeq na-mo-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آنان",
            "aa-naan",
            "aa-naan"
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
            "آزادی",
            "aa-zaa-dee",
            "aa-zaa-dee",
            "aa-zaa-dee khaa-hee"
          ],
          [
            "خواهی",
            "khaa-hee",
            "khaa-hee",
            "aa-zaa-dee khaa-hee",
            "khaas-tan"
          ],
          [
            "دعوت",
            "da-wat",
            "da-wat",
            "da-wat may-na-mood",
            "da-wat na-mo-dan"
          ],
          [
            "می‌نمود.",
            "may-na-mood",
            "may-na-mood",
            "da-wat may-na-mood",
            "na-mo-dan",
            "da-wat na-mo-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "si-raaj-ul-akh-baar na-tan-haa rah-na-maa-yi fik-ree wa tar-bi-ya-tee-yi ja-waa-naan dar daa-khi-li kish-war bood; bal-ki dar af-kaa-ri mar-du-maa-ni is-laah ta-lab wa raw-shan-fik-ri kish-war-haa-yi ham-saa-ya wa man-ti-qa neez a-sar gu-zaasht.",
        "mean": "Siraj al-Akhbar was not only an intellectual and educational guide for young people inside the country; it also influenced the thinking of reform-minded and educated people in neighboring countries and the region.",
        "words": [
          [
            "سراج‌الاخبار",
            "si-raaj-ul-akh-baar",
            "si-raaj-ul-akh-baar"
          ],
          [
            "نه‌تنها",
            "na-tan-haa",
            "na-tan-haa"
          ],
          [
            "رهنمای",
            "rah-na-maa-yi",
            "rah-na-maay"
          ],
          [
            "فکری",
            "fik-ree",
            "fik-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تربیتی",
            "tar-bi-ya-tee-yi",
            "tar-bi-ya-tee"
          ],
          [
            "جوانان",
            "ja-waa-naan",
            "ja-waa-naan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "داخل",
            "daa-khi-li",
            "daa-khil"
          ],
          [
            "کشور",
            "kish-war",
            "kish-war"
          ],
          [
            "بود؛",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "افکار",
            "af-kaa-ri",
            "af-kaar",
            "fikr"
          ],
          [
            "مردمان",
            "mar-du-maa-ni",
            "mar-du-maan"
          ],
          [
            "اصلاح",
            "is-laah",
            "is-laah",
            "is-laah ta-lab"
          ],
          [
            "طلب",
            "ta-lab",
            "ta-lab",
            "is-laah ta-lab"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روشنفکر",
            "raw-shan-fik-ri",
            "raw-shan-fikr"
          ],
          [
            "کشورهای",
            "kish-war-haa-yi",
            "kish-war-haa"
          ],
          [
            "همسایه",
            "ham-saa-ya",
            "ham-saa-ya"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "منطقه",
            "man-ti-qa",
            "man-ti-qa"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "اثر",
            "a-sar",
            "a-sar",
            "a-sar gu-zaasht",
            "a-sar gu-zaash-tan"
          ],
          [
            "گذاشت.",
            "gu-zaasht",
            "gu-zaasht",
            "a-sar gu-zaasht",
            "gu-zaash-tan",
            "a-sar gu-zaash-tan"
          ]
        ]
      },
      {
        "say": "ha-la-qaa-ti raw-shan-fik-ree-yi bu-khaa-raa, sa-mar-qand, faars, hind, tur-ki-ya wa mesr aan raa ba ghawr mu-taa-li-a may-kar-dand wa az aan il-haam may-gi-rif-tand.",
        "mean": "Educated circles in Bukhara, Samarkand, Persia, India, Turkey and Egypt read it carefully and took inspiration from it.",
        "words": [
          [
            "حلقات",
            "ha-la-qaa-ti",
            "ha-la-qaat"
          ],
          [
            "روشنفکری",
            "raw-shan-fik-ree-yi",
            "raw-shan-fik-ree"
          ],
          [
            "بخارا،",
            "bu-khaa-raa",
            "bu-khaa-raa"
          ],
          [
            "سمرقند،",
            "sa-mar-qand",
            "sa-mar-qand"
          ],
          [
            "فارس،",
            "faars",
            "faars"
          ],
          [
            "هند،",
            "hind",
            "hind"
          ],
          [
            "ترکیه",
            "tur-ki-ya",
            "tur-ki-ya"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مصر",
            "mesr",
            "mesr"
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
            "به",
            "ba",
            "ba",
            "ba ghawr"
          ],
          [
            "غور",
            "ghawr",
            "ghawr",
            "ba ghawr"
          ],
          [
            "مطالعه",
            "mu-taa-li-a",
            "mu-taa-li-a",
            "mu-taa-li-a may-kar-dand",
            "mu-taa-li-a kar-dan"
          ],
          [
            "می‌کردند",
            "may-kar-dand",
            "may-kar-dand",
            "mu-taa-li-a may-kar-dand",
            "kar-dan",
            "mu-taa-li-a kar-dan"
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "الهام",
            "il-haam",
            "il-haam",
            "il-haam may-gi-rif-tand",
            "il-haam gi-rif-tan"
          ],
          [
            "می‌گرفتند.",
            "may-gi-rif-tand",
            "may-gi-rif-tand",
            "il-haam may-gi-rif-tand",
            "gi-rif-tan",
            "il-haam gi-rif-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mus-tash-ri-qaan wa na-wee-san-da-gaan, si-raaj-ul-akh-baar raa baad az ja-raa-yi-di tur-ki-ya dar aa-si-yaa ba da-ra-ja-yi du-wum hi-saab kar-da boo-dand;",
        "mean": "Orientalists and writers had ranked Siraj al-Akhbar second in Asia, after the newspapers of Turkey;",
        "words": [
          [
            "مستشرقان",
            "mus-tash-ri-qaan",
            "mus-tash-ri-qaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نویسنده‌گان،",
            "na-wee-san-da-gaan",
            "na-wee-san-da-gaan"
          ],
          [
            "سراج‌الاخبار",
            "si-raaj-ul-akh-baar",
            "si-raaj-ul-akh-baar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
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
            "جراید",
            "ja-raa-yi-di",
            "ja-raa-yid"
          ],
          [
            "ترکیه",
            "tur-ki-ya",
            "tur-ki-ya"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آسیا",
            "aa-si-yaa",
            "aa-si-yaa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "درجهٔ",
            "da-ra-ja-yi",
            "da-ra-ja"
          ],
          [
            "دوم",
            "du-wum",
            "du-wum"
          ],
          [
            "حساب",
            "hi-saab",
            "hi-saab",
            "hi-saab kar-da boo-dand",
            "hi-saab kar-dan"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "hi-saab kar-da boo-dand",
            "kar-dan",
            "hi-saab kar-dan"
          ],
          [
            "بودند؛",
            "boo-dand",
            "boo-dand",
            "hi-saab kar-da boo-dand",
            "bu-dan",
            "hi-saab kar-dan"
          ]
        ]
      },
      {
        "say": "am-maa daw-lat-haa-yi ro-si-ya-yi ta-zaa-ree wa hin-di bar-ta-naa-wee az a-sar bakh-shee-yi roz af-zoo-ni aan dar af-kaa-ri mar-dum ba ha-raas uf-taa-dand wa ja-ree-da raa bar zi-di ma-naa-fi-yi khud dee-dand.",
        "mean": "but the governments of Tsarist Russia and British India grew alarmed at its growing influence on people's thinking, and saw the newspaper as against their interests.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "دولت‌های",
            "daw-lat-haa-yi",
            "daw-lat-haa",
            "daw-lat"
          ],
          [
            "روسیهٔ",
            "ro-si-ya-yi",
            "ro-si-ya"
          ],
          [
            "تزاری",
            "ta-zaa-ree",
            "ta-zaa-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هند",
            "hin-di",
            "hind"
          ],
          [
            "برتانوی",
            "bar-ta-naa-wee",
            "bar-ta-naa-wee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اثر",
            "a-sar",
            "a-sar",
            "a-sar bakh-shee-yi"
          ],
          [
            "بخشی",
            "bakh-shee-yi",
            "bakh-shee",
            "a-sar bakh-shee-yi",
            "bakhsh"
          ],
          [
            "روز",
            "roz",
            "roz",
            "roz af-zoo-ni"
          ],
          [
            "افزون",
            "af-zoo-ni",
            "af-zoon",
            "roz af-zoo-ni"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "افکار",
            "af-kaa-ri",
            "af-kaar",
            "fikr"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba ha-raas uf-taa-dand",
            "ba ha-raas uf-taa-dan"
          ],
          [
            "هراس",
            "ha-raas",
            "ha-raas",
            "ba ha-raas uf-taa-dand",
            "ba ha-raas uf-taa-dan"
          ],
          [
            "افتادند",
            "uf-taa-dand",
            "uf-taa-dand",
            "ba ha-raas uf-taa-dand",
            "uf-taa-dan",
            "ba ha-raas uf-taa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جریده",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar zi-di"
          ],
          [
            "ضد",
            "zi-di",
            "zid",
            "bar zi-di"
          ],
          [
            "منافع",
            "ma-naa-fi-yi",
            "ma-naa-fi"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "دیدند.",
            "dee-dand",
            "dee-dand",
            "dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "az een ro baar-haa az a-meer ha-bee-bul-laah khaan ta-qaa-zaa-yi ji-law-gee-ree-yi nash-ri ma-qaa-la-haa-yi si-yaa-see-yi ja-ree-da raa na-mo-dand;",
        "mean": "So they asked Amir Habibullah Khan many times to stop publishing the newspaper's political articles;",
        "words": [
          [
            "از",
            "az",
            "az",
            "az een ro"
          ],
          [
            "این",
            "een",
            "een",
            "az een ro"
          ],
          [
            "رو",
            "ro",
            "ro",
            "az een ro"
          ],
          [
            "بارها",
            "baar-haa",
            "baar-haa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "حبیب‌الله",
            "ha-bee-bul-laah",
            "ha-bee-bul-laah"
          ],
          [
            "خان",
            "khaan",
            "khaan"
          ],
          [
            "تقاضای",
            "ta-qaa-zaa-yi",
            "ta-qaa-zaa"
          ],
          [
            "جلوگیری",
            "ji-law-gee-ree-yi",
            "ji-law-gee-ree"
          ],
          [
            "نشر",
            "nash-ri",
            "nashr"
          ],
          [
            "مقاله‌های",
            "ma-qaa-la-haa-yi",
            "ma-qaa-la-haa"
          ],
          [
            "سیاسی",
            "si-yaa-see-yi",
            "si-yaa-see"
          ],
          [
            "جریده",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نمودند؛",
            "na-mo-dand",
            "na-mo-dand",
            "na-mo-dan"
          ]
        ]
      },
      {
        "say": "am-maa ja-waa-naa-ni dast an-dar-kaa-ri ja-ree-da, na-tan-haa zay-ri baa-ri fi-shaar-haa-yi si-yaa-see na-raf-tand; bal-ki lah-ni ja-ree-da raa tund wa tund-tar saakh-tand ki een amr baa-is shud taa wu-roo-di ja-ree-da ba hind mu-ta-waq-qif gar-dad.",
        "mean": "but the young people working on the newspaper not only did not give in to political pressure, they made its tone sharper and sharper, and this caused the newspaper to be stopped from entering India.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "جوانان",
            "ja-waa-naa-ni",
            "ja-waa-naan"
          ],
          [
            "دست",
            "dast",
            "dast",
            "dast an-dar-kaa-ri"
          ],
          [
            "اندرکار",
            "an-dar-kaa-ri",
            "an-dar-kaar",
            "dast an-dar-kaa-ri"
          ],
          [
            "جریده،",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "نه‌تنها",
            "na-tan-haa",
            "na-tan-haa"
          ],
          [
            "زیر",
            "zay-ri",
            "zayr",
            "zay-ri baa-ri fi-shaar-haa-yi si-yaa-see na-raf-tand"
          ],
          [
            "بار",
            "baa-ri",
            "baar",
            "zay-ri baa-ri fi-shaar-haa-yi si-yaa-see na-raf-tand"
          ],
          [
            "فشارهای",
            "fi-shaar-haa-yi",
            "fi-shaar-haa",
            "zay-ri baa-ri fi-shaar-haa-yi si-yaa-see na-raf-tand"
          ],
          [
            "سیاسی",
            "si-yaa-see",
            "si-yaa-see",
            "zay-ri baa-ri fi-shaar-haa-yi si-yaa-see na-raf-tand"
          ],
          [
            "نرفتند؛",
            "na-raf-tand",
            "na-raf-tand",
            "zay-ri baa-ri fi-shaar-haa-yi si-yaa-see na-raf-tand",
            "raf-tan"
          ],
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "لحن",
            "lah-ni",
            "lahn"
          ],
          [
            "جریده",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "تند",
            "tund",
            "tund"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تندتر",
            "tund-tar",
            "tund-tar"
          ],
          [
            "ساختند",
            "saakh-tand",
            "saakh-tand",
            "saakh-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
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
            "باعث",
            "baa-is",
            "baa-is",
            "baa-is shud"
          ],
          [
            "شد",
            "shud",
            "shud",
            "baa-is shud",
            "shu-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "ورود",
            "wu-roo-di",
            "wu-rood"
          ],
          [
            "جریده",
            "ja-ree-da",
            "ja-ree-da"
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
            "متوقف",
            "mu-ta-waq-qif",
            "mu-ta-waq-qif",
            "mu-ta-waq-qif gar-dad",
            "mu-ta-waq-qif gar-dee-dan"
          ],
          [
            "گردد.",
            "gar-dad",
            "gar-dad",
            "mu-ta-waq-qif gar-dad",
            "gar-dee-dan",
            "mu-ta-waq-qif gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "pas az nash-ri shu-maa-ra-yi sha-shu-mi saa-li hash-tum du mu-har-ri-ri ja-ree-da “ab-dul-haa-dee daa-wee wa ab-dur-rah-maan lo-deen” zin-daa-nee shu-dand.",
        "mean": "After the sixth issue of the eighth year was published, two of the newspaper's editors, Abdul Hadi Dawi and Abdul Rahman Ludin, were imprisoned.",
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
            "نشر",
            "nash-ri",
            "nashr"
          ],
          [
            "شماره",
            "shu-maa-ra-yi",
            "shu-maa-ra"
          ],
          [
            "ششم",
            "sha-shu-mi",
            "sha-shum"
          ],
          [
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "هشتم",
            "hash-tum",
            "hash-tum"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "محرر",
            "mu-har-ri-ri",
            "mu-har-rir"
          ],
          [
            "جریده",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "«عبدالهادی",
            "ab-dul-haa-dee",
            "ab-dul-haa-dee"
          ],
          [
            "داوی",
            "daa-wee",
            "daa-wee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عبدالرحمان",
            "ab-dur-rah-maan",
            "ab-dur-rah-maan"
          ],
          [
            "لودین»",
            "lo-deen",
            "lo-deen"
          ],
          [
            "زندانی",
            "zin-daa-nee",
            "zin-daa-nee",
            "zin-daa-nee shu-dand",
            "zin-daa-nee shu-dan"
          ],
          [
            "شدند.",
            "shu-dand",
            "shu-dand",
            "zin-daa-nee shu-dand",
            "shu-dan",
            "zin-daa-nee shu-dan"
          ]
        ]
      },
      {
        "say": "mah-mood tar-zee tan-haa maand;",
        "mean": "Mahmud Tarzi was left alone;",
        "words": [
          [
            "محمود",
            "mah-mood",
            "mah-mood"
          ],
          [
            "طرزی",
            "tar-zee",
            "tar-zee"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "ماند؛",
            "maand",
            "maand",
            "maan-dan"
          ]
        ]
      },
      {
        "say": "am-maa ham-waa-ra ta-laash may-kard taa sat-h-i il-mee-yi ja-ree-da raa bu-land ni-gah-daa-rad;",
        "mean": "but he always tried to keep the newspaper's scholarly level high;",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "همواره",
            "ham-waa-ra",
            "ham-waa-ra"
          ],
          [
            "تلاش",
            "ta-laash",
            "ta-laash",
            "ta-laash may-kard",
            "ta-laash kar-dan"
          ],
          [
            "می‌کرد",
            "may-kard",
            "may-kard",
            "ta-laash may-kard",
            "kar-dan",
            "ta-laash kar-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "سطح",
            "sat-h-i",
            "sat-h"
          ],
          [
            "علمی",
            "il-mee-yi",
            "il-mee"
          ],
          [
            "جریده",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بلند",
            "bu-land",
            "bu-land"
          ],
          [
            "نگه‌دارد؛",
            "ni-gah-daa-rad",
            "ni-gah-daa-rad",
            "ni-gah-daash-tan"
          ]
        ]
      },
      {
        "say": "am-maa dush-waa-ree-haa-yi si-raaj-ul-akh-baar goo-naa-goon wa ba had-dee bood ki dee-gar mu-har-ri-ri pur-kaa-ri aan na-ta-waa-nist aan ha-ma dush-waa-ree-haa raa ki fi-shaa-ri si-yaa-see um-da-ta-ree-ni aan bood, ta-ham-mul ku-nad;",
        "mean": "but Siraj al-Akhbar's difficulties were so many and so great that its hard-working editor could no longer bear them all, the greatest of which was political pressure;",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "دشواری‌های",
            "dush-waa-ree-haa-yi",
            "dush-waa-ree-haa"
          ],
          [
            "سراج‌الاخبار",
            "si-raaj-ul-akh-baar",
            "si-raaj-ul-akh-baar"
          ],
          [
            "گوناگون",
            "goo-naa-goon",
            "goo-naa-goon"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba had-dee"
          ],
          [
            "حدی",
            "had-dee",
            "had-dee",
            "ba had-dee"
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
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "محرر",
            "mu-har-ri-ri",
            "mu-har-rir"
          ],
          [
            "پرکار",
            "pur-kaa-ri",
            "pur-kaar"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "نتوانست",
            "na-ta-waa-nist",
            "na-ta-waa-nist",
            "ta-waa-nis-tan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "دشواری‌ها",
            "dush-waa-ree-haa",
            "dush-waa-ree-haa"
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
            "فشار",
            "fi-shaa-ri",
            "fi-shaar"
          ],
          [
            "سیاسی",
            "si-yaa-see",
            "si-yaa-see"
          ],
          [
            "عمده‌ترین",
            "um-da-ta-ree-ni",
            "um-da-ta-reen"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "بود،",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "تحمل",
            "ta-ham-mul",
            "ta-ham-mul",
            "ta-ham-mul ku-nad",
            "ta-ham-mul kar-dan"
          ],
          [
            "کند؛",
            "ku-nad",
            "ku-nad",
            "ta-ham-mul ku-nad",
            "kar-dan",
            "ta-ham-mul kar-dan"
          ]
        ]
      },
      {
        "say": "naa-gu-zeer nash-ri ja-ree-da-yi si-raaj-ul-akh-baa-ri af-ghaa-ni-ya raa mu-ta-waq-qif kard.",
        "mean": "so he had no choice but to stop publishing the newspaper Siraj al-Akhbar-i Afghaniya.",
        "words": [
          [
            "ناگزیر",
            "naa-gu-zeer",
            "naa-gu-zeer"
          ],
          [
            "نشر",
            "nash-ri",
            "nashr"
          ],
          [
            "جریده",
            "ja-ree-da-yi",
            "ja-ree-da"
          ],
          [
            "سراج‌الاخبار",
            "si-raaj-ul-akh-baa-ri",
            "si-raaj-ul-akh-baar"
          ],
          [
            "افغانیه",
            "af-ghaa-ni-ya",
            "af-ghaa-ni-ya"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "متوقف",
            "mu-ta-waq-qif",
            "mu-ta-waq-qif",
            "mu-ta-waq-qif kard",
            "mu-ta-waq-qif kar-dan"
          ],
          [
            "کرد.",
            "kard",
            "kard",
            "mu-ta-waq-qif kard",
            "kar-dan",
            "mu-ta-waq-qif kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "jaa-lib ast bi-daa-need ki dar aa-khi-reen shu-maa-ra-yi ja-ree-da, chan-deen jaa-yi dar khat-mi ma-zaa-meen laf-zi “baa-qee daa-rad” aa-ma-da ast;",
        "mean": "It is interesting to know that in the last issue of the newspaper, the words “to be continued” appeared at the end of several articles;",
        "words": [
          [
            "جالب",
            "jaa-lib",
            "jaa-lib",
            "jaa-lib ast"
          ],
          [
            "است",
            "ast",
            "ast",
            "jaa-lib ast"
          ],
          [
            "بدانید",
            "bi-daa-need",
            "bi-daa-need",
            "daa-nis-tan"
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
            "آخرین",
            "aa-khi-reen",
            "aa-khi-reen"
          ],
          [
            "شمارهٔ",
            "shu-maa-ra-yi",
            "shu-maa-ra"
          ],
          [
            "جریده،",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "چندین",
            "chan-deen",
            "chan-deen"
          ],
          [
            "جای",
            "jaa-yi",
            "jaa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ختم",
            "khat-mi",
            "khatm"
          ],
          [
            "مضامین",
            "ma-zaa-meen",
            "ma-zaa-meen"
          ],
          [
            "لفظ",
            "laf-zi",
            "lafz"
          ],
          [
            "«باقی",
            "baa-qee",
            "baa-qee",
            "baa-qee daa-rad"
          ],
          [
            "دارد»",
            "daa-rad",
            "daa-rad",
            "baa-qee daa-rad",
            "daash-tan"
          ],
          [
            "آمده",
            "aa-ma-da",
            "aa-ma-da",
            "aa-ma-dan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "am-maa “baa-qee daa-rad-haa” ham-chu-naan baa-qee maand wa si-raaj al-akh-baar dee-gar zay-ri maa-shee-ni chaap na-raft.",
        "mean": "but those “to be continueds” stayed unfinished, and Siraj al-Akhbar never went to press again.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "«باقی",
            "baa-qee",
            "baa-qee"
          ],
          [
            "داردها»",
            "daa-rad-haa",
            "daa-rad-haa"
          ],
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "باقی",
            "baa-qee",
            "baa-qee",
            "baa-qee maand",
            "baa-qee maan-dan"
          ],
          [
            "ماند",
            "maand",
            "maand",
            "baa-qee maand",
            "maan-dan",
            "baa-qee maan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سراج",
            "si-raaj",
            "si-raaj",
            "si-raaj al-akh-baar"
          ],
          [
            "الاخبار",
            "al-akh-baar",
            "al-akh-baar",
            "si-raaj al-akh-baar"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "زیر",
            "zay-ri",
            "zayr"
          ],
          [
            "ماشین",
            "maa-shee-ni",
            "maa-sheen"
          ],
          [
            "چاپ",
            "chaap",
            "chaap"
          ],
          [
            "نرفت.",
            "na-raft",
            "na-raft",
            "raf-tan"
          ]
        ]
      }
    ]
  ]
});
