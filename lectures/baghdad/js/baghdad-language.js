(function() {
    var RTL_LANG = 'ar';
    var LTR_LANG = 'en';
    var currentLanguage = LTR_LANG;
    var initialized = false;
    var pendingLanguage = null;
    var staticTextNodes = [];
    var staticAltNodes = [];
    var englishTitle = document.title;

    function clone(value) {
        if (value == null) return value;
        return JSON.parse(JSON.stringify(value));
    }

    function normalizeText(value) {
        return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
    }

    function arabicData() {
        return window.BAGHDAD_I18N_AR || {};
    }

    function isArabic() {
        return currentLanguage === RTL_LANG;
    }

    function warnMissing(kind, key) {
        if (window.console && console.warn) {
            console.warn('[BaghdadLanguage] Missing Arabic ' + kind + ':', key);
        }
    }

    function walkTextNodes(root, callback) {
        var walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    var parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    if (/^(SCRIPT|STYLE|SVG|CANVAS)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
                    return normalizeText(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
            }
        );
        var node;
        while ((node = walker.nextNode())) callback(node);
    }

    function snapshotStaticDom() {
        staticTextNodes = [];
        staticAltNodes = [];

        walkTextNodes(document.documentElement, function(node) {
            staticTextNodes.push({
                node: node,
                original: node.nodeValue,
                key: normalizeText(node.nodeValue)
            });
        });

        Array.prototype.forEach.call(document.querySelectorAll('img[alt]'), function(img) {
            staticAltNodes.push({
                node: img,
                original: img.getAttribute('alt') || '',
                key: normalizeText(img.getAttribute('alt') || '')
            });
        });
    }

    function applyStaticText() {
        var data = arabicData();
        var textMap = data.staticTextByOriginal || {};
        var altMap = data.imageAltByOriginal || {};

        document.title = isArabic()
            ? (textMap[englishTitle] || englishTitle)
            : englishTitle;

        staticTextNodes.forEach(function(item) {
            if (!item.node.parentNode) return;
            if (isArabic()) {
                item.node.nodeValue = textMap[item.key] || item.original;
            } else {
                item.node.nodeValue = item.original;
            }
        });

        staticAltNodes.forEach(function(item) {
            if (!item.node.parentNode) return;
            if (isArabic()) {
                item.node.setAttribute('alt', altMap[item.key] || item.original);
            } else {
                item.node.setAttribute('alt', item.original);
            }
        });
    }

    function updateDetailCardTitles() {
        Array.prototype.forEach.call(document.querySelectorAll('.detail-card[data-detail-id]'), function(card) {
            var id = card.getAttribute('data-detail-id');
            var titleNode = card.querySelector('.detail-card-title');
            var englishCard = window.DETAIL_CARDS && window.DETAIL_CARDS[id];
            var activeCard = getDetailCard(id, englishCard);
            if (titleNode && activeCard && activeCard.title) titleNode.textContent = activeCard.title;
            var img = card.querySelector('img[alt]');
            if (img) {
                var originalAlt = img.getAttribute('data-english-alt');
                if (originalAlt == null) {
                    originalAlt = img.getAttribute('alt') || '';
                    img.setAttribute('data-english-alt', originalAlt);
                }
                var translatedAlt = (arabicData().imageAltByOriginal || {})[normalizeText(originalAlt)];
                img.setAttribute('alt', isArabic() && translatedAlt ? translatedAlt : originalAlt);
            }
        });
    }

    function updateOpenDetailModal() {
        var overlay = document.getElementById('detail-modal-overlay');
        if (!overlay || !overlay.classList.contains('open')) return;
        var id = overlay.getAttribute('data-detail-id');
        if (!id) return;
        var data = getDetailCard(id, window.DETAIL_CARDS && window.DETAIL_CARDS[id]);
        if (!data) return;
        var title = document.getElementById('detail-modal-title');
        var date = document.getElementById('detail-modal-date');
        var content = document.getElementById('detail-modal-content');
        if (title) title.textContent = data.title || '';
        if (date) date.textContent = data.date || '';
        if (content) {
            content.innerHTML = '';
            (data.content || []).forEach(function(paragraph) {
                var p = document.createElement('p');
                p.textContent = paragraph;
                content.appendChild(p);
            });
        }
    }

    function rerenderDynamicContent() {
        if (window.renderBaghdadTimelineEvents) window.renderBaghdadTimelineEvents();
        updateDetailCardTitles();
        updateOpenDetailModal();
        requestAnimationFrame(function() {
            if (window.buildBaghdadTimelineSidebars) window.buildBaghdadTimelineSidebars();
        });
    }

    function setDocumentDirection(lang) {
        var html = document.documentElement;
        html.setAttribute('lang', lang === RTL_LANG ? RTL_LANG : LTR_LANG);
        html.setAttribute('dir', lang === RTL_LANG ? 'rtl' : 'ltr');
        if (document.body) document.body.setAttribute('data-language', lang);
    }

    function setLanguage(lang) {
        lang = lang === RTL_LANG ? RTL_LANG : LTR_LANG;
        currentLanguage = lang;
        if (!initialized) {
            pendingLanguage = lang;
            setDocumentDirection(lang);
            return;
        }
        setDocumentDirection(lang);
        rerenderDynamicContent();
        applyStaticText();
        document.dispatchEvent(new CustomEvent('baghdad:language-changed', {
            detail: { lang: lang }
        }));
    }

    function getTimelinePhases(variableName, englishFallback) {
        var timeline = arabicData().timeline || {};
        if (isArabic() && timeline[variableName]) return timeline[variableName];
        if (isArabic()) warnMissing('timeline data', variableName);
        return englishFallback || [];
    }

    function getDetailCard(id, englishFallback) {
        var cards = arabicData().detailCards || {};
        if (isArabic() && cards[id]) return cards[id];
        if (isArabic()) warnMissing('detail card', id);
        return englishFallback;
    }

    function mergeSidebarItems(englishItems, translatedItems, fields) {
        return (englishItems || []).map(function(item, index) {
            var merged = clone(item);
            if (!merged) return merged;
            if (fields.indexOf('name') !== -1) merged.englishName = item.name;
            if (isArabic() && translatedItems && translatedItems[index]) {
                fields.forEach(function(field) {
                    if (translatedItems[index][field]) merged[field] = translatedItems[index][field];
                });
            }
            return merged;
        });
    }

    function getSidebarData(englishSidebar) {
        englishSidebar = englishSidebar || {};
        var sidebar = arabicData().sidebar || {};
        var headings = englishSidebar.headings || { entity: 'Powers', ruler: 'Rulers' };
        return {
            headings: isArabic() && sidebar.headings ? {
                entity: sidebar.headings.entity || headings.entity,
                ruler: sidebar.headings.ruler || headings.ruler
            } : headings,
            eras: mergeSidebarItems(englishSidebar.eras || [], sidebar.eras, ['label', 'years']),
            rulers: mergeSidebarItems(englishSidebar.rulers || [], sidebar.rulers, ['name', 'years'])
        };
    }

    function init() {
        snapshotStaticDom();
        initialized = true;
        setLanguage(pendingLanguage || currentLanguage);
    }

    window.BaghdadLanguage = {
        setLanguage: setLanguage,
        getLanguage: function() { return currentLanguage; },
        getTimelinePhases: getTimelinePhases,
        getDetailCard: getDetailCard,
        getSidebarData: getSidebarData
    };

    document.addEventListener('lang:dismissed', function(event) {
        setLanguage(event.detail && event.detail.lang);
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
