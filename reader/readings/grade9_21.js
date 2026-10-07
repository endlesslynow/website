/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 21, book pages 136-138, PDF pages 143-145 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «روح‌االله» is written «روح‌الله»; «درکمال» is written «در کمال»; «باز گشت» is written «بازگشت»; «همانجا» is written «همان‌جا»; «باسنگ» is written «با سنگ»; «درمصر» is written «در مصر»; «به هرحال» is written «به هر حال»; «اگرکار» is written «اگر کار»; «شده‌است» is written «شده است»; «پرشگوفه» is written «پر شگوفه»; «یک نواخت» is written «یک‌نواخت»; «حب الهی» is written «حبّ الهی»; «ریزه کاری» is written «ریزه‌کاری»; «دقت نگاری» is written «دقت‌نگاری».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-21',
  group: 'Dari · grade 9',
  label: 'Lesson 21',
  name: "us-taad ka-maal-ud-deen beh-zaad",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_21.jpg',
    alt: "A richly detailed Persian miniature painting of a palace scene with many figures."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_21.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "us-taad":                { fa: "استاد", mean: "master, teacher" },
    "ka-maal-ud-deen":        { fa: "کمال‌الدین", mean: "Kamal al-Din" },
    "beh-zaad":               { fa: "بهزاد", mean: "Behzad" },
    "bu-zurg-ta-reen":        { fa: "بزرگترین", mean: "largest, greatest" },
    "wa":                     { fa: "و", mean: "and" },
    "mash-hoor-ta-reen":      { fa: "مشهورترین", mean: "most famous" },
    "naq-qaash":              { fa: "نقاش", mean: "painter" },
    "rish-ta-yi":             { fa: "رشتهٔ", mean: "thread, form" },
    "ni-gaar-ga-ree":         { fa: "نگارگری", mean: "miniature painting" },
    "mee-nee-yaa-too-ree":    { fa: "مینیاتوری", mean: "miniature" },
    "qarn":                   { fa: "قرن", mean: "century" },
    "da-hum":                 { fa: "دهم", mean: "tenth" },
    "hij-ree#year":           { fa: "هجری", say: "hij-ree", mean: "of the Islamic calendar, which counts from the Prophet's move to Medina in 622" },
    "bood":                   { fa: "بود", mean: "was" },
    "bu-dan":                 { fa: "بودن", mean: "to be" },
    "oo":                     { fa: "او", mean: "he, she; his, her" },
    "ba":                     { fa: "به", mean: "to" },
    "qaw-lee":                { fa: "قولی", mean: "an account, a saying" },
    "a-meer":                 { fa: "امیر", mean: "emir, prince; also part of names" },
    "roo-hul-laah":           { fa: "روح‌الله", mean: "Ruhullah" },
    "ma-roof":                { fa: "معروف", mean: "famous" },
    "mee-rak":                { fa: "میرک", mean: "Mirak" },
    "ha-raa-tee":             { fa: "هراتی", mean: "Herati, from Herat" },
    "ki-taab-daar":           { fa: "کتابدار", mean: "librarian" },
    "sul-taan":               { fa: "سلطان", mean: "sultan, ruler" },
    "hu-sayn":                { fa: "حسین", mean: "Husayn" },
    "baa-yi-qa-raa":          { fa: "بایقرا", mean: "Bayqara" },
    "qawl":                   { fa: "قول", mean: "word, promise" },
    "dee-gar":                { fa: "دیگر", mean: "other; more; anymore" },
    "peer":                   { fa: "پیر", mean: "old" },
    "say-yid":                { fa: "سیّد", mean: "Sayyid, a title for a man descended from the Prophet" },
    "ah-mad":                 { fa: "احمد", mean: "Ahmad" },
    "tab-ree-zee":            { fa: "تبریزی", mean: "Tabrizi, from Tabriz" },
    "dar":                    { fa: "در", mean: "in" },
    "saal":                   { fa: "سال", mean: "year" },
    "hasht-sad-o-shast":      { fa: "۸۶۰", mean: "860" },
    "ta-wal-lud":             { fa: "تولد", mean: "birth" },
    "taa":                    { fa: "تا", mean: "so that; until; to" },
    "noh-sad-o-che-hil-o-do": { fa: "۹۴۲", mean: "942" },
    "zin-da":                 { fa: "زنده", mean: "alive" },
    "dar-baar":               { fa: "دربار", mean: "royal court" },
    "du":                     { fa: "دو", mean: "two" },
    "im-pi-raa-too-ree":      { fa: "امپراطوری", mean: "empire" },
    "tay-moo-ree-yaan":       { fa: "تیموریان", mean: "Timurids" },
    "sa-fa-wee-yaan":         { fa: "صفویان", mean: "Safavids" },
    "kaar":                   { fa: "کار", mean: "work, a job" },
    "kar-da":                 { fa: "کرده", mean: "done" },
    "kar-dan":                { fa: "کردن", mean: "to do, to make" },
    "ast":                    { fa: "است", mean: "is" },
    "way":                    { fa: "وی", mean: "he, she" },
    "ja-waa-nee":             { fa: "جوانی", mean: "youth" },
    "nazd":                   { fa: "نزد", mean: "to, at the side of (a person)" },
    "a-lee-sheer":            { fa: "علیشیر", mean: "Ali-Shir" },
    "na-waa-yee":             { fa: "نوایی", mean: "Nava'i" },
    "si-pas":                 { fa: "سپس", mean: "then, later" },
    "ta-qar-rub":             { fa: "تقرب", mean: "favor, closeness" },
    "yaaft":                  { fa: "یافت", mean: "found" },
    "yaaf-tan":               { fa: "یافتن", mean: "to find" },
    "raa":                    { fa: "را", mean: "marks the object of the verb" },
    "maa-nee":                { fa: "مانی", mean: "Mani" },
    "saa-nee":                { fa: "ثانی", mean: "second" },
    "mee-naa-meed":           { fa: "می‌نامید", mean: "called, named" },
    "naa-mee-dan":            { fa: "نامیدن", mean: "to name, to call" },
    "us-taa-dee":             { fa: "استادی", mean: "mastery; the title of ustad" },
    "za-baan-zad":            { fa: "زبانزد", mean: "renowned, on everyone's lips" },
    "ha-ma-gaan":             { fa: "همه‌گان", mean: "everyone" },
    "pas":                    { fa: "پس", mean: "then, so" },
    "az":                     { fa: "از", mean: "from, of" },
    "bar-uf-taa-dan":         { fa: "برافتادن", mean: "fall, collapse" },
    "sil-si-la":              { fa: "سلسله", mean: "series" },
    "ba-dast":                { fa: "به‌دست", mean: "in hand" },
    "shay-baa-nee-yaan":      { fa: "شیبانیان", mean: "Shaybanids" },
    "ham-chu-naan":           { fa: "همچنان", mean: "likewise, just so" },
    "ha-raat":                { fa: "هرات", mean: "Herat" },
    "maand":                  { fa: "ماند", mean: "remained" },
    "maan-dan":               { fa: "ماندن", mean: "to remain, to stay" },
    "baad#after":             { fa: "بعد", say: "baad", mean: "after, then" },
    "ta-sar-ruf":             { fa: "تصرف", mean: "capture, possession" },
    "ta-was-sut":             { fa: "توسط", mean: "by, through" },
    "shaah":                  { fa: "شاه", mean: "king, shah; part of names" },
    "is-maa-eel":             { fa: "اسماعیل", mean: "Ismail" },
    "sa-fa-wee":              { fa: "صفوی", mean: "Safavid" },
    "jab-ran":                { fa: "جبرا", mean: "forcibly" },
    "baa":                    { fa: "با", mean: "with" },
    "khud":                   { fa: "خود", mean: "own; self" },
    "tab-reez":               { fa: "تبریز", mean: "Tabriz" },
    "burd":                   { fa: "برد", mean: "took, benefited" },
    "bur-dan":                { fa: "بردن", mean: "to take away, to carry" },
    "ri-yaa-sat":             { fa: "ریاست", mean: "directorate, administration" },
    "ki-taab-khaa-na-yi":     { fa: "کتابخانهٔ", mean: "library" },
    "ki-taab-khaa-na":        { fa: "کتابخانه", mean: "library" },
    "sal-ta-na-tee":          { fa: "سلطنتی", mean: "royal" },
    "man-soob":               { fa: "منصوب", mean: "appointed, attributed" },
    "kard":                   { fa: "کرد", mean: "did, made" },
    "daw-ra":                 { fa: "دوره", mean: "period" },
    "tah-maasb":              { fa: "طهماسب", mean: "Tahmasp" },
    "neez":                   { fa: "نیز", mean: "also, too" },
    "ka-maal":                { fa: "کمال", mean: "perfection" },
    "iz-zat":                 { fa: "عزت", mean: "honor" },
    "ih-ti-raam":             { fa: "احترام", mean: "respect" },
    "zees-ta":                { fa: "زیسته", mean: "lived" },
    "zees-tan":               { fa: "زیستن", mean: "to live" },
    "awj":                    { fa: "اوج", mean: "top, height" },
    "shu-go-faa-yee":         { fa: "شگوفایی", mean: "flowering, flourishing" },
    "hin-ree":                { fa: "هنری", mean: "Henry" },
    "ra-seed":                { fa: "رسید", mean: "arrived, reached" },
    "ra-see-dan":             { fa: "رسیدن", mean: "to arrive, to reach" },
    "jaa-yay":                { fa: "جایی", mean: "a place" },
    "ki":                     { fa: "که", mean: "that, which, who" },
    "shuh-ra-tash":           { fa: "شهرتش", mean: "his fame" },
    "shuh-rat":               { fa: "شهرت", mean: "fame" },
    "baa-bur":                { fa: "بابر", mean: "Babur" },
    "paad-shaah":             { fa: "پادشاه", mean: "king" },
    "mu-gho-lee":             { fa: "مغولی", mean: "Mughal" },
    "hind":                   { fa: "هند", mean: "India" },
    "sar-an-jaam":            { fa: "سرانجام", mean: "finally, in the end" },
    "a-waa-khir":             { fa: "اواخر", mean: "the last part" },
    "umr":                    { fa: "عمر", mean: "life, lifetime" },
    "shahr":                  { fa: "شهر", mean: "city, town" },
    "baaz-gasht":             { fa: "بازگشت", mean: "returned; return" },
    "baaz-gash-tan":          { fa: "بازگشتن", mean: "to return" },
    "ha-maan-jaa":            { fa: "همان‌جا", mean: "that same place, there" },
    "wa-faat":                { fa: "وفات", mean: "death" },
    "qis-mat":                { fa: "قسمت", mean: "share, part" },
    "sha-maal":               { fa: "شمال", mean: "north" },
    "ghar-bee":               { fa: "غربی", mean: "western" },
    "mad-foon":               { fa: "مدفون", mean: "buried" },
    "shud":                   { fa: "شد", mean: "became; was" },
    "shu-dan":                { fa: "شدن", mean: "to become" },
    "ma-zaar":                { fa: "مزار", mean: "shrine, tomb" },
    "sang":                   { fa: "سنگ", mean: "stone" },
    "qabr":                   { fa: "قبر", mean: "grave" },
    "waa-zih":                { fa: "واضح", mean: "clear, evident" },
    "maw-jood":               { fa: "موجود", mean: "being, creature" },
    "taa-reekh":              { fa: "تاریخ", mean: "history; date" },
    "hu-nar":                 { fa: "هنر", mean: "art, skill" },
    "maa":                    { fa: "ما", mean: "we" },
    "nu-khus-teen":           { fa: "نخستین", mean: "first" },
    "naq-qaa-shee":           { fa: "نقاشی", mean: "painting" },
    "aa-saa-rash":            { fa: "آثارش", mean: "his works" },
    "aa-saar":                { fa: "آثار", mean: "works" },
    "im-zaa":                 { fa: "امضا", mean: "signature; to sign" },
    "na-qaa-shee-haa-yi":     { fa: "نقاشی‌های", mean: "paintings" },
    "tas-weer":               { fa: "تصویر", mean: "picture" },
    "sah-na-haa-yee":         { fa: "صحنه‌هایی", mean: "some scenes" },
    "sah-na":                 { fa: "صحنه", mean: "scene" },
    "ki-taab-haa":            { fa: "کتاب‌ها", mean: "books" },
    "bur-jis-ta-yi":          { fa: "برجستهٔ", mean: "outstanding, prominent" },
    "a-da-bee":               { fa: "ادبی", mean: "literary" },
    "aa-ghaaz":               { fa: "آغاز", mean: "beginning" },
    "khat-taa-taan":          { fa: "خطاطان", mean: "calligraphers" },
    "khat-taat":              { fa: "خطاط", mean: "calligrapher" },
    "bar-jas-ta":             { fa: "برجسته", mean: "outstanding, prominent" },
    "aan":                    { fa: "آن", mean: "that" },
    "mee-ni-wish-tand":       { fa: "می‌نوشتند", mean: "they wrote" },
    "na-wish-tan":            { fa: "نوشتن", mean: "to write" },
    "taz-heeb-kaa-raan":      { fa: "تذهیب‌کاران", mean: "illuminators" },
    "taz-heeb-kaar":          { fa: "تذهیب‌کار", mean: "illuminator" },
    "faa-si-la-yi":           { fa: "فاصلهٔ", mean: "interval, distance" },
    "khat-haa":               { fa: "خط‌ها", mean: "lines" },
    "khat":                   { fa: "خط", mean: "line, script" },
    "tarh-haa-yi":            { fa: "طرح‌های", mean: "discussions, plans" },
    "goo-naa-goon":           { fa: "گوناگون", mean: "various" },
    "pur":                    { fa: "پر", mean: "full" },
    "may-kar-dand":           { fa: "می‌کردند", mean: "used to do" },
    "gaah":                   { fa: "گاه", mean: "sometimes; time, place" },
    "bakhsh-haa-yee":         { fa: "بخش‌هایی", mean: "some parts" },
    "bakhsh":                 { fa: "بخش", mean: "Bakhsh; part" },
    "een":                    { fa: "این", mean: "this" },
    "man-zoor":               { fa: "منظور", mean: "purpose, intention" },
    "khaa-lee":               { fa: "خالی", mean: "empty" },
    "gu-zaash-ta":            { fa: "گذاشته", mean: "placed, put" },
    "gu-zaash-tan":           { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "ta-saa-wee-ree":         { fa: "تصاویری", mean: "pictures" },
    "mu-naa-sib":             { fa: "مناسب", mean: "suitable" },
    "naqsh":                  { fa: "نقش", mean: "role" },
    "may-kard":               { fa: "می‌کرد", mean: "used to do, kept doing" },
    "za-mee-na-yi":           { fa: "زمینهٔ", mean: "ground, conditions" },
    "daa-raa-yi":             { fa: "دارای", mean: "having, possessing" },
    "sabk":                   { fa: "سبک", mean: "style" },
    "mak-tab":                { fa: "مکتب", mean: "school" },
    "khaa-say":               { fa: "خاصی", mean: "special (khaas + -ay, a: “a special …”)" },
    "sharq":                  { fa: "شرق", mean: "East" },
    "gharb":                  { fa: "غرب", mean: "west" },
    "naam":                   { fa: "نام", mean: "name" },
    "may-shi-naa-sand":       { fa: "می‌شناسند", mean: "know, recognize" },
    "shi-naakh-tan":          { fa: "شناختن", mean: "to know, recognize" },
    "a-saas":                 { fa: "اساس", mean: "basis" },
    "it-ti-laa-aa-tee":       { fa: "اطلاعاتی", mean: "information" },
    "it-ti-laa-aat":          { fa: "اطلاعات", mean: "information" },
    "dast":                   { fa: "دست", mean: "hand" },
    "tas-weer-haa-yee":       { fa: "تصویرهایی", mean: "pictures" },
    "im-zaa-yi":              { fa: "امضای", mean: "signature of" },
    "a-seel":                 { fa: "اصیل", mean: "authentic, original" },
    "nus-kha-yee":            { fa: "نسخه‌یی", mean: "a copy, manuscript" },
    "nus-kha":                { fa: "نسخه", mean: "copy, manuscript" },
    "bos-taan":               { fa: "بوستان", mean: "the Bustan, Sa'di's book of poems; a garden" },
    "sa-dee":                 { fa: "سعدی", mean: "Sa’di, the Persian poet from Shiraz who died about 1292" },
    "shu-da":                 { fa: "شده", mean: "become; been" },
    "ee-nak":                 { fa: "اینک", mean: "now, here" },
    "mil-lee":                { fa: "ملی", mean: "national" },
    "qaa-hi-ra":              { fa: "قاهره", mean: "Cairo" },
    "mesr":                   { fa: "مصر", mean: "Egypt" },
    "kaar-haa":               { fa: "کارها", mean: "works, jobs" },
    "dee-ga-ray":             { fa: "دیگری", mean: "someone else" },
    "man-soob#attributed":    { fa: "منسوب", say: "man-soob", mean: "attributed" },
    "mut-ma-in-nee":          { fa: "مطمئنی", mean: "reliable, certain" },
    "mut-ma-in":              { fa: "مطمئن", mean: "reliable, certain" },
    "dee-da":                 { fa: "دیده", mean: "seen; eye" },
    "dee-dan":                { fa: "دیدن", mean: "to see; seeing" },
    "na-may-sha-wad":         { fa: "نمی‌شود", mean: "cannot be, does not become" },
    "ha-meen":                { fa: "همین", mean: "this very, this same" },
    "ji-hat":                 { fa: "جهت", mean: "direction" },
    "tan-haa":                { fa: "تنها", mean: "only; alone" },
    "tas-weer-haa":           { fa: "تصویرها", mean: "pictures" },
    "tar-keeb":               { fa: "ترکیب", mean: "compound, composition" },
    "bee-maa-nand":           { fa: "بی‌مانند", mean: "unmatched" },
    "naqsh-haa-yi":           { fa: "نقش‌های", mean: "designs, images" },
    "taz-yee-nee":            { fa: "تزیینی", mean: "decorative" },
    "sah-na-haa-yi":          { fa: "صحنه‌های", mean: "scenes" },
    "waa-qi-ee":              { fa: "واقعی", mean: "real" },
    "may-ta-waa-nad":         { fa: "می‌تواند", mean: "can" },
    "ta-waa-nis-tan":         { fa: "توانستن", mean: "to be able, can" },
    "raah-ni-maa-yee":        { fa: "راهنمایی", mean: "guidance" },
    "ba-raa-yi":              { fa: "برای", mean: "for" },
    "baaz-shi-naa-see":       { fa: "بازشناسی", mean: "identification" },
    "shu-maar":               { fa: "شمار", mean: "count, number" },
    "aa-yad":                 { fa: "آید", mean: "comes" },
    "aa-ma-dan":              { fa: "آمدن", mean: "to come" },
    "mi-yaan":                { fa: "میان", mean: "middle, among" },
    "tas-weer-haa-yi":        { fa: "تصویرهای", mean: "pictures" },
    "bee-shu-maa-ree":        { fa: "بی‌شماری", mean: "countless" },
    "bee-shu-maar":           { fa: "بی‌شمار", mean: "countless" },
    "ju-daa-gaa-na":          { fa: "جداگانه", mean: "separate" },
    "ikh-ti-laaf":            { fa: "اختلاف", mean: "disagreement, difference" },
    "a-qee-da":               { fa: "عقیده", mean: "opinion, belief" },
    "daa-nish-man-daan":      { fa: "دانشمندان", mean: "scholars, scientists" },
    "bi-si-yaar":             { fa: "بسیار", mean: "much, very" },
    "am-maa":                 { fa: "اما", mean: "but" },
    "har":                    { fa: "هر", mean: "every" },
    "haal":                   { fa: "حال", mean: "state, condition" },
    "bi-yaa-ree":             { fa: "بسیاری", mean: "many, a great deal" },
    "a-gar":                  { fa: "اگر", mean: "if" },
    "na-baa-shand":           { fa: "نباشند", mean: "they may not be" },
    "waa-bas-ta":             { fa: "وابسته", mean: "dependent" },
    "has-tand":               { fa: "هستند", mean: "are" },
    "bar-khay":               { fa: "برخی", mean: "some" },
    "ki-taab-haa-yee":        { fa: "کتاب‌هایی", mean: "books, some books" },
    "mu-zay-ya-nand":         { fa: "مزین‌اند", mean: "are decorated" },
    "mu-zay-yan":             { fa: "مزین", mean: "decorated" },
    "qa-raar-and":            { fa: "قرارند", mean: "are arranged, are as follows" },
    "qa-raar":                { fa: "قرار", mean: "place, rest" },
    "kham-sa":                { fa: "خمسه", mean: "a set of five long poems" },
    "a-lee-sheer#name":       { fa: "علی‌شیر", say: "a-lee-sheer", mean: "Ali-Shir" },
    "gu-lis-taan":            { fa: "گلستان", mean: "the Gulistan, Sa'di's book of stories; a rose garden" },
    "ni-zaa-mee":             { fa: "نظامی", mean: "Nizami, a Persian poet of the 1100s" },
    "naq-qaa-shaan":          { fa: "نقاشان", mean: "painters" },
    "bu-khaa-raa":            { fa: "بخارا", mean: "Bukhara" },
    "bur-dand":               { fa: "بردند", mean: "took, carried" },
    "khaa-ni-daan":           { fa: "خاندان", mean: "dynasty, family" },
    "shay-baa-nee":           { fa: "شیبانی", mean: "Shaybani" },
    "pa-ra-wa-rish":          { fa: "پرورش", mean: "raising, developing" },
    "daa-dand":               { fa: "دادند", mean: "gave" },
    "daa-dan":                { fa: "دادن", mean: "to give" },
    "ki-taa-bay":             { fa: "کتابی", mean: "a book" },
    "mihr":                   { fa: "مهر", mean: "the sun; love" },
    "mush-ta-ree":            { fa: "مشتری", mean: "Mushtari, Jupiter" },
    "is-tin-saakh":           { fa: "استنساخ", mean: "copying a manuscript" },
    "na-mo-daar":             { fa: "نمودار", mean: "visible" },
    "hifz":                   { fa: "حفظ", mean: "keeping, guarding" },
    "mu-haa-ji-rat":          { fa: "مهاجرت", mean: "migration" },
    "sa-bab":                 { fa: "سبب", mean: "cause, reason" },
    "i-shaa-a-yi":            { fa: "اشاعهٔ", mean: "spread, propagation" },
    "i-shaa-a":               { fa: "اشاعه", mean: "spread, propagation" },
    "hin-dus-taan":           { fa: "هندوستان", mean: "India" },
    "gar-deed":               { fa: "گردید", mean: "became" },
    "gar-dee-dan":            { fa: "گردیدن", mean: "to become, to turn" },
    "way-zha":                { fa: "ویژه", mean: "special (ba way-zha, especially)" },
    "shay-wa":                { fa: "شیوه", mean: "style, way" },
    "gi-rif-tan":             { fa: "گرفتن", mean: "to take" },
    "rang-haa-yi":            { fa: "رنگ‌های", mean: "colors" },
    "rang":                   { fa: "رنگ", mean: "color" },
    "di-rakh-shaan":          { fa: "درخشان", mean: "bright, brilliant" },
    "may-daa-nand":           { fa: "می‌دانند", mean: "know; consider" },
    "daa-nis-tan":            { fa: "دانستن", mean: "to know" },
    "baysh-tar":              { fa: "بیشتر", mean: "more" },
    "sard":                   { fa: "سرد", mean: "cold" },
    "maa-ya-haa-yi":          { fa: "مایه‌های", mean: "shades, tones" },
    "maa-ya":                 { fa: "مایه", mean: "means, capital" },
    "sabz":                   { fa: "سبز", mean: "green" },
    "aa-bay":                 { fa: "آبی", mean: "some water" },
    "ta-maa-yul":             { fa: "تمایل", mean: "tendency, inclination" },
    "daash-ta":               { fa: "داشته", mean: "had" },
    "daash-tan":              { fa: "داشتن", mean: "to have" },
    "garm":                   { fa: "گرم", mean: "hot, warm" },
    "choon":                  { fa: "چون", mean: "like, as; when; because" },
    "naa-rin-jee":            { fa: "نارنجی", mean: "orange" },
    "tund":                   { fa: "تند", mean: "fast, strong" },
    "ta-aa-du-lee":           { fa: "تعادلی", mean: "a balance" },
    "ta-aa-dul":              { fa: "تعادل", mean: "balance" },
    "mat-boo":                { fa: "مطبوع", mean: "pleasing" },
    "ee-jaad":                { fa: "ایجاد", mean: "creating, setting up" },
    "ta-naa-sub":             { fa: "تناسب", mean: "balance, proportion" },
    "yak":                    { fa: "یک", mean: "one, a" },
    "aj-zaa":                 { fa: "اجزا", mean: "parts" },
    "yaa":                    { fa: "یا", mean: "or" },
    "maj-moo-a":              { fa: "مجموعه", mean: "collection, whole" },
    "shi-gift-an-geez":       { fa: "شگفت‌انگیز", mean: "astonishing" },
    "shaa-kha-haa-yi":        { fa: "شاخه‌های", mean: "branches" },
    "shaa-kha":               { fa: "شاخه", mean: "branch" },
    "shu-goo-fa":             { fa: "شگوفه", mean: "blossom" },
    "kaa-shee-haa":           { fa: "کاشی‌ها", mean: "tiles" },
    "kaa-shee":               { fa: "کاشی", mean: "tile" },
    "farsh-haa-yi":           { fa: "فرش‌های", mean: "carpets" },
    "farsh":                  { fa: "فرش", mean: "carpet" },
    "zeer-baaft":             { fa: "زیربافت", mean: "close-woven" },
    "pur-zee-war":            { fa: "پرزیور", mean: "richly ornamented" },
    "ha-ma":                  { fa: "همه", mean: "all, every" },
    "hu-nar-man-dee":         { fa: "هنرمندی", mean: "an artist" },
    "zawq":                   { fa: "ذوق", mean: "taste, artistic sense" },
    "za-raa-fat":             { fa: "ظرافت", mean: "delicacy, refinement" },
    "oost":                   { fa: "اوست", mean: "it is his, it is he" },
    "waa-qi-bee-nee":         { fa: "واقع‌بینی", mean: "realism" },
    "chashm":                 { fa: "چشم", mean: "eye" },
    "mee-kho-rad":            { fa: "می‌خورد", mean: "appears, strikes" },
    "khor-dan":               { fa: "خوردن", mean: "to eat; (with gham) to grieve" },
    "jan-ba-yi":              { fa: "جنبهٔ", mean: "aspect" },
    "jan-ba":                 { fa: "جنبه", mean: "aspect" },
    "dar-baa-ree":            { fa: "درباری", mean: "courtly" },
    "na-daa-rad":             { fa: "ندارد", mean: "does not have" },
    "zin-da-gee":             { fa: "زنده‌گی", mean: "life" },
    "mar-dum":                { fa: "مردم", mean: "people" },
    "aa-dee":                 { fa: "عادی", mean: "ordinary" },
    "sar-chash-ma":           { fa: "سرچشمه", mean: "source, origin" },
    "may-gee-rad":            { fa: "می‌گیرد", mean: "takes" },
    "chi":                    { fa: "چه", mean: "what; how" },
    "ham":                    { fa: "هم", mean: "also, too" },
    "za-maa-nash":            { fa: "زمانش", mean: "his time" },
    "za-maan":                { fa: "زمان", mean: "time" },
    "may-ku-nad":             { fa: "می‌کند", mean: "does, makes" },
    "haa-lat":                { fa: "حالت", mean: "state" },
    "chih-ra-haa":            { fa: "چهره‌ها", mean: "faces" },
    "chi-hra":                { fa: "چهره", mean: "face" },
    "shakh-see-ya-tee":       { fa: "شخصیتی", mean: "a personality" },
    "shakh-see-yat":          { fa: "شخصیت", mean: "character, personality" },
    "haa-la-tee":             { fa: "حالتی", mean: "a state, expression" },
    "khaas":                  { fa: "خاص", mean: "special" },
    "ha-ra-kat":              { fa: "حرکت", mean: "movement" },
    "sar-shaar":              { fa: "سرشار", mean: "full, overflowing" },
    "yak-na-waakht":          { fa: "یک‌نواخت", mean: "uniform, monotonous" },
    "paysh":                  { fa: "پیش", mean: "front; forward" },
    "ta-faa-wut":             { fa: "تفاوت", mean: "difference" },
    "daa-rad":                { fa: "دارد", mean: "has" },
    "way-zha-gee-haa-yi":     { fa: "ویژه‌گی‌های", mean: "features, characteristics" },
    "may-ta-waan":            { fa: "می‌توان", mean: "one can" },
    "ma-waa-rid":             { fa: "موارد", mean: "cases, instances" },
    "zayr":                   { fa: "زیر", mean: "under" },
    "i-shaa-ra":              { fa: "اشاره", mean: "indication, reference" },
    "yak#digit":              { fa: "۱", say: "yak", mean: "one" },
    "di-rus-tee":             { fa: "درستی", mean: "correctness" },
    "diq-qat":                { fa: "دقت", mean: "precision" },
    "kaa-mil":                { fa: "کامل", mean: "full, complete" },
    "du#digit":               { fa: "۲", say: "du", mean: "two" },
    "ni-shaan":               { fa: "نشان", mean: "sign, show" },
    "soo-rat":                { fa: "صورت", mean: "face, outward form" },
    "ash-khaas":              { fa: "اشخاص", mean: "people" },
    "nah-wee":                { fa: "نحوی", mean: "a way, manner" },
    "shi-garf":               { fa: "شگرف", mean: "remarkable" },
    "is-ti-faa-da":           { fa: "استفاده", mean: "use" },
    "an-waa":                 { fa: "انواع", mean: "kinds" },
    "rang-haa":               { fa: "رنگ‌ها", mean: "colors" },
    "sih#digit":              { fa: "۳", say: "sih", mean: "three" },
    "tar-seem":               { fa: "ترسیم", mean: "drawing, depiction" },
    "di-rakh-taan":           { fa: "درختان", mean: "trees" },
    "di-rakht":               { fa: "درخت", mean: "tree" },
    "gul-haa":                { fa: "گل‌ها", mean: "flowers" },
    "gul":                    { fa: "گل", mean: "Gul; flower" },
    "door-na-maa-haa":        { fa: "دورنماها", mean: "distant views" },
    "door-na-maa":            { fa: "دورنما", mean: "distant view" },
    "na-maa-yish":            { fa: "نمایش", mean: "display, show" },
    "par-taw":                { fa: "پرتو", mean: "ray, light" },
    "khur-sheed":             { fa: "خورشید", mean: "sun" },
    "a-bar":                  { fa: "ابر", mean: "great, super-, above" },
    "chaar":                  { fa: "۴", mean: "four" },
    "ta-na-wo":               { fa: "تنوع", mean: "variety" },
    "saa-zi-gaa-ree":         { fa: "سازگاری", mean: "harmony, compatibility" },
    "aan-haa":                { fa: "آن‌ها", mean: "they, them" },
    "panj#digit":             { fa: "۵", say: "panj", mean: "five" },
    "roo-hee-ya":             { fa: "روحیه", mean: "spirit, disposition" },
    "ni-huf-ta-yee":          { fa: "نهفته‌یی", mean: "a hidden one" },
    "ni-huf-ta":              { fa: "نهفته", mean: "hidden" },
    "hub":                    { fa: "حب", mean: "love" },
    "i-laa-hee":              { fa: "الهی", mean: "of God" },
    "roo-haa-nee-yat":        { fa: "روحانیت", mean: "spirituality" },
    "shash#digit":            { fa: "۶", say: "shash", mean: "six" },
    "chi-ra-gus-haa-yee":     { fa: "چهره‌گشایی", mean: "portraiture" },
    "soo-rat-ga-ree":         { fa: "صورتگری", mean: "portrait painting" },
    "khu-raa-saa-nee":        { fa: "خراسانی", mean: "Khorasani" },
    "ba-jaa":                 { fa: "به‌جا", mean: "in place" },
    "ta-seer":                { fa: "تأثیر", mean: "effect, influence" },
    "chee-nee":               { fa: "چینی", mean: "Chinese" },
    "aa-zaad":                { fa: "آزاد", mean: "free" },
    "haft#digit":             { fa: "۷", say: "haft", mean: "seven" },
    "ree-za-kaa-ree":         { fa: "ریزه‌کاری", mean: "fine detail" },
    "diq-qat-ni-gaa-ree":     { fa: "دقت‌نگاری", mean: "precise drawing" },
    "bi-naa-haa":             { fa: "بناها", mean: "buildings" },
    "bi-naa":                 { fa: "بنا", mean: "building" },
    "dee-waa-ra-haa":         { fa: "دیواره‌ها", mean: "walls" },
    "dee-waa-ra":             { fa: "دیواره", mean: "wall" },
    "farsh-haa":              { fa: "فرش‌ها", mean: "carpets" },
    "taz-yee-naat":           { fa: "تزیینات", mean: "decorations" },
    "ma-jaa-lis":             { fa: "مجالس", mean: "gatherings" },
    "maj-lis":                { fa: "مجلس", mean: "council, assembly" },
    "mu-saw-war":             { fa: "مصور", mean: "illustrated" },
    "ni-gaa-rish":            { fa: "نگارش", mean: "writing" },
    "aa-raa-yish":            { fa: "آرایش", mean: "decoration, arrangement" },
    "li-baas-haa":            { fa: "لباس‌ها", mean: "clothes" },
    "li-baas":                { fa: "لباس", mean: "clothes" },
    "ran-geen":               { fa: "رنگین", mean: "colorful" }
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
    "say": "us-taad ka-maal-ud-deen beh-zaad",
    "mean": "Master Kamal al-Din Behzad",
    "words": [
      [
        "استاد",
        "us-taad",
        "us-taad"
      ],
      [
        "کمال‌الدین",
        "ka-maal-ud-deen",
        "ka-maal-ud-deen"
      ],
      [
        "بهزاد",
        "beh-zaad",
        "beh-zaad"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "us-taad ka-maal-ud-deen beh-zaad bu-zurg-ta-reen wa mash-hoor-ta-reen naq-qaa-shi rish-ta-yi-yi ni-gaar-ga-ree (mee-nee-yaa-too-ree) qar-ni da-hu-mi hij-ree bood.",
        "mean": "Master Kamal al-Din Behzad was the greatest and most famous miniature painter of the tenth century of the Hijri calendar.",
        "words": [
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "کمال‌الدین",
            "ka-maal-ud-deen",
            "ka-maal-ud-deen"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "بزرگترین",
            "bu-zurg-ta-reen",
            "bu-zurg-ta-reen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مشهورترین",
            "mash-hoor-ta-reen",
            "mash-hoor-ta-reen"
          ],
          [
            "نقاش",
            "naq-qaa-shi",
            "naq-qaash"
          ],
          [
            "رشتهٔ",
            "rish-ta-yi-yi",
            "rish-ta-yi"
          ],
          [
            "نگارگری",
            "ni-gaar-ga-ree",
            "ni-gaar-ga-ree"
          ],
          [
            "(مینیاتوری)",
            "mee-nee-yaa-too-ree",
            "mee-nee-yaa-too-ree"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn"
          ],
          [
            "دهم",
            "da-hu-mi",
            "da-hum"
          ],
          [
            "هجری",
            "hij-ree",
            "hij-ree#year"
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
        "say": "us-taa-di oo ba qaw-lee a-meer roo-hul-laah ma-roof ba mee-rak naq-qaa-shi ha-raa-tee (ki-taab-daa-ri sul-taan hu-sayn baa-yi-qa-raa) wa ba qaw-li dee-gar peer say-yid ah-mad tab-ree-zee bood.",
        "mean": "According to one account, his teacher was Amir Ruhullah, known as Mirak, the Herati painter and librarian of Sultan Husayn Bayqara; according to another, it was Pir Sayyid Ahmad Tabrizi.",
        "words": [
          [
            "استاد",
            "us-taa-di",
            "us-taad"
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
            "قولی",
            "qaw-lee",
            "qaw-lee"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "روح‌الله",
            "roo-hul-laah",
            "roo-hul-laah"
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
            "میرک",
            "mee-rak",
            "mee-rak"
          ],
          [
            "نقاش",
            "naq-qaa-shi",
            "naq-qaash"
          ],
          [
            "هراتی",
            "ha-raa-tee",
            "ha-raa-tee"
          ],
          [
            "(کتابدار",
            "ki-taab-daa-ri",
            "ki-taab-daar"
          ],
          [
            "سلطان",
            "sul-taan",
            "sul-taan"
          ],
          [
            "حسین",
            "hu-sayn",
            "hu-sayn"
          ],
          [
            "بایقرا)",
            "baa-yi-qa-raa",
            "baa-yi-qa-raa"
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
            "قول",
            "qaw-li",
            "qawl"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "پیر",
            "peer",
            "peer"
          ],
          [
            "سید",
            "say-yid",
            "say-yid"
          ],
          [
            "احمد",
            "ah-mad",
            "ah-mad"
          ],
          [
            "تبریزی",
            "tab-ree-zee",
            "tab-ree-zee"
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
        "say": "beh-zaad dar saa-li hasht-sad-o-shast ta-wal-lud wa taa noh-sad-o-che-hil-o-do zin-da bood.",
        "mean": "Behzad was born in 860 AH and lived until 942 AH.",
        "words": [
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
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
            "۸۶۰",
            "hasht-sad-o-shast",
            "hasht-sad-o-shast"
          ],
          [
            "تولد",
            "ta-wal-lud",
            "ta-wal-lud"
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
            "۹۴۲",
            "noh-sad-o-che-hil-o-do",
            "noh-sad-o-che-hil-o-do"
          ],
          [
            "زنده",
            "zin-da",
            "zin-da"
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
        "say": "beh-zaad dar dar-baa-ri du im-pi-raa-too-ree-yi tay-moo-ree-yaan wa sa-fa-wee-yaan kaar kar-da ast.",
        "mean": "Behzad worked at the courts of the Timurid and Safavid empires.",
        "words": [
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
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
            "دو",
            "du",
            "du"
          ],
          [
            "امپراطوری",
            "im-pi-raa-too-ree-yi",
            "im-pi-raa-too-ree"
          ],
          [
            "تیموریان",
            "tay-moo-ree-yaan",
            "tay-moo-ree-yaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صفویان",
            "sa-fa-wee-yaan",
            "sa-fa-wee-yaan"
          ],
          [
            "کار",
            "kaar",
            "kaar"
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
        "say": "way dar ja-waa-nee nazd a-meer a-lee-sheer na-waa-yee wa si-pas ba dar-baa-ri sul-taan hu-sayn baa-yi-qa-raa ta-qar-rub yaaft.",
        "mean": "In his youth he entered the company of Amir Ali-Shir Nava'i and then gained favor at Sultan Husayn Bayqara's court.",
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
            "جوانی",
            "ja-waa-nee",
            "ja-waa-nee"
          ],
          [
            "نزد",
            "nazd",
            "nazd"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "علیشیر",
            "a-lee-sheer",
            "a-lee-sheer"
          ],
          [
            "نوایی",
            "na-waa-yee",
            "na-waa-yee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سپس",
            "si-pas",
            "si-pas"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دربار",
            "dar-baa-ri",
            "dar-baar"
          ],
          [
            "سلطان",
            "sul-taan",
            "sul-taan"
          ],
          [
            "حسین",
            "hu-sayn",
            "hu-sayn"
          ],
          [
            "بایقرا",
            "baa-yi-qa-raa",
            "baa-yi-qa-raa"
          ],
          [
            "تقرب",
            "ta-qar-rub",
            "ta-qar-rub"
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
        "say": "sul-taan hu-sayn oo raa maa-nee-yi saa-nee mee-naa-meed wa us-taa-dee-yi oo za-baan-za-di ha-ma-gaan bood.",
        "mean": "Sultan Husayn called him a second Mani, and his mastery was renowned among everyone.",
        "words": [
          [
            "سلطان",
            "sul-taan",
            "sul-taan"
          ],
          [
            "حسین",
            "hu-sayn",
            "hu-sayn"
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
            "مانی",
            "maa-nee-yi",
            "maa-nee"
          ],
          [
            "ثانی",
            "saa-nee",
            "saa-nee"
          ],
          [
            "می‌نامید",
            "mee-naa-meed",
            "mee-naa-meed",
            "naa-mee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استادی",
            "us-taa-dee-yi",
            "us-taa-dee"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "زبانزد",
            "za-baan-za-di",
            "za-baan-zad"
          ],
          [
            "همه‌گان",
            "ha-ma-gaan",
            "ha-ma-gaan"
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
        "say": "pas az bar-uf-taa-da-ni sil-si-la-yi tay-moo-ree-yaan ba-das-ti shay-baa-nee-yaan; ham-chu-naan dar ha-raat maand wa baad az ta-sar-ru-fi ha-raat ta-was-su-ti sa-fa-wee-yaan, shaah is-maa-eel sa-fa-wee oo raa jab-ran baa khud ba tab-reez burd wa ba ri-yaa-sa-ti ki-taab-khaa-na-yi-yi sal-ta-na-tee man-soob kard.",
        "mean": "After the Timurid dynasty fell to the Shaybanids, he remained in Herat; after the Safavids took Herat, Shah Ismail Safavid forcibly took him to Tabriz and appointed him head of the royal library.",
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
            "برافتادن",
            "bar-uf-taa-da-ni",
            "bar-uf-taa-dan"
          ],
          [
            "سلسلهٔ",
            "sil-si-la-yi",
            "sil-si-la"
          ],
          [
            "تیموریان",
            "tay-moo-ree-yaan",
            "tay-moo-ree-yaan"
          ],
          [
            "به‌دست",
            "ba-das-ti",
            "ba-dast"
          ],
          [
            "شیبانیان؛",
            "shay-baa-nee-yaan",
            "shay-baa-nee-yaan"
          ],
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
            "هرات",
            "ha-raat",
            "ha-raat"
          ],
          [
            "ماند",
            "maand",
            "maand",
            "maan-dan"
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
            "از",
            "az",
            "az"
          ],
          [
            "تصرف",
            "ta-sar-ru-fi",
            "ta-sar-ruf"
          ],
          [
            "هرات",
            "ha-raat",
            "ha-raat"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "صفویان،",
            "sa-fa-wee-yaan",
            "sa-fa-wee-yaan"
          ],
          [
            "شاه",
            "shaah",
            "shaah"
          ],
          [
            "اسماعیل",
            "is-maa-eel",
            "is-maa-eel"
          ],
          [
            "صفوی",
            "sa-fa-wee",
            "sa-fa-wee"
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
            "جبرا",
            "jab-ran",
            "jab-ran"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "تبریز",
            "tab-reez",
            "tab-reez"
          ],
          [
            "برد",
            "burd",
            "burd",
            "bur-dan"
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
            "ریاست",
            "ri-yaa-sa-ti",
            "ri-yaa-sat"
          ],
          [
            "کتابخانهٔ",
            "ki-taab-khaa-na-yi-yi",
            "ki-taab-khaa-na-yi",
            "ki-taab-khaa-na"
          ],
          [
            "سلطنتی",
            "sal-ta-na-tee",
            "sal-ta-na-tee"
          ],
          [
            "منصوب",
            "man-soob",
            "man-soob"
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
        "say": "dar daw-ra-yi shaah tah-maasb sa-fa-wee neez dar ka-maa-li iz-zat wa ih-ti-raam zees-ta ba aw-ji shu-go-faa-yee-yi hin-ree ra-seed taa jaa-yay ki shuh-ra-tash taa dar-baa-ri baa-bur paad-shaa-hi mu-gho-lee-yi hind ra-seed.",
        "mean": "During Shah Tahmasp's reign he also lived in complete honor and respect and reached the height of artistic flourishing, with his fame reaching the court of Babur, the Mughal ruler of India.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دورهٔ",
            "daw-ra-yi",
            "daw-ra"
          ],
          [
            "شاه",
            "shaah",
            "shaah"
          ],
          [
            "طهماسب",
            "tah-maasb",
            "tah-maasb"
          ],
          [
            "صفوی",
            "sa-fa-wee",
            "sa-fa-wee"
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
            "کمال",
            "ka-maa-li",
            "ka-maal"
          ],
          [
            "عزت",
            "iz-zat",
            "iz-zat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احترام",
            "ih-ti-raam",
            "ih-ti-raam"
          ],
          [
            "زیسته",
            "zees-ta",
            "zees-ta",
            "zees-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "اوج",
            "aw-ji",
            "awj"
          ],
          [
            "شگوفایی",
            "shu-go-faa-yee-yi",
            "shu-go-faa-yee"
          ],
          [
            "هنری",
            "hin-ree",
            "hin-ree"
          ],
          [
            "رسید",
            "ra-seed",
            "ra-seed",
            "ra-see-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "جایی",
            "jaa-yay",
            "jaa-yay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "شهرتش",
            "shuh-ra-tash",
            "shuh-ra-tash",
            "shuh-rat"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "دربار",
            "dar-baa-ri",
            "dar-baar"
          ],
          [
            "بابر",
            "baa-bur",
            "baa-bur"
          ],
          [
            "پادشاه",
            "paad-shaa-hi",
            "paad-shaah"
          ],
          [
            "مغولی",
            "mu-gho-lee-yi",
            "mu-gho-lee"
          ],
          [
            "هند",
            "hind",
            "hind"
          ],
          [
            "رسید.",
            "ra-seed",
            "ra-seed",
            "ra-see-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "sar-an-jaam dar a-waa-khi-ri umr ba shah-ri ha-raat baaz-gasht wa dar ha-maan-jaa wa-faat yaaft wa dar qis-ma-ti sha-maa-li ghar-bee-yi shah-ri ha-raat mad-foon shud.",
        "mean": "At the end of his life he returned to Herat, died there, and was buried in the northwestern part of the city.",
        "words": [
          [
            "سرانجام",
            "sar-an-jaam",
            "sar-an-jaam"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اواخر",
            "a-waa-khi-ri",
            "a-waa-khir"
          ],
          [
            "عمر",
            "umr",
            "umr"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "شهر",
            "shah-ri",
            "shahr"
          ],
          [
            "هرات",
            "ha-raat",
            "ha-raat"
          ],
          [
            "بازگشت",
            "baaz-gasht",
            "baaz-gasht",
            "baaz-gash-tan"
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
            "همان‌جا",
            "ha-maan-jaa",
            "ha-maan-jaa"
          ],
          [
            "وفات",
            "wa-faat",
            "wa-faat"
          ],
          [
            "یافت",
            "yaaft",
            "yaaft",
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
            "قسمت",
            "qis-ma-ti",
            "qis-mat"
          ],
          [
            "شمال",
            "sha-maa-li",
            "sha-maal"
          ],
          [
            "غربی",
            "ghar-bee-yi",
            "ghar-bee"
          ],
          [
            "شهر",
            "shah-ri",
            "shahr"
          ],
          [
            "هرات",
            "ha-raat",
            "ha-raat"
          ],
          [
            "مدفون",
            "mad-foon",
            "mad-foon"
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
        "say": "ma-zaa-ri oo baa san-gi qab-ri waa-zih dar ha-raat maw-jood ast.",
        "mean": "His grave, with a clearly marked gravestone, still exists in Herat.",
        "words": [
          [
            "مزار",
            "ma-zaa-ri",
            "ma-zaar"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "سنگ",
            "san-gi",
            "sang"
          ],
          [
            "قبر",
            "qab-ri",
            "qabr"
          ],
          [
            "واضح",
            "waa-zih",
            "waa-zih"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "هرات",
            "ha-raat",
            "ha-raat"
          ],
          [
            "موجود",
            "maw-jood",
            "maw-jood"
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
        "say": "beh-zaad dar taa-ree-khi hu-na-ri maa nu-khus-teen naq-qaa-shee ast ki aa-saa-rash raa im-zaa kar-da ast.",
        "mean": "In our art history, Behzad is the first painter to have signed his works.",
        "words": [
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
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
            "هنر",
            "hu-na-ri",
            "hu-nar"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "نقاشی",
            "naq-qaa-shee",
            "naq-qaa-shee"
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
            "آثارش",
            "aa-saa-rash",
            "aa-saa-rash",
            "aa-saar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "امضا",
            "im-zaa",
            "im-zaa"
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
        "say": "na-qaa-shee-haa-yi-yi oo tas-wee-ri sah-na-haa-yee az ki-taab-haa-yi bur-jis-ta-yi-yi a-da-bee ast ki dar aa-ghaaz, khat-taa-taa-ni bar-jas-ta aan raa mee-ni-wish-tand, taz-heeb-kaa-raan faa-si-la-yi-yi khat-haa raa baa tarh-haa-yi-yi goo-naa-goon pur may-kar-dand wa aan gaah us-taad beh-zaad dar bakhsh-haa-yee ki ba een man-zoor khaa-lee gu-zaash-ta bood ta-saa-wee-ree-yi mu-naa-sib naqsh may-kard.",
        "mean": "His paintings depict scenes from outstanding literary books: first skilled calligraphers wrote the text, illuminators filled the spaces between the lines with varied designs, and then Behzad painted suitable images in the places left empty for that purpose.",
        "words": [
          [
            "نقاشی‌های",
            "na-qaa-shee-haa-yi-yi",
            "na-qaa-shee-haa-yi"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "تصویر",
            "tas-wee-ri",
            "tas-weer"
          ],
          [
            "صحنه‌هایی",
            "sah-na-haa-yee",
            "sah-na-haa-yee",
            "sah-na"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کتاب‌های",
            "ki-taab-haa-yi",
            "ki-taab-haa"
          ],
          [
            "برجستهٔ",
            "bur-jis-ta-yi-yi",
            "bur-jis-ta-yi"
          ],
          [
            "ادبی",
            "a-da-bee",
            "a-da-bee"
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
            "آغاز،",
            "aa-ghaaz",
            "aa-ghaaz"
          ],
          [
            "خطاطان",
            "khat-taa-taa-ni",
            "khat-taa-taan",
            "khat-taat"
          ],
          [
            "برجسته",
            "bar-jas-ta",
            "bar-jas-ta"
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
            "می‌نوشتند،",
            "mee-ni-wish-tand",
            "mee-ni-wish-tand",
            "na-wish-tan"
          ],
          [
            "تذهیب‌کاران",
            "taz-heeb-kaa-raan",
            "taz-heeb-kaa-raan",
            "taz-heeb-kaar"
          ],
          [
            "فاصلهٔ",
            "faa-si-la-yi-yi",
            "faa-si-la-yi"
          ],
          [
            "خط‌ها",
            "khat-haa",
            "khat-haa",
            "khat"
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
            "طرح‌های",
            "tarh-haa-yi-yi",
            "tarh-haa-yi"
          ],
          [
            "گوناگون",
            "goo-naa-goon",
            "goo-naa-goon"
          ],
          [
            "پر",
            "pur",
            "pur"
          ],
          [
            "می‌کردند",
            "may-kar-dand",
            "may-kar-dand",
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
            "گاه",
            "gaah",
            "gaah"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بخش‌هایی",
            "bakhsh-haa-yee",
            "bakhsh-haa-yee",
            "bakhsh"
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
            "این",
            "een",
            "een"
          ],
          [
            "منظور",
            "man-zoor",
            "man-zoor"
          ],
          [
            "خالی",
            "khaa-lee",
            "khaa-lee"
          ],
          [
            "گذاشته",
            "gu-zaash-ta",
            "gu-zaash-ta",
            "gu-zaash-tan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "تصاویری",
            "ta-saa-wee-ree-yi",
            "ta-saa-wee-ree",
            "tas-weer"
          ],
          [
            "مناسب",
            "mu-naa-sib",
            "mu-naa-sib"
          ],
          [
            "نقش",
            "naqsh",
            "naqsh"
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
        "say": "oo dar za-mee-na-yi-yi ni-gaar-ga-ree daa-raa-yi sabk wa mak-ta-bi khaa-say ast ki dar sharq wa gharb aan raa ba naa-mi “mak-ta-bi beh-zaad” may-shi-naa-sand.",
        "mean": "In miniature painting he had a distinctive style and school known in East and West as the Behzad school.",
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
            "نگارگری",
            "ni-gaar-ga-ree",
            "ni-gaar-ga-ree"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "سبک",
            "sabk",
            "sabk"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "خاصی",
            "khaa-say",
            "khaa-say"
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
            "شرق",
            "sharq",
            "sharq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غرب",
            "gharb",
            "gharb"
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
            "نام",
            "naa-mi",
            "naam"
          ],
          [
            "«مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "بهزاد»",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "می‌شناسند.",
            "may-shi-naa-sand",
            "may-shi-naa-sand",
            "shi-naakh-tan"
          ]
        ]
      },
      {
        "say": "a-saa-si it-ti-laa-aa-tee ki az kaa-ri oo dar dast ast tas-weer-haa-yee ast ki baa im-zaa-yi-yi a-see-li oo dar nus-kha-yee az bos-taa-ni sa-dee naqsh shu-da wa ee-nak dar ki-taab-khaa-na-yi-yi mil-lee-yi qaa-hi-ra dar mesr maw-jood ast.",
        "mean": "The main information about his work comes from pictures bearing his authentic signature in a copy of Saadi's Bustan, now in Egypt's National Library in Cairo.",
        "words": [
          [
            "اساس",
            "a-saa-si",
            "a-saas"
          ],
          [
            "اطلاعاتی",
            "it-ti-laa-aa-tee",
            "it-ti-laa-aa-tee",
            "it-ti-laa-aat"
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
            "kaa-ri",
            "kaar"
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
            "دست",
            "dast",
            "dast"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "تصویرهایی",
            "tas-weer-haa-yee",
            "tas-weer-haa-yee",
            "tas-weer"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "امضای",
            "im-zaa-yi-yi",
            "im-zaa-yi",
            "im-zaa"
          ],
          [
            "اصیل",
            "a-see-li",
            "a-seel"
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
            "نسخه‌یی",
            "nus-kha-yee",
            "nus-kha-yee",
            "nus-kha"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "بوستان",
            "bos-taa-ni",
            "bos-taan"
          ],
          [
            "سعدی",
            "sa-dee",
            "sa-dee"
          ],
          [
            "نقش",
            "naqsh",
            "naqsh"
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
            "اینک",
            "ee-nak",
            "ee-nak"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کتابخانهٔ",
            "ki-taab-khaa-na-yi-yi",
            "ki-taab-khaa-na-yi",
            "ki-taab-khaa-na"
          ],
          [
            "ملی",
            "mil-lee-yi",
            "mil-lee"
          ],
          [
            "قاهره",
            "qaa-hi-ra",
            "qaa-hi-ra"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مصر",
            "mesr",
            "mesr"
          ],
          [
            "موجود",
            "maw-jood",
            "maw-jood"
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
        "say": "kaar-haa-yi dee-ga-ray ki ba beh-zaad man-soob ast im-zaa-yi-yi mut-ma-in-nee dee-da na-may-sha-wad ba ha-meen ji-hat, tan-haa sab-ki tas-weer-haa (tar-kee-bi bee-maa-nan-di naqsh-haa-yi-yi taz-yee-nee baa sah-na-haa-yi-yi waa-qi-ee) may-ta-waa-nad raah-ni-maa-yee ba-raa-yi baaz-shi-naa-see-yi kaar-haa-yi a-see-li oo ba shu-maar aa-yad.",
        "mean": "Other works attributed to Behzad bear no reliable signature, so only their pictorial style—the unmatched combination of decorative designs with realistic scenes—can guide the identification of his authentic work.",
        "words": [
          [
            "کارهای",
            "kaar-haa-yi",
            "kaar-haa"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "منسوب",
            "man-soob",
            "man-soob#attributed"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "امضای",
            "im-zaa-yi-yi",
            "im-zaa-yi",
            "im-zaa"
          ],
          [
            "مطمئنی",
            "mut-ma-in-nee",
            "mut-ma-in-nee",
            "mut-ma-in"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-dan"
          ],
          [
            "نمی‌شود",
            "na-may-sha-wad",
            "na-may-sha-wad",
            "shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "جهت،",
            "ji-hat",
            "ji-hat"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "سبک",
            "sab-ki",
            "sabk"
          ],
          [
            "تصویرها",
            "tas-weer-haa",
            "tas-weer-haa",
            "tas-weer"
          ],
          [
            "(ترکیب",
            "tar-kee-bi",
            "tar-keeb"
          ],
          [
            "بی‌مانند",
            "bee-maa-nan-di",
            "bee-maa-nand"
          ],
          [
            "نقش‌های",
            "naqsh-haa-yi-yi",
            "naqsh-haa-yi",
            "naqsh"
          ],
          [
            "تزیینی",
            "taz-yee-nee",
            "taz-yee-nee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "صحنه‌های",
            "sah-na-haa-yi-yi",
            "sah-na-haa-yi",
            "sah-na"
          ],
          [
            "واقعی)",
            "waa-qi-ee",
            "waa-qi-ee"
          ],
          [
            "می‌تواند",
            "may-ta-waa-nad",
            "may-ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "راهنمایی",
            "raah-ni-maa-yee",
            "raah-ni-maa-yee"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "بازشناسی",
            "baaz-shi-naa-see-yi",
            "baaz-shi-naa-see"
          ],
          [
            "کارهای",
            "kaar-haa-yi",
            "kaar-haa"
          ],
          [
            "اصیل",
            "a-see-li",
            "a-seel"
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
            "شمار",
            "shu-maar",
            "shu-maar"
          ],
          [
            "آید.",
            "aa-yad",
            "aa-yad",
            "aa-ma-dan"
          ]
        ]
      },
      {
        "say": "dar mi-yaa-ni tas-weer-haa-yi-yi bee-shu-maa-ree ki dar ki-taab-haa-yi ju-daa-gaa-na ba naa-mi beh-zaad maw-jood ast, ikh-ti-laa-fi a-qee-da mi-yaa-ni daa-nish-man-daan bi-si-yaar ast;",
        "mean": "Scholars disagree greatly about the countless pictures attributed to Behzad in separate books.",
        "words": [
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
            "تصویرهای",
            "tas-weer-haa-yi-yi",
            "tas-weer-haa-yi",
            "tas-weer"
          ],
          [
            "بی‌شماری",
            "bee-shu-maa-ree",
            "bee-shu-maa-ree",
            "bee-shu-maar"
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
            "کتاب‌های",
            "ki-taab-haa-yi",
            "ki-taab-haa"
          ],
          [
            "جداگانه",
            "ju-daa-gaa-na",
            "ju-daa-gaa-na"
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
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "موجود",
            "maw-jood",
            "maw-jood"
          ],
          [
            "است،",
            "ast",
            "ast"
          ],
          [
            "اختلاف",
            "ikh-ti-laa-fi",
            "ikh-ti-laaf"
          ],
          [
            "عقیده",
            "a-qee-da",
            "a-qee-da"
          ],
          [
            "میان",
            "mi-yaa-ni",
            "mi-yaan"
          ],
          [
            "دانشمندان",
            "daa-nish-man-daan",
            "daa-nish-man-daan"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "am-maa ba har haal bi-yaa-ree az een tas-weer-haa a-gar kaa-ri khu-di us-taad na-baa-shand waa-bas-ta ba mak-ta-bi oo has-tand.",
        "mean": "Nevertheless, even if many of these images are not the master's own work, they belong to his school.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "حال",
            "haal",
            "haal"
          ],
          [
            "بسیاری",
            "bi-yaa-ree",
            "bi-yaa-ree"
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
            "تصویرها",
            "tas-weer-haa",
            "tas-weer-haa",
            "tas-weer"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "کار",
            "kaa-ri",
            "kaar"
          ],
          [
            "خود",
            "khu-di",
            "khud"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
          ],
          [
            "نباشند",
            "na-baa-shand",
            "na-baa-shand",
            "bu-dan"
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
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "او",
            "oo",
            "oo"
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
        "say": "bar-khay az ki-taab-haa-yee ki baa tas-weer-haa-yi-yi man-soob ba beh-zaad mu-zay-ya-nand az een qa-raar-and:",
        "mean": "Some books decorated with pictures attributed to Behzad are as follows:",
        "words": [
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
            "کتاب‌هایی",
            "ki-taab-haa-yee",
            "ki-taab-haa-yee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "تصویرهای",
            "tas-weer-haa-yi-yi",
            "tas-weer-haa-yi",
            "tas-weer"
          ],
          [
            "منسوب",
            "man-soob",
            "man-soob#attributed"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "مزین‌اند",
            "mu-zay-ya-nand",
            "mu-zay-ya-nand",
            "mu-zay-yan"
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
            "قرارند:",
            "qa-raar-and",
            "qa-raar-and",
            "qa-raar"
          ]
        ]
      }
    ],
    [
      {
        "say": "kham-sa-yi a-meer a-lee-sheer na-waa-yee",
        "mean": "The Khamsa of Amir Ali-Shir Nava'i",
        "words": [
          [
            "خمسهٔ",
            "kham-sa-yi",
            "kham-sa"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "علی‌شیر",
            "a-lee-sheer",
            "a-lee-sheer#name"
          ],
          [
            "نوایی",
            "na-waa-yee",
            "na-waa-yee"
          ]
        ]
      },
      {
        "say": "gu-lis-taa-ni sa-dee",
        "mean": "Saadi's Gulistan",
        "words": [
          [
            "گلستان",
            "gu-lis-taa-ni",
            "gu-lis-taan"
          ],
          [
            "سعدی",
            "sa-dee",
            "sa-dee"
          ]
        ]
      },
      {
        "say": "kham-sa-yi ni-zaa-mee",
        "mean": "Nizami's Khamsa",
        "words": [
          [
            "خمسهٔ",
            "kham-sa-yi",
            "kham-sa"
          ],
          [
            "نظامی",
            "ni-zaa-mee",
            "ni-zaa-mee"
          ]
        ]
      }
    ],
    [
      {
        "say": "naq-qaa-shaa-ni ha-raa-tee sab-ki beh-zaad raa ba bu-khaa-raa bur-dand wa aan raa dar dar-baa-ri khaa-ni-daa-ni shay-baa-nee pa-ra-wa-rish daa-dand.",
        "mean": "Herati painters took Behzad's style to Bukhara and developed it at the court of the Shaybani family.",
        "words": [
          [
            "نقاشان",
            "naq-qaa-shaa-ni",
            "naq-qaa-shaan",
            "naq-qaash"
          ],
          [
            "هراتی",
            "ha-raa-tee",
            "ha-raa-tee"
          ],
          [
            "سبک",
            "sab-ki",
            "sabk"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
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
            "بخارا",
            "bu-khaa-raa",
            "bu-khaa-raa"
          ],
          [
            "بردند",
            "bur-dand",
            "bur-dand",
            "bur-dan"
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
            "خاندان",
            "khaa-ni-daa-ni",
            "khaa-ni-daan"
          ],
          [
            "شیبانی",
            "shay-baa-nee",
            "shay-baa-nee"
          ],
          [
            "پرورش",
            "pa-ra-wa-rish",
            "pa-ra-wa-rish"
          ],
          [
            "دادند.",
            "daa-dand",
            "daa-dand",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "ki-taa-bay ba naa-mi “mihr wa mush-ta-ree” dar bu-khaa-raa is-tin-saakh shu-da na-mo-daa-ri aan ast ki sab-ki beh-zaad dar bu-khaa-raa hifz shu-da ast.",
        "mean": "A book called Mehr and Mushtari copied in Bukhara shows that Behzad's style was preserved there.",
        "words": [
          [
            "کتابی",
            "ki-taa-bay",
            "ki-taa-bay"
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
            "«مهر",
            "mihr",
            "mihr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مشتری»",
            "mush-ta-ree",
            "mush-ta-ree"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بخارا",
            "bu-khaa-raa",
            "bu-khaa-raa"
          ],
          [
            "استنساخ",
            "is-tin-saakh",
            "is-tin-saakh"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "نمودار",
            "na-mo-daa-ri",
            "na-mo-daar"
          ],
          [
            "آن",
            "aan",
            "aan"
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
            "سبک",
            "sab-ki",
            "sabk"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بخارا",
            "bu-khaa-raa",
            "bu-khaa-raa"
          ],
          [
            "حفظ",
            "hifz",
            "hifz"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "mu-haa-ji-ra-ti bar-khay az naq-qaa-shaan sa-ba-bi i-shaa-a-yi-yi sab-ki beh-zaad dar hin-dus-taan neez gar-deed.",
        "mean": "The migration of some painters also spread Behzad's style in India.",
        "words": [
          [
            "مهاجرت",
            "mu-haa-ji-ra-ti",
            "mu-haa-ji-rat"
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
            "نقاشان",
            "naq-qaa-shaan",
            "naq-qaa-shaan",
            "naq-qaash"
          ],
          [
            "سبب",
            "sa-ba-bi",
            "sa-bab"
          ],
          [
            "اشاعهٔ",
            "i-shaa-a-yi-yi",
            "i-shaa-a-yi",
            "i-shaa-a"
          ],
          [
            "سبک",
            "sab-ki",
            "sabk"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "هندوستان",
            "hin-dus-taan",
            "hin-dus-taan"
          ],
          [
            "نیز",
            "neez",
            "neez"
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
        "say": "sab-ki hin-ree-yi beh-zaad",
        "mean": "Behzad's artistic style",
        "words": [
          [
            "سبک",
            "sab-ki",
            "sabk"
          ],
          [
            "هنری",
            "hin-ree-yi",
            "hin-ree"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ]
        ]
      }
    ],
    [
      {
        "say": "hu-na-ri way-zha-yi beh-zaad raa dar shay-wa-yi ba kaar gi-rif-ta-ni rang-haa-yi-yi di-rakh-shaan may-daa-nand.",
        "mean": "Behzad's special art is said to lie in his way of using brilliant colors.",
        "words": [
          [
            "هنر",
            "hu-na-ri",
            "hu-nar"
          ],
          [
            "ویژهٔ",
            "way-zha-yi",
            "way-zha"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
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
            "شیوهٔ",
            "shay-wa-yi",
            "shay-wa"
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
            "گرفتن",
            "gi-rif-ta-ni",
            "gi-rif-tan"
          ],
          [
            "رنگ‌های",
            "rang-haa-yi-yi",
            "rang-haa-yi",
            "rang"
          ],
          [
            "درخشان",
            "di-rakh-shaan",
            "di-rakh-shaan"
          ],
          [
            "می‌دانند.",
            "may-daa-nand",
            "may-daa-nand",
            "daa-nis-tan"
          ]
        ]
      },
      {
        "say": "way baysh-tar ba rang-haa-yi-yi sard dar maa-ya-haa-yi-yi sabz wa aa-bay ta-maa-yul daash-ta;",
        "mean": "He tended mostly toward cool shades of green and blue.",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "رنگ‌های",
            "rang-haa-yi-yi",
            "rang-haa-yi",
            "rang"
          ],
          [
            "سرد",
            "sard",
            "sard"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مایه‌های",
            "maa-ya-haa-yi-yi",
            "maa-ya-haa-yi",
            "maa-ya"
          ],
          [
            "سبز",
            "sabz",
            "sabz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آبی",
            "aa-bay",
            "aa-bay"
          ],
          [
            "تمایل",
            "ta-maa-yul",
            "ta-maa-yul"
          ],
          [
            "داشته؛",
            "daash-ta",
            "daash-ta",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "am-maa baa ba kaar bur-da-ni rang-haa-yi-yi garm, choon naa-rin-jee-yi tund, dar aa-saa-ri khud ta-aa-du-lee-yi mat-boo ee-jaad kar-da ast.",
        "mean": "Yet by using warm colors such as vivid orange, he created a pleasing balance in his works.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "با",
            "baa",
            "baa"
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
            "رنگ‌های",
            "rang-haa-yi-yi",
            "rang-haa-yi",
            "rang"
          ],
          [
            "گرم،",
            "garm",
            "garm"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "نارنجی",
            "naa-rin-jee-yi",
            "naa-rin-jee"
          ],
          [
            "تند،",
            "tund",
            "tund"
          ],
          [
            "در",
            "dar",
            "dar"
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
            "تعادلی",
            "ta-aa-du-lee-yi",
            "ta-aa-du-lee",
            "ta-aa-dul"
          ],
          [
            "مطبوع",
            "mat-boo",
            "mat-boo"
          ],
          [
            "ایجاد",
            "ee-jaad",
            "ee-jaad"
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
        "say": "ta-naa-su-bi yak ya-ki aj-zaa, sah-na yaa maj-moo-a-yi tas-weer neez dar aa-saa-ri beh-zaad shi-gift-an-geez ast.",
        "mean": "The proportion of every element, scene, or complete composition is also astonishing in Behzad's work.",
        "words": [
          [
            "تناسب",
            "ta-naa-su-bi",
            "ta-naa-sub"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "یک",
            "ya-ki",
            "yak"
          ],
          [
            "اجزا،",
            "aj-zaa",
            "aj-zaa"
          ],
          [
            "صحنه",
            "sah-na",
            "sah-na"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "مجموعه",
            "maj-moo-a-yi",
            "maj-moo-a"
          ],
          [
            "تصویر",
            "tas-weer",
            "tas-weer"
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
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "شگفت‌انگیز",
            "shi-gift-an-geez",
            "shi-gift-an-geez"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "shaa-kha-haa-yi-yi pur shu-goo-fa, naqsh-haa-yi-yi kaa-shee-haa wa farsh-haa-yi-yi zeer-baaf-ti pur-zee-war, ha-ma na-mo-daa-ri ka-maa-li hu-nar-man-dee, zawq wa za-raa-fa-ti bee-maa-nan-di kaa-ri oost.",
        "mean": "Flower-laden branches, tile patterns, and richly ornamented close-woven carpets all show his artistic perfection, taste, and unmatched delicacy.",
        "words": [
          [
            "شاخه‌های",
            "shaa-kha-haa-yi-yi",
            "shaa-kha-haa-yi",
            "shaa-kha"
          ],
          [
            "پر",
            "pur",
            "pur"
          ],
          [
            "شگوفه،",
            "shu-goo-fa",
            "shu-goo-fa"
          ],
          [
            "نقش‌های",
            "naqsh-haa-yi-yi",
            "naqsh-haa-yi",
            "naqsh"
          ],
          [
            "کاشی‌ها",
            "kaa-shee-haa",
            "kaa-shee-haa",
            "kaa-shee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرش‌های",
            "farsh-haa-yi-yi",
            "farsh-haa-yi",
            "farsh"
          ],
          [
            "زیربافت",
            "zeer-baaf-ti",
            "zeer-baaft"
          ],
          [
            "پرزیور،",
            "pur-zee-war",
            "pur-zee-war"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "نمودار",
            "na-mo-daa-ri",
            "na-mo-daar"
          ],
          [
            "کمال",
            "ka-maa-li",
            "ka-maal"
          ],
          [
            "هنرمندی،",
            "hu-nar-man-dee",
            "hu-nar-man-dee"
          ],
          [
            "ذوق",
            "zawq",
            "zawq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ظرافت",
            "za-raa-fa-ti",
            "za-raa-fat"
          ],
          [
            "بی‌مانند",
            "bee-maa-nan-di",
            "bee-maa-nand"
          ],
          [
            "کار",
            "kaa-ri",
            "kaar"
          ],
          [
            "اوست.",
            "oost",
            "oost",
            "oo"
          ]
        ]
      },
      {
        "say": "waa-qi-bee-nee dar hu-na-ri beh-zaad baysh-tar dar tas-weer-haa-yee ba chashm mee-kho-rad ki tan-haa jan-ba-yi-yi dar-baa-ree na-daa-rad wa az zin-da-gee-yi mar-du-mi aa-dee sar-chash-ma may-gee-rad.",
        "mean": "Behzad's realism is most evident in pictures that are not merely courtly and instead spring from the lives of ordinary people.",
        "words": [
          [
            "واقع‌بینی",
            "waa-qi-bee-nee",
            "waa-qi-bee-nee"
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
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "تصویرهایی",
            "tas-weer-haa-yee",
            "tas-weer-haa-yee",
            "tas-weer"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "چشم",
            "chashm",
            "chashm"
          ],
          [
            "می‌خورد",
            "mee-kho-rad",
            "mee-kho-rad",
            "khor-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "جنبهٔ",
            "jan-ba-yi-yi",
            "jan-ba-yi",
            "jan-ba"
          ],
          [
            "درباری",
            "dar-baa-ree",
            "dar-baa-ree"
          ],
          [
            "ندارد",
            "na-daa-rad",
            "na-daa-rad",
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
            "زنده‌گی",
            "zin-da-gee-yi",
            "zin-da-gee"
          ],
          [
            "مردم",
            "mar-du-mi",
            "mar-dum"
          ],
          [
            "عادی",
            "aa-dee",
            "aa-dee"
          ],
          [
            "سرچشمه",
            "sar-chash-ma",
            "sar-chash-ma"
          ],
          [
            "می‌گیرد.",
            "may-gee-rad",
            "may-gee-rad",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "aan chi beh-zaad raa az dee-gar naq-qaa-shaa-ni ham za-maa-nash bar-jas-ta may-ku-nad haa-la-ti chih-ra-haa dar kaar-haa-yi oost.",
        "mean": "What distinguishes Behzad from other painters of his time is the expression of the faces in his work.",
        "words": [
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
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
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "نقاشان",
            "naq-qaa-shaa-ni",
            "naq-qaa-shaan",
            "naq-qaash"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "زمانش",
            "za-maa-nash",
            "za-maa-nash",
            "za-maan"
          ],
          [
            "برجسته",
            "bar-jas-ta",
            "bar-jas-ta"
          ],
          [
            "می‌کند",
            "may-ku-nad",
            "may-ku-nad",
            "kar-dan"
          ],
          [
            "حالت",
            "haa-la-ti",
            "haa-lat"
          ],
          [
            "چهره‌ها",
            "chih-ra-haa",
            "chih-ra-haa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کارهای",
            "kaar-haa-yi",
            "kaar-haa"
          ],
          [
            "اوست.",
            "oost",
            "oost",
            "oo"
          ]
        ]
      },
      {
        "say": "har chi-hra na-mo-daa-ri shakh-see-ya-tee-yi way-zha wa haa-la-tee-yi khaas ast ki az zin-da-gee wa ha-ra-kat sar-shaar ast wa baa chih-ra-haa-yi yak-na-waakh-ti na-qaa-shee-haa-yi-yi paysh az oo ta-faa-wut daa-rad.",
        "mean": "Each face reveals a distinct personality and condition, full of life and movement and different from the uniform faces in earlier paintings.",
        "words": [
          [
            "هر",
            "har",
            "har"
          ],
          [
            "چهره",
            "chi-hra",
            "chi-hra"
          ],
          [
            "نمودار",
            "na-mo-daa-ri",
            "na-mo-daar"
          ],
          [
            "شخصیتی",
            "shakh-see-ya-tee-yi",
            "shakh-see-ya-tee",
            "shakh-see-yat"
          ],
          [
            "ویژه",
            "way-zha",
            "way-zha"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حالتی",
            "haa-la-tee-yi",
            "haa-la-tee",
            "haa-lat"
          ],
          [
            "خاص",
            "khaas",
            "khaas"
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
            "زنده‌گی",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حرکت",
            "ha-ra-kat",
            "ha-ra-kat"
          ],
          [
            "سرشار",
            "sar-shaar",
            "sar-shaar"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "چهره‌های",
            "chih-ra-haa-yi",
            "chih-ra-haa"
          ],
          [
            "یک‌نواخت",
            "yak-na-waakh-ti",
            "yak-na-waakht"
          ],
          [
            "نقاشی‌های",
            "na-qaa-shee-haa-yi-yi",
            "na-qaa-shee-haa-yi"
          ],
          [
            "پیش",
            "paysh",
            "paysh"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "تفاوت",
            "ta-faa-wut",
            "ta-faa-wut"
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
        "say": "way-zha-gee-haa-yi-yi mak-ta-bi beh-zaad",
        "mean": "Features of the Behzad school",
        "words": [
          [
            "ویژه‌گی‌های",
            "way-zha-gee-haa-yi-yi",
            "way-zha-gee-haa-yi"
          ],
          [
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
          ]
        ]
      }
    ],
    [
      {
        "say": "az way-zha-gee-haa-yi-yi mak-ta-bi us-taa-di beh-zaad may-ta-waan ba ma-waa-ri-di zayr i-shaa-ra kard:",
        "mean": "The following are among the features of Master Behzad's school:",
        "words": [
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
            "مکتب",
            "mak-ta-bi",
            "mak-tab"
          ],
          [
            "استاد",
            "us-taa-di",
            "us-taad"
          ],
          [
            "بهزاد",
            "beh-zaad",
            "beh-zaad"
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
            "موارد",
            "ma-waa-ri-di",
            "ma-waa-rid"
          ],
          [
            "زیر",
            "zayr",
            "zayr"
          ],
          [
            "اشاره",
            "i-shaa-ra",
            "i-shaa-ra"
          ],
          [
            "کرد:",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "yak. di-rus-tee wa diq-qa-ti kaa-mil dar tas-weer.",
        "mean": "1. Complete correctness and precision in the picture.",
        "words": [
          [
            "۱.",
            "yak",
            "yak#digit"
          ],
          [
            "درستی",
            "di-rus-tee",
            "di-rus-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دقت",
            "diq-qa-ti",
            "diq-qat"
          ],
          [
            "کامل",
            "kaa-mil",
            "kaa-mil"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "تصویر.",
            "tas-weer",
            "tas-weer"
          ]
        ]
      },
      {
        "say": "du. ni-shaan daa-da-ni soo-ra-ti ash-khaas ba nah-wee-yi shi-garf baa is-ti-faa-da az tar-kee-bi an-waa-yi rang-haa.",
        "mean": "2. Depicting people's faces in a remarkable way through combinations of many colors.",
        "words": [
          [
            "۲.",
            "du",
            "du#digit"
          ],
          [
            "نشان",
            "ni-shaan",
            "ni-shaan"
          ],
          [
            "دادن",
            "daa-da-ni",
            "daa-dan"
          ],
          [
            "صورت",
            "soo-ra-ti",
            "soo-rat"
          ],
          [
            "اشخاص",
            "ash-khaas",
            "ash-khaas"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "نحوی",
            "nah-wee-yi",
            "nah-wee"
          ],
          [
            "شگرف",
            "shi-garf",
            "shi-garf"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
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
            "ترکیب",
            "tar-kee-bi",
            "tar-keeb"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "رنگ‌ها.",
            "rang-haa",
            "rang-haa",
            "rang"
          ]
        ]
      },
      {
        "say": "sih. za-raa-fat dar tar-see-mi di-rakh-taan, gul-haa, door-na-maa-haa, na-maa-yi-shi par-ta-wi khur-sheed wa a-bar.",
        "mean": "3. Delicacy in drawing trees, flowers, distant views, sunlight, and clouds.",
        "words": [
          [
            "۳.",
            "sih",
            "sih#digit"
          ],
          [
            "ظرافت",
            "za-raa-fat",
            "za-raa-fat"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ترسیم",
            "tar-see-mi",
            "tar-seem"
          ],
          [
            "درختان،",
            "di-rakh-taan",
            "di-rakh-taan",
            "di-rakht"
          ],
          [
            "گل‌ها،",
            "gul-haa",
            "gul-haa",
            "gul"
          ],
          [
            "دورنماها،",
            "door-na-maa-haa",
            "door-na-maa-haa",
            "door-na-maa"
          ],
          [
            "نمایش",
            "na-maa-yi-shi",
            "na-maa-yish"
          ],
          [
            "پرتو",
            "par-ta-wi",
            "par-taw"
          ],
          [
            "خورشید",
            "khur-sheed",
            "khur-sheed"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ابر.",
            "a-bar",
            "a-bar"
          ]
        ]
      },
      {
        "say": "chaar. ta-na-wo-yi rang-haa baa ee-jaa-di saa-zi-gaa-ree dar aan-haa.",
        "mean": "4. Variety of colors while creating harmony among them.",
        "words": [
          [
            "۴.",
            "chaar",
            "chaar"
          ],
          [
            "تنوع",
            "ta-na-wo-yi",
            "ta-na-wo"
          ],
          [
            "رنگ‌ها",
            "rang-haa",
            "rang-haa",
            "rang"
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
            "سازگاری",
            "saa-zi-gaa-ree",
            "saa-zi-gaa-ree"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آن‌ها.",
            "aan-haa",
            "aan-haa"
          ]
        ]
      },
      {
        "say": "panj. roo-hee-ya-yi ni-huf-ta-yee-yi hu-bi i-laa-hee wa roo-haa-nee-ya-ti khaas.",
        "mean": "5. A hidden spirit of divine love and distinctive spirituality.",
        "words": [
          [
            "۵.",
            "panj",
            "panj#digit"
          ],
          [
            "روحیه",
            "roo-hee-ya-yi",
            "roo-hee-ya"
          ],
          [
            "نهفته‌یی",
            "ni-huf-ta-yee-yi",
            "ni-huf-ta-yee",
            "ni-huf-ta"
          ],
          [
            "حبّ",
            "hu-bi",
            "hub"
          ],
          [
            "الهی",
            "i-laa-hee",
            "i-laa-hee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روحانیت",
            "roo-haa-nee-ya-ti",
            "roo-haa-nee-yat"
          ],
          [
            "خاص.",
            "khaas",
            "khaas"
          ]
        ]
      },
      {
        "say": "shash. chi-ra-gus-haa-yee wa soo-rat-ga-ree-yi khu-raa-saa-nee ba-jaa-yi mu-gho-lee ki mak-ta-bi ha-raat raa az ta-see-ri hu-na-ri chee-nee aa-zaad kard.",
        "mean": "6. Khorasani portraiture in place of the Mongol style, freeing the Herat school from Chinese artistic influence.",
        "words": [
          [
            "۶.",
            "shash",
            "shash#digit"
          ],
          [
            "چهره‌گشایی",
            "chi-ra-gus-haa-yee",
            "chi-ra-gus-haa-yee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صورتگری",
            "soo-rat-ga-ree-yi",
            "soo-rat-ga-ree"
          ],
          [
            "خراسانی",
            "khu-raa-saa-nee",
            "khu-raa-saa-nee"
          ],
          [
            "به‌جای",
            "ba-jaa-yi",
            "ba-jaa"
          ],
          [
            "مغولی",
            "mu-gho-lee",
            "mu-gho-lee"
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
            "هرات",
            "ha-raat",
            "ha-raat"
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
            "تأثیر",
            "ta-see-ri",
            "ta-seer"
          ],
          [
            "هنر",
            "hu-na-ri",
            "hu-nar"
          ],
          [
            "چینی",
            "chee-nee",
            "chee-nee"
          ],
          [
            "آزاد",
            "aa-zaad",
            "aa-zaad"
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
        "say": "haft. ree-za-kaa-ree wa diq-qat-ni-gaa-ree dar tar-see-mi bi-naa-haa, dee-waa-ra-haa, farsh-haa, gul-haa, taz-yee-naa-ti ma-jaa-li-si mu-saw-war, ni-gaa-ri-shi aa-raa-yi-shi an-waa-yi li-baas-haa wa yaa ree-za-kaa-ree-yi khaa-si ran-geen.",
        "mean": "7. Fine detail and precision in drawing buildings, walls, carpets, flowers, illustrated gatherings, clothing decoration, and distinctive colorful details.",
        "words": [
          [
            "۷.",
            "haft",
            "haft#digit"
          ],
          [
            "ریزه‌کاری",
            "ree-za-kaa-ree",
            "ree-za-kaa-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دقت‌نگاری",
            "diq-qat-ni-gaa-ree",
            "diq-qat-ni-gaa-ree"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ترسیم",
            "tar-see-mi",
            "tar-seem"
          ],
          [
            "بناها،",
            "bi-naa-haa",
            "bi-naa-haa",
            "bi-naa"
          ],
          [
            "دیواره‌ها،",
            "dee-waa-ra-haa",
            "dee-waa-ra-haa",
            "dee-waa-ra"
          ],
          [
            "فرش‌ها،",
            "farsh-haa",
            "farsh-haa",
            "farsh"
          ],
          [
            "گل‌ها،",
            "gul-haa",
            "gul-haa",
            "gul"
          ],
          [
            "تزیینات",
            "taz-yee-naa-ti",
            "taz-yee-naat"
          ],
          [
            "مجالس",
            "ma-jaa-li-si",
            "ma-jaa-lis",
            "maj-lis"
          ],
          [
            "مصور،",
            "mu-saw-war",
            "mu-saw-war"
          ],
          [
            "نگارش",
            "ni-gaa-ri-shi",
            "ni-gaa-rish"
          ],
          [
            "آرایش",
            "aa-raa-yi-shi",
            "aa-raa-yish"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "لباس‌ها",
            "li-baas-haa",
            "li-baas-haa",
            "li-baas"
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
            "ریزه‌کاری",
            "ree-za-kaa-ree-yi",
            "ree-za-kaa-ree"
          ],
          [
            "خاص",
            "khaa-si",
            "khaas"
          ],
          [
            "رنگین.",
            "ran-geen",
            "ran-geen"
          ]
        ]
      }
    ]
  ]
});
