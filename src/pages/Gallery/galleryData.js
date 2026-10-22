/**
 * galleryData.js — Curated gallery items for Sonali Herbal Beauty Parlour.
 *
 * NOTE:
 * Uses real local bridal images from public/images/bridal/ for bridal looks.
 * Does not make false claims about customer identity or salon ownership.
 */

export const GALLERY_CATEGORIES = [
  { id: 'all', nameHi: 'सभी झलकियाँ', nameEn: 'All Looks' },
  { id: 'bridal', nameHi: 'ब्राइडल लुक्स', nameEn: 'Bridal' },
  { id: 'hair', nameHi: 'हेयर स्टाइलिंग', nameEn: 'Hair Styling' },
  { id: 'skin', nameHi: 'त्वचा व फेशियल', nameEn: 'Skin & Facial' },
  { id: 'mehendi-nails', nameHi: 'मेहंदी व नेल्स', nameEn: 'Mehendi & Nails' },
];

export const GALLERY_ITEMS = [
  // ─── Real Local Bridal Images ──────────────────────────────────────────────
  {
    id: 'g-b-01',
    category: 'bridal',
    title: 'क्लासिक मरून ब्राइडल लुक',
    titleEn: 'Classic Maroon Bridal Look',
    image: '/images/bridal/bridal-look-01.jpg.jpeg',
    alt: 'पारंपरिक मरून परिधान व आभूषणों में सुसज्जित ब्राइडल लुक',
  },
  {
    id: 'g-b-02',
    category: 'bridal',
    title: 'शाही चुनरी व लहंगा साज',
    titleEn: 'Royal Bridal Dupatta & Lehenga',
    image: '/images/bridal/bridal-look-02.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-02.jpg.webp',
    alt: 'शाही चुनरी ड्रेपिंग और भारी कढ़ाई वाले लहंगे में ब्राइडल लुक',
  },
  {
    id: 'g-b-03',
    category: 'bridal',
    title: 'पारंपरिक आभूषण व मांग टीका',
    titleEn: 'Traditional Jewelry & Maang Tikka',
    image: '/images/bridal/bridal-look-03.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-03.jpg.webp',
    alt: 'कुंदन आभूषण, नथ एवं मांग टीका के साथ ब्राइडल सौंदर्य',
  },
  {
    id: 'g-b-04',
    category: 'bridal',
    title: 'गरिमामयी ब्राइडल परिधान',
    titleEn: 'Graceful Bridal Attire',
    image: '/images/bridal/bridal-look-04.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-04.jpg.webp',
    alt: 'गरिमामयी ब्राइडल लहंगा और सुरुचिपूर्ण मेकअप लुक',
  },
  {
    id: 'g-b-05',
    category: 'bridal',
    title: 'सगाई व रिसेप्शन ब्राइडल स्टाइल',
    titleEn: 'Engagement & Reception Style',
    image: '/images/bridal/bridal-look-05.jpg.jpeg',
    alt: 'सगाई एवं रिसेप्शन समारोह के लिए ब्राइडल स्टाइलिंग',
  },
  {
    id: 'g-b-06',
    category: 'bridal',
    title: 'ब्राइडल चुनरी व हेयर फिनिशिंग',
    titleEn: 'Bridal Dupatta Draping & Hair',
    image: '/images/bridal/bridal-look-06.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-06.jpg.webp',
    alt: 'पारंपरिक ब्राइडल हेयर स्टाइल एवं चुनरी ड्रेपिंग फिनिशिंग',
  },
  {
    id: 'g-b-07',
    category: 'bridal',
    title: 'भव्य ब्राइडल साज-शृंगार',
    titleEn: 'Grand Bridal Makeover',
    image: '/images/bridal/bridal-look-07.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-07.jpg.webp',
    alt: 'भव्य आभूषणों और पारंपरिक परिधान में ब्राइडल साज',
  },
  {
    id: 'g-b-08',
    category: 'bridal',
    title: 'पारंपरिक सिंदूरी ब्राइडल रूप',
    titleEn: 'Traditional Vermilion Bridal Look',
    image: '/images/bridal/bridal-look-08.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-08.jpg.webp',
    alt: 'पारंपरिक लाल-सिंदूरी परिधान में सुंदर ब्राइडल रूप',
  },
  {
    id: 'g-b-09',
    category: 'bridal',
    title: 'आधुनिक व क्लासिक ब्राइडल समन्वय',
    titleEn: 'Modern & Classic Bridal Blend',
    image: '/images/bridal/bridal-look-09.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-09.jpg.webp',
    alt: 'आधुनिक व क्लासिक ब्राइडल परिधान व मेकअप',
  },
  {
    id: 'g-b-10',
    category: 'bridal',
    title: 'शाही दुल्हन पोर्ट्रेट',
    titleEn: 'Regal Bridal Portrait',
    image: '/images/bridal/bridal-look-10.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-10.jpg.webp',
    alt: 'शाही दुल्हन पोर्ट्रेट व पारंपारिक वेशभूषा',
  },
  {
    id: 'g-b-11',
    category: 'bridal',
    title: 'विशिष्ट ब्राइडल आभूषण साज',
    titleEn: 'Distinctive Bridal Ornaments',
    image: '/images/bridal/bridal-look-11.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-11.jpg.webp',
    alt: 'विशिष्ट ब्राइडल आभूषण व पारंपरिक चुनरी',
  },
  {
    id: 'g-b-12',
    category: 'bridal',
    title: 'मनमोहक ब्राइडल मेकओवर',
    titleEn: 'Enchanting Bridal Makeover',
    image: '/images/bridal/bridal-look-12.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-12.jpg.webp',
    alt: 'मनमोहक ब्राइडल वेशभूषा व मेकअप शैली',
  },
  {
    id: 'g-b-13',
    category: 'bridal',
    title: 'पारंपरिक ब्राइडल परिधान',
    titleEn: 'Traditional Bridal Elegance',
    image: '/images/bridal/bridal-look-13.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-13.jpg.webp',
    alt: 'पारंपरिक लाल व सुनहरे ब्राइडल परिधान में दुल्हन',
  },
  {
    id: 'g-b-15',
    category: 'bridal',
    title: 'उत्सव व विवाह ब्राइडल शैली',
    titleEn: 'Festive Wedding Bridal Style',
    image: '/images/bridal/bridal-look-15.jpg.jpeg',
    alt: 'विवाह व उत्सव के लिए सुरुचिपूर्ण ब्राइडल शैली',
  },

  // ─── Hair Styling Inspiration ──────────────────────────────────────────────
  {
    id: 'g-h-01',
    category: 'hair',
    title: 'फ्लोरल ब्राइडल बन',
    titleEn: 'Floral Bridal Bun',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=700&q=80',
    alt: 'फूलों से सजा पारंपरिक जूड़ा हेयर स्टाइल',
  },
  {
    id: 'g-h-02',
    category: 'hair',
    title: 'सिल्की स्मूथ ब्लो ड्राय',
    titleEn: 'Silky Smooth Blow Dry',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    alt: 'सिल्की स्मूथ हेयर स्टाइलिंग व ब्लो ड्राय',
  },

  // ─── Skin & Facial Care ───────────────────────────────────────────────────
  {
    id: 'g-s-01',
    category: 'skin',
    title: 'हर्बल फेशियल व त्वचा पोषण',
    titleEn: 'Herbal Skin Nourishment',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80',
    alt: 'हर्बल फेशियल एवं त्वचा की गहराई से सफाई',
  },
  {
    id: 'g-s-02',
    category: 'skin',
    title: 'प्राकृतिक त्वचा निखार',
    titleEn: 'Natural Skin Glow',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80',
    alt: 'कोमल और ताजगी भरी प्राकृतिक त्वचा निखार',
  },

  // ─── Mehendi & Nails ───────────────────────────────────────────────────────
  {
    id: 'g-m-01',
    category: 'mehendi-nails',
    title: 'पारंपरिक मेहंदी कला',
    titleEn: 'Traditional Henna Art',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80',
    alt: 'हाथों पर सुंदर पारंपरिक मेहंदी डिजाइन',
  },
  {
    id: 'g-m-02',
    category: 'mehendi-nails',
    title: 'सुरुचिपूर्ण नेल केयर व पॉलिश',
    titleEn: 'Elegant Nail Art',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80',
    alt: 'सुरुचिपूर्ण नेल पॉलिश एवं मैनीक्योर फिनिशिंग',
  },
];
