/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 24, book pages 154-155, PDF pages 161-162 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «خوبی هایت» is written «خوبی‌هایت»; «فراموش نشدنی» is written «فراموش‌نشدنی»; «بنابر این» is written «بنابراین»; «سایه محبت» is written «سایهٔ محبت»; «محبتی /» is written «محبتی/»; «سپاس گزار» is written «سپاس‌گزار».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-24',
  group: 'Dari · grade 9',
  label: 'Lesson 24',
  name: "naa-ma-yi shaa-gird ba us-taa-dash",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_24.jpg',
    alt: "A schoolboy leaning over a desk and writing carefully in a notebook."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_24.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "naa-ma":                             { fa: "نامه", mean: "book; letter" },
    "shaa-gird":                          { fa: "شاگرد", mean: "student" },
    "ba":                                 { fa: "به", mean: "to" },
    "us-taa-dash":                        { fa: "استادش", mean: "his teacher" },
    "us-taad":                            { fa: "استاد", mean: "master, teacher" },
    "mu-al-lim":                          { fa: "معلم", mean: "teacher" },
    "mihr-baan":                          { fa: "مهربان", mean: "kind" },
    "wa":                                 { fa: "و", mean: "and" },
    "bu-zurg-waa-ram":                    { fa: "بزرگوارم", mean: "my noble, my esteemed" },
    "nukhus-teen":                        { fa: "نخست", mean: "first, at first" },
    "az":                                 { fa: "از", mean: "from, of" },
    "ha-ma":                              { fa: "همه", mean: "all, every" },
    "sa-laam-haa-yi":                     { fa: "سلام‌های", mean: "greetings" },
    "sa-laam":                            { fa: "سلام", mean: "greeting, hello" },
    "garm":                               { fa: "گرم", mean: "hot, warm" },
    "ta-man-nee-yaat":                    { fa: "تمنیات", mean: "wishes" },
    "ta-man-naa":                         { fa: "تمنی", mean: "wish" },
    "nayk":                               { fa: "نیک", mean: "good" },
    "mukh-lis":                           { fa: "مخلص", mean: "devoted, sincere" },
    "taan":                               { fa: "تان", mean: "your (said to more than one)" },
    "raa":                                { fa: "را", mean: "marks the object of the verb" },
    "bi-pa-zee-reed":                     { fa: "بپذیرید", mean: "please accept" },
    "pa-zee-ruf-tan":                     { fa: "پذیرفتن", mean: "to accept" },
    "i-raa-da-mand":                      { fa: "ارادتمند", mean: "devoted, respectfully yours" },
    "shu-maa":                            { fa: "شما", mean: "you (more than one, or polite)" },
    "mow-fa-qi-yat-haa-yi":               { fa: "موفقیت‌های", mean: "successes" },
    "mu-waf-fa-qi-yat":                   { fa: "موفقیت", mean: "success" },
    "roz":                                { fa: "روز", mean: "day" },
    "af-zoon-taan":                       { fa: "افزون‌تان", mean: "increasing for you" },
    "af-zoon":                            { fa: "افزون", mean: "increasing, more" },
    "dar":                                { fa: "در", mean: "in" },
    "u-moor":                             { fa: "امور", mean: "matters" },
    "mu-haw-wa-la":                       { fa: "محوله", mean: "assigned" },
    "baar-gaah":                          { fa: "بارگاه", mean: "court, presence" },
    "khu-daa-wand":                       { fa: "خداوند", mean: "God, the Lord" },
    "yak-taa":                            { fa: "یکتا", mean: "the One, unique" },
    "bee-ham-taa":                        { fa: "بی‌همتا", mean: "incomparable" },
    "mas-a-lat":                          { fa: "مسألت", mean: "request, entreaty" },
    "daa-rad":                            { fa: "دارد", mean: "has" },
    "daash-tan":                          { fa: "داشتن", mean: "to have" },
    "muh-ta-ram":                         { fa: "محترم", mean: "respected" },
    "shab":                               { fa: "شب", mean: "night" },
    "ast":                                { fa: "است", mean: "is" },
    "tan-haa":                            { fa: "تنها", mean: "only; alone" },
    "ni-shas-ta-am":                      { fa: "نشسته‌ام", mean: "I am sitting" },
    "ni-shas-tan":                        { fa: "نشستن", mean: "to sit" },
    "roo-zhaa-yee":                       { fa: "روزهایی", mean: "days" },
    "mee-an-dee-sham":                    { fa: "می‌اندیشم", mean: "I think" },
    "an-dee-shee-dan":                    { fa: "اندیشیدن", mean: "to think" },
    "ki":                                 { fa: "که", mean: "that, which, who" },
    "zam-za-ma":                          { fa: "زمزمه", mean: "soft singing, humming" },
    "dil-na-sheen":                       { fa: "دلنشین", mean: "pleasing, delightful" },
    "tu":                                 { fa: "تو", mean: "you (one person)" },
    "sinf":                               { fa: "صنف", mean: "classroom, class" },
    "mee-pee-cheed":                      { fa: "می‌پیچید", mean: "echoed, wound" },
    "pee-chee-dan":                       { fa: "پیچیدن", mean: "to wind, echo" },
    "mu-hab-ba-tee":                      { fa: "محبتی", mean: "an affection" },
    "mu-hab-bat":                         { fa: "محبت", mean: "love, affection" },
    "hat-taa":                            { fa: "حتا", mean: "even" },
    "jum-a-haa":                          { fa: "جمعه‌ها", mean: "Fridays" },
    "jum-a":                              { fa: "جمعه", mean: "Friday" },
    "ba-raa-yi":                          { fa: "برای", mean: "for" },
    "maa":                                { fa: "ما", mean: "we" },
    "sham-ba":                            { fa: "شنبه", mean: "Saturday, school day" },
    "may-kard":                           { fa: "می‌کرد", mean: "used to do, kept doing" },
    "kar-dan":                            { fa: "کردن", mean: "to do, to make" },
    "qawl":                               { fa: "قول", mean: "word, promise" },
    "taa-lib":                            { fa: "طالب", mean: "Talib" },
    "aa-mu-lee":                          { fa: "آملی", mean: "Amuli, from Amul" },
    "dars":                               { fa: "درس", mean: "lesson" },
    "ar":                                 { fa: "ار", mean: "if" },
    "bood":                               { fa: "بود", mean: "was" },
    "bu-dan":                             { fa: "بودن", mean: "to be" },
    "mak-tab":                            { fa: "مکتب", mean: "school" },
    "aa-word":                            { fa: "آورد", mean: "brought" },
    "aa-war-dan":                         { fa: "آوردن", mean: "to bring" },
    "tifl":                               { fa: "طفل", mean: "child" },
    "gu-reez":                            { fa: "گریز", mean: "fleeing, avoidance" },
    "paa":                                { fa: "پا", mean: "foot, leg" },
    "yaa-dat":                            { fa: "یادت", mean: "your memory; do you remember" },
    "yaad":                               { fa: "یاد", mean: "memory, mention" },
    "hast":                               { fa: "هست", mean: "is, there is" },
    "chi":                                { fa: "چه", mean: "what; how" },
    "mee-guf-tee":                        { fa: "می‌گفتی", mean: "you said" },
    "guf-tan":                            { fa: "گفتن", mean: "to say, to tell" },
    "man":                                { fa: "من", mean: "I" },
    "ha-noz":                             { fa: "هنوز", mean: "still, yet" },
    "lab-khand":                          { fa: "لبخند", mean: "smile" },
    "shee-reen":                          { fa: "شیرین", mean: "Shirin, a princess in Persian legend; sweet" },
    "khaa-tir":                           { fa: "خاطر", mean: "mind, memory" },
    "daa-ram":                            { fa: "دارم", mean: "I have" },
    "waq-tay":                            { fa: "وقتی", mean: "when" },
    "mee-gu-shoo-dee":                    { fa: "می‌گشودی", mean: "you opened" },
    "gu-sho-dan":                         { fa: "گشودن", mean: "to open" },
    "mee-kar-dee":                        { fa: "می‌کردی", mean: "you did" },
    "haal":                               { fa: "حال", mean: "state, condition" },
    "mee-pur-see-dee":                    { fa: "می‌پرسیدی", mean: "you asked" },
    "pur-see-dan":                        { fa: "پرسیدن", mean: "to ask" },
    "ma-sal":                             { fa: "مثل", mean: "tale, proverb" },
    "pa-dar":                             { fa: "پدر", mean: "father" },
    "saa-ya-yi":                          { fa: "سایهٔ", mean: "shade of" },
    "saa-ya":                             { fa: "سایه", mean: "shade, shadow" },
    "khud":                               { fa: "خود", mean: "own; self" },
    "bar":                                { fa: "بر", mean: "on, upon" },
    "sar":                                { fa: "سر", mean: "head" },
    "mee-gus-ta-raa-nee-dee":             { fa: "می‌گسترانیدی", mean: "you spread" },
    "gus-ta-raa-nee-dan":                 { fa: "گسترانیدن", mean: "to spread" },
    "khur-sheed":                         { fa: "خورشید", mean: "sun" },
    "zin-da-gaa-nee":                     { fa: "زنده‌گانی", mean: "life" },
    "boo-dee":                            { fa: "بودی", mean: "had there been" },
    "gar-maa":                            { fa: "گرما", mean: "warmth" },
    "ha-raa-rat":                         { fa: "حرارت", mean: "heat" },
    "rosh-nee":                           { fa: "روشنی", mean: "light, clarification" },
    "mee-bakh-shee-dee":                  { fa: "می‌بخشیدی", mean: "you gave" },
    "bakh-shee-dan":                      { fa: "بخشیدن", mean: "to give, to grant; to forgive" },
    "gi-raa-mee":                         { fa: "گرامی", mean: "honored, dear" },
    "ar-ju-mand":                         { fa: "ارجمند", mean: "honored, noble" },
    "cheez-haa-yi":                       { fa: "چیزهای", mean: "things" },
    "cheez":                              { fa: "چیز", mean: "thing" },
    "zi-yaa-dee":                         { fa: "زیادی", mean: "many, a great amount" },
    "aa-mookh-teem":                      { fa: "آموختیم", mean: "we learned" },
    "aa-mokh-tan":                        { fa: "آموختن", mean: "to learn" },
    "mar-hoon":                           { fa: "مرهون", mean: "indebted" },
    "ilm":                                { fa: "علم", mean: "knowledge, learning" },
    "daa-nish":                           { fa: "دانش", mean: "knowledge" },
    "mar-ha-mat":                         { fa: "مرحمت", mean: "kindness, favor" },
    "bu-zurg-waa-ree":                    { fa: "بزرگواری", mean: "generosity, greatness" },
    "has-teem":                           { fa: "هستیم", mean: "we are" },
    "iz-haar":                            { fa: "اظهار", mean: "expression, declaring" },
    "im-ti-naan":                         { fa: "امتنان", mean: "gratitude" },
    "shuk-raan":                          { fa: "شکران", mean: "thanks" },
    "mee-na-maa-yeem":                    { fa: "می‌نماییم", mean: "we express, do" },
    "na-mo-dan":                          { fa: "نمودن", mean: "to do; to show; to seem" },
    "pa-yaam-bar":                        { fa: "پیامبر", mean: "prophet; here the Prophet Muhammad" },
    "khu-daa":                            { fa: "خدا", mean: "God" },
    "sal-lal-laa-hu a-lay-hi wa sal-lam": { fa: "(ص)", mean: "peace and blessings of God be upon him - said after the Prophet’s name; (ص) is short for it" },
    "zay-baa":                            { fa: "زیبا", mean: "beautiful" },
    "far-moo-da":                         { fa: "فرموده", mean: "said (polite)" },
    "far-moo-dan":                        { fa: "فرمودن", mean: "to say, to command (polite)" },
    "lam":                                { fa: "لم", mean: "Arabic: not, did not" },
    "yash-ku-run-naas":                   { fa: "یشکرالناس", mean: "Arabic: thanks people" },
    "yash-ku-rul-laah":                   { fa: "یشکراالله", mean: "Arabic: thanks God" },
    "ka-say":                             { fa: "کسی", mean: "someone" },
    "shukr":                              { fa: "شکر", mean: "thanks, gratitude" },
    "mar-dum":                            { fa: "مردم", mean: "people" },
    "ba-jaa":                             { fa: "به‌جا", mean: "in place" },
    "na-yaa-warad":                       { fa: "نیاورد", mean: "does not perform, bring" },
    "ham":                                { fa: "هم", mean: "also, too" },
    "si-paas-gu-zaar":                    { fa: "سپاس‌گزار", mean: "grateful" },
    "neest":                              { fa: "نیست", mean: "is not" },
    "ya-kay":                             { fa: "یکی", mean: "one" },
    "bu-zur-gaan":                        { fa: "بزرگان", mean: "great people" },
    "khu-daa-yash":                       { fa: "خدایش", mean: "his God; may God" },
    "bee-a-mur-zad":                      { fa: "بیامرزد", mean: "may forgive, bless" },
    "aa-mur-zee-dan":                     { fa: "آمرزیدن", mean: "to forgive" },
    "ha-may-sha":                         { fa: "همیشه", mean: "always" },
    "ih-ti-raam":                         { fa: "احترام", mean: "respect" },
    "shukr-gu-zaa-ree":                   { fa: "شکرگزاری", mean: "gratitude, giving thanks" },
    "ta-keed":                            { fa: "تأکید", mean: "emphasis" },
    "mee-war-zeed":                       { fa: "می‌ورزید", mean: "practiced, showed" },
    "war-zee-dan":                        { fa: "ورزیدن", mean: "to practice; (with da-reegh) to hold back" },
    "noor":                               { fa: "نور", mean: "light" },
    "qu-loob":                            { fa: "قلوب", mean: "hearts" },
    "ab-saar":                            { fa: "ابصار", mean: "eyes, sight" },
    "min-nat":                            { fa: "منت", mean: "favor, obligation" },
    "choon":                              { fa: "چون", mean: "like, as; when; because" },
    "us-taa-daan":                        { fa: "استادان", mean: "masters, teachers" },
    "bu-zurg-waar":                       { fa: "بزرگوار", mean: "esteemed, noble" },
    "mee-daa-nist":                       { fa: "می‌دانست", mean: "regarded, knew" },
    "daa-nis-tan":                        { fa: "دانستن", mean: "to know" },
    "dos-taan":                           { fa: "دوستان", mean: "friends" },
    "yaa-dash":                           { fa: "یادش", mean: "his memory" },
    "khayr":                              { fa: "خیر", mean: "good, good deeds" },
    "baad":                               { fa: "باد", mean: "wind" },
    "may-guft":                           { fa: "می‌گفت", mean: "spoke, was saying" },
    "daar":                               { fa: "دار", mean: "possessions, having" },
    "na-daa-ram":                         { fa: "ندارم", mean: "I do not have" },
    "ar-ju-man-dam":                      { fa: "ارجمندم", mean: "my honored one" },
    "may-baa-shad":                       { fa: "می‌باشد", mean: "is" },
    "mad-yoon":                           { fa: "مدیون", mean: "indebted" },
    "mee-baa-sham":                       { fa: "می‌باشم", mean: "I am" },
    "dee-ga-raan":                        { fa: "دیگران", mean: "others" },
    "neez":                               { fa: "نیز", mean: "also, too" },
    "taw-si-ya":                          { fa: "توصیه", mean: "recommendation" },
    "may-ku-nam":                         { fa: "می‌کنم", mean: "I do, I add" },
    "su-kha-naan":                        { fa: "سخنان", mean: "words, statements" },
    "su-khan":                            { fa: "سخن", mean: "speech, words" },
    "muh-ta-ram-shaan":                   { fa: "محترم‌شان", mean: "their respected" },
    "gosh":                               { fa: "گوش", mean: "ear" },
    "fa-raa":                             { fa: "فرا", mean: "forth, beyond" },
    "di-hand":                            { fa: "دهند", mean: "they give" },
    "daa-dan":                            { fa: "دادن", mean: "to give" },
    "raah":                               { fa: "راه", mean: "way, road" },
    "rasm":                               { fa: "رسم", mean: "custom, way" },
    "zin-da-gee":                         { fa: "زنده‌گی", mean: "life" },
    "way":                                { fa: "وی", mean: "he, she" },
    "fa-raa-gee-rand":                    { fa: "فراگیرند", mean: "they learn" },
    "fa-raa-gi-rif-tan":                  { fa: "فراگرفتن", mean: "to learn" },
    "maast":                              { fa: "ماست", mean: "yogurt" },
    "taa":                                { fa: "تا", mean: "so that; until; to" },
    "mam-noon":                           { fa: "ممنون", mean: "thankful" },
    "mu-ta-shak-kir":                     { fa: "متشکر", mean: "grateful" },
    "baa-sheem":                          { fa: "باشیم", mean: "we may be, let us be" },
    "aa-moo-za-haa-yi":                   { fa: "آموزه‌های", mean: "teachings" },
    "aa-moo-za":                          { fa: "آموزه", mean: "teaching" },
    "mu-feed":                            { fa: "مفید", mean: "useful, beneficial" },
    "ar-zan-da-taan":                     { fa: "ارزندهٔ‌تان", mean: "your valuable" },
    "ar-zin-da":                          { fa: "ارزنده", mean: "valuable" },
    "di-heem":                            { fa: "دهیم", mean: "we give" },
    "si-kan-dar":                         { fa: "سکندر", mean: "Alexander the Great, whose mirror was said to show the whole world" },
    "ka-beer":                            { fa: "کبیر", mean: "great" },
    "pur-see-dand":                       { fa: "پرسیدند", mean: "they asked" },
    "pi-da-rat":                          { fa: "پدرت", mean: "your father" },
    "dost":                               { fa: "دوست", mean: "friend" },
    "daa-ree":                            { fa: "داری", mean: "keeping (khud daa-ree, holding oneself back)" },
    "yaa":                                { fa: "یا", mean: "or" },
    "mu-al-li-mat":                       { fa: "معلمت", mean: "your teacher" },
    "oo":                                 { fa: "او", mean: "he, she; his, her" },
    "ja-waab":                            { fa: "جواب", mean: "answer" },
    "guft":                               { fa: "گفت", mean: "said" },
    "pi-da-ram":                          { fa: "پدرم", mean: "my father" },
    "tan":                                { fa: "تن", mean: "body" },
    "maal":                               { fa: "مال", mean: "wealth, property" },
    "oost":                               { fa: "اوست", mean: "it is his, it is he" },
    "am-maa":                             { fa: "اما", mean: "but" },
    "rooh":                               { fa: "روح", mean: "spirit, soul" },
    "par-war-da-yi":                      { fa: "پروردهٔ", mean: "raised by, product of" },
    "par-war-da":                         { fa: "پرورده", mean: "raised, nurtured" },
    "ba-naa-ba-raan":                     { fa: "بنابراین", mean: "therefore" },
    "ta-qad-dum":                         { fa: "تقدم", mean: "precedence" },
    "mu-ta-shak-ki-ram":                  { fa: "متشکرم", mean: "I am grateful" },
    "een":                                { fa: "این", mean: "this" },
    "bi-si-yaar":                         { fa: "بسیار", mean: "much, very" },
    "cheez-haa":                          { fa: "چیزها", mean: "things" },
    "aa-mokh-tam":                        { fa: "آموختم", mean: "I learned" },
    "guf-tee":                            { fa: "گفتی", mean: "you said" },
    "daa-raa-yi":                         { fa: "دارای", mean: "having, possessing" },
    "akh-laaq":                           { fa: "اخلاق", mean: "character, manners, morals" },
    "khoob":                              { fa: "خوب", mean: "good" },
    "ha-mee-da":                          { fa: "حمیده", mean: "praiseworthy" },
    "baa-sheed":                          { fa: "باشید", mean: "be" },
    "mih-ra-baa-nee":                     { fa: "مهربانی", mean: "kindness" },
    "u-too-fat":                          { fa: "عطوفت", mean: "compassion" },
    "dast":                               { fa: "دست", mean: "hand" },
    "na-di-heed":                         { fa: "ندهید", mean: "do not give, lose" },
    "bi-khaa-need":                       { fa: "بخوانید", mean: "study, read" },
    "khaan-dan":                          { fa: "خواندن", mean: "to read, to recite" },
    "bi-doon":                            { fa: "بدون", mean: "without" },
    "na-may-ta-waan":                     { fa: "نمی‌توان", mean: "one cannot" },
    "ra-seed":                            { fa: "رسید", mean: "arrived, reached" },
    "ra-see-dan":                         { fa: "رسیدن", mean: "to arrive, to reach" },
    "mas-dar":                            { fa: "مصدر", mean: "source" },
    "khi-da-maat":                        { fa: "خدمات", mean: "services" },
    "jaa-mi-a":                           { fa: "جامعه", mean: "society" },
    "shud":                               { fa: "شد", mean: "became; was" },
    "shu-dan":                            { fa: "شدن", mean: "to become" },
    "shab-haa":                           { fa: "شب‌ها", mean: "nights" },
    "khaan-dam":                          { fa: "خواندم", mean: "I read" },
    "bee-khaa-bee":                       { fa: "بی‌خوابی", mean: "sleeplessness" },
    "ka-shee-dam":                        { fa: "کشیدم", mean: "I endured" },
    "ka-shee-dan":                        { fa: "کشیدن", mean: "to pull; to bear" },
    "ak-noon":                            { fa: "اکنون", mean: "now" },
    "na-tee-ja":                          { fa: "نتیجه", mean: "result" },
    "aan":                                { fa: "آن", mean: "that" },
    "na-saa-yih":                         { fa: "نصایح", mean: "advice" },
    "na-see-hat":                         { fa: "نصیحت", mean: "advice" },
    "sood-man-dat":                       { fa: "سودمندت", mean: "your useful" },
    "sood-mand":                          { fa: "سودمند", mean: "useful" },
    "mee-bee-nam":                        { fa: "می‌بینم", mean: "I see" },
    "dee-dan":                            { fa: "دیدن", mean: "to see; seeing" },
    "a-zeez":                             { fa: "عزیز", mean: "Aziz; dear" },
    "bu-zurg":                            { fa: "بزرگ", mean: "big, great" },
    "shu-da-am":                          { fa: "شده‌ام", mean: "I have become; after a word like fi-ris-taa-da, I have been …" },
    "khoo-bee-haa-yat":                   { fa: "خوبی‌هایت", mean: "your goodness" },
    "khoo-bee":                           { fa: "خوبی", mean: "goodness" },
    "fa-raa-mosh":                        { fa: "فراموش", mean: "forgotten" },
    "na-mee-ku-nam":                      { fa: "نمی‌کنم", mean: "I do not" },
    "jum-la-haa":                         { fa: "جمله‌ها", mean: "sentences" },
    "zee-baa-yat":                        { fa: "زیبایت", mean: "your beautiful one" },
    "ni-wish-tam":                        { fa: "نوشتم", mean: "I wrote" },
    "na-wish-tan":                        { fa: "نوشتن", mean: "to write" },
    "taa-blo-yi":                         { fa: "تابلوی", mean: "sign, picture" },
    "taa-blo":                            { fa: "تابلو", mean: "sign, picture" },
    "aa-moo-zan-da":                      { fa: "آموزنده", mean: "educational, instructive" },
    "fa-raa-moosh-na-shud-nee":           { fa: "فراموش‌نشدنی", mean: "unforgettable" },
    "dee-waar":                           { fa: "دیوار", mean: "wall" },
    "khaa-na":                            { fa: "خانه", mean: "house, home" },
    "nasb":                               { fa: "نصب", mean: "installation, setting up" },
    "kar-dam":                            { fa: "کردم", mean: "I did" },
    "baa":                                { fa: "با", mean: "with" },
    "bi-khan-deem":                       { fa: "بخندیم", mean: "let us laugh" },
    "khan-dee-dan":                       { fa: "خندیدن", mean: "to laugh" },
    "na-khan-deem":                       { fa: "نخندیم", mean: "let us not laugh" },
    "has-tee":                            { fa: "هستی", mean: "you are" },
    "mee-koo-sham":                       { fa: "می‌کوشم", mean: "I strive" },
    "ko-shee-dan":                        { fa: "کوشیدن", mean: "to try" },
    "rawsh":                              { fa: "روش", mean: "method, way" },
    "aa-moo-za-haa-yat":                  { fa: "آموزه‌هایت", mean: "your teachings" },
    "du-n-baal":                          { fa: "دنبال", mean: "pursuit; following" },
    "ku-nam":                             { fa: "کنم", mean: "I put; I do" }
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
    "say": "naa-ma-yi shaa-gird ba us-taa-dash",
    "mean": "A student's letter to his teacher",
    "words": [
      [
        "نامهٔ",
        "naa-ma-yi",
        "naa-ma"
      ],
      [
        "شاگرد",
        "shaa-gird",
        "shaa-gird"
      ],
      [
        "به",
        "ba",
        "ba"
      ],
      [
        "استادش",
        "us-taa-dash",
        "us-taa-dash",
        "us-taad"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "mu-al-li-mi mihr-baan wa bu-zurg-waa-ram,",
        "mean": "My kind and esteemed teacher,",
        "words": [
          [
            "معلم",
            "mu-al-li-mi",
            "mu-al-lim"
          ],
          [
            "مهربان",
            "mihr-baan",
            "mihr-baan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بزرگوارم،",
            "bu-zurg-waa-ram",
            "bu-zurg-waa-ram"
          ]
        ]
      }
    ],
    [
      {
        "say": "nukhus-teen az ha-ma sa-laam-haa-yi-yi garm wa ta-man-nee-yaa-ti nay-ki shaa-gir-di mukh-li-si taan raa bi-pa-zee-reed.",
        "mean": "First, please accept the warm greetings and good wishes of your devoted student.",
        "words": [
          [
            "نخست",
            "nukhus-teen",
            "nukhus-teen"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "سلام‌های",
            "sa-laam-haa-yi-yi",
            "sa-laam-haa-yi",
            "sa-laam"
          ],
          [
            "گرم",
            "garm",
            "garm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تمنیات",
            "ta-man-nee-yaa-ti",
            "ta-man-nee-yaat",
            "ta-man-naa"
          ],
          [
            "نیک",
            "nay-ki",
            "nayk"
          ],
          [
            "شاگرد",
            "shaa-gir-di",
            "shaa-gird"
          ],
          [
            "مخلص",
            "mukh-li-si",
            "mukh-lis"
          ],
          [
            "تان",
            "taan",
            "taan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بپذیرید.",
            "bi-pa-zee-reed",
            "bi-pa-zee-reed",
            "pa-zee-ruf-tan"
          ]
        ]
      },
      {
        "say": "i-raa-da-man-di shu-maa mow-fa-qi-yat-haa-yi-yi roz af-zoon-taan raa dar u-moo-ri mu-haw-wa-la az baar-gaa-hi khu-daa-wan-di yak-taa-yi bee-ham-taa mas-a-lat daa-rad.",
        "mean": "Your devoted student asks the court of the one and incomparable God to grant you ever-increasing success in your assigned duties.",
        "words": [
          [
            "ارادتمند",
            "i-raa-da-man-di",
            "i-raa-da-mand"
          ],
          [
            "شما",
            "shu-maa",
            "shu-maa"
          ],
          [
            "موفقیت‌های",
            "mow-fa-qi-yat-haa-yi-yi",
            "mow-fa-qi-yat-haa-yi",
            "mu-waf-fa-qi-yat"
          ],
          [
            "روز",
            "roz",
            "roz"
          ],
          [
            "افزون‌تان",
            "af-zoon-taan",
            "af-zoon-taan",
            "af-zoon"
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
            "امور",
            "u-moo-ri",
            "u-moor"
          ],
          [
            "محوله",
            "mu-haw-wa-la",
            "mu-haw-wa-la"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "بارگاه",
            "baar-gaa-hi",
            "baar-gaah"
          ],
          [
            "خداوند",
            "khu-daa-wan-di",
            "khu-daa-wand"
          ],
          [
            "یکتای",
            "yak-taa-yi",
            "yak-taa"
          ],
          [
            "بی‌همتا",
            "bee-ham-taa",
            "bee-ham-taa"
          ],
          [
            "مسألت",
            "mas-a-lat",
            "mas-a-lat"
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
        "say": "us-taa-di muh-ta-ram wa bu-zurg-waa-ram!",
        "mean": "My respected and esteemed teacher!",
        "words": [
          [
            "استاد",
            "us-taa-di",
            "us-taad"
          ],
          [
            "محترم",
            "muh-ta-ram",
            "muh-ta-ram"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بزرگوارم!",
            "bu-zurg-waa-ram",
            "bu-zurg-waa-ram"
          ]
        ]
      }
    ],
    [
      {
        "say": "shab ast wa tan-haa ni-shas-ta-am wa ba roo-zhaa-yee mee-an-dee-sham ki zam-za-ma-yi dil-na-shee-ni tu dar sinf mee-pee-cheed,",
        "mean": "It is night, and I sit alone thinking of the days when your pleasing murmur filled the classroom,",
        "words": [
          [
            "شب",
            "shab",
            "shab"
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
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "نشسته‌ام",
            "ni-shas-ta-am",
            "ni-shas-ta-am",
            "ni-shas-tan"
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
            "روزهایی",
            "roo-zhaa-yee",
            "roo-zhaa-yee",
            "roz"
          ],
          [
            "می‌اندیشم",
            "mee-an-dee-sham",
            "mee-an-dee-sham",
            "an-dee-shee-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "زمزمهٔ",
            "zam-za-ma-yi",
            "zam-za-ma"
          ],
          [
            "دلنشین",
            "dil-na-shee-ni",
            "dil-na-sheen"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "صنف",
            "sinf",
            "sinf"
          ],
          [
            "می‌پیچید،",
            "mee-pee-cheed",
            "mee-pee-cheed",
            "pee-chee-dan"
          ]
        ]
      },
      {
        "say": "zam-za-ma-yi mu-hab-ba-tee ki hat-taa jum-a-haa raa ba-raa-yi maa sham-ba may-kard, ba qaw-li taa-lib aa-mu-lee",
        "mean": "a murmur of affection that even turned Fridays into school days for us, as Talib Amuli said:",
        "words": [
          [
            "زمزمهٔ",
            "zam-za-ma-yi",
            "zam-za-ma"
          ],
          [
            "محبتی",
            "mu-hab-ba-tee",
            "mu-hab-ba-tee",
            "mu-hab-bat"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "جمعه‌ها",
            "jum-a-haa",
            "jum-a-haa",
            "jum-a"
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
            "ما",
            "maa",
            "maa"
          ],
          [
            "شنبه",
            "sham-ba",
            "sham-ba"
          ],
          [
            "می‌کرد،",
            "may-kard",
            "may-kard",
            "kar-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "قول",
            "qaw-li",
            "qawl"
          ],
          [
            "طالب",
            "taa-lib",
            "taa-lib"
          ],
          [
            "آملی",
            "aa-mu-lee",
            "aa-mu-lee"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar-si mu-al-lim ar bood zam-za-ma-yi mu-hab-ba-tee jum-a ba mak-tab aa-word tif-li gu-reez paa raa",
        "mean": "If a teacher's lesson is a murmur of love, it brings the runaway child to school even on Friday.",
        "words": [
          [
            "درس",
            "dar-si",
            "dars"
          ],
          [
            "معلم",
            "mu-al-lim",
            "mu-al-lim"
          ],
          [
            "ار",
            "ar",
            "ar"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "زمزمه",
            "zam-za-ma-yi",
            "zam-za-ma"
          ],
          [
            "محبتی/",
            "mu-hab-ba-tee",
            "mu-hab-ba-tee",
            "mu-hab-bat"
          ],
          [
            "جمعه",
            "jum-a",
            "jum-a"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مکتب",
            "mak-tab",
            "mak-tab"
          ],
          [
            "آورد",
            "aa-word",
            "aa-word",
            "aa-war-dan"
          ],
          [
            "طفل",
            "tif-li",
            "tifl"
          ],
          [
            "گریز",
            "gu-reez",
            "gu-reez"
          ],
          [
            "پا",
            "paa",
            "paa"
          ],
          [
            "را",
            "raa",
            "raa"
          ]
        ]
      }
    ],
    [
      {
        "say": "us-taa-di muh-ta-ram,",
        "mean": "Respected teacher,",
        "words": [
          [
            "استاد",
            "us-taa-di",
            "us-taad"
          ],
          [
            "محترم،",
            "muh-ta-ram",
            "muh-ta-ram"
          ]
        ]
      }
    ],
    [
      {
        "say": "yaa-dat hast dar sinf chi mee-guf-tee",
        "mean": "Do you remember what you used to say in class?",
        "words": [
          [
            "یادت",
            "yaa-dat",
            "yaa-dat",
            "yaad"
          ],
          [
            "هست",
            "hast",
            "hast",
            "bu-dan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "صنف",
            "sinf",
            "sinf"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "می‌گفتی",
            "mee-guf-tee",
            "mee-guf-tee",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "man ha-noz lab-khan-di shee-ree-ni tu raa ba khaa-tir daa-ram",
        "mean": "I still remember your sweet smile.",
        "words": [
          [
            "من",
            "man",
            "man"
          ],
          [
            "هنوز",
            "ha-noz",
            "ha-noz"
          ],
          [
            "لبخند",
            "lab-khan-di",
            "lab-khand"
          ],
          [
            "شیرین",
            "shee-ree-ni",
            "shee-reen"
          ],
          [
            "تو",
            "tu",
            "tu"
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
            "خاطر",
            "khaa-tir",
            "khaa-tir"
          ],
          [
            "دارم",
            "daa-ram",
            "daa-ram",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "waq-tay dar raa mee-gu-shoo-dee sa-laam mee-kar-dee haa-li maa raa mee-pur-see-dee wa ma-sa-li pa-da-ri mihr-baan saa-ya-yi-yi mu-hab-ba-ti khud raa bar sa-ri maa mee-gus-ta-raa-nee-dee.",
        "mean": "When you opened the door, you greeted us, asked how we were, and like a kind father spread the shade of your love over us.",
        "words": [
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "می‌گشودی",
            "mee-gu-shoo-dee",
            "mee-gu-shoo-dee",
            "gu-sho-dan"
          ],
          [
            "سلام",
            "sa-laam",
            "sa-laam"
          ],
          [
            "می‌کردی",
            "mee-kar-dee",
            "mee-kar-dee",
            "kar-dan"
          ],
          [
            "حال",
            "haa-li",
            "haal"
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
            "می‌پرسیدی",
            "mee-pur-see-dee",
            "mee-pur-see-dee",
            "pur-see-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مثل",
            "ma-sa-li",
            "ma-sal"
          ],
          [
            "پدر",
            "pa-da-ri",
            "pa-dar"
          ],
          [
            "مهربان",
            "mihr-baan",
            "mihr-baan"
          ],
          [
            "سایهٔ",
            "saa-ya-yi-yi",
            "saa-ya-yi",
            "saa-ya"
          ],
          [
            "محبت",
            "mu-hab-ba-ti",
            "mu-hab-bat"
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
            "ما",
            "maa",
            "maa"
          ],
          [
            "می‌گسترانیدی.",
            "mee-gus-ta-raa-nee-dee",
            "mee-gus-ta-raa-nee-dee",
            "gus-ta-raa-nee-dan"
          ]
        ]
      },
      {
        "say": "tu khur-shee-di zin-da-gaa-nee-yi maa boo-dee wa maa raa gar-maa, ha-raa-rat wa rosh-nee mee-bakh-shee-dee",
        "mean": "You were the sun of our lives and gave us warmth, heat, and light.",
        "words": [
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "خورشید",
            "khur-shee-di",
            "khur-sheed"
          ],
          [
            "زنده‌گانی",
            "zin-da-gaa-nee-yi",
            "zin-da-gaa-nee"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "بودی",
            "boo-dee",
            "boo-dee",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "گرما،",
            "gar-maa",
            "gar-maa"
          ],
          [
            "حرارت",
            "ha-raa-rat",
            "ha-raa-rat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روشنی",
            "rosh-nee",
            "rosh-nee"
          ],
          [
            "می‌بخشیدی",
            "mee-bakh-shee-dee",
            "mee-bakh-shee-dee",
            "bakh-shee-dan"
          ]
        ]
      },
      {
        "say": "us-taa-di gi-raa-mee wa ar-ju-mand, maa cheez-haa-yi-yi zi-yaa-dee raa az shu-maa aa-mookh-teem wa mar-hoo-ni ilm wa daa-nish wa mar-ha-mat wa bu-zurg-waa-ree-yi shu-maa has-teem wa iz-haa-ri im-ti-naan wa shuk-raan mee-na-maa-yeem.",
        "mean": "Dear and honored teacher, we learned many things from you; we owe you for our learning and knowledge, kindness and generosity, and we express our gratitude and thanks.",
        "words": [
          [
            "استاد",
            "us-taa-di",
            "us-taad"
          ],
          [
            "گرامی",
            "gi-raa-mee",
            "gi-raa-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ارجمند،",
            "ar-ju-mand",
            "ar-ju-mand"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "چیزهای",
            "cheez-haa-yi-yi",
            "cheez-haa-yi",
            "cheez"
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
            "از",
            "az",
            "az"
          ],
          [
            "شما",
            "shu-maa",
            "shu-maa"
          ],
          [
            "آموختیم",
            "aa-mookh-teem",
            "aa-mookh-teem",
            "aa-mokh-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مرهون",
            "mar-hoo-ni",
            "mar-hoon"
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
            "و",
            "wa",
            "wa"
          ],
          [
            "مرحمت",
            "mar-ha-mat",
            "mar-ha-mat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بزرگواری",
            "bu-zurg-waa-ree-yi",
            "bu-zurg-waa-ree"
          ],
          [
            "شما",
            "shu-maa",
            "shu-maa"
          ],
          [
            "هستیم",
            "has-teem",
            "has-teem",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اظهار",
            "iz-haa-ri",
            "iz-haar"
          ],
          [
            "امتنان",
            "im-ti-naan",
            "im-ti-naan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شکران",
            "shuk-raan",
            "shuk-raan"
          ],
          [
            "می‌نماییم.",
            "mee-na-maa-yeem",
            "mee-na-maa-yeem",
            "na-mo-dan"
          ]
        ]
      },
      {
        "say": "pa-yaam-ba-ri khu-daa sal-lal-laa-hu a-lay-hi wa sal-lam chi zay-baa far-moo-da ast:",
        "mean": "How beautifully the Prophet of God said:",
        "words": [
          [
            "پیامبر",
            "pa-yaam-ba-ri",
            "pa-yaam-bar"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
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
            "فرموده",
            "far-moo-da",
            "far-moo-da",
            "far-moo-dan"
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
        "say": "“man lam yash-ku-run-naas lam yash-ku-rul-laah”",
        "mean": "“One who does not thank people does not thank God.”",
        "words": [
          [
            "«من",
            "man",
            "man"
          ],
          [
            "لم",
            "lam",
            "lam"
          ],
          [
            "یشکرالناس",
            "yash-ku-run-naas",
            "yash-ku-run-naas"
          ],
          [
            "لم",
            "lam",
            "lam"
          ],
          [
            "یشکراالله»",
            "yash-ku-rul-laah",
            "yash-ku-rul-laah"
          ]
        ]
      },
      {
        "say": "ka-say ki shuk-ri mar-dum raa ba-jaa na-yaa-warad, khu-daa raa ham si-paas-gu-zaar neest.",
        "mean": "Whoever does not give thanks to people is not grateful to God either.",
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
            "شکر",
            "shuk-ri",
            "shukr"
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
            "به‌جا",
            "ba-jaa",
            "ba-jaa"
          ],
          [
            "نیاورد،",
            "na-yaa-warad",
            "na-yaa-warad",
            "aa-war-dan"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "سپاس‌گزار",
            "si-paas-gu-zaar",
            "si-paas-gu-zaar"
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
        "say": "ya-kay az bu-zur-gaan, khu-daa-yash bee-a-mur-zad, ha-may-sha bar ih-ti-raam wa shukr-gu-zaa-ree-yi mu-al-lim ta-keed mee-war-zeed wa noor wa rosh-nee-yi qu-loob wa ab-saar raa mar-hoo-ni min-na-ti choon shu-maa us-taa-daa-ni bu-zurg-waar mee-daa-nist.",
        "mean": "One of our elders—may God bless him—always emphasized respect and gratitude for teachers and regarded the light of hearts and eyes as indebted to the favor of great teachers like you.",
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
            "بزرگان،",
            "bu-zur-gaan",
            "bu-zur-gaan"
          ],
          [
            "خدایش",
            "khu-daa-yash",
            "khu-daa-yash",
            "khu-daa"
          ],
          [
            "بیامرزد،",
            "bee-a-mur-zad",
            "bee-a-mur-zad",
            "aa-mur-zee-dan"
          ],
          [
            "همیشه",
            "ha-may-sha",
            "ha-may-sha"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "احترام",
            "ih-ti-raam",
            "ih-ti-raam"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شکرگزاری",
            "shukr-gu-zaa-ree-yi",
            "shukr-gu-zaa-ree"
          ],
          [
            "معلم",
            "mu-al-lim",
            "mu-al-lim"
          ],
          [
            "تأکید",
            "ta-keed",
            "ta-keed"
          ],
          [
            "می‌ورزید",
            "mee-war-zeed",
            "mee-war-zeed",
            "war-zee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نور",
            "noor",
            "noor"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روشنی",
            "rosh-nee-yi",
            "rosh-nee"
          ],
          [
            "قلوب",
            "qu-loob",
            "qu-loob"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ابصار",
            "ab-saar",
            "ab-saar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "مرهون",
            "mar-hoo-ni",
            "mar-hoon"
          ],
          [
            "منت",
            "min-na-ti",
            "min-nat"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "شما",
            "shu-maa",
            "shu-maa"
          ],
          [
            "استادان",
            "us-taa-daa-ni",
            "us-taa-daan"
          ],
          [
            "بزرگوار",
            "bu-zurg-waar",
            "bu-zurg-waar"
          ],
          [
            "می‌دانست.",
            "mee-daa-nist",
            "mee-daa-nist",
            "daa-nis-tan"
          ]
        ]
      },
      {
        "say": "ya-kay az dos-taan, yaa-dash ba khayr baad, may-guft:",
        "mean": "One friend—may his memory be blessed—used to say:",
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
            "دوستان،",
            "dos-taan",
            "dos-taan"
          ],
          [
            "یادش",
            "yaa-dash",
            "yaa-dash"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خیر",
            "khayr",
            "khayr"
          ],
          [
            "باد،",
            "baad",
            "baad"
          ],
          [
            "می‌گفت:",
            "may-guft",
            "may-guft",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "ha-ma-yi daar wa na-daa-ram mar-hoo-ni mu-al-li-mi gi-raa-mee wa ar-ju-man-dam may-baa-shad wa man mad-yoo-ni mu-al-li-mi muh-ta-ra-mi khud mee-baa-sham wa ba dee-ga-raan neez taw-si-ya may-ku-nam ki ba su-kha-naa-ni mu-al-li-mi muh-ta-ram-shaan gosh fa-raa di-hand wa raah wa ras-mi zin-da-gee raa az way fa-raa-gee-rand.",
        "mean": "I owe everything I have to my dear and honored teacher; I am indebted to my respected teacher and advise others to listen to their teacher's words and learn the way of life from him.",
        "words": [
          [
            "همهٔ",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "دار",
            "daar",
            "daar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ندارم",
            "na-daa-ram",
            "na-daa-ram",
            "daash-tan"
          ],
          [
            "مرهون",
            "mar-hoo-ni",
            "mar-hoon"
          ],
          [
            "معلم",
            "mu-al-li-mi",
            "mu-al-lim"
          ],
          [
            "گرامی",
            "gi-raa-mee",
            "gi-raa-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ارجمندم",
            "ar-ju-man-dam",
            "ar-ju-man-dam",
            "ar-ju-mand"
          ],
          [
            "می‌باشد",
            "may-baa-shad",
            "may-baa-shad",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "مدیون",
            "mad-yoo-ni",
            "mad-yoon"
          ],
          [
            "معلم",
            "mu-al-li-mi",
            "mu-al-lim"
          ],
          [
            "محترم",
            "muh-ta-ra-mi",
            "muh-ta-ram"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "می‌باشم",
            "mee-baa-sham",
            "mee-baa-sham",
            "bu-dan"
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
            "دیگران",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "توصیه",
            "taw-si-ya",
            "taw-si-ya"
          ],
          [
            "می‌کنم",
            "may-ku-nam",
            "may-ku-nam",
            "kar-dan"
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
            "سخنان",
            "su-kha-naa-ni",
            "su-kha-naan",
            "su-khan"
          ],
          [
            "معلم",
            "mu-al-li-mi",
            "mu-al-lim"
          ],
          [
            "محترم‌شان",
            "muh-ta-ram-shaan",
            "muh-ta-ram-shaan",
            "muh-ta-ram"
          ],
          [
            "گوش",
            "gosh",
            "gosh"
          ],
          [
            "فرا",
            "fa-raa",
            "fa-raa"
          ],
          [
            "دهند",
            "di-hand",
            "di-hand",
            "daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "راه",
            "raah",
            "raah"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رسم",
            "ras-mi",
            "rasm"
          ],
          [
            "زنده‌گی",
            "zin-da-gee",
            "zin-da-gee"
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
            "وی",
            "way",
            "way"
          ],
          [
            "فراگیرند.",
            "fa-raa-gee-rand",
            "fa-raa-gee-rand",
            "fa-raa-gi-rif-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mu-al-li-mi ar-ju-mand, bar maast taa az shu-maa us-taa-daa-ni gi-raa-mee mam-noon wa mu-ta-shak-kir baa-sheem wa ba aa-moo-za-haa-yi-yi mu-feed wa ar-zan-da-taan gosh fa-raa di-heem.",
        "mean": "Honored teacher, it is our duty to thank you dear teachers and listen to your useful and valuable teachings.",
        "words": [
          [
            "معلم",
            "mu-al-li-mi",
            "mu-al-lim"
          ],
          [
            "ارجمند،",
            "ar-ju-mand",
            "ar-ju-mand"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "ماست",
            "maast",
            "maast"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شما",
            "shu-maa",
            "shu-maa"
          ],
          [
            "استادان",
            "us-taa-daa-ni",
            "us-taa-daan"
          ],
          [
            "گرامی",
            "gi-raa-mee",
            "gi-raa-mee"
          ],
          [
            "ممنون",
            "mam-noon",
            "mam-noon"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "متشکر",
            "mu-ta-shak-kir",
            "mu-ta-shak-kir"
          ],
          [
            "باشیم",
            "baa-sheem",
            "baa-sheem",
            "bu-dan"
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
            "آموزه‌های",
            "aa-moo-za-haa-yi-yi",
            "aa-moo-za-haa-yi",
            "aa-moo-za"
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
            "ارزندهٔ‌تان",
            "ar-zan-da-taan",
            "ar-zan-da-taan",
            "ar-zin-da"
          ],
          [
            "گوش",
            "gosh",
            "gosh"
          ],
          [
            "فرا",
            "fa-raa",
            "fa-raa"
          ],
          [
            "دهیم.",
            "di-heem",
            "di-heem",
            "daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "az si-kan-da-ri ka-beer pur-see-dand:",
        "mean": "Alexander the Great was asked:",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "سکندر",
            "si-kan-da-ri",
            "si-kan-dar"
          ],
          [
            "کبیر",
            "ka-beer",
            "ka-beer"
          ],
          [
            "پرسیدند:",
            "pur-see-dand",
            "pur-see-dand",
            "pur-see-dan"
          ]
        ]
      },
      {
        "say": "pi-da-rat raa dost daa-ree yaa mu-al-li-mat raa?",
        "mean": "Do you love your father or your teacher?",
        "words": [
          [
            "پدرت",
            "pi-da-rat",
            "pi-da-rat",
            "pa-dar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "دوست",
            "dost",
            "dost"
          ],
          [
            "داری",
            "daa-ree",
            "daa-ree"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "معلمت",
            "mu-al-li-mat",
            "mu-al-li-mat",
            "mu-al-lim"
          ],
          [
            "را؟",
            "raa",
            "raa"
          ]
        ]
      },
      {
        "say": "oo dar ja-waab guft:",
        "mean": "He replied:",
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
            "جواب",
            "ja-waab",
            "ja-waab"
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
        "say": "“pi-da-ram ki ta-ni man maa-li oost; am-maa roo-hi man par-war-da-yi-yi mu-al-li-mi man ast; ba-naa-ba-raan mu-al-lim bar pa-dar ta-qad-dum daa-rad.”",
        "mean": "“My body belongs to my father, but my soul was raised by my teacher; therefore, the teacher takes precedence over the father.”",
        "words": [
          [
            "«پدرم",
            "pi-da-ram",
            "pi-da-ram",
            "pa-dar"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تن",
            "ta-ni",
            "tan"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "مال",
            "maa-li",
            "maal"
          ],
          [
            "اوست؛",
            "oost",
            "oost",
            "oo"
          ],
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "روح",
            "roo-hi",
            "rooh"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "پروردهٔ",
            "par-war-da-yi-yi",
            "par-war-da-yi",
            "par-war-da"
          ],
          [
            "معلم",
            "mu-al-li-mi",
            "mu-al-lim"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ],
          [
            "بنابراین",
            "ba-naa-ba-raan",
            "ba-naa-ba-raan"
          ],
          [
            "معلم",
            "mu-al-lim",
            "mu-al-lim"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "تقدم",
            "ta-qad-dum",
            "ta-qad-dum"
          ],
          [
            "دارد.»",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "us-taa-di ar-ju-mand wa gi-raa-mee, mu-ta-shak-ki-ram az een ki dar sinf az shu-maa bi-si-yaar cheez-haa raa aa-mokh-tam.",
        "mean": "Dear and honored teacher, thank you for the many things I learned from you in class.",
        "words": [
          [
            "استاد",
            "us-taa-di",
            "us-taad"
          ],
          [
            "ارجمند",
            "ar-ju-mand",
            "ar-ju-mand"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گرامی،",
            "gi-raa-mee",
            "gi-raa-mee"
          ],
          [
            "متشکرم",
            "mu-ta-shak-ki-ram",
            "mu-ta-shak-ki-ram",
            "mu-ta-shak-kir"
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
            "صنف",
            "sinf",
            "sinf"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شما",
            "shu-maa",
            "shu-maa"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ],
          [
            "چیزها",
            "cheez-haa",
            "cheez-haa",
            "cheez"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "آموختم.",
            "aa-mokh-tam",
            "aa-mokh-tam",
            "aa-mokh-tan"
          ]
        ]
      },
      {
        "say": "dar sinf guf-tee daa-raa-yi akh-laa-qi khoob wa ha-mee-da baa-sheed wa mih-ra-baa-nee wa u-too-fat raa az dast na-di-heed wa mee-guf-tee dars bi-khaa-need ki bi-doo-ni dars wa ilm na-may-ta-waan ba khu-daa ra-seed wa na-may-ta-waan mas-da-ri khi-da-maa-ti mu-feed wa ar-zin-da ba jaa-mi-a wa mar-dum shud,",
        "mean": "In class you told us to have good and praiseworthy morals, never lose kindness and compassion, and study, for without learning and knowledge one cannot reach God or render useful and valuable service to society and the people.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "صنف",
            "sinf",
            "sinf"
          ],
          [
            "گفتی",
            "guf-tee",
            "guf-tee",
            "guf-tan"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq"
          ],
          [
            "خوب",
            "khoob",
            "khoob"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حمیده",
            "ha-mee-da",
            "ha-mee-da"
          ],
          [
            "باشید",
            "baa-sheed",
            "baa-sheed",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مهربانی",
            "mih-ra-baa-nee",
            "mih-ra-baa-nee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عطوفت",
            "u-too-fat",
            "u-too-fat"
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
            "ندهید",
            "na-di-heed",
            "na-di-heed",
            "daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "می‌گفتی",
            "mee-guf-tee",
            "mee-guf-tee",
            "guf-tan"
          ],
          [
            "درس",
            "dars",
            "dars"
          ],
          [
            "بخوانید",
            "bi-khaa-need",
            "bi-khaa-need",
            "khaan-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بدون",
            "bi-doo-ni",
            "bi-doon"
          ],
          [
            "درس",
            "dars",
            "dars"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "علم",
            "ilm",
            "ilm"
          ],
          [
            "نمی‌توان",
            "na-may-ta-waan",
            "na-may-ta-waan"
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
            "رسید",
            "ra-seed",
            "ra-seed",
            "ra-see-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نمی‌توان",
            "na-may-ta-waan",
            "na-may-ta-waan"
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
            "jaa-mi-a",
            "jaa-mi-a"
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
            "شد،",
            "shud",
            "shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "shab-haa dars khaan-dam wa bee-khaa-bee ka-shee-dam wa ak-noon na-tee-ja-yi aan ha-ma na-saa-yi-hi sood-man-dat raa mee-bee-nam.",
        "mean": "I studied at night and went without sleep, and now I see the result of all your useful advice.",
        "words": [
          [
            "شب‌ها",
            "shab-haa",
            "shab-haa",
            "shab"
          ],
          [
            "درس",
            "dars",
            "dars"
          ],
          [
            "خواندم",
            "khaan-dam",
            "khaan-dam",
            "khaan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بی‌خوابی",
            "bee-khaa-bee",
            "bee-khaa-bee"
          ],
          [
            "کشیدم",
            "ka-shee-dam",
            "ka-shee-dam",
            "ka-shee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اکنون",
            "ak-noon",
            "ak-noon"
          ],
          [
            "نتیجهٔ",
            "na-tee-ja-yi",
            "na-tee-ja"
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
            "نصایح",
            "na-saa-yi-hi",
            "na-saa-yih",
            "na-see-hat"
          ],
          [
            "سودمندت",
            "sood-man-dat",
            "sood-man-dat",
            "sood-mand"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "می‌بینم.",
            "mee-bee-nam",
            "mee-bee-nam",
            "dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mu-al-li-mi a-zeez, ak-noon ki bu-zurg shu-da-am khoo-bee-haa-yat raa fa-raa-mosh na-mee-ku-nam wa ya-kay az jum-la-haa-yi zee-baa-yat raa ni-wish-tam wa choon taa-blo-yi-yi aa-moo-zan-da wa fa-raa-moosh-na-shud-nee bar dee-waa-ri khaa-na nasb kar-dam wa aan een bood:",
        "mean": "Dear teacher, now that I have grown up, I do not forget your goodness; I wrote one of your beautiful sentences and hung it on the wall at home like an instructive and unforgettable sign:",
        "words": [
          [
            "معلم",
            "mu-al-li-mi",
            "mu-al-lim"
          ],
          [
            "عزیز،",
            "a-zeez",
            "a-zeez"
          ],
          [
            "اکنون",
            "ak-noon",
            "ak-noon"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بزرگ",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "شده‌ام",
            "shu-da-am",
            "shu-da-am",
            "shu-dan"
          ],
          [
            "خوبی‌هایت",
            "khoo-bee-haa-yat",
            "khoo-bee-haa-yat",
            "khoo-bee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "فراموش",
            "fa-raa-mosh",
            "fa-raa-mosh"
          ],
          [
            "نمی‌کنم",
            "na-mee-ku-nam",
            "na-mee-ku-nam",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "جمله‌های",
            "jum-la-haa-yi",
            "jum-la-haa"
          ],
          [
            "زیبایت",
            "zee-baa-yat",
            "zee-baa-yat",
            "zay-baa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نوشتم",
            "ni-wish-tam",
            "ni-wish-tam",
            "na-wish-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "تابلوی",
            "taa-blo-yi-yi",
            "taa-blo-yi",
            "taa-blo"
          ],
          [
            "آموزنده",
            "aa-moo-zan-da",
            "aa-moo-zan-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فراموش‌نشدنی",
            "fa-raa-moosh-na-shud-nee",
            "fa-raa-moosh-na-shud-nee"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "دیوار",
            "dee-waa-ri",
            "dee-waar"
          ],
          [
            "خانه",
            "khaa-na",
            "khaa-na"
          ],
          [
            "نصب",
            "nasb",
            "nasb"
          ],
          [
            "کردم",
            "kar-dam",
            "kar-dam",
            "kar-dan"
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
            "این",
            "een",
            "een"
          ],
          [
            "بود:",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "“baa dee-ga-raan bi-khan-deem bar dee-ga-raan na-khan-deem”",
        "mean": "“Let us laugh with others, not at others.”",
        "words": [
          [
            "«با",
            "baa",
            "baa"
          ],
          [
            "دیگران",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "بخندیم",
            "bi-khan-deem",
            "bi-khan-deem",
            "khan-dee-dan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "دیگران",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "نخندیم»",
            "na-khan-deem",
            "na-khan-deem",
            "khan-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mu-al-li-mi a-zeez, ha-may-sha dar khaa-ti-ri man has-tee wa mee-koo-sham taa raah wa raw-shi aa-moo-za-haa-yat raa du-n-baal ku-nam.",
        "mean": "Dear teacher, you are always in my thoughts, and I try to follow the path and method of your teachings.",
        "words": [
          [
            "معلم",
            "mu-al-li-mi",
            "mu-al-lim"
          ],
          [
            "عزیز،",
            "a-zeez",
            "a-zeez"
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
            "خاطر",
            "khaa-ti-ri",
            "khaa-tir"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "هستی",
            "has-tee",
            "has-tee",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "می‌کوشم",
            "mee-koo-sham",
            "mee-koo-sham",
            "ko-shee-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "راه",
            "raah",
            "raah"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روش",
            "raw-shi",
            "rawsh"
          ],
          [
            "آموزه‌هایت",
            "aa-moo-za-haa-yat",
            "aa-moo-za-haa-yat",
            "aa-moo-za"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "دنبال",
            "du-n-baal",
            "du-n-baal"
          ],
          [
            "کنم.",
            "ku-nam",
            "ku-nam",
            "kar-dan"
          ]
        ]
      }
    ]
  ]
});
