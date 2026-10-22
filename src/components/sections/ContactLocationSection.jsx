import React from 'react';
import { Link } from 'react-router-dom';
import {
  SALON_NAME,
  SALON_NAME_HI,
  PHONE,
  EMAIL,
  FULL_ADDRESS,
  FULL_ADDRESS_HI,
  HOURS,
  HOURS_HI,
  MAPS_URL,
  MAP_EMBED_URL,
  phoneLink,
  emailLink,
  whatsappLink,
} from '../../config/business';
import { useLanguage } from '../../hooks/useLanguage';
import './ContactLocationSection.css';

function LocationIcon({ type }) {
  const iconPaths = {
    address: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.04 9.72a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92Z" />,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    hours: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[type]}
    </svg>
  );
}

export default function ContactLocationSection() {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const address = isHindi ? FULL_ADDRESS_HI : FULL_ADDRESS;

  return (
    <section className="home-location" aria-labelledby="home-location-title">
      <div className="container">
        <div className="home-location__heading">
          <span className="home-location__eyebrow">{isHindi ? 'हमसे जुड़ें' : 'VISIT & GET IN TOUCH'}</span>
          <h2 id="home-location-title" className="home-location__title">
            {isHindi ? 'हमसे संपर्क करें' : 'Contact & Location'}
          </h2>
          <p className="home-location__subtitle">
            {isHindi
              ? 'अपॉइंटमेंट और सेवाओं की जानकारी के लिए पार्लर से सीधे संपर्क करें।'
              : 'Contact the salon directly for appointment and service enquiries.'}
          </p>
        </div>

        <div className="home-location__grid">
          <section className="home-location__card" aria-label={isHindi ? 'पार्लर का संपर्क विवरण' : 'Salon contact details'}>
            <div className="home-location__business">
              <span className="home-location__business-mark" aria-hidden="true">✿</span>
              <div>
                <h3>{isHindi ? SALON_NAME_HI : SALON_NAME}</h3>
                <p>{isHindi ? 'प्रकृति की शक्ति, आपकी सुंदरता' : 'The power of nature, your beauty'}</p>
              </div>
            </div>

            <div className="home-location__details">
              <div className="home-location__detail">
                <span className="home-location__icon"><LocationIcon type="address" /></span>
                <div>
                  <span className="home-location__label">{isHindi ? 'पार्लर का पता' : 'Address'}</span>
                  <address>{address}</address>
                </div>
              </div>
              {PHONE && phoneLink && (
                <div className="home-location__detail">
                  <span className="home-location__icon"><LocationIcon type="phone" /></span>
                  <div>
                    <span className="home-location__label">{isHindi ? 'फोन नंबर' : 'Phone'}</span>
                    <a href={phoneLink}>{PHONE}</a>
                  </div>
                </div>
              )}
              {EMAIL && emailLink && (
                <div className="home-location__detail">
                  <span className="home-location__icon"><LocationIcon type="email" /></span>
                  <div>
                    <span className="home-location__label">{isHindi ? 'ईमेल' : 'Email'}</span>
                    <a href={emailLink}>{EMAIL}</a>
                  </div>
                </div>
              )}
              <div className="home-location__detail">
                <span className="home-location__icon"><LocationIcon type="hours" /></span>
                <div>
                  <span className="home-location__label">{isHindi ? 'कार्य समय' : 'Opening hours'}</span>
                  <span>{isHindi ? HOURS_HI : HOURS}</span>
                </div>
              </div>
            </div>

            <div className="home-location__actions">
              {phoneLink && (
                <a className="home-location__button home-location__button--primary" href={phoneLink}>
                  <LocationIcon type="phone" />
                  {isHindi ? 'अभी कॉल करें' : 'Call now'}
                </a>
              )}
              {MAPS_URL && (
                <a className="home-location__button" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <LocationIcon type="address" />
                  {isHindi ? 'गूगल मैप में खोलें' : 'Get directions'}
                </a>
              )}
            </div>

            {whatsappLink ? (
              <a className="home-location__whatsapp" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <LocationIcon type="message" />
                {isHindi ? 'WhatsApp पर संपर्क करें' : 'Contact on WhatsApp'}
              </a>
            ) : (
              <p className="home-location__note">
                {isHindi
                  ? 'WhatsApp नंबर अभी सत्यापित नहीं है। कृपया कॉल या ईमेल से संपर्क करें।'
                  : 'WhatsApp is not verified yet. Please contact us by phone or email.'}
              </p>
            )}
          </section>

          <section className="home-location__map-card" aria-label={isHindi ? 'पार्लर का नक्शा' : 'Salon map'}>
            {MAP_EMBED_URL ? (
              <iframe
                src={MAP_EMBED_URL}
                title={isHindi ? `${SALON_NAME_HI} का Google Maps स्थान` : `${SALON_NAME} on Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="home-location__map-fallback">
                <LocationIcon type="address" />
                <p>{address}</p>
              </div>
            )}
            <div className="home-location__map-footer">
              <div>
                <strong>{isHindi ? 'पार्लर का स्थान' : 'Find the salon'}</strong>
                <span>{address}</span>
              </div>
              {MAPS_URL && (
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label={isHindi ? 'Google Maps में दिशा-निर्देश खोलें' : 'Open directions in Google Maps'}>
                  ↗
                </a>
              )}
            </div>
            <Link className="home-location__appointment" to="/contact">
              {isHindi ? 'अपॉइंटमेंट या पूछताछ करें' : 'Appointment & enquiries'}
              <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
