/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 25, book pages 160-164, PDF pages 167-171 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «عبداالله» is written «عبدالله»; «ملک الشعرا» is written «ملک‌الشعرا»; «ایران وهم» is written «ایران و هم»; «همچنانکه» is written «همچنان که»; «ما وراء النهر» is written «ماوراءالنهر»; «درحالی» is written «در حالی»; «وآن» is written «و آن»; «ماهمین» is written «ما همین»; «درسال» is written «در سال»; «حبیب االله» is written «حبیب‌الله»; «وزن ها» is written «وزن‌ها»; «قافیه های» is written «قافیه‌ها»; «ویژه گی‌های» is written «ویژه‌گی‌های»; «باکسب» is written «با کسب»; «ساده نویسی» is written «ساده‌نویسی»; «مردبزرگ» is written «مرد بزرگ»; «درکابل» is written «در کابل»; «پدرود هستی» is written «بدرود هستی»; «عصرحاضر» is written «عصر حاضر»; «درصفحات» is written «در صفحات»; «دستورزبان» is written «دستور زبان»; «فکرخود» is written «فکر خود»; «عمرعزیز» is written «عمر عزیز»; «جاگرفت» is written «جا گرفت»; «برسر» is written «بر سر»; «زسرنگذشت» is written «ز سر نگذشت»; «کفش برداری» is written «کفش‌برداری»; «دیگرگوینده‌گان» is written «دیگر گوینده‌گان»; «عبد االله» is written «عبدالله»; «قطب الدین» is written «قطب‌الدین»; «بیست ساله‌گی» is written «بیست‌ساله‌گی»; «امیرحبیب‌الله» is written «امیر حبیب‌الله»; «ترکیب بند» is written «ترکیب‌بند»; «ابهام آفرینی» is written «ابهام‌آفرینی»; «تحصیل یافته» is written «تحصیل‌یافته»; «سرِخویش» is written «سرِ خویش»; «زبسکه» is written «ز بس که»; garbled letters are typed from the page as «دایرهٔالمعارف،».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-25',
  group: 'Dari · grade 9',
  label: 'Lesson 25',
  name: "ma-lik-ush-shu-a-raa qaa-ree ab-dul-laah pa-da-ri ma-aa-ri-fi na-wee-ni af-ghaa-nis-taan",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_25.jpg',
    alt: "A drawn portrait of Qari Abdullah wearing glasses and a white turban."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_25.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "ma-lik-ush-shu-a-raa":              { fa: "ملک‌الشعرا", mean: "poet laureate" },
    "qaa-ree":                           { fa: "قاری", mean: "Quran reciter; Qari" },
    "ab-dul-laah":                       { fa: "عبدالله", mean: "Abdullah" },
    "pa-dar":                            { fa: "پدر", mean: "father" },
    "ma-aa-rif":                         { fa: "معارف", mean: "education" },
    "na-ween":                           { fa: "نوین", mean: "modern" },
    "af-ghaa-nis-taan":                  { fa: "افغانستان", mean: "Afghanistan" },
    "su-khan":                           { fa: "سخن", mean: "speech, words" },
    "raa":                               { fa: "را", mean: "marks the object of the verb" },
    "dar":                               { fa: "در", mean: "in" },
    "maw-rid":                           { fa: "مورد", mean: "object, case" },
    "ma-lik-ush-shu-a-raa-yi":           { fa: "ملک‌الشعرای", mean: "poet laureate of" },
    "az":                                { fa: "از", mean: "from, of" },
    "ba-yaan":                           { fa: "بیان", mean: "expression" },
    "mu-ham-mad":                        { fa: "محمد", mean: "Muhammad" },
    "ta-qee":                            { fa: "تقی", mean: "Taqi" },
    "ba-haar":                           { fa: "بهار", mean: "spring" },
    "ee-raan":                           { fa: "ایران", mean: "Iran" },
    "wa":                                { fa: "و", mean: "and" },
    "ham":                               { fa: "هم", mean: "also, too" },
    "rooz-gaar":                         { fa: "روزگار", mean: "time, era" },
    "aa-ghaaz":                          { fa: "آغاز", mean: "beginning" },
    "mee-ku-neem":                       { fa: "می‌کنیم", mean: "we do" },
    "kar-dan":                           { fa: "کردن", mean: "to do, to make" },
    "ki":                                { fa: "که", mean: "that, which, who" },
    "ba-yaan-gar":                       { fa: "بیانگر", mean: "expressing, showing" },
    "mar-ta-ba":                         { fa: "مرتبه", mean: "rank" },
    "ma-qaam":                           { fa: "مقام", mean: "rank, position; musical mode" },
    "il-mee":                            { fa: "علمی", mean: "scholarly, scientific" },
    "shaa-i-ree":                        { fa: "شاعری", mean: "being a poet, poetry" },
    "ast":                               { fa: "است", mean: "is" },
    "may-go-yad":                        { fa: "می‌گوید", mean: "says" },
    "guf-tan":                           { fa: "گفتن", mean: "to say, to tell" },
    "kafsh-bar-daa-ree":                 { fa: "کفش‌برداری", mean: "humble service, carrying shoes" },
    "ku-nam":                            { fa: "کنم", mean: "I put; I do" },
    "mah-zar":                           { fa: "محضر", mean: "presence, company" },
    "a-gar":                             { fa: "اگر", mean: "if" },
    "ba":                                { fa: "به", mean: "to" },
    "fu-roo-ghee":                       { fa: "فروغی", mean: "Foroughi" },
    "jaa":                               { fa: "جا", mean: "place" },
    "di-had":                            { fa: "دهد", mean: "give" },
    "daa-dan":                           { fa: "دادن", mean: "to give" },
    "bar":                               { fa: "بر", mean: "on, upon" },
    "sar":                               { fa: "سر", mean: "head" },
    "ma-raa":                            { fa: "مرا", mean: "me; for me" },
    "een":                               { fa: "این", mean: "this" },
    "arz":                               { fa: "عرض", mean: "petition" },
    "i-raa-dat":                         { fa: "ارادت", mean: "devotion" },
    "peesh-gaah":                        { fa: "پیشگاه", mean: "presence, court" },
    "aa-rif":                            { fa: "عارف", mean: "mystic" },
    "su-khan-gus-tar":                   { fa: "سخن‌گستر", mean: "master of speech" },
    "ta-waa-naa-yay":                    { fa: "توانایی", mean: "strong (ta-waa-naa + -ay, a: “a strong …”)" },
    "saa-hib":                           { fa: "صاحب", mean: "holder, master; a respectful title" },
    "zawq":                              { fa: "ذوق", mean: "taste, artistic sense" },
    "la-teef":                           { fa: "لطیف", mean: "refined, delicate" },
    "shor":                              { fa: "شور", mean: "passion, excitement" },
    "jaz-ba-yi":                         { fa: "جذبهٔ", mean: "attraction, fervor" },
    "roo-haa-nee":                       { fa: "روحانی", mean: "spiritual" },
    "bood":                              { fa: "بود", mean: "was" },
    "bu-dan":                            { fa: "بودن", mean: "to be" },
    "shaa-ir":                           { fa: "شاعر", mean: "poet" },
    "bar-jas-ta":                        { fa: "برجسته", mean: "outstanding, prominent" },
    "a-deeb":                            { fa: "ادیب", mean: "writer, literary scholar" },
    "naa-qid":                           { fa: "ناقد", mean: "critic" },
    "nuk-ta-yaab":                       { fa: "نکته‌یاب", mean: "perceptive" },
    "ham-chu-naan":                      { fa: "همچنان", mean: "likewise, just so" },
    "aa-lam":                            { fa: "عالم", mean: "realm, world" },
    "ir-faan":                           { fa: "عرفان", mean: "mysticism" },
    "fal-sa-fa-yi":                      { fa: "فلسفهٔ", mean: "philosophy of" },
    "is-laa-mee":                        { fa: "اسلامی", mean: "Islamic" },
    "neez":                              { fa: "نیز", mean: "also, too" },
    "paa-yi-gaa-hee":                    { fa: "پایگاهی", mean: "a position, standing" },
    "daasht":                            { fa: "داشت", mean: "had" },
    "daash-tan":                         { fa: "داشتن", mean: "to have" },
    "na-zar":                            { fa: "نظر", mean: "sight, view; opinion" },
    "saa-bi-qa":                         { fa: "سابقه", mean: "history, background" },
    "shi-ree":                           { fa: "شعری", mean: "poetic" },
    "peesh-waa-yee":                     { fa: "پیشوایی", mean: "leadership" },
    "us-taa-dee":                        { fa: "استادی", mean: "mastery; the title of ustad" },
    "haq":                               { fa: "حق", mean: "right" },
    "oo":                                { fa: "او", mean: "he, she; his, her" },
    "dee-gar":                           { fa: "دیگر", mean: "other; more; anymore" },
    "go-yin-da-gaan":                    { fa: "گوینده‌گان", mean: "speakers, poets" },
    "mu-aa-sir":                         { fa: "معاصر", mean: "contemporary" },
    "mu-qad-dam":                        { fa: "مقدم", mean: "prior, preceding" },
    "zu-baan":                           { fa: "زبان", mean: "language; tongue" },
    "a-ra-bee":                          { fa: "عربی", mean: "Arab, Arabic" },
    "ta-bah-hur":                        { fa: "تبحر", mean: "mastery, proficiency" },
    "sabk":                              { fa: "سبک", mean: "style" },
    "faa-ri-see":                        { fa: "فارسی", mean: "Persian" },
    "hin-dus-taan":                      { fa: "هندوستان", mean: "India" },
    "maa-wa-raa-un-na-hr":               { fa: "ماوراءالنهر", mean: "Transoxiana" },
    "bi-si-yaar":                        { fa: "بسیار", mean: "much, very" },
    "aa-gaah":                           { fa: "آگاه", mean: "aware, informed" },
    "yak":                               { fa: "یک", mean: "one, a" },
    "nukh-ba-ta-reen":                   { fa: "نخبه‌ترین", mean: "most distinguished" },
    "shakh-see-yat":                     { fa: "شخصیت", mean: "character, personality" },
    "a-da-bee":                          { fa: "ادبی", mean: "literary" },
    "man-ti-qa":                         { fa: "منطقه", mean: "area, region" },
    "mis-daaq":                          { fa: "مصداق", mean: "evidence, instance" },
    "id-di-aa":                          { fa: "ادعا", mean: "claim" },
    "ha-maan":                           { fa: "همان", mean: "that same, the very" },
    "su-kha-nee":                        { fa: "سخنی", mean: "speech, something said" },
    "mi-yaan":                           { fa: "میان", mean: "middle, among" },
    "jam-ee":                            { fa: "جمعی", mean: "a group" },
    "daa-nish-man-daan":                 { fa: "دانشمندان", mean: "scholars, scientists" },
    "a-dee-baan":                        { fa: "ادیبان", mean: "writers, literary scholars" },
    "iz-haar":                           { fa: "اظهار", mean: "expression, declaring" },
    "rooz-gaa-ree":                      { fa: "روزگاری", mean: "a time, an era" },
    "mu-deer":                           { fa: "مدیر", mean: "director, editor" },
    "mas-ool":                           { fa: "مسؤول", mean: "responsible" },
    "ma-jal-la":                         { fa: "مجله", mean: "magazine" },
    "kaa-bul":                           { fa: "کابل", mean: "Kabul" },
    "kish-war-haa":                      { fa: "کشورها", mean: "countries" },
    "ham-ja-waar":                       { fa: "همجوار", mean: "neighboring" },
    "jum-la":                            { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "fi-ris-taa-da":                     { fa: "فرستاده", mean: "sent" },
    "fi-ris-taa-dan":                    { fa: "فرستادن", mean: "to send" },
    "may-shud":                          { fa: "می‌شد", mean: "became; was" },
    "shu-dan":                           { fa: "شدن", mean: "to become" },
    "ro-zay":                            { fa: "روزی", mean: "a day (roz + -ay)" },
    "haa-lee":                           { fa: "حالی", mean: "a state, while" },
    "dast":                              { fa: "دست", mean: "hand" },
    "aan":                               { fa: "آن", mean: "that" },
    "mah-fil":                           { fa: "محفل", mean: "gathering, assembly" },
    "ni-shaan":                          { fa: "نشان", mean: "sign, show" },
    "may-daad":                          { fa: "می‌داد", mean: "gave" },
    "guft":                              { fa: "گفت", mean: "said" },
    "maa":                               { fa: "ما", mean: "we" },
    "ha-meen":                           { fa: "همین", mean: "this very, this same" },
    "ak-noon":                           { fa: "اکنون", mean: "now" },
    "ma-jal-la-yee":                     { fa: "مجله‌یی", mean: "a magazine" },
    "goo-na":                            { fa: "گونه", mean: "kind, type" },
    "shakh-see-ya-tee":                  { fa: "شخصیتی", mean: "a personality" },
    "choon":                             { fa: "چون", mean: "like, as; when; because" },
    "mu-dee-ree-yat":                    { fa: "مدیریت", mean: "management" },
    "ku-nad":                            { fa: "کند", mean: "does" },
    "na-daa-reem":                       { fa: "نداریم", mean: "we do not have" },
    "saal":                              { fa: "سال", mean: "year" },
    "he-zaar-o-do-sad-o-che-hil-o-haft": { fa: "۱۲۴۷", mean: "1247" },
    "hij-ree":                           { fa: "ه", mean: "short for hij-ree, of the Islamic calendar" },
    "sham-see":                          { fa: "ش", mean: "short for sham-see, solar (of the Afghan solar calendar)" },
    "shahr":                             { fa: "شهر", mean: "city, town" },
    "zaa-da":                            { fa: "زاده", mean: "Zada, born of" },
    "shud":                              { fa: "شد", mean: "became; was" },
    "pa-da-rash":                        { fa: "پدرش", mean: "his father" },
    "haa-fiz":                           { fa: "حافظ", mean: "Hafiz, the poet of Shiraz; one who knows the Quran by heart" },
    "qut-bud-deen":                      { fa: "قطب‌الدین", mean: "Qutb al-Din" },
    "pi-dar-ka-laa-nash":                { fa: "پدرکلانش", mean: "his grandfather" },
    "ghaws":                             { fa: "غوث", mean: "Ghawth" },
    "khud":                              { fa: "خود", mean: "own; self" },
    "boo-dand":                          { fa: "بودند", mean: "were" },
    "u-loom":                            { fa: "علوم", mean: "sciences" },
    "ilm":                               { fa: "علم", mean: "knowledge, learning" },
    "roz":                               { fa: "روز", mean: "day" },
    "us-taa-daan":                       { fa: "استادان", mean: "masters, teachers" },
    "aa-mokht":                          { fa: "آموخت", mean: "learned" },
    "aa-mokh-tan":                       { fa: "آموختن", mean: "to learn" },
    "qur-aan":                           { fa: "قرآن", mean: "the Quran" },
    "gar-deed":                          { fa: "گردید", mean: "became" },
    "gar-dee-dan":                       { fa: "گردیدن", mean: "to become, to turn" },
    "a-da-bee-yaat":                     { fa: "ادبیات", mean: "literature" },
    "a-rab":                             { fa: "عرب", mean: "Arab, the Arabs" },
    "fa-raa-gi-rift":                    { fa: "فراگرفت", mean: "learned (the book's note: learned)" },
    "fa-raa-gi-rif-tan":                 { fa: "فراگرفتن", mean: "to learn" },
    "fiqh":                              { fa: "فقه", mean: "Islamic jurisprudence" },
    "man-tiq":                           { fa: "منطق", mean: "logic" },
    "ka-laam":                           { fa: "کلام", mean: "speech; poetry" },
    "hik-mat":                           { fa: "حکمت", mean: "philosophy, wisdom" },
    "qa-deem":                           { fa: "قدیم", mean: "old, ancient" },
    "us-taad":                           { fa: "استاد", mean: "master, teacher" },
    "khat":                              { fa: "خط", mean: "line, script" },
    "nas-ta-leeq":                       { fa: "نستعلیق", mean: "Nastaliq script" },
    "sin":                               { fa: "سن", mean: "age" },
    "beest-saa-la-gee":                  { fa: "بیست‌ساله‌گی", mean: "the age of twenty" },
    "baa":                               { fa: "با", mean: "with" },
    "fazl":                              { fa: "فضل", mean: "virtue, learning" },
    "akh-laaq":                          { fa: "اخلاق", mean: "character, manners, morals" },
    "khaysh":                            { fa: "خویش", mean: "own; self" },
    "shuh-ra-tee":                       { fa: "شهرتی", mean: "fame" },
    "ra-saa-need":                       { fa: "رسانید", mean: "brought, attained" },
    "mu-shaa-wir":                       { fa: "مشاور", mean: "adviser" },
    "i-maam":                            { fa: "امام", mean: "imam; here a title for a great scholar" },
    "ha-bee-bul-laah":                   { fa: "حبیب‌الله", mean: "Habibullah" },
    "wa-lee-ahd":                        { fa: "ولیعهد", mean: "crown prince" },
    "a-meer-ab-dur-rah-maan":            { fa: "امیرعبدالرحمان", mean: "Amir Abdur Rahman" },
    "khaan":                             { fa: "خان", mean: "khan, a title; part of names" },
    "sa-far":                            { fa: "سفر", mean: "travel" },
    "ha-zar#home":                       { fa: "حضر", say: "ha-zar", mean: "staying at home" },
    "may-bood":                          { fa: "می‌بود", mean: "would be, used to be" },
    "waq-tay":                           { fa: "وقتی", mean: "when" },
    "a-meer":                            { fa: "امیر", mean: "emir, prince; also part of names" },
    "mu-rab-bee":                        { fa: "مربی", mean: "tutor, educator" },
    "ya-kay":                            { fa: "یکی", mean: "one" },
    "far-zan-daan":                      { fa: "فرزندان", mean: "children, sons" },
    "saakht":                            { fa: "ساخت", mean: "made" },
    "saakh-tan":                         { fa: "ساختن", mean: "to make, to build" },
    "ahd":                               { fa: "عهد", mean: "age, period" },
    "naa-dir-shaah":                     { fa: "نادرشاه", mean: "Nadir Shah" },
    "kaar":                              { fa: "کار", mean: "work, a job" },
    "mu-ta-qaa-id":                      { fa: "متقاعد", mean: "retired" },
    "shu-da":                            { fa: "شده", mean: "become; been" },
    "tad-rees":                          { fa: "تدریس", mean: "teaching" },
    "aa-mo-zish":                        { fa: "آموزش", mean: "study, education" },
    "zaa-hir":                           { fa: "ظاهر", mean: "visible, appearing" },
    "shaah":                             { fa: "شاه", mean: "king, shah; part of names" },
    "ha-noz":                            { fa: "هنوز", mean: "still, yet" },
    "shaah-zaa-da":                      { fa: "شاهزاده", mean: "prince" },
    "doosh":                             { fa: "دوش", mean: "shoulder, charge" },
    "gi-rift":                           { fa: "گرفت", mean: "took; began" },
    "gi-rif-tan":                        { fa: "گرفتن", mean: "to take" },
    "nu-khus-teen":                      { fa: "نخستین", mean: "first" },
    "aa-moo-zi-gaa-raan":                { fa: "آموزگاران", mean: "teachers" },
    "ma-kaa-tib":                        { fa: "مکاتب", mean: "schools" },
    "ja-deed":                           { fa: "جدید", mean: "new" },
    "hin-gaa-mee":                       { fa: "هنگامی", mean: "a time, when" },
    "mak-tab":                           { fa: "مکتب", mean: "school" },
    "ha-bee-bee-ya":                     { fa: "حبیبیه", mean: "Habibia" },
    "ee-jaad":                           { fa: "ایجاد", mean: "creating, setting up" },
    "ki-naar":                           { fa: "کنار", mean: "side, edge" },
    "hin-dee":                           { fa: "هندی", mean: "Indian" },
    "un-waan":                           { fa: "عنوان", mean: "title, capacity (ba un-waan, as)" },
    "mu-al-lim":                         { fa: "معلم", mean: "teacher" },
    "gu-maash-ta":                       { fa: "گماشته", mean: "appointed" },
    "taa":                               { fa: "تا", mean: "so that; until; to" },
    "besh":                              { fa: "بیش", mean: "more" },
    "chi-hil":                           { fa: "چهل", mean: "forty" },
    "wa-zee-fa-yi":                      { fa: "وظیفهٔ", mean: "duty of" },
    "mu-al-li-mee":                      { fa: "معلمی", mean: "teaching profession" },
    "har-bee-ya-yi":                     { fa: "حربیهٔ", mean: "military school of" },
    "si-raa-jee-ya":                     { fa: "سراجیه", mean: "Sirajia" },
    "aa-lee":                            { fa: "عالی", mean: "high, excellent" },
    "i-daa-ma":                          { fa: "ادامه", mean: "continuation" },
    "daad":                              { fa: "داد", mean: "gave" },
    "khi-laal":                          { fa: "خلال", mean: "during, amid" },
    "daw-ra":                            { fa: "دوره", mean: "period" },
    "mud-da-tee":                        { fa: "مدتی", mean: "a period of time" },
    "daa-rut-ta-leef":                   { fa: "دارالتألیف", mean: "publishing and authorship department" },
    "wi-zaa-rat":                        { fa: "وزارت", mean: "ministry" },
    "ta-leef":                           { fa: "تألیف", mean: "authorship, compilation" },
    "tas-heeh":                          { fa: "تصحیح", mean: "correction, editing" },
    "ku-tub":                            { fa: "کتب", mean: "books" },
    "ba-raa-yi":                         { fa: "برای", mean: "for" },
    "shaa-gir-daan":                     { fa: "شاگردان", mean: "students" },
    "par-daakht":                        { fa: "پرداخت", mean: "took up" },
    "par-daakh-tan":                     { fa: "پرداختن", mean: "to busy oneself (with ba), to take up; to pay" },
    "pas":                               { fa: "پس", mean: "then, so" },
    "ta-qaa-ud":                         { fa: "تقاعد", mean: "retirement" },
    "naa-dir-khaan":                     { fa: "نادرخان", mean: "Nadir Khan" },
    "uzw":                               { fa: "عضو", mean: "member" },
    "an-ju-man":                         { fa: "انجمن", mean: "academy, association" },
    "saal-haa":                          { fa: "سال‌ها", mean: "years" },
    "paa-yaa-nee":                       { fa: "پایانی", mean: "final" },
    "umr":                               { fa: "عمر", mean: "life, lifetime" },
    "a-laa-wa":                          { fa: "علاوه", mean: "addition (a-laa-wa bar, besides)" },
    "uz-wi-yat":                         { fa: "عضویت", mean: "membership" },
    "kaar-haa":                          { fa: "کارها", mean: "works, jobs" },
    "daa-yi-ra-tul-ma-aa-rif":           { fa: "دایرهٔالمعارف", mean: "encyclopedia" },
    "shar-ee":                           { fa: "شرعی", mean: "religious, legal" },
    "ri-yaa-sat":                        { fa: "ریاست", mean: "directorate, administration" },
    "mus-ta-qil":                        { fa: "مستقل", mean: "independent" },
    "mat-boo-aat":                       { fa: "مطبوعات", mean: "press, publications" },
    "qaa-lib-haa-yi":                    { fa: "قالب‌های", mean: "forms" },
    "mukh-ta-li-fee":                    { fa: "مختلفی", mean: "different, various" },
    "shi'r":                             { fa: "شعر", mean: "poetry, poem" },
    "su-roo-da":                         { fa: "سروده", mean: "written (a poem)" },
    "su-roo-dan":                        { fa: "سرودن", mean: "to write a poem" },
    "gha-zal":                           { fa: "غزل", mean: "ghazal, a short love poem" },
    "qa-see-da":                         { fa: "قصیده", mean: "ode, a long poem of praise" },
    "mas-na-wee":                        { fa: "مثنوی", mean: "masnavi, a long poem in rhyming couplets" },
    "gi-rif-ta":                         { fa: "گرفته", mean: "taken; having taken" },
    "tar-keeb-band":                     { fa: "ترکیب‌بند", mean: "tarkib-band poetic form" },
    "mu-sam-mat":                        { fa: "مسمّط", mean: "musammat poetic form" },
    "ru-baa-ee":                         { fa: "رباعی", mean: "quatrain, a poem of four half-lines" },
    "do-bay-tee":                        { fa: "دوبیتی", mean: "quatrain" },
    "da-raa-maa":                        { fa: "درامه", mean: "drama" },
    "man-zoom":                          { fa: "منظوم", mean: "in verse, versified" },
    "tar-kee-bee":                       { fa: "ترکیبی", mean: "a combination, combined" },
    "qi-ta-aat":                         { fa: "قطعات", mean: "passages, pieces" },
    "wazn-haa":                          { fa: "وزن‌ها", mean: "meters" },
    "qaa-fee-ya-haa":                    { fa: "قافیه‌ها", mean: "rhymes" },
    "mu-ta-na-wo":                       { fa: "متنوع", mean: "varied" },
    "mukh-ta-lif":                       { fa: "مختلف", mean: "different, various" },
    "gha-zal-haa-yi":                    { fa: "غزل‌های", mean: "ghazals" },
    "pukh-ta-gee":                       { fa: "پخته‌گی", mean: "maturity" },
    "ka-maal":                           { fa: "کمال", mean: "perfection" },
    "khaa-say":                          { fa: "خاصی", mean: "special (khaas + -ay, a: “a special …”)" },
    "bar-khor-daar":                     { fa: "برخوردار", mean: "possessing, enjoying" },
    "had-dee":                           { fa: "حدی", mean: "an extent" },
    "shu-maar":                          { fa: "شمار", mean: "count, number" },
    "chand":                             { fa: "چند", mean: "a few; how many" },
    "gha-zal-sa-raa-yi":                 { fa: "غزلسرای", mean: "ghazal poet" },
    "nee-ma":                            { fa: "نیمه", mean: "half" },
    "aw-wal":                            { fa: "اول", mean: "first" },
    "qarn":                              { fa: "قرن", mean: "century" },
    "cha-haa-rda-hum":                   { fa: "چهاردهم", mean: "fourteenth" },
    "qa-raar":                           { fa: "قرار", mean: "place, rest" },
    "may-di-had":                        { fa: "می‌دهد", mean: "gives" },
    "way-zha-gee-haa-yi":                { fa: "ویژه‌گی‌های", mean: "features, characteristics" },
    "sa-laa-bat":                        { fa: "صلابت", mean: "strength, firmness" },
    "ma-aa-nee":                         { fa: "معانی", mean: "meanings" },
    "ayn":                               { fa: "عین", mean: "very same (dar ayn-i haal, at the same time)" },
    "sa-laa-sat":                        { fa: "سلاست", mean: "fluency" },
    "ra-waa-nee":                        { fa: "روانی", mean: "mental" },
    "ham-chu-neen":                      { fa: "همچنین", mean: "also, likewise" },
    "kaar-burd":                         { fa: "کاربرد", mean: "use, application" },
    "waa-zha-haa":                       { fa: "واژه‌ها", mean: "words" },
    "tar-kee-baat":                      { fa: "ترکیبات", mean: "compounds" },
    "ta-bee-raat":                       { fa: "تعبیرات", mean: "expressions" },
    "lah-ja-yee":                        { fa: "لهجه‌یی", mean: "dialectal" },
    "may-ta-waan":                       { fa: "می‌توان", mean: "one can" },
    "zum-ra-yi":                         { fa: "زمرهٔ", mean: "category of" },
    "daa-nist":                          { fa: "دانست", mean: "regarded, knew" },
    "daa-nis-tan":                       { fa: "دانستن", mean: "to know" },
    "za-baan-shi-naa-see":               { fa: "زبان‌شناسی", mean: "linguistics" },
    "mu-taa-li-a":                       { fa: "مطالعه", mean: "study, reading" },
    "ba-zay":                            { fa: "بعضی", mean: "some" },
    "lah-ja-haa-yi":                     { fa: "لهجه‌های", mean: "dialects" },
    "da-ree":                            { fa: "دری", mean: "Dari, the Persian of Afghanistan" },
    "qaa-bil":                           { fa: "قابل", mean: "able, fit (qaa-bil-i is-ti-faa-da, usable)" },
    "ta-waj-juh":                        { fa: "توجه", mean: "attention" },
    "maa-nand":                          { fa: "مانند", mean: "like" },
    "bur-dan":                           { fa: "بردن", mean: "to take away, to carry" },
    "sa-baa":                            { fa: "صبا", mean: "tomorrow; morning breeze" },
    "ba-jaa":                            { fa: "به‌جا", mean: "in place" },
    "sa-baah":                           { fa: "صباح", mean: "tomorrow, morning" },
    "ma-naa":                            { fa: "معنا", mean: "meaning" },
    "far-daa":                           { fa: "فردا", mean: "tomorrow" },
    "is-ti-maal":                        { fa: "استعمال", mean: "use, usage" },
    "aa-mi-yaa-na":                      { fa: "عامیانه", mean: "colloquial" },
    "koy":                               { fa: "کوی", mean: "street, lane" },
    "tu":                                { fa: "تو", mean: "you (one person)" },
    "ay":                                { fa: "ای", mean: "O (when calling someone)" },
    "but":                               { fa: "بت", mean: "idol" },
    "khu-daa":                           { fa: "خدا", mean: "God" },
    "khaa-ham":                          { fa: "خواهم", mean: "I want" },
    "khaas-tan":                         { fa: "خواستن", mean: "to want" },
    "raft":                              { fa: "رفت", mean: "went" },
    "raf-tan":                           { fa: "رفتن", mean: "to go" },
    "raf-ta-nam":                        { fa: "رفتنم", mean: "my going" },
    "gar":                               { fa: "گر", mean: "if" },
    "na-shud":                           { fa: "نشد", mean: "did not happen" },
    "im-roz":                            { fa: "امروز", mean: "today" },
    "chu-naan-ki":                       { fa: "چنان‌که", mean: "as, for example" },
    "dee-da":                            { fa: "دیده", mean: "seen; eye" },
    "dee-dan":                           { fa: "دیدن", mean: "to see; seeing" },
    "may-sha-wad":                       { fa: "می‌شود", mean: "becomes" },
    "paa-yaan":                          { fa: "پایان", mean: "end" },
    "sar-aa-ghaaz":                      { fa: "سرآغاز", mean: "beginning" },
    "baaz-gasht":                        { fa: "بازگشت", mean: "returned; return" },
    "baaz-gash-tan":                     { fa: "بازگشتن", mean: "to return" },
    "saa-da-ni-wee-see":                 { fa: "ساده‌نویسی", mean: "plain writing" },
    "na-maa-yin-da-gee":                 { fa: "نماینده‌گی", mean: "representation" },
    "may-ku-nad":                        { fa: "می‌کند", mean: "does, makes" },
    "kasb":                              { fa: "کسب", mean: "gaining, acquisition" },
    "is-tiq-laal":                       { fa: "استقلال", mean: "independence" },
    "ta-seer-pa-zee-ree":                { fa: "تأثیرپذیری", mean: "influence, being affected" },
    "ja-ra-yaan":                        { fa: "جریان", mean: "course, progress" },
    "ta-ha-wu-laat":                     { fa: "تحولات", mean: "developments" },
    "gu-raa-yish":                       { fa: "گرایش", mean: "inclination, leaning" },
    "raw-naq":                           { fa: "رونق", mean: "flourishing, prosperity" },
    "may-gee-rad":                       { fa: "می‌گیرد", mean: "takes" },
    "ib-haam-aa-fa-ree-nee":             { fa: "ابهام‌آفرینی", mean: "creating obscurity" },
    "may-gar-dad":                       { fa: "می‌گردد", mean: "becomes, turns" },
    "mee-pa-yu-nadad":                   { fa: "می‌پیوندد", mean: "joins" },
    "chu-neen":                          { fa: "چنین", mean: "so, like this" },
    "mu-heet":                           { fa: "محیط", mean: "surroundings, setting" },
    "man":                               { fa: "من", mean: "I" },
    "ra-waaj":                           { fa: "رواج", mean: "spread, prevalence" },
    "an-daakht":                         { fa: "انداخت", mean: "cast, caused" },
    "chi":                               { fa: "چه", mean: "what; how" },
    "khaa-ma":                           { fa: "خامه", mean: "pen" },
    "ba-lay":                            { fa: "بلی", mean: "yes" },
    "in-qi-laab-haa":                    { fa: "انقلاب‌ها", mean: "revolutions" },
    "daa-rad":                           { fa: "دارد", mean: "has" },
    "ha-may-sha":                        { fa: "همیشه", mean: "always" },
    "tarz":                              { fa: "طرز", mean: "style, manner" },
    "ja-haan":                           { fa: "جهان", mean: "world" },
    "fa-raaz":                           { fa: "فراز", mean: "rise, high point" },
    "na-sheeb":                          { fa: "نشیب", mean: "descent, decline" },
    "bil-aa-khi-ra":                     { fa: "بالآخره", mean: "finally" },
    "mard":                              { fa: "مرد", mean: "man" },
    "bu-zurg":                           { fa: "بزرگ", mean: "big, great" },
    "ar-ju-mand":                        { fa: "ارجمند", mean: "honored, noble" },
    "jum-a":                             { fa: "جمعه", mean: "Friday" },
    "nu-hum":                            { fa: "نهم", mean: "ninth" },
    "maah":                              { fa: "ماه", mean: "month; moon" },
    "sawr":                              { fa: "ثور", mean: "Sawr, second Afghan solar month" },
    "he-zaar-o-seh-sad-o-beest-o-do":    { fa: "۱۳۲۲", mean: "1322" },
    "um-ree":                            { fa: "عمری", mean: "a lifetime" },
    "khid-mat":                          { fa: "خدمت", mean: "service" },
    "far-han-gee":                       { fa: "فرهنگی", mean: "cultural" },
    "bid-rood":                          { fa: "بدرود", mean: "farewell, departure" },
    "has-tee":                           { fa: "هستی", mean: "you are" },
    "am-maa":                            { fa: "اما", mean: "but" },
    "aa-saar":                           { fa: "آثار", mean: "works" },
    "pur-ba-haa-yi":                     { fa: "پربهای", mean: "precious" },
    "fa-raa-waan":                       { fa: "فراوان", mean: "abundant, great" },
    "ar-ju-man-dee":                     { fa: "ارجمندی", mean: "a valuable one" },
    "mee-raas":                          { fa: "میراث", mean: "inheritance" },
    "gu-zaasht":                         { fa: "گذاشت", mean: "put, named" },
    "gu-zaash-tan":                      { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "jaa-wi-daa-na-gee-ash":             { fa: "جاودانه‌گی‌اش", mean: "his lasting place" },
    "taa-reekh":                         { fa: "تاریخ", mean: "history; date" },
    "kish-war":                          { fa: "کشور", mean: "country" },
    "mu-saj-jal":                        { fa: "مسجل", mean: "established, recorded" },
    "fa-qeed":                           { fa: "فقید", mean: "late, deceased" },
    "it-ti-faaq":                        { fa: "اتفاق", mean: "agreement, event" },
    "aa-raa-yi":                         { fa: "آرای", mean: "opinions, votes" },
    "sar-za-meen":                       { fa: "سرزمین", mean: "land, country" },
    "man-zi-la-yi":                      { fa: "منزلهٔ", mean: "rank, position" },
    "bar-jas-ta-ta-reen":                { fa: "برجسته‌ترین", mean: "most prominent" },
    "asr":                               { fa: "عصر", mean: "age, era" },
    "haa-zir":                           { fa: "حاضر", mean: "present" },
    "raf-ta":                            { fa: "رفته", mean: "gone, regarded" },
    "zee-raa":                           { fa: "زیرا", mean: "because" },
    "mar-hoom":                          { fa: "مرحوم", mean: "the late, deceased" },
    "khi-da-maat":                       { fa: "خدمات", mean: "services" },
    "sa-zaa-waar":                       { fa: "سزاوار", mean: "worthy" },
    "sa-taa-yish":                       { fa: "ستایش", mean: "praise" },
    "bi-yaa-ree":                        { fa: "بسیاری", mean: "many, a great deal" },
    "far-hang":                          { fa: "فرهنگ", mean: "culture" },
    "an-jaam":                           { fa: "انجام", mean: "doing, carrying out" },
    "daa-da":                            { fa: "داده", mean: "given" },
    "heech-gaah":                        { fa: "هیچ‌گاه", mean: "never" },
    "fa-raa-mosh":                       { fa: "فراموش", mean: "forgotten" },
    "khaa-tir":                          { fa: "خاطر", mean: "mind, memory" },
    "haq-shi-naas":                      { fa: "حق‌شناس", mean: "grateful, appreciative" },
    "marz-o-boom":                       { fa: "مرزوبوم", mean: "land, country" },
    "na-khaa-had":                       { fa: "نخواهد", mean: "will not" },
    "naam":                              { fa: "نام", mean: "name" },
    "nee-kash":                          { fa: "نیکش", mean: "his good name" },
    "sa-fa-haat":                        { fa: "صفحات", mean: "pages" },
    "wa-tan":                            { fa: "وطن", mean: "homeland, country" },
    "du-rusht":                          { fa: "درشت", mean: "bold, large" },
    "sabt":                              { fa: "ثبت", mean: "recording, being recorded" },
    "khaa-had":                          { fa: "خواهد", mean: "will" },
    "har-chand":                         { fa: "هرچند", mean: "although" },
    "sa-mar":                            { fa: "ثمر", mean: "fruit, result" },
    "haa-sil":                           { fa: "حاصل", mean: "obtained; result" },
    "um-rash":                           { fa: "عمرش", mean: "his life" },
    "ta-ba-qa":                          { fa: "طبقه", mean: "class, layer" },
    "tah-seel-yaafta":                   { fa: "تحصیل‌یافته", mean: "educated" },
    "mu-naw-war":                        { fa: "منور", mean: "enlightened" },
    "mam-li-kat":                        { fa: "مملکت", mean: "country" },
    "sil-si-la":                         { fa: "سلسله", mean: "series" },
    "a-da-bee-shaan":                    { fa: "ادبی‌شان", mean: "their literary works" },
    "hay-see-yat":                       { fa: "حیث", mean: "capacity, role (ba hay-see, as)" },
    "sar-maa-ya-yi":                     { fa: "سرمایهٔ", mean: "resource, capital" },
    "bay-paa-yaan":                      { fa: "بی‌پایان", mean: "endless" },
    "is-ti-faa-da":                      { fa: "استفاده", mean: "use" },
    "baa-qee":                           { fa: "باقی", mean: "remaining" },
    "maan-da":                           { fa: "مانده", mean: "remained" },
    "nasl":                              { fa: "نسل", mean: "generation" },
    "kar-da":                            { fa: "کرده", mean: "done" },
    "if-ti-khaar":                       { fa: "افتخار", mean: "pride, glory" },
    "khaa-hand":                         { fa: "خواهند", mean: "they will" },
    "saa-bi-qa-daar-ta-reen":            { fa: "سابقه‌دارترین", mean: "longest-serving" },
    "pur-kaar-ta-reen":                  { fa: "پرکارترین", mean: "most productive" },
    "sa-mee-mee-ta-reen":                { fa: "صمیمی‌ترین", mean: "most sincere" },
    "khid-mat-gaa-raan":                 { fa: "خدمتگاران", mean: "servants" },
    "yaaf-ta":                           { fa: "یافته", mean: "found; having been carried" },
    "yaaf-tan":                          { fa: "یافتن", mean: "to find" },
    "pan-jaah-o-panj#digit":             { fa: "۵۵", say: "pan-jaah-o-panj", mean: "fifty-five" },
    "ha-yaat":                           { fa: "حیات", mean: "life" },
    "wu-jood":                           { fa: "وجود", mean: "existence" },
    "ta-leem":                           { fa: "تعلیم", mean: "education" },
    "ma-daa-ris":                        { fa: "مدارس", mean: "schools, religious schools" },
    "fa-raa-waa-nee":                    { fa: "فراوانی", mean: "many, abundance" },
    "way":                               { fa: "وی", mean: "he, she" },
    "tan-haa":                           { fa: "تنها", mean: "only; alone" },
    "maw-zoo":                           { fa: "موضوع", mean: "subject, point" },
    "das-toor":                          { fa: "دستور", mean: "rule, order; grammar" },
    "hazh-da":                           { fa: "هژده", mean: "eighteen" },
    "jild":                              { fa: "جلد", mean: "volume" },
    "ki-taab-dar-see":                   { fa: "کتاب‌درسی", mean: "textbook" },
    "na-wish-ta":                        { fa: "نوشته", mean: "written" },
    "na-wish-tan":                       { fa: "نوشتن", mean: "to write" },
    "pa-da-raan":                        { fa: "پدران", mean: "fathers, parents" },
    "maa-da-raan":                       { fa: "مادران", mean: "mothers, parents" },
    "ta-reeq":                           { fa: "طریق", mean: "way, path" },
    "ki-taab-haa":                       { fa: "کتاب‌ها", mean: "books" },
    "khaan-dan":                         { fa: "خواندن", mean: "to read, to recite" },
    "fa-raa-gi-rif-ta-and":              { fa: "فراگرفته‌اند", mean: "they have learned" },
    "ta-daad":                           { fa: "تعداد", mean: "number" },
    "ta-lee-faat":                       { fa: "تألیفات", mean: "authored works" },
    "tar-ju-ma-haa":                     { fa: "ترجمه‌ها", mean: "translations" },
    "ma-qaa-laat":                       { fa: "مقالات", mean: "articles" },
    "du-sad":                            { fa: "دوصد", mean: "two hundred" },
    "nus-kha":                           { fa: "نسخه", mean: "copy, manuscript" },
    "ta-jaa-wuz":                        { fa: "تجاوز", mean: "exceed, crossing" },
    "baysh-tar":                         { fa: "بیشتر", mean: "more" },
    "shaa-mil":                          { fa: "شامل", mean: "including" },
    "ma-zaa-mee-nee":                    { fa: "مضامینی", mean: "subjects" },
    "taz-ki-ra-ni-gaa-ree":              { fa: "تذکره‌نگاری", mean: "biographical writing" },
    "ju-ghraa-fee-ya":                   { fa: "جغرافیه", mean: "geography" },
    "fal-sa-fa":                         { fa: "فلسفه", mean: "philosophy" },
    "a-qaa-yid":                         { fa: "عقاید", mean: "beliefs" },
    "naqd":                              { fa: "نقد", mean: "criticism, judging" },
    "daa-yi-ra-yi":                      { fa: "دایرهٔ", mean: "circle of" },
    "al-ma-aa-rif":                      { fa: "المعارف", mean: "knowledge, encyclopedia" },
    "mu-him-ta-reen":                    { fa: "مهمترین", mean: "most important" },
    "dee-waan":                          { fa: "دیوان", mean: "collected poems" },
    "ash-aar":                           { fa: "اشعار", mean: "poems, verses" },
    "tar-ju-ma":                         { fa: "ترجمه", mean: "translation" },
    "gha-zaa-lee":                       { fa: "غزالی", mean: "al-Ghazali, a Persian scholar who died in 1111" },
    "ru-waat":                           { fa: "روّات", mean: "narrators" },
    "fiqh-haa-yi":                       { fa: "فقه‌های", mean: "jurists, works of jurisprudence" },
    "im-laa":                            { fa: "املا", mean: "spelling" },
    "u-sool":                            { fa: "اصول", mean: "rules, principles" },
    "tan-qeet":                          { fa: "تنقیط", mean: "punctuation" },
    "ju-ghraa-fee-yaa-yi":               { fa: "جغرافیای", mean: "geography of" },
    "taz-ki-ra-yi":                      { fa: "تذکرهٔ", mean: "memorial, biographical collection" },
    "shu-a-raa":                         { fa: "شعرا", mean: "poets" },
    "burd":                              { fa: "برد", mean: "took, benefited" },
    "na-mo-na":                          { fa: "نمونه", mean: "sample, example" },
    "du":                                { fa: "دو", mean: "two" },
    "as-pa":                             { fa: "اسپه", mean: "horse, in “two-horse”" },
    "mah-mil":                           { fa: "محمل", mean: "litter, howdah" },
    "layl":                              { fa: "لیل", mean: "night" },
    "na-haar":                           { fa: "نهار", mean: "lunch" },
    "mee-gu-za-rad":                     { fa: "می‌گذرد", mean: "passes" },
    "hosh":                              { fa: "هوش", mean: "intelligence" },
    "baash":                             { fa: "باش", mean: "be" },
    "ay-yaam":                           { fa: "ایام", mean: "days, times" },
    "gha-nee-mat":                       { fa: "غنیمت", mean: "treasure, opportunity" },
    "ja-waa-nee":                        { fa: "جوانی", mean: "youth" },
    "fikr":                              { fa: "فکر", mean: "thought" },
    "par-daaz":                          { fa: "پرداز", mean: "attend to" },
    "gar-na":                            { fa: "گرنه", mean: "otherwise" },
    "khur-ra-mee":                       { fa: "خرمی", mean: "freshness, joy" },
    "za":                                { fa: "ز", mean: "from (short for az)" },
    "dahr":                              { fa: "دهر", mean: "time, the world" },
    "bah-ra":                            { fa: "بهره", mean: "benefit" },
    "a-zeez":                            { fa: "عزیز", mean: "Aziz; dear" },
    "may-yaa-bad":                       { fa: "می‌یابد", mean: "finds; begins" },
    "ka-say":                            { fa: "کسی", mean: "someone" },
    "zin-da-gee":                        { fa: "زنده‌گی", mean: "life" },
    "cha-man":                           { fa: "چمن", mean: "meadow" },
    "kha-zaan":                          { fa: "خزان", mean: "autumn" },
    "gul":                               { fa: "گل", mean: "Gul; flower" },
    "af-surd":                           { fa: "افسرد", mean: "withered" },
    "gir-ya":                            { fa: "گریه", mean: "weeping" },
    "a-bar":                             { fa: "ابر", mean: "great, super-, above" },
    "kooh-saar":                         { fa: "کوهسار", mean: "mountainside" },
    "ha-was":                            { fa: "هوس", mean: "lust, desire" },
    "af-sur-da":                         { fa: "افسرده", mean: "sad, gloomy" },
    "ma-purs":                           { fa: "مپرس", mean: "do not ask" },
    "ku-doo-ra-tee":                     { fa: "کدورتی", mean: "gloom, resentment" },
    "dil":                               { fa: "دل", mean: "heart" },
    "zeen":                              { fa: "زین", mean: "from this (za + een)" },
    "ghu-baar":                          { fa: "غبار", mean: "dust" },
    "ta-rad-du-dee":                     { fa: "ترددی", mean: "a hesitation" },
    "rah":                               { fa: "ره", mean: "road, way" },
    "pi-yaa-da-yi":                      { fa: "پیادهٔ", mean: "pawn of, pedestrian of" },
    "sha-tranj":                         { fa: "شطرنج", mean: "chess" },
    "da-reen":                           { fa: "درین", mean: "in this" },
    "ba-saat":                           { fa: "بساط", mean: "board, spread" },
    "ga-hee":                            { fa: "گهی", mean: "sometimes" },
    "sa-waar":                           { fa: "سوار", mean: "mounted, riding" },
    "wa-tan-pa-rast":                    { fa: "وطن‌پرست", mean: "patriot" },
    "ni-had":                            { fa: "نهد", mean: "places" },
    "ni-haa-dan":                        { fa: "نهادن", mean: "to put, to place" },
    "na-gu-zasht":                       { fa: "نگذشت", mean: "did not pass, give up" },
    "di-yaar":                           { fa: "دیار", mean: "land, country" },
    "bas":                               { fa: "بس", mean: "many; enough" },
    "khur-ram":                          { fa: "خرم", mean: "pleasant, flourishing" },
    "dil-kash":                          { fa: "دلکش", mean: "delightful" },
    "ha-waa":                            { fa: "هوا", mean: "air, weather" },
    "na-seem":                           { fa: "نسیم", mean: "breeze" },
    "taa-za":                            { fa: "تازه", mean: "fresh" },
    "ra-sad":                            { fa: "رسد", mean: "reaches" },
    "man-zil":                           { fa: "منزل", mean: "stage, destination; home" },
    "maq-sood":                          { fa: "مقصود", mean: "aim, goal" },
    "rah-ra-wee":                        { fa: "رهروی", mean: "traveler, wayfarer" },
    "kha-yaal":                          { fa: "خیال", mean: "imagination" },
    "khaar":                             { fa: "خار", mean: "thorn" }
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
    "say": "ma-lik-ush-shu-a-raa qaa-ree ab-dul-laah pa-da-ri ma-aa-ri-fi na-wee-ni af-ghaa-nis-taan",
    "mean": "Poet Laureate Qari Abdullah, father of modern education in Afghanistan",
    "words": [
      [
        "ملک‌الشعرا",
        "ma-lik-ush-shu-a-raa",
        "ma-lik-ush-shu-a-raa"
      ],
      [
        "قاری",
        "qaa-ree",
        "qaa-ree"
      ],
      [
        "عبدالله",
        "ab-dul-laah",
        "ab-dul-laah"
      ],
      [
        "پدر",
        "pa-da-ri",
        "pa-dar"
      ],
      [
        "معارف",
        "ma-aa-ri-fi",
        "ma-aa-rif"
      ],
      [
        "نوین",
        "na-wee-ni",
        "na-ween"
      ],
      [
        "افغانستان",
        "af-ghaa-nis-taan",
        "af-ghaa-nis-taan"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "su-khan raa dar maw-ri-di qaa-ree ab-dul-laah ma-lik-ush-shu-a-raa-yi-yi af-ghaa-nis-taan, az ba-yaa-ni mu-ham-mad ta-qee ba-haar, ma-lik-ush-shu-a-raa-yi-yi ee-raan wa ham rooz-gaa-ri qaa-ree, aa-ghaaz mee-ku-neem ki ba-yaan-ga-ri mar-ta-ba wa ma-qaa-mi il-mee wa shaa-i-ree-yi qaa-ree ast.",
        "mean": "We begin the discussion of Qari Abdullah, Afghanistan's poet laureate, with the words of Mohammad Taqi Bahar, Iran's poet laureate and Qari's contemporary, which show Qari's scholarly and poetic standing.",
        "words": [
          [
            "سخن",
            "su-khan",
            "su-khan"
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
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ],
          [
            "ملک‌الشعرای",
            "ma-lik-ush-shu-a-raa-yi-yi",
            "ma-lik-ush-shu-a-raa-yi"
          ],
          [
            "افغانستان،",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "بیان",
            "ba-yaa-ni",
            "ba-yaan"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "تقی",
            "ta-qee",
            "ta-qee"
          ],
          [
            "بهار،",
            "ba-haar",
            "ba-haar"
          ],
          [
            "ملک‌الشعرای",
            "ma-lik-ush-shu-a-raa-yi-yi",
            "ma-lik-ush-shu-a-raa-yi"
          ],
          [
            "ایران",
            "ee-raan",
            "ee-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "روزگار",
            "rooz-gaa-ri",
            "rooz-gaar"
          ],
          [
            "قاری،",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "آغاز",
            "aa-ghaaz",
            "aa-ghaaz"
          ],
          [
            "می‌کنیم",
            "mee-ku-neem",
            "mee-ku-neem",
            "kar-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بیانگر",
            "ba-yaan-ga-ri",
            "ba-yaan-gar"
          ],
          [
            "مرتبه",
            "mar-ta-ba",
            "mar-ta-ba"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مقام",
            "ma-qaa-mi",
            "ma-qaam"
          ],
          [
            "علمی",
            "il-mee",
            "il-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شاعری",
            "shaa-i-ree-yi",
            "shaa-i-ree"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "“ba-haar” may-go-yad:",
        "mean": "Bahar says:",
        "words": [
          [
            "«بهار»",
            "ba-haar",
            "ba-haar"
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
        "say": "kafsh-bar-daa-ree ku-nam dar mah-za-ri qaa-ree a-gar",
        "mean": "I would serve humbly in Qari's presence,",
        "words": [
          [
            "کفش‌برداری",
            "kafsh-bar-daa-ree",
            "kafsh-bar-daa-ree"
          ],
          [
            "کنم",
            "ku-nam",
            "ku-nam",
            "kar-dan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "محضر",
            "mah-za-ri",
            "mah-zar"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ]
        ]
      },
      {
        "say": "ba ki dar ee-raan fu-roo-ghee jaa di-had bar sa-ri ma-raa",
        "mean": "rather than let Foroughi grant me a place of honor in Iran.",
        "words": [
          [
            "بهِ",
            "ba",
            "ba"
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
            "ایران",
            "ee-raan",
            "ee-raan"
          ],
          [
            "فروغی",
            "fu-roo-ghee",
            "fu-roo-ghee"
          ],
          [
            "جا",
            "jaa",
            "jaa"
          ],
          [
            "دهد",
            "di-had",
            "di-had",
            "daa-dan"
          ],
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
            "مرا",
            "ma-raa",
            "ma-raa"
          ]
        ]
      }
    ],
    [
      {
        "say": "een ar-zi i-raa-dat ba peesh-gaa-hi aa-rif wa su-khan-gus-ta-ri ta-waa-naa-yay ast ki saa-hi-bi zaw-qi la-teef wa shor wa jaz-ba-yi-yi roo-haa-nee bood wa ham shaa-i-ri bar-jas-ta wa a-deeb wa naa-qi-di nuk-ta-yaab;",
        "mean": "This expression of devotion is offered to a capable mystic and master of speech who possessed refined taste, spiritual fervor and attraction, and was also an outstanding poet, writer, and perceptive critic.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "عرض",
            "ar-zi",
            "arz"
          ],
          [
            "ارادت",
            "i-raa-dat",
            "i-raa-dat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "پیشگاه",
            "peesh-gaa-hi",
            "peesh-gaah"
          ],
          [
            "عارف",
            "aa-rif",
            "aa-rif"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سخن‌گستر",
            "su-khan-gus-ta-ri",
            "su-khan-gus-tar"
          ],
          [
            "توانایی",
            "ta-waa-naa-yay",
            "ta-waa-naa-yay"
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
            "صاحب",
            "saa-hi-bi",
            "saa-hib"
          ],
          [
            "ذوق",
            "zaw-qi",
            "zawq"
          ],
          [
            "لطیف",
            "la-teef",
            "la-teef"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شور",
            "shor",
            "shor"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جذبهٔ",
            "jaz-ba-yi-yi",
            "jaz-ba-yi"
          ],
          [
            "روحانی",
            "roo-haa-nee",
            "roo-haa-nee"
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
            "هم",
            "ham",
            "ham"
          ],
          [
            "شاعر",
            "shaa-i-ri",
            "shaa-ir"
          ],
          [
            "برجسته",
            "bar-jas-ta",
            "bar-jas-ta"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادیب",
            "a-deeb",
            "a-deeb"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناقد",
            "naa-qi-di",
            "naa-qid"
          ],
          [
            "نکته‌یاب؛",
            "nuk-ta-yaab",
            "nuk-ta-yaab"
          ]
        ]
      },
      {
        "say": "ham-chu-naan ki dar aa-la-mi ir-faan wa fal-sa-fa-yi-yi is-laa-mee neez paa-yi-gaa-hee daasht wa az na-za-ri saa-bi-qa-yi shi-ree wa peesh-waa-yee wa us-taa-dee, ha-qi oo bar dee-gar go-yin-da-gaa-ni mu-aa-si-ri af-ghaa-nis-taan mu-qad-dam ast.",
        "mean": "He also held a position in Islamic mysticism and philosophy, and by virtue of his poetic seniority, leadership, and mastery, his claim precedes that of Afghanistan's other contemporary poets.",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
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
            "عالم",
            "aa-la-mi",
            "aa-lam"
          ],
          [
            "عرفان",
            "ir-faan",
            "ir-faan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فلسفهٔ",
            "fal-sa-fa-yi-yi",
            "fal-sa-fa-yi"
          ],
          [
            "اسلامی",
            "is-laa-mee",
            "is-laa-mee"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "پایگاهی",
            "paa-yi-gaa-hee",
            "paa-yi-gaa-hee"
          ],
          [
            "داشت",
            "daasht",
            "daasht",
            "daash-tan"
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
            "نظر",
            "na-za-ri",
            "na-zar"
          ],
          [
            "سابقهٔ",
            "saa-bi-qa-yi",
            "saa-bi-qa"
          ],
          [
            "شعری",
            "shi-ree",
            "shi-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پیشوایی",
            "peesh-waa-yee",
            "peesh-waa-yee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استادی،",
            "us-taa-dee",
            "us-taa-dee"
          ],
          [
            "حق",
            "ha-qi",
            "haq"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "گوینده‌گان",
            "go-yin-da-gaa-ni",
            "go-yin-da-gaan"
          ],
          [
            "معاصر",
            "mu-aa-si-ri",
            "mu-aa-sir"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "مقدم",
            "mu-qad-dam",
            "mu-qad-dam"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "oo dar zu-baa-ni a-ra-bee ta-bah-hur daasht...",
        "mean": "He was highly proficient in Arabic.",
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
            "تبحر",
            "ta-bah-hur",
            "ta-bah-hur"
          ],
          [
            "داشت...",
            "daasht",
            "daasht",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "az sab-ki faa-ri-see-yi ee-raan, af-ghaa-nis-taan, hin-dus-taan wa ham maa-wa-raa-un-na-hr bi-si-yaar aa-gaah bood.",
        "mean": "He knew very well the Persian styles of Iran, Afghanistan, India, and Transoxiana.",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "سبک",
            "sab-ki",
            "sabk"
          ],
          [
            "فارسی",
            "faa-ri-see-yi",
            "faa-ri-see"
          ],
          [
            "ایران،",
            "ee-raan",
            "ee-raan"
          ],
          [
            "افغانستان،",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "هندوستان",
            "hin-dus-taan",
            "hin-dus-taan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "ماوراءالنهر",
            "maa-wa-raa-un-na-hr",
            "maa-wa-raa-un-na-hr"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ],
          [
            "آگاه",
            "aa-gaah",
            "aa-gaah"
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
        "say": "dar yak su-khan qaa-ree ab-dul-laah nukh-ba-ta-reen shakh-see-ya-ti il-mee wa a-da-bee-yi man-ti-qa bood.",
        "mean": "In short, Qari Abdullah was the region's most distinguished scholarly and literary figure.",
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
            "سخن",
            "su-khan",
            "su-khan"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ],
          [
            "نخبه‌ترین",
            "nukh-ba-ta-reen",
            "nukh-ba-ta-reen"
          ],
          [
            "شخصیت",
            "shakh-see-ya-ti",
            "shakh-see-yat"
          ],
          [
            "علمی",
            "il-mee",
            "il-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادبی",
            "a-da-bee-yi",
            "a-da-bee"
          ],
          [
            "منطقه",
            "man-ti-qa",
            "man-ti-qa"
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
        "say": "mis-daa-qi een id-di-aa ha-maan su-kha-nee ast ki ma-lik-ush-shu-a-raa “ba-haar” dar mi-yaa-ni jam-ee az daa-nish-man-daan wa a-dee-baa-ni ee-raan iz-haar daasht.",
        "mean": "Evidence for this claim is what Poet Laureate Bahar said among a group of Iranian scholars and writers.",
        "words": [
          [
            "مصداق",
            "mis-daa-qi",
            "mis-daaq"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "ادعا",
            "id-di-aa",
            "id-di-aa"
          ],
          [
            "همان",
            "ha-maan",
            "ha-maan"
          ],
          [
            "سخنی",
            "su-kha-nee",
            "su-kha-nee"
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
            "ملک‌الشعرا",
            "ma-lik-ush-shu-a-raa",
            "ma-lik-ush-shu-a-raa"
          ],
          [
            "«بهار»",
            "ba-haar",
            "ba-haar"
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
            "جمعی",
            "jam-ee",
            "jam-ee"
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
            "ادیبان",
            "a-dee-baa-ni",
            "a-dee-baan"
          ],
          [
            "ایران",
            "ee-raan",
            "ee-raan"
          ],
          [
            "اظهار",
            "iz-haar",
            "iz-haar"
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
        "say": "dar rooz-gaa-ree ki ma-lik-ush-shu-a-raa qaa-ree ab-dul-laah mu-dee-ri mas-oo-li ma-jal-la-yi “kaa-bul” bood, een ma-jal-la ba kish-war-haa-yi ham-ja-waar az jum-la-yi ee-raan fi-ris-taa-da may-shud,",
        "mean": "When Qari Abdullah was the responsible editor of Kabul magazine, it was sent to neighboring countries, including Iran.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "روزگاری",
            "rooz-gaa-ree",
            "rooz-gaa-ree"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "ملک‌الشعرا",
            "ma-lik-ush-shu-a-raa",
            "ma-lik-ush-shu-a-raa"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ],
          [
            "مدیر",
            "mu-dee-ri",
            "mu-deer"
          ],
          [
            "مسؤول",
            "mas-oo-li",
            "mas-ool"
          ],
          [
            "مجلهٔ",
            "ma-jal-la-yi",
            "ma-jal-la"
          ],
          [
            "«کابل»",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "بود،",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "مجله",
            "ma-jal-la",
            "ma-jal-la"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کشورهای",
            "kish-war-haa-yi",
            "kish-war-haa"
          ],
          [
            "همجوار",
            "ham-ja-waar",
            "ham-ja-waar"
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
            "ایران",
            "ee-raan",
            "ee-raan"
          ],
          [
            "فرستاده",
            "fi-ris-taa-da",
            "fi-ris-taa-da",
            "fi-ris-taa-dan"
          ],
          [
            "می‌شد،",
            "may-shud",
            "may-shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "ro-zay ma-lik-ush-shu-a-raa “ba-haar” dar haa-lee ki ma-jal-la-yi kaa-bul raa dar dast daasht wa aan raa ba a-dee-baan wa daa-nish-man-daa-ni mah-fil ni-shaan may-daad, guft:",
        "mean": "One day, while holding Kabul magazine and showing it to the writers and scholars at a gathering, Bahar said:",
        "words": [
          [
            "روزی",
            "ro-zay",
            "ro-zay"
          ],
          [
            "ملک‌الشعرا",
            "ma-lik-ush-shu-a-raa",
            "ma-lik-ush-shu-a-raa"
          ],
          [
            "«بهار»",
            "ba-haar",
            "ba-haar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "حالی",
            "haa-lee",
            "haa-lee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مجلهٔ",
            "ma-jal-la-yi",
            "ma-jal-la"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
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
            "دست",
            "dast",
            "dast"
          ],
          [
            "داشت",
            "daasht",
            "daasht",
            "daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "ba"
          ],
          [
            "ادیبان",
            "a-dee-baan",
            "a-dee-baan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دانشمندان",
            "daa-nish-man-daa-ni",
            "daa-nish-man-daan"
          ],
          [
            "محفل",
            "mah-fil",
            "mah-fil"
          ],
          [
            "نشان",
            "ni-shaan",
            "ni-shaan"
          ],
          [
            "می‌داد،",
            "may-daad",
            "may-daad",
            "daa-dan"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "“maa ha-meen ak-noon dar ee-raan ma-jal-la-yee ba goo-na-yi “kaa-bul” ki shakh-see-ya-tee choon qaa-ree ab-dul-laah aan raa mu-dee-ree-yat ku-nad, na-daa-reem.”",
        "mean": "“At present in Iran we have no magazine like Kabul managed by a figure such as Qari Abdullah.”",
        "words": [
          [
            "«ما",
            "maa",
            "maa"
          ],
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "اکنون",
            "ak-noon",
            "ak-noon"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ایران",
            "ee-raan",
            "ee-raan"
          ],
          [
            "مجله‌یی",
            "ma-jal-la-yee",
            "ma-jal-la-yee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "گونهٔ",
            "goo-na-yi",
            "goo-na"
          ],
          [
            "«کابل»",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "شخصیتی",
            "shakh-see-ya-tee",
            "shakh-see-ya-tee",
            "shakh-see-yat"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
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
            "مدیریت",
            "mu-dee-ree-yat",
            "mu-dee-ree-yat"
          ],
          [
            "کند،",
            "ku-nad",
            "ku-nad",
            "kar-dan"
          ],
          [
            "نداریم.»",
            "na-daa-reem",
            "na-daa-reem"
          ]
        ]
      }
    ],
    [
      {
        "say": "qaa-ree ab-dul-laah dar saa-li he-zaar-o-do-sad-o-che-hil-o-haft hij-ree. sham-see. dar shah-ri kaa-bul zaa-da shud.",
        "mean": "Qari Abdullah was born in Kabul in 1247 SH.",
        "words": [
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
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
            "۱۲۴۷",
            "he-zaar-o-do-sad-o-che-hil-o-haft",
            "he-zaar-o-do-sad-o-che-hil-o-haft"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree"
          ],
          [
            "ش.",
            "sham-see",
            "sham-see"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "شهر",
            "shah-ri",
            "shahr"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "زاده",
            "zaa-da",
            "zaa-da"
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
        "say": "pa-da-rash haa-fiz qut-bud-deen wa pi-dar-ka-laa-nash haa-fiz mu-ham-mad ghaws az daa-nish-man-daa-ni rooz-gaa-ri khud boo-dand.",
        "mean": "His father, Hafiz Qutb al-Din, and his grandfather, Hafiz Mohammad Ghawth, were scholars of their time.",
        "words": [
          [
            "پدرش",
            "pa-da-rash",
            "pa-da-rash"
          ],
          [
            "حافظ",
            "haa-fiz",
            "haa-fiz"
          ],
          [
            "قطب‌الدین",
            "qut-bud-deen",
            "qut-bud-deen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پدرکلانش",
            "pi-dar-ka-laa-nash",
            "pi-dar-ka-laa-nash"
          ],
          [
            "حافظ",
            "haa-fiz",
            "haa-fiz"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "غوث",
            "ghaws",
            "ghaws"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دانشمندان",
            "daa-nish-man-daa-ni",
            "daa-nish-man-daan"
          ],
          [
            "روزگار",
            "rooz-gaa-ri",
            "rooz-gaar"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "بودند.",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "qaa-ree ab-dul-laah u-loo-mi roz raa az pa-dar wa us-taa-daa-ni dee-gar aa-mokht, haa-fi-zi qur-aan gar-deed, a-da-bee-yaa-ti a-rab fa-raa-gi-rift, fiqh, man-tiq, ka-laam wa hik-ma-ti qa-deem aa-mokht wa us-taa-di kha-ti nas-ta-leeq shud.",
        "mean": "Qari Abdullah learned the sciences of his day from his father and other teachers, memorized the Quran, learned Arabic literature, studied jurisprudence, logic, theology and ancient philosophy, and mastered Nastaliq calligraphy.",
        "words": [
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ],
          [
            "علوم",
            "u-loo-mi",
            "u-loom",
            "ilm"
          ],
          [
            "روز",
            "roz",
            "roz"
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
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استادان",
            "us-taa-daa-ni",
            "us-taa-daan"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "آموخت،",
            "aa-mokht",
            "aa-mokht",
            "aa-mokh-tan"
          ],
          [
            "حافظ",
            "haa-fi-zi",
            "haa-fiz"
          ],
          [
            "قرآن",
            "qur-aan",
            "qur-aan"
          ],
          [
            "گردید،",
            "gar-deed",
            "gar-deed",
            "gar-dee-dan"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "عرب",
            "a-rab",
            "a-rab"
          ],
          [
            "فراگرفت،",
            "fa-raa-gi-rift",
            "fa-raa-gi-rift",
            "fa-raa-gi-rif-tan"
          ],
          [
            "فقه،",
            "fiqh",
            "fiqh"
          ],
          [
            "منطق،",
            "man-tiq",
            "man-tiq"
          ],
          [
            "کلام",
            "ka-laam",
            "ka-laam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حکمت",
            "hik-ma-ti",
            "hik-mat"
          ],
          [
            "قدیم",
            "qa-deem",
            "qa-deem"
          ],
          [
            "آموخت",
            "aa-mokht",
            "aa-mokht",
            "aa-mokh-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استاد",
            "us-taa-di",
            "us-taad"
          ],
          [
            "خط",
            "kha-ti",
            "khat"
          ],
          [
            "نستعلیق",
            "nas-ta-leeq",
            "nas-ta-leeq"
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
        "say": "qaa-ree dar si-ni beest-saa-la-gee baa ilm wa fazl wa akh-laa-qi khaysh shuh-ra-tee ba ham ra-saa-need,",
        "mean": "At twenty, Qari gained fame for his learning, virtue, and character.",
        "words": [
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سن",
            "si-ni",
            "sin"
          ],
          [
            "بیست‌ساله‌گی",
            "beest-saa-la-gee",
            "beest-saa-la-gee"
          ],
          [
            "با",
            "baa",
            "baa"
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
            "فضل",
            "fazl",
            "fazl"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "شهرتی",
            "shuh-ra-tee",
            "shuh-ra-tee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "رسانید،",
            "ra-saa-need",
            "ra-saa-need"
          ]
        ]
      },
      {
        "say": "mu-shaa-wir wa i-maa-mi ha-bee-bul-laah (wa-lee-ah-di a-meer-ab-dur-rah-maan khaan) gar-deed, ki dar sa-far wa ha-zar baa oo may-bood.",
        "mean": "He became adviser and prayer leader to Habibullah, crown prince of Amir Abdur Rahman Khan, and accompanied him while traveling and at home.",
        "words": [
          [
            "مشاور",
            "mu-shaa-wir",
            "mu-shaa-wir"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امام",
            "i-maa-mi",
            "i-maam"
          ],
          [
            "حبیب‌الله",
            "ha-bee-bul-laah",
            "ha-bee-bul-laah"
          ],
          [
            "(ولیعهد",
            "wa-lee-ah-di",
            "wa-lee-ahd"
          ],
          [
            "امیرعبدالرحمان",
            "a-meer-ab-dur-rah-maan",
            "a-meer-ab-dur-rah-maan"
          ],
          [
            "خان)",
            "khaan",
            "khaan"
          ],
          [
            "گردید،",
            "gar-deed",
            "gar-deed",
            "gar-dee-dan"
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
            "سفر",
            "sa-far",
            "sa-far"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حضر",
            "ha-zar",
            "ha-zar#home"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "می‌بود.",
            "may-bood",
            "may-bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "waq-tay ha-bee-bul-laah, a-meer shud, qaa-ree raa mu-rab-bee-yi il-mee wa a-da-bee-yi ya-kay az far-zan-daa-ni khud saakht wa dar ah-di naa-dir-shaah, dar haa-lee ki az kaar mu-ta-qaa-id shu-da bood, tad-rees wa aa-mo-zi-shi mu-ham-mad zaa-hir shaah raa ki ha-noz shaah-zaa-da bood, ba doosh gi-rift.",
        "mean": "When Habibullah became emir, he made Qari the scholarly and literary tutor of one of his sons; under Nadir Shah, after retiring, Qari undertook the education of Mohammad Zahir, who was still a prince.",
        "words": [
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "حبیب‌الله،",
            "ha-bee-bul-laah",
            "ha-bee-bul-laah"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "شد،",
            "shud",
            "shud",
            "shu-dan"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "مربی",
            "mu-rab-bee-yi",
            "mu-rab-bee"
          ],
          [
            "علمی",
            "il-mee",
            "il-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادبی",
            "a-da-bee-yi",
            "a-da-bee"
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
            "خود",
            "khud",
            "khud"
          ],
          [
            "ساخت",
            "saakht",
            "saakht",
            "saakh-tan"
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
            "عهد",
            "ah-di",
            "ahd"
          ],
          [
            "نادرشاه،",
            "naa-dir-shaah",
            "naa-dir-shaah"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "حالی",
            "haa-lee",
            "haa-lee"
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
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "متقاعد",
            "mu-ta-qaa-id",
            "mu-ta-qaa-id"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "بود،",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "تدریس",
            "tad-rees",
            "tad-rees"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آموزش",
            "aa-mo-zi-shi",
            "aa-mo-zish"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "ظاهر",
            "zaa-hir",
            "zaa-hir"
          ],
          [
            "شاه",
            "shaah",
            "shaah"
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
            "هنوز",
            "ha-noz",
            "ha-noz"
          ],
          [
            "شاهزاده",
            "shaah-zaa-da",
            "shaah-zaa-da"
          ],
          [
            "بود،",
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
            "دوش",
            "doosh",
            "doosh"
          ],
          [
            "گرفت.",
            "gi-rift",
            "gi-rift",
            "gi-rif-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "qaa-ree az nu-khus-teen aa-moo-zi-gaa-raa-ni ma-kaa-ti-bi ja-deed dar af-ghaa-nis-taan ast.",
        "mean": "Qari was among the first teachers in Afghanistan's modern schools.",
        "words": [
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "آموزگاران",
            "aa-moo-zi-gaa-raa-ni",
            "aa-moo-zi-gaa-raan"
          ],
          [
            "مکاتب",
            "ma-kaa-ti-bi",
            "ma-kaa-tib"
          ],
          [
            "جدید",
            "ja-deed",
            "ja-deed"
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
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "hin-gaa-mee ki mak-ta-bi ha-bee-bee-ya, dar rooz-gaa-ri a-meer ha-bee-bul-laah, dar kaa-bul ee-jaad shud, qaa-ree ab-dul-laah neez dar ki-naa-ri us-taa-daa-ni hin-dee, dar aan mak-tab ba un-waa-ni mu-al-lim gu-maash-ta shud.",
        "mean": "When Habibia School was founded in Kabul during Amir Habibullah's reign, Qari Abdullah was appointed there as a teacher alongside Indian instructors.",
        "words": [
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
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "حبیبیه،",
            "ha-bee-bee-ya",
            "ha-bee-bee-ya"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "روزگار",
            "rooz-gaa-ri",
            "rooz-gaar"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "حبیب‌الله،",
            "ha-bee-bul-laah",
            "ha-bee-bul-laah"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "ایجاد",
            "ee-jaad",
            "ee-jaad"
          ],
          [
            "شد،",
            "shud",
            "shud",
            "shu-dan"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
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
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "استادان",
            "us-taa-daa-ni",
            "us-taa-daan"
          ],
          [
            "هندی،",
            "hin-dee",
            "hin-dee"
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
            "مکتب",
            "mak-tab",
            "mak-tab"
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
            "معلم",
            "mu-al-lim",
            "mu-al-lim"
          ],
          [
            "گماشته",
            "gu-maash-ta",
            "gu-maash-ta"
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
        "say": "az aan rooz-gaar taa ah-di mu-ham-mad naa-dir-shaah besh az chi-hil saal wa-zee-fa-yi-yi mu-al-li-mee raa dar mak-ta-bi ha-bee-bee-ya, mak-ta-bi har-bee-ya-yi-yi si-raa-jee-ya wa ma-kaa-ti-bi aa-lee-yi dee-gar i-daa-ma daad.",
        "mean": "From then until Mohammad Nadir Shah's reign, he taught for more than forty years at Habibia School, the Sirajia Military School, and other higher schools.",
        "words": [
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
            "روزگار",
            "rooz-gaar",
            "rooz-gaar"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "عهد",
            "ah-di",
            "ahd"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "نادرشاه",
            "naa-dir-shaah",
            "naa-dir-shaah"
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
            "چهل",
            "chi-hil",
            "chi-hil"
          ],
          [
            "سال",
            "saal",
            "saal"
          ],
          [
            "وظیفهٔ",
            "wa-zee-fa-yi-yi",
            "wa-zee-fa-yi"
          ],
          [
            "معلمی",
            "mu-al-li-mee",
            "mu-al-li-mee"
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
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "حبیبیه،",
            "ha-bee-bee-ya",
            "ha-bee-bee-ya"
          ],
          [
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "حربیهٔ",
            "har-bee-ya-yi-yi",
            "har-bee-ya-yi"
          ],
          [
            "سراجیه",
            "si-raa-jee-ya",
            "si-raa-jee-ya"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مکاتب",
            "ma-kaa-ti-bi",
            "ma-kaa-tib"
          ],
          [
            "عالی",
            "aa-lee-yi",
            "aa-lee"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "ادامه",
            "i-daa-ma",
            "i-daa-ma"
          ],
          [
            "داد.",
            "daad",
            "daad",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "dar khi-laa-li ha-meen daw-ra, mud-da-tee dar daa-rut-ta-lee-fi wi-zaa-ra-ti ma-aa-rif ba ta-leef wa tas-hee-hi ku-tub ba-raa-yi shaa-gir-daa-ni ma-aa-rif par-daakht.",
        "mean": "During this period he spent some time in the Ministry of Education's publishing department, writing and correcting books for pupils.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "خلال",
            "khi-laa-li",
            "khi-laal"
          ],
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "دوره،",
            "daw-ra",
            "daw-ra"
          ],
          [
            "مدتی",
            "mud-da-tee",
            "mud-da-tee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دارالتألیف",
            "daa-rut-ta-lee-fi",
            "daa-rut-ta-leef"
          ],
          [
            "وزارت",
            "wi-zaa-ra-ti",
            "wi-zaa-rat"
          ],
          [
            "معارف",
            "ma-aa-rif",
            "ma-aa-rif"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تألیف",
            "ta-leef",
            "ta-leef"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تصحیح",
            "tas-hee-hi",
            "tas-heeh"
          ],
          [
            "کتب",
            "ku-tub",
            "ku-tub"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "شاگردان",
            "shaa-gir-daa-ni",
            "shaa-gir-daan"
          ],
          [
            "معارف",
            "ma-aa-rif",
            "ma-aa-rif"
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
        "say": "pas az ta-qaa-ud dar ah-di naa-dir-khaan uz-wi an-ju-ma-ni a-da-bee-yi kaa-bul shud.",
        "mean": "After retiring under Nadir Khan, he became a member of the Kabul Literary Society.",
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
            "تقاعد",
            "ta-qaa-ud",
            "ta-qaa-ud"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "عهد",
            "ah-di",
            "ahd"
          ],
          [
            "نادرخان",
            "naa-dir-khaan",
            "naa-dir-khaan"
          ],
          [
            "عضو",
            "uz-wi",
            "uzw"
          ],
          [
            "انجمن",
            "an-ju-ma-ni",
            "an-ju-man"
          ],
          [
            "ادبی",
            "a-da-bee-yi",
            "a-da-bee"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
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
        "say": "dar saal-haa-yi paa-yaa-nee-yi umr a-laa-wa bar uz-wi-ya-ti an-ju-man wa kaar-haa-yi daa-yi-ra-tul-ma-aa-rif, mu-shaa-wi-ri shar-ee wa il-mee-yi ri-yaa-sa-ti mus-ta-qi-li mat-boo-aat neez bood.",
        "mean": "In his final years, besides serving in the society and working on the encyclopedia, he was a religious and scholarly adviser to the Independent Press Directorate.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سال‌های",
            "saal-haa-yi",
            "saal-haa"
          ],
          [
            "پایانی",
            "paa-yaa-nee-yi",
            "paa-yaa-nee"
          ],
          [
            "عمر",
            "umr",
            "umr"
          ],
          [
            "علاوه",
            "a-laa-wa",
            "a-laa-wa"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "عضویت",
            "uz-wi-ya-ti",
            "uz-wi-yat"
          ],
          [
            "انجمن",
            "an-ju-man",
            "an-ju-man"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کارهای",
            "kaar-haa-yi",
            "kaar-haa"
          ],
          [
            "دایرهٔالمعارف،",
            "daa-yi-ra-tul-ma-aa-rif",
            "daa-yi-ra-tul-ma-aa-rif"
          ],
          [
            "مشاور",
            "mu-shaa-wi-ri",
            "mu-shaa-wir"
          ],
          [
            "شرعی",
            "shar-ee",
            "shar-ee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "علمی",
            "il-mee-yi",
            "il-mee"
          ],
          [
            "ریاست",
            "ri-yaa-sa-ti",
            "ri-yaa-sat"
          ],
          [
            "مستقل",
            "mus-ta-qi-li",
            "mus-ta-qil"
          ],
          [
            "مطبوعات",
            "mat-boo-aat",
            "mat-boo-aat"
          ],
          [
            "نیز",
            "neez",
            "neez"
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
        "say": "qaa-ree ab-dul-laah dar qaa-lib-haa-yi-yi mukh-ta-li-fee shi'r su-roo-da, az gha-zal wa qa-see-da wa mas-na-wee gi-rif-ta taa tar-keeb-band wa mu-sam-mat wa ru-baa-ee wa do-bay-tee wa da-raa-maa-yi man-zoom, ki tar-kee-bee ast az qi-ta-aat dar wazn-haa wa qaa-fee-ya-haa mu-ta-na-wo wa mukh-ta-lif.",
        "mean": "Qari Abdullah composed in many forms, from ghazal, qasida, and masnavi to tarkib-band, musammat, rubai, do-bayti, and verse drama made from passages in varied meters and rhymes.",
        "words": [
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قالب‌های",
            "qaa-lib-haa-yi-yi",
            "qaa-lib-haa-yi"
          ],
          [
            "مختلفی",
            "mukh-ta-li-fee",
            "mukh-ta-li-fee"
          ],
          [
            "شعر",
            "shi'r",
            "shi'r"
          ],
          [
            "سروده،",
            "su-roo-da",
            "su-roo-da",
            "su-roo-dan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "غزل",
            "gha-zal",
            "gha-zal"
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
            "و",
            "wa",
            "wa"
          ],
          [
            "مثنوی",
            "mas-na-wee",
            "mas-na-wee"
          ],
          [
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "gi-rif-tan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "ترکیب‌بند",
            "tar-keeb-band",
            "tar-keeb-band"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مسمّط",
            "mu-sam-mat",
            "mu-sam-mat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رباعی",
            "ru-baa-ee",
            "ru-baa-ee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دوبیتی",
            "do-bay-tee",
            "do-bay-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "درامهٔ",
            "da-raa-maa-yi",
            "da-raa-maa"
          ],
          [
            "منظوم،",
            "man-zoom",
            "man-zoom"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "ترکیبی",
            "tar-kee-bee",
            "tar-kee-bee"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "قطعات",
            "qi-ta-aat",
            "qi-ta-aat"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "وزن‌ها",
            "wazn-haa",
            "wazn-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قافیه‌ها",
            "qaa-fee-ya-haa",
            "qaa-fee-ya-haa"
          ],
          [
            "متنوع",
            "mu-ta-na-wo",
            "mu-ta-na-wo"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مختلف.",
            "mukh-ta-lif",
            "mukh-ta-lif"
          ]
        ]
      },
      {
        "say": "gha-zal-haa-yi-yi qaa-ree ab-dul-laah az pukh-ta-gee wa ka-maa-li khaa-say bar-khor-daar ast, taa had-dee ki oo raa dar shu-maa-ri chand gha-zal-sa-raa-yi-yi nee-ma-yi aw-wa-li qar-ni cha-haa-rda-hum qa-raar may-di-had.",
        "mean": "Qari Abdullah's ghazals possess such maturity and distinction that he ranks among the few ghazal poets of the first half of the fourteenth century.",
        "words": [
          [
            "غزل‌های",
            "gha-zal-haa-yi-yi",
            "gha-zal-haa-yi"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "پخته‌گی",
            "pukh-ta-gee",
            "pukh-ta-gee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کمال",
            "ka-maa-li",
            "ka-maal"
          ],
          [
            "خاصی",
            "khaa-say",
            "khaa-say"
          ],
          [
            "برخوردار",
            "bar-khor-daar",
            "bar-khor-daar"
          ],
          [
            "است،",
            "ast",
            "ast"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "حدی",
            "had-dee",
            "had-dee"
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
            "شمار",
            "shu-maa-ri",
            "shu-maar"
          ],
          [
            "چند",
            "chand",
            "chand"
          ],
          [
            "غزل‌سرای",
            "gha-zal-sa-raa-yi-yi",
            "gha-zal-sa-raa-yi"
          ],
          [
            "نیمهٔ",
            "nee-ma-yi",
            "nee-ma"
          ],
          [
            "اول",
            "aw-wa-li",
            "aw-wal"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn"
          ],
          [
            "چهاردهم",
            "cha-haa-rda-hum",
            "cha-haa-rda-hum"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "می‌دهد.",
            "may-di-had",
            "may-di-had",
            "daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ya-kay az way-zha-gee-haa-yi-yi shi'-ri oo sa-laa-bat wa pukh-ta-gee-yi ma-aa-nee dar ay-ni sa-laa-sat wa ra-waa-nee-yi shi'r ast,",
        "mean": "One feature of his poetry is the strength and maturity of its meanings together with fluency and smoothness.",
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
            "ویژه‌گی‌های",
            "way-zha-gee-haa-yi-yi",
            "way-zha-gee-haa-yi"
          ],
          [
            "شعر",
            "shi'-ri",
            "shi'r"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "صلابت",
            "sa-laa-bat",
            "sa-laa-bat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پخته‌گی",
            "pukh-ta-gee-yi",
            "pukh-ta-gee"
          ],
          [
            "معانی",
            "ma-aa-nee",
            "ma-aa-nee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "عین",
            "ay-ni",
            "ayn"
          ],
          [
            "سلاست",
            "sa-laa-sat",
            "sa-laa-sat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روانی",
            "ra-waa-nee-yi",
            "ra-waa-nee"
          ],
          [
            "شعر",
            "shi'r",
            "shi'r"
          ],
          [
            "است،",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "ham-chu-neen kaar-bur-di waa-zha-haa, tar-kee-baat wa ta-bee-raa-ti lah-ja-yee dar shi'r raa may-ta-waan az zum-ra-yi-yi way-zha-gee-haa-yi-yi dee-ga-ri shi-ree-yi oo daa-nist, ki az na-za-ri za-baan-shi-naa-see wa mu-taa-li-a, dar ba-zay lah-ja-haa-yi-yi zu-baa-ni da-ree qaa-bi-li ta-waj-juh ast;",
        "mean": "His use of dialect words, compounds, and expressions can also be counted among his poetic features and is noteworthy for linguistic study of some Dari dialects.",
        "words": [
          [
            "همچنین",
            "ham-chu-neen",
            "ham-chu-neen"
          ],
          [
            "کاربرد",
            "kaar-bur-di",
            "kaar-burd"
          ],
          [
            "واژه‌ها،",
            "waa-zha-haa",
            "waa-zha-haa"
          ],
          [
            "ترکیبات",
            "tar-kee-baat",
            "tar-kee-baat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تعبیرات",
            "ta-bee-raa-ti",
            "ta-bee-raat"
          ],
          [
            "لهجه‌یی",
            "lah-ja-yee",
            "lah-ja-yee"
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
            "از",
            "az",
            "az"
          ],
          [
            "زمرهٔ",
            "zum-ra-yi-yi",
            "zum-ra-yi"
          ],
          [
            "ویژه‌گی‌های",
            "way-zha-gee-haa-yi-yi",
            "way-zha-gee-haa-yi"
          ],
          [
            "دیگر",
            "dee-ga-ri",
            "dee-gar"
          ],
          [
            "شعریِ",
            "shi-ree-yi",
            "shi-ree"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "دانست،",
            "daa-nist",
            "daa-nist",
            "daa-nis-tan"
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
            "نظر",
            "na-za-ri",
            "na-zar"
          ],
          [
            "زبان‌شناسی",
            "za-baan-shi-naa-see",
            "za-baan-shi-naa-see"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مطالعه،",
            "mu-taa-li-a",
            "mu-taa-li-a"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بعضی",
            "ba-zay",
            "ba-zay"
          ],
          [
            "لهجه‌های",
            "lah-ja-haa-yi-yi",
            "lah-ja-haa-yi"
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
            "قابل",
            "qaa-bi-li",
            "qaa-bil"
          ],
          [
            "توجه",
            "ta-waj-juh",
            "ta-waj-juh"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "maa-nand: ba kaar bur-da-ni “sa-baa” ba-jaa-yi “sa-baah” ba ma-naa-yi far-daa, ki yak is-ti-maa-li aa-mi-yaa-na ast.",
        "mean": "For example, he uses “saba” instead of “sabah” to mean tomorrow, a colloquial usage.",
        "words": [
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "بردن",
            "bur-da-ni",
            "bur-dan"
          ],
          [
            "«صبا»",
            "sa-baa",
            "sa-baa"
          ],
          [
            "به‌جای",
            "ba-jaa-yi",
            "ba-jaa"
          ],
          [
            "«صباح»",
            "sa-baah",
            "sa-baah"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "معنای",
            "ma-naa-yi",
            "ma-naa"
          ],
          [
            "فردا،",
            "far-daa",
            "far-daa"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
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
      }
    ],
    [
      {
        "say": "az sa-ri ko-yi tu ay but ba khu-daa khaa-ham raft",
        "mean": "From the end of your lane, O beloved, by God I shall depart;",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "سر",
            "sa-ri",
            "sar"
          ],
          [
            "کوی",
            "ko-yi",
            "koy"
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
            "بت",
            "but",
            "but"
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
            "خواهم",
            "khaa-ham",
            "khaa-ham",
            "khaas-tan"
          ],
          [
            "رفت",
            "raft",
            "raft",
            "raf-tan"
          ]
        ]
      },
      {
        "say": "raf-ta-nam gar na-shud im-roz sa-baa khaa-ham raft",
        "mean": "if I cannot leave today, tomorrow I shall depart.",
        "words": [
          [
            "رفتنم",
            "raf-ta-nam",
            "raf-ta-nam"
          ],
          [
            "گر",
            "gar",
            "gar"
          ],
          [
            "نشد",
            "na-shud",
            "na-shud"
          ],
          [
            "امروز",
            "im-roz",
            "im-roz"
          ],
          [
            "صبا",
            "sa-baa",
            "sa-baa"
          ],
          [
            "خواهم",
            "khaa-ham",
            "khaa-ham",
            "khaas-tan"
          ],
          [
            "رفت",
            "raft",
            "raft",
            "raf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "chu-naan-ki dee-da may-sha-wad, qaa-ree ab-dul-laah paa-yaa-ni sab-ki hin-dee wa sar-aa-ghaa-zi sab-ki ja-deed wa daw-ra-yi baaz-gash-ti a-da-bee wa saa-da-ni-wee-see raa dar af-ghaa-nis-taan na-maa-yin-da-gee may-ku-nad.",
        "mean": "As can be seen, Qari Abdullah represents the end of the Indian style and the beginning of the modern style, the literary return, and plain writing in Afghanistan.",
        "words": [
          [
            "چنان‌که",
            "chu-naan-ki",
            "chu-naan-ki"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-dan"
          ],
          [
            "می‌شود،",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ],
          [
            "پایان",
            "paa-yaa-ni",
            "paa-yaan"
          ],
          [
            "سبک",
            "sab-ki",
            "sabk"
          ],
          [
            "هندی",
            "hin-dee",
            "hin-dee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سرآغاز",
            "sar-aa-ghaa-zi",
            "sar-aa-ghaaz"
          ],
          [
            "سبک",
            "sab-ki",
            "sabk"
          ],
          [
            "جدید",
            "ja-deed",
            "ja-deed"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دورهٔ",
            "daw-ra-yi",
            "daw-ra"
          ],
          [
            "بازگشت",
            "baaz-gash-ti",
            "baaz-gasht",
            "baaz-gash-tan"
          ],
          [
            "ادبی",
            "a-da-bee",
            "a-da-bee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ساده‌نویسی",
            "saa-da-ni-wee-see",
            "saa-da-ni-wee-see"
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
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "نماینده‌گی",
            "na-maa-yin-da-gee",
            "na-maa-yin-da-gee"
          ],
          [
            "می‌کند.",
            "may-ku-nad",
            "may-ku-nad",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "baa kas-bi is-tiq-laal wa ta-seer-pa-zee-ree az ja-ra-yaa-ni ta-ha-wu-laa-ti a-da-bee dar man-ti-qa, gu-raa-yish ba saa-da-ni-wee-see raw-naq may-gee-rad wa daw-ra-yi baaz-gasht az ib-haam-aa-fa-ree-nee, ba saa-da-ni-wee-see aa-ghaaz may-gar-dad ki qaa-ree neez ba een ja-ra-yaan mee-pa-yu-nadad wa khud dar een maw-rid chu-neen may-go-yad:",
        "mean": "With independence and influence from regional literary changes, the tendency toward plain writing flourished; a return from obscurity to simplicity began, which Qari joined, saying:",
        "words": [
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "کسب",
            "kas-bi",
            "kasb"
          ],
          [
            "استقلال",
            "is-tiq-laal",
            "is-tiq-laal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تأثیرپذیری",
            "ta-seer-pa-zee-ree",
            "ta-seer-pa-zee-ree"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "جریان",
            "ja-ra-yaa-ni",
            "ja-ra-yaan"
          ],
          [
            "تحولات",
            "ta-ha-wu-laa-ti",
            "ta-ha-wu-laat"
          ],
          [
            "ادبی",
            "a-da-bee",
            "a-da-bee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "منطقه،",
            "man-ti-qa",
            "man-ti-qa"
          ],
          [
            "گرایش",
            "gu-raa-yish",
            "gu-raa-yish"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ساده‌نویسی",
            "saa-da-ni-wee-see",
            "saa-da-ni-wee-see"
          ],
          [
            "رونق",
            "raw-naq",
            "raw-naq"
          ],
          [
            "می‌گیرد",
            "may-gee-rad",
            "may-gee-rad",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دورهٔ",
            "daw-ra-yi",
            "daw-ra"
          ],
          [
            "بازگشت",
            "baaz-gasht",
            "baaz-gasht",
            "baaz-gash-tan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "ابهام‌آفرینی،",
            "ib-haam-aa-fa-ree-nee",
            "ib-haam-aa-fa-ree-nee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ساده‌نویسی",
            "saa-da-ni-wee-see",
            "saa-da-ni-wee-see"
          ],
          [
            "آغاز",
            "aa-ghaaz",
            "aa-ghaaz"
          ],
          [
            "می‌گردد",
            "may-gar-dad",
            "may-gar-dad",
            "gar-dee-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "نیز",
            "neez",
            "neez"
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
            "جریان",
            "ja-ra-yaan",
            "ja-ra-yaan"
          ],
          [
            "می‌پیوندد",
            "mee-pa-yu-nadad",
            "mee-pa-yu-nadad"
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
            "مورد",
            "maw-rid",
            "maw-rid"
          ],
          [
            "چنین",
            "chu-neen",
            "chu-neen"
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
        "say": "mu-heet, sab-ki qa-dee-mi man az ra-waaj an-daakht",
        "mean": "The times drove my old style out of fashion,",
        "words": [
          [
            "محیط،",
            "mu-heet",
            "mu-heet"
          ],
          [
            "سبکِ",
            "sab-ki",
            "sabk"
          ],
          [
            "قدیمِ",
            "qa-dee-mi",
            "qa-deem"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "رواج",
            "ra-waaj",
            "ra-waaj"
          ],
          [
            "انداخت",
            "an-daakht",
            "an-daakht"
          ]
        ]
      },
      {
        "say": "a-gar chi khaa-ma ba sab-ki qa-deem bood a-deeb",
        "mean": "though my pen was skilled in the old style.",
        "words": [
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "خامه",
            "khaa-ma",
            "khaa-ma"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سبکِ",
            "sab-ki",
            "sabk"
          ],
          [
            "قدیم",
            "qa-deem",
            "qa-deem"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "ادیب",
            "a-deeb",
            "a-deeb"
          ]
        ]
      },
      {
        "say": "ba-lay mu-heet chu-neen in-qi-laab-haa daa-rad",
        "mean": "Yes, the times bring such revolutions;",
        "words": [
          [
            "بلی",
            "ba-lay",
            "ba-lay"
          ],
          [
            "محیط",
            "mu-heet",
            "mu-heet"
          ],
          [
            "چنین",
            "chu-neen",
            "chu-neen"
          ],
          [
            "انقلاب‌ها",
            "in-qi-laab-haa",
            "in-qi-laab-haa"
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
        "say": "ha-may-sha tar-zi ja-haan ast een fa-raaz wa na-sheeb",
        "mean": "this rise and fall is always the way of the world.",
        "words": [
          [
            "همیشه",
            "ha-may-sha",
            "ha-may-sha"
          ],
          [
            "طرز",
            "tar-zi",
            "tarz"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "این",
            "een",
            "een"
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
            "نشیب",
            "na-sheeb",
            "na-sheeb"
          ]
        ]
      }
    ],
    [
      {
        "say": "bil-aa-khi-ra een mar-di bu-zurg wa shaa-ir wa aa-ri-fi ar-ju-man-di af-ghaa-nis-taan dar ro-zi jum-a, nu-hu-mi maa-hi sawr he-zaar-o-seh-sad-o-beest-o-do hij-ree. sham-see. pas az um-ree-yi khid-ma-ti far-han-gee wa il-mee dar kaa-bul bid-roo-di has-tee guft;",
        "mean": "Finally, this great man, poet, and honored Afghan mystic departed this life in Kabul on Friday, the ninth of Sawr 1322 SH, after a lifetime of cultural and scholarly service.",
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
            "مرد",
            "mar-di",
            "mard"
          ],
          [
            "بزرگ",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شاعر",
            "shaa-ir",
            "shaa-ir"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عارف",
            "aa-ri-fi",
            "aa-rif"
          ],
          [
            "ارجمند",
            "ar-ju-man-di",
            "ar-ju-mand"
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
            "روز",
            "ro-zi",
            "roz"
          ],
          [
            "جمعه،",
            "jum-a",
            "jum-a"
          ],
          [
            "نهم",
            "nu-hu-mi",
            "nu-hum"
          ],
          [
            "ماه",
            "maa-hi",
            "maah"
          ],
          [
            "ثور",
            "sawr",
            "sawr"
          ],
          [
            "۱۳۲۲",
            "he-zaar-o-seh-sad-o-beest-o-do",
            "he-zaar-o-seh-sad-o-beest-o-do"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree"
          ],
          [
            "ش.",
            "sham-see",
            "sham-see"
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
            "عمری",
            "um-ree-yi",
            "um-ree"
          ],
          [
            "خدمت",
            "khid-ma-ti",
            "khid-mat"
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
            "علمی",
            "il-mee",
            "il-mee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "بدرود",
            "bid-roo-di",
            "bid-rood"
          ],
          [
            "هستی",
            "has-tee",
            "has-tee",
            "bu-dan"
          ],
          [
            "گفت؛",
            "guft",
            "guft",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "am-maa aa-saa-ri pur-ba-haa-yi-yi fa-raa-waan wa ar-ju-man-dee raa ba mee-raas gu-zaasht ki jaa-wi-daa-na-gee-ash raa dar taa-ree-khi kish-war mu-saj-jal saakht.",
        "mean": "But he left many precious and valuable works that secured his lasting place in the country's history.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "پربهای",
            "pur-ba-haa-yi-yi",
            "pur-ba-haa-yi"
          ],
          [
            "فراوان",
            "fa-raa-waan",
            "fa-raa-waan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ارجمندی",
            "ar-ju-man-dee",
            "ar-ju-man-dee"
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
            "میراث",
            "mee-raas",
            "mee-raas"
          ],
          [
            "گذاشت",
            "gu-zaasht",
            "gu-zaasht",
            "gu-zaash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "جاودانه‌گی‌اش",
            "jaa-wi-daa-na-gee-ash",
            "jaa-wi-daa-na-gee-ash"
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
            "تاریخ",
            "taa-ree-khi",
            "taa-reekh"
          ],
          [
            "کشور",
            "kish-war",
            "kish-war"
          ],
          [
            "مسجل",
            "mu-saj-jal",
            "mu-saj-jal"
          ],
          [
            "ساخت.",
            "saakht",
            "saakht",
            "saakh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ma-lik-ush-shu-a-raa-yi-yi fa-qeed, ba it-ti-faa-qi aa-raa-yi-yi jum-la-yi far-zan-daa-ni een sar-za-meen, ba man-zi-la-yi-yi bar-jas-ta-ta-reen shakh-see-ya-ti il-mee wa a-da-bee-yi as-ri haa-zir ba shu-maar raf-ta ast;",
        "mean": "By the unanimous opinion of all the children of this land, the late poet laureate has been regarded as the foremost scholarly and literary figure of the present age.",
        "words": [
          [
            "ملک‌الشعرای",
            "ma-lik-ush-shu-a-raa-yi-yi",
            "ma-lik-ush-shu-a-raa-yi"
          ],
          [
            "فقید،",
            "fa-qeed",
            "fa-qeed"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "اتفاق",
            "it-ti-faa-qi",
            "it-ti-faaq"
          ],
          [
            "آرای",
            "aa-raa-yi-yi",
            "aa-raa-yi"
          ],
          [
            "جمله",
            "jum-la-yi",
            "jum-la"
          ],
          [
            "فرزندان",
            "far-zan-daa-ni",
            "far-zan-daan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "سرزمین،",
            "sar-za-meen",
            "sar-za-meen"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "منزلهٔ",
            "man-zi-la-yi-yi",
            "man-zi-la-yi"
          ],
          [
            "برجسته‌ترین",
            "bar-jas-ta-ta-reen",
            "bar-jas-ta-ta-reen"
          ],
          [
            "شخصیت",
            "shakh-see-ya-ti",
            "shakh-see-yat"
          ],
          [
            "علمی",
            "il-mee",
            "il-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادبی",
            "a-da-bee-yi",
            "a-da-bee"
          ],
          [
            "عصر",
            "as-ri",
            "asr"
          ],
          [
            "حاضر",
            "haa-zir",
            "haa-zir"
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
            "رفته",
            "raf-ta",
            "raf-ta"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "zee-raa qaa-ree mar-hoom, khi-da-maa-ti sa-zaa-waa-ri sa-taa-yi-shi bi-yaa-ree ba ma-aa-rif wa far-han-gi af-ghaa-nis-taan an-jaam daa-da, ki heech-gaah fa-raa-mo-shi khaa-ti-ri far-zan-daa-ni haq-shi-naa-si een marz-o-boom na-khaa-had shud wa naa-mi nee-kash ba-raa-yi ha-may-sha dar sa-fa-haa-ti ja-dee-di taa-ree-khi wa-tan ba kha-ti du-rusht sabt khaa-had shud.",
        "mean": "The late Qari rendered many praiseworthy services to Afghan education and culture; the grateful children of this land will never forget them, and his good name will forever be recorded in bold letters on the new pages of the nation's history.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "مرحوم،",
            "mar-hoom",
            "mar-hoom"
          ],
          [
            "خدمات",
            "khi-da-maa-ti",
            "khi-da-maat"
          ],
          [
            "سزاوار",
            "sa-zaa-waa-ri",
            "sa-zaa-waar"
          ],
          [
            "ستایش",
            "sa-taa-yi-shi",
            "sa-taa-yish"
          ],
          [
            "بسیاری",
            "bi-yaa-ree",
            "bi-yaa-ree"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "معارف",
            "ma-aa-rif",
            "ma-aa-rif"
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
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "انجام",
            "an-jaam",
            "an-jaam"
          ],
          [
            "داده،",
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
            "هیچ‌گاه",
            "heech-gaah",
            "heech-gaah"
          ],
          [
            "فراموشِ",
            "fa-raa-mo-shi",
            "fa-raa-mosh"
          ],
          [
            "خاطرِ",
            "khaa-ti-ri",
            "khaa-tir"
          ],
          [
            "فرزندان",
            "far-zan-daa-ni",
            "far-zan-daan"
          ],
          [
            "حق‌شناس",
            "haq-shi-naa-si",
            "haq-shi-naas"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "مرزوبوم",
            "marz-o-boom",
            "marz-o-boom"
          ],
          [
            "نخواهد",
            "na-khaa-had",
            "na-khaa-had"
          ],
          [
            "شد",
            "shud",
            "shud",
            "shu-dan"
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
            "نیکش",
            "nee-kash",
            "nee-kash"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "همیشه",
            "ha-may-sha",
            "ha-may-sha"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "صفحات",
            "sa-fa-haa-ti",
            "sa-fa-haat"
          ],
          [
            "جدید",
            "ja-dee-di",
            "ja-deed"
          ],
          [
            "تاریخ",
            "taa-ree-khi",
            "taa-reekh"
          ],
          [
            "وطن",
            "wa-tan",
            "wa-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خط",
            "kha-ti",
            "khat"
          ],
          [
            "درشت",
            "du-rusht",
            "du-rusht"
          ],
          [
            "ثبت",
            "sabt",
            "sabt"
          ],
          [
            "خواهد",
            "khaa-had",
            "khaa-had",
            "khaas-tan"
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
        "say": "har-chand khud az ja-haan raft; am-maa sa-mar wa haa-si-li um-rash yak ta-ba-qa-yi tah-seel-yaafta wa mu-naw-wa-ri mam-li-kat wa yak sil-si-la-yi aa-saa-ri pur-ba-haa-yi-yi il-mee wa a-da-bee-shaan ast ki ba hay-see-ya-ti yak sar-maa-ya-yi-yi bay-paa-yaan dar das-ti is-ti-faa-da-yi far-zan-daa-ni af-ghaa-nis-taan baa-qee maan-da wa nas-li im-roz wa far-daa az aan is-ti-faa-da kar-da wa ba aan if-ti-khaar khaa-hand daasht.",
        "mean": "Though he left this world, the fruit of his life is an educated and enlightened class in the country and a series of precious scholarly and literary works, an endless resource available to Afghanistan's children for present and future generations to use with pride.",
        "words": [
          [
            "هرچند",
            "har-chand",
            "har-chand"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "رفت؛",
            "raft",
            "raft",
            "raf-tan"
          ],
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "ثمر",
            "sa-mar",
            "sa-mar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حاصل",
            "haa-si-li",
            "haa-sil"
          ],
          [
            "عمرش",
            "um-rash",
            "um-rash"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "طبقهٔ",
            "ta-ba-qa-yi",
            "ta-ba-qa"
          ],
          [
            "تحصیل‌یافته",
            "tah-seel-yaafta",
            "tah-seel-yaafta"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "منور",
            "mu-naw-wa-ri",
            "mu-naw-war"
          ],
          [
            "مملکت",
            "mam-li-kat",
            "mam-li-kat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "سلسله",
            "sil-si-la-yi",
            "sil-si-la"
          ],
          [
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "پربهای",
            "pur-ba-haa-yi-yi",
            "pur-ba-haa-yi"
          ],
          [
            "علمی",
            "il-mee",
            "il-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادبی‌شان",
            "a-da-bee-shaan",
            "a-da-bee-shaan"
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
            "حیث",
            "hay-see-ya-ti",
            "hay-see-yat"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "سرمایهٔ",
            "sar-maa-ya-yi-yi",
            "sar-maa-ya-yi"
          ],
          [
            "بی‌پایان",
            "bay-paa-yaan",
            "bay-paa-yaan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دست",
            "das-ti",
            "dast"
          ],
          [
            "استفادهٔ",
            "is-ti-faa-da-yi",
            "is-ti-faa-da"
          ],
          [
            "فرزندان",
            "far-zan-daa-ni",
            "far-zan-daan"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "باقی",
            "baa-qee",
            "baa-qee"
          ],
          [
            "مانده",
            "maan-da",
            "maan-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نسل",
            "nas-li",
            "nasl"
          ],
          [
            "امروز",
            "im-roz",
            "im-roz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فردا",
            "far-daa",
            "far-daa"
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
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "افتخار",
            "if-ti-khaar",
            "if-ti-khaar"
          ],
          [
            "خواهند",
            "khaa-hand",
            "khaa-hand"
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
        "say": "aa-saa-ri ma-lik-ush-shu-a-raa qaa-ree ab-dul-laah",
        "mean": "Works of Poet Laureate Qari Abdullah",
        "words": [
          [
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "ملک‌الشعرا",
            "ma-lik-ush-shu-a-raa",
            "ma-lik-ush-shu-a-raa"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ]
        ]
      }
    ],
    [
      {
        "say": "ma-lik-ush-shu-a-raa qaa-ree ab-dul-laah az saa-bi-qa-daar-ta-reen, pur-kaar-ta-reen wa sa-mee-mee-ta-reen khid-mat-gaa-raa-ni ma-aa-rif wa mat-boo-aat dar af-ghaa-nis-taan bood ki ma-aa-ri-fi na-wee-ni af-ghaa-nis-taan baa khi-da-maa-ti oo aa-ghaaz wa i-daa-ma yaaf-ta ast.",
        "mean": "Qari Abdullah was among the longest-serving, most productive, and most sincere servants of education and the press in Afghanistan, and modern Afghan education began and continued through his service.",
        "words": [
          [
            "ملک‌الشعرا",
            "ma-lik-ush-shu-a-raa",
            "ma-lik-ush-shu-a-raa"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "سابقه‌دارترین،",
            "saa-bi-qa-daar-ta-reen",
            "saa-bi-qa-daar-ta-reen"
          ],
          [
            "پرکارترین",
            "pur-kaar-ta-reen",
            "pur-kaar-ta-reen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صمیمی‌ترین",
            "sa-mee-mee-ta-reen",
            "sa-mee-mee-ta-reen"
          ],
          [
            "خدمتگاران",
            "khid-mat-gaa-raa-ni",
            "khid-mat-gaa-raan"
          ],
          [
            "معارف",
            "ma-aa-rif",
            "ma-aa-rif"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مطبوعات",
            "mat-boo-aat",
            "mat-boo-aat"
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
            "معارف",
            "ma-aa-ri-fi",
            "ma-aa-rif"
          ],
          [
            "نوین",
            "na-wee-ni",
            "na-ween"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "خدمات",
            "khi-da-maa-ti",
            "khi-da-maat"
          ],
          [
            "او",
            "oo",
            "oo"
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
        "say": "qaa-ree dar pan-jaah-o-panj saa-li ha-yaa-ti il-mee, baa wu-joo-di ta-leem wa tad-rees dar ma-kaa-tib wa ma-daa-ri-si aa-lee, aa-saa-ri fa-raa-waa-nee az khaysh bar jaa gu-zaasht.",
        "mean": "During fifty-five years of scholarly life, while teaching in schools and higher institutions, Qari left behind many works.",
        "words": [
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "۵۵",
            "pan-jaah-o-panj",
            "pan-jaah-o-panj#digit"
          ],
          [
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "حیات",
            "ha-yaa-ti",
            "ha-yaat"
          ],
          [
            "علمی،",
            "il-mee",
            "il-mee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "وجود",
            "wu-joo-di",
            "wu-jood"
          ],
          [
            "تعلیم",
            "ta-leem",
            "ta-leem"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تدریس",
            "tad-rees",
            "tad-rees"
          ],
          [
            "در",
            "dar",
            "dar"
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
            "مدارس",
            "ma-daa-ri-si",
            "ma-daa-ris"
          ],
          [
            "عالی،",
            "aa-lee",
            "aa-lee"
          ],
          [
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "فراوانی",
            "fa-raa-waa-nee",
            "fa-raa-waa-nee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "جا",
            "jaa",
            "jaa"
          ],
          [
            "گذاشت.",
            "gu-zaasht",
            "gu-zaasht",
            "gu-zaash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "way tan-haa dar maw-zoo-yi zu-baa-ni da-ree wa das-too-ri zu-baan, hazh-da jil-di ki-taab-dar-see ba-raa-yi tad-rees dar ma-kaa-ti-bi af-ghaa-nis-taan na-wish-ta ast ki pa-da-raan wa maa-da-raa-ni maa az ta-ree-qi ha-meen ki-taab-haa khaan-dan wa na-wish-tan raa fa-raa-gi-rif-ta-and.",
        "mean": "On Dari language and grammar alone, he wrote eighteen textbooks for Afghan schools, through which our fathers and mothers learned to read and write.",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "موضوع",
            "maw-zoo-yi",
            "maw-zoo"
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
            "و",
            "wa",
            "wa"
          ],
          [
            "دستور",
            "das-too-ri",
            "das-toor"
          ],
          [
            "زبان،",
            "zu-baan",
            "zu-baan"
          ],
          [
            "هژده",
            "hazh-da",
            "hazh-da"
          ],
          [
            "جلد",
            "jil-di",
            "jild"
          ],
          [
            "کتاب‌درسی",
            "ki-taab-dar-see",
            "ki-taab-dar-see"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "تدریس",
            "tad-rees",
            "tad-rees"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مکاتب",
            "ma-kaa-ti-bi",
            "ma-kaa-tib"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
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
            "پدران",
            "pa-da-raan",
            "pa-da-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مادران",
            "maa-da-raa-ni",
            "maa-da-raan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "طریق",
            "ta-ree-qi",
            "ta-reeq"
          ],
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "کتاب‌ها",
            "ki-taab-haa",
            "ki-taab-haa"
          ],
          [
            "خواندن",
            "khaan-dan",
            "khaan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نوشتن",
            "na-wish-tan",
            "na-wish-tan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "فراگرفته‌اند.",
            "fa-raa-gi-rif-ta-and",
            "fa-raa-gi-rif-ta-and"
          ]
        ]
      },
      {
        "say": "ta-daa-di ta-lee-faat, tar-ju-ma-haa wa ma-qaa-laa-ti oo az du-sad nus-kha ta-jaa-wuz may-ku-nad, ki baysh-tar shaa-mi-li ma-zaa-mee-nee; choon: zu-baan wa a-da-bee-yaat, taz-ki-ra-ni-gaa-ree, taa-reekh, ju-ghraa-fee-ya, fal-sa-fa, man-tiq, a-qaa-yid, naq-di a-da-bee wa daa-yi-ra-yi-yi al-ma-aa-rif may-sha-wad.",
        "mean": "His writings, translations, and articles exceed two hundred works, mostly on language and literature, biographical writing, history, geography, philosophy, logic, beliefs, literary criticism, and encyclopedic studies.",
        "words": [
          [
            "تعداد",
            "ta-daa-di",
            "ta-daad"
          ],
          [
            "تألیفات،",
            "ta-lee-faat",
            "ta-lee-faat"
          ],
          [
            "ترجمه‌ها",
            "tar-ju-ma-haa",
            "tar-ju-ma-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مقالات",
            "ma-qaa-laa-ti",
            "ma-qaa-laat"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دوصد",
            "du-sad",
            "du-sad"
          ],
          [
            "نسخه",
            "nus-kha",
            "nus-kha"
          ],
          [
            "تجاوز",
            "ta-jaa-wuz",
            "ta-jaa-wuz"
          ],
          [
            "می‌کند،",
            "may-ku-nad",
            "may-ku-nad",
            "kar-dan"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "مضامینی؛",
            "ma-zaa-mee-nee",
            "ma-zaa-mee-nee"
          ],
          [
            "چون:",
            "choon",
            "choon"
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
            "ادبیات،",
            "a-da-bee-yaat",
            "a-da-bee-yaat"
          ],
          [
            "تذکره‌نگاری،",
            "taz-ki-ra-ni-gaa-ree",
            "taz-ki-ra-ni-gaa-ree"
          ],
          [
            "تاریخ،",
            "taa-reekh",
            "taa-reekh"
          ],
          [
            "جغرافیه،",
            "ju-ghraa-fee-ya",
            "ju-ghraa-fee-ya"
          ],
          [
            "فلسفه،",
            "fal-sa-fa",
            "fal-sa-fa"
          ],
          [
            "منطق،",
            "man-tiq",
            "man-tiq"
          ],
          [
            "عقاید،",
            "a-qaa-yid",
            "a-qaa-yid"
          ],
          [
            "نقد",
            "naq-di",
            "naqd"
          ],
          [
            "ادبی",
            "a-da-bee",
            "a-da-bee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دایرهٔ",
            "daa-yi-ra-yi-yi",
            "daa-yi-ra-yi"
          ],
          [
            "المعارف",
            "al-ma-aa-rif",
            "al-ma-aa-rif"
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
        "say": "az jum-la-yi mu-him-ta-reen aa-saa-ri oo may-ta-waan dee-waa-ni ash-aar, tar-ju-ma-yi man-ti-qi i-maam gha-zaa-lee, ru-waat wa fiqh-haa-yi-yi af-ghaa-nis-taan, im-laa wa u-soo-li tan-qeet, taa-reekh wa ju-ghraa-fee-yaa-yi-yi af-ghaa-nis-taan wa taz-ki-ra-yi-yi shu-a-raa-yi mu-aa-sir raa naam burd.",
        "mean": "Among his most important works are a collected volume of poetry, a translation of Imam Ghazali's Logic, Narrators and Jurists of Afghanistan, Spelling and Principles of Punctuation, History and Geography of Afghanistan, and Biographies of Contemporary Poets.",
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
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "می‌توان",
            "may-ta-waan",
            "may-ta-waan"
          ],
          [
            "دیوان",
            "dee-waa-ni",
            "dee-waan"
          ],
          [
            "اشعار،",
            "ash-aar",
            "ash-aar"
          ],
          [
            "ترجمهٔ",
            "tar-ju-ma-yi",
            "tar-ju-ma"
          ],
          [
            "منطق",
            "man-ti-qi",
            "man-tiq"
          ],
          [
            "امام",
            "i-maam",
            "i-maam"
          ],
          [
            "غزالی،",
            "gha-zaa-lee",
            "gha-zaa-lee"
          ],
          [
            "روّات",
            "ru-waat",
            "ru-waat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فقه‌های",
            "fiqh-haa-yi-yi",
            "fiqh-haa-yi"
          ],
          [
            "افغانستان،",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "املا",
            "im-laa",
            "im-laa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اصول",
            "u-soo-li",
            "u-sool"
          ],
          [
            "تنقیط،",
            "tan-qeet",
            "tan-qeet"
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
            "جغرافیای",
            "ju-ghraa-fee-yaa-yi-yi",
            "ju-ghraa-fee-yaa-yi"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تذکرهٔ",
            "taz-ki-ra-yi-yi",
            "taz-ki-ra-yi"
          ],
          [
            "شعرای",
            "shu-a-raa-yi",
            "shu-a-raa"
          ],
          [
            "معاصر",
            "mu-aa-sir",
            "mu-aa-sir"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نام",
            "naam",
            "naam"
          ],
          [
            "برد.",
            "burd",
            "burd",
            "bur-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "na-mo-na-yi ka-laa-mi qaa-ree ab-dul-laah",
        "mean": "A sample of Qari Abdullah's poetry",
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
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ]
        ]
      }
    ],
    [
      {
        "say": "du as-pa mah-mi-li layl wa na-haar mee-gu-za-rad",
        "mean": "The litter of night and day passes on two horses;",
        "words": [
          [
            "دو",
            "du",
            "du"
          ],
          [
            "اسپه",
            "as-pa",
            "as-pa"
          ],
          [
            "محمل",
            "mah-mi-li",
            "mah-mil"
          ],
          [
            "لیل",
            "layl",
            "layl"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نهار",
            "na-haar",
            "na-haar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      },
      {
        "say": "ba hosh baash ki ay-yaa-mi kaar mee-gu-za-rad",
        "mean": "be alert, for the days of action are passing.",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "هوش",
            "hosh",
            "hosh"
          ],
          [
            "باش",
            "baash",
            "baash",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "ایام",
            "ay-yaa-mi",
            "ay-yaam"
          ],
          [
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      },
      {
        "say": "gha-nee-mat ast ja-waa-nee ba fik-ri khud par-daaz",
        "mean": "Treasure youth and attend to yourself,",
        "words": [
          [
            "غنیمت",
            "gha-nee-mat",
            "gha-nee-mat"
          ],
          [
            "است",
            "ast",
            "ast"
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
            "فکر",
            "fik-ri",
            "fikr"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "پرداز",
            "par-daaz",
            "par-daaz"
          ]
        ]
      },
      {
        "say": "wa gar-na khur-ra-mee-yi een ba-haar mee-gu-za-rad",
        "mean": "or else the freshness of this spring will pass.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گرنه",
            "gar-na",
            "gar-na"
          ],
          [
            "خرمی",
            "khur-ra-mee-yi",
            "khur-ra-mee"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "بهار",
            "ba-haar",
            "ba-haar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      },
      {
        "say": "za dahr bah-ra-yi um-ri a-zeez may-yaa-bad",
        "mean": "From time, a person gains a share of precious life,",
        "words": [
          [
            "ز",
            "za",
            "za"
          ],
          [
            "دهر",
            "dahr",
            "dahr"
          ],
          [
            "بهرهٔ",
            "bah-ra-yi",
            "bah-ra"
          ],
          [
            "عمر",
            "um-ri",
            "umr"
          ],
          [
            "عزیز",
            "a-zeez",
            "a-zeez"
          ],
          [
            "می‌یابد",
            "may-yaa-bad",
            "may-yaa-bad",
            "yaaf-tan"
          ]
        ]
      },
      {
        "say": "ka-say ki zin-da-gee-yi oo ba kaar mee-gu-za-rad",
        "mean": "whose life is spent in useful work.",
        "words": [
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
            "زنده‌گی",
            "zin-da-gee-yi",
            "zin-da-gee"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      },
      {
        "say": "ba-haar raft wa cha-man shud kha-zaan wa gul af-surd",
        "mean": "Spring passed, the meadow became autumn, and the flower withered;",
        "words": [
          [
            "بهار",
            "ba-haar",
            "ba-haar"
          ],
          [
            "رفت",
            "raft",
            "raft",
            "raf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چمن",
            "cha-man",
            "cha-man"
          ],
          [
            "شد",
            "shud",
            "shud",
            "shu-dan"
          ],
          [
            "خزان",
            "kha-zaan",
            "kha-zaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گل",
            "gul",
            "gul"
          ],
          [
            "افسرد",
            "af-surd",
            "af-surd"
          ]
        ]
      },
      {
        "say": "ba gir-ya a-bar az een kooh-saar mee-gu-za-rad",
        "mean": "weeping, the cloud passes over this mountainside.",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "گریه",
            "gir-ya",
            "gir-ya"
          ],
          [
            "ابر",
            "a-bar",
            "a-bar"
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
            "کوهسار",
            "kooh-saar",
            "kooh-saar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      },
      {
        "say": "ha-was ba khaa-ti-ri af-sur-da jaa gi-rift ma-purs",
        "mean": "Desire settled in the sorrowful heart—do not ask",
        "words": [
          [
            "هوس",
            "ha-was",
            "ha-was"
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
            "افسرده",
            "af-sur-da",
            "af-sur-da"
          ],
          [
            "جا",
            "jaa",
            "jaa"
          ],
          [
            "گرفت",
            "gi-rift",
            "gi-rift",
            "gi-rif-tan"
          ],
          [
            "مپرس",
            "ma-purs",
            "ma-purs"
          ]
        ]
      },
      {
        "say": "ku-doo-ra-tee ki ba dil zeen ghu-baar mee-gu-za-rad",
        "mean": "what gloom passes into the heart from this dust.",
        "words": [
          [
            "کدورتی",
            "ku-doo-ra-tee",
            "ku-doo-ra-tee"
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
            "دل",
            "dil",
            "dil"
          ],
          [
            "زین",
            "zeen",
            "zeen"
          ],
          [
            "غبار",
            "ghu-baar",
            "ghu-baar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      },
      {
        "say": "ta-rad-du-dee ki dar een rah pi-yaa-da-yi-yi sha-tranj",
        "mean": "In the hesitation of this road, the chess pawn",
        "words": [
          [
            "ترددی",
            "ta-rad-du-dee",
            "ta-rad-du-dee"
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
            "این",
            "een",
            "een"
          ],
          [
            "ره",
            "rah",
            "rah"
          ],
          [
            "پیادهٔ",
            "pi-yaa-da-yi-yi",
            "pi-yaa-da-yi"
          ],
          [
            "شطرنج",
            "sha-tranj",
            "sha-tranj"
          ]
        ]
      },
      {
        "say": "da-reen ba-saat ga-hee az sa-waar mee-gu-za-rad",
        "mean": "sometimes passes the knight upon this board.",
        "words": [
          [
            "درین",
            "da-reen",
            "da-reen"
          ],
          [
            "بساط",
            "ba-saat",
            "ba-saat"
          ],
          [
            "گهی",
            "ga-hee",
            "ga-hee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "سوار",
            "sa-waar",
            "sa-waar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      },
      {
        "say": "wa-tan-pa-rast ni-had bar sa-ri wa-tan sa-ri khaysh",
        "mean": "The patriot lays his own head down for the homeland,",
        "words": [
          [
            "وطن‌پرست",
            "wa-tan-pa-rast",
            "wa-tan-pa-rast"
          ],
          [
            "نهد",
            "ni-had",
            "ni-had",
            "ni-haa-dan"
          ],
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
            "وطن",
            "wa-tan",
            "wa-tan"
          ],
          [
            "سرِ",
            "sa-ri",
            "sar"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ]
        ]
      },
      {
        "say": "ki gar za sar na-gu-zasht az di-yaar mee-gu-za-rad",
        "mean": "for if he does not give up his head, he will leave his land.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "گر",
            "gar",
            "gar"
          ],
          [
            "ز",
            "za",
            "za"
          ],
          [
            "سر",
            "sar",
            "sar"
          ],
          [
            "نگذشت",
            "na-gu-zasht",
            "na-gu-zasht"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دیار",
            "di-yaar",
            "di-yaar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      },
      {
        "say": "za bas ki khur-ram wa dil-kash bood ha-waa-yi wa-tan",
        "mean": "So pleasant and delightful is the air of the homeland",
        "words": [
          [
            "ز",
            "za",
            "za"
          ],
          [
            "بس",
            "bas",
            "bas"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "خرم",
            "khur-ram",
            "khur-ram"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دلکش",
            "dil-kash",
            "dil-kash"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "هوای",
            "ha-waa-yi",
            "ha-waa"
          ],
          [
            "وطن",
            "wa-tan",
            "wa-tan"
          ]
        ]
      },
      {
        "say": "na-see-mi taa-za az een kooh-saar mee-gu-za-rad",
        "mean": "that a fresh breeze passes over this mountainside.",
        "words": [
          [
            "نسیم",
            "na-see-mi",
            "na-seem"
          ],
          [
            "تازه",
            "taa-za",
            "taa-za"
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
            "کوهسار",
            "kooh-saar",
            "kooh-saar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      },
      {
        "say": "ra-sad ba man-zi-li maq-sood rah-ra-wee-yi qaa-ree",
        "mean": "Qari's traveler reaches the intended destination,",
        "words": [
          [
            "رسد",
            "ra-sad",
            "ra-sad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "منزل",
            "man-zi-li",
            "man-zil"
          ],
          [
            "مقصود",
            "maq-sood",
            "maq-sood"
          ],
          [
            "رهروی",
            "rah-ra-wee-yi",
            "rah-ra-wee"
          ],
          [
            "قاری",
            "qaa-ree",
            "qaa-ree"
          ]
        ]
      },
      {
        "say": "ki gul kha-yaal ku-nad gar ba khaar mee-gu-za-rad",
        "mean": "imagining it a flower even when he passes over thorns.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "گل",
            "gul",
            "gul"
          ],
          [
            "خیال",
            "kha-yaal",
            "kha-yaal"
          ],
          [
            "کند",
            "ku-nad",
            "ku-nad",
            "kar-dan"
          ],
          [
            "گر",
            "gar",
            "gar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خار",
            "khaar",
            "khaar"
          ],
          [
            "می‌گذرد",
            "mee-gu-za-rad",
            "mee-gu-za-rad"
          ]
        ]
      }
    ]
  ]
});
