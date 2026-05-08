function positionDetailColumn(colId) {
    var GAP = 12;
    var scrollY = window.scrollY || window.pageYOffset || 0;
    var col = document.getElementById(colId);
    if (!col) return;
    var colTop = col.getBoundingClientRect().top + scrollY;
    var items = [];
    Array.prototype.forEach.call(col.querySelectorAll('.detail-card-wrapper[data-anchor-year]'), function(wrapper) {
        var year = parseInt(wrapper.getAttribute('data-anchor-year'), 10);
        var eventClass = wrapper.getAttribute('data-event-class') || 'foundation-event';
        var eventCard = document.querySelector('.' + eventClass + '[data-anchor-year="' + year + '"]');
        if (!eventCard) {
            var all = document.querySelectorAll('.' + eventClass + '[data-anchor-year]');
            var best = null, bestDiff = Infinity;
            Array.prototype.forEach.call(all, function(el) {
                var diff = Math.abs(parseInt(el.getAttribute('data-anchor-year'), 10) - year);
                if (diff < bestDiff) { bestDiff = diff; best = el; }
            });
            eventCard = best;
        }
        if (!eventCard) return;
        var eRect = eventCard.getBoundingClientRect();
        var idealMidY = eRect.top + scrollY + eRect.height / 2;
        var h = wrapper.offsetHeight;
        items.push({ wrapper: wrapper, ideal: idealMidY, h: h });
    });

    // Sort by ideal position
    items.sort(function(a, b) { return a.ideal - b.ideal; });

    // Assign tops, pushing down to resolve overlaps
    var tops = [];
    for (var i = 0; i < items.length; i++) {
        var idealTop = items[i].ideal - colTop - items[i].h / 2;
        if (i > 0) {
            var prevBottom = tops[i - 1] + items[i - 1].h + GAP;
            idealTop = Math.max(idealTop, prevBottom);
        }
        idealTop = Math.max(0, idealTop);
        tops.push(idealTop);
        items[i].wrapper.style.top = idealTop.toFixed(1) + 'px';
    }

    var maxBottom = items.length ? tops[tops.length - 1] + items[items.length - 1].h : 0;
    col.style.height = maxBottom + 'px';
}

function buildDetailCardLines() {
    var scrollX = window.scrollX || window.pageXOffset || 0;
    var scrollY = window.scrollY || window.pageYOffset || 0;

    positionDetailColumn('foundation-detail-root');
    positionDetailColumn('golden-detail-root');

    // --- Draw lines from event card right edge to detail card left edge ---
    var docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    var svg = document.getElementById('detail-card-connectors');
    if (!svg) {
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('id', 'detail-card-connectors');
        svg.style.cssText = 'position:absolute;inset:0 auto auto 0;width:100%;pointer-events:none;z-index:1;overflow:visible';
        document.body.insertBefore(svg, document.body.firstChild);
    }
    svg.setAttribute('width', document.documentElement.scrollWidth);
    svg.setAttribute('height', docHeight);
    svg.setAttribute('viewBox', '0 0 ' + document.documentElement.scrollWidth + ' ' + docHeight);
    svg.innerHTML = '';

    document.querySelectorAll('.detail-card-wrapper[data-anchor-year]').forEach(function(wrapper) {
        var year = parseInt(wrapper.getAttribute('data-anchor-year'), 10);
        var eventClass = wrapper.getAttribute('data-event-class') || 'foundation-event';
        var detailCard = wrapper.querySelector('.detail-card');
        var eventCard = document.querySelector('.' + eventClass + '[data-anchor-year="' + year + '"]');
        if (!eventCard) {
            var all = document.querySelectorAll('.' + eventClass + '[data-anchor-year]');
            var best = null, bestDiff = Infinity;
            Array.prototype.forEach.call(all, function(el) {
                var diff = Math.abs(parseInt(el.getAttribute('data-anchor-year'), 10) - year);
                if (diff < bestDiff) { bestDiff = diff; best = el; }
            });
            eventCard = best;
        }
        if (!detailCard || !eventCard) return;

        var eRect = eventCard.getBoundingClientRect();
        var dRect = detailCard.getBoundingClientRect();
        var x1 = eRect.right + scrollX;
        var y1 = eRect.top + scrollY + eRect.height / 2;
        var x2 = dRect.left + scrollX;
        var y2 = dRect.top + scrollY + dRect.height / 2;
        var midX = x1 + (x2 - x1) * 0.45;

        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var eraLineClass = {
            'foundation-event': 'is-foundation',
            'golden-event': 'is-golden',
            'mongol-event': 'is-mongol',
            'stagnation-event': 'is-stagnation',
            'ottoman-event': 'is-ottoman',
            'modern-event': 'is-modern',
            'protest-event': 'is-protest'
        }[eventClass] || 'is-foundation';
        path.setAttribute('class', 'timeline-event-line ' + eraLineClass + ' detail-card-line is-highlight');
        path.setAttribute('d',
            'M ' + x1.toFixed(2) + ' ' + y1.toFixed(2) +
            ' C ' + midX.toFixed(2) + ' ' + y1.toFixed(2) +
            ', ' + (x2 - 20).toFixed(2) + ' ' + y2.toFixed(2) +
            ', ' + x2.toFixed(2) + ' ' + y2.toFixed(2)
        );
        svg.appendChild(path);
    });
}

