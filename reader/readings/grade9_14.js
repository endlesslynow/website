/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 14, book pages 86-89, PDF pages 93-96 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «باشدکه» is written «باشد که»; «کار برد آن» is written «کاربرد آن»; «درکتاب‌هایی» is written «در کتاب‌هایی»; «تذکر‌هٔالاولیا» is written «تذکرهٔالاولیا»; «نثرمرسل» is written «نثر مرسل»; «نثرمسجع» is written «نثر مسجع»; «ابومنصورالمعمری» is written «ابومنصور المعمری»; «فرزانه گان...و» is written «فرزانه‌گان... و»; «فرزانه گان» is written «فرزانه‌گان»; «شهریارکه» is written «شهریار که»; «آخرملوک» is written «آخر ملوک»; «وخواستاری» is written «و خواستاری»; «عبداالله» is written «عبدالله»; «کلیله ودمنهٔ» is written «کلیله و دمنهٔ»; «ع‌شق» is written «عشق»; «از«» is written «از «»; «درپایان» is written «در پایان»; «کارگرفته» is written «کار گرفته»; «روز گارگذشته» is written «روزگار گذشته»; «رضی‌االله» is written «رضی‌الله»; «االله» is written «الله»; «۳ -» is written «۳-»; «باهم» is written «با هم»; «تاریخ و صاف» is written «تاریخ وصاف»; «نثرفنی» is written «نثر فنی»; «برعداوت» is written «بر عداوت»; «برراستی» is written «بر راستی»; «نثرجدید» is written «نثر جدید»; «نثرکه» is written «نثر که»; «باد ومه» is written «باد و مه»; «مهاجرکابلی» is written «مهاجر کابلی»; «چون«دوالیا»» is written «چون «دوالیا»»; «نثرگفتاری» is written «نثر گفتاری»; «نثرشکسته» is written «نثر شکسته»; «معاصرما» is written «معاصر ما»; «درآثار» is written «در آثار»; «کلمه ها» is written «کلمه‌ها»; «عبارت های» is written «عبارت‌های»; «بیاورد...و» is written «بیاورد... و»; «بود...و» is written «بود... و»; «کارمی برد» is written «کار می‌برد»; «شانه ام» is written «شانه‌ام»; «دانه ام» is written «دانه‌ام».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-14',
  group: 'Dari · grade 9',
  label: 'Lesson 14',
  name: "an-waa-yi nas-ri da-ree",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_14.jpg',
    alt: "Books, pens, a ruler and a cup of tea beside handwritten Persian pages."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_14.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "an-waa":                  { fa: "انواع", mean: "kinds" },
    "nasr":                    { fa: "نثر", mean: "prose" },
    "da-ree":                  { fa: "دری", mean: "Dari, the Persian of Afghanistan" },
    "dar":                     { fa: "در", mean: "in" },
    "lu-ghat":                 { fa: "لغت", mean: "a word; the dictionary" },
    "ba":                      { fa: "به", mean: "to" },
    "ba ma-naa-yi":            { fa: "به معنای", mean: "meaning" },
    "ma-naa":                  { fa: "معنا", mean: "meaning" },
    "pa-raa-gan-dan":          { fa: "پراگندن", mean: "to scatter, spread" },
    "wa":                      { fa: "و", mean: "and" },
    "af-shaan-dan":            { fa: "افشاندن", mean: "to scatter, spread" },
    "ast":                     { fa: "است", mean: "is" },
    "is-ti-laah":              { fa: "اصطلاح", mean: "a term" },
    "a-dab":                   { fa: "ادب", mean: "literature, learning" },
    "su-kha-nee":              { fa: "سخنی", mean: "speech, something said" },
    "guf-ta":                  { fa: "گفته", mean: "said" },
    "guf-tan":                 { fa: "گفتن", mean: "to say, to tell" },
    "may-sha-wad":             { fa: "می‌شود", mean: "becomes" },
    "shu-dan":                 { fa: "شدن", mean: "to become" },
    "ki":                      { fa: "که", mean: "that, which, who" },
    "wazn":                    { fa: "وزن", mean: "meter; weight" },
    "qaa-fi-ya":               { fa: "قافیه", mean: "rhyme" },
    "na-daash-ta":             { fa: "نداشته", mean: "not had" },
    "daash-tan":               { fa: "داشتن", mean: "to have" },
    "baa-shad":                { fa: "باشد", mean: "be, should be" },
    "bu-dan":                  { fa: "بودن", mean: "to be" },
    "na-wee-san-da":           { fa: "نویسنده", mean: "writer" },
    "ba wa-see-la-yi":         { fa: "به وسیلهٔ", mean: "by means of" },
    "wa-see-la-yi":            { fa: "وسیلهٔ", mean: "means, instrument" },
    "aan":                     { fa: "آن", mean: "that" },
    "pa-yaam-haa-yi":          { fa: "پیام‌های", mean: "messages" },
    "zih-nee":                 { fa: "ذهنی", mean: "mental, of the mind" },
    "khud":                    { fa: "خود", mean: "own; self" },
    "raa":                     { fa: "را", mean: "marks the object of the verb" },
    "khaa-nan-da":             { fa: "خواننده", mean: "reader" },
    "in-ti-qaal":              { fa: "انتقال", mean: "moving, passing on" },
    "di-had":                  { fa: "دهد", mean: "give" },
    "daa-dan":                 { fa: "دادن", mean: "to give" },
    "choon":                   { fa: "چون", mean: "like, as; when; because" },
    "az":                      { fa: "از", mean: "from, of" },
    "qayd":                    { fa: "قید", mean: "constraint, bond" },
    "ta-khay-yu-laat":         { fa: "تخیلات", mean: "imaginings" },
    "shaa-i-raa-na":           { fa: "شاعرانه", mean: "poetic" },
    "khaa-lee":                { fa: "خالی", mean: "empty" },
    "ha-meen":                 { fa: "همین", mean: "this very, this same" },
    "sa-bab":                  { fa: "سبب", mean: "cause, reason" },
    "kaar-burd":               { fa: "کاربرد", mean: "use, application" },
    "ba-raa-yi":               { fa: "برای", mean: "for" },
    "ba-yaan":                 { fa: "بیان", mean: "expression" },
    "har-goo-na":              { fa: "هرگونه", mean: "every kind of" },
    "fik-ree":                 { fa: "فکری", mean: "thought, intellectual" },
    "mu-naa-sib-tar":          { fa: "مناسب‌تر", mean: "more suitable" },
    "su-khan":                 { fa: "سخن", mean: "speech, words" },
    "man-zoom":                { fa: "منظوم", mean: "in verse, versified" },
    "shaa-yad":                { fa: "شاید", mean: "perhaps" },
    "da-leel":                 { fa: "دلیل", mean: "reason, proof" },
    "daa-nish-haa-yi":         { fa: "دانش‌های", mean: "fields of knowledge" },
    "ba-sha-ree":              { fa: "بشری", mean: "human" },
    "an-day-sha-haa":          { fa: "اندیشه‌ها", mean: "thoughts" },
    "fal-sa-fee":              { fa: "فلسفی", mean: "philosophical" },
    "dee-nee":                 { fa: "دینی", mean: "religious" },
    "si-yaa-see":              { fa: "سیاسی", mean: "political" },
    "ij-ti-maa-ee":            { fa: "اجتماعی", mean: "social" },
    "tar-bi-ya-tee":           { fa: "تربیتی", mean: "of education" },
    "qaa-lib":                 { fa: "قالب", mean: "form, framework" },
    "na-wish-ta":              { fa: "نوشته", mean: "written" },
    "na-wish-tan":             { fa: "نوشتن", mean: "to write" },
    "shu-da":                  { fa: "شده", mean: "become; been" },
    "baa":                     { fa: "با", mean: "with" },
    "ta-waj-juh":              { fa: "توجه", mean: "attention" },
    "tarz":                    { fa: "طرز", mean: "style, manner" },
    "ka-li-maat":              { fa: "کلمات", mean: "words" },
    "she-wa-haa-yi":           { fa: "شیوه‌های", mean: "ways, methods" },
    "ba-yaa-nee":              { fa: "بیانی", mean: "expressive, of expression" },
    "na-wee-san-da-gaan":      { fa: "نویسنده‌گان", mean: "writers" },
    "ma-taa-lib":              { fa: "مطالب", mean: "subjects, material" },
    "daa-rand":                { fa: "دارند", mean: "have" },
    "daa-nish-man-daan":       { fa: "دانشمندان", mean: "scholars, scientists" },
    "faa-ri-see":              { fa: "فارسی", mean: "Persian" },
    "zayr":                    { fa: "زیر", mean: "under" },
    "taq-seem":                { fa: "تقسیم", mean: "division, dividing" },
    "kar-da":                  { fa: "کرده", mean: "done" },
    "kar-dan":                 { fa: "کردن", mean: "to do, to make" },
    "and":                     { fa: "اند", mean: "are; after a word like shu-da, have" },
    "yak#digit":               { fa: "۱", say: "yak", mean: "one" },
    "mur-sal":                 { fa: "مرسل", mean: "plain, unadorned" },
    "yaa":                     { fa: "یا", mean: "or" },
    "saa-da":                  { fa: "ساده", mean: "simple, plain" },
    "nas-ree":                 { fa: "نثری", mean: "prose, a kind of prose" },
    "ro-shan":                 { fa: "روشن", mean: "bright, light" },
    "jum-laat":                { fa: "جملات", mean: "sentences" },
    "ko-taah":                 { fa: "کوتاه", mean: "short" },
    "waa-zha-haa-yi":          { fa: "واژه‌های", mean: "words" },
    "dush-waar":               { fa: "دشوار", mean: "difficult" },
    "a-ra-bee":                { fa: "عربی", mean: "Arab, Arabic" },
    "sa-naa-yi":               { fa: "صنایع", mean: "devices, arts" },
    "laf-zee":                 { fa: "لفظی", mean: "verbal, of words" },
    "ma-na-wee":               { fa: "معنوی", mean: "semantic, spiritual" },
    "saj":                     { fa: "سجع", mean: "rhyme in prose" },
    "kaar":                    { fa: "کار", mean: "work, a job" },
    "bur-da":                  { fa: "برده", mean: "taken, used" },
    "bur-dan":                 { fa: "بردن", mean: "to take away, to carry" },
    "na-may-sha-wad":          { fa: "نمی‌شود", mean: "cannot be, does not become" },
    "een":                     { fa: "این", mean: "this" },
    "naw#type":                { fa: "نوع", say: "naw", mean: "kind, type" },
    "ma-qaa-sid":              { fa: "مقاصد", mean: "aims, purposes" },
    "khay-lee":                { fa: "خیلی", mean: "very" },
    "bee-pee-raa-ya":          { fa: "بی‌پیرایه", mean: "unadorned, plain" },
    "may-na-wee-sad":          { fa: "می‌نویسد", mean: "writes" },
    "is-ti-maal":              { fa: "استعمال", mean: "use, usage" },
    "ka-li-ma-haa":            { fa: "کلمه‌ها", mean: "words" },
    "i-baa-rat-haa-yi":        { fa: "عبارت‌های", mean: "expressions, phrases" },
    "ha-maa-hang":             { fa: "هماهنگ", mean: "matching, harmonious" },
    "waa-zha-haa":             { fa: "واژه‌ها", mean: "words" },
    "is-ti-laa-haat":          { fa: "اصطلاحات", mean: "terms, expressions" },
    "pay-chee-da":             { fa: "پیچیده", mean: "complicated" },
    "doo-ray":                 { fa: "دوری", mean: "far (door + -ay, a: “a far …”)" },
    "may-gu-zee-nad":          { fa: "می‌گزیند", mean: "chooses, avoids" },
    "gu-zee-dan":              { fa: "گزیدن", mean: "to choose" },
    "na-mo-na-haa-yi":         { fa: "نمونه‌های", mean: "examples" },
    "fa-raa-waa-nee":          { fa: "فراوانی", mean: "many, abundance" },
    "ki-taab-haa-yee":         { fa: "کتاب‌هایی", mean: "books, some books" },
    "sa-far-naa-ma-yi":        { fa: "سفرنامهٔ", mean: "travel book" },
    "naa-sir-khus-raw":        { fa: "ناصرخسرو", mean: "Nasir Khusraw" },
    "kee-mee-yaa":             { fa: "کیمیا", mean: "alchemy" },
    "sa-aa-dat":               { fa: "سعادت", mean: "happiness" },
    "as-raar-ut-taw-heed":     { fa: "اسرارالتوحید", mean: "Asrar al-Tawhid, The Secrets of Divine Unity" },
    "taz-ki-rat-ul-aw-li-yaa": { fa: "تذکرهٔالاولیا", mean: "Tazkirat al-Awliya, Memorial of the Saints" },
    "ham-chu-naan":            { fa: "همچنان", mean: "likewise, just so" },
    "agh-lab":                 { fa: "اغلب", mean: "most, usually" },
    "na-wish-ta-haa-yi":       { fa: "نوشته‌های", mean: "writings" },
    "mu-aa-sir":               { fa: "معاصر", mean: "contemporary" },
    "may-ta-waan":             { fa: "می‌توان", mean: "one can" },
    "yaaft":                   { fa: "یافت", mean: "found" },
    "yaaf-tan":                { fa: "یافتن", mean: "to find" },
    "na-mo-na":                { fa: "نمونه", mean: "sample, example" },
    "mu-qad-da-ma-yi":         { fa: "مقدمهٔ", mean: "preface, introduction" },
    "shaah-naa-ma-yi":         { fa: "شاهنامهٔ", mean: "Shahnameh, with ezafe" },
    "a-bo-man-so-ree":         { fa: "ابومنصوری", mean: "of Abu Mansur" },
    "pas":                     { fa: "پس", mean: "then, so" },
    "das-toor":                { fa: "دستور", mean: "rule, order; grammar" },
    "khaysh":                  { fa: "خویش", mean: "own; self" },
    "a-bo-man-soor":           { fa: "ابومنصور", mean: "Abu Mansur" },
    "al-ma-ma-ree":            { fa: "المعمری", mean: "al-Ma'mari" },
    "bi-far-mood":             { fa: "بفرمود", mean: "commanded" },
    "far-moo-dan":             { fa: "فرمودن", mean: "to say, to command (polite)" },
    "taa":                     { fa: "تا", mean: "so that; until; to" },
    "khu-daa-wan-daan":        { fa: "خداوندان", mean: "masters, possessors" },
    "ku-tub":                  { fa: "کتب", mean: "books" },
    "dih-qaa-naan":            { fa: "دهقانان", mean: "farmers, peasants" },
    "fa-ra-zaa-na-gaan":       { fa: "فرزانه‌گان", mean: "sages, wise people" },
    "ja-haan":                 { fa: "جهان", mean: "world" },
    "dee-da-gaan":             { fa: "دیده‌گان", mean: "eyes" },
    "shahr-haa":               { fa: "شهرها", mean: "cities" },
    "bi-yaa-wa-rad":           { fa: "بیاورد", mean: "may bring" },
    "aa-war-dan":              { fa: "آوردن", mean: "to bring" },
    "bi-ni-shaa-nad":          { fa: "بنشاند", mean: "may seat" },
    "ni-shaan-dan":            { fa: "نشاندن", mean: "to seat, set down" },
    "bi-faa-raaz":             { fa: "بفراز", mean: "for compiling, aloft" },
    "naa-ma-haa-yi":           { fa: "نامه‌های", mean: "accounts, books, letters" },
    "shaa-haan":               { fa: "شاهان", mean: "kings" },
    "kaar-naa-ma-haa":         { fa: "کارنامه‌ها", mean: "deeds, records" },
    "shaan":                   { fa: "شان", mean: "their" },
    "zin-da-gaa-nee":          { fa: "زنده‌گانی", mean: "life" },
    "har":                     { fa: "هر", mean: "every" },
    "ya-kay":                  { fa: "یکی", mean: "one" },
    "daad":                    { fa: "داد", mean: "gave" },
    "bee-daad":                { fa: "بیداد", mean: "injustice, tyranny" },
    "aa-shoob":                { fa: "آشوب", mean: "turmoil, disorder" },
    "jang":                    { fa: "جنگ", mean: "war" },
    "aa-yeen":                 { fa: "آیین", mean: "way, custom, rite" },
    "ka-see-ki":               { fa: "کسی‌که", mean: "someone who" },
    "nu-khus-teen":            { fa: "نخستین", mean: "first" },
    "an-dar":                  { fa: "اندر", mean: "in (an old word for dar)" },
    "oo":                      { fa: "او", mean: "he, she; his, her" },
    "bood":                    { fa: "بود", mean: "was" },
    "mar-day":                 { fa: "مردی", mean: "a man" },
    "aa-word":                 { fa: "آورد", mean: "brought" },
    "mar-du-maan":             { fa: "مردمان", mean: "people" },
    "jaa-na-wa-raan":          { fa: "جانوران", mean: "animals, living creatures" },
    "pa-deed":                 { fa: "پدید", mean: "visible, appearing" },
    "yazd":                    { fa: "یزد", mean: "Yazd, part of the name Yazdegerd" },
    "gird":                    { fa: "گرد", mean: "round (gird baad, a whirlwind)" },
    "shah-ri-yaar":            { fa: "شهریار", mean: "king, ruler" },
    "aa-khir":                 { fa: "آخر", mean: "in the end; last" },
    "mu-look":                 { fa: "ملوک", mean: "kings" },
    "a-jam":                   { fa: "عجم", mean: "non-Arabs, the Persians" },
    "naam":                    { fa: "نام", mean: "name" },
    "shaah-naa-ma":            { fa: "شاهنامه", mean: "Shahnameh, Book of Kings" },
    "ni-haa-dand":             { fa: "نهادند", mean: "they named, placed" },
    "ni-haa-dan":              { fa: "نهادن", mean: "to put, to place" },
    "daa-nish":                { fa: "دانش", mean: "knowledge" },
    "an-da-reen":              { fa: "اندرین", mean: "in this" },
    "ni-gaah":                 { fa: "نگاه", mean: "look, gaze" },
    "ku-nand":                 { fa: "کنند", mean: "they do" },
    "far-hang":                { fa: "فرهنگ", mean: "culture" },
    "mih-ta-raan":             { fa: "مهتران", mean: "nobles, great men" },
    "raan-dan":                { fa: "راندن", mean: "to drive, to steer" },
    "si-paah":                 { fa: "سپاه", mean: "army" },
    "aa-raas-tan":             { fa: "آراستن", mean: "to adorn" },
    "razm":                    { fa: "رزم", mean: "battle" },
    "shahr":                   { fa: "شهر", mean: "city, town" },
    "gu-shaa-dan":             { fa: "گشادن", mean: "to open, conquer" },
    "keen":                    { fa: "کین", mean: "vengeance, hatred" },
    "khaas-tan":               { fa: "خواستن", mean: "to want" },
    "sha-bee-khoon":           { fa: "شبیخون", mean: "night attack" },
    "a-zarm":                  { fa: "آزرم", mean: "modesty, respect" },
    "khaas-taa-ree":           { fa: "خواستاری", mean: "requesting, seeking" },
    "ha-ma":                   { fa: "همه", mean: "all, every" },
    "ba-deen":                 { fa: "بدین", mean: "by this, in this" },
    "naa-ma":                  { fa: "نامه", mean: "book; letter" },
    "bi-yaa-band":             { fa: "بیابند", mean: "may find" },
    "du#digit":                { fa: "۲", say: "du", mean: "two" },
    "mas-noo":                 { fa: "مصنوع", mean: "ornate, artificial" },
    "ha-maan":                 { fa: "همان", mean: "that same, the very" },
    "goo-na":                  { fa: "گونه", mean: "kind, type" },
    "pay-daa-st":              { fa: "پیداست", mean: "is evident, appears" },
    "a-laa-wa":                { fa: "علاوه", mean: "addition (a-laa-wa bar, besides)" },
    "bar":                     { fa: "بر", mean: "on, upon" },
    "is-ti-faa-da":            { fa: "استفاده", mean: "use" },
    "ash-aar":                 { fa: "اشعار", mean: "poems, verses" },
    "sha-waa-hid":             { fa: "شواهد", mean: "quotations, evidence" },
    "aa-yaat":                 { fa: "آیات", mean: "verses (of the Quran)" },
    "qur-aa-nee":              { fa: "قرآنی", mean: "Quranic" },
    "a-haa-dees":              { fa: "احادیث", mean: "the Prophet's sayings" },
    "il-mee":                  { fa: "علمی", mean: "scholarly, scientific" },
    "ghay-ri-mus-ta-mal":      { fa: "غیرمستعمل", mean: "uncommon, not in ordinary use" },
    "is-ti-aa-raat":           { fa: "استعارات", mean: "metaphors" },
    "tash-bee-haat":           { fa: "تشبیهات", mean: "similes" },
    "mukh-ta-lif":             { fa: "مختلف", mean: "different, various" },
    "ka-laam":                 { fa: "کلام", mean: "speech; poetry" },
    "shay-wa":                 { fa: "شیوه", mean: "style, way" },
    "mas-noo-ee":              { fa: "مصنوعی", mean: "artificial, ornate" },
    "pay-raa-ya":              { fa: "پیرایه", mean: "ornament" },
    "za-raa-yif":              { fa: "ظرایف", mean: "refinements, subtleties" },
    "a-da-bee":                { fa: "ادبی", mean: "literary" },
    "may-aa-raa-yad":          { fa: "می‌آراید", mean: "adorns" },
    "du":                      { fa: "دو", mean: "two" },
    "das-ta":                  { fa: "دسته", mean: "group, band" },
    "yak":                     { fa: "یک", mean: "one, a" },
    "mu-saj-ja":               { fa: "مسجع", mean: "rhymed" },
    "maw-zoon":                { fa: "موزون", mean: "rhythmic, metrical" },
    "jum-la-haa":              { fa: "جمله‌ها", mean: "sentences" },
    "i-baa-rat-haa":           { fa: "عبارت‌ها", mean: "expressions, phrases" },
    "daa-raa-yi":              { fa: "دارای", mean: "having, possessing" },
    "maa-nand":                { fa: "مانند", mean: "like" },
    "shi'r":                   { fa: "شعر", mean: "poetry, poem" },
    "ham-waz-nee":             { fa: "هموزنی", mean: "having matching rhythm" },
    "may-ba-rad":              { fa: "می‌برد", mean: "takes, carries" },
    "qa-ree-na-saa-zee":       { fa: "قرینه‌سازی", mean: "making parallel structures" },
    "aa-han-geen":             { fa: "آهنگین", mean: "musical, rhythmic" },
    "may-ku-nad":              { fa: "می‌کند", mean: "does, makes" },
    "zay-baa":                 { fa: "زیبا", mean: "beautiful" },
    "aa-saar":                 { fa: "آثار", mean: "works" },
    "khaa-ja":                 { fa: "خواجه", mean: "khwaja, a title of respect for a Sufi master" },
    "ab-dul-laah":             { fa: "عبدالله", mean: "Abdullah" },
    "an-saa-ree":              { fa: "انصاری", mean: "Ansari" },
    "kash-ful-as-raar":        { fa: "کشف‌الاسرار", mean: "Kashf al-Asrar, The Unveiling of Secrets" },
    "ka-lee-la":               { fa: "کلیله", mean: "Kalila" },
    "dim-na-yi":               { fa: "دمنهٔ", mean: "Dimna, with ezafe" },
    "bah-raam-shaa-hee":       { fa: "بهرامشاهی", mean: "of Bahramshah" },
    "taz-ki-ra-yi":            { fa: "تذکرهٔ", mean: "memorial, biographical collection" },
    "aw-li-yaa-yi":            { fa: "الاولیای", mean: "saints, with ezafe" },
    "shaykh":                  { fa: "شیخ", mean: "sheikh - a title for a great teacher or poet" },
    "fa-ree-dud-deen":         { fa: "فریدالدین", mean: "Fariduddin" },
    "at-taar":                 { fa: "عطار", mean: "Attar" },
    "gu-lis-taan":             { fa: "گلستان", mean: "the Gulistan, Sa'di's book of stories; a rose garden" },
    "sa-dee":                  { fa: "سعدی", mean: "Sa’di, the Persian poet from Shiraz who died about 1292" },
    "ghay-ra":                 { fa: "غیره", mean: "and so on, other" },
    "kan-zus-saa-li-keen":     { fa: "کنزالسالکین", mean: "Kanz al-Salikin, Treasure of the Wayfarers" },
    "aql":                     { fa: "عقل", mean: "reason, good sense" },
    "guft":                    { fa: "گفت", mean: "said" },
    "gu-shaa-yin-da":          { fa: "گشاینده", mean: "opener, one who opens" },
    "fah-mam":                 { fa: "فهمم", mean: "my understanding" },
    "zu-daa-yin-da-yi":        { fa: "زدایندهٔ", mean: "remover, one who removes" },
    "rang":                    { fa: "رنگ", mean: "color" },
    "wah-mam":                 { fa: "همم", mean: "my delusion" },
    "paa":                     { fa: "پا", mean: "foot, leg" },
    "bas-ta":                  { fa: "بسته", mean: "closed; has closed" },
    "bas-tan":                 { fa: "بستن", mean: "to close, to tie" },
    "tak-lee-faa-tam":         { fa: "تکلیفاتم", mean: "my duties, obligations" },
    "shaa-yis-ta-yi":          { fa: "شایستهٔ", mean: "worthy of" },
    "tash-ree-faa-tam":        { fa: "تشریفاتم", mean: "my honors, ceremonies" },
    "gul-zaar":                { fa: "گلزار", mean: "flower garden" },
    "khi-rad-man-daa-nam":     { fa: "خرد‌مندانم", mean: "I am the garden of the wise" },
    "af-zaar":                 { fa: "افزار", mean: "tool, instrument" },
    "hu-nar-man-daa-nam":      { fa: "هنرمندانم", mean: "I am the tool of artists" },
    "ishq":                    { fa: "عشق", mean: "love" },
    "de-waa-na-yi":            { fa: "دیوانهٔ", mean: "mad, mad one" },
    "jur-a-yi":                { fa: "جرعهٔ", mean: "sip" },
    "zaw-qam":                 { fa: "ذوقم", mean: "my delight, taste" },
    "bar-aa-wa-rin-da-yi":     { fa: "برآورندهٔ", mean: "awakener, fulfiller" },
    "shaw-qam":                { fa: "شوقم", mean: "my longing" },
    "zulf":                    { fa: "زلف", mean: "tress, lock of hair" },
    "mu-hab-bat":              { fa: "محبت", mean: "love, affection" },
    "shaa-na-am":              { fa: "شانه‌ام", mean: "I am a comb" },
    "zar#crop":                { fa: "زرع", say: "zar", mean: "crop, sowing" },
    "ma-wad-dat":              { fa: "مودت", mean: "affection" },
    "daa-na-am":               { fa: "دانه‌ام", mean: "I am a seed" },
    "mi-yaa-na":               { fa: "میانه", mean: "middle" },
    "da-bee-raan":             { fa: "دبیران", mean: "secretaries, writers" },
    "daw-ra":                  { fa: "دوره", mean: "period" },
    "ghaz-na-wee":             { fa: "غزنوی", mean: "Ghaznavid" },
    "yaad":                    { fa: "یاد", mean: "memory, mention" },
    "may-ku-nand":             { fa: "می‌کنند", mean: "they do" },
    "zee-raa":                 { fa: "زیرا", mean: "because" },
    "paa-yaan":                { fa: "پایان", mean: "end" },
    "aa-ghaaz":                { fa: "آغاز", mean: "beginning" },
    "fan-nee":                 { fa: "فنی", mean: "technical, artistic" },
    "faa-si-la-yi":            { fa: "فاصلهٔ", mean: "interval, distance" },
    "neem":                    { fa: "نیم", mean: "half" },
    "qarn":                    { fa: "قرن", mean: "century" },
    "gi-rif-ta":               { fa: "گرفته", mean: "taken; having taken" },
    "gi-rif-tan":              { fa: "گرفتن", mean: "to take" },
    "ham":                     { fa: "هم", mean: "also, too" },
    "saa-da-gee":              { fa: "ساده‌گی", mean: "simplicity" },
    "us-tu-waa-ree":           { fa: "استواری", mean: "strength, firmness" },
    "daa-rad":                 { fa: "دارد", mean: "has" },
    "ni-shaa-na-haa-yee":      { fa: "نشانه‌هایی", mean: "signs, some signs" },
    "aa-meekh-ta-gee":         { fa: "آمیخته‌گی", mean: "mixture" },
    "nazm":                    { fa: "نظم", mean: "verse, order" },
    "wu-rood":                 { fa: "ورود", mean: "entry, entering" },
    "lu-ghaat":                { fa: "لغات", mean: "words, vocabulary" },
    "ham-raah":                { fa: "همراه", mean: "together, along" },
    "taa-reekh":               { fa: "تاریخ", mean: "history; date" },
    "bay-ha-kee":              { fa: "بیهقی", mean: "Bayhaqi" },
    "si-yaa-sat-naa-ma":       { fa: "سیاست‌نامه", mean: "Siyasatnama, Book of Government" },
    "qaa-boos-naa-ma":         { fa: "قابوس‌نامه", mean: "Qabusnama" },
    "bur-jis-ta-yi":           { fa: "برجستهٔ", mean: "outstanding, prominent" },
    "dee-gar":                 { fa: "دیگر", mean: "other; more; anymore" },
    "roz":                     { fa: "روز", mean: "day" },
    "dar-gaah":                { fa: "درگاه", mean: "royal court" },
    "aa-ma-dee":               { fa: "آمدی", mean: "he would come" },
    "aa-ma-dan":               { fa: "آمدن", mean: "to come" },
    "khi-lat":                 { fa: "خلعت", mean: "robe of honor" },
    "na-bood":                 { fa: "نبود", mean: "was not" },
    "aa-dat":                  { fa: "عادت", mean: "habit" },
    "rooz-gaar":               { fa: "روزگار", mean: "time, era" },
    "gu-zash-ta":              { fa: "گذشته", mean: "the past; passed" },
    "gu-zash-tan":             { fa: "گذشتن", mean: "to pass" },
    "qa-baa-yee":              { fa: "قبایی", mean: "a coat" },
    "saakh-ta":                { fa: "ساخته", mean: "made, fashioned" },
    "saakh-tan":               { fa: "ساختن", mean: "to make, to build" },
    "kard":                    { fa: "کرد", mean: "did, made" },
    "das-taa-ree":             { fa: "دستاری", mean: "a turban" },
    "nay-shaa-poo-ree":        { fa: "نیشاپوری", mean: "from Nishapur" },
    "qaa-yi-nee":              { fa: "قاینی", mean: "of Qayin" },
    "mih-tar":                 { fa: "مهتر", mean: "lord, noble" },
    "ra-zi-yal-laah":          { fa: "رضی‌الله", mean: "may God be pleased" },
    "an-ho":                   { fa: "عنه", mean: "with him, concerning him" },
    "jaa-ma-haa":              { fa: "جامه‌ها", mean: "clothes" },
    "dee-dan-dee":             { fa: "دیدندی", mean: "they would see" },
    "dee-dan":                 { fa: "دیدن", mean: "to see; seeing" },
    "si-qaa-ti":               { fa: "ثقاتِ", mean: "trusted people" },
    "shi-nee-dam":             { fa: "شنیدم", mean: "I heard" },
    "shi-nee-dan":             { fa: "شنیدن", mean: "to hear" },
    "cho":                     { fa: "چو", mean: "like (short for choon)" },
    "bo":                      { fa: "بو", mean: "Abu, in a name" },
    "ib-raa-heem":             { fa: "ابراهیم", mean: "Ibrahim" },
    "kad-khu-daa-yash":        { fa: "کدخدایش", mean: "his steward" },
    "dee-ga-raan":             { fa: "دیگران", mean: "others" },
    "beest":                   { fa: "بیست", mean: "twenty" },
    "see":                     { fa: "سی", mean: "thirty" },
    "qa-baa":                  { fa: "قبا", mean: "coat, robe" },
    "saal":                    { fa: "سال", mean: "year" },
    "may-po-shee-dee":         { fa: "می‌پوشیدی", mean: "he would wear" },
    "po-shee-dan":             { fa: "پوشیدن", mean: "putting on, wearing" },
    "chu-naan":                { fa: "چنان", mean: "so, such, in such a way" },
    "daa-nis-tan-dee":         { fa: "دانستندی", mean: "they would think" },
    "daa-nis-tan":             { fa: "دانستن", mean: "to know" },
    "qa-baa-st":               { fa: "قباست", mean: "is one coat" },
    "guf-tan-dee":             { fa: "گفتندی", mean: "they would say" },
    "sub-haa-nal-laah":        { fa: "سبحان", mean: "glory be, exalted is" },
    "al-laah":                 { fa: "الله", mean: "God (Allah)" },
    "sih#digit":               { fa: "۳", say: "sih", mean: "three" },
    "may-khaa-had":            { fa: "می‌خواهد", mean: "wants" },
    "naz-deek":                { fa: "نزدیک", mean: "near" },
    "sha-wad":                 { fa: "شود", mean: "become" },
    "ji-hat":                  { fa: "جهت", mean: "direction" },
    "na-zar":                  { fa: "نظر", mean: "sight, view; opinion" },
    "zu-baan":                 { fa: "زبان", mean: "language; tongue" },
    "fikr":                    { fa: "فکر", mean: "thought" },
    "way-zha-gee-haa-yi":      { fa: "ویژه‌گی‌های", mean: "features, characteristics" },
    "na-may-ta-waan":          { fa: "نمی‌توان", mean: "one cannot" },
    "daa-nist":                { fa: "دانست", mean: "regarded, knew" },
    "bal-ki":                  { fa: "بلکه", mean: "but rather" },
    "shi-rwaar":               { fa: "شعروار", mean: "poetic, like poetry" },
    "tas-wee-ree":             { fa: "تصویری", mean: "figurative, pictorial" },
    "sar-shaar":               { fa: "سرشار", mean: "full, overflowing" },
    "aa-raa-ya-haa-yi":        { fa: "آرایه‌های", mean: "literary devices, ornaments" },
    "zar-bul-ma-sal-haa-yi":   { fa: "ضرب‌المثل‌های", mean: "proverbs" },
    "zi-yaad":                 { fa: "زیاد", mean: "many, much" },
    "may-aa-mee-zad":          { fa: "می‌آمیزد", mean: "mixes, blends" },
    "aa-meekh-tan":            { fa: "آمیختن", mean: "to mix, blend" },
    "na-zeer":                 { fa: "نظیر", mean: "like, such as" },
    "dim-na":                  { fa: "دمنه", mean: "Dimna" },
    "ma-qaa-maat":             { fa: "مقامات", mean: "Maqamat; stations" },
    "ha-mee-dee":              { fa: "حمیدی", mean: "Hamidi" },
    "marz-baan-naa-ma":        { fa: "مرزبان‌نامه", mean: "Marzban-nama" },
    "at-ta-was-sul":           { fa: "التوسل", mean: "al-Tawassul" },
    "i-laa":                   { fa: "الی", mean: "to, toward" },
    "at-ta-ras-sul":           { fa: "الترسل", mean: "al-Tarassul" },
    "was-saaf":                { fa: "وصاف", mean: "Wassaf" },
    "dur-ra-yi":               { fa: "درهٔ", mean: "pearl, with ezafe" },
    "naa-di-ra":               { fa: "نادره", mean: "rare, remarkable" },
    "na-mo-na-haa-yay":        { fa: "نمونه‌هایی", mean: "examples" },
    "a-laa":                   { fa: "اعلی", mean: "excellent, highest" },
    "mu-ta-kal-lif":           { fa: "متکلف", mean: "elaborate, affected" },
    "as-tand":                 { fa: "استند", mean: "are" },
    "ki-taab":                 { fa: "کتاب", mean: "book" },
    "taq-reeb":                { fa: "تقریب", mean: "drawing close, proximity" },
    "hasht":                   { fa: "هشت", mean: "eight" },
    "kas":                     { fa: "کس", mean: "person" },
    "ha-zar":                  { fa: "حذر", mean: "caution, keeping away" },
    "waa-jib":                 { fa: "واجب", mean: "necessary, obligatory" },
    "aw-wal":                  { fa: "اول", mean: "first" },
    "aan-ki":                  { fa: "آن‌که", mean: "that, when" },
    "ni-mat":                  { fa: "نعمت", mean: "favor, blessing" },
    "mun-i-maan":              { fa: "منعمان", mean: "benefactors" },
    "sabk":                    { fa: "سبک", mean: "style" },
    "kuf-raan":                { fa: "کفران", mean: "ingratitude" },
    "dast":                    { fa: "دست", mean: "hand" },
    "du-wum":                  { fa: "دوم", mean: "second" },
    "bee-maw-ji-bee":          { fa: "بی‌موجبی", mean: "without cause" },
    "khashm":                  { fa: "خشم", mean: "anger" },
    "sa-wum":                  { fa: "سوم", mean: "third" },
    "umr":                     { fa: "عمر", mean: "life, lifetime" },
    "da-raaz":                 { fa: "دراز", mean: "long" },
    "magh-roor":               { fa: "مغرور", mean: "deceived, proud" },
    "ri-aa-yat":               { fa: "رعایت", mean: "observing, keeping to" },
    "hu-qooq":                 { fa: "حقوق", mean: "rights" },
    "bee-ni-yaaz":             { fa: "بی‌نیاز", mean: "free of need, independent" },
    "pin-daa-rad":             { fa: "پندارد", mean: "considers, supposes" },
    "pin-daash-tan":           { fa: "پنداشتن", mean: "to suppose, consider" },
    "chi-haa-rum":             { fa: "چهارم", mean: "fourth" },
    "raah":                    { fa: "راه", mean: "way, road" },
    "ghadr":                   { fa: "غدر", mean: "treachery" },
    "paysh":                   { fa: "پیش", mean: "front; forward" },
    "gu-shaa-da":              { fa: "گشاده", mean: "open" },
    "sahl":                    { fa: "سهل", mean: "easy" },
    "na-maa-yad":              { fa: "نماید", mean: "make; do" },
    "na-mo-dan":               { fa: "نمودن", mean: "to do; to show; to seem" },
    "pan-jum":                 { fa: "پنجم", mean: "fifth" },
    "bi-naa-yi":               { fa: "بنای", mean: "foundation, basis" },
    "kaar-haa":                { fa: "کارها", mean: "works, jobs" },
    "a-daa-wat":               { fa: "عداوت", mean: "hostility" },
    "ni-had":                  { fa: "نهد", mean: "places" },
    "nuh":                     { fa: "نه", mean: "nine" },
    "raas-tee":                { fa: "راستی", mean: "truthfulness" },
    "di-yaa-nat":              { fa: "دیانت", mean: "piety, honesty" },
    "sha-shum":                { fa: "ششم", mean: "sixth" },
    "ab-waab":                 { fa: "ابواب", mean: "chapters, areas" },
    "sahw":                    { fa: "سهو", mean: "negligence, error" },
    "rish-ta":                 { fa: "رشته", mean: "thread" },
    "khaysh-tan":              { fa: "خویشتن", mean: "oneself" },
    "fa-raakh":                { fa: "فراخ", mean: "broad, free" },
    "gee-rad":                 { fa: "گیرد", mean: "take; (with qa-raar) be placed" },
    "qib-la-yi":               { fa: "قبلهٔ", mean: "direction of prayer" },
    "dil":                     { fa: "دل", mean: "heart" },
    "ha-waa":                  { fa: "هوا", mean: "air, weather" },
    "saa-zad":                 { fa: "سازد", mean: "may make, prove" },
    "haf-tum":                 { fa: "هفتم", mean: "seventh" },
    "bee-sa-ba-bee":           { fa: "بی‌سببی", mean: "without cause" },
    "bad-gu-maan":             { fa: "بدگمان", mean: "suspicious" },
    "gar-dad":                 { fa: "گردد", mean: "become" },
    "gar-dee-dan":             { fa: "گردیدن", mean: "to become, to turn" },
    "bee-da-leel":             { fa: "بی‌دلیل", mean: "without proof" },
    "ahl":                     { fa: "اهل", mean: "people (of a place)" },
    "si-qa":                   { fa: "ثقت", mean: "trustworthy person" },
    "mut-ta-ham":              { fa: "متهم", mean: "accused" },
    "gar-daa-nad":             { fa: "گرداند", mean: "turn, make" },
    "gar-daan-dan":            { fa: "گرداندن", mean: "to turn, to make" },
    "hash-tum":                { fa: "هشتم", mean: "eighth" },
    "qil-lat":                 { fa: "قلت", mean: "scarcity, lack" },
    "ha-yaa":                  { fa: "حیا", mean: "modesty" },
    "maz-koor":                { fa: "مذکور", mean: "mentioned, known" },
    "sho-khee":                { fa: "شوخی", mean: "insolence, playfulness" },
    "wa-qaa-hat":              { fa: "وقاحت", mean: "shamelessness" },
    "mash-hoor":               { fa: "مشهور", mean: "famous, known" },
    "chaar":                   { fa: "۴", mean: "four" },
    "ja-deed":                 { fa: "جدید", mean: "new" },
    "kam-aa-besh":             { fa: "کمابیش", mean: "more or less" },
    "dam-baa-la-yi":           { fa: "دنبالهٔ", mean: "continuation" },
    "rawsh-haa-yi":            { fa: "روش‌های", mean: "methods, ways" },
    "naw":                     { fa: "نو", mean: "new" },
    "u-sool":                  { fa: "اصول", mean: "rules, principles" },
    "ma-baa-nee":              { fa: "مبانی", mean: "foundations, principles" },
    "asr":                     { fa: "عصر", mean: "age, era" },
    "maa":                     { fa: "ما", mean: "we" },
    "af-ghaa-nis-taan":        { fa: "افغانستان", mean: "Afghanistan" },
    "rooz-naa-ma-ni-gaa-ree":  { fa: "روزنامه‌نگاری", mean: "journalism" },
    "mah-mood":                { fa: "محمود", mean: "Mahmud" },
    "tar-zee":                 { fa: "طرزی", mean: "Tarzi" },
    "ja-ree-da":               { fa: "جریده", mean: "journal, newspaper" },
    "si-raaj":                 { fa: "سراج", mean: "Siraj, lamp" },
    "al-akh-baar":             { fa: "الاخبار", mean: "al-Akhbar, the news" },
    "tagh-yee-raat":           { fa: "تغییرات", mean: "changes" },
    "ta-ha-wu-laat":           { fa: "تحولات", mean: "developments" },
    "chan-day":                { fa: "چندی", mean: "for a while" },
    "im-roz":                  { fa: "امروز", mean: "today" },
    "i-daa-ma":                { fa: "ادامه", mean: "continuation" },
    "ri-waa-yaat":             { fa: "روایات", mean: "reports, traditions" },
    "am-saal":                 { fa: "امثال", mean: "the like" },
    "hukm":                    { fa: "حکم", mean: "ruling, rule" },
    "aan-chi":                 { fa: "آن‌چه", mean: "what, that which" },
    "bi-go-yad":               { fa: "بگوید", mean: "may say" },
    "rish-ta-yi":              { fa: "رشتهٔ", mean: "thread, form" },
    "tah-reer":                { fa: "تحریر", mean: "writing" },
    "may-aa-wa-rad":           { fa: "می‌آورد", mean: "brings" },
    "am-maa":                  { fa: "اما", mean: "but" },
    "ta-daa-dee":              { fa: "تعدادی", mean: "a number, some" },
    "ta-bee-raat":             { fa: "تعبیرات", mean: "expressions" },
    "ow-ro-paa-yee":           { fa: "اروپایی", mean: "European" },
    "may-yaa-bad":             { fa: "می‌یابد", mean: "finds; begins" },
    "ni-shaa-na-haa-yi":       { fa: "نشانه‌های", mean: "signs, marks" },
    "ni-gaa-ri-shee":          { fa: "نگارشی", mean: "of writing, punctuation" },
    "wuf-rat":                 { fa: "وفرت", mean: "abundance" },
    "dee-da":                  { fa: "دیده", mean: "seen; eye" },
    "daa-staan":               { fa: "داستان", mean: "story" },
    "gur-ba-yi":               { fa: "گربهٔ", mean: "cat, with ezafe" },
    "daak-toor":               { fa: "دکتور", mean: "doctor" },
    "ak-ram":                  { fa: "اکرم", mean: "Akram" },
    "us-maan":                 { fa: "عثمان", mean: "Osman" },
    "it-ti-faa-qan":           { fa: "اتفاقاً", mean: "by chance" },
    "roz-haa":                 { fa: "روزها", mean: "days" },
    "shaa-ir":                 { fa: "شاعر", mean: "poet" },
    "a-bar":                   { fa: "ابر", mean: "great, super-, above" },
    "baad":                    { fa: "باد", mean: "wind" },
    "mah":                     { fa: "مه", mean: "moon" },
    "khur-sheed":              { fa: "خورشید", mean: "sun" },
    "fa-lak":                  { fa: "فلک", mean: "the sky, the heavens" },
    "ba-dast":                 { fa: "به‌دست", mean: "in hand" },
    "daa-da":                  { fa: "داده", mean: "given" },
    "boo-dand":                { fa: "بودند", mean: "were" },
    "taw-feeq":                { fa: "توفیق", mean: "Tawfiq" },
    "mu-haa-jir":              { fa: "مهاجر", mean: "migrant" },
    "kaa-bu-lee":              { fa: "کابلی", mean: "Kabuli, of Kabul" },
    "a-zi-yat":                { fa: "اذیت", mean: "harm, trouble" },
    "na-ku-nand":              { fa: "نکنند", mean: "may not do, do not" },
    "chaw-kee-haa-yi":         { fa: "چوکی‌های", mean: "chairs, benches" },
    "ki-naar":                 { fa: "کنار", mean: "side, edge" },
    "jaa-da":                  { fa: "جاده", mean: "road, street" },
    "ni-shas-ta":              { fa: "نشسته", mean: "sitting, seated" },
    "ni-shas-tan":             { fa: "نشستن", mean: "to sit" },
    "may-ko-sheed":            { fa: "می‌کوشید", mean: "tried, was trying" },
    "ko-shee-dan":             { fa: "کوشیدن", mean: "to try" },
    "gham":                    { fa: "غم", mean: "grief, sorrow" },
    "gha-lat":                 { fa: "غلط", mean: "wrong; distraction" },
    "ku-nad":                  { fa: "کند", mean: "does" },
    "aaf-taab":                { fa: "آفتاب", mean: "sun" },
    "haa-shi-ya-yi":           { fa: "حاشیهٔ", mean: "edge, margin" },
    "aa-han-posh":             { fa: "آهنپوش", mean: "metal-clad" },
    "aa-paar-ti-maan":         { fa: "آپارتمان", mean: "apartment building" },
    "bu-land":                 { fa: "بلند", mean: "high, tall, loud" },
    "khan-daan":               { fa: "خندان", mean: "smiling" },
    "na-waa-zish-gar":         { fa: "نوازشگر", mean: "kind, caressing" },
    "may-taa-beed":            { fa: "می‌تابید", mean: "shone" },
    "taa-bee-dan":             { fa: "تابیدن", mean: "to shine" },
    "qa-bur-gha-haa-yi":       { fa: "قبرغه‌های", mean: "ribs" },
    "aa-zur-da-yi":            { fa: "آزردهٔ", mean: "aching, hurt" },
    "may-na-waakht":           { fa: "می‌نواخت", mean: "caressed, played" },
    "na-waakh-tan":            { fa: "نواختن", mean: "to play a musical instrument" },
    "zin-daan":                { fa: "زندان", mean: "prison" },
    "ma-raz":                  { fa: "مرض", mean: "disease" },
    "fa-laj":                  { fa: "فلج", mean: "paralysis, polio" },
    "dard":                    { fa: "درد", mean: "pain" },
    "ma-faa-sil":              { fa: "مفاصل", mean: "joints" },
    "naa-kho-shee":            { fa: "ناخوشی", mean: "illness" },
    "ta-maam":                 { fa: "تمام", mean: "all, entire" },
    "ra-haa-yee":              { fa: "رهایی", mean: "freedom, escape" },
    "chi":                     { fa: "چه", mean: "what; how" },
    "kaa-bul":                 { fa: "کابل", mean: "Kabul" },
    "pa-shaa-war":             { fa: "پشاور", mean: "Peshawar" },
    "een-jaa":                 { fa: "این‌جا", mean: "here" },
    "da-waa-li-yaa":           { fa: "دوالیا", mean: "Dawaliya, a cunning mythical creature" },
    "maw-jood":                { fa: "موجود", mean: "being, creature" },
    "hee-la-gar":              { fa: "حیله‌گر", mean: "cunning, deceitful" },
    "af-saa-na-wee":           { fa: "افسانوی", mean: "mythical, legendary" },
    "push-tash":               { fa: "پُشتش", mean: "his back" },
    "sa-waar":                 { fa: "سوار", mean: "mounted, riding" },
    "aa-zaa-rash":             { fa: "آزارش", mean: "tormenting him, his pain" },
    "may-daad":                { fa: "می‌داد", mean: "gave" },
    "panj#digit":              { fa: "۵", say: "panj", mean: "five" },
    "shi-kas-ta":              { fa: "شکسته", mean: "broken, colloquial" },
    "guf-taa-ree":             { fa: "گفتاری", mean: "spoken" },
    "ni-wish-taar":            { fa: "نوشتار", mean: "written language, writing" },
    "mu-haa-wi-ra":            { fa: "محاوره", mean: "conversation, everyday speech" },
    "guf-tu-go-yi":            { fa: "گفتگوی", mean: "conversation, with ezafe" },
    "ma-moo-lee":              { fa: "معمولی", mean: "ordinary" },
    "mar-dum":                 { fa: "مردم", mean: "people" },
    "ko-cha":                  { fa: "کوچه", mean: "lane, street" },
    "baa-zaar":                { fa: "بازار", mean: "market" },
    "ni-gaash-ta":             { fa: "نگاشته", mean: "written" },
    "ni-gaash-tan":            { fa: "نگاشتن", mean: "to write" },
    "aan-goo-na":              { fa: "آن‌گونه", mean: "in that way, just as" },
    "aa-ma-yi":                { fa: "عامهٔ", mean: "common people, public" },
    "mu-khaf-faf":             { fa: "مخفف", mean: "shortened, abbreviated" },
    "bar-khay":                { fa: "برخی", mean: "some" },
    "qi-yaas":                 { fa: "قیاس", mean: "comparison" },
    "soo-rat":                 { fa: "صورت", mean: "face, outward form" },
    "mak-toob":                { fa: "مکتوب", mean: "written" },
    "aan-haa":                 { fa: "آن‌ها", mean: "they, them" },
    "may-shi-ka-nad":          { fa: "می‌شکند", mean: "breaks" },
    "shi-kas-tan":             { fa: "شکستن", mean: "to break" },
    "ni-gaa-rish":             { fa: "نگارش", mean: "writing" },
    "neez":                    { fa: "نیز", mean: "also, too" },
    "ni-shaan":                { fa: "نشان", mean: "sign, show" },
    "chih-ra-yi":              { fa: "چهرهٔ", mean: "face, character" },
    "ta-bee-ee":               { fa: "طبیعی", mean: "natural, naturally" },
    "waa-qi-ee":               { fa: "واقعی", mean: "real" },
    "qah-ra-maa-naan":         { fa: "قهرمانان", mean: "heroes, main characters" },
    "daa-staan-haa-yi":        { fa: "داستان‌های", mean: "stories" },
    "ghaa-li-ban":             { fa: "غالباً", mean: "mostly, usually" },
    "mi-yaan":                 { fa: "میان", mean: "middle, among" },
    "aam":                     { fa: "عام", mean: "general" },
    "ij-ti-maa":               { fa: "اجتماع", mean: "society" },
    "in-ti-khaab":             { fa: "انتخاب", mean: "choice" },
    "may-sha-wand":            { fa: "می‌شوند", mean: "become, are" },
    "ayn":                     { fa: "عین", mean: "very same (dar ayn-i haal, at the same time)" },
    "al-faaz":                 { fa: "الفاظ", mean: "words, expressions" },
    "tak-ya":                  { fa: "تکیه", mean: "leaning" },
    "ka-laam-haa-yi-shaan":    { fa: "کلام‌های‌شان", mean: "their habitual phrases" },
    "lah-ja-yi":               { fa: "لهجهٔ", mean: "dialect, accent" },
    "aa-mi-yaa-na":            { fa: "عامیانه", mean: "colloquial" },
    "baysh-tar":               { fa: "بیشتر", mean: "more" },
    "tan-zee":                 { fa: "طنزی", mean: "humorous, satirical" },
    "daa-staa-nee":            { fa: "داستانی", mean: "fictional, narrative" },
    "qaa-bil":                 { fa: "قابل", mean: "able, fit (qaa-bil-i is-ti-faa-da, usable)" },
    "mu-shaa-hi-da":           { fa: "مشاهده", mean: "seeing" },
    "choo-ree-haa-yi":         { fa: "چوری‌های", mean: "glass bangles, with ezafe" },
    "surkh":                   { fa: "سرخ", mean: "red" },
    "sul-taa-na":              { fa: "سلطانه", mean: "Sultana" },
    "maw-laa-naa":             { fa: "مولانا", mean: "Mawlana, our master, a title of Rumi" },
    "zaa-da":                  { fa: "زاده", mean: "Zada, born of" },
    "ba-cheem":                { fa: "بچیم", mean: "my child, colloquial" },
    "sob":                     { fa: "صوب", mean: "morning, colloquial" },
    "shaam":                   { fa: "شام", mean: "evening" },
    "kul":                     { fa: "کل", mean: "whole, all" },
    "baa-zaa-ra":              { fa: "بازاره", mean: "the market, colloquial" },
    "gash-tam":                { fa: "گشتم", mean: "I went around" },
    "gash-tan":                { fa: "گشتن", mean: "to become; to turn; to wander" },
    "a-moo":                   { fa: "امو", mean: "those, that, colloquial" },
    "choo-ri-yaa":             { fa: "چوریا", mean: "glass bangles, colloquial" },
    "boo-taa-yi":              { fa: "بوتای", mean: "shoes, colloquial" },
    "maq-bool":                { fa: "مقبول", mean: "accepted" },
    "qee-ma-tee":              { fa: "قیمتی", mean: "expensive, valuable" },
    "rah":                     { fa: "ره", mean: "road, way" },
    "dee-ga":                  { fa: "دیگه", mean: "other, else, colloquial" },
    "heech-kas":               { fa: "هیچکس", mean: "nobody" },
    "mis-lash":                { fa: "مثلش", mean: "like it, like them" },
    "na-daa-ra":               { fa: "نداره", mean: "does not have, colloquial" },
    "ba-rat":                  { fa: "برت", mean: "for you, colloquial" },
    "kha-ree-dam":             { fa: "خریدم", mean: "I bought" },
    "kha-ree-dan":             { fa: "خریدن", mean: "to buy" },
    "wa-yaa":                  { fa: "ویا", mean: "or" },
    "say-ko":                  { fa: "سَیکو", mean: "look, look, colloquial" },
    "maa-da-ram":              { fa: "مادرم", mean: "my mother" },
    "dee-roz":                 { fa: "دیروز", mean: "yesterday" },
    "maam":                    { fa: "مام", mean: "for me, to me, colloquial" },
    "choo-ri-yaa-yi":          { fa: "چوریای", mean: "glass bangles, with ezafe, colloquial" },
    "aa-war-da":               { fa: "آورده", mean: "brought" },
    "heech":                   { fa: "هیچ", mean: "none, no" },
    "dah":                     { fa: "ده", mean: "ten" },
    "nees":                    { fa: "نیس", mean: "is not, colloquial" },
    "na-boo-dan":              { fa: "نبودن", mean: "not to be" },
    "pee-sa-yi":               { fa: "پیسهٔ", mean: "money, with ezafe" },
    "zi-yaat":                 { fa: "زیات", mean: "much, a lot" },
    "do-kaan-daar":            { fa: "دوکاندار", mean: "shopkeeper" },
    "ay":                      { fa: "ای", mean: "O (when calling someone)" },
    "ba-ram":                  { fa: "برم", mean: "for me, colloquial" },
    "kha-ree-da":              { fa: "خریده", mean: "bought" }
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
    "say": "an-waa-yi nas-ri da-ree",
    "mean": "Kinds of Dari prose",
    "words": [
      [
        "انواع",
        "an-waa-yi",
        "an-waa"
      ],
      [
        "نثر",
        "nas-ri",
        "nasr"
      ],
      [
        "دری",
        "da-ree",
        "da-ree"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "nasr dar lu-ghat ba ma-naa-yi pa-raa-gan-dan wa af-shaan-dan ast wa dar is-ti-laa-hi a-dab ba su-kha-nee guf-ta may-sha-wad ki wazn wa qaa-fi-ya na-daash-ta baa-shad wa na-wee-san-da ba wa-see-la-yi aan pa-yaam-haa-yi-yi zih-nee-yi khud raa ba khaa-nan-da in-ti-qaal di-had.",
        "mean": "In its literal sense, prose means scattering and spreading; as a literary term it is speech without meter or rhyme, by which a writer conveys the messages in their mind to the reader.",
        "words": [
          [
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "لغت",
            "lu-ghat",
            "lu-ghat"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba ma-naa-yi"
          ],
          [
            "معنای",
            "ma-naa-yi",
            "ma-naa",
            "ba ma-naa-yi"
          ],
          [
            "پراگندن",
            "pa-raa-gan-dan",
            "pa-raa-gan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "افشاندن",
            "af-shaan-dan",
            "af-shaan-dan"
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
            "اصطلاح",
            "is-ti-laa-hi",
            "is-ti-laah"
          ],
          [
            "ادب",
            "a-dab",
            "a-dab"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سخنی",
            "su-kha-nee",
            "su-kha-nee"
          ],
          [
            "گفته",
            "guf-ta",
            "guf-ta",
            "guf-tan"
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
            "وزن",
            "wazn",
            "wazn"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قافیه",
            "qaa-fi-ya",
            "qaa-fi-ya"
          ],
          [
            "نداشته",
            "na-daash-ta",
            "na-daash-ta",
            "daash-tan"
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
            "نویسنده",
            "na-wee-san-da",
            "na-wee-san-da"
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "پیام‌های",
            "pa-yaam-haa-yi-yi",
            "pa-yaam-haa-yi"
          ],
          [
            "ذهنی",
            "zih-nee-yi",
            "zih-nee"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "خواننده",
            "khaa-nan-da",
            "khaa-nan-da"
          ],
          [
            "انتقال",
            "in-ti-qaal",
            "in-ti-qaal"
          ],
          [
            "دهد.",
            "di-had",
            "di-had",
            "daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "choon nasr az qay-di wazn wa qaa-fi-ya wa ta-khay-yu-laa-ti shaa-i-raa-na khaa-lee ast, ba ha-meen sa-bab kaar-bur-di aan ba-raa-yi ba-yaa-ni har-goo-na fik-ree mu-naa-sib-tar az su-kha-ni man-zoom ast",
        "mean": "Because prose is free from the constraints of meter and rhyme and from poetic imaginings, it is therefore better suited than verse to express every kind of thought,",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "قید",
            "qay-di",
            "qayd"
          ],
          [
            "وزن",
            "wazn",
            "wazn"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قافیه",
            "qaa-fi-ya",
            "qaa-fi-ya"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تخیلات",
            "ta-khay-yu-laa-ti",
            "ta-khay-yu-laat"
          ],
          [
            "شاعرانه",
            "shaa-i-raa-na",
            "shaa-i-raa-na"
          ],
          [
            "خالی",
            "khaa-lee",
            "khaa-lee"
          ],
          [
            "است،",
            "ast",
            "ast"
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
            "سبب",
            "sa-bab",
            "sa-bab"
          ],
          [
            "کاربرد",
            "kaar-bur-di",
            "kaar-burd"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "بیان",
            "ba-yaa-ni",
            "ba-yaan"
          ],
          [
            "هرگونه",
            "har-goo-na",
            "har-goo-na"
          ],
          [
            "فکری",
            "fik-ree",
            "fik-ree"
          ],
          [
            "مناسب‌تر",
            "mu-naa-sib-tar",
            "mu-naa-sib-tar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "سخن",
            "su-kha-ni",
            "su-khan"
          ],
          [
            "منظوم",
            "man-zoom",
            "man-zoom"
          ],
          [
            "است",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "wa shaa-yad ba ha-meen da-leel baa-shad ki an-waa-yi daa-nish-haa-yi-yi ba-sha-ree wa an-day-sha-haa-yi fal-sa-fee, dee-nee, si-yaa-see, ij-ti-maa-ee wa tar-bi-ya-tee dar qaa-li-bi nasr na-wish-ta shu-da ast.",
        "mean": "and perhaps for that reason the various fields of human knowledge and philosophical, religious, political, social and educational thought have been written in prose.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شاید",
            "shaa-yad",
            "shaa-yad"
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
            "دلیل",
            "da-leel",
            "da-leel"
          ],
          [
            "باشد",
            "baa-shad",
            "baa-shad",
            "bu-dan"
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
            "دانش‌های",
            "daa-nish-haa-yi-yi",
            "daa-nish-haa-yi"
          ],
          [
            "بشری",
            "ba-sha-ree",
            "ba-sha-ree"
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
            "فلسفی،",
            "fal-sa-fee",
            "fal-sa-fee"
          ],
          [
            "دینی،",
            "dee-nee",
            "dee-nee"
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
            "تربیتی",
            "tar-bi-ya-tee",
            "tar-bi-ya-tee"
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
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "نوشته",
            "na-wish-ta",
            "na-wish-ta",
            "na-wish-tan"
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
      }
    ],
    [
      {
        "say": "baa ta-waj-juh ba tar-zi kaar-bur-di ka-li-maat wa she-wa-haa-yi-yi ba-yaa-nee, ki na-wee-san-da-gaan dar na-wish-ta-ni ma-taa-li-bi khud daa-rand, daa-nish-man-daan nas-ri faa-ri-see-yi da-ree raa ba an-waa-yi zayr taq-seem kar-da and:",
        "mean": "Considering how writers use words and forms of expression in writing their material, scholars have divided Dari Persian prose into the following kinds:",
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
            "طرز",
            "tar-zi",
            "tarz"
          ],
          [
            "کاربرد",
            "kaar-bur-di",
            "kaar-burd"
          ],
          [
            "کلمات",
            "ka-li-maat",
            "ka-li-maat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شیوه‌های",
            "she-wa-haa-yi-yi",
            "she-wa-haa-yi"
          ],
          [
            "بیانی،",
            "ba-yaa-nee",
            "ba-yaa-nee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "نویسنده‌گان",
            "na-wee-san-da-gaan",
            "na-wee-san-da-gaan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "نوشتن",
            "na-wish-ta-ni",
            "na-wish-tan"
          ],
          [
            "مطالب",
            "ma-taa-li-bi",
            "ma-taa-lib"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "دارند،",
            "daa-rand",
            "daa-rand",
            "daash-tan"
          ],
          [
            "دانشمندان",
            "daa-nish-man-daan",
            "daa-nish-man-daan"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
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
            "زیر",
            "zayr",
            "zayr"
          ],
          [
            "تقسیم",
            "taq-seem",
            "taq-seem"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "kar-dan"
          ],
          [
            "اند:",
            "and",
            "and"
          ]
        ]
      }
    ],
    [
      {
        "say": "yak– nas-ri mur-sal yaa saa-da",
        "mean": "1. Plain or simple prose",
        "words": [
          [
            "۱-",
            "yak",
            "yak#digit"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مرسل",
            "mur-sal",
            "mur-sal"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "ساده",
            "saa-da",
            "saa-da"
          ]
        ]
      }
    ],
    [
      {
        "say": "nas-ri mur-sal yaa saa-da, nas-ree ast saa-da wa ro-shan baa jum-laa-ti ko-taah wa khaa-lee az waa-zha-haa-yi-yi dush-waa-ri a-ra-bee; ki dar aan sa-naa-yi-yi laf-zee wa ma-na-wee wa saj ba kaar bur-da na-may-sha-wad.",
        "mean": "Plain or simple prose is clear and simple prose with short sentences, free of difficult Arabic words, in which verbal and semantic figures and rhymed prose are not used.",
        "words": [
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مرسل",
            "mur-sal",
            "mur-sal"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "ساده،",
            "saa-da",
            "saa-da"
          ],
          [
            "نثری",
            "nas-ree",
            "nas-ree"
          ],
          [
            "است",
            "ast",
            "ast"
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
            "روشن",
            "ro-shan",
            "ro-shan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "جملات",
            "jum-laa-ti",
            "jum-laat"
          ],
          [
            "کوتاه",
            "ko-taah",
            "ko-taah"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خالی",
            "khaa-lee",
            "khaa-lee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "واژه‌های",
            "waa-zha-haa-yi-yi",
            "waa-zha-haa-yi"
          ],
          [
            "دشوار",
            "dush-waa-ri",
            "dush-waar"
          ],
          [
            "عربی؛",
            "a-ra-bee",
            "a-ra-bee"
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
            "صنایع",
            "sa-naa-yi-yi",
            "sa-naa-yi"
          ],
          [
            "لفظی",
            "laf-zee",
            "laf-zee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "معنوی",
            "ma-na-wee",
            "ma-na-wee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سجع",
            "saj",
            "saj"
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
            "برده",
            "bur-da",
            "bur-da",
            "bur-dan"
          ],
          [
            "نمی‌شود.",
            "na-may-sha-wad",
            "na-may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "dar een na-wi nasr, na-wee-san-da ma-qaa-si-di khud raa khay-lee saa-da wa bee-pee-raa-ya may-na-wee-sad wa az is-ti-maa-li ka-li-ma-haa wa i-baa-rat-haa-yi-yi ha-maa-hang wa waa-zha-haa wa is-ti-laa-haa-ti pay-chee-da, doo-ray may-gu-zee-nad.",
        "mean": "In this kind of prose, the writer states their purposes very simply and without ornament and avoids matching expressions and complicated words and terms.",
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
            "na-wi",
            "naw#type"
          ],
          [
            "نثر،",
            "nasr",
            "nasr"
          ],
          [
            "نویسنده",
            "na-wee-san-da",
            "na-wee-san-da"
          ],
          [
            "مقاصد",
            "ma-qaa-si-di",
            "ma-qaa-sid"
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
            "خیلی",
            "khay-lee",
            "khay-lee"
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
            "بی‌پیرایه",
            "bee-pee-raa-ya",
            "bee-pee-raa-ya"
          ],
          [
            "می‌نویسد",
            "may-na-wee-sad",
            "may-na-wee-sad",
            "na-wish-tan"
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
            "استعمال",
            "is-ti-maa-li",
            "is-ti-maal"
          ],
          [
            "کلمه‌ها",
            "ka-li-ma-haa",
            "ka-li-ma-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عبارت‌های",
            "i-baa-rat-haa-yi-yi",
            "i-baa-rat-haa-yi"
          ],
          [
            "هماهنگ",
            "ha-maa-hang",
            "ha-maa-hang"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "واژه‌ها",
            "waa-zha-haa",
            "waa-zha-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اصطلاحات",
            "is-ti-laa-haa-ti",
            "is-ti-laa-haat"
          ],
          [
            "پیچیده،",
            "pay-chee-da",
            "pay-chee-da"
          ],
          [
            "دوری",
            "doo-ray",
            "doo-ray"
          ],
          [
            "می‌گزیند.",
            "may-gu-zee-nad",
            "may-gu-zee-nad",
            "gu-zee-dan"
          ]
        ]
      },
      {
        "say": "na-mo-na-haa-yi-yi fa-raa-waa-nee az nas-ri mur-sal yaa saa-da raa dar ki-taab-haa-yee choon: sa-far-naa-ma-yi naa-sir-khus-raw, kee-mee-yaa-yi sa-aa-dat, as-raar-ut-taw-heed, taz-ki-rat-ul-aw-li-yaa wa ham-chu-naan dar agh-la-bi na-wish-ta-haa-yi-yi na-wee-san-da-gaa-ni mu-aa-sir may-ta-waan yaaft.",
        "mean": "Many examples of plain or simple prose can be found in books such as Nasir Khusraw's Safarnama, Kimiya-yi Sa'adat, Asrar al-Tawhid and Tazkirat al-Awliya, as well as in most writings by contemporary authors.",
        "words": [
          [
            "نمونه‌های",
            "na-mo-na-haa-yi-yi",
            "na-mo-na-haa-yi"
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
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مرسل",
            "mur-sal",
            "mur-sal"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "ساده",
            "saa-da",
            "saa-da"
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
            "کتاب‌هایی",
            "ki-taab-haa-yee",
            "ki-taab-haa-yee"
          ],
          [
            "چون:",
            "choon",
            "choon"
          ],
          [
            "سفرنامهٔ",
            "sa-far-naa-ma-yi",
            "sa-far-naa-ma-yi"
          ],
          [
            "ناصرخسرو،",
            "naa-sir-khus-raw",
            "naa-sir-khus-raw"
          ],
          [
            "کیمیای",
            "kee-mee-yaa-yi",
            "kee-mee-yaa"
          ],
          [
            "سعادت،",
            "sa-aa-dat",
            "sa-aa-dat"
          ],
          [
            "اسرارالتوحید،",
            "as-raar-ut-taw-heed",
            "as-raar-ut-taw-heed"
          ],
          [
            "تذکرهٔالاولیا",
            "taz-ki-rat-ul-aw-li-yaa",
            "taz-ki-rat-ul-aw-li-yaa"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "اغلب",
            "agh-la-bi",
            "agh-lab"
          ],
          [
            "نوشته‌های",
            "na-wish-ta-haa-yi-yi",
            "na-wish-ta-haa-yi"
          ],
          [
            "نویسنده‌گان",
            "na-wee-san-da-gaa-ni",
            "na-wee-san-da-gaan"
          ],
          [
            "معاصر",
            "mu-aa-sir",
            "mu-aa-sir"
          ],
          [
            "می‌توان",
            "may-ta-waan",
            "may-ta-waan"
          ],
          [
            "یافت.",
            "yaaft",
            "yaaft",
            "yaaf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "na-mo-na-yi nas-ri mur-sal az “mu-qad-da-ma-yi shaah-naa-ma-yi a-bo-man-so-ree”:",
        "mean": "An example of plain prose from the preface to the Shahnameh of Abu Mansur:",
        "words": [
          [
            "نمونهٔ",
            "na-mo-na-yi",
            "na-mo-na"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مرسل",
            "mur-sal",
            "mur-sal"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "«مقدمهٔ",
            "mu-qad-da-ma-yi",
            "mu-qad-da-ma-yi"
          ],
          [
            "شاهنامهٔ",
            "shaah-naa-ma-yi",
            "shaah-naa-ma-yi"
          ],
          [
            "ابومنصوری»:",
            "a-bo-man-so-ree",
            "a-bo-man-so-ree"
          ]
        ]
      }
    ],
    [
      {
        "say": "“...pas das-too-ri khaysh a-bo-man-soor al-ma-ma-ree raa bi-far-mood taa khu-daa-wan-daa-ni ku-tub raa, az dih-qaa-naan wa fa-ra-zaa-na-gaan wa ja-haan dee-da-gaan, az shahr-haa bi-yaa-wa-rad... wa bi-ni-shaa-nad bi-faa-raaz aa-war-da-ni een naa-ma-haa-yi-yi shaa-haan wa kaar-naa-ma-haa-yi shaan, wa zin-da-gaa-nee-yi har ya-kay az daad wa bee-daad wa aa-shoob wa jang wa aa-yeen,",
        "mean": "“Then he ordered his minister, Abu Mansur al-Ma'mari, to bring from the cities the masters of books, from among the landed nobles, sages and experienced men, and seat them to compile these accounts of kings, their deeds, and the life of each one, with its justice and injustice, turmoil, war and customs,",
        "words": [
          [
            "«...پس",
            "pas",
            "pas"
          ],
          [
            "دستور",
            "das-too-ri",
            "das-toor"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "ابومنصور",
            "a-bo-man-soor",
            "a-bo-man-soor"
          ],
          [
            "المعمری",
            "al-ma-ma-ree",
            "al-ma-ma-ree"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بفرمود",
            "bi-far-mood",
            "bi-far-mood",
            "far-moo-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "خداوندان",
            "khu-daa-wan-daa-ni",
            "khu-daa-wan-daan"
          ],
          [
            "کتب",
            "ku-tub",
            "ku-tub"
          ],
          [
            "را،",
            "raa",
            "raa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دهقانان",
            "dih-qaa-naan",
            "dih-qaa-naan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرزانه‌گان",
            "fa-ra-zaa-na-gaan",
            "fa-ra-zaa-na-gaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "دیده‌گان،",
            "dee-da-gaan",
            "dee-da-gaan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شهرها",
            "shahr-haa",
            "shahr-haa"
          ],
          [
            "بیاورد...",
            "bi-yaa-wa-rad",
            "bi-yaa-wa-rad",
            "aa-war-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بنشاند",
            "bi-ni-shaa-nad",
            "bi-ni-shaa-nad",
            "ni-shaan-dan"
          ],
          [
            "بفراز",
            "bi-faa-raaz",
            "bi-faa-raaz"
          ],
          [
            "آوردن",
            "aa-war-da-ni",
            "aa-war-dan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "نامه‌های",
            "naa-ma-haa-yi-yi",
            "naa-ma-haa-yi"
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
            "کارنامه‌های",
            "kaar-naa-ma-haa-yi",
            "kaar-naa-ma-haa"
          ],
          [
            "شان،",
            "shaan",
            "shaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زنده‌گانی",
            "zin-da-gaa-nee-yi",
            "zin-da-gaa-nee"
          ],
          [
            "هر",
            "har",
            "har"
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
            "داد",
            "daad",
            "daad",
            "daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بیداد",
            "bee-daad",
            "bee-daad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آشوب",
            "aa-shoob",
            "aa-shoob"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جنگ",
            "jang",
            "jang"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آیین،",
            "aa-yeen",
            "aa-yeen"
          ]
        ]
      },
      {
        "say": "az ka-see-ki nu-khus-teen an-dar ja-haan oo bood ki aa-yee-ni mar-day aa-word wa mar-du-maan az jaa-na-wa-raan pa-deed aa-word, taa yazd gir-di shah-ri-yaar ki aa-khi-ri mu-loo-ki a-jam bood...",
        "mean": "from the first person in the world who established the ways of mankind and distinguished people from animals, down to Yazdegerd the king, the last of the Persian kings.",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "کسی‌که",
            "ka-see-ki",
            "ka-see-ki"
          ],
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan"
          ],
          [
            "او",
            "oo",
            "oo"
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
            "آیین",
            "aa-yee-ni",
            "aa-yeen"
          ],
          [
            "مردی",
            "mar-day",
            "mar-day"
          ],
          [
            "آورد",
            "aa-word",
            "aa-word",
            "aa-war-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مردمان",
            "mar-du-maan",
            "mar-du-maan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "جانوران",
            "jaa-na-wa-raan",
            "jaa-na-wa-raan"
          ],
          [
            "پدید",
            "pa-deed",
            "pa-deed"
          ],
          [
            "آورد،",
            "aa-word",
            "aa-word",
            "aa-war-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "یزد",
            "yazd",
            "yazd"
          ],
          [
            "گرد",
            "gir-di",
            "gird"
          ],
          [
            "شهریار",
            "shah-ri-yaar",
            "shah-ri-yaar"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "آخر",
            "aa-khi-ri",
            "aa-khir"
          ],
          [
            "ملوک",
            "mu-loo-ki",
            "mu-look"
          ],
          [
            "عجم",
            "a-jam",
            "a-jam"
          ],
          [
            "بود...",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "wa een raa naa-mi shaah-naa-ma ni-haa-dand taa khu-daa-wan-daa-ni daa-nish an-da-reen ni-gaah ku-nand wa far-han-gi shaa-haan wa mih-ta-raan wa fa-ra-zaa-na-gaan... wa raan-da-ni kaar wa si-paah aa-raas-tan wa razm kar-dan wa shahr gu-shaa-dan wa keen khaas-tan wa sha-bee-khoon kar-dan wa a-zarm daash-tan wa khaas-taa-ree kar-dan, een ha-ma raa ba-deen naa-ma an-dar bi-yaa-band....”",
        "mean": "And they named it the Shahnameh so that people of learning might look in it and find the culture of kings, nobles and sages, the conduct of affairs, the ordering of armies, battle, taking cities, seeking vengeance, making night attacks, showing modesty and making requests - all of it in this book.”",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نام",
            "naa-mi",
            "naam"
          ],
          [
            "شاهنامه",
            "shaah-naa-ma",
            "shaah-naa-ma"
          ],
          [
            "نهادند",
            "ni-haa-dand",
            "ni-haa-dand",
            "ni-haa-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "خداوندان",
            "khu-daa-wan-daa-ni",
            "khu-daa-wan-daan"
          ],
          [
            "دانش",
            "daa-nish",
            "daa-nish"
          ],
          [
            "اندرین",
            "an-da-reen",
            "an-da-reen"
          ],
          [
            "نگاه",
            "ni-gaah",
            "ni-gaah"
          ],
          [
            "کنند",
            "ku-nand",
            "ku-nand",
            "kar-dan"
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
            "مهتران",
            "mih-ta-raan",
            "mih-ta-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرزانه‌گان...",
            "fa-ra-zaa-na-gaan",
            "fa-ra-zaa-na-gaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "راندن",
            "raan-da-ni",
            "raan-dan"
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
            "سپاه",
            "si-paah",
            "si-paah"
          ],
          [
            "آراستن",
            "aa-raas-tan",
            "aa-raas-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رزم",
            "razm",
            "razm"
          ],
          [
            "کردن",
            "kar-dan",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شهر",
            "shahr",
            "shahr"
          ],
          [
            "گشادن",
            "gu-shaa-dan",
            "gu-shaa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کین",
            "keen",
            "keen"
          ],
          [
            "خواستن",
            "khaas-tan",
            "khaas-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شبیخون",
            "sha-bee-khoon",
            "sha-bee-khoon"
          ],
          [
            "کردن",
            "kar-dan",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آزرم",
            "a-zarm",
            "a-zarm"
          ],
          [
            "داشتن",
            "daash-tan",
            "daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خواستاری",
            "khaas-taa-ree",
            "khaas-taa-ree"
          ],
          [
            "کردن،",
            "kar-dan",
            "kar-dan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بدین",
            "ba-deen",
            "ba-deen"
          ],
          [
            "نامه",
            "naa-ma",
            "naa-ma"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar"
          ],
          [
            "بیابند....»",
            "bi-yaa-band",
            "bi-yaa-band",
            "yaaf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "du– nas-ri mas-noo",
        "mean": "2. Ornate prose",
        "words": [
          [
            "۲-",
            "du",
            "du#digit"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مصنوع",
            "mas-noo",
            "mas-noo"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar een na-wi nasr, ha-maan goo-na ki az naa-mi aan pay-daa-st, na-wee-san-da a-laa-wa bar is-ti-faa-da az saj wa ba kaar bur-da-ni ash-aar wa sha-waa-hi-di a-ra-bee wa faa-ri-see, aa-yaa-ti qur-aa-nee, a-haa-dees, is-ti-laa-haa-ti il-mee, waa-zha-haa-yi-yi ghay-ri-mus-ta-mal, is-ti-aa-raat wa tash-bee-haa-ti mukh-ta-lif, ka-laa-mi khud raa ba shay-wa-yi mas-noo-ee baa pay-raa-ya wa za-raa-yi-fi a-da-bee wa sa-naa-yi-yi laf-zee may-aa-raa-yad.",
        "mean": "In this kind of prose, as its name suggests, the writer uses rhymed prose, Arabic and Persian poetry and quotations, Quranic verses, hadiths, technical terms, uncommon words, metaphors and various similes, adorning the writing artificially with literary refinements and verbal figures.",
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
            "na-wi",
            "naw#type"
          ],
          [
            "نثر،",
            "nasr",
            "nasr"
          ],
          [
            "همان",
            "ha-maan",
            "ha-maan"
          ],
          [
            "گونه",
            "goo-na",
            "goo-na"
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
            "پیداست،",
            "pay-daa-st",
            "pay-daa-st"
          ],
          [
            "نویسنده",
            "na-wee-san-da",
            "na-wee-san-da"
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
            "سجع",
            "saj",
            "saj"
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
            "اشعار",
            "ash-aar",
            "ash-aar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شواهد",
            "sha-waa-hi-di",
            "sha-waa-hid"
          ],
          [
            "عربی",
            "a-ra-bee",
            "a-ra-bee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فارسی،",
            "faa-ri-see",
            "faa-ri-see"
          ],
          [
            "آیات",
            "aa-yaa-ti",
            "aa-yaat"
          ],
          [
            "قرآنی،",
            "qur-aa-nee",
            "qur-aa-nee"
          ],
          [
            "احادیث،",
            "a-haa-dees",
            "a-haa-dees"
          ],
          [
            "اصطلاحات",
            "is-ti-laa-haa-ti",
            "is-ti-laa-haat"
          ],
          [
            "علمی،",
            "il-mee",
            "il-mee"
          ],
          [
            "واژه‌های",
            "waa-zha-haa-yi-yi",
            "waa-zha-haa-yi"
          ],
          [
            "غیرمستعمل،",
            "ghay-ri-mus-ta-mal",
            "ghay-ri-mus-ta-mal"
          ],
          [
            "استعارات",
            "is-ti-aa-raat",
            "is-ti-aa-raat"
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
            "مختلف،",
            "mukh-ta-lif",
            "mukh-ta-lif"
          ],
          [
            "کلام",
            "ka-laa-mi",
            "ka-laam"
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
            "مصنوعی",
            "mas-noo-ee",
            "mas-noo-ee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "پیرایه",
            "pay-raa-ya",
            "pay-raa-ya"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ظرایف",
            "za-raa-yi-fi",
            "za-raa-yif"
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
            "صنایع",
            "sa-naa-yi-yi",
            "sa-naa-yi"
          ],
          [
            "لفظی",
            "laf-zee",
            "laf-zee"
          ],
          [
            "می‌آراید.",
            "may-aa-raa-yad",
            "may-aa-raa-yad",
            "aa-raas-tan"
          ]
        ]
      },
      {
        "say": "een nasr ba du das-ta taq-seem may-sha-wad:",
        "mean": "This prose is divided into two groups:",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "نثر",
            "nasr",
            "nasr"
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
            "دسته",
            "das-ta",
            "das-ta"
          ],
          [
            "تقسیم",
            "taq-seem",
            "taq-seem"
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
        "say": "yak nas-ri mu-saj-ja yaa maw-zoon:",
        "mean": "One - rhymed or rhythmic prose",
        "words": [
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مسجع",
            "mu-saj-ja",
            "mu-saj-ja"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "موزون:",
            "maw-zoon",
            "maw-zoon"
          ]
        ]
      }
    ],
    [
      {
        "say": "nas-ri mu-saj-ja nas-ree ast ki jum-la-haa wa i-baa-rat-haa dar aan daa-raa-yi saj baa-shad.",
        "mean": "Rhymed prose is prose whose sentences and expressions contain rhyme.",
        "words": [
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مسجع",
            "mu-saj-ja",
            "mu-saj-ja"
          ],
          [
            "نثری",
            "nas-ree",
            "nas-ree"
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
            "جمله‌ها",
            "jum-la-haa",
            "jum-la-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عبارت‌ها",
            "i-baa-rat-haa",
            "i-baa-rat-haa"
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
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "سجع",
            "saj",
            "saj"
          ],
          [
            "باشد.",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "wa saj dar nasr, maa-nan-di qaa-fi-ya dar shi'r ast.",
        "mean": "Rhyme in prose is like rhyme in poetry.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سجع",
            "saj",
            "saj"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "نثر،",
            "nasr",
            "nasr"
          ],
          [
            "مانند",
            "maa-nan-di",
            "maa-nand"
          ],
          [
            "قافیه",
            "qaa-fi-ya",
            "qaa-fi-ya"
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
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "dar een na-wi nasr, na-wee-san-da ka-li-maa-ti ham-waz-nee raa ba naa-mi saj ba kaar may-ba-rad wa jum-laa-ti na-wish-ta-yi khaysh raa baa qa-ree-na-saa-zee aa-han-geen may-ku-nad.",
        "mean": "In this kind of prose the writer uses words of matching rhythm as rhyme and gives the written sentences a musical parallel structure.",
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
            "na-wi",
            "naw#type"
          ],
          [
            "نثر،",
            "nasr",
            "nasr"
          ],
          [
            "نویسنده",
            "na-wee-san-da",
            "na-wee-san-da"
          ],
          [
            "کلمات",
            "ka-li-maa-ti",
            "ka-li-maat"
          ],
          [
            "هموزنی",
            "ham-waz-nee",
            "ham-waz-nee"
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
            "سجع",
            "saj",
            "saj"
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
            "می‌برد",
            "may-ba-rad",
            "may-ba-rad",
            "bur-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جملات",
            "jum-laa-ti",
            "jum-laat"
          ],
          [
            "نوشتهٔ",
            "na-wish-ta-yi",
            "na-wish-ta",
            "na-wish-tan"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "قرینه‌سازی",
            "qa-ree-na-saa-zee",
            "qa-ree-na-saa-zee"
          ],
          [
            "آهنگین",
            "aa-han-geen",
            "aa-han-geen"
          ],
          [
            "می‌کند.",
            "may-ku-nad",
            "may-ku-nad",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "na-mo-na-haa-yi-yi zay-baa-yi nas-ri mu-saj-ja raa dar aa-saa-ri khaa-ja ab-dul-laah an-saa-ree, kash-ful-as-raar, as-raar-ut-taw-heed, ka-lee-la wa dim-na-yi bah-raam-shaa-hee, taz-ki-ra-yi aw-li-yaa-yi-yi shaykh fa-ree-dud-deen at-taar, gu-lis-taa-ni sa-dee wa ghay-ra, may-ta-waan yaaft.",
        "mean": "Fine examples of rhymed prose can be found in the works of Khwaja Abdullah Ansari, Kashf al-Asrar, Asrar al-Tawhid, the Kalila and Dimna of Bahramshah, Fariduddin Attar's Tazkirat al-Awliya, Sa'di's Gulistan and others.",
        "words": [
          [
            "نمونه‌های",
            "na-mo-na-haa-yi-yi",
            "na-mo-na-haa-yi"
          ],
          [
            "زیبای",
            "zay-baa-yi",
            "zay-baa"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مسجع",
            "mu-saj-ja",
            "mu-saj-ja"
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
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "خواجه",
            "khaa-ja",
            "khaa-ja"
          ],
          [
            "عبدالله",
            "ab-dul-laah",
            "ab-dul-laah"
          ],
          [
            "انصاری،",
            "an-saa-ree",
            "an-saa-ree"
          ],
          [
            "کشف‌الاسرار،",
            "kash-ful-as-raar",
            "kash-ful-as-raar"
          ],
          [
            "اسرارالتوحید،",
            "as-raar-ut-taw-heed",
            "as-raar-ut-taw-heed"
          ],
          [
            "کلیله",
            "ka-lee-la",
            "ka-lee-la"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دمنهٔ",
            "dim-na-yi",
            "dim-na-yi"
          ],
          [
            "بهرامشاهی،",
            "bah-raam-shaa-hee",
            "bah-raam-shaa-hee"
          ],
          [
            "تذکرهٔ",
            "taz-ki-ra-yi",
            "taz-ki-ra-yi"
          ],
          [
            "الاولیای",
            "aw-li-yaa-yi-yi",
            "aw-li-yaa-yi"
          ],
          [
            "شیخ",
            "shaykh",
            "shaykh"
          ],
          [
            "فریدالدین",
            "fa-ree-dud-deen",
            "fa-ree-dud-deen"
          ],
          [
            "عطار،",
            "at-taar",
            "at-taar"
          ],
          [
            "گلستان",
            "gu-lis-taa-ni",
            "gu-lis-taan"
          ],
          [
            "سعدی",
            "sa-dee",
            "sa-dee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غیره،",
            "ghay-ra",
            "ghay-ra"
          ],
          [
            "می‌توان",
            "may-ta-waan",
            "may-ta-waan"
          ],
          [
            "یافت.",
            "yaaft",
            "yaaft",
            "yaaf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "na-mo-na-yi nas-ri mu-saj-ja az “mu-qad-da-ma-yi kan-zus-saa-li-keen”:",
        "mean": "An example of rhymed prose from the preface to Kanz al-Salikin:",
        "words": [
          [
            "نمونهٔ",
            "na-mo-na-yi",
            "na-mo-na"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مسجع",
            "mu-saj-ja",
            "mu-saj-ja"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "«مقدمهٔ",
            "mu-qad-da-ma-yi",
            "mu-qad-da-ma-yi"
          ],
          [
            "کنزالسالکین»:",
            "kan-zus-saa-li-keen",
            "kan-zus-saa-li-keen"
          ]
        ]
      }
    ],
    [
      {
        "say": "“aql guft: gu-shaa-yin-da dar fah-mam, zu-daa-yin-da-yi rang wa wa wah-mam, paa bas-ta-yi tak-lee-faa-tam, shaa-yis-ta-yi tash-ree-faa-tam, gul-zaa-ri khi-rad-man-daa-nam, af-zaa-ri hu-nar-man-daa-nam....",
        "mean": "“Reason said: I open understanding, remove color and delusion, am bound by duties, worthy of honors, the garden of the wise and the tool of artists.",
        "words": [
          [
            "«عقل",
            "aql",
            "aql"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "گشاینده",
            "gu-shaa-yin-da",
            "gu-shaa-yin-da"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "فهمم،",
            "fah-mam",
            "fah-mam"
          ],
          [
            "زدایندهٔ",
            "zu-daa-yin-da-yi",
            "zu-daa-yin-da-yi"
          ],
          [
            "رنگ",
            "rang",
            "rang"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "همم،",
            "wah-mam",
            "wah-mam"
          ],
          [
            "پا",
            "paa",
            "paa"
          ],
          [
            "بستهٔ",
            "bas-ta-yi",
            "bas-ta",
            "bas-tan"
          ],
          [
            "تکلیفاتم،",
            "tak-lee-faa-tam",
            "tak-lee-faa-tam"
          ],
          [
            "شایستهٔ",
            "shaa-yis-ta-yi",
            "shaa-yis-ta-yi"
          ],
          [
            "تشریفاتم،",
            "tash-ree-faa-tam",
            "tash-ree-faa-tam"
          ],
          [
            "گلزار",
            "gul-zaa-ri",
            "gul-zaar"
          ],
          [
            "خرد‌مندانم،",
            "khi-rad-man-daa-nam",
            "khi-rad-man-daa-nam"
          ],
          [
            "افزار",
            "af-zaa-ri",
            "af-zaar"
          ],
          [
            "هنرمندانم....",
            "hu-nar-man-daa-nam",
            "hu-nar-man-daa-nam"
          ]
        ]
      },
      {
        "say": "ishq guft: de-waa-na-yi jur-a-yi zaw-qam, bar-aa-wa-rin-da-yi shaw-qam, zul-fi mu-hab-bat raa shaa-na-am wa za-ri ma-wad-dat raa daa-na-am.”",
        "mean": "Love said: I am mad for a sip of delight and awaken longing; I am a comb for the tresses of affection and a seed for the crop of friendship.”",
        "words": [
          [
            "عشق",
            "ishq",
            "ishq"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "دیوانهٔ",
            "de-waa-na-yi",
            "de-waa-na-yi"
          ],
          [
            "جرعهٔ",
            "jur-a-yi",
            "jur-a-yi"
          ],
          [
            "ذوقم،",
            "zaw-qam",
            "zaw-qam"
          ],
          [
            "برآورندهٔ",
            "bar-aa-wa-rin-da-yi",
            "bar-aa-wa-rin-da-yi"
          ],
          [
            "شوقم،",
            "shaw-qam",
            "shaw-qam"
          ],
          [
            "زلف",
            "zul-fi",
            "zulf"
          ],
          [
            "محبت",
            "mu-hab-bat",
            "mu-hab-bat"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "شانه‌ام",
            "shaa-na-am",
            "shaa-na-am"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زرع",
            "za-ri",
            "zar#crop"
          ],
          [
            "مودت",
            "ma-wad-dat",
            "ma-wad-dat"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "دانه‌ام.»",
            "daa-na-am",
            "daa-na-am"
          ]
        ]
      }
    ],
    [
      {
        "say": "du nas-ri mi-yaa-na:",
        "mean": "Two - middle prose",
        "words": [
          [
            "دو",
            "du",
            "du"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "میانه:",
            "mi-yaa-na",
            "mi-yaa-na"
          ]
        ]
      }
    ],
    [
      {
        "say": "nas-ri na-wee-san-da-gaan wa da-bee-raa-ni daw-ra-yi ghaz-na-wee raa ba naa-mi nas-ri mi-yaa-na yaad may-ku-nand;",
        "mean": "The prose of writers and secretaries of the Ghaznavid period is called middle prose,",
        "words": [
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "نویسنده‌گان",
            "na-wee-san-da-gaan",
            "na-wee-san-da-gaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دبیران",
            "da-bee-raa-ni",
            "da-bee-raan"
          ],
          [
            "دورهٔ",
            "daw-ra-yi",
            "daw-ra"
          ],
          [
            "غزنوی",
            "ghaz-na-wee",
            "ghaz-na-wee"
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
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "میانه",
            "mi-yaa-na",
            "mi-yaa-na"
          ],
          [
            "یاد",
            "yaad",
            "yaad"
          ],
          [
            "می‌کنند؛",
            "may-ku-nand",
            "may-ku-nand",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "zee-raa een na-wi nasr dar paa-yaa-ni daw-ra-yi nas-ri mur-sal wa aa-ghaa-zi nas-ri fan-nee, ba faa-si-la-yi nee-mi qarn, ba kaar gi-rif-ta shu-da ast.",
        "mean": "because this kind of prose was used for about half a century at the end of the plain-prose period and the beginning of technical prose.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
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
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "پایان",
            "paa-yaa-ni",
            "paa-yaan"
          ],
          [
            "دورهٔ",
            "daw-ra-yi",
            "daw-ra"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مرسل",
            "mur-sal",
            "mur-sal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آغاز",
            "aa-ghaa-zi",
            "aa-ghaaz"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "فنی،",
            "fan-nee",
            "fan-nee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "فاصلهٔ",
            "faa-si-la-yi",
            "faa-si-la-yi"
          ],
          [
            "نیم",
            "nee-mi",
            "neem"
          ],
          [
            "قرن،",
            "qarn",
            "qarn"
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
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "gi-rif-tan"
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
        "say": "nas-ri mi-yaa-na, ham saa-da-gee wa us-tu-waa-ree-yi nas-ri mur-sal raa daa-rad wa ham ni-shaa-na-haa-yee az aa-meekh-ta-gee-yi nazm wa nasr wa wu-roo-di lu-ghaa-ti a-ra-bee wa aa-yaat, a-haa-dee-si nas-ri fan-nee raa ba ham-raah daa-rad.",
        "mean": "Middle prose has both the simplicity and strength of plain prose and some signs of the mixing of verse and prose and the entry of Arabic words, verses and hadiths found in technical prose.",
        "words": [
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "میانه،",
            "mi-yaa-na",
            "mi-yaa-na"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "ساده‌گی",
            "saa-da-gee",
            "saa-da-gee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "استواری",
            "us-tu-waa-ree-yi",
            "us-tu-waa-ree"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مرسل",
            "mur-sal",
            "mur-sal"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
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
            "نشانه‌هایی",
            "ni-shaa-na-haa-yee",
            "ni-shaa-na-haa-yee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آمیخته‌گی",
            "aa-meekh-ta-gee-yi",
            "aa-meekh-ta-gee"
          ],
          [
            "نظم",
            "nazm",
            "nazm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ورود",
            "wu-roo-di",
            "wu-rood"
          ],
          [
            "لغات",
            "lu-ghaa-ti",
            "lu-ghaat"
          ],
          [
            "عربی",
            "a-ra-bee",
            "a-ra-bee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آیات،",
            "aa-yaat",
            "aa-yaat"
          ],
          [
            "احادیث",
            "a-haa-dee-si",
            "a-haa-dees"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "فنی",
            "fan-nee",
            "fan-nee"
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
            "همراه",
            "ham-raah",
            "ham-raah"
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
        "say": "taa-ree-khi bay-ha-kee, si-yaa-sat-naa-ma wa qaa-boos-naa-ma az na-mo-na-haa-yi-yi bur-jis-ta-yi een naw and.",
        "mean": "Tarikh-i Bayhaqi, Siyasatnama and Qabusnama are prominent examples of this kind.",
        "words": [
          [
            "تاریخ",
            "taa-ree-khi",
            "taa-reekh"
          ],
          [
            "بیهقی،",
            "bay-ha-kee",
            "bay-ha-kee"
          ],
          [
            "سیاست‌نامه",
            "si-yaa-sat-naa-ma",
            "si-yaa-sat-naa-ma"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قابوس‌نامه",
            "qaa-boos-naa-ma",
            "qaa-boos-naa-ma"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نمونه‌های",
            "na-mo-na-haa-yi-yi",
            "na-mo-na-haa-yi"
          ],
          [
            "برجستهٔ",
            "bur-jis-ta-yi",
            "bur-jis-ta-yi"
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
            "اند.",
            "and",
            "and"
          ]
        ]
      }
    ],
    [
      {
        "say": "na-mo-na-yi nas-ri mi-yaa-na az “taa-ree-khi bay-ha-kee”:",
        "mean": "An example of middle prose from Tarikh-i Bayhaqi:",
        "words": [
          [
            "نمونهٔ",
            "na-mo-na-yi",
            "na-mo-na"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "میانه",
            "mi-yaa-na",
            "mi-yaa-na"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "«تاریخ",
            "taa-ree-khi",
            "taa-reekh"
          ],
          [
            "بیهقی»:",
            "bay-ha-kee",
            "bay-ha-kee"
          ]
        ]
      }
    ],
    [
      {
        "say": "“...dee-gar roz ba dar-gaah aa-ma-dee wa baa khi-lat na-bood, ki bar aa-dat rooz-gaa-ri gu-zash-ta qa-baa-yee saakh-ta kard das-taa-ree-yi nay-shaa-poo-ree yaa qaa-yi-nee, ki een mih-tar raa ra-zi-yal-laah an-ho baa een jaa-ma-haa dee-dan-dee ba rooz-gaar.",
        "mean": "“The next day he would come to court without a robe of honor, following the custom of former times, wearing a coat and a Nishapuri or Qayini turban; in those days they saw this lord, may God be pleased with him, in these clothes.",
        "words": [
          [
            "«...دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "روز",
            "roz",
            "roz"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "درگاه",
            "dar-gaah",
            "dar-gaah"
          ],
          [
            "آمدی",
            "aa-ma-dee",
            "aa-ma-dee",
            "aa-ma-dan"
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
            "خلعت",
            "khi-lat",
            "khi-lat"
          ],
          [
            "نبود،",
            "na-bood",
            "na-bood",
            "bu-dan"
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
            "عادتِ",
            "aa-dat",
            "aa-dat"
          ],
          [
            "روزگار",
            "rooz-gaa-ri",
            "rooz-gaar"
          ],
          [
            "گذشته",
            "gu-zash-ta",
            "gu-zash-ta",
            "gu-zash-tan"
          ],
          [
            "قبایی",
            "qa-baa-yee",
            "qa-baa-yee"
          ],
          [
            "ساخته",
            "saakh-ta",
            "saakh-ta",
            "saakh-tan"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "kar-dan"
          ],
          [
            "دستاری",
            "das-taa-ree-yi",
            "das-taa-ree"
          ],
          [
            "نیشاپوری",
            "nay-shaa-poo-ree",
            "nay-shaa-poo-ree"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "قاینی،",
            "qaa-yi-nee",
            "qaa-yi-nee"
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
            "مهتر",
            "mih-tar",
            "mih-tar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "رضی‌الله",
            "ra-zi-yal-laah",
            "ra-zi-yal-laah"
          ],
          [
            "عنه",
            "an-ho",
            "an-ho"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "جامه‌ها",
            "jaa-ma-haa",
            "jaa-ma-haa"
          ],
          [
            "دیدندی",
            "dee-dan-dee",
            "dee-dan-dee",
            "dee-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "روزگار.",
            "rooz-gaar",
            "rooz-gaar"
          ]
        ]
      },
      {
        "say": "wa az si-qaa-ti oo shi-nee-dam, cho bo ib-raa-hee-mi qaa-yi-nee kad-khu-daa-yash wa dee-ga-raan, ki beest wa see qa-baa bood oo raa yak rang ki yak saal may-po-shee-dee wa mar-du-maan chu-naan daa-nis-tan-dee ki yak qa-baa-st wa guf-tan-dee: sub-haa-nal-laah al-laah!....”",
        "mean": "And I heard from his trusted men, such as Abu Ibrahim Qayini, his steward, and others, that he had twenty or thirty coats of one color, which he would wear for a year, and people thought it was one coat and said, ‘Glory be to God!’”",
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
            "ثقاتِ",
            "si-qaa-ti",
            "si-qaa-ti"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "شنیدم،",
            "shi-nee-dam",
            "shi-nee-dam",
            "shi-nee-dan"
          ],
          [
            "چو",
            "cho",
            "cho"
          ],
          [
            "بو",
            "bo",
            "bo"
          ],
          [
            "ابراهیم",
            "ib-raa-hee-mi",
            "ib-raa-heem"
          ],
          [
            "قاینی",
            "qaa-yi-nee",
            "qaa-yi-nee"
          ],
          [
            "کدخدایش",
            "kad-khu-daa-yash",
            "kad-khu-daa-yash"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دیگران،",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "سی",
            "see",
            "see"
          ],
          [
            "قبا",
            "qa-baa",
            "qa-baa"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
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
            "یک",
            "yak",
            "yak"
          ],
          [
            "رنگ",
            "rang",
            "rang"
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
            "سال",
            "saal",
            "saal"
          ],
          [
            "می‌پوشیدی",
            "may-po-shee-dee",
            "may-po-shee-dee",
            "po-shee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مردمان",
            "mar-du-maan",
            "mar-du-maan"
          ],
          [
            "چنان",
            "chu-naan",
            "chu-naan"
          ],
          [
            "دانستندی",
            "daa-nis-tan-dee",
            "daa-nis-tan-dee",
            "daa-nis-tan"
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
            "قباست",
            "qa-baa-st",
            "qa-baa-st"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گفتندی:",
            "guf-tan-dee",
            "guf-tan-dee",
            "guf-tan"
          ],
          [
            "سبحان",
            "sub-haa-nal-laah",
            "sub-haa-nal-laah"
          ],
          [
            "الله!....»",
            "al-laah",
            "al-laah"
          ]
        ]
      }
    ],
    [
      {
        "say": "sih– nas-ri fan-nee",
        "mean": "3. Technical prose",
        "words": [
          [
            "۳-",
            "sih",
            "sih#digit"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "فنی",
            "fan-nee",
            "fan-nee"
          ]
        ]
      }
    ],
    [
      {
        "say": "nas-ri fan-nee nas-ree ast ki may-khaa-had ba shi'r naz-deek sha-wad wa ba een ji-hat, ham az na-za-ri zu-baan wa fikr wa ham az na-za-ri way-zha-gee-haa-yi-yi a-da-bee na-may-ta-waan aan raa nasr daa-nist;",
        "mean": "Technical prose is prose that seeks to approach poetry, and for this reason, in both language and thought and in its literary features, it cannot be regarded simply as prose;",
        "words": [
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "فنی",
            "fan-nee",
            "fan-nee"
          ],
          [
            "نثری",
            "nas-ree",
            "nas-ree"
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
            "می‌خواهد",
            "may-khaa-had",
            "may-khaa-had",
            "khaas-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "شعر",
            "shi'r",
            "shi'r"
          ],
          [
            "نزدیک",
            "naz-deek",
            "naz-deek"
          ],
          [
            "شود",
            "sha-wad",
            "sha-wad",
            "shu-dan"
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
            "این",
            "een",
            "een"
          ],
          [
            "جهت،",
            "ji-hat",
            "ji-hat"
          ],
          [
            "هم",
            "ham",
            "ham"
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
            "هم",
            "ham",
            "ham"
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
            "ویژه‌گی‌های",
            "way-zha-gee-haa-yi-yi",
            "way-zha-gee-haa-yi"
          ],
          [
            "ادبی",
            "a-da-bee",
            "a-da-bee"
          ],
          [
            "نمی‌توان",
            "na-may-ta-waan",
            "na-may-ta-waan"
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
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "دانست؛",
            "daa-nist",
            "daa-nist",
            "daa-nis-tan"
          ]
        ]
      },
      {
        "say": "bal-ki nas-ree ast shi-rwaar ki daa-raa-yi zu-baa-ni tas-wee-ree wa sar-shaar az aa-raa-ya-haa-yi-yi a-da-bee ast.",
        "mean": "rather, it is poetic prose with figurative language, rich in literary devices.",
        "words": [
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "نثری",
            "nas-ree",
            "nas-ree"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "شعروار",
            "shi-rwaar",
            "shi-rwaar"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
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
            "سرشار",
            "sar-shaar",
            "sar-shaar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آرایه‌های",
            "aa-raa-ya-haa-yi-yi",
            "aa-raa-ya-haa-yi"
          ],
          [
            "ادبی",
            "a-da-bee",
            "a-da-bee"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "dar een na-wi nasr az aa-yaat wa a-haa-dees wa zar-bul-ma-sal-haa-yi-yi a-ra-bee zi-yaad is-ti-faa-da may-sha-wad wa shi'r wa nasr baa ham may-aa-mee-zad.",
        "mean": "In this kind of prose, Quranic verses, hadiths and Arabic proverbs are used frequently, and poetry and prose are blended.",
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
            "na-wi",
            "naw#type"
          ],
          [
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آیات",
            "aa-yaat",
            "aa-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احادیث",
            "a-haa-dees",
            "a-haa-dees"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ضرب‌المثل‌های",
            "zar-bul-ma-sal-haa-yi-yi",
            "zar-bul-ma-sal-haa-yi"
          ],
          [
            "عربی",
            "a-ra-bee",
            "a-ra-bee"
          ],
          [
            "زیاد",
            "zi-yaad",
            "zi-yaad"
          ],
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "می‌آمیزد.",
            "may-aa-mee-zad",
            "may-aa-mee-zad",
            "aa-meekh-tan"
          ]
        ]
      },
      {
        "say": "ki-taab-haa-yee na-zeer: ka-lee-la wa dim-na, ma-qaa-maa-ti ha-mee-dee, marz-baan-naa-ma, at-ta-was-sul i-laa at-ta-ras-sul, taa-ree-khi was-saaf wa dur-ra-yi naa-di-ra na-mo-na-haa-yay a-laa az nas-ri mu-ta-kal-lif yaa fan-nee as-tand.",
        "mean": "Books such as Kalila and Dimna, Maqamat-i Hamidi, Marzban-nama, Al-Tawassul ila al-Tarassul, Tarikh-i Wassaf and Durra-yi Nadira are excellent examples of elaborate or technical prose.",
        "words": [
          [
            "کتاب‌هایی",
            "ki-taab-haa-yee",
            "ki-taab-haa-yee"
          ],
          [
            "نظیر:",
            "na-zeer",
            "na-zeer"
          ],
          [
            "کلیله",
            "ka-lee-la",
            "ka-lee-la"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دمنه،",
            "dim-na",
            "dim-na"
          ],
          [
            "مقامات",
            "ma-qaa-maa-ti",
            "ma-qaa-maat"
          ],
          [
            "حمیدی،",
            "ha-mee-dee",
            "ha-mee-dee"
          ],
          [
            "مرزبان‌نامه،",
            "marz-baan-naa-ma",
            "marz-baan-naa-ma"
          ],
          [
            "التوسل",
            "at-ta-was-sul",
            "at-ta-was-sul"
          ],
          [
            "الی",
            "i-laa",
            "i-laa"
          ],
          [
            "الترسل،",
            "at-ta-ras-sul",
            "at-ta-ras-sul"
          ],
          [
            "تاریخ",
            "taa-ree-khi",
            "taa-reekh"
          ],
          [
            "وصاف",
            "was-saaf",
            "was-saaf"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "درهٔ",
            "dur-ra-yi",
            "dur-ra-yi"
          ],
          [
            "نادره",
            "naa-di-ra",
            "naa-di-ra"
          ],
          [
            "نمونه‌هایی",
            "na-mo-na-haa-yay",
            "na-mo-na-haa-yay"
          ],
          [
            "اعلی",
            "a-laa",
            "a-laa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "متکلف",
            "mu-ta-kal-lif",
            "mu-ta-kal-lif"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "فنی",
            "fan-nee",
            "fan-nee"
          ],
          [
            "استند.",
            "as-tand",
            "as-tand",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "na-mo-na-yi nas-ri fan-nee az ki-taab “ka-lee-la wa dim-na”:",
        "mean": "An example of technical prose from Kalila and Dimna:",
        "words": [
          [
            "نمونهٔ",
            "na-mo-na-yi",
            "na-mo-na"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "فنی",
            "fan-nee",
            "fan-nee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کتاب",
            "ki-taab",
            "ki-taab"
          ],
          [
            "«کلیله",
            "ka-lee-la",
            "ka-lee-la"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دمنه»:",
            "dim-na",
            "dim-na"
          ]
        ]
      }
    ],
    [
      {
        "say": "“...wa az taq-ree-bi hasht kas ha-zar waa-jib ast:",
        "mean": "“One must beware of drawing eight kinds of people close:",
        "words": [
          [
            "«...و",
            "wa",
            "wa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "تقریب",
            "taq-ree-bi",
            "taq-reeb"
          ],
          [
            "هشت",
            "hasht",
            "hasht"
          ],
          [
            "کس",
            "kas",
            "kas"
          ],
          [
            "حذر",
            "ha-zar",
            "ha-zar"
          ],
          [
            "واجب",
            "waa-jib",
            "waa-jib"
          ],
          [
            "است:",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "aw-wal aan-ki ni-ma-ti mun-i-maan raa sabk daa-rad wa kuf-raa-ni aan sabk dast di-had.",
        "mean": "first, one who treats a benefactor's favor lightly and readily shows ingratitude;",
        "words": [
          [
            "اول",
            "aw-wal",
            "aw-wal"
          ],
          [
            "آن‌که",
            "aan-ki",
            "aan-ki"
          ],
          [
            "نعمت",
            "ni-ma-ti",
            "ni-mat"
          ],
          [
            "منعمان",
            "mun-i-maan",
            "mun-i-maan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "سبک",
            "sabk",
            "sabk"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کفران",
            "kuf-raa-ni",
            "kuf-raan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "سبک",
            "sabk",
            "sabk"
          ],
          [
            "دست",
            "dast",
            "dast"
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
        "say": "wa du-wum aan-ki bee-maw-ji-bee dar khashm sha-wad.",
        "mean": "second, one who becomes angry without cause;",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دوم",
            "du-wum",
            "du-wum"
          ],
          [
            "آن‌که",
            "aan-ki",
            "aan-ki"
          ],
          [
            "بی‌موجبی",
            "bee-maw-ji-bee",
            "bee-maw-ji-bee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "خشم",
            "khashm",
            "khashm"
          ],
          [
            "شود.",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "sa-wum aan-ki ba um-ri da-raaz magh-roor baa-shad wa khud raa az ri-aa-ya-ti hu-qooq bee-ni-yaaz pin-daa-rad.",
        "mean": "third, one who is deceived by long life and considers himself free of the need to respect rights;",
        "words": [
          [
            "سوم",
            "sa-wum",
            "sa-wum"
          ],
          [
            "آن‌که",
            "aan-ki",
            "aan-ki"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "عمر",
            "um-ri",
            "umr"
          ],
          [
            "دراز",
            "da-raaz",
            "da-raaz"
          ],
          [
            "مغرور",
            "magh-roor",
            "magh-roor"
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
            "رعایت",
            "ri-aa-ya-ti",
            "ri-aa-yat"
          ],
          [
            "حقوق",
            "hu-qooq",
            "hu-qooq"
          ],
          [
            "بی‌نیاز",
            "bee-ni-yaaz",
            "bee-ni-yaaz"
          ],
          [
            "پندارد.",
            "pin-daa-rad",
            "pin-daa-rad",
            "pin-daash-tan"
          ]
        ]
      },
      {
        "say": "chi-haa-rum aan-ki raa-hi ghadr pay-shi oo gu-shaa-da wa sahl na-maa-yad.",
        "mean": "fourth, one to whom the path of treachery appears open and easy;",
        "words": [
          [
            "چهارم",
            "chi-haa-rum",
            "chi-haa-rum"
          ],
          [
            "آن‌که",
            "aan-ki",
            "aan-ki"
          ],
          [
            "راه",
            "raa-hi",
            "raah"
          ],
          [
            "غدر",
            "ghadr",
            "ghadr"
          ],
          [
            "پیش",
            "pay-shi",
            "paysh"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "گشاده",
            "gu-shaa-da",
            "gu-shaa-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سهل",
            "sahl",
            "sahl"
          ],
          [
            "نماید.",
            "na-maa-yad",
            "na-maa-yad",
            "na-mo-dan"
          ]
        ]
      },
      {
        "say": "wa pan-jum aan-ki bi-naa-yi-yi kaar-haa-yi khud bar a-daa-wat ni-had wa nuh bar raas-tee wa di-yaa-nat.",
        "mean": "fifth, one who bases his actions on hostility, not honesty and piety;",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پنجم",
            "pan-jum",
            "pan-jum"
          ],
          [
            "آن‌که",
            "aan-ki",
            "aan-ki"
          ],
          [
            "بنای",
            "bi-naa-yi-yi",
            "bi-naa-yi"
          ],
          [
            "کارهای",
            "kaar-haa-yi",
            "kaar-haa"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "عداوت",
            "a-daa-wat",
            "a-daa-wat"
          ],
          [
            "نهد",
            "ni-had",
            "ni-had",
            "ni-haa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نه",
            "nuh",
            "nuh"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "راستی",
            "raas-tee",
            "raas-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دیانت.",
            "di-yaa-nat",
            "di-yaa-nat"
          ]
        ]
      },
      {
        "say": "wa sha-shum aan-ki dar ab-waa-bi sahw rish-ta baa khaysh-tan fa-raakh gee-rad wa qib-la-yi dil ha-waa raa saa-zad.",
        "mean": "sixth, one who gives himself free rein in negligence and makes desire the direction of his heart;",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ششم",
            "sha-shum",
            "sha-shum"
          ],
          [
            "آن‌که",
            "aan-ki",
            "aan-ki"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ابواب",
            "ab-waa-bi",
            "ab-waab"
          ],
          [
            "سهو",
            "sahw",
            "sahw"
          ],
          [
            "رشته",
            "rish-ta",
            "rish-ta"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "خویشتن",
            "khaysh-tan",
            "khaysh-tan"
          ],
          [
            "فراخ",
            "fa-raakh",
            "fa-raakh"
          ],
          [
            "گیرد",
            "gee-rad",
            "gee-rad",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قبلهٔ",
            "qib-la-yi",
            "qib-la-yi"
          ],
          [
            "دل",
            "dil",
            "dil"
          ],
          [
            "هوا",
            "ha-waa",
            "ha-waa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "سازد.",
            "saa-zad",
            "saa-zad",
            "saakh-tan"
          ]
        ]
      },
      {
        "say": "wa haf-tum aan-ki bee-sa-ba-bee dar mar-du-maan bad-gu-maan gar-dad wa bee-da-lee-li ro-shan ah-li si-qa raa mut-ta-ham gar-daa-nad.",
        "mean": "seventh, one who becomes suspicious of people without cause and accuses trustworthy people without clear proof;",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هفتم",
            "haf-tum",
            "haf-tum"
          ],
          [
            "آن‌که",
            "aan-ki",
            "aan-ki"
          ],
          [
            "بی‌سببی",
            "bee-sa-ba-bee",
            "bee-sa-ba-bee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مردمان",
            "mar-du-maan",
            "mar-du-maan"
          ],
          [
            "بدگمان",
            "bad-gu-maan",
            "bad-gu-maan"
          ],
          [
            "گردد",
            "gar-dad",
            "gar-dad",
            "gar-dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بی‌دلیل",
            "bee-da-lee-li",
            "bee-da-leel"
          ],
          [
            "روشن",
            "ro-shan",
            "ro-shan"
          ],
          [
            "اهل",
            "ah-li",
            "ahl"
          ],
          [
            "ثقت",
            "si-qa",
            "si-qa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "متهم",
            "mut-ta-ham",
            "mut-ta-ham"
          ],
          [
            "گرداند.",
            "gar-daa-nad",
            "gar-daa-nad",
            "gar-daan-dan"
          ]
        ]
      },
      {
        "say": "hash-tum aan-ki ba qil-la-ti ha-yaa maz-koor baa-shad wa ba sho-khee wa wa-qaa-hat mash-hoor.”",
        "mean": "and eighth, one known for having little modesty and famous for insolence and shamelessness.”",
        "words": [
          [
            "هشتم",
            "hash-tum",
            "hash-tum"
          ],
          [
            "آن‌که",
            "aan-ki",
            "aan-ki"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "قلت",
            "qil-la-ti",
            "qil-lat"
          ],
          [
            "حیا",
            "ha-yaa",
            "ha-yaa"
          ],
          [
            "مذکور",
            "maz-koor",
            "maz-koor"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "شوخی",
            "sho-khee",
            "sho-khee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "وقاحت",
            "wa-qaa-hat",
            "wa-qaa-hat"
          ],
          [
            "مشهور.»",
            "mash-hoor",
            "mash-hoor"
          ]
        ]
      }
    ],
    [
      {
        "say": "chaar nas-ri ja-deed",
        "mean": "4. Modern prose",
        "words": [
          [
            "۴",
            "chaar",
            "chaar"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "جدید",
            "ja-deed",
            "ja-deed"
          ]
        ]
      }
    ],
    [
      {
        "say": "nas-ri ja-deed kam-aa-besh dam-baa-la-yi ha-maan nas-ri mur-sal yaa saa-da ast ki baa rawsh-haa-yi-yi naw wa u-sool wa ma-baa-nee-yi ja-deed dar as-ri maa ba kaar gi-rif-ta shu-da ast.",
        "mean": "Modern prose is more or less a continuation of plain or simple prose, used in our age with new methods, principles and foundations.",
        "words": [
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "جدید",
            "ja-deed",
            "ja-deed"
          ],
          [
            "کمابیش",
            "kam-aa-besh",
            "kam-aa-besh"
          ],
          [
            "دنبالهٔ",
            "dam-baa-la-yi",
            "dam-baa-la-yi"
          ],
          [
            "همان",
            "ha-maan",
            "ha-maan"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "مرسل",
            "mur-sal",
            "mur-sal"
          ],
          [
            "یا",
            "yaa",
            "yaa"
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
            "روش‌های",
            "rawsh-haa-yi-yi",
            "rawsh-haa-yi"
          ],
          [
            "نو",
            "naw",
            "naw"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اصول",
            "u-sool",
            "u-sool"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مبانی",
            "ma-baa-nee-yi",
            "ma-baa-nee"
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
            "عصر",
            "as-ri",
            "asr"
          ],
          [
            "ما",
            "maa",
            "maa"
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
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "gi-rif-tan"
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
        "say": "een nasr ki dar af-ghaa-nis-taan baa na-mo-na-haa-yi-yi nas-ri rooz-naa-ma-ni-gaa-ree-yi mah-mood tar-zee dar ja-ree-da-yi si-raaj al-akh-baar aa-ghaaz shu-da ast, baa tagh-yee-raat wa ta-ha-wu-laa-ti chan-day taa im-roz i-daa-ma daa-rad.",
        "mean": "In Afghanistan this prose began with examples of Mahmud Tarzi's journalistic prose in the newspaper Siraj al-Akhbar and has continued with a number of changes and developments to the present.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "نثر",
            "nasr",
            "nasr"
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
            "نمونه‌های",
            "na-mo-na-haa-yi-yi",
            "na-mo-na-haa-yi"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "روزنامه‌نگاری",
            "rooz-naa-ma-ni-gaa-ree-yi",
            "rooz-naa-ma-ni-gaa-ree"
          ],
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
            "در",
            "dar",
            "dar"
          ],
          [
            "جریدهٔ",
            "ja-ree-da-yi",
            "ja-ree-da"
          ],
          [
            "سراج",
            "si-raaj",
            "si-raaj"
          ],
          [
            "الاخبار",
            "al-akh-baar",
            "al-akh-baar"
          ],
          [
            "آغاز",
            "aa-ghaaz",
            "aa-ghaaz"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "است،",
            "ast",
            "ast"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "تغییرات",
            "tagh-yee-raat",
            "tagh-yee-raat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تحولات",
            "ta-ha-wu-laa-ti",
            "ta-ha-wu-laat"
          ],
          [
            "چندی",
            "chan-day",
            "chan-day"
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
            "ادامه",
            "i-daa-ma",
            "i-daa-ma"
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
        "say": "dar een na-wi nasr sa-naa-yi-yi a-da-bee, ka-li-maa-ti dush-waa-ri a-ra-bee, aa-yaat, a-haa-dees, ri-waa-yaat wa am-saal wa hukm ba kaar gi-rif-ta na-may-sha-wad",
        "mean": "In this kind of prose, literary devices, difficult Arabic words, Quranic verses, hadiths, traditions, proverbs and maxims are not used,",
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
            "na-wi",
            "naw#type"
          ],
          [
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "صنایع",
            "sa-naa-yi-yi",
            "sa-naa-yi"
          ],
          [
            "ادبی،",
            "a-da-bee",
            "a-da-bee"
          ],
          [
            "کلمات",
            "ka-li-maa-ti",
            "ka-li-maat"
          ],
          [
            "دشوار",
            "dush-waa-ri",
            "dush-waar"
          ],
          [
            "عربی،",
            "a-ra-bee",
            "a-ra-bee"
          ],
          [
            "آیات،",
            "aa-yaat",
            "aa-yaat"
          ],
          [
            "احادیث،",
            "a-haa-dees",
            "a-haa-dees"
          ],
          [
            "روایات",
            "ri-waa-yaat",
            "ri-waa-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امثال",
            "am-saal",
            "am-saal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حکم",
            "hukm",
            "hukm"
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
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "gi-rif-tan"
          ],
          [
            "نمی‌شود",
            "na-may-sha-wad",
            "na-may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "wa na-wee-san-da aan-chi raa ki may-khaa-had bi-go-yad, baa zu-baan wa ba-yaa-ni saa-da ba rish-ta-yi tah-reer may-aa-wa-rad;",
        "mean": "and the writer puts what they want to say into writing in simple language and expression;",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نویسنده",
            "na-wee-san-da",
            "na-wee-san-da"
          ],
          [
            "آن‌چه",
            "aan-chi",
            "aan-chi"
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
            "می‌خواهد",
            "may-khaa-had",
            "may-khaa-had",
            "khaas-tan"
          ],
          [
            "بگوید،",
            "bi-go-yad",
            "bi-go-yad",
            "guf-tan"
          ],
          [
            "با",
            "baa",
            "baa"
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
            "بیان",
            "ba-yaa-ni",
            "ba-yaan"
          ],
          [
            "ساده",
            "saa-da",
            "saa-da"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "رشتهٔ",
            "rish-ta-yi",
            "rish-ta-yi"
          ],
          [
            "تحریر",
            "tah-reer",
            "tah-reer"
          ],
          [
            "می‌آورد؛",
            "may-aa-wa-rad",
            "may-aa-wa-rad",
            "aa-war-dan"
          ]
        ]
      },
      {
        "say": "am-maa ta-daa-dee az waa-zha-haa, is-ti-laa-haat wa ta-bee-raa-ti ow-ro-paa-yee dar aan raah may-yaa-bad;",
        "mean": "however, some European words, terms and expressions find their way into it;",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "تعدادی",
            "ta-daa-dee",
            "ta-daa-dee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "واژه‌ها،",
            "waa-zha-haa",
            "waa-zha-haa"
          ],
          [
            "اصطلاحات",
            "is-ti-laa-haat",
            "is-ti-laa-haat"
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
            "اروپایی",
            "ow-ro-paa-yee",
            "ow-ro-paa-yee"
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
            "راه",
            "raah",
            "raah"
          ],
          [
            "می‌یابد؛",
            "may-yaa-bad",
            "may-yaa-bad",
            "yaaf-tan"
          ]
        ]
      },
      {
        "say": "ham-chu-naan ri-aa-ya-ti ni-shaa-na-haa-yi-yi ni-gaa-ri-shee dar een naw ba wuf-rat dee-da may-sha-wad.",
        "mean": "punctuation is also used abundantly in this kind of prose.",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "رعایت",
            "ri-aa-ya-ti",
            "ri-aa-yat"
          ],
          [
            "نشانه‌های",
            "ni-shaa-na-haa-yi-yi",
            "ni-shaa-na-haa-yi"
          ],
          [
            "نگارشی",
            "ni-gaa-ri-shee",
            "ni-gaa-ri-shee"
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
            "نوع",
            "naw",
            "naw#type"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "وفرت",
            "wuf-rat",
            "wuf-rat"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-dan"
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
        "say": "na-mo-na-yi nas-ri ja-deed az daa-staa-ni ko-taah “gur-ba-yi chi-haa-rum” na-wish-ta-yi daak-toor ak-ram us-maan",
        "mean": "An example of modern prose from the short story “The Fourth Cat” by Dr. Akram Osman",
        "words": [
          [
            "نمونهٔ",
            "na-mo-na-yi",
            "na-mo-na"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "جدید",
            "ja-deed",
            "ja-deed"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "داستان",
            "daa-staa-ni",
            "daa-staan"
          ],
          [
            "کوتاه",
            "ko-taah",
            "ko-taah"
          ],
          [
            "«گربهٔ",
            "gur-ba-yi",
            "gur-ba-yi"
          ],
          [
            "چهارم»",
            "chi-haa-rum",
            "chi-haa-rum"
          ],
          [
            "نوشتهٔ",
            "na-wish-ta-yi",
            "na-wish-ta",
            "na-wish-tan"
          ],
          [
            "دکتور",
            "daak-toor",
            "daak-toor"
          ],
          [
            "اکرم",
            "ak-ram",
            "ak-ram"
          ],
          [
            "عثمان",
            "us-maan",
            "us-maan"
          ]
        ]
      }
    ],
    [
      {
        "say": "“it-ti-faa-qan dar ya-kay az roz-haa ba guf-ta-yi shaa-ir: (a-bar wa baad wa mah khur-sheed wa fa-lak) dast ba-das-ti ham daa-da boo-dand, taa “taw-feeq” mu-haa-ji-ri kaa-bu-lee raa a-zi-yat na-ku-nand.",
        "mean": "“By chance, on one of those days, in the poet's words, ‘cloud, wind, mist, sun and sky’ had joined hands so as not to trouble Tawfiq, the migrant from Kabul.",
        "words": [
          [
            "«اتفاقاً",
            "it-ti-faa-qan",
            "it-ti-faa-qan"
          ],
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
            "روزها",
            "roz-haa",
            "roz-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "گفتهٔ",
            "guf-ta-yi",
            "guf-ta",
            "guf-tan"
          ],
          [
            "شاعر:",
            "shaa-ir",
            "shaa-ir"
          ],
          [
            "(ابر",
            "a-bar",
            "a-bar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "باد",
            "baad",
            "baad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مه",
            "mah",
            "mah"
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
            "فلک)",
            "fa-lak",
            "fa-lak"
          ],
          [
            "دست",
            "dast",
            "dast"
          ],
          [
            "به‌دست",
            "ba-das-ti",
            "ba-dast"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "daa-dan"
          ],
          [
            "بودند،",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "«توفیق»",
            "taw-feeq",
            "taw-feeq"
          ],
          [
            "مهاجر",
            "mu-haa-ji-ri",
            "mu-haa-jir"
          ],
          [
            "کابلی",
            "kaa-bu-lee",
            "kaa-bu-lee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "اذیت",
            "a-zi-yat",
            "a-zi-yat"
          ],
          [
            "نکنند.",
            "na-ku-nand",
            "na-ku-nand",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "oo bar ya-kay az da-raaz chaw-kee-haa-yi-yi ki-naa-ri jaa-da ni-shas-ta bood wa may-ko-sheed gham gha-lat ku-nad!",
        "mean": "He was sitting on one of the benches by the road, trying to distract himself from his sorrow.",
        "words": [
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
            "دراز",
            "da-raaz",
            "da-raaz"
          ],
          [
            "چوکی‌های",
            "chaw-kee-haa-yi-yi",
            "chaw-kee-haa-yi"
          ],
          [
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "جاده",
            "jaa-da",
            "jaa-da"
          ],
          [
            "نشسته",
            "ni-shas-ta",
            "ni-shas-ta",
            "ni-shas-tan"
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
            "می‌کوشید",
            "may-ko-sheed",
            "may-ko-sheed",
            "ko-shee-dan"
          ],
          [
            "غم",
            "gham",
            "gham"
          ],
          [
            "غلط",
            "gha-lat",
            "gha-lat"
          ],
          [
            "کند!",
            "ku-nad",
            "ku-nad",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "aaf-taab az haa-shi-ya-yi aa-han-po-shi yak aa-paar-ti-maa-ni bu-land, khan-daan wa na-waa-zish-gar may-taa-beed wa qa-bur-gha-haa-yi-yi aa-zur-da-yi taw-feeq raa may-na-waakht.",
        "mean": "The sun shone smiling and caressing from the metal-clad edge of a tall apartment building and warmed Tawfiq's aching ribs.",
        "words": [
          [
            "آفتاب",
            "aaf-taab",
            "aaf-taab"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "حاشیهٔ",
            "haa-shi-ya-yi",
            "haa-shi-ya-yi"
          ],
          [
            "آهنپوش",
            "aa-han-po-shi",
            "aa-han-posh"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "آپارتمان",
            "aa-paar-ti-maa-ni",
            "aa-paar-ti-maan"
          ],
          [
            "بلند،",
            "bu-land",
            "bu-land"
          ],
          [
            "خندان",
            "khan-daan",
            "khan-daan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نوازشگر",
            "na-waa-zish-gar",
            "na-waa-zish-gar"
          ],
          [
            "می‌تابید",
            "may-taa-beed",
            "may-taa-beed",
            "taa-bee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قبرغه‌های",
            "qa-bur-gha-haa-yi-yi",
            "qa-bur-gha-haa-yi"
          ],
          [
            "آزردهٔ",
            "aa-zur-da-yi",
            "aa-zur-da-yi"
          ],
          [
            "توفیق",
            "taw-feeq",
            "taw-feeq"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "می‌نواخت.",
            "may-na-waakht",
            "may-na-waakht",
            "na-waakh-tan"
          ]
        ]
      },
      {
        "say": "oo dar zin-daan, ma-ra-zi fa-laj wa dar-di ma-faa-sil gi-rif-ta bood wa ha-maan naa-kho-shee dar ta-maa-mi roz-haa-yi ra-haa-yee chi dar kaa-bul, chi dar pa-shaa-war wa chi dar een-jaa choon “da-waa-li-yaa” maw-joo-di hee-la-ga-ri af-saa-na-wee bar push-tash sa-waar bood wa aa-zaa-rash may-daad.”",
        "mean": "In prison he had contracted paralysis and joint pain, and throughout his days of freedom, whether in Kabul, Peshawar or here, that same illness rode on his back and tormented him like the cunning mythical creature Dawaliya.”",
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
            "زندان،",
            "zin-daan",
            "zin-daan"
          ],
          [
            "مرض",
            "ma-ra-zi",
            "ma-raz"
          ],
          [
            "فلج",
            "fa-laj",
            "fa-laj"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "درد",
            "dar-di",
            "dard"
          ],
          [
            "مفاصل",
            "ma-faa-sil",
            "ma-faa-sil"
          ],
          [
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "gi-rif-tan"
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
            "همان",
            "ha-maan",
            "ha-maan"
          ],
          [
            "ناخوشی",
            "naa-kho-shee",
            "naa-kho-shee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "تمام",
            "ta-maa-mi",
            "ta-maam"
          ],
          [
            "روزهای",
            "roz-haa-yi",
            "roz-haa"
          ],
          [
            "رهایی",
            "ra-haa-yee",
            "ra-haa-yee"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کابل،",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "پشاور",
            "pa-shaa-war",
            "pa-shaa-war"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "این‌جا",
            "een-jaa",
            "een-jaa"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "«دوالیا»",
            "da-waa-li-yaa",
            "da-waa-li-yaa"
          ],
          [
            "موجود",
            "maw-joo-di",
            "maw-jood"
          ],
          [
            "حیله‌گر",
            "hee-la-ga-ri",
            "hee-la-gar"
          ],
          [
            "افسانوی",
            "af-saa-na-wee",
            "af-saa-na-wee"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "پُشتش",
            "push-tash",
            "push-tash"
          ],
          [
            "سوار",
            "sa-waar",
            "sa-waar"
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
            "آزارش",
            "aa-zaa-rash",
            "aa-zaa-rash"
          ],
          [
            "می‌داد.»",
            "may-daad",
            "may-daad",
            "daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "panj– nas-ri shi-kas-ta yaa nas-ri guf-taa-ree",
        "mean": "5. Colloquial or spoken prose",
        "words": [
          [
            "۵-",
            "panj",
            "panj#digit"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "شکسته",
            "shi-kas-ta",
            "shi-kas-ta"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "گفتاری",
            "guf-taa-ree",
            "guf-taa-ree"
          ]
        ]
      }
    ],
    [
      {
        "say": "nas-ri shi-kas-ta aan ast ki ni-wish-taar ba zu-baa-ni mu-haa-wi-ra wa guf-tu-go-yi-yi ma-moo-lee-yi mar-du-mi ko-cha wa baa-zaar ni-gaash-ta may-sha-wad",
        "mean": "Colloquial prose is writing composed in the conversational language and ordinary speech of people in the street and marketplace.",
        "words": [
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "شکسته",
            "shi-kas-ta",
            "shi-kas-ta"
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
            "نوشتار",
            "ni-wish-taar",
            "ni-wish-taar"
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
            "محاوره",
            "mu-haa-wi-ra",
            "mu-haa-wi-ra"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گفتگوی",
            "guf-tu-go-yi-yi",
            "guf-tu-go-yi"
          ],
          [
            "معمولی",
            "ma-moo-lee-yi",
            "ma-moo-lee"
          ],
          [
            "مردم",
            "mar-du-mi",
            "mar-dum"
          ],
          [
            "کوچه",
            "ko-cha",
            "ko-cha"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بازار",
            "baa-zaar",
            "baa-zaar"
          ],
          [
            "نگاشته",
            "ni-gaash-ta",
            "ni-gaash-ta",
            "ni-gaash-tan"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "wa aan-goo-na ki ka-li-maat dar zu-baa-ni mu-haa-wi-ra-yi aa-ma-yi mar-dum mu-khaf-faf may-sha-wad wa bar-khay az waa-zha-haa dar qi-yaas baa soo-ra-ti mak-too-bi aan-haa may-shi-ka-nad, dar ni-gaa-ri-shi een na-wi nasr neez waa-zha-haa may-shi-ka-nad.",
        "mean": "Just as words are shortened in people's everyday speech and some words differ from their written form, words are likewise shortened in writing this kind of prose.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آن‌گونه",
            "aan-goo-na",
            "aan-goo-na"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "کلمات",
            "ka-li-maat",
            "ka-li-maat"
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
            "محاوره",
            "mu-haa-wi-ra-yi",
            "mu-haa-wi-ra"
          ],
          [
            "عامهٔ",
            "aa-ma-yi",
            "aa-ma-yi"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "مخفف",
            "mu-khaf-faf",
            "mu-khaf-faf"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
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
            "از",
            "az",
            "az"
          ],
          [
            "واژه‌ها",
            "waa-zha-haa",
            "waa-zha-haa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قیاس",
            "qi-yaas",
            "qi-yaas"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "صورت",
            "soo-ra-ti",
            "soo-rat"
          ],
          [
            "مکتوب",
            "mak-too-bi",
            "mak-toob"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "می‌شکند،",
            "may-shi-ka-nad",
            "may-shi-ka-nad",
            "shi-kas-tan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "نگارش",
            "ni-gaa-ri-shi",
            "ni-gaa-rish"
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
            "نثر",
            "nasr",
            "nasr"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "واژه‌ها",
            "waa-zha-haa",
            "waa-zha-haa"
          ],
          [
            "می‌شکند.",
            "may-shi-ka-nad",
            "may-shi-ka-nad",
            "shi-kas-tan"
          ]
        ]
      },
      {
        "say": "na-wee-san-da ba-raa-yi ni-shaan daa-da-ni chih-ra-yi ta-bee-ee wa waa-qi-ee-yi qah-ra-maa-naa-ni daa-staan-haa-yi-yi khud, ki ghaa-li-ban az mi-yaa-ni mar-du-mi aa-mi ij-ti-maa in-ti-khaab may-sha-wand, ay-ni al-faaz, ta-bee-raat wa tak-ya ka-laam-haa-yi-shaan raa ba lah-ja-yi aa-mi-yaa-na dar aa-saa-ri khud may-aa-wa-rad.",
        "mean": "To show the natural and real character of the heroes in their stories, who are usually chosen from ordinary people, the writer reproduces their exact words, expressions and habitual phrases in the colloquial dialect.",
        "words": [
          [
            "نویسنده",
            "na-wee-san-da",
            "na-wee-san-da"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
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
            "چهرهٔ",
            "chih-ra-yi",
            "chih-ra-yi"
          ],
          [
            "طبیعی",
            "ta-bee-ee",
            "ta-bee-ee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "واقعی",
            "waa-qi-ee-yi",
            "waa-qi-ee"
          ],
          [
            "قهرمانان",
            "qah-ra-maa-naa-ni",
            "qah-ra-maa-naan"
          ],
          [
            "داستان‌های",
            "daa-staan-haa-yi-yi",
            "daa-staan-haa-yi"
          ],
          [
            "خود،",
            "khud",
            "khud"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "غالباً",
            "ghaa-li-ban",
            "ghaa-li-ban"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "میان",
            "mi-yaa-ni",
            "mi-yaan"
          ],
          [
            "مردم",
            "mar-du-mi",
            "mar-dum"
          ],
          [
            "عام",
            "aa-mi",
            "aam"
          ],
          [
            "اجتماع",
            "ij-ti-maa",
            "ij-ti-maa"
          ],
          [
            "انتخاب",
            "in-ti-khaab",
            "in-ti-khaab"
          ],
          [
            "می‌شوند،",
            "may-sha-wand",
            "may-sha-wand",
            "shu-dan"
          ],
          [
            "عین",
            "ay-ni",
            "ayn"
          ],
          [
            "الفاظ،",
            "al-faaz",
            "al-faaz"
          ],
          [
            "تعبیرات",
            "ta-bee-raat",
            "ta-bee-raat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تکیه",
            "tak-ya",
            "tak-ya"
          ],
          [
            "کلام‌های‌شان",
            "ka-laam-haa-yi-shaan",
            "ka-laam-haa-yi-shaan"
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
            "لهجهٔ",
            "lah-ja-yi",
            "lah-ja-yi"
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
            "می‌آورد.",
            "may-aa-wa-rad",
            "may-aa-wa-rad",
            "aa-war-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "na-mo-na-haa-yi-yi nas-ri shi-kas-ta, baysh-tar dar aa-saa-ri tan-zee wa daa-staa-nee-yi mu-aa-si-ri maa qaa-bi-li mu-shaa-hi-da ast.",
        "mean": "Examples of colloquial prose are found mostly in our contemporary humorous and fictional works.",
        "words": [
          [
            "نمونه‌های",
            "na-mo-na-haa-yi-yi",
            "na-mo-na-haa-yi"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "شکسته،",
            "shi-kas-ta",
            "shi-kas-ta"
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
            "آثار",
            "aa-saa-ri",
            "aa-saar"
          ],
          [
            "طنزی",
            "tan-zee",
            "tan-zee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "داستانی",
            "daa-staa-nee-yi",
            "daa-staa-nee"
          ],
          [
            "معاصر",
            "mu-aa-si-ri",
            "mu-aa-sir"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "قابل",
            "qaa-bi-li",
            "qaa-bil"
          ],
          [
            "مشاهده",
            "mu-shaa-hi-da",
            "mu-shaa-hi-da"
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
        "say": "na-mo-na-yi nas-ri shi-kas-ta az daa-staan “choo-ree-haa-yi-yi surkh” na-wish-ta-yi sul-taa-na maw-laa-naa zaa-da",
        "mean": "An example of colloquial prose from the story “The Red Bangles” by Sultana Mawlana Zada",
        "words": [
          [
            "نمونهٔ",
            "na-mo-na-yi",
            "na-mo-na"
          ],
          [
            "نثر",
            "nas-ri",
            "nasr"
          ],
          [
            "شکسته",
            "shi-kas-ta",
            "shi-kas-ta"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "داستان",
            "daa-staan",
            "daa-staan"
          ],
          [
            "«چوری‌های",
            "choo-ree-haa-yi-yi",
            "choo-ree-haa-yi"
          ],
          [
            "سرخ»",
            "surkh",
            "surkh"
          ],
          [
            "نوشتهٔ",
            "na-wish-ta-yi",
            "na-wish-ta",
            "na-wish-tan"
          ],
          [
            "سلطانه",
            "sul-taa-na",
            "sul-taa-na"
          ],
          [
            "مولانا",
            "maw-laa-naa",
            "maw-laa-naa"
          ],
          [
            "زاده",
            "zaa-da",
            "zaa-da"
          ]
        ]
      }
    ],
    [
      {
        "say": "“...ba-cheem! sob taa shaam kul baa-zaa-ra gash-tam wa a-moo choo-ri-yaa wa boo-taa-yi maq-bool wa qee-ma-tee rah ki dee-ga heech-kas mis-lash na-daa-ra ba-rat kha-ree-dam.",
        "mean": "“My child! From morning to evening I went all around the market and bought you those pretty, expensive bangles and shoes that nobody else has.",
        "words": [
          [
            "«...بچیم!",
            "ba-cheem",
            "ba-cheem"
          ],
          [
            "صوب",
            "sob",
            "sob"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "شام",
            "shaam",
            "shaam"
          ],
          [
            "کل",
            "kul",
            "kul"
          ],
          [
            "بازاره",
            "baa-zaa-ra",
            "baa-zaa-ra"
          ],
          [
            "گشتم",
            "gash-tam",
            "gash-tam",
            "gash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امو",
            "a-moo",
            "a-moo"
          ],
          [
            "چوریا",
            "choo-ri-yaa",
            "choo-ri-yaa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بوتای",
            "boo-taa-yi",
            "boo-taa-yi"
          ],
          [
            "مقبول",
            "maq-bool",
            "maq-bool"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قیمتی",
            "qee-ma-tee",
            "qee-ma-tee"
          ],
          [
            "ره",
            "rah",
            "rah"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "دیگه",
            "dee-ga",
            "dee-ga"
          ],
          [
            "هیچکس",
            "heech-kas",
            "heech-kas"
          ],
          [
            "مثلش",
            "mis-lash",
            "mis-lash"
          ],
          [
            "نداره",
            "na-daa-ra",
            "na-daa-ra",
            "daash-tan"
          ],
          [
            "برت",
            "ba-rat",
            "ba-rat"
          ],
          [
            "خریدم.",
            "kha-ree-dam",
            "kha-ree-dam",
            "kha-ree-dan"
          ]
        ]
      },
      {
        "say": "wa-yaa:",
        "mean": "Or:",
        "words": [
          [
            "ویا:",
            "wa-yaa",
            "wa-yaa"
          ]
        ]
      },
      {
        "say": "say-ko, say-ko! maa-da-ram dee-roz ba maam choo-ri-yaa-yi surkh aa-war-da ki heech mis-lash dah baa-zaar nees.",
        "mean": "Look, look! Yesterday my mother brought me red bangles like no others in the market.",
        "words": [
          [
            "سَیکو،",
            "say-ko",
            "say-ko"
          ],
          [
            "سَیکو!",
            "say-ko",
            "say-ko"
          ],
          [
            "مادرم",
            "maa-da-ram",
            "maa-da-ram"
          ],
          [
            "دیروز",
            "dee-roz",
            "dee-roz"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مام",
            "maam",
            "maam"
          ],
          [
            "چوریای",
            "choo-ri-yaa-yi",
            "choo-ri-yaa-yi"
          ],
          [
            "سرخ",
            "surkh",
            "surkh"
          ],
          [
            "آورده",
            "aa-war-da",
            "aa-war-da",
            "aa-war-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "هیچ",
            "heech",
            "heech"
          ],
          [
            "مثلش",
            "mis-lash",
            "mis-lash"
          ],
          [
            "ده",
            "dah",
            "dah"
          ],
          [
            "بازار",
            "baa-zaar",
            "baa-zaar"
          ],
          [
            "نیس.",
            "nees",
            "nees",
            "na-boo-dan"
          ]
        ]
      },
      {
        "say": "maa-da-ram pee-sa-yi zi-yaat ba do-kaan-daar daa-da wa ay rah ba-ram kha-ree-da.”",
        "mean": "My mother gave the shopkeeper a lot of money and bought these for me.”",
        "words": [
          [
            "مادرم",
            "maa-da-ram",
            "maa-da-ram"
          ],
          [
            "پیسهٔ",
            "pee-sa-yi",
            "pee-sa-yi"
          ],
          [
            "زیات",
            "zi-yaat",
            "zi-yaat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دوکاندار",
            "do-kaan-daar",
            "do-kaan-daar"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ای",
            "ay",
            "ay"
          ],
          [
            "ره",
            "rah",
            "rah"
          ],
          [
            "برم",
            "ba-ram",
            "ba-ram"
          ],
          [
            "خریده.»",
            "kha-ree-da",
            "kha-ree-da",
            "kha-ree-dan"
          ]
        ]
      }
    ]
  ]
});
