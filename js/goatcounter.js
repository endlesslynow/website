(function () {
    'use strict';

    const endpoint = 'https://zachariahhopkins.goatcounter.com/count';
    const domain = 'zachariahhopkins.com';
    const hostname = window.location.hostname.toLowerCase().replace(/^www\./, '');

    // Count published pages, leaving local files and preview servers out.
    if (!/^https?:$/.test(window.location.protocol) || hostname !== domain) return;
    if (document.querySelector('script[data-goatcounter]')) return;

    const script = document.createElement('script');
    script.setAttribute('data-goatcounter', endpoint);
    script.async = true;
    script.src = 'https://gc.zgo.at/count.js';
    document.head.appendChild(script);
}());
