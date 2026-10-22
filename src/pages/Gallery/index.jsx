/**
 * Gallery/index.jsx — Sonali Herbal Beauty Parlour Photo Gallery.
 *
 * FEATURES:
 * - Features verified local bridal photography from public/images/bridal/
 * - Responsive category filters: All, Bridal Looks, Hair, Skin, Mehendi & Nails
 * - Full modal lightbox preview with keyboard navigation (Esc, Left, Right)
 * - Meaningful Hindi alt text and graceful fallback handling
 * - No unverified claims about customer identity or salon ownership
 */

import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
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

import { generalEnquiryLink } from '../../utils/whatsapp';

// Fallback image helper
import { FALLBACK_IMAGE } from '../Home/homeData';

// Gallery dataset
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
} from './galleryData';

import './Gallery.css';
import { useLanguage } from '../../hooks/useLanguage';

export default function Gallery() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalIndex, setModalIndex] = useState(null);
  const openerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  // Filter gallery items by category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Compute item counts for category pills
  const categoryCounts = useMemo(() => {
    const counts = { all: GALLERY_ITEMS.length };
    GALLERY_CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = GALLERY_ITEMS.filter((i) => i.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  const categoryTabs = GALLERY_CATEGORIES.map((cat) => {
    const isActive = activeCategory === cat.id;
    const count = categoryCounts[cat.id] || 0;
    return (
      <button
        key={cat.id}
        type="button"
        role="tab"
        aria-selected={isActive}
        id={`tab-${cat.id}`}
        aria-controls="gallery-results"
        tabIndex={isActive ? 0 : -1}
        className={`gallery-filter__btn ${isActive ? 'gallery-filter__btn--active' : ''}`}
        onClick={() => {
          setActiveCategory(cat.id);
          setModalIndex(null);
        }}
      >
        <span>{language === 'hi' ? cat.nameHi : cat.nameEn}</span>
        <span className="gallery-filter__count" aria-label={`${count} ${language === 'hi' ? 'तस्वीरें' : 'images'}`}>
          {count}
        </span>
      </button>
    );
  });

  // Modal navigation helpers
  const closeModal = useCallback(() => setModalIndex(null), []);
  const isModalOpen = modalIndex !== null;

  const showNext = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((prev) => (prev + 1) % filteredItems.length);
  }, [modalIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [modalIndex, filteredItems.length]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (modalIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Tab') {
        const buttons = modalRef.current?.querySelectorAll('button:not([disabled])');
        if (!buttons?.length) return;
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === firstButton) {
          e.preventDefault();
          lastButton.focus();
        } else if (!e.shiftKey && document.activeElement === lastButton) {
          e.preventDefault();
          firstButton.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalIndex, closeModal, showNext, showPrev]);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (openerRef.current?.isConnected) openerRef.current.focus();
    };
  }, [isModalOpen]);

  // Graceful fallback for broken image sources
  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_IMAGE;
    e.currentTarget.alt = language === 'hi' ? 'चित्र उपलब्ध नहीं है' : 'Image unavailable';
  };

  const activeItem = modalIndex !== null ? filteredItems[modalIndex] : null;

  return (
    <PageWrapper
      title={language === 'hi' ? 'गैलरी' : 'Gallery'}
      description={language === 'hi'
        ? `${SALON_NAME_HI} की सौंदर्य गैलरी — ब्राइडल लुक्स, हेयर स्टाइलिंग, त्वचा निखार और मेहंदी कला की झलकियाँ।`
        : `Explore bridal looks, hairstyling, skin care, and henna inspiration from ${SALON_NAME_HI}.`}
    >
      {/* ─── Header ───────────────────────────────────────────────────────── */}
      <header className="gallery-header">
        <div className="container">
          <div className="gallery-header__content">
            <div className="gallery-header__badge">
              <span aria-hidden="true">🖼️</span>
              <span>{t('सौंदर्य एवं ब्राइडल झलकियाँ')}</span>
            </div>
            <h1 className="gallery-header__title">{t('हमारी फोटो गैलरी')}</h1>
            <p className="gallery-header__subtitle">{language === 'hi' ? 'सौंदर्य एवं कलात्मकता की झलक' : 'A Visual Glimpse of Beauty & Artistry'}</p>
            <p className="gallery-header__desc">
              {t('ब्राइडल परिधान, हेयर स्टाइलिंग, त्वचा निखार और पारंपरिक साज-शृंगार की प्रेरणादायक झलकियाँ।')}
            </p>
          </div>
        </div>
      </header>

      {/* ─── Category Filter Navigation ──────────────────────────────────── */}
      <nav className="gallery-filter" aria-label={t('गैलरी श्रेणियाँ')}>
        <div className="container">
          <AutoScrollTabs className="gallery-filter__list">
            {categoryTabs}
          </AutoScrollTabs>
        </div>
      </nav>

      {/* ─── Main Gallery Section ────────────────────────────────────────── */}
      <section className="section gallery-section">
        <div className="container">
          <p className="gallery-note">
            {t('* यहाँ प्रदर्शित चित्र शैलियों व संदर्भ हेतु हैं। हर सेवा आपकी व्यक्तिगत पसंद और परामर्श के अनुसार प्रदान की जाती है।')}
          </p>

          <div
            className="gallery-grid"
            id="gallery-results"
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
            tabIndex="0"
          >
            {filteredItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className="gallery-card"
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setModalIndex(idx);
                }}
                aria-label={language === 'hi'
                  ? `${item.title} — बड़ी तस्वीर देखने के लिए क्लिक करें`
                  : `${item.titleEn} — click to view a larger image`}
              >
                <picture className="optimized-image">
                  {item.imageWebp && <source srcSet={item.imageWebp} type="image/webp" />}
                  <img
                    src={item.image}
                    alt={language === 'hi' ? (item.alt || item.title) : item.titleEn}
                    className="gallery-card__img"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </picture>

                <span className="gallery-card__zoom-hint" aria-hidden="true">
                  🔍
                </span>

                <div className="gallery-card__overlay">
                  <h2 className="gallery-card__title">{language === 'hi' ? item.title : item.titleEn}</h2>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Modal / Lightbox Overlay ────────────────────────────────────── */}
      {activeItem && (
        <div
          ref={modalRef}
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={language === 'hi' ? activeItem.title : activeItem.titleEn}
          onClick={closeModal}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="gallery-modal__close"
            onClick={closeModal}
            aria-label={t('गैलरी बंद करें')}
          >
            ✕
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-modal__nav gallery-modal__nav--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label={t('पिछली तस्वीर')}
              >
                ‹
              </button>
              <button
                type="button"
                className="gallery-modal__nav gallery-modal__nav--next"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label={t('अगली तस्वीर')}
              >
                ›
              </button>
            </>
          )}

          <div
            className="gallery-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <picture className="optimized-image">
              {activeItem.imageWebp && <source srcSet={activeItem.imageWebp} type="image/webp" />}
              <img
                src={activeItem.image}
                alt={language === 'hi' ? (activeItem.alt || activeItem.title) : activeItem.titleEn}
                className="gallery-modal__img"
                onError={handleImageError}
              />
            </picture>
            <div className="gallery-modal__info">
              <h2 className="gallery-modal__title">{language === 'hi' ? activeItem.title : activeItem.titleEn}</h2>
            </div>
          </div>
        </div>
      )}

      {/* ─── Bottom CTA Box ──────────────────────────────────────────────── */}
      <section className="gallery-bottom-cta">
        <div className="container">
          <div className="gallery-bottom-cta__inner">
            <h2 className="gallery-bottom-cta__title">
              {t('क्या आप अपने खास दिन के लिए लुक प्लान कर रहे हैं?')}
            </h2>
            <p className="gallery-bottom-cta__desc">
              {t('ब्राइडल, पार्टी या हेयर स्टाइलिंग परामर्श के लिए हमसे संपर्क करें। हम आपकी पसंद के अनुसार अनुकूलित सेवाएँ प्रदान करते हैं।')}
            </p>

            <div className="gallery-bottom-cta__actions">
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
                {t('ऑनलाइन पूछताछ / संपर्क')}
              </Link>
            </div>

            <BookingDisclaimer />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
