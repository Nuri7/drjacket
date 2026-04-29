'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useInView } from '@/lib/useInView';
import { img } from '@/lib/basePath';

export default function DienstenPage() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image src={img('/images/hands-crafting.png')} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black-deep/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6 animate-fade-in">{t.services.badge}</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4 animate-fade-in-up">{t.services.title}</h1>
          <p className="text-warm-gray text-lg animate-fade-in-up animate-delay-200">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Service Cards (screenshot 3 style) */}
      <section className="section-cream py-24" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, i) => (
              <div key={i} className={`service-card relative ${isInView ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                {'popular' in service && service.popular && <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-cognac text-black-deep text-[10px] font-bold uppercase tracking-wider">Populair</span>}
                {'premium' in service && service.premium && <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-cognac text-black-deep text-[10px] font-bold uppercase tracking-wider">Premium</span>}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img(i === 0 ? '/images/zipper-repair.png' : i === 1 ? '/images/hands-crafting.png' : i === 2 ? '/images/leather-restoration.png' : '/images/gallery-black.png')}
                    alt={service.title} fill className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-bold text-cream mb-2">{service.title}</h2>
                  <p className="text-sm text-warm-gray leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-warm-gray">
                        <svg className="w-3.5 h-3.5 text-cognac shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-cream/10">
                    <div>
                      <span className="text-xs text-warm-gray uppercase tracking-wider">Vanaf</span>
                      <div className="font-serif text-xl font-bold text-cognac">{service.price}</div>
                    </div>
                    <Link href="/contact" className="text-cognac text-xs font-medium hover:text-gold transition-colors flex items-center gap-1">
                      Informeer <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Couture */}
          <div className="mt-16 bg-[#2C1F16] rounded-3xl p-10 lg:p-14 text-center">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">{t.services.custom.title}</h2>
            <p className="text-warm-gray-light text-lg max-w-2xl mx-auto mb-8">{t.services.custom.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold text-lg hover:shadow-[0_4px_30px_rgba(195,138,79,0.5)] transition-all duration-300 hover:scale-105">
                {t.services.custom.cta}
              </Link>
              <a href="https://www.mepretaporter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 rounded-full border-2 border-cognac/40 text-cream font-semibold text-lg hover:bg-cognac/10 transition-all duration-300">
                Bekijk Mepretaporter →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Bespoke Section */}
      <section className="py-24 bg-[#0a0a0a] grain-overlay">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-luxury text-cognac mb-4 block">Exclusief</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Bespoke & Heritage</h2>
            <p className="text-warm-gray max-w-2xl mx-auto">Voor kostbare stukken en unieke commissions bieden wij een premium traject met persoonlijke aandacht op het hoogste niveau.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 border border-cognac/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cognac to-gold flex items-center justify-center">
                  <svg className="w-5 h-5 text-black-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-cream">Heritage Restauratie</h3>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">Vakkundige restauratie van waardevolle vintage stukken. Periodiek hardware, kleurmatching, onzichtbaar herstel. Voor merken als Schott, Belstaff, Aero, Vanson en andere heritage labels.</p>
              <div className="flex items-center justify-between pt-4 border-t border-cream/10">
                <span className="font-serif text-cognac">Vanaf €1.200</span>
                <Link href="/contact" className="text-cognac text-xs font-medium hover:text-gold transition-colors">Informeer →</Link>
              </div>
            </div>
            <div className="glass rounded-2xl p-8 border border-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-cognac flex items-center justify-center">
                  <svg className="w-5 h-5 text-black-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-cream">Full Bespoke Commissions</h3>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">Volledig op maat ontworpen en vervaardigd uit geselecteerde Europese leders. Persoonlijke consultatie, meerdere pasbeurten, onbeperkte opties in kleur, hardware en design.</p>
              <div className="flex items-center justify-between pt-4 border-t border-cream/10">
                <span className="font-serif text-gold">Vanaf €3.500</span>
                <Link href="/contact" className="text-gold text-xs font-medium hover:text-cream transition-colors">Verzoek Consult →</Link>
              </div>
            </div>
          </div>
          <p className="text-center text-warm-gray text-xs mt-8">Internationale klanten welkom · Verzending per verzekerde koerier · Remote consultaties mogelijk</p>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-24 bg-[#0a0a0a] border-t border-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-cream mb-4">Bekijk Ons Vakmanschap</h3>
            <p className="text-warm-gray max-w-xl mx-auto">Volg Maurice op YouTube en ontdek hoe wij leren jassen transformeren — van reparatie tot complete redesign.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden border border-cognac/20">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed?listType=user_uploads&list=MauriceVerlinden" title="DrJacket — Maurice Verlinden YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="font-serif text-xl font-bold text-cream mb-3">35+ Jaar Leer Expertise op Video</h4>
              <p className="text-warm-gray leading-relaxed mb-6">Van ritsvervanging tot complete revival — bekijk tutorials, voor-en-na transformaties, en ontdek het vakmanschap achter elke steek.</p>
              <a
                href="https://www.youtube.com/@MauriceVerlinden"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream/10 text-warm-gray hover:text-cream hover:border-cognac/30 transition-all duration-300 text-sm font-medium self-start"
              >
                <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                Bekijk ons YouTube kanaal →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
