/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 11, book pages 66-67, PDF pages 73-74 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: ««کراتوس» ()» is written ««کراتوس»»; «درخدمت» is written «در خدمت»; «بایدمتوجه بودکه» is written «باید متوجه بود که»; «هرکشور» is written «هر کشور»; «وشرایط» is written «و شرایط»; «برمبنای» is written «بر مبنای»; «بایدگفت» is written «باید گفت»; «و جود» is written «وجود».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-11',
  group: 'Dari · grade 9',
  label: 'Lesson 11',
  name: "di-mo-ki-raa-see",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_11.jpg',
    alt: "A drawing of four people in bright colors standing under a golden crown."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_11.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "di-mo-ki-raa-see":                     { fa: "دموکراسی", mean: "democracy" },
    "ha-ma":                                { fa: "همه", mean: "all, every" },
    "is-ti-laa-haa-tay":                    { fa: "اصطلاحاتی", mean: "terms (which)" },
    "ki":                                   { fa: "که", mean: "that, which, who" },
    "baa":                                  { fa: "با", mean: "with" },
    "waa-zha":                              { fa: "واژه", mean: "word" },
    "ki-raa-see":                           { fa: "کراسی", mean: "-cracy, rule" },
    "khatm":                                { fa: "ختم", mean: "ending" },
    "khatm may-sha-wand":                   { fa: "ختم می‌شوند", mean: "end" },
    "khatm shu-dan":                        { fa: "ختم شدن", mean: "to end" },
    "may-sha-wand":                         { fa: "می‌شوند", mean: "become, are" },
    "shu-dan":                              { fa: "شدن", mean: "to become" },
    "maa-nand":                             { fa: "مانند", mean: "like" },
    "o-to-ki-raa-see":                      { fa: "اتوکراسی", mean: "autocracy, rule by one person" },
    "mut-laq-gu-raa-yee":                   { fa: "مطلق‌گرایی", mean: "absolute rule" },
    "is-tib-daa-dee":                       { fa: "استبدادی", mean: "tyranny, tyrannical" },
    "plu-to-ki-raa-see":                    { fa: "پلوتوکراسی", mean: "plutocracy, rule by the rich" },
    "hu-koo-mat":                           { fa: "حکومت", mean: "government, rule" },
    "ta-waan-ga-raan":                      { fa: "توانگران", mean: "the rich" },
    "ta-ba-qa":                             { fa: "طبقه", mean: "class, layer" },
    "ash-raaf":                             { fa: "اشراف", mean: "the nobles, the upper class" },
    "wa":                                   { fa: "و", mean: "and" },
    "mar-dum-saa-laa-ree":                  { fa: "مردم‌سالاری", mean: "rule by the people, democracy" },
    "az":                                   { fa: "از", mean: "from, of" },
    "ka-li-ma":                             { fa: "کلمه", mean: "a word" },
    "qa-dee-mee":                           { fa: "قدیمی", mean: "old" },
    "ki-raa-tos":                           { fa: "کراتوس", mean: "kratos, Greek for power" },
    "mush-taq":                             { fa: "مشتق", mean: "derived" },
    "mush-taq shu-da and":                  { fa: "مشتق شده اند", mean: "come from" },
    "mush-taq shu-dan":                     { fa: "مشتق شدن", mean: "to be derived" },
    "shu-da":                               { fa: "شده", mean: "become; been" },
    "and":                                  { fa: "اند", mean: "are; after a word like shu-da, have" },
    "ba":                                   { fa: "به", mean: "to" },
    "ba ma-naa-yi":                         { fa: "به معنای", mean: "meaning" },
    "ma-naa":                               { fa: "معنا", mean: "meaning" },
    "qud-rat":                              { fa: "قدرت", mean: "power" },
    "yaa":                                  { fa: "یا", mean: "or" },
    "qaa-noon":                             { fa: "قانون", mean: "law" },
    "ast":                                  { fa: "است", mean: "is" },
    "a-gar":                                { fa: "اگر", mean: "if" },
    "bi-khaa-haym":                         { fa: "بخواهیم", mean: "we want (after “if”)" },
    "khaas-tan":                            { fa: "خواستن", mean: "to want" },
    "raa":                                  { fa: "را", mean: "marks the object of the verb" },
    "ta-reef":                              { fa: "تعریف", mean: "definition" },
    "ta-reef ku-naym":                      { fa: "تعریف کنیم", mean: "define" },
    "ta-reef kar-dan":                      { fa: "تعریف کردن", mean: "to define" },
    "ku-naym":                              { fa: "کنیم", mean: "we do" },
    "kar-dan":                              { fa: "کردن", mean: "to do, to make" },
    "may-go-yaym":                          { fa: "می‌گوییم", mean: "we say" },
    "guf-tan":                              { fa: "گفتن", mean: "to say, to tell" },
    "taw-seef":                             { fa: "توصیف", mean: "description" },
    "yak":                                  { fa: "یک", mean: "one, a" },
    "rawsh":                                { fa: "روش", mean: "method, way" },
    "makh-soos":                            { fa: "مخصوص", mean: "special" },
    "hu-koo-ma-tee":                        { fa: "حکومتی", mean: "of government" },
    "taw-zee":                              { fa: "توزیع", mean: "sharing out, distribution" },
    "dar":                                  { fa: "در", mean: "in" },
    "aan":                                  { fa: "آن", mean: "that" },
    "may-baa-shad":                         { fa: "می‌باشد", mean: "is" },
    "bu-dan":                               { fa: "بودن", mean: "to be" },
    "mar-dum":                              { fa: "مردم", mean: "people" },
    "ta-was-sut":                           { fa: "توسط", mean: "by, through" },
    "ba-raa-yi":                            { fa: "برای", mean: "for" },
    "ni-zaam-haa":                          { fa: "نظام‌ها", mean: "systems" },
    "has-tand":                             { fa: "هستند", mean: "are" },
    "hu-koo-mat-haa":                       { fa: "حکومت‌ها", mean: "governments" },
    "in-ti-khaab":                          { fa: "انتخاب", mean: "choice" },
    "in-ti-khaab may-ku-nand":              { fa: "انتخاب می‌کنند", mean: "choose" },
    "in-ti-khaab kar-dan":                  { fa: "انتخاب کردن", mean: "to choose" },
    "may-ku-nand":                          { fa: "می‌کنند", mean: "they do" },
    "mun-ta-khab":                          { fa: "منتخب", mean: "chosen, elected" },
    "baa-shad":                             { fa: "باشد", mean: "be, should be" },
    "baa-yad":                              { fa: "باید", mean: "must, should" },
    "khid-mat":                             { fa: "خدمت", mean: "service" },
    "aa-naan":                              { fa: "آنان", mean: "they, them" },
    "qa-raar":                              { fa: "قرار", mean: "place, rest" },
    "qa-raar daash-ta baa-shad":            { fa: "قرار داشته باشد", mean: "be" },
    "qa-raar daash-tan":                    { fa: "قرار داشتن", mean: "to be placed, to lie" },
    "daash-ta":                             { fa: "داشته", mean: "had" },
    "daash-tan":                            { fa: "داشتن", mean: "to have" },
    "aa-zaa-dee-haa":                       { fa: "آزادی‌ها", mean: "freedoms" },
    "juz#part":                             { fa: "جزء", say: "juz", mean: "part" },
    "ju-zi a-saa-see":                      { fa: "جزء اساسی", mean: "a basic part" },
    "a-saa-see":                            { fa: "اساسی", mean: "basic" },
    "har":                                  { fa: "هر", mean: "every" },
    "in-saan":                              { fa: "انسان", mean: "a person, a human being" },
    "haq":                                  { fa: "حق", mean: "right" },
    "haq daa-rad":                          { fa: "حق دارد", mean: "has the right" },
    "haq daash-tan":                        { fa: "حق داشتن", mean: "to have the right" },
    "daa-rad":                              { fa: "دارد", mean: "has" },
    "fikr":                                 { fa: "فکر", mean: "thought" },
    "na-zar":                               { fa: "نظر", mean: "sight, view; opinion" },
    "khaysh":                               { fa: "خویش", mean: "own; self" },
    "khaah":                                { fa: "خواه", mean: "whether" },
    "ba-tawr":                              { fa: "به‌طور", mean: "in the way of" },
    "ba-taw-ri su-khan wa su-khan-raa-nee": { fa: "به‌طور سخن و سخنرانی", mean: "in speech and speeches" },
    "su-khan":                              { fa: "سخن", mean: "speech, words" },
    "su-khan-raa-nee":                      { fa: "سخنرانی", mean: "speech, lecture" },
    "na-wish-ta":                           { fa: "نوشته", mean: "written" },
    "na-wish-tan":                          { fa: "نوشتن", mean: "to write" },
    "tas-weer":                             { fa: "تصویر", mean: "picture" },
    "aa-zaa-daa-na":                        { fa: "آزادانه", mean: "freely" },
    "ba-yaan":                              { fa: "بیان", mean: "expression" },
    "ba-yaan ku-nad":                       { fa: "بیان کند", mean: "express" },
    "ba-yaan kar-dan":                      { fa: "بیان کردن", mean: "to express" },
    "ku-nad":                               { fa: "کند", mean: "does" },
    "in-ti-khaab ku-nad":                   { fa: "انتخاب کند", mean: "choose" },
    "yaa-nee":                              { fa: "یعنی", mean: "that is, it means" },
    "ra'y":                                 { fa: "رأی", mean: "vote, opinion" },
    "ra'y bi-di-had":                       { fa: "رأی بدهد", mean: "vote" },
    "ra'y daa-dan":                         { fa: "رأی دادن", mean: "to vote" },
    "bi-di-had":                            { fa: "بدهد", mean: "give" },
    "daa-dan":                              { fa: "دادن", mean: "to give" },
    "in-ti-khaab sha-wad":                  { fa: "انتخاب شود", mean: "be elected" },
    "in-ti-khaab shu-dan":                  { fa: "انتخاب شدن", mean: "to be elected" },
    "sha-wad":                              { fa: "شود", mean: "become" },
    "oo":                                   { fa: "او", mean: "he, she; his, her" },
    "ra'y bi-di-hand":                      { fa: "رأی بدهند", mean: "they vote" },
    "bi-di-hand":                           { fa: "بدهند", mean: "give" },
    "fard":                                 { fa: "فرد", mean: "person, individual" },
    "roz-naa-ma":                           { fa: "روزنامه", mean: "newspaper" },
    "ma-jal-la":                            { fa: "مجله", mean: "magazine" },
    "ja-ree-da":                            { fa: "جریده", mean: "journal, newspaper" },
    "raa-di-yo":                            { fa: "رادیو", mean: "radio" },
    "te-le-wee-zee-yon":                    { fa: "تلویزیون", mean: "television" },
    "kha-bar-gu-zaa-ree":                   { fa: "خبرگزاری", mean: "news agency" },
    "shi-faa-khaa-na":                      { fa: "شفاخانه", mean: "hospital" },
    "mak-tab":                              { fa: "مکتب", mean: "school" },
    "ba soo-ra-ti khu-soo-see":             { fa: "به صورت خصوصی", mean: "privately" },
    "soo-rat":                              { fa: "صورت", mean: "face, outward form" },
    "khu-soo-see":                          { fa: "خصوصی", mean: "private" },
    "am-maa":                               { fa: "اما", mean: "but" },
    "mu-ta-waj-jih":                        { fa: "متوجه", mean: "turned toward; paying attention" },
    "mu-ta-waj-jih bood":                   { fa: "متوجه بود", mean: "one must be aware" },
    "bood":                                 { fa: "بود", mean: "was" },
    "een":                                  { fa: "این", mean: "this" },
    "daa-raa-yi":                           { fa: "دارای", mean: "having, possessing" },
    "hu-dood":                              { fa: "حدود", mean: "about; limits" },
    "sha-raa-yit":                          { fa: "شرایط", mean: "conditions" },
    "qaa-noo-ni a-saa-see":                 { fa: "قانون اساسی", mean: "the constitution" },
    "saa-yir":                              { fa: "سایر", mean: "other" },
    "qa-waa-neen":                          { fa: "قوانین", mean: "laws" },
    "kish-war":                             { fa: "کشور", mean: "country" },
    "ta-yeen":                              { fa: "تعیین", mean: "setting, fixing" },
    "ta-yeen may-ku-nad":                   { fa: "تعیین می‌کند", mean: "sets" },
    "ta-yeen kar-dan":                      { fa: "تعیین کردن", mean: "to set, to fix" },
    "may-ku-nad":                           { fa: "می‌کند", mean: "does, makes" },
    "ma-sa-lan":                            { fa: "مثلاً", mean: "for example" },
    "ra'y di-hee":                          { fa: "رأی دهی", mean: "voting" },
    "di-hee":                               { fa: "دهی", mean: "giving (ra'y di-hee, voting)" },
    "ra'y di-han-da":                       { fa: "رأی دهنده", mean: "voter" },
    "di-han-da":                            { fa: "دهنده", mean: "giver (ra'y di-han-da, voter)" },
    "in-ti-khaab ku-nan-da":                { fa: "انتخاب کننده", mean: "elector" },
    "ku-nan-da":                            { fa: "کننده", mean: "doing (ha-ra-kat ku-nan-da, moving)" },
    "in-ti-khaab sha-wan-da":               { fa: "انتخاب شونده", mean: "candidate, one who is elected" },
    "sha-wan-da":                           { fa: "شونده", mean: "one who becomes (in-ti-khaab sha-wan-da, candidate)" },
    "mu-shakh-khas":                        { fa: "مشخص", mean: "clear, specified" },
    "mu-shakh-khas may-ku-nad":             { fa: "مشخص می‌کند", mean: "sets out" },
    "mu-shakh-khas kar-dan":                { fa: "مشخص کردن", mean: "to specify" },
    "al-bat-ta":                            { fa: "البته", mean: "of course" },
    "marz-haa":                             { fa: "مرزها", mean: "borders" },
    "far-dee":                              { fa: "فردی", mean: "personal" },
    "ij-ti-maa-ee":                         { fa: "اجتماعی", mean: "social" },
    "bar":                                  { fa: "بر", mean: "on, upon" },
    "bar mab-naa-yi":                       { fa: "بر مبنای", mean: "on the basis of" },
    "mab-naa":                              { fa: "مبنا", mean: "basis" },
    "ma-naa-fi":                            { fa: "منافع", mean: "interests, benefits" },
    "mil-lee":                              { fa: "ملی", mean: "national" },
    "neez":                                 { fa: "نیز", mean: "also, too" },
    "ta-yeen may-gar-dad":                  { fa: "تعیین می‌گردد", mean: "is set" },
    "may-gar-dad":                          { fa: "می‌گردد", mean: "becomes, turns" },
    "gar-dee-dan":                          { fa: "گردیدن", mean: "to become, to turn" },
    "maw-rid":                              { fa: "مورد", mean: "object, case" },
    "kish-war-haa":                         { fa: "کشورها", mean: "countries" },
    "hukm":                                 { fa: "حکم", mean: "ruling, rule" },
    "yak-saan":                             { fa: "یکسان", mean: "the same" },
    "na-daa-rad":                           { fa: "ندارد", mean: "does not have" },
    "maw-zoo":                              { fa: "موضوع", mean: "subject, point" },
    "mu-him":                               { fa: "مهم", mean: "important" },
    "dee-gar":                              { fa: "دیگر", mean: "other; more; anymore" },
    "ba-zay":                               { fa: "بعضی", mean: "some" },
    "fa-qat":                               { fa: "فقط", mean: "only" },
    "laa-zi-ma":                            { fa: "لازمه", mean: "requirement, necessary part" },
    "jam-hoo-ree":                          { fa: "جمهوری", mean: "republic" },
    "may-daa-nand":                         { fa: "می‌دانند", mean: "know; consider" },
    "daa-nis-tan":                          { fa: "دانستن", mean: "to know" },
    "nuh":                                  { fa: "نه", mean: "nine" },
    "shaa-hee":                             { fa: "شاهی", mean: "monarchy" },
    "guft":                                 { fa: "گفت", mean: "said" },
    "ni-zaam":                              { fa: "نظام", mean: "system" },
    "shaa-hee-yi mash-roo-ta":              { fa: "شاهی مشروطه", mean: "constitutional monarchy" },
    "mash-roo-ta":                          { fa: "مشروطه", mean: "constitutional" },
    "gar-chi":                              { fa: "گرچه", mean: "although" },
    "paad-shaa-hee":                        { fa: "پادشاهی", mean: "kingship" },
    "khaa-na-waa-da":                       { fa: "خانواده", mean: "family" },
    "az ta-ree-qi":                         { fa: "از طریق", mean: "by way of, through" },
    "ta-reeq":                              { fa: "طریق", mean: "way, path" },
    "irs":                                  { fa: "ارث", mean: "inheritance" },
    "in-ti-qaal":                           { fa: "انتقال", mean: "moving, passing on" },
    "in-ti-qaal may-ku-nad":                { fa: "انتقال می‌کند", mean: "passes on" },
    "in-ti-qaal kar-dan":                   { fa: "انتقال کردن", mean: "to pass on" },
    "wa-lay":                               { fa: "ولی", mean: "but" },
    "har-gaah":                             { fa: "هرگاه", mean: "whenever, if" },
    "aa-zaa-dee":                           { fa: "آزادی", mean: "freedom" },
    "baa-shand":                            { fa: "باشند", mean: "be" },
    "na-maa-yan-da-gaan-shaan":             { fa: "نماینده‌گان‌شان", mean: "their representatives" },
    "shoo-raa":                             { fa: "شورا", mean: "council, parliament" },
    "ku-nand":                              { fa: "کنند", mean: "they do" },
    "ham-chu-neen":                         { fa: "همچنین", mean: "also, likewise" },
    "i-jaa-za":                             { fa: "اجازه", mean: "permission" },
    "i-jaa-za daash-ta baa-shand":          { fa: "اجازه داشته باشند", mean: "are allowed" },
    "i-jaa-za daash-tan":                   { fa: "اجازه داشتن", mean: "to be allowed" },
    "khud":                                 { fa: "خود", mean: "own; self" },
    "ba-yaan ku-nand":                      { fa: "بیان کنند", mean: "express" },
    "ra-saa-na-haa":                        { fa: "رسانه‌ها", mean: "media" },
    "ni-haad-haa":                          { fa: "نهادها", mean: "organizations" },
    "ee-jaad":                              { fa: "ایجاد", mean: "creating, setting up" },
    "ee-jaad na-maa-yand":                  { fa: "ایجاد نمایند", mean: "set up" },
    "ee-jaad na-mo-dan":                    { fa: "ایجاد نمودن", mean: "to set up, to create" },
    "na-maa-yand":                          { fa: "نمایند", mean: "do" },
    "na-mo-dan":                            { fa: "نمودن", mean: "to do; to show; to seem" },
    "pas":                                  { fa: "پس", mean: "then, so" },
    "wu-jood":                              { fa: "وجود", mean: "existence" },
    "ba zaa-hir":                           { fa: "به ظاهر", mean: "seemingly, in name only" },
    "zaa-hir":                              { fa: "ظاهر", mean: "visible, appearing" },
    "ak-sar":                               { fa: "اکثر", mean: "mostly" },
    "koo-de-taa":                           { fa: "کودتا", mean: "coup" },
    "ba wu-jood may-aa-yand":               { fa: "به وجود می‌آیند", mean: "come into being" },
    "ba wu-jood aa-ma-dan":                 { fa: "به وجود آمدن", mean: "to come into being" },
    "may-aa-yand":                          { fa: "می‌آیند", mean: "come; (with paysh) behave" },
    "aa-ma-dan":                            { fa: "آمدن", mean: "to come" },
    "in-ti-khaa-baat":                      { fa: "انتخابات", mean: "elections" },
    "waa-qi-ee":                            { fa: "واقعی", mean: "real" },
    "soo-rat na-may-gee-rad":               { fa: "صورت نمی‌گیرد", mean: "does not take place" },
    "soo-rat gi-rif-tan":                   { fa: "صورت گرفتن", mean: "to take place" },
    "na-may-gee-rad":                       { fa: "نمی‌گیرد", mean: "does not take" },
    "gi-rif-tan":                           { fa: "گرفتن", mean: "to take" },
    "na-may-ta-waan":                       { fa: "نمی‌توان", mean: "one cannot" },
    "tan-haa":                              { fa: "تنها", mean: "only; alone" },
    "maa":                                  { fa: "ما", mean: "we" },
    "na-mo-na-haa-yay":                     { fa: "نمونه‌هایی", mean: "examples" },
    "daa-raym":                             { fa: "داریم", mean: "we have" },
    "fawt":                                 { fa: "فوت", mean: "death" },
    "ra-ees":                               { fa: "رئیس", mean: "head, president" },
    "ra-ee-si jam-hoor":                    { fa: "رئیس جمهور", mean: "president" },
    "jam-hoor":                             { fa: "جمهور", mean: "the public (ra-ees-i jam-hoor, president)" },
    "pi-sar":                               { fa: "پسر", mean: "son, boy" },
    "ba qud-rat may-ra-sad":                { fa: "به قدرت می‌رسد", mean: "comes to power" },
    "ba qud-rat ra-see-dan":                { fa: "به قدرت رسیدن", mean: "to come to power" },
    "may-ra-sad":                           { fa: "می‌رسد", mean: "arrives, reaches" },
    "ra-see-dan":                           { fa: "رسیدن", mean: "to arrive, to reach" },
    "mum-kin":                              { fa: "ممکن", mean: "possible; perhaps" },
    "na-daash-ta":                          { fa: "نداشته", mean: "not had" }
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
    "say": "di-mo-ki-raa-see",
    "mean": "Democracy",
    "words": [
      [
        "دموکراسی",
        "di-mo-ki-raa-see",
        "di-mo-ki-raa-see"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "ha-ma is-ti-laa-haa-tay ki baa waa-zha-yi “ki-raa-see” khatm may-sha-wand; maa-nand: o-to-ki-raa-see (mut-laq-gu-raa-yee, is-tib-daa-dee), plu-to-ki-raa-see (hu-koo-ma-ti ta-waan-ga-raan, ta-ba-qa-yi ash-raaf) wa di-mo-ki-raa-see (mar-dum-saa-laa-ree) az ka-li-ma-yi qa-dee-mee “ki-raa-tos” mush-taq shu-da and ki ba ma-naa-yi (qud-rat) yaa (qaa-noon) ast.",
        "mean": "All the terms that end in “-cracy”, such as autocracy (absolute rule, tyranny), plutocracy (rule of the rich, the upper class) and democracy (rule of the people), come from the old word “kratos”, which means power or law.",
        "words": [
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "اصطلاحاتی",
            "is-ti-laa-haa-tay",
            "is-ti-laa-haa-tay"
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
            "واژهٔ",
            "waa-zha-yi",
            "waa-zha"
          ],
          [
            "«کراسی»",
            "ki-raa-see",
            "ki-raa-see"
          ],
          [
            "ختم",
            "khatm",
            "khatm",
            "khatm may-sha-wand",
            "khatm shu-dan"
          ],
          [
            "می‌شوند؛",
            "may-sha-wand",
            "may-sha-wand",
            "khatm may-sha-wand",
            "shu-dan",
            "khatm shu-dan"
          ],
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "اتوکراسی",
            "o-to-ki-raa-see",
            "o-to-ki-raa-see"
          ],
          [
            "(مطلق‌گرایی،",
            "mut-laq-gu-raa-yee",
            "mut-laq-gu-raa-yee"
          ],
          [
            "استبدادی)،",
            "is-tib-daa-dee",
            "is-tib-daa-dee"
          ],
          [
            "پلوتوکراسی",
            "plu-to-ki-raa-see",
            "plu-to-ki-raa-see"
          ],
          [
            "(حکومت",
            "hu-koo-ma-ti",
            "hu-koo-mat"
          ],
          [
            "توانگران،",
            "ta-waan-ga-raan",
            "ta-waan-ga-raan"
          ],
          [
            "طبقهٔ",
            "ta-ba-qa-yi",
            "ta-ba-qa"
          ],
          [
            "اشراف)",
            "ash-raaf",
            "ash-raaf"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
          ],
          [
            "(مردم‌سالاری)",
            "mar-dum-saa-laa-ree",
            "mar-dum-saa-laa-ree"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کلمهٔ",
            "ka-li-ma-yi",
            "ka-li-ma"
          ],
          [
            "قدیمی",
            "qa-dee-mee",
            "qa-dee-mee"
          ],
          [
            "«کراتوس»",
            "ki-raa-tos",
            "ki-raa-tos"
          ],
          [
            "مشتق",
            "mush-taq",
            "mush-taq",
            "mush-taq shu-da and",
            "mush-taq shu-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "mush-taq shu-da and",
            "shu-dan",
            "mush-taq shu-dan"
          ],
          [
            "اند",
            "and",
            "and",
            "mush-taq shu-da and",
            "mush-taq shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "(قدرت)",
            "qud-rat",
            "qud-rat"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "(قانون)",
            "qaa-noon",
            "qaa-noon"
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
        "say": "a-gar bi-khaa-haym di-mo-ki-raa-see raa ta-reef ku-naym, may-go-yaym: “di-mo-ki-raa-see taw-see-fi yak raw-shi makh-soo-si hu-koo-ma-tee wa taw-zee-yi qud-rat dar aan may-baa-shad.”",
        "mean": "If we want to define democracy, we say: “Democracy is the description of a particular way of governing and of how power is shared in it.”",
        "words": [
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "بخواهیم",
            "bi-khaa-haym",
            "bi-khaa-haym",
            "khaas-tan"
          ],
          [
            "دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "تعریف",
            "ta-reef",
            "ta-reef",
            "ta-reef ku-naym",
            "ta-reef kar-dan"
          ],
          [
            "کنیم،",
            "ku-naym",
            "ku-naym",
            "ta-reef ku-naym",
            "kar-dan",
            "ta-reef kar-dan"
          ],
          [
            "می‌گوییم:",
            "may-go-yaym",
            "may-go-yaym",
            "guf-tan"
          ],
          [
            "«دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
          ],
          [
            "توصیف",
            "taw-see-fi",
            "taw-seef"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "روش",
            "raw-shi",
            "rawsh"
          ],
          [
            "مخصوص",
            "makh-soo-si",
            "makh-soos"
          ],
          [
            "حکومتی",
            "hu-koo-ma-tee",
            "hu-koo-ma-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "توزیع",
            "taw-zee-yi",
            "taw-zee"
          ],
          [
            "قدرت",
            "qud-rat",
            "qud-rat"
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
            "می‌باشد.»",
            "may-baa-shad",
            "may-baa-shad",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "di-mo-ki-raa-see ba ma-naa-yi hu-koo-ma-ti mar-dum, ta-was-su-ti mar-dum wa ba-raa-yi mar-dum ast.",
        "mean": "Democracy means government of the people, by the people and for the people.",
        "words": [
          [
            "دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
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
            "حکومت",
            "hu-koo-ma-ti",
            "hu-koo-mat"
          ],
          [
            "مردم،",
            "mar-dum",
            "mar-dum"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
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
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "dar ni-zaam-haa-yi di-mo-ki-raa-see, mar-dum has-tand ki hu-koo-mat-haa raa in-ti-khaab may-ku-nand wa hu-koo-ma-tee ki mun-ta-kha-bi mar-dum baa-shad; baa-yad dar khid-ma-ti aa-naan qa-raar daash-ta baa-shad.",
        "mean": "In democratic systems it is the people who choose governments, and a government chosen by the people must serve them.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "نظام‌های",
            "ni-zaam-haa-yi",
            "ni-zaam-haa"
          ],
          [
            "دموکراسی،",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "هستند",
            "has-tand",
            "has-tand",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "حکومت‌ها",
            "hu-koo-mat-haa",
            "hu-koo-mat-haa"
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
            "in-ti-khaab may-ku-nand",
            "in-ti-khaab kar-dan"
          ],
          [
            "می‌کنند",
            "may-ku-nand",
            "may-ku-nand",
            "in-ti-khaab may-ku-nand",
            "kar-dan",
            "in-ti-khaab kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حکومتی",
            "hu-koo-ma-tee",
            "hu-koo-ma-tee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "منتخب",
            "mun-ta-kha-bi",
            "mun-ta-khab"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "باشد؛",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ],
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
            "خدمت",
            "khid-ma-ti",
            "khid-mat"
          ],
          [
            "آنان",
            "aa-naan",
            "aa-naan"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "qa-raar daash-ta baa-shad",
            "qa-raar daash-tan"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "qa-raar daash-ta baa-shad",
            "daash-tan",
            "qa-raar daash-tan"
          ],
          [
            "باشد.",
            "baa-shad",
            "baa-shad",
            "qa-raar daash-ta baa-shad",
            "bu-dan",
            "qa-raar daash-tan"
          ]
        ]
      },
      {
        "say": "aa-zaa-dee-haa ju-zi a-saa-see har di-mo-ki-raa-see ast.",
        "mean": "Freedoms are a basic part of every democracy.",
        "words": [
          [
            "آزادی‌ها",
            "aa-zaa-dee-haa",
            "aa-zaa-dee-haa"
          ],
          [
            "جزء",
            "ju-zi",
            "juz#part",
            "ju-zi a-saa-see"
          ],
          [
            "اساسی",
            "a-saa-see",
            "a-saa-see",
            "ju-zi a-saa-see"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "har in-saan haq daa-rad ki fikr wa na-za-ri khaysh raa khaah ba-taw-ri su-khan wa su-khan-raa-nee wa yaa na-wish-ta wa tas-weer aa-zaa-daa-na ba-yaan ku-nad.",
        "mean": "Every person has the right to express their thoughts and opinions freely, whether in speech and speeches or in writing and pictures.",
        "words": [
          [
            "هر",
            "har",
            "har"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "حق",
            "haq",
            "haq",
            "haq daa-rad",
            "haq daash-tan"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "haq daa-rad",
            "daash-tan",
            "haq daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "نظر",
            "na-za-ri",
            "na-zar"
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
            "خواه",
            "khaah",
            "khaah"
          ],
          [
            "به‌طور",
            "ba-taw-ri",
            "ba-tawr",
            "ba-taw-ri su-khan wa su-khan-raa-nee"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan",
            "ba-taw-ri su-khan wa su-khan-raa-nee"
          ],
          [
            "و",
            "wa",
            "wa",
            "ba-taw-ri su-khan wa su-khan-raa-nee"
          ],
          [
            "سخنرانی",
            "su-khan-raa-nee",
            "su-khan-raa-nee",
            "ba-taw-ri su-khan wa su-khan-raa-nee"
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
            "نوشته",
            "na-wish-ta",
            "na-wish-ta",
            "na-wish-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تصویر",
            "tas-weer",
            "tas-weer"
          ],
          [
            "آزادانه",
            "aa-zaa-daa-na",
            "aa-zaa-daa-na"
          ],
          [
            "بیان",
            "ba-yaan",
            "ba-yaan",
            "ba-yaan ku-nad",
            "ba-yaan kar-dan"
          ],
          [
            "کند.",
            "ku-nad",
            "ku-nad",
            "ba-yaan ku-nad",
            "kar-dan",
            "ba-yaan kar-dan"
          ]
        ]
      },
      {
        "say": "har in-saan haq daa-rad ki in-ti-khaab ku-nad; yaa-nee ra'y bi-di-had wa in-ti-khaab sha-wad; yaa-nee mar-dum ba oo ra'y bi-di-hand.",
        "mean": "Every person has the right to elect, that is, to vote, and to be elected, that is, for people to vote for them.",
        "words": [
          [
            "هر",
            "har",
            "har"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "حق",
            "haq",
            "haq",
            "haq daa-rad",
            "haq daash-tan"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "haq daa-rad",
            "daash-tan",
            "haq daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "انتخاب",
            "in-ti-khaab",
            "in-ti-khaab",
            "in-ti-khaab ku-nad"
          ],
          [
            "کند؛",
            "ku-nad",
            "ku-nad",
            "in-ti-khaab ku-nad",
            "kar-dan"
          ],
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "رأی",
            "ra'y",
            "ra'y",
            "ra'y bi-di-had",
            "ra'y daa-dan"
          ],
          [
            "بدهد",
            "bi-di-had",
            "bi-di-had",
            "ra'y bi-di-had",
            "daa-dan",
            "ra'y daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "انتخاب",
            "in-ti-khaab",
            "in-ti-khaab",
            "in-ti-khaab sha-wad",
            "in-ti-khaab shu-dan"
          ],
          [
            "شود؛",
            "sha-wad",
            "sha-wad",
            "in-ti-khaab sha-wad",
            "shu-dan",
            "in-ti-khaab shu-dan"
          ],
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
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
            "رأی",
            "ra'y",
            "ra'y",
            "ra'y bi-di-hand",
            "ra'y daa-dan"
          ],
          [
            "بدهند.",
            "bi-di-hand",
            "bi-di-hand",
            "ra'y bi-di-hand",
            "daa-dan",
            "ra'y daa-dan"
          ]
        ]
      },
      {
        "say": "har fard haq daa-rad ki roz-naa-ma, ma-jal-la, ja-ree-da, raa-di-yo, te-le-wee-zee-yon, kha-bar-gu-zaa-ree, shi-faa-khaa-na wa mak-tab ba soo-ra-ti khu-soo-see daash-ta baa-shad;",
        "mean": "Every individual has the right to own a newspaper, magazine, journal, radio, television, news agency, hospital or school privately;",
        "words": [
          [
            "هر",
            "har",
            "har"
          ],
          [
            "فرد",
            "fard",
            "fard"
          ],
          [
            "حق",
            "haq",
            "haq",
            "haq daa-rad",
            "haq daash-tan"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "haq daa-rad",
            "daash-tan",
            "haq daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "روزنامه،",
            "roz-naa-ma",
            "roz-naa-ma"
          ],
          [
            "مجله،",
            "ma-jal-la",
            "ma-jal-la"
          ],
          [
            "جریده،",
            "ja-ree-da",
            "ja-ree-da"
          ],
          [
            "رادیو،",
            "raa-di-yo",
            "raa-di-yo"
          ],
          [
            "تلویزیون،",
            "te-le-wee-zee-yon",
            "te-le-wee-zee-yon"
          ],
          [
            "خبرگزاری،",
            "kha-bar-gu-zaa-ree",
            "kha-bar-gu-zaa-ree"
          ],
          [
            "شفاخانه",
            "shi-faa-khaa-na",
            "shi-faa-khaa-na"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مکتب",
            "mak-tab",
            "mak-tab"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba soo-ra-ti khu-soo-see"
          ],
          [
            "صورت",
            "soo-ra-ti",
            "soo-rat",
            "ba soo-ra-ti khu-soo-see"
          ],
          [
            "خصوصی",
            "khu-soo-see",
            "khu-soo-see",
            "ba soo-ra-ti khu-soo-see"
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
        "say": "am-maa baa-yad mu-ta-waj-jih bood ki ha-ma-yi een aa-zaa-dee-haa daa-raa-yi hu-dood wa sha-raa-yit ast.",
        "mean": "but one must be aware that all these freedoms have limits and conditions.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "متوجه",
            "mu-ta-waj-jih",
            "mu-ta-waj-jih",
            "mu-ta-waj-jih bood"
          ],
          [
            "بود",
            "bood",
            "bood",
            "mu-ta-waj-jih bood",
            "bu-dan"
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
            "آزادی‌ها",
            "aa-zaa-dee-haa",
            "aa-zaa-dee-haa"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "حدود",
            "hu-dood",
            "hu-dood"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شرایط",
            "sha-raa-yit",
            "sha-raa-yit"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "qaa-noo-ni a-saa-see wa saa-yi-ri qa-waa-nee-ni har kish-war een hu-dood wa sha-raa-yit raa ta-yeen may-ku-nad;",
        "mean": "The constitution and the other laws of each country set these limits and conditions;",
        "words": [
          [
            "قانون",
            "qaa-noo-ni",
            "qaa-noon",
            "qaa-noo-ni a-saa-see"
          ],
          [
            "اساسی",
            "a-saa-see",
            "a-saa-see",
            "qaa-noo-ni a-saa-see"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سایر",
            "saa-yi-ri",
            "saa-yir"
          ],
          [
            "قوانین",
            "qa-waa-nee-ni",
            "qa-waa-neen"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "کشور",
            "kish-war",
            "kish-war"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "حدود",
            "hu-dood",
            "hu-dood"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شرایط",
            "sha-raa-yit",
            "sha-raa-yit"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "تعیین",
            "ta-yeen",
            "ta-yeen",
            "ta-yeen may-ku-nad",
            "ta-yeen kar-dan"
          ],
          [
            "می‌کند؛",
            "may-ku-nad",
            "may-ku-nad",
            "ta-yeen may-ku-nad",
            "kar-dan",
            "ta-yeen kar-dan"
          ]
        ]
      },
      {
        "say": "ma-sa-lan: ha-qi ra'y di-hee wa sha-raa-yi-ti ra'y di-han-da wa in-ti-khaab ku-nan-da wa in-ti-khaab sha-wan-da raa qaa-noon mu-shakh-khas may-ku-nad;",
        "mean": "for example, the law sets out the right to vote and the conditions for voters, electors and candidates;",
        "words": [
          [
            "مثلاً:",
            "ma-sa-lan",
            "ma-sa-lan"
          ],
          [
            "حق",
            "ha-qi",
            "haq"
          ],
          [
            "رأی",
            "ra'y",
            "ra'y",
            "ra'y di-hee"
          ],
          [
            "دهی",
            "di-hee",
            "di-hee",
            "ra'y di-hee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شرایط",
            "sha-raa-yi-ti",
            "sha-raa-yit"
          ],
          [
            "رأی",
            "ra'y",
            "ra'y",
            "ra'y di-han-da"
          ],
          [
            "دهنده",
            "di-han-da",
            "di-han-da",
            "ra'y di-han-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "انتخاب",
            "in-ti-khaab",
            "in-ti-khaab",
            "in-ti-khaab ku-nan-da"
          ],
          [
            "کننده",
            "ku-nan-da",
            "ku-nan-da",
            "in-ti-khaab ku-nan-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "انتخاب",
            "in-ti-khaab",
            "in-ti-khaab",
            "in-ti-khaab sha-wan-da"
          ],
          [
            "شونده",
            "sha-wan-da",
            "sha-wan-da",
            "in-ti-khaab sha-wan-da"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "قانون",
            "qaa-noon",
            "qaa-noon"
          ],
          [
            "مشخص",
            "mu-shakh-khas",
            "mu-shakh-khas",
            "mu-shakh-khas may-ku-nad",
            "mu-shakh-khas kar-dan"
          ],
          [
            "می‌کند؛",
            "may-ku-nad",
            "may-ku-nad",
            "mu-shakh-khas may-ku-nad",
            "kar-dan",
            "mu-shakh-khas kar-dan"
          ]
        ]
      },
      {
        "say": "al-bat-ta marz-haa wa hu-doo-di aa-zaa-dee-haa-yi far-dee wa ij-ti-maa-ee, bar mab-naa-yi ma-naa-fi-yi mil-lee, neez ta-was-su-ti qaa-noon ta-yeen may-gar-dad.",
        "mean": "of course, the borders and limits of personal and social freedoms are also set by law, on the basis of the national interest.",
        "words": [
          [
            "البته",
            "al-bat-ta",
            "al-bat-ta"
          ],
          [
            "مرزها",
            "marz-haa",
            "marz-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حدود",
            "hu-doo-di",
            "hu-dood"
          ],
          [
            "آزادی‌های",
            "aa-zaa-dee-haa-yi",
            "aa-zaa-dee-haa"
          ],
          [
            "فردی",
            "far-dee",
            "far-dee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اجتماعی،",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar mab-naa-yi"
          ],
          [
            "مبنای",
            "mab-naa-yi",
            "mab-naa",
            "bar mab-naa-yi"
          ],
          [
            "منافع",
            "ma-naa-fi-yi",
            "ma-naa-fi"
          ],
          [
            "ملی،",
            "mil-lee",
            "mil-lee"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "قانون",
            "qaa-noon",
            "qaa-noon"
          ],
          [
            "تعیین",
            "ta-yeen",
            "ta-yeen",
            "ta-yeen may-gar-dad"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "ta-yeen may-gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "dar een maw-rid qa-waa-nee-ni ha-ma kish-war-haa huk-mi yak-saan na-daa-rad",
        "mean": "In this the laws of all countries are not the same.",
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
            "مورد",
            "maw-rid",
            "maw-rid"
          ],
          [
            "قوانین",
            "qa-waa-nee-ni",
            "qa-waa-neen"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "کشور‌ها",
            "kish-war-haa",
            "kish-war-haa"
          ],
          [
            "حکم",
            "huk-mi",
            "hukm"
          ],
          [
            "یکسان",
            "yak-saan",
            "yak-saan"
          ],
          [
            "ندارد",
            "na-daa-rad",
            "na-daa-rad",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "maw-zoo-yi mu-hi-mi dee-gar een ast ki ba-zay az mar-dum, di-mo-ki-raa-see raa fa-qat laa-zi-ma-yi ni-zaam-haa-yi jam-hoo-ree may-daa-nand, nuh shaa-hee,",
        "mean": "Another important point is that some people think democracy belongs only to republics, not to monarchies;",
        "words": [
          [
            "موضوع",
            "maw-zoo-yi",
            "maw-zoo"
          ],
          [
            "مهم",
            "mu-hi-mi",
            "mu-him"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "این",
            "een",
            "een"
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
            "بعضی",
            "ba-zay",
            "ba-zay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مردم،",
            "mar-dum",
            "mar-dum"
          ],
          [
            "دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "فقط",
            "fa-qat",
            "fa-qat"
          ],
          [
            "لازمهٔ",
            "laa-zi-ma-yi",
            "laa-zi-ma"
          ],
          [
            "نظام‌های",
            "ni-zaam-haa-yi",
            "ni-zaam-haa"
          ],
          [
            "جمهوری",
            "jam-hoo-ree",
            "jam-hoo-ree"
          ],
          [
            "می‌دانند،",
            "may-daa-nand",
            "may-daa-nand",
            "daa-nis-tan"
          ],
          [
            "نه",
            "nuh",
            "nuh"
          ],
          [
            "شاهی،",
            "shaa-hee",
            "shaa-hee"
          ]
        ]
      },
      {
        "say": "dar een maw-rid baa-yad guft ki dar yak ni-zaa-mi shaa-hee-yi mash-roo-ta, gar-chi paad-shaa-hee dar yak khaa-na-waa-da az ta-ree-qi irs in-ti-qaal may-ku-nad;",
        "mean": "on this it must be said that in a constitutional monarchy, although the kingship passes down within one family by inheritance,",
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
            "مورد",
            "maw-rid",
            "maw-rid"
          ],
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
            "نظام",
            "ni-zaa-mi",
            "ni-zaam"
          ],
          [
            "شاهی",
            "shaa-hee-yi",
            "shaa-hee",
            "shaa-hee-yi mash-roo-ta"
          ],
          [
            "مشروطه،",
            "mash-roo-ta",
            "mash-roo-ta",
            "shaa-hee-yi mash-roo-ta"
          ],
          [
            "گرچه",
            "gar-chi",
            "gar-chi"
          ],
          [
            "پادشاهی",
            "paad-shaa-hee",
            "paad-shaa-hee"
          ],
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
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "از",
            "az",
            "az",
            "az ta-ree-qi"
          ],
          [
            "طریق",
            "ta-ree-qi",
            "ta-reeq",
            "az ta-ree-qi"
          ],
          [
            "ارث",
            "irs",
            "irs"
          ],
          [
            "انتقال",
            "in-ti-qaal",
            "in-ti-qaal",
            "in-ti-qaal may-ku-nad",
            "in-ti-qaal kar-dan"
          ],
          [
            "می‌کند؛",
            "may-ku-nad",
            "may-ku-nad",
            "in-ti-qaal may-ku-nad",
            "kar-dan",
            "in-ti-qaal kar-dan"
          ]
        ]
      },
      {
        "say": "wa-lay har-gaah mar-dum aa-zaa-dee daash-ta baa-shand ki na-maa-yan-da-gaan-shaan raa ba-raa-yi shoo-raa in-ti-khaab ku-nand wa shoo-raa hu-koo-mat raa wa ham-chu-neen i-jaa-za daash-ta baa-shand ki fikr wa na-za-ri khud raa aa-zaa-daa-na ba-yaan ku-nand wa yaa ra-saa-na-haa wa ni-haad-haa-yi khu-soo-see ee-jaad na-maa-yand wa.... pas di-mo-ki-raa-see wu-jood daa-rad;",
        "mean": "if the people are free to choose their representatives for parliament, and parliament the government, and are also allowed to express their thoughts and opinions freely, or to set up private media and organizations and so on, then there is democracy;",
        "words": [
          [
            "ولی",
            "wa-lay",
            "wa-lay"
          ],
          [
            "هرگاه",
            "har-gaah",
            "har-gaah"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "آزادی",
            "aa-zaa-dee",
            "aa-zaa-dee"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
          ],
          [
            "باشند",
            "baa-shand",
            "baa-shand",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "نماینده‌گان‌شان",
            "na-maa-yan-da-gaan-shaan",
            "na-maa-yan-da-gaan-shaan"
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
            "شورا",
            "shoo-raa",
            "shoo-raa"
          ],
          [
            "انتخاب",
            "in-ti-khaab",
            "in-ti-khaab"
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
            "شورا",
            "shoo-raa",
            "shoo-raa"
          ],
          [
            "حکومت",
            "hu-koo-mat",
            "hu-koo-mat"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "همچنین",
            "ham-chu-neen",
            "ham-chu-neen"
          ],
          [
            "اجازه",
            "i-jaa-za",
            "i-jaa-za",
            "i-jaa-za daash-ta baa-shand",
            "i-jaa-za daash-tan"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "i-jaa-za daash-ta baa-shand",
            "daash-tan",
            "i-jaa-za daash-tan"
          ],
          [
            "باشند",
            "baa-shand",
            "baa-shand",
            "i-jaa-za daash-ta baa-shand",
            "bu-dan",
            "i-jaa-za daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "نظر",
            "na-za-ri",
            "na-zar"
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
            "آزادانه",
            "aa-zaa-daa-na",
            "aa-zaa-daa-na"
          ],
          [
            "بیان",
            "ba-yaan",
            "ba-yaan",
            "ba-yaan ku-nand",
            "ba-yaan kar-dan"
          ],
          [
            "کنند",
            "ku-nand",
            "ku-nand",
            "ba-yaan ku-nand",
            "kar-dan",
            "ba-yaan kar-dan"
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
            "نهادهای",
            "ni-haad-haa-yi",
            "ni-haad-haa"
          ],
          [
            "خصوصی",
            "khu-soo-see",
            "khu-soo-see"
          ],
          [
            "ایجاد",
            "ee-jaad",
            "ee-jaad",
            "ee-jaad na-maa-yand",
            "ee-jaad na-mo-dan"
          ],
          [
            "نمایند",
            "na-maa-yand",
            "na-maa-yand",
            "ee-jaad na-maa-yand",
            "na-mo-dan",
            "ee-jaad na-mo-dan"
          ],
          [
            "و....",
            "wa",
            "wa"
          ],
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
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
        "say": "am-maa dar ni-zaam-haa-yi ba zaa-hir jam-hoo-ree ki ak-sar az ta-ree-qi koo-de-taa ba wu-jood may-aa-yand, aa-zaa-dee-haa wu-jood na-daa-rad wa in-ti-khaa-baa-ti waa-qi-ee soo-rat na-may-gee-rad;",
        "mean": "but in so-called republics, which mostly come about through a coup, there are no freedoms and no real elections take place;",
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
            "نظام‌های",
            "ni-zaam-haa-yi",
            "ni-zaam-haa"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba zaa-hir"
          ],
          [
            "ظاهر",
            "zaa-hir",
            "zaa-hir",
            "ba zaa-hir"
          ],
          [
            "جمهوری",
            "jam-hoo-ree",
            "jam-hoo-ree"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "اکثر",
            "ak-sar",
            "ak-sar"
          ],
          [
            "از",
            "az",
            "az",
            "az ta-ree-qi"
          ],
          [
            "طریق",
            "ta-ree-qi",
            "ta-reeq",
            "az ta-ree-qi"
          ],
          [
            "کودتا",
            "koo-de-taa",
            "koo-de-taa"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba wu-jood may-aa-yand",
            "ba wu-jood aa-ma-dan"
          ],
          [
            "وجود",
            "wu-jood",
            "wu-jood",
            "ba wu-jood may-aa-yand",
            "ba wu-jood aa-ma-dan"
          ],
          [
            "می‌آیند،",
            "may-aa-yand",
            "may-aa-yand",
            "ba wu-jood may-aa-yand",
            "aa-ma-dan",
            "ba wu-jood aa-ma-dan"
          ],
          [
            "آزادی‌ها",
            "aa-zaa-dee-haa",
            "aa-zaa-dee-haa"
          ],
          [
            "وجود",
            "wu-jood",
            "wu-jood"
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
            "انتخابات",
            "in-ti-khaa-baa-ti",
            "in-ti-khaa-baat"
          ],
          [
            "واقعی",
            "waa-qi-ee",
            "waa-qi-ee"
          ],
          [
            "صورت",
            "soo-rat",
            "soo-rat",
            "soo-rat na-may-gee-rad",
            "soo-rat gi-rif-tan"
          ],
          [
            "نمی‌گیرد؛",
            "na-may-gee-rad",
            "na-may-gee-rad",
            "soo-rat na-may-gee-rad",
            "gi-rif-tan",
            "soo-rat gi-rif-tan"
          ]
        ]
      },
      {
        "say": "pas dar een soo-rat na-may-ta-waan guft ki di-mo-ki-raa-see tan-haa laa-zi-ma-yi ni-zaam-haa-yi jam-hoo-ree wa yaa shaa-hee ast.",
        "mean": "so one cannot say that democracy belongs only to republics or to monarchies.",
        "words": [
          [
            "پس",
            "pas",
            "pas"
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
            "صورت",
            "soo-rat",
            "soo-rat"
          ],
          [
            "نمی‌توان",
            "na-may-ta-waan",
            "na-may-ta-waan"
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
            "دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "لازمهٔ",
            "laa-zi-ma-yi",
            "laa-zi-ma"
          ],
          [
            "نظام‌های",
            "ni-zaam-haa-yi",
            "ni-zaam-haa"
          ],
          [
            "جمهوری",
            "jam-hoo-ree",
            "jam-hoo-ree"
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
            "شاهی",
            "shaa-hee",
            "shaa-hee"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "maa na-mo-na-haa-yay daa-raym ki pas az faw-ti yak ra-ee-si jam-hoor, pi-sa-ri oo ba qud-rat may-ra-sad;",
        "mean": "We have examples where, after a president dies, his son comes to power;",
        "words": [
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "نمونه‌هایی",
            "na-mo-na-haa-yay",
            "na-mo-na-haa-yay"
          ],
          [
            "داریم",
            "daa-raym",
            "daa-raym",
            "daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "فوت",
            "faw-ti",
            "fawt"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "رئیس",
            "ra-ee-si",
            "ra-ees",
            "ra-ee-si jam-hoor"
          ],
          [
            "جمهور،",
            "jam-hoor",
            "jam-hoor",
            "ra-ee-si jam-hoor"
          ],
          [
            "پسر",
            "pi-sa-ri",
            "pi-sar"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba qud-rat may-ra-sad",
            "ba qud-rat ra-see-dan"
          ],
          [
            "قدرت",
            "qud-rat",
            "qud-rat",
            "ba qud-rat may-ra-sad",
            "ba qud-rat ra-see-dan"
          ],
          [
            "می‌رسد؛",
            "may-ra-sad",
            "may-ra-sad",
            "ba qud-rat may-ra-sad",
            "ra-see-dan",
            "ba qud-rat ra-see-dan"
          ]
        ]
      },
      {
        "say": "pas di-mo-ki-raa-see yak rawsh ast nuh ni-zaam, ki mum-kin ast dar ni-zaam-haa-yi shaa-hee yaa jam-hoo-ree wu-jood daash-ta wa yaa na-daash-ta baa-shad.",
        "mean": "so democracy is a method, not a system, and it may or may not exist in monarchies or in republics.",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "دموکراسی",
            "di-mo-ki-raa-see",
            "di-mo-ki-raa-see"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "روش",
            "rawsh",
            "rawsh"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "نه",
            "nuh",
            "nuh"
          ],
          [
            "نظام،",
            "ni-zaam",
            "ni-zaam"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "ممکن",
            "mum-kin",
            "mum-kin"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "نظام‌های",
            "ni-zaam-haa-yi",
            "ni-zaam-haa"
          ],
          [
            "شاهی",
            "shaa-hee",
            "shaa-hee"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "جمهوری",
            "jam-hoo-ree",
            "jam-hoo-ree"
          ],
          [
            "وجود",
            "wu-jood",
            "wu-jood"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
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
            "نداشته",
            "na-daash-ta",
            "na-daash-ta",
            "daash-tan"
          ],
          [
            "باشد.",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ]
        ]
      }
    ]
  ]
});
