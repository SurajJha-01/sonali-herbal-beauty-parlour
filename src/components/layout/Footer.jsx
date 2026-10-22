/**
 * Footer.jsx — Site-wide footer with contact info, nav links, and social icons.
 * All contact details come from business.js — null values are hidden gracefully.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  SALON_NAME, TAGLINE_HI,
  PHONE, EMAIL, FULL_ADDRESS, FULL_ADDRESS_HI, HOURS,
  phoneLink, emailLink, instagramLink, facebookLink,
} from '../../config/business';
import { generalEnquiryLink } from '../../utils/whatsapp';
import { useLanguage } from '../../hooks/useLanguage';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();
const DEVELOPER_NAME = 'Suraj Kumar Jha';
const DEVELOPER_PROFILE_URL = 'https://www.linkedin.com/in/suraj-kumar-jha01/';

const NAV_LINKS = [
  { to: '/',         label: 'होम' },
  { to: '/services', label: 'सेवाएँ' },
  { to: '/bridal',   label: 'ब्राइडल' },
  { to: '/gallery',  label: 'गैलरी' },
  { to: '/about',    label: 'हमारे बारे में' },
  { to: '/contact',  label: 'संपर्क करें' },
];

function PhoneIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;
}
function EmailIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
}
function LocationIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>;
}
function ClockIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>;
}
function InstagramIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
}
function FacebookIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
}
function WhatsAppIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}

export default function Footer() {
  const { language, t } = useLanguage();
  const address = language === 'hi' ? FULL_ADDRESS_HI : FULL_ADDRESS;

  return (
    <footer className="footer" role="contentinfo">
      {/* Top decorative border */}
      <div className="footer__topbar" aria-hidden="true" />

      <div className="footer__main">
        <div className="container footer__grid">

          {/* Col 1 — Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__brand">
              <span className="footer__brand-icon" aria-hidden="true">🌿</span>
              <div>
                <div className="footer__brand-name">Sonali Herbal</div>
                <div className="footer__brand-sub">Beauty Parlour</div>
              </div>
            </div>
            <p className="footer__tagline">{t(TAGLINE_HI)}</p>
            <p className="footer__desc">
              {t('प्राकृतिक सामग्री और विशेषज्ञ देखभाल के साथ, हम आपकी सुंदरता को निखारते हैं।')}
            </p>
            {/* Social Icons */}
            <div className="footer__social" aria-label={t('सोशल मीडिया लिंक')}>
              {generalEnquiryLink && (
                <a href={generalEnquiryLink} target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--whatsapp" aria-label="WhatsApp">
                  <WhatsAppIcon />
                </a>
              )}
              {instagramLink && (
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--instagram" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              )}
              {facebookLink && (
                <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--facebook" aria-label="Facebook">
                  <FacebookIcon />
                </a>
              )}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="footer__col">
            <h3 className="footer__heading">{t('त्वरित लिंक')}</h3>
            <ul className="footer__nav" role="list">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__nav-link">{t(label)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="footer__col">
            <h3 className="footer__heading">{t('संपर्क जानकारी')}</h3>
            <ul className="footer__contact" role="list">
              {address && (
                <li className="footer__contact-item">
                  <LocationIcon />
                  <span>{address}</span>
                </li>
              )}
              {phoneLink && PHONE && (
                <li className="footer__contact-item">
                  <PhoneIcon />
                  <a href={phoneLink} className="footer__contact-link">{PHONE}</a>
                </li>
              )}
              {emailLink && EMAIL && (
                <li className="footer__contact-item">
                  <EmailIcon />
                  <a href={emailLink} className="footer__contact-link">{EMAIL}</a>
                </li>
              )}
              {HOURS && (
                <li className="footer__contact-item">
                  <ClockIcon />
                  <span>{HOURS}</span>
                </li>
              )}
              {!address && !phoneLink && !emailLink && !HOURS && (
                <li className="footer__contact-item footer__contact-item--coming">
                  <span>{t('संपर्क जानकारी जल्द उपलब्ध होगी।')}</span>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {CURRENT_YEAR} {SALON_NAME}
          </p>
          <p className="footer__credit">
            Website Designed &amp; Developed by{' '}
            <a href={DEVELOPER_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              {DEVELOPER_NAME}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
