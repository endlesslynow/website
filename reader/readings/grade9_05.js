/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 5, book pages 28-29, PDF pages 35-36 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «درغوربند» is written «در غوربند»; «امیرسیف‌الدین» is written «امیر سیف‌الدین»; «درسال» is written «در سال»; «مشوکز» is written «مشو کز»; «وخیر» is written «و خیر».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-05',
  group: 'Dari · grade 9',
  label: 'Lesson 5',
  name: "a-meer khus-ra-wi dih-la-wee",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_05.jpg',
    alt: "A pencil drawing of Amir Khusrow, a bearded man in a turban, over swirls of faded calligraphy."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_05.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "a-meer":                                    { fa: "امیر", mean: "emir, prince; also part of names" },
    "khus-raw":                                  { fa: "خسرو", mean: "king" },
    "dih-la-wee":                                { fa: "دهلوی", mean: "of Delhi" },
    "a-meer khus-ra-wi dih-la-wee":              { fa: "امیر خسرو دهلوی", mean: "Amir Khusrow of Delhi" },
    "pi-sar":                                    { fa: "پسر", mean: "son, boy" },
    "a-meer sayf-ud-dee-ni mah-mood":            { fa: "امیر سیف‌الدین محمود", mean: "Amir Saifuddin Mahmud" },
    "sayf-ud-deen":                              { fa: "سیف‌الدین", mean: "Saifuddin" },
    "mah-mood":                                  { fa: "محمود", mean: "Mahmud" },
    "ha-keem":                                   { fa: "حکیم", mean: "sage, wise man; doctor" },
    "wa":                                        { fa: "و", mean: "and" },
    "daa-nish-mand":                             { fa: "دانشمند", mean: "scholar, scientist" },
    "qarn":                                      { fa: "قرن", mean: "century" },
    "haf-tum":                                   { fa: "هفتم", mean: "seventh" },
    "ast":                                       { fa: "است", mean: "is" },
    "aan-gaah":                                  { fa: "آنگاه", mean: "then" },
    "aan-gaah ki":                               { fa: "آنگاه که", mean: "when" },
    "ki":                                        { fa: "که", mean: "that, which, who" },
    "lash-kar":                                  { fa: "لشکر", mean: "army" },
    "chan-gayz":                                 { fa: "چنگیز", mean: "Genghis Khan, the Mongol conqueror" },
    "ba":                                        { fa: "به", mean: "to" },
    "sar-za-meen":                               { fa: "سرزمین", mean: "land, country" },
    "maa":                                       { fa: "ما", mean: "we" },
    "ba way-zha":                                { fa: "به ویژه", mean: "especially" },
    "way-zha":                                   { fa: "ویژه", mean: "special (ba way-zha, especially)" },
    "balkh":                                     { fa: "بلخ", mean: "Balkh, an old city in northern Afghanistan" },
    "yo-rish":                                   { fa: "یورش", mean: "attack" },
    "yo-rish aa-word":                           { fa: "یورش آورد", mean: "attacked" },
    "yo-rish aa-war-dan":                        { fa: "یورش آوردن", mean: "to attack" },
    "aa-word":                                   { fa: "آورد", mean: "brought" },
    "aa-war-dan":                                { fa: "آوردن", mean: "to bring" },
    "na-khaast":                                 { fa: "نخواست", mean: "did not want" },
    "khaas-tan":                                 { fa: "خواستن", mean: "to want" },
    "yogh":                                      { fa: "یوغ", mean: "yoke" },
    "yo-ghi i-saa-rat raa bar gar-dan ka-shad":  { fa: "یوغ اسارت را بر گردن کشد", mean: "put the yoke of captivity on his neck (the book's note: accept captivity and slavery)" },
    "i-saa-rat":                                 { fa: "اسارت", mean: "captivity" },
    "raa":                                       { fa: "را", mean: "marks the object of the verb" },
    "bar":                                       { fa: "بر", mean: "on, upon" },
    "gar-dan":                                   { fa: "گردن", mean: "neck" },
    "ka-shad":                                   { fa: "کشد", mean: "pull; bear" },
    "ka-shee-dan":                               { fa: "کشیدن", mean: "to pull; to bear" },
    "li-zaa":                                    { fa: "لذا", mean: "so, therefore" },
    "mu-ta-waa-ree":                             { fa: "متواری", mean: "in hiding, fleeing" },
    "mu-ta-waa-ree gar-deed":                    { fa: "متواری گردید", mean: "fled" },
    "mu-ta-waa-ree gar-dee-dan":                 { fa: "متواری گردیدن", mean: "to flee, to go into hiding" },
    "gar-deed":                                  { fa: "گردید", mean: "became" },
    "gar-dee-dan":                               { fa: "گردیدن", mean: "to become, to turn" },
    "chan-day":                                  { fa: "چندی", mean: "for a while" },
    "dar":                                       { fa: "در", mean: "in" },
    "saan-chaa-rak":                             { fa: "سانچارک", mean: "Sancharak, a district of Sar-i Pul in northern Afghanistan" },
    "baad#after":                                { fa: "بعد", say: "baad", mean: "after, then" },
    "gor-band":                                  { fa: "غوربند", mean: "Ghorband, a valley in Parwan" },
    "par-waan":                                  { fa: "پروان", mean: "Parwan, a province north of Kabul" },
    "i-qaa-mat":                                 { fa: "اقامت", mean: "staying, residence" },
    "i-qaa-mat gu-zeed":                         { fa: "اقامت گزید", mean: "stayed, settled" },
    "i-qaa-mat gu-zee-dan":                      { fa: "اقامت گزیدن", mean: "to settle, to live" },
    "gu-zeed":                                   { fa: "گزید", mean: "chose" },
    "gu-zee-dan":                                { fa: "گزیدن", mean: "to choose" },
    "dar a-kheer":                               { fa: "در اخیر", mean: "in the end" },
    "a-kheer":                                   { fa: "اخیر", mean: "last (dar a-kheer, in the end)" },
    "raa-hee":                                   { fa: "راهی", mean: "road (du raa-hee, a crossroads)" },
    "pa-ti-yaa-la":                              { fa: "پتیاله", mean: "Patiala, a city in Punjab, India" },
    "hind":                                      { fa: "هند", mean: "India" },
    "aan-jaa":                                   { fa: "آن‌جا", mean: "there" },
    "mas-kan":                                   { fa: "مسکن", mean: "home, dwelling" },
    "khaysh":                                    { fa: "خویش", mean: "own; self" },
    "qa-raar":                                   { fa: "قرار", mean: "place, rest" },
    "qa-raar daad":                              { fa: "قرار داد", mean: "made" },
    "qa-raar daa-dan":                           { fa: "قرار دادن", mean: "to make, to set" },
    "daad":                                      { fa: "داد", mean: "gave" },
    "daa-dan":                                   { fa: "دادن", mean: "to give" },
    "ba-zay":                                    { fa: "بعضی", mean: "some" },
    "mu-ar-ri-khaan":                            { fa: "مؤرخان", mean: "historians" },
    "ma-hal":                                    { fa: "محل", mean: "place" },
    "ta-wal-lud":                                { fa: "تولد", mean: "birth" },
    "a-meer-khus-raw":                           { fa: "امیرخسرو", mean: "Amir Khusrow" },
    "bar-khay":                                  { fa: "برخی", mean: "some" },
    "mo-min":                                    { fa: "مؤمن", mean: "believer; part of the name Mu'minabad" },
    "mo-min aa-baa-di":                          { fa: "مؤمن آباد", mean: "Mu'minabad" },
    "aa-baad":                                   { fa: "آباد", mean: "built up, flourishing; town (in names)" },
    "daa-nis-ta":                                { fa: "دانسته", mean: "known; considered" },
    "daa-nis-ta and":                            { fa: "دانسته اند", mean: "have considered" },
    "daa-nis-tan":                               { fa: "دانستن", mean: "to know" },
    "and":                                       { fa: "اند", mean: "are; after a word like shu-da, have" },
    "way":                                       { fa: "وی", mean: "he, she" },
    "saal":                                      { fa: "سال", mean: "year" },
    "shash-sa-du pan-jaa-hu yak":                { fa: "۶۵۱", mean: "651" },
    "hij-ree":                                   { fa: "ه", mean: "short for hij-ree, of the Islamic calendar" },
    "hij-ree qa-ma-ree":                         { fa: "ه ق", mean: "of the Islamic lunar calendar" },
    "qa-ma-ree":                                 { fa: "ق", mean: "short for qa-ma-ree, lunar" },
    "ba dun-yaa aa-mad":                         { fa: "به دنیا آمد", mean: "was born" },
    "ba dun-yaa aa-ma-dan":                      { fa: "به دنیا آمدن", mean: "to be born" },
    "dun-yaa":                                   { fa: "دنیا", mean: "world" },
    "aa-mad":                                    { fa: "آمد", mean: "came" },
    "aa-ma-dan":                                 { fa: "آمدن", mean: "to come" },
    "ja-waa-nee":                                { fa: "جوانی", mean: "youth" },
    "khaa-ja":                                   { fa: "خواجه", mean: "khwaja, a title of respect for a Sufi master" },
    "khaa-ja-yi ni-zaam-ud-dee-ni aw-li-yaa":    { fa: "خواجه نظام‌الدین اولیا", mean: "Khwaja Nizamuddin Auliya, a famous Sufi master of Delhi" },
    "ni-zaam-ud-deen":                           { fa: "نظام‌الدین", mean: "Nizamuddin" },
    "aw-li-yaa":                                 { fa: "اولیا", mean: "saints, friends of God" },
    "aa-rif":                                    { fa: "عارف", mean: "mystic" },
    "pur-aa-waa-za":                             { fa: "پرآوازه", mean: "famous" },
    "pay-wast":                                  { fa: "پیوست", mean: "joined" },
    "pay-was-tan":                               { fa: "پیوستن", mean: "to join" },
    "sayr":                                      { fa: "سیر", mean: "journey" },
    "sayr wa su-loo-ki ir-faa-nee":              { fa: "سیر و سلوک عرفانی", mean: "the Sufi path - literally mystic journeying and travel" },
    "su-look":                                   { fa: "سلوک", mean: "travelling the spiritual path" },
    "ir-faa-nee":                                { fa: "عرفانی", mean: "mystical, Sufi" },
    "par-daakht":                                { fa: "پرداخت", mean: "took up" },
    "par-daakh-tan":                             { fa: "پرداختن", mean: "to busy oneself (with ba), to take up; to pay" },
    "dost":                                      { fa: "دوست", mean: "friend" },
    "da-beer":                                   { fa: "دبیر", mean: "secretary" },
    "dar-baar":                                  { fa: "دربار", mean: "royal court" },
    "haft":                                      { fa: "هفت", mean: "seven" },
    "haft tan":                                  { fa: "هفت تن", mean: "seven people" },
    "tan":                                       { fa: "تن", mean: "body" },
    "az":                                        { fa: "از", mean: "from, of" },
    "shaa-haan":                                 { fa: "شاهان", mean: "kings" },
    "hin-dee":                                   { fa: "هندی", mean: "Indian" },
    "boo-da":                                    { fa: "بوده", mean: "has been" },
    "bu-dan":                                    { fa: "بودن", mean: "to be" },
    "oo":                                        { fa: "او", mean: "he, she; his, her" },
    "ib-ti-daa":                                 { fa: "ابتدا", mean: "at first" },
    "sul-taa-nee":                               { fa: "سلطانی", mean: "Sultani, a pen name; royal" },
    "ta-khal-lus":                               { fa: "تخلص", mean: "pen name" },
    "ta-khal-lus may-kard":                      { fa: "تخلص می‌کرد", mean: "used as his pen name" },
    "ta-khal-lus kar-dan":                       { fa: "تخلص کردن", mean: "to use a pen name" },
    "may-kard":                                  { fa: "می‌کرد", mean: "used to do, kept doing" },
    "kar-dan":                                   { fa: "کردن", mean: "to do, to make" },
    "si-pas":                                    { fa: "سپس", mean: "then, later" },
    "in-ti-khaab":                               { fa: "انتخاب", mean: "choice" },
    "in-ti-khaab kard":                          { fa: "انتخاب کرد", mean: "chose" },
    "in-ti-khaab kar-dan":                       { fa: "انتخاب کردن", mean: "to choose" },
    "kard":                                      { fa: "کرد", mean: "did, made" },
    "shi'r":                                     { fa: "شعر", mean: "poetry, poem" },
    "gu-zash-ta-gaan":                           { fa: "گذشته‌گان", mean: "people of the past" },
    "ta-waj-juh":                                { fa: "توجه", mean: "attention" },
    "ta-waj-juh daasht":                         { fa: "توجه داشت", mean: "paid attention" },
    "ta-waj-juh daash-tan":                      { fa: "توجه داشتن", mean: "to pay attention" },
    "daasht":                                    { fa: "داشت", mean: "had" },
    "daash-tan":                                 { fa: "داشتن", mean: "to have" },
    "qa-see-da":                                 { fa: "قصیده", mean: "ode, a long poem of praise" },
    "pay-ra-wee":                                { fa: "پیروی", mean: "following" },
    "mas-ood":                                   { fa: "مسعود", mean: "Mas'ud" },
    "mas-oo-di sad":                             { fa: "مسعود سعد", mean: "Mas'ud Sa'd, a poet of Lahore" },
    "sad#name":                                  { fa: "سعد", say: "sad", mean: "Sa'd" },
    "khaa-qaa-nee":                              { fa: "خاقانی", mean: "Khaqani, a Persian poet of the 1100s" },
    "mas-na-wee":                                { fa: "مثنوی", mean: "masnavi, a long poem in rhyming couplets" },
    "us-loob":                                   { fa: "اسلوب", mean: "manner, style" },
    "sa-naa-yee":                                { fa: "سنایی", mean: "Sana'i, a Persian poet of Ghazni of the 1100s" },
    "daas-taan-sa-raa-yee":                      { fa: "داستانسرایی", mean: "telling stories in verse" },
    "shay-wa":                                   { fa: "شیوه", mean: "style, way" },
    "ni-zaa-mee":                                { fa: "نظامی", mean: "Nizami, a Persian poet of the 1100s" },
    "gha-zal":                                   { fa: "غزل", mean: "ghazal, a short love poem" },
    "iq-ti-faa":                                 { fa: "اقتفا", mean: "following" },
    "sa-dee":                                    { fa: "سعدی", mean: "Sa’di, the Persian poet from Shiraz who died about 1292" },
    "su-roo-da":                                 { fa: "سروده", mean: "written (a poem)" },
    "su-roo-dan":                                { fa: "سرودن", mean: "to write a poem" },
    "lahn":                                      { fa: "لحن", mean: "tone" },
    "khaa-say":                                  { fa: "خاصی", mean: "special (khaas + -ay, a: “a special …”)" },
    "baad-haa#later":                            { fa: "بعدها", say: "baad-haa", mean: "later" },
    "shaa-i-raan":                               { fa: "شاعران", mean: "poets" },
    "bar-gu-zee-da":                             { fa: "برگزیده", mean: "chosen" },
    "bar-gu-zee-dan":                            { fa: "برگزیدن", mean: "to choose" },
    "pa-ra-wa-rish":                             { fa: "پرورش", mean: "raising, developing" },
    "pa-ra-wa-rish daa-dand":                    { fa: "پرورش دادند", mean: "developed" },
    "pa-ra-wa-rish daa-dan":                     { fa: "پرورش دادن", mean: "to develop, to raise" },
    "daa-dand":                                  { fa: "دادند", mean: "gave" },
    "im-roz":                                    { fa: "امروز", mean: "today" },
    "aan":                                       { fa: "آن", mean: "that" },
    "mash-hoor":                                 { fa: "مشهور", mean: "famous, known" },
    "mash-hoor ba":                              { fa: "مشهور به", mean: "known as" },
    "sabk":                                      { fa: "سبک", mean: "style" },
    "sab-ki hin-dee":                            { fa: "سبک هندی", mean: "the Indian style, a style of Persian poetry" },
    "aa-saar":                                   { fa: "آثار", mean: "works" },
    "maj-moo-an":                                { fa: "مجموعاً", mean: "in all" },
    "na-wad":                                    { fa: "نود", mean: "ninety" },
    "na-wad wa nuh":                             { fa: "نود و نه", mean: "ninety-nine" },
    "nuh":                                       { fa: "نه", mean: "nine" },
    "a-sar":                                     { fa: "اثر", mean: "work (of writing or art)" },
    "guf-ta":                                    { fa: "گفته", mean: "said" },
    "guf-ta and":                                { fa: "گفته اند", mean: "they have said" },
    "guf-tan":                                   { fa: "گفتن", mean: "to say, to tell" },
    "az aan jum-la":                             { fa: "از آن جمله", mean: "among them" },
    "jum-la":                                    { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "mash-hoor-ta-reen":                         { fa: "مشهورترین", mean: "most famous" },
    "qi-raan-us-sa-dayn":                        { fa: "قِران‌السعدین", mean: "Qiran al-Sa'dayn, a long poem of his" },
    "nuh si-pihr":                               { fa: "نه سپهر", mean: "Nuh Sipihr, The Nine Heavens, a book of his" },
    "si-pihr":                                   { fa: "سپهر", mean: "the heavens, the sky" },
    "fat-taah":                                  { fa: "فتاح", mean: "opener (in a book title)" },
    "fat-taah al-fu-tooh":                       { fa: "فتاح الفتوح", mean: "Fattah al-Futuh, a book of his" },
    "al-fu-tooh":                                { fa: "الفتوح", mean: "of victories (in a book title)" },
    "kham-sa":                                   { fa: "خمسه", mean: "a set of five long poems" },
    "ham":                                       { fa: "هم", mean: "also, too" },
    "shaa-mil":                                  { fa: "شامل", mean: "including" },
    "panj":                                      { fa: "پنج", mean: "five" },
    "mat-la-ul-an-waar":                         { fa: "مطلع‌الانوار", mean: "Matla' al-Anwar, the first poem of his Khamsa" },
    "shee-reen":                                 { fa: "شیرین", mean: "Shirin, a princess in Persian legend; sweet" },
    "shee-reen wa khus-raw":                     { fa: "شیرین و خسرو", mean: "Shirin and Khusrow, a long poem of his" },
    "maj-noon":                                  { fa: "مجنون", mean: "Majnun, the lover in a famous Arabic tale" },
    "maj-noon wa lay-laa":                       { fa: "مجنون و لیلی", mean: "Majnun and Layla, a long poem of his" },
    "lay-laa":                                   { fa: "لیلی", mean: "Layla, Majnun's beloved" },
    "aa-yee-na":                                 { fa: "آیینه", mean: "mirror" },
    "aa-yee-na-yi si-kan-da-ree":                { fa: "آیینه سکندری", mean: "The Mirror of Alexander, a long poem of his" },
    "si-kan-da-ree":                             { fa: "سکندری", mean: "of Alexander" },
    "hasht":                                     { fa: "هشت", mean: "eight" },
    "hasht bi-hisht":                            { fa: "هشت بهشت", mean: "The Eight Paradises, a long poem of his" },
    "bi-hisht":                                  { fa: "بهشت", mean: "paradise" },
    "fan":                                       { fa: "فن", mean: "art, skill" },
    "in-shaa":                                   { fa: "انشا", mean: "letter writing, composition" },
    "ki-taa-bay":                                { fa: "کتابی", mean: "a book" },
    "na-wish-ta":                                { fa: "نوشته", mean: "written" },
    "na-wish-tan":                               { fa: "نوشتن", mean: "to write" },
    "ra-saa-yil":                                { fa: "رسایل", mean: "Rasa'il, his book of letters; letters" },
    "naam":                                      { fa: "نام", mean: "name" },
    "naam daa-rad":                              { fa: "نام دارد", mean: "is called" },
    "naam daash-tan":                            { fa: "نام داشتن", mean: "to be called, to have the name" },
    "daa-rad":                                   { fa: "دارد", mean: "has" },
    "dar hu-doo-di":                             { fa: "در حدود", mean: "about" },
    "hu-dood":                                   { fa: "حدود", mean: "about; limits" },
    "hazh-da":                                   { fa: "هژده", mean: "eighteen" },
    "hazh-da ha-zaar":                           { fa: "هژده هزار", mean: "eighteen thousand" },
    "ha-zaar":                                   { fa: "هزار", mean: "thousand" },
    "bayt":                                      { fa: "بیت", mean: "line of poetry, couplet" },
    "dar ta-yi":                                 { fa: "در طی", mean: "over, during" },
    "tay":                                       { fa: "طی", mean: "course (dar tay-yi, over, during)" },
    "sih":                                       { fa: "سه", mean: "three" },
    "a-laa-wa":                                  { fa: "علاوه", mean: "addition (a-laa-wa bar, besides)" },
    "a-laa-wa bar":                              { fa: "علاوه بر", mean: "besides" },
    "shaa-i-ree":                                { fa: "شاعری", mean: "being a poet, poetry" },
    "na-wee-san-da-gee":                         { fa: "نویسنده‌گی", mean: "writing, being a writer" },
    "hu-nar":                                    { fa: "هنر", mean: "art, skill" },
    "mo-see-qee":                                { fa: "موسیقی", mean: "music" },
    "neez":                                      { fa: "نیز", mean: "also, too" },
    "us-taad":                                   { fa: "استاد", mean: "master, teacher" },
    "bood":                                      { fa: "بود", mean: "was" },
    "ra-wee#ravi":                               { fa: "روی", say: "ra-wee", mean: "Ravi (Ravi Shankar, the famous Indian sitar player)" },
    "shan-kar":                                  { fa: "شنکر", mean: "Shankar" },
    "mo-see-qee-daan":                           { fa: "موسیقی‌دان", mean: "musician" },
    "bu-zurg":                                   { fa: "بزرگ", mean: "big, great" },
    "hin-dus-taan":                              { fa: "هندوستان", mean: "India" },
    "ikh-ti-raa":                                { fa: "اختراع", mean: "invention" },
    "ik-maal":                                   { fa: "اکمال", mean: "perfecting" },
    "aa-la":                                     { fa: "آله", mean: "instrument, tool" },
    "sih taar":                                  { fa: "سه تار", mean: "the sitar - literally three strings" },
    "taar":                                      { fa: "تار", mean: "string" },
    "ta-was-sut":                                { fa: "توسط", mean: "by, through" },
    "tash-reeh":                                 { fa: "تشریح", mean: "explaining" },
    "aj-zaa":                                    { fa: "اجزا", mean: "parts" },
    "ma-haa-fil":                                { fa: "محافل", mean: "gatherings" },
    "par-daakh-ta":                              { fa: "پرداخته", mean: "taken up" },
    "par-daakh-ta ast":                          { fa: "پرداخته است", mean: "has taken up" },
    "een":                                       { fa: "این", mean: "this" },
    "shaa-ir":                                   { fa: "شاعر", mean: "poet" },
    "naa-mee":                                   { fa: "نامی", mean: "famous" },
    "haft-sa-du bees-tu panj":                   { fa: "۷۲۵", mean: "725" },
    "hij-ree#year":                              { fa: "هجری", say: "hij-ree", mean: "of the Islamic calendar, which counts from the Prophet's move to Medina in 622" },
    "wa-faat":                                   { fa: "وفات", mean: "death" },
    "wa-faat kar-da":                            { fa: "وفات کرده", mean: "died" },
    "wa-faat kar-dan":                           { fa: "وفات کردن", mean: "to die" },
    "kar-da":                                    { fa: "کرده", mean: "done" },
    "qabr":                                      { fa: "قبر", mean: "grave" },
    "naz-deek":                                  { fa: "نزدیک", mean: "near" },
    "ma-zaar":                                   { fa: "مزار", mean: "shrine, tomb" },
    "dih-lee":                                   { fa: "دهلی", mean: "Delhi" },
    "pi-sa-ray":                                 { fa: "پسری", mean: "a son" },
    "ba naa-mi":                                 { fa: "به نام", mean: "by the name of, called" },
    "ah-mad":                                    { fa: "احمد", mean: "Ahmad" },
    "ba-jaa":                                    { fa: "به‌جا", mean: "in place" },
    "ba-jaa maand":                              { fa: "به‌جا ماند", mean: "was left behind" },
    "ba-jaa maan-dan":                           { fa: "به‌جا ماندن", mean: "to remain, to be left" },
    "maand":                                     { fa: "ماند", mean: "remained" },
    "maan-dan":                                  { fa: "ماندن", mean: "to remain, to stay" },
    "naqd":                                      { fa: "نقد", mean: "criticism, judging" },
    "das-ta-ra-see":                             { fa: "دسترسی", mean: "access; skill" },
    "das-ta-ra-see daasht":                      { fa: "دسترسی داشت", mean: "was skilled - literally had access" },
    "das-ta-ra-see daash-tan":                   { fa: "دسترسی داشتن", mean: "to have access, to be skilled" },
    "na-mo-na":                                  { fa: "نمونه", mean: "sample, example" },
    "ka-laam":                                   { fa: "کلام", mean: "speech; poetry" },
    "za":                                        { fa: "ز", mean: "from (short for az)" },
    "ahl":                                       { fa: "اهل", mean: "people (of a place)" },
    "aql":                                       { fa: "عقل", mean: "reason, good sense" },
    "na-pa-san-dad":                             { fa: "نپسندد", mean: "does not approve" },
    "pa-san-dee-dan":                            { fa: "پسندیدن", mean: "to like, to approve" },
    "khi-rad-mand":                              { fa: "خردمند", mean: "wise man" },
    "raf-ta-nee":                                { fa: "رفتنی", mean: "something that must go, passing" },
    "paa":                                       { fa: "پا", mean: "foot, leg" },
    "dar band":                                  { fa: "در بند", mean: "in chains, captive" },
    "band":                                      { fa: "بند", mean: "bond, chain" },
    "na-seeb":                                   { fa: "نصیب", mean: "share, lot" },
    "bar-geer":                                  { fa: "برگیر", mean: "take (an order)" },
    "bar-gi-rif-tan":                            { fa: "برگرفتن", mean: "to take up" },
    "ma-taa-ay":                                 { fa: "متاعی", mean: "goods (ma-taa + -ay)" },
    "far-daa":                                   { fa: "فردا", mean: "tomorrow" },
    "gar-da-dash":                               { fa: "گرددش", mean: "becomes its (gar-dad + -ash)" },
    "ghayr":                                     { fa: "غیر", mean: "other than, someone else" },
    "khu-daa-wand":                              { fa: "خداوند", mean: "God, the Lord" },
    "li-baas":                                   { fa: "لباس", mean: "clothes" },
    "li-baa-si zin-da-gee bar khud ma-kun tang": { fa: "لباس زنده‌گی بر خود مکن تنگ", mean: "do not make the clothes of life tight on yourself (the book's note: do not worry and bring troubles on yourself)" },
    "zin-da-gee":                                { fa: "زنده‌گی", mean: "life" },
    "khud":                                      { fa: "خود", mean: "own; self" },
    "ma-kun":                                    { fa: "مکن", mean: "do not do" },
    "tang":                                      { fa: "تنگ", mean: "tight, narrow" },
    "choon":                                     { fa: "چون", mean: "like, as; when; because" },
    "shud":                                      { fa: "شد", mean: "became; was" },
    "shu-dan":                                   { fa: "شدن", mean: "to become" },
    "paa-ra":                                    { fa: "پاره", mean: "torn; piece" },
    "na-ta-waan":                                { fa: "نتوان", mean: "one cannot" },
    "na-ta-waan kard pay-wand":                  { fa: "نتوان کرد پیوند", mean: "it cannot be mended" },
    "pay-wand kar-dan":                          { fa: "پیوند کردن", mean: "to join, to mend" },
    "pay-wand":                                  { fa: "پیوند", mean: "joining, mending" },
    "ma-khor":                                   { fa: "مخور", mean: "do not eat" },
    "ma-khor gham":                              { fa: "مخور غم", mean: "do not grieve" },
    "khor-dan":                                  { fa: "خوردن", mean: "to eat; (with gham) to grieve" },
    "gham khor-dan":                             { fa: "غم خوردن", mean: "to grieve" },
    "gham":                                      { fa: "غم", mean: "grief, sorrow" },
    "bah-ri":                                    { fa: "بهر", mean: "for (bah-ri, for the sake of)" },
    "far-zan-day":                               { fa: "فرزندی", mean: "a child" },
    "maa-lay":                                   { fa: "مالی", mean: "wealth (maal + -ay)" },
    "maa-lat":                                   { fa: "مالت", mean: "your wealth" },
    "deen":                                      { fa: "دین", mean: "religion" },
    "bas":                                       { fa: "بس", mean: "many; enough" },
    "khayr":                                     { fa: "خیر", mean: "good, good deeds" },
    "far-zand":                                  { fa: "فرزند", mean: "child, son" },
    "a-gar":                                     { fa: "اگر", mean: "if" },
    "khaa-hee":                                  { fa: "خواهی", mean: "you want" },
    "na-bee-nee":                                { fa: "نبینی", mean: "you do not see" },
    "dee-dan":                                   { fa: "دیدن", mean: "to see; seeing" },
    "ranj":                                      { fa: "رنج", mean: "hardship, suffering" },
    "bi-si-yaar":                                { fa: "بسیار", mean: "much, very" },
    "an-dak":                                    { fa: "اندک", mean: "little" },
    "an-dak maa-ya":                             { fa: "اندک مایه", mean: "a little, small means" },
    "maa-ya":                                    { fa: "مایه", mean: "means, capital" },
    "raa-hat":                                   { fa: "راحت", mean: "at ease, comfortable" },
    "baash":                                     { fa: "باش", mean: "be" },
    "khur-sand":                                 { fa: "خرسند", mean: "content" },
    "soo-rat":                                   { fa: "صورت", mean: "face, outward form" },
    "khush":                                     { fa: "خوش", mean: "pleasant, happy" },
    "khush ma-shaw":                             { fa: "خوش مشو", mean: "do not be pleased" },
    "khush shu-dan":                             { fa: "خوش شدن", mean: "to be pleased" },
    "ma-shaw":                                   { fa: "مشو", mean: "do not become" },
    "kaz":                                       { fa: "کز", mean: "for from (ki + az)" },
    "roy":                                       { fa: "روی", mean: "face" },
    "ro-yi ma-naa":                              { fa: "روی معنا", mean: "the side of meaning" },
    "ma-naa":                                    { fa: "معنا", mean: "meaning" },
    "nay":                                       { fa: "نی", mean: "reed" },
    "khaa-ma":                                   { fa: "خامه", mean: "pen" },
    "ni-ko-tar":                                 { fa: "نکوتر", mean: "better" },
    "qand":                                      { fa: "قند", mean: "sugar" },
    "ra-naa-yee":                                { fa: "رعنایی", mean: "proud beauty, vanity" },
    "ma-nih":                                    { fa: "منه", mean: "do not put" },
    "ni-haa-dan":                                { fa: "نهادن", mean: "to put, to place" },
    "khaa-ki-yaan":                              { fa: "خاکیان", mean: "those in the earth, the dead" },
    "ee-shaan":                                  { fa: "ایشان", mean: "they" },
    "ham-chu":                                   { fa: "همچو", mean: "like" },
    "boo-dand":                                  { fa: "بودند", mean: "were" },
    "yak":                                       { fa: "یک", mean: "one, a" },
    "yak chand":                                 { fa: "یک چند", mean: "for a while" },
    "chand":                                     { fa: "چند", mean: "a few; how many" }
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
    "say": "a-meer khus-ra-wi dih-la-wee",
    "mean": "Amir Khusrow of Delhi",
    "words": [
      [
        "امیر",
        "a-meer",
        "a-meer"
      ],
      [
        "خسرو",
        "khus-ra-wi",
        "khus-raw"
      ],
      [
        "دهلوی",
        "dih-la-wee",
        "dih-la-wee"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "a-meer khus-ra-wi dih-la-wee pi-sa-ri a-meer sayf-ud-dee-ni mah-mood ha-keem wa daa-nish-man-di qar-ni haf-tum ast.",
        "mean": "Amir Khusrow of Delhi, son of Amir Saifuddin Mahmud, was a sage and scholar of the seventh century of the Islamic calendar.",
        "words": [
          [
            "امیر",
            "a-meer",
            "a-meer",
            "a-meer khus-ra-wi dih-la-wee"
          ],
          [
            "خسرو",
            "khus-ra-wi",
            "khus-raw",
            "a-meer khus-ra-wi dih-la-wee"
          ],
          [
            "دهلوی",
            "dih-la-wee",
            "dih-la-wee",
            "a-meer khus-ra-wi dih-la-wee"
          ],
          [
            "پسر",
            "pi-sa-ri",
            "pi-sar"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer",
            "a-meer sayf-ud-dee-ni mah-mood"
          ],
          [
            "سیف‌الدین",
            "sayf-ud-dee-ni",
            "sayf-ud-deen",
            "a-meer sayf-ud-dee-ni mah-mood"
          ],
          [
            "محمود",
            "mah-mood",
            "mah-mood",
            "a-meer sayf-ud-dee-ni mah-mood"
          ],
          [
            "حکیم",
            "ha-keem",
            "ha-keem"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دانشمند",
            "daa-nish-man-di",
            "daa-nish-mand"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn"
          ],
          [
            "هفتم",
            "haf-tum",
            "haf-tum"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "aan-gaah ki lash-ka-ri chan-gayz ba sar-za-mee-ni maa ba way-zha balkh yo-rish aa-word, a-meer sayf-ud-deen na-khaast yo-ghi i-saa-rat raa bar gar-dan ka-shad li-zaa mu-ta-waa-ree gar-deed.",
        "mean": "When Genghis's army attacked our land, especially Balkh, Amir Saifuddin did not want to put the yoke of captivity on his neck, so he fled.",
        "words": [
          [
            "آنگاه",
            "aan-gaah",
            "aan-gaah",
            "aan-gaah ki"
          ],
          [
            "که",
            "ki",
            "ki",
            "aan-gaah ki"
          ],
          [
            "لشکر",
            "lash-ka-ri",
            "lash-kar"
          ],
          [
            "چنگیز",
            "chan-gayz",
            "chan-gayz"
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
            "ما",
            "maa",
            "maa"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba way-zha"
          ],
          [
            "ویژه",
            "way-zha",
            "way-zha",
            "ba way-zha"
          ],
          [
            "بلخ",
            "balkh",
            "balkh"
          ],
          [
            "یورش",
            "yo-rish",
            "yo-rish",
            "yo-rish aa-word",
            "yo-rish aa-war-dan"
          ],
          [
            "آورد،",
            "aa-word",
            "aa-word",
            "yo-rish aa-word",
            "aa-war-dan",
            "yo-rish aa-war-dan"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "سیف‌الدین",
            "sayf-ud-deen",
            "sayf-ud-deen"
          ],
          [
            "نخواست",
            "na-khaast",
            "na-khaast",
            "khaas-tan"
          ],
          [
            "یوغ",
            "yo-ghi",
            "yogh",
            "yo-ghi i-saa-rat raa bar gar-dan ka-shad"
          ],
          [
            "اسارت",
            "i-saa-rat",
            "i-saa-rat",
            "yo-ghi i-saa-rat raa bar gar-dan ka-shad"
          ],
          [
            "را",
            "raa",
            "raa",
            "yo-ghi i-saa-rat raa bar gar-dan ka-shad"
          ],
          [
            "بر",
            "bar",
            "bar",
            "yo-ghi i-saa-rat raa bar gar-dan ka-shad"
          ],
          [
            "گردن",
            "gar-dan",
            "gar-dan",
            "yo-ghi i-saa-rat raa bar gar-dan ka-shad"
          ],
          [
            "کشد",
            "ka-shad",
            "ka-shad",
            "yo-ghi i-saa-rat raa bar gar-dan ka-shad",
            "ka-shee-dan"
          ],
          [
            "لذا",
            "li-zaa",
            "li-zaa"
          ],
          [
            "متواری",
            "mu-ta-waa-ree",
            "mu-ta-waa-ree",
            "mu-ta-waa-ree gar-deed",
            "mu-ta-waa-ree gar-dee-dan"
          ],
          [
            "گردید.",
            "gar-deed",
            "gar-deed",
            "mu-ta-waa-ree gar-deed",
            "gar-dee-dan",
            "mu-ta-waa-ree gar-dee-dan"
          ]
        ]
      },
      {
        "say": "chan-day dar saan-chaa-rak wa baad dar gor-ban-di par-waan i-qaa-mat gu-zeed wa dar a-kheer, raa-hee-yi pa-ti-yaa-la-yi hind gar-deed wa aan-jaa raa mas-ka-ni khaysh qa-raar daad.",
        "mean": "For a while he stayed in Sancharak and then in Ghorband in Parwan, and in the end he set out for Patiala in India and made it his home.",
        "words": [
          [
            "چندی",
            "chan-day",
            "chan-day"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سانچارک",
            "saan-chaa-rak",
            "saan-chaa-rak"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بعد",
            "baad",
            "baad#after"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "غوربند",
            "gor-ban-di",
            "gor-band"
          ],
          [
            "پروان",
            "par-waan",
            "par-waan"
          ],
          [
            "اقامت",
            "i-qaa-mat",
            "i-qaa-mat",
            "i-qaa-mat gu-zeed",
            "i-qaa-mat gu-zee-dan"
          ],
          [
            "گزید",
            "gu-zeed",
            "gu-zeed",
            "i-qaa-mat gu-zeed",
            "gu-zee-dan",
            "i-qaa-mat gu-zee-dan"
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
            "dar a-kheer"
          ],
          [
            "اخیر،",
            "a-kheer",
            "a-kheer",
            "dar a-kheer"
          ],
          [
            "راهی",
            "raa-hee-yi",
            "raa-hee"
          ],
          [
            "پتیالهٔ",
            "pa-ti-yaa-la-yi",
            "pa-ti-yaa-la"
          ],
          [
            "هند",
            "hind",
            "hind"
          ],
          [
            "گردید",
            "gar-deed",
            "gar-deed",
            "gar-dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آن‌جا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "مسکن",
            "mas-ka-ni",
            "mas-kan"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "qa-raar daad",
            "qa-raar daa-dan"
          ],
          [
            "داد.",
            "daad",
            "daad",
            "qa-raar daad",
            "daa-dan",
            "qa-raar daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ba-zay mu-ar-ri-khaan ma-ha-li ta-wal-lu-di a-meer-khus-raw raa gor-band wa bar-khay (mo-min aa-baa-di pa-ti-yaa-la) daa-nis-ta and.",
        "mean": "Some historians consider Ghorband to be Amir Khusrow's birthplace, and some Mu'minabad in Patiala.",
        "words": [
          [
            "بعضی",
            "ba-zay",
            "ba-zay"
          ],
          [
            "مؤرخان",
            "mu-ar-ri-khaan",
            "mu-ar-ri-khaan"
          ],
          [
            "محل",
            "ma-ha-li",
            "ma-hal"
          ],
          [
            "تولد",
            "ta-wal-lu-di",
            "ta-wal-lud"
          ],
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "غوربند",
            "gor-band",
            "gor-band"
          ],
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
            "(مؤمن",
            "mo-min",
            "mo-min",
            "mo-min aa-baa-di"
          ],
          [
            "آباد",
            "aa-baa-di",
            "aa-baad",
            "mo-min aa-baa-di"
          ],
          [
            "پتیاله)",
            "pa-ti-yaa-la",
            "pa-ti-yaa-la"
          ],
          [
            "دانسته",
            "daa-nis-ta",
            "daa-nis-ta",
            "daa-nis-ta and",
            "daa-nis-tan"
          ],
          [
            "اند.",
            "and",
            "and",
            "daa-nis-ta and",
            "daa-nis-tan"
          ]
        ]
      },
      {
        "say": "way dar saa-li shash-sa-du pan-jaa-hu yak hij-ree. qa-ma-ree. ba dun-yaa aa-mad.",
        "mean": "He was born in the year 651 of the Islamic calendar (1253).",
        "words": [
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
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۶۵۱",
            "shash-sa-du pan-jaa-hu yak",
            "shash-sa-du pan-jaa-hu yak"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree",
            "hij-ree qa-ma-ree"
          ],
          [
            "ق.",
            "qa-ma-ree",
            "qa-ma-ree",
            "hij-ree qa-ma-ree"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba dun-yaa aa-mad",
            "ba dun-yaa aa-ma-dan"
          ],
          [
            "دنیا",
            "dun-yaa",
            "dun-yaa",
            "ba dun-yaa aa-mad",
            "ba dun-yaa aa-ma-dan"
          ],
          [
            "آمد.",
            "aa-mad",
            "aa-mad",
            "ba dun-yaa aa-mad",
            "aa-ma-dan",
            "ba dun-yaa aa-ma-dan"
          ]
        ]
      },
      {
        "say": "a-meer-khus-raw dar ja-waa-nee ba khaa-ja-yi ni-zaam-ud-dee-ni aw-li-yaa, aa-ri-fi pur-aa-waa-za-yi hind pay-wast wa ba sayr wa su-loo-ki ir-faa-nee par-daakht.",
        "mean": "In his youth Amir Khusrow joined Khwaja Nizamuddin Auliya, the famous mystic of India, and took up the Sufi path.",
        "words": [
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "جوانی",
            "ja-waa-nee",
            "ja-waa-nee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خواجه",
            "khaa-ja-yi",
            "khaa-ja",
            "khaa-ja-yi ni-zaam-ud-dee-ni aw-li-yaa"
          ],
          [
            "نظام‌الدین",
            "ni-zaam-ud-dee-ni",
            "ni-zaam-ud-deen",
            "khaa-ja-yi ni-zaam-ud-dee-ni aw-li-yaa"
          ],
          [
            "اولیا،",
            "aw-li-yaa",
            "aw-li-yaa",
            "khaa-ja-yi ni-zaam-ud-dee-ni aw-li-yaa"
          ],
          [
            "عارف",
            "aa-ri-fi",
            "aa-rif"
          ],
          [
            "پرآوازهٔ",
            "pur-aa-waa-za-yi",
            "pur-aa-waa-za"
          ],
          [
            "هند",
            "hind",
            "hind"
          ],
          [
            "پیوست",
            "pay-wast",
            "pay-wast",
            "pay-was-tan"
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
            "سیر",
            "sayr",
            "sayr",
            "sayr wa su-loo-ki ir-faa-nee"
          ],
          [
            "و",
            "wa",
            "wa",
            "sayr wa su-loo-ki ir-faa-nee"
          ],
          [
            "سلوک",
            "su-loo-ki",
            "su-look",
            "sayr wa su-loo-ki ir-faa-nee"
          ],
          [
            "عرفانی",
            "ir-faa-nee",
            "ir-faa-nee",
            "sayr wa su-loo-ki ir-faa-nee"
          ],
          [
            "پرداخت.",
            "par-daakht",
            "par-daakht",
            "par-daakh-tan"
          ]
        ]
      },
      {
        "say": "a-meer-khus-raw dih-la-wee dost wa da-bee-ri dar-baa-ri haft tan az shaa-haa-ni hin-dee boo-da.",
        "mean": "Amir Khusrow of Delhi was a friend and court secretary of seven Indian kings.",
        "words": [
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ],
          [
            "دهلوی",
            "dih-la-wee",
            "dih-la-wee"
          ],
          [
            "دوست",
            "dost",
            "dost"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دبیر",
            "da-bee-ri",
            "da-beer"
          ],
          [
            "دربار",
            "dar-baa-ri",
            "dar-baar"
          ],
          [
            "هفت",
            "haft",
            "haft",
            "haft tan"
          ],
          [
            "تن",
            "tan",
            "tan",
            "haft tan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شاهان",
            "shaa-haa-ni",
            "shaa-haan"
          ],
          [
            "هندی",
            "hin-dee",
            "hin-dee"
          ],
          [
            "بوده.",
            "boo-da",
            "boo-da",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "oo ib-ti-daa sul-taa-nee ta-khal-lus may-kard;",
        "mean": "At first he used the pen name Sultani;",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "ابتدا",
            "ib-ti-daa",
            "ib-ti-daa"
          ],
          [
            "سلطانی",
            "sul-taa-nee",
            "sul-taa-nee"
          ],
          [
            "تخلص",
            "ta-khal-lus",
            "ta-khal-lus",
            "ta-khal-lus may-kard",
            "ta-khal-lus kar-dan"
          ],
          [
            "می‌کرد؛",
            "may-kard",
            "may-kard",
            "ta-khal-lus may-kard",
            "kar-dan",
            "ta-khal-lus kar-dan"
          ]
        ]
      },
      {
        "say": "si-pas ta-khal-lu-si khus-raw raa in-ti-khaab kard.",
        "mean": "later he chose the pen name Khusrow.",
        "words": [
          [
            "سپس",
            "si-pas",
            "si-pas"
          ],
          [
            "تخلص",
            "ta-khal-lu-si",
            "ta-khal-lus"
          ],
          [
            "خسرو",
            "khus-raw",
            "khus-raw"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "انتخاب",
            "in-ti-khaab",
            "in-ti-khaab",
            "in-ti-khaab kard",
            "in-ti-khaab kar-dan"
          ],
          [
            "کرد.",
            "kard",
            "kard",
            "in-ti-khaab kard",
            "kar-dan",
            "in-ti-khaab kar-dan"
          ]
        ]
      },
      {
        "say": "way dar shi'r ba gu-zash-ta-gaan ta-waj-juh daasht wa qa-see-da raa ba pay-ra-wee-yi mas-oo-di sad wa khaa-qaa-nee, mas-na-wee raa ba us-loo-bi sa-naa-yee, daas-taan-sa-raa-yee raa ba shay-wa-yi ni-zaa-mee wa gha-zal raa ba iq-ti-faa-yi sa-dee su-roo-da ast.",
        "mean": "In poetry he paid attention to the poets before him: he wrote odes following Mas'ud Sa'd and Khaqani, long rhymed poems in the manner of Sana'i, stories in verse in the style of Nizami, and ghazals following Sa'di.",
        "words": [
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
            "شعر",
            "shi'r",
            "shi'r"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "گذشته‌گان",
            "gu-zash-ta-gaan",
            "gu-zash-ta-gaan"
          ],
          [
            "توجه",
            "ta-waj-juh",
            "ta-waj-juh",
            "ta-waj-juh daasht",
            "ta-waj-juh daash-tan"
          ],
          [
            "داشت",
            "daasht",
            "daasht",
            "ta-waj-juh daasht",
            "daash-tan",
            "ta-waj-juh daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قصیده",
            "qa-see-da",
            "qa-see-da"
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
            "پیروی",
            "pay-ra-wee-yi",
            "pay-ra-wee"
          ],
          [
            "مسعود",
            "mas-oo-di",
            "mas-ood",
            "mas-oo-di sad"
          ],
          [
            "سعد",
            "sad",
            "sad#name",
            "mas-oo-di sad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خاقانی،",
            "khaa-qaa-nee",
            "khaa-qaa-nee"
          ],
          [
            "مثنوی",
            "mas-na-wee",
            "mas-na-wee"
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
            "اسلوب",
            "us-loo-bi",
            "us-loob"
          ],
          [
            "سنایی،",
            "sa-naa-yee",
            "sa-naa-yee"
          ],
          [
            "داستانسرایی",
            "daas-taan-sa-raa-yee",
            "daas-taan-sa-raa-yee"
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
            "شیوهٔ",
            "shay-wa-yi",
            "shay-wa"
          ],
          [
            "نظامی",
            "ni-zaa-mee",
            "ni-zaa-mee"
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
            "اقتفای",
            "iq-ti-faa-yi",
            "iq-ti-faa"
          ],
          [
            "سعدی",
            "sa-dee",
            "sa-dee"
          ],
          [
            "سروده",
            "su-roo-da",
            "su-roo-da",
            "su-roo-dan"
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
        "say": "a-meer-khus-raw dar shi'r lah-ni khaa-say daasht ki baad-haa shaa-i-raan shay-wa-yi way raa bar-gu-zee-da, pa-ra-wa-rish daa-dand wa im-roz aan shay-wa mash-hoor ba sab-ki hin-dee ast.",
        "mean": "Amir Khusrow had a special tone in poetry, which later poets chose and developed, and today that style is known as the Indian style.",
        "words": [
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "شعر",
            "shi'r",
            "shi'r"
          ],
          [
            "لحن",
            "lah-ni",
            "lahn"
          ],
          [
            "خاصی",
            "khaa-say",
            "khaa-say"
          ],
          [
            "داشت",
            "daasht",
            "daasht",
            "daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بعدها",
            "baad-haa",
            "baad-haa#later"
          ],
          [
            "شاعران",
            "shaa-i-raan",
            "shaa-i-raan"
          ],
          [
            "شیوهٔ",
            "shay-wa-yi",
            "shay-wa"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "برگزیده،",
            "bar-gu-zee-da",
            "bar-gu-zee-da",
            "bar-gu-zee-dan"
          ],
          [
            "پرورش",
            "pa-ra-wa-rish",
            "pa-ra-wa-rish",
            "pa-ra-wa-rish daa-dand",
            "pa-ra-wa-rish daa-dan"
          ],
          [
            "دادند",
            "daa-dand",
            "daa-dand",
            "pa-ra-wa-rish daa-dand",
            "daa-dan",
            "pa-ra-wa-rish daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امروز",
            "im-roz",
            "im-roz"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "شیوه",
            "shay-wa",
            "shay-wa"
          ],
          [
            "مشهور",
            "mash-hoor",
            "mash-hoor",
            "mash-hoor ba"
          ],
          [
            "به",
            "ba",
            "ba",
            "mash-hoor ba"
          ],
          [
            "سبک",
            "sab-ki",
            "sabk",
            "sab-ki hin-dee"
          ],
          [
            "هندی",
            "hin-dee",
            "hin-dee",
            "sab-ki hin-dee"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "aa-saa-ri a-meer khus-raw raa maj-moo-an na-wad wa nuh a-sar guf-ta and ki az aan jum-la mash-hoor-ta-ree-ni aan qi-raan-us-sa-dayn, nuh si-pihr wa fat-taah al-fu-tooh ast.",
        "mean": "Amir Khusrow's works are said to be ninety-nine in all, and the most famous of them are Qiran al-Sa'dayn, Nuh Sipihr and Fattah al-Futuh.",
        "words": [
          [
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "خسرو",
            "khus-raw",
            "khus-raw"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "مجموعاً",
            "maj-moo-an",
            "maj-moo-an"
          ],
          [
            "نود",
            "na-wad",
            "na-wad",
            "na-wad wa nuh"
          ],
          [
            "و",
            "wa",
            "wa",
            "na-wad wa nuh"
          ],
          [
            "نه",
            "nuh",
            "nuh",
            "na-wad wa nuh"
          ],
          [
            "اثر",
            "a-sar",
            "a-sar"
          ],
          [
            "گفته",
            "guf-ta",
            "guf-ta",
            "guf-ta and",
            "guf-tan"
          ],
          [
            "اند",
            "and",
            "and",
            "guf-ta and",
            "guf-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "از",
            "az",
            "az",
            "az aan jum-la"
          ],
          [
            "آن",
            "aan",
            "aan",
            "az aan jum-la"
          ],
          [
            "جمله",
            "jum-la",
            "jum-la",
            "az aan jum-la"
          ],
          [
            "مشهورترین",
            "mash-hoor-ta-ree-ni",
            "mash-hoor-ta-reen"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "قِران‌السعدین،",
            "qi-raan-us-sa-dayn",
            "qi-raan-us-sa-dayn"
          ],
          [
            "نه",
            "nuh",
            "nuh",
            "nuh si-pihr"
          ],
          [
            "سپهر",
            "si-pihr",
            "si-pihr",
            "nuh si-pihr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فتاح",
            "fat-taah",
            "fat-taah",
            "fat-taah al-fu-tooh"
          ],
          [
            "الفتوح",
            "al-fu-tooh",
            "al-fu-tooh",
            "fat-taah al-fu-tooh"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "a-meer-khus-raw “kham-sa” ham su-roo-da ast ki shaa-mi-li panj mas-na-wee mat-la-ul-an-waar, shee-reen wa khus-raw, maj-noon wa lay-laa, aa-yee-na-yi si-kan-da-ree wa hasht bi-hisht ast.",
        "mean": "Amir Khusrow also wrote a “Khamsa”, a set of five long poems: Matla' al-Anwar, Shirin and Khusrow, Majnun and Layla, The Mirror of Alexander and The Eight Paradises.",
        "words": [
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ],
          [
            "«خمسه»",
            "kham-sa",
            "kham-sa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "سروده",
            "su-roo-da",
            "su-roo-da",
            "su-roo-dan"
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
            "شامل",
            "shaa-mi-li",
            "shaa-mil"
          ],
          [
            "پنج",
            "panj",
            "panj"
          ],
          [
            "مثنوی",
            "mas-na-wee",
            "mas-na-wee"
          ],
          [
            "مطلع‌الانوار،",
            "mat-la-ul-an-waar",
            "mat-la-ul-an-waar"
          ],
          [
            "شیرین",
            "shee-reen",
            "shee-reen",
            "shee-reen wa khus-raw"
          ],
          [
            "و",
            "wa",
            "wa",
            "shee-reen wa khus-raw"
          ],
          [
            "خسرو،",
            "khus-raw",
            "khus-raw",
            "shee-reen wa khus-raw"
          ],
          [
            "مجنون",
            "maj-noon",
            "maj-noon",
            "maj-noon wa lay-laa"
          ],
          [
            "و",
            "wa",
            "wa",
            "maj-noon wa lay-laa"
          ],
          [
            "لیلی،",
            "lay-laa",
            "lay-laa",
            "maj-noon wa lay-laa"
          ],
          [
            "آیینه",
            "aa-yee-na-yi",
            "aa-yee-na",
            "aa-yee-na-yi si-kan-da-ree"
          ],
          [
            "سکندری",
            "si-kan-da-ree",
            "si-kan-da-ree",
            "aa-yee-na-yi si-kan-da-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هشت",
            "hasht",
            "hasht",
            "hasht bi-hisht"
          ],
          [
            "بهشت",
            "bi-hisht",
            "bi-hisht",
            "hasht bi-hisht"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "oo dar fa-ni in-shaa, ki-taa-bay na-wish-ta ast ki ra-saa-yil naam daa-rad.",
        "mean": "In the art of letter writing he wrote a book called Rasa'il.",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "فن",
            "fa-ni",
            "fan"
          ],
          [
            "انشا،",
            "in-shaa",
            "in-shaa"
          ],
          [
            "کتابی",
            "ki-taa-bay",
            "ki-taa-bay"
          ],
          [
            "نوشته",
            "na-wish-ta",
            "na-wish-ta",
            "na-wish-tan"
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
            "رسایل",
            "ra-saa-yil",
            "ra-saa-yil"
          ],
          [
            "نام",
            "naam",
            "naam",
            "naam daa-rad",
            "naam daash-tan"
          ],
          [
            "دارد.",
            "daa-rad",
            "daa-rad",
            "naam daa-rad",
            "daash-tan",
            "naam daash-tan"
          ]
        ]
      },
      {
        "say": "kham-sa-yi a-meer-khus-raw dar hu-doo-di hazh-da ha-zaar bayt ast ki aan raa dar ta-yi sih saal su-roo-da ast.",
        "mean": "Amir Khusrow's Khamsa is about eighteen thousand lines long, and he wrote it over three years.",
        "words": [
          [
            "خمسهٔ",
            "kham-sa-yi",
            "kham-sa"
          ],
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar hu-doo-di"
          ],
          [
            "حدود",
            "hu-doo-di",
            "hu-dood",
            "dar hu-doo-di"
          ],
          [
            "هژده",
            "hazh-da",
            "hazh-da",
            "hazh-da ha-zaar"
          ],
          [
            "هزار",
            "ha-zaar",
            "ha-zaar",
            "hazh-da ha-zaar"
          ],
          [
            "بیت",
            "bayt",
            "bayt"
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
            "در",
            "dar",
            "dar",
            "dar ta-yi"
          ],
          [
            "طی",
            "ta-yi",
            "tay",
            "dar ta-yi"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "سال",
            "saal",
            "saal"
          ],
          [
            "سروده",
            "su-roo-da",
            "su-roo-da",
            "su-roo-dan"
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
        "say": "a-meer-khus-raw a-laa-wa bar shaa-i-ree wa na-wee-san-da-gee dar hu-na-ri mo-see-qee neez us-taad bood.",
        "mean": "Besides poetry and writing, Amir Khusrow was also a master of the art of music.",
        "words": [
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ],
          [
            "علاوه",
            "a-laa-wa",
            "a-laa-wa",
            "a-laa-wa bar"
          ],
          [
            "بر",
            "bar",
            "bar",
            "a-laa-wa bar"
          ],
          [
            "شاعری",
            "shaa-i-ree",
            "shaa-i-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نویسنده‌گی",
            "na-wee-san-da-gee",
            "na-wee-san-da-gee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "هنر",
            "hu-na-ri",
            "hu-nar"
          ],
          [
            "موسیقی",
            "mo-see-qee",
            "mo-see-qee"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
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
        "say": "us-taad “ra-wee shan-kar” mo-see-qee-daa-ni bu-zur-gi hin-dus-taan, ikh-ti-raa wa ik-maa-li aa-la-yi mo-see-qee-yi sih taar raa ta-was-su-ti a-meer-khus-raw daa-nis-ta wa ba tash-ree-hi aj-zaa-yi aan dar ma-haa-fi-li mo-see-qee par-daakh-ta ast.",
        "mean": "Ustad Ravi Shankar, the great musician of India, has credited Amir Khusrow with inventing and perfecting the sitar, and has explained its parts in gatherings of musicians.",
        "words": [
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "«روی",
            "ra-wee",
            "ra-wee#ravi"
          ],
          [
            "شنکر»",
            "shan-kar",
            "shan-kar"
          ],
          [
            "موسیقی‌دان",
            "mo-see-qee-daa-ni",
            "mo-see-qee-daan"
          ],
          [
            "بزرگ",
            "bu-zur-gi",
            "bu-zurg"
          ],
          [
            "هندوستان،",
            "hin-dus-taan",
            "hin-dus-taan"
          ],
          [
            "اختراع",
            "ikh-ti-raa",
            "ikh-ti-raa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اکمال",
            "ik-maa-li",
            "ik-maal"
          ],
          [
            "آلهٔ",
            "aa-la-yi",
            "aa-la"
          ],
          [
            "موسیقی",
            "mo-see-qee-yi",
            "mo-see-qee"
          ],
          [
            "سه",
            "sih",
            "sih",
            "sih taar"
          ],
          [
            "تار",
            "taar",
            "taar",
            "sih taar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ],
          [
            "دانسته",
            "daa-nis-ta",
            "daa-nis-ta",
            "daa-nis-tan"
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
            "تشریح",
            "tash-ree-hi",
            "tash-reeh"
          ],
          [
            "اجزای",
            "aj-zaa-yi",
            "aj-zaa"
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
            "محافل",
            "ma-haa-fi-li",
            "ma-haa-fil"
          ],
          [
            "موسیقی",
            "mo-see-qee",
            "mo-see-qee"
          ],
          [
            "پرداخته",
            "par-daakh-ta",
            "par-daakh-ta",
            "par-daakh-ta ast",
            "par-daakh-tan"
          ],
          [
            "است.",
            "ast",
            "ast",
            "par-daakh-ta ast",
            "par-daakh-tan"
          ]
        ]
      },
      {
        "say": "een shaa-i-ri naa-mee ba saa-li haft-sa-du bees-tu panj hij-ree wa-faat kar-da wa qab-ri oo naz-dee-ki ma-zaa-ri khaa-ja-yi ni-zaam-ud-dee-ni aw-li-yaa dar dih-lee ast.",
        "mean": "This famous poet died in the year 725 of the Islamic calendar (1325), and his grave is near the shrine of Khwaja Nizamuddin Auliya in Delhi.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "شاعر",
            "shaa-i-ri",
            "shaa-ir"
          ],
          [
            "نامی",
            "naa-mee",
            "naa-mee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۷۲۵",
            "haft-sa-du bees-tu panj",
            "haft-sa-du bees-tu panj"
          ],
          [
            "هجری",
            "hij-ree",
            "hij-ree#year"
          ],
          [
            "وفات",
            "wa-faat",
            "wa-faat",
            "wa-faat kar-da",
            "wa-faat kar-dan"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "wa-faat kar-da",
            "kar-dan",
            "wa-faat kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قبر",
            "qab-ri",
            "qabr"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "نزدیک",
            "naz-dee-ki",
            "naz-deek"
          ],
          [
            "مزار",
            "ma-zaa-ri",
            "ma-zaar"
          ],
          [
            "خواجه",
            "khaa-ja-yi",
            "khaa-ja"
          ],
          [
            "نظام‌الدین",
            "ni-zaam-ud-dee-ni",
            "ni-zaam-ud-deen"
          ],
          [
            "اولیا",
            "aw-li-yaa",
            "aw-li-yaa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دهلی",
            "dih-lee",
            "dih-lee"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "az a-meer-khus-raw pi-sa-ray ba naa-mi ah-mad ba-jaa maand ki dar fa-ni naq-di shi'r das-ta-ra-see daasht.",
        "mean": "Amir Khusrow left a son named Ahmad, who was skilled in the art of judging poetry.",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ],
          [
            "پسری",
            "pi-sa-ray",
            "pi-sa-ray"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba naa-mi"
          ],
          [
            "نام",
            "naa-mi",
            "naam",
            "ba naa-mi"
          ],
          [
            "احمد",
            "ah-mad",
            "ah-mad"
          ],
          [
            "به‌جا",
            "ba-jaa",
            "ba-jaa",
            "ba-jaa maand",
            "ba-jaa maan-dan"
          ],
          [
            "ماند",
            "maand",
            "maand",
            "ba-jaa maand",
            "maan-dan",
            "ba-jaa maan-dan"
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
            "فن",
            "fa-ni",
            "fan"
          ],
          [
            "نقد",
            "naq-di",
            "naqd"
          ],
          [
            "شعر",
            "shi'r",
            "shi'r"
          ],
          [
            "دسترسی",
            "das-ta-ra-see",
            "das-ta-ra-see",
            "das-ta-ra-see daasht",
            "das-ta-ra-see daash-tan"
          ],
          [
            "داشت.",
            "daasht",
            "daasht",
            "das-ta-ra-see daasht",
            "daash-tan",
            "das-ta-ra-see daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "na-mo-na-yi ka-laa-mi a-meer-khus-raw",
        "mean": "A sample of Amir Khusrow's poetry",
        "words": [
          [
            "نمونهٔ",
            "na-mo-na-yi",
            "na-mo-na"
          ],
          [
            "کلام",
            "ka-laa-mi",
            "ka-laam"
          ],
          [
            "امیرخسرو",
            "a-meer-khus-raw",
            "a-meer-khus-raw"
          ]
        ]
      }
    ],
    [
      {
        "say": "za ah-li aql na-pa-san-dad khi-rad-mand",
        "mean": "A wise man does not want people of sense",
        "words": [
          [
            "ز",
            "za",
            "za"
          ],
          [
            "اهل",
            "ah-li",
            "ahl"
          ],
          [
            "عقل",
            "aql",
            "aql"
          ],
          [
            "نپسندد",
            "na-pa-san-dad",
            "na-pa-san-dad",
            "pa-san-dee-dan"
          ],
          [
            "خردمند",
            "khi-rad-mand",
            "khi-rad-mand"
          ]
        ]
      },
      {
        "say": "ki daa-rad raf-ta-nee raa paa-yi dar band",
        "mean": "to keep the foot of what must go in chains.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ],
          [
            "رفتنی",
            "raf-ta-nee",
            "raf-ta-nee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "پای",
            "paa-yi",
            "paa"
          ],
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
          ]
        ]
      }
    ],
    [
      {
        "say": "na-seeb im-roz bar-geer az ma-taa-ay",
        "mean": "Take your share today of the goods",
        "words": [
          [
            "نصیب",
            "na-seeb",
            "na-seeb"
          ],
          [
            "امروز",
            "im-roz",
            "im-roz"
          ],
          [
            "برگیر",
            "bar-geer",
            "bar-geer",
            "bar-gi-rif-tan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "متاعی",
            "ma-taa-ay",
            "ma-taa-ay"
          ]
        ]
      },
      {
        "say": "ki far-daa gar-da-dash ghay-ri khu-daa-wand",
        "mean": "whose owner will be someone else tomorrow.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "فردا",
            "far-daa",
            "far-daa"
          ],
          [
            "گرددش",
            "gar-da-dash",
            "gar-da-dash"
          ],
          [
            "غیر",
            "ghay-ri",
            "ghayr"
          ],
          [
            "خداوند",
            "khu-daa-wand",
            "khu-daa-wand"
          ]
        ]
      }
    ],
    [
      {
        "say": "li-baa-si zin-da-gee bar khud ma-kun tang",
        "mean": "Do not make the clothes of life tight on yourself,",
        "words": [
          [
            "لباس",
            "li-baa-si",
            "li-baas",
            "li-baa-si zin-da-gee bar khud ma-kun tang"
          ],
          [
            "زنده‌گی",
            "zin-da-gee",
            "zin-da-gee",
            "li-baa-si zin-da-gee bar khud ma-kun tang"
          ],
          [
            "بر",
            "bar",
            "bar",
            "li-baa-si zin-da-gee bar khud ma-kun tang"
          ],
          [
            "خود",
            "khud",
            "khud",
            "li-baa-si zin-da-gee bar khud ma-kun tang"
          ],
          [
            "مکن",
            "ma-kun",
            "ma-kun",
            "li-baa-si zin-da-gee bar khud ma-kun tang",
            "kar-dan"
          ],
          [
            "تنگ",
            "tang",
            "tang",
            "li-baa-si zin-da-gee bar khud ma-kun tang"
          ]
        ]
      },
      {
        "say": "ki choon shud paa-ra na-ta-waan kard pay-wand",
        "mean": "for once they tear they cannot be mended.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "شد",
            "shud",
            "shud",
            "shu-dan"
          ],
          [
            "پاره",
            "paa-ra",
            "paa-ra"
          ],
          [
            "نتوان",
            "na-ta-waan",
            "na-ta-waan",
            "na-ta-waan kard pay-wand",
            "pay-wand kar-dan"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "na-ta-waan kard pay-wand",
            "kar-dan",
            "pay-wand kar-dan"
          ],
          [
            "پیوند",
            "pay-wand",
            "pay-wand",
            "na-ta-waan kard pay-wand",
            "pay-wand kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ma-khor gham bah-ri-yi far-zan-day wa maa-lay",
        "mean": "Do not grieve for a child or for wealth;",
        "words": [
          [
            "مخور",
            "ma-khor",
            "ma-khor",
            "ma-khor gham",
            "khor-dan",
            "gham khor-dan"
          ],
          [
            "غم",
            "gham",
            "gham",
            "ma-khor gham",
            "gham khor-dan"
          ],
          [
            "بهر",
            "bah-ri-yi",
            "bah-ri"
          ],
          [
            "فرزندی",
            "far-zan-day",
            "far-zan-day"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مالی",
            "maa-lay",
            "maa-lay"
          ]
        ]
      },
      {
        "say": "ki maa-lat deen bas ast wa khayr far-zand",
        "mean": "your faith is wealth enough, and good deeds your child.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مالت",
            "maa-lat",
            "maa-lat"
          ],
          [
            "دین",
            "deen",
            "deen"
          ],
          [
            "بس",
            "bas",
            "bas"
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
            "خیر",
            "khayr",
            "khayr"
          ],
          [
            "فرزند",
            "far-zand",
            "far-zand"
          ]
        ]
      }
    ],
    [
      {
        "say": "a-gar khaa-hee na-bee-nee ran-ji bi-si-yaar",
        "mean": "If you want to avoid much hardship,",
        "words": [
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "خواهی",
            "khaa-hee",
            "khaa-hee",
            "khaas-tan"
          ],
          [
            "نبینی",
            "na-bee-nee",
            "na-bee-nee",
            "dee-dan"
          ],
          [
            "رنج",
            "ran-ji",
            "ranj"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ]
        ]
      },
      {
        "say": "ba an-dak maa-ya raa-hat baash wa khur-sand",
        "mean": "be at ease and content with a little.",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "اندک",
            "an-dak",
            "an-dak",
            "an-dak maa-ya"
          ],
          [
            "مایه",
            "maa-ya",
            "maa-ya",
            "an-dak maa-ya"
          ],
          [
            "راحت",
            "raa-hat",
            "raa-hat"
          ],
          [
            "باش",
            "baash",
            "baash",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خرسند",
            "khur-sand",
            "khur-sand"
          ]
        ]
      }
    ],
    [
      {
        "say": "ba soo-rat khush ma-shaw kaz ro-yi ma-naa",
        "mean": "Do not be won by looks, for in meaning",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "صورت",
            "soo-rat",
            "soo-rat"
          ],
          [
            "خوش",
            "khush",
            "khush",
            "khush ma-shaw",
            "khush shu-dan"
          ],
          [
            "مشو",
            "ma-shaw",
            "ma-shaw",
            "khush ma-shaw",
            "shu-dan",
            "khush shu-dan"
          ],
          [
            "کز",
            "kaz",
            "kaz"
          ],
          [
            "روی",
            "ro-yi",
            "roy",
            "ro-yi ma-naa"
          ],
          [
            "معنا",
            "ma-naa",
            "ma-naa",
            "ro-yi ma-naa"
          ]
        ]
      },
      {
        "say": "na-yi khaa-ma ni-ko-tar az na-yi qand",
        "mean": "the reed of a pen is better than the reed of sugar cane.",
        "words": [
          [
            "نی",
            "na-yi",
            "nay"
          ],
          [
            "خامه",
            "khaa-ma",
            "khaa-ma"
          ],
          [
            "نکوتر",
            "ni-ko-tar",
            "ni-ko-tar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نی",
            "na-yi",
            "nay"
          ],
          [
            "قند",
            "qand",
            "qand"
          ]
        ]
      }
    ],
    [
      {
        "say": "ba ra-naa-yee ma-nih bar khaa-ki-yaan paa-yi",
        "mean": "Do not proudly set your foot on those under the earth,",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "رعنایی",
            "ra-naa-yee",
            "ra-naa-yee"
          ],
          [
            "منه",
            "ma-nih",
            "ma-nih",
            "ni-haa-dan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "خاکیان",
            "khaa-ki-yaan",
            "khaa-ki-yaan"
          ],
          [
            "پای",
            "paa-yi",
            "paa"
          ]
        ]
      },
      {
        "say": "ki ee-shaan ham-chu maa boo-dand yak chand",
        "mean": "for for a while they were just like us.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "ایشان",
            "ee-shaan",
            "ee-shaan"
          ],
          [
            "همچو",
            "ham-chu",
            "ham-chu"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "بودند",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ],
          [
            "یک",
            "yak",
            "yak",
            "yak chand"
          ],
          [
            "چند",
            "chand",
            "chand",
            "yak chand"
          ]
        ]
      }
    ]
  ]
});