(function() {
    function hookAndDraw() {
        var orig = window.buildBaghdadTimelineSidebars;
        if (orig) {
            window.buildBaghdadTimelineSidebars = function() {
                orig.apply(this, arguments);
                buildDetailCardLines();
            };
        }
        buildDetailCardLines();
    }

    if (document.readyState === 'complete') {
        requestAnimationFrame(function() { requestAnimationFrame(hookAndDraw); });
    } else {
        window.addEventListener('load', hookAndDraw);
    }
})();

var DETAIL_CARDS = {
    "khorasan-power": {
        title: "Khorasan and the shifting of power",
        date: "650 – 750",
        content: [
            "Arab armies conquered Khorasan in 650 AD, absorbing a vast region stretching across modern-day eastern Iran, Afghanistan, Uzbekistan, and Turkmenistan. Over the following generations, the province filled with Arab settlers, Iranian princes, Turkish nomads, impoverished peasants, new converts, and prosperous Sogdian Silk Road merchants.",
            "This mix of peoples and grievances made Khorasan the most dangerous place in the empire for the Umayyad Dynasty and the most promising territory for the Abbasids.",
            "The Islamic Empire was ruled from Damascus by the Umayyads, who heavily favored Arab tribes over all other peoples, regardless of whether those non-Arabs had converted to Islam. The policy deeply alienated Khorasan's mixed population. Reports of the Umayyads' extravagant lifestyles and their neglect of the faith made things worse.",
            "The Abbasids recognized what Damascus had missed. They sent agents into Khorasan disguised as ordinary merchants, spreading a message that promised an Islamic revival in which Arabs and non-Arabs would be treated as equals. To keep their true identity hidden, the agents asked supporters to pledge loyalty to an acceptable member of the Prophet's House without naming the Abbasids outright. This deliberate vagueness drew even the Shia population into the cause.",
            "The plan held. In June 747, the Abbasid revolutionaries unfurled their black banners near the oasis city of Merv, and thousands of Khorasanians took up arms. Under the command of Abu Muslim, one of the most brilliant and ruthless military minds of the age, this eastern coalition swept westward and destroyed the Umayyad army at the Battle of the Great Zab River in 750 AD.",
            "The revolution shifted the center of gravity of the Islamic world. The Abbasids had come to power through Khorasanian and Persian support, and Damascus belonged to a past they had just overthrown. They needed a capital that reflected the new order.",
            "In 762 AD, the second Abbasid caliph, Al-Mansur, chose a strategic site in central Mesopotamia on the banks of the Tigris River. He called it Baghdad."
        ]
    },
    "perfume-dealers": {
        title: "The Perfume Dealers",
        date: "c. 719",
        content: [
            "The perfume sellers were undercover revolutionaries. Their secret missions helped bring down a dynasty and, by extension, created the conditions for Baghdad's founding.",
            "Around 719 AD, a revolution began smoldering against the Umayyad Dynasty in Damascus. The opposition movement was loyal to the Abbasids, descendants of the Prophet Mohammed's uncle. They needed to carry a message of rebellion along trade and pilgrimage routes into eastern regions like Khorasan, all without drawing the attention of Umayyad authorities.",
            "They operated through a network of agents traveling under everyday disguises. They posed as merchants and tradesmen, including perfume-sellers, peddlers, saddle-makers, and apothecaries. One account describes a messenger disguised as a perfume-seller who traveled to a small country estate in Jordan to whisper rebellion to a distant member of the Prophet's family.",
            "The network worked. By 750 AD, Abbasid forces had overthrown the Umayyad caliphate. Just over a decade later, in 762 AD, the second Abbasid caliph, Al-Mansur, founded Baghdad as the permanent capital of their victorious empire.",
            "Without the patient work of these undercover agents, Baghdad might never have existed."
        ]
    },
    "merv": {
        title: "Merv",
        date: "747",
        content: [
            "Merv was a rich, storied oasis city and the high-walled capital of Khorasan, the easternmost corner of the Islamic world. The region stretched across what is now eastern Iran, Afghanistan, Uzbekistan, and Turkmenistan.",
            "On the outskirts of Merv, on 15 June 747, the Abbasid revolutionaries finally revealed themselves. They unfurled their black banners and declared open rebellion against the Umayyad Dynasty. By early 748, Abu Muslim had made himself master of the city and used it as a base to send his armies westward toward Iraq and Syria.",
            "Merv remained significant for centuries after the revolution. It later served as the eastern headquarters of the Seljuk Empire through much of the twelfth century. In 1219, the city was sacked and devastated by the Mongol armies of Genghis Khan."
        ]
    },
    "persian-rebellion": {
        title: "Persian Rebellion in Kufa",
        date: "758",
        content: [
            "A riot by Persian extremists near Kufa in 758 AD set in motion the chain of events that led directly to the founding of Baghdad.",
            "Al-Mansur had built a palace headquarters called Madinat al Mansur near Kufa, a city notorious for its rebellious population. A group of Persian extremists started a bloody riot inside the palace itself, demanding that Mansur be worshipped as a god. When he rejected them as heretics, they rose up in open rebellion.",
            "The riot rattled him. Kufa had always been unstable, and now it had proven dangerous enough to penetrate the palace itself. Mansur set out personally to find a safer site, scouting along the Tigris River until he found what he was looking for. In 762 AD, he founded his Round City of Baghdad."
        ]
    },
    "al-mansur": {
        title: "Al-Mansur and the start of the golden age",
        date: "754 – 775",
        content: [
            "Al-Mansur's financial, political, and physical legacy gave Baghdad the platform it needed to grow from a fortified administrative seat into the intellectual and cultural capital of the world.",
            "Mansur was relentlessly frugal, earning him the nickname 'Father of Pennies.' He left behind an astonishing 14 million gold dinars and 600 million silver dirhams upon his death. Baghdad's strategic position on the Tigris and Euphrates turned it into an unrivaled global trading emporium that generated enormous tax revenues from across the empire.",
            "Mansur spent his reign suppressing rebellions, securing the dynasty, and building the city's physical fabric. With the empire finally stable and the treasury full, his successors were freed to turn their attention to the arts and sciences. Culture required leisure, leisure required wealth, and wealth required the kind of order Mansur had spent his life enforcing.",
            "Al-Mahdi inherited all of this and redirected it. As generous as his father had been mean, he poured money into poetry, music, and literary salons. He expanded Baghdad by building the palace-filled district of Rusafa on the east bank of the Tigris.",
            "Together, Mansur's discipline and Mahdi's generosity made the reign of Harun al-Rashid possible. Inheriting a wealthy, stable empire, Harun gathered a brilliant court of scholars, funded the translation of classical texts, and presided over a period of such extraordinary prosperity and discovery that it was famously nicknamed 'the honeymoon.'",
            "Mansur bequeathed an empire wealthy and stable enough to fund a cultural revolution. Baghdad would endure as the fountainhead of scholars for centuries to come."
        ]
    },
    "harun-al-rashid": {
        title: "Harun al-Rashid",
        date: "786 – 809",
        content: [
            "Harun al-Rashid ruled as the Abbasid caliph from 786 to 809, a period widely considered the pinnacle of Islamic strength, splendour, and Baghdad's golden age. He is famously immortalized as the adventurous, street-prowling monarch in The Arabian Nights.",
            "Harun was a quick study who undertook the arduous pilgrimage to Mecca at age eleven and led a military expedition against the Byzantine Empire by the age of fourteen. He became caliph at roughly twenty-one following the sudden death of his brother.",
            "His reign was incredibly prosperous, earning the nickname 'the honeymoon.' Harun gathered a brilliant court of scholars, religious lawyers, musicians, and famous poets. He championed a burgeoning translation movement that brought classical Greek, Hindu, and Persian scholarship into Arabic. By the time of his death, he had accumulated a staggering 900 million dirhams in the royal treasury.",
            "Harun was a complex figure who balanced intense religious devotion with lavish decadence. He was a hafiz (having memorized the entire Koran by heart), performed the haj pilgrimage nine times, and personally led eight invasions against Byzantine territories. Despite this piety, he was ironically nicknamed the 'Commander of the Unfaithful' due to his legendary evening revels.",
            "Harun possessed a dark, ruthless streak. He imprisoned the seventh Shia Imam, Musa al-Kadhim, who died in confinement. In 803, he shocked the empire by suddenly turning on his closest friend and vizier, Jafar the Barmakid, ordering his execution.",
            "Harun died at the age of 47 in 809, while marching to suppress a rebellion. His poorly planned succession — dividing the empire between his sons Amin and Mamun — plunged Baghdad into a catastrophic civil war shortly after his death."
        ]
    },
    "barmakids": {
        title: "The Barmakids",
        date: "786 – 803",
        content: [
            "The Barmakids were an immensely powerful and fabulously wealthy family of aristocratic Persian origin who effectively helped run the Abbasid Empire during its golden age. For two generations, they faithfully served as viziers and top administrators to the caliphs Mansur, Mahdi, Hadi, and most famously, Harun al-Rashid.",
            "The key figures included Khalid ibn Barmak, who served as vizier to Baghdad's founder Al-Mansur; his son Yahya, who acted as a father figure and vizier with full executive authority for Harun al-Rashid; and Yahya's sons Jafar and Fadl.",
            "Beyond their political genius, the Barmakids were legendary for their conspicuous consumption and served as prodigal patrons of the arts and sciences. They poured millions of dinars into developing the east bank of the Tigris, particularly the district of Rusafa, building extravagant palaces that successfully pulled Baghdad's center of gravity eastward.",
            "Their influence was so profound that the phrase 'time of the Barmakids' became a long-lasting Middle Eastern idiom for great fortune and abundance, and they were immortalized in The Arabian Nights as 'vast oceans of generosity.'",
            "Their unprecedented wealth and power ultimately proved to be their undoing. It sparked the deep jealousy of Harun al-Rashid, who abruptly and brutally purged the family in 803 AD, hacking Jafar to pieces and leaving Yahya and Fadl to die in prison. Their violent downfall devastated the city's poets and scholars who had thrived under their care."
        ]
    },
    "jafar-barmakid": {
        title: "Jafar the Barmakid",
        date: "786 – 803",
        content: [
            "Jafar the Barmakid was a central figure during the golden age of the Abbasid Empire, hailing from an immensely powerful family of aristocratic Persian origin. As the son of Yahya the Barmakid, he served as vizier and left a profound mark on the politics, architecture, and culture of Baghdad.",
            "Jafar was legendary for his conspicuous consumption and served as a prodigal patron of the arts and sciences. His wealth was so vast that the phrase 'rich as Jafar' became a popular local idiom. He spent a staggering 20 million dirhams building a magnificent palace in the fashionable Rusafa district on the east bank of the Tigris, and another 20 million furnishing it. This extravagant project was historically vital because it initiated a slow but steady drift of government buildings to the east bank, permanently pulling the city's political and commercial center of gravity eastward.",
            "Jafar was Harun's vizier, closest friend, trusted adviser, and constant boon companion. The two shared an intense bond and were veterans of legendary evening revels. In the fictionalized tales of The Arabian Nights, Jafar is frequently depicted at Harun's side as they prowl the streets and markets of Baghdad in disguise on nocturnal adventures.",
            "Despite their extreme closeness, their relationship ended in stunning violence. In January 803, Harun shocked the empire by suddenly ordering his executioner to bring him Jafar's head. Jafar was beheaded, his body was hacked into three pieces, and the parts were hung on gibbets for public display on the pontoon bridges across the Tigris. His rotting remains were left there for two years.",
            "Historians suggest Harun had grown deeply resentful and jealous of Jafar and the Barmakids' unprecedented power and wealth, which rivaled his own. Jafar had also openly defied the caliph by releasing a rebel that Harun had explicitly ordered kept in custody."
        ]
    },
    "kadhimain": {
        title: "The Shrine at Kadhimain",
        date: "799",
        content: [
            "Imam Musa al-Kadhim — whose name translates to 'he who can control his anger' — was the seventh of the twelve Shia imams and a direct descendant of Hussain, who was martyred at Kerbala in 680 AD.",
            "In 799 AD, he died while confined in the custody of the Abbasid caliph Harun al-Rashid, a victim of the caliph's religious persecution. He was buried in north-western Baghdad at Makaber Kuraish, a graveyard originally laid out by Baghdad's founder, Al-Mansur, for the principal tribe of the Prophet Mohammed.",
            "The burials of Imam Musa al-Kadhim and his grandson Imam Mohammed al-Jawad are historically significant because their resting place evolved into one of the most important spiritual centers for Shia Muslims and a defining landmark in Baghdad. Their shared tomb gave rise to the name Kadhimain, meaning 'the Two Kadhims.'",
            "This holy site became such a powerful magnet for pilgrims that it grew into an entire walled district of its own, Kadhimiya, located within a loop of the Tigris River. Today it ranks as one of the four Shia shrine cities in Iraq, attracting up to half a million visitors on weekends.",
            "The shrine has served as the historical epicenter of Baghdad's sectarian fault lines. Situated just across the river from the major Sunni shrine of Abu Hanifa, Kadhimiya has been a frequent flashpoint for Sunni-Shia violence. Despite centuries of attacks, floods, and plundering — including by Hulagu's Mongol armies in 1258 — the shrine has been continually restored. Today, with its dazzling gold-tiled domes and minarets, the Kadhimain shrine stands as a triumphant symbol of defiance and endurance."
        ]
    },
    "relocation-samarra": {
        title: "The Relocation to Samarra",
        date: "835",
        content: [
            "The relocation to Samarra was driven by the rise of the ghulams, a personal force of Turkish slave-soldiers recruited from the Central Asian steppes by the caliph Mutasim. While intended to serve as a loyal military vanguard, the ghulams quickly alienated the local people of Baghdad.",
            "Friction boiled over because the ghulams spoke no Arabic, aggressively seized lucrative court positions, and rode their horses recklessly through the streets, knocking over anyone in their path, including women and children. The resulting street clashes and murders prompted Mutasim to move his capital a hundred miles north to Samarra in 835 AD.",
            "This relocation proved disastrous for Abbasid political power. During the caliphs' absence from Baghdad, the Turkish commanders accumulated so much influence that the caliphs essentially became prisoners in their own palaces. Samarra devolved into a nightmare where Turkish amirs routinely crowned, deposed, and assassinated the leaders of the Islamic world.",
            "For Baghdad, losing its status as the imperial capital was a humiliating indignity. In 865, a mutiny in Samarra led the caliph Mustain to flee to Baghdad, triggering a devastating ten-month siege of the city by Turkish forces backing a rival caliph.",
            "Despite this loss of political primacy, Baghdad had already cemented its role as the intellectual capital of the planet. The tenth-century geographer Mukaddasi famously referred to the region as 'the fountainhead of scholars.' Its deep-rooted translation movements, immense libraries like the House of Wisdom, and global trade allowed its cultural revolution to flourish even without the immediate presence of the caliphs."
        ]
    },
    "return-samarra": {
        title: "The Return from Samarra",
        date: "892",
        content: [
            "In 892 AD, the caliph Mutadid relocated the Abbasid capital from Samarra back to Baghdad, seeking to escape the nightmare of Samarra, where powerful Turkish military commanders had taken to routinely crowning, deposing, and even assassinating the caliphs.",
            "Upon his return, Mutadid launched a massive reconstruction effort. Rather than focusing on the original Round City on the west bank, he established the new caliphal world on the east bank of the Tigris. He took over the Dar al Khilafat palace complex, enlarging it monumentally and laying out vast new gardens. He subsequently built a series of magnificent royal residences, including the Palace of Paradise, which featured an artificial lake and a park for wild animals.",
            "While this extravagant palace-building made Baghdad a sight to behold and restored the physical splendor of the caliphate, it masked a grim political reality: the unchallenged imperial power of the early Abbasids was gone forever.",
            "The caliphs were steadily declining from being the absolute masters of the civilized world into mere puppet-rulers who lived under virtual palace arrest in their luxurious new compounds. Real political and military power remained firmly in the hands of the Turkish amirs. Further afield, the vast Islamic empire was fracturing, with rival caliphates declared by the Fatimids in Tunisia and the Umayyads in Spain.",
            "Because these later Abbasid caliphs had lost their far-reaching authority, they redirected all their remaining royal energy and wealth into the architectural beautification of their immediate surroundings. The dazzling palaces of the east bank projected an image of immense prestige, but they were effectively gilded cages."
        ]
    },
    "byzantine-reception": {
        title: "The Byzantine Reception",
        date: "917",
        content: [
            "In 917 AD, the Abbasid caliph Al-Muktadir staged an astonishing reception for John Radinos and Michael Toxaras, Byzantine ambassadors sent by Empress Zoe to discuss peace terms.",
            "Facing domestic rebellions and the fracturing of his empire, Muktadir used this highly choreographed theater to project an illusion of unchallenged strength to his Greek guests. In reality, the Abbasid caliphate was on the verge of political collapse. To mask this decline, Muktadir weaponized Baghdad's wealth to intimidate the envoys.",
            "After being made to wait two months, the ambassadors were led through a staggering gauntlet of 160,000 cavalry and infantry, 7,000 eunuchs, 700 chamberlains, and 4,000 black pages. The exhausted diplomats were forced to tour twenty-three different palaces in the grueling summer heat, draped with 38,000 brocade curtains and lined with 22,000 fine rugs.",
            "In the caliph's Park of the Wild Beasts, the envoys were confronted by four elephants draped in peacock-silk brocade with fire-throwers mounted on their backs, and a hundred chained lions. The absolute centerpiece was the Palace of the Tree, which housed a massive tree made of solid silver and gold weighing over 1.5 tons, with eighteen branches featuring mechanical gold and silver birds that actually whistled and sang.",
            "The theatrical intimidation worked perfectly. The Greek envoys were seized by awe and fear, kissed the caliph's letter in submission, and were sent away with purses stuffed with gold dinars. However, the magnificent reception was essentially a brilliant mirage — because Muktadir and the later Abbasid caliphs had lost their actual political and military might, they had redirected all their remaining energy into projecting an image of power from within a gilded cage."
        ]
    },
    "buyids": {
        title: "The Buyids Take Control",
        date: "945",
        content: [
            "The year 945 AD marked an ominous turning point for the Abbasid caliphate when Ahmed ibn Buya, a military leader from the Caspian Sea region, took advantage of a collapsing government to seize Baghdad from the caliph Mustakfi. Taking the title Commander-in-Chief, he established the Shia Buyid Dynasty, which would control the city for the next century.",
            "This takeover officially reduced the once-mighty Abbasid caliphs to powerless figureheads. The stark reality of their decline was captured perfectly in a bitter letter from a subsequent caliph, Al-Muti, to the Buyid prince. When asked to finance a holy war, the caliph replied that he had neither money nor troops, and noted that the Buyids' only use for him was to have his name uttered in Friday sermons to legitimize their rule.",
            "Because the Buyids were fiercely Shia, their rule frequently inflamed sectarian tensions in the Sunni-majority city. The Buyid ruler was only narrowly dissuaded from deposing the Abbasid caliph completely. He deliberately provoked the Sunni population by mandating Shia fasting and ordering anti-Sunni denunciations to be posted on mosque doors.",
            "Despite the humiliation of the Abbasid family, the arrival of the Buyids actually proved to be something of a boon for Baghdad's civic development. They invested in major infrastructure projects, most notably constructing a massive dyke to protect the city from flooding, which paved the way for a magnificent new complex of palaces on the east bank of the Tigris.",
            "Ultimately, the Buyid Dynasty was crippled by fierce infighting between rival princes, and their rule over Baghdad came to an abrupt end in 1055 when they were ousted by the Seljuk Turks."
        ]
    },
    "seljuk-turks": {
        title: "The Seljuk Turks",
        date: "1055",
        content: [
            "In 1055, the Shia Buyid Dynasty collapsed under the weight of fierce internal infighting and tribal rebellions. Taking advantage of this unraveling, the Seljuk Turk leader Tughril Beg marched on Baghdad at the direct invitation of the Abbasid caliph Kaim, easily sweeping aside the last Buyid leader.",
            "For the largely Sunni court and scholars, replacing the heterodox Shia Buyids with a Sunni military power was the next best thing to the caliph regaining actual executive control. This transition formalized a new political reality: the development of the sultanate, an institution that acted as the military and political vanguard, ostensibly supporting the spiritual authority of the caliphate.",
            "Even though Baghdad's political pre-eminence had faded, its intellectual gravity remained seemingly unstoppable. In 1065, just a decade after the Seljuk takeover, the famous Nizamiya Academy was opened on the east bank of the Tigris River.",
            "Named after the powerful Seljuk vizier Nizam al Mulk, the academy proved that Baghdad was still the ultimate magnet for the world's most elite scholars, jurists, and theologians. The institution hosted some of the greatest minds of the Middle Ages: Al-Ghazali, the towering Islamic theologian; Sadi, the legendary Persian poet; and the famous biographers of Saladin.",
            "This period also coincided with the arrival of Sheikh Abdul Kadir al Gailani, a highly revered Sufi mystic whose preaching in Baghdad was so persuasive it reportedly led droves of Christians and Jews to convert to Islam.",
            "The opening of the Nizamiya Academy demonstrated that while the city's political masters constantly changed — from Abbasid caliphs to Buyid amirs to Seljuk sultans — Baghdad's foundational identity as the center of Islamic learning and culture could not be easily extinguished."
        ]
    }
};
