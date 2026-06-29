/* eslint-disable react-refresh/only-export-components -- context file intentionally exports provider + hooks */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'portfolio-lang';
const DEFAULT_LANG = 'en';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANG;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'en' || saved === 'es' ? saved : DEFAULT_LANG;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((current) => (current === 'en' ? 'es' : 'en'));

  const value = { lang, setLang, toggle, t: translations[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}

/**
 * Returns the right text for a localized value.
 * Accepts either a plain string (used for both languages) or an object
 * like `{ en, es }`. Falls back to English, then to whatever exists.
 */
export function localize(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] ?? value.en ?? Object.values(value)[0] ?? '';
  }
  return value ?? '';
}
