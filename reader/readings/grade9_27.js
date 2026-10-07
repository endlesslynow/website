/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 27, book pages 172-173, PDF pages 179-180 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «ازنسلی» is written «از نسلی»; «ازجملهٔ» is written «از جملهٔ»; «عامیانه‌،» is written «عامیانه،»; «است‌.» is written «است.»; «ساده‌،» is written «ساده،»; «وپدید» is written «و پدید»; «هرشکل» is written «هر شکل»; «شعرعامیانه» is written «شعر عامیانه»; «و...یا» is written «و... یا»; «و...در» is written «و... در»; «وجادویی» is written «و جادویی»; «منثورکه» is written «منثور که».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-27',
  group: 'Dari · grade 9',
  label: 'Lesson 27',
  name: "a-da-bee-yaa-ti fol-klor",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_27.jpg',
    alt: "Old men sitting among sacks of grain and goods in a bazaar shop."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_27.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "a-da-bee-yaat":                              { fa: "ادبیات", mean: "literature" },
    "fol-klor":                                   { fa: "فولکلور", mean: "folklore" },
    "ya-kay":                                     { fa: "یکی", mean: "one" },
    "az":                                         { fa: "از", mean: "from, of" },
    "shaa-kha-haa-yi":                            { fa: "شاخه‌های", mean: "branches" },
    "shaa-kha":                                   { fa: "شاخه", mean: "branch" },
    "far-hang":                                   { fa: "فرهنگ", mean: "culture" },
    "aa-mi-yaa-na":                               { fa: "عامیانه", mean: "colloquial" },
    "yaa":                                        { fa: "یا", mean: "or" },
    "a-dab":                                      { fa: "ادب", mean: "literature, learning" },
    "sha-faa-hee":                                { fa: "شفاهی", mean: "oral, spoken" },
    "ast":                                        { fa: "است", mean: "is" },
    "ki":                                         { fa: "که", mean: "that, which, who" },
    "shaa-mil":                                   { fa: "شامل", mean: "including" },
    "qis-sa-haa":                                 { fa: "قصه‌ها", mean: "tales, stories" },
    "af-saa-na-haa":                              { fa: "افسانه‌ها", mean: "legends" },
    "us-too-ra-haa":                              { fa: "اسطوره‌ها", mean: "myths" },
    "ta-raa-na-haa":                              { fa: "ترانه‌ها", mean: "songs" },
    "tas-neef-haa":                               { fa: "تصنیف‌ها", mean: "ballads, songs" },
    "baa-zee-haa":                                { fa: "بازی‌ها", mean: "games" },
    "man-zoom":                                   { fa: "منظوم", mean: "in verse, versified" },
    "am-saal":                                    { fa: "امثال", mean: "the like" },
    "am-saal wa hukm":                            { fa: "امثال و حکم", mean: "proverbs and sayings" },
    "wa":                                         { fa: "و", mean: "and" },
    "hukm":                                       { fa: "حکم", mean: "ruling, rule" },
    "zarb-ul-ma-sal-haa":                         { fa: "ضرب‌المثل‌ها", mean: "proverbs" },
    "chees-taan-haa":                             { fa: "چیستان‌ها", mean: "riddles" },
    "guf-taa-ree":                                { fa: "گفتاری", mean: "spoken" },
    "far-dee":                                    { fa: "فردی", mean: "personal" },
    "ba":                                         { fa: "به", mean: "to" },
    "fard":                                       { fa: "فرد", mean: "person, individual" },
    "dee-gar":                                    { fa: "دیگر", mean: "other; more; anymore" },
    "nas-lay":                                    { fa: "نسلی", mean: "a generation" },
    "nasl":                                       { fa: "نسل", mean: "generation" },
    "mun-ta-qil":                                 { fa: "منتقل", mean: "transferred, passed on" },
    "mun-ta-qil may-sha-wad":                     { fa: "منتقل می‌شود", mean: "is passed on" },
    "mun-ta-qil shu-dan":                         { fa: "منتقل شدن", mean: "to be passed on" },
    "may-sha-wad":                                { fa: "می‌شود", mean: "becomes" },
    "shu-dan":                                    { fa: "شدن", mean: "to become" },
    "een":                                        { fa: "این", mean: "this" },
    "maj-moo-a":                                  { fa: "مجموعه", mean: "collection, whole" },
    "az jum-la-yi":                               { fa: "از جملهٔ", mean: "among, one of" },
    "jum-la":                                     { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "mush-ta-ra-kaat":                            { fa: "مشترکات", mean: "shared things" },
    "far-han-gee":                                { fa: "فرهنگی", mean: "cultural" },
    "yak":                                        { fa: "یک", mean: "one, a" },
    "mil-lat":                                    { fa: "ملت", mean: "nation" },
    "aa-mil":                                     { fa: "عامل", mean: "cause, factor" },
    "pay-wand":                                   { fa: "پیوند", mean: "joining, mending" },
    "aan-haast":                                  { fa: "آن‌هاست", mean: "is theirs; they are (aan-haa + ast)" },
    "choon":                                      { fa: "چون", mean: "like, as; when; because" },
    "aam-ma":                                     { fa: "عامه", mean: "the common people; popular" },
    "mu-ta-al-liq":                               { fa: "متعلق", mean: "belonging" },
    "mar-dum":                                    { fa: "مردم", mean: "people" },
    "az een-roo":                                 { fa: "از این‌رو", mean: "therefore, for this reason" },
    "een-roo":                                    { fa: "این‌رو", mean: "this reason (az een-roo, so)" },
    "ham":                                        { fa: "هم", mean: "also, too" },
    "pay-wan-day":                                { fa: "پیوندی", mean: "a tie, a bond" },
    "baa":                                        { fa: "با", mean: "with" },
    "waa-qi-i-yat-haa":                           { fa: "واقعیت‌ها", mean: "realities, facts" },
    "zin-da-gee":                                 { fa: "زنده‌گی", mean: "life" },
    "aa-dee":                                     { fa: "عادی", mean: "ordinary" },
    "daa-rad":                                    { fa: "دارد", mean: "has" },
    "daash-tan":                                  { fa: "داشتن", mean: "to have" },
    "naw#type":                                   { fa: "نوع", say: "naw", mean: "kind, type" },
    "dar":                                        { fa: "در", mean: "in" },
    "dar waa-qi":                                 { fa: "در واقع", mean: "in fact" },
    "waa-qi":                                     { fa: "واقع", mean: "situated; becoming" },
    "baaz-taab":                                  { fa: "بازتاب", mean: "reflection" },
    "ij-ti-maa-ee":                               { fa: "اجتماعی", mean: "social" },
    "shay-wa":                                    { fa: "شیوه", mean: "style, way" },
    "kaar":                                       { fa: "کار", mean: "work, a job" },
    "taw-leed":                                   { fa: "تولید", mean: "production, producing" },
    "aan-haa":                                    { fa: "آن‌ها", mean: "they, them" },
    "ni-shaan":                                   { fa: "نشان", mean: "sign, show" },
    "ni-shaan di-han-da-yi":                      { fa: "نشان دهندهٔ", mean: "showing" },
    "di-han-da":                                  { fa: "دهنده", mean: "giver (ra'y di-han-da, voter)" },
    "raf-taar":                                   { fa: "رفتار", mean: "behavior, conduct" },
    "an-day-sha":                                 { fa: "اندیشه", mean: "thought" },
    "ih-saas":                                    { fa: "احساس", mean: "feeling" },
    "maz-hab":                                    { fa: "مذهب", mean: "religion, sect" },
    "akh-laaq":                                   { fa: "اخلاق", mean: "character, manners, morals" },
    "i-ti-qaa-daat":                              { fa: "اعتقادات", mean: "beliefs" },
    "har":                                        { fa: "هر", mean: "every" },
    "jaa-mi-a":                                   { fa: "جامعه", mean: "society" },
    "ba-zan":                                     { fa: "بعضاً", mean: "some of them, partly" },
    "ha-noz":                                     { fa: "هنوز", mean: "still, yet" },
    "ba sabt wa zabt na-ra-see-da":               { fa: "به ثبت و ضبط نرسیده", mean: "has not been recorded" },
    "sabt":                                       { fa: "ثبت", mean: "recording, being recorded" },
    "zabt":                                       { fa: "ضبط", mean: "recording" },
    "na-ra-see-da":                               { fa: "نرسیده", mean: "not reached" },
    "ra-see-dan":                                 { fa: "رسیدن", mean: "to arrive, to reach" },
    "na-wish-ta":                                 { fa: "نوشته", mean: "written" },
    "na-wish-ta na-shu-da ast":                   { fa: "نوشته نشده است", mean: "has not been written down" },
    "na-wish-tan":                                { fa: "نوشتن", mean: "to write" },
    "na-shu-da":                                  { fa: "نشده", mean: "not become" },
    "aa-saa-ray":                                 { fa: "آثاری", mean: "works (aa-saar + -ay)" },
    "hast":                                       { fa: "هست", mean: "is, there is" },
    "bu-dan":                                     { fa: "بودن", mean: "to be" },
    "ghaa-li-ban":                                { fa: "غالباً", mean: "mostly, usually" },
    "pa-deed":                                    { fa: "پدید", mean: "visible, appearing" },
    "pa-deed aa-ma-da":                           { fa: "پدید آمده", mean: "created" },
    "aa-ma-da":                                   { fa: "آمده", mean: "come" },
    "aa-ma-dan":                                  { fa: "آمدن", mean: "to come" },
    "ta-was-sut":                                 { fa: "توسط", mean: "by, through" },
    "mar-du-maa-nay":                             { fa: "مردمانی", mean: "people (who)" },
    "bay-sa-waad":                                { fa: "بیسواد", mean: "unable to read" },
    "kam":                                        { fa: "کم", mean: "few, little" },
    "kam sa-waad":                                { fa: "کم سواد", mean: "barely literate" },
    "sa-waad":                                    { fa: "سواد", mean: "reading and writing" },
    "az ji-ha-ti":                                { fa: "از جهت", mean: "in terms of" },
    "ji-hat":                                     { fa: "جهت", mean: "direction" },
    "saakh-taar":                                 { fa: "ساختار", mean: "structure" },
    "muh-ta-waa":                                 { fa: "محتوا", mean: "content" },
    "mak-toob":                                   { fa: "مکتوب", mean: "written" },
    "zu-baan":                                    { fa: "زبان", mean: "language; tongue" },
    "da-ree":                                     { fa: "دری", mean: "Dari, the Persian of Afghanistan" },
    "mu-ta-faa-wit":                              { fa: "متفاوت", mean: "different" },
    "saa-da":                                     { fa: "ساده", mean: "simple, plain" },
    "lahn":                                       { fa: "لحن", mean: "tone" },
    "haa-laat":                                   { fa: "حالات", mean: "moods, states" },
    "an-day-sha-haa":                             { fa: "اندیشه‌ها", mean: "thoughts" },
    "a-waam":                                     { fa: "عوام", mean: "ordinary people" },
    "na-maa-yaan":                                { fa: "نمایان", mean: "visible, showing" },
    "fol-klor-shi-naa-saan":                      { fa: "فولکلورشناسان", mean: "folklorists" },
    "raa":                                        { fa: "را", mean: "marks the object of the verb" },
    "du":                                         { fa: "دو", mean: "two" },
    "bakhsh":                                     { fa: "بخش", mean: "Bakhsh; part" },
    "ri-waa-yat-haa":                             { fa: "روایت‌ها", mean: "stories, tellings" },
    "man-soor":                                   { fa: "منثور", mean: "in prose" },
    "taq-seem":                                   { fa: "تقسیم", mean: "division, dividing" },
    "taq-seem kar-da and":                        { fa: "تقسیم کرده اند", mean: "have divided" },
    "taq-seem kar-dan":                           { fa: "تقسیم کردن", mean: "to divide" },
    "kar-da":                                     { fa: "کرده", mean: "done" },
    "kar-dan":                                    { fa: "کردن", mean: "to do, to make" },
    "and":                                        { fa: "اند", mean: "are; after a word like shu-da, have" },
    "shi'r":                                      { fa: "شعر", mean: "poetry, poem" },
    "faa-ri-see":                                 { fa: "فارسی", mean: "Persian" },
    "dar asl":                                    { fa: "در اصل", mean: "basically" },
    "asl":                                        { fa: "اصل", mean: "principle" },
    "goo-na":                                     { fa: "گونه", mean: "kind, type" },
    "mi-yaa-ree":                                 { fa: "معیاری", mean: "standard" },
    "mu-khaa-ta-baan":                            { fa: "مخاطبان", mean: "audience" },
    "aan":                                        { fa: "آن", mean: "that" },
    "baysh-tar":                                  { fa: "بیشتر", mean: "more" },
    "ta-ba-qa":                                   { fa: "طبقه", mean: "class, layer" },
    "baa-sa-waad":                                { fa: "باسواد", mean: "able to read, literate" },
    "tah-seel":                                   { fa: "تحصیل", mean: "study, education" },
    "tah-seel kar-da":                            { fa: "تحصیل کرده", mean: "educated" },
    "ta-raf":                                     { fa: "طرف", mean: "side; the other person" },
    "ta-ra-fi ta-waj-ju-hi aa-ma-yi mar-dum":     { fa: "طرف توجه عامهٔ مردم", mean: "loved by ordinary people" },
    "ta-waj-juh":                                 { fa: "توجه", mean: "attention" },
    "aa-ma-yi":                                   { fa: "عامهٔ", mean: "common people, public" },
    "dil":                                        { fa: "دل", mean: "heart" },
    "shaa-i-raa-nay":                             { fa: "شاعرانی", mean: "poets (who)" },
    "gum-naam":                                   { fa: "گمنام", mean: "unknown, nameless" },
    "bar-aa-ma-da":                               { fa: "برآمده", mean: "come out" },
    "bar-aa-ma-dan":                              { fa: "برآمدن", mean: "to go up; to go out" },
    "shakl":                                      { fa: "شکل", mean: "form, shape" },
    "aa-yee-na":                                  { fa: "آیینه", mean: "mirror" },
    "rooh":                                       { fa: "روح", mean: "spirit, soul" },
    "mil-lat-haa":                                { fa: "ملت‌ها", mean: "nations" },
    "tar-ju-maan":                                { fa: "ترجمان", mean: "interpreter, voice" },
    "ih-saa-saat":                                { fa: "احساسات", mean: "feelings" },
    "paak":                                       { fa: "پاک", mean: "clean" },
    "sa-mee-mee":                                 { fa: "صمیمی", mean: "sincere" },
    "ash-aar":                                    { fa: "اشعار", mean: "poems, verses" },
    "ba wa-see-la-yi":                            { fa: "به وسیلهٔ", mean: "by means of" },
    "wa-see-la-yi":                               { fa: "وسیلهٔ", mean: "means, instrument" },
    "ta-saa-weer":                                { fa: "تصاویر", mean: "images, pictures" },
    "tash-bee-haat":                              { fa: "تشبیهات", mean: "similes" },
    "mah-soos":                                   { fa: "محسوس", mean: "vivid, perceptible" },
    "dil-pa-zeer":                                { fa: "دلپذیر", mean: "pleasing" },
    "khush":                                      { fa: "خوش", mean: "pleasant, happy" },
    "khush aa-hang":                              { fa: "خوش آهنگ", mean: "tuneful" },
    "aa-hang":                                    { fa: "آهنگ", mean: "song, tune" },
    "az-haan":                                    { fa: "اذهان", mean: "minds" },
    "mar-du-mi ko-cha wa baa-zaar":               { fa: "مردم کوچه و بازار", mean: "ordinary people - literally people of the lane and the bazaar" },
    "ko-cha":                                     { fa: "کوچه", mean: "lane, street" },
    "baa-zaar":                                   { fa: "بازار", mean: "market" },
    "may-ni-shee-nad":                            { fa: "می‌نشیند", mean: "sits; settles" },
    "ni-shas-tan":                                { fa: "نشستن", mean: "to sit" },
    "bar":                                        { fa: "بر", mean: "on, upon" },
    "bar zu-baan-haa jaa-ree":                    { fa: "بر زبان‌ها جاری", mean: "running on people's tongues" },
    "zu-baan-haa":                                { fa: "زبان‌ها", mean: "tongues; languages" },
    "jaa-ree":                                    { fa: "جاری", mean: "flowing; to utter" },
    "zam-za-ma":                                  { fa: "زمزمه", mean: "soft singing, humming" },
    "zam-za-ma may-sha-wad":                      { fa: "زمزمه می‌شود", mean: "is hummed" },
    "gaah":                                       { fa: "گاه", mean: "sometimes; time, place" },
    "su-rood-haa":                                { fa: "سرودها", mean: "songs, anthems" },
    "ma-hal-lee":                                 { fa: "محلی", mean: "local" },
    "aan chu-naan":                               { fa: "آن چنان", mean: "so" },
    "chu-naan":                                   { fa: "چنان", mean: "so, such, in such a way" },
    "ma-roof":                                    { fa: "معروف", mean: "famous" },
    "may-sha-wand":                               { fa: "می‌شوند", mean: "become, are" },
    "haw-za":                                     { fa: "حوزه", mean: "area, region" },
    "jugh-raa-fi-yaa-yee":                        { fa: "جغرافیایی", mean: "geographical" },
    "khud":                                       { fa: "خود", mean: "own; self" },
    "paa":                                        { fa: "پا", mean: "foot, leg" },
    "paa fa-raa-tar gu-zaash-ta":                 { fa: "پا فراتر گذاشته", mean: "going beyond" },
    "fa-raa-tar":                                 { fa: "فراتر", mean: "beyond, further" },
    "gu-zaash-ta":                                { fa: "گذاشته", mean: "placed, put" },
    "gu-zaash-tan":                               { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "ra-deef":                                    { fa: "ردیف", mean: "row, rank" },
    "mil-lee":                                    { fa: "ملی", mean: "national" },
    "ba shu-maar may-aa-yand":                    { fa: "به شمار می‌آیند", mean: "are counted" },
    "ba shu-maar aa-ma-dan":                      { fa: "به شمار آمدن", mean: "to be counted" },
    "shu-maar":                                   { fa: "شمار", mean: "count, number" },
    "may-aa-yand":                                { fa: "می‌آیند", mean: "come; (with paysh) behave" },
    "ta-raa-na":                                  { fa: "ترانه", mean: "song" },
    "du bay-tee":                                 { fa: "دو بیتی", mean: "do-bayti, a four-line folk verse" },
    "bay-tee":                                    { fa: "بیتی", mean: "-line (du bay-tee, a four-line folk verse of two couplets)" },
    "chi-haar-bay-tee":                           { fa: "چهاربیتی", mean: "chahar-bayti, a four-couplet folk verse" },
    "san-gar-dee":                                { fa: "سنگردی", mean: "sangardi, a kind of folk verse" },
    "bayt":                                       { fa: "بیت", mean: "line of poetry, couplet" },
    "bay-ti kur-da-kee":                          { fa: "بیت کُردَکی", mean: "bayt-i kurdaki, a kind of folk verse" },
    "kur-da-kee":                                 { fa: "کُردَکی", mean: "kurdaki, a kind of folk verse" },
    "ko-cha baa-ghee":                            { fa: "کوچه باغی", mean: "kucha-baghi, a kind of folk song of Kabul" },
    "baa-ghee":                                   { fa: "باغی", mean: "of the garden (koo-cha baa-ghee, a kind of folk song of Kabul)" },
    "see-ghaa-nee":                               { fa: "سیغانی", mean: "sighani, a kind of folk verse" },
    "zarb-ul-ma-sal":                             { fa: "ضرب‌المثل", mean: "proverb" },
    "chees-taan":                                 { fa: "چیستان", mean: "riddle" },
    "goo-na-haa":                                 { fa: "گونه‌ها", mean: "kinds" },
    "mukh-ta-lif":                                { fa: "مختلف", mean: "different, various" },
    "kaar-burd-haa":                              { fa: "کاربردها", mean: "uses" },
    "goo-naa-goo-nay":                            { fa: "گوناگونی", mean: "various (with -ay)" },
    "daa-rand":                                   { fa: "دارند", mean: "have" },
    "roz-mar-ra":                                 { fa: "روزمره", mean: "daily, everyday" },
    "maw-qi-yat-haa":                             { fa: "موقعیت‌ها", mean: "situations" },
    "za-maan-haa":                                { fa: "زمان‌ها", mean: "times" },
    "khaas":                                      { fa: "خاص", mean: "special" },
    "is-ti-faa-da":                               { fa: "استفاده", mean: "use" },
    "is-ti-faa-da may-sha-wad":                   { fa: "استفاده می‌شود", mean: "is used" },
    "is-ti-faa-da shu-dan":                       { fa: "استفاده شدن", mean: "to be used" },
    "ma-raa-sim":                                 { fa: "مراسم", mean: "ceremonies" },
    "ta-wal-lud":                                 { fa: "تولد", mean: "birth" },
    "a-roo-see":                                  { fa: "عروسی", mean: "wedding" },
    "a-zaa-daa-ree":                              { fa: "عزاداری", mean: "mourning" },
    "pa-ra-wa-rish":                              { fa: "پرورش", mean: "raising, developing" },
    "koo-dak":                                    { fa: "کودک", mean: "child" },
    "bad-ra-qa":                                  { fa: "بدرقه", mean: "sending off, accompaniment" },
    "a'-yaad":                                    { fa: "اعیاد", mean: "holidays, festivals" },
    "jashn-haa":                                  { fa: "جشن‌ها", mean: "celebrations" },
    "dee-nee":                                    { fa: "دینی", mean: "religious" },
    "han-gaam":                                   { fa: "هنگام", mean: "time (han-gaam-i, at the time of)" },
    "ra-ma-chi-raa-nee":                          { fa: "رمه‌چرانی", mean: "herding" },
    "qaa-leen-baa-fee":                           { fa: "قالین‌بافی", mean: "carpet weaving" },
    "shaa-lee-ko-bee":                            { fa: "شالی‌کوبی", mean: "threshing rice" },
    "sheer-do-shee":                              { fa: "شیردوشی", mean: "milking" },
    "is-ti-raa-hat":                              { fa: "استراحت", mean: "rest" },
    "dar bar-gee-ran-da-yi":                      { fa: "در برگیرندهٔ", mean: "containing" },
    "bar-gee-ran-da":                             { fa: "برگیرنده", mean: "containing (dar bar-gee-ran-da)" },
    "u-sool":                                     { fa: "اصول", mean: "rules, principles" },
    "a-qee-da-tee":                               { fa: "عقیدتی", mean: "of belief" },
    "baa-wa-ree":                                 { fa: "باوری", mean: "of belief" },
    "ee-maa-nee":                                 { fa: "ایمانی", mean: "of faith" },
    "as-tand":                                    { fa: "استند", mean: "are" },
    "dar-baa-ra-yi":                              { fa: "دربارهٔ", mean: "about" },
    "ja-haan":                                    { fa: "جهان", mean: "world" },
    "ba-shar":                                    { fa: "بشر", mean: "humankind" },
    "marg":                                       { fa: "مرگ", mean: "death" },
    "kha-saa-yis":                                { fa: "خصایص", mean: "qualities" },
    "in-saan":                                    { fa: "انسان", mean: "a person, a human being" },
    "ha-ya-waan":                                 { fa: "حیوان", mean: "animal" },
    "qaa-lib":                                    { fa: "قالب", mean: "form, framework" },
    "daa-staan":                                  { fa: "داستان", mean: "story" },
    "ma-taa-li-bay":                              { fa: "مطالبی", mean: "things, matters" },
    "i-raa-a":                                    { fa: "ارائه", mean: "presenting, offering" },
    "i-raa-a may-di-hand":                        { fa: "ارائه می‌دهند", mean: "present" },
    "i-raa-a daa-dan":                            { fa: "ارائه دادن", mean: "to present" },
    "may-di-hand":                                { fa: "می‌دهند", mean: "give" },
    "daa-dan":                                    { fa: "دادن", mean: "to give" },
    "neez":                                       { fa: "نیز", mean: "also, too" },
    "dee-ga-ray":                                 { fa: "دیگری", mean: "someone else" },
    "ri-waa-yaat":                                { fa: "روایات", mean: "reports, traditions" },
    "has-tand":                                   { fa: "هستند", mean: "are" },
    "ba khoo-bee":                                { fa: "به خوبی", mean: "well, clearly" },
    "khoo-bee":                                   { fa: "خوبی", mean: "goodness" },
    "mee-ta-waa-neem":                            { fa: "می‌توانیم", mean: "we can" },
    "ta-waa-nis-tan":                             { fa: "توانستن", mean: "to be able, can" },
    "aa-maal":                                    { fa: "اعمال", mean: "deeds, actions" },
    "af-kaar":                                    { fa: "افکار", mean: "thoughts, ideas" },
    "fikr":                                       { fa: "فکر", mean: "thought" },
    "a-waa-tif":                                  { fa: "عواطف", mean: "emotions" },
    "in-saa-nee":                                 { fa: "انسانی", mean: "human" },
    "pay-daa":                                    { fa: "پیدا", mean: "found, visible" },
    "pay-daa ku-naym":                            { fa: "پیدا کنیم", mean: "find" },
    "pay-daa kar-dan":                            { fa: "پیدا کردن", mean: "to find" },
    "ku-naym":                                    { fa: "کنیم", mean: "we do" },
    "saakh-ti-maan":                              { fa: "ساختمان", mean: "construction, building" },
    "pur":                                        { fa: "پر", mean: "full" },
    "pur ramz wa raaz":                           { fa: "پر رمز و راز", mean: "full of mystery" },
    "ramz":                                       { fa: "رمز", mean: "mystery, symbol" },
    "raaz":                                       { fa: "راز", mean: "secret" },
    "may-ta-waan":                                { fa: "می‌توان", mean: "one can" },
    "chi-haar":                                   { fa: "چهار", mean: "four" },
    "das-ta":                                     { fa: "دسته", mean: "group, band" },
    "kul-lee":                                    { fa: "کلی", mean: "general" },
    "taq-seem kard":                              { fa: "تقسیم کرد", mean: "divide" },
    "kard":                                       { fa: "کرد", mean: "did, made" },
    "yak#digit":                                  { fa: "۱", say: "yak", mean: "one" },
    "kha-yaa-lee":                                { fa: "خیالی", mean: "imaginary, fantasy" },
    "ha-waa-dis":                                 { fa: "حوادث", mean: "cases, events" },
    "maa-ja-raa-haa":                             { fa: "ماجراها", mean: "adventures" },
    "a-jeeb":                                     { fa: "عجیب", mean: "strange" },
    "maw-joo-daat":                               { fa: "موجودات", mean: "creatures, beings" },
    "ta-khay-yu-lee":                             { fa: "تخیلی", mean: "imaginary" },
    "wah-mee":                                    { fa: "وهمی", mean: "fanciful" },
    "jaa-doo-yee":                                { fa: "جادویی", mean: "magical" },
    "du#digit":                                   { fa: "۲", say: "du", mean: "two" },
    "ha-qee-qee":                                 { fa: "حقیقی", mean: "real, true" },
    "ba-yaan":                                    { fa: "بیان", mean: "expression" },
    "an-da-kay":                                  { fa: "اندکی", mean: "a little" },
    "mu-baa-li-gha":                              { fa: "مبالغه", mean: "exaggeration" },
    "sih#digit":                                  { fa: "۳", say: "sih", mean: "three" },
    "taa-ree-khee":                               { fa: "تاریخی", mean: "historical" },
    "sar-gu-zasht":                               { fa: "سرگذشت", mean: "life story" },
    "hay-rat-aa-war":                             { fa: "حیرت‌آور", mean: "amazing" },
    "shi-gift-an-geez":                           { fa: "شگفت‌انگیز", mean: "astonishing" },
    "ay-yaa-raan":                                { fa: "عیاران", mean: "ayyars" },
    "pah-la-waa-naan":                            { fa: "پهلوانان", mean: "heroes, champions" },
    "shaa-haan":                                  { fa: "شاهان", mean: "kings" },
    "a-mee-raan":                                 { fa: "امیران", mean: "princes, emirs" },
    "chaar":                                      { fa: "۴", mean: "four" },
    "sho-khee-aa-meez":                           { fa: "شوخی‌آمیز", mean: "humorous" },
    "jam-ba-yi":                                  { fa: "جنبه‌ی", mean: "side, aspect (with -i)" },
    "hazl":                                       { fa: "هزل", mean: "joking, jest" },
    "sho-khee":                                   { fa: "شوخی", mean: "insolence, playfulness" },
    "qi-sa-haa-yi":                               { fa: "قصه‌های", mean: "stories" },
    "ha-ya-waa-naat":                             { fa: "حیوانات", mean: "animals" },
    "ramz-goo-na":                                { fa: "رمزگونه", mean: "symbolic" },
    "baa-laa":                                    { fa: "بالا", mean: "top, height" },
    "a-laa-wa":                                   { fa: "علاوه", mean: "addition (a-laa-wa bar, besides)" },
    "a-laa-wa na-mood":                           { fa: "علاوه نمود", mean: "add" },
    "a-laa-wa na-mo-dan":                         { fa: "علاوه نمودن", mean: "to add" },
    "na-mood":                                    { fa: "نمود", mean: "showed; did" },
    "na-mo-dan":                                  { fa: "نمودن", mean: "to do; to show; to seem" },
    "zar-bul-ma-sal-haa-yi":                      { fa: "ضرب‌المثل‌های", mean: "proverbs" },
    "mi-yaan":                                    { fa: "میان", mean: "middle, among" },
    "gus-tar-da":                                 { fa: "گسترده", mean: "spread, wide" },
    "gus-tar-da shu-da-and":                      { fa: "گسترده شده‌اند", mean: "have spread" },
    "shu-da-and":                                 { fa: "شده‌اند", mean: "have become" },
    "an-waa":                                     { fa: "انواع", mean: "kinds" },
    "raa-yij":                                    { fa: "رایج", mean: "common, current" },
    "ba il-la-ti":                                { fa: "به علت", mean: "because of" },
    "il-lat":                                     { fa: "علت", mean: "cause, reason" },
    "fa-saa-hat":                                 { fa: "فصاحت", mean: "fluency, eloquence" },
    "zay-baa-yee":                                { fa: "زیبایی", mean: "beauty" },
    "maz-moon":                                   { fa: "مضمون", mean: "content, meaning" },
    "maq-bool":                                   { fa: "مقبول", mean: "accepted" },
    "maq-boo-li ta-bi aam-ma waa-qi may-sha-wad": { fa: "مقبول طبع عامه واقع می‌شود", mean: "pleases ordinary people" },
    "tab":                                        { fa: "طبع", mean: "taste, nature" },
    "aa-naan":                                    { fa: "آنان", mean: "they, them" },
    "shaa-yi":                                    { fa: "شایع", mean: "widespread" },
    "shaa-yi may-gar-dad":                        { fa: "شایع می‌گردد", mean: "spreads" },
    "may-gar-dad":                                { fa: "می‌گردد", mean: "becomes, turns" },
    "gar-dee-dan":                                { fa: "گردیدن", mean: "to become, to turn" },
    "baa ta-waj-juh ba":                          { fa: "با توجه به", mean: "given" },
    "ma-aa-nee":                                  { fa: "معانی", mean: "meanings" },
    "a-meeq":                                     { fa: "عمیق", mean: "deep" },
    "baa-reek":                                   { fa: "باریک", mean: "subtle, fine" },
    "mu-naa-sib":                                 { fa: "مناسب", mean: "suitable" },
    "ba kaar may-ra-wad":                         { fa: "به کار می‌رود", mean: "is used" },
    "ba kaar raf-tan":                            { fa: "به کار رفتن", mean: "to be used" },
    "may-ra-wad":                                 { fa: "می‌رود", mean: "goes" },
    "raf-tan":                                    { fa: "رفتن", mean: "to go" },
    "dar na-tee-ja":                              { fa: "در نتیجه", mean: "as a result" },
    "na-tee-ja":                                  { fa: "نتیجه", mean: "result" },
    "ee-jaaz":                                    { fa: "ایجاز", mean: "brevity" },
    "ka-laam":                                    { fa: "کلام", mean: "speech; poetry" },
    "ku-mak":                                     { fa: "کمک", mean: "help" },
    "ku-mak may-ku-nad":                          { fa: "کمک می‌کند", mean: "helps" },
    "ku-mak kar-dan":                             { fa: "کمک کردن", mean: "to help" },
    "may-ku-nad":                                 { fa: "می‌کند", mean: "does, makes" },
    "tar-kee-bee":                                { fa: "ترکیبی", mean: "a combination, combined" },
    "pay-chee-da":                                { fa: "پیچیده", mean: "complicated" },
    "muh-ta-waa-yay":                             { fa: "محتوایی", mean: "content (with -ay)" },
    "sang-geen":                                  { fa: "سنگین", mean: "heavy" },
    "bar-khor-daar":                              { fa: "برخوردار", mean: "possessing, enjoying" },
    "bar-khor-daar ast":                          { fa: "برخوردار است", mean: "have" },
    "bu-zurg-saa-laan":                           { fa: "بزرگ‌سالان", mean: "adults" },
    "ba kaar may-ba-rand":                        { fa: "به کار می‌برند", mean: "use" },
    "ba kaar bur-dan":                            { fa: "به کار بردن", mean: "to use" },
    "may-ba-rand":                                { fa: "می‌برند", mean: "take, carry; spend" },
    "bur-dan":                                    { fa: "بردن", mean: "to take away, to carry" },
    "khu-soo-si-yaat":                            { fa: "خصوصیات", mean: "qualities" },
    "kay-fi-yaa-tay":                             { fa: "کیفیاتی", mean: "qualities (with -ay)" },
    "aa-dam-haa":                                 { fa: "آدم‌ها", mean: "people" },
    "gi-yaa-haan":                                { fa: "گیاهان", mean: "plants" },
    "ta-bee-at":                                  { fa: "طبیعت", mean: "nature" },
    "is-ti-aa-ra":                                { fa: "استعاره", mean: "metaphor" },
    "tam-seel":                                   { fa: "تمثیل", mean: "comparison, allegory" },
    "tas-weer":                                   { fa: "تصویر", mean: "picture" },
    "taw-seef":                                   { fa: "توصیف", mean: "description" },
    "ba-yaan may-ku-nand":                        { fa: "بیان می‌کنند", mean: "describe" },
    "may-ku-nand":                                { fa: "می‌کنند", mean: "they do" },
    "paa-sukh":                                   { fa: "پاسخ", mean: "an answer" },
    "naam":                                       { fa: "نام", mean: "name" },
    "jo-yaa":                                     { fa: "جویا", mean: "seeking, asking" },
    "jo-yaa may-sha-wand":                        { fa: "جویا می‌شوند", mean: "ask for" },
    "baa-yad":                                    { fa: "باید", mean: "must, should" },
    "guft":                                       { fa: "گفت", mean: "said" },
    "guf-tan":                                    { fa: "گفتن", mean: "to say, to tell" },
    "na-tan-haa":                                 { fa: "نه‌تنها", mean: "not only" },
    "baa-ra-wa-ree":                              { fa: "باروری", mean: "fruitfulness, enriching" },
    "gha-naa-mand":                               { fa: "غنامند", mean: "rich" },
    "gha-naa-mand kar-da-ni":                     { fa: "غنامند کردن", mean: "enriching" },
    "mak-too-baat":                               { fa: "مکتوبات", mean: "written works" },
    "ar-sa":                                      { fa: "عرصه", mean: "field, arena" },
    "bal-ki":                                     { fa: "بلکه", mean: "but rather" },
    "mo-jib":                                     { fa: "موجب", mean: "cause" },
    "is-tih-kaam":                                { fa: "استحکام", mean: "strengthening" },
    "waz":                                        { fa: "وضع", mean: "condition, situation" },
    "tan-haa":                                    { fa: "تنها", mean: "only; alone" },
    "neest":                                      { fa: "نیست", mean: "is not" },
    "sar-za-mee-nay":                             { fa: "سرزمینی", mean: "a land" },
    "fa-raaz":                                    { fa: "فراز", mean: "rise, high point" },
    "fa-raaz wa na-shee-bi":                      { fa: "فراز و نشیب", mean: "ups and downs" },
    "na-sheeb":                                   { fa: "نشیب", mean: "descent, decline" },
    "taa-reekh":                                  { fa: "تاریخ", mean: "history; date" },
    "zihn":                                       { fa: "ذهن", mean: "mind" },
    "mar-daan":                                   { fa: "مردان", mean: "men" },
    "za-naan":                                    { fa: "زنان", mean: "women" },
    "sar-za-meen":                                { fa: "سرزمین", mean: "land, country" },
    "gu-zash-ta":                                 { fa: "گذشته", mean: "the past; passed" },
    "gu-zash-tan":                                { fa: "گذشتن", mean: "to pass" },
    "taa":                                        { fa: "تا", mean: "so that; until; to" },
    "za-maa-na":                                  { fa: "زمانه", mean: "the age, the times" },
    "maa":                                        { fa: "ما", mean: "we" },
    "i-daa-ma":                                   { fa: "ادامه", mean: "continuation" },
    "i-daa-ma yaaf-ta ast":                       { fa: "ادامه یافته است", mean: "has continued" },
    "i-daa-ma yaaf-tan":                          { fa: "ادامه یافتن", mean: "to continue" },
    "yaaf-ta":                                    { fa: "یافته", mean: "found; having been carried" },
    "yaaf-tan":                                   { fa: "یافتن", mean: "to find" }
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
    "say": "a-da-bee-yaa-ti fol-klor",
    "mean": "Folk literature",
    "words": [
      [
        "ادبیات",
        "a-da-bee-yaa-ti",
        "a-da-bee-yaat"
      ],
      [
        "فولکلور",
        "fol-klor",
        "fol-klor"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "ya-kay az shaa-kha-haa-yi-yi far-han-gi aa-mi-yaa-na yaa fol-klor, a-da-bee-yaa-ti aa-mi-yaa-na yaa a-da-bi sha-faa-hee ast ki shaa-mi-li qis-sa-haa, af-saa-na-haa, us-too-ra-haa, ta-raa-na-haa, tas-neef-haa, baa-zee-haa-yi man-zoom, am-saal wa hukm, zarb-ul-ma-sal-haa wa chees-taan-haa-yi guf-taa-ree ast ki az far-dee ba far-di dee-gar yaa az nas-lay ba nas-li dee-gar mun-ta-qil may-sha-wad;",
        "mean": "One branch of popular culture, or folklore, is folk literature, or oral literature, which includes tales, legends, myths, songs, ballads, rhyming games, proverbs and sayings, and spoken riddles that are passed from one person to another or from one generation to the next;",
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
            "شاخه‌های",
            "shaa-kha-haa-yi-yi",
            "shaa-kha-haa-yi",
            "shaa-kha"
          ],
          [
            "فرهنگ",
            "far-han-gi",
            "far-hang"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "فولکلور،",
            "fol-klor",
            "fol-klor"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "ادب",
            "a-da-bi",
            "a-dab"
          ],
          [
            "شفاهی",
            "sha-faa-hee",
            "sha-faa-hee"
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
            "قصه‌ها،",
            "qis-sa-haa",
            "qis-sa-haa"
          ],
          [
            "افسانه‌ها،",
            "af-saa-na-haa",
            "af-saa-na-haa"
          ],
          [
            "اسطوره‌ها،",
            "us-too-ra-haa",
            "us-too-ra-haa"
          ],
          [
            "ترانه‌ها،",
            "ta-raa-na-haa",
            "ta-raa-na-haa"
          ],
          [
            "تصنیف‌ها،",
            "tas-neef-haa",
            "tas-neef-haa"
          ],
          [
            "بازی‌های",
            "baa-zee-haa-yi",
            "baa-zee-haa"
          ],
          [
            "منظوم،",
            "man-zoom",
            "man-zoom"
          ],
          [
            "امثال",
            "am-saal",
            "am-saal",
            "am-saal wa hukm"
          ],
          [
            "و",
            "wa",
            "wa",
            "am-saal wa hukm"
          ],
          [
            "حکم،",
            "hukm",
            "hukm",
            "am-saal wa hukm"
          ],
          [
            "ضرب‌المثل‌ها",
            "zarb-ul-ma-sal-haa",
            "zarb-ul-ma-sal-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چیستان‌های",
            "chees-taan-haa-yi",
            "chees-taan-haa"
          ],
          [
            "گفتاری",
            "guf-taa-ree",
            "guf-taa-ree"
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
            "از",
            "az",
            "az"
          ],
          [
            "فردی",
            "far-dee",
            "far-dee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "فرد",
            "far-di",
            "fard"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نسلی",
            "nas-lay",
            "nas-lay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "نسل",
            "nas-li",
            "nasl"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "منتقل",
            "mun-ta-qil",
            "mun-ta-qil",
            "mun-ta-qil may-sha-wad",
            "mun-ta-qil shu-dan"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "mun-ta-qil may-sha-wad",
            "shu-dan",
            "mun-ta-qil shu-dan"
          ]
        ]
      },
      {
        "say": "een maj-moo-a, az jum-la-yi mush-ta-ra-kaa-ti far-han-gee-yi yak mil-lat wa aa-mi-li pay-wan-di aan-haast.",
        "mean": "this collection is part of a nation's shared culture and something that binds its people together.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "مجموعه،",
            "maj-moo-a",
            "maj-moo-a"
          ],
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
            "مشترکات",
            "mush-ta-ra-kaa-ti",
            "mush-ta-ra-kaat"
          ],
          [
            "فرهنگی",
            "far-han-gee-yi",
            "far-han-gee"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "ملت",
            "mil-lat",
            "mil-lat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عامل",
            "aa-mi-li",
            "aa-mil"
          ],
          [
            "پیوند",
            "pay-wan-di",
            "pay-wand"
          ],
          [
            "آن‌هاست.",
            "aan-haast",
            "aan-haast"
          ]
        ]
      }
    ],
    [
      {
        "say": "choon far-han-gi aam-ma mu-ta-al-liq ba mar-du-mi aam-ma ast, az een-roo a-da-bee-yaa-ti aam-ma ham pay-wan-day baa waa-qi-i-yat-haa-yi zin-da-gee-yi aa-dee-yi mar-dum daa-rad.",
        "mean": "Since popular culture belongs to ordinary people, popular literature too is tied to the realities of people's everyday lives.",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "فرهنگ",
            "far-han-gi",
            "far-hang"
          ],
          [
            "عامه",
            "aam-ma",
            "aam-ma"
          ],
          [
            "متعلق",
            "mu-ta-al-liq",
            "mu-ta-al-liq"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مردم",
            "mar-du-mi",
            "mar-dum"
          ],
          [
            "عامه",
            "aam-ma",
            "aam-ma"
          ],
          [
            "است،",
            "ast",
            "ast"
          ],
          [
            "از",
            "az",
            "az",
            "az een-roo"
          ],
          [
            "این‌رو",
            "een-roo",
            "een-roo",
            "az een-roo"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "عامه",
            "aam-ma",
            "aam-ma"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "پیوندی",
            "pay-wan-day",
            "pay-wan-day"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "واقعیت‌های",
            "waa-qi-i-yat-haa-yi",
            "waa-qi-i-yat-haa"
          ],
          [
            "زنده‌گی",
            "zin-da-gee-yi",
            "zin-da-gee"
          ],
          [
            "عادی",
            "aa-dee-yi",
            "aa-dee"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
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
        "say": "een na-wi a-da-bee-yaat dar waa-qi baaz-taa-bi zin-da-gee-yi ij-ti-maa-ee wa far-han-gee-yi mar-dum, shay-wa-yi kaar wa taw-lee-di aan-haa wa ni-shaan di-han-da-yi raf-taar, an-day-sha, ih-saas, maz-hab, akh-laaq wa i-ti-qaa-daa-ti har jaa-mi-a ast ki ba-zan ha-noz ham ba sabt wa zabt na-ra-see-da wa na-wish-ta na-shu-da ast.",
        "mean": "This kind of literature is in fact a reflection of people's social and cultural life and their ways of working and producing, and it shows the behavior, thought, feeling, religion, morals and beliefs of each society, some of which have still not been recorded or written down.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "نوع",
            "na-wi",
            "naw#type"
          ],
          [
            "ادبیات",
            "a-da-bee-yaat",
            "a-da-bee-yaat"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar waa-qi"
          ],
          [
            "واقع",
            "waa-qi",
            "waa-qi",
            "dar waa-qi"
          ],
          [
            "بازتاب",
            "baaz-taa-bi",
            "baaz-taab"
          ],
          [
            "زنده‌گی",
            "zin-da-gee-yi",
            "zin-da-gee"
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
            "فرهنگی",
            "far-han-gee-yi",
            "far-han-gee"
          ],
          [
            "مردم،",
            "mar-dum",
            "mar-dum"
          ],
          [
            "شیوهٔ",
            "shay-wa-yi",
            "shay-wa"
          ],
          [
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تولید",
            "taw-lee-di",
            "taw-leed"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نشان",
            "ni-shaan",
            "ni-shaan",
            "ni-shaan di-han-da-yi"
          ],
          [
            "دهندهٔ",
            "di-han-da-yi",
            "di-han-da",
            "ni-shaan di-han-da-yi"
          ],
          [
            "رفتار،",
            "raf-taar",
            "raf-taar"
          ],
          [
            "اندیشه،",
            "an-day-sha",
            "an-day-sha"
          ],
          [
            "احساس،",
            "ih-saas",
            "ih-saas"
          ],
          [
            "مذهب،",
            "maz-hab",
            "maz-hab"
          ],
          [
            "اخلاق",
            "akh-laaq",
            "akh-laaq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اعتقادات",
            "i-ti-qaa-daa-ti",
            "i-ti-qaa-daat"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "جامعه",
            "jaa-mi-a",
            "jaa-mi-a"
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
            "بعضاً",
            "ba-zan",
            "ba-zan"
          ],
          [
            "هنوز",
            "ha-noz",
            "ha-noz"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba sabt wa zabt na-ra-see-da"
          ],
          [
            "ثبت",
            "sabt",
            "sabt",
            "ba sabt wa zabt na-ra-see-da"
          ],
          [
            "و",
            "wa",
            "wa",
            "ba sabt wa zabt na-ra-see-da"
          ],
          [
            "ضبط",
            "zabt",
            "zabt",
            "ba sabt wa zabt na-ra-see-da"
          ],
          [
            "نرسیده",
            "na-ra-see-da",
            "na-ra-see-da",
            "ba sabt wa zabt na-ra-see-da",
            "ra-see-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نوشته",
            "na-wish-ta",
            "na-wish-ta",
            "na-wish-ta na-shu-da ast",
            "na-wish-tan"
          ],
          [
            "نشده",
            "na-shu-da",
            "na-shu-da",
            "na-wish-ta na-shu-da ast",
            "shu-dan"
          ],
          [
            "است.",
            "ast",
            "ast",
            "na-wish-ta na-shu-da ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "a-da-bee-yaa-ti aa-mi-yaa-na, aa-saa-ray hast ghaa-li-ban sha-faa-hee wa pa-deed aa-ma-da ta-was-su-ti mar-du-maa-nay bay-sa-waad yaa kam sa-waad ki az ji-ha-ti saakh-taar wa muh-ta-waa, baa a-da-bee-yaa-ti mak-too-bi zu-baa-ni da-ree mu-ta-faa-wit ast.",
        "mean": "Folk literature is a body of mostly oral works made by people who could not read or could barely read, and it differs in structure and content from the written literature of the Dari language.",
        "words": [
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "عامیانه،",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "آثاری",
            "aa-saa-ray",
            "aa-saa-ray"
          ],
          [
            "هست",
            "hast",
            "hast",
            "bu-dan"
          ],
          [
            "غالباً",
            "ghaa-li-ban",
            "ghaa-li-ban"
          ],
          [
            "شفاهی",
            "sha-faa-hee",
            "sha-faa-hee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پدید",
            "pa-deed",
            "pa-deed",
            "pa-deed aa-ma-da"
          ],
          [
            "آمده",
            "aa-ma-da",
            "aa-ma-da",
            "pa-deed aa-ma-da",
            "aa-ma-dan"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "مردمانی",
            "mar-du-maa-nay",
            "mar-du-maa-nay"
          ],
          [
            "بیسواد",
            "bay-sa-waad",
            "bay-sa-waad"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "کم",
            "kam",
            "kam",
            "kam sa-waad"
          ],
          [
            "سواد",
            "sa-waad",
            "sa-waad",
            "kam sa-waad"
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
            "az ji-ha-ti"
          ],
          [
            "جهت",
            "ji-ha-ti",
            "ji-hat",
            "az ji-ha-ti"
          ],
          [
            "ساختار",
            "saakh-taar",
            "saakh-taar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "محتوا،",
            "muh-ta-waa",
            "muh-ta-waa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "مکتوب",
            "mak-too-bi",
            "mak-toob"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "دری",
            "da-ree",
            "da-ree"
          ],
          [
            "متفاوت",
            "mu-ta-faa-wit",
            "mu-ta-faa-wit"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "zu-baa-ni saa-da, lah-ni aa-mi-yaa-na, haa-laat wa an-day-sha-haa-yi a-waam dar een a-da-bee-yaat na-maa-yaan ast;",
        "mean": "Simple language, a popular tone, and the moods and thoughts of ordinary people show in this literature;",
        "words": [
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "ساده،",
            "saa-da",
            "saa-da"
          ],
          [
            "لحن",
            "lah-ni",
            "lahn"
          ],
          [
            "عامیانه،",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "حالات",
            "haa-laat",
            "haa-laat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اندیشه‌های",
            "an-day-sha-haa-yi",
            "an-day-sha-haa"
          ],
          [
            "عوام",
            "a-waam",
            "a-waam"
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
            "ادبیات",
            "a-da-bee-yaat",
            "a-da-bee-yaat"
          ],
          [
            "نمایان",
            "na-maa-yaan",
            "na-maa-yaan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "fol-klor-shi-naa-saan, a-da-bee-yaa-ti mar-dum raa ba du bakhsh: (ri-waa-yat-haa-yi man-zoom wa ri-waa-yat-haa-yi man-soor) taq-seem kar-da and:",
        "mean": "folklorists have divided folk literature into two parts, stories in verse and stories in prose:",
        "words": [
          [
            "فولکلورشناسان،",
            "fol-klor-shi-naa-saan",
            "fol-klor-shi-naa-saan"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
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
            "بخش:",
            "bakhsh",
            "bakhsh"
          ],
          [
            "(روایت‌های",
            "ri-waa-yat-haa-yi",
            "ri-waa-yat-haa"
          ],
          [
            "منظوم",
            "man-zoom",
            "man-zoom"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روایت‌های",
            "ri-waa-yat-haa-yi",
            "ri-waa-yat-haa"
          ],
          [
            "منثور)",
            "man-soor",
            "man-soor"
          ],
          [
            "تقسیم",
            "taq-seem",
            "taq-seem",
            "taq-seem kar-da and",
            "taq-seem kar-dan"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "taq-seem kar-da and",
            "kar-dan",
            "taq-seem kar-dan"
          ],
          [
            "اند:",
            "and",
            "and",
            "taq-seem kar-da and",
            "taq-seem kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ri-waa-yat-haa-yi man-zoom",
        "mean": "Stories in verse",
        "words": [
          [
            "روایت‌های",
            "ri-waa-yat-haa-yi",
            "ri-waa-yat-haa"
          ],
          [
            "منظوم",
            "man-zoom",
            "man-zoom"
          ]
        ]
      }
    ],
    [
      {
        "say": "shi'-ri faa-ri-see-yi da-ree dar asl du goo-na ast: shi'-ri mi-yaa-ree ki mu-khaa-ta-baa-ni aan baysh-tar ta-ba-qa-yi baa-sa-waad wa tah-seel kar-da and wa dee-gar shi'-ri aa-mi-yaa-na ki ta-ra-fi ta-waj-ju-hi aa-ma-yi mar-dum ast.",
        "mean": "Persian Dari poetry is basically of two kinds: standard poetry, whose audience is mostly the educated, literate class, and folk poetry, which ordinary people love.",
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
            "dar",
            "dar asl"
          ],
          [
            "اصل",
            "asl",
            "asl",
            "dar asl"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "گونه",
            "goo-na",
            "goo-na"
          ],
          [
            "است:",
            "ast",
            "ast"
          ],
          [
            "شعر",
            "shi'-ri",
            "shi'r"
          ],
          [
            "معیاری",
            "mi-yaa-ree",
            "mi-yaa-ree"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مخاطبان",
            "mu-khaa-ta-baa-ni",
            "mu-khaa-ta-baan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "طبقهٔ",
            "ta-ba-qa-yi",
            "ta-ba-qa"
          ],
          [
            "باسواد",
            "baa-sa-waad",
            "baa-sa-waad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تحصیل",
            "tah-seel",
            "tah-seel",
            "tah-seel kar-da"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "tah-seel kar-da",
            "kar-dan"
          ],
          [
            "اند",
            "and",
            "and"
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
            "شعر",
            "shi'-ri",
            "shi'r"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "طرف",
            "ta-ra-fi",
            "ta-raf",
            "ta-ra-fi ta-waj-ju-hi aa-ma-yi mar-dum"
          ],
          [
            "توجه",
            "ta-waj-ju-hi",
            "ta-waj-juh",
            "ta-ra-fi ta-waj-ju-hi aa-ma-yi mar-dum"
          ],
          [
            "عامهٔ",
            "aa-ma-yi",
            "aa-ma-yi",
            "ta-ra-fi ta-waj-ju-hi aa-ma-yi mar-dum"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum",
            "ta-ra-fi ta-waj-ju-hi aa-ma-yi mar-dum"
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
        "say": "shi'-ri aa-mi-yaa-na az di-li shaa-i-raa-nay gum-naam bar-aa-ma-da wa dar har shakl wa na-wi aan aa-yee-na-yi rooh wa an-day-sha-yi mil-lat-haa wa tar-ju-maa-ni ih-saa-saa-ti paak wa sa-mee-mee-yi aan-haast.",
        "mean": "Folk poetry comes from the hearts of unknown poets, and in every shape and kind it is a mirror of the spirit and thought of nations and a voice for their pure, sincere feelings.",
        "words": [
          [
            "شعر",
            "shi'-ri",
            "shi'r"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دل",
            "di-li",
            "dil"
          ],
          [
            "شاعرانی",
            "shaa-i-raa-nay",
            "shaa-i-raa-nay"
          ],
          [
            "گمنام",
            "gum-naam",
            "gum-naam"
          ],
          [
            "برآمده",
            "bar-aa-ma-da",
            "bar-aa-ma-da",
            "bar-aa-ma-dan"
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
            "هر",
            "har",
            "har"
          ],
          [
            "شکل",
            "shakl",
            "shakl"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نوع",
            "na-wi",
            "naw#type"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "آیینهٔ",
            "aa-yee-na-yi",
            "aa-yee-na"
          ],
          [
            "روح",
            "rooh",
            "rooh"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اندیشهٔ",
            "an-day-sha-yi",
            "an-day-sha"
          ],
          [
            "ملت‌ها",
            "mil-lat-haa",
            "mil-lat-haa",
            "mil-lat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ترجمان",
            "tar-ju-maa-ni",
            "tar-ju-maan"
          ],
          [
            "احساسات",
            "ih-saa-saa-ti",
            "ih-saa-saat"
          ],
          [
            "پاک",
            "paak",
            "paak"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صمیمی",
            "sa-mee-mee-yi",
            "sa-mee-mee"
          ],
          [
            "آن‌هاست.",
            "aan-haast",
            "aan-haast"
          ]
        ]
      },
      {
        "say": "een ash-aar ba wa-see-la-yi ta-saa-weer wa tash-bee-haa-ti saa-da wa mah-soos wa dil-pa-zeer wa khush aa-hang dar az-haa-ni mar-du-mi ko-cha wa baa-zaar may-ni-shee-nad wa bar zu-baan-haa jaa-ree wa zam-za-ma may-sha-wad.",
        "mean": "With simple, vivid, pleasing and tuneful images and comparisons, these poems settle in the minds of ordinary people, run on their tongues and are hummed.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "اشعار",
            "ash-aar",
            "ash-aar"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba wa-see-la-yi"
          ],
          [
            "وسیلهٔ",
            "wa-see-la-yi",
            "wa-see-la-yi",
            "ba wa-see-la-yi"
          ],
          [
            "تصاویر",
            "ta-saa-weer",
            "ta-saa-weer"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تشبیهات",
            "tash-bee-haa-ti",
            "tash-bee-haat"
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
            "محسوس",
            "mah-soos",
            "mah-soos"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دلپذیر",
            "dil-pa-zeer",
            "dil-pa-zeer"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خوش",
            "khush",
            "khush",
            "khush aa-hang"
          ],
          [
            "آهنگ",
            "aa-hang",
            "aa-hang",
            "khush aa-hang"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اذهان",
            "az-haa-ni",
            "az-haan"
          ],
          [
            "مردم",
            "mar-du-mi",
            "mar-dum",
            "mar-du-mi ko-cha wa baa-zaar"
          ],
          [
            "کوچه",
            "ko-cha",
            "ko-cha",
            "mar-du-mi ko-cha wa baa-zaar"
          ],
          [
            "و",
            "wa",
            "wa",
            "mar-du-mi ko-cha wa baa-zaar"
          ],
          [
            "بازار",
            "baa-zaar",
            "baa-zaar",
            "mar-du-mi ko-cha wa baa-zaar"
          ],
          [
            "می‌نشیند",
            "may-ni-shee-nad",
            "may-ni-shee-nad",
            "ni-shas-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar zu-baan-haa jaa-ree"
          ],
          [
            "زبان‌ها",
            "zu-baan-haa",
            "zu-baan-haa",
            "bar zu-baan-haa jaa-ree"
          ],
          [
            "جاری",
            "jaa-ree",
            "jaa-ree",
            "bar zu-baan-haa jaa-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زمزمه",
            "zam-za-ma",
            "zam-za-ma",
            "zam-za-ma may-sha-wad"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "zam-za-ma may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "gaah een ta-raa-na-haa wa su-rood-haa-yi aa-mi-yaa-na wa ma-hal-lee aan chu-naan ma-roof may-sha-wand ki az haw-za-yi jugh-raa-fi-yaa-yee-yi khud paa fa-raa-tar gu-zaash-ta, dar ra-dee-fi ash-aa-ri mil-lee ba shu-maar may-aa-yand.",
        "mean": "Sometimes these folk and local songs become so famous that they go beyond their own region and are counted among the national poems.",
        "words": [
          [
            "گاه",
            "gaah",
            "gaah"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "ترانه‌ها",
            "ta-raa-na-haa",
            "ta-raa-na-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سرودهای",
            "su-rood-haa-yi",
            "su-rood-haa"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "محلی",
            "ma-hal-lee",
            "ma-hal-lee"
          ],
          [
            "آن",
            "aan",
            "aan",
            "aan chu-naan"
          ],
          [
            "چنان",
            "chu-naan",
            "chu-naan",
            "aan chu-naan"
          ],
          [
            "معروف",
            "ma-roof",
            "ma-roof"
          ],
          [
            "می‌شوند",
            "may-sha-wand",
            "may-sha-wand",
            "shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "حوزهٔ",
            "haw-za-yi",
            "haw-za"
          ],
          [
            "جغرافیایی",
            "jugh-raa-fi-yaa-yee-yi",
            "jugh-raa-fi-yaa-yee"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "پا",
            "paa",
            "paa",
            "paa fa-raa-tar gu-zaash-ta"
          ],
          [
            "فراتر",
            "fa-raa-tar",
            "fa-raa-tar",
            "paa fa-raa-tar gu-zaash-ta"
          ],
          [
            "گذاشته،",
            "gu-zaash-ta",
            "gu-zaash-ta",
            "paa fa-raa-tar gu-zaash-ta",
            "gu-zaash-tan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ردیف",
            "ra-dee-fi",
            "ra-deef"
          ],
          [
            "اشعار",
            "ash-aa-ri",
            "ash-aar"
          ],
          [
            "ملی",
            "mil-lee",
            "mil-lee"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba shu-maar may-aa-yand",
            "ba shu-maar aa-ma-dan"
          ],
          [
            "شمار",
            "shu-maar",
            "shu-maar",
            "ba shu-maar may-aa-yand",
            "ba shu-maar aa-ma-dan"
          ],
          [
            "می‌آیند.",
            "may-aa-yand",
            "may-aa-yand",
            "ba shu-maar may-aa-yand",
            "aa-ma-dan",
            "ba shu-maar aa-ma-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ta-raa-na, du bay-tee, chi-haar-bay-tee, san-gar-dee, bay-ti kur-da-kee, ko-cha baa-ghee, see-ghaa-nee, zarb-ul-ma-sal, chees-taan wa baa-zee-haa-yi man-zoom, goo-na-haa-yi mukh-ta-li-fi ri-waa-yat-haa-yi man-zoom yaa shi'-ri aa-mi-yaa-na ba shu-maar may-aa-yand ki dar jaa-mi-a kaar-burd-haa-yi goo-naa-goo-nay daa-rand.",
        "mean": "Songs, do-baytis, chahar-baytis, sangardis, bayt-i kurdakis, kucha-baghis, sighanis, proverbs, riddles and rhyming games are different kinds of verse stories, or folk poetry, and they have many uses in society.",
        "words": [
          [
            "ترانه،",
            "ta-raa-na",
            "ta-raa-na"
          ],
          [
            "دو",
            "du",
            "du",
            "du bay-tee"
          ],
          [
            "بیتی،",
            "bay-tee",
            "bay-tee",
            "du bay-tee"
          ],
          [
            "چهاربیتی،",
            "chi-haar-bay-tee",
            "chi-haar-bay-tee"
          ],
          [
            "سنگردی،",
            "san-gar-dee",
            "san-gar-dee"
          ],
          [
            "بیت",
            "bay-ti",
            "bayt",
            "bay-ti kur-da-kee"
          ],
          [
            "کُردَکی،",
            "kur-da-kee",
            "kur-da-kee",
            "bay-ti kur-da-kee"
          ],
          [
            "کوچه",
            "ko-cha",
            "ko-cha",
            "ko-cha baa-ghee"
          ],
          [
            "باغی،",
            "baa-ghee",
            "baa-ghee",
            "ko-cha baa-ghee"
          ],
          [
            "سیغانی،",
            "see-ghaa-nee",
            "see-ghaa-nee"
          ],
          [
            "ضرب‌المثل،",
            "zarb-ul-ma-sal",
            "zarb-ul-ma-sal"
          ],
          [
            "چیستان",
            "chees-taan",
            "chees-taan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بازی‌های",
            "baa-zee-haa-yi",
            "baa-zee-haa"
          ],
          [
            "منظوم،",
            "man-zoom",
            "man-zoom"
          ],
          [
            "گونه‌های",
            "goo-na-haa-yi",
            "goo-na-haa"
          ],
          [
            "مختلف",
            "mukh-ta-li-fi",
            "mukh-ta-lif"
          ],
          [
            "روایت‌های",
            "ri-waa-yat-haa-yi",
            "ri-waa-yat-haa"
          ],
          [
            "منظوم",
            "man-zoom",
            "man-zoom"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "شعر",
            "shi'-ri",
            "shi'r"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba shu-maar may-aa-yand",
            "ba shu-maar aa-ma-dan"
          ],
          [
            "شمار",
            "shu-maar",
            "shu-maar",
            "ba shu-maar may-aa-yand",
            "ba shu-maar aa-ma-dan"
          ],
          [
            "می‌آیند",
            "may-aa-yand",
            "may-aa-yand",
            "ba shu-maar may-aa-yand",
            "aa-ma-dan",
            "ba shu-maar aa-ma-dan"
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
            "جامعه",
            "jaa-mi-a",
            "jaa-mi-a"
          ],
          [
            "کاربرد‌های",
            "kaar-burd-haa-yi",
            "kaar-burd-haa"
          ],
          [
            "گوناگونی",
            "goo-naa-goo-nay",
            "goo-naa-goo-nay"
          ],
          [
            "دارند.",
            "daa-rand",
            "daa-rand",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "az goo-na-haa-yi shi'-ri aa-mi-yaa-na dar zin-da-gee-yi roz-mar-ra, dar maw-qi-yat-haa wa za-maan-haa-yi khaas is-ti-faa-da may-sha-wad, choon ma-raa-si-mi ta-wal-lud, a-roo-see, a-zaa-daa-ree, pa-ra-wa-ri-shi koo-dak, bad-ra-qa, a'-yaad wa jashn-haa-yi dee-nee wa mil-lee wa han-gaa-mi kaar; choon: ra-ma-chi-raa-nee, qaa-leen-baa-fee, shaa-lee-ko-bee, sheer-do-shee wa... yaa is-ti-raa-hat.",
        "mean": "Kinds of folk poetry are used in daily life at special moments and times, such as births, weddings, mourning, raising children, farewells, religious and national holidays and festivals, and at work, such as herding, carpet weaving, threshing rice and milking, or while resting.",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "گونه‌های",
            "goo-na-haa-yi",
            "goo-na-haa"
          ],
          [
            "شعر",
            "shi'-ri",
            "shi'r"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زنده‌گی",
            "zin-da-gee-yi",
            "zin-da-gee"
          ],
          [
            "روزمره،",
            "roz-mar-ra",
            "roz-mar-ra"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "موقعیت‌ها",
            "maw-qi-yat-haa",
            "maw-qi-yat-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زمان‌های",
            "za-maan-haa-yi",
            "za-maan-haa"
          ],
          [
            "خاص",
            "khaas",
            "khaas"
          ],
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da",
            "is-ti-faa-da may-sha-wad",
            "is-ti-faa-da shu-dan"
          ],
          [
            "می‌شود،",
            "may-sha-wad",
            "may-sha-wad",
            "is-ti-faa-da may-sha-wad",
            "shu-dan",
            "is-ti-faa-da shu-dan"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "مراسم",
            "ma-raa-si-mi",
            "ma-raa-sim"
          ],
          [
            "تولد،",
            "ta-wal-lud",
            "ta-wal-lud"
          ],
          [
            "عروسی،",
            "a-roo-see",
            "a-roo-see"
          ],
          [
            "عزاداری،",
            "a-zaa-daa-ree",
            "a-zaa-daa-ree"
          ],
          [
            "پرورش",
            "pa-ra-wa-ri-shi",
            "pa-ra-wa-rish"
          ],
          [
            "کودک،",
            "koo-dak",
            "koo-dak"
          ],
          [
            "بدرقه،",
            "bad-ra-qa",
            "bad-ra-qa"
          ],
          [
            "اعیاد",
            "a'-yaad",
            "a'-yaad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جشن‌های",
            "jashn-haa-yi",
            "jashn-haa"
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
            "ملی",
            "mil-lee",
            "mil-lee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هنگام",
            "han-gaa-mi",
            "han-gaam"
          ],
          [
            "کار؛",
            "kaar",
            "kaar"
          ],
          [
            "چون:",
            "choon",
            "choon"
          ],
          [
            "رمه‌چرانی،",
            "ra-ma-chi-raa-nee",
            "ra-ma-chi-raa-nee"
          ],
          [
            "قالین‌بافی،",
            "qaa-leen-baa-fee",
            "qaa-leen-baa-fee"
          ],
          [
            "شالی‌کوبی،",
            "shaa-lee-ko-bee",
            "shaa-lee-ko-bee"
          ],
          [
            "شیردوشی",
            "sheer-do-shee",
            "sheer-do-shee"
          ],
          [
            "و...",
            "wa",
            "wa"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "استراحت.",
            "is-ti-raa-hat",
            "is-ti-raa-hat"
          ]
        ]
      }
    ],
    [
      {
        "say": "ri-waa-yat-haa-yi man-soor",
        "mean": "Stories in prose",
        "words": [
          [
            "روایت‌های",
            "ri-waa-yat-haa-yi",
            "ri-waa-yat-haa"
          ],
          [
            "منثور",
            "man-soor",
            "man-soor"
          ]
        ]
      }
    ],
    [
      {
        "say": "ri-waa-yat-haa-yi man-soor baysh-tar shaa-mi-li us-too-ra-haa, qis-sa-haa, af-saa-na-haa, zarb-ul-ma-sal-haa wa chees-taan-haa ast.",
        "mean": "Prose stories mostly include myths, tales, legends, proverbs and riddles.",
        "words": [
          [
            "روایت‌های",
            "ri-waa-yat-haa-yi",
            "ri-waa-yat-haa"
          ],
          [
            "منثور",
            "man-soor",
            "man-soor"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "شامل",
            "shaa-mi-li",
            "shaa-mil"
          ],
          [
            "اسطوره‌ها،",
            "us-too-ra-haa",
            "us-too-ra-haa"
          ],
          [
            "قصه‌ها،",
            "qis-sa-haa",
            "qis-sa-haa"
          ],
          [
            "افسانه‌ها،",
            "af-saa-na-haa",
            "af-saa-na-haa"
          ],
          [
            "ضرب‌المثل‌ها",
            "zarb-ul-ma-sal-haa",
            "zarb-ul-ma-sal-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چیستان‌ها",
            "chees-taan-haa",
            "chees-taan-haa"
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
        "say": "us-too-ra-haa baysh-tar dar bar-gee-ran-da-yi u-soo-li a-qee-da-tee, baa-wa-ree wa ee-maa-nee as-tand ki dar-baa-ra-yi ja-haan, ba-shar, zin-da-gee, marg, kha-saa-yi-si in-saan wa ha-ya-waan wa... dar qaa-li-bi daa-staan ma-taa-li-bay raa i-raa-a may-di-hand.",
        "mean": "Myths mostly contain principles of belief and faith, and in the form of stories they tell things about the world, mankind, life, death, the qualities of people and animals, and so on.",
        "words": [
          [
            "اسطوره‌ها",
            "us-too-ra-haa",
            "us-too-ra-haa"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar bar-gee-ran-da-yi"
          ],
          [
            "برگیرندهٔ",
            "bar-gee-ran-da-yi",
            "bar-gee-ran-da",
            "dar bar-gee-ran-da-yi"
          ],
          [
            "اصول",
            "u-soo-li",
            "u-sool"
          ],
          [
            "عقیدتی،",
            "a-qee-da-tee",
            "a-qee-da-tee"
          ],
          [
            "باوری",
            "baa-wa-ree",
            "baa-wa-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ایمانی",
            "ee-maa-nee",
            "ee-maa-nee"
          ],
          [
            "استند",
            "as-tand",
            "as-tand",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "دربارهٔ",
            "dar-baa-ra-yi",
            "dar-baa-ra-yi"
          ],
          [
            "جهان،",
            "ja-haan",
            "ja-haan"
          ],
          [
            "بشر،",
            "ba-shar",
            "ba-shar"
          ],
          [
            "زنده‌گی،",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "مرگ،",
            "marg",
            "marg"
          ],
          [
            "خصایص",
            "kha-saa-yi-si",
            "kha-saa-yis"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حیوان",
            "ha-ya-waan",
            "ha-ya-waan"
          ],
          [
            "و...",
            "wa",
            "wa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قالب",
            "qaa-li-bi",
            "qaa-lib"
          ],
          [
            "داستان",
            "daa-staan",
            "daa-staan"
          ],
          [
            "مطالبی",
            "ma-taa-li-bay",
            "ma-taa-li-bay"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "ارائه",
            "i-raa-a",
            "i-raa-a",
            "i-raa-a may-di-hand",
            "i-raa-a daa-dan"
          ],
          [
            "می‌دهند.",
            "may-di-hand",
            "may-di-hand",
            "i-raa-a may-di-hand",
            "daa-dan",
            "i-raa-a daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "af-saa-na-haa wa qis-sa-haa neez bakh-shi dee-ga-ray az ri-waa-yaa-ti man-soo-ri a-da-bi aa-mi-yaa-na has-tand.",
        "mean": "Legends and tales are another part of the prose stories of folk literature.",
        "words": [
          [
            "افسانه‌ها",
            "af-saa-na-haa",
            "af-saa-na-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قصه‌ها",
            "qis-sa-haa",
            "qis-sa-haa"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "بخش",
            "bakh-shi",
            "bakhsh"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "روایات",
            "ri-waa-yaa-ti",
            "ri-waa-yaat"
          ],
          [
            "منثور",
            "man-soo-ri",
            "man-soor"
          ],
          [
            "ادب",
            "a-da-bi",
            "a-dab"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "هستند.",
            "has-tand",
            "has-tand",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "dar een naw ba khoo-bee mee-ta-waa-neem waa-qi-i-yat-haa-yi zin-da-gee, aa-maal, af-kaar wa a-waa-ti-fi in-saa-nee raa pay-daa ku-naym.",
        "mean": "In this kind we can clearly find the realities of life and human deeds, thoughts and feelings.",
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
            "نوع",
            "naw",
            "naw#type"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba khoo-bee"
          ],
          [
            "خوبی",
            "khoo-bee",
            "khoo-bee",
            "ba khoo-bee"
          ],
          [
            "می‌توانیم",
            "mee-ta-waa-neem",
            "mee-ta-waa-neem",
            "ta-waa-nis-tan"
          ],
          [
            "واقعیت‌های",
            "waa-qi-i-yat-haa-yi",
            "waa-qi-i-yat-haa"
          ],
          [
            "زنده‌گی،",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "اعمال،",
            "aa-maal",
            "aa-maal"
          ],
          [
            "افکار",
            "af-kaar",
            "af-kaar",
            "fikr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عواطف",
            "a-waa-ti-fi",
            "a-waa-tif"
          ],
          [
            "انسانی",
            "in-saa-nee",
            "in-saa-nee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "پیدا",
            "pay-daa",
            "pay-daa",
            "pay-daa ku-naym",
            "pay-daa kar-dan"
          ],
          [
            "کنیم.",
            "ku-naym",
            "ku-naym",
            "pay-daa ku-naym",
            "kar-dan",
            "pay-daa kar-dan"
          ]
        ]
      },
      {
        "say": "zu-baa-ni qis-sa-haa saa-da ast wa saakh-ti-maa-ni aan-haa pur ramz wa raaz.",
        "mean": "The language of tales is simple, and their structure is full of mystery.",
        "words": [
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "قصه‌ها",
            "qis-sa-haa",
            "qis-sa-haa"
          ],
          [
            "ساده",
            "saa-da",
            "saa-da"
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
            "ساختمان",
            "saakh-ti-maa-ni",
            "saakh-ti-maan"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "پر",
            "pur",
            "pur",
            "pur ramz wa raaz"
          ],
          [
            "رمز",
            "ramz",
            "ramz",
            "pur ramz wa raaz"
          ],
          [
            "و",
            "wa",
            "wa",
            "pur ramz wa raaz"
          ],
          [
            "راز.",
            "raaz",
            "raaz",
            "pur ramz wa raaz"
          ]
        ]
      },
      {
        "say": "af-saa-na-haa raa may-ta-waan ba chi-haar das-ta-yi kul-lee taq-seem kard:",
        "mean": "Legends can be divided into four general groups:",
        "words": [
          [
            "افسانه‌ها",
            "af-saa-na-haa",
            "af-saa-na-haa"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "چهار",
            "chi-haar",
            "chi-haar"
          ],
          [
            "دستهٔ",
            "das-ta-yi",
            "das-ta"
          ],
          [
            "کلی",
            "kul-lee",
            "kul-lee"
          ],
          [
            "تقسیم",
            "taq-seem",
            "taq-seem",
            "taq-seem kard"
          ],
          [
            "کرد:",
            "kard",
            "kard",
            "taq-seem kard",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "yak. af-saa-na-haa-yi kha-yaa-lee: shaa-mi-li ha-waa-dis wa maa-ja-raa-haa-yi a-jeeb baa maw-joo-daa-ti ta-khay-yu-lee, wah-mee wa jaa-doo-yee....",
        "mean": "1. Fantasy legends: these include strange events and adventures with imaginary, fanciful and magical creatures.",
        "words": [
          [
            "۱.",
            "yak",
            "yak#digit"
          ],
          [
            "افسانه‌های",
            "af-saa-na-haa-yi",
            "af-saa-na-haa"
          ],
          [
            "خیالی:",
            "kha-yaa-lee",
            "kha-yaa-lee"
          ],
          [
            "شامل",
            "shaa-mi-li",
            "shaa-mil"
          ],
          [
            "حوادث",
            "ha-waa-dis",
            "ha-waa-dis"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ماجراهای",
            "maa-ja-raa-haa-yi",
            "maa-ja-raa-haa"
          ],
          [
            "عجیب",
            "a-jeeb",
            "a-jeeb"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "موجودات",
            "maw-joo-daa-ti",
            "maw-joo-daat"
          ],
          [
            "تخیلی،",
            "ta-khay-yu-lee",
            "ta-khay-yu-lee"
          ],
          [
            "وهمی",
            "wah-mee",
            "wah-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جادویی....",
            "jaa-doo-yee",
            "jaa-doo-yee"
          ]
        ]
      }
    ],
    [
      {
        "say": "du. af-saa-na-haa-yi ha-qee-qee: ba-yaa-ni zin-da-gee-yi roz-mar-ra-yi mar-dum ast baa an-da-kay mu-baa-li-gha.",
        "mean": "2. Realistic legends: these tell of people's daily lives, with a little exaggeration.",
        "words": [
          [
            "۲.",
            "du",
            "du#digit"
          ],
          [
            "افسانه‌های",
            "af-saa-na-haa-yi",
            "af-saa-na-haa"
          ],
          [
            "حقیقی:",
            "ha-qee-qee",
            "ha-qee-qee"
          ],
          [
            "بیان",
            "ba-yaa-ni",
            "ba-yaan"
          ],
          [
            "زنده‌گی",
            "zin-da-gee-yi",
            "zin-da-gee"
          ],
          [
            "روزمرهٔ",
            "roz-mar-ra-yi",
            "roz-mar-ra"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "اندکی",
            "an-da-kay",
            "an-da-kay"
          ],
          [
            "مبالغه.",
            "mu-baa-li-gha",
            "mu-baa-li-gha"
          ]
        ]
      }
    ],
    [
      {
        "say": "sih. af-saa-na-haa-yi taa-ree-khee: sar-gu-zash-ti hay-rat-aa-war wa shi-gift-an-gee-zi ay-yaa-raan, pah-la-waa-naan, shaa-haan wa a-mee-raan ast.",
        "mean": "3. Historical legends: these are the amazing and wonderful life stories of ayyars, heroes, kings and princes.",
        "words": [
          [
            "۳.",
            "sih",
            "sih#digit"
          ],
          [
            "افسانه‌های",
            "af-saa-na-haa-yi",
            "af-saa-na-haa"
          ],
          [
            "تاریخی:",
            "taa-ree-khee",
            "taa-ree-khee"
          ],
          [
            "سرگذشت",
            "sar-gu-zash-ti",
            "sar-gu-zasht"
          ],
          [
            "حیرت‌آور",
            "hay-rat-aa-war",
            "hay-rat-aa-war"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شگفت‌انگیز",
            "shi-gift-an-gee-zi",
            "shi-gift-an-geez"
          ],
          [
            "عیاران،",
            "ay-yaa-raan",
            "ay-yaa-raan"
          ],
          [
            "پهلوانان،",
            "pah-la-waa-naan",
            "pah-la-waa-naan"
          ],
          [
            "شاهان",
            "shaa-haan",
            "shaa-haan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امیران",
            "a-mee-raan",
            "a-mee-raan"
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
        "say": "chaar. af-saa-na-haa-yi sho-khee-aa-meez: baysh-tar jam-ba-yi hazl wa sho-khee daa-rand.",
        "mean": "4. Humorous legends: these are mostly about jokes and fun.",
        "words": [
          [
            "۴.",
            "chaar",
            "chaar"
          ],
          [
            "افسانه‌های",
            "af-saa-na-haa-yi",
            "af-saa-na-haa"
          ],
          [
            "شوخی‌آمیز:",
            "sho-khee-aa-meez",
            "sho-khee-aa-meez"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "جنبه‌ی",
            "jam-ba-yi",
            "jam-ba-yi"
          ],
          [
            "هزل",
            "hazl",
            "hazl"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شوخی",
            "sho-khee",
            "sho-khee"
          ],
          [
            "دارند.",
            "daa-rand",
            "daa-rand",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "du na-wi qi-sa-haa-yi-yi ha-ya-waa-naat wa qi-sa-haa-yi-yi ramz-goo-na raa neez may-ta-waan bar chi-haar na-wi baa-laa a-laa-wa na-mood.",
        "mean": "Two more kinds, animal tales and symbolic tales, can be added to the four kinds above.",
        "words": [
          [
            "دو",
            "du",
            "du"
          ],
          [
            "نوع",
            "na-wi",
            "naw#type"
          ],
          [
            "قصه‌های",
            "qi-sa-haa-yi-yi",
            "qi-sa-haa-yi"
          ],
          [
            "حیوانات",
            "ha-ya-waa-naat",
            "ha-ya-waa-naat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قصه‌های",
            "qi-sa-haa-yi-yi",
            "qi-sa-haa-yi"
          ],
          [
            "رمزگونه",
            "ramz-goo-na",
            "ramz-goo-na"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "می‌توان",
            "may-ta-waan",
            "may-ta-waan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "چهار",
            "chi-haar",
            "chi-haar"
          ],
          [
            "نوع",
            "na-wi",
            "naw#type"
          ],
          [
            "بالا",
            "baa-laa",
            "baa-laa"
          ],
          [
            "علاوه",
            "a-laa-wa",
            "a-laa-wa",
            "a-laa-wa na-mood",
            "a-laa-wa na-mo-dan"
          ],
          [
            "نمود.",
            "na-mood",
            "na-mood",
            "a-laa-wa na-mood",
            "na-mo-dan",
            "a-laa-wa na-mo-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "zar-bul-ma-sal-haa-yi-yi man-zoom yaa man-soor ki dar mi-yaa-ni mar-dum gus-tar-da shu-da-and, neez az an-waa-yi raa-yi-ji a-da-bee-yaa-ti aa-mi-yaa-na ast.",
        "mean": "Proverbs in verse or prose, which have spread among the people, are also a common kind of folk literature.",
        "words": [
          [
            "ضرب‌المثل‌های",
            "zar-bul-ma-sal-haa-yi-yi",
            "zar-bul-ma-sal-haa-yi"
          ],
          [
            "منظوم",
            "man-zoom",
            "man-zoom"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "منثور",
            "man-soor",
            "man-soor"
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
            "میان",
            "mi-yaa-ni",
            "mi-yaan"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "گسترده",
            "gus-tar-da",
            "gus-tar-da",
            "gus-tar-da shu-da-and"
          ],
          [
            "شده‌اند،",
            "shu-da-and",
            "shu-da-and",
            "gus-tar-da shu-da-and",
            "shu-dan"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "رایج",
            "raa-yi-ji",
            "raa-yij"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "een am-saal ba il-la-ti fa-saa-hat wa zay-baa-yee-yi maz-moon, maq-boo-li ta-bi aam-ma waa-qi may-sha-wad wa mi-yaa-ni aa-naan shaa-yi may-gar-dad ki baa ta-waj-juh ba ma-aa-nee-yi a-meeq wa baa-reek, dar maw-qi-yat-haa-yi mu-naa-sib ba kaar may-ra-wad wa dar na-tee-ja ba ee-jaa-zi ka-laam ku-mak may-ku-nad.",
        "mean": "Because of their eloquence and beautiful meaning, these proverbs please ordinary people and spread among them; given their deep and subtle meanings, they are used in fitting situations, and so they help speech to be brief.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "امثال",
            "am-saal",
            "am-saal"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba il-la-ti"
          ],
          [
            "علت",
            "il-la-ti",
            "il-lat",
            "ba il-la-ti"
          ],
          [
            "فصاحت",
            "fa-saa-hat",
            "fa-saa-hat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زیبایی",
            "zay-baa-yee-yi",
            "zay-baa-yee"
          ],
          [
            "مضمون،",
            "maz-moon",
            "maz-moon"
          ],
          [
            "مقبول",
            "maq-boo-li",
            "maq-bool",
            "maq-boo-li ta-bi aam-ma waa-qi may-sha-wad"
          ],
          [
            "طبع",
            "ta-bi",
            "tab",
            "maq-boo-li ta-bi aam-ma waa-qi may-sha-wad"
          ],
          [
            "عامه",
            "aam-ma",
            "aam-ma",
            "maq-boo-li ta-bi aam-ma waa-qi may-sha-wad"
          ],
          [
            "واقع",
            "waa-qi",
            "waa-qi",
            "maq-boo-li ta-bi aam-ma waa-qi may-sha-wad"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "maq-boo-li ta-bi aam-ma waa-qi may-sha-wad",
            "shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "میان",
            "mi-yaa-ni",
            "mi-yaan"
          ],
          [
            "آنان",
            "aa-naan",
            "aa-naan"
          ],
          [
            "شایع",
            "shaa-yi",
            "shaa-yi",
            "shaa-yi may-gar-dad"
          ],
          [
            "می‌گردد",
            "may-gar-dad",
            "may-gar-dad",
            "shaa-yi may-gar-dad",
            "gar-dee-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "با",
            "baa",
            "baa",
            "baa ta-waj-juh ba"
          ],
          [
            "توجه",
            "ta-waj-juh",
            "ta-waj-juh",
            "baa ta-waj-juh ba"
          ],
          [
            "به",
            "ba",
            "ba",
            "baa ta-waj-juh ba"
          ],
          [
            "معانی",
            "ma-aa-nee-yi",
            "ma-aa-nee"
          ],
          [
            "عمیق",
            "a-meeq",
            "a-meeq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "باریک،",
            "baa-reek",
            "baa-reek"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "موقعیت‌های",
            "maw-qi-yat-haa-yi",
            "maw-qi-yat-haa"
          ],
          [
            "مناسب",
            "mu-naa-sib",
            "mu-naa-sib"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba kaar may-ra-wad",
            "ba kaar raf-tan"
          ],
          [
            "کار",
            "kaar",
            "kaar",
            "ba kaar may-ra-wad",
            "ba kaar raf-tan"
          ],
          [
            "می‌رود",
            "may-ra-wad",
            "may-ra-wad",
            "ba kaar may-ra-wad",
            "raf-tan",
            "ba kaar raf-tan"
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
            "dar na-tee-ja"
          ],
          [
            "نتیجه",
            "na-tee-ja",
            "na-tee-ja",
            "dar na-tee-ja"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ایجاز",
            "ee-jaa-zi",
            "ee-jaaz"
          ],
          [
            "کلام",
            "ka-laam",
            "ka-laam"
          ],
          [
            "کمک",
            "ku-mak",
            "ku-mak",
            "ku-mak may-ku-nad",
            "ku-mak kar-dan"
          ],
          [
            "می‌کند.",
            "may-ku-nad",
            "may-ku-nad",
            "ku-mak may-ku-nad",
            "kar-dan",
            "ku-mak kar-dan"
          ]
        ]
      },
      {
        "say": "zarb-ul-ma-sal-haa az tar-kee-bee pay-chee-da wa muh-ta-waa-yay sang-geen bar-khor-daar ast ki aan-haa raa baysh-tar bu-zurg-saa-laan ba kaar may-ba-rand.",
        "mean": "Proverbs have a complex structure and weighty content, so mostly adults use them.",
        "words": [
          [
            "ضرب‌المثل‌ها",
            "zarb-ul-ma-sal-haa",
            "zarb-ul-ma-sal-haa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "ترکیبی",
            "tar-kee-bee",
            "tar-kee-bee"
          ],
          [
            "پیچیده",
            "pay-chee-da",
            "pay-chee-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "محتوایی",
            "muh-ta-waa-yay",
            "muh-ta-waa-yay"
          ],
          [
            "سنگین",
            "sang-geen",
            "sang-geen"
          ],
          [
            "برخوردار",
            "bar-khor-daar",
            "bar-khor-daar",
            "bar-khor-daar ast"
          ],
          [
            "است",
            "ast",
            "ast",
            "bar-khor-daar ast"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "بزرگ‌سالان",
            "bu-zurg-saa-laan",
            "bu-zurg-saa-laan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba kaar may-ba-rand",
            "ba kaar bur-dan"
          ],
          [
            "کار",
            "kaar",
            "kaar",
            "ba kaar may-ba-rand",
            "ba kaar bur-dan"
          ],
          [
            "می‌برند.",
            "may-ba-rand",
            "may-ba-rand",
            "ba kaar may-ba-rand",
            "bur-dan",
            "ba kaar bur-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "chees-taan-haa na-wi dee-ga-ray az a-da-bee-yaa-ti aa-mi-yaa-na ast ki khu-soo-si-yaat wa kay-fi-yaa-tay az aa-dam-haa, ha-ya-waa-naat, gi-yaa-haan wa... raa dar ta-bee-at wa zin-da-gee-yi aa-dee-yi mar-dum baa zu-baa-ni is-ti-aa-ra, tam-seel, tas-weer wa taw-seef ba-yaan may-ku-nand wa paa-sukh wa naa-mi aan raa jo-yaa may-sha-wand.",
        "mean": "Riddles are another kind of folk literature: in the language of metaphor, comparison, image and description they describe qualities of people, animals, plants and so on, in nature and in people's ordinary lives, and ask for the answer, its name.",
        "words": [
          [
            "چیستان‌ها",
            "chees-taan-haa",
            "chees-taan-haa"
          ],
          [
            "نوع",
            "na-wi",
            "naw#type"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "عامیانه",
            "aa-mi-yaa-na",
            "aa-mi-yaa-na"
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
            "خصوصیات",
            "khu-soo-si-yaat",
            "khu-soo-si-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کیفیاتی",
            "kay-fi-yaa-tay",
            "kay-fi-yaa-tay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آدم‌ها،",
            "aa-dam-haa",
            "aa-dam-haa"
          ],
          [
            "حیوانات،",
            "ha-ya-waa-naat",
            "ha-ya-waa-naat"
          ],
          [
            "گیاهان",
            "gi-yaa-haan",
            "gi-yaa-haan"
          ],
          [
            "و...",
            "wa",
            "wa"
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
            "طبیعت",
            "ta-bee-at",
            "ta-bee-at"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زنده‌گی",
            "zin-da-gee-yi",
            "zin-da-gee"
          ],
          [
            "عادی",
            "aa-dee-yi",
            "aa-dee"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "استعاره،",
            "is-ti-aa-ra",
            "is-ti-aa-ra"
          ],
          [
            "تمثیل،",
            "tam-seel",
            "tam-seel"
          ],
          [
            "تصویر",
            "tas-weer",
            "tas-weer"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "توصیف",
            "taw-seef",
            "taw-seef"
          ],
          [
            "بیان",
            "ba-yaan",
            "ba-yaan",
            "ba-yaan may-ku-nand"
          ],
          [
            "می‌کنند",
            "may-ku-nand",
            "may-ku-nand",
            "ba-yaan may-ku-nand",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پاسخ",
            "paa-sukh",
            "paa-sukh"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نام",
            "naa-mi",
            "naam"
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
            "جویا",
            "jo-yaa",
            "jo-yaa",
            "jo-yaa may-sha-wand"
          ],
          [
            "می‌شوند.",
            "may-sha-wand",
            "may-sha-wand",
            "jo-yaa may-sha-wand",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "baa-yad guft ki ta-waj-juh ba far-han-gi sha-faa-hee na-tan-haa ba baa-ra-wa-ree wa gha-naa-mand kar-da-ni mak-too-baat dar ar-sa-yi far-hang ku-mak may-ku-nad; bal-ki mo-ji-bi is-tih-kaa-mi wa-zi far-han-gi jaa-ree-yi jaa-mi-a may-sha-wad.",
        "mean": "It must be said that attention to oral culture not only helps to enrich written works in the field of culture, but also strengthens the living culture of society.",
        "words": [
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "توجه",
            "ta-waj-juh",
            "ta-waj-juh"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "فرهنگ",
            "far-han-gi",
            "far-hang"
          ],
          [
            "شفاهی",
            "sha-faa-hee",
            "sha-faa-hee"
          ],
          [
            "نه‌تنها",
            "na-tan-haa",
            "na-tan-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "باروری",
            "baa-ra-wa-ree",
            "baa-ra-wa-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غنامند",
            "gha-naa-mand",
            "gha-naa-mand",
            "gha-naa-mand kar-da-ni"
          ],
          [
            "کردن",
            "kar-da-ni",
            "kar-dan",
            "gha-naa-mand kar-da-ni"
          ],
          [
            "مکتوبات",
            "mak-too-baat",
            "mak-too-baat"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "عرصهٔ",
            "ar-sa-yi",
            "ar-sa"
          ],
          [
            "فرهنگ",
            "far-hang",
            "far-hang"
          ],
          [
            "کمک",
            "ku-mak",
            "ku-mak",
            "ku-mak may-ku-nad",
            "ku-mak kar-dan"
          ],
          [
            "می‌کند؛",
            "may-ku-nad",
            "may-ku-nad",
            "ku-mak may-ku-nad",
            "kar-dan",
            "ku-mak kar-dan"
          ],
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "موجب",
            "mo-ji-bi",
            "mo-jib"
          ],
          [
            "استحکام",
            "is-tih-kaa-mi",
            "is-tih-kaam"
          ],
          [
            "وضع",
            "wa-zi",
            "waz"
          ],
          [
            "فرهنگ",
            "far-han-gi",
            "far-hang"
          ],
          [
            "جاری",
            "jaa-ree-yi",
            "jaa-ree"
          ],
          [
            "جامعه",
            "jaa-mi-a",
            "jaa-mi-a"
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
        "say": "a-da-bee-yaa-ti fol-klor tan-haa a-da-bee-yaat neest; bal-ki far-han-gi sar-za-mee-nay ast ki az fa-raaz wa na-shee-bi taa-reekh wa zih-ni mar-daan wa za-naa-ni aan sar-za-meen gu-zash-ta wa taa za-maa-na-yi maa i-daa-ma yaaf-ta ast.",
        "mean": "Folk literature is not only literature; it is the culture of a land, which has passed through the ups and downs of history and the minds of the men and women of that land and has continued to our time.",
        "words": [
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "فولکلور",
            "fol-klor",
            "fol-klor"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "ادبیات",
            "a-da-bee-yaat",
            "a-da-bee-yaat"
          ],
          [
            "نیست؛",
            "neest",
            "neest",
            "bu-dan"
          ],
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "فرهنگ",
            "far-han-gi",
            "far-hang"
          ],
          [
            "سرزمینی",
            "sar-za-mee-nay",
            "sar-za-mee-nay"
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
            "از",
            "az",
            "az"
          ],
          [
            "فراز",
            "fa-raaz",
            "fa-raaz",
            "fa-raaz wa na-shee-bi"
          ],
          [
            "و",
            "wa",
            "wa",
            "fa-raaz wa na-shee-bi"
          ],
          [
            "نشیب",
            "na-shee-bi",
            "na-sheeb",
            "fa-raaz wa na-shee-bi"
          ],
          [
            "تاریخ",
            "taa-reekh",
            "taa-reekh"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ذهن",
            "zih-ni",
            "zihn"
          ],
          [
            "مردان",
            "mar-daan",
            "mar-daan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زنان",
            "za-naa-ni",
            "za-naan"
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
            "گذشته",
            "gu-zash-ta",
            "gu-zash-ta",
            "gu-zash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "زمانهٔ",
            "za-maa-na-yi",
            "za-maa-na"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "ادامه",
            "i-daa-ma",
            "i-daa-ma",
            "i-daa-ma yaaf-ta ast",
            "i-daa-ma yaaf-tan"
          ],
          [
            "یافته",
            "yaaf-ta",
            "yaaf-ta",
            "i-daa-ma yaaf-ta ast",
            "yaaf-tan",
            "i-daa-ma yaaf-tan"
          ],
          [
            "است.",
            "ast",
            "ast",
            "i-daa-ma yaaf-ta ast",
            "i-daa-ma yaaf-tan"
          ]
        ]
      }
    ]
  ]
});
