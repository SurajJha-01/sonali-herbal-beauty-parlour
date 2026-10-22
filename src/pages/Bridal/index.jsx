/**
 * Bridal/index.jsx — Sonali Herbal Beauty Parlour Bridal Page.
 *
 * SAFETY RULES IMPLEMENTED:
 * - No invented package prices, fake discounts, or rigid tiers (Basic/Premium).
 * - Focuses on personalized consultation, pre-bridal care guidance timeline, and real imagery.
 * - WhatsApp consultation CTA appears only when a valid number is configured.
 * - Required Hindi booking disclaimer included on all booking prompts.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionHeading from '../../components/ui/SectionHeading';
import BookingDisclaimer from '../../components/ui/BookingDisclaimer';
import Button from '../../components/ui/Button';

// Business configuration & WhatsApp helpers
import {
  SALON_NAME_HI,
  phoneLink,
} from '../../config/business';

import { bridalEnquiryLink } from '../../utils/whatsapp';

// Home page fallback image
import { FALLBACK_IMAGE } from '../Home/homeData';

import './Bridal.css';
import { useLanguage } from '../../hooks/useLanguage';

// Curated bridal gallery imagery using verified local photos
const BRIDAL_GALLERY_IMAGES = [
  {
    id: 'b-gal-1',
    title: 'क्लासिक मरून ब्राइडल लुक',
    titleEn: 'Classic Maroon Bridal Look',
    image: '/images/bridal/bridal-look-01.jpg.jpeg',
    alt: 'पारंपरिक मरून परिधान व आभूषणों में सुसज्जित ब्राइडल लुक',
  },
  {
    id: 'b-gal-2',
    title: 'शाही चुनरी व लहंगा साज',
    titleEn: 'Royal Bridal Dupatta & Lehenga',
    image: '/images/bridal/bridal-look-02.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-02.jpg.webp',
    alt: 'शाही चुनरी ड्रेपिंग और भारी कढ़ाई वाले लहंगे में ब्राइडल स्टाइल',
  },
  {
    id: 'b-gal-3',
    title: 'पारंपरिक आभूषण व मांग टीका',
    titleEn: 'Traditional Jewelry & Maang Tikka',
    image: '/images/bridal/bridal-look-03.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-03.jpg.webp',
    alt: 'कुंदन आभूषण, नथ एवं मांग टीका के साथ ब्राइडल सौंदर्य',
  },
  {
    id: 'b-gal-4',
    title: 'गरिमामयी ब्राइडल परिधान',
    titleEn: 'Graceful Bridal Attire',
    image: '/images/bridal/bridal-look-04.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-04.jpg.webp',
    alt: 'गरिमामयी ब्राइडल लहंगा और सुरुचिपूर्ण मेकअप स्टाइल',
  },
  {
    id: 'b-gal-5',
    title: 'सगाई व रिसेप्शन ब्राइडल स्टाइल',
    titleEn: 'Engagement & Reception Style',
    image: '/images/bridal/bridal-look-05.jpg.jpeg',
    alt: 'सगाई एवं रिसेप्शन समारोह के लिए ब्राइडल स्टाइलिंग',
  },
  {
    id: 'b-gal-6',
    title: 'ब्राइडल चुनरी व हेयर फिनिशिंग',
    titleEn: 'Bridal Dupatta Draping & Hair',
    image: '/images/bridal/bridal-look-06.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-06.jpg.webp',
    alt: 'पारंपरिक ब्राइडल हेयर स्टाइल एवं चुनरी ड्रेपिंग फिनिशिंग',
  },
  {
    id: 'b-gal-7',
    title: 'भव्य ब्राइडल साज-शृंगार',
    titleEn: 'Grand Bridal Makeover',
    image: '/images/bridal/bridal-look-07.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-07.jpg.webp',
    alt: 'भव्य आभूषणों और पारंपरिक परिधान में ब्राइडल लुक',
  },
  {
    id: 'b-gal-8',
    title: 'पारंपरिक सिंदूरी ब्राइडल रूप',
    titleEn: 'Traditional Vermilion Bridal Look',
    image: '/images/bridal/bridal-look-08.jpg.jpeg',
    imageWebp: '/images/bridal/bridal-look-08.jpg.webp',
    alt: 'पारंपरिक लाल-सिंदूरी परिधान में सुंदर ब्राइडल रूप',
  },
];

export default function Bridal() {
  const { language, t } = useLanguage();
  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_IMAGE;
    e.currentTarget.alt = language === 'hi' ? 'चित्र उपलब्ध नहीं है' : 'Image unavailable';
  };

  return (
    <PageWrapper
      title={language === 'hi' ? 'ब्राइडल' : 'Bridal'}
      description={language === 'hi'
        ? `${SALON_NAME_HI} — ब्राइडल मेकअप, प्री-ब्राइडल देखभाल, एंगेजमेंट और रिसेप्शन लुक के लिए व्यक्तिगत परामर्श।`
        : `${SALON_NAME_HI} — personalized consultation for bridal makeup, pre-bridal care, engagement, and reception looks.`}
    >
      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section
        className="bridal-hero"
        style={{
          backgroundImage: 'url(/images/bridal/bridal-hero-user.png)',
        }}
      >
        <div className="bridal-hero__overlay" aria-hidden="true" />

        <div className="container">
          <div className="bridal-hero__content">
            <div className="bridal-hero__badge">
              <span aria-hidden="true">👰</span>
              <span>{t('ब्राइडल एवं प्री-ब्राइडल सेवाएँ')}</span>
            </div>

            <h1 className="bridal-hero__title">
              {t('विवाह के सबसे खास दिन के लिए संपूर्ण ब्राइडल निखार')}
            </h1>

            <p className="bridal-hero__subtitle">
              {language === 'hi' ? 'व्यक्तिगत ब्राइडल देखभाल एवं मेकओवर' : 'Personalized Bridal Care & Makeover'}
            </p>

            <p className="bridal-hero__desc">
              {t('विवाह जीवन का सबसे अनमोल क्षण होता है। सौम्य हर्बल देखभाल और अनुभवी हाथों के साथ हम हर दुल्हन को उनके सबसे खास दिन पर एक अद्वितीय, स्वाभाविक और आत्मविश्वास से भरा रूप प्रदान करते हैं।')}
            </p>

            <div className="bridal-hero__actions">
              {bridalEnquiryLink && (
                <Button
                  variant="whatsapp"
                  href={bridalEnquiryLink}
                  external
                  size="lg"
                >
                  {t('ब्राइडल परामर्श (WhatsApp)')}
                </Button>
              )}

              <Link to="/contact" className="btn btn--outline btn--lg">
                {t('ऑनलाइन संपर्क व पूछताछ')}
              </Link>
            </div>

            <BookingDisclaimer light />
          </div>
        </div>
      </section>

      {/* ─── Personalized Approach ────────────────────────────────────────── */}
      <section className="bridal-intro" aria-label={t('ब्राइडल देखभाल दर्शन')}>
        <div className="container">
          <SectionHeading
            title="हमारी ब्राइडल देखभाल का दर्शन"
            subtitle="Our Personalized Bridal Care Philosophy"
          />

          <div className="bridal-intro__grid">
            <div className="bridal-intro-card">
              <div className="bridal-intro-card__icon" aria-hidden="true">🌸</div>
              <h3 className="bridal-intro-card__title">{t('व्यक्तिगत परामर्श')}</h3>
              <span className="bridal-intro-card__subtitle">{t('Customized for You')}</span>
              <p className="bridal-intro-card__desc">
                {t('हर दुल्हन की त्वचा, पोशाक और पसंद अलग होती है। हम विवाह की तारीख और आपकी प्राथमिकताओं के अनुसार पूरी योजना बनाते हैं।')}
              </p>
            </div>

            <div className="bridal-intro-card">
              <div className="bridal-intro-card__icon" aria-hidden="true">🌿</div>
              <h3 className="bridal-intro-card__title">{t('सौम्य हर्बल उत्पाद')}</h3>
              <span className="bridal-intro-card__subtitle">{t('Gentle & Safe')}</span>
              <p className="bridal-intro-card__desc">
                {t('विवाह से पहले त्वचा की कोमलता और स्वास्थ्य सर्वोपरि है। हम केवल सुरक्षित व त्वचा के अनुकूल उत्पादों का उपयोग करते हैं।')}
              </p>
            </div>

            <div className="bridal-intro-card">
              <div className="bridal-intro-card__icon" aria-hidden="true">✨</div>
              <h3 className="bridal-intro-card__title">{t('संपूर्ण सामंजस्य')}</h3>
              <span className="bridal-intro-card__subtitle">{t('Harmonious Look')}</span>
              <p className="bridal-intro-card__desc">
                {t('मेकअप, हेयर स्टाइलिंग, चुनरी और गहनों की ड्रेपिंग में संपूर्ण संतुलन जिससे आप सहज और मनमोहक महसूस करें।')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pre-Bridal Preparation Timeline ──────────────────────────────── */}
      <section className="section bridal-timeline-section" aria-label={t('प्री-ब्राइडल तैयारी समय-सारिणी')}>
        <div className="container">
          <SectionHeading
            title="प्री-ब्राइडल तैयारी मार्गदर्शिका"
            subtitle="Suggested Pre-Bridal Care Timeline"
          />

          <p style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto', color: 'var(--espresso-mid)' }}>
            {t('विवाह के दिन स्वाभाविक और स्थायी निखार पाने के लिए समय रहते की गई देखभाल अत्यंत लाभकारी होती है। आपकी सुविधा के लिए यहाँ एक आदर्श तैयारी रूपरेखा प्रस्तुत है:')}
          </p>

          <div className="bridal-timeline">
            {/* Step 1 */}
            <div className="bridal-timeline-step">
              <div className="bridal-timeline-step__marker" aria-hidden="true">1</div>
              <div className="bridal-timeline-step__content">
                <span className="bridal-timeline-step__period">{t('1–2 माह पूर्व')}</span>
                <h3 className="bridal-timeline-step__title">{t('आरंभिक परामर्श एवं त्वचा-बालों का पोषण')}</h3>
                <p className="bridal-timeline-step__desc">
                  {t('त्वचा और बालों की स्थिति का विश्लेषण, नियमित जलयोजन (हाइड्रेशन) और सौम्य क्लीनअप व पोषण की शुरुआत।')}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bridal-timeline-step">
              <div className="bridal-timeline-step__marker" aria-hidden="true">2</div>
              <div className="bridal-timeline-step__content">
                <span className="bridal-timeline-step__period">{t('3–4 सप्ताह पूर्व')}</span>
                <h3 className="bridal-timeline-step__title">{t('नियमित फेशियल एवं हेयर केयर रूटीन')}</h3>
                <p className="bridal-timeline-step__desc">
                  {t('त्वचा की प्राकृतिक चमक के लिए सौम्य फ्रूट या हर्बल फेशियल और बालों को मुलायम व घना रूप देने के लिए कंडीशनिंग।')}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bridal-timeline-step">
              <div className="bridal-timeline-step__marker" aria-hidden="true">3</div>
              <div className="bridal-timeline-step__content">
                <span className="bridal-timeline-step__period">{t('1 सप्ताह पूर्व')}</span>
                <h3 className="bridal-timeline-step__title">{t('अंतिम ग्रूमिंग व रिलैक्सेशन')}</h3>
                <p className="bridal-timeline-step__desc">
                  {t('थ्रेडिंग, कोमल वैक्सिंग, मेनिक्योर व पेडीक्योर जिससे हाथ और पाँव कोमल, स्वच्छ और आकर्षक दिखें।')}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bridal-timeline-step">
              <div className="bridal-timeline-step__marker" aria-hidden="true">4</div>
              <div className="bridal-timeline-step__content">
                <span className="bridal-timeline-step__period">{t('विवाह का दिन')}</span>
                <h3 className="bridal-timeline-step__title">{t('संपूर्ण ब्राइडल मेकओवर')}</h3>
                <p className="bridal-timeline-step__desc">
                  {t('ब्राइडल मेकअप, आकर्षक हेयर स्टाइलिंग, मांग टीका व चुनरी/साड़ी की सुरक्षित व सुंदर ड्रेपिंग फिनिशिंग।')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Bridal Offerings ────────────────────────────────────────── */}
      <section className="section bridal-services-focus" aria-label={t('ब्राइडल सेवाएँ')}>
        <div className="container">
          <SectionHeading
            title="हमारी ब्राइडल सेवाएँ"
            subtitle="Comprehensive Bridal Services"
          />

          <div className="bridal-services-grid">
            <div className="bridal-service-item">
              <div className="bridal-service-item__header">
                <span className="bridal-service-item__icon" aria-hidden="true">💄</span>
                <h3 className="bridal-service-item__title">{t('ब्राइडल मेकअप')}</h3>
              </div>
              <p className="bridal-service-item__desc">
                {t('आपकी पसंद, पोशाक और समारोह के समय के अनुसार प्राकृतिक, टिकाऊ और मनमोहक मेकअप।')}
              </p>
              <span className="bridal-service-item__tag">{t('परामर्श आधारित')}</span>
            </div>

            <div className="bridal-service-item">
              <div className="bridal-service-item__header">
                <span className="bridal-service-item__icon" aria-hidden="true">💇‍♀️</span>
                <h3 className="bridal-service-item__title">{t('ब्राइडल हेयर स्टाइलिंग')}</h3>
              </div>
              <p className="bridal-service-item__desc">
                {t('पारंपरिक जुड़ा, फूलों की सजावट अथवा आधुनिक हेयर स्टाइल जो आपके पूरे लुक को पूरा करे।')}
              </p>
              <span className="bridal-service-item__tag">{t('व्यक्तिगत स्टाइलिंग')}</span>
            </div>

            <div className="bridal-service-item">
              <div className="bridal-service-item__header">
                <span className="bridal-service-item__icon" aria-hidden="true">✨</span>
                <h3 className="bridal-service-item__title">{t('सगाई व रिसेप्शन लुक')}</h3>
              </div>
              <p className="bridal-service-item__desc">
                {t('विवाह पूर्व व पश्चात के आयोजनों के लिए संतुलित, विशिष्ट और गरिमामयी सौंदर्य साज।')}
              </p>
              <span className="bridal-service-item__tag">{t('विशेष आयोजन')}</span>
            </div>

            <div className="bridal-service-item">
              <div className="bridal-service-item__header">
                <span className="bridal-service-item__icon" aria-hidden="true">🥻</span>
                <h3 className="bridal-service-item__title">{t('चुनरी व साड़ी ड्रेपिंग')}</h3>
              </div>
              <p className="bridal-service-item__desc">
                {t('लहंगे की चुनरी, साड़ी और आभूषणों की सटीक, आरामदायक और सुरक्षित सेटिंग।')}
              </p>
              <span className="bridal-service-item__tag">{t('परफेक्ट फिनिशिंग')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bridal Gallery Showcase ──────────────────────────────────────── */}
      <section className="section bridal-gallery-section" aria-label={t('ब्राइडल गैलरी')}>
        <div className="container">
          <SectionHeading
            title="ब्राइडल गैलरी"
            subtitle="Glimpse of Bridal Elegance"
          />

          <div className="bridal-gallery-grid">
            {BRIDAL_GALLERY_IMAGES.map((item) => (
              <div key={item.id} className="bridal-gallery-card">
                <picture className="optimized-image">
                  {item.imageWebp && <source srcSet={item.imageWebp} type="image/webp" />}
                  <img
                    src={item.image}
                    alt={language === 'hi' ? (item.alt || item.title) : item.titleEn}
                    className="bridal-gallery-card__img"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </picture>
                <div className="bridal-gallery-card__overlay">
                  <h4 className="bridal-gallery-card__title">{language === 'hi' ? item.title : item.titleEn}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Consultation & Booking Box ───────────────────────────────────── */}
      <section className="bridal-cta-section" aria-label={t('ब्राइडल परामर्श एवं बुकिंग')}>
        <div className="container">
          <div className="bridal-cta-box">
            <span className="bridal-cta-box__badge">{t('व्यक्तिगत ब्राइडल योजना')}</span>
            <h2 className="bridal-cta-box__title">
              {t('अपने खास दिन की तैयारी के लिए आज ही परामर्श लें')}
            </h2>
            <p className="bridal-cta-box__desc">
              {t('विवाह की तारीख, सेवा आवश्यकताओं और विशेष प्राथमिकताओं की चर्चा के लिए सीधे संपर्क करें। हम आपके लिए सबसे अनुकूल सेवा योजना तैयार करेंगे।')}
            </p>

            <div className="bridal-cta-box__actions">
              {bridalEnquiryLink && (
                <Button
                  variant="whatsapp"
                  href={bridalEnquiryLink}
                  external
                  size="lg"
                >
                  {t('WhatsApp पर ब्राइडल परामर्श')}
                </Button>
              )}

              {phoneLink && (
                <Button
                  variant="phone"
                  href={phoneLink}
                  size="lg"
                >
                  {t('कॉल करें')}
                </Button>
              )}

              <Link to="/contact" className="btn btn--primary btn--lg">
                {t('ऑनलाइन पूछताछ भेजें')}
              </Link>
            </div>

            <BookingDisclaimer light />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
