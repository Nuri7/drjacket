'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { useInView } from '@/lib/useInView';
import { img } from '@/lib/basePath';

/* ─── Hero ─── */
function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      <Image src={img('/images/maurice-hero.png')} alt="Maurice Eduard Verlinden in his leather atelier" fill className="object-cover object-center" priority quality={90} />
      <div className="absolute inset-0 bg-gradient-to-r from-black-deep/90 via-black-deep/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-transparent to-black-deep/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cognac/40 text-cognac text-xs tracking-[0.25em] uppercase mb-8 animate-fade-in">
            Amsterdam · Sinds 1990
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1] mb-6 animate-fade-in-up">
            Dé (k)Leermaker<br />
            <span className="text-shimmer">voor Uw beste</span><br />
            Leren Jas
          </h1>
          <p className="text-warm-gray-light text-lg sm:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up animate-delay-200">
            {t.hero.subline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold text-lg hover:shadow-[0_4px_30px_rgba(195,138,79,0.5)] transition-all duration-300 hover:scale-105 text-center">
              {t.hero.cta}
            </Link>
            <a href="https://wa.me/31633588993" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border-2 border-[#25D366]/60 text-[#25D366] font-semibold text-lg hover:bg-[#25D366]/10 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp ons
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-600">
        <span className="text-xs text-warm-gray tracking-widest uppercase">{t.hero.scroll}</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cognac to-transparent animate-bounce" />
      </div>
    </section>
  );
}

