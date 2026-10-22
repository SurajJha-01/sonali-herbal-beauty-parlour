/**
 * About/index.jsx — Sonali Herbal Beauty Parlour About Us Page.
 *
 * CONTENT GUIDELINES IMPLEMENTED:
 * - Respectful owner presentation: Sudina Suman (सुदीना सुमन)
 * - Confirmed address (Madhubani, Bihar 847211) & opening hours (10:00 AM – 9:00 PM)
 * - Google Maps link to verified live location
 * - Natural Hindi copy without fabricated claims (awards, certifications, founding dates)
 * - Accessible, responsive, and adheres to the design tokens
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionHeading from '../../components/ui/SectionHeading';
import BookingDisclaimer from '../../components/ui/BookingDisclaimer';
import Button from '../../components/ui/Button';

// Verified business configuration
import {
  SALON_NAME_HI,
  TAGLINE_HI,
  OWNER_NAME_HI,
  FULL_ADDRESS,
  FULL_ADDRESS_HI,
  HOURS_HI,
  HOURS,
  MAPS_URL,
  phoneLink,
  whatsappLink,
} from '../../config/business';

import { generalEnquiryLink } from '../../utils/whatsapp';
import { useLanguage } from '../../hooks/useLanguage';

import './About.css';

export default function About() {
  const { language, t } = useLanguage();
  return (
    <PageWrapper
      title={language === 'hi' ? 'हमारे बारे में' : 'About Us'}
      description={language === 'hi'
        ? `${SALON_NAME_HI} — ${TAGLINE_HI}। संचालिका: ${OWNER_NAME_HI}। मधुबनी, बिहार में स्थित महिलाओं के लिए समर्पित हर्बल ब्यूटी पार्लर।`
        : `${SALON_NAME_HI} — ${TAGLINE_HI}. Owner: ${OWNER_NAME_HI}. A herbal beauty parlour for women in Madhubani, Bihar.`}
    >
      {/* ─── Page Header ─────────────────────────────────────────────────── */}
      <header className="about-header">
        <div className="container">
          <div className="about-header__content">
            <div className="about-header__badge">
              <span aria-hidden="true">🌿</span>
              <span>{t('परिचय एवं दर्शन')}</span>
            </div>
            <h1 className="about-header__title">{language === 'hi' ? SALON_NAME_HI : 'Sonali Herbal Beauty Parlour'}</h1>
            <p className="about-header__subtitle">{language === 'hi' ? TAGLINE_HI : 'The power of nature, your beauty'}</p>
            <p className="about-header__desc">
              {t('मधुबनी (बिहार) में स्थित महिलाओं के लिए एक सौम्य एवं स्वच्छ ब्यूटी पार्लर, जहाँ हर्बल देखभाल, पारंपरिक सौंदर्य सेवाएँ और व्यक्तिगत देखरेख को प्राथमिकता दी जाती है।')}
            </p>
          </div>
        </div>
      </header>

      {/* ─── Owner Spotlight ──────────────────────────────────────────────── */}
      <section className="about-owner" aria-label={t('संचालिका परिचय')}>
        <div className="container">
          <div className="about-owner__card">
            <img
              className="about-owner__icon"
              src="/images/about/owner-portrait.png"
              alt={OWNER_NAME_HI}
              width="100"
              height="100"
            />
            <span className="about-owner__badge">{t('पार्लर संचालिका')}</span>
            <h2 className="about-owner__name">{OWNER_NAME_HI}</h2>
            <p className="about-owner__role">{language === 'hi' ? 'पार्लर संचालिका' : 'Owner'}</p>
            <p className="about-owner__text">
              {language === 'hi'
                ? `${OWNER_NAME_HI} जी के सानिध्य में, ${SALON_NAME_HI} हर आगंतुक महिला को एक शांत, सुरक्षित और आत्मीय वातावरण प्रदान करने के लिए प्रतिबद्ध है। हमारा उद्देश्य हर महिला को उनकी स्वाभाविक सुंदरता निखारने में कोमल व व्यक्तिगत सहयोग देना है।`
                : `Under the care of ${OWNER_NAME_HI}, Sonali Herbal Beauty Parlour is committed to providing every visitor with a calm, welcoming, and comfortable setting. Our aim is to offer thoughtful, personalized support to help each woman express her natural beauty.`}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Philosophy & Core Principles ─────────────────────────────────── */}
      <section className="about-values" aria-label={t('हमारी प्राथमिकताएँ')}>
        <div className="container">
          <SectionHeading
            title="हमारी प्राथमिकताएँ"
            subtitle="Our Care Principles"
          />

          <div className="about-values__grid">
            <div className="about-value-card">
              <div className="about-value-card__icon" aria-hidden="true">🌿</div>
              <h3 className="about-value-card__title">{t('सौम्य हर्बल उत्पाद')}</h3>
              <span className="about-value-card__subtitle">{t('Gentle & Herbal')}</span>
              <p className="about-value-card__desc">
                {t('त्वचा और बालों की संवेदनशीलता को ध्यान में रखते हुए सौम्य व त्वचा-अनुकूल उत्पादों का प्रयोग।')}
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-card__icon" aria-hidden="true">🌸</div>
              <h3 className="about-value-card__title">{t('व्यक्तिगत सौंदर्य परामर्श')}</h3>
              <span className="about-value-card__subtitle">{t('Personalized Attention')}</span>
              <p className="about-value-card__desc">
                {t('हर ग्राहक की त्वचा, बालों और प्राथमिकताओं के अनुसार उपयुक्त सेवा और समय का ध्यान।')}
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-card__icon" aria-hidden="true">✨</div>
              <h3 className="about-value-card__title">{t('स्वच्छता व आरामदायक माहौल')}</h3>
              <span className="about-value-card__subtitle">{t('Hygienic & Relaxing')}</span>
              <p className="about-value-card__desc">
                {t('पार्लर में पूर्ण स्वच्छता, शुद्धता और एक शांत वातावरण जिससे आप सुकून का अनुभव कर सकें।')}
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-card__icon" aria-hidden="true">💆‍♀️</div>
              <h3 className="about-value-card__title">{t('समर्पित महिला सौंदर्य सेवा')}</h3>
              <span className="about-value-card__subtitle">{t('Care for Every Occasion')}</span>
              <p className="about-value-card__desc">
                {t('रोजमर्रा के ग्रूमिंग से लेकर शादी, पार्टी व त्योहारों के विशेष अवसरों तक संपूर्ण सहयोग।')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Confirmed Location & Timing Info ──────────────────────────────── */}
      <section className="about-info-section" aria-label={t('स्थान एवं समय विवरण')}>
        <div className="container">
          <SectionHeading
            title="पार्लर का पता व समय"
            subtitle="Location & Hours"
          />

          <div className="about-info__grid">
            <div className="about-info-card">
              <div className="about-info-card__icon" aria-hidden="true">📍</div>
              <h3 className="about-info-card__title">{t('हमारा पता')}</h3>
              <p className="about-info-card__text">{language === 'hi' ? FULL_ADDRESS_HI : FULL_ADDRESS}</p>
              {MAPS_URL && (
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-info-card__link"
                  aria-label={t('Google Maps पर लोकेशन देखें')}
                >
                  <span>{t('Google Maps पर देखें')}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            <div className="about-info-card">
              <div className="about-info-card__icon" aria-hidden="true">⏰</div>
              <h3 className="about-info-card__title">{t('कार्य समय')}</h3>
              <p className="about-info-card__text">
                {language === 'hi' ? HOURS_HI : HOURS}
                <br />
                <small style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>({HOURS})</small>
              </p>
              <span className="about-info-card__link" style={{ color: 'var(--gold-dark)', cursor: 'default' }}>
                {t('खुलने का समय')}
              </span>
            </div>

            <div className="about-info-card">
              <div className="about-info-card__icon" aria-hidden="true">💬</div>
              <h3 className="about-info-card__title">{t('संपर्क व पूछताछ')}</h3>
              <p className="about-info-card__text">
                {t('अपॉइंटमेंट या सेवा संबंधी किसी भी जानकारी के लिए फोन या संपर्क पेज पर उपलब्ध माध्यमों से जुड़ें।')}
              </p>
              <Link to="/contact" className="about-info-card__link">
                <span>{t('संपर्क पेज पर जाएँ')}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="about-cta-section" aria-label={t('परामर्श हेतु संपर्क')}>
        <div className="container">
          <div className="about-cta-box">
            <h2 className="about-cta-box__title">
              {t('अपनी सुंदरता को दें प्रकृति का सौम्य स्पर्श')}
            </h2>
            <p className="about-cta-box__desc">
              {t('किसी भी सेवा के बारे में जानने या परामर्श के लिए सीधे संपर्क करें। हम आपकी सुविधा और पसंद के अनुसार सही सेवा का चयन करने में सहायता करेंगे।')}
            </p>

            <div className="about-cta-box__actions">
              {whatsappLink && (
                <Button
                  variant="whatsapp"
                  href={generalEnquiryLink}
                  external
                  size="lg"
                >
                  {t('WhatsApp पर पूछें')}
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
                {t('ऑनलाइन पूछताछ फॉर्म')}
              </Link>
            </div>

            <BookingDisclaimer light />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
