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

    [
        'foundation-detail-root',
        'golden-detail-root',
        'mongol-detail-root',
        'stagnation-detail-root',
        'ottoman-detail-root',
        'modern-detail-root'
    ].forEach(positionDetailColumn);

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
        date: "650-750",
        content: [
            "Captured by Arab armies in 650 AD, Khorasan was a vast and geographically diverse region stretching across modern-day eastern Iran, Afghanistan, Uzbekistan, and Turkmenistan. As it was absorbed into the Islamic Empire, it rapidly evolved into a unique cultural melting pot where Arab conquerors settled directly alongside newly converted Turkish nomads, Iranian princes, impoverished peasants, and prosperous Soghdian Silk Road merchants.",
            "This highly diverse demographic proved to be the Achilles' heel of the ruling Umayyad Dynasty and the perfect launching pad for the Abbasids.",
            "At the time, the Islamic Empire was ruled from Damascus, Syria, by the Umayyads, who heavily favored Arab tribes over all other races, regardless of whether those non-Arabs had converted to Islam. This discriminatory policy deeply alienated the mixed population of Khorasan, and their discontent was further fanned by reports of the Umayyads' astonishingly luxurious lifestyles and their perceived neglect of the Islamic faith.",
            "Recognizing this volatile frontier as fertile ground for rebellion, the Abbasids began their infiltration. They did this by utilizing a covert network of agents disguised as ordinary merchants like perfume sellers to whisper plans of revolution along the trade routes into Khorasan. The Abbasid agents brilliantly tailored their propaganda to the region's diverse population by promising an Islamic revival where Arabs and non-Arabs would be treated as absolute equals. Furthermore, they used a strategy of \"calculated vagueness,\" asking supporters to pledge allegiance to \"An Acceptable Member of the House of the Prophet\" without explicitly revealing their own Abbasid identities, a ruse that successfully tricked the Shia population into joining their cause.",
            "The strategy worked perfectly. In June 747, the Abbasid insurgents finally unfurled their black banners of revolution near the oasis city of Merv, and thousands of Khorasanians flocked to take up arms. Led by the brilliant and ruthless military commander Abu Muslim, this Khorasan-backed coalition swept westward, ultimately annihilating the massive Umayyad army at the Battle of the Great Zab River in northern Iraq in 750 AD.",
            "This revolution completely shifted the geopolitical center of the Islamic world. Because the Abbasids had risen to power on the backs of Khorasanian and Persian support rather than the old Syrian world, remaining in Damascus was out of the question. Damascus had too much residual loyalty to the Umayyads and was located far from the Abbasids' eastern power base.",
            "The Abbasids needed a new headquarters that reflected this eastward shift in power. Consequently, in 762 AD, the second Abbasid caliph, Al-Mansur, selected a highly strategic, fertile location in central Mesopotamia to serve as the permanent capital of this new, victorious empire. That city was Baghdad."
        ]
    },
    "perfume-dealers": {
        title: "The Perfume Dealers",
        date: "c. 719",
        content: [
            "Around the year 719 AD, a revolution began smoldering against the ruling Umayyad Dynasty, which was based in Damascus. The opposition movement, loyal to the Abbasids (descendants of the Prophet Mohammed's uncle), needed to spread its message of rebellion along trade and pilgrimage routes into eastern regions like Khorasan without attracting the attention of the Umayyad authorities.",
            "To achieve this, the revolutionaries operated through a discreet network of agents who adopted everyday disguises to travel safely. They posed as ordinary merchants and tradesmen, including perfume-sellers, peddlers, saddle-makers, and apothecaries. For example, the sources describe one clandestine mission where a messenger disguised as a perfume-seller traveled to a small country estate in Jordan to whisper rebellion into the ears of a distant descendant of the Prophet's family, fanning the early flames of the revolt.",
            "This covert network of merchants and perfume-sellers was incredibly successful in organizing the rebellion. By 750 AD, the Abbasid forces completely overthrew the Umayyad caliphate. Just over a decade later, in 762 AD, the second Abbasid caliph, Al-Mansur, founded Baghdad to serve as the new, permanent capital for their victorious empire.",
            "Without the meddling and intrigue of these early undercover agents, Baghdad might never have existed."
        ]
    },
    "merv": {
        title: "Merv",
        date: "747",
        content: [
            "Merv was a rich, storied oasis city and the high-walled capital of Khorasan, which at the time was the easternmost corner of the Islamic world. Geographically, the vast steppe region of Khorasan stretched across the areas that make up modern-day eastern Iran, Afghanistan, Uzbekistan, and Turkmenistan.",
            "It was on the outskirts of this city on 15 June 747 that the undercover Abbasid revolutionaries finally revealed their true allegiance, unfurling their black banners to signal the start of their open rebellion against the ruling Umayyad Dynasty. By early 748, the brilliant Abbasid military leader Abu Muslim had made himself master of Merv, using it as a staging ground to send his victorious armies westward toward Iraq and Syria.",
            "Merv remained a highly significant city for centuries after the Abbasid revolution. It later served as the eastern headquarters for the Seljuk Empire for most of the twelfth century. However, its greatness came to a tragic end in 1219 when it was one of the many great Central Asian cities sacked and devastated by the invading Mongol armies of Genghis Khan."
        ]
    },
    "al-mansur": {
        title: "Al-Mansur and the start of the golden age",
        date: "754-775",
        content: [
            "Al-Mansur's massive financial, infrastructural, and political legacy provided the essential foundation for Baghdad to transition from a newly built administrative fortress into the intellectual and cultural capital of the world.",
            "Several forces made the inheritance he left to his son al-Mahdi powerful enough to trigger the city's golden age.",
            "Unprecedented wealth and economic power. Mansur was relentlessly frugal and earned the nickname \"Father of Pennies.\" He left behind an astonishing 14 million gold dinars and 600 million silver dirhams, roughly 2,640 metric tons of silver, upon his death. Combined with Baghdad's strategic location on the Tigris and Euphrates rivers, the city rapidly became an unrivalled global trading emporium that generated massive tax revenues from across the empire.",
            "The shift from military consolidation to cultural patronage. Mansur spent his reign violently suppressing rebellions, securing his dynasty, and building the city's physical structures. With the empire finally secure and the treasury overflowing, his successors were freed to focus on the arts and sciences. As the sources explain, \"Culture required leisure, leisure required wealth, and wealth flowed from patronage and a booming economy.\"",
            "Al-Mahdi's cultural awakening. Al-Mahdi inherited this immense wealth and redirected the empire's focus toward the finer things in life. He heavily patronized poetry, music, and literary salons, and he expanded Baghdad by building the glittering, palace-filled district of Rusafa on the east bank of the Tigris.",
            "The stage for Harun al-Rashid. Mansur's disciplined state-building and Mahdi's cultural investments directly paved the way for the reign of Harun al-Rashid (786–809). This incredibly stable foundation allowed Harun to gather a brilliant court of scholars, fund the translation of classical texts, and usher in a period of such extraordinary prosperity and scientific discovery that it was famously dubbed \"the honeymoon\".",
            "In short, Mansur bequeathed an empire that was wealthy and secure enough to fund a cultural revolution, ensuring that Baghdad would endure as the \"fountainhead of scholars\" for centuries to come."
        ]
    },
    "persian-rebellion": {
        title: "Persian Rebellion in Kufa",
        date: "758",
        content: [
            "A Persian rebellion took place in 758 AD near Kufa and inadvertently changed the course of history by prompting the foundation of Baghdad.",
            "At the time, the second Abbasid caliph, Al-Mansur, had built a palace headquarters called Madinat al Mansur near Kufa, a city that was already notorious as a rebellious and extremist Shia stronghold. The unrest began when a group of Persian fanatics started a bloody riot inside the caliph's palace because they insisted on worshipping Mansur as their god. When Mansur rejected their blasphemous claims and dismissed them as heretics, they violently rose up in rebellion against him.",
            "This chaotic uprising had a profound consequence. The riot, combined with Kufa's inherent instability, convinced Mansur that the area was far too dangerous to serve as the permanent center of the vast Islamic Empire. This realization drove him to personally scout for a safer, more strategic location further away from Kufa, ultimately leading him to the banks of the Tigris River where he founded his famous Round City of Baghdad in 762 AD."
        ]
    },
    "many-names": {
        title: "The Many Names of Baghdad",
        date: "762",
        content: [
            "Long before it became the glittering capital of the Abbasid Empire, the original site was a thriving Iranian settlement with a monthly market known as Souk Baghdad (Baghdad Market) during the late Sassanid Empire. The name \"Baghdad\" is likely of ancient Persian origin, meaning \"Founded by God\".",
            "When the caliph Al-Mansur officially founded his new circular capital there in 762 AD, he had a very personal idea of what it should be called. Madinat al Mansur meant the City of Mansur. However, this self-aggrandizing title completely failed to catch on with the public.",
            "Instead, the people who flocked to settle in the new metropolis preferred to call it Madinat al Salam (the City of Peace) or Dar as Salam (House of Peace), which was a reference to the description of paradise in the Koran.",
            "The city also picked up the popular nickname Al Zawra (the Crooked). This nickname playfully referred to several of the city's quirks, including the bend in the Tigris River where it sat, its circular walls, its irregularly set gates, and the fact that its main mosque was not correctly aligned towards Mecca.",
            "Later, Baghdad would have more interesting names, like the \"City of one thousand and one smells.\""
        ]
    },
    "baghdad-canals": {
        title: "Baghdad's Canals",
        date: "766",
        content: [
            "Baghdad's prosperity and agricultural success were deeply tied to a vast, highly sophisticated network of irrigation canals that watered the region between the Tigris and Euphrates rivers. This system, with some channels dating as far back as Sumerian (around 4000 BC) and Sassanian times, was fundamental to the survival of Mesopotamian empires and required rigorous, regular maintenance.",
            "Key canals in early Baghdad",
            "The Sarat Canal. Dating back to Persian times, this waterway linked the two great rivers and drained the waters of the Euphrates into the Tigris. It was integral to the design of the original Round City, whose Kufa and Basra gates opened directly onto it. A northern branch was known as the Trench of Tahir, while the junction of the Little and Great Sarat Canals circumscribed the fertile Abbasiya Island, home to the highly profitable Patrician's Mill.",
            "The Isa Canal. Originally dug during the Sassanian era, the Isa Canal was famously praised by medieval writers because its water supply never failed or silted up. Looping protectively south of the Round City, it brought Euphrates water eastward and served as a vital commercial artery for boats carrying Egyptian corn, Damascene silks, and other goods from the west. It featured quaintly named crossings like the Pomegranate, Thorn, Garden, and Alkali bridges. Centuries later in the 19th century, it was known as the Saklawiya Canal and was dredged and reopened by the modernizing Ottoman ruler Midhat Pasha.",
            "The Karkhaya Canal and its branches. Branching off the Isa Canal, waterways like the Karkhaya, Dajaj (Fowls), Bazzazin (clothes-merchants), and Tabik canals defined the commercial geography of the Karkh district. Different trades, such as coppersmiths, poulterers, soap-makers, and wholesale fruit sellers, congregated at specific wharves and unloading points along their banks.",
            "The Nahrawan Canal. This massive waterway measured 200 miles long and a quarter of a mile wide. It was breached during a military campaign and never properly repaired, becoming partially silted up over time.",
            "The Dujail and Musa Canals. The Dujail was another channel linking the Euphrates to the Tigris, while the Musa Canal flowed past the Kasr al Thuraya (Palace of the Pleiades) built by the caliph Mutadid.",
            "Weaponization, flooding, and destruction. The canals brought life and commerce to Baghdad. They also presented immense risks. In 940 AD, a dam breach at the head of the Isa Canal triggered a great flood that left heavily affected Baghdadis homeless for two years.",
            "The waterways were also frequently weaponized during the city's many conflicts. In 865 AD, Baghdad's governor deliberately flooded canals in the Al Anbar district to block an attacking Turkish army. Later, in 1258, the invading Mongols purposefully broke open the dykes of the Dujail Canal, drowning the majority of an Abbasid army that had been sent to confront them.",
            "Ultimately, the catastrophic Mongol invasion under Hulagu spelled the end for Baghdad's historic canal system. The Mongols deliberately destroyed the elaborate network of waterways, dykes, and headworks that underpinned the region's wealth. Because the local population was largely slaughtered in the ensuing massacre, there was no one left to provide the constant manual maintenance the system required, causing the canals to quickly silt up and fall into total ruin."
        ]
    },
    "dhimma-system": {
        title: "The Dhimma System",
        date: "766",
        content: [
            "Under Muslim law in Baghdad, the dhimma (or dhimmi) system governed the status of non-Muslims, such as Jews and Christians, designating them as a \"protected minority\".",
            "As dhimmis, these citizens were exempt from military service and were granted the freedom to practice their religion. In return for this protection, they were required to pay regular taxes to the state, specifically a land tax and the jizya, which was a capitulation or poll tax levied at varying rates.",
            "Despite these protections, dhimmis lived as second-class citizens and were subjected to specific social regulations. For example, they were legally obliged to dress differently from the Muslim majority, specifically distinguishing themselves by the headgear they wore.",
            "The system was eventually dismantled during the later centuries of Ottoman rule. The traditional jizya tax on non-Muslims was abolished as part of the liberalizing Tanzimat reforms enacted between 1839 and 1876. The official dhimmi status was completely abolished in 1908 following the Young Turks Revolution. This revolution marked an extraordinary turning point for the city, granting full citizenship to non-Muslims and allowing Baghdad's Jews and other minority groups to stand on an equal political footing with Muslims for the first time."
        ]
    },
    "harun-al-rashid": {
        title: "Harun al-Rashid",
        date: "786-809",
        content: [
            "Harun al-Rashid (born around 766 AD) ruled as the Abbasid caliph from 786 to 809, a period widely considered the pinnacle of Islamic strength, splendour, and Baghdad's golden age. He is famously immortalized as the adventurous, street-prowling monarch in The Arabian Nights.",
            "Early Life and Rise to Power Harun was a quick study who undertook the arduous pilgrimage to Mecca at age eleven and led a military expedition against the Byzantine Empire by the age of fourteen. After serving as a viceroy over the western provinces, he became caliph at roughly twenty-one following the sudden death of his brother, Hadi.",
            "The Golden Age of Baghdad His reign was incredibly prosperous, earning the nickname \"the honeymoon\". Harun gathered a brilliant court of scholars, religious lawyers, musicians, and famous poets like Abu Nuwas. He championed a burgeoning translation movement that brought classical Greek, Hindu, and Persian scholarship into Arabic, heavily influencing the global transmission of knowledge. By the time of his death, he had accumulated a staggering 900 million dirhams in the royal treasury.",
            "Governance and the Barmakids Harun refused to be burdened by the daily cares of his office and delegated enormous executive authority to his vizier, Yahya the Barmakid, whose son Jafar became the caliph's closest companion. However, as noted in our previous conversation, Harun abruptly turned on the family in 803, brutally executing Jafar and imprisoning Yahya, likely due to deep-seated jealousy over their unprecedented wealth and power.",
            "Piety and Revelry Harun was a complex figure who balanced intense religious devotion with lavish decadence. He was a hafiz (having memorized the entire Koran by heart), performed the haj pilgrimage nine times, and personally led eight invasions against Byzantine territories. Despite this piety, he was ironically nicknamed the \"Commander of the Unfaithful\" due to his legendary evening revels, fueled by wine and a harem of around 200 women. He was married to the formidable and immensely wealthy Zubayda, who famously funded a massive engineering project to create a 900-mile safe pilgrim route from Kufa to Mecca.",
            "Cruelty and Oppression Harun possessed a dark, ruthless streak. He imprisoned the seventh Shia Imam, Musa al-Kadhim, who died in confinement - an act of religious persecution that inadvertently led to the creation of the magnificent Kadhimain shrine in Baghdad. He was also capable of extreme brutality. Just before his own death, he ordered a captured rebel to be dismembered limb by limb by a butcher.",
            "Death and Legacy Harun died at the age of 47 in the city of Tus in 809, while marching to suppress a rebellion in Samarkand. While he left behind a magnificent cultural and financial legacy, his poorly planned succession divided the empire between his sons Amin and Mamun and plunged Baghdad into a catastrophic and ruinous civil war shortly after his death."
        ]
    },
    "barmakids": {
        title: "The Barmakids",
        date: "786-803",
        content: [
            "The Barmakids were an immensely powerful and fabulously wealthy family of aristocratic Persian origin who effectively helped run the Abbasid Empire during its golden age. For two generations, they faithfully served in the highest offices of state, acting as viziers and top administrators to the caliphs Mansur, Mahdi, Hadi, and most famously, Harun al-Rashid.",
            "The key figures of the dynasty included Khalid ibn Barmak, who served as vizier to Baghdad's founder, Al-Mansur. They also included his son Yahya, who acted as a father figure and vizier with full executive authority for Harun al-Rashid, and Yahya's sons Jafar and Fadl.",
            "Beyond their political and administrative genius, the Barmakids were legendary for their conspicuous consumption and served as prodigal patrons of the arts and sciences. They poured millions of dinars into developing the east bank of the Tigris, particularly the fashionable district of Rusafa, building incredibly extravagant palaces and estates that successfully pulled Baghdad's political and commercial center of gravity eastward. Jafar alone spent a staggering 20 million dirhams constructing a single palace in the area, and another 20 million furnishing it.",
            "Their influence and generosity were so profound that the phrase \"time of the Barmakids\" became a long-lasting Middle Eastern idiom for great fortune and abundance, and they were immortalized in The Arabian Nights as \"vast oceans of generosity\" and wise administrators who helped spread Harun's glory across the known world.",
            "However, as we discussed earlier, their unprecedented wealth and power ultimately proved to be their undoing. It sparked the deep jealousy of Harun al-Rashid, who abruptly and brutally purged the family in 803 AD, hacking Jafar to pieces and leaving Yahya and Fadl to die in prison. Their violent downfall completely stunned Baghdad and abruptly stemmed the torrents of cultural patronage they had provided, devastating the city's poets and scholars who had thrived under their care."
        ]
    },
    "jafar-barmakid": {
        title: "Jafar the Barmakid",
        date: "786-803",
        content: [
            "Jafar the Barmakid was a central figure during the golden age of the Abbasid Empire, hailing from an immensely powerful and fabulously wealthy family of aristocratic Persian origin. As the son of Yahya the Barmakid, he served as a vizier and left a profound mark on the politics, architecture, and culture of Baghdad.",
            "His Importance and Wealth Jafar was legendary for his conspicuous consumption and served as a prodigal patron of the arts and sciences. His wealth was so vast that the phrase \"rich as Jafar\" became a popular local idiom. His most significant physical legacy in Baghdad was his insatiable appetite for palatial building. He spent a staggering 20 million dirhams building a magnificent palace in the fashionable Rusafa district on the east bank of the Tigris, and another 20 million furnishing it. This extravagant project was historically vital because Jafar's long vizierate headquartered there initiated a slow but steady drift of government buildings to the east bank, permanently pulling the city's political and commercial center of gravity eastward. He was also immortalized in literature. In The Arabian Nights, he appears frequently as a wise administrator and an essential character in the city's enchanted dreamscape.",
            "Relationship with Harun al-Rashid Jafar was Harun's vizier, closest friend, trusted adviser, and constant nadim (boon companion). The sources highlight that the two shared an intense bond and were veterans of legendary, wine-soaked evening revels in their respective palaces. In the fictionalized tales of The Arabian Nights, Jafar is frequently depicted at Harun's side as they prowl the streets and markets of Baghdad in disguise on nocturnal adventures.",
            "His Brutal Downfall Despite their extreme closeness, their relationship ended in stunning violence. In January 803, Harun shocked the empire by suddenly turning on the Barmakids and ordering his executioner, Masrur, to bring him Jafar's head. The order was so unexpected that Masrur questioned it three times, only relenting when the furious caliph threatened his life. Jafar was beheaded, his body was hacked into three pieces, and the parts were hung on gibbets for public display on the pontoon bridges across the Tigris. His rotting remains were left there for two years until Harun ordered them taken down and burnt in 805.",
            "The sources offer a few explanations for why Harun destroyed his closest friend.",
            "The scandalous legend. Historians like Tabari and Masudi suggest Harun arranged a \"paper marriage\" between Jafar and his sister, Abbasa, simply so she could respectably attend their private drinking parties. Harun gave strict orders that the marriage remain unconsummated. The two ultimately slept together, and Abbasa secretly had a baby, prompting Harun's wrath.",
            "Political reality. It is far more likely that Harun had simply grown deeply resentful and jealous of Jafar and the Barmakids' unprecedented power and wealth, which rivaled his own. Furthermore, Jafar had openly defied the caliph by releasing a rebel that Harun had explicitly ordered to be kept in custody."
        ]
    },
    "kadhimain": {
        title: "The Shrine at Kadhimain",
        date: "799",
        content: [
            "Imam Musa al-Kadhim (whose name translates to \"he who can control his anger\") was the seventh of the twelve Shia imams and a direct descendant of Hussain, who was martyred at Kerbala in 680 AD.",
            "In 799 AD, he died while confined in the custody of the Abbasid caliph Harun al-Rashid, a victim of the caliph's religious persecution. Following his death, the Imam was buried in north-western Baghdad at Makaber Kuraish, a graveyard originally laid out by Baghdad's founder, Al-Mansur, for the Kuraish (the principal tribe of the Prophet Mohammed and his descendants).",
            "The burials of Imam Musa al-Kadhim and his grandson Imam Mohammed al-Jawad are historically and culturally significant because their resting place evolved into one of the most important spiritual centers for Shia Muslims and a defining geographic and political landmark in Baghdad.",
            "Originating from Abbasid religious persecution, Musa al-Kadhim died in Harun al-Rashid's custody in 799 AD. Three decades later, Mohammed al-Jawad was likely poisoned under the caliph Al Mutasim. Their shared tomb in the Makaber Kuraish cemetery gave rise to the name Kadhimain, meaning \"the Two Kadhims\". This holy site became such a powerful magnet for pilgrims that it grew into an entire walled district of its own, Kadhimiya, located within a loop of the Tigris River. Today, it ranks as one of the four Atiyat Aliyat (Shia shrine cities) in Iraq, attracting up to half a million visitors on weekends.",
            "Because of its immense spiritual gravity, the shrine has also served as the historical epicenter of Baghdad's sectarian fault lines. Situated just across the river from the major Sunni shrine of Abu Hanifa, Kadhimiya has been a frequent flashpoint for Sunni-Shia violence. In 1051, for example, Sunni rioters plundered the complex and burned its great teak domes to the ground. In the modern era, it has been repeatedly targeted by terror groups, including a tragic 2005 stampede triggered by rumors of a suicide bomber that killed nearly 1,000 Shia pilgrims.",
            "Despite this long history of violence, including being plundered by Hulagu's Mongol hordes in 1258 and suffering devastating floods, the shrine has been continually restored and expanded by various rulers, such as the Persian Shah Ismail I and the Ottoman Sultan Suleyman the Magnificent. Today, with its dazzling gold-tiled domes and minarets, the Kadhimain shrine stands as one of Baghdad's most magnificent architectural sights and triumphant symbol of defiance and endurance."
        ]
    },
    "relocation-samarra": {
        title: "The Relocation to Samarra",
        date: "835",
        content: [
            "The relocation to Samarra was driven by the rise of the ghulams, a personal force of Turkish slave-soldiers recruited from the Central Asian steppes by the caliph Mutasim. While intended to serve as a loyal military vanguard, the ghulams quickly alienated the local people of Baghdad.",
            "Friction boiled over because the ghulams spoke no Arabic, aggressively seized lucrative court positions, and rode their horses recklessly through the streets, knocking over anyone in their path, including women and children. The resulting street clashes and murders prompted Mutasim to move his capital a hundred miles north to Samarra in 835 AD, a site that offered limitless land to accommodate his troops.",
            "However, this relocation proved disastrous for Abbasid political power. During the caliphs' absence from Baghdad, the Turkish commanders accumulated so much influence that the caliphs essentially became prisoners in their own palaces. Samarra devolved into a \"nightmare\" where Turkish amirs routinely crowned, deposed, and assassinated the leaders of the Islamic world.",
            "For Baghdad, losing its status as the imperial capital was a humiliating indignity, and it was forced to be ruled by a succession of governors. Furthermore, the move to Samarra did not spare Baghdad from violence. In 865, a mutiny in Samarra led the caliph Mustain to flee to Baghdad, which triggered a devastating ten-month siege of the city by Turkish forces backing a rival caliph.",
            "Despite this loss of political primacy, Baghdad had already cemented its role as the intellectual capital of the planet. The tenth-century geographer Mukaddasi famously referred to the region as \"the fountainhead of scholars\". The city's deep-rooted translation movements, immense libraries (like the House of Wisdom), and the wealth generated from its position as a global trading emporium allowed its cultural and scientific revolution to flourish even without the immediate presence of the caliphs.",
            "Ultimately, in 892 AD, the caliph Mutadid returned the capital to Baghdad to escape the complete loss of authority in Samarra, and Baghdad remained the seat of the Abbasid empire for its final 350 years."
        ]
    },
    "return-samarra": {
        title: "The Return from Samarra",
        date: "892",
        content: [
            "The Return from Samarra and Rebuilding the East Bank In 892 AD, the caliph Mutadid relocated the Abbasid capital from Samarra back to Baghdad, seeking to escape \"the nightmare of Samarra,\" where powerful Turkish military commanders (amirs) had taken to routinely crowning, deposing, and even assassinating the caliphs.",
            "Upon his return to Baghdad, Mutadid, who was a compulsive builder, launched a massive reconstruction effort. Rather than focusing on the original Round City on the west bank, he established the new caliphal world on the east bank of the Tigris River. He took over the Dar al Khilafat palace complex (which had originally been built by the vizier Jafar the Barmakid), enlarging it monumentally and laying out vast new gardens over cleared land. He subsequently built a series of other magnificent royal residences, including the Kasr al Firdus (Palace of Paradise), which featured an artificial lake and a park for wild animals, the Kasr al Thuraya (Palace of the Pleiades), and the Kasr al Taj (Palace of the Crown).",
            "The illusion of prestige and the loss of real power. This extravagant palace-building made Baghdad \"a sight to behold\" and restored the physical splendor of the caliphate. It also masked a grim political reality. The unchallenged imperial power of the early Abbasids was gone forever.",
            "The caliphs were steadily declining from being the absolute \"masters of the civilized world\" into mere \"puppet-rulers\" who lived under virtual palace arrest in their luxurious new compounds. Real political and military power remained firmly in the hands of the Turkish amirs who controlled central Iraq and its revenues. Further afield, the vast Islamic empire was fracturing. Local chiefs and warlords fought for control and offered the Baghdad caliphs nothing more than \"polite letters of deference\". Within a few decades, rival caliphates would even be declared by the Shia Fatimids in Tunisia and the deposed Umayyads in Spain.",
            "Ultimately, because these later Abbasid caliphs had lost their far-reaching authority and were masters of little more than their own estates, they redirected all their remaining royal energy and wealth into the architectural beautification of their immediate surroundings. The dazzling palaces of the east bank projected an image of immense prestige, but they were effectively gilded cages."
        ]
    },
    "byzantine-reception": {
        title: "The Byzantine Reception",
        date: "917",
        content: [
            "In 917 AD, the Abbasid caliph Al-Muktadir staged this astonishing reception for John Radinos and Michael Toxaras, Byzantine ambassadors sent by Empress Zoe to discuss peace terms.",
            "Facing domestic rebellions and the fracturing of his empire, Muktadir used this highly choreographed theater to project an illusion of unchallenged strength to his Greek guests. In reality, the Abbasid caliphate was on the verge of political collapse. Real power was held by Turkish military commanders, and the caliphs were steadily losing their far-reaching authority. To mask this decline, Muktadir weaponized Baghdad's wealth to intimidate the envoys.",
            "The display was designed to overwhelm the senses.",
            "The soldiers and servants. After being made to wait two months, the ambassadors were led through a staggering gauntlet of 160,000 cavalry and infantry, 7,000 eunuchs, 700 chamberlains, and 4,000 black pages.",
            "The palaces. The exhausted diplomats were forced to tour twenty-three different palaces in the grueling summer heat. These royal residences were draped with 38,000 brocade curtains and lined with 22,000 fine rugs and carpets.",
            "The animals. In the caliph's Park of the Wild Beasts, the envoys were confronted by four elephants draped in peacock-silk brocade with fire-throwers mounted on their backs and a hundred chained lions handled by keepers.",
            "The mechanical marvel. The absolute centerpiece of the tour was the Palace of the Tree, which housed a massive tree made of solid silver and gold weighing over 1.5 tons. Its eighteen branches featured mechanical gold and silver birds that actually whistled and sang as the branches swayed, a marvel that astonished the diplomats more than anything else they witnessed.",
            "The jewels. The climax of the tour was the audience with Caliph Muktadir himself. He sat upon an ebony throne overlaid with gold-embroidered cloth, flanked by sixteen massive jeweled necklaces. One of the necklaces reportedly \"eclipsed the daylight with its sparkle\".",
            "The theatrical intimidation worked perfectly. The Greek envoys were \"seized by awe and fear,\" kissed the caliph's letter in submission, and were sent away with purses stuffed with gold dinars.",
            "However, the magnificent reception was essentially a mirage. Because Muktadir and the later Abbasid caliphs had lost their actual political and military might, they redirected all their remaining royal energy and wealth into the architectural beautification of their immediate palatial surroundings. They created an image of immense imperial prestige, but they were effectively ruling from a gilded cage."
        ]
    },
    "buyids": {
        title: "The Buyids Take Control",
        date: "945",
        content: [
            "The year 945 AD marked an ominous turning point for the Abbasid caliphate when Ahmed ibn Buya, a military leader from the Caspian Sea region, took advantage of a collapsing government to seize Baghdad from the caliph Mustakfi. Taking the title Amir al Umara (Commander-in-Chief), he established the Shia Buyid Dynasty, which would control the city for the next century.",
            "This takeover officially reduced the once-mighty Abbasid caliphs to powerless figureheads. The stark reality of their decline was captured perfectly in a bitter letter from a subsequent caliph, Al-Muti, to the Buyid prince Izzud al Dawla. When asked to finance a holy war, the caliph replied that he had neither money nor troops, and noted that the Buyids' only use for him was to have his name uttered in Friday sermons to legitimize their rule and pacify the masses. He even offered to renounce that sole remaining privilege and leave everything to the Buyids.",
            "Because the Buyids were fiercely Shia, their rule frequently inflamed sectarian tensions in the Sunni-majority city. The Buyid ruler Muizz al Dawla (the title taken by Ahmed ibn Buya) was only narrowly dissuaded from deposing the Abbasid caliph completely. He deliberately provoked the Sunni population by mandating Shia fasting for the martyr Hussain and ordering anti-Sunni denunciations to be posted on mosque doors, predictably triggering public disturbances.",
            "Despite the humiliation of the Abbasid family, the arrival of the Buyids actually proved to be something of a boon for Baghdad's civic development. They invested in major infrastructure projects, most notably constructing a massive dyke to protect the city from flooding, which paved the way for a magnificent new complex of palaces on the east bank of the Tigris. Furthermore, because the Abbasid caliphs were completely stripped of their administrative and military burdens, their new masters allowed them to redirect all their free time and remaining wealth into their own extravagant palace-building, vastly expanding the royal compounds.",
            "Ultimately, the Buyid Dynasty was crippled by fierce infighting between rival princes, and their rule over Baghdad came to an abrupt end in 1055 when they were ousted by the Seljuk Turks."
        ]
    },
    "seljuk-turks": {
        title: "The Seljuk Turks",
        date: "1055",
        content: [
            "In 1055, the Shia Buyid Dynasty, which had dominated Baghdad for just over a century, collapsed under the weight of fierce internal infighting and tribal rebellions. Taking advantage of this unraveling, the Seljuk Turk leader Tughril Beg marched on Baghdad at the direct invitation of the Abbasid caliph Kaim, easily sweeping aside the last Buyid leader after minimal skirmishing.",
            "The Sunni shift and the sultanate. The Seljuk sultans were preoccupied with wider imperial expansion and generally chose to live outside Baghdad. Their arrival was still greeted with immense relief by the Abbasid establishment. For the largely Sunni court and scholars, replacing the heterodox Shia Buyids with a Sunni military power was the next best thing to the caliph regaining actual executive control. This transition formalized a new political reality, the development of the \"sultanate,\" an institution that acted as the military and political vanguard, ostensibly supporting the spiritual authority of the caliphate.",
            "The Nizamiya Academy and Cultural Endurance Even though Baghdad's political pre-eminence had faded, its intellectual gravity remained seemingly unstoppable. In 1065, just a decade after the Seljuk takeover, the famous Nizamiya Academy was opened on the east bank of the Tigris River, south of the caliphal complex.",
            "Named after the powerful Seljuk vizier Nizam al Mulk, the academy proved that Baghdad was still the ultimate magnet for the world's most elite scholars, jurists, and theologians. The institution hosted some of the greatest minds of the Middle Ages.",
            "Al-Ghazali, the towering Islamic theologian, jurist, and philosopher, lectured there.",
            "Sadi, the legendary Persian poet, came to the academy to study, as did Abdullah ibn Tumart, the future founder of the Almohad Dynasty in Spain.",
            "Imaduddin and Bahauddin, the famous biographers of Salahadin (Saladin), were also alumni.",
            "This period of intellectual vibrancy under the Seljuks also coincided with the arrival of Sheikh Abdul Kadir al Gailani, a highly revered Sufi mystic and theologian whose preaching in Baghdad was so persuasive it reportedly led droves of Christians and Jews to convert to Islam.",
            "Ultimately, the opening of the Nizamiya Academy demonstrated that while the city's political masters constantly changed from Abbasid caliphs to Buyid amirs to Seljuk sultans. Baghdad's foundational identity as the center of Islamic learning and culture could not be easily extinguished."
        ]
    },
    "historys-greatest-mistake": {
        title: "History's Greatest Mistake",
        date: "1255-1258",
        content: [
            "The first demand. Troops against the Assassins (c. 1255-1256)",
            "The first meaningful exchange between Hulagu and Al-Musta'sim came during Hulagu's campaign against the Nizari Ismaili Assassins in the Elburz Mountains of northern Iran. Likely in late 1255, Hulagu sent a message to Caliph al-Musta'sim demanding that Baghdad supply troops to help in the attack on the Nizari Ismailis.",
            "This was standard Mongol practice. The Abbasids had been paying tribute and were considered vassals. When a vassal was summoned to contribute soldiers, that was the most fundamental proof of submission.",
            "Al-Musta'sim's first instinct was to comply. At the prompting of his ministers and amirs, who argued that the Mongol prince's real purpose was to reduce Baghdad's capacity to resist a siege, he failed to send any troops. The reasoning was understandable but ultimately catastrophic. The Dawatdar (the keeper of the inkpot, a senior military figure) and others around the caliph warned that Hulagu was trying to lure Baghdad's defenders out of the city in order to leave it defenseless. They convinced Al-Musta'sim to refuse.",
            "Al-Musta'sim refused. As the Abbasids had been sending tribute in the previous years and were considered vassals, such a refusal was a declaration of independence. To the Mongols, the failure to send troops when summoned was an act of open revolt. Hulagu, having been sent in part to find how sincere the Caliph's submission was, now had his casus belli.",
            "There was also the matter of gifts. When the vizier Ibn al-Alqami urged the dispatch of valuable gifts to Hulagu, the Caliph made preparations to do so, only to be dissuaded by the Lesser Dawatdar and his associates, who accused the vizier of currying favor with the enemy. Goods of small value were sent out instead. So even the diplomatic gesture of rich offerings was sabotaged by the caliph's own court factions.",
            "Hulagu's Ultimatum Letter (Summer/Autumn 1257)",
            "After the destruction of the Assassin strongholds by the end of 1256, Hulagu turned his attention fully toward Baghdad. The summer of 1257 was spent in diplomatic exchanges with the caliph from Hulagu's headquarters in the Hamadan area.",
            "It was during this period, likely in September 1257, that Hulagu composed his famous letter to Al-Musta'sim. In September, Hulagu began a correspondence with al-Musta'sim, described by the historian Rene Grousset as \"one of the most magnificent dialogues in history.\"",
            "Hulagu's letter was blunt, threatening, and comprehensive. He opened by reciting the caliph's failure to provide troops against the Assassins. He reminded Al-Musta'sim that he had claimed to be a subordinate yet had sent only excuses instead of soldiers. He pointed to the fate of every great dynasty that had defied the Mongols, from the Khwarazmshahs to the Saljuqs to the Atabaks, all crushed by what Hulagu called the power of the Everlasting Eternal God. He noted that Baghdad had never closed its gates to any of those previous ruling families, and asked how the caliph could possibly hope to close them against the Mongols.",
            "The letter then pivoted to specific demands. Hulagu ordered Al-Musta'sim to tear down the city ramparts and fill in the moats, to come to Hulagu in person, or at minimum to send his three highest ministers. They were the vizier Ibn al-Alqami, the general Sulaymanshah, and the Dawatdar. These three were to deliver Hulagu's terms face to face.",
            "If the caliph obeyed, Hulagu promised he could retain his lands, his army, and his subjects. If not, Hulagu unleashed a terrifying poetic threat. He told the caliph that when his armies came against Baghdad in fury, there would be nowhere to hide, whether in the heavens or on earth. He promised to leave no one alive in the caliph's realm and to burn the city, the lands, and the caliph himself. He closed with a final warning to the caliph to spare himself and his family by listening with the ear of intelligence, or else to witness whatever God had willed.",
            "Al-Musta'sim's Defiant Reply",
            "The caliph's response was strikingly bold for a ruler in his position. It was dripping with contempt. He addressed Hulagu as a young man who had only just come of age, someone drunk on early success who imagined he would live forever. He mocked the very idea of capturing Baghdad by comparing it to trying to lasso a star.",
            "Al-Musta'sim then made a sweeping claim about his own power. He declared that from east to west, from kings to beggars, every God-fearing person was a servant of his court and a soldier in his army. He said that if he were to call all those dispersed forces together, he would deal first with Iran and then turn his attention to the Mongol lands of Turan. He presented himself as being of one heart and one tongue with the Mongol Great Khan Mongke and with Hulagu himself, and he suggested that if Hulagu were wise, he would adopt the path of friendship and go back to Khorasan. Only then, the caliph implied, would he not need to worry about the moats and ramparts of Baghdad.",
            "Al-Musta'sim's reply to Hulagu's letter called the Mongol leader young and ignorant, and presented himself as able to summon armies from all of Islam. This was, in reality, empty bluster. The Mamluk Sultanate in Egypt was hostile towards the caliph, while the Ayyubid minor rulers in Syria were focusing on their own survival. The grand Islamic coalition the caliph boasted of calling into existence had no chance of materializing.",
            "Hulagu's Wrathful Second Reply",
            "After receiving this response, Hulagu sent back a short and wrathful message. He stated that God the eternal had elevated Genghis Khan and his descendants and given them all the face of the earth. He declared that anyone whose heart and tongue were aligned in submission retained his kingdom, property, women, children, and life. And he stated plainly that anyone who thought otherwise would not live to enjoy any of those things.",
            "The Failed Envoy Exchange",
            "His first message demanded that the caliph peacefully submit and send his three principal ministers, the vizier, the commander of the soldiers, and the Dawatdar, to the Mongols. All three likely refused, and three less important officials were sent instead.",
            "This was another provocation in Mongol eyes. Hulagu had specifically named the three highest figures of state. Al-Musta'sim sent lesser substitutes. Hulagu ordered him to send either the vizier, the Dawatdar, or the general Sulaymanshah. The Caliph instructed them to go but then changed his mind, possibly because all three refused. As a result, those deputed were persons of lesser importance.",
            "Making matters worse, the caliph's reply was accompanied by disrespectful behavior towards Hulagu's envoys, who were exposed to taunting and mockery from mobs on Baghdad's streets. When he sent back Hulagu's envoys, they were harassed by the people of Baghdad. The caliph's vizier, Ibn al-Alqami, had to send soldiers to protect the envoys to ensure they weren't killed. This humiliation of ambassadors was a profound offense in Mongol culture. Among the steppe peoples, the mistreatment of envoys was one of the gravest provocations imaginable. It was an insult to an envoy's mistreatment that had originally drawn Genghis Khan into war with the Khwarazmian Empire decades earlier.",
            "The intermediary exchange. Qara Sonqor and Sultanchuq",
            "A fascinating side exchange took place between lower-ranking figures that perfectly captures the tone of the larger conflict. As Hulagu's forces advanced, a Mongol officer of Khwarazmian descent named Sultanchuq sent a letter to Qara Sonqor, a Qipchaq commander in the caliph's advance guard. The letter was a personal appeal from one Turkic warrior to another, urging Qara Sonqor to surrender and save his family, just as Sultanchuq himself had done after years of hardship.",
            "Qara Sonqor wrote back in defiance. He asked how the Mongols could dare to attack the House of Abbas, a family that had seen as much good fortune as Genghis Khan's, whose foundations were too firm to quake with every passing breeze, and who had ruled for more than five hundred years. He called it foolish to trade the ancient tree of the caliphate for what he called the young sapling of Mongol fortune. Then, with stunning audacity, he suggested that if Hulagu regretted his aggression and turned back toward Hamadan, the Dawatdar might intercede with the caliph on Hulagu's behalf and perhaps the caliph would overlook the offense.",
            "When Sultanchuq reported the contents of the letter to Hulagu Khan, he laughed and said that his reliance was on the Creator, not on money. He asked what he had to worry about from the caliph and his troops if God befriended him. He then sent another emissary demanding that the caliph come out in person if he was truly in submission, and that the vizier, Sulaymanshah, and the Dawatdar be sent to hear Mongol terms. Otherwise, it meant war.",
            "The last diplomatic attempts. The entreaties at Dinawar and beyond",
            "As Hulagu's army moved through western Iran toward Baghdad in November 1257, Al-Musta'sim made a final diplomatic effort. At Asadabad, Hulagu once again sent a messenger to summon the caliph, but the caliph refused. Then, at Dinawar, Ibn al-Jawzi arrived again from Baghdad bearing a message filled with entreaties for Hulagu to turn back, in exchange for which the caliph would remit whatever would be agreed upon to the treasury annually.",
            "This was a remarkable shift. The caliph had gone from threatening to mobilize all of Islam against Hulagu to offering annual tribute payments if only the Mongol army would turn around. The caliph also proposed that Hulagu's name be mentioned in the Friday sermons at Baghdad's mosques and offered him the title of sultan. Both of these were significant concessions.",
            "But it was far too late. Hulagu Khan thought the caliph wanted the troops to turn back and thus incite them to disobedience. \"Since we have come all this way,\" he said, \"how can we turn back without having seen the caliph? After we have had an audience with him and seen and spoken with him, we will withdraw with his permission.\" This was a transparent piece of diplomatic theater. Hulagu had no intention of merely meeting the caliph and withdrawing.",
            "The Exchanges During the Siege",
            "Once the Mongol army surrounded Baghdad in late January 1258 and the siege began in earnest, the exchanges became increasingly desperate on the caliph's side.",
            "The caliph sent out the vizier and the catholicos, saying, \"The Padishah said I should send the vizier out. I have kept my promise and am sending him. Let the Padishah also keep his word.\"",
            "Hulagu rejected this. He said that he had made that demand at the gates of Hamadan, and now that a war was already raging, he could not be satisfied with only one. He demanded all three ministers.",
            "The next day the vizier, the divan chief, and a group of well-known citizens came out, but they were sent back. Fierce fighting continued for six more days. Meanwhile, Hulagu had six proclamations written, promising safety to judges, scholars, shaykhs, descendants of Ali, Nestorian Christians, and anyone who did not fight. These proclamations were fastened to arrows and shot into the city from six directions.",
            "As the walls began to fall and towers collapsed under catapult fire, the caliph's negotiating position deteriorated by the hour. When the caliph was apprised of the situation he despaired totally of his rule of Baghdad. Seeing no escape route, he said, \"I will surrender.\" He sent out Fakhruddin Damghani and Ibn Durnus with a few gifts. But he deliberately held back the bulk of his wealth, thinking that sending too much would reveal his fear and embolden the enemy. Hulagu Khan paid no attention to the embassy, and they returned in failure.",
            "On February 5, the caliph sent out his middle son, Abu'l-Fadl Abdul-Rahman, along with the Sahib-Divan and a group of dignitaries carrying a large tribute. It was not accepted. The following day, February 6, the caliph sent out his oldest son, the vizier, and a group of courtiers to intercede. That too failed. In their company, Hulagu sent Khwaja Nasiruddin Tusi and Ay Temur back into the city on an embassy to the caliph.",
            "On February 7 they came out again. Hulagu sent envoys back into the city to bring Sulaymanshah and the Dawatdar out personally. He sent a decree and a Mongol paiza, a tablet of authority. He told the caliph he could choose whether to come out. The Mongol troops would remain on the walls until the demanded officials emerged.",
            "On February 8, Sulaymanshah and the Dawatdar finally came out. They were sent back into the city to organize the evacuation of the army. With them, the army of Baghdad decided to come out, as did an innumerable host, hoping to find safety, but they were divided into units of thousands, hundreds, and tens and killed to the last.",
            "On February 10, Al-Musta'sim himself surrendered and went to Hulagu's camp. The last of the correspondences had ended. What followed was the sack of Baghdad and the execution of the caliph, who was wrapped in a carpet and trampled to death, as the Mongols believed spilling royal blood upon the earth would bring a curse.",
            "Conclusion",
            "The entire series of exchanges followed a clear arc. Hulagu began with reasonable (by Mongol standards) demands for military cooperation. Al-Musta'sim refused. Hulagu escalated to an ultimatum full of threats. Al-Musta'sim replied with empty defiance and insults. Hulagu responded with cold finality. The caliph then shifted to offering tribute and concessions, but only after the army was already on the march. Each attempt at negotiation from Baghdad came one step too late and offered one step too little.",
            "The exchanges reveal Al-Musta'sim as a man caught between his own pride, his court's factionalism, and a threat he did not fully grasp until it was too late. They reveal Hulagu as someone who followed the Mongol diplomatic playbook with methodical patience, giving the caliph several chances to submit before bringing overwhelming destruction."
        ]
    },
    "hulagu-correspondence": {
        title: "The Correspondence between Hulegu and the Caliph",
        date: "1257",
        content: [
            "Hulegu",
            "“When the Heretics’ fortresses were conquered we sent emissaries to request assistance from you… In reply you claimed submission and sent no troops. Now, a token of submissiveness and allegiance is that you assist us with troops when we ride against foes. You have not done so, and you send excuses.",
            "No matter how ancient and grand your family may be, and no matter how fortunate your dynasty has been … is the brightness of the moon such that it can eclipse the brilliance of the sun? Talk of what the Mongol army has done to the world and those in it from the time of Genghis Khan until today may have reached your hearing from common and elite, and you may have heard how, through God’s strength, they have brought low … dynasties … all of whom were families of might and majesty.",
            "Previously we have given you advice, but now we say you should avoid our wrath and vengeance. Do not try to overreach yourself or accomplish the impossible, for you will only succeed in harming yourself. The past year is over. Destroy your ramparts, fill in your moats, turn the kingdom over to your son, and come to us…. If you command is obeyed, it will not be necessary for us to wreak vengeance, and you may retain your lands, army, subjects. If you do not heed our advice and dispute with us, line up your soldiers and get ready for the field of battle, for we have our loins girded for battle with you and are standing at the ready. When I lead my troops in wrath against Baghdad even if you hide in the sky or in the earth … I shall put your city and country to the torch. If you desire to have mercy on your ancient family’s head, heed my advice. If you do not let us see what God’s will is.”",
            "the Caliph",
            "“Young man, you have just come of age and have expectations of living forever. You have … passed prosperously and auspiciously in dominating the whole world. You think your command is absolute…. Since you will get nothing from me, why do you seek? You come with strategy, troops, and lasso. How are you going to capture a star? Does the prince know that from the east to the west, from king to beggar, from old to young, all who are God-fearing and God worshipping are servants of this court and soldiers in my army? When I motion for all those who are dispersed to come together, I will deal first with Iran and then turn my attention to Turan, and I will put everyone in his proper place. Of course, the face of the earth will be full of tumult. I seek no vengeance and wish harm to no one. I do not desire that the tongues of my subjects should either congratulate or curse me because of the movement of armies, espcially since I am of one heart and one tongue with the Qa’an (Mongke) and Hulegu. If, like me, you were to sow seeds of friendship, do you think you would have to deal with my moats and ramparts and those of my servants? Adopt the path of friendship and go back to Khurasan (Central Asia).”",
            "Hugelu",
            "“God the eternal elevated Genghis Khan and his progeny and gave us all the face of the earth, from east to west. Anyone whose heart and tongue are straight with us in submission retains his kingdom, property, women, children, and life…. He who contemplates otherwise will not live to enjoy them.”"
        ]
    },
    "tamerlane-brutality": {
        title: "Tamerlane's Brutality",
        date: "1401",
        content: [
            "In 1401, the Turkic warlord Tamerlane (also known as Timur) launched a devastating and merciless attack on Baghdad. He had previously captured the city in 1393, but returned to sack it completely after the local ruler, Sultan Ahmed, retook Baghdad and flouted his authority. Tamerlane's massive Tatar army encircled the city for six weeks, blockading the Tigris River with a bridge-of-boats to cut off all escape routes while his sappers relentlessly undermined the city's walls.",
            "The actual storming of the city occurred during the blistering heat of a summer noon. When the exhausted defending soldiers abandoned the scorching ramparts, Tamerlane immediately ordered a general assault, overwhelming the walls with scaling ladders and a torrent of troops. Panic-stricken Baghdadis who attempted to flee by throwing themselves into the Tigris were mercilessly shot down by archers waiting on the riverbanks.",
            "Because the retaking of the city had cost him many men, Tamerlane sought brutal vengeance and gave no quarter to the city's residents, sparing only a few religious leaders and scholars. He issued a terrifying order demanding that each of his soldiers bring him two severed heads from the city's inhabitants. The resulting massacre was indiscriminate. His soldiers slew approximately 90,000 Baghdadis, sparing neither the elderly nor young children. The troops were so terrified of Tamerlane's orders that some resorted to beheading their own prisoners or Syrian allies if they could not find enough Baghdadis to meet their quota.",
            "These 90,000 severed heads were then piled up to construct 120 gruesome \"towers of skulls\" around the flattened city, which served as Tamerlane's terrifying battlefield signature. After ordering the complete physical destruction of Baghdad's homes, palaces, baths, and markets, Tamerlane bizarrely concluded his \"pilgrimage of destruction\" by visiting the tomb of Imam Abu Hanifa to pray. He left behind a ruined, putrid ghost town where vultures circled and owls nested in the rubble."
        ]
    },
    "black-white-sheep": {
        title: "Black and White Sheep",
        date: "1402-1508",
        content: [
            "The Black Sheep (Kara Koyunlu) and White Sheep (Ak Koyunlu) were unruly confederations of Turkic tribes made up of pastoral nomads whose precise origins are obscure. Their distinctive names are believed to have derived from the predominant colors of their respective flocks.",
            "From the late fourteenth century through most of the fifteenth century, these bitter adversaries vied for control over a vast territory that encompassed present-day Armenia, Azerbaijan, eastern Turkey, and large swathes of Iran and Iraq. Their successive rule over Baghdad reflected the city's severe decline in the wake of the Mongol and Tatar invasions, reducing the once-glorious imperial capital to little more than a provincial prize tossed between shifting tribal confederations.",
            "The Black Sheep Dynasty established control over Baghdad following a period of extreme political disarray after Tamerlane's death, with their leader Kara Yusef inaugurating a dynasty that governed the city (however nominally) until 1468. Under their greatest leader, Jahan Shah, the Black Sheep expanded their dominions across most of Iraq, central Iran, Fars, Kerman, and parts of Anatolia. However, Jahan Shah met a bloody end in 1467 when he was killed by the White Sheep chief Uzun Hassan (\"The Tall\"), effectively destroying the Black Sheep dynasty.",
            "The White Sheep Dynasty, having supplanted their rivals, forced Baghdad to acknowledge their power following a brief siege. Their leader, Uzun Hassan, was actively courted by the Venetians as a potential ally against the rising Ottoman Empire. A visiting Venetian envoy described the White Sheep ruler as a tall, thin, seventy-year-old man with a merry disposition, though he was very fond of wine and could become dangerous when drunk. Following Uzun Hassan's death in 1478, the White Sheep dynasty quickly began to tear itself apart, descending into a brutal civil war marked by intrigue, poisonings, and regicide among his rival descendants.",
            "The era of the White Sheep finally ended at the dawn of the sixteenth century at the hands of the newly emerging Persian Safavid Empire. Ironically, it was Shah Ismail, who was himself the grandson of the White Sheep ruler Uzun Hassan, rallied followers to defeat the fractured White Sheep leadership, eventually sending his general to seize Baghdad from the White Sheep ruler Murad in 1508."
        ]
    },
    "safavids": {
        title: "The Safavids",
        date: "1499-1623",
        content: [
            "The Safavids were a Persian dynasty that emerged at the dawn of the sixteenth century, originating from a Sufi holy order founded by the ascetic Sheikh Safi in Ardabil, north-western Persia.",
            "The dynasty was established by Shah Ismail, the messianic grandson of the White Sheep ruler Uzun Hassan, who began rallying followers in 1499 and proclaimed himself Shah in 1501. Known for his ruthless military campaigns and extreme cruelty, Ismail rapidly expanded his territory, and within a year, all of western Persia acknowledged his power.",
            "The Safavids hold profound historical significance because they successfully united Persia under native Persian rule for the first time in 850 years. They ended centuries of domination by Arab caliphs, Turkish sultans, and Mongol khans, and formally established the Shia faith as the official state religion.",
            "Their ascent had a drastic and bloody impact on Baghdad and the wider Middle East. In 1508, Shah Ismail's forces captured Baghdad, ushering in a period of severe religious intolerance. Under Safavid rule, sectarian lines were violently enforced. The tombs of Sunni saints were leveled, leading Sunni figures were executed, and the new authorities issued inflammatory orders to convert Sunni mosques into Shia ones. Conversely, the Safavids lavished resources on Shia sanctuaries, such as the Kadhimain shrine in Baghdad, and maintained strong ties to the holy cities of Samarra, Kerbala, and Najaf.",
            "This militant promotion of Shia Islam put the Safavid Empire on a collision course with the neighboring Sunni Ottoman Empire, sparking a fierce and enduring geopolitical rivalry. Several key events defined the conflict.",
            "The Battle of Chaldiran in 1514. The Ottoman Sultan Selim the Grim, having already massacred tens of thousands of Shia within his own borders, routed Shah Ismail's heavily outnumbered army, dealing a psychological blow so severe that Ismail never took to the battlefield again.",
            "The struggle for Baghdad. The city became a focal point of their rivalry, changing hands multiple times. The Ottomans captured Baghdad in 1534 under Suleyman the Magnificent, and Safavid rulers continually sought to undermine them. For instance, Shah Abbas I successfully recaptured Baghdad for the Safavids in 1623 through a secret pact, resulting in a horrific massacre and enslavement of thousands of the city's Sunni inhabitants.",
            "The Safavids remained a persistent menace to Ottoman power until the dynasty eventually fell into decline, which subsequently brought a much-needed period of relative peace to Baghdad that lasted for about eight decades."
        ]
    },
    "jews-baghdad": {
        title: "The Jews of Baghdad",
        date: "1800s-1900s",
        content: [
            "The Jewish community of Baghdad traces its roots back to the Babylonian Captivity in 586 BC, marking it as one of the oldest and most historically significant Jewish populations in the world. Over the centuries, Baghdad's Jews experienced periods of extraordinary prosperity and influence, alternating with devastating persecution that has left the community virtually extinct today.",
            "The Medieval Golden Age and Mongol Era During the Abbasid era, the Jewish community enjoyed remarkable security and prominence. In the 1160s, the traveler Benjamin of Tudela reported an honored community of around 40,000 Jews living in the city, which boasted 28 synagogues adorned with marble, silver, and gold. The community was led by the Exilarch, an immensely wealthy and respected figure who traced his lineage to King David and wielded authority over Jewish congregations from Mesopotamia all the way to India and Tibet.",
            "Under the Mongol Ilkhanate, a Jewish physician named Saad al Dawla even rose to the supreme rank of grand vizier. However, his assassination in 1291 sparked a brutal mob attack on the Jewish quarter, and subsequent rulers subjected Jews to humiliating religious persecutions, such as forcing converts to Islam to eat camel's meat cooked in milk (doubly non-Kosher). By 1604, the population of Jews had dwindled to just 200 to 300 mostly impoverished families confined to a separate ward.",
            "The 19th and early 20th centuries ushered in a dramatic demographic and economic revival. By 1917, the Jewish population had exploded to 80,000, constituting nearly 40 percent of Baghdad's entire population. Baghdad's Jews literally monopolized local trade, establishing global commercial networks extending to London, Bombay, and Shanghai.",
            "Education flourished with the opening of modern institutions like the Albert Daud Sassoon school in 1865 and the elite Laura Kedourie School for Girls in 1911. While traditional rabbis fiercely opposed the Europeanized, secularizing influence of these schools - even threatening to excommunicate barbers who trimmed beards and earlocks, the community modernized rapidly.",
            "The 1908 Young Turks Revolution was a watershed moment, abolishing the restrictive dhimmi (second-class) status and granting Jews full equality as citizens. Prominent figures like Sassoon Eskell emerged as powerful statesmen, representing Baghdad in the Ottoman parliament and later serving as the first finance minister of the newly formed Iraqi state in 1921.",
            "Despite their success, Baghdad's Jews frequently endured petty harassment and mob violence from the Muslim majority, which deeply resented their wealth. This tension escalated horrifically in the 20th century, fueled by anti-Western Arab nationalism and Nazi propaganda broadcast heavily into Iraq.",
            "On June 1st and 2nd, 1941, the community suffered the Farhud, a vicious pogrom in which rioting mobs slaughtered approximately 200 Jews, raped women, and brutally mutilated children while Iraqi security forces stood by. This massacre sounded the death knell for Jewish hopes of peaceful coexistence in Iraq.",
            "Following the creation of Israel in 1948, Zionism was declared a capital offense, and Jews were violently purged from public life. In 1951 and 1952, an organized airlift known as Operation Ezra and Nehemiah evacuated over 120,000 Jews, who were permitted to leave only on the condition that they forfeit their Iraqi citizenship and all their property.",
            "Only a few thousand remained, but they faced continued terror under the Baath Party. In January 1969, nine Jews were falsely accused of spying and publicly hanged in Baghdad's Liberation Square, their tortured bodies dangling from scaffolds while a crowd of 200,000 people cheered and danced. Decades of relentless persecution, torture, and mass emigration ultimately eradicated the community. By the early 21st century, Baghdad's ancient Jewish population was reduced to a mere seven or eight individuals, too few to even form the minyan required to hold a public religious service."
        ]
    },
    "sarah-khatun": {
        title: "Sarah Khatun",
        date: "1910-1911",
        content: [
            "Sarah Khatun was an extraordinarily beautiful and immensely wealthy seventeen-year-old Armenian-Iraqi woman who had inherited vast estates and fruit groves in and around Baghdad. In August 1910, the sixty-two-year-old Ottoman ruler of Baghdad, Nazim Pasha, caught sight of her at a river-ship charity ball and became completely infatuated.",
            "When Sarah rejected the pasha's marriage proposal because she already had a fiancé, Nazim Pasha used his immense power to retaliate. He arrested her servants, sent her fiancé away to Kirkuk on military service, and ordered the police to break into her house to capture her.",
            "Sarah climbed over her garden wall and initially sought refuge with the German consul, before eventually being granted sanctuary in the home of Sayid Abdul Rahman al Gailani, the doyen of Baghdad's notables. Nazim Pasha placed the neighborhood under surveillance, but when Sarah tried to break through the cordon hidden in a horse-drawn carriage, crowds from the local Bab al Sheikh neighborhood violently beat back the police who tried to apprehend her.",
            "The standoff escalated into a massive political scandal. News of the affair reached Istanbul, resulting in a sensational newspaper article and vigorous protests against the pasha in the Ottoman parliament in early 1911. Undeterred, Nazim Pasha procured a fraudulent medical report declaring Sarah insane in an attempt to have her legally locked up.",
            "To finally escape the tyrant, Sarah disguised herself as a French nun and boarded a British Lynch Company ship. The pasha's police attempted to stop her departure, but the British captain prohibited them from boarding. When she arrived in Basra, she was secretly transferred to a British steamer and spirited away to safety in Bombay.",
            "Sarah's dramatic escape was a total humiliation for Nazim Pasha, who was promptly removed from his position in Baghdad. His ousting was wildly celebrated throughout the city, even inspiring a popular poem titled The Tyrant of Baghdad. Sarah Khatun later returned to Baghdad after the First World War, where she dedicated her life and her vast fortune to protecting and housing Armenian refugees fleeing death camps in Turkey. Although she died in poverty in 1960, her legacy survives in the Baghdad neighborhood named after her, Camp Sarah."
        ]
    },
    "bab-al-talism": {
        title: "Bab al-Talism",
        date: "1917",
        content: [
            "Bab al-Talism, also known as the Talisman Gate, was a handsome and historically significant monument in Baghdad's eastern city walls that dated back to the Abbasid caliphate in the late twelfth or thirteenth century. It was originally known as the Halba (Racecourse) Gate because it overlooked a polo field, but later earned the name \"Talisman Gate\" due to the unusual inscriptions that adorned it. The gate was rebuilt by the ambitious Abbasid caliph Al Nasir, who added a commemorative inscription to it.",
            "The gate is most famous for its centuries-long closure. Following the Ottoman conquest of the city, Sultan Murad IV marched out through Bab al-Talism at the head of his victorious army on February 17, 1639. Immediately afterward, the sultan ordered the gate to be permanently bricked up so that no future conqueror could ever follow in his footsteps. For nearly three centuries, it stood proudly guarding the eastern approach to the city, its brick-filled arch looking somewhat incongruous but remaining a cherished relic of the city's past.",
            "Tragically, this architectural jewel was completely destroyed in 1917. As Ottoman control of Baghdad collapsed after 383 years and the Turkish Army retreated ahead of advancing British forces, the Turks committed a final act of vandalism by blowing Bab al-Talism to smithereens."
        ]
    },
    "war-of-cities": {
        title: "War of the Cities",
        date: "1980s",
        content: [
            "During the first two years of the Iran-Iraq war, Saddam Hussein used Iraq's vast oil revenues and financial reserves to insulate the country from the economic impacts of the conflict. The regime significantly increased public spending from $21 billion in 1980 to $29.5 billion in 1982, initiating a massive construction boom that temporarily transformed Baghdad into a \"giant construction site\".",
            "Driven in part by Saddam's ambition to host the 1982 Non-Aligned Movement Conference, this frenzied redevelopment included the construction of a new airport, twelve bridges, forty-five shopping centers, new hotels (such as the $80 million Sheraton), hospitals, parks, superhighways, and hundreds of miles of water and sewer lines.",
            "However, this cushion of oil wealth and construction was short-lived. By 1983, the staggering costs of the war and plummeting oil revenues plunged Iraq into an acute economic crisis, bringing all construction and development projects to a sudden halt.",
            "Increased imports, blackouts, the constant sight of funerals, and devastating missile strikes during the \"War of the Cities\" also became defining features of life in Baghdad as the eight-year war dragged on."
        ]
    },
    "christians-baghdad": {
        title: "Christians of Baghdad",
        date: "2010",
        content: [
            "Nestorian monks lived in the area before Baghdad's foundation and even advised the caliph Mansur on the site's favorable climate. During the eighth century, Baghdad was so significant that it could have rivaled Rome as a capital for worldwide Christianity.",
            "Under the Abbasid caliphate, Christians thrived, particularly in East Baghdad's Shammasiya district, which housed numerous monasteries and churches. The Abbasids granted the Nestorian patriarch official jurisdiction over all Christians in the caliphate, an area extending from Egypt to Central Asia. Christians were highly valued for their scientific and medical expertise. The Syriac Christian Bakhtishu family provided court physicians for over 250 years, and the Nestorian Christian Hunayn ibn Ishak was the doyen of Abbasid scientists and the chief translator in Baghdad's House of Wisdom. Additionally, Christian monasteries were popular centers of entertainment, discreetly serving wine to Baghdadis during late-night drinking bouts.",
            "During the devastating Mongol sack of Baghdad in 1258, Christians (along with Jews) were the only groups explicitly spared by Hulagu Khan. Hulagu, whose mother and wife were Christians, granted the Nestorian patriarch one of the caliph's palaces and a large plot of land inside the caliph's sanctuary to build a church. The building still stands on Khulafa Street today. However, this favored status and the behavior of some Christians, such as the Georgians who eagerly partook in the slaughter of Muslims, eventually provoked a Muslim backlash. This led to riots, the imprisonment of clergy, and the eventual exile of the Nestorian patriarch to Erbil in the late thirteenth century.",
            "In the centuries that followed, the community experienced internal changes, such as a 1552 schism that created the Chaldean Church, and saw the arrival of European Catholic missions like the Capuchins and Carmelites. By the nineteenth century, Christians in Baghdad enjoyed a rare degree of tolerance compared to other Islamic cities, such as being permitted to ride horseback alongside Muslims. A prominent neighborhood, Agd al Nasara (Christians' Alley), housed abbeys and the homes of wealthy Christians. By 1917, the Christian population in Baghdad had grown to around 12,000.",
            "The twentieth and twenty-first centuries, however, brought severe tragedies. In 1933, the Iraqi Army massacred over 300 Assyrian Christians in the village of Simayl, decorating triumphal arches in Baghdad with melons meant to represent severed Assyrian heads.",
            "Following the 2003 US-led invasion, Baghdad's Christians faced a catastrophic wave of sectarian violence. Churches were systematically bombed, Christian-owned shops were firebombed, and extremists distributed leaflets warning Christians to stop \"corrupting Islamic society\". By 2010, an estimated 300,000 of Baghdad's 400,000 Christians had fled the capital. In one of the most horrific attacks, Al Qaeda-linked militants stormed the Syrian Catholic church of Our Lady of Salvation in October 2010, taking hostages and killing 58 people, including two priests. Today, the surviving Christian community, which includes Chaldeans, Assyrians, Orthodox, and Armenian Catholics, numbers around 100,000 nationwide, clinging to their ancient faith despite a relentless campaign of kidnappings, torture, and assassinations."
        ]
    }
};
