/**
 * whatsapp.js — Utility for building WhatsApp & email enquiry links.
 * All messages are properly encoded. Links return null if contact details are unset.
 */
import { WHATSAPP, WHATSAPP_VERIFIED, EMAIL, WA_MSG_GENERAL, WA_MSG_BRIDAL, WA_MSG_SERVICE } from '../config/business';

/**
 * Build a wa.me link with a given pre-encoded message.
 * Returns null unless the WhatsApp number has been verified.
 */
export function buildWhatsAppLink(encodedMessage) {
  if (!WHATSAPP || !WHATSAPP_VERIFIED) return null;
  const number = WHATSAPP.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodedMessage}`;
}

/**
 * Build a WhatsApp URL for a custom message using the same verification rule.
 */
export function buildExplicitWhatsAppLink(message) {
  if (!WHATSAPP || !WHATSAPP_VERIFIED) return null;
  const number = WHATSAPP.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const generalEnquiryLink = buildWhatsAppLink(WA_MSG_GENERAL);
export const bridalEnquiryLink  = buildWhatsAppLink(WA_MSG_BRIDAL);

export function serviceEnquiryLink(serviceName) {
  return buildWhatsAppLink(WA_MSG_SERVICE(serviceName));
}

/**
 * Build a WhatsApp message URL from custom enquiry form input.
 */
export function buildCustomBookingWhatsAppLink({ name, phone, service, date, time, message }) {
  if (!WHATSAPP || !WHATSAPP_VERIFIED) return null;
  const lines = [
    'नमस्ते! मैं Sonali Herbal Beauty Parlour में अपॉइंटमेंट पूछताछ करना चाहती हूँ।',
    '',
    name ? `• नाम: ${name}` : '',
    phone ? `• फोन: ${phone}` : '',
    service ? `• सेवा: ${service}` : '',
    date ? `• पसंदीदा तारीख: ${date}` : '',
    time ? `• पसंदीदा समय: ${time}` : '',
    message ? `• अतिरिक्त संदेश: ${message}` : '',
  ].filter(Boolean);

  return buildWhatsAppLink(encodeURIComponent(lines.join('\n')));
}

/**
 * Build a mailto draft link from custom enquiry form input.
 */
export function buildCustomBookingMailtoLink({ name, phone, service, date, time, message }) {
  if (!EMAIL) return null;
  const subject = encodeURIComponent(`अपॉइंटमेंट पूछताछ - ${name || 'Sonali Herbal Beauty Parlour'}`);
  const lines = [
    'नमस्ते,',
    '',
    'मैं Sonali Herbal Beauty Parlour में अपॉइंटमेंट पूछताछ करना चाहती हूँ।',
    '',
    name ? `नाम: ${name}` : '',
    phone ? `फोन नंबर: ${phone}` : '',
    service ? `इच्छित सेवा: ${service}` : '',
    date ? `तारीख: ${date}` : '',
    time ? `समय: ${time}` : '',
    message ? `संदेश:\n${message}` : '',
  ].filter(Boolean);

  const body = encodeURIComponent(lines.join('\n'));
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}
