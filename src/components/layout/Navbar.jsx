/**
 * Navbar.jsx — Sticky responsive navigation bar.
 * Desktop: horizontal nav links.
 * Mobile: hamburger menu with animated slide-down drawer.
 * Scrolled state: adds background + shadow.
 */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SALON_NAME } from '../../config/business';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/',         label: 'होम', english: 'Home' },
  { to: '/services', label: 'सेवाएँ', english: 'Services' },
  { to: '/bridal',   label: 'ब्राइडल', english: 'Bridal' },
  { to: '/gallery',  label: 'गैलरी', english: 'Gallery' },
  { to: '/about',    label: 'हमारे बारे में', english: 'About Us' },
  { to: '/contact',  label: 'संपर्क करें', english: 'Contact Us' },
];

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const hamburgerRef = useRef(null);

  // Add scrolled class after 60px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const bookingLabel = language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment';
  const nextThemeLabel = theme === 'light'
    ? (language === 'hi' ? 'डार्क मोड' : 'Dark mode')
    : (language === 'hi' ? 'लाइट मोड' : 'Light mode');

  const themeButton = (className = '') => (
    <button
      type="button"
      className={`navbar__theme ${className}`.trim()}
      onClick={toggleTheme}
      aria-pressed={theme === 'dark'}
      aria-label={language === 'hi'
        ? (theme === 'light' ? 'डार्क थीम चालू करें' : 'लाइट थीम चालू करें')
        : (theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme')}
      title={nextThemeLabel}
    >
      <span className="navbar__theme-icon" aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
      <span>{nextThemeLabel}</span>
    </button>
  );

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label={t('मुख्य नेविगेशन')}>
        {/* Logo / Brand */}
        <Link to="/" className="navbar__brand" onClick={closeMenu} aria-label={`${SALON_NAME} — ${t('होम पेज')}`}>
          <span className="navbar__brand-icon" aria-hidden="true">🌿</span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Sonali Herbal</span>
            <span className="navbar__brand-sub">Beauty Parlour</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links" role="list">
          {NAV_LINKS.map(({ to, label, english }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {language === 'hi' ? label : english}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          {themeButton()}
          <button
            type="button"
            className="navbar__language"
            onClick={toggleLanguage}
            aria-label={language === 'hi' ? 'Switch language to English' : 'भाषा हिंदी में बदलें'}
          >
            {language === 'hi' ? 'EN' : 'हिंदी'}
          </button>
          <Link to="/contact" className="navbar__booking" onClick={closeMenu}>
            {bookingLabel}
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          ref={hamburgerRef}
          type="button"
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label={language === 'hi'
            ? (menuOpen ? 'मेनू बंद करें' : 'मेनू खोलें')
            : (menuOpen ? 'Close menu' : 'Open menu')}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <ul className="navbar__drawer-links" role="list">
          {NAV_LINKS.map(({ to, label, english }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                {language === 'hi' ? label : english}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navbar__drawer-actions">
          {themeButton('navbar__theme--mobile')}
          <button
            type="button"
            className="navbar__language"
            onClick={toggleLanguage}
            aria-label={language === 'hi' ? 'Switch language to English' : 'भाषा हिंदी में बदलें'}
          >
            {language === 'hi' ? 'English' : 'हिंदी'}
          </button>
          <Link to="/contact" className="navbar__booking" onClick={closeMenu}>
            {bookingLabel}
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
