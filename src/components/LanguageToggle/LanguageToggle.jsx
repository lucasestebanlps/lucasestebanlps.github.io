import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import './language-toggle.css';

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label={t.language.label}>
      <button
        type="button"
        className={`lang-toggle__btn ${lang === 'en' ? 'is-active' : ''}`}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-toggle__btn ${lang === 'es' ? 'is-active' : ''}`}
        aria-pressed={lang === 'es'}
        onClick={() => setLang('es')}
      >
        ES
      </button>
    </div>
  );
}