/* ─── Pillars — refined SVG icons ─── */
function Pillars() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  const icons = [
    <svg key="clock" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="leaf" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9m0-18c-4.97 0-9 4.03-9 9s4.03 9 9 9m0-18v18m4.5-13.5L12 12l-4.5-4.5" /></svg>,
    <svg key="scissors" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm9.304 0l-1.536.887M17.152 8.25a3 3 0 105.196-3 3 3 0 00-5.196 3zM12 17.25l-3.616-2.088M12 17.25l3.616-2.088M12 17.25v3" /></svg>,
  ];
  const pillars = [
    { value: t.why.stats.years, label: t.why.stats.yearsLabel, desc: 'Decennia aan specialistische kennis in het bewerken van leder.' },
    { value: '', label: 'Duurzaamheid', desc: 'Reparatie boven vervanging — dat is de kern van onze filosofie.' },
    { value: '', label: 'Ambachtelijk Vakmanschap', desc: 'Traditionele technieken, moderne precisie. Elke steek met zorg gezet.' },
  ];
  return (
    <section className="section-cream py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((p, i) => (
            <div key={i} className={`text-center ${isInView ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : 'opacity-0'}`}>
              <div className="pillar-icon">{icons[i]}</div>
              {p.value && <div className="font-serif text-3xl font-bold text-brown-leather mb-1">{p.value}</div>}
              <h3 className="font-serif text-xl font-bold mb-3">{p.label}</h3>
              <p className="text-sm leading-relaxed max-w-xs mx-auto">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Our Expertise (screenshot 1 style service cards) ─── */
function ExpertisePreview() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  const cards = [
    { img: img('/images/zipper-repair.png'), title: 'Restauratie & Reparatie', desc: 'Ritsen, scheuren, voering — vakkundig hersteld tot originele staat.', price: 'Vanaf €95' },
    { img: img('/images/leather-restoration.png'), title: 'Restyling & Fit', desc: 'Geef uw jas een moderne pasvorm. Op maat gemaakt voor uw lichaam.', price: '€295' },
    { img: img('/images/gallery-black.png'), title: 'Custom Couture', desc: 'Op maat gemaakte leren kleding uit de beste Europese leders.', price: 'Op aanvraag' },
  ];
  return (
    <section className="py-24 bg-[#0a0a0a] grain-overlay" id="expertise" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
          <div>
            <span className={`label-luxury text-cognac mb-4 block ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>Ons Atelier</span>
            <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Vakmanschap op Maat</h2>
            <p className={`text-warm-gray text-lg max-w-lg ${isInView ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>{t.services.subtitle}</p>
          </div>
          <Link href="/diensten" className={`text-cognac hover:text-gold font-medium flex items-center gap-1 mt-4 md:mt-0 transition-colors ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Ontdek alle diensten <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className={`service-card group ${isInView ? `animate-fade-in-up animate-delay-${(i + 2) * 100}` : 'opacity-0'}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-cream mb-2">{card.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-4">{card.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-warm-gray">{card.price}</span>
                  <Link href="/diensten" className="text-cognac text-xs font-medium hover:text-gold transition-colors flex items-center gap-1">
                    Meer informatie <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── The Artisan's Experience — editorial narrative ─── */
function ArtisanJourney() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-24 bg-[#0a0a0a] grain-overlay" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`label-luxury text-cognac mb-4 block ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>Uw Ervaring</span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-cream mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Een Persoonlijk Traject</h2>
          <p className={`text-warm-gray text-lg max-w-xl mx-auto ${isInView ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>Geen haastwerk, geen lopende band. Elk stuk krijgt de volle aandacht die het verdient.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: img('/images/maurice-portrait.png'), title: 'Het Persoonlijk Consult', desc: 'U bespreekt uw wensen met Maurice in het atelier. Samen bepalen we de beste aanpak voor uw stuk.' },
            { img: img('/images/hands-crafting.png'), title: 'Vakmanschap in het Atelier', desc: 'Met zorg en precisie wordt uw kledingstuk bewerkt. Alleen de beste materialen en technieken.' },
            { img: img('/images/leather-restoration.png'), title: 'Uw Stuk, Herleefd', desc: 'Het eindresultaat wordt persoonlijk aan u gepresenteerd. Pas als u tevreden bent, is het werk compleet.' },
          ].map((s, i) => (
            <div key={i} className={`text-center ${isInView ? `animate-fade-in-up animate-delay-${(i + 2) * 100}` : 'opacity-0'}`}>
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 to-transparent" />
              </div>
              <h3 className="font-serif text-lg font-bold text-cream mb-2">{s.title}</h3>
              <p className="text-sm text-warm-gray leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Maurice (screenshot 2 style — portrait left, story right) ─── */
function AboutPreview() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a] grain-overlay" id="about-preview" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`relative rounded-2xl overflow-hidden aspect-[3/4] ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Image src={img('/images/maurice-portrait.png')} alt="Maurice Eduard Verlinden — Meester Leerbewerker" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black-deep/40 to-transparent" />
          </div>
          <div className={`${isInView ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
            <span className="label-luxury inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac mb-6">{t.about.badge}</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-2">Maurice Eduard:</h2>
            <p className="font-serif text-2xl sm:text-3xl text-cognac italic mb-8">De kunst van leder</p>
            <p className="text-warm-gray-light leading-relaxed mb-6">{t.about.bio[0]}</p>
            <p className="text-warm-gray-light leading-relaxed mb-8">{t.about.bio[1]}</p>
            <blockquote className="border-l-2 border-cognac pl-6 mb-8">
              <p className="font-serif text-lg text-cream italic">{t.about.quote}</p>
              <cite className="text-sm text-warm-gray mt-2 block not-italic">— Maurice Eduard Verlinden</cite>
            </blockquote>
            <Link href="/over-maurice" className="inline-flex items-center gap-2 text-cognac hover:text-gold font-medium transition-colors">
              Lees het volledige verhaal <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery Preview ─── */
function GalleryPreview() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="relative py-24 lg:py-32 leather-bg" id="gallery-preview" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>{t.gallery.title}</h2>
          <p className={`text-warm-gray text-lg ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>{t.gallery.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[img('/images/hands-crafting.png'), img('/images/atelier-cinematic.png'), img('/images/gallery-cognac.png'), img('/images/gallery-burgundy.png')].map((src, i) => (
            <div key={i} className={`relative rounded-xl overflow-hidden ${i === 0 || i === 3 ? 'aspect-square' : 'aspect-[3/4]'} group ${isInView ? `animate-fade-in-up animate-delay-${(i + 2) * 100}` : 'opacity-0'}`}>
              <Image src={src} alt={`Atelier ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black-deep/10 group-hover:bg-black-deep/30 transition-colors duration-500" />
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

/* ─── Testimonials — luxury trust signals ─── */
function Testimonials() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="section-cream py-24" id="testimonials" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className={`label-luxury text-cognac mb-4 block ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>{t.testimonials.badge}</span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold mb-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>{t.testimonials.title}</h2>
          <p className={`text-[#5a4d3e] text-base mb-6 ${isInView ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>{t.testimonials.subtitle}</p>
          <div className="flex justify-center gap-1">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-lg text-[#D4A017]">★</span>)}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.slice(0, 3).map((review, i) => (
            <div key={i} className={`relative bg-white/80 rounded-2xl p-8 ${isInView ? `animate-fade-in-up animate-delay-${(i + 2) * 100}` : 'opacity-0'}`}>
              <span className="quote-mark">&ldquo;</span>
              <p className="text-[#3a3228] leading-relaxed mb-6 italic font-serif pt-6">{review.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e8e0d4]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cognac to-gold flex items-center justify-center text-white font-bold text-sm">{review.name.charAt(0)}</div>
                <p className="text-sm font-medium text-[#1a1410]">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Mepretaporter Banner ─── */
function MepretapBanner() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-16 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mepretap-banner rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex-1">
            <span className="text-cognac text-xs tracking-[0.2em] uppercase font-medium">Onze Zuster-Collectie</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream mt-2 mb-3">ME by Mauricéduard</h3>
            <p className="text-warm-gray text-sm leading-relaxed">Ontdek onze exclusieve collectie op maat gemaakte leren kleding. Dezelfde kwaliteit leders, hetzelfde vakmanschap — nu als nieuwe creatie.</p>
          </div>
          <a href="https://www.mepretaporter.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold hover:shadow-[0_4px_20px_rgba(195,138,79,0.4)] transition-all duration-300 whitespace-nowrap">
            Bezoek Mepretaporter →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA (screenshot 2 style — cinematic background) ─── */
function FinalCTA() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="final-cta" ref={ref}>
      <Image src={img('/images/atelier-cinematic.png')} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-black-deep/85" />
      <div className={`relative z-10 max-w-3xl mx-auto px-4 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">{t.cta.title}</h2>
        <p className="text-warm-gray-light text-lg mb-10">{t.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-10 py-4 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold text-lg hover:shadow-[0_4px_30px_rgba(195,138,79,0.5)] transition-all duration-300 hover:scale-105">
            {t.cta.button}
          </Link>
          <a href="https://wa.me/31633588993" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full border-2 border-[#25D366]/50 text-[#25D366] font-semibold text-lg hover:bg-[#25D366]/10 transition-all duration-300 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── YouTube — cinematic documentary style ─── */
function YouTubeShowcase() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-24 bg-[#0a0a0a] grain-overlay" id="youtube" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className={`label-luxury text-cognac mb-4 block ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>Kijk Mee in het Atelier</span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-cream mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Vakmanschap op Video</h2>
          <p className={`text-warm-gray max-w-xl mx-auto ${isInView ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>Ontdek hoe wij leren jassen transformeren — van reparatie tot complete redesign.</p>
        </div>
        <div className={`aspect-video rounded-2xl overflow-hidden border border-cognac/15 shadow-[0_8px_60px_rgba(0,0,0,0.5)] ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed?listType=user_uploads&list=MauriceVerlinden" title="DrJacket — Maurice Verlinden" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
        </div>
        <div className="text-center mt-8">
          <a href="https://www.youtube.com/@MauriceVerlinden" target="_blank" rel="noopener noreferrer" className="text-warm-gray hover:text-cognac text-sm transition-colors inline-flex items-center gap-2">
            Meer video’s op YouTube <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ExpertisePreview />
      <ArtisanJourney />
      <AboutPreview />
      <YouTubeShowcase />
      <GalleryPreview />
      <Testimonials />
      <MepretapBanner />
      <FinalCTA />
    </>
  );
}
