'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useInView } from '@/lib/useInView';

const blogImages = ['/images/craft-detail.png', '/images/gallery-cognac.png', '/images/before-after.png'];

export default function BlogPage() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image src="/images/leather-texture.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black-deep/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6">{t.blog.badge}</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4">{t.blog.title}</h1>
          <p className="text-warm-gray text-lg">{t.blog.subtitle}</p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.blog.posts.map((post, i) => (
              <article key={i} className={`glass rounded-2xl overflow-hidden hover-lift group ${isInView ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={blogImages[i]} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-cognac/90 text-black-deep text-[10px] font-bold uppercase tracking-wider">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-warm-gray mb-3">{post.date}</p>
                  <h2 className="font-serif text-lg font-semibold text-cream mb-3 group-hover:text-cognac transition-colors">{post.title}</h2>
                  <p className="text-sm text-warm-gray leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-cognac font-medium group-hover:gap-2 transition-all">
                    {t.blog.readMore} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-warm-gray mt-16 font-serif italic text-lg">{t.blog.comingSoon}</p>
        </div>
      </section>
    </>
  );
}
