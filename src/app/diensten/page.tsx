'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useInView } from '@/lib/useInView';

export default function DienstenPage() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image src="/images/craft-detail.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black-deep/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6 animate-fade-in">{t.services.badge}</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4 animate-fade-in-up">{t.services.title}</h1>
          <p className="text-warm-gray text-lg animate-fade-in-up animate-delay-200">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0a0a0a]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.items.map((service, i) => (
              <div key={i} className={`relative glass rounded-3xl p-8 lg:p-10 hover-lift group ${isInView ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : 'opacity-0'} ${'popular' in service && service.popular ? 'ring-1 ring-cognac/50' : ''} ${'premium' in service && service.premium ? 'ring-1 ring-gold/50' : ''}`}>
                {'popular' in service && service.popular && <span className="absolute -top-3 right-8 px-4 py-1 rounded-full bg-cognac text-black-deep text-[10px] font-bold uppercase tracking-wider">Populair</span>}
                {'premium' in service && service.premium && <span className="absolute -top-3 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-gold to-cognac text-black-deep text-[10px] font-bold uppercase tracking-wider">Premium</span>}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-cream mb-1">{service.title}</h2>
                    <p className="text-sm text-warm-gray">{service.description}</p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-3xl font-serif font-bold text-shimmer">{service.price}</div>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-warm-gray-light">
                      <svg className="w-4 h-4 text-cognac shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold text-sm hover:shadow-[0_4px_20px_rgba(195,138,79,0.4)] transition-all duration-300">
                  {t.nav.planIntake}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Custom Couture */}
          <div className="mt-12 glass rounded-3xl p-10 lg:p-14 text-center">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">{t.services.custom.title}</h2>
            <p className="text-warm-gray-light text-lg max-w-2xl mx-auto mb-8">{t.services.custom.description}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold text-lg hover:shadow-[0_4px_30px_rgba(195,138,79,0.5)] transition-all duration-300 hover:scale-105">
              {t.services.custom.cta}
            </Link>
          </div>

          {/* YouTube Embed */}
          <div className="mt-20 text-center">
            <h3 className="font-serif text-2xl font-bold text-cream mb-4">Bekijk ons vakmanschap</h3>
            <p className="text-warm-gray mb-8 max-w-xl mx-auto">Volg Maurice op YouTube en ontdek hoe wij leren jassen transformeren — van reparatie tot complete redesign.</p>
            <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden border border-cognac/20">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed?listType=user_uploads&list=mauriceeduardverlinden6802" title="DrJacket — Maurice Eduard Verlinden YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
            <a
              href="https://www.youtube.com/@mauriceeduardverlinden6802"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full border border-cream/10 text-warm-gray hover:text-cream hover:border-cognac/30 transition-all duration-300 text-sm font-medium"
            >
              <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Bekijk ons YouTube kanaal →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
