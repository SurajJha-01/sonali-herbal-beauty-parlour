/**
 * business.js — Single source of truth for all salon business information.
 *
 * All visitor-facing and operational details are defined here.
 * Contact links derive from these details; unverified WhatsApp remains disabled.
 */

// ─── Salon Identity ───────────────────────────────────────────────────────────
export const SALON_NAME    = "Sonali Herbal Beauty Parlour";
export const SALON_NAME_HI = "सोनाली हर्बल ब्यूटी पार्लर";
export const TAGLINE_HI    = "प्रकृति की शक्ति, आपकी सुंदरता";
export const OWNER_NAME    = "Sudina Suman";
export const OWNER_NAME_HI = "सुदीना सुमन";

// ─── Contact Details ──────────────────────────────────────────────────────────
export const PHONE     = "+91 7979822084";
export const WHATSAPP  = "+91 7979822084";
// The business owner has confirmed this WhatsApp number.
export const WHATSAPP_VERIFIED = true;
export const EMAIL     = "sudinasuman@gmail.com";

// ─── Location & Map ───────────────────────────────────────────────────────────
export const ADDRESS       = "Head Post Office Road";
export const ADDRESS_HI    = "हेड पोस्ट ऑफिस रोड";
export const CITY          = "Madhubani, Bihar";
export const PIN           = "847211"; // Verified PIN from full address
export const FULL_ADDRESS  = `${ADDRESS}, ${CITY} ${PIN}`;
export const FULL_ADDRESS_HI = `${ADDRESS_HI}, मधुबनी, बिहार ${PIN}`;
export const MAPS_URL      = "https://maps.app.goo.gl/HEqEoBYJwASZ2VEc8?g_st=aw";
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(FULL_ADDRESS)}&output=embed`;

// ─── Operating Hours ──────────────────────────────────────────────────────────
export const HOURS    = "10:00 AM – 9:00 PM";
export const HOURS_HI = "सुबह 10:00 बजे – रात 9:00 बजे";

// ─── Social Media ─────────────────────────────────────────────────────────────
export const INSTAGRAM = null; // Unconfirmed by client
export const FACEBOOK  = null; // Unconfirmed by client

// ─── Feature Flags ────────────────────────────────────────────────────────────
// Set to true ONLY when real, verified content is available.
export const SHOW_OFFERS       = false; // true = show offers section
export const SHOW_STATS        = false; // true = show "X years / X clients" stats
export const SHOW_TESTIMONIALS = false; // true = show client testimonials

// ─── WhatsApp Message Templates ───────────────────────────────────────────────
export const WA_MSG_GENERAL = encodeURIComponent(
  "नमस्ते! मैं Sonali Herbal Beauty Parlour में appointment के बारे में जानकारी लेना चाहती हूँ।"
);
export const WA_MSG_BRIDAL = encodeURIComponent(
  "नमस्ते! मुझे ब्राइडल / प्री-ब्राइडल सेवाओं के बारे में जानकारी चाहिए।"
);
export const WA_MSG_SERVICE = (serviceName) =>
  encodeURIComponent(
    `नमस्ते! मैं "${serviceName}" सेवा के बारे में पूछताछ करना चाहती हूँ।`
  );

// ─── Derived Helpers ──────────────────────────────────────────────────────────
export const isPlaceholder = (val) => val === null || val === undefined || val === "";

export const phoneLink     = PHONE     ? `tel:${PHONE.replace(/\s+/g, "")}`       : null;
export const whatsappLink  = WHATSAPP && WHATSAPP_VERIFIED ? `https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${WA_MSG_GENERAL}` : null;
export const emailLink     = EMAIL     ? `mailto:${EMAIL}`                         : null;
export const mapsLink      = MAPS_URL  ? MAPS_URL                                  : null;
export const instagramLink = INSTAGRAM ? `https://instagram.com/${INSTAGRAM.replace("@", "")}` : null;
export const facebookLink  = FACEBOOK  ? `https://facebook.com/${FACEBOOK}`        : null;
