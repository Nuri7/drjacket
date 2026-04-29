'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { img } from '@/lib/basePath';

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image src={img('/images/atelier-interior.png')} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black-deep/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cognac/30 text-cognac text-xs tracking-[0.2em] uppercase mb-6">{t.contact.badge}</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4">{t.contact.title}</h1>
          <p className="text-warm-gray text-lg">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Address Card */}
              <div className="glass rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-cream mb-6">Atelier Locatie</h3>
                <ul className="space-y-5 text-warm-gray-light">
                  <li className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-cognac mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    <div><p className="font-medium text-cream">Overtoom 336</p><p>1054 JH Amsterdam</p></div>
                  </li>
                  <li className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-cognac shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    <a href="tel:+31633588993" className="text-cream hover:text-cognac transition-colors font-medium">+31633588993</a>
                  </li>
                </ul>
                <div className="flex gap-3 mt-6">
                  <a href="tel:+31633588993" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold text-sm hover:shadow-[0_4px_20px_rgba(195,138,79,0.4)] transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>
                    {t.nav.callNow}
                  </a>
                  <a href="https://wa.me/31633588993" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#25D366]/10 text-[#25D366] font-semibold text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="glass rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-cream mb-4">{t.contact.openingHours}</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between"><span className="text-warm-gray">{t.contact.hours.weekdays.split(':')[0]}:</span><span className="text-cream font-medium">10:00 – 18:00</span></li>
                  <li className="flex justify-between"><span className="text-warm-gray">{t.contact.hours.saturday.split(':')[0]}:</span><span className="text-cream font-medium">{t.contact.hours.saturday.split(': ')[1]}</span></li>
                  <li className="flex justify-between"><span className="text-warm-gray">{t.contact.hours.sunday.split(':')[0]}:</span><span className="text-cream font-medium">{t.contact.hours.sunday.split(': ')[1]}</span></li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-cognac/10 aspect-[4/3]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.2!2d4.8668!3d52.3602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOvertoom+336%2C+Amsterdam!5e0!3m2!1snl!2snl!4v1" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="DrJacket Atelier Location" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-semibold text-cream mb-2">{t.contact.formTitle}</h3>
                <p className="text-sm text-warm-gray mb-8">{t.contact.subtitle}</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cognac to-gold flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-black-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <p className="font-serif text-xl text-cream">{t.contact.formSuccess}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" id="intake-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="intake-name" className="block text-xs text-warm-gray uppercase tracking-widest mb-2">{t.contact.formName} *</label>
                        <input id="intake-name" type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream placeholder-warm-gray/50 text-sm" />
                      </div>
                      <div>
                        <label htmlFor="intake-email" className="block text-xs text-warm-gray uppercase tracking-widest mb-2">{t.contact.formEmail} *</label>
                        <input id="intake-email" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream placeholder-warm-gray/50 text-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="intake-phone" className="block text-xs text-warm-gray uppercase tracking-widest mb-2">{t.contact.formPhone}</label>
                        <input id="intake-phone" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream placeholder-warm-gray/50 text-sm" />
                      </div>
                      <div>
                        <label htmlFor="intake-service" className="block text-xs text-warm-gray uppercase tracking-widest mb-2">{t.contact.formService} *</label>
                        <select id="intake-service" required value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream text-sm appearance-none">
                          <option value="" className="bg-black-deep">{t.contact.selectService}</option>
                          <option value="zip" className="bg-black-deep">Rits Vervanging — €95</option>
                          <option value="tear" className="bg-black-deep">Scheurherstel — vanaf €149</option>
                          <option value="restyle" className="bg-black-deep">Restyling — €295</option>
                          <option value="revival" className="bg-black-deep">Revival &amp; Redesign — €495</option>
                          <option value="custom" className="bg-black-deep">Custom Couture</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="intake-message" className="block text-xs text-warm-gray uppercase tracking-widest mb-2">{t.contact.formMessage} *</label>
                      <textarea id="intake-message" required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream placeholder-warm-gray/50 text-sm resize-none" />
                    </div>
                    <button type="submit" id="intake-submit" className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-cognac to-gold text-black-deep font-semibold text-lg hover:shadow-[0_4px_30px_rgba(195,138,79,0.5)] transition-all duration-300 hover:scale-[1.02]">
                      {t.contact.formSubmit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
