'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useInView } from '@/lib/useInView';

export default function AboutPage() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image src="/images/atelier-interior.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black-deep/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6 animate-fade-in">{t.about.badge}</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4 animate-fade-in-up">{t.about.title}</h1>
          <p className="text-cognac font-serif italic text-lg animate-fade-in-up animate-delay-200">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-[#0a0a0a]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Portrait */}
            <div className={`lg:col-span-2 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="sticky top-28">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image src="/images/hero-atelier.png" alt="Maurice Eduard Verlinden" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-deep/50 to-transparent" />
                </div>
                <div className="mt-6 glass rounded-2xl p-6">
                  <h3 className="font-serif text-lg font-semibold text-cream mb-4">Kernfeiten</h3>
                  <ul className="space-y-3 text-sm text-warm-gray-light">
                    <li className="flex items-center gap-3"><span className="text-cognac">📍</span> Overtoom 336, Amsterdam</li>
                    <li className="flex items-center gap-3"><span className="text-cognac">🎓</span> AMFI — Amsterdam Fashion Institute</li>
                    <li className="flex items-center gap-3"><span className="text-cognac">📅</span> Opgericht 1990 — Prototype Styling</li>
                    <li className="flex items-center gap-3"><span className="text-cognac">🇫🇷🇮🇹🇵🇹</span> Premium leders uit Europa</li>
                    <li className="flex items-center gap-3"><span className="text-cognac">✨</span> 1.500+ unieke creaties</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className={`lg:col-span-3 ${isInView ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
              <div className="space-y-6">
                {t.about.bio.map((paragraph, i) => (
                  <p key={i} className="text-warm-gray-light text-lg leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <blockquote className="my-12 border-l-2 border-cognac pl-8 py-4">
                <p className="font-serif text-2xl text-cream italic leading-relaxed">{t.about.quote}</p>
                <cite className="text-sm text-warm-gray mt-4 block not-italic">— Maurice Eduard Verlinden</cite>
              </blockquote>

              {/* Timeline */}
              <div className="mt-16">
                <h3 className="font-serif text-2xl font-bold text-cream mb-8">Tijdlijn</h3>
                <div className="space-y-8">
                  {[
                    { year: '1990', title: 'Oprichting Prototype Styling', desc: 'Maurice start zijn eigen atelier, gespecialiseerd in leerbewerking.' },
                    { year: '1995', title: 'AMFI Opleiding', desc: 'Academische kennis gecombineerd met praktijkervaring.' },
                    { year: '2005', title: 'Europese Leerleveranciers', desc: 'Start samenwerking met toonaangevende leerlooierijen in Frankrijk, Italië en Portugal.' },
                    { year: '2015', title: '1.000+ Creaties', desc: 'Mijlpaal bereikt met meer dan duizend op maat gemaakte stukken.' },
                    { year: '2024', title: 'DrJacket Lancering', desc: 'Online aanwezigheid en modern atelier aan de Overtoom in Amsterdam.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cognac to-gold flex items-center justify-center text-black-deep font-bold text-xs shrink-0">{item.year}</div>
                        {i < 4 && <div className="w-[1px] flex-1 bg-cognac/20 mt-2" />}
                      </div>
                      <div className="pb-8">
                        <h4 className="font-serif text-lg font-semibold text-cream mb-1">{item.title}</h4>
                        <p className="text-sm text-warm-gray">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
