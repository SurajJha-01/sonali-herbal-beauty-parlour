/**
 * BookingDisclaimer.jsx
 * Hindi appointment confirmation disclaimer — shown on every booking CTA.
 * Required: informs visitors that an appointment is only confirmed after salon responds.
 */
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './BookingDisclaimer.css';

export default function BookingDisclaimer({ light = false, language }) {
  const { language: currentLanguage } = useLanguage();
  const activeLanguage = language || currentLanguage;
  const text = activeLanguage === 'en'
    ? 'Please note: This is a booking request, not a confirmed appointment. Your appointment will only be confirmed after the salon contacts you. You will need to press Send yourself to send a WhatsApp or email message.'
    : 'कृपया ध्यान दें: यह केवल बुकिंग अनुरोध है, पक्की बुकिंग नहीं। आपकी बुकिंग की पुष्टि पार्लर की ओर से संपर्क किए जाने के बाद ही होगी। WhatsApp या ईमेल पर संदेश भेजने के लिए आपको स्वयं Send बटन दबाना होगा।';

  return (
    <p className={`booking-disclaimer ${light ? 'booking-disclaimer--light' : ''}`}>
      <span className="booking-disclaimer__icon" aria-hidden="true">ℹ️</span>
      <span>{text}</span>
    </p>
  );
}
