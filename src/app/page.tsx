'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { useInView } from '@/lib/useInView';

function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      <Image src="/images/hero-atelier.png" alt="DrJacket Atelier" fill className="object-cover" priority quality={90} />
      <div className="absolute inset-0 bg-gradient-to-b from-black-deep/70 via-black-deep/50 to-black-deep" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-shimmer font-serif text-sm sm:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in">
          {t.hero.subline}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-8 animate-fade-in-up">
          {t.hero.headline}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold text-lg hover:shadow-[0_4px_30px_rgba(195,138,79,0.5)] transition-all duration-300 hover:scale-105">
            {t.hero.cta}
          </Link>
          <Link href="/diensten" className="px-8 py-4 rounded-full border border-cognac/40 text-cream font-medium text-lg hover:bg-cognac/10 transition-all duration-300">
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-600">
        <span className="text-xs text-warm-gray tracking-widest uppercase">{t.hero.scroll}</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cognac to-transparent animate-bounce" />
      </div>
    </section>
  );
}

function WhySection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  const stats = [
    { value: t.why.stats.years, label: t.why.stats.yearsLabel },
    { value: t.why.stats.pieces, label: t.why.stats.piecesLabel },
    { value: t.why.stats.rating, label: t.why.stats.ratingLabel, icon: '⭐' },
    { value: t.why.stats.sustainable, label: t.why.stats.sustainableLabel },
  ];
  return (
    <section className="relative py-24 lg:py-32 leather-bg" id="why" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>{t.why.badge}</span>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>{t.why.title}</h2>
          <p className={`text-warm-gray text-lg max-w-2xl mx-auto ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>{t.why.subtitle}</p>
          <div className="section-divider mt-8" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`${isInView ? 'animate-slide-in-left animate-delay-300' : 'opacity-0'}`}>
            <p className="text-warm-gray-light text-lg leading-relaxed">{t.why.description}</p>
          </div>
          <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${isInView ? 'animate-slide-in-right animate-delay-400' : 'opacity-0'}`}>
            <Image src="/images/craft-detail.png" alt="Leather craftsmanship detail" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 to-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`glass rounded-2xl p-6 text-center hover-lift ${isInView ? `animate-scale-in animate-delay-${(i + 1) * 100}` : 'opacity-0'}`}>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-shimmer mb-1">{stat.icon || ''}{stat.value}</div>
              <div className="text-xs text-warm-gray uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a]" id="services-preview" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>{t.services.badge}</span>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>{t.services.title}</h2>
          <p className={`text-warm-gray text-lg ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>{t.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, i) => (
            <div key={i} className={`relative glass rounded-2xl p-6 hover-lift group ${isInView ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : 'opacity-0'} ${'popular' in service && service.popular ? 'ring-1 ring-cognac/50' : ''} ${'premium' in service && service.premium ? 'ring-1 ring-gold/50' : ''}`}>
              {'popular' in service && service.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cognac text-black-deep text-[10px] font-bold uppercase tracking-wider">Populair</span>}
              {'premium' in service && service.premium && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-cognac text-black-deep text-[10px] font-bold uppercase tracking-wider">Premium</span>}
              <div className="text-2xl font-serif font-bold text-shimmer mb-1">{service.price}</div>
              <h3 className="font-serif text-lg font-semibold text-cream mb-3">{service.title}</h3>
              <p className="text-sm text-warm-gray mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-xs text-warm-gray-light">
                    <svg className="w-3.5 h-3.5 text-cognac shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/diensten" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold hover:shadow-[0_4px_30px_rgba(195,138,79,0.5)] transition-all duration-300 hover:scale-105">
            {t.services.custom.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="relative py-24 lg:py-32 leather-bg" id="gallery-preview" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>{t.gallery.badge}</span>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>{t.gallery.title}</h2>
          <p className={`text-warm-gray text-lg ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>{t.gallery.subtitle}</p>
        </div>
        <div className={`max-w-4xl mx-auto ${isInView ? 'animate-scale-in animate-delay-300' : 'opacity-0'}`}>
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
            <Image src="/images/before-after.png" alt="Before and after leather jacket restoration" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="flex gap-4">
                <span className="px-3 py-1 rounded-full bg-red-900/80 text-cream text-xs font-medium">{t.gallery.before}</span>
                <span className="px-3 py-1 rounded-full bg-green-900/80 text-cream text-xs font-medium">{t.gallery.after}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {['/images/gallery-cognac.png', '/images/gallery-black.png', '/images/gallery-burgundy.png'].map((src, i) => (
            <div key={i} className={`relative rounded-2xl overflow-hidden aspect-square group ${isInView ? `animate-fade-in-up animate-delay-${(i + 4) * 100}` : 'opacity-0'}`}>
              <Image src={src} alt={`Gallery piece ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black-deep/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/galerij" className="inline-flex items-center gap-2 text-cognac hover:text-gold font-medium transition-colors">
            {t.gallery.viewAll} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a]" id="about-preview" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`relative rounded-2xl overflow-hidden aspect-[3/4] ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Image src="/images/atelier-interior.png" alt="DrJacket Atelier Interior" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/30" />
          </div>
          <div className={`${isInView ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6">{t.about.badge}</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-3">{t.about.title}</h2>
            <p className="text-cognac font-serif italic mb-8">{t.about.subtitle}</p>
            <p className="text-warm-gray-light leading-relaxed mb-6">{t.about.bio[0]}</p>
            <p className="text-warm-gray-light leading-relaxed mb-8">{t.about.bio[1]}</p>
            <blockquote className="border-l-2 border-cognac pl-6 mb-8">
              <p className="font-serif text-lg text-cream italic">{t.about.quote}</p>
              <cite className="text-sm text-warm-gray mt-2 block not-italic">— Maurice Eduard Verlinden</cite>
            </blockquote>
            <Link href="/over-maurice" className="inline-flex items-center gap-2 text-cognac hover:text-gold font-medium transition-colors">
              Lees meer over Maurice <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="relative py-24 lg:py-32 leather-bg" id="testimonials" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>{t.testimonials.badge}</span>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>{t.testimonials.title}</h2>
          <p className={`text-warm-gray text-lg ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>{t.testimonials.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.testimonials.items.map((review, i) => (
            <div key={i} className={`glass rounded-2xl p-8 hover-lift ${isInView ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : 'opacity-0'}`}>
              <div className="flex gap-1 mb-4">{Array.from({ length: review.rating }).map((_, si) => <span key={si} className="text-gold text-lg">★</span>)}</div>
              <p className="text-cream/90 leading-relaxed mb-6 italic font-serif">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cognac to-gold flex items-center justify-center text-black-deep font-bold text-sm">{review.name.charAt(0)}</div>
                <div><p className="text-sm font-medium text-cream">{review.name}</p><p className="text-xs text-warm-gray">Google Review</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="final-cta" ref={ref}>
      <Image src="/images/craft-detail.png" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-black-deep/85" />
      <div className={`relative z-10 max-w-3xl mx-auto px-4 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">{t.cta.title}</h2>
        <p className="text-warm-gray-light text-lg mb-10">{t.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-10 py-4 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold text-lg hover:shadow-[0_4px_30px_rgba(195,138,79,0.5)] transition-all duration-300 hover:scale-105">
            {t.cta.button}
          </Link>
          <a href="tel:+31633588993" className="px-10 py-4 rounded-full border border-cognac/40 text-cream font-medium text-lg hover:bg-cognac/10 transition-all duration-300 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>
            {t.cta.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhySection />
      <ServicesPreview />
      <GalleryPreview />
      <AboutPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
