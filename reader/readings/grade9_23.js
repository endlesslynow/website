/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 23, book pages 148-149, PDF pages 155-156 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «آن‌را» is written «آن را»; «خانه دار» is written «خانه‌دار»; «بوده اند» is written «بوده‌اند»; «فاسدشدن» is written «فاسد شدن»; «گرفته اند» is written «گرفته‌اند»; «اطلاع رسانی» is written «اطلاع‌رسانی»; «عبرت آموز» is written «عبرت‌آموز».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-23',
  group: 'Dari · grade 9',
  label: 'Lesson 23',
  name: "ra-saa-na-haa-yi tas-wee-ree (te-le-wee-zee-yon, kam-pyoo-tar, see-na-maa wa-ghi-ra)",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_23.jpg',
    alt: "A computer monitor glowing at the center of an abstract blue composition."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_23.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "ra-saa-na-haa":          { fa: "رسانه‌ها", mean: "media" },
    "tas-wee-ree":            { fa: "تصویری", mean: "figurative, pictorial" },
    "te-le-wee-zee-yon":      { fa: "تلویزیون", mean: "television" },
    "kam-pyoo-tar":           { fa: "کمپیوتر", mean: "computer" },
    "see-na-maa":             { fa: "سینما", mean: "cinema" },
    "wa-ghi-ra":              { fa: "و...", mean: "and so on" },
    "dar":                    { fa: "در", mean: "in" },
    "dun-yaa":                { fa: "دنیا", mean: "world" },
    "it-ti-laa-aat":          { fa: "اطلاعات", mean: "information" },
    "in-qi-laa-bee":          { fa: "انقلابی", mean: "a revolution; revolutionary" },
    "in-qi-laab":             { fa: "انقلاب", mean: "revolution" },
    "raa":                    { fa: "را", mean: "marks the object of the verb" },
    "bar":                    { fa: "بر", mean: "on, upon" },
    "paa":                    { fa: "پا", mean: "foot, leg" },
    "kar-da":                 { fa: "کرده", mean: "done" },
    "kar-dan":                { fa: "کردن", mean: "to do, to make" },
    "ast":                    { fa: "است", mean: "is" },
    "saakh-taar":             { fa: "ساختار", mean: "structure" },
    "wa":                     { fa: "و", mean: "and" },
    "fa-aa-lee-yat":          { fa: "فعالیت", mean: "activity" },
    "fa-qat":                 { fa: "فقط", mean: "only" },
    "it-ti-laa-ra-saa-nee":   { fa: "اطلاع‌رسانی", mean: "providing information" },
    "khu-laa-sa":             { fa: "خلاصه", mean: "in short; summary" },
    "na-may-sha-wad":         { fa: "نمی‌شود", mean: "cannot be, does not become" },
    "shu-dan":                { fa: "شدن", mean: "to become" },
    "bal-ki":                 { fa: "بلکه", mean: "but rather" },
    "bar-naa-ma-haa-yi":      { fa: "برنامه‌های", mean: "programs, measures" },
    "il-mee":                 { fa: "علمی", mean: "scholarly, scientific" },
    "taf-ree-hee":            { fa: "تفریحی", mean: "recreational, entertaining" },
    "khaa-na-waa-da-gee":     { fa: "خانواده‌گی", mean: "of the family" },
    "na-maa-yish":            { fa: "نمایش", mean: "display, show" },
    "ha-waa-dis":             { fa: "حوادث", mean: "cases, events" },
    "roo-yee-daad-haa":       { fa: "رویدادها", mean: "events" },
    "roo-yee-daad":           { fa: "رویداد", mean: "event" },
    "da-raa-ma-haa":          { fa: "درامه‌ها", mean: "dramas" },
    "da-raa-maa":             { fa: "درامه", mean: "drama" },
    "sir-yaa-lhaa":           { fa: "سریال‌ها", mean: "series" },
    "sir-yaal":               { fa: "سریال", mean: "series" },
    "film-haa-yi":            { fa: "فلم‌های", mean: "films" },
    "film":                   { fa: "فلم", mean: "film" },
    "mukh-ta-lif":            { fa: "مختلف", mean: "different, various" },
    "neez":                   { fa: "نیز", mean: "also, too" },
    "shaa-mil":               { fa: "شامل", mean: "including" },
    "kaar":                   { fa: "کار", mean: "work, a job" },
    "im-roz":                 { fa: "امروز", mean: "today" },
    "az":                     { fa: "از", mean: "from, of" },
    "mu-him":                 { fa: "مهم", mean: "important" },
    "ha-ma":                  { fa: "همه", mean: "all, every" },
    "jum-la":                 { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "ta-maa-shaa-yi":         { fa: "تماشای", mean: "watching, viewing" },
    "ta-maa-shaa":            { fa: "تماشا", mean: "viewing" },
    "aan":                    { fa: "آن", mean: "that" },
    "daa-raa-yi":             { fa: "دارای", mean: "having, possessing" },
    "fa-waa-yid":             { fa: "فواید", mean: "benefits" },
    "faa-yi-da":              { fa: "فایده", mean: "use, benefit" },
    "mu-zar-raat":            { fa: "مضرات", mean: "harms" },
    "mu-zir-rat":             { fa: "مضرت", mean: "harm" },
    "sarf":                   { fa: "صرف", mean: "regardless of; only" },
    "na-zar":                 { fa: "نظر", mean: "sight, view; opinion" },
    "maw-zoo":                { fa: "موضوع", mean: "subject, point" },
    "muh-ta-waa-yi":          { fa: "محتوای", mean: "content, substance" },
    "bar-naa-ma-haa":         { fa: "برنامه‌ها", mean: "programs, measures" },
    "film-haa":               { fa: "فلم‌ها", mean: "films" },
    "fa-waa-yi-dee":          { fa: "فوایدی", mean: "some benefits" },
    "ki":                     { fa: "که", mean: "that, which, who" },
    "ba":                     { fa: "به", mean: "to" },
    "bar-khay":               { fa: "برخی", mean: "some" },
    "i-shaa-ra":              { fa: "اشاره", mean: "indication, reference" },
    "may-sha-wad":            { fa: "می‌شود", mean: "becomes" },
    "bu-zurg-ta-reen":        { fa: "بزرگترین", mean: "largest, greatest" },
    "man-ba":                 { fa: "منبع", mean: "source" },
    "gu-zaa-rish":            { fa: "گزارش", mean: "report" },
    "kha-bar":                { fa: "خبر", mean: "news, word" },
    "akh-baar":               { fa: "اخبار", mean: "news" },
    "soo-rat":                { fa: "صورت", mean: "face, outward form" },
    "mus-ta-nad":             { fa: "مستند", mean: "documented, documentary" },
    "gaah":                   { fa: "گاه", mean: "sometimes; time, place" },
    "mus-ta-qeem":            { fa: "مستقیم", mean: "direct, directly" },
    "pakhsh":                 { fa: "پخش", mean: "circulation, broadcast" },
    "may-ku-nad":             { fa: "می‌کند", mean: "does, makes" },
    "war-zi-shee":            { fa: "ورزشی", mean: "sports-related" },
    "mee-ta-waa-neem":        { fa: "می‌توانیم", mean: "we can" },
    "ta-waa-nis-tan":         { fa: "توانستن", mean: "to be able, can" },
    "ni-gaah":                { fa: "نگاه", mean: "look, gaze" },
    "ku-naym":                { fa: "کنیم", mean: "we do" },
    "yak":                    { fa: "یک", mean: "one, a" },
    "dars-gaah":              { fa: "درس‌گاه", mean: "place of learning" },
    "dars-haa-yi":            { fa: "درس‌های", mean: "lessons" },
    "dars":                   { fa: "درس", mean: "lesson" },
    "qur-aan":                { fa: "قرآن", mean: "the Quran" },
    "taj-weed":               { fa: "تجوید", mean: "Quranic recitation" },
    "may-ta-waan":            { fa: "می‌توان", mean: "one can" },
    "deed":                   { fa: "دید", mean: "saw" },
    "dee-dan":                { fa: "دیدن", mean: "to see; seeing" },
    "shi-need":               { fa: "شنید", mean: "heard" },
    "shi-nee-dan":            { fa: "شنیدن", mean: "to hear" },
    "is-ti-faa-da-haa":       { fa: "استفاده‌ها", mean: "uses" },
    "is-ti-faa-da":           { fa: "استفاده", mean: "use" },
    "kard":                   { fa: "کرد", mean: "did, made" },
    "saa-yir":                { fa: "سایر", mean: "other" },
    "u-loom":                 { fa: "علوم", mean: "sciences" },
    "ilm":                    { fa: "علم", mean: "knowledge, learning" },
    "aa-moo-zi-shee":         { fa: "آموزشی", mean: "educational" },
    "fa-raa-gi-rift":         { fa: "فراگرفت", mean: "learned (the book's note: learned)" },
    "fa-raa-gi-rif-tan":      { fa: "فراگرفتن", mean: "to learn" },
    "taj-ru-ba-haa":          { fa: "تجربه‌ها", mean: "experiences" },
    "taj-ru-ba":              { fa: "تجربه", mean: "experience" },
    "aaz-maa-yish-haa":       { fa: "آزمایش‌ها", mean: "experiments" },
    "aaz-maa-yish":           { fa: "آزمایش", mean: "test, trial" },
    "ta-ree-qa-haa":          { fa: "طریقه‌ها", mean: "methods" },
    "ta-ree-qa":              { fa: "طریقه", mean: "method" },
    "aa-mokht":               { fa: "آموخت", mean: "learned" },
    "aa-mokh-tan":            { fa: "آموختن", mean: "to learn" },
    "bi-khu-soos":            { fa: "به‌خصوص", mean: "especially" },
    "za-naan":                { fa: "زنان", mean: "women" },
    "dukh-ta-raan":           { fa: "دختران", mean: "girls, daughters" },
    "may-ta-waa-nand":        { fa: "می‌توانند", mean: "can" },
    "aa-mo-zish":             { fa: "آموزش", mean: "study, education" },
    "aash-pa-zee":            { fa: "آشپزی", mean: "cooking" },
    "kha-yaa-tee":            { fa: "خیاطی", mean: "sewing" },
    "na-zaa-fat":             { fa: "نظافت", mean: "cleanliness, cleaning" },
    "hir-fa-haa":             { fa: "حرفه‌ها", mean: "trades, professions" },
    "hir-fa":                 { fa: "حرفه", mean: "trade, profession" },
    "ku-nand":                { fa: "کنند", mean: "they do" },
    "hat-taa":                { fa: "حتا", mean: "even" },
    "naa-gu-waar":            { fa: "ناگوار", mean: "unpleasant" },
    "may-ta-waa-nad":         { fa: "می‌تواند", mean: "can" },
    "ta-seer":                { fa: "تأثیر", mean: "effect, influence" },
    "mus-bat":                { fa: "مثبت", mean: "positive" },
    "daash-ta":               { fa: "داشته", mean: "had" },
    "daash-tan":              { fa: "داشتن", mean: "to have" },
    "baa-shad":               { fa: "باشد", mean: "be, should be" },
    "bu-dan":                 { fa: "بودن", mean: "to be" },
    "ma-sa-lan":              { fa: "مثلاً", mean: "for example" },
    "haa-di-sa-yi":           { fa: "حادثهٔ", mean: "incident, event" },
    "ta-raa-fee-kee":         { fa: "ترافیکی", mean: "traffic-related" },
    "aan-chi":                { fa: "آن‌چه", mean: "what, that which" },
    "pas":                    { fa: "پس", mean: "then, so" },
    "haa-di-sa":              { fa: "حادثه", mean: "accident, event" },
    "it-ti-faaq":             { fa: "اتفاق", mean: "agreement, event" },
    "uf-taa-da":              { fa: "افتاده", mean: "fallen, stopped working" },
    "uf-taa-dan":             { fa: "افتادن", mean: "to fall" },
    "zee-raa":                { fa: "زیرا", mean: "because" },
    "ib-rat-aa-mooz":         { fa: "عبرت‌آموز", mean: "serving as a warning" },
    "khaa-had":               { fa: "خواهد", mean: "will" },
    "khaas-tan":              { fa: "خواستن", mean: "to want" },
    "bood":                   { fa: "بود", mean: "was" },
    "baa-is":                 { fa: "باعث", mean: "cause" },
    "ji-law-gee-ree":         { fa: "جلوگیری", mean: "prevention, stopping" },
    "tik-raar":               { fa: "تکرار", mean: "repetition" },
    "aa-yan-da":              { fa: "آینده", mean: "future, coming" },
    "may-gar-dad":            { fa: "می‌گردد", mean: "becomes, turns" },
    "gar-dee-dan":            { fa: "گردیدن", mean: "to become, to turn" },
    "khush-gu-waar":          { fa: "خوشگوار", mean: "pleasant" },
    "sir-yaal-haa-yi":        { fa: "سریال‌های", mean: "series" },
    "saa-lim":                { fa: "سالم", mean: "healthy" },
    "aa-moo-zan-da":          { fa: "آموزنده", mean: "educational, instructive" },
    "hin-ree":                { fa: "هنری", mean: "Henry" },
    "kaar-too-nee":           { fa: "کارتونی", mean: "animated, cartoon" },
    "ba-raa-yi":              { fa: "برای", mean: "for" },
    "a-zaa":                  { fa: "اعضا", mean: "members" },
    "khaa-na-waa-da":         { fa: "خانواده", mean: "family" },
    "way-zha":                { fa: "ویژه", mean: "special (ba way-zha, especially)" },
    "at-faal":                { fa: "اطفال", mean: "children" },
    "sar-garm-ku-nan-da":     { fa: "سرگرم‌کننده", mean: "entertaining" },
    "dil-chasp":              { fa: "دلچسپ", mean: "interesting" },
    "cheez-haa-yi":           { fa: "چیزهای", mean: "things" },
    "cheez":                  { fa: "چیز", mean: "thing" },
    "mu-fee-dee":             { fa: "مفیدی", mean: "useful things, useful" },
    "mu-feed":                { fa: "مفید", mean: "useful, beneficial" },
    "bee-aa-moo-zand":        { fa: "بیاموزند", mean: "they learn" },
    "am-maa":                 { fa: "اما", mean: "but" },
    "za-rar-haa-yee":         { fa: "ضررهایی", mean: "some harms" },
    "za-rar":                 { fa: "ضرر", mean: "harm" },
    "ham":                    { fa: "هم", mean: "also, too" },
    "daa-rad":                { fa: "دارد", mean: "has" },
    "na-baa-yad":             { fa: "نباید", mean: "must not" },
    "naa-dee-da":             { fa: "نادیده", mean: "unseen, ignored" },
    "gi-rift":                { fa: "گرفت", mean: "took; began" },
    "gi-rif-tan":             { fa: "گرفتن", mean: "to take" },
    "mash-ghool":             { fa: "مشغول", mean: "occupied, busy" },
    "waqt":                   { fa: "وقت", mean: "time" },
    "zi-yaad":                { fa: "زیاد", mean: "many, much" },
    "gi-rif-ta":              { fa: "گرفته", mean: "taken; having taken" },
    "sa-bab":                 { fa: "سبب", mean: "cause, reason" },
    "kha-lal":                { fa: "خلل", mean: "disruption" },
    "yaa":                    { fa: "یا", mean: "or" },
    "a-qab-maa-nee":          { fa: "عقب‌مانی", mean: "delay, falling behind" },
    "kaar-haa":               { fa: "کارها", mean: "works, jobs" },
    "een":                    { fa: "این", mean: "this" },
    "man-fee":                { fa: "منفی", mean: "negative" },
    "haal":                   { fa: "حال", mean: "state, condition" },
    "maa-moo-reen":           { fa: "مأمورین", mean: "officials, employees" },
    "maa-moor":               { fa: "مأمور", mean: "official, employee" },
    "mu-al-li-meen":          { fa: "معلمین", mean: "teachers" },
    "mu-al-lim":              { fa: "معلم", mean: "teacher" },
    "shaa-gir-daan":          { fa: "شاگردان", mean: "students" },
    "ahl":                    { fa: "اهل", mean: "people (of a place)" },
    "kasb":                   { fa: "کسب", mean: "gaining, acquisition" },
    "khaa-na":                { fa: "خانه", mean: "house, home" },
    "ba-saa":                 { fa: "بسا", mean: "often, many" },
    "dee-da":                 { fa: "دیده", mean: "seen; eye" },
    "shu-da":                 { fa: "شده", mean: "become; been" },
    "saa-at-haa":             { fa: "ساعت‌ها", mean: "hours" },
    "saa-at":                 { fa: "ساعت", mean: "hour" },
    "paa-yeen":               { fa: "پایین", mean: "lower; Payin (in names)" },
    "aa-ma-dan":              { fa: "آمدن", mean: "to come" },
    "saw-ya-yi":              { fa: "سویهٔ", mean: "level of" },
    "saw-ya":                 { fa: "سویه", mean: "level" },
    "ta-lee-mee":             { fa: "تعلیمی", mean: "educational" },
    "aan-haa":                { fa: "آن‌ها", mean: "they, them" },
    "na-ta-waa-nis-ta-and":   { fa: "نتوانسته‌اند", mean: "they have been unable" },
    "dars-haa":               { fa: "درس‌ها", mean: "lessons" },
    "khaa-na-gee":            { fa: "خانه‌گی", mean: "domestic, homework" },
    "khud":                   { fa: "خود", mean: "own; self" },
    "bi-ra-sand":             { fa: "برسند", mean: "they attend to, reach" },
    "ra-see-dan":             { fa: "رسیدن", mean: "to arrive, to reach" },
    "khaa-num-haa-yi":        { fa: "خانم‌های", mean: "women, ladies" },
    "khaa-num":               { fa: "خانم", mean: "woman, lady" },
    "khaa-na-daar":           { fa: "خانه‌دار", mean: "homemaker" },
    "u-moor":                 { fa: "امور", mean: "matters" },
    "mu-waa-zi-bat":          { fa: "مواظبت", mean: "care, supervision" },
    "tar-bee-ya":             { fa: "تربیه", mean: "training, education" },
    "far-zan-daan":           { fa: "فرزندان", mean: "children, sons" },
    "ish-ti-ghaal":           { fa: "اشتغال", mean: "occupation, engagement" },
    "daa-rand":               { fa: "دارند", mean: "have" },
    "a-sar":                  { fa: "اثر", mean: "work (of writing or art)" },
    "ak-sar":                 { fa: "اکثر", mean: "mostly" },
    "as-lee":                 { fa: "اصلی", mean: "original, main" },
    "baaz-maan-da":           { fa: "بازمانده", mean: "left behind, prevented" },
    "baaz-maan-dan":          { fa: "بازماندن", mean: "to fall behind, be prevented" },
    "aash-pa-zee-shaan":      { fa: "آشپزی‌شان", mean: "their cooking" },
    "mukh-tal":               { fa: "مختل", mean: "disrupted, out of order" },
    "waz":                    { fa: "وضع", mean: "condition, situation" },
    "khurd":                  { fa: "خورد", mean: "small, young" },
    "saal":                   { fa: "سال", mean: "year" },
    "bee-kha-bar":            { fa: "بی‌خبر", mean: "unaware" },
    "boo-da-and":             { fa: "بوده‌اند", mean: "have been" },
    "ta-waj-juh":             { fa: "توجه", mean: "attention" },
    "qab-lee":                { fa: "قبلی", mean: "previous" },
    "na-daash-ta-and":        { fa: "نداشته‌اند", mean: "have not had" },
    "choon":                  { fa: "چون", mean: "like, as; when; because" },
    "baysh-tar":              { fa: "بیشتر", mean: "more" },
    "ya-kay":                 { fa: "یکی", mean: "one" },
    "ta-see-raat":            { fa: "تأثیرات", mean: "effects" },
    "soo":                    { fa: "سوء", mean: "bad, harmful" },
    "jan-gee":                { fa: "جنگی", mean: "war-related" },
    "kha-yaa-lee":            { fa: "خیالی", mean: "imaginary, fantasy" },
    "faa-sid":                { fa: "فاسد", mean: "corrupt" },
    "akh-laaq":               { fa: "اخلاق", mean: "character, manners, morals" },
    "ja-waa-naan":            { fa: "جوانان", mean: "young people" },
    "no-ja-waa-naan":         { fa: "نوجوانان", mean: "adolescents" },
    "no-ja-waan":             { fa: "نوجوان", mean: "adolescent" },
    "jaa-mi-a":               { fa: "جامعه", mean: "society" },
    "kish-war-haa":           { fa: "کشورها", mean: "countries" },
    "ir-ti-kaab":             { fa: "ارتکاب", mean: "committing, perpetration" },
    "jurm":                   { fa: "جرم", mean: "crime" },
    "i-ti-raaf":              { fa: "اعتراف", mean: "confession, admission" },
    "kar-da-and":             { fa: "کرده‌اند", mean: "they have done" },
    "yaad":                   { fa: "یاد", mean: "memory, mention" },
    "gi-rif-ta-and":          { fa: "گرفته‌اند", mean: "they have taken" },
    "is-ti-maal":             { fa: "استعمال", mean: "use, usage" },
    "ma-waad":                { fa: "مواد", mean: "materials, things" },
    "mukh-dir":               { fa: "مخدر", mean: "narcotic" },
    "mash-roo-baat":          { fa: "مشروبات", mean: "drinks, beverages" },
    "mash-roob":              { fa: "مشروب", mean: "drink, beverage" },
    "al-ko-lee":              { fa: "الکولی", mean: "alcoholic" },
    "khu-shoo-nat-haa":       { fa: "خشونت‌ها", mean: "acts of violence" },
    "khu-shoo-nat":           { fa: "خشونت", mean: "violence" },
    "bad-raf-taa-ree-haa-yi": { fa: "بدرفتاری‌های", mean: "mistreatments" },
    "bad-raf-taa-ree":        { fa: "بدرفتاری", mean: "mistreatment" },
    "duz-dee":                { fa: "دزدی", mean: "theft" },
    "laa-u-baa-lee-ga-ree":   { fa: "لاابالی‌گری", mean: "irresponsibility, recklessness" },
    "das-taa-war-dhaa-yi":    { fa: "دستاوردهای", mean: "achievements" },
    "das-taa-ward":           { fa: "دستاورد", mean: "achievement" },
    "zi-yaan-baar":           { fa: "زیانبار", mean: "harmful" },
    "til-wi-zyoon-haa":       { fa: "تلویزیون‌ها", mean: "television channels, televisions" },
    "guft":                   { fa: "گفت", mean: "said" },
    "guf-tan":                { fa: "گفتن", mean: "to say, to tell" },
    "ki-naar":                { fa: "کنار", mean: "side, edge" },
    "jid-dee":                { fa: "جدی", mean: "serious, seriously" },
    "daw-lat":                { fa: "دولت", mean: "state, government" },
    "khaa-na-waa-da-haa":     { fa: "خانواده‌ها", mean: "families" },
    "baa-yad":                { fa: "باید", mean: "must, should" },
    "sa-ee":                  { fa: "سعی", mean: "effort, attempt" },
    "kun-trol":               { fa: "کنترول", mean: "control" },
    "na-maa-yand":            { fa: "نمایند", mean: "do" },
    "na-mo-dan":              { fa: "نمودن", mean: "to do; to show; to seem" },
    "kaa-naal-haa":           { fa: "کانال‌ها", mean: "channels" },
    "kaa-naal":               { fa: "کانال", mean: "channel" },
    "san-gar-haa-yi":         { fa: "سنگرهای", mean: "strongholds, trenches" },
    "san-gar":                { fa: "سنگر", mean: "stronghold, trench" },
    "ta-haa-jum":             { fa: "تهاجم", mean: "aggression, attack" },
    "far-han-gee":            { fa: "فرهنگی", mean: "cultural" },
    "mu-bad-dal":             { fa: "مبدل", mean: "changed, turned" },
    "is-laa-mee":             { fa: "اسلامی", mean: "Islamic" },
    "shar-qee":               { fa: "شرقی", mean: "eastern" },
    "ni-shaa-na":             { fa: "نشانه", mean: "target; sign" },
    "har-gaah":               { fa: "هرگاه", mean: "whenever, if" },
    "kaa-naal-haa-yi":        { fa: "کانال‌های", mean: "channels" },
    "til-wi-zyoon-haa-yi":    { fa: "تلویزیون‌های", mean: "television channels" },
    "daa-khi-lee":            { fa: "داخلی", mean: "internal, inner" },
    "is-laah":                { fa: "اصلاح", mean: "reform, correction" },
    "khaa-ri-jee":            { fa: "خارجی", mean: "foreign" },
    "na-sha-wad":             { fa: "نشود", mean: "does not become, may not" },
    "bu-nyaad-haa-yi":        { fa: "بنیادهای", mean: "foundations" },
    "bu-nyaad":               { fa: "بنیاد", mean: "foundation" },
    "akh-laa-qee":            { fa: "اخلاقی", mean: "moral, ethical" },
    "hu-wee-yat":             { fa: "هویت", mean: "identity" },
    "maa":                    { fa: "ما", mean: "we" },
    "baa":                    { fa: "با", mean: "with" },
    "kha-ta-raat":            { fa: "خطرات", mean: "dangers" },
    "kha-tar":                { fa: "خطر", mean: "danger" },
    "bu-zurg":                { fa: "بزرگ", mean: "big, great" },
    "mu-waa-jih":             { fa: "مواجه", mean: "faced with" },
    "shud":                   { fa: "شد", mean: "became; was" }
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
    "say": "ra-saa-na-haa-yi tas-wee-ree (te-le-wee-zee-yon, kam-pyoo-tar, see-na-maa wa-ghi-ra)",
    "mean": "Visual media (television, computer, cinema, and more)",
    "words": [
      [
        "رسانه‌های",
        "ra-saa-na-haa-yi",
        "ra-saa-na-haa"
      ],
      [
        "تصویری",
        "tas-wee-ree",
        "tas-wee-ree"
      ],
      [
        "(تلویزیون،",
        "te-le-wee-zee-yon",
        "te-le-wee-zee-yon"
      ],
      [
        "کمپیوتر،",
        "kam-pyoo-tar",
        "kam-pyoo-tar"
      ],
      [
        "سینما",
        "see-na-maa",
        "see-na-maa"
      ],
      [
        "و...)",
        "wa-ghi-ra",
        "wa-ghi-ra"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "ra-saa-na-haa-yi tas-wee-ree dar dun-yaa-yi it-ti-laa-aat, in-qi-laa-bee raa bar paa kar-da ast.",
        "mean": "Visual media have brought about a revolution in the world of information.",
        "words": [
          [
            "رسانه‌های",
            "ra-saa-na-haa-yi",
            "ra-saa-na-haa"
          ],
          [
            "تصویری",
            "tas-wee-ree",
            "tas-wee-ree"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دنیای",
            "dun-yaa-yi",
            "dun-yaa"
          ],
          [
            "اطلاعات،",
            "it-ti-laa-aat",
            "it-ti-laa-aat"
          ],
          [
            "انقلابی",
            "in-qi-laa-bee",
            "in-qi-laa-bee",
            "in-qi-laab"
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
            "پا",
            "paa",
            "paa"
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
      },
      {
        "say": "saakh-taar wa fa-aa-lee-ya-ti ra-saa-na-haa-yi tas-wee-ree fa-qat dar it-ti-laa-ra-saa-nee khu-laa-sa na-may-sha-wad;",
        "mean": "The structure and work of visual media are not limited to providing information.",
        "words": [
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
            "فعالیت",
            "fa-aa-lee-ya-ti",
            "fa-aa-lee-yat"
          ],
          [
            "رسانه‌های",
            "ra-saa-na-haa-yi",
            "ra-saa-na-haa"
          ],
          [
            "تصویری",
            "tas-wee-ree",
            "tas-wee-ree"
          ],
          [
            "فقط",
            "fa-qat",
            "fa-qat"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اطلاع‌رسانی",
            "it-ti-laa-ra-saa-nee",
            "it-ti-laa-ra-saa-nee"
          ],
          [
            "خلاصه",
            "khu-laa-sa",
            "khu-laa-sa"
          ],
          [
            "نمی‌شود؛",
            "na-may-sha-wad",
            "na-may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "bal-ki bar-naa-ma-haa-yi-yi il-mee, taf-ree-hee, khaa-na-waa-da-gee wa na-maa-yi-shi ha-waa-dis wa roo-yee-daad-haa, da-raa-ma-haa, sir-yaa-lhaa wa film-haa-yi-yi mukh-ta-lif neez shaa-mi-li kaa-ri ra-saa-na-haa-yi tas-wee-ree ast.",
        "mean": "They also include scientific, entertainment, and family programs, the presentation of events and incidents, dramas, series, and various films.",
        "words": [
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "برنامه‌های",
            "bar-naa-ma-haa-yi-yi",
            "bar-naa-ma-haa-yi"
          ],
          [
            "علمی،",
            "il-mee",
            "il-mee"
          ],
          [
            "تفریحی،",
            "taf-ree-hee",
            "taf-ree-hee"
          ],
          [
            "خانواده‌گی",
            "khaa-na-waa-da-gee",
            "khaa-na-waa-da-gee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نمایش",
            "na-maa-yi-shi",
            "na-maa-yish"
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
            "رویدادها،",
            "roo-yee-daad-haa",
            "roo-yee-daad-haa",
            "roo-yee-daad"
          ],
          [
            "درامه‌ها،",
            "da-raa-ma-haa",
            "da-raa-ma-haa",
            "da-raa-maa"
          ],
          [
            "سریال‌ها",
            "sir-yaa-lhaa",
            "sir-yaa-lhaa",
            "sir-yaal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فلم‌های",
            "film-haa-yi-yi",
            "film-haa-yi",
            "film"
          ],
          [
            "مختلف",
            "mukh-ta-lif",
            "mukh-ta-lif"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "شامل",
            "shaa-mi-li",
            "shaa-mil"
          ],
          [
            "کار",
            "kaa-ri",
            "kaar"
          ],
          [
            "رسانه‌های",
            "ra-saa-na-haa-yi",
            "ra-saa-na-haa"
          ],
          [
            "تصویری",
            "tas-wee-ree",
            "tas-wee-ree"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "im-roz kam-pyoo-tar neez az ra-saa-na-haa-yi mu-hi-mi tas-wee-ree ast.",
        "mean": "Today the computer is also an important visual medium.",
        "words": [
          [
            "امروز",
            "im-roz",
            "im-roz"
          ],
          [
            "کمپیوتر",
            "kam-pyoo-tar",
            "kam-pyoo-tar"
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
            "رسانه‌های",
            "ra-saa-na-haa-yi",
            "ra-saa-na-haa"
          ],
          [
            "مهم",
            "mu-hi-mi",
            "mu-him"
          ],
          [
            "تصویری",
            "tas-wee-ree",
            "tas-wee-ree"
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
        "say": "kaa-ri ha-ma-yi ra-saa-na-haa wa az jum-la-yi ra-saa-na-haa-yi tas-wee-ree wa ta-maa-shaa-yi-yi aan daa-raa-yi fa-waa-yid wa mu-zar-raat ast.",
        "mean": "The work of all media, including visual media, and watching them have benefits and harms.",
        "words": [
          [
            "کار",
            "kaa-ri",
            "kaar"
          ],
          [
            "همه",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "رسانه‌ها",
            "ra-saa-na-haa",
            "ra-saa-na-haa"
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
            "جمله",
            "jum-la-yi",
            "jum-la"
          ],
          [
            "رسانه‌های",
            "ra-saa-na-haa-yi",
            "ra-saa-na-haa"
          ],
          [
            "تصویری",
            "tas-wee-ree",
            "tas-wee-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تماشای",
            "ta-maa-shaa-yi-yi",
            "ta-maa-shaa-yi",
            "ta-maa-shaa"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "فواید",
            "fa-waa-yid",
            "fa-waa-yid",
            "faa-yi-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مضرات",
            "mu-zar-raat",
            "mu-zar-raat",
            "mu-zir-rat"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "ta-maa-shaa-yi-yi te-le-wee-zee-yon sar-fi na-zar az maw-zoo wa muh-ta-waa-yi-yi bar-naa-ma-haa wa film-haa daa-raa-yi fa-waa-yi-dee ast ki ba bar-khay az aan i-shaa-ra may-sha-wad:",
        "mean": "Watching television, regardless of the subject and content of its programs and films, has benefits, some of which are mentioned below.",
        "words": [
          [
            "تماشای",
            "ta-maa-shaa-yi-yi",
            "ta-maa-shaa-yi",
            "ta-maa-shaa"
          ],
          [
            "تلویزیون",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "صرف",
            "sar-fi",
            "sarf"
          ],
          [
            "نظر",
            "na-zar",
            "na-zar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "موضوع",
            "maw-zoo",
            "maw-zoo"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "محتوای",
            "muh-ta-waa-yi-yi",
            "muh-ta-waa-yi"
          ],
          [
            "برنامه‌ها",
            "bar-naa-ma-haa",
            "bar-naa-ma-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فلم‌ها",
            "film-haa",
            "film-haa",
            "film"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "فوایدی",
            "fa-waa-yi-dee",
            "fa-waa-yi-dee",
            "faa-yi-da"
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "اشاره",
            "i-shaa-ra",
            "i-shaa-ra"
          ],
          [
            "می‌شود:",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "bu-zurg-ta-reen man-ba-yi gu-zaa-ri-shi kha-bar ast wa akh-baar raa ba soo-ra-ti mus-ta-nad wa gaah mus-ta-qeem pakhsh may-ku-nad.",
        "mean": "It is the greatest source of news reports and broadcasts news in documentary form and sometimes live.",
        "words": [
          [
            "بزرگترین",
            "bu-zurg-ta-reen",
            "bu-zurg-ta-reen"
          ],
          [
            "منبع",
            "man-ba-yi",
            "man-ba"
          ],
          [
            "گزارش",
            "gu-zaa-ri-shi",
            "gu-zaa-rish"
          ],
          [
            "خبر",
            "kha-bar",
            "kha-bar"
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
            "اخبار",
            "akh-baar",
            "akh-baar"
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
            "مستند",
            "mus-ta-nad",
            "mus-ta-nad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گاه",
            "gaah",
            "gaah"
          ],
          [
            "مستقیم",
            "mus-ta-qeem",
            "mus-ta-qeem"
          ],
          [
            "پخش",
            "pakhsh",
            "pakhsh"
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
        "say": "bar-naa-ma-haa-yi-yi war-zi-shee raa neez dar te-le-wee-zee-yon wa gaah mus-ta-qeem mee-ta-waa-neem ni-gaah ku-naym.",
        "mean": "We can also watch sports programs on television, sometimes live.",
        "words": [
          [
            "برنامه‌های",
            "bar-naa-ma-haa-yi-yi",
            "bar-naa-ma-haa-yi"
          ],
          [
            "ورزشی",
            "war-zi-shee",
            "war-zi-shee"
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
            "تلویزیون",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گاه",
            "gaah",
            "gaah"
          ],
          [
            "مستقیم",
            "mus-ta-qeem",
            "mus-ta-qeem"
          ],
          [
            "می‌توانیم",
            "mee-ta-waa-neem",
            "mee-ta-waa-neem",
            "ta-waa-nis-tan"
          ],
          [
            "نگاه",
            "ni-gaah",
            "ni-gaah"
          ],
          [
            "کنیم.",
            "ku-naym",
            "ku-naym",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "te-le-wee-zee-yon yak dars-gaah ast wa dars-haa-yi-yi qur-aan wa taj-wee-di aan raa may-ta-waan deed wa shi-need wa az aan is-ti-faa-da-haa kard.",
        "mean": "Television is a place of learning where lessons in the Quran and recitation can be seen, heard, and used.",
        "words": [
          [
            "تلویزیون",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "درس‌گاه",
            "dars-gaah",
            "dars-gaah"
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
            "درس‌های",
            "dars-haa-yi-yi",
            "dars-haa-yi",
            "dars"
          ],
          [
            "قرآن",
            "qur-aan",
            "qur-aan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تجوید",
            "taj-wee-di",
            "taj-weed"
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
            "می‌توان",
            "may-ta-waan",
            "may-ta-waan"
          ],
          [
            "دید",
            "deed",
            "deed",
            "dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شنید",
            "shi-need",
            "shi-need",
            "shi-nee-dan"
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
            "استفاده‌ها",
            "is-ti-faa-da-haa",
            "is-ti-faa-da-haa",
            "is-ti-faa-da"
          ],
          [
            "کرد.",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "saa-yi-ri u-loom raa neez may-ta-waan az te-le-wee-zee-yon wa bar-naa-ma-haa-yi-yi aa-moo-zi-shee-yi aan fa-raa-gi-rift wa taj-ru-ba-haa wa aaz-maa-yish-haa raa deed wa ta-ree-qa-haa raa aa-mokht.",
        "mean": "Other sciences can also be learned from television and its educational programs, where experiences and experiments can be seen and methods learned.",
        "words": [
          [
            "سایر",
            "saa-yi-ri",
            "saa-yir"
          ],
          [
            "علوم",
            "u-loom",
            "u-loom",
            "ilm"
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
            "از",
            "az",
            "az"
          ],
          [
            "تلویزیون",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "برنامه‌های",
            "bar-naa-ma-haa-yi-yi",
            "bar-naa-ma-haa-yi"
          ],
          [
            "آموزشی",
            "aa-moo-zi-shee-yi",
            "aa-moo-zi-shee"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "فراگرفت",
            "fa-raa-gi-rift",
            "fa-raa-gi-rift",
            "fa-raa-gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تجربه‌ها",
            "taj-ru-ba-haa",
            "taj-ru-ba-haa",
            "taj-ru-ba"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آزمایش‌ها",
            "aaz-maa-yish-haa",
            "aaz-maa-yish-haa",
            "aaz-maa-yish"
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
            "و",
            "wa",
            "wa"
          ],
          [
            "طریقه‌ها",
            "ta-ree-qa-haa",
            "ta-ree-qa-haa",
            "ta-ree-qa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "آموخت.",
            "aa-mokht",
            "aa-mokht",
            "aa-mokh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ha-ma wa bi-khu-soos za-naan wa dukh-ta-raan may-ta-waa-nand dar aa-mo-zi-shi aash-pa-zee, kha-yaa-tee, na-zaa-fat wa hir-fa-haa az bar-naa-ma-haa-yi-yi te-le-wee-zee-yon is-ti-faa-da ku-nand.",
        "mean": "Everyone, especially women and girls, can use television programs to learn cooking, sewing, cleanliness, and trades.",
        "words": [
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "به‌خصوص",
            "bi-khu-soos",
            "bi-khu-soos"
          ],
          [
            "زنان",
            "za-naan",
            "za-naan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دختران",
            "dukh-ta-raan",
            "dukh-ta-raan"
          ],
          [
            "می‌توانند",
            "may-ta-waa-nand",
            "may-ta-waa-nand",
            "ta-waa-nis-tan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آموزش",
            "aa-mo-zi-shi",
            "aa-mo-zish"
          ],
          [
            "آشپزی،",
            "aash-pa-zee",
            "aash-pa-zee"
          ],
          [
            "خیاطی،",
            "kha-yaa-tee",
            "kha-yaa-tee"
          ],
          [
            "نظافت",
            "na-zaa-fat",
            "na-zaa-fat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حرفه‌ها",
            "hir-fa-haa",
            "hir-fa-haa",
            "hir-fa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "برنامه‌های",
            "bar-naa-ma-haa-yi-yi",
            "bar-naa-ma-haa-yi"
          ],
          [
            "تلویزیون",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da"
          ],
          [
            "کنند.",
            "ku-nand",
            "ku-nand",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "hat-taa pakh-shi akh-baa-ri ha-waa-di-si naa-gu-waar, may-ta-waa-nad ta-see-ri mus-bat daash-ta baa-shad;",
        "mean": "Even broadcasting news of unpleasant events can have a positive effect.",
        "words": [
          [
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "پخش",
            "pakh-shi",
            "pakhsh"
          ],
          [
            "اخبار",
            "akh-baa-ri",
            "akh-baar"
          ],
          [
            "حوادث",
            "ha-waa-di-si",
            "ha-waa-dis"
          ],
          [
            "ناگوار،",
            "naa-gu-waar",
            "naa-gu-waar"
          ],
          [
            "می‌تواند",
            "may-ta-waa-nad",
            "may-ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "تأثیر",
            "ta-see-ri",
            "ta-seer"
          ],
          [
            "مثبت",
            "mus-bat",
            "mus-bat"
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
        "say": "ma-sa-lan: kha-ba-ri yak haa-di-sa-yi-yi ta-raa-fee-kee wa dee-da-ni aan-chi pas az haa-di-sa it-ti-faaq uf-taa-da ast;",
        "mean": "For example, a report of a traffic accident and seeing what happened afterward.",
        "words": [
          [
            "مثلاً:",
            "ma-sa-lan",
            "ma-sa-lan"
          ],
          [
            "خبر",
            "kha-ba-ri",
            "kha-bar"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "حادثهٔ",
            "haa-di-sa-yi-yi",
            "haa-di-sa-yi"
          ],
          [
            "ترافیکی",
            "ta-raa-fee-kee",
            "ta-raa-fee-kee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دیدن",
            "dee-da-ni",
            "dee-dan"
          ],
          [
            "آن‌چه",
            "aan-chi",
            "aan-chi"
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
            "حادثه",
            "haa-di-sa",
            "haa-di-sa"
          ],
          [
            "اتفاق",
            "it-ti-faaq",
            "it-ti-faaq"
          ],
          [
            "افتاده",
            "uf-taa-da",
            "uf-taa-da",
            "uf-taa-dan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "zee-raa ib-rat-aa-mooz khaa-had bood wa baa-i-si ji-law-gee-ree az tik-raa-ri ha-waa-dis dar aa-yan-da may-gar-dad.",
        "mean": "It can serve as a warning and help prevent such events from recurring in the future.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "عبرت‌آموز",
            "ib-rat-aa-mooz",
            "ib-rat-aa-mooz"
          ],
          [
            "خواهد",
            "khaa-had",
            "khaa-had",
            "khaas-tan"
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
            "باعث",
            "baa-i-si",
            "baa-is"
          ],
          [
            "جلوگیری",
            "ji-law-gee-ree",
            "ji-law-gee-ree"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "تکرار",
            "tik-raa-ri",
            "tik-raar"
          ],
          [
            "حوادث",
            "ha-waa-dis",
            "ha-waa-dis"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آینده",
            "aa-yan-da",
            "aa-yan-da"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ha-waa-di-si khush-gu-waar bar-naa-ma-haa-yi-yi taf-ree-hee, da-raa-ma-haa wa sir-yaal-haa-yi-yi saa-lim wa aa-moo-zan-da wa film-haa-yi-yi hin-ree wa kaar-too-nee may-ta-waa-nad ba-raa-yi ha-ma-yi a-zaa-yi khaa-na-waa-da ba way-zha at-faal sar-garm-ku-nan-da wa dil-chasp baa-shad wa cheez-haa-yi-yi mu-fee-dee raa az aan bee-aa-moo-zand wa...",
        "mean": "Pleasant events, entertainment programs, wholesome educational dramas and series, and artistic and animated films can entertain and interest all family members, especially children, while teaching them useful things.",
        "words": [
          [
            "حوادث",
            "ha-waa-di-si",
            "ha-waa-dis"
          ],
          [
            "خوشگوار",
            "khush-gu-waar",
            "khush-gu-waar"
          ],
          [
            "برنامه‌های",
            "bar-naa-ma-haa-yi-yi",
            "bar-naa-ma-haa-yi"
          ],
          [
            "تفریحی،",
            "taf-ree-hee",
            "taf-ree-hee"
          ],
          [
            "درامه‌ها",
            "da-raa-ma-haa",
            "da-raa-ma-haa",
            "da-raa-maa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سریال‌های",
            "sir-yaal-haa-yi-yi",
            "sir-yaal-haa-yi",
            "sir-yaal"
          ],
          [
            "سالم",
            "saa-lim",
            "saa-lim"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "فلم‌های",
            "film-haa-yi-yi",
            "film-haa-yi",
            "film"
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
            "کارتونی",
            "kaar-too-nee",
            "kaar-too-nee"
          ],
          [
            "می‌تواند",
            "may-ta-waa-nad",
            "may-ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "همه",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "اعضای",
            "a-zaa-yi",
            "a-zaa"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
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
            "اطفال",
            "at-faal",
            "at-faal"
          ],
          [
            "سرگرم‌کننده",
            "sar-garm-ku-nan-da",
            "sar-garm-ku-nan-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دلچسپ",
            "dil-chasp",
            "dil-chasp"
          ],
          [
            "باشد",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چیزهای",
            "cheez-haa-yi-yi",
            "cheez-haa-yi",
            "cheez"
          ],
          [
            "مفیدی",
            "mu-fee-dee",
            "mu-fee-dee",
            "mu-feed"
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "بیاموزند",
            "bee-aa-moo-zand",
            "bee-aa-moo-zand",
            "aa-mokh-tan"
          ],
          [
            "و...",
            "wa",
            "wa"
          ]
        ]
      }
    ],
    [
      {
        "say": "am-maa ta-maa-shaa-yi-yi te-le-wee-zee-yon, za-rar-haa-yee ham daa-rad ki na-baa-yad aan raa naa-dee-da gi-rift.",
        "mean": "But watching television also has harms that should not be ignored.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "تماشای",
            "ta-maa-shaa-yi-yi",
            "ta-maa-shaa-yi",
            "ta-maa-shaa"
          ],
          [
            "تلویزیون،",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "ضررهایی",
            "za-rar-haa-yee",
            "za-rar-haa-yee",
            "za-rar"
          ],
          [
            "هم",
            "ham",
            "ham"
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
            "نباید",
            "na-baa-yad",
            "na-baa-yad"
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
            "نادیده",
            "naa-dee-da",
            "naa-dee-da"
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
        "say": "dee-da-ni ha-ma-yi bar-naa-ma-haa wa mash-ghool shu-dan ba aan, waq-ti zi-yaad raa dar bar gi-rif-ta wa sa-ba-bi kha-lal wa yaa a-qab-maa-nee-yi kaar-haa may-gar-dad.",
        "mean": "Watching every program and becoming absorbed in it takes much time and disrupts or delays work.",
        "words": [
          [
            "دیدن",
            "dee-da-ni",
            "dee-dan"
          ],
          [
            "همه",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "برنامه‌ها",
            "bar-naa-ma-haa",
            "bar-naa-ma-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مشغول",
            "mash-ghool",
            "mash-ghool"
          ],
          [
            "شدن",
            "shu-dan",
            "shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "آن،",
            "aan",
            "aan"
          ],
          [
            "وقت",
            "waq-ti",
            "waqt"
          ],
          [
            "زیاد",
            "zi-yaad",
            "zi-yaad"
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
            "بر",
            "bar",
            "bar"
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
            "سبب",
            "sa-ba-bi",
            "sa-bab"
          ],
          [
            "خلل",
            "kha-lal",
            "kha-lal"
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
            "عقب‌مانی",
            "a-qab-maa-nee-yi",
            "a-qab-maa-nee"
          ],
          [
            "کارها",
            "kaar-haa",
            "kaar-haa"
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
        "say": "een ta-see-ri man-fee, shaa-mi-li haa-li maa-moo-reen, mu-al-li-meen, shaa-gir-daan, ah-li kasb wa kaar wa hat-taa za-naa-ni khaa-na may-sha-wad.",
        "mean": "This negative effect applies to officials, teachers, students, working people, and even women at home.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "تأثیر",
            "ta-see-ri",
            "ta-seer"
          ],
          [
            "منفی،",
            "man-fee",
            "man-fee"
          ],
          [
            "شامل",
            "shaa-mi-li",
            "shaa-mil"
          ],
          [
            "حال",
            "haa-li",
            "haal"
          ],
          [
            "مأمورین،",
            "maa-moo-reen",
            "maa-moo-reen",
            "maa-moor"
          ],
          [
            "معلمین،",
            "mu-al-li-meen",
            "mu-al-li-meen",
            "mu-al-lim"
          ],
          [
            "شاگردان،",
            "shaa-gir-daan",
            "shaa-gir-daan"
          ],
          [
            "اهل",
            "ah-li",
            "ahl"
          ],
          [
            "کسب",
            "kasb",
            "kasb"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "زنان",
            "za-naa-ni",
            "za-naan"
          ],
          [
            "خانه",
            "khaa-na",
            "khaa-na"
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
        "say": "ba-saa dee-da shu-da ast ki ta-maa-shaa-yi-yi te-le-wee-zee-yon, saa-at-haa waqt raa dar bar gi-rif-ta wa baa-i-si paa-yeen aa-ma-da-ni saw-ya-yi-yi ta-lee-mee-yi shaa-gir-daan shu-da wa aan-haa na-ta-waa-nis-ta-and ki ba dars-haa wa kaar-haa-yi khaa-na-gee-yi khud bi-ra-sand.",
        "mean": "Television has often been seen to consume hours, lower students' educational level, and keep them from their lessons and homework.",
        "words": [
          [
            "بسا",
            "ba-saa",
            "ba-saa"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-dan"
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
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تماشای",
            "ta-maa-shaa-yi-yi",
            "ta-maa-shaa-yi",
            "ta-maa-shaa"
          ],
          [
            "تلویزیون،",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "ساعت‌ها",
            "saa-at-haa",
            "saa-at-haa",
            "saa-at"
          ],
          [
            "وقت",
            "waqt",
            "waqt"
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
            "بر",
            "bar",
            "bar"
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
            "باعث",
            "baa-i-si",
            "baa-is"
          ],
          [
            "پایین",
            "paa-yeen",
            "paa-yeen"
          ],
          [
            "آمدن",
            "aa-ma-da-ni",
            "aa-ma-dan"
          ],
          [
            "سویهٔ",
            "saw-ya-yi-yi",
            "saw-ya-yi",
            "saw-ya"
          ],
          [
            "تعلیمی",
            "ta-lee-mee-yi",
            "ta-lee-mee"
          ],
          [
            "شاگردان",
            "shaa-gir-daan",
            "shaa-gir-daan"
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
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "نتوانسته‌اند",
            "na-ta-waa-nis-ta-and",
            "na-ta-waa-nis-ta-and",
            "ta-waa-nis-tan"
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
            "درس‌ها",
            "dars-haa",
            "dars-haa",
            "dars"
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
            "خانه‌گی",
            "khaa-na-gee-yi",
            "khaa-na-gee"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "برسند.",
            "bi-ra-sand",
            "bi-ra-sand",
            "ra-see-dan"
          ]
        ]
      },
      {
        "say": "khaa-num-haa-yi-yi khaa-na-daar ki ba u-moo-ri aash-pa-zee, na-zaa-fat wa mu-waa-zi-bat wa tar-bee-ya-yi far-zan-daan ish-ti-ghaal daa-rand;",
        "mean": "Housewives are occupied with cooking, cleaning, caring for, and raising children.",
        "words": [
          [
            "خانم‌های",
            "khaa-num-haa-yi-yi",
            "khaa-num-haa-yi",
            "khaa-num"
          ],
          [
            "خانه‌دار",
            "khaa-na-daar",
            "khaa-na-daar"
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
            "امور",
            "u-moo-ri",
            "u-moor"
          ],
          [
            "آشپزی،",
            "aash-pa-zee",
            "aash-pa-zee"
          ],
          [
            "نظافت",
            "na-zaa-fat",
            "na-zaa-fat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مواظبت",
            "mu-waa-zi-bat",
            "mu-waa-zi-bat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تربیهٔ",
            "tar-bee-ya-yi",
            "tar-bee-ya"
          ],
          [
            "فرزندان",
            "far-zan-daan",
            "far-zan-daan"
          ],
          [
            "اشتغال",
            "ish-ti-ghaal",
            "ish-ti-ghaal"
          ],
          [
            "دارند؛",
            "daa-rand",
            "daa-rand",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "dar a-sa-ri ta-maa-shaa-yi-yi ak-sa-ri bar-naa-ma-haa-yi-yi te-le-wee-zee-yon, az kaar-haa-yi as-lee-yi khaa-na baaz-maan-da, aash-pa-zee-shaan mukh-tal shu-da, az wa-zi far-zan-daan ba way-zha far-zan-daa-ni khurd saal bee-kha-bar boo-da-and wa ta-waj-ju-hi qab-lee raa na-daash-ta-and;",
        "mean": "By watching most television programs, they may fall behind in essential housework, disrupt their cooking, remain unaware of their children—especially young children—and lose their former attentiveness.",
        "words": [
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
            "تماشای",
            "ta-maa-shaa-yi-yi",
            "ta-maa-shaa-yi",
            "ta-maa-shaa"
          ],
          [
            "اکثر",
            "ak-sa-ri",
            "ak-sar"
          ],
          [
            "برنامه‌های",
            "bar-naa-ma-haa-yi-yi",
            "bar-naa-ma-haa-yi"
          ],
          [
            "تلویزیون،",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کارهای",
            "kaar-haa-yi",
            "kaar-haa"
          ],
          [
            "اصلی",
            "as-lee-yi",
            "as-lee"
          ],
          [
            "خانه",
            "khaa-na",
            "khaa-na"
          ],
          [
            "بازمانده،",
            "baaz-maan-da",
            "baaz-maan-da",
            "baaz-maan-dan"
          ],
          [
            "آشپزی‌شان",
            "aash-pa-zee-shaan",
            "aash-pa-zee-shaan",
            "aash-pa-zee"
          ],
          [
            "مختل",
            "mukh-tal",
            "mukh-tal"
          ],
          [
            "شده،",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "وضع",
            "wa-zi",
            "waz"
          ],
          [
            "فرزندان",
            "far-zan-daan",
            "far-zan-daan"
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
            "فرزندان",
            "far-zan-daa-ni",
            "far-zan-daan"
          ],
          [
            "خورد",
            "khurd",
            "khurd"
          ],
          [
            "سال",
            "saal",
            "saal"
          ],
          [
            "بی‌خبر",
            "bee-kha-bar",
            "bee-kha-bar"
          ],
          [
            "بوده‌اند",
            "boo-da-and",
            "boo-da-and",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "توجه",
            "ta-waj-ju-hi",
            "ta-waj-juh"
          ],
          [
            "قبلی",
            "qab-lee",
            "qab-lee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نداشته‌اند؛",
            "na-daash-ta-and",
            "na-daash-ta-and",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "choon ta-maa-shaa-yi-yi te-le-wee-zee-yon waq-ti baysh-ta-ri aan-haa raa gi-rif-ta ast.",
        "mean": "This is because television has taken most of their time.",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "تماشای",
            "ta-maa-shaa-yi-yi",
            "ta-maa-shaa-yi",
            "ta-maa-shaa"
          ],
          [
            "تلویزیون",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "وقت",
            "waq-ti",
            "waqt"
          ],
          [
            "بیشتر",
            "baysh-ta-ri",
            "baysh-tar"
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
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "gi-rif-tan"
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
        "say": "ya-kay az ta-see-raa-ti soo-yi ta-maa-shaa-yi-yi da-raa-ma-haa wa film-haa-yi-yi jan-gee wa kha-yaa-lee-yi te-le-wee-zee-yon, faa-sid shu-da-ni akh-laa-qi ja-waa-naan wa no-ja-waa-naa-ni jaa-mi-a ast.",
        "mean": "One harmful effect of watching television dramas and war and fantasy films is the corruption of the morals of society's young people and adolescents.",
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
            "تأثیرات",
            "ta-see-raa-ti",
            "ta-see-raat"
          ],
          [
            "سوء",
            "soo-yi",
            "soo"
          ],
          [
            "تماشای",
            "ta-maa-shaa-yi-yi",
            "ta-maa-shaa-yi",
            "ta-maa-shaa"
          ],
          [
            "درامه‌ها",
            "da-raa-ma-haa",
            "da-raa-ma-haa",
            "da-raa-maa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فلم‌های",
            "film-haa-yi-yi",
            "film-haa-yi",
            "film"
          ],
          [
            "جنگی",
            "jan-gee",
            "jan-gee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خیالی",
            "kha-yaa-lee-yi",
            "kha-yaa-lee"
          ],
          [
            "تلویزیون،",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "فاسد",
            "faa-sid",
            "faa-sid"
          ],
          [
            "شدن",
            "shu-da-ni",
            "shu-dan"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq"
          ],
          [
            "جوانان",
            "ja-waa-naan",
            "ja-waa-naan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نوجوانان",
            "no-ja-waa-naa-ni",
            "no-ja-waa-naan",
            "no-ja-waan"
          ],
          [
            "جامعه",
            "jaa-mi-a",
            "jaa-mi-a"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "dar ak-sa-ri kish-war-haa dee-da shu-da ast ki ja-waa-naan pas az ir-ti-kaa-bi jurm, i-ti-raaf kar-da-and ki aan raa az bar-naa-ma-haa-yi-yi te-le-wee-zee-yon yaad gi-rif-ta-and.",
        "mean": "In many countries young people have admitted after committing crimes that they learned them from television programs.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اکثر",
            "ak-sa-ri",
            "ak-sar"
          ],
          [
            "کشورها",
            "kish-war-haa",
            "kish-war-haa"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-dan"
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
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "جوانان",
            "ja-waa-naan",
            "ja-waa-naan"
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
            "ارتکاب",
            "ir-ti-kaa-bi",
            "ir-ti-kaab"
          ],
          [
            "جرم،",
            "jurm",
            "jurm"
          ],
          [
            "اعتراف",
            "i-ti-raaf",
            "i-ti-raaf"
          ],
          [
            "کرده‌اند",
            "kar-da-and",
            "kar-da-and",
            "kar-dan"
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
            "از",
            "az",
            "az"
          ],
          [
            "برنامه‌های",
            "bar-naa-ma-haa-yi-yi",
            "bar-naa-ma-haa-yi"
          ],
          [
            "تلویزیون",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "یاد",
            "yaad",
            "yaad"
          ],
          [
            "گرفته‌اند.",
            "gi-rif-ta-and",
            "gi-rif-ta-and",
            "gi-rif-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "is-ti-maa-li ma-waa-di mukh-dir wa mash-roo-baa-ti al-ko-lee, khu-shoo-nat-haa wa bad-raf-taa-ree-haa-yi-yi khaa-na-waa-da-gee, duz-dee wa laa-u-baa-lee-ga-ree neez az das-taa-war-dhaa-yi-yi zi-yaan-baa-ri ta-maa-shaa-yi-yi bar-khay az til-wi-zyoon-haa ast.",
        "mean": "Drug use, alcoholic drinks, violence, domestic mistreatment, theft, and irresponsibility are also among the harmful results of watching some television channels.",
        "words": [
          [
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "مخدر",
            "mukh-dir",
            "mukh-dir"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مشروبات",
            "mash-roo-baa-ti",
            "mash-roo-baat",
            "mash-roob"
          ],
          [
            "الکولی،",
            "al-ko-lee",
            "al-ko-lee"
          ],
          [
            "خشونت‌ها",
            "khu-shoo-nat-haa",
            "khu-shoo-nat-haa",
            "khu-shoo-nat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بدرفتاری‌های",
            "bad-raf-taa-ree-haa-yi-yi",
            "bad-raf-taa-ree-haa-yi",
            "bad-raf-taa-ree"
          ],
          [
            "خانواده‌گی،",
            "khaa-na-waa-da-gee",
            "khaa-na-waa-da-gee"
          ],
          [
            "دزدی",
            "duz-dee",
            "duz-dee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "لاابالی‌گری",
            "laa-u-baa-lee-ga-ree",
            "laa-u-baa-lee-ga-ree"
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
            "دستاوردهای",
            "das-taa-war-dhaa-yi-yi",
            "das-taa-war-dhaa-yi",
            "das-taa-ward"
          ],
          [
            "زیانبار",
            "zi-yaan-baa-ri",
            "zi-yaan-baar"
          ],
          [
            "تماشای",
            "ta-maa-shaa-yi-yi",
            "ta-maa-shaa-yi",
            "ta-maa-shaa"
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
            "تلویزیون‌ها",
            "til-wi-zyoon-haa",
            "til-wi-zyoon-haa",
            "te-le-wee-zee-yon"
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
        "say": "pas may-ta-waan guft ki ra-saa-na-haa-yi tas-wee-ree dar ki-naa-ri fa-waa-yid, daa-raa-yi mu-zar-raa-ti jid-dee ast ki daw-lat wa khaa-na-waa-da-haa baa-yad sa-ee dar kun-tro-li aan na-maa-yand.",
        "mean": "Thus visual media have serious harms alongside their benefits, and the government and families must try to control them.",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "می‌توان",
            "may-ta-waan",
            "may-ta-waan"
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
            "رسانه‌های",
            "ra-saa-na-haa-yi",
            "ra-saa-na-haa"
          ],
          [
            "تصویری",
            "tas-wee-ree",
            "tas-wee-ree"
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
            "فواید،",
            "fa-waa-yid",
            "fa-waa-yid",
            "faa-yi-da"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "مضرات",
            "mu-zar-raa-ti",
            "mu-zar-raat",
            "mu-zir-rat"
          ],
          [
            "جدی",
            "jid-dee",
            "jid-dee"
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
            "دولت",
            "daw-lat",
            "daw-lat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خانواده‌ها",
            "khaa-na-waa-da-haa",
            "khaa-na-waa-da-haa"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "سعی",
            "sa-ee",
            "sa-ee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کنترول",
            "kun-tro-li",
            "kun-trol"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "نمایند.",
            "na-maa-yand",
            "na-maa-yand",
            "na-mo-dan"
          ]
        ]
      },
      {
        "say": "im-roz ak-sa-ri kaa-naal-haa ba san-gar-haa-yi-yi ta-haa-ju-mi far-han-gee mu-bad-dal shu-da wa kish-war-haa-yi is-laa-mee wa shar-qee raa ni-shaa-na gi-rif-ta-and.",
        "mean": "Today many channels have become strongholds of cultural aggression aimed at Islamic and Eastern countries.",
        "words": [
          [
            "امروز",
            "im-roz",
            "im-roz"
          ],
          [
            "اکثر",
            "ak-sa-ri",
            "ak-sar"
          ],
          [
            "کانال‌ها",
            "kaa-naal-haa",
            "kaa-naal-haa",
            "kaa-naal"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سنگرهای",
            "san-gar-haa-yi-yi",
            "san-gar-haa-yi",
            "san-gar"
          ],
          [
            "تهاجم",
            "ta-haa-ju-mi",
            "ta-haa-jum"
          ],
          [
            "فرهنگی",
            "far-han-gee",
            "far-han-gee"
          ],
          [
            "مبدل",
            "mu-bad-dal",
            "mu-bad-dal"
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
            "کشورهای",
            "kish-war-haa-yi",
            "kish-war-haa"
          ],
          [
            "اسلامی",
            "is-laa-mee",
            "is-laa-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شرقی",
            "shar-qee",
            "shar-qee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نشانه",
            "ni-shaa-na",
            "ni-shaa-na"
          ],
          [
            "گرفته‌اند.",
            "gi-rif-ta-and",
            "gi-rif-ta-and",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "har-gaah kaa-naal-haa-yi-yi til-wi-zyoon-haa-yi-yi daa-khi-lee is-laah wa az khaa-ri-jee kun-trol na-sha-wad;",
        "mean": "If domestic television channels are not reformed and controlled from abroad;",
        "words": [
          [
            "هرگاه",
            "har-gaah",
            "har-gaah"
          ],
          [
            "کانال‌های",
            "kaa-naal-haa-yi-yi",
            "kaa-naal-haa-yi",
            "kaa-naal"
          ],
          [
            "تلویزیون‌های",
            "til-wi-zyoon-haa-yi-yi",
            "til-wi-zyoon-haa-yi",
            "te-le-wee-zee-yon"
          ],
          [
            "داخلی",
            "daa-khi-lee",
            "daa-khi-lee"
          ],
          [
            "اصلاح",
            "is-laah",
            "is-laah"
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
            "خارجی",
            "khaa-ri-jee",
            "khaa-ri-jee"
          ],
          [
            "کنترول",
            "kun-trol",
            "kun-trol"
          ],
          [
            "نشود؛",
            "na-sha-wad",
            "na-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "bu-nyaad-haa-yi-yi akh-laa-qee wa hu-wee-ya-ti far-han-gee-yi jaa-mi-a-yi maa baa kha-ta-raa-ti bu-zurg mu-waa-jih khaa-had shud.",
        "mean": "the moral foundations and cultural identity of our society will face grave dangers.",
        "words": [
          [
            "بنیادهای",
            "bu-nyaad-haa-yi-yi",
            "bu-nyaad-haa-yi",
            "bu-nyaad"
          ],
          [
            "اخلاقی",
            "akh-laa-qee",
            "akh-laa-qee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هویت",
            "hu-wee-ya-ti",
            "hu-wee-yat"
          ],
          [
            "فرهنگی",
            "far-han-gee-yi",
            "far-han-gee"
          ],
          [
            "جامعهٔ",
            "jaa-mi-a-yi",
            "jaa-mi-a"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "خطرات",
            "kha-ta-raa-ti",
            "kha-ta-raat",
            "kha-tar"
          ],
          [
            "بزرگ",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "مواجه",
            "mu-waa-jih",
            "mu-waa-jih"
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
      }
    ]
  ]
});
