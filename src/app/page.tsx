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
      <Image src={img('/images/maurice-portrait.png')} alt="Maurice Eduard Verlinden in his leather atelier" fill className="object-cover object-top" priority quality={90} />
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

/* ─── Pillars (cream section inspired by screenshot 1) ─── */
function Pillars() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  const pillars = [
    { icon: '🕰️', value: t.why.stats.years, label: t.why.stats.yearsLabel, desc: 'Decennia aan specialistische kennis in het bewerken van leder. Wij begrijpen de structuur en het karakter van elk type leer.' },
    { icon: '♻️', value: '', label: 'Duurzaamheid', desc: 'Wij geven nieuw leven aan bestaande stukken. Reparatie boven vervanging — dat is de kern van onze filosofie.' },
    { icon: '✂️', value: '', label: 'Ambachtelijk Vakmanschap', desc: 'Elke steek is met precisie gezet. Wij combineren traditionele technieken met moderne precisie.' },
  ];
  return (
    <section className="section-cream py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((p, i) => (
            <div key={i} className={`text-center ${isInView ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : 'opacity-0'}`}>
              <div className="text-4xl mb-4">{p.icon}</div>
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
    { img: img('/images/before-after.png'), title: 'Restauratie & Reparatie', desc: 'Ritsen, scheuren, voering — vakkundig hersteld tot originele staat.', price: 'Vanaf €95' },
    { img: img('/images/gallery-cognac.png'), title: 'Restyling & Fit', desc: 'Geef uw jas een moderne pasvorm. Op maat gemaakt voor uw lichaam.', price: '€295' },
    { img: img('/images/gallery-black.png'), title: 'Custom Couture', desc: 'Op maat gemaakte leren kleding uit de beste Europese leders.', price: 'Op aanvraag' },
  ];
  return (
    <section className="py-24 bg-[#0a0a0a]" id="expertise" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
          <div>
            <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Ons Vakmanschap</h2>
            <p className={`text-warm-gray text-lg max-w-lg ${isInView ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>{t.services.subtitle}</p>
          </div>
          <Link href="/diensten" className={`text-cognac hover:text-gold font-medium flex items-center gap-1 mt-4 md:mt-0 transition-colors ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Bekijk alle diensten <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className={`service-card group ${isInView ? `animate-fade-in-up animate-delay-${(i + 2) * 100}` : 'opacity-0'}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#1a1410] mb-2">{card.title}</h3>
                <p className="text-sm text-[#5a4d3e] leading-relaxed mb-4">{card.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-cognac text-lg">{card.price}</span>
                  <Link href="/contact" className="px-5 py-2 rounded-full bg-black-deep text-cream text-xs font-semibold hover:bg-cognac transition-colors">
                    Boek Nu
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

/* ─── The Artisan's Journey (screenshot 3 process steps) ─── */
function ArtisanJourney() {
  const { ref, isInView } = useInView();
  const steps = [
    { num: '1', title: 'Intake', desc: 'Wij bekijken uw kledingstuk, bespreken uw wensen en geven een persoonlijk advies en offerte.' },
    { num: '2', title: 'Atelier Vakwerk', desc: 'Onze meester-leerbewerker voert de reparatie of restyling uit met uiterste precisie en zorg.' },
    { num: '3', title: 'Eindcontrole', desc: 'U past het resultaat. Pas als u 100% tevreden bent, is het werk compleet.' },
  ];
  return (
    <section className="section-cream py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`font-serif text-3xl sm:text-4xl font-bold mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Het Traject van de Vakman</h2>
        <p className={`text-[#5a4d3e] text-lg mb-16 ${isInView ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>Van eerste consult tot de laatste steek — kwaliteit en een perfecte pasvorm gegarandeerd.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className={`flex flex-col items-center ${isInView ? `animate-fade-in-up animate-delay-${(i + 2) * 100}` : 'opacity-0'}`}>
              <div className={`step-circle ${i === 1 ? 'step-circle-active' : 'step-circle-outline'} mb-5`}>{s.num}</div>
              <h3 className="font-serif text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-[#5a4d3e] leading-relaxed">{s.desc}</p>
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
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a]" id="about-preview" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`relative rounded-2xl overflow-hidden aspect-[3/4] ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Image src={img('/images/maurice-portrait.png')} alt="Maurice Eduard Verlinden — Meester Leerbewerker" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black-deep/40 to-transparent" />
          </div>
          <div className={`${isInView ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6">{t.about.badge}</span>
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

/* ─── Testimonials ─── */
function Testimonials() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section className="section-cream py-24" id="testimonials" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="flex justify-center gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-2xl text-[#D4A017]">★</span>)}</div>
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold mb-3 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>{t.testimonials.title}</h2>
          <p className={`text-[#5a4d3e] text-lg mb-14 ${isInView ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>{t.testimonials.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.slice(0, 3).map((review, i) => (
            <div key={i} className={`bg-white rounded-2xl p-8 shadow-sm ${isInView ? `animate-fade-in-up animate-delay-${(i + 2) * 100}` : 'opacity-0'}`}>
              <p className="text-[#3a3228] leading-relaxed mb-6 italic font-serif">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-cream-dark">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cognac to-gold flex items-center justify-center text-white font-bold text-sm">{review.name.charAt(0)}</div>
                <div><p className="text-sm font-semibold text-[#1a1410]">{review.name}</p><p className="text-xs text-[#8B7D6B]">Google Review</p></div>
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

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ExpertisePreview />
      <ArtisanJourney />
      <AboutPreview />
      <GalleryPreview />
      <Testimonials />
      <MepretapBanner />
      <FinalCTA />
    </>
  );
}
