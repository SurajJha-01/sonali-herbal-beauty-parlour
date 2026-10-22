/**
 * SectionHeading.jsx — Decorative section heading with an optional subtitle.
 * All heading text should be in Hindi; subtitle can be Hindi or English.
 */
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './SectionHeading.css';

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const { t } = useLanguage();
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''} ${className}`}>
      <div className="section-heading__ornament" aria-hidden="true">
        <span className="section-heading__line" />
        <span className="section-heading__diamond">◆</span>
        <span className="section-heading__line" />
      </div>
      <h2 className="section-heading__title">{t(title)}</h2>
      {subtitle && (
        <p className="section-heading__subtitle">{t(subtitle)}</p>
      )}
      <div className="section-heading__underline" aria-hidden="true" />
    </div>
  );
}
