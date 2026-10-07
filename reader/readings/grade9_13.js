/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 13, book pages 78-81, PDF pages 85-88 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «درسال۱۲۶۲» is written «در سال ۱۲۶۲»; «درسال» is written «در سال»; «درکوچهٔ» is written «در کوچهٔ»; «قربانعلی(پدر» is written «قربانعلی (پدر»; «درسن» is written «در سن»; «امیرعبدالرحمان» is written «امیر عبدالرحمان»; «قرارگرفت» is written «قرار گرفت»; «ازطرف» is written «از طرف»; «امیرحبیب االله‌خان» is written «امیر حبیب‌الله خان»; «امان االله» is written «امان‌الله»; «االله» is written «الله»; «نظربه» is written «نظر به»; «سرهنری» is written «سر هنری»; «دریکی» is written «در یکی»; «می زند» is written «می‌زند»; «وتو» is written «و تو»; «درمحشر زما» is written «در محشر ز ما»; «درمحفل» is written «در محفل»; «دایرشده» is written «دایر شده»; «می‌کندکه» is written «می‌کند که»; «باپیانو» is written «با پیانو»; «می‌نوازدکه» is written «می‌نوازد که»; «به حضورمی پذیرد» is written «به حضور می‌پذیرد»; «به نام«مسرت»» is written «به نام «مسرت»»; «باشکوه(افغان)» is written «باشکوه (افغان)»; «بر خوردار» is written «برخوردار»; «درچوکات» is written «در چوکات»; «می‌بردکه» is written «می‌برد که»; «بردکه» is written «برد که»; «درکنار» is written «در کنار»; «زهرصاحب خردیک شمه کارآموختم» is written «ز هر صاحب خرد یک شمه کار آموختم»; «امیرامان» is written «امیر امان»; «مفتخرگردیده» is written «مفتخر گردیده»; «یاد گار» is written «یادگار»; «رادیوکابل» is written «رادیو کابل»; «هفتاد مین» is written «هفتادمین»; «خد مت» is written «خدمت»; «مفتخرشد» is written «مفتخر شد»; «درهمان» is written «در همان»; «تالارعمارت» is written «تالار عمارت».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-13',
  group: 'Dari · grade 9',
  label: 'Lesson 13',
  name: "us-taad qaa-sim af-ghaan",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_13.jpg',
    alt: "A painted portrait of a man with a mustache, in a green suit and tie."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_13.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "us-taad":                                                            { fa: "استاد", mean: "master, teacher" },
    "qaa-sim":                                                            { fa: "قاسم", mean: "Qasim" },
    "af-ghaan":                                                           { fa: "افغان", mean: "Afghan" },
    "far-zand":                                                           { fa: "فرزند", mean: "child, son" },
    "na-waab":                                                            { fa: "نواب", mean: "Nawab, a title" },
    "na-waab si-taar-joo":                                                { fa: "نواب ستارجو", mean: "Nawab Sitarju" },
    "si-taar-joo":                                                        { fa: "ستارجو", mean: "Sitarju, the name of Ustad Qasim's father" },
    "dar":                                                                { fa: "در", mean: "in" },
    "saal":                                                               { fa: "سال", mean: "year" },
    "yak-ha-zaa-ru du-sa-du shas-tu du":                                  { fa: "۱۲۶۲", mean: "1262" },
    "hij-ree#year":                                                       { fa: "هجری", say: "hij-ree", mean: "of the Islamic calendar, which counts from the Prophet's move to Medina in 622" },
    "hij-ree-yi sham-see":                                                { fa: "هجری شمسی", mean: "of the solar calendar" },
    "sham-see#full":                                                      { fa: "شمسی", say: "sham-see", mean: "solar, of the solar calendar" },
    "ko-cha-yi":                                                          { fa: "کوچهٔ", mean: "lane, street" },
    "khaa-ja":                                                            { fa: "خواجه", mean: "khwaja, a title of respect for a Sufi master" },
    "khaa-ja-yi khur-da-ki":                                              { fa: "خواجه خوردک", mean: "Khwaja Khurdak, a lane of old Kabul" },
    "khur-dak":                                                           { fa: "خوردک", mean: "Khurdak, small" },
    "kaa-bul":                                                            { fa: "کابل", mean: "Kabul" },
    "dee-da":                                                             { fa: "دیده", mean: "seen; eye" },
    "dee-da ba ja-haan gu-shood":                                         { fa: "دیده به جهان گشود", mean: "was born - literally opened his eyes to the world" },
    "dee-dan":                                                            { fa: "دیدن", mean: "to see; seeing" },
    "ba":                                                                 { fa: "به", mean: "to" },
    "ja-haan":                                                            { fa: "جهان", mean: "world" },
    "gu-shood":                                                           { fa: "گشود", mean: "opened" },
    "gu-sho-dan":                                                         { fa: "گشودن", mean: "to open" },
    "pa-da-rash":                                                         { fa: "پدرش", mean: "his father" },
    "ya-kay":                                                             { fa: "یکی", mean: "one" },
    "az":                                                                 { fa: "از", mean: "from, of" },
    "sih":                                                                { fa: "سه", mean: "three" },
    "sih taar na-waa-zaa-ni":                                             { fa: "سه تار نوازان", mean: "sitar players" },
    "taar":                                                               { fa: "تار", mean: "string" },
    "na-waa-zaan":                                                        { fa: "نوازان", mean: "players, musicians" },
    "bur-jis-ta-yi":                                                      { fa: "برجستهٔ", mean: "outstanding, prominent" },
    "e-yaa-lat":                                                          { fa: "ایالت", mean: "province, state" },
    "kash-meer":                                                          { fa: "کشمیر", mean: "Kashmir" },
    "bood":                                                               { fa: "بود", mean: "was" },
    "bu-dan":                                                             { fa: "بودن", mean: "to be" },
    "ki":                                                                 { fa: "که", mean: "that, which, who" },
    "yak-ha-zaa-ru du-sa-du chi-hil-u hasht":                             { fa: "۱۲۴۸", mean: "1248" },
    "bi-naa-bar":                                                         { fa: "بنابر", mean: "because of, following" },
    "bi-naa-ba-ri":                                                       { fa: "بنابر", mean: "at, following" },
    "da-wat":                                                             { fa: "دعوت", mean: "invitation, call" },
    "a-meer":                                                             { fa: "امیر", mean: "emir, prince; also part of names" },
    "a-zam":                                                              { fa: "اعظم", mean: "Azam, greatest" },
    "khaan":                                                              { fa: "خان", mean: "khan, a title; part of names" },
    "paad-shaah":                                                         { fa: "پادشاه", mean: "king" },
    "af-ghaa-nis-taan":                                                   { fa: "افغانستان", mean: "Afghanistan" },
    "baa":                                                                { fa: "با", mean: "with" },
    "u-da-yee":                                                           { fa: "عده‌یی", mean: "a number, a group" },
    "hu-nar-man-daan":                                                    { fa: "هنرمندان", mean: "artists" },
    "dee-gar":                                                            { fa: "دیگر", mean: "other; more; anymore" },
    "shahr-haa":                                                          { fa: "شهرها", mean: "cities" },
    "laa-hoor":                                                           { fa: "لاهور", mean: "Lahore" },
    "mul-taan":                                                           { fa: "ملتان", mean: "Multan" },
    "dih-lee":                                                            { fa: "دهلی", mean: "Delhi" },
    "wa":                                                                 { fa: "و", mean: "and" },
    "waa-rid":                                                            { fa: "وارد", mean: "entering, entered" },
    "waa-ri-di af-ghaa-nis-taan gar-deed":                                { fa: "وارد افغانستان گردید", mean: "came to Afghanistan" },
    "gar-deed":                                                           { fa: "گردید", mean: "became" },
    "gar-dee-dan":                                                        { fa: "گردیدن", mean: "to become, to turn" },
    "ha-meen":                                                            { fa: "همین", mean: "this very, this same" },
    "jaa":                                                                { fa: "جا", mean: "place" },
    "mas-kan":                                                            { fa: "مسکن", mean: "home, dwelling" },
    "mas-kan gu-zeen shud":                                               { fa: "مسکن گزین شد", mean: "settled" },
    "gu-zeen":                                                            { fa: "گزین", mean: "choosing, settling" },
    "shud":                                                               { fa: "شد", mean: "became; was" },
    "shu-dan":                                                            { fa: "شدن", mean: "to become" },
    "ha-noz":                                                             { fa: "هنوز", mean: "still, yet" },
    "khay-lee":                                                           { fa: "خیلی", mean: "very" },
    "koo-chak":                                                           { fa: "کوچک", mean: "small" },
    "ru-mooz":                                                            { fa: "رموز", mean: "secrets" },
    "fu-noon":                                                            { fa: "فنون", mean: "arts, skills" },
    "daa-nish":                                                           { fa: "دانش", mean: "knowledge" },
    "mo-see-qee":                                                         { fa: "موسیقی", mean: "music" },
    "raa":                                                                { fa: "را", mean: "marks the object of the verb" },
    "nazd":                                                               { fa: "نزد", mean: "to, at the side of (a person)" },
    "pa-dar":                                                             { fa: "پدر", mean: "father" },
    "aa-mokht":                                                           { fa: "آموخت", mean: "learned" },
    "aa-mokh-tan":                                                        { fa: "آموختن", mean: "to learn" },
    "si-pas":                                                             { fa: "سپس", mean: "then, later" },
    "ba-raa-yi":                                                          { fa: "برای", mean: "for" },
    "fa-raa-gee-ree":                                                     { fa: "فراگیری", mean: "learning" },
    "baysh-tar":                                                          { fa: "بیشتر", mean: "more" },
    "aan":                                                                { fa: "آن", mean: "that" },
    "qur-baan-a-lee":                                                     { fa: "قربانعلی", mean: "Qurban Ali" },
    "na-too":                                                             { fa: "نتو", mean: "Natu" },
    "pi-yaa-raa-khaan":                                                   { fa: "پیاراخان", mean: "Pyara Khan" },
    "hin-dee":                                                            { fa: "هندی", mean: "Indian" },
    "hind":                                                               { fa: "هند", mean: "India" },
    "aa-ma-da":                                                           { fa: "آمده", mean: "come" },
    "aa-ma-dan":                                                          { fa: "آمدن", mean: "to come" },
    "ba shaa-gir-dee par-daakht":                                         { fa: "به شاگردی پرداخت", mean: "became a student" },
    "shaa-gir-dee":                                                       { fa: "شاگردی", mean: "being a student, apprenticeship" },
    "par-daakht":                                                         { fa: "پرداخت", mean: "took up" },
    "par-daakh-tan":                                                      { fa: "پرداختن", mean: "to busy oneself (with ba), to take up; to pay" },
    "way":                                                                { fa: "وی", mean: "he, she" },
    "sin":                                                                { fa: "سن", mean: "age" },
    "beest":                                                              { fa: "بیست", mean: "twenty" },
    "yak":                                                                { fa: "یک", mean: "one, a" },
    "saa-la-gee":                                                         { fa: "ساله‌گی", mean: "the age of (chi-haar saa-la-gee, the age of four)" },
    "dar-baar":                                                           { fa: "دربار", mean: "royal court" },
    "ab-dur-rah-maan":                                                    { fa: "عبدالرحمان", mean: "Abdur Rahman" },
    "raah":                                                               { fa: "راه", mean: "way, road" },
    "raah yaaft":                                                         { fa: "راه یافت", mean: "found his way" },
    "yaaft":                                                              { fa: "یافت", mean: "found" },
    "yaaf-tan":                                                           { fa: "یافتن", mean: "to find" },
    "nu-khus-teen":                                                       { fa: "نخستین", mean: "first" },
    "mah-fil":                                                            { fa: "محفل", mean: "gathering, assembly" },
    "chu-naan":                                                           { fa: "چنان", mean: "so, such, in such a way" },
    "maw-rid":                                                            { fa: "مورد", mean: "object, case" },
    "maw-ri-di ta-waj-juh wa dil-chas-pee-yi paad-shaah qa-raar gi-rift": { fa: "مورد توجه و دلچسپی پادشاه قرار گرفت", mean: "caught the king's attention and interest" },
    "ta-waj-juh":                                                         { fa: "توجه", mean: "attention" },
    "dil-chas-pee":                                                       { fa: "دلچسپی", mean: "interest" },
    "qa-raar":                                                            { fa: "قرار", mean: "place, rest" },
    "gi-rift":                                                            { fa: "گرفت", mean: "took; began" },
    "gi-rif-tan":                                                         { fa: "گرفتن", mean: "to take" },
    "shaah":                                                              { fa: "شاه", mean: "king, shah; part of names" },
    "far-maan":                                                           { fa: "فرمان", mean: "command" },
    "far-maan daad":                                                      { fa: "فرمان داد", mean: "ordered" },
    "far-maan daa-dan":                                                   { fa: "فرمان دادن", mean: "to order" },
    "daad":                                                               { fa: "داد", mean: "gave" },
    "daa-dan":                                                            { fa: "دادن", mean: "to give" },
    "maa-haa-na":                                                         { fa: "ماهانه", mean: "monthly" },
    "mab-lagh":                                                           { fa: "مبلغ", mean: "sum, amount of money" },
    "du-sad":                                                             { fa: "دوصد", mean: "two hundred" },
    "roo-pee-ya-yi":                                                      { fa: "روپیهٔ", mean: "rupees, with ezafe" },
    "kaa-bu-lee":                                                         { fa: "کابلی", mean: "Kabuli, of Kabul" },
    "za-maan":                                                            { fa: "زمان", mean: "time" },
    "hin-guf-tee":                                                        { fa: "هنگفتی", mean: "large, considerable" },
    "bud-ja-yi":                                                          { fa: "بودجهٔ", mean: "budget, with ezafe" },
    "wi-zaa-rat":                                                         { fa: "وزارت", mean: "ministry" },
    "ja-waan":                                                            { fa: "جوان", mean: "young" },
    "ta-di-ya":                                                           { fa: "تأدیه", mean: "payment, paying" },
    "ta-di-ya gar-dad":                                                   { fa: "تأدیه گردد", mean: "be paid" },
    "gar-dad":                                                            { fa: "گردد", mean: "become" },
    "dar zimn":                                                           { fa: "در ضمن", mean: "also" },
    "zimn":                                                               { fa: "ضمن", mean: "course, inclusion (dar zimn, also)" },
    "ru-baab":                                                            { fa: "رباب", mean: "rubab, a stringed instrument" },
    "sa-daf-kaa-ree":                                                     { fa: "صدف‌کاری", mean: "inlaid with mother-of-pearl" },
    "zay-baa":                                                            { fa: "زیبا", mean: "beautiful" },
    "ta-raf":                                                             { fa: "طرف", mean: "side; the other person" },
    "ih-daa":                                                             { fa: "اهدا", mean: "giving as a gift" },
    "ih-daa gar-deed":                                                    { fa: "اهدا گردید", mean: "was given as a gift" },
    "pas":                                                                { fa: "پس", mean: "then, so" },
    "ha-bee-bul-laah":                                                    { fa: "حبیب‌الله", mean: "Habibullah" },
    "takht":                                                              { fa: "تخت", mean: "throne" },
    "shaa-hee":                                                           { fa: "شاهی", mean: "monarchy" },
    "tak-ya":                                                             { fa: "تکیه", mean: "leaning" },
    "tak-ya zad":                                                         { fa: "تکیه زد", mean: "sat - literally leaned" },
    "zad":                                                                { fa: "زد", mean: "struck, sat" },
    "za-dan":                                                             { fa: "زدن", mean: "to hit" },
    "baaz":                                                               { fa: "باز", mean: "open" },
    "baaz ham":                                                           { fa: "باز هم", mean: "again" },
    "ham":                                                                { fa: "هم", mean: "also, too" },
    "ba hay-see-ya-ti":                                                   { fa: "به حیث", mean: "as" },
    "hay-see-yat":                                                        { fa: "حیث", mean: "capacity, role (ba hay-see, as)" },
    "khaa-nan-da-yi":                                                     { fa: "خوانندهٔ", mean: "singer, with ezafe" },
    "aa-lee":                                                             { fa: "عالی", mean: "high, excellent" },
    "aa-lee ma-qaa-mi":                                                   { fa: "عالی مقام", mean: "high-ranking" },
    "ma-qaam":                                                            { fa: "مقام", mean: "rank, position; musical mode" },
    "bar-gu-zee-da":                                                      { fa: "برگزیده", mean: "chosen" },
    "bar-gu-zee-da shud":                                                 { fa: "برگزیده شد", mean: "was chosen" },
    "bar-gu-zee-dan":                                                     { fa: "برگزیدن", mean: "to choose" },
    "na-zar":                                                             { fa: "نظر", mean: "sight, view; opinion" },
    "na-zar ba":                                                          { fa: "نظر به", mean: "because of, in view of" },
    "ra-shaa-dat-haa-yee":                                                { fa: "رشادت‌هایی", mean: "skills, feats of ability" },
    "khaysh":                                                             { fa: "خویش", mean: "own; self" },
    "ni-shaan":                                                           { fa: "نشان", mean: "sign, show" },
    "maw-soof":                                                           { fa: "موصوف", mean: "the person described, she or he" },
    "khud":                                                               { fa: "خود", mean: "own; self" },
    "shakh-san":                                                          { fa: "شخصاً", mean: "personally" },
    "la-qab":                                                             { fa: "لقب", mean: "title, epithet" },
    "us-taa-dee":                                                         { fa: "استادی", mean: "mastery; the title of ustad" },
    "paad-shaa-hee":                                                      { fa: "پادشاهی", mean: "kingship" },
    "a-maa-nul-laah":                                                     { fa: "امان‌الله", mean: "Amanullah" },
    "neez":                                                               { fa: "نیز", mean: "also, too" },
    "mut-rib":                                                            { fa: "مطرب", mean: "musician, singer" },
    "dars":                                                               { fa: "درس", mean: "lesson" },
    "wa-tan":                                                             { fa: "وطن", mean: "homeland, country" },
    "wa-tan dos-tee":                                                     { fa: "وطن دوستی", mean: "patriotism" },
    "dos-tee":                                                            { fa: "دوستی", mean: "friendship" },
    "is-tiq-laal":                                                        { fa: "استقلال", mean: "independence" },
    "is-tiq-laal khaa-hee":                                               { fa: "استقلال خواهی", mean: "the wish for independence" },
    "khaa-hee":                                                           { fa: "خواهی", mean: "you want" },
    "khaas-tan":                                                          { fa: "خواستن", mean: "to want" },
    "hat-taa":                                                            { fa: "حتا", mean: "even" },
    "si-yaa-sat":                                                         { fa: "سیاست", mean: "politics" },
    "cha-kee-da-yi":                                                      { fa: "چکیدهٔ", mean: "essence, extract" },
    "an-day-sha-haa":                                                     { fa: "اندیشه‌ها", mean: "thoughts" },
    "aa-zaa-dee-khaa-haa-na-yi":                                          { fa: "آزادیخواهانهٔ", mean: "freedom-loving" },
    "qaa-lib":                                                            { fa: "قالب", mean: "form, framework" },
    "aa-hang-haa-yi":                                                     { fa: "آهنگ‌های", mean: "songs, tunes" },
    "ha-maa-see":                                                         { fa: "حماسی", mean: "heroic, rousing" },
    "aa-waaz":                                                            { fa: "آواز", mean: "sound, voice; song" },
    "gee-raa-yash":                                                       { fa: "گیرایش", mean: "his captivating quality" },
    "ba go-shi mar-dum may-ra-saa-nad":                                   { fa: "به گوش مردم می‌رساند", mean: "brought to the people's ears" },
    "gosh":                                                               { fa: "گوش", mean: "ear" },
    "mar-dum":                                                            { fa: "مردم", mean: "people" },
    "may-ra-saa-nad":                                                     { fa: "می‌رساند", mean: "brings, delivers" },
    "ra-saan-dan":                                                        { fa: "رساندن", mean: "to bring, to deliver" },
    "qa-raa-ri qi-sa-haa-yi-yi bu-zur-gaan":                              { fa: "قرار قصه‌های بزرگان", mean: "according to the elders' stories" },
    "qi-sa-haa-yi":                                                       { fa: "قصه‌های", mean: "stories" },
    "bu-zur-gaan":                                                        { fa: "بزرگان", mean: "great people" },
    "hin-gaa-mee":                                                        { fa: "هنگامی", mean: "a time, when" },
    "pay-raa-moon":                                                       { fa: "پیرامون", mean: "about, concerning" },
    "is-tir-daad":                                                        { fa: "استرداد", mean: "regaining, restoration" },
    "mu-zaa-ki-raat":                                                     { fa: "مذاکرات", mean: "negotiations, talks" },
    "daa-ghee":                                                           { fa: "داغی", mean: "heated" },
    "lan-dan":                                                            { fa: "لندن", mean: "London" },
    "dar ja-ra-yaan":                                                     { fa: "در جریان", mean: "under way" },
    "ja-ra-yaan":                                                         { fa: "جریان", mean: "course, progress" },
    "na-maa-yin-da-yi":                                                   { fa: "نمایندهٔ", mean: "representative, envoy" },
    "faw-qul-aa-da-yi":                                                   { fa: "فوق‌العادهٔ", mean: "special, extraordinary" },
    "bi-taa-ni-ya":                                                       { fa: "برتانیه", mean: "Britain" },
    "sar":                                                                { fa: "سر", mean: "head" },
    "sar hin-ree-yi daabz":                                               { fa: "سر هنری دابز", mean: "Sir Henry Dobbs, the British envoy" },
    "hin-ree":                                                            { fa: "هنری", mean: "Henry" },
    "daabz":                                                              { fa: "دابز", mean: "Dobbs" },
    "na-waa-sa-yi":                                                       { fa: "نواسهٔ", mean: "grandchild, grandson" },
    "ka-waa-na-ree":                                                      { fa: "کیوناری", mean: "Cavagnari" },
    "mash-hoor":                                                          { fa: "مشهور", mean: "famous, known" },
    "naa-yib-us-sal-ta-na-yi":                                            { fa: "نایب‌السلطنهٔ", mean: "viceroy, regent" },
    "mu-zaa-ki-ra":                                                       { fa: "مذاکره", mean: "negotiation" },
    "a-maa-nul-laah-khaan":                                               { fa: "امان‌الله‌خان", mean: "Amanullah Khan" },
    "ba hu-zoor pa-zee-ruf-ta shud":                                      { fa: "به حضور پذیرفته شد", mean: "was received" },
    "hu-zoor":                                                            { fa: "حضور", mean: "presence" },
    "pa-zee-ruf-ta":                                                      { fa: "پذیرفته", mean: "accepted" },
    "pa-zee-ruf-tan":                                                     { fa: "پذیرفتن", mean: "to accept" },
    "pa-zee-raa-yee":                                                     { fa: "پذیرایی", mean: "reception, welcoming" },
    "ma-haa-fil":                                                         { fa: "محافل", mean: "gatherings" },
    "baa-shu-ko-hee":                                                     { fa: "باشکوهی", mean: "splendid, grand" },
    "qasr-haa":                                                           { fa: "قصرها", mean: "palaces" },
    "daw-la-tee":                                                         { fa: "دولتی", mean: "of the government" },
    "bar-gu-zaar":                                                        { fa: "برگزار", mean: "held, arranged" },
    "bar-gu-zaar gar-dee-da":                                             { fa: "برگزار گردیده", mean: "were held" },
    "gar-dee-da":                                                         { fa: "گردیده", mean: "become" },
    "khaas-tand":                                                         { fa: "خواستند", mean: "wanted" },
    "ish-ti-raak":                                                        { fa: "اشتراک", mean: "taking part" },
    "nagh-ma-sa-raa-yee":                                                 { fa: "نغمه‌سرایی", mean: "singing, performing songs" },
    "ku-nad":                                                             { fa: "کند", mean: "does" },
    "kar-dan":                                                            { fa: "کردن", mean: "to do, to make" },
    "waq-tay":                                                            { fa: "وقتی", mean: "when" },
    "das-ta":                                                             { fa: "دسته", mean: "group, band" },
    "na-waa-zin-da-gaa-nash":                                             { fa: "نوازنده‌گانش", mean: "his players, his musicians" },
    "shu-roo":                                                            { fa: "شروع", mean: "beginning" },
    "shu-roo ba na-waakh-tan may-ku-nand":                                { fa: "شروع به نواختن می‌کنند", mean: "begin to play" },
    "na-waakh-tan":                                                       { fa: "نواختن", mean: "to play a musical instrument" },
    "may-ku-nand":                                                        { fa: "می‌کنند", mean: "they do" },
    "khaas":                                                              { fa: "خاص", mean: "special" },
    "chash-maan":                                                         { fa: "چشمان", mean: "eyes" },
    "ka-boo-dash":                                                        { fa: "کبودش", mean: "his blue" },
    "ba so-yi":                                                           { fa: "به سوی", mean: "toward" },
    "so":                                                                 { fa: "سو", mean: "side, direction" },
    "may-ni-ga-rad":                                                      { fa: "می‌نگرد", mean: "looks, gazes" },
    "ni-ga-ris-tan":                                                      { fa: "نگریستن", mean: "to look, to gaze" },
    "ba jaa-ni-bi":                                                       { fa: "به جانب", mean: "toward" },
    "jaa-nib":                                                            { fa: "جانب", mean: "side, direction" },
    "oo":                                                                 { fa: "او", mean: "he, she; his, her" },
    "dee-da may-do-zad":                                                  { fa: "دیده می‌دوزد", mean: "fixes his eyes" },
    "may-do-zad":                                                         { fa: "می‌دوزد", mean: "fixes, sews" },
    "dokh-tan":                                                           { fa: "دوختن", mean: "to sew; to fix one's eyes" },
    "sa-daa":                                                             { fa: "صدا", mean: "sound, voice" },
    "ra-saa-yash":                                                        { fa: "رسایش", mean: "his ringing, far-carrying" },
    "een":                                                                { fa: "این", mean: "this" },
    "bayt":                                                               { fa: "بیت", mean: "line of poetry, couplet" },
    "sabt":                                                               { fa: "ثبت", mean: "recording, being recorded" },
    "sab-ti taa-reekh shu-da ast":                                        { fa: "ثبت تاریخ شده است", mean: "has gone down in history" },
    "taa-reekh":                                                          { fa: "تاریخ", mean: "history; date" },
    "shu-da":                                                             { fa: "شده", mean: "become; been" },
    "ast":                                                                { fa: "است", mean: "is" },
    "may-khaa-nad":                                                       { fa: "می‌خواند", mean: "calls; reads" },
    "khaan-dan":                                                          { fa: "خواندن", mean: "to read, to recite" },
    "may-za-nad":                                                         { fa: "می‌زند", mean: "hits" },
    "chashm":                                                             { fa: "چشم", mean: "eye" },
    "ka-bood":                                                            { fa: "کبود", mean: "blue" },
    "tu":                                                                 { fa: "تو", mean: "you (one person)" },
    "mizh-gaan":                                                          { fa: "مژگان", mean: "eyelashes" },
    "naa-khun":                                                           { fa: "ناخن", mean: "fingernail, scratching" },
    "tur-sam":                                                            { fa: "ترسم", mean: "I fear" },
    "tur-see-dan":                                                        { fa: "ترسیدن", mean: "to fear" },
    "ay":                                                                 { fa: "ای", mean: "O (when calling someone)" },
    "shokh":                                                              { fa: "شوخ", mean: "rascal; playful, bold" },
    "mi-yaan":                                                            { fa: "میان", mean: "middle, among" },
    "man":                                                                { fa: "من", mean: "I" },
    "jang":                                                               { fa: "جنگ", mean: "war" },
    "sha-wad":                                                            { fa: "شود", mean: "become" },
    "baa ka-maa-li fa-saa-hat":                                           { fa: "با کمال فصاحت", mean: "very fluently" },
    "ka-maal":                                                            { fa: "کمال", mean: "perfection" },
    "fa-saa-hat":                                                         { fa: "فصاحت", mean: "fluency, eloquence" },
    "zu-baan":                                                            { fa: "زبان", mean: "language; tongue" },
    "da-ree":                                                             { fa: "دری", mean: "Dari, the Persian of Afghanistan" },
    "su-khan":                                                            { fa: "سخن", mean: "speech, words" },
    "su-khan may-guft":                                                   { fa: "سخن می‌گفت", mean: "spoke" },
    "may-guft":                                                           { fa: "می‌گفت", mean: "spoke, was saying" },
    "guf-tan":                                                            { fa: "گفتن", mean: "to say, to tell" },
    "khush":                                                              { fa: "خوش", mean: "pleasant, happy" },
    "khush na-may-aa-yad":                                                { fa: "خوش نمی‌آید", mean: "did not please" },
    "na-may-aa-yad":                                                      { fa: "نمی‌آید", mean: "does not come" },
    "shakl":                                                              { fa: "شکل", mean: "form, shape" },
    "haa-di-sa-yi":                                                       { fa: "حادثهٔ", mean: "incident, event" },
    "naa-gu-waar":                                                        { fa: "ناگوار", mean: "unpleasant" },
    "dip-lo-maa-teek":                                                    { fa: "دپلوماتیک", mean: "diplomatic" },
    "gi-rif-ta":                                                          { fa: "گرفته", mean: "taken; having taken" },
    "ba sar-dee may-ga-raa-yad":                                          { fa: "به سردی می‌گراید", mean: "cooled" },
    "sar-dee":                                                            { fa: "سردی", mean: "cold, coldness" },
    "may-ga-raa-yad":                                                     { fa: "می‌گراید", mean: "turns, inclines" },
    "ga-raa-yee-dan":                                                     { fa: "گراییدن", mean: "to turn, incline" },
    "dee-ga-ray":                                                         { fa: "دیگری", mean: "someone else" },
    "maw-ri-di khi-taab qa-raar daa-da":                                  { fa: "مورد خطاب قرار داده", mean: "addressing him" },
    "khi-taab":                                                           { fa: "خطاب", mean: "addressing" },
    "daa-da":                                                             { fa: "داده", mean: "given" },
    "may-sa-raa-yad":                                                     { fa: "می‌سراید", mean: "sings, composes" },
    "su-roo-dan":                                                         { fa: "سرودن", mean: "to write a poem" },
    "sulh":                                                               { fa: "صلح", mean: "peace" },
    "kun":                                                                { fa: "کن", mean: "do, make" },
    "maa":                                                                { fa: "ما", mean: "we" },
    "chi":                                                                { fa: "چه", mean: "what; how" },
    "laa-zim":                                                            { fa: "لازم", mean: "necessary" },
    "mah-shar":                                                           { fa: "محشر", mean: "Judgment Day, the resurrection" },
    "za":                                                                 { fa: "ز", mean: "from (short for az)" },
    "shar-min-da":                                                        { fa: "شرمنده", mean: "ashamed" },
    "baa-shee":                                                           { fa: "باشی", mean: "you may be, you are" },
    "bil-aa-khi-ra":                                                      { fa: "بالآخره", mean: "finally" },
    "qasr":                                                               { fa: "قصر", mean: "palace" },
    "su-toor":                                                            { fa: "ستور", mean: "Stor, the name of a palace" },
    "daa-yir":                                                            { fa: "دایر", mean: "held, established" },
    "daa-yir shu-da bood":                                                { fa: "دایر شده بود", mean: "had been held" },
    "daa-khil":                                                           { fa: "داخل", mean: "inside" },
    "taa-laar":                                                           { fa: "تالار", mean: "hall" },
    "may-sha-wad":                                                        { fa: "می‌شود", mean: "becomes" },
    "baad#after":                                                         { fa: "بعد", say: "baad", mean: "after, then" },
    "mu-saa-fi-ha":                                                       { fa: "مصافحه", mean: "shaking hands" },
    "wa-zeer":                                                            { fa: "وزیر", mean: "minister" },
    "khaa-ri-ja":                                                         { fa: "خارجه", mean: "foreign, outside" },
    "a-raa-keen":                                                         { fa: "اراکین", mean: "officials, dignitaries" },
    "mu-az-zi-zeen":                                                      { fa: "معززین", mean: "dignitaries, respected people" },
    "af-ghaa-nee":                                                        { fa: "افغانی", mean: "Afghan" },
    "khaa-ri-jee":                                                        { fa: "خارجی", mean: "foreign" },
    "mus-ta-qeem":                                                        { fa: "مستقیم", mean: "direct, directly" },
    "may-ra-wad":                                                         { fa: "می‌رود", mean: "goes" },
    "raf-tan":                                                            { fa: "رفتن", mean: "to go" },
    "lah-zaa-tee":                                                        { fa: "لحظاتی", mean: "a few moments" },
    "soh-bat":                                                            { fa: "صحبت", mean: "company; conversation" },
    "soh-bat may-ku-nad":                                                 { fa: "صحبت می‌کند", mean: "talks" },
    "soh-bat kar-dan":                                                    { fa: "صحبت کردن", mean: "to talk" },
    "may-ku-nad":                                                         { fa: "می‌کند", mean: "does, makes" },
    "taa":                                                                { fa: "تا", mean: "so that; until; to" },
    "im-roz":                                                             { fa: "امروز", mean: "today" },
    "muh-ta-waa-yi":                                                      { fa: "محتوای", mean: "content, substance" },
    "du":                                                                 { fa: "دو", mean: "two" },
    "ma-loo-maa-tee":                                                     { fa: "معلوماتی", mean: "information, any information" },
    "dar dast":                                                           { fa: "در دست", mean: "at hand, known" },
    "dast":                                                               { fa: "دست", mean: "hand" },
    "neest":                                                              { fa: "نیست", mean: "is not" },
    "wa-lay":                                                             { fa: "ولی", mean: "but" },
    "ha-ma":                                                              { fa: "همه", mean: "all, every" },
    "may-bee-nand":                                                       { fa: "می‌بینند", mean: "see" },
    "ba ta-ra-fi":                                                        { fa: "به طرف", mean: "toward" },
    "pi-yaa-no-yi":                                                       { fa: "پیانوی", mean: "piano, with ezafe" },
    "bu-zur-gee":                                                         { fa: "بزرگی", mean: "greatness" },
    "go-sha":                                                             { fa: "گوشه", mean: "corner" },
    "gu-zaash-ta":                                                        { fa: "گذاشته", mean: "placed, put" },
    "gu-zaash-ta shu-da":                                                 { fa: "گذاشته شده", mean: "had been placed" },
    "gu-zaash-tan":                                                       { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "chee-zay":                                                           { fa: "چیزی", mean: "something" },
    "sharh":                                                              { fa: "شرح", mean: "explanation; as follows" },
    "sharh may-di-had":                                                   { fa: "شرح می‌دهد", mean: "explains" },
    "sharh daa-dan":                                                      { fa: "شرح دادن", mean: "to explain" },
    "may-di-had":                                                         { fa: "می‌دهد", mean: "gives" },
    "naa-ga-haan":                                                        { fa: "ناگهان", mean: "suddenly" },
    "hu-zaar":                                                            { fa: "حضار", mean: "audience, those present" },
    "may-go-yad":                                                         { fa: "می‌گوید", mean: "says" },
    "ja-naab":                                                            { fa: "جناب", mean: "His Excellency, sir" },
    "sa-feer":                                                            { fa: "سفیر", mean: "ambassador" },
    "may-khaa-hand":                                                      { fa: "می‌خواهند", mean: "want" },
    "aa-hang":                                                            { fa: "آهنگ", mean: "song, tune" },
    "ee-shaan":                                                           { fa: "ایشان", mean: "they" },
    "bi-yaa-mo-zaa-nam":                                                  { fa: "بیاموزانم", mean: "I teach" },
    "aa-mo-zaan-dan":                                                     { fa: "آموزاندن", mean: "to teach" },
    "noot-haa-yi":                                                        { fa: "نوت‌های", mean: "musical notes" },
    "maan":                                                               { fa: "مان", mean: "our" },
    "sharh daa-dam":                                                      { fa: "شرح دادم", mean: "explained" },
    "daa-dam":                                                            { fa: "دادم", mean: "I gave, explained" },
    "ee-nak":                                                             { fa: "اینک", mean: "now, here" },
    "khu-dish-aan":                                                       { fa: "خودشان", mean: "themselves" },
    "pi-yaa-no":                                                          { fa: "پیانو", mean: "piano" },
    "na-waakh-ta":                                                        { fa: "نواخته", mean: "played" },
    "zam-za-ma":                                                          { fa: "زمزمه", mean: "soft singing, humming" },
    "zam-za-ma na-maa-yand":                                              { fa: "زمزمه نمایند", mean: "sing softly" },
    "na-maa-yand":                                                        { fa: "نمایند", mean: "do" },
    "na-mo-dan":                                                          { fa: "نمودن", mean: "to do; to show; to seem" },
    "mak-tab":                                                            { fa: "مکتب", mean: "school" },
    "maast":                                                              { fa: "ماست", mean: "yogurt" },
    "sa-baq":                                                             { fa: "سبق", mean: "lesson" },
    "ha-waa":                                                             { fa: "هوا", mean: "air, weather" },
    "ba kaf za-dan":                                                      { fa: "به کف زدن", mean: "to clapping" },
    "kaf":                                                                { fa: "کف", mean: "palm; clapping" },
    "shu-roo may-ku-nand":                                                { fa: "شروع می‌کنند", mean: "begin" },
    "shu-roo kar-dan":                                                    { fa: "شروع کردن", mean: "to begin" },
    "may-khaa-had":                                                       { fa: "می‌خواهد", mean: "wants" },
    "mi-raaj":                                                            { fa: "معراج", mean: "height, ascent" },
    "wa-tan dos-tee-yi":                                                  { fa: "وطن دوستی", mean: "love of country, patriotism" },
    "saa-bit":                                                            { fa: "ثابت", mean: "proved, fixed" },
    "saa-bit saa-zad":                                                    { fa: "ثابت سازد", mean: "prove" },
    "saa-bit saakh-tan":                                                  { fa: "ثابت ساختن", mean: "to prove" },
    "saa-zad":                                                            { fa: "سازد", mean: "may make, prove" },
    "saakh-tan":                                                          { fa: "ساختن", mean: "to make, to build" },
    "mar-ha-baa":                                                         { fa: "مرحبا", mean: "bravo, praise" },
    "may-fi-ris-tand":                                                    { fa: "می‌فرستند", mean: "send" },
    "fi-ris-taa-dan":                                                     { fa: "فرستادن", mean: "to send" },
    "mu-qaa-bil":                                                         { fa: "مقابل", mean: "front; against" },
    "qa-raar may-gee-rad":                                                { fa: "قرار می‌گیرد", mean: "is placed, comes to be" },
    "qa-raar gi-rif-tan":                                                 { fa: "قرار گرفتن", mean: "to be placed; to come to be (in a state)" },
    "may-gee-rad":                                                        { fa: "می‌گیرد", mean: "takes" },
    "may-na-waa-zad":                                                     { fa: "می‌نوازد", mean: "plays a musical instrument" },
    "ta-ra-fi e-jaab wa ta-hay-yu-ri hu-zaar waa-qi shu-da":              { fa: "طرف اعجاب و تحیر حضار واقع شده", mean: "amazes the audience" },
    "e-jaab":                                                             { fa: "اعجاب", mean: "wonder, amazement" },
    "ta-hay-yur":                                                         { fa: "تحیر", mean: "astonishment" },
    "waa-qi":                                                             { fa: "واقع", mean: "situated; becoming" },
    "kaf za-dan-haa-yi-yi mum-tad":                                       { fa: "کف زدن‌های ممتد", mean: "long applause" },
    "za-dan-haa-yi":                                                      { fa: "زدن‌های", mean: "acts of striking, clapping" },
    "mum-tad":                                                            { fa: "ممتد", mean: "prolonged, continuous" },
    "bad-ra-qa":                                                          { fa: "بدرقه", mean: "sending off, accompaniment" },
    "bad-ra-qa may-gar-dad":                                              { fa: "بدرقه می‌گردد", mean: "is sent off" },
    "may-gar-dad":                                                        { fa: "می‌گردد", mean: "becomes, turns" },
    "dar ha-qee-qat":                                                     { fa: "در حقیقت", mean: "in fact" },
    "ha-qee-qat":                                                         { fa: "حقیقت", mean: "truth" },
    "pa-yaam":                                                            { fa: "پیام", mean: "message" },
    "nukhus-teen-baar":                                                   { fa: "نخستین‌بار", mean: "for the first time" },
    "han-ja-ra-yi":                                                       { fa: "حنجرهٔ", mean: "throat, larynx" },
    "hu-nar-mand":                                                        { fa: "هنرمند", mean: "artist" },
    "ta-neen":                                                            { fa: "طنین", mean: "resonance, ringing" },
    "ta-neen an-daaz gar-dee-da":                                         { fa: "طنین انداز گردیده", mean: "rang out" },
    "an-daaz":                                                            { fa: "انداز", mean: "sounding, casting" },
    "an-daakh-tan":                                                       { fa: "انداختن", mean: "throwing; to throw" },
    "ta-was-sut":                                                         { fa: "توسط", mean: "by, through" },
    "ing-lees":                                                           { fa: "انگلیس", mean: "England, the British" },
    "ta-yeed":                                                            { fa: "تأیید", mean: "confirmation, approval" },
    "ta-yeed may-sha-wad":                                                { fa: "تأیید می‌شود", mean: "is confirmed" },
    "far-daa":                                                            { fa: "فردا", mean: "tomorrow" },
    "roz":                                                                { fa: "روز", mean: "day" },
    "ba hu-zoor may-pa-zee-rad":                                          { fa: "به حضور می‌پذیرد", mean: "receives" },
    "may-pa-zee-rad":                                                     { fa: "می‌پذیرد", mean: "receives, accepts" },
    "dar ba-raa-ba-ri":                                                   { fa: "در برابر", mean: "in front of, in the presence of" },
    "ba-raa-bar":                                                         { fa: "برابر", mean: "front (dar ba-raa-bar-i, toward, before); equal" },
    "mu-az-zi-zee-nee":                                                   { fa: "معززینی", mean: "dignitaries who, some dignitaries" },
    "aan-jaa":                                                            { fa: "آن‌جا", mean: "there" },
    "hu-zoor daa-rand":                                                   { fa: "حضور دارند", mean: "are present" },
    "daa-rand":                                                           { fa: "دارند", mean: "have" },
    "daash-tan":                                                          { fa: "داشتن", mean: "to have" },
    "aa-ghosh":                                                           { fa: "آغوش", mean: "embrace" },
    "pur-mih-rash":                                                       { fa: "پرمهرش", mean: "his loving, affectionate" },
    "may-fi-shaa-rad":                                                    { fa: "می‌فشارد", mean: "presses, embraces" },
    "fi-shur-dan":                                                        { fa: "فشردن", mean: "to press, squeeze" },
    "sa-nad":                                                             { fa: "سند", mean: "document, certificate" },
    "e-taa-yi":                                                           { fa: "اعطای", mean: "granting, award of" },
    "zu-mur-rud":                                                         { fa: "زمرد", mean: "emerald" },
    "ba naa-mi":                                                          { fa: "به نام", mean: "by the name of, called" },
    "naam":                                                               { fa: "نام", mean: "name" },
    "ma-sar-rat":                                                         { fa: "مسرت", mean: "Masarrat, joy" },
    "ki-naar":                                                            { fa: "کنار", mean: "side, edge" },
    "raast":                                                              { fa: "راست", mean: "right; true" },
    "naa-mat":                                                            { fa: "نامت", mean: "your name" },
    "ka-li-ma":                                                           { fa: "کلمه", mean: "a word" },
    "ar-ju-mand":                                                         { fa: "ارجمند", mean: "honored, noble" },
    "bu-zurg-waa-ram":                                                    { fa: "بزرگوارم", mean: "my noble, my esteemed" },
    "a-meer saa-hi-bi sha-heed":                                          { fa: "امیر صاحب شهید", mean: "the martyred amir" },
    "saa-hib":                                                            { fa: "صاحب", mean: "holder, master; a respectful title" },
    "sha-heed":                                                           { fa: "شهید", mean: "martyr, martyred" },
    "boo-dand":                                                           { fa: "بودند", mean: "were" },
    "chap":                                                               { fa: "چپ", mean: "left" },
    "baa-shu-koh":                                                        { fa: "باشکوه", mean: "glorious, splendid" },
    "i-zaa-fa":                                                           { fa: "اضافه", mean: "addition, adding" },
    "i-zaa-fa may-ku-nam":                                                { fa: "اضافه می‌کنم", mean: "I add" },
    "i-zaa-fa kar-dan":                                                   { fa: "اضافه کردن", mean: "to add" },
    "may-ku-nam":                                                         { fa: "می‌کنم", mean: "I do, I add" },
    "sum-bol":                                                            { fa: "سمبول", mean: "symbol" },
    "hu-wee-yat":                                                         { fa: "هویت", mean: "identity" },
    "if-ti-khaar":                                                        { fa: "افتخار", mean: "pride, glory" },
    "baa-shin-da-gaan":                                                   { fa: "باشنده‌گان", mean: "inhabitants, people" },
    "sar-za-meen":                                                        { fa: "سرزمین", mean: "land, country" },
    "ba baad":                                                            { fa: "به بعد", mean: "on, onward" },
    "may-shi-naa-sand":                                                   { fa: "می‌شناسند", mean: "know, recognize" },
    "shi-naakh-tan":                                                      { fa: "شناختن", mean: "to know, recognize" },
    "ar-sa-haa-yi":                                                       { fa: "عرصه‌های", mean: "fields, areas" },
    "ta-waa-naa-yee-haa-yi":                                              { fa: "توانایی‌های", mean: "abilities" },
    "way-zha-yay":                                                        { fa: "ویژه‌یی", mean: "special (way-zha + -ay)" },
    "bar-khor-daar":                                                      { fa: "برخوردار", mean: "possessing, enjoying" },
    "bar-khor-daar bood":                                                 { fa: "برخوردار بود", mean: "had" },
    "bar-khor-daar bu-dan":                                               { fa: "برخوردار بودن", mean: "to have, to enjoy" },
    "chu-naan-ki":                                                        { fa: "چنان‌که", mean: "as, for example" },
    "gha-zal":                                                            { fa: "غزل", mean: "ghazal, a short love poem" },
    "ta-raa-na":                                                          { fa: "ترانه", mean: "song" },
    "an-waa":                                                             { fa: "انواع", mean: "kinds" },
    "ful-ku-lo-ree":                                                      { fa: "فلکلوری", mean: "folk, folkloric" },
    "us-taa-daan":                                                        { fa: "استادان", mean: "masters, teachers" },
    "mu-aa-sir":                                                          { fa: "معاصر", mean: "contemporary" },
    "pe-shee":                                                            { fa: "پیشی", mean: "precedence, surpassing" },
    "pe-shee gi-rif-ta bood":                                             { fa: "پیشی گرفته بود", mean: "had surpassed" },
    "pe-shee gi-rif-tan":                                                 { fa: "پیشی گرفتن", mean: "to surpass" },
    "ham-chu-naan":                                                       { fa: "همچنان", mean: "likewise, just so" },
    "hu-nar-man-dee":                                                     { fa: "هنرمندی", mean: "an artist" },
    "qis-mat":                                                            { fa: "قسمت", mean: "share, part" },
    "zi-yaa-dee":                                                         { fa: "زیادی", mean: "many, a great amount" },
    "qa-dee-mee":                                                         { fa: "قدیمی", mean: "old" },
    "cho-kaat":                                                           { fa: "چوکات", mean: "framework" },
    "ma-qaam-haa-yi":                                                     { fa: "مقام‌های", mean: "modes, ranks" },
    "tan-zeem":                                                           { fa: "تنظیم", mean: "arranging, organization" },
    "tan-zeem na-mo-da":                                                  { fa: "تنظیم نموده", mean: "having arranged" },
    "tan-zeem na-mo-dan":                                                 { fa: "تنظیم نمودن", mean: "to arrange" },
    "na-mo-da":                                                           { fa: "نموده", mean: "having done" },
    "aan-haa":                                                            { fa: "آن‌ها", mean: "they, them" },
    "mu-ar-ri-fee":                                                       { fa: "معرفی", mean: "introduction, making known" },
    "mu-ar-ri-fee kard":                                                  { fa: "معرفی کرد", mean: "made known" },
    "mu-ar-ri-fee kar-dan":                                               { fa: "معرفی کردن", mean: "to introduce" },
    "kard":                                                               { fa: "کرد", mean: "did, made" },
    "shay-wa":                                                            { fa: "شیوه", mean: "style, way" },
    "shaa-gir-daa-nash":                                                  { fa: "شاگردانش", mean: "his students" },
    "ta-qeeb":                                                            { fa: "تعقیب", mean: "following, pursuit" },
    "ta-qeeb na-mo-dand":                                                 { fa: "تعقیب نمودند", mean: "followed" },
    "ta-qeeb na-mo-dan":                                                  { fa: "تعقیب نمودن", mean: "to follow" },
    "na-mo-dand":                                                         { fa: "نمودند", mean: "they did" },
    "az een-roo":                                                         { fa: "از این‌رو", mean: "therefore, for this reason" },
    "een-roo":                                                            { fa: "این‌رو", mean: "this reason (az een-roo, so)" },
    "bun-yaan-gu-zaar":                                                   { fa: "بنیانگذار", mean: "founder" },
    "la-qab daa-da and":                                                  { fa: "لقب داده اند", mean: "have given the title" },
    "and":                                                                { fa: "اند", mean: "are; after a word like shu-da, have" },
    "tarz":                                                               { fa: "طرز", mean: "style, manner" },
    "mak-ta-bee":                                                         { fa: "مکتبی", mean: "a school, a style" },
    "daasht":                                                             { fa: "داشت", mean: "had" },
    "yaad":                                                               { fa: "یاد", mean: "memory, mention" },
    "yaad may-sha-wad":                                                   { fa: "یاد می‌شود", mean: "are called" },
    "yaad shu-dan":                                                       { fa: "یاد شدن", mean: "to be called, to be mentioned" },
    "shaa-gir-daan":                                                      { fa: "شاگردان", mean: "students" },
    "saa-ha-yi":                                                          { fa: "ساحهٔ", mean: "field, area" },
    "mis-la-kee":                                                         { fa: "مسلکی", mean: "professional" },
    "aa-maa-toor":                                                        { fa: "آماتور", mean: "amateur" },
    "tar-bee-ya":                                                         { fa: "تربیه", mean: "training, education" },
    "tar-bee-ya na-mo-da":                                                { fa: "تربیه نموده", mean: "having trained" },
    "tar-bee-ya na-mo-dan":                                               { fa: "تربیه نمودن", mean: "to train" },
    "jaa-mi-a":                                                           { fa: "جامعه", mean: "society" },
    "taq-deem":                                                           { fa: "تقدیم", mean: "presenting, giving" },
    "taq-deem daash-ta ast":                                              { fa: "تقدیم داشته است", mean: "has given" },
    "daash-ta":                                                           { fa: "داشته", mean: "had" },
    "har":                                                                { fa: "هر", mean: "every" },
    "har ka-daa-mi aan-haa":                                              { fa: "هر کدام آن‌ها", mean: "each of them" },
    "ka-daam":                                                            { fa: "کدام", mean: "which, each (har ka-daam, each)" },
    "aa-si-maan":                                                         { fa: "آسمان", mean: "sky" },
    "may-di-rakh-shand":                                                  { fa: "می‌درخشند", mean: "shine" },
    "da-rakh-shee-dan":                                                   { fa: "درخشیدن", mean: "to shine" },
    "maa-nand":                                                           { fa: "مانند", mean: "like" },
    "ghu-laam":                                                           { fa: "غلام", mean: "Ghulam; servant" },
    "na-bee":                                                             { fa: "نبی", mean: "Nabi, prophet" },
    "saa-bir":                                                            { fa: "صابر", mean: "patient" },
    "ra-heem":                                                            { fa: "رحیم", mean: "Rahim" },
    "bakhsh":                                                             { fa: "بخش", mean: "Bakhsh; part" },
    "gul":                                                                { fa: "گل", mean: "Gul; flower" },
    "yaa-qoob":                                                           { fa: "یعقوب", mean: "Ya'qub" },
    "qaa-si-mee":                                                         { fa: "قاسمی", mean: "Qasimi" },
    "yoo-suf":                                                            { fa: "یوسف", mean: "Yusuf, Joseph" },
    "moo-saa":                                                            { fa: "موسی", mean: "Musa, Moses" },
    "mu-ham-mad":                                                         { fa: "محمد", mean: "Muhammad" },
    "umr":                                                                { fa: "عمر", mean: "life, lifetime" },
    "ru-baab na-waaz":                                                    { fa: "رباب نواز", mean: "rubab player" },
    "na-waaz":                                                            { fa: "نواز", mean: "player" },
    "bar-shnaa":                                                          { fa: "برشنا", mean: "Breshna" },
    "dee-ga-raan":                                                        { fa: "دیگران", mean: "others" },
    "bay-dil-shi-naa-see":                                                { fa: "بیدل‌شناسی", mean: "the study of Bedil" },
    "gha-za-lee-yaat":                                                    { fa: "غزلیات", mean: "ghazals" },
    "ash-aar":                                                            { fa: "اشعار", mean: "poems, verses" },
    "aa-ri-faa-na":                                                       { fa: "عارفانه", mean: "mystical" },
    "shaad-ra-waan":                                                      { fa: "شادروان", mean: "the late, deceased" },
    "ab-dul-a-lee":                                                       { fa: "عبدالعلی", mean: "Abdul Ali" },
    "mus-tagh-nee":                                                       { fa: "مستغنی", mean: "Mustaghni" },
    "ab-dul-haq":                                                         { fa: "عبدالحق", mean: "Abdul Haq" },
    "bay-taab":                                                           { fa: "بیتاب", mean: "Betab" },
    "da-raaz":                                                            { fa: "دراز", mean: "long" },
    "da-raaz na-mo-da":                                                   { fa: "دراز نموده", mean: "having stretched out" },
    "da-raaz na-mo-dan":                                                  { fa: "دراز نمودن", mean: "to stretch out" },
    "bar":                                                                { fa: "بر", mean: "on, upon" },
    "bar a-laa-wa":                                                       { fa: "بر علاوه", mean: "besides" },
    "a-laa-wa":                                                           { fa: "علاوه", mean: "addition (a-laa-wa bar, besides)" },
    "mah-zar":                                                            { fa: "محضر", mean: "presence, company" },
    "choon":                                                              { fa: "چون", mean: "like, as; when; because" },
    "sa-roor":                                                            { fa: "سرور", mean: "Sarwar; joy" },
    "dih-qaan":                                                           { fa: "دهقان", mean: "Dihqan; farmer" },
    "haz-rat":                                                            { fa: "حضرت", mean: "his holiness - a title of respect" },
    "shaa-yiq":                                                           { fa: "شایق", mean: "Shayiq" },
    "ja-maal":                                                            { fa: "جمال", mean: "Jamal, beauty" },
    "soo-fee":                                                            { fa: "صوفی", mean: "Sufi" },
    "ish-qa-ree":                                                         { fa: "عشقری", mean: "Ishqari" },
    "bah-ra-haa":                                                         { fa: "بهره‌ها", mean: "benefits" },
    "bah-ra-haa burd":                                                    { fa: "بهره‌ها برد", mean: "benefited" },
    "bah-ra bur-dan":                                                     { fa: "بهره بردن", mean: "to benefit" },
    "burd":                                                               { fa: "برد", mean: "took, benefited" },
    "bur-dan":                                                            { fa: "بردن", mean: "to take away, to carry" },
    "an-dokh-ta-haa":                                                     { fa: "اندوخته‌ها", mean: "learning, accumulated knowledge" },
    "shu-go-faa-yee":                                                     { fa: "شگوفایی", mean: "flowering, flourishing" },
    "ha-yaat":                                                            { fa: "حیات", mean: "life" },
    "naqsh":                                                              { fa: "نقش", mean: "role" },
    "naq-shi ba-raa-zin-da daash-tand":                                   { fa: "نقش برازنده داشتند", mean: "played a fine part" },
    "ba-raa-zin-da":                                                      { fa: "برازنده", mean: "fine, prominent" },
    "daash-tand":                                                         { fa: "داشتند", mean: "had" },
    "ak-sar":                                                             { fa: "اکثر", mean: "mostly" },
    "aw-qaa-tash":                                                        { fa: "اوقاتش", mean: "his time" },
    "mu-taa-li-a-yi":                                                     { fa: "مطالعهٔ", mean: "study, reading" },
    "aa-saar":                                                            { fa: "آثار", mean: "works" },
    "ru-baa-ee-yaat":                                                     { fa: "رباعیات", mean: "quatrains" },
    "haa-fiz":                                                            { fa: "حافظ", mean: "Hafiz, the poet of Shiraz; one who knows the Quran by heart" },
    "sa-dee":                                                             { fa: "سعدی", mean: "Sa’di, the Persian poet from Shiraz who died about 1292" },
    "bay-dil":                                                            { fa: "بیدل", mean: "Bedil, a Persian poet of India who died in 1720" },
    "maw-laa-naa":                                                        { fa: "مولانا", mean: "Mawlana, our master, a title of Rumi" },
    "a-dab":                                                              { fa: "ادب", mean: "literature, learning" },
    "si-pa-ree":                                                          { fa: "سپری", mean: "spent, passed" },
    "kar-da":                                                             { fa: "کرده", mean: "done" },
    "shi'r":                                                              { fa: "شعر", mean: "poetry, poem" },
    "kasb":                                                               { fa: "کسب", mean: "gaining, acquisition" },
    "ma-loo-maat":                                                        { fa: "معلومات", mean: "information, knowledge" },
    "aa-faa-qay":                                                         { fa: "آفاقی", mean: "horizons (aa-faaq + -ay)" },
    "khi-rad":                                                            { fa: "خرد", mean: "reason, wisdom" },
    "daa-nish-man-dee":                                                   { fa: "دانشمندی", mean: "a scientist" },
    "is-ti-faa-da":                                                       { fa: "استفاده", mean: "use" },
    "is-ti-faa-da-yi aa-za-mee may-ba-rad":                               { fa: "استفادهٔ اعظمی می‌برد", mean: "made the greatest use" },
    "aa-za-mee":                                                          { fa: "اعظمی", mean: "greatest, utmost" },
    "may-ba-rad":                                                         { fa: "می‌برد", mean: "takes, carries" },
    "gaa-hay":                                                            { fa: "گاهی", mean: "sometimes" },
    "khu-dash":                                                           { fa: "خودش", mean: "herself, himself" },
    "zam-za-ma-haa-yash":                                                 { fa: "زمزمه‌هایش", mean: "his songs, his humming" },
    "may-su-rood":                                                        { fa: "می‌سرود", mean: "sang, composed" },
    "naa-la":                                                             { fa: "ناله", mean: "moan, wail" },
    "nay":                                                                { fa: "نی", mean: "reed" },
    "gir-ya":                                                             { fa: "گریه", mean: "weeping" },
    "a-bar":                                                              { fa: "ابر", mean: "great, super-, above" },
    "ba-haar":                                                            { fa: "بهار", mean: "spring" },
    "aa-mokh-tam":                                                        { fa: "آموختم", mean: "I learned" },
    "sham-ma":                                                            { fa: "شمه", mean: "a little, a trace" },
    "kaar":                                                               { fa: "کار", mean: "work, a job" },
    "baar":                                                               { fa: "بار", mean: "time, occasion; load" },
    "akz":                                                                { fa: "اخذ", mean: "receiving, taking" },
    "mi-daal":                                                            { fa: "مدال", mean: "medal" },
    "al-maas":                                                            { fa: "الماس", mean: "diamond" },
    "al-maas ni-shaan":                                                   { fa: "الماس نشان", mean: "diamond-set" },
    "yaad-gaar":                                                          { fa: "یادگار", mean: "memorial, keepsake" },
    "zu-mur-rud ni-shaa-ni":                                              { fa: "زمرد نشان", mean: "emerald-set" },
    "muf-ta-khir":                                                        { fa: "مفتخر", mean: "honored" },
    "muf-ta-khir gar-dee-da ast":                                         { fa: "مفتخر گردیده است", mean: "has been honored" },
    "yak-ha-zaa-ru sih-sa-du see-u du":                                   { fa: "۱۳۳۲", mean: "1332" },
    "hij-ree":                                                            { fa: "ه", mean: "short for hij-ree, of the Islamic calendar" },
    "hij-ree sham-see":                                                   { fa: "ه ش", mean: "Hijri Shamsi, of the solar calendar" },
    "sham-see":                                                           { fa: "ش", mean: "short for sham-see, solar (of the Afghan solar calendar)" },
    "za-maa-nay":                                                         { fa: "زمانی", mean: "at times; a time" },
    "ri-yaa-sat":                                                         { fa: "ریاست", mean: "directorate, administration" },
    "raa-di-yo":                                                          { fa: "رادیو", mean: "radio" },
    "haf-taa-do-meen":                                                    { fa: "هفتادمین", mean: "seventieth" },
    "saal-rooz":                                                          { fa: "سالروز", mean: "anniversary, birthday" },
    "ta-wal-lud":                                                         { fa: "تولد", mean: "birth" },
    "jashn":                                                              { fa: "جشن", mean: "celebration" },
    "jashn gi-rif-ta bood":                                               { fa: "جشن گرفته بود", mean: "had celebrated" },
    "dar-yaaft":                                                          { fa: "دریافت", mean: "receiving" },
    "mu-tal-laa-yi":                                                      { fa: "مطلای", mean: "gold-plated" },
    "khid-mat":                                                           { fa: "خدمت", mean: "service" },
    "muf-ta-khir shud":                                                   { fa: "مفتخر شد", mean: "was honored" },
    "ha-maan":                                                            { fa: "همان", mean: "that same, the very" },
    "sa-taa-yish":                                                        { fa: "ستایش", mean: "praise" },
    "khi-da-maat":                                                        { fa: "خدمات", mean: "services" },
    "far-han-gee":                                                        { fa: "فرهنگی", mean: "cultural" },
    "bu-zurg-mard":                                                       { fa: "بزرگمرد", mean: "great man" },
    "mu-jas-sa-ma-yi":                                                    { fa: "مجسمهٔ", mean: "statue" },
    "bu-ron-zee":                                                         { fa: "برونزی", mean: "bronze" },
    "mad-khal":                                                           { fa: "مدخل", mean: "entrance" },
    "i-maa-rat":                                                          { fa: "عمارت", mean: "building" },
    "ja-deed":                                                            { fa: "جدید", mean: "new" },
    "nasb":                                                               { fa: "نصب", mean: "installation, setting up" },
    "nasb gar-deed":                                                      { fa: "نصب گردید", mean: "was set up" },
    "da-waaz-da":                                                         { fa: "۱۲", mean: "twelve" },
    "sun-bu-la-yi":                                                       { fa: "سنبلهٔ", mean: "Sunbula, the sixth Afghan solar month" },
    "yak-ha-zaa-ru sih-sa-du see-u panj":                                 { fa: "۱۳۳۵", mean: "1335" },
    "kha-raa-baat":                                                       { fa: "خرابات", mean: "Kharabat, Kabul's musicians' quarter" },
    "wa-faat":                                                            { fa: "وفات", mean: "death" },
    "wa-faat yaaft":                                                      { fa: "وفات یافت", mean: "died" },
    "ja-naa-za-ash":                                                      { fa: "جنازه‌اش", mean: "his body, his funeral" },
    "ma-raa-sim":                                                         { fa: "مراسم", mean: "ceremonies" },
    "khaa-say":                                                           { fa: "خاصی", mean: "special (khaas + -ay, a: “a special …”)" },
    "shu-ha-daa-yi":                                                      { fa: "شهدای", mean: "martyrs, with ezafe" },
    "shu-ha-daa-yi saa-li-hee-ni":                                        { fa: "شهدای صالحین", mean: "Shuhada-yi Salihin, a cemetery in Kabul" },
    "saa-li-heen":                                                        { fa: "صالحین", mean: "the righteous" },
    "muh-ta-ra-maa-na":                                                   { fa: "محترمانه", mean: "respectfully, with honor" },
    "ba khaak si-pur-da shud":                                            { fa: "به خاک سپرده شد", mean: "was buried" },
    "ba khaak si-pur-dan":                                                { fa: "به خاک سپردن", mean: "to bury" },
    "khaak":                                                              { fa: "خاک", mean: "dust, earth" },
    "si-pur-da":                                                          { fa: "سپرده", mean: "given over, entrusted" },
    "si-pur-dan":                                                         { fa: "سپردن", mean: "to give over, to entrust" },
    "roo-hash":                                                           { fa: "روحش", mean: "his soul" },
    "shaad":                                                              { fa: "شاد", mean: "happy" },
    "yaa-dash":                                                           { fa: "یادش", mean: "his memory" },
    "gi-raa-mee":                                                         { fa: "گرامی", mean: "honored, dear" },
    "baad":                                                               { fa: "باد", mean: "wind" }
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
    "say": "us-taad qaa-sim af-ghaan",
    "mean": "Ustad Qasim Afghan, father of Afghan music",
    "words": [
      [
        "استاد",
        "us-taad",
        "us-taad"
      ],
      [
        "قاسم",
        "qaa-sim",
        "qaa-sim"
      ],
      [
        "افغان",
        "af-ghaan",
        "af-ghaan"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "us-taad qaa-sim af-ghaan far-zan-di na-waab si-taar-joo, dar saa-li yak-ha-zaa-ru du-sa-du shas-tu du hij-ree-yi sham-see dar ko-cha-yi khaa-ja-yi khur-da-ki kaa-bul dee-da ba ja-haan gu-shood.",
        "mean": "Ustad Qasim Afghan, son of Nawab Sitarju, was born in 1262 of the solar calendar (1883) in the Khwaja Khurdak lane of Kabul.",
        "words": [
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "افغان",
            "af-ghaan",
            "af-ghaan"
          ],
          [
            "فرزند",
            "far-zan-di",
            "far-zand"
          ],
          [
            "نواب",
            "na-waab",
            "na-waab",
            "na-waab si-taar-joo"
          ],
          [
            "ستارجو،",
            "si-taar-joo",
            "si-taar-joo",
            "na-waab si-taar-joo"
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
            "۱۲۶۲",
            "yak-ha-zaa-ru du-sa-du shas-tu du",
            "yak-ha-zaa-ru du-sa-du shas-tu du"
          ],
          [
            "هجری",
            "hij-ree-yi",
            "hij-ree#year",
            "hij-ree-yi sham-see"
          ],
          [
            "شمسی",
            "sham-see",
            "sham-see#full",
            "hij-ree-yi sham-see"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کوچهٔ",
            "ko-cha-yi",
            "ko-cha-yi"
          ],
          [
            "خواجه",
            "khaa-ja-yi",
            "khaa-ja",
            "khaa-ja-yi khur-da-ki"
          ],
          [
            "خوردک",
            "khur-da-ki",
            "khur-dak",
            "khaa-ja-yi khur-da-ki"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-da ba ja-haan gu-shood",
            "dee-dan"
          ],
          [
            "به",
            "ba",
            "ba",
            "dee-da ba ja-haan gu-shood"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan",
            "dee-da ba ja-haan gu-shood"
          ],
          [
            "گشود.",
            "gu-shood",
            "gu-shood",
            "dee-da ba ja-haan gu-shood",
            "gu-sho-dan"
          ]
        ]
      },
      {
        "say": "pa-da-rash ya-kay az sih taar na-waa-zaa-ni bur-jis-ta-yi e-yaa-la-ti kash-meer bood ki dar saa-li yak-ha-zaa-ru du-sa-du chi-hil-u hasht hij-ree-yi sham-see bi-naa-ba-ri da-wa-ti a-meer a-zam khaan, paad-shaa-hi af-ghaa-nis-taan, baa u-da-yee az hu-nar-man-daa-ni dee-gar az shahr-haa-yi laa-hoor, mul-taan, dih-lee wa... waa-ri-di af-ghaa-nis-taan gar-deed wa dar ha-meen jaa mas-kan gu-zeen shud.",
        "mean": "His father was one of the outstanding sitar players of the state of Kashmir, who in 1248 (1869), at the invitation of Amir Azam Khan, king of Afghanistan, came to Afghanistan with a group of other artists from the cities of Lahore, Multan, Delhi and others, and settled here.",
        "words": [
          [
            "پدرش",
            "pa-da-rash",
            "pa-da-rash"
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
            "سه",
            "sih",
            "sih",
            "sih taar na-waa-zaa-ni"
          ],
          [
            "تار",
            "taar",
            "taar",
            "sih taar na-waa-zaa-ni"
          ],
          [
            "نوازان",
            "na-waa-zaa-ni",
            "na-waa-zaan",
            "sih taar na-waa-zaa-ni"
          ],
          [
            "برجستهٔ",
            "bur-jis-ta-yi",
            "bur-jis-ta-yi"
          ],
          [
            "ایالت",
            "e-yaa-la-ti",
            "e-yaa-lat"
          ],
          [
            "کشمیر",
            "kash-meer",
            "kash-meer"
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
            "۱۲۴۸",
            "yak-ha-zaa-ru du-sa-du chi-hil-u hasht",
            "yak-ha-zaa-ru du-sa-du chi-hil-u hasht"
          ],
          [
            "هجری",
            "hij-ree-yi",
            "hij-ree#year",
            "hij-ree-yi sham-see"
          ],
          [
            "شمسی",
            "sham-see",
            "sham-see#full",
            "hij-ree-yi sham-see"
          ],
          [
            "بنابر",
            "bi-naa-ba-ri",
            "bi-naa-bar",
            "bi-naa-ba-ri"
          ],
          [
            "دعوت",
            "da-wa-ti",
            "da-wat"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "اعظم",
            "a-zam",
            "a-zam"
          ],
          [
            "خان،",
            "khaan",
            "khaan"
          ],
          [
            "پادشاه",
            "paad-shaa-hi",
            "paad-shaah"
          ],
          [
            "افغانستان،",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "با",
            "baa",
            "baa"
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
            "هنرمندان",
            "hu-nar-man-daa-ni",
            "hu-nar-man-daan"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شهر‌های",
            "shahr-haa-yi",
            "shahr-haa"
          ],
          [
            "لاهور،",
            "laa-hoor",
            "laa-hoor"
          ],
          [
            "ملتان،",
            "mul-taan",
            "mul-taan"
          ],
          [
            "دهلی",
            "dih-lee",
            "dih-lee"
          ],
          [
            "و...",
            "wa",
            "wa"
          ],
          [
            "وارد",
            "waa-ri-di",
            "waa-rid",
            "waa-ri-di af-ghaa-nis-taan gar-deed"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan",
            "waa-ri-di af-ghaa-nis-taan gar-deed"
          ],
          [
            "گردید",
            "gar-deed",
            "gar-deed",
            "waa-ri-di af-ghaa-nis-taan gar-deed",
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
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "جا",
            "jaa",
            "jaa"
          ],
          [
            "مسکن",
            "mas-kan",
            "mas-kan",
            "mas-kan gu-zeen shud"
          ],
          [
            "گزین",
            "gu-zeen",
            "gu-zeen",
            "mas-kan gu-zeen shud"
          ],
          [
            "شد.",
            "shud",
            "shud",
            "mas-kan gu-zeen shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "qaa-sim ha-noz khay-lee koo-chak bood ki ru-mooz wa fu-noo-ni daa-ni-shi mo-see-qee raa naz-di pa-dar aa-mokht,",
        "mean": "Qasim was still very small when he learned the secrets and skills of music from his father;",
        "words": [
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "هنوز",
            "ha-noz",
            "ha-noz"
          ],
          [
            "خیلی",
            "khay-lee",
            "khay-lee"
          ],
          [
            "کوچک",
            "koo-chak",
            "koo-chak"
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
            "رموز",
            "ru-mooz",
            "ru-mooz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فنون",
            "fu-noo-ni",
            "fu-noon"
          ],
          [
            "دانش",
            "daa-ni-shi",
            "daa-nish"
          ],
          [
            "موسیقی",
            "mo-see-qee",
            "mo-see-qee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نزد",
            "naz-di",
            "nazd"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "آموخت،",
            "aa-mokht",
            "aa-mokht",
            "aa-mokh-tan"
          ]
        ]
      },
      {
        "say": "si-pas ba-raa-yi fa-raa-gee-ree-yi baysh-ta-ri aan naz-di us-taad qur-baan-a-lee (pa-da-ri us-taad na-too) wa us-taad pi-yaa-raa-khaa-ni hin-dee ki az hind ba kaa-bul aa-ma-da bood ba shaa-gir-dee par-daakht.",
        "mean": "then, to learn more, he became a student of Ustad Qurban Ali (the father of Ustad Natu) and of Ustad Pyara Khan, an Indian who had come to Kabul from India.",
        "words": [
          [
            "سپس",
            "si-pas",
            "si-pas"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "فراگیری",
            "fa-raa-gee-ree-yi",
            "fa-raa-gee-ree"
          ],
          [
            "بیشتر",
            "baysh-ta-ri",
            "baysh-tar"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "نزد",
            "naz-di",
            "nazd"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قربانعلی",
            "qur-baan-a-lee",
            "qur-baan-a-lee"
          ],
          [
            "(پدر",
            "pa-da-ri",
            "pa-dar"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "نتو)",
            "na-too",
            "na-too"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "پیاراخان",
            "pi-yaa-raa-khaa-ni",
            "pi-yaa-raa-khaan"
          ],
          [
            "هندی",
            "hin-dee",
            "hin-dee"
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
            "هند",
            "hind",
            "hind"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "آمده",
            "aa-ma-da",
            "aa-ma-da",
            "aa-ma-dan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba shaa-gir-dee par-daakht"
          ],
          [
            "شاگردی",
            "shaa-gir-dee",
            "shaa-gir-dee",
            "ba shaa-gir-dee par-daakht"
          ],
          [
            "پرداخت.",
            "par-daakht",
            "par-daakht",
            "ba shaa-gir-dee par-daakht",
            "par-daakh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "way dar si-ni beest wa yak saa-la-gee dar dar-baa-ri a-meer ab-dur-rah-maan khaan raah yaaft wa dar nu-khus-teen mah-fil, chu-naan maw-ri-di ta-waj-juh wa dil-chas-pee-yi paad-shaah qa-raar gi-rift ki shaah far-maan daad, maa-haa-na mab-la-ghi du-sad roo-pee-ya-yi kaa-bu-lee, ki dar aan za-maan mab-la-ghi hin-guf-tee bood; az bud-ja-yi wi-zaa-ra-ti dar-baar ba qaa-si-mi ja-waan ta-di-ya gar-dad.",
        "mean": "At the age of twenty-one he found his way to the court of Amir Abdur Rahman Khan, and at his first gathering he so caught the king's attention that the king ordered a monthly sum of two hundred Kabuli rupees, a large sum at that time, to be paid to young Qasim from the budget of the Ministry of the Court.",
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
            "سن",
            "si-ni",
            "sin"
          ],
          [
            "بیست",
            "beest",
            "beest"
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
            "ساله‌گی",
            "saa-la-gee",
            "saa-la-gee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دربار",
            "dar-baa-ri",
            "dar-baar"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "عبدالرحمان",
            "ab-dur-rah-maan",
            "ab-dur-rah-maan"
          ],
          [
            "خان",
            "khaan",
            "khaan"
          ],
          [
            "راه",
            "raah",
            "raah",
            "raah yaaft"
          ],
          [
            "یافت",
            "yaaft",
            "yaaft",
            "raah yaaft",
            "yaaf-tan"
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
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "محفل،",
            "mah-fil",
            "mah-fil"
          ],
          [
            "چنان",
            "chu-naan",
            "chu-naan"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di ta-waj-juh wa dil-chas-pee-yi paad-shaah qa-raar gi-rift"
          ],
          [
            "توجه",
            "ta-waj-juh",
            "ta-waj-juh",
            "maw-ri-di ta-waj-juh wa dil-chas-pee-yi paad-shaah qa-raar gi-rift"
          ],
          [
            "و",
            "wa",
            "wa",
            "maw-ri-di ta-waj-juh wa dil-chas-pee-yi paad-shaah qa-raar gi-rift"
          ],
          [
            "دلچسپی",
            "dil-chas-pee-yi",
            "dil-chas-pee",
            "maw-ri-di ta-waj-juh wa dil-chas-pee-yi paad-shaah qa-raar gi-rift"
          ],
          [
            "پادشاه",
            "paad-shaah",
            "paad-shaah",
            "maw-ri-di ta-waj-juh wa dil-chas-pee-yi paad-shaah qa-raar gi-rift"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "maw-ri-di ta-waj-juh wa dil-chas-pee-yi paad-shaah qa-raar gi-rift"
          ],
          [
            "گرفت",
            "gi-rift",
            "gi-rift",
            "maw-ri-di ta-waj-juh wa dil-chas-pee-yi paad-shaah qa-raar gi-rift",
            "gi-rif-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "شاه",
            "shaah",
            "shaah"
          ],
          [
            "فرمان",
            "far-maan",
            "far-maan",
            "far-maan daad",
            "far-maan daa-dan"
          ],
          [
            "داد،",
            "daad",
            "daad",
            "far-maan daad",
            "daa-dan",
            "far-maan daa-dan"
          ],
          [
            "ماهانه",
            "maa-haa-na",
            "maa-haa-na"
          ],
          [
            "مبلغ",
            "mab-la-ghi",
            "mab-lagh"
          ],
          [
            "دوصد",
            "du-sad",
            "du-sad"
          ],
          [
            "روپیهٔ",
            "roo-pee-ya-yi",
            "roo-pee-ya-yi"
          ],
          [
            "کابلی،",
            "kaa-bu-lee",
            "kaa-bu-lee"
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
            "مبلغ",
            "mab-la-ghi",
            "mab-lagh"
          ],
          [
            "هنگفتی",
            "hin-guf-tee",
            "hin-guf-tee"
          ],
          [
            "بود؛",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "بودجهٔ",
            "bud-ja-yi",
            "bud-ja-yi"
          ],
          [
            "وزارت",
            "wi-zaa-ra-ti",
            "wi-zaa-rat"
          ],
          [
            "دربار",
            "dar-baar",
            "dar-baar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "قاسم",
            "qaa-si-mi",
            "qaa-sim"
          ],
          [
            "جوان",
            "ja-waan",
            "ja-waan"
          ],
          [
            "تأدیه",
            "ta-di-ya",
            "ta-di-ya",
            "ta-di-ya gar-dad"
          ],
          [
            "گردد.",
            "gar-dad",
            "gar-dad",
            "ta-di-ya gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "dar zimn yak ru-baa-bi sa-daf-kaa-ree-yi zay-baa az ta-ra-fi shaah ba way ih-daa gar-deed.",
        "mean": "Also, a beautiful rubab inlaid with mother-of-pearl was given to him by the king.",
        "words": [
          [
            "در",
            "dar",
            "dar",
            "dar zimn"
          ],
          [
            "ضمن",
            "zimn",
            "zimn",
            "dar zimn"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "رباب",
            "ru-baa-bi",
            "ru-baab"
          ],
          [
            "صدف‌کاری",
            "sa-daf-kaa-ree-yi",
            "sa-daf-kaa-ree"
          ],
          [
            "زیبا",
            "zay-baa",
            "zay-baa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "طرف",
            "ta-ra-fi",
            "ta-raf"
          ],
          [
            "شاه",
            "shaah",
            "shaah"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "اهدا",
            "ih-daa",
            "ih-daa",
            "ih-daa gar-deed"
          ],
          [
            "گردید.",
            "gar-deed",
            "gar-deed",
            "ih-daa gar-deed",
            "gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "pas az aan ki a-meer ha-bee-bul-laah khaan ba takh-ti shaa-hee-yi af-ghaa-nis-taan tak-ya zad, baaz ham ha-meen qaa-si-mi ja-waan ba hay-see-ya-ti khaa-nan-da-yi aa-lee ma-qaa-mi dar-baa-ri paad-shaah bar-gu-zee-da shud wa na-zar ba ra-shaa-dat-haa-yee ki az khaysh ni-shaan daad, a-mee-ri maw-soof khud shakh-san la-qa-bi us-taa-dee raa ba way daad.",
        "mean": "After Amir Habibullah Khan sat on the royal throne of Afghanistan, young Qasim was again chosen as the leading singer of the king's court, and because of the talent he showed, the amir himself gave him the title of ustad, master.",
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "تخت",
            "takh-ti",
            "takht"
          ],
          [
            "شاهی",
            "shaa-hee-yi",
            "shaa-hee"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "تکیه",
            "tak-ya",
            "tak-ya",
            "tak-ya zad"
          ],
          [
            "زد،",
            "zad",
            "zad",
            "tak-ya zad",
            "za-dan"
          ],
          [
            "باز",
            "baaz",
            "baaz",
            "baaz ham"
          ],
          [
            "هم",
            "ham",
            "ham",
            "baaz ham"
          ],
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "قاسم",
            "qaa-si-mi",
            "qaa-sim"
          ],
          [
            "جوان",
            "ja-waan",
            "ja-waan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba hay-see-ya-ti"
          ],
          [
            "حیث",
            "hay-see-ya-ti",
            "hay-see-yat",
            "ba hay-see-ya-ti"
          ],
          [
            "خوانندهٔ",
            "khaa-nan-da-yi",
            "khaa-nan-da-yi"
          ],
          [
            "عالی",
            "aa-lee",
            "aa-lee",
            "aa-lee ma-qaa-mi"
          ],
          [
            "مقام",
            "ma-qaa-mi",
            "ma-qaam",
            "aa-lee ma-qaa-mi"
          ],
          [
            "دربار",
            "dar-baa-ri",
            "dar-baar"
          ],
          [
            "پادشاه",
            "paad-shaah",
            "paad-shaah"
          ],
          [
            "برگزیده",
            "bar-gu-zee-da",
            "bar-gu-zee-da",
            "bar-gu-zee-da shud",
            "bar-gu-zee-dan"
          ],
          [
            "شد",
            "shud",
            "shud",
            "bar-gu-zee-da shud",
            "shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نظر",
            "na-zar",
            "na-zar",
            "na-zar ba"
          ],
          [
            "به",
            "ba",
            "ba",
            "na-zar ba"
          ],
          [
            "رشادت‌هایی",
            "ra-shaa-dat-haa-yee",
            "ra-shaa-dat-haa-yee"
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
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "نشان",
            "ni-shaan",
            "ni-shaan"
          ],
          [
            "داد،",
            "daad",
            "daad",
            "daa-dan"
          ],
          [
            "امیر",
            "a-mee-ri",
            "a-meer"
          ],
          [
            "موصوف",
            "maw-soof",
            "maw-soof"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "شخصاً",
            "shakh-san",
            "shakh-san"
          ],
          [
            "لقب",
            "la-qa-bi",
            "la-qab"
          ],
          [
            "استادی",
            "us-taa-dee",
            "us-taa-dee"
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
            "وی",
            "way",
            "way"
          ],
          [
            "داد.",
            "daad",
            "daad",
            "daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "us-taad qaa-sim dar za-maa-ni paad-shaa-hee-yi a-meer a-maa-nul-laah khaan neez mut-ri-bi dar-baar bood.",
        "mean": "Ustad Qasim was also the court musician in the time of King Amanullah Khan.",
        "words": [
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
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
            "پادشاهی",
            "paad-shaa-hee-yi",
            "paad-shaa-hee"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "امان‌الله",
            "a-maa-nul-laah",
            "a-maa-nul-laah"
          ],
          [
            "خان",
            "khaan",
            "khaan"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "مطرب",
            "mut-ri-bi",
            "mut-rib"
          ],
          [
            "دربار",
            "dar-baar",
            "dar-baar"
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
        "say": "dar-si wa-tan dos-tee, is-tiq-laal khaa-hee wa hat-taa si-yaa-sat raa az shaah a-maa-nul-laah aa-mokht wa cha-kee-da-yi an-day-sha-haa-yi aa-zaa-dee-khaa-haa-na-yi khaysh raa dar qaa-li-bi aa-hang-haa-yi-yi ha-maa-see wa baa aa-waa-zi gee-raa-yash ba go-shi mar-dum may-ra-saa-nad.",
        "mean": "He learned patriotism, the wish for independence and even politics from King Amanullah, and brought the essence of his freedom-loving thoughts to the people's ears in rousing songs, with his captivating voice.",
        "words": [
          [
            "درس",
            "dar-si",
            "dars"
          ],
          [
            "وطن",
            "wa-tan",
            "wa-tan",
            "wa-tan dos-tee"
          ],
          [
            "دوستی،",
            "dos-tee",
            "dos-tee",
            "wa-tan dos-tee"
          ],
          [
            "استقلال",
            "is-tiq-laal",
            "is-tiq-laal",
            "is-tiq-laal khaa-hee"
          ],
          [
            "خواهی",
            "khaa-hee",
            "khaa-hee",
            "is-tiq-laal khaa-hee",
            "khaas-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "سیاست",
            "si-yaa-sat",
            "si-yaa-sat"
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
            "شاه",
            "shaah",
            "shaah"
          ],
          [
            "امان‌الله",
            "a-maa-nul-laah",
            "a-maa-nul-laah"
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
            "چکیدهٔ",
            "cha-kee-da-yi",
            "cha-kee-da-yi"
          ],
          [
            "اندیشه‌های",
            "an-day-sha-haa-yi",
            "an-day-sha-haa"
          ],
          [
            "آزادیخواهانهٔ",
            "aa-zaa-dee-khaa-haa-na-yi",
            "aa-zaa-dee-khaa-haa-na-yi"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
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
            "قالب",
            "qaa-li-bi",
            "qaa-lib"
          ],
          [
            "آهنگ‌های",
            "aa-hang-haa-yi-yi",
            "aa-hang-haa-yi"
          ],
          [
            "حماسی",
            "ha-maa-see",
            "ha-maa-see"
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
            "آواز",
            "aa-waa-zi",
            "aa-waaz"
          ],
          [
            "گیرایش",
            "gee-raa-yash",
            "gee-raa-yash"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba go-shi mar-dum may-ra-saa-nad"
          ],
          [
            "گوش",
            "go-shi",
            "gosh",
            "ba go-shi mar-dum may-ra-saa-nad"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum",
            "ba go-shi mar-dum may-ra-saa-nad"
          ],
          [
            "می‌رساند.",
            "may-ra-saa-nad",
            "may-ra-saa-nad",
            "ba go-shi mar-dum may-ra-saa-nad",
            "ra-saan-dan"
          ]
        ]
      },
      {
        "say": "qa-raa-ri qi-sa-haa-yi-yi bu-zur-gaan, hin-gaa-mee ki pay-raa-moo-ni is-tir-daa-di is-tiq-laa-li af-ghaa-nis-taan mu-zaa-ki-raa-ti daa-ghee dar shahr-haa-yi kaa-bul, lan-dan wa dih-lee dar ja-ra-yaan bood",
        "mean": "According to the elders' stories, when heated talks about regaining Afghanistan's independence were under way in Kabul, London and Delhi,",
        "words": [
          [
            "قرار",
            "qa-raa-ri",
            "qa-raar",
            "qa-raa-ri qi-sa-haa-yi-yi bu-zur-gaan"
          ],
          [
            "قصه‌های",
            "qi-sa-haa-yi-yi",
            "qi-sa-haa-yi",
            "qa-raa-ri qi-sa-haa-yi-yi bu-zur-gaan"
          ],
          [
            "بزرگان،",
            "bu-zur-gaan",
            "bu-zur-gaan",
            "qa-raa-ri qi-sa-haa-yi-yi bu-zur-gaan"
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
            "پیرامون",
            "pay-raa-moo-ni",
            "pay-raa-moon"
          ],
          [
            "استرداد",
            "is-tir-daa-di",
            "is-tir-daad"
          ],
          [
            "استقلال",
            "is-tiq-laa-li",
            "is-tiq-laal"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "مذاکرات",
            "mu-zaa-ki-raa-ti",
            "mu-zaa-ki-raat"
          ],
          [
            "داغی",
            "daa-ghee",
            "daa-ghee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "شهرهای",
            "shahr-haa-yi",
            "shahr-haa"
          ],
          [
            "کابل،",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "لندن",
            "lan-dan",
            "lan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دهلی",
            "dih-lee",
            "dih-lee"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar ja-ra-yaan"
          ],
          [
            "جریان",
            "ja-ra-yaan",
            "ja-ra-yaan",
            "dar ja-ra-yaan"
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
        "say": "wa na-maa-yin-da-yi faw-qul-aa-da-yi bi-taa-ni-ya “sar hin-ree-yi daabz” na-waa-sa-yi ka-waa-na-ree-yi mash-hoor, naa-yib-us-sal-ta-na-yi hind, ba-raa-yi mu-zaa-ki-ra ba af-ghaa-nis-taan aa-ma-da wa az ta-ra-fi a-meer a-maa-nul-laah-khaan ba hu-zoor pa-zee-ruf-ta shud,",
        "mean": "and Britain's special envoy, Sir Henry Dobbs, grandson of the famous Cavagnari, the viceroy of India, had come to Afghanistan to negotiate and was received by Amir Amanullah Khan,",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نمایندهٔ",
            "na-maa-yin-da-yi",
            "na-maa-yin-da-yi"
          ],
          [
            "فوق‌العادهٔ",
            "faw-qul-aa-da-yi",
            "faw-qul-aa-da-yi"
          ],
          [
            "برتانیه",
            "bi-taa-ni-ya",
            "bi-taa-ni-ya"
          ],
          [
            "«سر",
            "sar",
            "sar",
            "sar hin-ree-yi daabz"
          ],
          [
            "هنری",
            "hin-ree-yi",
            "hin-ree",
            "sar hin-ree-yi daabz"
          ],
          [
            "دابز»",
            "daabz",
            "daabz",
            "sar hin-ree-yi daabz"
          ],
          [
            "نواسهٔ",
            "na-waa-sa-yi",
            "na-waa-sa-yi"
          ],
          [
            "کیوناری",
            "ka-waa-na-ree-yi",
            "ka-waa-na-ree"
          ],
          [
            "مشهور،",
            "mash-hoor",
            "mash-hoor"
          ],
          [
            "نایب‌السلطنهٔ",
            "naa-yib-us-sal-ta-na-yi",
            "naa-yib-us-sal-ta-na-yi"
          ],
          [
            "هند،",
            "hind",
            "hind"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "مذاکره",
            "mu-zaa-ki-ra",
            "mu-zaa-ki-ra"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "آمده",
            "aa-ma-da",
            "aa-ma-da",
            "aa-ma-dan"
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
            "طرف",
            "ta-ra-fi",
            "ta-raf"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "امان‌الله‌خان",
            "a-maa-nul-laah-khaan",
            "a-maa-nul-laah-khaan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba hu-zoor pa-zee-ruf-ta shud"
          ],
          [
            "حضور",
            "hu-zoor",
            "hu-zoor",
            "ba hu-zoor pa-zee-ruf-ta shud"
          ],
          [
            "پذیرفته",
            "pa-zee-ruf-ta",
            "pa-zee-ruf-ta",
            "ba hu-zoor pa-zee-ruf-ta shud",
            "pa-zee-ruf-tan"
          ],
          [
            "شد،",
            "shud",
            "shud",
            "ba hu-zoor pa-zee-ruf-ta shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "ba-raa-yi pa-zee-raa-yee-yi way ma-haa-fi-li baa-shu-ko-hee dar qasr-haa-yi daw-la-tee bar-gu-zaar gar-dee-da wa az us-taad qaa-sim khaas-tand ki dar aan ma-haa-fil ish-ti-raak wa nagh-ma-sa-raa-yee ku-nad.",
        "mean": "grand gatherings were held in the state palaces to welcome him, and Ustad Qasim was asked to take part and sing at those gatherings.",
        "words": [
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "پذیرایی",
            "pa-zee-raa-yee-yi",
            "pa-zee-raa-yee"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "محافل",
            "ma-haa-fi-li",
            "ma-haa-fil"
          ],
          [
            "باشکوهی",
            "baa-shu-ko-hee",
            "baa-shu-ko-hee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قصرهای",
            "qasr-haa-yi",
            "qasr-haa"
          ],
          [
            "دولتی",
            "daw-la-tee",
            "daw-la-tee"
          ],
          [
            "برگزار",
            "bar-gu-zaar",
            "bar-gu-zaar",
            "bar-gu-zaar gar-dee-da"
          ],
          [
            "گردیده",
            "gar-dee-da",
            "gar-dee-da",
            "bar-gu-zaar gar-dee-da",
            "gar-dee-dan"
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
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "خواستند",
            "khaas-tand",
            "khaas-tand",
            "khaas-tan"
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "محافل",
            "ma-haa-fil",
            "ma-haa-fil"
          ],
          [
            "اشتراک",
            "ish-ti-raak",
            "ish-ti-raak"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نغمه‌سرایی",
            "nagh-ma-sa-raa-yee",
            "nagh-ma-sa-raa-yee"
          ],
          [
            "کند.",
            "ku-nad",
            "ku-nad",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "dar ya-kay az ma-haa-fil waq-tay us-taad qaa-sim wa das-ta-yi hu-nar-man-daan wa na-waa-zin-da-gaa-nash shu-roo ba na-waakh-tan may-ku-nand wa na-maa-yin-da-yi khaa-si bi-taa-ni-ya baa chash-maa-ni ka-boo-dash ba so-yi us-taad may-ni-ga-rad, us-taad ham ba jaa-ni-bi oo dee-da may-do-zad wa baa sa-daa-yi ra-saa-yash een bayt raa ki sab-ti taa-reekh shu-da ast, may-khaa-nad:",
        "mean": "At one of the gatherings, when Ustad Qasim and his band of artists and players began to play, and the British envoy looked at the ustad with his blue eyes, the ustad fixed his eyes on him too, and in his ringing voice sang this couplet, which has gone down in history:",
        "words": [
          [
            "در",
            "dar",
            "dar"
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
            "محافل",
            "ma-haa-fil",
            "ma-haa-fil"
          ],
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دستهٔ",
            "das-ta-yi",
            "das-ta"
          ],
          [
            "هنرمندان",
            "hu-nar-man-daan",
            "hu-nar-man-daan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نوازنده‌گانش",
            "na-waa-zin-da-gaa-nash",
            "na-waa-zin-da-gaa-nash"
          ],
          [
            "شروع",
            "shu-roo",
            "shu-roo",
            "shu-roo ba na-waakh-tan may-ku-nand"
          ],
          [
            "به",
            "ba",
            "ba",
            "shu-roo ba na-waakh-tan may-ku-nand"
          ],
          [
            "نواختن",
            "na-waakh-tan",
            "na-waakh-tan",
            "shu-roo ba na-waakh-tan may-ku-nand"
          ],
          [
            "می‌کنند",
            "may-ku-nand",
            "may-ku-nand",
            "shu-roo ba na-waakh-tan may-ku-nand",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نمایندهٔ",
            "na-maa-yin-da-yi",
            "na-maa-yin-da-yi"
          ],
          [
            "خاص",
            "khaa-si",
            "khaas"
          ],
          [
            "برتانیه",
            "bi-taa-ni-ya",
            "bi-taa-ni-ya"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "چشمان",
            "chash-maa-ni",
            "chash-maan"
          ],
          [
            "کبودش",
            "ka-boo-dash",
            "ka-boo-dash"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba so-yi"
          ],
          [
            "سوی",
            "so-yi",
            "so",
            "ba so-yi"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "می‌نگرد،",
            "may-ni-ga-rad",
            "may-ni-ga-rad",
            "ni-ga-ris-tan"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
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
            "ba jaa-ni-bi"
          ],
          [
            "جانب",
            "jaa-ni-bi",
            "jaa-nib",
            "ba jaa-ni-bi"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-da may-do-zad",
            "dee-dan"
          ],
          [
            "می‌دوزد",
            "may-do-zad",
            "may-do-zad",
            "dee-da may-do-zad",
            "dokh-tan"
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
            "صدای",
            "sa-daa-yi",
            "sa-daa"
          ],
          [
            "رسایش",
            "ra-saa-yash",
            "ra-saa-yash"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "بیت",
            "bayt",
            "bayt"
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
            "ثبت",
            "sab-ti",
            "sabt",
            "sab-ti taa-reekh shu-da ast"
          ],
          [
            "تاریخ",
            "taa-reekh",
            "taa-reekh",
            "sab-ti taa-reekh shu-da ast"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "sab-ti taa-reekh shu-da ast",
            "shu-dan"
          ],
          [
            "است،",
            "ast",
            "ast",
            "sab-ti taa-reekh shu-da ast"
          ],
          [
            "می‌خواند:",
            "may-khaa-nad",
            "may-khaa-nad",
            "khaan-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "may-za-nad chash-mi ka-boo-di tu ba mizh-gaan naa-khun",
        "mean": "Your blue eye scratches with its lashes;",
        "words": [
          [
            "می‌زند",
            "may-za-nad",
            "may-za-nad",
            "za-dan"
          ],
          [
            "چشم",
            "chash-mi",
            "chashm"
          ],
          [
            "کبود",
            "ka-boo-di",
            "ka-bood"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مژگان",
            "mizh-gaan",
            "mizh-gaan"
          ],
          [
            "ناخن",
            "naa-khun",
            "naa-khun"
          ]
        ]
      },
      {
        "say": "tur-sam ay shokh mi-yaa-ni man wa tu jang sha-wad",
        "mean": "I fear, you rascal, there will be war between you and me.",
        "words": [
          [
            "ترسم",
            "tur-sam",
            "tur-sam",
            "tur-see-dan"
          ],
          [
            "ای",
            "ay",
            "ay"
          ],
          [
            "شوخ",
            "shokh",
            "shokh"
          ],
          [
            "میان",
            "mi-yaa-ni",
            "mi-yaan"
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
            "تو",
            "tu",
            "tu"
          ],
          [
            "جنگ",
            "jang",
            "jang"
          ],
          [
            "شود",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "een bayt “sar hin-ree daabz” raa ki baa ka-maa-li fa-saa-hat ba zu-baa-ni da-ree su-khan may-guft, khush na-may-aa-yad wa shak-li yak haa-di-sa-yi naa-gu-waa-ri dip-lo-maa-teek raa ba khud gi-rif-ta wa mu-zaa-ki-raat ba sar-dee may-ga-raa-yad.",
        "mean": "Sir Henry Dobbs, who spoke Dari very fluently, did not like this couplet; it took the shape of an unpleasant diplomatic incident, and the talks cooled.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "بیت",
            "bayt",
            "bayt"
          ],
          [
            "«سر",
            "sar",
            "sar"
          ],
          [
            "هنری",
            "hin-ree",
            "hin-ree"
          ],
          [
            "دابز»",
            "daabz",
            "daabz"
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
            "با",
            "baa",
            "baa",
            "baa ka-maa-li fa-saa-hat"
          ],
          [
            "کمال",
            "ka-maa-li",
            "ka-maal",
            "baa ka-maa-li fa-saa-hat"
          ],
          [
            "فصاحت",
            "fa-saa-hat",
            "fa-saa-hat",
            "baa ka-maa-li fa-saa-hat"
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
            "دری",
            "da-ree",
            "da-ree"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan",
            "su-khan may-guft"
          ],
          [
            "می‌گفت،",
            "may-guft",
            "may-guft",
            "su-khan may-guft",
            "guf-tan"
          ],
          [
            "خوش",
            "khush",
            "khush",
            "khush na-may-aa-yad"
          ],
          [
            "نمی‌آید",
            "na-may-aa-yad",
            "na-may-aa-yad",
            "khush na-may-aa-yad",
            "aa-ma-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شکل",
            "shak-li",
            "shakl"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "حادثهٔ",
            "haa-di-sa-yi",
            "haa-di-sa-yi"
          ],
          [
            "ناگوار",
            "naa-gu-waa-ri",
            "naa-gu-waar"
          ],
          [
            "دپلوماتیک",
            "dip-lo-maa-teek",
            "dip-lo-maa-teek"
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
            "مذاکرات",
            "mu-zaa-ki-raat",
            "mu-zaa-ki-raat"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba sar-dee may-ga-raa-yad"
          ],
          [
            "سردی",
            "sar-dee",
            "sar-dee",
            "ba sar-dee may-ga-raa-yad"
          ],
          [
            "می‌گراید.",
            "may-ga-raa-yad",
            "may-ga-raa-yad",
            "ba sar-dee may-ga-raa-yad",
            "ga-raa-yee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar mah-fi-li dee-ga-ray, baaz ham oo raa maw-ri-di khi-taab qa-raar daa-da wa may-sa-raa-yad:",
        "mean": "At another gathering he again addressed him and sang:",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "محفل",
            "mah-fi-li",
            "mah-fil"
          ],
          [
            "دیگری،",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "باز",
            "baaz",
            "baaz",
            "baaz ham"
          ],
          [
            "هم",
            "ham",
            "ham",
            "baaz ham"
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
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di khi-taab qa-raar daa-da"
          ],
          [
            "خطاب",
            "khi-taab",
            "khi-taab",
            "maw-ri-di khi-taab qa-raar daa-da"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "maw-ri-di khi-taab qa-raar daa-da"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "maw-ri-di khi-taab qa-raar daa-da",
            "daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "می‌سراید:",
            "may-sa-raa-yad",
            "may-sa-raa-yad",
            "su-roo-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ha-meen jaa sulh kun baa maa chi laa-zim",
        "mean": "Make peace with us right here; what need is there",
        "words": [
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "جا",
            "jaa",
            "jaa"
          ],
          [
            "صلح",
            "sulh",
            "sulh"
          ],
          [
            "کن",
            "kun",
            "kun",
            "kar-dan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "لازم",
            "laa-zim",
            "laa-zim"
          ]
        ]
      },
      {
        "say": "ki dar mah-shar za maa shar-min-da baa-shee",
        "mean": "for you to be ashamed before us on Judgment Day?",
        "words": [
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
            "محشر",
            "mah-shar",
            "mah-shar"
          ],
          [
            "ز",
            "za",
            "za"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "شرمنده",
            "shar-min-da",
            "shar-min-da"
          ],
          [
            "باشی",
            "baa-shee",
            "baa-shee",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "bil-aa-khi-ra dar mah-fi-li dee-ga-ray ki dar qas-ri su-toor daa-yir shu-da bood, waq-tay “sar hin-ree daabz” daa-khi-li taa-laar may-sha-wad, baad az mu-saa-fi-ha baa wa-zee-ri khaa-ri-ja wa a-raa-kee-ni daw-la-tee wa mu-az-zi-zee-ni af-ghaa-nee wa khaa-ri-jee, mus-ta-qeem ba so-yi us-taad qaa-sim may-ra-wad",
        "mean": "Finally, at another gathering held in the Stor Palace, when Sir Henry Dobbs entered the hall, after shaking hands with the foreign minister, the state officials and the Afghan and foreign dignitaries, he went straight to Ustad Qasim",
        "words": [
          [
            "بالآخره",
            "bil-aa-khi-ra",
            "bil-aa-khi-ra"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "محفل",
            "mah-fi-li",
            "mah-fil"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
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
            "قصر",
            "qas-ri",
            "qasr"
          ],
          [
            "ستور",
            "su-toor",
            "su-toor"
          ],
          [
            "دایر",
            "daa-yir",
            "daa-yir",
            "daa-yir shu-da bood"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "daa-yir shu-da bood",
            "shu-dan"
          ],
          [
            "بود،",
            "bood",
            "bood",
            "daa-yir shu-da bood",
            "bu-dan"
          ],
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "«سر",
            "sar",
            "sar"
          ],
          [
            "هنری",
            "hin-ree",
            "hin-ree"
          ],
          [
            "دابز»",
            "daabz",
            "daabz"
          ],
          [
            "داخل",
            "daa-khi-li",
            "daa-khil"
          ],
          [
            "تالار",
            "taa-laar",
            "taa-laar"
          ],
          [
            "می‌شود،",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
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
            "مصافحه",
            "mu-saa-fi-ha",
            "mu-saa-fi-ha"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "وزیر",
            "wa-zee-ri",
            "wa-zeer"
          ],
          [
            "خارجه",
            "khaa-ri-ja",
            "khaa-ri-ja"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اراکین",
            "a-raa-kee-ni",
            "a-raa-keen"
          ],
          [
            "دولتی",
            "daw-la-tee",
            "daw-la-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "معززین",
            "mu-az-zi-zee-ni",
            "mu-az-zi-zeen"
          ],
          [
            "افغانی",
            "af-ghaa-nee",
            "af-ghaa-nee"
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
            "مستقیم",
            "mus-ta-qeem",
            "mus-ta-qeem"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba so-yi"
          ],
          [
            "سوی",
            "so-yi",
            "so",
            "ba so-yi"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "می‌رود",
            "may-ra-wad",
            "may-ra-wad",
            "raf-tan"
          ]
        ]
      },
      {
        "say": "wa lah-zaa-tee baa way soh-bat may-ku-nad ki taa im-roz az muh-ta-waa-yi soh-ba-ti aan du, ma-loo-maa-tee dar dast neest;",
        "mean": "and talked with him for a few moments; to this day nothing is known of what the two of them said;",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "لحظاتی",
            "lah-zaa-tee",
            "lah-zaa-tee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "صحبت",
            "soh-bat",
            "soh-bat",
            "soh-bat may-ku-nad",
            "soh-bat kar-dan"
          ],
          [
            "می‌کند",
            "may-ku-nad",
            "may-ku-nad",
            "soh-bat may-ku-nad",
            "kar-dan",
            "soh-bat kar-dan"
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
            "از",
            "az",
            "az"
          ],
          [
            "محتوای",
            "muh-ta-waa-yi",
            "muh-ta-waa-yi"
          ],
          [
            "صحبت",
            "soh-ba-ti",
            "soh-bat"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "دو،",
            "du",
            "du"
          ],
          [
            "معلوماتی",
            "ma-loo-maa-tee",
            "ma-loo-maa-tee"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar dast"
          ],
          [
            "دست",
            "dast",
            "dast",
            "dar dast"
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
        "say": "wa-lay ha-ma may-bee-nand ki us-taad baa “sar hin-ree daabz” ba ta-ra-fi pi-yaa-no-yi bu-zur-gee ki dar go-sha-yi taa-laar gu-zaash-ta shu-da, may-ra-wad wa chee-zay raa ba oo sharh may-di-had.",
        "mean": "but everyone saw the ustad go with Sir Henry Dobbs to a big piano placed in the corner of the hall and explain something to him.",
        "words": [
          [
            "ولی",
            "wa-lay",
            "wa-lay"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "می‌بینند",
            "may-bee-nand",
            "may-bee-nand",
            "dee-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "«سر",
            "sar",
            "sar"
          ],
          [
            "هنری",
            "hin-ree",
            "hin-ree"
          ],
          [
            "دابز»",
            "daabz",
            "daabz"
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
            "پیانوی",
            "pi-yaa-no-yi",
            "pi-yaa-no-yi"
          ],
          [
            "بزرگی",
            "bu-zur-gee",
            "bu-zur-gee"
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
            "گوشهٔ",
            "go-sha-yi",
            "go-sha"
          ],
          [
            "تالار",
            "taa-laar",
            "taa-laar"
          ],
          [
            "گذاشته",
            "gu-zaash-ta",
            "gu-zaash-ta",
            "gu-zaash-ta shu-da",
            "gu-zaash-tan"
          ],
          [
            "شده،",
            "shu-da",
            "shu-da",
            "gu-zaash-ta shu-da",
            "shu-dan"
          ],
          [
            "می‌رود",
            "may-ra-wad",
            "may-ra-wad",
            "raf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چیزی",
            "chee-zay",
            "chee-zay"
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
            "او",
            "oo",
            "oo"
          ],
          [
            "شرح",
            "sharh",
            "sharh",
            "sharh may-di-had",
            "sharh daa-dan"
          ],
          [
            "می‌دهد.",
            "may-di-had",
            "may-di-had",
            "sharh may-di-had",
            "daa-dan",
            "sharh daa-dan"
          ]
        ]
      },
      {
        "say": "naa-ga-haan us-taad qaa-sim ba so-yi hu-zaar may-ni-ga-rad wa may-go-yad: “ja-naa-bi sa-feer wa na-maa-yin-da-yi faw-qul-aa-da-yi bi-taa-ni-ya may-khaa-hand yak aa-han-gi af-ghaa-nee raa ba ee-shaan bi-yaa-mo-zaa-nam wa man noot-haa-yi-yi yak aa-han-gi ha-maa-see maan raa sharh daa-dam, ki ee-nak may-khaa-hand khu-dish-aan aan raa baa pi-yaa-no na-waakh-ta wa zam-za-ma na-maa-yand. wa aan een ast”:",
        "mean": "Suddenly Ustad Qasim turned to the audience and said: “His Excellency the ambassador and special envoy of Britain wants me to teach him an Afghan song, and I have explained to him the notes of one of our rousing songs, which he now wants to play on the piano himself and sing. And here it is”:",
        "words": [
          [
            "ناگهان",
            "naa-ga-haan",
            "naa-ga-haan"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba so-yi"
          ],
          [
            "سوی",
            "so-yi",
            "so",
            "ba so-yi"
          ],
          [
            "حضار",
            "hu-zaar",
            "hu-zaar"
          ],
          [
            "می‌نگرد",
            "may-ni-ga-rad",
            "may-ni-ga-rad",
            "ni-ga-ris-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "می‌گوید:",
            "may-go-yad",
            "may-go-yad",
            "guf-tan"
          ],
          [
            "«جناب",
            "ja-naa-bi",
            "ja-naab"
          ],
          [
            "سفیر",
            "sa-feer",
            "sa-feer"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نمایندهٔ",
            "na-maa-yin-da-yi",
            "na-maa-yin-da-yi"
          ],
          [
            "فوق‌العادهٔ",
            "faw-qul-aa-da-yi",
            "faw-qul-aa-da-yi"
          ],
          [
            "برتانیه",
            "bi-taa-ni-ya",
            "bi-taa-ni-ya"
          ],
          [
            "می‌خواهند",
            "may-khaa-hand",
            "may-khaa-hand",
            "khaas-tan"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "آهنگ",
            "aa-han-gi",
            "aa-hang"
          ],
          [
            "افغانی",
            "af-ghaa-nee",
            "af-ghaa-nee"
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
            "ایشان",
            "ee-shaan",
            "ee-shaan"
          ],
          [
            "بیاموزانم",
            "bi-yaa-mo-zaa-nam",
            "bi-yaa-mo-zaa-nam",
            "aa-mo-zaan-dan"
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
            "نوت‌های",
            "noot-haa-yi-yi",
            "noot-haa-yi"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "آهنگ",
            "aa-han-gi",
            "aa-hang"
          ],
          [
            "حماسی",
            "ha-maa-see",
            "ha-maa-see"
          ],
          [
            "مان",
            "maan",
            "maan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "شرح",
            "sharh",
            "sharh",
            "sharh daa-dam"
          ],
          [
            "دادم،",
            "daa-dam",
            "daa-dam",
            "sharh daa-dam",
            "daa-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "اینک",
            "ee-nak",
            "ee-nak"
          ],
          [
            "می‌خواهند",
            "may-khaa-hand",
            "may-khaa-hand",
            "khaas-tan"
          ],
          [
            "خودشان",
            "khu-dish-aan",
            "khu-dish-aan"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "پیانو",
            "pi-yaa-no",
            "pi-yaa-no"
          ],
          [
            "نواخته",
            "na-waakh-ta",
            "na-waakh-ta",
            "na-waakh-tan"
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
            "zam-za-ma na-maa-yand"
          ],
          [
            "نمایند.",
            "na-maa-yand",
            "na-maa-yand",
            "zam-za-ma na-maa-yand",
            "na-mo-dan"
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
            "است»:",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "mak-ta-bi maast jaa-yi is-tiq-laal",
        "mean": "Our school is the home of independence;",
        "words": [
          [
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "ماست",
            "maast",
            "maast"
          ],
          [
            "جای",
            "jaa-yi",
            "jaa"
          ],
          [
            "استقلال",
            "is-tiq-laal",
            "is-tiq-laal"
          ]
        ]
      },
      {
        "say": "sa-ba-qi maa ha-waa-yi is-tiq-laal",
        "mean": "our lesson is the longing for independence.",
        "words": [
          [
            "سبق",
            "sa-ba-qi",
            "sa-baq"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "هوای",
            "ha-waa-yi",
            "ha-waa"
          ],
          [
            "استقلال",
            "is-tiq-laal",
            "is-tiq-laal"
          ]
        ]
      }
    ],
    [
      {
        "say": "ha-ma hu-zaar ba kaf za-dan shu-roo may-ku-nand wa ba-raa-yi us-taad qaa-sim ki may-khaa-had mi-raa-ji wa-tan dos-tee-yi khud raa saa-bit saa-zad, mar-ha-baa may-fi-ris-tand;",
        "mean": "The whole audience began to clap and cheered Ustad Qasim, who wanted to prove the height of his love for his country;",
        "words": [
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "حضار",
            "hu-zaar",
            "hu-zaar"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba kaf za-dan"
          ],
          [
            "کف",
            "kaf",
            "kaf",
            "ba kaf za-dan"
          ],
          [
            "زدن",
            "za-dan",
            "za-dan",
            "ba kaf za-dan"
          ],
          [
            "شروع",
            "shu-roo",
            "shu-roo",
            "shu-roo may-ku-nand",
            "shu-roo kar-dan"
          ],
          [
            "می‌کنند",
            "may-ku-nand",
            "may-ku-nand",
            "shu-roo may-ku-nand",
            "kar-dan",
            "shu-roo kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "می‌خواهد",
            "may-khaa-had",
            "may-khaa-had",
            "khaas-tan"
          ],
          [
            "معراج",
            "mi-raa-ji",
            "mi-raaj"
          ],
          [
            "وطن",
            "wa-tan",
            "wa-tan",
            "wa-tan dos-tee-yi"
          ],
          [
            "دوستی",
            "dos-tee-yi",
            "dos-tee",
            "wa-tan dos-tee-yi"
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
            "ثابت",
            "saa-bit",
            "saa-bit",
            "saa-bit saa-zad",
            "saa-bit saakh-tan"
          ],
          [
            "سازد،",
            "saa-zad",
            "saa-zad",
            "saa-bit saa-zad",
            "saakh-tan",
            "saa-bit saakh-tan"
          ],
          [
            "مرحبا",
            "mar-ha-baa",
            "mar-ha-baa"
          ],
          [
            "می‌فرستند؛",
            "may-fi-ris-tand",
            "may-fi-ris-tand",
            "fi-ris-taa-dan"
          ]
        ]
      },
      {
        "say": "si-pas “hin-ree daabz” mu-qaa-bi-li pi-yaa-no qa-raar may-gee-rad wa ha-meen aa-han-gi ha-maa-see-yi af-ghaa-nee raa may-na-waa-zad ki ta-ra-fi e-jaab wa ta-hay-yu-ri hu-zaar waa-qi shu-da, baa kaf za-dan-haa-yi-yi mum-tad bad-ra-qa may-gar-dad.",
        "mean": "then Henry Dobbs sat at the piano and played this same rousing Afghan song, which amazed the audience and was followed by long applause.",
        "words": [
          [
            "سپس",
            "si-pas",
            "si-pas"
          ],
          [
            "«هنری",
            "hin-ree",
            "hin-ree"
          ],
          [
            "دابز»",
            "daabz",
            "daabz"
          ],
          [
            "مقابل",
            "mu-qaa-bi-li",
            "mu-qaa-bil"
          ],
          [
            "پیانو",
            "pi-yaa-no",
            "pi-yaa-no"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "qa-raar may-gee-rad",
            "qa-raar gi-rif-tan"
          ],
          [
            "می‌گیرد",
            "may-gee-rad",
            "may-gee-rad",
            "qa-raar may-gee-rad",
            "gi-rif-tan",
            "qa-raar gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "آهنگ",
            "aa-han-gi",
            "aa-hang"
          ],
          [
            "حماسی",
            "ha-maa-see-yi",
            "ha-maa-see"
          ],
          [
            "افغانی",
            "af-ghaa-nee",
            "af-ghaa-nee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "می‌نوازد",
            "may-na-waa-zad",
            "may-na-waa-zad",
            "na-waakh-tan"
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
            "ta-ra-fi e-jaab wa ta-hay-yu-ri hu-zaar waa-qi shu-da"
          ],
          [
            "اعجاب",
            "e-jaab",
            "e-jaab",
            "ta-ra-fi e-jaab wa ta-hay-yu-ri hu-zaar waa-qi shu-da"
          ],
          [
            "و",
            "wa",
            "wa",
            "ta-ra-fi e-jaab wa ta-hay-yu-ri hu-zaar waa-qi shu-da"
          ],
          [
            "تحیر",
            "ta-hay-yu-ri",
            "ta-hay-yur",
            "ta-ra-fi e-jaab wa ta-hay-yu-ri hu-zaar waa-qi shu-da"
          ],
          [
            "حضار",
            "hu-zaar",
            "hu-zaar",
            "ta-ra-fi e-jaab wa ta-hay-yu-ri hu-zaar waa-qi shu-da"
          ],
          [
            "واقع",
            "waa-qi",
            "waa-qi",
            "ta-ra-fi e-jaab wa ta-hay-yu-ri hu-zaar waa-qi shu-da"
          ],
          [
            "شده،",
            "shu-da",
            "shu-da",
            "ta-ra-fi e-jaab wa ta-hay-yu-ri hu-zaar waa-qi shu-da",
            "shu-dan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "کف",
            "kaf",
            "kaf",
            "kaf za-dan-haa-yi-yi mum-tad"
          ],
          [
            "زدن‌های",
            "za-dan-haa-yi-yi",
            "za-dan-haa-yi",
            "kaf za-dan-haa-yi-yi mum-tad"
          ],
          [
            "ممتد",
            "mum-tad",
            "mum-tad",
            "kaf za-dan-haa-yi-yi mum-tad"
          ],
          [
            "بدرقه",
            "bad-ra-qa",
            "bad-ra-qa",
            "bad-ra-qa may-gar-dad"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "bad-ra-qa may-gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "dar ha-qee-qat pa-yaa-mi is-tiq-laa-li af-ghaa-nis-taan ba-raa-yi nukhus-teen-baar az han-ja-ra-yi yak hu-nar-mand ta-neen an-daaz gar-dee-da wa ta-was-su-ti na-maa-yin-da-yi ing-lees ta-yeed may-sha-wad.",
        "mean": "In fact, the message of Afghanistan's independence rang out for the first time from the throat of an artist and was confirmed by the British envoy.",
        "words": [
          [
            "در",
            "dar",
            "dar",
            "dar ha-qee-qat"
          ],
          [
            "حقیقت",
            "ha-qee-qat",
            "ha-qee-qat",
            "dar ha-qee-qat"
          ],
          [
            "پیام",
            "pa-yaa-mi",
            "pa-yaam"
          ],
          [
            "استقلال",
            "is-tiq-laa-li",
            "is-tiq-laal"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "نخستین‌بار",
            "nukhus-teen-baar",
            "nukhus-teen-baar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "حنجرهٔ",
            "han-ja-ra-yi",
            "han-ja-ra-yi"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "هنرمند",
            "hu-nar-mand",
            "hu-nar-mand"
          ],
          [
            "طنین",
            "ta-neen",
            "ta-neen",
            "ta-neen an-daaz gar-dee-da"
          ],
          [
            "انداز",
            "an-daaz",
            "an-daaz",
            "ta-neen an-daaz gar-dee-da",
            "an-daakh-tan"
          ],
          [
            "گردیده",
            "gar-dee-da",
            "gar-dee-da",
            "ta-neen an-daaz gar-dee-da",
            "gar-dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "نمایندهٔ",
            "na-maa-yin-da-yi",
            "na-maa-yin-da-yi"
          ],
          [
            "انگلیس",
            "ing-lees",
            "ing-lees"
          ],
          [
            "تأیید",
            "ta-yeed",
            "ta-yeed",
            "ta-yeed may-sha-wad"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "ta-yeed may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "far-daa-yi aan roz shaah a-maa-nul-laah khaan, us-taad qaa-sim raa ba hu-zoor may-pa-zee-rad wa dar ba-raa-ba-ri ha-ma a-raa-kee-ni daw-la-tee wa mu-az-zi-zee-nee ki aan-jaa hu-zoor daa-rand, dar aa-gho-shi pur-mih-rash may-fi-shaa-rad wa sa-na-di e-taa-yi ni-shaa-ni zu-mur-rud ba naa-mi “ma-sar-rat” raa ba oo may-di-had",
        "mean": "The next day King Amanullah Khan received Ustad Qasim, embraced him warmly in front of all the officials and dignitaries who were there, and gave him the certificate of the emerald medal called “Masarrat”, Joy,",
        "words": [
          [
            "فردای",
            "far-daa-yi",
            "far-daa"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "روز",
            "roz",
            "roz"
          ],
          [
            "شاه",
            "shaah",
            "shaah"
          ],
          [
            "امان‌الله",
            "a-maa-nul-laah",
            "a-maa-nul-laah"
          ],
          [
            "خان،",
            "khaan",
            "khaan"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
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
            "ba hu-zoor may-pa-zee-rad"
          ],
          [
            "حضور",
            "hu-zoor",
            "hu-zoor",
            "ba hu-zoor may-pa-zee-rad"
          ],
          [
            "می‌پذیرد",
            "may-pa-zee-rad",
            "may-pa-zee-rad",
            "ba hu-zoor may-pa-zee-rad",
            "pa-zee-ruf-tan"
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
            "dar ba-raa-ba-ri"
          ],
          [
            "برابر",
            "ba-raa-ba-ri",
            "ba-raa-bar",
            "dar ba-raa-ba-ri"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "اراکین",
            "a-raa-kee-ni",
            "a-raa-keen"
          ],
          [
            "دولتی",
            "daw-la-tee",
            "daw-la-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "معززینی",
            "mu-az-zi-zee-nee",
            "mu-az-zi-zee-nee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "آن‌جا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "حضور",
            "hu-zoor",
            "hu-zoor",
            "hu-zoor daa-rand"
          ],
          [
            "دارند،",
            "daa-rand",
            "daa-rand",
            "hu-zoor daa-rand",
            "daash-tan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آغوش",
            "aa-gho-shi",
            "aa-ghosh"
          ],
          [
            "پرمهرش",
            "pur-mih-rash",
            "pur-mih-rash"
          ],
          [
            "می‌فشارد",
            "may-fi-shaa-rad",
            "may-fi-shaa-rad",
            "fi-shur-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سند",
            "sa-na-di",
            "sa-nad"
          ],
          [
            "اعطای",
            "e-taa-yi",
            "e-taa-yi"
          ],
          [
            "نشان",
            "ni-shaa-ni",
            "ni-shaan"
          ],
          [
            "زمرد",
            "zu-mur-rud",
            "zu-mur-rud"
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
            "«مسرت»",
            "ma-sar-rat",
            "ma-sar-rat"
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
            "او",
            "oo",
            "oo"
          ],
          [
            "می‌دهد",
            "may-di-had",
            "may-di-had",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "wa may-go-yad: “dar ki-naa-ri raas-ti naa-mat ka-li-ma-yi ar-ju-mand (us-taad) raa pa-da-ri bu-zurg-waa-ram, a-meer saa-hi-bi sha-heed, gu-zaash-ta boo-dand wa man im-roz dar ki-naa-ri cha-pi naa-mat ka-li-ma-yi baa-shu-koh (af-ghaan) raa i-zaa-fa may-ku-nam ki sum-bo-li hu-wee-yat wa if-ti-khaa-ri ha-ma baa-shin-da-gaa-ni een sar-za-meen ast.”",
        "mean": "and said: “My noble father, the martyred amir, put the honored word ustad on the right side of your name, and today I add on its left side the glorious word Afghan, the symbol of the identity and pride of all the people of this land.”",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "می‌گوید:",
            "may-go-yad",
            "may-go-yad",
            "guf-tan"
          ],
          [
            "«در",
            "dar",
            "dar"
          ],
          [
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "راست",
            "raas-ti",
            "raast"
          ],
          [
            "نامت",
            "naa-mat",
            "naa-mat"
          ],
          [
            "کلمهٔ",
            "ka-li-ma-yi",
            "ka-li-ma"
          ],
          [
            "ارجمند",
            "ar-ju-mand",
            "ar-ju-mand"
          ],
          [
            "(استاد)",
            "us-taad",
            "us-taad"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "پدر",
            "pa-da-ri",
            "pa-dar"
          ],
          [
            "بزرگوارم،",
            "bu-zurg-waa-ram",
            "bu-zurg-waa-ram"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer",
            "a-meer saa-hi-bi sha-heed"
          ],
          [
            "صاحب",
            "saa-hi-bi",
            "saa-hib",
            "a-meer saa-hi-bi sha-heed"
          ],
          [
            "شهید،",
            "sha-heed",
            "sha-heed",
            "a-meer saa-hi-bi sha-heed"
          ],
          [
            "گذاشته",
            "gu-zaash-ta",
            "gu-zaash-ta",
            "gu-zaash-tan"
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
            "من",
            "man",
            "man"
          ],
          [
            "امروز",
            "im-roz",
            "im-roz"
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
            "چپ",
            "cha-pi",
            "chap"
          ],
          [
            "نامت",
            "naa-mat",
            "naa-mat"
          ],
          [
            "کلمهٔ",
            "ka-li-ma-yi",
            "ka-li-ma"
          ],
          [
            "باشکوه",
            "baa-shu-koh",
            "baa-shu-koh"
          ],
          [
            "(افغان)",
            "af-ghaan",
            "af-ghaan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "اضافه",
            "i-zaa-fa",
            "i-zaa-fa",
            "i-zaa-fa may-ku-nam",
            "i-zaa-fa kar-dan"
          ],
          [
            "می‌کنم",
            "may-ku-nam",
            "may-ku-nam",
            "i-zaa-fa may-ku-nam",
            "kar-dan",
            "i-zaa-fa kar-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "سمبول",
            "sum-bo-li",
            "sum-bol"
          ],
          [
            "هویت",
            "hu-wee-yat",
            "hu-wee-yat"
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
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "باشنده‌گان",
            "baa-shin-da-gaa-ni",
            "baa-shin-da-gaan"
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
            "است.»",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "wa az aan roz ba baad ha-ma oo raa ba naa-mi us-taad qaa-sim af-ghaan may-shi-naa-sand.",
        "mean": "And from that day on, everyone has known him as Ustad Qasim Afghan.",
        "words": [
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
            "روز",
            "roz",
            "roz"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba baad"
          ],
          [
            "بعد",
            "baad",
            "baad#after",
            "ba baad"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
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
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "افغان",
            "af-ghaan",
            "af-ghaan"
          ],
          [
            "می‌شناسند.",
            "may-shi-naa-sand",
            "may-shi-naa-sand",
            "shi-naakh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "us-taad qaa-sim dar ha-ma ar-sa-haa-yi-yi daa-ni-shi mo-see-qee az ta-waa-naa-yee-haa-yi-yi way-zha-yay bar-khor-daar bood;",
        "mean": "Ustad Qasim had special abilities in every field of music;",
        "words": [
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "عرصه‌های",
            "ar-sa-haa-yi-yi",
            "ar-sa-haa-yi"
          ],
          [
            "دانش",
            "daa-ni-shi",
            "daa-nish"
          ],
          [
            "موسیقی",
            "mo-see-qee",
            "mo-see-qee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "توانایی‌های",
            "ta-waa-naa-yee-haa-yi-yi",
            "ta-waa-naa-yee-haa-yi"
          ],
          [
            "ویژه‌یی",
            "way-zha-yay",
            "way-zha-yay"
          ],
          [
            "برخوردار",
            "bar-khor-daar",
            "bar-khor-daar",
            "bar-khor-daar bood",
            "bar-khor-daar bu-dan"
          ],
          [
            "بود؛",
            "bood",
            "bood",
            "bar-khor-daar bood",
            "bu-dan",
            "bar-khor-daar bu-dan"
          ]
        ]
      },
      {
        "say": "chu-naan-ki dar su-roo-da-ni gha-zal, ta-raa-na wa ha-ma an-waa-yi aa-hang-haa-yi-yi ful-ku-lo-ree, az ha-ma us-taa-daa-ni mu-aa-si-ri khaysh pe-shee gi-rif-ta bood;",
        "mean": "in composing ghazals, songs and all kinds of folk tunes he had surpassed all the masters of his time;",
        "words": [
          [
            "چنان‌که",
            "chu-naan-ki",
            "chu-naan-ki"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سرودن",
            "su-roo-da-ni",
            "su-roo-dan"
          ],
          [
            "غزل،",
            "gha-zal",
            "gha-zal"
          ],
          [
            "ترانه",
            "ta-raa-na",
            "ta-raa-na"
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
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "آهنگ‌های",
            "aa-hang-haa-yi-yi",
            "aa-hang-haa-yi"
          ],
          [
            "فلکلوری،",
            "ful-ku-lo-ree",
            "ful-ku-lo-ree"
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
            "استادان",
            "us-taa-daa-ni",
            "us-taa-daan"
          ],
          [
            "معاصر",
            "mu-aa-si-ri",
            "mu-aa-sir"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "پیشی",
            "pe-shee",
            "pe-shee",
            "pe-shee gi-rif-ta bood",
            "pe-shee gi-rif-tan"
          ],
          [
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "pe-shee gi-rif-ta bood",
            "gi-rif-tan",
            "pe-shee gi-rif-tan"
          ],
          [
            "بود؛",
            "bood",
            "bood",
            "pe-shee gi-rif-ta bood",
            "bu-dan",
            "pe-shee gi-rif-tan"
          ]
        ]
      },
      {
        "say": "ham-chu-naan way nu-khus-teen hu-nar-man-dee bood ki qis-ma-ti zi-yaa-dee az aa-hang-haa-yi-yi qa-dee-mee wa ful-ku-lo-ree-yi wa-tan raa dar cho-kaa-ti ma-qaam-haa-yi-yi mo-see-qee tan-zeem na-mo-da wa aan-haa raa mu-ar-ri-fee kard, ki een shay-wa raa us-taa-daa-ni dee-gar wa shaa-gir-daa-nash ta-qeeb na-mo-dand;",
        "mean": "he was also the first artist to arrange many of the country's old folk tunes within the framework of the musical modes and make them known, and other masters and his students followed this method;",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "هنرمندی",
            "hu-nar-man-dee",
            "hu-nar-man-dee"
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
            "قسمت",
            "qis-ma-ti",
            "qis-mat"
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
            "آهنگ‌های",
            "aa-hang-haa-yi-yi",
            "aa-hang-haa-yi"
          ],
          [
            "قدیمی",
            "qa-dee-mee",
            "qa-dee-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فلکلوری",
            "ful-ku-lo-ree-yi",
            "ful-ku-lo-ree"
          ],
          [
            "وطن",
            "wa-tan",
            "wa-tan"
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
            "چوکات",
            "cho-kaa-ti",
            "cho-kaat"
          ],
          [
            "مقام‌های",
            "ma-qaam-haa-yi-yi",
            "ma-qaam-haa-yi"
          ],
          [
            "موسیقی",
            "mo-see-qee",
            "mo-see-qee"
          ],
          [
            "تنظیم",
            "tan-zeem",
            "tan-zeem",
            "tan-zeem na-mo-da",
            "tan-zeem na-mo-dan"
          ],
          [
            "نموده",
            "na-mo-da",
            "na-mo-da",
            "tan-zeem na-mo-da",
            "na-mo-dan",
            "tan-zeem na-mo-dan"
          ],
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
            "معرفی",
            "mu-ar-ri-fee",
            "mu-ar-ri-fee",
            "mu-ar-ri-fee kard",
            "mu-ar-ri-fee kar-dan"
          ],
          [
            "کرد،",
            "kard",
            "kard",
            "mu-ar-ri-fee kard",
            "kar-dan",
            "mu-ar-ri-fee kar-dan"
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
            "شیوه",
            "shay-wa",
            "shay-wa"
          ],
          [
            "را",
            "raa",
            "raa"
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
            "و",
            "wa",
            "wa"
          ],
          [
            "شاگردانش",
            "shaa-gir-daa-nash",
            "shaa-gir-daa-nash"
          ],
          [
            "تعقیب",
            "ta-qeeb",
            "ta-qeeb",
            "ta-qeeb na-mo-dand",
            "ta-qeeb na-mo-dan"
          ],
          [
            "نمودند؛",
            "na-mo-dand",
            "na-mo-dand",
            "ta-qeeb na-mo-dand",
            "na-mo-dan",
            "ta-qeeb na-mo-dan"
          ]
        ]
      },
      {
        "say": "az een-roo us-taad qaa-sim af-ghaan raa ki bun-yaan-gu-zaa-ri mak-ta-bi mo-see-qee-yi af-ghaa-nee ast ba naa-mi pa-da-ri mo-see-qee-yi af-ghaa-nis-taan la-qab daa-da and.",
        "mean": "so Ustad Qasim Afghan, the founder of the Afghan school of music, has been given the title of father of Afghan music.",
        "words": [
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
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "افغان",
            "af-ghaan",
            "af-ghaan"
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
            "بنیانگذار",
            "bun-yaan-gu-zaa-ri",
            "bun-yaan-gu-zaar"
          ],
          [
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "موسیقی",
            "mo-see-qee-yi",
            "mo-see-qee"
          ],
          [
            "افغانی",
            "af-ghaa-nee",
            "af-ghaa-nee"
          ],
          [
            "است",
            "ast",
            "ast"
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
            "پدر",
            "pa-da-ri",
            "pa-dar"
          ],
          [
            "موسیقی",
            "mo-see-qee-yi",
            "mo-see-qee"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "لقب",
            "la-qab",
            "la-qab",
            "la-qab daa-da and"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "la-qab daa-da and",
            "daa-dan"
          ],
          [
            "اند.",
            "and",
            "and",
            "la-qab daa-da and"
          ]
        ]
      },
      {
        "say": "oo az khud tarz wa mak-ta-bee daasht ki taa im-roz ba naa-mi mak-ta-bi us-taad qaa-sim yaad may-sha-wad.",
        "mean": "He had his own style and school, which to this day is called the school of Ustad Qasim.",
        "words": [
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
            "خود",
            "khud",
            "khud"
          ],
          [
            "طرز",
            "tarz",
            "tarz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مکتبی",
            "mak-ta-bee",
            "mak-ta-bee"
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
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "یاد",
            "yaad",
            "yaad",
            "yaad may-sha-wad",
            "yaad shu-dan"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "yaad may-sha-wad",
            "shu-dan",
            "yaad shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "us-taad qaa-sim af-ghaan shaa-gir-daa-ni zi-yaa-dee dar saa-ha-yi mo-see-qee-yi mis-la-kee wa aa-maa-toor tar-bee-ya na-mo-da wa ba jaa-mi-a-yi af-ghaa-nis-taan taq-deem daash-ta ast ki har ka-daa-mi aan-haa taa im-roz dar aa-si-maa-ni mo-see-qee-yi af-ghaa-nis-taan may-di-rakh-shand;",
        "mean": "Ustad Qasim Afghan trained many students in professional and amateur music and gave them to Afghan society, and each of them still shines in the sky of Afghan music today;",
        "words": [
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "افغان",
            "af-ghaan",
            "af-ghaan"
          ],
          [
            "شاگردان",
            "shaa-gir-daa-ni",
            "shaa-gir-daan"
          ],
          [
            "زیادی",
            "zi-yaa-dee",
            "zi-yaa-dee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ساحهٔ",
            "saa-ha-yi",
            "saa-ha-yi"
          ],
          [
            "موسیقی",
            "mo-see-qee-yi",
            "mo-see-qee"
          ],
          [
            "مسلکی",
            "mis-la-kee",
            "mis-la-kee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آماتور",
            "aa-maa-toor",
            "aa-maa-toor"
          ],
          [
            "تربیه",
            "tar-bee-ya",
            "tar-bee-ya",
            "tar-bee-ya na-mo-da",
            "tar-bee-ya na-mo-dan"
          ],
          [
            "نموده",
            "na-mo-da",
            "na-mo-da",
            "tar-bee-ya na-mo-da",
            "na-mo-dan",
            "tar-bee-ya na-mo-dan"
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
            "جامعهٔ",
            "jaa-mi-a-yi",
            "jaa-mi-a"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "تقدیم",
            "taq-deem",
            "taq-deem",
            "taq-deem daash-ta ast"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "taq-deem daash-ta ast",
            "daash-tan"
          ],
          [
            "است",
            "ast",
            "ast",
            "taq-deem daash-ta ast"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "هر",
            "har",
            "har",
            "har ka-daa-mi aan-haa"
          ],
          [
            "کدام",
            "ka-daa-mi",
            "ka-daam",
            "har ka-daa-mi aan-haa"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa",
            "har ka-daa-mi aan-haa"
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
            "در",
            "dar",
            "dar"
          ],
          [
            "آسمان",
            "aa-si-maa-ni",
            "aa-si-maan"
          ],
          [
            "موسیقی",
            "mo-see-qee-yi",
            "mo-see-qee"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "می‌درخشند؛",
            "may-di-rakh-shand",
            "may-di-rakh-shand",
            "da-rakh-shee-dan"
          ]
        ]
      },
      {
        "say": "maa-nand: us-taad ghu-laam na-bee na-too, us-taad saa-bir, us-taad ra-heem bakhsh, us-taad na-bee gul, us-taad yaa-qoob qaa-si-mee, us-taad yoo-suf qaa-si-mee, us-taad moo-saa qaa-si-mee, us-taad mu-ham-mad um-ri ru-baab na-waaz, us-taad bar-shnaa wa dee-ga-raan.",
        "mean": "such as Ustad Ghulam Nabi Natu, Ustad Sabir, Ustad Rahim Bakhsh, Ustad Nabi Gul, Ustad Yaqub Qasimi, Ustad Yusuf Qasimi, Ustad Musa Qasimi, Ustad Muhammad Umar the rubab player, Ustad Breshna and others.",
        "words": [
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "غلام",
            "ghu-laam",
            "ghu-laam"
          ],
          [
            "نبی",
            "na-bee",
            "na-bee"
          ],
          [
            "نتو،",
            "na-too",
            "na-too"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "صابر،",
            "saa-bir",
            "saa-bir"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "رحیم",
            "ra-heem",
            "ra-heem"
          ],
          [
            "بخش،",
            "bakhsh",
            "bakhsh"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "نبی",
            "na-bee",
            "na-bee"
          ],
          [
            "گل،",
            "gul",
            "gul"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "یعقوب",
            "yaa-qoob",
            "yaa-qoob"
          ],
          [
            "قاسمی،",
            "qaa-si-mee",
            "qaa-si-mee"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "یوسف",
            "yoo-suf",
            "yoo-suf"
          ],
          [
            "قاسمی،",
            "qaa-si-mee",
            "qaa-si-mee"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "موسی",
            "moo-saa",
            "moo-saa"
          ],
          [
            "قاسمی،",
            "qaa-si-mee",
            "qaa-si-mee"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "عمر",
            "um-ri",
            "umr"
          ],
          [
            "رباب",
            "ru-baab",
            "ru-baab",
            "ru-baab na-waaz"
          ],
          [
            "نواز،",
            "na-waaz",
            "na-waaz",
            "ru-baab na-waaz"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "برشنا",
            "bar-shnaa",
            "bar-shnaa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دیگران.",
            "dee-ga-raan",
            "dee-ga-raan"
          ]
        ]
      }
    ],
    [
      {
        "say": "us-taad ba-raa-yi aa-mokh-ta-ni baysh-ta-ri bay-dil-shi-naa-see, gha-za-lee-yaat wa ash-aa-ri aa-ri-faa-na, das-ti shaa-gir-dee ba jaa-ni-bi shaad-ra-waan ab-dul-a-lee mus-tagh-nee wa us-taad ab-dul-haq bay-taab da-raaz na-mo-da",
        "mean": "To learn more about Bedil's poetry, ghazals and mystic verse, the ustad became a student of the late Abdul Ali Mustaghni and of Ustad Abdul Haq Betab,",
        "words": [
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "آموختن",
            "aa-mokh-ta-ni",
            "aa-mokh-tan"
          ],
          [
            "بیشتر",
            "baysh-ta-ri",
            "baysh-tar"
          ],
          [
            "بیدل‌شناسی،",
            "bay-dil-shi-naa-see",
            "bay-dil-shi-naa-see"
          ],
          [
            "غزلیات",
            "gha-za-lee-yaat",
            "gha-za-lee-yaat"
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
            "عارفانه،",
            "aa-ri-faa-na",
            "aa-ri-faa-na"
          ],
          [
            "دست",
            "das-ti",
            "dast"
          ],
          [
            "شاگردی",
            "shaa-gir-dee",
            "shaa-gir-dee"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba jaa-ni-bi"
          ],
          [
            "جانب",
            "jaa-ni-bi",
            "jaa-nib",
            "ba jaa-ni-bi"
          ],
          [
            "شادروان",
            "shaad-ra-waan",
            "shaad-ra-waan"
          ],
          [
            "عبدالعلی",
            "ab-dul-a-lee",
            "ab-dul-a-lee"
          ],
          [
            "مستغنی",
            "mus-tagh-nee",
            "mus-tagh-nee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "عبدالحق",
            "ab-dul-haq",
            "ab-dul-haq"
          ],
          [
            "بیتاب",
            "bay-taab",
            "bay-taab"
          ],
          [
            "دراز",
            "da-raaz",
            "da-raaz",
            "da-raaz na-mo-da",
            "da-raaz na-mo-dan"
          ],
          [
            "نموده",
            "na-mo-da",
            "na-mo-da",
            "da-raaz na-mo-da",
            "na-mo-dan",
            "da-raaz na-mo-dan"
          ]
        ]
      },
      {
        "say": "bar a-laa-wa az mah-za-ri us-taa-daa-ni dee-ga-ray; choon: mu-ham-mad sa-roor dih-qaan, ghu-laam haz-rat shaa-yiq ja-maal wa soo-fee ghu-laam na-bee ish-qa-ree bah-ra-haa burd ki ha-ma-yi een an-dokh-ta-haa dar shu-go-faa-yee-yi ha-yaa-ti hin-ree-yi oo naq-shi ba-raa-zin-da daash-tand.",
        "mean": "and besides, he benefited from the company of other masters, such as Muhammad Sarwar Dihqan, Ghulam Hazrat Shayiq Jamal and Sufi Ghulam Nabi Ishqari, and all this learning played a fine part in the flowering of his artistic life.",
        "words": [
          [
            "بر",
            "bar",
            "bar",
            "bar a-laa-wa"
          ],
          [
            "علاوه",
            "a-laa-wa",
            "a-laa-wa",
            "bar a-laa-wa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "محضر",
            "mah-za-ri",
            "mah-zar"
          ],
          [
            "استادان",
            "us-taa-daa-ni",
            "us-taa-daan"
          ],
          [
            "دیگری؛",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "چون:",
            "choon",
            "choon"
          ],
          [
            "محمد",
            "mu-ham-mad",
            "mu-ham-mad"
          ],
          [
            "سرور",
            "sa-roor",
            "sa-roor"
          ],
          [
            "دهقان،",
            "dih-qaan",
            "dih-qaan"
          ],
          [
            "غلام",
            "ghu-laam",
            "ghu-laam"
          ],
          [
            "حضرت",
            "haz-rat",
            "haz-rat"
          ],
          [
            "شایق",
            "shaa-yiq",
            "shaa-yiq"
          ],
          [
            "جمال",
            "ja-maal",
            "ja-maal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صوفی",
            "soo-fee",
            "soo-fee"
          ],
          [
            "غلام",
            "ghu-laam",
            "ghu-laam"
          ],
          [
            "نبی",
            "na-bee",
            "na-bee"
          ],
          [
            "عشقری",
            "ish-qa-ree",
            "ish-qa-ree"
          ],
          [
            "بهره‌ها",
            "bah-ra-haa",
            "bah-ra-haa",
            "bah-ra-haa burd",
            "bah-ra bur-dan"
          ],
          [
            "برد",
            "burd",
            "burd",
            "bah-ra-haa burd",
            "bur-dan",
            "bah-ra bur-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "همهٔ",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "اندوخته‌ها",
            "an-dokh-ta-haa",
            "an-dokh-ta-haa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "شگوفایی",
            "shu-go-faa-yee-yi",
            "shu-go-faa-yee"
          ],
          [
            "حیات",
            "ha-yaa-ti",
            "ha-yaat"
          ],
          [
            "هنری",
            "hin-ree-yi",
            "hin-ree"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "نقش",
            "naq-shi",
            "naqsh",
            "naq-shi ba-raa-zin-da daash-tand"
          ],
          [
            "برازنده",
            "ba-raa-zin-da",
            "ba-raa-zin-da",
            "naq-shi ba-raa-zin-da daash-tand"
          ],
          [
            "داشتند.",
            "daash-tand",
            "daash-tand",
            "naq-shi ba-raa-zin-da daash-tand",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "dar ki-naa-ri een ha-ma, way ak-sa-ri aw-qaa-tash raa dar mu-taa-li-a-yi aa-saa-ri bu-zur-gaan wa gha-za-lee-yaat wa ru-baa-ee-yaa-ti haa-fiz, sa-dee, bay-dil, maw-laa-naa wa dee-gar bu-zur-gaa-ni a-dab si-pa-ree kar-da",
        "mean": "Besides all this, he spent most of his time studying the works of the great, and the ghazals and quatrains of Hafiz, Sa'di, Bedil, Mawlana and other great men of letters,",
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
            "این",
            "een",
            "een"
          ],
          [
            "همه،",
            "ha-ma",
            "ha-ma"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "اکثر",
            "ak-sa-ri",
            "ak-sar"
          ],
          [
            "اوقاتش",
            "aw-qaa-tash",
            "aw-qaa-tash"
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
            "مطالعهٔ",
            "mu-taa-li-a-yi",
            "mu-taa-li-a-yi"
          ],
          [
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "بزرگان",
            "bu-zur-gaan",
            "bu-zur-gaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غزلیات",
            "gha-za-lee-yaat",
            "gha-za-lee-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رباعیات",
            "ru-baa-ee-yaa-ti",
            "ru-baa-ee-yaat"
          ],
          [
            "حافظ،",
            "haa-fiz",
            "haa-fiz"
          ],
          [
            "سعدی،",
            "sa-dee",
            "sa-dee"
          ],
          [
            "بیدل،",
            "bay-dil",
            "bay-dil"
          ],
          [
            "مولانا",
            "maw-laa-naa",
            "maw-laa-naa"
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
            "بزرگان",
            "bu-zur-gaa-ni",
            "bu-zur-gaan"
          ],
          [
            "ادب",
            "a-dab",
            "a-dab"
          ],
          [
            "سپری",
            "si-pa-ree",
            "si-pa-ree"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "wa dar raa-hi aa-mokh-ta-ni shi'r wa a-dab wa kas-bi ma-loo-maa-ti aa-faa-qay az har saa-hi-bi khi-rad wa daa-nish-man-dee is-ti-faa-da-yi aa-za-mee may-ba-rad ki gaa-hay khu-dash neez dar zam-za-ma-haa-yash dar een maw-rid may-su-rood:",
        "mean": "and in learning poetry and literature and gaining knowledge of the world he made the greatest use of every wise and learned person, and sometimes he himself sang about this:",
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
            "راه",
            "raa-hi",
            "raah"
          ],
          [
            "آموختن",
            "aa-mokh-ta-ni",
            "aa-mokh-tan"
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
            "کسب",
            "kas-bi",
            "kasb"
          ],
          [
            "معلومات",
            "ma-loo-maa-ti",
            "ma-loo-maat"
          ],
          [
            "آفاقی",
            "aa-faa-qay",
            "aa-faa-qay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "صاحب",
            "saa-hi-bi",
            "saa-hib"
          ],
          [
            "خرد",
            "khi-rad",
            "khi-rad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دانشمندی",
            "daa-nish-man-dee",
            "daa-nish-man-dee"
          ],
          [
            "استفادهٔ",
            "is-ti-faa-da-yi",
            "is-ti-faa-da",
            "is-ti-faa-da-yi aa-za-mee may-ba-rad"
          ],
          [
            "اعظمی",
            "aa-za-mee",
            "aa-za-mee",
            "is-ti-faa-da-yi aa-za-mee may-ba-rad"
          ],
          [
            "می‌برد",
            "may-ba-rad",
            "may-ba-rad",
            "is-ti-faa-da-yi aa-za-mee may-ba-rad",
            "bur-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "گاهی",
            "gaa-hay",
            "gaa-hay"
          ],
          [
            "خودش",
            "khu-dash",
            "khu-dash"
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
            "زمزمه‌هایش",
            "zam-za-ma-haa-yash",
            "zam-za-ma-haa-yash"
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
            "می‌سرود:",
            "may-su-rood",
            "may-su-rood",
            "su-roo-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "naa-la az nay gir-ya az a-ba-ri ba-haar aa-mokh-tam",
        "mean": "I learned moaning from the reed and weeping from the spring cloud;",
        "words": [
          [
            "ناله",
            "naa-la",
            "naa-la"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نی",
            "nay",
            "nay"
          ],
          [
            "گریه",
            "gir-ya",
            "gir-ya"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "ابر",
            "a-ba-ri",
            "a-bar"
          ],
          [
            "بهار",
            "ba-haar",
            "ba-haar"
          ],
          [
            "آموختم",
            "aa-mokh-tam",
            "aa-mokh-tam",
            "aa-mokh-tan"
          ]
        ]
      },
      {
        "say": "man za har saa-hi-bi khi-rad yak sham-ma kaar aa-mokh-tam",
        "mean": "from every wise man I learned a little of the craft.",
        "words": [
          [
            "من",
            "man",
            "man"
          ],
          [
            "ز",
            "za",
            "za"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "صاحب",
            "saa-hi-bi",
            "saa-hib"
          ],
          [
            "خرد",
            "khi-rad",
            "khi-rad"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "شمه",
            "sham-ma",
            "sham-ma"
          ],
          [
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "آموختم",
            "aa-mokh-tam",
            "aa-mokh-tam",
            "aa-mokh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "us-taad qaa-sim, du baar dar za-maa-ni paad-shaa-hee-yi a-meer a-maa-nul-laah-khaan, ba ak-zi mi-daa-li al-maas ni-shaan ba naa-mi “yaad-gaa-ri is-tiq-laal” wa mi-daa-li zu-mur-rud ni-shaa-ni dee-ga-ray ba naa-mi “ma-sar-rat” muf-ta-khir gar-dee-da ast;",
        "mean": "Twice in the reign of Amir Amanullah Khan, Ustad Qasim was honored with medals: a diamond-set medal called “Memorial of Independence” and another emerald-set medal called “Joy”;",
        "words": [
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم،",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "بار",
            "baar",
            "baar"
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
            "پادشاهی",
            "paad-shaa-hee-yi",
            "paad-shaa-hee"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "امان‌الله‌خان،",
            "a-maa-nul-laah-khaan",
            "a-maa-nul-laah-khaan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "اخذ",
            "ak-zi",
            "akz"
          ],
          [
            "مدال",
            "mi-daa-li",
            "mi-daal"
          ],
          [
            "الماس",
            "al-maas",
            "al-maas",
            "al-maas ni-shaan"
          ],
          [
            "نشان",
            "ni-shaan",
            "ni-shaan",
            "al-maas ni-shaan"
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
            "«یادگار",
            "yaad-gaa-ri",
            "yaad-gaar"
          ],
          [
            "استقلال»",
            "is-tiq-laal",
            "is-tiq-laal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مدال",
            "mi-daa-li",
            "mi-daal"
          ],
          [
            "زمرد",
            "zu-mur-rud",
            "zu-mur-rud",
            "zu-mur-rud ni-shaa-ni"
          ],
          [
            "نشان",
            "ni-shaa-ni",
            "ni-shaan",
            "zu-mur-rud ni-shaa-ni"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
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
            "«مسرت»",
            "ma-sar-rat",
            "ma-sar-rat"
          ],
          [
            "مفتخر",
            "muf-ta-khir",
            "muf-ta-khir",
            "muf-ta-khir gar-dee-da ast"
          ],
          [
            "گردیده",
            "gar-dee-da",
            "gar-dee-da",
            "muf-ta-khir gar-dee-da ast",
            "gar-dee-dan"
          ],
          [
            "است؛",
            "ast",
            "ast",
            "muf-ta-khir gar-dee-da ast"
          ]
        ]
      },
      {
        "say": "ham-chu-naan dar saa-li yak-ha-zaa-ru sih-sa-du see-u du hij-ree. sham-see., za-maa-nay ki “ri-yaa-sa-ti raa-di-yo kaa-bul” haf-taa-do-meen saal-roo-zi ta-wal-lu-di us-taad raa jashn gi-rif-ta bood, ba dar-yaaf-ti ni-shaa-ni mu-tal-laa-yi “khid-mat” muf-ta-khir shud",
        "mean": "also, in 1332 (1953), when Radio Kabul celebrated the ustad's seventieth birthday, he was honored with the gold-plated medal “Service”,",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
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
            "۱۳۳۲",
            "yak-ha-zaa-ru sih-sa-du see-u du",
            "yak-ha-zaa-ru sih-sa-du see-u du"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree",
            "hij-ree sham-see"
          ],
          [
            "ش.،",
            "sham-see",
            "sham-see",
            "hij-ree sham-see"
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
            "«ریاست",
            "ri-yaa-sa-ti",
            "ri-yaa-sat"
          ],
          [
            "رادیو",
            "raa-di-yo",
            "raa-di-yo"
          ],
          [
            "کابل»",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "هفتادمین",
            "haf-taa-do-meen",
            "haf-taa-do-meen"
          ],
          [
            "سالروز",
            "saal-roo-zi",
            "saal-rooz"
          ],
          [
            "تولد",
            "ta-wal-lu-di",
            "ta-wal-lud"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "جشن",
            "jashn",
            "jashn",
            "jashn gi-rif-ta bood"
          ],
          [
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "jashn gi-rif-ta bood",
            "gi-rif-tan"
          ],
          [
            "بود،",
            "bood",
            "bood",
            "jashn gi-rif-ta bood",
            "bu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دریافت",
            "dar-yaaf-ti",
            "dar-yaaft"
          ],
          [
            "نشان",
            "ni-shaa-ni",
            "ni-shaan"
          ],
          [
            "مطلای",
            "mu-tal-laa-yi",
            "mu-tal-laa-yi"
          ],
          [
            "«خدمت»",
            "khid-mat",
            "khid-mat"
          ],
          [
            "مفتخر",
            "muf-ta-khir",
            "muf-ta-khir",
            "muf-ta-khir shud"
          ],
          [
            "شد",
            "shud",
            "shud",
            "muf-ta-khir shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "wa dar ha-maan za-maan ba far-maa-ni shaah, ba-raa-yi sa-taa-yish az khi-da-maat wa ma-qaa-mi ar-ju-man-di hin-ree wa far-han-gee-yi aan bu-zurg-mard, mu-jas-sa-ma-yi bu-ron-zee-yi oo dar mad-kha-li taa-laa-ri i-maa-ra-ti ja-dee-di raa-di-yo af-ghaa-nis-taan nasb gar-deed.",
        "mean": "and at the same time, by order of the king, to praise the services and the high artistic and cultural standing of that great man, a bronze statue of him was set up at the entrance of the hall of the new Radio Afghanistan building.",
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
            "همان",
            "ha-maan",
            "ha-maan"
          ],
          [
            "زمان",
            "za-maan",
            "za-maan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "فرمان",
            "far-maa-ni",
            "far-maan"
          ],
          [
            "شاه،",
            "shaah",
            "shaah"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "ستایش",
            "sa-taa-yish",
            "sa-taa-yish"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "خدمات",
            "khi-da-maat",
            "khi-da-maat"
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
            "ارجمند",
            "ar-ju-man-di",
            "ar-ju-mand"
          ],
          [
            "هنری",
            "hin-ree",
            "hin-ree"
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "بزرگمرد،",
            "bu-zurg-mard",
            "bu-zurg-mard"
          ],
          [
            "مجسمهٔ",
            "mu-jas-sa-ma-yi",
            "mu-jas-sa-ma-yi"
          ],
          [
            "برونزی",
            "bu-ron-zee-yi",
            "bu-ron-zee"
          ],
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
            "مدخل",
            "mad-kha-li",
            "mad-khal"
          ],
          [
            "تالار",
            "taa-laa-ri",
            "taa-laar"
          ],
          [
            "عمارت",
            "i-maa-ra-ti",
            "i-maa-rat"
          ],
          [
            "جدید",
            "ja-dee-di",
            "ja-deed"
          ],
          [
            "رادیو",
            "raa-di-yo",
            "raa-di-yo"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
          ],
          [
            "نصب",
            "nasb",
            "nasb",
            "nasb gar-deed"
          ],
          [
            "گردید.",
            "gar-deed",
            "gar-deed",
            "nasb gar-deed",
            "gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "bil-aa-khi-ra us-taad qaa-sim af-ghaan ba taa-ree-khi da-waaz-da sun-bu-la-yi yak-ha-zaa-ru sih-sa-du see-u panj hij-ree. sham-see. dar ko-cha-yi kha-raa-baa-ti kaa-bul wa-faat yaaft wa ja-naa-za-ash baa ma-raa-si-mi khaa-say dar shu-ha-daa-yi saa-li-hee-ni kaa-bul muh-ta-ra-maa-na ba khaak si-pur-da shud.",
        "mean": "Finally, Ustad Qasim Afghan died on 12 Sunbula 1335 (3 September 1956) in the Kharabat lane of Kabul, and his body was buried with honor and special ceremonies in the Shuhada-yi Salihin cemetery of Kabul.",
        "words": [
          [
            "بالآخره",
            "bil-aa-khi-ra",
            "bil-aa-khi-ra"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "قاسم",
            "qaa-sim",
            "qaa-sim"
          ],
          [
            "افغان",
            "af-ghaan",
            "af-ghaan"
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
            "۱۲",
            "da-waaz-da",
            "da-waaz-da"
          ],
          [
            "سنبلهٔ",
            "sun-bu-la-yi",
            "sun-bu-la-yi"
          ],
          [
            "۱۳۳۵",
            "yak-ha-zaa-ru sih-sa-du see-u panj",
            "yak-ha-zaa-ru sih-sa-du see-u panj"
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
            "کوچهٔ",
            "ko-cha-yi",
            "ko-cha-yi"
          ],
          [
            "خرابات",
            "kha-raa-baa-ti",
            "kha-raa-baat"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "وفات",
            "wa-faat",
            "wa-faat",
            "wa-faat yaaft"
          ],
          [
            "یافت",
            "yaaft",
            "yaaft",
            "wa-faat yaaft",
            "yaaf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جنازه‌اش",
            "ja-naa-za-ash",
            "ja-naa-za-ash"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "مراسم",
            "ma-raa-si-mi",
            "ma-raa-sim"
          ],
          [
            "خاصی",
            "khaa-say",
            "khaa-say"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "شهدای",
            "shu-ha-daa-yi",
            "shu-ha-daa-yi",
            "shu-ha-daa-yi saa-li-hee-ni"
          ],
          [
            "صالحین",
            "saa-li-hee-ni",
            "saa-li-heen",
            "shu-ha-daa-yi saa-li-hee-ni"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "محترمانه",
            "muh-ta-ra-maa-na",
            "muh-ta-ra-maa-na"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba khaak si-pur-da shud",
            "ba khaak si-pur-dan"
          ],
          [
            "خاک",
            "khaak",
            "khaak",
            "ba khaak si-pur-da shud",
            "ba khaak si-pur-dan"
          ],
          [
            "سپرده",
            "si-pur-da",
            "si-pur-da",
            "ba khaak si-pur-da shud",
            "si-pur-dan",
            "ba khaak si-pur-dan"
          ],
          [
            "شد.",
            "shud",
            "shud",
            "ba khaak si-pur-da shud",
            "shu-dan",
            "ba khaak si-pur-dan"
          ]
        ]
      },
      {
        "say": "roo-hash shaad wa yaa-dash gi-raa-mee baad.",
        "mean": "May his soul be happy and his memory honored.",
        "words": [
          [
            "روحش",
            "roo-hash",
            "roo-hash"
          ],
          [
            "شاد",
            "shaad",
            "shaad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یادش",
            "yaa-dash",
            "yaa-dash"
          ],
          [
            "گرامی",
            "gi-raa-mee",
            "gi-raa-mee"
          ],
          [
            "باد.",
            "baad",
            "baad"
          ]
        ]
      }
    ]
  ]
});
