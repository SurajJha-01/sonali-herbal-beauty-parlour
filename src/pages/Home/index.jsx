/**
 * Home/index.jsx — Sonali Herbal Beauty Parlour Homepage.
 * Full implementation for Phase 2.
 * All visitor-facing text in Hindi (with common English service names).
 * Dynamic contact integration, pure herbal aesthetic, responsive and accessible.
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionHeading from '../../components/ui/SectionHeading';
import BookingDisclaimer from '../../components/ui/BookingDisclaimer';
import Button from '../../components/ui/Button';
import ContactLocationSection from '../../components/sections/ContactLocationSection';

// Salon config & contact states
import {
  SALON_NAME_HI,
  TAGLINE_HI,
  SHOW_OFFERS,
  SHOW_TESTIMONIALS,
  phoneLink,
} from '../../config/business';

// WhatsApp enquiry helpers
import {
  buildExplicitWhatsAppLink,
  bridalEnquiryLink,
} from '../../utils/whatsapp';

// Home page curated data & fallback image
import {
  HERO_DATA,
  HIGHLIGHTS_DATA,
  FEATURED_SERVICES,
  BRIDAL_DATA,
  GALLERY_PREVIEW,
  FALLBACK_IMAGE,
} from './homeData';

import './Home.css';

const HERO_WHATSAPP_LINK = buildExplicitWhatsAppLink(
  'नमस्ते, मुझे सोनाली हर्बल ब्यूटी पार्लर की सेवाओं और अपॉइंटमेंट के बारे में जानकारी चाहिए।'
);

export default function Home() {
  const { language, t } = useLanguage();
  const isHindi = language === 'hi';

  // Scroll reveal observer
  useEffect(() => {
    const targets = document.querySelectorAll('.home-reveal');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Graceful fallback for remote images
  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_IMAGE;
    e.currentTarget.alt = isHindi ? 'चित्र उपलब्ध नहीं है' : 'Image unavailable';
  };

  return (
    <PageWrapper
      title={isHindi ? 'होम' : 'Home'}
      description={isHindi
        ? `${SALON_NAME_HI} — ${TAGLINE_HI}। हर्बल देखभाल, त्वचा व बालों की सौम्य सेवाएँ और ब्राइडल मेकअप।`
        : `${SALON_NAME_HI} — ${TAGLINE_HI}. Herbal care, gentle skin and hair services, and bridal makeup.`}
      className="home-page"
    >
      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="home-hero" aria-label={isHindi ? 'मुख्य बैनर' : 'Welcome'}>
        <div className="container">
          <div className="home-hero__layout">
            <div className="home-hero__content home-reveal">
              <div className="home-hero__badge">
                <span className="home-hero__badge-icon" aria-hidden="true">✦</span>
                <span>{isHindi ? HERO_DATA.badge : 'HERBAL BEAUTY & PERSONAL CARE'}</span>
              </div>

              <p className="home-hero__brand">{SALON_NAME_HI}</p>
              <h1 className="home-hero__title">
                {isHindi ? 'अपनी सुंदरता को दें प्रकृति का स्पर्श' : 'Let Nature Touch Your Beauty'}
              </h1>
              <p className="home-hero__tagline">{isHindi ? HERO_DATA.tagline : 'The power of nature, your beauty'}</p>
              <p className="home-hero__desc">
                {isHindi
                  ? 'हर्बल और प्राकृतिक सामग्रियों की सौम्य देखभाल से अपने बालों और त्वचा को दें नया निखार। अपने लिए उपयुक्त सेवा चुनने के लिए हमसे संपर्क करें।'
                  : 'Gentle care inspired by herbal and natural ingredients for your hair and skin. Get in touch to find a service that suits you.'}
              </p>

              <div className="home-hero__actions">
                {phoneLink && (
                  <Button variant="outline" href={phoneLink} size="lg" className="home-hero__action">
                    {isHindi ? 'अभी कॉल करें' : 'Call now'}
                  </Button>
                )}
                {HERO_WHATSAPP_LINK && <a
                  className="btn btn--whatsapp btn--lg home-hero__action home-hero__whatsapp"
                  href={HERO_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.81 1.48h.01c6.58 0 11.93-5.35 11.93-11.94a11.86 11.86 0 0 0-3.49-8.42ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.47 4.45-9.92 9.91-9.92a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.06 2.89 1.21 3.08.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                  {isHindi ? 'WhatsApp पर चैट करें' : 'Chat on WhatsApp'}
                </a>}
                <Link to="/contact" className="btn btn--primary btn--lg home-hero__action">
                  {isHindi ? 'अपॉइंटमेंट पूछें' : 'Appointment enquiry'}
                </Link>
                <Link to="/services" className="home-hero__services-link home-hero__action">
                  {isHindi ? 'सेवाएँ देखें' : 'Explore services'} <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="home-hero__highlights" aria-label={isHindi ? 'मुख्य विशेषताएँ' : 'Salon highlights'}>
                {HERO_DATA.highlights.map((item, index) => (
                  <div key={item.text} className="home-hero__highlight-item">
                    <span className="home-hero__highlight-icon" aria-hidden="true">{item.icon}</span>
                    <span>{isHindi ? item.text : ['Herbal care', 'Clean, comfortable space', 'Personal attention'][index]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="home-hero__visual home-reveal" aria-label={isHindi ? 'ब्राइडल मेकअप की झलक' : 'Bridal makeup preview'}>
              <img
                src={BRIDAL_DATA.image}
                alt={isHindi ? 'पारंपरिक ब्राइडल लुक' : 'Traditional bridal look'}
                className="home-hero__image"
                fetchPriority="high"
                onError={handleImageError}
              />
              <div className="home-hero__image-caption">
                <span className="home-hero__caption-icon" aria-hidden="true">✦</span>
                <span>
                  <strong>{isHindi ? 'आपके खास पलों के लिए' : 'For your special moments'}</strong>
                  <small>{isHindi ? 'व्यक्तिगत सौंदर्य परामर्श' : 'Personal beauty consultation'}</small>
                </span>
              </div>
              <span className="home-hero__visual-ornament" aria-hidden="true">✿</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Herbal Highlights / Why Herbal Care ──────────────────────────── */}
      <section className="section home-highlights" aria-label={t('हर्बल विशेषताएँ')}>
        <div className="container">
          <SectionHeading
            title="हर्बल देखभाल ही क्यों?"
            subtitle="Why Choose Natural & Herbal Care"
            className="home-reveal"
          />

          <div className="home-highlights__grid">
            {HIGHLIGHTS_DATA.map((item, idx) => (
              <div
                key={item.title}
                className="home-highlight-card home-reveal"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="home-highlight-card__icon-wrapper" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="home-highlight-card__title">{t(item.title)}</h3>
                <span className="home-highlight-card__subtitle">{t(item.subtitle)}</span>
                <p className="home-highlight-card__desc">{t(item.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Services Grid ───────────────────────────────────────── */}
      <section className="section home-services" aria-label={t('प्रमुख सेवाएँ')}>
        <div className="container">
          <SectionHeading
            title="हमारी प्रमुख सेवाएँ"
            subtitle="Popular & Confirmed Beauty Offerings"
            className="home-reveal"
          />

          <div className="home-services__grid">
            {FEATURED_SERVICES.map((service, idx) => (
              <article
                key={service.id}
                className="home-service-card home-reveal"
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div className="home-service-card__media">
                  <img
                    src={service.image}
                    alt={language === 'hi' ? service.title : service.titleEn}
                    className="home-service-card__img"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <span className="home-service-card__category">{t(service.category)}</span>
                </div>

                <div className="home-service-card__body">
                  <h3 className="home-service-card__title">{language === 'hi' ? service.title : service.titleEn}</h3>
                  <p className="home-service-card__desc">
                    {language === 'en' && service.id === 'hands-feet'
                      ? 'Gentle manicure, pedicure, and nail-care treatments.'
                      : t(service.description)}
                  </p>

                  <Link
                    to={service.link}
                    className="home-service-card__link"
                    aria-label={language === 'hi' ? `${service.title} विवरण देखें` : `View details for ${service.titleEn}`}
                  >
                    <span>{t('विस्तार से जानें')}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="home-services__cta home-reveal">
            <Link to="/services" className="btn btn--primary btn--lg">
              {t('सभी सेवाएँ देखें →')}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Bridal Feature Section ───────────────────────────────────────── */}
      <section className="section home-bridal" aria-label={t('ब्राइडल विशेष')}>
        <div className="container">
          <div className="home-bridal__container">
            <div className="home-bridal__content home-reveal">
              <div className="home-bridal__badge">
                <span aria-hidden="true">👰</span>
                <span>{language === 'hi' ? BRIDAL_DATA.badge : BRIDAL_DATA.badgeEn}</span>
              </div>

              <h2 className="home-bridal__title">{t(BRIDAL_DATA.title)}</h2>
              <span className="home-bridal__subtitle">
                {language === 'hi' ? 'प्री-ब्राइडल देखभाल एवं विवाह मेकओवर' : BRIDAL_DATA.subtitle}
              </span>

              <p className="home-bridal__desc">{t(BRIDAL_DATA.description)}</p>

              <div className="home-bridal__features">
                {BRIDAL_DATA.features.map((feature) => (
                  <div key={feature} className="home-bridal__feature-item">
                    <span className="home-bridal__feature-icon" aria-hidden="true">✓</span>
                    <span>{t(feature)}</span>
                  </div>
                ))}
              </div>

              <div className="home-bridal__actions">
                <Link to="/bridal" className="btn btn--primary btn--md">
                  {t('ब्राइडल सेवाएँ देखें')}
                </Link>

                {bridalEnquiryLink && (
                  <Button
                    variant="whatsapp"
                    href={bridalEnquiryLink}
                    external
                    size="md"
                  >
                    {t('ब्राइडल पूछताछ (WhatsApp)')}
                  </Button>
                )}
              </div>

              <BookingDisclaimer />
            </div>

            <div className="home-bridal__media home-reveal">
              <picture className="optimized-image">
                <source srcSet={BRIDAL_DATA.featureImageWebp} type="image/webp" />
                <img
                  src={BRIDAL_DATA.featureImage}
                  alt={language === 'hi' ? 'पारंपरिक परिधान एवं आभूषणों में सुसज्जित ब्राइडल लुक' : 'Bridal look in traditional attire and jewellery'}
                  className="home-bridal__img"
                  loading="lazy"
                  onError={handleImageError}
                />
              </picture>
              <span className="home-bridal__media-tag">{t('ब्राइडल लुक')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gallery Preview Section ──────────────────────────────────────── */}
      <section className="section home-gallery" aria-label={t('गैलरी की झलक')}>
        <div className="container">
          <SectionHeading
            title="गैलरी की एक झलक"
            subtitle="A Glimpse of Our Artistry"
            className="home-reveal"
          />

          <div className="home-gallery__grid">
            {GALLERY_PREVIEW.map((item, idx) => (
              <div
                key={item.id}
                className={`home-gallery-item home-reveal${item.id === 'gal-1' ? ' home-gallery-item--portrait' : ''}`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              >
                <picture className="optimized-image">
                  {item.imageWebp && <source srcSet={item.imageWebp} type="image/webp" />}
                  <img
                    src={item.image}
                    alt={language === 'hi' ? item.title : item.titleEn}
                    className="home-gallery-item__img"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </picture>
                <div className="home-gallery-item__overlay">
                  <h4 className="home-gallery-item__title">{language === 'hi' ? item.title : item.titleEn}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="home-gallery__cta home-reveal">
            <Link to="/gallery" className="btn btn--outline btn--md">
              {t('पूरी गैलरी देखें →')}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Optional Offers Section (Hidden until real offers exist) ──────── */}
      {SHOW_OFFERS && (
        <section className="section home-offers" aria-label={t('विशेष ऑफर')}>
          <div className="container">
            <SectionHeading title="विशेष ऑफर" subtitle="Special Offers" />
            <p style={{ textAlign: 'center' }}>{t('वर्तमान में कोई ऑफर उपलब्ध नहीं है।')}</p>
          </div>
        </section>
      )}

      {/* ─── Optional Testimonials Section (Hidden until real reviews exist) ─── */}
      {SHOW_TESTIMONIALS && (
        <section className="section home-testimonials" aria-label={t('ग्राहकों के अनुभव')}>
          <div className="container">
            <SectionHeading title="ग्राहकों के अनुभव" subtitle="Client Words" />
          </div>
        </section>
      )}

      {/* ─── Footer Transition Divider ────────────────────────────────────── */}
      <div className="home-footer-transition" aria-hidden="true">
        <div className="home-footer-transition__ornament">
          <span className="home-footer-transition__line" />
          <span className="home-footer-transition__symbol">✦</span>
          <span className="home-footer-transition__line" />
        </div>
      </div>

      <ContactLocationSection />
    </PageWrapper>
  );
}
