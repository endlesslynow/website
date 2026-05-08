function buildDetailCardLines() {
    var scrollX = window.scrollX || window.pageXOffset || 0;
    var scrollY = window.scrollY || window.pageYOffset || 0;

    // --- Position each detail card to match its event card vertically ---
    var col = document.getElementById('foundation-detail-root');
    if (col) {
        var colTop = col.getBoundingClientRect().top + scrollY;
        var maxBottom = 0;
        document.querySelectorAll('.detail-card-wrapper[data-anchor-year]').forEach(function(wrapper) {
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
            var eventMidY = eRect.top + scrollY + eRect.height / 2;
            var cardH = wrapper.offsetHeight;
            var top = Math.max(0, eventMidY - colTop - cardH / 2);
            wrapper.style.top = top.toFixed(1) + 'px';
            maxBottom = Math.max(maxBottom, top + cardH);
        });
        col.style.height = maxBottom + 'px';
    }

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
        path.setAttribute('class', 'timeline-event-line is-foundation detail-card-line');
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
            "Captured by Arab armies in 650 AD, Khorasan was a vast and geographically diverse region stretching across modern-day eastern Iran, Afghanistan, Uzbekistan, and Turkmenistan. As it was absorbed into the Islamic Empire, it rapidly evolved into a unique cultural melting pot where Arab conquerors settled directly alongside newly converted Turkish nomads, Iranian princes, impoverished peasants, and prosperous Soghdian Silk Road merchants.",
            "This highly diverse demographic proved to be the Achilles' heel of the ruling Umayyad Dynasty and the perfect launching pad for the Abbasids.",
            "At the time, the Islamic Empire was ruled from Damascus, Syria, by the Umayyads, who heavily favored Arab tribes over all other races, regardless of whether those non-Arabs had converted to Islam. This discriminatory policy deeply alienated the mixed population of Khorasan, and their discontent was further fanned by reports of the Umayyads' astonishingly luxurious lifestyles and their perceived neglect of the Islamic faith.",
            "Recognizing this volatile frontier as fertile ground for rebellion, the Abbasids began their infiltration. They utilized a covert network of agents disguised as ordinary merchants to whisper plans of revolution along the trade routes into Khorasan. The Abbasid agents tailored their propaganda to the region's diverse population by promising an Islamic revival where Arabs and non-Arabs would be treated as absolute equals. They used a strategy of calculated vagueness, asking supporters to pledge allegiance to an acceptable member of the House of the Prophet without explicitly revealing their own Abbasid identities, a ruse that successfully tricked the Shia population into joining their cause.",
            "The strategy worked perfectly. In June 747, the Abbasid insurgents finally unfurled their black banners of revolution near the oasis city of Merv, and thousands of Khorasanians flocked to take up arms. Led by the brilliant and ruthless military commander Abu Muslim, this Khorasan-backed coalition swept westward, ultimately annihilating the massive Umayyad army at the Battle of the Great Zab River in northern Iraq in 750 AD.",
            "This revolution completely shifted the geopolitical center of the Islamic world. Because the Abbasids had risen to power on the backs of Khorasanian and Persian support rather than the old Syrian world, remaining in Damascus was out of the question.",
            "The Abbasids needed a new headquarters that reflected this eastward shift in power. Consequently, in 762 AD, the second Abbasid caliph, Al-Mansur, selected a highly strategic, fertile location in central Mesopotamia to serve as the permanent capital of this new, victorious empire: the city of Baghdad."
        ]
    },
    "perfume-dealers": {
        title: "The Perfume Dealers",
        date: "c. 719",
        content: [
            "The perfume dealers you are thinking of were actually undercover revolutionaries whose secret missions ultimately led to the creation of the Abbasid Dynasty and, by extension, the founding of Baghdad itself.",
            "Around the year 719 AD, a revolution began smoldering against the ruling Umayyad Dynasty, which was based in Damascus. The opposition movement, loyal to the Abbasids (descendants of the Prophet Mohammed's uncle), needed to spread its message of rebellion along trade and pilgrimage routes into eastern regions like Khorasan without attracting the attention of the Umayyad authorities.",
            "To achieve this, the revolutionaries operated through a discreet network of agents who adopted everyday disguises to travel safely. They posed as ordinary merchants and tradesmen, including perfume-sellers, peddlers, saddle-makers, and apothecaries. The sources describe one clandestine mission where a messenger disguised as a perfume-seller traveled to a small country estate in Jordan to whisper rebellion into the ears of a distant descendant of the Prophet's family, fanning the early flames of the revolt.",
            "This covert network was incredibly successful in organizing the rebellion. By 750 AD, the Abbasid forces completely overthrew the Umayyad caliphate. Just over a decade later, in 762 AD, the second Abbasid caliph, Al-Mansur, founded Baghdad to serve as the new, permanent capital for their victorious empire.",
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
        date: "754 – 775",
        content: [
            "Al-Mansur's massive financial, infrastructural, and political legacy provided the essential foundation for Baghdad to transition from a newly built administrative fortress into the intellectual and cultural capital of the world.",
            "Because Mansur was relentlessly frugal — earning him the nickname 'Father of Pennies' — he left behind an astonishing 14 million gold dinars and 600 million silver dirhams upon his death. Combined with Baghdad's strategic location on the Tigris and Euphrates rivers, the city rapidly became an unrivalled global trading emporium that generated massive tax revenues from across the empire.",
            "Mansur spent his reign violently suppressing rebellions, securing his dynasty, and building the city's physical structures. With the empire finally secure and the treasury overflowing, his successors were freed to focus on the arts and sciences. Culture required leisure, leisure required wealth, and wealth flowed from patronage and a booming economy.",
            "Upon inheriting this immense wealth, al-Mahdi — who was as generous as his father had been mean — redirected the empire's focus toward the finer things in life. He heavily patronized poetry, music, and literary salons, and he expanded Baghdad by building the palace-filled district of Rusafa on the east bank of the Tigris.",
            "Mansur's disciplined state-building and Mahdi's cultural investments directly paved the way for the reign of Harun al-Rashid (786-809). This stable foundation allowed Harun to gather a brilliant court of scholars, fund the translation of classical texts, and usher in a period of such extraordinary prosperity and scientific discovery that it was famously dubbed 'the honeymoon'.",
            "In short, Mansur bequeathed an empire that was wealthy and secure enough to fund a cultural revolution, ensuring that Baghdad would endure as the fountainhead of scholars for centuries to come."
        ]
    }
};
