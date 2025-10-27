'use client';
import {useI18n} from './Language';
export function Hero(){ const {t}=useI18n(); return (<section className="py-16"><div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
  <div><h1 className="text-4xl font-extrabold">{t('hero_title')}</h1><p className="mt-3 text-lg opacity-80">{t('hero_sub')}</p>
    <div className="mt-6 flex gap-3"><a href="#ventures" className="px-4 py-2 rounded-xl border"> {t('cta_view_work')} </a><a href="#contact" className="px-4 py-2 rounded-xl border"> {t('cta_contact')} </a></div></div>
  <div className="border rounded-2xl p-6">Premium • Minimal • Fast</div>
</div></section>); }
export function About(){ const {t}=useI18n(); return (<section id="about" className="py-16 border-t"><div className="max-w-6xl mx-auto px-4">
  <h2 className="text-2xl font-bold mb-3">{t('about_title')}</h2><p className="opacity-80">{t('about_body')}</p>
</div></section>); }
export function Ventures(){ const {t}=useI18n(); const items=[{title:'PayUSDT',desc:t('ventures_payusdt')},{title:'AI & Software',desc:t('ventures_ai')},{title:'Logistics & Industry',desc:t('ventures_industry')}];
  return (<section id="ventures" className="py-16 border-t"><div className="max-w-6xl mx-auto px-4"><h2 className="text-2xl font-bold mb-6">{t('ventures_title')}</h2>
    <div className="grid md:grid-cols-3 gap-6">{items.map(x=><div key={x.title} className="border rounded-2xl p-6"><div className="font-semibold">{x.title}</div><p className="text-sm opacity-80 mt-2">{x.desc}</p></div>)}</div>
  </div></section>); }
export function Health(){ const {t}=useI18n(); return (<section id="health" className="py-16 border-t"><div className="max-w-6xl mx-auto px-4"><h2 className="text-2xl font-bold mb-3">{t('health_title')}</h2><p className="opacity-80">{t('health_body')}</p></div></section>); }
export function Speaking(){ const {t}=useI18n(); return (<section id="speaking" className="py-16 border-t"><div className="max-w-6xl mx-auto px-4"><h2 className="text-2xl font-bold mb-3">{t('speaking_title')}</h2><p className="opacity-80">{t('speaking_body')}</p></div></section>); }
export function Contact(){ const {t}=useI18n(); return (<section id="contact" className="py-16 border-t"><div className="max-w-6xl mx-auto px-4"><h2 className="text-2xl font-bold mb-3">{t('contact_title')}</h2><p className="opacity-80">{t('contact_body')}</p><div className="mt-4"><a className="px-4 py-2 rounded-xl border" href="mailto:ilkerkabacik@defipayusdt.io">ilkerkabacik@defipayusdt.io</a></div></div></section>); }
