/**
 * App.jsx — Root application component.
 * Sets up React Router, renders Navbar + Footer on all routes,
 * and wraps the app in HelmetProvider for per-page SEO meta.
 */
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout
import Navbar       from './components/layout/Navbar';
import Footer       from './components/layout/Footer';
import WhatsAppFAB  from './components/ui/WhatsAppFAB';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { useLanguage } from './hooks/useLanguage';

// Pages
import Home     from './pages/Home/index';
import Services from './pages/Services/index';
import Bridal   from './pages/Bridal/index';
import Gallery  from './pages/Gallery/index';
import About    from './pages/About/index';
import Contact  from './pages/Contact/index';

// Global styles
import './styles/index.css';
import './styles/page-stub.css';
import './styles/theme.css';

// 404 Page
function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="page-wrapper" id="main-content" tabIndex="-1">
      <section className="page-stub">
        <div className="page-stub__icon" aria-hidden="true">🌿</div>
        <h1 className="page-stub__title">{t('पेज नहीं मिला')}</h1>
        <p className="page-stub__subtitle">{t('यह पेज उपलब्ध नहीं है।')}</p>
        <Link to="/" className="btn btn--primary btn--md" style={{ marginTop: '1.5rem' }}>
          {t('होम पेज पर जाएँ')}
        </Link>
      </section>
    </main>
  );
}

function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#main-content" className="skip-link">
      {t('मुख्य सामग्री पर जाएँ')}
    </a>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <ThemeProvider>
            {/* Skip to main content — accessibility */}
            <SkipLink />

            <Navbar />

            <Routes>
              <Route path="/"         element={<Home />}     />
              <Route path="/services" element={<Services />} />
              <Route path="/bridal"   element={<Bridal />}   />
              <Route path="/gallery"  element={<Gallery />}  />
              <Route path="/about"    element={<About />}    />
              <Route path="/contact"  element={<Contact />}  />
              <Route path="*"         element={<NotFound />} />
            </Routes>

            <Footer />

            {/* Floating WhatsApp button — renders only when number is configured */}
            <WhatsAppFAB />
          </ThemeProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
