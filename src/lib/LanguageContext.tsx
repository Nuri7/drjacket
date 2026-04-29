'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { dictionaries, type Locale, type Dictionary } from './i18n';

interface LanguageContextType {
  locale: Locale;
  t: Dictionary;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('nl');

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'nl' ? 'en' : 'nl'));
  }, []);

  const t = dictionaries[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
