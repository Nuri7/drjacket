'use client';

import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { img } from '@/lib/basePath';

function LanguageSync() {
  const { locale } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  useEffect(() => {
    document.documentElement.style.setProperty('--leather-bg-url', `url('${img('/images/leather-texture.png')}')`);
  }, []);
  return null;
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LanguageSync />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
