/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 20, book pages 130-131, PDF pages 137-138 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «و...پرداخت» is written «و... پرداخت»; «نوشته‌ه‌ا» is written «نوشته‌ها»; «اندیشه‌ه‌ایش» is written «اندیشه‌هایش»; «عرصه‌ه‌ای» is written «عرصه‌های»; «حرف‌ه‌ای» is written «حرف‌های»; «ویژه‌گی‌ه‌ای» is written «ویژه‌گی‌های»; «اندیشه‌ه‌ا» is written «اندیشه‌ها»; «دغدغه‌ه‌ای» is written «دغدغه‌های»; «کتاب‌ه‌ای» is written «کتاب‌های»; «ملت‌ه‌ا» is written «ملت‌ها»; «انجمن‌ه‌ای» is written «انجمن‌های»; «اندیشه خود» is written «اندیشهٔ خود»; «و...قلم» is written «و... قلم».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-20',
  group: 'Dari · grade 9',
  label: 'Lesson 20',
  name: "ab-baas mah-mood aq-qaad",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_20.jpg',
    alt: "A painted portrait of the Egyptian writer Abbas Mahmoud al-Aqqad wearing a dark cap."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_20.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "ab-baas":                                           { fa: "عباس", mean: "Abbas" },
    "mah-mood":                                          { fa: "محمود", mean: "Mahmud" },
    "aq-qaad":                                           { fa: "عقّاد", mean: "al-Aqqad" },
    "na-wee-san-da":                                     { fa: "نویسنده", mean: "writer" },
    "bu-zurg":                                           { fa: "بزرگ", mean: "big, great" },
    "wa":                                                { fa: "و", mean: "and" },
    "a-deeb":                                            { fa: "ادیب", mean: "writer, literary scholar" },
    "ta-waa-naa":                                        { fa: "توانا", mean: "strong, able" },
    "ba":                                                { fa: "به", mean: "to" },
    "saal":                                              { fa: "سال", mean: "year" },
    "he-zaar-o-hasht-sad-o-hash-taad-o-noh-mee-laa-dee": { fa: "۱۸۸۹م", mean: "1889 AD" },
    "dar":                                               { fa: "در", mean: "in" },
    "shahr":                                             { fa: "شهر", mean: "city, town" },
    "as-waan":                                           { fa: "اسوان", mean: "Aswan" },
    "az":                                                { fa: "از", mean: "from, of" },
    "shahr-haa":                                         { fa: "شهرها", mean: "cities" },
    "mesr":                                              { fa: "مصر", mean: "Egypt" },
    "dun-yaa":                                           { fa: "دنیا", mean: "world" },
    "aa-mad":                                            { fa: "آمد", mean: "came" },
    "aa-ma-dan":                                         { fa: "آمدن", mean: "to come" },
    "he-zaar-o-noh-sad-o-shast-o-cha-haar-mee-laa-dee":  { fa: "۱۹۶۴م", mean: "1964 AD" },
    "raft":                                              { fa: "رفت", mean: "went" },
    "raf-tan":                                           { fa: "رفتن", mean: "to go" },
    "ha-maan":                                           { fa: "همان", mean: "that same, the very" },
    "dafn":                                              { fa: "دفن", mean: "burial" },
    "gar-deed":                                          { fa: "گردید", mean: "became" },
    "gar-dee-dan":                                       { fa: "گردیدن", mean: "to become, to turn" },
    "daw-ra":                                            { fa: "دوره", mean: "period" },
    "ib-ti-daa-yee":                                     { fa: "ابتدایی", mean: "primary, elementary" },
    "mu-ta-was-si-ta":                                   { fa: "متوسطه", mean: "secondary school" },
    "raa":                                               { fa: "را", mean: "marks the object of the verb" },
    "he-zaar-o-noh-sad-o-seh-mee-laa-dee":               { fa: "۱۹۰۳م", mean: "1903 AD" },
    "zaad-gaa-hash":                                     { fa: "زادگاه‌اش", mean: "his birthplace" },
    "zaad-gaah":                                         { fa: "زادگاه", mean: "birthplace" },
    "paa-yaan":                                          { fa: "پایان", mean: "end" },
    "burd":                                              { fa: "برد", mean: "took, benefited" },
    "bur-dan":                                           { fa: "بردن", mean: "to take away, to carry" },
    "daw-raan":                                          { fa: "دوران", mean: "period, era" },
    "no-ja-waa-nee":                                     { fa: "نوجوانی", mean: "adolescence, youth" },
    "shakh-see-yat":                                     { fa: "شخصیت", mean: "character, personality" },
    "qa-wee":                                            { fa: "قوی", mean: "strong" },
    "hosh":                                              { fa: "هوش", mean: "intelligence" },
    "sar-shaar":                                         { fa: "سرشار", mean: "full, overflowing" },
    "ishq":                                              { fa: "عشق", mean: "love" },
    "mu-taa-li-a":                                       { fa: "مطالعه", mean: "study, reading" },
    "so":                                                { fa: "سو", mean: "side, direction" },
    "jaa-yi-gaah":                                       { fa: "جایگاه", mean: "position, place" },
    "bu-lan-day":                                        { fa: "بلندی", mean: "high (bu-land + -ay, a: “a high …”)" },
    "ilm":                                               { fa: "علم", mean: "knowledge, learning" },
    "ma'-ri-fat":                                        { fa: "معرفت", mean: "knowledge, understanding" },
    "rah-na-moon":                                       { fa: "رهنمون", mean: "guiding" },
    "saakht":                                            { fa: "ساخت", mean: "made" },
    "saakh-tan":                                         { fa: "ساختن", mean: "to make, to build" },
    "go-na-yee":                                         { fa: "گونه‌یی", mean: "a kind; in a way" },
    "goo-na":                                            { fa: "گونه", mean: "kind, type" },
    "ki":                                                { fa: "که", mean: "that, which, who" },
    "shaykh":                                            { fa: "شیخ", mean: "sheikh - a title for a great teacher or poet" },
    "mu-ham-mad":                                        { fa: "محمد", mean: "Muhammad" },
    "ab-do":                                             { fa: "عبده", mean: "Abduh" },
    "aa-yan-da":                                         { fa: "آینده", mean: "future, coming" },
    "di-rakh-shaan":                                     { fa: "درخشان", mean: "bright, brilliant" },
    "way":                                               { fa: "وی", mean: "he, she" },
    "kha-bar":                                           { fa: "خبر", mean: "news, word" },
    "daa-da":                                            { fa: "داده", mean: "given" },
    "daa-dan":                                           { fa: "دادن", mean: "to give" },
    "bood":                                              { fa: "بود", mean: "was" },
    "bu-dan":                                            { fa: "بودن", mean: "to be" },
    "baa":                                               { fa: "با", mean: "with" },
    "e-ti-maad":                                         { fa: "اعتماد", mean: "trust" },
    "naf-see":                                           { fa: "نفسی", mean: "a self, a confidence" },
    "nafs":                                              { fa: "نفس", mean: "self" },
    "daasht":                                            { fa: "داشت", mean: "had" },
    "daash-tan":                                         { fa: "داشتن", mean: "to have" },
    "pa-ra-wa-rish":                                     { fa: "پرورش", mean: "raising, developing" },
    "fikr":                                              { fa: "فکر", mean: "thought" },
    "an-day-sha":                                        { fa: "اندیشه", mean: "thought" },
    "khud":                                              { fa: "خود", mean: "own; self" },
    "par-daakht":                                        { fa: "پرداخت", mean: "took up" },
    "par-daakh-tan":                                     { fa: "پرداختن", mean: "to busy oneself (with ba), to take up; to pay" },
    "ee-jaad":                                           { fa: "ایجاد", mean: "creating, setting up" },
    "ir-ti-baat":                                        { fa: "ارتباط", mean: "connection, contact" },
    "an-deesh-man-daan":                                 { fa: "اندیشمندان", mean: "thinkers" },
    "an-deesh-mand":                                     { fa: "اندیشمند", mean: "thinker" },
    "mu-aa-sir":                                         { fa: "معاصر", mean: "contemporary" },
    "fa-raa-gee-ree":                                    { fa: "فراگیری", mean: "learning" },
    "zu-baan":                                           { fa: "زبان", mean: "language; tongue" },
    "ing-lee-see":                                       { fa: "انگلیسی", mean: "English" },
    "aal-maa-nee":                                       { fa: "آلمانی", mean: "German" },
    "fa-raa-na-wee":                                     { fa: "فرانسوی", mean: "French" },
    "maw-rid":                                           { fa: "مورد", mean: "object, case" },
    "ta-waj-juh":                                        { fa: "توجه", mean: "attention" },
    "bu-zur-gaan":                                       { fa: "بزرگان", mean: "great people" },
    "qa-raar":                                           { fa: "قرار", mean: "place, rest" },
    "gi-rift":                                           { fa: "گرفت", mean: "took; began" },
    "gi-rif-tan":                                        { fa: "گرفتن", mean: "to take" },
    "a-laa-wa":                                          { fa: "علاوه", mean: "addition (a-laa-wa bar, besides)" },
    "bar":                                               { fa: "بر", mean: "on, upon" },
    "aan":                                               { fa: "آن", mean: "that" },
    "mu-taa-li-a-yi":                                    { fa: "مطالعهٔ", mean: "study, reading" },
    "aa-saar":                                           { fa: "آثار", mean: "works" },
    "il-mee":                                            { fa: "علمی", mean: "scholarly, scientific" },
    "a-da-bee":                                          { fa: "ادبی", mean: "literary" },
    "ma-shaa-hee-ree":                                   { fa: "مشاهیری", mean: "famous figures" },
    "ma-shaa-heer":                                      { fa: "مشاهیر", mean: "famous people" },
    "choon":                                             { fa: "چون", mean: "like, as; when; because" },
    "tol-stoy":                                          { fa: "تولستوی", mean: "Tolstoy" },
    "nee-cha":                                           { fa: "نیچه", mean: "Nietzsche" },
    "he-zaar-o-noh-sad-o-see-o-hasht-mee-laa-dee":       { fa: "۱۹۳۸م", mean: "1938 AD" },
    "uz-wi-yat":                                         { fa: "عضویت", mean: "membership" },
    "an-ju-man":                                         { fa: "انجمن", mean: "academy, association" },
    "a-ra-bee":                                          { fa: "عربی", mean: "Arab, Arabic" },
    "qaa-hi-ra":                                         { fa: "قاهره", mean: "Cairo" },
    "dar-aa-mad":                                        { fa: "درآمد", mean: "income, earnings" },
    "pas":                                               { fa: "پس", mean: "then, so" },
    "di-mashq":                                          { fa: "دمشق", mean: "Damascus" },
    "bagh-daad":                                         { fa: "بغداد", mean: "Baghdad" },
    "in-ti-khaab":                                       { fa: "انتخاب", mean: "choice" },
    "he-zaar-o-noh-sad-o-pan-jaah-o-shash":              { fa: "۱۹۵۶", mean: "1956" },
    "mee-laa-dee#letter":                                { fa: "م", say: "mee-laa-dee", mean: "AD, Christian era" },
    "uzw":                                               { fa: "عضو", mean: "member" },
    "maj-lis":                                           { fa: "مجلس", mean: "council, assembly" },
    "fu-noon":                                           { fa: "فنون", mean: "arts, skills" },
    "a-da-bee-yaat":                                     { fa: "ادبیات", mean: "literature" },
    "shud":                                              { fa: "شد", mean: "became; was" },
    "shu-dan":                                           { fa: "شدن", mean: "to become" },
    "mard":                                              { fa: "مرد", mean: "man" },
    "daa-nish-mand":                                     { fa: "دانشمند", mean: "scholar, scientist" },
    "nash-ri-yaa-tee":                                   { fa: "نشریاتی", mean: "publications" },
    "nash-ree-ya":                                       { fa: "نشریه", mean: "publication" },
    "ham-aa-nand":                                       { fa: "همانند", mean: "like, similar to" },
    "al-ah-raam":                                        { fa: "الاهرام", mean: "Al-Ahram" },
    "al-ba-laagh":                                       { fa: "البلاغ", mean: "Al-Balagh" },
    "qa-lam":                                            { fa: "قلم", mean: "pen" },
    "mee-zad":                                           { fa: "می‌زد", mean: "he wrote, struck" },
    "za-dan":                                            { fa: "زدن", mean: "to hit" },
    "ni-wish-ta-haa":                                    { fa: "نوشته‌ها", mean: "writings" },
    "na-wish-ta":                                        { fa: "نوشته", mean: "written" },
    "an-dee-sha-haa-yash":                               { fa: "اندیشه‌هایش", mean: "his ideas" },
    "pakhsh":                                            { fa: "پخش", mean: "circulation, broadcast" },
    "mee-gar-deed":                                      { fa: "می‌گردید", mean: "circulated, became" },
    "mi-yaan":                                           { fa: "میان", mean: "middle, among" },
    "mar-dum":                                           { fa: "مردم", mean: "people" },
    "shuh-rat":                                          { fa: "شهرت", mean: "fame" },
    "bi-sa-zaa-yee":                                     { fa: "بسزایی", mean: "considerable" },
    "yaaft":                                             { fa: "یافت", mean: "found" },
    "yaaf-tan":                                          { fa: "یافتن", mean: "to find" },
    "ar-sa-haa-yi":                                      { fa: "عرصه‌های", mean: "fields, areas" },
    "mukh-ta-lif":                                       { fa: "مختلف", mean: "different, various" },
    "fa-aa-lee-yat":                                     { fa: "فعالیت", mean: "activity" },
    "naqd":                                              { fa: "نقد", mean: "criticism, judging" },
    "bar-ra-see":                                        { fa: "بررسی", mean: "examination, review" },
    "af-kaar":                                           { fa: "افکار", mean: "thoughts, ideas" },
    "si-yaa-see":                                        { fa: "سیاسی", mean: "political" },
    "ij-ti-maa-ee":                                      { fa: "اجتماعی", mean: "social" },
    "jum-la":                                            { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "kaar-haa":                                          { fa: "کارها", mean: "works, jobs" },
    "oo":                                                { fa: "او", mean: "he, she; his, her" },
    "hi-saab":                                           { fa: "حساب", mean: "calculation, account" },
    "may-aa-yad":                                        { fa: "می‌آید", mean: "comes" },
    "za-mee-na-yi":                                      { fa: "زمینهٔ", mean: "ground, conditions" },
    "shi'r":                                             { fa: "شعر", mean: "poetry, poem" },
    "ja-deed":                                           { fa: "جدید", mean: "new" },
    "harf-haa-yi":                                       { fa: "حرف‌های", mean: "things said, remarks" },
    "harf":                                              { fa: "حرف", mean: "word, remark" },
    "taa-za":                                            { fa: "تازه", mean: "fresh" },
    "ta-laash":                                          { fa: "تلاش", mean: "effort, trying" },
    "may-kard":                                          { fa: "می‌کرد", mean: "used to do, kept doing" },
    "kar-dan":                                           { fa: "کردن", mean: "to do, to make" },
    "taa":                                               { fa: "تا", mean: "so that; until; to" },
    "um-mat":                                            { fa: "امت", mean: "community, nation" },
    "fit-rat":                                           { fa: "فطرت", mean: "innate nature" },
    "paak":                                              { fa: "پاک", mean: "clean" },
    "zo-laal":                                           { fa: "زلال", mean: "clear, pure" },
    "khaysh":                                            { fa: "خویش", mean: "own; self" },
    "bar-gar-daa-nad":                                   { fa: "برگرداند", mean: "return, bring back" },
    "bar-gar-daa-n-dan":                                 { fa: "برگرداندن", mean: "to return, bring back" },
    "aa-zaad-an-dee-shee":                               { fa: "آزاد‌اندیشی", mean: "free thought" },
    "fa-zaa":                                            { fa: "فضا", mean: "space, air" },
    "far-han-gee":                                       { fa: "فرهنگی", mean: "cultural" },
    "jaa-mi-a":                                          { fa: "جامعه", mean: "society" },
    "ra-waaj":                                           { fa: "رواج", mean: "spread, prevalence" },
    "di-had":                                            { fa: "دهد", mean: "give" },
    "ta-bee-at":                                         { fa: "طبیعت", mean: "nature" },
    "mu-him-ta-reen":                                    { fa: "مهمترین", mean: "most important" },
    "maw-zoo-aa-tee":                                    { fa: "موضوعاتی", mean: "subjects, topics" },
    "maw-zoo":                                           { fa: "موضوع", mean: "subject, point" },
    "ast":                                               { fa: "است", mean: "is" },
    "ash-aar":                                           { fa: "اشعار", mean: "poems, verses" },
    "jil-wa-gar":                                        { fa: "جلوه‌گر", mean: "showing, on display" },
    "hosn":                                              { fa: "حسن", mean: "goodness, beauty" },
    "see-rat":                                           { fa: "سیرت", mean: "way of life, conduct" },
    "zay-baa-yee":                                       { fa: "زیبایی", mean: "beauty" },
    "baa-ti-nee":                                        { fa: "باطنی", mean: "inner, inward" },
    "na-zar":                                            { fa: "نظر", mean: "sight, view; opinion" },
    "su-khan":                                           { fa: "سخن", mean: "speech, words" },
    "a-za-mat":                                          { fa: "عظمت", mean: "greatness, grandeur" },
    "aa-fa-ree-nish":                                    { fa: "آفرینش", mean: "creation" },
    "na-wee-san-da-gaan":                                { fa: "نویسنده‌گان", mean: "writers" },
    "fa-raa-waa-nee":                                    { fa: "فراوانی", mean: "many, abundance" },
    "way-zha-gee-haa-yi":                                { fa: "ویژه‌گی‌های", mean: "features, characteristics" },
    "guf-ta":                                            { fa: "گفته", mean: "said" },
    "guf-tan":                                           { fa: "گفتن", mean: "to say, to tell" },
    "har":                                               { fa: "هر", mean: "every" },
    "ka-daam":                                           { fa: "کدام", mean: "which, each (har ka-daam, each)" },
    "goo-sha-yee":                                       { fa: "گوشه‌یی", mean: "an aspect, a corner" },
    "go-sha":                                            { fa: "گوشه", mean: "corner" },
    "an-day-sha-haa":                                    { fa: "اندیشه‌ها", mean: "thoughts" },
    "raf-taar":                                          { fa: "رفتار", mean: "behavior, conduct" },
    "zin-da-gee":                                        { fa: "زنده‌گی", mean: "life" },
    "su-too-da-and":                                     { fa: "ستوده‌اند", mean: "they have praised" },
    "su-too-dan":                                        { fa: "ستودن", mean: "to praise" },
    "ni-ga-ri-shee":                                     { fa: "نگرشی", mean: "a viewpoint" },
    "ni-ga-rish":                                        { fa: "نگرش", mean: "viewpoint" },
    "jaa-mi'":                                           { fa: "جامع", mean: "comprehensive" },
    "taa-reekh":                                         { fa: "تاریخ", mean: "history; date" },
    "gu-zash-ta":                                        { fa: "گذشته", mean: "the past; passed" },
    "gu-zash-tan":                                       { fa: "گذشتن", mean: "to pass" },
    "is-laam":                                           { fa: "اسلام", mean: "Islam" },
    "dagh-da-gha-haa-yi":                                { fa: "دغدغه‌های", mean: "concerns" },
    "dagh-da-gha":                                       { fa: "دغدغه", mean: "concern" },
    "im-roz":                                            { fa: "امروز", mean: "today" },
    "ba-shar":                                           { fa: "بشر", mean: "humankind" },
    "daa-rad":                                           { fa: "دارد", mean: "has" },
    "ki-taab":                                           { fa: "کتاب", mean: "book" },
    "ab-qa-ree-ya":                                      { fa: "عبقریهٔ", mean: "genius of" },
    "ab-qa-ree-ya#title":                                { fa: "عبقریه", say: "ab-qa-ree-ya", mean: "genius" },
    "zin-da-gaa-nee":                                    { fa: "زنده‌گانی", mean: "life" },
    "pa-yaam-bar":                                       { fa: "پیامبر", mean: "prophet; here the Prophet Muhammad" },
    "sal-lal-laa-hu a-lay-hi wa sal-lam":                { fa: "(ص)", mean: "peace and blessings of God be upon him - said after the Prophet’s name; (ص) is short for it" },
    "mat-la-un-noor":                                    { fa: "مطلع‌النور", mean: "The Rising of the Light" },
    "sharh":                                             { fa: "شرح", mean: "explanation; as follows" },
    "taw-zeeh":                                          { fa: "توضیح", mean: "explanation" },
    "bu-ith-tu":                                         { fa: "بُعِثْتُ", mean: "Arabic: I was sent" },
    "haz-rat":                                           { fa: "حضرت", mean: "his holiness - a title of respect" },
    "par-daakh-ta":                                      { fa: "پرداخته", mean: "taken up" },
    "ri-jaal":                                           { fa: "رجال", mean: "leading men, figures" },
    "sadr":                                              { fa: "صدر", mean: "beginning, early period" },
    "neez":                                              { fa: "نیز", mean: "also, too" },
    "een":                                               { fa: "این", mean: "this" },
    "za-mee-na":                                         { fa: "زمینه", mean: "ground, conditions" },
    "ki-taab-haa":                                       { fa: "کتاب‌ها", mean: "books" },
    "as-sid-deeq":                                       { fa: "الصدّیق", mean: "al-Siddiq" },
    "umr":                                               { fa: "عمر", mean: "life, lifetime" },
    "zul-noo-rayn":                                      { fa: "ذوالنورین", mean: "Dhu al-Nurayn" },
    "us-maan":                                           { fa: "عثمان", mean: "Osman" },
    "a-lee":                                             { fa: "علی", mean: "Ali" },
    "ibn":                                               { fa: "بن", mean: "son of" },
    "a-bee":                                             { fa: "ابی", mean: "father, in the name Abu Talib" },
    "taa-lib":                                           { fa: "طالب", mean: "Talib" },
    "az-zah-raa":                                        { fa: "الزهرأ", mean: "al-Zahra" },
    "say-yid-ush-shu-ha-daa":                            { fa: "سیدالشهداء", mean: "master of the martyrs" },
    "al-hu-sayn":                                        { fa: "الحسین", mean: "al-Husayn" },
    "tah-reer":                                          { fa: "تحریر", mean: "writing" },
    "dar-aa-war-da":                                     { fa: "درآورده", mean: "produced, put into" },
    "dar-aa-war-dan":                                    { fa: "درآوردن", mean: "to produce, bring out" },
    "bar-khay":                                          { fa: "برخی", mean: "some" },
    "khi-yaa-nat":                                       { fa: "خیانت", mean: "treachery, betrayal" },
    "ji-naa-yat-kaa-raan":                               { fa: "جنایت‌کاران", mean: "criminals" },
    "ji-naa-yat-kaar":                                   { fa: "جنایت‌کار", mean: "criminal" },
    "is-ti'-maar-ga-raan":                               { fa: "استعمارگران", mean: "colonialists" },
    "is-ti'-maar-gar":                                   { fa: "استعمارگر", mean: "colonialist" },
    "dee-gar":                                           { fa: "دیگر", mean: "other; more; anymore" },
    "naqsh":                                             { fa: "نقش", mean: "role" },
    "saa-zan-da-yi":                                     { fa: "سازندهٔ", mean: "constructive" },
    "saa-zan-da":                                        { fa: "سازنده", mean: "constructive" },
    "mus-li-haan":                                       { fa: "مصلحان", mean: "reformers" },
    "mus-lih":                                           { fa: "مصلح", mean: "reformer" },
    "ab-dur-rah-maan":                                   { fa: "عبدالرحمان", mean: "Abdur Rahman" },
    "ka-waa-ki-bee":                                     { fa: "کواکبی", mean: "al-Kawakibi" },
    "rushd":                                             { fa: "رشد", mean: "growth" },
    "ta-aa-laa":                                         { fa: "تعالی", mean: "the Most High - said after God’s name" },
    "mil-lat-haa":                                       { fa: "ملت‌ها", mean: "nations" },
    "mil-lat":                                           { fa: "ملت", mean: "nation" },
    "i-shaa-ra":                                         { fa: "اشاره", mean: "indication, reference" },
    "kar-da":                                            { fa: "کرده", mean: "done" },
    "ham-chu-neen":                                      { fa: "همچنین", mean: "also, likewise" },
    "tab-yeen":                                          { fa: "تبیین", mean: "explanation, clarification" },
    "ma-saa-yil":                                        { fa: "مسایل", mean: "issues, matters" },
    "ha-sab":                                            { fa: "حسب", mean: "according to" },
    "iq-ti-zaa-yi":                                      { fa: "اقتضای", mean: "demand, requirement" },
    "iq-ti-zaa":                                         { fa: "اقتضا", mean: "demand, requirement" },
    "za-maan":                                           { fa: "زمان", mean: "time" },
    "paa-sukh-goo-yee":                                  { fa: "پاسخگویی", mean: "answering, responding" },
    "bakh-shee":                                         { fa: "بخشی", mean: "a part" },
    "bakhsh":                                            { fa: "بخش", mean: "Bakhsh; part" },
    "nee-yaaz-haa-yi":                                   { fa: "نیازهای", mean: "needs" },
    "ni-yaaz":                                           { fa: "نیاز", mean: "need" },
    "dee-nee":                                           { fa: "دینی", mean: "religious" },
    "pay-raa-moon":                                      { fa: "پیرامون", mean: "about, concerning" },
    "zan":                                               { fa: "زن", mean: "woman; wife" },
    "di-mo-ki-raa-see":                                  { fa: "دموکراسی", mean: "democracy" },
    "deen":                                              { fa: "دین", mean: "religion" },
    "mu-khaa-li-faan":                                   { fa: "مخالفان", mean: "opponents, critics" },
    "mu-khaa-lif":                                       { fa: "مخالف", mean: "opponent, critic" },
    "ni-wi-san-da-yee":                                  { fa: "نویسنده‌یی", mean: "a writer" },
    "daa-naa":                                           { fa: "دانا", mean: "wise, learned" },
    "mas-dar":                                           { fa: "مصدر", mean: "source" },
    "khi-da-maat":                                       { fa: "خدمات", mean: "services" },
    "mu-feed":                                           { fa: "مفید", mean: "useful, beneficial" },
    "ar-zin-da":                                         { fa: "ارزنده", mean: "valuable" },
    "ba-sha-ree":                                        { fa: "بشری", mean: "human" },
    "harf-haa-yee":                                      { fa: "حرف‌هایی", mean: "some things to say" },
    "besh":                                              { fa: "بیش", mean: "more" },
    "yak-sad":                                           { fa: "یکصد", mean: "one hundred" },
    "ma-qaa-la":                                         { fa: "مقاله", mean: "article" },
    "maw-zoo-aat":                                       { fa: "موضوعات", mean: "subjects, topics" },
    "mub-ram":                                           { fa: "مبرم", mean: "urgent, pressing" },
    "na-wisht":                                          { fa: "نوشت", mean: "wrote" },
    "na-wish-tan":                                       { fa: "نوشتن", mean: "to write" },
    "if-ti-khaar":                                       { fa: "افتخار", mean: "pride, glory" },
    "an-ju-man-haa-yi":                                  { fa: "انجمن‌های", mean: "academies, associations" },
    "kish-war-haa":                                      { fa: "کشورها", mean: "countries" },
    "kasb":                                              { fa: "کسب", mean: "gaining, acquisition" },
    "kard":                                              { fa: "کرد", mean: "did, made" }
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
    "say": "ab-baas mah-mood aq-qaad",
    "mean": "Abbas Mahmoud al-Aqqad",
    "words": [
      [
        "عباس",
        "ab-baas",
        "ab-baas"
      ],
      [
        "محمود",
        "mah-mood",
        "mah-mood"
      ],
      [
        "عقّاد",
        "aq-qaad",
        "aq-qaad"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "na-wee-san-da-yi bu-zurg wa a-dee-bi ta-waa-naa ab-baas mah-mood aq-qaad ba saa-li he-zaar-o-hasht-sad-o-hash-taad-o-noh-mee-laa-dee. dar shah-ri as-waan az shahr-haa-yi mesr ba dun-yaa aa-mad wa dar saa-li he-zaar-o-noh-sad-o-shast-o-cha-haar-mee-laa-dee. az dun-yaa raft wa dar ha-maan shahr dafn gar-deed.",
        "mean": "The great writer and capable man of letters Abbas Mahmoud al-Aqqad was born in 1889 in Aswan, one of the cities of Egypt, and died and was buried there in 1964.",
        "words": [
          [
            "نویسندهٔ",
            "na-wee-san-da-yi",
            "na-wee-san-da"
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
            "ادیب",
            "a-dee-bi",
            "a-deeb"
          ],
          [
            "توانا",
            "ta-waa-naa",
            "ta-waa-naa"
          ],
          [
            "عباس",
            "ab-baas",
            "ab-baas"
          ],
          [
            "محمود",
            "mah-mood",
            "mah-mood"
          ],
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
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
            "۱۸۸۹م.",
            "he-zaar-o-hasht-sad-o-hash-taad-o-noh-mee-laa-dee",
            "he-zaar-o-hasht-sad-o-hash-taad-o-noh-mee-laa-dee"
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
            "اسوان",
            "as-waan",
            "as-waan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شهرهای",
            "shahr-haa-yi",
            "shahr-haa"
          ],
          [
            "مصر",
            "mesr",
            "mesr"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دنیا",
            "dun-yaa",
            "dun-yaa"
          ],
          [
            "آمد",
            "aa-mad",
            "aa-mad",
            "aa-ma-dan"
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
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۱۹۶۴م.",
            "he-zaar-o-noh-sad-o-shast-o-cha-haar-mee-laa-dee",
            "he-zaar-o-noh-sad-o-shast-o-cha-haar-mee-laa-dee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دنیا",
            "dun-yaa",
            "dun-yaa"
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
            "در",
            "dar",
            "dar"
          ],
          [
            "همان",
            "ha-maan",
            "ha-maan"
          ],
          [
            "شهر",
            "shahr",
            "shahr"
          ],
          [
            "دفن",
            "dafn",
            "dafn"
          ],
          [
            "گردید.",
            "gar-deed",
            "gar-deed",
            "gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "aq-qaad daw-ra-yi ib-ti-daa-yee wa mu-ta-was-si-ta raa dar saa-li he-zaar-o-noh-sad-o-seh-mee-laa-dee. dar zaad-gaa-hash ba paa-yaan burd.",
        "mean": "Al-Aqqad completed primary and secondary school in his birthplace in 1903.",
        "words": [
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
          ],
          [
            "دورهٔ",
            "daw-ra-yi",
            "daw-ra"
          ],
          [
            "ابتدایی",
            "ib-ti-daa-yee",
            "ib-ti-daa-yee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "متوسطه",
            "mu-ta-was-si-ta",
            "mu-ta-was-si-ta"
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
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۱۹۰۳م.",
            "he-zaar-o-noh-sad-o-seh-mee-laa-dee",
            "he-zaar-o-noh-sad-o-seh-mee-laa-dee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زادگاه‌اش",
            "zaad-gaa-hash",
            "zaad-gaa-hash",
            "zaad-gaah"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "پایان",
            "paa-yaan",
            "paa-yaan"
          ],
          [
            "برد.",
            "burd",
            "burd",
            "bur-dan"
          ]
        ]
      },
      {
        "say": "az ha-maan daw-raa-ni no-ja-waa-nee, shakh-see-ya-ti qa-wee, ho-shi sar-shaar wa ishq ba mu-taa-li-a, aq-qaad raa ba so-yi jaa-yi-gaa-hi bu-lan-day az ilm wa ma'-ri-fat rah-na-moon saakht, ba go-na-yee ki shaykh mu-ham-mad ab-do az aa-yan-da-yi di-rakh-shaa-ni way kha-bar daa-da bood.",
        "mean": "From adolescence, his strong character, abundant intelligence and love of reading led him toward a high position in learning and knowledge, so much so that Sheikh Muhammad Abduh foretold his bright future.",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "همان",
            "ha-maan",
            "ha-maan"
          ],
          [
            "دوران",
            "daw-raa-ni",
            "daw-raan"
          ],
          [
            "نوجوانی،",
            "no-ja-waa-nee",
            "no-ja-waa-nee"
          ],
          [
            "شخصیت",
            "shakh-see-ya-ti",
            "shakh-see-yat"
          ],
          [
            "قوی،",
            "qa-wee",
            "qa-wee"
          ],
          [
            "هوش",
            "ho-shi",
            "hosh"
          ],
          [
            "سرشار",
            "sar-shaar",
            "sar-shaar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عشق",
            "ishq",
            "ishq"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مطالعه،",
            "mu-taa-li-a",
            "mu-taa-li-a"
          ],
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
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
            "سوی",
            "so-yi",
            "so"
          ],
          [
            "جایگاه",
            "jaa-yi-gaa-hi",
            "jaa-yi-gaah"
          ],
          [
            "بلندی",
            "bu-lan-day",
            "bu-lan-day"
          ],
          [
            "از",
            "az",
            "az"
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
            "معرفت",
            "ma'-ri-fat",
            "ma'-ri-fat"
          ],
          [
            "رهنمون",
            "rah-na-moon",
            "rah-na-moon"
          ],
          [
            "ساخت،",
            "saakht",
            "saakht",
            "saakh-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "گونه‌یی",
            "go-na-yee",
            "go-na-yee",
            "goo-na"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "شیخ",
            "shaykh",
            "shaykh"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "عبده",
            "ab-do",
            "ab-do"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آیندهٔ",
            "aa-yan-da-yi",
            "aa-yan-da"
          ],
          [
            "درخشان",
            "di-rakh-shaa-ni",
            "di-rakh-shaan"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "خبر",
            "kha-bar",
            "kha-bar"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "daa-dan"
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
        "say": "way baa e-ti-maad ba naf-see ki daasht ba pa-ra-wa-ri-shi fikr wa an-day-sha-yi khud par-daakht wa baa ee-jaa-di ir-ti-baat baa an-deesh-man-daa-ni mu-aa-sir wa fa-raa-gee-ree-yi zu-baa-ni ing-lee-see, aal-maa-nee wa fa-raa-na-wee, maw-ri-di ta-waj-ju-hi bu-zur-gaan qa-raar gi-rift;",
        "mean": "With his self-confidence, he cultivated his own thought and ideas, and by making contact with contemporary thinkers and learning English, German and French, he attracted the attention of prominent people.",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "اعتماد",
            "e-ti-maad",
            "e-ti-maad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "نفسی",
            "naf-see",
            "naf-see",
            "nafs"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "داشت",
            "daasht",
            "daasht",
            "daash-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "پرورش",
            "pa-ra-wa-ri-shi",
            "pa-ra-wa-rish"
          ],
          [
            "فکر",
            "fikr",
            "fikr"
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
            "خود",
            "khud",
            "khud"
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
            "ایجاد",
            "ee-jaa-di",
            "ee-jaad"
          ],
          [
            "ارتباط",
            "ir-ti-baat",
            "ir-ti-baat"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "اندیشمندان",
            "an-deesh-man-daa-ni",
            "an-deesh-man-daan",
            "an-deesh-mand"
          ],
          [
            "معاصر",
            "mu-aa-sir",
            "mu-aa-sir"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فراگیری",
            "fa-raa-gee-ree-yi",
            "fa-raa-gee-ree"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "انگلیسی،",
            "ing-lee-see",
            "ing-lee-see"
          ],
          [
            "آلمانی",
            "aal-maa-nee",
            "aal-maa-nee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرانسوی،",
            "fa-raa-na-wee",
            "fa-raa-na-wee"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "توجه",
            "ta-waj-ju-hi",
            "ta-waj-juh"
          ],
          [
            "بزرگان",
            "bu-zur-gaan",
            "bu-zur-gaan"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "گرفت؛",
            "gi-rift",
            "gi-rift",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "a-laa-wa bar aan ba mu-taa-li-a-yi-yi aa-saa-ri il-mee wa a-da-bee-yi ma-shaa-hee-ree choon tol-stoy, nee-cha wa... par-daakht.",
        "mean": "In addition, he studied the scientific and literary works of famous figures such as Tolstoy and Nietzsche.",
        "words": [
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
            "مطالعهٔ",
            "mu-taa-li-a-yi-yi",
            "mu-taa-li-a-yi"
          ],
          [
            "آثار",
            "aa-saa-ri",
            "aa-saar"
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
            "مشاهیری",
            "ma-shaa-hee-ree",
            "ma-shaa-hee-ree",
            "ma-shaa-heer"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "تولستوی،",
            "tol-stoy",
            "tol-stoy"
          ],
          [
            "نیچه",
            "nee-cha",
            "nee-cha"
          ],
          [
            "و...",
            "wa",
            "wa"
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
        "say": "dar saa-li he-zaar-o-noh-sad-o-see-o-hasht-mee-laa-dee. ba uz-wi-ya-ti an-ju-ma-ni zu-baa-ni a-ra-bee-yi qaa-hi-ra dar-aa-mad wa pas az aan ba uz-wi-ya-ti an-ju-ma-ni zu-baa-ni a-ra-bee-yi di-mashq wa bagh-daad in-ti-khaab wa dar saa-li he-zaar-o-noh-sad-o-pan-jaah-o-shash mee-laa-dee uz-wi maj-li-si fu-noon wa a-da-bee-yaat shud.",
        "mean": "In 1938 he joined Cairo's Arabic Language Academy, later joined the Arabic language academies of Damascus and Baghdad, and in 1956 became a member of the Council of Arts and Letters.",
        "words": [
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
            "۱۹۳۸م.",
            "he-zaar-o-noh-sad-o-see-o-hasht-mee-laa-dee",
            "he-zaar-o-noh-sad-o-see-o-hasht-mee-laa-dee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "عضویت",
            "uz-wi-ya-ti",
            "uz-wi-yat"
          ],
          [
            "انجمن",
            "an-ju-ma-ni",
            "an-ju-man"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "عربی",
            "a-ra-bee-yi",
            "a-ra-bee"
          ],
          [
            "قاهره",
            "qaa-hi-ra",
            "qaa-hi-ra"
          ],
          [
            "درآمد",
            "dar-aa-mad",
            "dar-aa-mad"
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
            "عضویت",
            "uz-wi-ya-ti",
            "uz-wi-yat"
          ],
          [
            "انجمن",
            "an-ju-ma-ni",
            "an-ju-man"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "عربی",
            "a-ra-bee-yi",
            "a-ra-bee"
          ],
          [
            "دمشق",
            "di-mashq",
            "di-mashq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بغداد",
            "bagh-daad",
            "bagh-daad"
          ],
          [
            "انتخاب",
            "in-ti-khaab",
            "in-ti-khaab"
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
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۱۹۵۶",
            "he-zaar-o-noh-sad-o-pan-jaah-o-shash",
            "he-zaar-o-noh-sad-o-pan-jaah-o-shash"
          ],
          [
            "م",
            "mee-laa-dee",
            "mee-laa-dee#letter"
          ],
          [
            "عضو",
            "uz-wi",
            "uzw"
          ],
          [
            "مجلس",
            "maj-li-si",
            "maj-lis"
          ],
          [
            "فنون",
            "fu-noon",
            "fu-noon"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادبیات",
            "a-da-bee-yaat",
            "a-da-bee-yaat"
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
        "say": "aq-qaad mar-di daa-nish-mand bood wa dar nash-ri-yaa-tee ham-aa-nand “al-ah-raam” wa “al-ba-laagh” wa... qa-lam mee-zad wa ni-wish-ta-haa wa an-dee-sha-haa-yash pakhsh mee-gar-deed wa dar mi-yaa-ni mar-dum shuh-ra-ti bi-sa-zaa-yee yaaft.",
        "mean": "Al-Aqqad was a learned man who wrote for publications such as Al-Ahram and Al-Balagh; his writings and ideas circulated widely, and he gained considerable fame among the people.",
        "words": [
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
          ],
          [
            "مرد",
            "mar-di",
            "mard"
          ],
          [
            "دانشمند",
            "daa-nish-mand",
            "daa-nish-mand"
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
            "در",
            "dar",
            "dar"
          ],
          [
            "نشریاتی",
            "nash-ri-yaa-tee",
            "nash-ri-yaa-tee",
            "nash-ree-ya"
          ],
          [
            "همانند",
            "ham-aa-nand",
            "ham-aa-nand"
          ],
          [
            "«الاهرام»",
            "al-ah-raam",
            "al-ah-raam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "«البلاغ»",
            "al-ba-laagh",
            "al-ba-laagh"
          ],
          [
            "و...",
            "wa",
            "wa"
          ],
          [
            "قلم",
            "qa-lam",
            "qa-lam"
          ],
          [
            "می‌زد",
            "mee-zad",
            "mee-zad",
            "za-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نوشته‌ها",
            "ni-wish-ta-haa",
            "ni-wish-ta-haa",
            "na-wish-ta"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اندیشه‌هایش",
            "an-dee-sha-haa-yash",
            "an-dee-sha-haa-yash",
            "an-day-sha"
          ],
          [
            "پخش",
            "pakhsh",
            "pakhsh"
          ],
          [
            "می‌گردید",
            "mee-gar-deed",
            "mee-gar-deed",
            "gar-dee-dan"
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
            "شهرت",
            "shuh-ra-ti",
            "shuh-rat"
          ],
          [
            "بسزایی",
            "bi-sa-zaa-yee",
            "bi-sa-zaa-yee"
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
        "say": "aq-qaad dar ar-sa-haa-yi-yi mukh-ta-li-fi a-da-bee fa-aa-lee-yat daasht wa naqd wa bar-ra-see-yi af-kaa-ri si-yaa-see, ij-ti-maa-ee wa a-da-bee az jum-la-yi kaar-haa-yi oo ba hi-saab may-aa-yad",
        "mean": "Al-Aqqad worked in various literary fields, and the criticism and examination of political, social and literary ideas are counted among his activities.",
        "words": [
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "عرصه‌های",
            "ar-sa-haa-yi-yi",
            "ar-sa-haa-yi"
          ],
          [
            "مختلف",
            "mukh-ta-li-fi",
            "mukh-ta-lif"
          ],
          [
            "ادبی",
            "a-da-bee",
            "a-da-bee"
          ],
          [
            "فعالیت",
            "fa-aa-lee-yat",
            "fa-aa-lee-yat"
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
            "نقد",
            "naqd",
            "naqd"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بررسی",
            "bar-ra-see-yi",
            "bar-ra-see"
          ],
          [
            "افکار",
            "af-kaa-ri",
            "af-kaar",
            "fikr"
          ],
          [
            "سیاسی،",
            "si-yaa-see",
            "si-yaa-see"
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
            "ادبی",
            "a-da-bee",
            "a-da-bee"
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
            "کارهای",
            "kaar-haa-yi",
            "kaar-haa"
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
            "حساب",
            "hi-saab",
            "hi-saab"
          ],
          [
            "می‌آید",
            "may-aa-yad",
            "may-aa-yad",
            "aa-ma-dan"
          ]
        ]
      },
      {
        "say": "oo dar za-mee-na-yi-yi shi'r wa a-da-bee-yaa-ti ja-dee-di a-ra-bee harf-haa-yi-yi taa-za daasht.",
        "mean": "He had new things to say about poetry and modern Arabic literature.",
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
            "زمینهٔ",
            "za-mee-na-yi-yi",
            "za-mee-na-yi"
          ],
          [
            "شعر",
            "shi'r",
            "shi'r"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "جدید",
            "ja-dee-di",
            "ja-deed"
          ],
          [
            "عربی",
            "a-ra-bee",
            "a-ra-bee"
          ],
          [
            "حرف‌های",
            "harf-haa-yi-yi",
            "harf-haa-yi",
            "harf"
          ],
          [
            "تازه",
            "taa-za",
            "taa-za"
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
        "say": "way ta-laash may-kard taa um-mat raa ba fit-ra-ti paak wa zo-laa-li khaysh bar-gar-daa-nad wa aa-zaad-an-dee-shee raa dar fa-zaa-yi il-mee wa far-han-gee-yi jaa-mi-a, ra-waaj di-had.",
        "mean": "He tried to return the community to its pure and clear nature and to spread free thought in society's scholarly and cultural life.",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "تلاش",
            "ta-laash",
            "ta-laash"
          ],
          [
            "می‌کرد",
            "may-kard",
            "may-kard",
            "kar-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "امت",
            "um-mat",
            "um-mat"
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
            "فطرت",
            "fit-ra-ti",
            "fit-rat"
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
            "زلال",
            "zo-laa-li",
            "zo-laal"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "برگرداند",
            "bar-gar-daa-nad",
            "bar-gar-daa-nad",
            "bar-gar-daa-n-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آزاد‌اندیشی",
            "aa-zaad-an-dee-shee",
            "aa-zaad-an-dee-shee"
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
            "فضای",
            "fa-zaa-yi",
            "fa-zaa"
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
            "فرهنگی",
            "far-han-gee-yi",
            "far-han-gee"
          ],
          [
            "جامعه،",
            "jaa-mi-a",
            "jaa-mi-a"
          ],
          [
            "رواج",
            "ra-waaj",
            "ra-waaj"
          ],
          [
            "دهد.",
            "di-had",
            "di-had",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "“ishq” wa “ta-bee-at” az mu-him-ta-reen maw-zoo-aa-tee ast ki dar ash-aa-ri aq-qaad jil-wa-gar ast.",
        "mean": "Love and nature are among the most important themes that appear in Al-Aqqad's poetry.",
        "words": [
          [
            "«عشق»",
            "ishq",
            "ishq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "«طبیعت»",
            "ta-bee-at",
            "ta-bee-at"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مهم‌ترین",
            "mu-him-ta-reen",
            "mu-him-ta-reen"
          ],
          [
            "موضوعاتی",
            "maw-zoo-aa-tee",
            "maw-zoo-aa-tee",
            "maw-zoo"
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
            "در",
            "dar",
            "dar"
          ],
          [
            "اشعار",
            "ash-aa-ri",
            "ash-aar"
          ],
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
          ],
          [
            "جلوه‌گر",
            "jil-wa-gar",
            "jil-wa-gar"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "dar “ishq” hos-ni see-rat wa zay-baa-yee-yi baa-ti-nee maw-ri-di na-zar ast wa dar “ta-bee-at” su-khan az a-za-ma-ti aa-fa-ree-nish ast.",
        "mean": "In “love,” goodness of character and inner beauty are intended, while “nature” speaks of the grandeur of creation.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "«عشق»",
            "ishq",
            "ishq"
          ],
          [
            "حسن",
            "hos-ni",
            "hosn"
          ],
          [
            "سیرت",
            "see-rat",
            "see-rat"
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
            "باطنی",
            "baa-ti-nee",
            "baa-ti-nee"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "نظر",
            "na-zar",
            "na-zar"
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
            "«طبیعت»",
            "ta-bee-at",
            "ta-bee-at"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "عظمت",
            "a-za-ma-ti",
            "a-za-mat"
          ],
          [
            "آفرینش",
            "aa-fa-ree-nish",
            "aa-fa-ree-nish"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "na-wee-san-da-gaa-ni fa-raa-waa-nee az way-zha-gee-haa-yi-yi shakh-see-yat wa an-day-sha-yi aq-qaad su-khan guf-ta wa har ka-daam, goo-sha-yee az an-day-sha-haa, raf-taar wa zin-da-gee-yi far-han-gee, ij-ti-maa-ee-yi way raa su-too-da-and.",
        "mean": "Many writers have discussed Al-Aqqad's character and thought, and each has praised an aspect of his ideas, conduct, and cultural and social life.",
        "words": [
          [
            "نویسنده‌گان",
            "na-wee-san-da-gaa-ni",
            "na-wee-san-da-gaan"
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
            "ویژه‌گی‌های",
            "way-zha-gee-haa-yi-yi",
            "way-zha-gee-haa-yi"
          ],
          [
            "شخصیت",
            "shakh-see-yat",
            "shakh-see-yat"
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
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
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
            "و",
            "wa",
            "wa"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "کدام،",
            "ka-daam",
            "ka-daam"
          ],
          [
            "گوشه‌یی",
            "goo-sha-yee",
            "goo-sha-yee",
            "go-sha"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اندیشه‌ها،",
            "an-day-sha-haa",
            "an-day-sha-haa"
          ],
          [
            "رفتار",
            "raf-taar",
            "raf-taar"
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
            "فرهنگی،",
            "far-han-gee",
            "far-han-gee"
          ],
          [
            "اجتماعی",
            "ij-ti-maa-ee-yi",
            "ij-ti-maa-ee"
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
            "ستوده‌اند.",
            "su-too-da-and",
            "su-too-da-and",
            "su-too-dan"
          ]
        ]
      },
      {
        "say": "aq-qaad ni-ga-ri-shee-yi jaa-mi' ba taa-ree-khi gu-zash-ta-yi is-laam wa dagh-da-gha-haa-yi-yi im-ro-zi ba-shar daa-rad.",
        "mean": "Al-Aqqad takes a broad view of Islam's past history and the concerns of humanity today.",
        "words": [
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
          ],
          [
            "نگرشی",
            "ni-ga-ri-shee-yi",
            "ni-ga-ri-shee",
            "ni-ga-rish"
          ],
          [
            "جامع",
            "jaa-mi'",
            "jaa-mi'"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تاریخ",
            "taa-ree-khi",
            "taa-reekh"
          ],
          [
            "گذشته",
            "gu-zash-ta-yi",
            "gu-zash-ta",
            "gu-zash-tan"
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
            "دغدغه‌های",
            "dagh-da-gha-haa-yi-yi",
            "dagh-da-gha-haa-yi",
            "dagh-da-gha"
          ],
          [
            "امروز",
            "im-ro-zi",
            "im-roz"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
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
        "say": "aq-qaad dar ki-taa-bi “ab-qa-ree-ya-yi mu-ham-mad” ba zin-da-gaa-nee-yi pa-yaam-bar sal-lal-laa-hu a-lay-hi wa sal-lam wa dar ki-taa-bi “mat-la-un-noor” ba sharh wa taw-zee-hi bu-ith-tu-yi aan haz-rat sal-lal-laa-hu a-lay-hi wa sal-lam par-daakh-ta ast.",
        "mean": "In The Genius of Muhammad he addressed the life of the Prophet, and in The Rising of the Light he explained the Prophet's mission.",
        "words": [
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
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
            "«عبقریهٔ",
            "ab-qa-ree-ya-yi",
            "ab-qa-ree-ya",
            "ab-qa-ree-ya#title"
          ],
          [
            "محمد»",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "زنده‌گانی",
            "zin-da-gaa-nee-yi",
            "zin-da-gaa-nee"
          ],
          [
            "پیامبر",
            "pa-yaam-bar",
            "pa-yaam-bar"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
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
            "کتاب",
            "ki-taa-bi",
            "ki-taab"
          ],
          [
            "«مطلع‌النور»",
            "mat-la-un-noor",
            "mat-la-un-noor"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "شرح",
            "sharh",
            "sharh"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "توضیح",
            "taw-zee-hi",
            "taw-zeeh"
          ],
          [
            "بعثت",
            "bu-ith-tu-yi",
            "bu-ith-tu"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "حضرت",
            "haz-rat",
            "haz-rat"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "پرداخته",
            "par-daakh-ta",
            "par-daakh-ta",
            "par-daakh-tan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "a-laa-wa bar aan, az ri-jaa-li sad-ri is-laam neez su-khan guf-ta wa dar een za-mee-na ki-taab-haa-yi “ab-qa-ree-ya as-sid-deeq”, “ab-qa-ree-ya umr”, “ab-qa-ree-ya zul-noo-rayn us-maan”, “ab-qa-ree-ya a-lee ibn a-bee taa-lib”, “ab-qa-ree-ya az-zah-raa” wa ab-qa-ree-ya say-yid-ush-shu-ha-daa al-hu-sayn ibn a-lee raa ba tah-reer dar-aa-war-da ast.",
        "mean": "He also wrote about leading figures of early Islam, producing books on Abu Bakr, Umar, Uthman, Ali ibn Abi Talib, Fatimah al-Zahra, and Husayn ibn Ali.",
        "words": [
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
            "آن،",
            "aan",
            "aan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "رجال",
            "ri-jaa-li",
            "ri-jaal"
          ],
          [
            "صدر",
            "sad-ri",
            "sadr"
          ],
          [
            "اسلام",
            "is-laam",
            "is-laam"
          ],
          [
            "نیز",
            "neez",
            "neez"
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
            "این",
            "een",
            "een"
          ],
          [
            "زمینه",
            "za-mee-na",
            "za-mee-na"
          ],
          [
            "کتاب‌های",
            "ki-taab-haa-yi",
            "ki-taab-haa"
          ],
          [
            "«عبقریه",
            "ab-qa-ree-ya",
            "ab-qa-ree-ya#title"
          ],
          [
            "الصدّیق»،",
            "as-sid-deeq",
            "as-sid-deeq"
          ],
          [
            "«عبقریه",
            "ab-qa-ree-ya",
            "ab-qa-ree-ya#title"
          ],
          [
            "عمر»،",
            "umr",
            "umr"
          ],
          [
            "«عبقریه",
            "ab-qa-ree-ya",
            "ab-qa-ree-ya#title"
          ],
          [
            "ذوالنورین",
            "zul-noo-rayn",
            "zul-noo-rayn"
          ],
          [
            "عثمان»،",
            "us-maan",
            "us-maan"
          ],
          [
            "«عبقریه",
            "ab-qa-ree-ya",
            "ab-qa-ree-ya#title"
          ],
          [
            "علی",
            "a-lee",
            "a-lee"
          ],
          [
            "بن",
            "ibn",
            "ibn"
          ],
          [
            "ابی",
            "a-bee",
            "a-bee"
          ],
          [
            "طالب»،",
            "taa-lib",
            "taa-lib"
          ],
          [
            "«عبقریه",
            "ab-qa-ree-ya",
            "ab-qa-ree-ya#title"
          ],
          [
            "الزهرأ»",
            "az-zah-raa",
            "az-zah-raa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عبقریه",
            "ab-qa-ree-ya",
            "ab-qa-ree-ya#title"
          ],
          [
            "سیدالشهداء",
            "say-yid-ush-shu-ha-daa",
            "say-yid-ush-shu-ha-daa"
          ],
          [
            "الحسین",
            "al-hu-sayn",
            "al-hu-sayn"
          ],
          [
            "بن",
            "ibn",
            "ibn"
          ],
          [
            "علی",
            "a-lee",
            "a-lee"
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
            "تحریر",
            "tah-reer",
            "tah-reer"
          ],
          [
            "درآورده",
            "dar-aa-war-da",
            "dar-aa-war-da",
            "dar-aa-war-dan"
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
        "say": "aq-qaad dar bar-khay az aa-saa-ri khud ba khi-yaa-na-ti ji-naa-yat-kaa-raan wa is-ti'-maar-ga-raan dar taa-ree-khi mu-aa-sir par-daakh-ta wa dar bar-kha-yi dee-gar ba naq-shi saa-zan-da-yi-yi mus-li-haa-ni si-yaa-see wa ij-ti-maa-ee choon ab-dur-rah-maan ka-waa-ki-bee wa mu-ham-mad ab-do dar rushd wa ta-aa-laa-yi mil-lat-haa i-shaa-ra kar-da ast.",
        "mean": "In some works Al-Aqqad treated the treachery of criminals and colonialists in modern history, and in others he pointed to the constructive role of political and social reformers such as Abd al-Rahman al-Kawakibi and Muhammad Abduh in nations' growth and advancement.",
        "words": [
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "برخی",
            "bar-khay",
            "bar-khay"
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
            "خود",
            "khud",
            "khud"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خیانت",
            "khi-yaa-na-ti",
            "khi-yaa-nat"
          ],
          [
            "جنایت‌کاران",
            "ji-naa-yat-kaa-raan",
            "ji-naa-yat-kaa-raan",
            "ji-naa-yat-kaar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استعمارگران",
            "is-ti'-maar-ga-raan",
            "is-ti'-maar-ga-raan",
            "is-ti'-maar-gar"
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
            "معاصر",
            "mu-aa-sir",
            "mu-aa-sir"
          ],
          [
            "پرداخته",
            "par-daakh-ta",
            "par-daakh-ta",
            "par-daakh-tan"
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
            "برخی",
            "bar-kha-yi",
            "bar-khay"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "نقش",
            "naq-shi",
            "naqsh"
          ],
          [
            "سازندهٔ",
            "saa-zan-da-yi-yi",
            "saa-zan-da-yi",
            "saa-zan-da"
          ],
          [
            "مصلحان",
            "mus-li-haa-ni",
            "mus-li-haan",
            "mus-lih"
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
            "چون",
            "choon",
            "choon"
          ],
          [
            "عبدالرحمان",
            "ab-dur-rah-maan",
            "ab-dur-rah-maan"
          ],
          [
            "کواکبی",
            "ka-waa-ki-bee",
            "ka-waa-ki-bee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "عبده",
            "ab-do",
            "ab-do"
          ],
          [
            "در",
            "dar",
            "dar"
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
            "تعالی",
            "ta-aa-laa-yi",
            "ta-aa-laa"
          ],
          [
            "ملت‌ها",
            "mil-lat-haa",
            "mil-lat-haa",
            "mil-lat"
          ],
          [
            "اشاره",
            "i-shaa-ra",
            "i-shaa-ra"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "kar-dan"
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
        "say": "way ham-chu-neen ba tab-yee-ni si-yaa-see-yi ma-saa-yil bar ha-sa-bi iq-ti-zaa-yi-yi za-maan wa paa-sukh-goo-yee ba bakh-shee az nee-yaaz-haa-yi-yi dee-nee wa far-han-gee-yi jaa-mi-a par-daakh-ta wa pay-raa-moo-ni maw-zoo-aa-tee; choon: “jaa-yi-gaa-hi zan dar is-laam”, “di-mo-ki-raa-see dar is-laam” wa “naq-shi saa-zan-da-yi deen wa naq-di mu-khaa-li-faa-ni aan” su-khan guf-ta ast.",
        "mean": "He also gave political explanations of issues according to the needs of the time, answered some of society's religious and cultural needs, and discussed such subjects as the position of women in Islam, democracy in Islam, and religion's constructive role and its critics.",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "هم‌چنین",
            "ham-chu-neen",
            "ham-chu-neen"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تبیین",
            "tab-yee-ni",
            "tab-yeen"
          ],
          [
            "سیاسی",
            "si-yaa-see-yi",
            "si-yaa-see"
          ],
          [
            "مسایل",
            "ma-saa-yil",
            "ma-saa-yil"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "حسب",
            "ha-sa-bi",
            "ha-sab"
          ],
          [
            "اقتضای",
            "iq-ti-zaa-yi-yi",
            "iq-ti-zaa-yi",
            "iq-ti-zaa"
          ],
          [
            "زمان",
            "za-maan",
            "za-maan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پاسخگویی",
            "paa-sukh-goo-yee",
            "paa-sukh-goo-yee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بخشی",
            "bakh-shee",
            "bakh-shee",
            "bakhsh"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نیازهای",
            "nee-yaaz-haa-yi-yi",
            "nee-yaaz-haa-yi",
            "ni-yaaz"
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
            "فرهنگی",
            "far-han-gee-yi",
            "far-han-gee"
          ],
          [
            "جامعه",
            "jaa-mi-a",
            "jaa-mi-a"
          ],
          [
            "پرداخته",
            "par-daakh-ta",
            "par-daakh-ta",
            "par-daakh-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پیرامون",
            "pay-raa-moo-ni",
            "pay-raa-moon"
          ],
          [
            "موضوعاتی؛",
            "maw-zoo-aa-tee",
            "maw-zoo-aa-tee",
            "maw-zoo"
          ],
          [
            "چون:",
            "choon",
            "choon"
          ],
          [
            "«جایگاه",
            "jaa-yi-gaa-hi",
            "jaa-yi-gaah"
          ],
          [
            "زن",
            "zan",
            "zan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اسلام»،",
            "is-laam",
            "is-laam"
          ],
          [
            "«دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اسلام»",
            "is-laam",
            "is-laam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "«نقش",
            "naq-shi",
            "naqsh"
          ],
          [
            "سازنده",
            "saa-zan-da-yi",
            "saa-zan-da"
          ],
          [
            "دین",
            "deen",
            "deen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نقد",
            "naq-di",
            "naqd"
          ],
          [
            "مخالفان",
            "mu-khaa-li-faa-ni",
            "mu-khaa-li-faan",
            "mu-khaa-lif"
          ],
          [
            "آن»",
            "aan",
            "aan"
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
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "aq-qaad ni-wi-san-da-yee-yi daa-naa wa ta-waa-naa bood wa mas-da-ri khi-da-maa-ti mu-feed wa ar-zin-da ba jaa-mi-a-yi ba-sha-ree gar-deed.",
        "mean": "Al-Aqqad was a wise and capable writer who rendered useful and valuable service to human society.",
        "words": [
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
          ],
          [
            "نویسنده‌یی",
            "ni-wi-san-da-yee-yi",
            "ni-wi-san-da-yee",
            "na-wee-san-da"
          ],
          [
            "دانا",
            "daa-naa",
            "daa-naa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "توانا",
            "ta-waa-naa",
            "ta-waa-naa"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "جامعه",
            "jaa-mi-a-yi",
            "jaa-mi-a"
          ],
          [
            "بشری",
            "ba-sha-ree",
            "ba-sha-ree"
          ],
          [
            "گردید.",
            "gar-deed",
            "gar-deed",
            "gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "aq-qaad dar za-mee-na-yi-yi shi'r wa a-da-bee-yaa-ti ja-dee-di a-ra-bee harf-haa-yee-yi taa-za daasht wa besh az yak-sad ki-taab wa ma-qaa-la pay-raa-moo-ni zu-baan wa a-da-bee-yaat, maw-zoo-aa-ti ij-ti-maa-ee wa nee-yaaz-haa-yi-yi mub-ra-mi za-maa-ni khud na-wisht wa if-ti-khaa-ri uz-wi-ya-ti an-ju-man-haa-yi-yi a-ra-bee dar kish-war-haa-yi mukh-ta-lif raa kasb kard.",
        "mean": "Al-Aqqad brought fresh ideas to modern Arabic poetry and literature, wrote more than one hundred books and articles on language, literature, social topics and his era's urgent needs, and earned the honor of membership in Arabic academies in several countries.",
        "words": [
          [
            "عقّاد",
            "aq-qaad",
            "aq-qaad"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زمینهٔ",
            "za-mee-na-yi-yi",
            "za-mee-na-yi"
          ],
          [
            "شعر",
            "shi'r",
            "shi'r"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادبیات",
            "a-da-bee-yaa-ti",
            "a-da-bee-yaat"
          ],
          [
            "جدید",
            "ja-dee-di",
            "ja-deed"
          ],
          [
            "عربی",
            "a-ra-bee",
            "a-ra-bee"
          ],
          [
            "حرف‌هایی",
            "harf-haa-yee-yi",
            "harf-haa-yee",
            "harf"
          ],
          [
            "تازه",
            "taa-za",
            "taa-za"
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
            "یکصد",
            "yak-sad",
            "yak-sad"
          ],
          [
            "کتاب",
            "ki-taab",
            "ki-taab"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مقاله",
            "ma-qaa-la",
            "ma-qaa-la"
          ],
          [
            "پیرامون",
            "pay-raa-moo-ni",
            "pay-raa-moon"
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
            "موضوعات",
            "maw-zoo-aa-ti",
            "maw-zoo-aat",
            "maw-zoo"
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
            "نیازهای",
            "nee-yaaz-haa-yi-yi",
            "nee-yaaz-haa-yi",
            "ni-yaaz"
          ],
          [
            "مبرم",
            "mub-ra-mi",
            "mub-ram"
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
            "افتخار",
            "if-ti-khaa-ri",
            "if-ti-khaar"
          ],
          [
            "عضویت",
            "uz-wi-ya-ti",
            "uz-wi-yat"
          ],
          [
            "انجمن‌های",
            "an-ju-man-haa-yi-yi",
            "an-ju-man-haa-yi",
            "an-ju-man"
          ],
          [
            "عربی",
            "a-ra-bee",
            "a-ra-bee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کشورهای",
            "kish-war-haa-yi",
            "kish-war-haa"
          ],
          [
            "مختلف",
            "mukh-ta-lif",
            "mukh-ta-lif"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "کسب",
            "kasb",
            "kasb"
          ],
          [
            "کرد.",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      }
    ]
  ]
});
