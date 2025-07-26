// Add the function here, before any component definitions
const getHistoricalEraColor = (date) => {
    // Extract year from date string
    const yearMatch = date.match(/-?\d+/);
    if (!yearMatch) return null;
    
    const year = parseInt(yearMatch[0]);
    
    // Early Bronze Age III
    if (year <= -2200 && year >= -2700) return '#fef3c7'; // amber-50

    // Early Bronze Age III
    if (year <= -2000 && year >= -2200) return '#fef3c7'; // amber-75
    
    // Middle Bronze Age
    if (year <= -1600 && year > -2000) return '#fef9c3'; // amber-100
    
    // Late Bronze Age
    if (year <= -1200 && year > -1600) return '#fde68a'; // amber-200
    
    // Early Iron Age I
    if (year <= -1000 && year > -1200) return '#fef2f2'; // red-50
    
    // Early Iron Age II
    if (year <= -800 && year > -1000) return '#fee2e2'; // red-100
    
    // Middle Iron Age
    if (year <= -612 && year > -800) return '#fecaca'; // red-200
    
    // Late Iron Age
    if (year <= -550 && year > -612) return '#fca5a5'; // red-300
    
    // Classical Antiquity
    if (year <= 651 && year > -550) return '#f3e8ff'; // purple-100
    
    // Early Islamic
    if (year <= 750 && year > 651) return '#eff6ff'; // blue-50
    
    // Islamic Golden Age
    if (year <= 1258 && year > 750) return '#dbeafe'; // blue-100
    
    // Middle Islamic
    if (year <= 1500 && year > 1258) return '#bfdbfe'; // blue-200
    
    // Early Modern
    if (year <= 1800 && year > 1500) return '#dcfce7'; // green-100
    
    // Modern
    if (year > 1800) return '#ffedd5'; // orange-100
    
    return null;
};

const getEgyptianEraColor = (date) => {
    // Extract year from date string
    const yearMatch = date.match(/-?\d+/);
    if (!yearMatch) return null;
    
    const year = parseInt(yearMatch[0]);
    
    // Old Kingdom - Dark Yellow
    if (year <= -2191 && year >= -2800) return '#D4B642';
    
    // Inters 1 and 2 and Middle Kingdom - Mid Yellow
    if (year <= -1571 && year >= -2192) return '#E6C85C';
    
    // New Kingdom and 3 inter - Light Yellow
    if (year <= -531 && year >= -1572) return '#F2DD7B';
    
    // Dynasty 27 (Persian) - Light Orange
    if (year <= -411 && year >= -532) return '#FFBE7D';
    
    // Egyptian Return - Light Yellow
    if (year <= -351 && year >= -412) return '#F2DD7B';
    
    // Persians Return - Light Orange
    if (year <= -341 && year >= -352) return '#FFBE7D';
    
    // Macedonian and Ptol Period - Light Blue
    if (year <= -31 && year >= -342) return '#A8C7E5';
    
    // Roman Egypt - Light Red
    if (year <= 609 && year >= -32) return '#EC5800';
    
    // Sasanian conquest - Light Blue
    if (year <= 629 && year >= 610) return '#A8C7E5';
    
    // Umayyad Egypt - Dark Green
    if (year <= 749 && year >= 630) return '#2E5947';
    
    // Progressive shades of green for Islamic periods
    // First Abbasid Period
    if (year <= 859 && year >= 750) return '#427B63';
    
    // Tulunid Dynasty
    if (year <= 899 && year >= 860) return '#458B6F';
    
    // Second Abbasid Period
    if (year <= 929 && year >= 900) return '#54A584';
    
    // Ikhshidid Dynasty
    if (year <= 959 && year >= 930) return '#64BF99';
    
    // Fatimid Egypt
    if (year <= 1169 && year >= 960) return '#75D9AE';
    
    // Ayyubid Sultanate
    if (year <= 1249 && year >= 1170) return '#86F4C3';
    
    // Mamluk Period - Rich Brown
    if (year <= 1509 && year >= 1250) return '#8B6B45';

    // Ottoman Egypt - Deep Crimson
    if (year <= 1789 && year >= 1510) return '#EC5800';

    // French Occupation - Navy Blue
    if (year <= 1799 && year >= 1790) return '#29b6f6';

    // Muhammad Ali Dynasty - Burgundy
    if (year <= 1879 && year >= 1800) return '#E97451';

    // British Egypt - Steel Blue
    if (year <= 1949 && year >= 1880) return '#4B6B8C';
    
    // Modern Egypt - Muted Gold
    if (year >= 1950) return '#C5B358';
    
    return null;
};

const getIranianEraColor = (date) => {
    // Extract year from date string
    const yearMatch = date.match(/-?\d+/);
    if (!yearMatch) return null;
    
    const year = parseInt(yearMatch[0]);
    
    // Ancient Period
    if (year <= -2154 && year >= -2340) return '#E6C588'; // Akkadian Empire
    if (year <= -2050 && year >= -2150) return '#9B7E6B';    // Gutian Dynasty of Sumer

    if (year <= -1910 && year >= -2030) return '#8B1A1A';    // Old Assyrian Period
    if (year <= -1610 && year >= -1900) return '#1B3F8B';    // Old Babylonian Empire
    if (year <= -1380 && year >= -1600) return '#3A5DA7';    // Middle Babylonian/Kassite Period
    if (year <= -930 && year >= -1370) return '#A13939';     // Middle Assyrian Period
    if (year <= -690 && year >= -920) return '#C85F5F';      // Neo-Assyrian Period
    if (year <= -570 && year >= -630) return '#6483D1';      // Neo-Babylonian Empire

    if (year <= -640 && year >= -680) return '#E6B945';   // Median Kingdom
    if (year <= -340 && year >= -560) return '#FFBE7D';   // Achaemenid Empire
    if (year <= -180 && year >= -330) return '#A8C7E5';   // Macedonian and Seleucid Empire
    if (year <= 219 && year >= -170) return '#9B7FA6';    // Parthian Empire
    if (year <= 639 && year >= 220) return '#DAB76B';     // Sasanian Empire

    // Early Islamic Period

    if (year <= 747 && year >= 640) return '#2E5947';     // Rashidun and Umayyad Caliphate
    if (year <= 749 && year >= 748) return '#8AAE92';     // Abu Muslim
    if (year <= 939 && year >= 750) return '#427B63';     // Abbasid Caliphate
    if (year <= 1029 && year >= 940) return '#739B78';    // Buyids
    
    // Medieval Period
    if (year <= 1194 && year >= 1030) return '#E6C588';   // Seljuk Empire
    if (year <= 1259 && year >= 1230) return '#8B4513';   // Mongol Empire
    if (year <= 1335 && year >= 1260) return '#A0522D';   // Ilkhanate
    if (year <= 1455 && year >= 1390) return '#B87333';   // Timurid Empire
    
    // Early Modern Period
    if (year <= 1729 && year >= 1500) return '#C41E3A';   // Safavid Persia
    if (year <= 1779 && year >= 1730) return '#E8B4A0';   // Afsharid Persia
    if (year <= 1919 && year >= 1780) return '#DAA520';   // Qajar Persia
    
    // Modern Period
    if (year <= 1969 && year >= 1920) return '#4B6B8C';   // Imperial State of Iran
    if (year >= 1970) return '#98B4AA';                   // Islamic Republic of Iran
    
    return null;
};