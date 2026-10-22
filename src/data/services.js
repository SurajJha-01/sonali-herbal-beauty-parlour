/**
 * services.js — Single source of truth for the salon service catalogue.
 *
 * NOTE ON CONFIRMATION:
 * Only services with `confirmed: true` are displayed on the public website.
 * Services with `confirmed: false` are hidden completely.
 *
 * DO NOT invent prices, discounts, awards, or medical claims.
 */

export const SERVICE_CATEGORIES = [
  { id: 'all', nameHi: 'सभी सेवाएँ', nameEn: 'All Services' },
  { id: 'hair', nameHi: 'बालों की देखभाल', nameEn: 'Hair Care' },
  { id: 'skin', nameHi: 'त्वचा व फेशियल', nameEn: 'Skin & Facial' },
  { id: 'threading-waxing', nameHi: 'थ्रेडिंग व वैक्सिंग', nameEn: 'Threading & Waxing' },
  { id: 'makeup', nameHi: 'मेकअप', nameEn: 'Makeup' },
  { id: 'nails', nameHi: 'नेल केयर', nameEn: 'Nail Care' },
];

export const SERVICES = [
  // ─── 1. Hair Services (बालों की देखभाल) ───────────────────────────────────
  {
    id: 'h-01',
    category: 'hair',
    name: 'Hair Cut — Ladies',
    nameHi: 'बाल कटाई (महिला)',
    description: 'चेहरे के आकार और पसंद के अनुसार महिलाओं की व्यवस्थित बाल कटाई।',
    confirmed: true,
  },
  {
    id: 'h-02',
    category: 'hair',
    name: 'Hair Trimming',
    nameHi: 'बाल ट्रिमिंग',
    description: 'दोमुंहे और बेजान बालों को हटाकर बालों को स्वस्थ रूप देना।',
    confirmed: true,
  },
  {
    id: 'h-03',
    category: 'hair',
    name: 'Fringe / Bangs Cut',
    nameHi: 'फ्रिंज कटाई',
    description: 'माथे पर स्टाइल के अनुसार फ्रिंज या बैंग्स कटाई।',
    confirmed: false, // ⚠ Needs owner confirmation
  },
  {
    id: 'h-04',
    category: 'hair',
    name: 'Blow Dry & Styling',
    nameHi: 'ब्लो ड्राय और स्टाइलिंग',
    description: 'बालों को मनचाहा वॉल्यूम, स्मूथनेस और आकर्षक स्टाइल देने के लिए ब्लो ड्राय।',
    confirmed: true,
  },
  {
    id: 'h-05',
    category: 'hair',
    name: 'Straightening (Temporary)',
    nameHi: 'हेयर स्ट्रेटनिंग (अस्थायी)',
    description: 'पार्टी और खास मौकों के लिए अस्थायी स्ट्रेटनिंग।',
    confirmed: false, // ⚠ Needs owner confirmation
  },
  {
    id: 'h-06',
    category: 'hair',
    name: 'Curling / Crimping',
    nameHi: 'कर्लिंग / क्रिम्पिंग',
    description: 'बालों में सुंदर कर्ल्स या क्रिम्प स्टाइलिंग।',
    confirmed: false, // ⚠ Needs owner confirmation
  },
  {
    id: 'h-07',
    category: 'hair',
    name: 'Hair Wash & Conditioning',
    nameHi: 'हेयर वॉश और कंडीशनिंग',
    description: 'बालों और स्कैल्प की सौम्य सफाई एवं कंडीशनर से कोमलता।',
    confirmed: true,
  },
  {
    id: 'h-08',
    category: 'hair',
    name: 'Hair Spa',
    nameHi: 'हेयर स्पा',
    description: 'बालों को गहराई से पोषण और नमी देने वाला स्पा उपचार।',
    confirmed: false, // ⚠ Needs owner confirmation
  },
  {
    id: 'h-11',
    category: 'hair',
    name: 'Oiling & Nourishment',
    nameHi: 'तेल मालिश और पोषण',
    description: 'पारंपरिक हर्बल तेल से सिर की मालिश जिससे बालों को पोषण और शांति मिले।',
    confirmed: true,
  },
  {
    id: 'h-15',
    category: 'hair',
    name: 'Henna / Mehndi Application',
    nameHi: 'हर्बल मेहंदी अनुप्रयोग',
    description: 'प्राकृतिक मेहंदी से बालों को प्राकृतिक चमक, ठंडक और पोषण।',
    confirmed: true,
  },
  {
    id: 'h-19',
    category: 'hair',
    name: 'Hair Setting / Updo',
    nameHi: 'हेयर सेटिंग व जुड़ा स्टाइलिंग',
    description: 'त्योहारों, शादी और पार्टी के लिए पारंपरिक अथवा आधुनिक हेयर स्टाइल।',
    confirmed: true,
  },

  // ─── 2. Skin Care & Facials (त्वचा व फेशियल) ──────────────────────────────
  {
    id: 's-01',
    category: 'skin',
    name: 'Basic Cleanup',
    nameHi: 'बेसिक क्लीनअप',
    description: 'त्वचा की धूल, अतिरिक्त तेल और मृत कोशिकाओं की सौम्य सफाई।',
    confirmed: true,
  },
  {
    id: 's-02',
    category: 'skin',
    name: 'Advanced Cleanup',
    nameHi: 'एडवांस्ड क्लीनअप',
    description: 'त्वचा की गहरी सफाई और कोमलता के लिए विशेष उपचार।',
    confirmed: false, // ⚠ Needs owner confirmation
  },
  {
    id: 's-03',
    category: 'skin',
    name: 'Classic Facial',
    nameHi: 'क्लासिक फेशियल',
    description: 'त्वचा को नमी, आराम और प्राकृतिक ताजगी देने वाला पारंपरिक फेशियल।',
    confirmed: true,
  },
  {
    id: 's-04',
    category: 'skin',
    name: 'Fruit Facial',
    nameHi: 'हर्बल फ्रूट फेशियल',
    description: 'प्राकृतिक फलों और हर्बल अर्क से त्वचा को पोषण और सौम्य निखार।',
    confirmed: true,
  },
  {
    id: 's-05',
    category: 'skin',
    name: 'Gold Facial',
    nameHi: 'गोल्ड फेशियल',
    description: 'खास मौकों के लिए विशेष फेशियल।',
    confirmed: false, // ⚠ Needs owner confirmation
  },
  {
    id: 's-11',
    category: 'skin',
    name: 'Face Pack / Herbal Mask',
    nameHi: 'हर्बल फेस पैक व मास्क',
    description: 'त्वचा को ठंडक और शांति देने वाला प्राकृतिक हर्बल लेप।',
    confirmed: true,
  },
  {
    id: 's-13',
    category: 'skin',
    name: 'Bleach — Face',
    nameHi: 'फेस ब्लीच',
    description: 'चेहरे के बालों को त्वचा के रंग के अनुकूल करने के लिए सुरक्षित ब्लीच।',
    confirmed: true,
  },
  {
    id: 's-14',
    category: 'skin',
    name: 'Bleach — Full Arms',
    nameHi: 'ब्लीच (पूरी बाँह)',
    description: 'हाथों की त्वचा की एक समान रंगत के लिए सौम्य ब्लीच।',
    confirmed: true,
  },

  // ─── 3. Threading & Waxing (थ्रेडिंग व वैक्सिंग) ──────────────────────────
  {
    id: 't-01',
    category: 'threading-waxing',
    name: 'Eyebrow Threading',
    nameHi: 'आइब्रो थ्रेडिंग',
    description: 'चेहरे के अनुसार भौंहों को सटीक और सुंदर आकार देना।',
    confirmed: true,
  },
  {
    id: 't-02',
    category: 'threading-waxing',
    name: 'Upper Lip Threading',
    nameHi: 'ऊपरी होंठ थ्रेडिंग',
    description: 'ऊपरी होंठ के अनचाहे बालों को धागे से कोमलता से हटाना।',
    confirmed: true,
  },
  {
    id: 't-03',
    category: 'threading-waxing',
    name: 'Chin Threading',
    nameHi: 'ठोड़ी थ्रेडिंग',
    description: 'ठोड़ी के आसपास के बालों की सफाई।',
    confirmed: true,
  },
  {
    id: 't-04',
    category: 'threading-waxing',
    name: 'Full Face Threading',
    nameHi: 'पूरे चेहरे की थ्रेडिंग',
    description: 'माथा, गाल, होंठ और ठोड़ी की पूर्ण थ्रेडिंग।',
    confirmed: true,
  },
  {
    id: 't-05',
    category: 'threading-waxing',
    name: 'Forehead Threading',
    nameHi: 'माथे की थ्रेडिंग',
    description: 'माथे की हेयरलाइन को साफ और सुव्यवस्थित रूप देना।',
    confirmed: true,
  },
  {
    id: 't-06',
    category: 'threading-waxing',
    name: 'Sidelock Threading',
    nameHi: 'साइडलॉक थ्रेडिंग',
    description: 'साइडलॉक्स को संतुलित और सुंदर आकार देना।',
    confirmed: true,
  },
  {
    id: 't-07',
    category: 'threading-waxing',
    name: 'Waxing — Upper Lip',
    nameHi: 'वैक्सिंग (ऊपरी होंठ)',
    description: 'ऊपरी होंठ के लिए कोमल वैक्सिंग प्रक्रिया।',
    confirmed: true,
  },
  {
    id: 't-08',
    category: 'threading-waxing',
    name: 'Waxing — Full Arms',
    nameHi: 'वैक्सिंग (पूरी बाँह)',
    description: 'पूरी बाँहों के अनचाहे बालों को हटाकर त्वचा को मुलायम बनाना।',
    confirmed: true,
  },
  {
    id: 't-09',
    category: 'threading-waxing',
    name: 'Waxing — Half Arms',
    nameHi: 'वैक्सिंग (आधी बाँह)',
    description: 'कोहनी तक की कोमल वैक्सिंग देखभाल।',
    confirmed: true,
  },
  {
    id: 't-10',
    category: 'threading-waxing',
    name: 'Waxing — Full Legs',
    nameHi: 'वैक्सिंग (पूरी टाँगें)',
    description: 'पैरों की त्वचा की सौम्य व स्वच्छ वैक्सिंग।',
    confirmed: true,
  },
  {
    id: 't-11',
    category: 'threading-waxing',
    name: 'Waxing — Half Legs',
    nameHi: 'वैक्सिंग (आधी टाँगें)',
    description: 'घुटने तक के बालों की सुरक्षित वैक्सिंग।',
    confirmed: true,
  },
  {
    id: 't-12',
    category: 'threading-waxing',
    name: 'Waxing — Underarms',
    nameHi: 'वैक्सिंग (अंडरआर्म्स)',
    description: 'अंडरआर्म्स की स्वच्छता और कोमलता के लिए वैक्सिंग।',
    confirmed: true,
  },
  {
    id: 't-13',
    category: 'threading-waxing',
    name: 'Waxing — Full Body',
    nameHi: 'वैक्सिंग (पूरा शरीर)',
    description: 'पूरे शरीर की वैक्सिंग सेवा।',
    confirmed: false, // ⚠ Needs owner confirmation
  },

  // ─── 4. Makeup (मेकअप) ──────────────────────────────────────────────────
  {
    id: 'm-01',
    category: 'makeup',
    name: 'Party Makeup',
    nameHi: 'पार्टी मेकअप',
    description: 'जन्मदिन, वर्षगांठ और पारिवारिक आयोजनों के लिए सुंदर व संतुलित मेकअप।',
    confirmed: true,
  },
  {
    id: 'm-02',
    category: 'makeup',
    name: 'Engagement Makeup',
    nameHi: 'एंगेजमेंट मेकअप',
    description: 'सगाई समारोह के लिए विशेष, टिकाऊ और गरिमामयी लुक।',
    confirmed: true,
  },
  {
    id: 'm-03',
    category: 'makeup',
    name: 'Reception Makeup',
    nameHi: 'रिसेप्शन मेकअप',
    description: 'रिसेप्शन पार्टी के लिए मनमोहक और आकर्षक मेकअप लुक।',
    confirmed: true,
  },
  {
    id: 'm-04',
    category: 'makeup',
    name: 'Traditional / Festival Makeup',
    nameHi: 'पारंपरिक व त्याहारी मेकअप',
    description: 'करवा चौथ, तीज, दीवाली व पूजा-पाठ के लिए पारंपरिक सौंदर्य साज।',
    confirmed: true,
  },
  {
    id: 'm-05',
    category: 'makeup',
    name: 'HD Makeup',
    nameHi: 'HD मेकअप',
    description: 'कैमरा और हाई-डेफिनिशन फोटोग्राफी के लिए विशेष मेकअप।',
    confirmed: false, // ⚠ Needs owner confirmation
  },

  // ─── 5. Nail Care (नेल केयर) ─────────────────────────────────────────────
  {
    id: 'n-01',
    category: 'nails',
    name: 'Basic Manicure',
    nameHi: 'बेसिक मैनीक्योर',
    description: 'हाथों और नाखूनों की गुनगुने पानी में सफाई, फाइलिंग और मॉइस्चराइजिंग।',
    confirmed: true,
  },
  {
    id: 'n-02',
    category: 'nails',
    name: 'Basic Pedicure',
    nameHi: 'बेसिक पेडीक्योर',
    description: 'पैरों की थकान मिटाने, एड़ियों की सफाई और नाखूनों की देखभाल।',
    confirmed: true,
  },
  {
    id: 'n-05',
    category: 'nails',
    name: 'Nail Shaping & Filing',
    nameHi: 'नेल शेपिंग और फाइलिंग',
    description: 'नाखूनों को व्यवस्थित और सुंदर आकार देना।',
    confirmed: true,
  },
  {
    id: 'n-06',
    category: 'nails',
    name: 'Nail Polish Application',
    nameHi: 'नेल पॉलिश',
    description: 'मनपसंद रंग की नेल पॉलिश का व्यवस्थित लेप।',
    confirmed: true,
  },
  {
    id: 'n-10',
    category: 'nails',
    name: 'Nail Polish Removal',
    nameHi: 'नेल पॉलिश रिमूवल',
    description: 'बिना नाखूनों को नुकसान पहुँचाए पुरानी पॉलिश को सुरक्षित हटाना।',
    confirmed: true,
  },
  {
    id: 'n-07',
    category: 'nails',
    name: 'Gel Nail Polish',
    nameHi: 'जेल नेल पॉलिश',
    description: 'लंबे समय तक टिकने वाली जेल पॉलिश।',
    confirmed: false, // ⚠ Needs owner confirmation
  },
];

/**
 * Helper to get only explicitly confirmed services.
 * Unconfirmed services are strictly filtered out.
 */
export const getConfirmedServices = () =>
  SERVICES.filter((service) => service.confirmed === true);
