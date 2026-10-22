/**
 * Services/index.jsx — Sonali Herbal Beauty Parlour Services Catalogue.
 *
 * SAFETY RULES IMPLEMENTED:
 * - Only services with `confirmed: true` are rendered.
 * - Unconfirmed services are hidden completely.
 * - No invented prices, fake offers, or claims.
 * - Accessible category filtering with confirmed service counts.
 * - Graceful empty state with dynamic contact CTAs.
 */

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import BookingDisclaimer from '../../components/ui/BookingDisclaimer';
import Button from '../../components/ui/Button';
import AutoScrollTabs from '../../components/ui/AutoScrollTabs';

// Business configuration & contact channels
import {
  SALON_NAME_HI,
  phoneLink,
  whatsappLink,
} from '../../config/business';

import { generalEnquiryLink, serviceEnquiryLink } from '../../utils/whatsapp';

// Service catalogue data
import {
  SERVICE_CATEGORIES,
  getConfirmedServices,
} from '../../data/services';

import './Services.css';
import { useLanguage } from '../../hooks/useLanguage';

export default function Services() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter only explicitly confirmed services
  const confirmedServices = useMemo(() => getConfirmedServices(), []);

  // Filter by category
  const displayedServices = useMemo(() => {
    if (activeCategory === 'all') return confirmedServices;
    return confirmedServices.filter((s) => s.category === activeCategory);
  }, [confirmedServices, activeCategory]);

  // Compute counts for each category
  const categoryCounts = useMemo(() => {
    const counts = { all: confirmedServices.length };
    SERVICE_CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = confirmedServices.filter((s) => s.category === cat.id).length;
      }
    });
    return counts;
  }, [confirmedServices]);

  const categoryTabs = SERVICE_CATEGORIES.map((cat) => {
    const isActive = activeCategory === cat.id;
    const count = categoryCounts[cat.id] || 0;
    return (
      <button
        key={cat.id}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls="services-results"
        id={`tab-${cat.id}`}
        tabIndex={isActive ? 0 : -1}
        className={`services-filter__btn ${isActive ? 'services-filter__btn--active' : ''}`}
        onClick={() => setActiveCategory(cat.id)}
      >
        <span>{language === 'hi' ? cat.nameHi : cat.nameEn}</span>
        <span className="services-filter__count" aria-label={`${count} ${language === 'hi' ? 'सेवाएँ' : 'services'}`}>
          {count}
        </span>
      </button>
    );
  });

  return (
    <PageWrapper
      title={language === 'hi' ? 'सेवाएँ' : 'Services'}
      description={language === 'hi'
        ? `${SALON_NAME_HI} की प्रमुख सौंदर्य सेवाएँ — बाल, त्वचा, फेशियल, वैक्सिंग, थ्रेडिंग और मेकअप।`
        : `Beauty services at ${SALON_NAME_HI}: hair, skin, facials, waxing, threading, and makeup.`}
    >
      {/* ─── Page Header ─────────────────────────────────────────────────── */}
      <header className="services-header">
        <div className="container">
          <div className="services-header__content">
            <div className="services-header__badge">
              <span aria-hidden="true">🌿</span>
              <span>{t('प्राकृतिक व हर्बल सेवाएँ')}</span>
            </div>
            <h1 className="services-header__title">{t('हमारी सेवाएँ')}</h1>
            <p className="services-header__subtitle">
              {language === 'hi' ? 'सौंदर्य एवं वेलनेस सेवाएँ' : 'Beauty & Wellness Services'}
            </p>
            <p className="services-header__desc">
              {language === 'hi'
                ? 'आपकी सुंदरता और ताजगी के लिए समर्पित सौम्य हर्बल सेवाएँ। सभी सेवाएँ अनुभवी हाथों और व्यक्तिगत देखरेख के साथ प्रदान की जाती हैं।'
                : 'Gentle herbal services dedicated to your beauty and well-being. Each service is provided with attentive, personalized care.'}
            </p>
          </div>
        </div>
      </header>

      {/* ─── Category Filter Navigation ──────────────────────────────────── */}
      <nav className="services-filter" aria-label={t('सेवा श्रेणियाँ')}>
        <div className="container">
          <AutoScrollTabs className="services-filter__list">
            {categoryTabs}
          </AutoScrollTabs>
        </div>
      </nav>

      {/* ─── Services Catalogue Section ──────────────────────────────────── */}
      <section className="section services-section">
        <div className="container">
          <div className="services-count-bar">
            <span className="services-count-bar__text">
              {language === 'hi'
                ? `कुल ${displayedServices.length} सेवाएँ उपलब्ध`
                : `${displayedServices.length} services available`}
            </span>
            <span className="services-count-bar__hint">
              {language === 'hi' ? '* अपॉइंटमेंट व परामर्श हेतु संपर्क करें' : '* Contact us for appointments and consultations'}
            </span>
          </div>

          {displayedServices.length > 0 ? (
            <div
              className="services-grid"
              id="services-results"
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory}`}
            >
              {displayedServices.map((service) => {
                const categoryObj = SERVICE_CATEGORIES.find((c) => c.id === service.category);
                const categoryLabel = categoryObj
                  ? (language === 'hi' ? categoryObj.nameHi : categoryObj.nameEn)
                  : (language === 'hi' ? 'सेवा' : 'Service');

                return (
                  <article key={service.id} className="service-card">
                    <div className="service-card__top">
                      <span className="service-card__badge">{categoryLabel}</span>
                      <span className="service-card__leaf" aria-hidden="true">🌿</span>
                    </div>

                    {service.id === 'h-19' && (
                      <figure className="service-card__reference">
                        <picture className="optimized-image">
                          <source srcSet="/images/services/bridal-hair-updo-demo.webp" type="image/webp" />
                          <img
                            className="service-card__reference-image"
                            src="/images/services/bridal-hair-updo-demo.jpg"
                            alt={language === 'hi'
                              ? 'फूलों की सजावट वाला ब्राइडल जुड़ा और कर्ल्स'
                              : 'Bridal updo with floral accessories and curls'}
                            loading="lazy"
                          />
                        </picture>
                        <figcaption>
                          {language === 'hi' ? 'हेयर स्टाइल का उदाहरण' : 'Hairstyle reference'}
                        </figcaption>
                      </figure>
                    )}

                    <h2 className="service-card__title">{language === 'hi' ? service.nameHi : service.name}</h2>

                    <p className="service-card__desc">{t(service.description)}</p>

                    <div className="service-card__bottom">
                      <span className="service-card__enquiry-note">{t('व्यक्तिगत परामर्श')}</span>

                      {whatsappLink ? (
                        <a
                          href={serviceEnquiryLink(service.nameHi)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="service-card__action"
                          aria-label={language === 'hi' ? `${service.nameHi} के लिए WhatsApp पर पूछें` : `Enquire on WhatsApp about ${service.name}`}
                        >
                          <span>{t('WhatsApp पूछताछ')}</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      ) : (
                        <Link
                          to="/contact"
                          className="service-card__action"
                          aria-label={language === 'hi' ? `${service.nameHi} के लिए संपर्क करें` : `Contact us about ${service.name}`}
                        >
                          <span>{t('पूछताछ करें')}</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* ─── Helpful Empty State ───────────────────────────────────── */
            <div className="services-empty" role="status">
              <div className="services-empty__icon" aria-hidden="true">🌸</div>
              <h2 className="services-empty__title">{t('इस श्रेणी में वर्तमान में कोई सेवा सूचीबद्ध नहीं है')}</h2>
              <p className="services-empty__desc">
                {t('हम अपनी सेवाओं को निरंतर अपडेट कर रहे हैं। किसी भी विशेष सेवा या व्यक्तिगत परामर्श के लिए कृपया सीधे हमसे संपर्क करें।')}
              </p>

              <div className="services-empty__actions">
                {whatsappLink && (
                  <Button
                    variant="whatsapp"
                    href={generalEnquiryLink}
                    external
                    size="md"
                  >
                    {t('WhatsApp पर पूछें')}
                  </Button>
                )}

                {phoneLink && (
                  <Button
                    variant="phone"
                    href={phoneLink}
                    size="md"
                  >
                    {t('कॉल करें')}
                  </Button>
                )}

                <Link to="/contact" className="btn btn--primary btn--md">
                  {t('संपर्क पेज पर जाएँ')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── Consultation & Booking Information ──────────────────────────── */}
      <section className="services-consultation">
        <div className="container">
          <div className="services-consultation__inner">
            <h2 className="services-consultation__title">
              {t('अपनी पसंद के अनुसार अनुकूलित सेवाएँ')}
            </h2>
            <p className="services-consultation__text">
              {t('हर त्वचा और बालों की आवश्यकता अलग होती है। हमारी टीम आपकी सुविधा और पसंद के अनुसार सही सेवा का चयन करने में आपकी सहायता करेगी।')}
            </p>

            <div className="services-consultation__actions">
              {whatsappLink && (
                <Button
                  variant="whatsapp"
                  href={generalEnquiryLink}
                  external
                  size="md"
                >
                  {t('परामर्श के लिए WhatsApp करें')}
                </Button>
              )}

              <Link to="/contact" className="btn btn--outline btn--md">
                {t('संपर्क एवं समय विवरण')}
              </Link>
            </div>

            <BookingDisclaimer />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
