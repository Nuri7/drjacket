'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useInView } from '@/lib/useInView';
import { img } from '@/lib/basePath';

export default function AboutPage() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <>
      {/* Hero — screenshot 2 style (portrait left, story right) */}
      <section className="section-cream pt-28 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-end">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-t-2xl lg:rounded-2xl overflow-hidden animate-fade-in-up">
              <Image src={img('/images/maurice-portrait.png')} alt="Maurice Eduard Verlinden" fill className="object-cover object-top" priority />
            </div>
            <div className="py-12 lg:py-20 animate-fade-in-up animate-delay-200">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{color: '#1a1410'}}>Maurice Eduard:</h1>
              <p className="font-serif text-2xl sm:text-3xl text-cognac italic mb-8">De kunst van leder</p>
              <div className="space-y-5">
                {t.about.bio.map((paragraph, i) => (
                  <p key={i} className="text-[#5a4d3e] leading-relaxed">{paragraph}</p>
                ))}
              </div>
              <blockquote className="mt-8 border-l-2 border-cognac pl-6">
                <p className="font-serif text-lg italic" style={{color: '#1a1410'}}>{t.about.quote}</p>
                <cite className="text-sm text-[#8B7D6B] mt-2 block not-italic">— Maurice Eduard Verlinden</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Timeline — screenshot 2 zigzag style */}
      <section className="py-24 bg-[#0a0a0a]" ref={ref}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-cream text-center mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Een Erfenis van Vakmanschap</h2>
          <p className={`text-warm-gray text-lg text-center mb-16 ${isInView ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>Van ambacht tot meesterschap — drie decennia leer.</p>
          <div className="space-y-12">
            {[
              { year: '1990', title: 'Prototype Styling', desc: 'Opgericht in Amsterdam. Gericht op leerbewerking en maatwerk voor de Amsterdam fashion scene.', side: 'left' },
              { year: '1995', title: 'AMFI Opleiding', desc: 'Studie aan het Amsterdam Fashion Institute. Academische kennis gecombineerd met jarenlange praktijkervaring.', side: 'right' },
              { year: '2005', title: 'Europese Leerleveranciers', desc: 'Start samenwerking met toonaangevende leerlooierijen in Frankrijk, Italië en Portugal. Alleen de beste leders.', side: 'left' },
              { year: '2015', title: '1.000+ Creaties', desc: 'Mijlpaal: meer dan duizend op maat gemaakte stukken. Van restauratie tot complete ontwerpen.', side: 'right' },
              { year: '2024', title: 'DrJacket', desc: 'De geboorte van DrJacket. Online aanwezigheid vanuit het atelier aan de Overtoom in Amsterdam.', side: 'left' },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-6 ${item.side === 'right' ? 'md:flex-row-reverse md:text-right' : ''} ${isInView ? `animate-fade-in-up animate-delay-${(i + 2) * 100}` : 'opacity-0'}`}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cognac to-gold flex items-center justify-center text-black-deep font-serif font-bold text-sm shrink-0">{item.year}</div>
                <div className="glass rounded-2xl p-6 flex-1">
                  <h3 className="font-serif text-lg font-bold text-cream mb-2">{item.title}</h3>
                  <p className="text-sm text-warm-gray leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier in Focus — photo grid (screenshot 2) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream text-center mb-14">Het Atelier in Beeld</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[img('/images/atelier-cinematic.png'), img('/images/hands-crafting.png'), img('/images/leather-texture.png'), img('/images/craft-detail.png')].map((src, i) => (
              <div key={i} className={`relative rounded-xl overflow-hidden ${i === 1 ? 'aspect-[3/4]' : 'aspect-square'} group`}>
                <Image src={src} alt={`Atelier detail ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black-deep/10 group-hover:bg-black-deep/30 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kernfeiten */}
      <section className="section-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-2xl font-bold text-center mb-10" style={{color: '#1a1410'}}>Kernfeiten</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📍', label: 'Overtoom 336, Amsterdam' },
              { icon: '🎓', label: 'AMFI Amsterdam' },
              { icon: '🇫🇷🇮🇹🇵🇹', label: 'Premium Europees Leer' },
              { icon: '✨', label: '1.500+ Unieke Creaties' },
            ].map((f, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-2">{f.icon}</div>
                <p className="text-sm font-medium" style={{color: '#3a3228'}}>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
