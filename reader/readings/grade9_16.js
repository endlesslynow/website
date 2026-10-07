/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 16, book pages 102-105, PDF pages 109-112 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «کلمهٔ«دخانیهٔ»» is written «کلمهٔ «دخانیه»»; «منظورکسب» is written «منظور کسب»; «درجهان» is written «در جهان»; «می میرد» is written «می‌میرد»; «برقارهٔ» is written «بر قارهٔ»; «سرخ پوست» is written «سرخ‌پوست»; «درسال» is written «در سال»; «درتنباکو» is written «در تنباکو»; «راکه» is written «را که»; «ازمواد» is written «از مواد»; «به جز از حالت» is written «به جز از ۸ حالت»; «وحنجره» is written «و حنجره»; «برقلب» is written «بر قلب»; «مصرف کننده‌گان» is written «مصرف‌کننده‌گان»; «ازکار» is written «از کار»; «درجهاز» is written «در جهاز»; «بوده اند» is written «بوده‌اند»; «درکیسه‌های» is written «در کیسه‌های»; «می گردد» is written «می‌گردد»; «مؤسسهُ» is written «مؤسسهٔ».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-16',
  group: 'Dari · grade 9',
  label: 'Lesson 16',
  name: "az-raa-ri du-khaa-nee-yaat",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_16.jpg',
    alt: "Cigarette butts and ash on a red background."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_16.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "az-raar":                                 { fa: "اضرار", mean: "harms" },
    "du-khaa-nee-yaat":                        { fa: "دخانیات", mean: "tobacco products, smoking" },
    "jam":                                     { fa: "جمع", mean: "gathered" },
    "ka-li-ma":                                { fa: "کلمه", mean: "a word" },
    "du-khaa-nee-ya":                          { fa: "دخانیه", mean: "tobacco product" },
    "ast":                                     { fa: "است", mean: "is" },
    "ki":                                      { fa: "که", mean: "that, which, who" },
    "az":                                      { fa: "از", mean: "from, of" },
    "zu-baan":                                 { fa: "زبان", mean: "language; tongue" },
    "a-ra-bee":                                { fa: "عربی", mean: "Arab, Arabic" },
    "ba":                                      { fa: "به", mean: "to" },
    "maa":                                     { fa: "ما", mean: "we" },
    "raah":                                    { fa: "راه", mean: "way, road" },
    "yaaf-ta":                                 { fa: "یافته", mean: "found; having been carried" },
    "yaaf-tan":                                { fa: "یافتن", mean: "to find" },
    "ma-naa":                                  { fa: "معنا", mean: "meaning" },
    "lu-gha-wee":                              { fa: "لغوی", mean: "literal, lexical" },
    "aan":                                     { fa: "آن", mean: "that" },
    "dood":                                    { fa: "دود", mean: "smoke" },
    "a-sar":                                   { fa: "اثر", mean: "work (of writing or art)" },
    "sokh-tan":                                { fa: "سوختن", mean: "to burn" },
    "wa":                                      { fa: "و", mean: "and" },
    "aa-tash":                                 { fa: "آتش", mean: "fire" },
    "gi-rif-tan":                              { fa: "گرفتن", mean: "to take" },
    "ma-waad":                                 { fa: "مواد", mean: "materials, things" },
    "ha-waa":                                  { fa: "هوا", mean: "air, weather" },
    "bu-land":                                 { fa: "بلند", mean: "high, tall, loud" },
    "may-sha-wad":                             { fa: "می‌شود", mean: "becomes" },
    "shu-dan":                                 { fa: "شدن", mean: "to become" },
    "am-maa":                                  { fa: "اما", mean: "but" },
    "dar":                                     { fa: "در", mean: "in" },
    "is-ti-laah":                              { fa: "اصطلاح", mean: "a term" },
    "ma-waa-dee":                              { fa: "موادی", mean: "substances, some materials" },
    "may-go-yand":                             { fa: "می‌گویند", mean: "they say; they call" },
    "guf-tan":                                 { fa: "گفتن", mean: "to say, to tell" },
    "in-saan-haa":                             { fa: "انسان‌ها", mean: "people, human beings" },
    "in-saan":                                 { fa: "انسان", mean: "a person, a human being" },
    "zaa-hi-ran":                              { fa: "ظاهرا", mean: "apparently" },
    "man-zoor":                                { fa: "منظور", mean: "purpose, intention" },
    "kasb":                                    { fa: "کسب", mean: "gaining, acquisition" },
    "liz-zat":                                 { fa: "لذت", mean: "pleasure" },
    "ee-jaad":                                 { fa: "ایجاد", mean: "creating, setting up" },
    "naw-ee":                                  { fa: "نوعی", mean: "a kind, one kind" },
    "di-gar-goo-nee":                          { fa: "دگرگونی", mean: "change" },
    "jis-mee":                                 { fa: "جسمی", mean: "physical" },
    "ra-waa-nee":                              { fa: "روانی", mean: "mental" },
    "raa":                                     { fa: "را", mean: "marks the object of the verb" },
    "sokh-taan-da":                            { fa: "سوختانده", mean: "burned" },
    "sokh-taan-dan":                           { fa: "سوختاندن", mean: "to burn something" },
    "is-tin-shaaq":                            { fa: "استنشاق", mean: "inhaling" },
    "may-ku-nand":                             { fa: "می‌کنند", mean: "they do" },
    "kar-dan":                                 { fa: "کردن", mean: "to do, to make" },
    "an-waa":                                  { fa: "انواع", mean: "kinds" },
    "zi-yaa-dee":                              { fa: "زیادی", mean: "many, a great amount" },
    "daa-rad":                                 { fa: "دارد", mean: "has" },
    "daash-tan":                               { fa: "داشتن", mean: "to have" },
    "kish-war":                                { fa: "کشور", mean: "country" },
    "mar-dum":                                 { fa: "مردم", mean: "people" },
    "baysh-tar":                               { fa: "بیشتر", mean: "more" },
    "baa":                                     { fa: "با", mean: "with" },
    "naam":                                    { fa: "نام", mean: "name" },
    "si-girt":                                 { fa: "سگرت", mean: "cigarette" },
    "chi-lim":                                 { fa: "چلم", mean: "water pipe, hookah" },
    "tam-baa-koo":                             { fa: "تنباکو", mean: "tobacco" },
    "charas":                                  { fa: "چرس", mean: "hashish" },
    "tir-yaak":                                { fa: "تریاک", mean: "opium" },
    "hee-ro-yeen":                             { fa: "هیرویین", mean: "heroin" },
    "aash-naa-yee":                            { fa: "آشنایی", mean: "familiarity" },
    "daa-rand":                                { fa: "دارند", mean: "have" },
    "jum-la":                                  { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "aan-haa":                                 { fa: "آن‌ها", mean: "they, them" },
    "mu-khad-di-ra":                           { fa: "مخدره", mean: "narcotic" },
    "neez":                                    { fa: "نیز", mean: "also, too" },
    "yaad":                                    { fa: "یاد", mean: "memory, mention" },
    "may-sha-wand":                            { fa: "می‌شوند", mean: "become, are" },
    "nas-waar":                                { fa: "نسوار", mean: "snuff" },
    "da-han":                                  { fa: "دهن", mean: "mouth" },
    "bee-nee":                                 { fa: "بینی", mean: "seeing; nose" },
    "ham":                                     { fa: "هم", mean: "also, too" },
    "gar-chi":                                 { fa: "گرچه", mean: "although" },
    "na-may-sha-wand":                         { fa: "نمی‌شوند", mean: "do not become, are not" },
    "shu-maar":                                { fa: "شمار", mean: "count, number" },
    "may-aa-yand":                             { fa: "می‌آیند", mean: "come; (with paysh) behave" },
    "aa-ma-dan":                               { fa: "آمدن", mean: "to come" },
    "zee-raa":                                 { fa: "زیرا", mean: "because" },
    "za-rar-shaan":                            { fa: "ضررشان", mean: "their harm" },
    "kam-tar":                                 { fa: "کمتر", mean: "less" },
    "neest":                                   { fa: "نیست", mean: "is not" },
    "bu-dan":                                  { fa: "بودن", mean: "to be" },
    "baa-laa":                                 { fa: "بالا", mean: "top, height" },
    "bur-deem":                                { fa: "بردیم", mean: "we named, took" },
    "bur-dan":                                 { fa: "بردن", mean: "to take away, to carry" },
    "mas-raf":                                 { fa: "مصرف", mean: "use, consumption" },
    "saa-laa-na":                              { fa: "سالانه", mean: "yearly, annually" },
    "maa-ya":                                  { fa: "مایه", mean: "means, capital" },
    "ranj":                                    { fa: "رنج", mean: "hardship, suffering" },
    "bi-si-yaar":                              { fa: "بسیار", mean: "much, very" },
    "ta-ham-mul":                              { fa: "تحمل", mean: "bearing, enduring" },
    "ha-zee-na-haa-yi":                        { fa: "هزینه‌های", mean: "costs" },
    "bee-shu-maar":                            { fa: "بی‌شمار", mean: "countless" },
    "iq-ti-saa-dee":                           { fa: "اقتصادی", mean: "economic" },
    "ij-ti-maa-ee":                            { fa: "اجتماعی", mean: "social" },
    "shu-da":                                  { fa: "شده", mean: "become; been" },
    "mil-yon-haa":                             { fa: "میلیون‌ها", mean: "millions" },
    "na-far":                                  { fa: "نفر", mean: "person, people" },
    "ja-haan":                                 { fa: "جهان", mean: "world" },
    "kaam":                                    { fa: "کام", mean: "mouth; grasp" },
    "marg":                                    { fa: "مرگ", mean: "death" },
    "fu-ro":                                   { fa: "فرو", mean: "down, into" },
    "may-ba-rad":                              { fa: "می‌برد", mean: "takes, carries" },
    "ta-waj-juh":                              { fa: "توجه", mean: "attention" },
    "een":                                     { fa: "این", mean: "this" },
    "har":                                     { fa: "هر", mean: "every" },
    "nuh":                                     { fa: "نه", mean: "nine" },
    "saa-nee-ya":                              { fa: "ثانیه", mean: "second" },
    "yak":                                     { fa: "یک", mean: "one, a" },
    "da-leel":                                 { fa: "دلیل", mean: "reason, proof" },
    "is-ti-maal":                              { fa: "استعمال", mean: "use, usage" },
    "may-mee-rad":                             { fa: "می‌میرد", mean: "dies" },
    "mur-dan":                                 { fa: "مردن", mean: "to die" },
    "aa-saar":                                 { fa: "آثار", mean: "works" },
    "mush-kil":                                { fa: "مشکل", mean: "hard, difficult" },
    "sa-raa-sa-ree":                           { fa: "سرتاسری", mean: "worldwide, widespread" },
    "tab-deel":                                { fa: "تبدیل", mean: "changing, turning into" },
    "mu-ta-si-faa-na":                         { fa: "متأسفانه", mean: "unfortunately" },
    "ma-waa-rid":                              { fa: "موارد", mean: "cases, instances" },
    "hat-taa":                                 { fa: "حتا", mean: "even" },
    "kha-tar-haa-yi":                          { fa: "خطرهای", mean: "dangers" },
    "si-hee":                                  { fa: "صحی", mean: "healthy, hygienic, medical" },
    "gosh":                                    { fa: "گوش", mean: "ear" },
    "ra-saa-nee-da":                           { fa: "رسانیده", mean: "brought" },
    "ra-saan-dan":                             { fa: "رساندن", mean: "to bring, to deliver" },
    "nee-ko-teen":                             { fa: "نیکوتین", mean: "nicotine" },
    "chees":                                   { fa: "چیست", mean: "what is" },
    "nu-khus-teen":                            { fa: "نخستین", mean: "first" },
    "ka-say":                                  { fa: "کسی", mean: "someone" },
    "kashf":                                   { fa: "کشف", mean: "discovery, discovering" },
    "kard":                                    { fa: "کرد", mean: "did, made" },
    "kris-tof":                                { fa: "کریستف", mean: "Christopher" },
    "ko-lumb":                                 { fa: "کولمب", mean: "Columbus" },
    "bood":                                    { fa: "بود", mean: "was" },
    "oo":                                      { fa: "او", mean: "he, she; his, her" },
    "za-maa-nay":                              { fa: "زمانی", mean: "at times; a time" },
    "bar":                                     { fa: "بر", mean: "on, upon" },
    "qaa-ra-yi":                               { fa: "قارهٔ", mean: "continent" },
    "am-ree-kaa":                              { fa: "امریکا", mean: "America" },
    "gaam":                                    { fa: "گام", mean: "step" },
    "ni-haad":                                 { fa: "نهاد", mean: "put, placed" },
    "ni-haa-dan":                              { fa: "نهادن", mean: "to put, to place" },
    "aan-jaa":                                 { fa: "آن‌جا", mean: "there" },
    "a-haa-lee":                               { fa: "اهالی", mean: "inhabitants" },
    "bo-mee":                                  { fa: "بومی", mean: "native, Indigenous" },
    "surkh-poost":                             { fa: "سرخ‌پوست", mean: "Indigenous American, red-skinned" },
    "deed":                                    { fa: "دید", mean: "saw" },
    "dee-dan":                                 { fa: "دیدن", mean: "to see; seeing" },
    "kas-rat":                                 { fa: "کثرت", mean: "abundance" },
    "kasht":                                   { fa: "کشت", mean: "cultivation" },
    "may-na-mo-dand":                          { fa: "می‌نمودند", mean: "they did, used" },
    "na-mo-dan":                               { fa: "نمودن", mean: "to do; to show; to seem" },
    "saal-haa":                                { fa: "سال‌ها", mean: "years" },
    "pas":                                     { fa: "پس", mean: "then, so" },
    "yaa-nee":                                 { fa: "یعنی", mean: "that is, it means" },
    "saal":                                    { fa: "سال", mean: "year" },
    "yak-ha-zaa-ru panj-sa-du pan-jaa-hu naw": { fa: "۱۵۵۹", mean: "1559" },
    "mee-laa-dee":                             { fa: "م.", mean: "AD, Gregorian" },
    "hin-gaa-mee":                             { fa: "هنگامی", mean: "a time, when" },
    "kash-tee":                                { fa: "کشتی", mean: "ship" },
    "fa-raa-na-wee":                           { fa: "فرانسوی", mean: "French" },
    "nee-kot":                                 { fa: "نیکوت", mean: "Nicot" },
    "waa-rid":                                 { fa: "وارد", mean: "entering, entered" },
    "fa-raa-na":                               { fa: "فرانسه", mean: "France" },
    "saakht":                                  { fa: "ساخت", mean: "made" },
    "saakh-tan":                               { fa: "ساختن", mean: "to make, to build" },
    "ow-ro-paa-yi-yaan":                       { fa: "اروپاییان", mean: "Europeans" },
    "aash-naa":                                { fa: "آشنا", mean: "familiar, known" },
    "shu-dand":                                { fa: "شدند", mean: "they became" },
    "khud":                                    { fa: "خود", mean: "own; self" },
    "gi-rift":                                 { fa: "گرفت", mean: "took; began" },
    "maa-da":                                  { fa: "ماده", mean: "substance, material" },
    "maa-da-yi":                               { fa: "مادهٔ", mean: "substance, material" },
    "mu-khad-di-ree":                          { fa: "مخدری", mean: "narcotic" },
    "ba-tawr":                                 { fa: "به‌طور", mean: "in the way of" },
    "ta-bee-ee":                               { fa: "طبیعی", mean: "natural, naturally" },
    "dee-gar":                                 { fa: "دیگر", mean: "other; more; anymore" },
    "wu-jood":                                 { fa: "وجود", mean: "existence" },
    "li-haaz":                                 { fa: "لحاظ", mean: "point of view" },
    "waa-bas-ta":                              { fa: "وابسته", mean: "dependent" },
    "khaysh":                                  { fa: "خویش", mean: "own; self" },
    "may-saa-zad":                             { fa: "می‌سازد", mean: "makes" },
    "kha-ta-raa-tee":                          { fa: "خطراتی", mean: "dangers" },
    "baar":                                    { fa: "بار", mean: "time, occasion; load" },
    "may-aa-wa-rad":                           { fa: "می‌آورد", mean: "brings" },
    "aa-war-dan":                              { fa: "آوردن", mean: "to bring" },
    "ma-raa-tib":                              { fa: "مراتب", mean: "duties, ranks" },
    "mu-zir-ra-yi":                            { fa: "مضرهٔ", mean: "harmful" },
    "ta-see-raat":                             { fa: "تأثیرات", mean: "effects" },
    "tah-qee-qaat":                            { fa: "تحقیقات", mean: "research, studies" },
    "il-mee":                                  { fa: "علمی", mean: "scholarly, scientific" },
    "saa-bit":                                 { fa: "ثابت", mean: "proved, fixed" },
    "na-mo-da":                                { fa: "نموده", mean: "having done" },
    "yak-ha-zaa-ru panj-sad":                  { fa: "۱۵۰۰", mean: "1500" },
    "haa-lat":                                 { fa: "حالت", mean: "state" },
    "sa-ra-taa-nee":                           { fa: "سرطانی", mean: "cancerous, cancer" },
    "juz":                                     { fa: "جز", mean: "except" },
    "hasht#digit":                             { fa: "۸", say: "hasht", mean: "eight" },
    "ha-ma":                                   { fa: "همه", mean: "all, every" },
    "mi-yaan":                                 { fa: "میان", mean: "middle, among" },
    "may-aa-yad":                              { fa: "می‌آید", mean: "comes" },
    "chu-naan-ki":                             { fa: "چنان‌که", mean: "as, for example" },
    "sa-ra-taan":                              { fa: "سرطان", mean: "cancer" },
    "shush":                                   { fa: "شُش", mean: "lung" },
    "mar-daan":                                { fa: "مردان", mean: "men" },
    "za-naan":                                 { fa: "زنان", mean: "women" },
    "mu-shaa-hi-da":                           { fa: "مشاهده", mean: "seeing" },
    "may-ra-sad":                              { fa: "می‌رسد", mean: "arrives, reaches" },
    "ra-see-dan":                              { fa: "رسیدن", mean: "to arrive, to reach" },
    "way-zha":                                 { fa: "ویژه", mean: "special (ba way-zha, especially)" },
    "na-tan-haa":                              { fa: "نه‌تنها", mean: "not only" },
    "baa-is":                                  { fa: "باعث", mean: "cause" },
    "bal-ki":                                  { fa: "بلکه", mean: "but rather" },
    "lab":                                     { fa: "لب", mean: "lip" },
    "ga-lo":                                   { fa: "گلو", mean: "throat" },
    "han-ja-ra":                               { fa: "حنجره", mean: "larynx" },
    "pay":                                     { fa: "پی", mean: "following, consequence" },
    "qalb":                                    { fa: "قلب", mean: "heart" },
    "an-saaj":                                 { fa: "انساج", mean: "tissues" },
    "takh-reeb":                               { fa: "تخریب", mean: "destruction" },
    "sees-tim":                                { fa: "سیستم", mean: "system" },
    "daw-raan":                                { fa: "دوران", mean: "period, era" },
    "khoon":                                   { fa: "خون", mean: "blood" },
    "mu-ta-sir":                               { fa: "متأثر", mean: "affected" },
    "mu-him-ta-reen":                          { fa: "مهمترین", mean: "most important" },
    "naa-gu-waar":                             { fa: "ناگوار", mean: "unpleasant" },
    "sur-at":                                  { fa: "سرعت", mean: "speed" },
    "naa-ga-haa-nee":                          { fa: "ناگهانی", mean: "sudden" },
    "sha-deed":                                { fa: "شدید", mean: "strong, heavy" },
    "za-ra-baan":                              { fa: "ضربان", mean: "heartbeat, beating" },
    "mukh-ta-lif":                             { fa: "مختلف", mean: "different, various" },
    "mas-raf-ku-nan-da-gaan":                  { fa: "مصرف‌کننده‌گان", mean: "users, consumers" },
    "il-lat":                                  { fa: "علت", mean: "cause, reason" },
    "kaar":                                    { fa: "کار", mean: "work, a job" },
    "uf-taa-dan":                              { fa: "افتادن", mean: "to fall" },
    "shir-yaan-haa-yi":                        { fa: "شریان‌های", mean: "arteries" },
    "kho-sha-yee":                             { fa: "خوشه‌یی", mean: "coronary, clustered" },
    "gi-ree-baan-geer":                        { fa: "گریبان‌گیر", mean: "afflicted by, caught by" },
    "yaa":                                     { fa: "یا", mean: "or" },
    "sak-ta-yi":                               { fa: "سکتهٔ", mean: "stroke, attack" },
    "qal-bee":                                 { fa: "قلبی", mean: "of the heart, cardiac" },
    "magh-zee":                                { fa: "مغزی", mean: "of the brain, cerebral" },
    "nis-bat":                                 { fa: "نسبت", mean: "relation (nis-bat ba, toward)" },
    "naw#type":                                { fa: "نوع", say: "naw", mean: "kind, type" },
    "mu-taa-daan":                             { fa: "معتادان", mean: "addicts, people addicted" },
    "panj":                                    { fa: "پنج", mean: "five" },
    "ba-raa-bar":                              { fa: "برابر", mean: "front (dar ba-raa-bar-i, toward, before); equal" },
    "ash-khaa-see":                            { fa: "اشخاصی", mean: "people who" },
    "aa-dat":                                  { fa: "عادت", mean: "habit" },
    "na-daa-rand":                             { fa: "ندارند", mean: "do not have" },
    "ji-haaz":                                 { fa: "جهاز", mean: "system, apparatus" },
    "haa-zi-ma":                               { fa: "هاضمه", mean: "digestive" },
    "is-ti-faa-da":                            { fa: "استفاده", mean: "use" },
    "aa-mil":                                  { fa: "عامل", mean: "cause, factor" },
    "ha-waa-dis":                              { fa: "حوادث", mean: "cases, events" },
    "may-baa-shad":                            { fa: "می‌باشد", mean: "is" },
    "e-tee-yaad":                              { fa: "اعتیاد", mean: "addiction" },
    "ghud-da-haa-yi":                          { fa: "غده‌های", mean: "glands" },
    "lu-aa-bee-ya":                            { fa: "لعابیه", mean: "salivary" },
    "qishr":                                   { fa: "قشر", mean: "class, layer" },
    "di-faa-ee":                               { fa: "دفاعی", mean: "defensive, of defense" },
    "da-haan":                                 { fa: "دهان", mean: "mouth" },
    "uf-taa-da":                               { fa: "افتاده", mean: "fallen, stopped working" },
    "za-mee-na-yi":                            { fa: "زمینهٔ", mean: "ground, conditions" },
    "pay-daa-yish":                            { fa: "پیدایش", mean: "appearance, development" },
    "rushd":                                   { fa: "رشد", mean: "growth" },
    "aa-maa-da":                               { fa: "آماده", mean: "ready, prepared" },
    "ih-saa-ee-ya":                            { fa: "احصائیه", mean: "statistics" },
    "ni-shaan":                                { fa: "نشان", mean: "sign, show" },
    "daa-da":                                  { fa: "داده", mean: "given" },
    "daa-dan":                                 { fa: "دادن", mean: "to give" },
    "hash-taad":                               { fa: "۸۰", mean: "eighty" },
    "dar-sad":                                 { fa: "%", mean: "percent" },
    "ma-ree-zaan":                             { fa: "مریضان", mean: "patients" },
    "mu-saab":                                 { fa: "مصاب", mean: "afflicted, infected" },
    "ma-ree":                                  { fa: "مری", mean: "gullet, esophagus" },
    "boo-da-and":                              { fa: "بوده‌اند", mean: "have been" },
    "tan-haa":                                 { fa: "تنها", mean: "only; alone" },
    "ik-ti-faa":                               { fa: "اکتفا", mean: "making do, being content" },
    "na-na-mo-da":                             { fa: "ننموده", mean: "not having done, not stopping" },
    "mi-da":                                   { fa: "معده", mean: "stomach" },
    "ba-jaa":                                  { fa: "به‌جا", mean: "in place" },
    "may-gu-zaa-rad":                          { fa: "می‌گذارد", mean: "puts, leaves" },
    "gu-zaash-tan":                            { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "tay-zaab":                                { fa: "تیزاب", mean: "acid" },
    "iz-de-yaad":                              { fa: "ازدیاد", mean: "increase" },
    "may-bakh-shad":                           { fa: "می‌بخشد", mean: "gives, causes" },
    "bakh-shee-dan":                           { fa: "بخشیدن", mean: "to give, to grant; to forgive" },
    "zi-yaad":                                 { fa: "زیاد", mean: "many, much" },
    "tad-ree-jee":                             { fa: "تدریجی", mean: "gradual" },
    "il-ti-haab":                              { fa: "التهاب", mean: "inflammation" },
    "muz-min":                                 { fa: "مزمن", mean: "chronic" },
    "pa-deed":                                 { fa: "پدید", mean: "visible, appearing" },
    "mu-taad":                                 { fa: "معتاد", mean: "addicted person, addict" },
    "ikh-ti-laa-laat":                         { fa: "اختلالات", mean: "disorders" },
    "haz-mee":                                 { fa: "هضمی", mean: "digestive" },
    "du-chaar":                                { fa: "دچار", mean: "caught (by), suffering" },
    "bil-aa-khi-ra":                           { fa: "بالآخره", mean: "finally" },
    "may-an-jaa-mad":                          { fa: "می‌انجامد", mean: "leads, results" },
    "an-jaa-mee-dan":                          { fa: "انجامیدن", mean: "to lead, result" },
    "ta-naf-fu-see":                           { fa: "تنفسی", mean: "respiratory" },
    "za-kheem":                                { fa: "ضخیم", mean: "thick" },
    "par-da-haa-yi":                           { fa: "پرده‌های", mean: "membranes, coverings" },
    "in-si-daad":                              { fa: "انسداد", mean: "blockage" },
    "lo-la-haa-yi":                            { fa: "لوله‌های", mean: "tubes" },
    "kee-sa-haa-yi":                           { fa: "کیسه‌های", mean: "sacs, bags" },
    "ha-waa-yee":                              { fa: "هوایی", mean: "air, of air" },
    "ha-meen-goo-na":                          { fa: "همین‌گونه", mean: "likewise, in the same way" },
    "sa-bab":                                  { fa: "سبب", mean: "cause, reason" },
    "nukhus-teen":                             { fa: "نخست", mean: "first, at first" },
    "shakl":                                   { fa: "شکل", mean: "form, shape" },
    "sa-daa":                                  { fa: "صدا", mean: "sound, voice" },
    "gi-rif-ta-gee":                           { fa: "گرفته‌گی", mean: "hoarseness; being caught" },
    "zaa-hir":                                 { fa: "ظاهر", mean: "visible, appearing" },
    "takh-reesh":                              { fa: "تخریش", mean: "irritation" },
    "sur-fa-yi":                               { fa: "سرفهٔ", mean: "cough" },
    "ta-shan-nu-jee":                          { fa: "تشنجی", mean: "spasmodic" },
    "ham-raah":                                { fa: "همراه", mean: "together, along" },
    "ha-meen":                                 { fa: "همین", mean: "this very, this same" },
    "za-mee-na":                               { fa: "زمینه", mean: "ground, conditions" },
    "ba-raa-yi":                               { fa: "برای", mean: "for" },
    "sa-ree":                                  { fa: "سریع", mean: "rapid" },
    "may-gar-dad":                             { fa: "می‌گردد", mean: "becomes, turns" },
    "gar-dee-dan":                             { fa: "گردیدن", mean: "to become, to turn" },
    "daa-nish-man-daan":                       { fa: "دانشمندان", mean: "scholars, scientists" },
    "daak-ta-raan":                            { fa: "داکتران", mean: "doctors" },
    "na-za-ree-ya":                            { fa: "نظریه", mean: "theory, view" },
    "it-ti-faaq":                              { fa: "اتفاق", mean: "agreement, event" },
    "kaa-mil":                                 { fa: "کامل", mean: "full, complete" },
    "mu-a-sa-sa-yi":                           { fa: "مؤسسهٔ", mean: "institute" },
    "mu-baa-ri-za":                            { fa: "مبارزه", mean: "struggle, control" },
    "shahr":                                   { fa: "شهر", mean: "city, town" },
    "to-loz":                                  { fa: "تولوز", mean: "Toulouse" },
    "sad-dar-sad":                             { fa: "۱۰۰%", mean: "one hundred percent" },
    "ash-khaas":                               { fa: "اشخاص", mean: "people" },
    "mub-ta-laa":                              { fa: "مبتلا", mean: "infected with, suffering from" },
    "ham-chu-naan":                            { fa: "همچنان", mean: "likewise, just so" },
    "na-wad-dar-sad":                          { fa: "۹۰%", mean: "ninety percent" },
    "jaan":                                    { fa: "جان", mean: "soul, life" },
    "dast":                                    { fa: "دست", mean: "hand" },
    "daa-da-and":                              { fa: "داده‌اند", mean: "have given, have lost" },
    "ta-daad":                                 { fa: "تعداد", mean: "number" },
    "qur-baa-nee-yaan":                        { fa: "قربانیان", mean: "victims" },
    "see#digit":                               { fa: "(۳۰)", say: "see", mean: "thirty" },
    "ka-saa-nay":                              { fa: "کسانی", mean: "people (who)" },
    "na-may-par-daa-zand":                     { fa: "نمی‌پردازند", mean: "do not engage, do not use" },
    "par-daakh-tan":                           { fa: "پرداختن", mean: "to busy oneself (with ba), to take up; to pay" },
    "baa-yad":                                 { fa: "باید", mean: "must, should" },
    "jaa-mi-a":                                { fa: "جامعه", mean: "society" },
    "mah-doo-dee-yat-haa":                     { fa: "محدودیت‌های", mean: "restrictions" },
    "sha-wad":                                 { fa: "شود", mean: "become" },
    "taa":                                     { fa: "تا", mean: "so that; until; to" },
    "sha-raa-yit":                             { fa: "شرایط", mean: "conditions" },
    "mu-heet":                                 { fa: "محیط", mean: "surroundings, setting" },
    "a-maa-kin":                               { fa: "اماکن", mean: "places" },
    "sar-bas-ta":                              { fa: "سربسته", mean: "enclosed" },
    "maa-nand":                                { fa: "مانند", mean: "like" },
    "u-taaq-haa":                              { fa: "اتاق‌ها", mean: "rooms" },
    "ma-naa-zil":                              { fa: "منازل", mean: "homes, houses" },
    "ris-to-raant-haa":                        { fa: "رستورانت‌ها", mean: "restaurants" },
    "chaa-yi-khaa-na-haa":                     { fa: "چایخانه‌ها", mean: "teahouses" },
    "mu-heet-haa-yi":                          { fa: "محیط‌های", mean: "environments, settings" },
    "bas-ta":                                  { fa: "بسته", mean: "closed; has closed" },
    "bas-tan":                                 { fa: "بستن", mean: "to close, to tie" },
    "ham-choon":                               { fa: "همچون", mean: "like" },
    "taak-see":                                { fa: "تاکسی", mean: "taxi" },
    "sir-wees-haa-yi":                         { fa: "سرویس‌های", mean: "services, vehicles" },
    "shah-ree":                                { fa: "شهری", mean: "urban, city" },
    "na-ta-waa-nand":                          { fa: "نتوانند", mean: "may not be able" },
    "ta-waa-nis-tan":                          { fa: "توانستن", mean: "to be able, can" },
    "bi-ku-shand":                             { fa: "بکشند", mean: "kill" },
    "kush-tan":                                { fa: "کشتن", mean: "to kill" },
    "za-rar":                                  { fa: "ضرر", mean: "harm" },
    "na-may-ra-saa-nad":                       { fa: "نمی‌رساند", mean: "does not cause" },
    "meer":                                    { fa: "میر", mean: "dying (marg-o meer, death)" },
    "naa-shee":                                { fa: "ناشی", mean: "arising, resulting" },
    "bee-maa-ree-haa-yi":                      { fa: "بیماری‌های", mean: "illnesses, diseases" },
    "ham-sa-raan":                             { fa: "همسران", mean: "spouses" },
    "far-zan-daan":                            { fa: "فرزندان", mean: "children, sons" },
    "af-raad":                                 { fa: "افراد", mean: "individuals, members" },
    "yak-a-shaa-ree-ya-sih":                   { fa: "۳/۱", mean: "1.3" },
    "may-ku-nad":                              { fa: "می‌کند", mean: "does, makes" }
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
    "say": "az-raa-ri du-khaa-nee-yaat",
    "mean": "The harms of tobacco",
    "words": [
      [
        "اضرار",
        "az-raa-ri",
        "az-raar"
      ],
      [
        "دخانیات",
        "du-khaa-nee-yaat",
        "du-khaa-nee-yaat"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "du-khaa-nee-yaat ja-mi ka-li-ma-yi “du-khaa-nee-ya” ast ki az zu-baa-ni a-ra-bee ba zu-baa-ni maa raah yaaf-ta ast.",
        "mean": "The word dukhaniyat, tobacco products, is the plural of dukhaniya, a word that entered our language from Arabic.",
        "words": [
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "جمع",
            "ja-mi",
            "jam"
          ],
          [
            "کلمهٔ",
            "ka-li-ma-yi",
            "ka-li-ma"
          ],
          [
            "«دخانیه»",
            "du-khaa-nee-ya",
            "du-khaa-nee-ya"
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
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "عربی",
            "a-ra-bee",
            "a-ra-bee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "راه",
            "raah",
            "raah"
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
        "say": "ma-naa-yi lu-gha-wee-yi aan, dood ast ki az a-sa-ri sokh-tan wa aa-tash gi-rif-ta-ni ma-waad ba ha-waa bu-land may-sha-wad;",
        "mean": "Its literal meaning is smoke that rises into the air when substances burn and catch fire.",
        "words": [
          [
            "معنای",
            "ma-naa-yi",
            "ma-naa"
          ],
          [
            "لغوی",
            "lu-gha-wee-yi",
            "lu-gha-wee"
          ],
          [
            "آن،",
            "aan",
            "aan"
          ],
          [
            "دود",
            "dood",
            "dood"
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
            "اثر",
            "a-sa-ri",
            "a-sar"
          ],
          [
            "سوختن",
            "sokh-tan",
            "sokh-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آتش",
            "aa-tash",
            "aa-tash"
          ],
          [
            "گرفتن",
            "gi-rif-ta-ni",
            "gi-rif-tan"
          ],
          [
            "مواد",
            "ma-waad",
            "ma-waad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "هوا",
            "ha-waa",
            "ha-waa"
          ],
          [
            "بلند",
            "bu-land",
            "bu-land"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "am-maa dar is-ti-laah ba ma-waa-dee may-go-yand ki in-saan-haa zaa-hi-ran ba man-zoo-ri kas-bi liz-zat wa ee-jaa-di naw-ee di-gar-goo-nee-yi jis-mee wa ra-waa-nee, aan raa sokh-taan-da wa doo-di aan raa is-tin-shaaq may-ku-nand.",
        "mean": "As a term, however, it means substances that people burn and whose smoke they inhale, apparently to gain pleasure and bring about a physical and mental change.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اصطلاح",
            "is-ti-laah",
            "is-ti-laah"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "موادی",
            "ma-waa-dee",
            "ma-waa-dee"
          ],
          [
            "می‌گویند",
            "may-go-yand",
            "may-go-yand",
            "guf-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "انسان‌ها",
            "in-saan-haa",
            "in-saan-haa",
            "in-saan"
          ],
          [
            "ظاهرا",
            "zaa-hi-ran",
            "zaa-hi-ran"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "منظور",
            "man-zoo-ri",
            "man-zoor"
          ],
          [
            "کسب",
            "kas-bi",
            "kasb"
          ],
          [
            "لذت",
            "liz-zat",
            "liz-zat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ایجاد",
            "ee-jaa-di",
            "ee-jaad"
          ],
          [
            "نوعی",
            "naw-ee",
            "naw-ee"
          ],
          [
            "دگرگونی",
            "di-gar-goo-nee-yi",
            "di-gar-goo-nee"
          ],
          [
            "جسمی",
            "jis-mee",
            "jis-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روانی،",
            "ra-waa-nee",
            "ra-waa-nee"
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
            "سوختانده",
            "sokh-taan-da",
            "sokh-taan-da",
            "sokh-taan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دود",
            "doo-di",
            "dood"
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
            "استنشاق",
            "is-tin-shaaq",
            "is-tin-shaaq"
          ],
          [
            "می‌کنند.",
            "may-ku-nand",
            "may-ku-nand",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "du-khaa-nee-yaat an-waa-yi zi-yaa-dee daa-rad ki dar kish-wa-ri maa mar-dum baysh-tar baa naa-mi si-girt, chi-lim, tam-baa-koo, charas, tir-yaak wa hee-ro-yeen aash-naa-yee daa-rand.",
        "mean": "Tobacco and intoxicating products have many forms; in our country people are most familiar with cigarettes, the water pipe, tobacco, hashish, opium and heroin.",
        "words": [
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "زیادی",
            "zi-yaa-dee",
            "zi-yaa-dee"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
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
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "نام",
            "naa-mi",
            "naam"
          ],
          [
            "سگرت،",
            "si-girt",
            "si-girt"
          ],
          [
            "چلم،",
            "chi-lim",
            "chi-lim"
          ],
          [
            "تنباکو،",
            "tam-baa-koo",
            "tam-baa-koo"
          ],
          [
            "چرس،",
            "charas",
            "charas"
          ],
          [
            "تریاک",
            "tir-yaak",
            "tir-yaak"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هیرویین",
            "hee-ro-yeen",
            "hee-ro-yeen"
          ],
          [
            "آشنایی",
            "aash-naa-yee",
            "aash-naa-yee"
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
        "say": "az jum-la-yi aan-haa charas, tir-yaak wa hee-ro-yeen ba naa-mi ma-waa-di mu-khad-di-ra neez yaad may-sha-wand.",
        "mean": "Among them, hashish, opium and heroin are also called narcotic substances.",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "جملهٔ",
            "jum-la-yi",
            "jum-la"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "چرس،",
            "charas",
            "charas"
          ],
          [
            "تریاک",
            "tir-yaak",
            "tir-yaak"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هیرویین",
            "hee-ro-yeen",
            "hee-ro-yeen"
          ],
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
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "مخدره",
            "mu-khad-di-ra",
            "mu-khad-di-ra"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "یاد",
            "yaad",
            "yaad"
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
        "say": "nas-waa-ri da-han wa nas-waa-ri bee-nee ham, gar-chi sokh-taan-da na-may-sha-wand; am-maa dar jum-la-yi du-khaa-nee-yaat ba shu-maar may-aa-yand;",
        "mean": "Oral and nasal snuff, although they are not burned, are also counted among tobacco products,",
        "words": [
          [
            "نسوار",
            "nas-waa-ri",
            "nas-waar"
          ],
          [
            "دهن",
            "da-han",
            "da-han"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نسوار",
            "nas-waa-ri",
            "nas-waar"
          ],
          [
            "بینی",
            "bee-nee",
            "bee-nee"
          ],
          [
            "هم،",
            "ham",
            "ham"
          ],
          [
            "گرچه",
            "gar-chi",
            "gar-chi"
          ],
          [
            "سوختانده",
            "sokh-taan-da",
            "sokh-taan-da",
            "sokh-taan-dan"
          ],
          [
            "نمی‌شوند؛",
            "na-may-sha-wand",
            "na-may-sha-wand",
            "shu-dan"
          ],
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "جملهٔ",
            "jum-la-yi",
            "jum-la"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "شمار",
            "shu-maar",
            "shu-maar"
          ],
          [
            "می‌آیند؛",
            "may-aa-yand",
            "may-aa-yand",
            "aa-ma-dan"
          ]
        ]
      },
      {
        "say": "zee-raa za-rar-shaan kam-tar az ma-waa-dee neest ki dar baa-laa naam bur-deem.",
        "mean": "because their harm is no less than that of the substances named above.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "ضررشان",
            "za-rar-shaan",
            "za-rar-shaan"
          ],
          [
            "کمتر",
            "kam-tar",
            "kam-tar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "موادی",
            "ma-waa-dee",
            "ma-waa-dee"
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
            "در",
            "dar",
            "dar"
          ],
          [
            "بالا",
            "baa-laa",
            "baa-laa"
          ],
          [
            "نام",
            "naam",
            "naam"
          ],
          [
            "بردیم.",
            "bur-deem",
            "bur-deem",
            "bur-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mas-ra-fi du-khaa-nee-yaat, saa-laa-na maa-ya-yi ran-ji bi-si-yaar wa ta-ham-mu-li ha-zee-na-haa-yi-yi bee-shu-maa-ri iq-ti-saa-dee wa ij-ti-maa-ee shu-da wa mil-yon-haa na-far az mar-du-mi ja-haan raa ba kaa-mi marg fu-ro may-ba-rad.",
        "mean": "Tobacco use causes immense suffering and countless economic and social costs every year and drives millions of people around the world to death.",
        "words": [
          [
            "مصرف",
            "mas-ra-fi",
            "mas-raf"
          ],
          [
            "دخانیات،",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "سالانه",
            "saa-laa-na",
            "saa-laa-na"
          ],
          [
            "مایهٔ",
            "maa-ya-yi",
            "maa-ya"
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
            "هزینه‌های",
            "ha-zee-na-haa-yi-yi",
            "ha-zee-na-haa-yi"
          ],
          [
            "بی‌شمار",
            "bee-shu-maa-ri",
            "bee-shu-maar"
          ],
          [
            "اقتصادی",
            "iq-ti-saa-dee",
            "iq-ti-saa-dee"
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
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "میلیون‌ها",
            "mil-yon-haa",
            "mil-yon-haa"
          ],
          [
            "نفر",
            "na-far",
            "na-far"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مردم",
            "mar-du-mi",
            "mar-dum"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
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
            "کام",
            "kaa-mi",
            "kaam"
          ],
          [
            "مرگ",
            "marg",
            "marg"
          ],
          [
            "فرو",
            "fu-ro",
            "fu-ro"
          ],
          [
            "می‌برد.",
            "may-ba-rad",
            "may-ba-rad",
            "bur-dan"
          ]
        ]
      },
      {
        "say": "baa ta-waj-juh ba een ki dar ja-haan har nuh saa-nee-ya, yak na-far ba da-lee-li is-ti-maa-li du-khaa-nee-yaat may-mee-rad, aa-saa-ri mas-ra-fi du-khaa-nee-yaat ba yak mush-ki-li sa-raa-sa-ree tab-deel shu-da ast",
        "mean": "Since one person in the world dies every nine seconds because of tobacco use, its effects have become a worldwide problem,",
        "words": [
          [
            "با",
            "baa",
            "baa"
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
            "این",
            "een",
            "een"
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
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "نُه",
            "nuh",
            "nuh"
          ],
          [
            "ثانیه،",
            "saa-nee-ya",
            "saa-nee-ya"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "نفر",
            "na-far",
            "na-far"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دلیل",
            "da-lee-li",
            "da-leel"
          ],
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "می‌میرد،",
            "may-mee-rad",
            "may-mee-rad",
            "mur-dan"
          ],
          [
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "مصرف",
            "mas-ra-fi",
            "mas-raf"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "مشکل",
            "mush-ki-li",
            "mush-kil"
          ],
          [
            "سرتاسری",
            "sa-raa-sa-ree",
            "sa-raa-sa-ree"
          ],
          [
            "تبدیل",
            "tab-deel",
            "tab-deel"
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
          ]
        ]
      },
      {
        "say": "ki mu-ta-si-faa-na dar baysh-ta-ri ma-waa-rid, hat-taa kha-tar-haa-yi-yi si-hee-yi aan kam-tar ba go-shi mar-dum ra-saa-nee-da may-sha-wad.",
        "mean": "whose health dangers unfortunately receive too little public attention in most cases.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "متأسفانه",
            "mu-ta-si-faa-na",
            "mu-ta-si-faa-na"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بیشتر",
            "baysh-ta-ri",
            "baysh-tar"
          ],
          [
            "موارد،",
            "ma-waa-rid",
            "ma-waa-rid"
          ],
          [
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "خطرهای",
            "kha-tar-haa-yi-yi",
            "kha-tar-haa-yi"
          ],
          [
            "صحی",
            "si-hee-yi",
            "si-hee"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "کمتر",
            "kam-tar",
            "kam-tar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "گوش",
            "go-shi",
            "gosh"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "رسانیده",
            "ra-saa-nee-da",
            "ra-saa-nee-da",
            "ra-saan-dan"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "nee-ko-teen chees?",
        "mean": "What is nicotine?",
        "words": [
          [
            "نیکوتین",
            "nee-ko-teen",
            "nee-ko-teen"
          ],
          [
            "چیست؟",
            "chees",
            "chees"
          ]
        ]
      }
    ],
    [
      {
        "say": "nu-khus-teen ka-say ki tam-baa-koo raa kashf kard “kris-tof ko-lumb” bood.",
        "mean": "The first person said to have discovered tobacco was Christopher Columbus.",
        "words": [
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "کسی",
            "ka-say",
            "ka-say"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تنباکو",
            "tam-baa-koo",
            "tam-baa-koo"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "کشف",
            "kashf",
            "kashf"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "kar-dan"
          ],
          [
            "«کریستف",
            "kris-tof",
            "kris-tof"
          ],
          [
            "کولمب»",
            "ko-lumb",
            "ko-lumb"
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
        "say": "oo za-maa-nay ki bar qaa-ra-yi am-ree-kaa gaam ni-haad, dar aan-jaa a-haa-lee-yi bo-mee-yi surkh-poost raa deed ki tam-baa-koo raa ba kas-rat kasht wa is-ti-maal may-na-mo-dand.",
        "mean": "When he set foot in the Americas, he saw the Indigenous inhabitants cultivating and using tobacco in abundance.",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "زمانی",
            "za-maa-nay",
            "za-maa-nay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "قارهٔ",
            "qaa-ra-yi",
            "qaa-ra-yi"
          ],
          [
            "امریکا",
            "am-ree-kaa",
            "am-ree-kaa"
          ],
          [
            "گام",
            "gaam",
            "gaam"
          ],
          [
            "نهاد،",
            "ni-haad",
            "ni-haad",
            "ni-haa-dan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آن‌جا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "اهالی",
            "a-haa-lee-yi",
            "a-haa-lee"
          ],
          [
            "بومی",
            "bo-mee-yi",
            "bo-mee"
          ],
          [
            "سرخ‌پوست",
            "surkh-poost",
            "surkh-poost"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "دید",
            "deed",
            "deed",
            "dee-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تنباکو",
            "tam-baa-koo",
            "tam-baa-koo"
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
            "کثرت",
            "kas-rat",
            "kas-rat"
          ],
          [
            "کشت",
            "kasht",
            "kasht"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استعمال",
            "is-ti-maal",
            "is-ti-maal"
          ],
          [
            "می‌نمودند.",
            "may-na-mo-dand",
            "may-na-mo-dand",
            "na-mo-dan"
          ]
        ]
      },
      {
        "say": "saal-haa pas az aan; yaa-nee dar saa-li (yak-ha-zaa-ru panj-sa-du pan-jaa-hu naw mee-laa-dee), hin-gaa-mee ki kash-tee-yi fa-raa-na-wee ba naa-mi “nee-kot” tam-baa-koo raa waa-ri-di fa-raa-na saakht, ow-ro-paa-yi-yaan baa du-khaa-nee-yaat aash-naa shu-dand",
        "mean": "Years later, in 1559, when a French ship named Nicot brought tobacco into France, Europeans became familiar with tobacco,",
        "words": [
          [
            "سال‌ها",
            "saal-haa",
            "saal-haa"
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
            "آن؛",
            "aan",
            "aan"
          ],
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
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
            "(۱۵۵۹",
            "yak-ha-zaa-ru panj-sa-du pan-jaa-hu naw",
            "yak-ha-zaa-ru panj-sa-du pan-jaa-hu naw"
          ],
          [
            "م.)،",
            "mee-laa-dee",
            "mee-laa-dee"
          ],
          [
            "هنگامی",
            "hin-gaa-mee",
            "hin-gaa-mee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "کشتی",
            "kash-tee-yi",
            "kash-tee"
          ],
          [
            "فرانسوی",
            "fa-raa-na-wee",
            "fa-raa-na-wee"
          ],
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
            "«نیکوت»",
            "nee-kot",
            "nee-kot"
          ],
          [
            "تنباکو",
            "tam-baa-koo",
            "tam-baa-koo"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "وارد",
            "waa-ri-di",
            "waa-rid"
          ],
          [
            "فرانسه",
            "fa-raa-na",
            "fa-raa-na"
          ],
          [
            "ساخت،",
            "saakht",
            "saakht",
            "saakh-tan"
          ],
          [
            "اروپاییان",
            "ow-ro-paa-yi-yaan",
            "ow-ro-paa-yi-yaan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "آشنا",
            "aash-naa",
            "aash-naa"
          ],
          [
            "شدند",
            "shu-dand",
            "shu-dand",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "wa pas az aan du-khaa-nee-yaat naa-mi nee-ko-teen raa ba khud gi-rift.",
        "mean": "and afterward tobacco took the name nicotine.",
        "words": [
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "نام",
            "naa-mi",
            "naam"
          ],
          [
            "نیکوتین",
            "nee-ko-teen",
            "nee-ko-teen"
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
            "خود",
            "khud",
            "khud"
          ],
          [
            "گرفت.",
            "gi-rift",
            "gi-rift",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "am-maa khu-di een maa-da chees?",
        "mean": "But what is this substance itself?",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "خود",
            "khu-di",
            "khud"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "ماده",
            "maa-da",
            "maa-da"
          ],
          [
            "چیست؟",
            "chees",
            "chees"
          ]
        ]
      },
      {
        "say": "nee-ko-teen maa-da-yi mu-khad-di-ree ast ki ba-taw-ri ta-bee-ee dar tam-baa-koo wa an-waa-yi dee-ga-ri du-khaa-nee-yaat wu-jood daa-rad;",
        "mean": "Nicotine is a narcotic substance found naturally in tobacco and other tobacco products.",
        "words": [
          [
            "نیکوتین",
            "nee-ko-teen",
            "nee-ko-teen"
          ],
          [
            "مادهٔ",
            "maa-da-yi",
            "maa-da-yi"
          ],
          [
            "مخدری",
            "mu-khad-di-ree",
            "mu-khad-di-ree"
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
            "به‌طور",
            "ba-taw-ri",
            "ba-tawr"
          ],
          [
            "طبیعی",
            "ta-bee-ee",
            "ta-bee-ee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "تنباکو",
            "tam-baa-koo",
            "tam-baa-koo"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "دیگر",
            "dee-ga-ri",
            "dee-gar"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "وجود",
            "wu-jood",
            "wu-jood"
          ],
          [
            "دارد؛",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "een maa-da in-saan raa az li-haa-zi jis-mee wa ra-waa-nee waa-bas-ta ba khaysh may-saa-zad wa kha-ta-raa-tee raa ki ba baar may-aa-wa-rad ba ma-raa-tib baysh-tar az ma-waa-di mu-zir-ra-yi dee-gar ast.",
        "mean": "It makes a person physically and mentally dependent on it, and the dangers it creates are many times greater than those of other harmful substances.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "ماده",
            "maa-da",
            "maa-da"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
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
            "لحاظ",
            "li-haa-zi",
            "li-haaz"
          ],
          [
            "جسمی",
            "jis-mee",
            "jis-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روانی",
            "ra-waa-nee",
            "ra-waa-nee"
          ],
          [
            "وابسته",
            "waa-bas-ta",
            "waa-bas-ta"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
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
            "خطراتی",
            "kha-ta-raa-tee",
            "kha-ta-raa-tee"
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
            "می‌آورد",
            "may-aa-wa-rad",
            "may-aa-wa-rad",
            "aa-war-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مراتب",
            "ma-raa-tib",
            "ma-raa-tib"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "مضرهٔ",
            "mu-zir-ra-yi",
            "mu-zir-ra-yi"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
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
        "say": "ta-see-raa-ti si-hee-yi du-khaa-nee-yaat",
        "mean": "The health effects of tobacco",
        "words": [
          [
            "تأثیرات",
            "ta-see-raa-ti",
            "ta-see-raat"
          ],
          [
            "صحی",
            "si-hee-yi",
            "si-hee"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ]
        ]
      }
    ],
    [
      {
        "say": "tah-qee-qaa-ti il-mee saa-bit na-mo-da ast ki az jum-la-yi (yak-ha-zaa-ru panj-sad) haa-la-ti sa-ra-taa-nee, ba juz az hasht haa-lat, dee-gar ha-ma az is-ti-maa-li du-khaa-nee-yaat ba mi-yaan may-aa-yad;",
        "mean": "Scientific research has shown that, out of 1,500 cancer cases, all but eight arise from tobacco use.",
        "words": [
          [
            "تحقیقات",
            "tah-qee-qaa-ti",
            "tah-qee-qaat"
          ],
          [
            "علمی",
            "il-mee",
            "il-mee"
          ],
          [
            "ثابت",
            "saa-bit",
            "saa-bit"
          ],
          [
            "نموده",
            "na-mo-da",
            "na-mo-da",
            "na-mo-dan"
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
            "جملهٔ",
            "jum-la-yi",
            "jum-la"
          ],
          [
            "(۱۵۰۰)",
            "yak-ha-zaa-ru panj-sad",
            "yak-ha-zaa-ru panj-sad"
          ],
          [
            "حالت",
            "haa-la-ti",
            "haa-lat"
          ],
          [
            "سرطانی،",
            "sa-ra-taa-nee",
            "sa-ra-taa-nee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "جز",
            "juz",
            "juz"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "۸",
            "hasht",
            "hasht#digit"
          ],
          [
            "حالت،",
            "haa-lat",
            "haa-lat"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "میان",
            "mi-yaan",
            "mi-yaan"
          ],
          [
            "می‌آید؛",
            "may-aa-yad",
            "may-aa-yad",
            "aa-ma-dan"
          ]
        ]
      },
      {
        "say": "chu-naan-ki sa-ra-taa-ni shush dar mi-yaa-ni mar-daan baysh-tar az za-naan ba mu-shaa-hi-da may-ra-sad.",
        "mean": "Lung cancer is therefore observed more often among men than women.",
        "words": [
          [
            "چنانکه",
            "chu-naan-ki",
            "chu-naan-ki"
          ],
          [
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "شش",
            "shush",
            "shush"
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
            "مردان",
            "mar-daan",
            "mar-daan"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "زنان",
            "za-naan",
            "za-naan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مشاهده",
            "mu-shaa-hi-da",
            "mu-shaa-hi-da"
          ],
          [
            "می‌رسد.",
            "may-ra-sad",
            "may-ra-sad",
            "ra-see-dan"
          ]
        ]
      },
      {
        "say": "is-ti-maa-li du-khaa-nee-yaat ba way-zha nas-waar wa si-girt, na-tan-haa baa-i-si ba mi-yaan aa-ma-da-ni (sa-ra-taa-ni shush) may-sha-wad; bal-ki sa-ra-taa-ni lab, ga-lo wa han-ja-ra raa neez dar pay daa-rad.",
        "mean": "Tobacco use, especially snuff and cigarettes, causes not only lung cancer but also cancer of the lip, throat and larynx.",
        "words": [
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ویژه",
            "way-zha",
            "way-zha"
          ],
          [
            "نسوار",
            "nas-waar",
            "nas-waar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سگرت،",
            "si-girt",
            "si-girt"
          ],
          [
            "نه‌تنها",
            "na-tan-haa",
            "na-tan-haa"
          ],
          [
            "باعث",
            "baa-i-si",
            "baa-is"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "میان",
            "mi-yaan",
            "mi-yaan"
          ],
          [
            "آمدن",
            "aa-ma-da-ni",
            "aa-ma-dan"
          ],
          [
            "(سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "شُش)",
            "shush",
            "shush"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ],
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "لب،",
            "lab",
            "lab"
          ],
          [
            "گلو",
            "ga-lo",
            "ga-lo"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حنجره",
            "han-ja-ra",
            "han-ja-ra"
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
            "دارد.",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "du-khaa-nee-yaat wa qalb:",
        "mean": "Tobacco and the heart",
        "words": [
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قلب:",
            "qalb",
            "qalb"
          ]
        ]
      }
    ],
    [
      {
        "say": "is-ti-maa-li du-khaa-nee-yaat ha-ma-yi an-saa-ji qalb raa takh-reeb wa sees-ti-mi daw-raa-ni khoon raa mu-ta-sir may-saa-zad.",
        "mean": "Tobacco use damages all the tissues of the heart and affects the circulatory system.",
        "words": [
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "همهٔ",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "انساج",
            "an-saa-ji",
            "an-saaj"
          ],
          [
            "قلب",
            "qalb",
            "qalb"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "تخریب",
            "takh-reeb",
            "takh-reeb"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سیستم",
            "sees-ti-mi",
            "sees-tim"
          ],
          [
            "دوران",
            "daw-raa-ni",
            "daw-raan"
          ],
          [
            "خون",
            "khoon",
            "khoon"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "متأثر",
            "mu-ta-sir",
            "mu-ta-sir"
          ],
          [
            "می‌سازد.",
            "may-saa-zad",
            "may-saa-zad",
            "saakh-tan"
          ]
        ]
      },
      {
        "say": "az jum-la-yi mu-him-ta-reen ta-see-raa-ti naa-gu-waa-ri du-khaa-nee-yaat bar qalb, sur-a-ti naa-ga-haa-nee wa sha-dee-di za-ra-baa-ni qalb ast ki an-waa-yi mukh-ta-lif daa-rad.",
        "mean": "Among the most serious harmful effects of tobacco on the heart is a sudden, severe rapid heartbeat, which occurs in different forms.",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "جملهٔ",
            "jum-la-yi",
            "jum-la"
          ],
          [
            "مهمترین",
            "mu-him-ta-reen",
            "mu-him-ta-reen"
          ],
          [
            "تأثیرات",
            "ta-see-raa-ti",
            "ta-see-raat"
          ],
          [
            "ناگوار",
            "naa-gu-waa-ri",
            "naa-gu-waar"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "قلب،",
            "qalb",
            "qalb"
          ],
          [
            "سرعت",
            "sur-a-ti",
            "sur-at"
          ],
          [
            "ناگهانی",
            "naa-ga-haa-nee",
            "naa-ga-haa-nee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شدید",
            "sha-dee-di",
            "sha-deed"
          ],
          [
            "ضربان",
            "za-ra-baa-ni",
            "za-ra-baan"
          ],
          [
            "قلب",
            "qalb",
            "qalb"
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
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "مختلف",
            "mukh-ta-lif",
            "mukh-ta-lif"
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
        "say": "baysh-ta-ri mas-raf-ku-nan-da-gaa-ni du-khaa-nee-yaat, ba il-la-ti az kaar uf-taa-da-ni shir-yaan-haa-yi-yi kho-sha-yee, gi-ree-baan-gee-ri mar-gi naa-ga-haa-nee yaa sak-ta-yi qal-bee wa magh-zee may-sha-wand.",
        "mean": "Most tobacco users, because their coronary arteries stop working, fall victim to sudden death or a heart attack or stroke.",
        "words": [
          [
            "بیشتر",
            "baysh-ta-ri",
            "baysh-tar"
          ],
          [
            "مصرف‌کننده‌گان",
            "mas-raf-ku-nan-da-gaa-ni",
            "mas-raf-ku-nan-da-gaan"
          ],
          [
            "دخانیات،",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "علت",
            "il-la-ti",
            "il-lat"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "افتادن",
            "uf-taa-da-ni",
            "uf-taa-dan"
          ],
          [
            "شریان‌های",
            "shir-yaan-haa-yi-yi",
            "shir-yaan-haa-yi"
          ],
          [
            "خوشه‌یی،",
            "kho-sha-yee",
            "kho-sha-yee"
          ],
          [
            "گریبان‌گیر",
            "gi-ree-baan-gee-ri",
            "gi-ree-baan-geer"
          ],
          [
            "مرگ",
            "mar-gi",
            "marg"
          ],
          [
            "ناگهانی",
            "naa-ga-haa-nee",
            "naa-ga-haa-nee"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "سکتهٔ",
            "sak-ta-yi",
            "sak-ta-yi"
          ],
          [
            "قلبی",
            "qal-bee",
            "qal-bee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مغزی",
            "magh-zee",
            "magh-zee"
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
        "say": "nis-ba-ti een na-wi marg dar mu-taa-daan ba du-khaa-nee-yaat, panj ba-raa-ba-ri ash-khaa-see ast ki ba du-khaa-nee-yaat aa-dat na-daa-rand.",
        "mean": "This kind of death is five times as common among people addicted to tobacco as among people who do not use it.",
        "words": [
          [
            "نسبت",
            "nis-ba-ti",
            "nis-bat"
          ],
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
            "مرگ",
            "marg",
            "marg"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "معتادان",
            "mu-taa-daan",
            "mu-taa-daan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دخانیات،",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "پنج",
            "panj",
            "panj"
          ],
          [
            "برابر",
            "ba-raa-ba-ri",
            "ba-raa-bar"
          ],
          [
            "اشخاصی",
            "ash-khaa-see",
            "ash-khaa-see"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "عادت",
            "aa-dat",
            "aa-dat"
          ],
          [
            "ندارند.",
            "na-daa-rand",
            "na-daa-rand",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "du-khaa-nee-yaat wa ji-haa-zi haa-zi-ma:",
        "mean": "Tobacco and the digestive system",
        "words": [
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جهاز",
            "ji-haa-zi",
            "ji-haaz"
          ],
          [
            "هاضمه:",
            "haa-zi-ma",
            "haa-zi-ma"
          ]
        ]
      }
    ],
    [
      {
        "say": "is-ti-faa-da az du-khaa-nee-yaat, ba way-zha si-girt wa nas-waar, mu-him-ta-reen aa-mi-li ee-jaa-di ha-waa-di-si sa-ra-taa-nee dar ji-haa-zi haa-zi-ma neez may-baa-shad;",
        "mean": "Tobacco use, especially cigarettes and snuff, is also the leading cause of cancer in the digestive system,",
        "words": [
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دخانیات،",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ویژه",
            "way-zha",
            "way-zha"
          ],
          [
            "سگرت",
            "si-girt",
            "si-girt"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نسوار،",
            "nas-waar",
            "nas-waar"
          ],
          [
            "مهمترین",
            "mu-him-ta-reen",
            "mu-him-ta-reen"
          ],
          [
            "عامل",
            "aa-mi-li",
            "aa-mil"
          ],
          [
            "ایجاد",
            "ee-jaa-di",
            "ee-jaad"
          ],
          [
            "حوادث",
            "ha-waa-di-si",
            "ha-waa-dis"
          ],
          [
            "سرطانی",
            "sa-ra-taa-nee",
            "sa-ra-taa-nee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "جهاز",
            "ji-haa-zi",
            "ji-haaz"
          ],
          [
            "هاضمه",
            "haa-zi-ma",
            "haa-zi-ma"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "می‌باشد؛",
            "may-baa-shad",
            "may-baa-shad",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "zee-raa baa e-tee-yaad ba du-khaa-nee-yaat, ghud-da-haa-yi-yi lu-aa-bee-ya wa qish-ri di-faa-ee-yi da-haan wa zu-baan az kaar uf-taa-da, za-mee-na-yi pay-daa-yish wa rush-di sa-ra-taan raa aa-maa-da may-saa-zad.",
        "mean": "because addiction to tobacco disables the salivary glands and the protective layer of the mouth and tongue, preparing the conditions for cancer to arise and grow.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "اعتیاد",
            "e-tee-yaad",
            "e-tee-yaad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دخانیات،",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "غده‌های",
            "ghud-da-haa-yi-yi",
            "ghud-da-haa-yi"
          ],
          [
            "لعابیه",
            "lu-aa-bee-ya",
            "lu-aa-bee-ya"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قشر",
            "qish-ri",
            "qishr"
          ],
          [
            "دفاعی",
            "di-faa-ee-yi",
            "di-faa-ee"
          ],
          [
            "دهان",
            "da-haan",
            "da-haan"
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
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "افتاده،",
            "uf-taa-da",
            "uf-taa-da",
            "uf-taa-dan"
          ],
          [
            "زمینهٔ",
            "za-mee-na-yi",
            "za-mee-na-yi"
          ],
          [
            "پیدایش",
            "pay-daa-yish",
            "pay-daa-yish"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رشد",
            "rush-di",
            "rushd"
          ],
          [
            "سرطان",
            "sa-ra-taan",
            "sa-ra-taan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "آماده",
            "aa-maa-da",
            "aa-maa-da"
          ],
          [
            "می‌سازد.",
            "may-saa-zad",
            "may-saa-zad",
            "saakh-tan"
          ]
        ]
      },
      {
        "say": "ih-saa-ee-ya ni-shaan daa-da ast ki (hash-taad dar-sad) ma-ree-zaa-ni mu-saab ba sa-ra-taa-ni ma-ree wa da-haan, mu-taa-daan ba du-khaa-nee-yaat boo-da-and.",
        "mean": "Statistics show that 80 percent of patients with cancer of the esophagus and mouth have been addicted to tobacco.",
        "words": [
          [
            "احصائیه",
            "ih-saa-ee-ya",
            "ih-saa-ee-ya"
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
            "(۸۰",
            "hash-taad",
            "hash-taad"
          ],
          [
            "%)",
            "dar-sad",
            "dar-sad"
          ],
          [
            "مریضان",
            "ma-ree-zaa-ni",
            "ma-ree-zaan"
          ],
          [
            "مصاب",
            "mu-saab",
            "mu-saab"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "مِری",
            "ma-ree",
            "ma-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دهان،",
            "da-haan",
            "da-haan"
          ],
          [
            "معتادان",
            "mu-taa-daan",
            "mu-taa-daan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "بوده‌اند.",
            "boo-da-and",
            "boo-da-and",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "is-ti-maa-li du-khaa-nee-yaat, tan-haa ba sa-ra-taa-ni ma-ree, zu-baan wa da-haan ik-ti-faa na-na-mo-da baa-laa-yi mi-da neez ta-see-raa-ti naa-gu-waar ba-jaa may-gu-zaa-rad wa tay-zaa-bi mi-da raa iz-de-yaad may-bakh-shad.",
        "mean": "Tobacco use does not stop at cancer of the esophagus, tongue and mouth; it also harms the stomach and increases stomach acid.",
        "words": [
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "دخانیات،",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "مِری،",
            "ma-ree",
            "ma-ree"
          ],
          [
            "زبان",
            "zu-baan",
            "zu-baan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دهان",
            "da-haan",
            "da-haan"
          ],
          [
            "اکتفا",
            "ik-ti-faa",
            "ik-ti-faa"
          ],
          [
            "ننموده",
            "na-na-mo-da",
            "na-na-mo-da",
            "na-mo-dan"
          ],
          [
            "بالای",
            "baa-laa-yi",
            "baa-laa"
          ],
          [
            "معده",
            "mi-da",
            "mi-da"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "تأثیرات",
            "ta-see-raa-ti",
            "ta-see-raat"
          ],
          [
            "ناگوار",
            "naa-gu-waar",
            "naa-gu-waar"
          ],
          [
            "به‌جا",
            "ba-jaa",
            "ba-jaa"
          ],
          [
            "می‌گذارد",
            "may-gu-zaa-rad",
            "may-gu-zaa-rad",
            "gu-zaash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تیزاب",
            "tay-zaa-bi",
            "tay-zaab"
          ],
          [
            "معده",
            "mi-da",
            "mi-da"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "ازدیاد",
            "iz-de-yaad",
            "iz-de-yaad"
          ],
          [
            "می‌بخشد.",
            "may-bakh-shad",
            "may-bakh-shad",
            "bakh-shee-dan"
          ]
        ]
      },
      {
        "say": "baa zi-yaad shu-da-ni tad-ree-jee-yi tay-zaa-bi mi-da, il-ti-haa-bi muz-mi-ni mi-da pa-deed may-aa-yad wa mu-taad raa ba an-waa-yi ikh-ti-laa-laa-ti haz-mee du-chaar may-saa-zad,",
        "mean": "As stomach acid gradually increases, chronic inflammation of the stomach appears and subjects the user to various digestive disorders;",
        "words": [
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "زیاد",
            "zi-yaad",
            "zi-yaad"
          ],
          [
            "شدن",
            "shu-da-ni",
            "shu-dan"
          ],
          [
            "تدریجی",
            "tad-ree-jee-yi",
            "tad-ree-jee"
          ],
          [
            "تیزاب",
            "tay-zaa-bi",
            "tay-zaab"
          ],
          [
            "معده،",
            "mi-da",
            "mi-da"
          ],
          [
            "التهاب",
            "il-ti-haa-bi",
            "il-ti-haab"
          ],
          [
            "مزمن",
            "muz-mi-ni",
            "muz-min"
          ],
          [
            "معده",
            "mi-da",
            "mi-da"
          ],
          [
            "پدید",
            "pa-deed",
            "pa-deed"
          ],
          [
            "می‌آید",
            "may-aa-yad",
            "may-aa-yad",
            "aa-ma-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "معتاد",
            "mu-taad",
            "mu-taad"
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
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "اختلالات",
            "ikh-ti-laa-laa-ti",
            "ikh-ti-laa-laat"
          ],
          [
            "هضمی",
            "haz-mee",
            "haz-mee"
          ],
          [
            "دچار",
            "du-chaar",
            "du-chaar"
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
        "say": "bil-aa-khi-ra een ikh-ti-laa-laat ba sa-ra-taa-ni mi-da may-an-jaa-mad.",
        "mean": "ultimately these disorders lead to stomach cancer.",
        "words": [
          [
            "بالآخره",
            "bil-aa-khi-ra",
            "bil-aa-khi-ra"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "اختلالات",
            "ikh-ti-laa-laat",
            "ikh-ti-laa-laat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "معده",
            "mi-da",
            "mi-da"
          ],
          [
            "می‌انجامد.",
            "may-an-jaa-mad",
            "may-an-jaa-mad",
            "an-jaa-mee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "du-khaa-nee-yaat wa ji-haa-zi ta-naf-fu-see:",
        "mean": "Tobacco and the respiratory system",
        "words": [
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جهاز",
            "ji-haa-zi",
            "ji-haaz"
          ],
          [
            "تنفسی:",
            "ta-naf-fu-see",
            "ta-naf-fu-see"
          ]
        ]
      }
    ],
    [
      {
        "say": "is-ti-maa-li du-khaa-nee-yaat baa-i-si za-kheem shu-da-ni par-da-haa-yi-yi bee-nee, in-si-daa-di lo-la-haa-yi-yi ta-naf-fu-see wa il-ti-haab dar kee-sa-haa-yi-yi ha-waa-yee-yi shush may-sha-wad.",
        "mean": "Tobacco use thickens the nasal membranes and causes blocked airways and inflammation in the lungs' air sacs.",
        "words": [
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "باعث",
            "baa-i-si",
            "baa-is"
          ],
          [
            "ضخیم",
            "za-kheem",
            "za-kheem"
          ],
          [
            "شدن",
            "shu-da-ni",
            "shu-dan"
          ],
          [
            "پرده‌های",
            "par-da-haa-yi-yi",
            "par-da-haa-yi"
          ],
          [
            "بینی،",
            "bee-nee",
            "bee-nee"
          ],
          [
            "انسداد",
            "in-si-daa-di",
            "in-si-daad"
          ],
          [
            "لوله‌های",
            "lo-la-haa-yi-yi",
            "lo-la-haa-yi"
          ],
          [
            "تنفسی",
            "ta-naf-fu-see",
            "ta-naf-fu-see"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "التهاب",
            "il-ti-haab",
            "il-ti-haab"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کیسه‌های",
            "kee-sa-haa-yi-yi",
            "kee-sa-haa-yi"
          ],
          [
            "هوایی",
            "ha-waa-yee-yi",
            "ha-waa-yee"
          ],
          [
            "شُش",
            "shush",
            "shush"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ba ha-meen-goo-na is-ti-maa-li du-khaa-nee-yaat il-ti-haa-bi muz-mi-ni han-ja-ra raa sa-bab shu-da nukhus-teen ba shak-li (sa-daa gi-rif-ta-gee) zaa-hir may-sha-wad ki takh-reesh wa sur-fa-yi ta-shan-nu-jee raa baa khud ham-raah daa-rad",
        "mean": "In the same way, tobacco use causes chronic inflammation of the larynx, first appearing as hoarseness and accompanied by irritation and spasmodic coughing,",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "همین‌گونه",
            "ha-meen-goo-na",
            "ha-meen-goo-na"
          ],
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "التهاب",
            "il-ti-haa-bi",
            "il-ti-haab"
          ],
          [
            "مزمن",
            "muz-mi-ni",
            "muz-min"
          ],
          [
            "حنجره",
            "han-ja-ra",
            "han-ja-ra"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "سبب",
            "sa-bab",
            "sa-bab"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "نخست",
            "nukhus-teen",
            "nukhus-teen"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "شکل",
            "shak-li",
            "shakl"
          ],
          [
            "(صدا",
            "sa-daa",
            "sa-daa"
          ],
          [
            "گرفته‌گی)",
            "gi-rif-ta-gee",
            "gi-rif-ta-gee"
          ],
          [
            "ظاهر",
            "zaa-hir",
            "zaa-hir"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تخریش",
            "takh-reesh",
            "takh-reesh"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سرفهٔ",
            "sur-fa-yi",
            "sur-fa-yi"
          ],
          [
            "تشنجی",
            "ta-shan-nu-jee",
            "ta-shan-nu-jee"
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
            "خود",
            "khud",
            "khud"
          ],
          [
            "همراه",
            "ham-raah",
            "ham-raah"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "wa dar ha-meen haa-lat ast ki za-mee-na ba-raa-yi pay-daa-yish wa rush-di sa-ree-yi sa-ra-taan aa-maa-da may-gar-dad.",
        "mean": "and in this condition the ground is prepared for cancer to appear and grow rapidly.",
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
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "حالت",
            "haa-lat",
            "haa-lat"
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
            "زمینه",
            "za-mee-na",
            "za-mee-na"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "پیدایش",
            "pay-daa-yish",
            "pay-daa-yish"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رشد",
            "rush-di",
            "rushd"
          ],
          [
            "سریع",
            "sa-ree-yi",
            "sa-ree"
          ],
          [
            "سرطان",
            "sa-ra-taan",
            "sa-ra-taan"
          ],
          [
            "آماده",
            "aa-maa-da",
            "aa-maa-da"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "daa-nish-man-daan wa daak-ta-raan bar een na-za-ree-ya it-ti-faa-qi kaa-mil daa-rand ki is-ti-maa-li du-khaa-nee-yaat, sa-ba-bi pay-daa-yi-shi sa-ra-taa-ni han-ja-ra neez may-gar-dad.",
        "mean": "Scholars and doctors fully agree that tobacco use also causes cancer of the larynx.",
        "words": [
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
            "داکتران",
            "daak-ta-raan",
            "daak-ta-raan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "نظریه",
            "na-za-ree-ya",
            "na-za-ree-ya"
          ],
          [
            "اتفاق",
            "it-ti-faa-qi",
            "it-ti-faaq"
          ],
          [
            "کامل",
            "kaa-mil",
            "kaa-mil"
          ],
          [
            "دارند",
            "daa-rand",
            "daa-rand",
            "daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "دخانیات،",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "سبب",
            "sa-ba-bi",
            "sa-bab"
          ],
          [
            "پیدایش",
            "pay-daa-yi-shi",
            "pay-daa-yish"
          ],
          [
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "حنجره",
            "han-ja-ra",
            "han-ja-ra"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "mu-a-sa-sa-yi mu-baa-ri-za baa sa-ra-taa-ni shah-ri (to-loz) fa-raa-na saa-bit na-mo-da ki (sad-dar-sad) ash-khaa-si mub-ta-laa ba sa-ra-taa-ni han-ja-ra, mas-raf-ku-nan-da-gaa-ni du-khaa-nee-yaat boo-da-and.",
        "mean": "The cancer-control institute in Toulouse, France, has shown that 100 percent of people with cancer of the larynx were tobacco users.",
        "words": [
          [
            "مؤسسهٔ",
            "mu-a-sa-sa-yi",
            "mu-a-sa-sa-yi"
          ],
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
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "شهر",
            "shah-ri",
            "shahr"
          ],
          [
            "(تولوز)",
            "to-loz",
            "to-loz"
          ],
          [
            "فرانسه",
            "fa-raa-na",
            "fa-raa-na"
          ],
          [
            "ثابت",
            "saa-bit",
            "saa-bit"
          ],
          [
            "نموده",
            "na-mo-da",
            "na-mo-da",
            "na-mo-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "(۱۰۰%)",
            "sad-dar-sad",
            "sad-dar-sad"
          ],
          [
            "اشخاص",
            "ash-khaa-si",
            "ash-khaas"
          ],
          [
            "مبتلا",
            "mub-ta-laa",
            "mub-ta-laa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "حنجره،",
            "han-ja-ra",
            "han-ja-ra"
          ],
          [
            "مصرف‌کننده‌گان",
            "mas-raf-ku-nan-da-gaa-ni",
            "mas-raf-ku-nan-da-gaan"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "بوده‌اند.",
            "boo-da-and",
            "boo-da-and",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "ham-chu-naan ih-saa-ee-ya ni-shaan daa-da ki (na-wad-dar-sad) mu-taa-daan ba du-khaa-nee-yaat az a-sa-ri sa-ra-taa-ni shush jaa-ni khud raa az dast daa-da-and.",
        "mean": "Statistics also show that 90 percent of tobacco addicts lost their lives from lung cancer.",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "احصائیه",
            "ih-saa-ee-ya",
            "ih-saa-ee-ya"
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
            "که",
            "ki",
            "ki"
          ],
          [
            "(۹۰%)",
            "na-wad-dar-sad",
            "na-wad-dar-sad"
          ],
          [
            "معتادان",
            "mu-taa-daan",
            "mu-taa-daan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اثر",
            "a-sa-ri",
            "a-sar"
          ],
          [
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "شُش",
            "shush",
            "shush"
          ],
          [
            "جان",
            "jaa-ni",
            "jaan"
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
            "داده‌اند.",
            "daa-da-and",
            "daa-da-and",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "ta-daa-di qur-baa-nee-yaa-ni sa-ra-taa-ni shush see ba-raa-ba-ri ka-saa-nay ast ki ba is-ti-maa-li du-khaa-nee-yaat na-may-par-daa-zand.",
        "mean": "The number of victims of lung cancer is thirty times that among people who do not use tobacco.",
        "words": [
          [
            "تعداد",
            "ta-daa-di",
            "ta-daad"
          ],
          [
            "قربانیان",
            "qur-baa-nee-yaa-ni",
            "qur-baa-nee-yaan"
          ],
          [
            "سرطان",
            "sa-ra-taa-ni",
            "sa-ra-taan"
          ],
          [
            "شُش",
            "shush",
            "shush"
          ],
          [
            "(۳۰)",
            "see",
            "see#digit"
          ],
          [
            "برابر",
            "ba-raa-ba-ri",
            "ba-raa-bar"
          ],
          [
            "کسانی",
            "ka-saa-nay",
            "ka-saa-nay"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "نمی‌پردازند.",
            "na-may-par-daa-zand",
            "na-may-par-daa-zand",
            "par-daakh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "baa-yad dar jaa-mi-a mah-doo-dee-yat-haa ee-jaad sha-wad taa ash-khaa-si mu-taad ba du-khaa-nee-yaat dar har sha-raa-yit wa mu-heet ba way-zha dar a-maa-ki-ni sar-bas-ta; maa-nand: u-taaq-haa-yi ma-naa-zil, ris-to-raant-haa, chaa-yi-khaa-na-haa, mu-heet-haa-yi-yi bas-ta-yi dee-gar ham-choon taak-see wa sir-wees-haa-yi-yi shah-ree na-ta-waa-nand si-girt bi-ku-shand;",
        "mean": "Restrictions should be created in society so that people addicted to tobacco cannot smoke under all conditions and in every setting, especially enclosed places such as rooms in homes, restaurants, teahouses, taxis and city vehicles,",
        "words": [
          [
            "باید",
            "baa-yad",
            "baa-yad"
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
            "محدودیت‌های",
            "mah-doo-dee-yat-haa",
            "mah-doo-dee-yat-haa"
          ],
          [
            "ایجاد",
            "ee-jaad",
            "ee-jaad"
          ],
          [
            "شود",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "اشخاص",
            "ash-khaa-si",
            "ash-khaas"
          ],
          [
            "معتاد",
            "mu-taad",
            "mu-taad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
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
            "شرایط",
            "sha-raa-yit",
            "sha-raa-yit"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "محیط",
            "mu-heet",
            "mu-heet"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ویژه",
            "way-zha",
            "way-zha"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اماکن",
            "a-maa-ki-ni",
            "a-maa-kin"
          ],
          [
            "سربسته؛",
            "sar-bas-ta",
            "sar-bas-ta"
          ],
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "اتاق‌های",
            "u-taaq-haa-yi",
            "u-taaq-haa"
          ],
          [
            "منازل،",
            "ma-naa-zil",
            "ma-naa-zil"
          ],
          [
            "رستورانت‌ها،",
            "ris-to-raant-haa",
            "ris-to-raant-haa"
          ],
          [
            "چایخانه‌ها،",
            "chaa-yi-khaa-na-haa",
            "chaa-yi-khaa-na-haa"
          ],
          [
            "محیط‌های",
            "mu-heet-haa-yi-yi",
            "mu-heet-haa-yi"
          ],
          [
            "بستهٔ",
            "bas-ta-yi",
            "bas-ta",
            "bas-tan"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "همچون",
            "ham-choon",
            "ham-choon"
          ],
          [
            "تاکسی",
            "taak-see",
            "taak-see"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سرویس‌های",
            "sir-wees-haa-yi-yi",
            "sir-wees-haa-yi"
          ],
          [
            "شهری",
            "shah-ree",
            "shah-ree"
          ],
          [
            "نتوانند",
            "na-ta-waa-nand",
            "na-ta-waa-nand",
            "ta-waa-nis-tan"
          ],
          [
            "سگرت",
            "si-girt",
            "si-girt"
          ],
          [
            "بکشند؛",
            "bi-ku-shand",
            "bi-ku-shand",
            "kush-tan"
          ]
        ]
      },
      {
        "say": "zee-raa doo-di du-khaa-nee-yaat tan-haa ba khu-di mu-taad za-rar na-may-ra-saa-nad; bal-ki marg wa mee-ri naa-shee az bee-maa-ree-haa-yi-yi qal-bee raa ba-raa-yi ham-sa-raan wa far-zan-daa-ni af-raa-di mu-taad ba du-khaa-nee-yaat yak-a-shaa-ree-ya-sih ba-raa-bar may-ku-nad.",
        "mean": "because tobacco smoke harms not only the user but increases deaths from heart disease among the spouses and children of tobacco users by 1.3 times.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "دود",
            "doo-di",
            "dood"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خود",
            "khu-di",
            "khud"
          ],
          [
            "معتاد",
            "mu-taad",
            "mu-taad"
          ],
          [
            "ضرر",
            "za-rar",
            "za-rar"
          ],
          [
            "نمی‌رساند؛",
            "na-may-ra-saa-nad",
            "na-may-ra-saa-nad",
            "ra-saan-dan"
          ],
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "مرگ",
            "marg",
            "marg"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "میر",
            "mee-ri",
            "meer"
          ],
          [
            "ناشی",
            "naa-shee",
            "naa-shee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "بیماری‌های",
            "bee-maa-ree-haa-yi-yi",
            "bee-maa-ree-haa-yi"
          ],
          [
            "قلبی",
            "qal-bee",
            "qal-bee"
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
            "همسران",
            "ham-sa-raan",
            "ham-sa-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرزندان",
            "far-zan-daa-ni",
            "far-zan-daan"
          ],
          [
            "افراد",
            "af-raa-di",
            "af-raad"
          ],
          [
            "معتاد",
            "mu-taad",
            "mu-taad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دخانیات",
            "du-khaa-nee-yaat",
            "du-khaa-nee-yaat"
          ],
          [
            "۳/۱",
            "yak-a-shaa-ree-ya-sih",
            "yak-a-shaa-ree-ya-sih"
          ],
          [
            "برابر",
            "ba-raa-bar",
            "ba-raa-bar"
          ],
          [
            "می‌کند.",
            "may-ku-nad",
            "may-ku-nad",
            "kar-dan"
          ]
        ]
      }
    ]
  ]
});
