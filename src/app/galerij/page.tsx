'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { img } from '@/lib/basePath';

const galleryItems = [
  { src: img('/images/before-after.png'), category: 'before-after', title: 'Full Restoration' },
  { src: img('/images/gallery-cognac.png'), category: 'custom', title: 'Cognac Biker' },
  { src: img('/images/gallery-black.png'), category: 'custom', title: 'Classic Black' },
  { src: img('/images/gallery-burgundy.png'), category: 'custom', title: 'Burgundy Racer' },
  { src: img('/images/craft-detail.png'), category: 'repair', title: 'Zip Repair Detail' },
  { src: img('/images/hero-atelier.png'), category: 'atelier', title: 'Atelier at Work' },
  { src: img('/images/atelier-interior.png'), category: 'atelier', title: 'Workshop Interior' },
  { src: img('/images/leather-texture.png'), category: 'materials', title: 'Premium Leather' },
];

const categories = ['all', 'before-after', 'custom', 'repair', 'atelier', 'materials'];

export default function GalleryPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image src={img('/images/gallery-cognac.png')} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black-deep/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6">{t.gallery.badge}</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4">{t.gallery.title}</h1>
          <p className="text-warm-gray text-lg">{t.gallery.subtitle}</p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat ? 'bg-gradient-to-r from-cognac to-gold text-black-deep' : 'border border-cream/10 text-warm-gray hover:text-cream hover:border-cognac/30'}`}>
                {cat === 'all' ? 'Alles' : cat === 'before-after' ? 'Voor & Na' : cat === 'custom' ? 'Custom' : cat === 'repair' ? 'Reparatie' : cat === 'atelier' ? 'Atelier' : 'Materialen'}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <button key={`${item.src}-${i}`} onClick={() => setLightbox(i)} className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer">
                <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black-deep/20 group-hover:bg-black-deep/50 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <p className="font-serif text-lg font-semibold text-cream">{item.title}</p>
                    <p className="text-xs text-cognac uppercase tracking-widest">{item.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black-deep/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-cream hover:text-cognac transition-colors" onClick={() => setLightbox(null)}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="relative max-w-5xl w-full aspect-[4/3] rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <Image src={filtered[lightbox].src} alt={filtered[lightbox].title} fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
