/* Conference of the Birds, abridged, in Dari: chapter 3.
   The Persian is the owner's text, copied exactly from
   "3 - Language Learning/Farsi/Reading/Conference of the Birds Abridged/2-2.md"
   in the Obsidian vault. The chapter's Dari name, every sound, meaning and
   English line was written for this reader; nothing here comes from a PDF.
   Sounds are Kabul Dari read aloud, in Onion Skin's letters (see "sounds").
   Made by a script from a word list and marked-up sentences; how this file
   is laid out is explained in README.md. */
READINGS.push({
  id: 'birds-03',
  group: 'Conference of the Birds · Dari',
  label: 'Chapter 3',
  name: 'too-tee wa aab-i ha-yaat',
  source: 'Conference of the Birds Abridged/2-2.md',

  // The chapter read aloud. Until the owner gives the sound, the file is
  // not there and the player stays hidden.
  audio: 'audio/birds_03.js',

  // Every word and phrase the slips show. The key is the sound.
  words: {
    'too-tee':                                   { fa: 'طوطی', mean: 'parrot' },
    'wa':                                        { fa: 'و', mean: 'and' },
    'aab':                                       { fa: 'آب', mean: 'water' },
    'aab-i ha-yaat':                             { fa: 'آب حیات', mean: 'the water of life: whoever drinks it never dies' },
    'ha-yaat':                                   { fa: 'حیات', mean: 'life' },
    'baad':                                      { fa: 'بعد', mean: 'after, then' },
    'baad az':                                   { fa: 'بعد از', mean: 'after' },
    'az':                                        { fa: 'از', mean: 'from, of; than' },
    'bul-bul':                                   { fa: 'بلبل', mean: 'nightingale' },
    'paysh':                                     { fa: 'پیش', mean: 'forward; to (someone); before' },
    'paysh aa-mad':                              { fa: 'پیش آمد', mean: 'came forward, stepped up' },
    'paysh aa-ma-dan':                           { fa: 'پیش آمدن', mean: 'to come forward, to step up' },
    'aa-mad':                                    { fa: 'آمد', mean: 'came' },
    'oo':                                        { fa: 'او', mean: 'he, she; him, her' },
    'yak':                                       { fa: 'یک', mean: 'a, one' },
    'pa-ran-da':                                 { fa: 'پرنده', mean: 'bird' },
    'pa-ran-da-yi bis-yaar maq-bool':            { fa: 'پرنده بسیار مقبول', mean: 'a very beautiful bird' },
    'bis-yaar':                                  { fa: 'بسیار', mean: 'very, a lot' },
    'maq-bool':                                  { fa: 'مقبول', mean: 'beautiful, good-looking' },
    'bood':                                      { fa: 'بود', mean: 'was' },
    'boo-dan':                                   { fa: 'بودن', mean: 'to be' },
    'par-haa-yi':                                { fa: 'پرهای', mean: 'the feathers of; feathers (before a describing word)' },
    'par-haa-yi oo':                             { fa: 'پرهای او', mean: 'his feathers' },
    'sabz':                                      { fa: 'سبز', mean: 'green' },
    'hal-qa':                                    { fa: 'حلقه', mean: 'ring' },
    'hal-qa-yi ta-laa-yee':                      { fa: 'حلقه طلایی', mean: 'a gold ring' },
    'ta-laa-yee':                                { fa: 'طلایی', mean: 'golden, gold' },
    'dar':                                       { fa: 'در', mean: 'in, at' },
    'dar gar-dan':                               { fa: 'در گردن', mean: 'around (his) neck' },
    'gar-dan':                                   { fa: 'گردن', mean: 'neck' },
    'daasht':                                    { fa: 'داشت', mean: 'had' },
    'daash-tan':                                 { fa: 'داشتن', mean: 'to have' },
    'guft':                                      { fa: 'گفت', mean: 'said' },
    'guf-tan':                                   { fa: 'گفتن', mean: 'to say, to tell' },
    'aa-dam-haa-yi':                             { fa: 'آدم‌های', mean: 'people (before a describing word)' },
    'aa-dam-haa-yi zaa-lim':                     { fa: 'آدم‌های ظالم', mean: 'cruel people' },
    'zaa-lim':                                   { fa: 'ظالم', mean: 'cruel' },
    'ma-raa':                                    { fa: 'مرا', mean: 'me - man, me, + raa' },
    'dar qa-fas':                                { fa: 'در قفس', mean: 'into a cage' },
    'qa-fas':                                    { fa: 'قفس', mean: 'cage' },
    'may-an-daa-zand':                           { fa: 'می‌اندازند', mean: 'they throw' },
    'an-daakh-tan':                              { fa: 'انداختن', mean: 'to throw' },
    'man':                                       { fa: 'من', mean: 'I, me; after a noun, my' },
    'may-khaa-ham':                              { fa: 'می‌خواهم', mean: 'I want' },
    'khaas-tan':                                 { fa: 'خواستن', mean: 'to want' },
    'aa-zaad':                                   { fa: 'آزاد', mean: 'free' },
    'aa-zaad baa-sham':                          { fa: 'آزاد باشم', mean: '(that) I be free' },
    'baa-sham':                                  { fa: 'باشم', mean: '(that) I be' },
    'paad-shaah':                                { fa: 'پادشاه', mean: 'king' },
    'paad-shaah-i shu-maa':                      { fa: 'پادشاه شما', mean: 'your king' },
    'shu-maa':                                   { fa: 'شما', mean: 'you (more than one, or polite)' },
    'raa':                                       { fa: 'را', mean: 'marks the object of the verb - no English word' },
    'kaar':                                      { fa: 'کار', mean: 'work, a job' },
    'kaar na-daa-ram':                           { fa: 'کار ندارم', mean: 'I don’t need - literally I have no work (with)' },
    'kaar daash-tan':                            { fa: 'کار داشتن', mean: 'to need' },
    'na-daa-ram':                                { fa: 'ندارم', mean: 'I don’t have' },
    'pay-daa':                                   { fa: 'پیدا', mean: 'found' },
    'pay-daa ku-nam':                            { fa: 'پیدا کنم', mean: '(that) I find' },
    'pay-daa kar-dan':                           { fa: 'پیدا کردن', mean: 'to find' },
    'ku-nam':                                    { fa: 'کنم', mean: '(that) I do' },
    'haz-rat':                                   { fa: 'حضرت', mean: 'a title of respect before a prophet’s name' },
    'haz-rat-i khi-zir':                         { fa: 'حضرت خضر', mean: 'the prophet Khizr' },
    'khi-zir':                                   { fa: 'خضر', mean: 'Khizr, the prophet who drank the water of life' },
    'az een aab':                                { fa: 'از این آب', mean: 'from this water' },
    'een':                                       { fa: 'این', mean: 'this' },
    'no-shee-da':                                { fa: 'نوشیده', mean: 'drunk' },
    'no-shee-da ast':                            { fa: 'نوشیده است', mean: 'has drunk' },
    'no-shee-dan':                               { fa: 'نوشیدن', mean: 'to drink' },
    'ast':                                       { fa: 'است', mean: 'is' },
    'ham':                                       { fa: 'هم', mean: 'also, too; with baa, each other' },
    'misl':                                      { fa: 'مثل', mean: 'like' },
    'misl-i man':                                { fa: 'مثل من', mean: 'like me' },
    'li-baas':                                   { fa: 'لباس', mean: 'clothes' },
    'li-baas-i sabz':                            { fa: 'لباس سبز', mean: 'green clothes' },
    'daa-rad':                                   { fa: 'دارد', mean: 'has' },
    'misl-i oo':                                 { fa: 'مثل او', mean: 'like him' },
    'has-tam':                                   { fa: 'هستم', mean: 'I am' },
    'fa-qat':                                    { fa: 'فقط', mean: 'only' },
    'az aan aab':                                { fa: 'از آن آب', mean: 'from that water' },
    'aan':                                       { fa: 'آن', mean: 'that, it' },
    'bi-no-sham':                                { fa: 'بنوشم', mean: '(that) I drink' },
    'ha-may-sha':                                { fa: 'همیشه', mean: 'always' },
    'ha-may-sha zin-da bi-maa-nam':              { fa: 'همیشه زنده بمانم', mean: '(that) I stay alive forever' },
    'zin-da':                                    { fa: 'زنده', mean: 'alive' },
    'bi-maa-nam':                                { fa: 'بمانم', mean: '(that) I stay' },
    'haych':                                     { fa: 'هیچ', mean: 'no, not any; nothing' },
    'haych waqt':                                { fa: 'هیچ وقت', mean: 'never (with a “not” verb) - literally no time' },
    'waqt':                                      { fa: 'وقت', mean: 'time' },
    'na-mee-ram':                                { fa: 'نمیرم', mean: '(that) I don’t die' },
    'mur-dan':                                   { fa: 'مردن', mean: 'to die' },
    'aar-zoo-yi':                                { fa: 'آرزوی', mean: 'the wish of' },
    'aar-zoo-yi man':                            { fa: 'آرزوی من', mean: 'my wish' },
    'hud-hud':                                   { fa: 'هدهد', mean: 'the Hoopoe, a bird with a crown of feathers' },
    'ba':                                        { fa: 'به', mean: 'to, at' },
    'ba too-tee':                                { fa: 'به طوطی', mean: 'to the parrot' },
    'ja-waab':                                   { fa: 'جواب', mean: 'answer' },
    'ja-waab daad':                              { fa: 'جواب داد', mean: 'answered' },
    'ja-waab daa-dan':                           { fa: 'جواب دادن', mean: 'to answer' },
    'daad':                                      { fa: 'داد', mean: 'gave' },
    'ay':                                        { fa: 'ای', mean: 'O … - said before the name of someone you call to' },
    'tu':                                        { fa: 'تو', mean: 'you (one person)' },
    'jaan':                                      { fa: 'جان', mean: 'life, soul; body' },
    'jaan-i khud':                               { fa: 'جان خود', mean: 'your own life, his own life' },
    'khud':                                      { fa: 'خود', mean: 'own, self' },
    'bis-yaar dost daa-ree':                     { fa: 'بسیار دوست داری', mean: 'you love very much' },
    'dost daash-tan':                            { fa: 'دوست داشتن', mean: 'to love, to like' },
    'dost':                                      { fa: 'دوست', mean: 'friend' },
    'daa-ree':                                   { fa: 'داری', mean: 'you have' },
    'shu-jaa':                                   { fa: 'شجاع', mean: 'brave' },
    'nays-tee':                                  { fa: 'نیستی', mean: 'you are not' },
    'pa-ran-da-yi tar-soo':                      { fa: 'پرنده ترسو', mean: 'a cowardly bird' },
    'tar-soo':                                   { fa: 'ترسو', mean: 'cowardly, a coward' },
    'has-tee':                                   { fa: 'هستی', mean: 'you are' },
    'ba fikr-i aab wa jaan-i khud has-tee':      { fa: 'به فکر آب و جان خود هستی', mean: 'you think about water and your own life' },
    'ba fikr-i … has-tee':                       { fa: 'به فکر … هستی', mean: 'you think about …' },
    'fikr':                                      { fa: 'فکر', mean: 'thought' },
    'li-baas-i tu':                              { fa: 'لباس تو', mean: 'your clothes' },
    'am-maa':                                    { fa: 'اما', mean: 'but' },
    'fikr-i tu':                                 { fa: 'فکر تو', mean: 'your thinking' },
    'kha-raab':                                  { fa: 'خراب', mean: 'ruined, bad' },
    'ka-say':                                    { fa: 'کسی', mean: 'someone, anyone' },
    'ka-say ki':                                 { fa: 'کسی که', mean: 'whoever, the one who' },
    'ki':                                        { fa: 'که', mean: 'that; who, which' },
    'aa-shiq':                                   { fa: 'عاشق', mean: 'in love; a lover' },
    'az … na-may-tar-sad':                       { fa: 'از … نمی‌ترسد', mean: 'is not afraid of …' },
    'marg':                                      { fa: 'مرگ', mean: 'death' },
    'na-may-tar-sad':                            { fa: 'نمی‌ترسد', mean: 'is not afraid' },
    'baa-yad':                                   { fa: 'باید', mean: 'must, have to' },
    'fi-daa':                                    { fa: 'فدا', mean: 'given up, sacrificed' },
    'fi-daa ku-nad':                             { fa: 'فدا کند', mean: '(that) he give up (his life)' },
    'fi-daa kar-dan':                            { fa: 'فدا کردن', mean: 'to give up (your life) for something' },
    'ku-nad':                                    { fa: 'کند', mean: '(that) he does' },
    'een qis-sa raa bish-naw':                   { fa: 'این قصه را بشنو', mean: 'listen to this story' },
    'qis-sa':                                    { fa: 'قصه', mean: 'story' },
    'bish-naw':                                  { fa: 'بشنو', mean: 'listen!' },
    'roz':                                       { fa: 'روز', mean: 'day' },
    'mard':                                      { fa: 'مرد', mean: 'man' },
    'mard-i khoob':                              { fa: 'مرد خوب', mean: 'a good man' },
    'khoob':                                     { fa: 'خوب', mean: 'good' },
    'deed':                                      { fa: 'دید', mean: 'saw' },
    'dee-dan':                                   { fa: 'دیدن', mean: 'to see' },
    'khu-daa':                                   { fa: 'خدا', mean: 'God' },
    'dost daasht':                               { fa: 'دوست داشت', mean: 'loved' },
    'ba fikr-i khu-daa bood':                    { fa: 'به فکر خدا بود', mean: 'was thinking about God' },
    'ba oo':                                     { fa: 'به او', mean: 'to him, to her' },
    'aa-yaa':                                    { fa: 'آیا', mean: 'starts a yes-or-no question' },
    'may-khaa-hee':                              { fa: 'می‌خواهی', mean: 'you want' },
    'dost-i man baa-shee':                       { fa: 'دوست من باشی', mean: '(that) you be my friend' },
    'baa-shee':                                  { fa: 'باشی', mean: '(that) you be' },
    'maa':                                       { fa: 'ما', mean: 'we, us; our' },
    'may-ta-waa-naym':                           { fa: 'می‌توانیم', mean: 'we can' },
    'ta-waa-nis-tan':                            { fa: 'توانستن', mean: 'to be able to, can' },
    'yak jaa':                                   { fa: 'یک جا', mean: 'together, in one place' },
    'jaa':                                       { fa: 'جا', mean: 'place' },
    'baa-shaym':                                 { fa: 'باشیم', mean: '(that) we be' },
    'baa':                                       { fa: 'با', mean: 'with' },
    'baa ham':                                   { fa: 'با هم', mean: 'with each other, together' },
    'sa-far':                                    { fa: 'سفر', mean: 'journey, travel' },
    'sa-far ku-naym':                            { fa: 'سفر کنیم', mean: '(that) we travel' },
    'sa-far kar-dan':                            { fa: 'سفر کردن', mean: 'to travel' },
    'ku-naym':                                   { fa: 'کنیم', mean: '(that) we do' },
    'nay':                                       { fa: 'نی', mean: 'no' },
    'na-may-ta-waa-nam':                         { fa: 'نمی‌توانم', mean: 'I can’t' },
    'dost-i tu baa-sham':                        { fa: 'دوست تو باشم', mean: '(that) I be your friend' },
    'raah':                                      { fa: 'راه', mean: 'road, way' },
    'raah-i maa':                                { fa: 'راه ما', mean: 'our way' },
    'farq':                                      { fa: 'فرق', mean: 'difference' },
    'farq daa-rad':                              { fa: 'فرق دارد', mean: 'is different - literally has difference' },
    'no-shee-dee':                               { fa: 'نوشیدی', mean: 'you drank' },
    'ha-may-sha zin-da bi-maa-nee':              { fa: 'همیشه زنده بمانی', mean: '(that) you stay alive forever' },
    'bi-maa-nee':                                { fa: 'بمانی', mean: '(that) you stay' },
    'zin-da-gee':                                { fa: 'زندگی', mean: 'life' },
    'ba-raa-yi':                                 { fa: 'برای', mean: 'for' },
    'ba-raa-yi tu':                              { fa: 'برای تو', mean: 'for you, to you' },
    'mu-him':                                    { fa: 'مهم', mean: 'important' },
    'ba-raa-yi man':                             { fa: 'برای من', mean: 'for me' },
    'fi-daa ku-nam':                             { fa: 'فدا کنم', mean: '(that) I give up (my life)' },
    'paysh-i khu-daa':                           { fa: 'پیش خدا', mean: 'to God' },
    'ba-ra-wam':                                 { fa: 'بروم', mean: '(that) I go' },
    'raf-tan':                                   { fa: 'رفتن', mean: 'to go' },
    'bay-sab-raa-na':                            { fa: 'بی‌صبرانه', mean: 'impatiently' },
    'bay-sab-raa-na mun-ta-zir-i marg has-tam':  { fa: 'بی‌صبرانه منتظر مرگ هستم', mean: 'I am waiting impatiently for death' },
    'mun-ta-zir':                                { fa: 'منتظر', mean: 'waiting' },
    'zin-da bi-maa-nee':                         { fa: 'زنده بمانی', mean: '(that) you stay alive' },
    'bi-mee-ram':                                { fa: 'بمیرم', mean: '(that) I die' },
    'pas':                                       { fa: 'پس', mean: 'so, then; back' },
    'dost shu-da na-may-ta-waa-naym':            { fa: 'دوست شده نمی‌توانیم', mean: 'we can’t become friends - Dari puts the -a form of a verb before “can”: shuda, become' },
    'dost shu-dan':                              { fa: 'دوست شدن', mean: 'to become friends' },
    'shu-da':                                    { fa: 'شده', mean: 'become' },
    'na-may-ta-waa-naym':                        { fa: 'نمی‌توانیم', mean: 'we can’t' },
    'raah-i khud':                               { fa: 'راه خود', mean: 'your own way, my own way' },
    'ba-raw':                                    { fa: 'برو', mean: 'go!' },
    'may-ra-wam':                                { fa: 'می‌روم', mean: 'I go, I will go' },
    'may-bee-nee':                               { fa: 'می‌بینی', mean: 'you see' },
    'jaan daa-dan':                              { fa: 'جان دادن', mean: 'giving your life, dying' },
    'daa-dan':                                   { fa: 'دادن', mean: 'to give' },
    'dar raah-i ishq':                           { fa: 'در راه عشق', mean: 'on the road of love, for love' },
    'ishq':                                      { fa: 'عشق', mean: 'love' },
    'beh-tar':                                   { fa: 'بهتر', mean: 'better' },
    'zin-da-gee-yi ha-may-sha-gee':              { fa: 'زندگی همیشگی', mean: 'life that lasts forever' },
    'ha-may-sha-gee':                            { fa: 'همیشگی', mean: 'lasting forever' }
  },

  // How the letters of the sounds are said, as in Onion Skin.
  sounds: [
    ['aa', 'as in “father”'],
    ['a', 'as in “cat”; a word’s last a, as in “sofa”'],
    ['ay', 'as in “say”'],
    ['ee', 'as in “see”'],
    ['i', 'as in “sit”'],
    ['o', 'as in “go”'],
    ['oo', 'as in “food”'],
    ['u', 'as in “put”'],
    ['aw', 'as in “cow”'],
    ['kh', 'the rough h in Scottish “loch”'],
    ['gh', 'a French r'],
    ['q', 'a k made deep in the throat'],
    ['-', 'between syllables; -i at the end of a word joins it to the next, “of”']
  ],

  // The chapter. Each word: [the word as written, its sound in this
  // sentence, then the entries from "words" its slip shows, in order].
  title: {
    say: 'too-tee wa aab-i ha-yaat',
    mean: 'The parrot and the water of life',
    words: [
      ['طوطی', 'too-tee', 'too-tee'],
      ['و', 'wa', 'wa'],
      ['آب', 'aab-i', 'aab', 'aab-i ha-yaat'],
      ['حیات', 'ha-yaat', 'ha-yaat', 'aab-i ha-yaat']
    ]
  },
  paragraphs: [
    [
      {
        say: 'baad az bul-bul, too-tee paysh aa-mad.',
        mean: 'After the nightingale, the parrot came forward.',
        words: [
          ['بعد', 'baad', 'baad', 'baad az'],
          ['از', 'az', 'az', 'baad az'],
          ['بلبل،', 'bul-bul', 'bul-bul'],
          ['طوطی', 'too-tee', 'too-tee'],
          ['پیش', 'paysh', 'paysh', 'paysh aa-mad', 'paysh aa-ma-dan'],
          ['آمد.', 'aa-mad', 'aa-mad', 'paysh aa-mad', 'paysh aa-ma-dan']
        ]
      },
      {
        say: 'oo yak pa-ran-da-yi bis-yaar maq-bool bood.',
        mean: 'He was a very beautiful bird.',
        words: [
          ['او', 'oo', 'oo'],
          ['یک', 'yak', 'yak'],
          ['پرنده', 'pa-ran-da-yi', 'pa-ran-da', 'pa-ran-da-yi bis-yaar maq-bool'],
          ['بسیار', 'bis-yaar', 'bis-yaar', 'pa-ran-da-yi bis-yaar maq-bool'],
          ['مقبول', 'maq-bool', 'maq-bool', 'pa-ran-da-yi bis-yaar maq-bool'],
          ['بود.', 'bood', 'bood', 'boo-dan']
        ]
      },
      {
        say: 'par-haa-yi oo sabz bood wa yak hal-qa-yi ta-laa-yee dar gar-dan daasht.',
        mean: 'His feathers were green and he had a gold ring around his neck.',
        words: [
          ['پرهای', 'par-haa-yi', 'par-haa-yi', 'par-haa-yi oo'],
          ['او', 'oo', 'oo', 'par-haa-yi oo'],
          ['سبز', 'sabz', 'sabz'],
          ['بود', 'bood', 'bood', 'boo-dan'],
          ['و', 'wa', 'wa'],
          ['یک', 'yak', 'yak'],
          ['حلقه', 'hal-qa-yi', 'hal-qa', 'hal-qa-yi ta-laa-yee'],
          ['طلایی', 'ta-laa-yee', 'ta-laa-yee', 'hal-qa-yi ta-laa-yee'],
          ['در', 'dar', 'dar', 'dar gar-dan'],
          ['گردن', 'gar-dan', 'gar-dan', 'dar gar-dan'],
          ['داشت.', 'daasht', 'daasht', 'daash-tan']
        ]
      },
      {
        say: 'too-tee guft: “aa-dam-haa-yi zaa-lim ma-raa dar qa-fas may-an-daa-zand.',
        mean: 'The parrot said, “Cruel people throw me into a cage.',
        words: [
          ['طوطی', 'too-tee', 'too-tee'],
          ['گفت:', 'guft', 'guft', 'guf-tan'],
          ['«آدم‌های', 'aa-dam-haa-yi', 'aa-dam-haa-yi', 'aa-dam-haa-yi zaa-lim'],
          ['ظالم', 'zaa-lim', 'zaa-lim', 'aa-dam-haa-yi zaa-lim'],
          ['مرا', 'ma-raa', 'ma-raa'],
          ['در', 'dar', 'dar', 'dar qa-fas'],
          ['قفس', 'qa-fas', 'qa-fas', 'dar qa-fas'],
          ['می‌اندازند.', 'may-an-daa-zand', 'may-an-daa-zand', 'an-daakh-tan']
        ]
      },
      {
        say: 'man may-khaa-ham aa-zaad baa-sham.',
        mean: 'I want to be free.',
        words: [
          ['من', 'man', 'man'],
          ['می‌خواهم', 'may-khaa-ham', 'may-khaa-ham', 'khaas-tan'],
          ['آزاد', 'aa-zaad', 'aa-zaad', 'aa-zaad baa-sham'],
          ['باشم.', 'baa-sham', 'baa-sham', 'aa-zaad baa-sham']
        ]
      },
      {
        say: 'man paad-shaah-i shu-maa raa kaar na-daa-ram.',
        mean: 'I don’t need your king.',
        words: [
          ['من', 'man', 'man'],
          ['پادشاه', 'paad-shaah-i', 'paad-shaah', 'paad-shaah-i shu-maa'],
          ['شما', 'shu-maa', 'shu-maa', 'paad-shaah-i shu-maa'],
          ['را', 'raa', 'raa'],
          ['کار', 'kaar', 'kaar', 'kaar na-daa-ram', 'kaar daash-tan'],
          ['ندارم.', 'na-daa-ram', 'na-daa-ram', 'kaar na-daa-ram', 'kaar daash-tan']
        ]
      },
      {
        say: 'man may-khaa-ham aab-i ha-yaat raa pay-daa ku-nam.',
        mean: 'I want to find the water of life.',
        words: [
          ['من', 'man', 'man'],
          ['می‌خواهم', 'may-khaa-ham', 'may-khaa-ham', 'khaas-tan'],
          ['آب', 'aab-i', 'aab', 'aab-i ha-yaat'],
          ['حیات', 'ha-yaat', 'ha-yaat', 'aab-i ha-yaat'],
          ['را', 'raa', 'raa'],
          ['پیدا', 'pay-daa', 'pay-daa', 'pay-daa ku-nam', 'pay-daa kar-dan'],
          ['کنم.', 'ku-nam', 'ku-nam', 'pay-daa ku-nam', 'pay-daa kar-dan']
        ]
      },
      {
        say: 'haz-rat-i khi-zir az een aab no-shee-da ast.',
        mean: 'The prophet Khizr has drunk from this water.',
        words: [
          ['حضرت', 'haz-rat-i', 'haz-rat', 'haz-rat-i khi-zir'],
          ['خضر', 'khi-zir', 'khi-zir', 'haz-rat-i khi-zir'],
          ['از', 'az', 'az', 'az een aab'],
          ['این', 'een', 'een', 'az een aab'],
          ['آب', 'aab', 'aab', 'az een aab'],
          ['نوشیده', 'no-shee-da', 'no-shee-da', 'no-shee-da ast', 'no-shee-dan'],
          ['است.', 'ast', 'ast', 'no-shee-da ast', 'no-shee-dan']
        ]
      },
      {
        say: 'khi-zir ham misl-i man li-baas-i sabz daa-rad.',
        mean: 'Khizr also wears green clothes, like me.',
        words: [
          ['خضر', 'khi-zir', 'khi-zir'],
          ['هم', 'ham', 'ham'],
          ['مثل', 'misl-i', 'misl', 'misl-i man'],
          ['من', 'man', 'man', 'misl-i man'],
          ['لباس', 'li-baas-i', 'li-baas', 'li-baas-i sabz'],
          ['سبز', 'sabz', 'sabz', 'li-baas-i sabz'],
          ['دارد.', 'daa-rad', 'daa-rad', 'daash-tan']
        ]
      },
      {
        say: 'man misl-i oo has-tam.',
        mean: 'I am like him.',
        words: [
          ['من', 'man', 'man'],
          ['مثل', 'misl-i', 'misl', 'misl-i oo'],
          ['او', 'oo', 'oo', 'misl-i oo'],
          ['هستم.', 'has-tam', 'has-tam', 'boo-dan']
        ]
      },
      {
        say: 'man fa-qat may-khaa-ham az aan aab bi-no-sham.',
        mean: 'I only want to drink from that water.',
        words: [
          ['من', 'man', 'man'],
          ['فقط', 'fa-qat', 'fa-qat'],
          ['می‌خواهم', 'may-khaa-ham', 'may-khaa-ham', 'khaas-tan'],
          ['از', 'az', 'az', 'az aan aab'],
          ['آن', 'aan', 'aan', 'az aan aab'],
          ['آب', 'aab', 'aab', 'az aan aab'],
          ['بنوشم.', 'bi-no-sham', 'bi-no-sham', 'no-shee-dan']
        ]
      },
      {
        say: 'man may-khaa-ham ha-may-sha zin-da bi-maa-nam wa haych waqt na-mee-ram.',
        mean: 'I want to stay alive forever and never die.',
        words: [
          ['من', 'man', 'man'],
          ['می‌خواهم', 'may-khaa-ham', 'may-khaa-ham', 'khaas-tan'],
          ['همیشه', 'ha-may-sha', 'ha-may-sha', 'ha-may-sha zin-da bi-maa-nam'],
          ['زنده', 'zin-da', 'zin-da', 'ha-may-sha zin-da bi-maa-nam'],
          ['بمانم', 'bi-maa-nam', 'bi-maa-nam', 'ha-may-sha zin-da bi-maa-nam'],
          ['و', 'wa', 'wa'],
          ['هیچ', 'haych', 'haych', 'haych waqt'],
          ['وقت', 'waqt', 'waqt', 'haych waqt'],
          ['نمیرم.', 'na-mee-ram', 'na-mee-ram', 'mur-dan']
        ]
      },
      {
        say: 'een aar-zoo-yi man ast.”',
        mean: 'This is my wish.”',
        words: [
          ['این', 'een', 'een'],
          ['آرزوی', 'aar-zoo-yi', 'aar-zoo-yi', 'aar-zoo-yi man'],
          ['من', 'man', 'man', 'aar-zoo-yi man'],
          ['است.»', 'ast', 'ast', 'boo-dan']
        ]
      }
    ],
    [
      {
        say: 'hud-hud ba too-tee ja-waab daad.',
        mean: 'The Hoopoe answered the parrot.',
        words: [
          ['هدهد', 'hud-hud', 'hud-hud'],
          ['به', 'ba', 'ba', 'ba too-tee'],
          ['طوطی', 'too-tee', 'too-tee', 'ba too-tee'],
          ['جواب', 'ja-waab', 'ja-waab', 'ja-waab daad', 'ja-waab daa-dan'],
          ['داد.', 'daad', 'daad', 'ja-waab daad', 'ja-waab daa-dan']
        ]
      },
      {
        say: 'oo guft: “ay too-tee!',
        mean: 'He said, “O parrot!',
        words: [
          ['او', 'oo', 'oo'],
          ['گفت:', 'guft', 'guft', 'guf-tan'],
          ['«ای', 'ay', 'ay'],
          ['طوطی!', 'too-tee', 'too-tee']
        ]
      },
      {
        say: 'tu jaan-i khud raa bis-yaar dost daa-ree.',
        mean: 'You love your own life very much.',
        words: [
          ['تو', 'tu', 'tu'],
          ['جان', 'jaan-i', 'jaan', 'jaan-i khud'],
          ['خود', 'khud', 'khud', 'jaan-i khud'],
          ['را', 'raa', 'raa'],
          ['بسیار', 'bis-yaar', 'bis-yaar', 'bis-yaar dost daa-ree', 'dost daash-tan'],
          ['دوست', 'dost', 'dost', 'bis-yaar dost daa-ree', 'dost daash-tan'],
          ['داری.', 'daa-ree', 'daa-ree', 'bis-yaar dost daa-ree', 'dost daash-tan']
        ]
      },
      {
        say: 'tu shu-jaa nays-tee.',
        mean: 'You are not brave.',
        words: [
          ['تو', 'tu', 'tu'],
          ['شجاع', 'shu-jaa', 'shu-jaa'],
          ['نیستی.', 'nays-tee', 'nays-tee', 'boo-dan']
        ]
      },
      {
        say: 'tu yak pa-ran-da-yi tar-soo has-tee.',
        mean: 'You are a cowardly bird.',
        words: [
          ['تو', 'tu', 'tu'],
          ['یک', 'yak', 'yak'],
          ['پرنده', 'pa-ran-da-yi', 'pa-ran-da', 'pa-ran-da-yi tar-soo'],
          ['ترسو', 'tar-soo', 'tar-soo', 'pa-ran-da-yi tar-soo'],
          ['هستی.', 'has-tee', 'has-tee', 'boo-dan']
        ]
      },
      {
        say: 'tu fa-qat ba fikr-i aab wa jaan-i khud has-tee.',
        mean: 'You only think about water and your own life.',
        words: [
          ['تو', 'tu', 'tu'],
          ['فقط', 'fa-qat', 'fa-qat'],
          ['به', 'ba', 'ba', 'ba fikr-i aab wa jaan-i khud has-tee', 'ba fikr-i … has-tee'],
          ['فکر', 'fikr-i', 'fikr', 'ba fikr-i aab wa jaan-i khud has-tee', 'ba fikr-i … has-tee'],
          ['آب', 'aab', 'aab', 'ba fikr-i aab wa jaan-i khud has-tee'],
          ['و', 'wa', 'wa', 'ba fikr-i aab wa jaan-i khud has-tee'],
          ['جان', 'jaan-i', 'jaan', 'ba fikr-i aab wa jaan-i khud has-tee'],
          ['خود', 'khud', 'khud', 'ba fikr-i aab wa jaan-i khud has-tee'],
          ['هستی.', 'has-tee', 'has-tee', 'ba fikr-i aab wa jaan-i khud has-tee', 'ba fikr-i … has-tee']
        ]
      },
      {
        say: 'li-baas-i tu maq-bool ast, am-maa fikr-i tu kha-raab ast.',
        mean: 'Your clothes are beautiful, but your thinking is bad.',
        words: [
          ['لباس', 'li-baas-i', 'li-baas', 'li-baas-i tu'],
          ['تو', 'tu', 'tu', 'li-baas-i tu'],
          ['مقبول', 'maq-bool', 'maq-bool'],
          ['است،', 'ast', 'ast', 'boo-dan'],
          ['اما', 'am-maa', 'am-maa'],
          ['فکر', 'fikr-i', 'fikr', 'fikr-i tu'],
          ['تو', 'tu', 'tu', 'fikr-i tu'],
          ['خراب', 'kha-raab', 'kha-raab'],
          ['است.', 'ast', 'ast', 'boo-dan']
        ]
      },
      {
        say: 'ka-say ki aa-shiq ast, az marg na-may-tar-sad.',
        mean: 'Whoever is in love is not afraid of death.',
        words: [
          ['کسی', 'ka-say', 'ka-say', 'ka-say ki'],
          ['که', 'ki', 'ki', 'ka-say ki'],
          ['عاشق', 'aa-shiq', 'aa-shiq'],
          ['است،', 'ast', 'ast', 'boo-dan'],
          ['از', 'az', 'az', 'az … na-may-tar-sad'],
          ['مرگ', 'marg', 'marg'],
          ['نمی‌ترسد.', 'na-may-tar-sad', 'na-may-tar-sad', 'az … na-may-tar-sad']
        ]
      },
      {
        say: 'aa-shiq baa-yad jaan-i khud raa fi-daa ku-nad.',
        mean: 'A lover must give up his life.',
        words: [
          ['عاشق', 'aa-shiq', 'aa-shiq'],
          ['باید', 'baa-yad', 'baa-yad'],
          ['جان', 'jaan-i', 'jaan', 'jaan-i khud'],
          ['خود', 'khud', 'khud', 'jaan-i khud'],
          ['را', 'raa', 'raa'],
          ['فدا', 'fi-daa', 'fi-daa', 'fi-daa ku-nad', 'fi-daa kar-dan'],
          ['کند.', 'ku-nad', 'ku-nad', 'fi-daa ku-nad', 'fi-daa kar-dan']
        ]
      },
      {
        say: 'een qis-sa raa bish-naw.”',
        mean: 'Listen to this story.”',
        words: [
          ['این', 'een', 'een', 'een qis-sa raa bish-naw'],
          ['قصه', 'qis-sa', 'qis-sa', 'een qis-sa raa bish-naw'],
          ['را', 'raa', 'raa', 'een qis-sa raa bish-naw'],
          ['بشنو.»', 'bish-naw', 'bish-naw', 'een qis-sa raa bish-naw']
        ]
      }
    ],
    [
      {
        say: '“yak roz haz-rat-i khi-zir yak mard-i khoob raa deed.',
        mean: '“One day the prophet Khizr saw a good man.',
        words: [
          ['«یک', 'yak', 'yak'],
          ['روز', 'roz', 'roz'],
          ['حضرت', 'haz-rat-i', 'haz-rat', 'haz-rat-i khi-zir'],
          ['خضر', 'khi-zir', 'khi-zir', 'haz-rat-i khi-zir'],
          ['یک', 'yak', 'yak'],
          ['مرد', 'mard-i', 'mard', 'mard-i khoob'],
          ['خوب', 'khoob', 'khoob', 'mard-i khoob'],
          ['را', 'raa', 'raa'],
          ['دید.', 'deed', 'deed', 'dee-dan']
        ]
      },
      {
        say: 'een mard fa-qat khu-daa raa dost daasht wa ha-may-sha ba fikr-i khu-daa bood.',
        mean: 'This man loved only God and always thought about God.',
        words: [
          ['این', 'een', 'een'],
          ['مرد', 'mard', 'mard'],
          ['فقط', 'fa-qat', 'fa-qat'],
          ['خدا', 'khu-daa', 'khu-daa'],
          ['را', 'raa', 'raa'],
          ['دوست', 'dost', 'dost', 'dost daasht', 'dost daash-tan'],
          ['داشت', 'daasht', 'daasht', 'dost daasht', 'dost daash-tan'],
          ['و', 'wa', 'wa'],
          ['همیشه', 'ha-may-sha', 'ha-may-sha'],
          ['به', 'ba', 'ba', 'ba fikr-i khu-daa bood'],
          ['فکر', 'fikr-i', 'fikr', 'ba fikr-i khu-daa bood'],
          ['خدا', 'khu-daa', 'khu-daa', 'ba fikr-i khu-daa bood'],
          ['بود.', 'bood', 'bood', 'ba fikr-i khu-daa bood']
        ]
      },
      {
        say: 'khi-zir ba oo guft: aa-yaa tu may-khaa-hee dost-i man baa-shee?',
        mean: 'Khizr said to him, ‘Do you want to be my friend?',
        words: [
          ['خضر', 'khi-zir', 'khi-zir'],
          ['به', 'ba', 'ba', 'ba oo'],
          ['او', 'oo', 'oo', 'ba oo'],
          ['گفت:', 'guft', 'guft', 'guf-tan'],
          ['آیا', 'aa-yaa', 'aa-yaa'],
          ['تو', 'tu', 'tu'],
          ['می‌خواهی', 'may-khaa-hee', 'may-khaa-hee', 'khaas-tan'],
          ['دوست', 'dost-i', 'dost', 'dost-i man baa-shee'],
          ['من', 'man', 'man', 'dost-i man baa-shee'],
          ['باشی؟', 'baa-shee', 'baa-shee', 'dost-i man baa-shee']
        ]
      },
      {
        say: 'maa may-ta-waa-naym yak jaa baa-shaym wa baa ham sa-far ku-naym.',
        mean: 'We can be together and travel together.',
        words: [
          ['ما', 'maa', 'maa'],
          ['می‌توانیم', 'may-ta-waa-naym', 'may-ta-waa-naym', 'ta-waa-nis-tan'],
          ['یک', 'yak', 'yak', 'yak jaa'],
          ['جا', 'jaa', 'jaa', 'yak jaa'],
          ['باشیم', 'baa-shaym', 'baa-shaym', 'boo-dan'],
          ['و', 'wa', 'wa'],
          ['با', 'baa', 'baa', 'baa ham'],
          ['هم', 'ham', 'ham', 'baa ham'],
          ['سفر', 'sa-far', 'sa-far', 'sa-far ku-naym', 'sa-far kar-dan'],
          ['کنیم.', 'ku-naym', 'ku-naym', 'sa-far ku-naym', 'sa-far kar-dan']
        ]
      },
      {
        say: 'mard ja-waab daad: nay, man na-may-ta-waa-nam dost-i tu baa-sham.',
        mean: 'The man answered, ‘No, I cannot be your friend.',
        words: [
          ['مرد', 'mard', 'mard'],
          ['جواب', 'ja-waab', 'ja-waab', 'ja-waab daad', 'ja-waab daa-dan'],
          ['داد:', 'daad', 'daad', 'ja-waab daad', 'ja-waab daa-dan'],
          ['نی،', 'nay', 'nay'],
          ['من', 'man', 'man'],
          ['نمی‌توانم', 'na-may-ta-waa-nam', 'na-may-ta-waa-nam', 'ta-waa-nis-tan'],
          ['دوست', 'dost-i', 'dost', 'dost-i tu baa-sham'],
          ['تو', 'tu', 'tu', 'dost-i tu baa-sham'],
          ['باشم.', 'baa-sham', 'baa-sham', 'dost-i tu baa-sham']
        ]
      },
      {
        say: 'raah-i maa farq daa-rad.',
        mean: 'Our paths are different.',
        words: [
          ['راه', 'raah-i', 'raah', 'raah-i maa'],
          ['ما', 'maa', 'maa', 'raah-i maa'],
          ['فرق', 'farq', 'farq', 'farq daa-rad'],
          ['دارد.', 'daa-rad', 'daa-rad', 'farq daa-rad']
        ]
      },
      {
        say: 'tu aab-i ha-yaat raa no-shee-dee.',
        mean: 'You drank the water of life.',
        words: [
          ['تو', 'tu', 'tu'],
          ['آب', 'aab-i', 'aab', 'aab-i ha-yaat'],
          ['حیات', 'ha-yaat', 'ha-yaat', 'aab-i ha-yaat'],
          ['را', 'raa', 'raa'],
          ['نوشیدی.', 'no-shee-dee', 'no-shee-dee', 'no-shee-dan']
        ]
      },
      {
        say: 'tu baa-yad ha-may-sha zin-da bi-maa-nee.',
        mean: 'You have to stay alive forever.',
        words: [
          ['تو', 'tu', 'tu'],
          ['باید', 'baa-yad', 'baa-yad'],
          ['همیشه', 'ha-may-sha', 'ha-may-sha', 'ha-may-sha zin-da bi-maa-nee'],
          ['زنده', 'zin-da', 'zin-da', 'ha-may-sha zin-da bi-maa-nee'],
          ['بمانی.', 'bi-maa-nee', 'bi-maa-nee', 'ha-may-sha zin-da bi-maa-nee']
        ]
      },
      {
        say: 'zin-da-gee ba-raa-yi tu mu-him ast.',
        mean: 'Life matters to you.',
        words: [
          ['زندگی', 'zin-da-gee', 'zin-da-gee'],
          ['برای', 'ba-raa-yi', 'ba-raa-yi', 'ba-raa-yi tu'],
          ['تو', 'tu', 'tu', 'ba-raa-yi tu'],
          ['مهم', 'mu-him', 'mu-him'],
          ['است.', 'ast', 'ast', 'boo-dan']
        ]
      },
      {
        say: 'am-maa marg ba-raa-yi man mu-him ast.',
        mean: 'But death matters to me.',
        words: [
          ['اما', 'am-maa', 'am-maa'],
          ['مرگ', 'marg', 'marg'],
          ['برای', 'ba-raa-yi', 'ba-raa-yi', 'ba-raa-yi man'],
          ['من', 'man', 'man', 'ba-raa-yi man'],
          ['مهم', 'mu-him', 'mu-him'],
          ['است.', 'ast', 'ast', 'boo-dan']
        ]
      },
      {
        say: 'man may-khaa-ham jaan-i khud raa fi-daa ku-nam wa paysh-i khu-daa ba-ra-wam.',
        mean: 'I want to give up my life and go to God.',
        words: [
          ['من', 'man', 'man'],
          ['می‌خواهم', 'may-khaa-ham', 'may-khaa-ham', 'khaas-tan'],
          ['جان', 'jaan-i', 'jaan', 'jaan-i khud'],
          ['خود', 'khud', 'khud', 'jaan-i khud'],
          ['را', 'raa', 'raa'],
          ['فدا', 'fi-daa', 'fi-daa', 'fi-daa ku-nam', 'fi-daa kar-dan'],
          ['کنم', 'ku-nam', 'ku-nam', 'fi-daa ku-nam', 'fi-daa kar-dan'],
          ['و', 'wa', 'wa'],
          ['پیش', 'paysh-i', 'paysh', 'paysh-i khu-daa'],
          ['خدا', 'khu-daa', 'khu-daa', 'paysh-i khu-daa'],
          ['بروم.', 'ba-ra-wam', 'ba-ra-wam', 'raf-tan']
        ]
      },
      {
        say: 'man bay-sab-raa-na mun-ta-zir-i marg has-tam.',
        mean: 'I am waiting impatiently for death.',
        words: [
          ['من', 'man', 'man'],
          ['بی‌صبرانه', 'bay-sab-raa-na', 'bay-sab-raa-na', 'bay-sab-raa-na mun-ta-zir-i marg has-tam'],
          ['منتظر', 'mun-ta-zir-i', 'mun-ta-zir', 'bay-sab-raa-na mun-ta-zir-i marg has-tam'],
          ['مرگ', 'marg', 'marg', 'bay-sab-raa-na mun-ta-zir-i marg has-tam'],
          ['هستم.', 'has-tam', 'has-tam', 'bay-sab-raa-na mun-ta-zir-i marg has-tam']
        ]
      },
      {
        say: 'tu may-khaa-hee zin-da bi-maa-nee, am-maa man may-khaa-ham bi-mee-ram.',
        mean: 'You want to stay alive, but I want to die.',
        words: [
          ['تو', 'tu', 'tu'],
          ['می‌خواهی', 'may-khaa-hee', 'may-khaa-hee', 'khaas-tan'],
          ['زنده', 'zin-da', 'zin-da', 'zin-da bi-maa-nee'],
          ['بمانی،', 'bi-maa-nee', 'bi-maa-nee', 'zin-da bi-maa-nee'],
          ['اما', 'am-maa', 'am-maa'],
          ['من', 'man', 'man'],
          ['می‌خواهم', 'may-khaa-ham', 'may-khaa-ham', 'khaas-tan'],
          ['بمیرم.', 'bi-mee-ram', 'bi-mee-ram', 'mur-dan']
        ]
      },
      {
        say: 'pas maa dost shu-da na-may-ta-waa-naym.',
        mean: 'So we cannot become friends.',
        words: [
          ['پس', 'pas', 'pas'],
          ['ما', 'maa', 'maa'],
          ['دوست', 'dost', 'dost', 'dost shu-da na-may-ta-waa-naym', 'dost shu-dan'],
          ['شده', 'shu-da', 'shu-da', 'dost shu-da na-may-ta-waa-naym', 'dost shu-dan'],
          ['نمی‌توانیم.', 'na-may-ta-waa-naym', 'na-may-ta-waa-naym', 'dost shu-da na-may-ta-waa-naym', 'dost shu-dan']
        ]
      },
      {
        say: 'tu raah-i khud raa ba-raw wa man raah-i khud raa may-ra-wam.”',
        mean: 'You go your way and I will go mine.’”',
        words: [
          ['تو', 'tu', 'tu'],
          ['راه', 'raah-i', 'raah', 'raah-i khud'],
          ['خود', 'khud', 'khud', 'raah-i khud'],
          ['را', 'raa', 'raa'],
          ['برو', 'ba-raw', 'ba-raw', 'raf-tan'],
          ['و', 'wa', 'wa'],
          ['من', 'man', 'man'],
          ['راه', 'raah-i', 'raah', 'raah-i khud'],
          ['خود', 'khud', 'khud', 'raah-i khud'],
          ['را', 'raa', 'raa'],
          ['می‌روم.»', 'may-ra-wam', 'may-ra-wam', 'raf-tan']
        ]
      }
    ],
    [
      {
        say: 'hud-hud ba too-tee guft: “may-bee-nee?',
        mean: 'The Hoopoe said to the parrot, “Do you see?',
        words: [
          ['هدهد', 'hud-hud', 'hud-hud'],
          ['به', 'ba', 'ba', 'ba too-tee'],
          ['طوطی', 'too-tee', 'too-tee', 'ba too-tee'],
          ['گفت:', 'guft', 'guft', 'guf-tan'],
          ['«می‌بینی؟', 'may-bee-nee', 'may-bee-nee', 'dee-dan']
        ]
      },
      {
        say: 'jaan daa-dan dar raah-i ishq, beh-tar az zin-da-gee-yi ha-may-sha-gee ast.”',
        mean: 'Giving your life on the road of love is better than living forever.”',
        words: [
          ['جان', 'jaan', 'jaan', 'jaan daa-dan'],
          ['دادن', 'daa-dan', 'daa-dan', 'jaan daa-dan'],
          ['در', 'dar', 'dar', 'dar raah-i ishq'],
          ['راه', 'raah-i', 'raah', 'dar raah-i ishq'],
          ['عشق،', 'ishq', 'ishq', 'dar raah-i ishq'],
          ['بهتر', 'beh-tar', 'beh-tar'],
          ['از', 'az', 'az'],
          ['زندگی', 'zin-da-gee-yi', 'zin-da-gee', 'zin-da-gee-yi ha-may-sha-gee'],
          ['همیشگی', 'ha-may-sha-gee', 'ha-may-sha-gee', 'zin-da-gee-yi ha-may-sha-gee'],
          ['است.»', 'ast', 'ast', 'boo-dan']
        ]
      }
    ]
  ]
});
