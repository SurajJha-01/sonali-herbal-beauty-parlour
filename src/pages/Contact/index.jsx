import React, { useState } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import BookingDisclaimer from '../../components/ui/BookingDisclaimer';
import { useLanguage } from '../../hooks/useLanguage';
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
  whatsappLink,
  emailLink,
} from '../../config/business';
import {
  buildCustomBookingWhatsAppLink,
  buildCustomBookingMailtoLink,
} from '../../utils/whatsapp';
import { getConfirmedServices } from '../../data/services';
import './Contact.css';

const TODAY_STRING = new Date(Date.now() - new Date().getTimezoneOffset() * 60_000)
  .toISOString()
  .split('T')[0];

function ContactIcon({ name }) {
  const paths = {
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.04 9.72a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92Z" />,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function Contact() {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const confirmedServices = getConfirmedServices();
  const copy = isHindi
    ? {
        pageTitle: 'संपर्क करें',
        badge: 'संपर्क करें',
        title: 'अपनी अपॉइंटमेंट बुक करें',
        subtitle: 'अपनी जानकारी भरें और हमसे सीधे फोन या ईमेल पर संपर्क करें।',
        contactHeading: 'सोनाली हर्बल ब्यूटी पार्लर',
        contactIntro: 'अपॉइंटमेंट या सेवाओं के बारे में हमसे सीधे संपर्क करें।',
        address: FULL_ADDRESS_HI,
        addressLabel: 'पार्लर का पता',
        call: 'अभी कॉल करें',
        directions: 'गूगल मैप में खोलें',
        phoneLabel: 'फोन नंबर',
        emailLabel: 'ईमेल',
        hoursLabel: 'कार्य समय',
        whatsapp: 'WhatsApp',
        whatsappUnavailable: 'WhatsApp नंबर अभी सत्यापित नहीं है। कृपया कॉल करें या ईमेल भेजें।',
        formHeading: 'पूछताछ भेजें',
        formSubtitle: 'अपनी जानकारी भरें; संदेश का मसौदा ईमेल में खुलेगा, जिसे आप जाँचकर स्वयं भेज सकते हैं।',
        name: 'पूरा नाम',
        phone: 'मोबाइल नंबर',
        date: 'अपॉइंटमेंट की तारीख',
        service: 'आप कौन-सी सेवा चाहते हैं?',
        chooseService: 'सेवा चुनें (वैकल्पिक)',
        time: 'पसंदीदा समय (वैकल्पिक)',
        chooseTime: 'समय चुनें',
        message: 'संदेश (वैकल्पिक)',
        namePlaceholder: 'अपना नाम लिखें',
        phonePlaceholder: '10 अंकों का मोबाइल नंबर',
        messagePlaceholder: 'अपनी पूछताछ या विशेष अनुरोध लिखें...',
        sendWhatsApp: 'व्हाट्सएप पर भेजें',
        sendEmail: 'ईमेल ड्राफ्ट खोलें',
        fallback: 'WhatsApp उपलब्ध नहीं है। नीचे दिया गया बटन आपके ईमेल में संदेश का ड्राफ्ट खोलेगा; आप चाहें तो सीधे कॉल भी कर सकते हैं।',
        sendNote: 'आपकी जानकारी संदेश के ड्राफ्ट में शामिल होगी। भेजने से पहले आप उसे देख और स्वयं भेज सकते हैं।',
        nameError: 'कृपया अपना नाम दर्ज करें।',
        phoneError: 'कृपया सही 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।',
        dateError: 'कृपया आज या भविष्य की तारीख चुनें।',
        noChannel: 'ईमेल उपलब्ध नहीं है। कृपया पार्लर को फोन करें।',
        mapTitle: 'सोनाली हर्बल ब्यूटी पार्लर का Google Maps स्थान',
      }
    : {
        pageTitle: 'Contact',
        badge: 'GET IN TOUCH',
        title: 'Book Your Appointment',
        subtitle: 'Share your details and contact us directly by phone or email.',
        contactHeading: SALON_NAME,
        contactIntro: 'Reach out directly for appointments and service enquiries.',
        address: FULL_ADDRESS,
        addressLabel: 'Salon address',
        call: 'Call now',
        directions: 'Open in Google Maps',
        phoneLabel: 'Phone number',
        emailLabel: 'Email',
        hoursLabel: 'Business hours',
        whatsapp: 'WhatsApp',
        whatsappUnavailable: 'Our WhatsApp number is not verified yet. Please call or email us.',
        formHeading: 'Send an enquiry',
        formSubtitle: 'Fill in your details to open an email draft you can review and send, or call us directly.',
        name: 'Full name',
        phone: 'Mobile number',
        date: 'Appointment date',
        service: 'Which service are you interested in?',
        chooseService: 'Choose a service (optional)',
        time: 'Preferred time (optional)',
        chooseTime: 'Choose a time',
        message: 'Message (optional)',
        namePlaceholder: 'Enter your name',
        phonePlaceholder: '10-digit mobile number',
        messagePlaceholder: 'Add your enquiry or any special request...',
        sendWhatsApp: 'Send via WhatsApp',
        sendEmail: 'Open email draft',
        fallback: 'WhatsApp is unavailable. The button below opens a message draft in your email app; you can also call us directly.',
        sendNote: 'Your details will be added to a message draft for you to review and send.',
        nameError: 'Please enter your name.',
        phoneError: 'Please enter a valid 10-digit Indian mobile number.',
        dateError: 'Choose today or a future date.',
        noChannel: 'Email is unavailable. Please call the salon.',
        mapTitle: 'Sonali Herbal Beauty Parlour on Google Maps',
      };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [formError, setFormError] = useState('');
  const [formErrorField, setFormErrorField] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (formError) {
      setFormError('');
      setFormErrorField('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError('nameError');
      setFormErrorField('name');
      return false;
    }

    const digits = formData.phone.replace(/\D/g, '');
    const validMobile = /^[6-9]\d{9}$/.test(digits) || /^91[6-9]\d{9}$/.test(digits);
    if (!validMobile) {
      setFormError('phoneError');
      setFormErrorField('phone');
      return false;
    }

    if (formData.date && formData.date < TODAY_STRING) {
      setFormError('dateError');
      setFormErrorField('date');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const link = whatsappLink
      ? buildCustomBookingWhatsAppLink(formData)
      : buildCustomBookingMailtoLink(formData);

    if (!link) {
      setFormError('noChannel');
      setFormErrorField('');
      return;
    }

    if (whatsappLink) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = link;
    }
  };

  return (
    <PageWrapper
      title={copy.pageTitle}
      description={isHindi
        ? `${SALON_NAME_HI} — ${FULL_ADDRESS_HI}। ${PHONE}।`
        : `${SALON_NAME} — ${FULL_ADDRESS}. ${PHONE}.`}
      className="contact-page"
    >
      <header className="contact-header">
        <div className="container">
          <div className="contact-header__content">
            <span className="contact-header__badge">{copy.badge}</span>
            <h1 className="contact-header__title">{copy.title}</h1>
            <p className="contact-header__subtitle">{copy.subtitle}</p>
          </div>
        </div>
      </header>

      <section className="contact-section" aria-label={copy.pageTitle}>
        <div className="container">
          <div className="contact-grid">
            <section className="contact-card contact-info" aria-labelledby="contact-info-heading">
              <div className="contact-info__heading">
                <span className="contact-info__eyebrow">{isHindi ? 'हमसे मिलें' : 'VISIT OR CONTACT US'}</span>
                <h2 id="contact-info-heading" className="contact-info__title">{copy.contactHeading}</h2>
                <p className="contact-info__desc">{copy.contactIntro}</p>
              </div>

              <div className="contact-details">
                <div className="contact-detail">
                  <span className="contact-detail__icon"><ContactIcon name="pin" /></span>
                  <div>
                    <span className="contact-detail__label">{copy.addressLabel}</span>
                    <address className="contact-detail__value">{copy.address}</address>
                  </div>
                </div>
                {PHONE && (
                  <div className="contact-detail">
                    <span className="contact-detail__icon"><ContactIcon name="phone" /></span>
                    <div>
                      <span className="contact-detail__label">{copy.phoneLabel}</span>
                      <a className="contact-detail__value" href={phoneLink}>{PHONE}</a>
                    </div>
                  </div>
                )}
                {EMAIL && (
                  <div className="contact-detail">
                    <span className="contact-detail__icon"><ContactIcon name="mail" /></span>
                    <div>
                      <span className="contact-detail__label">{copy.emailLabel}</span>
                      <a className="contact-detail__value" href={emailLink}>{EMAIL}</a>
                    </div>
                  </div>
                )}
                <div className="contact-detail">
                  <span className="contact-detail__icon"><ContactIcon name="clock" /></span>
                  <div>
                    <span className="contact-detail__label">{copy.hoursLabel}</span>
                    <span className="contact-detail__value">{isHindi ? HOURS_HI : HOURS}</span>
                  </div>
                </div>
              </div>

              <div className="contact-info__actions">
                {phoneLink && (
                  <a className="contact-action contact-action--primary" href={phoneLink}>
                    <ContactIcon name="phone" />{copy.call}
                  </a>
                )}
                {whatsappLink ? (
                  <a className="contact-action contact-action--whatsapp" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <ContactIcon name="message" />{copy.whatsapp}
                  </a>
                ) : (
                  <p className="contact-whatsapp-note">{copy.whatsappUnavailable}</p>
                )}
              </div>

              {MAP_EMBED_URL && (
                <div className="contact-map">
                  <iframe
                    src={MAP_EMBED_URL}
                    title={copy.mapTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  {MAPS_URL && (
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="contact-map__link">
                      <ContactIcon name="pin" />
                      <span>{copy.directions}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </section>

            <section className="contact-card contact-form-box" aria-labelledby="form-heading">
              <div className="contact-form__header">
                <span className="contact-info__eyebrow">{isHindi ? 'अपॉइंटमेंट अनुरोध' : 'APPOINTMENT REQUEST'}</span>
                <h2 id="form-heading" className="contact-form__title">{copy.formHeading}</h2>
                <p className="contact-form__subtitle">{copy.formSubtitle}</p>
              </div>

              {formError && <p className="contact-form__error" id="form-error" role="alert">{copy[formError]}</p>}

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="client-name" className="form-label">
                    {copy.name} <span className="form-label__req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="client-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={copy.namePlaceholder}
                    autoComplete="name"
                    required
                    className="form-input"
                    aria-invalid={formErrorField === 'name'}
                    aria-describedby={formErrorField === 'name' ? 'form-error' : undefined}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="client-phone" className="form-label">
                      {copy.phone} <span className="form-label__req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="client-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={copy.phonePlaceholder}
                      autoComplete="tel"
                      required
                      className="form-input"
                      aria-invalid={formErrorField === 'phone'}
                      aria-describedby={formErrorField === 'phone' ? 'form-error' : undefined}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="client-date" className="form-label">{copy.date}</label>
                    <input
                      id="client-date"
                      name="date"
                      type="date"
                      min={TODAY_STRING}
                      value={formData.date}
                      onChange={handleChange}
                      className="form-input"
                      aria-invalid={formErrorField === 'date'}
                      aria-describedby={formErrorField === 'date' ? 'form-error' : undefined}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="client-service" className="form-label">{copy.service}</label>
                    <select id="client-service" name="service" value={formData.service} onChange={handleChange} className="form-select">
                      <option value="">{copy.chooseService}</option>
                      <option value="सामान्य पूछताछ">{isHindi ? 'सामान्य पूछताछ' : 'General enquiry'}</option>
                      <option value="ब्राइडल / प्री-ब्राइडल मेकअप">{isHindi ? 'ब्राइडल / प्री-ब्राइडल मेकअप' : 'Bridal / pre-bridal makeup'}</option>
                      <option value="पार्टी / उत्सव मेकअप">{isHindi ? 'पार्टी / उत्सव मेकअप' : 'Party / occasion makeup'}</option>
                      {confirmedServices.map((service) => (
                        <option key={service.id} value={service.nameHi}>
                          {isHindi ? service.nameHi : service.name}
                        </option>
                      ))}
                      <option value="अन्य सेवा">{isHindi ? 'अन्य सेवा' : 'Other service'}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="client-time" className="form-label">{copy.time}</label>
                    <select id="client-time" name="time" value={formData.time} onChange={handleChange} className="form-select">
                      <option value="">{copy.chooseTime}</option>
                      <option value="10:00 AM – 1:00 PM">10:00 AM – 1:00 PM</option>
                      <option value="1:00 PM – 4:00 PM">1:00 PM – 4:00 PM</option>
                      <option value="4:00 PM – 7:00 PM">4:00 PM – 7:00 PM</option>
                      <option value="7:00 PM – 9:00 PM">7:00 PM – 9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="client-message" className="form-label">{copy.message}</label>
                  <textarea
                    id="client-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={copy.messagePlaceholder}
                    className="form-textarea"
                    rows="3"
                  />
                </div>

                <BookingDisclaimer language={language} />

                {!whatsappLink && <p className="contact-form__fallback">{copy.fallback}</p>}
                <button type="submit" className="contact-submit">
                  <ContactIcon name={whatsappLink ? 'message' : 'mail'} />
                  {whatsappLink ? copy.sendWhatsApp : copy.sendEmail}
                </button>
                <p className="contact-form__note">{copy.sendNote}</p>
              </form>
            </section>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
