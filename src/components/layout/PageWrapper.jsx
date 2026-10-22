/**
 * PageWrapper.jsx — Layout wrapper for all pages.
 * Adds page-level padding-top (for fixed navbar), and renders SEO meta via react-helmet-async.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SALON_NAME } from '../../config/business';
import { useLanguage } from '../../hooks/useLanguage';
import './PageWrapper.css';

export default function PageWrapper({ children, title, description, className = '' }) {
  const { t } = useLanguage();
  const fullTitle = title ? `${t(title)} | ${SALON_NAME}` : SALON_NAME;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content="website" />
      </Helmet>
      <main
        className={`page-wrapper ${className}`}
        id="main-content"
        tabIndex="-1"
      >
        {children}
      </main>
    </>
  );
}
