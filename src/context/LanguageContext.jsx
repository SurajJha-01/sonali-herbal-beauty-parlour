import React, { useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './languageStore';
import { translate } from './translations';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return window.localStorage.getItem('sonali-language') === 'en' ? 'en' : 'hi';
    } catch {
      return 'hi';
    }
  });
  const toggleLanguage = () => setLanguage((current) => current === 'hi' ? 'en' : 'hi');

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem('sonali-language', language);
    } catch {
      // The language still works for this visit when storage is unavailable.
    }
  }, [language]);

  const value = useMemo(
    () => ({ language, toggleLanguage, t: (text) => translate(text, language) }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
