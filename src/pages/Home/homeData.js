/**
 * homeData.js — Curated content and imagery for the Home page.
 * All visitor-facing text is in Hindi (with English service terms allowed).
 * Images use reliable high-resolution CDN assets with fallback SVG placeholders.
 */

// Graceful SVG placeholder for fallback when offline or image fails to load
export const FALLBACK_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20600%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23F2EAD8%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2228%22%20fill%3D%22%23A8872E%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%3E%E0%A4%B8%E0%A5%8B%E0%A4%A8%E0%A4%BE%E0%A4%B2%E0%A5%80%20%E0%A4%B9%E0%A4%B0%E0%A5%8D%E0%A4%AC%E0%A4%B2%20%E0%A4%AC%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%9F%E0%A5%80%20%E0%A4%AA%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B2%E0%A4%B0%3C%2Ftext%3E%3C%2Fsvg%3E";

export const HERO_DATA = {
  badge: "शुद्ध हर्बल एवं प्राकृतिक सौंदर्य",
  title: "सोनाली हर्बल ब्यूटी पार्लर",
  tagline: "प्रकृति की शक्ति, आपकी सुंदरता",
  description:
    "हर्बल और प्राकृतिक सामग्रियों की सौम्य देखभाल से अपने बालों और त्वचा को दें एक नया निखार। हमारे शांत और स्वच्छ वातावरण में व्यक्तिगत सौंदर्य सेवा का अनुभव लें।",
  image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1920&q=80",
  highlights: [
    { icon: "🌿", text: "प्राकृतिक व हर्बल उत्पाद" },
    { icon: "✨", text: "स्वच्छ व सुरक्षित वातावरण" },
    { icon: "🌸", text: "व्यक्तिगत सौंदर्य देखभाल" },
  ],
};

export const HIGHLIGHTS_DATA = [
  {
    icon: "🌿",
    title: "शुद्ध व हर्बल उत्पाद",
    subtitle: "Pure Herbal Care",
    description: "हानिकारक रसायनों से दूर, प्राकृतिक व हर्बल तत्वों की कोमल और सुरक्षित देखभाल।",
  },
  {
    icon: "🌸",
    title: "व्यक्तिगत परामर्श",
    subtitle: "Personalized Care",
    description: "आपकी त्वचा और बालों के प्रकार के अनुसार सबसे उपयुक्त सेवा का सुझाव।",
  },
  {
    icon: "✨",
    title: "स्वच्छ व आरामदायक माहौल",
    subtitle: "Hygienic & Relaxing",
    description: "हर ग्राहक के लिए पूरी स्वच्छता, उच्च गुणवत्ता और सुकून भरा वातावरण।",
  },
  {
    icon: "💆‍♀️",
    title: "कोमल व अनुभवी सेवा",
    subtitle: "Gentle Expert Touch",
    description: "संतुष्टि और आराम को प्राथमिकता देते हुए हर सेवा में विशेष सावधानी।",
  },
];

export const FEATURED_SERVICES = [
  {
    id: "hair-care",
    title: "हेयर कट व स्टाइलिंग",
    titleEn: "Hair Cut & Styling",
    category: "बालों की देखभाल",
    description: "महिलाओं की बाल कटाई, ट्रिमिंग, डीप कंडीशनिंग और आकर्षक हेयर स्टाइलिंग।",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    link: "/services",
  },
  {
    id: "facials",
    title: "हर्बल क्लीनअप व फेशियल",
    titleEn: "Herbal Cleanup & Facial",
    category: "त्वचा की देखभाल",
    description: "फ्रूट व हर्बल फेशियल से त्वचा की गहराई से सफाई और प्राकृतिक चमक।",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
    link: "/services",
  },
  {
    id: "threading-waxing",
    title: "थ्रेडिंग व वैक्सिंग",
    titleEn: "Threading & Waxing",
    category: "स्मूथ केयर",
    description: "सटीक आइब्रो शेपिंग और त्वचा के अनुकूल सुरक्षित वैक्सिंग सेवा।",
    image: "https://images.unsplash.com/photo-1512290900672-1f41b31a19f3?auto=format&fit=crop&w=700&q=80",
    link: "/services",
  },
  {
    id: "makeup",
    title: "पार्टी व उत्सव मेकअप",
    titleEn: "Party & Occasion Makeup",
    category: "मेकअप",
    description: "शादी, पार्टी और त्योहारों के खास पलों के लिए टिकाऊ और सुंदर मेकअप।",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
    link: "/services",
  },
  {
    id: "hands-feet",
    title: "हाथ और पैरों की देखभाल",
    titleEn: "Hands & Feet Care",
    category: "नेल व स्पा",
    description: "मेनिक्योर, पेडिक्योर और नाखूनों की सुंदरता के लिए विशेष सौम्य उपचार।",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
    link: "/services",
  },
  {
    id: "henna-hair",
    title: "हर्बल मेहंदी व हेयर केयर",
    titleEn: "Herbal Henna & Hair Nourishment",
    category: "हर्बल केयर",
    description: "बालों को प्राकृतिक पोषण और रंग देने के लिए शुद्ध हर्बल मेहंदी।",
    image: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=700&q=80",
    link: "/services",
  },
];

export const BRIDAL_DATA = {
  badge: "ब्राइडल स्पेशल",
  badgeEn: "Bridal Special",
  title: "आपके खास दिन के लिए संपूर्ण ब्राइडल तैयारी",
  subtitle: "Pre-Bridal Care & Wedding Makeover",
  description:
    "विवाह जीवन का सबसे अनमोल दिन होता है। हमारी ब्राइडल सेवाओं में प्री-ब्राइडल स्किन व हेयर केयर से लेकर मनमोहक ब्राइडल मेकअप तक सब कुछ शामिल है, ताकि आप अपने खास दिन पर सबसे खूबसूरत नजर आएं।",
  features: [
    "प्री-ब्राइडल स्किन व हेयर केयर (विवाह से पहले विशेष तैयारी)",
    "पारंपरिक व आधुनिक ब्राइडल मेकअप एवं हेयर स्टाइलिंग",
    "हर दुल्हन की पसंद और त्वचा के अनुसार व्यक्तिगत परामर्श",
  ],
  image: "/images/bridal/bridal-look-01.jpg.jpeg",
  featureImage: "/images/bridal/bridal-feature.png",
  featureImageWebp: "/images/bridal/bridal-feature.webp",
};

export const GALLERY_PREVIEW = [
  {
    id: "gal-1",
    title: "ब्राइडल निखार",
    titleEn: "Bridal Look",
    image: "/images/gallery/bridal-look-portrait.png",
    imageWebp: "/images/gallery/bridal-look-portrait.webp",
  },
  {
    id: "gal-2",
    title: "हर्बल फेशियल चमक",
    titleEn: "Herbal Facial Glow",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "gal-3",
    title: "हेयर स्टाइलिंग",
    titleEn: "Hair Styling",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "gal-4",
    title: "पारंपरिक मेहंदी",
    titleEn: "Traditional Henna",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "gal-5",
    title: "नेल केयर व पॉलिश",
    titleEn: "Nail Care",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "gal-6",
    title: "उत्सव मेकअप",
    titleEn: "Occasion Makeover",
    image: "/images/gallery/occasion-makeup-kit.png",
  },
];
