'use client';
import ThemeToggle from './ThemeToggle'; import {useI18n} from './Language'; import {useState} from 'react';
const langs=[{code:'tr',label:'TR'},{code:'en',label:'EN'},{code:'ar',label:'AR'},{code:'zh',label:'中文'},{code:'ja',label:'日本語'}] as const;
export default function Nav(){ const {t,setLang,lang}=useI18n(); const [open,setOpen]=useState(false);
  const items=[{href:'#about',label:t('nav_about')},{href:'#ventures',label:t('nav_ventures')},{href:'#health',label:t('nav_health')},{href:'#speaking',label:t('nav_speaking')},{href:'#contact',label:t('nav_contact')}];
  return (<header className="sticky top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="#" className="font-semibold">İlker Kabacık</a>
      <nav className="hidden md:flex items-center gap-5">
        {items.map(i=><a key={i.href} href={i.href}>{i.label}</a>)}
        <ThemeToggle/>
        <div className="flex gap-2">{langs.map(l=><button key={l.code} className={`px-2 py-1 rounded ${lang===l.code?'bg-black text-white dark:bg-white dark:text-black':''}`} onClick={()=>setLang(l.code as any)}>{l.label}</button>)}</div>
      </nav>
      <button className="md:hidden px-3 py-2 border rounded" onClick={()=>setOpen(!open)}>☰</button>
    </div>
    {open && (<div className="md:hidden border-t"><div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
      {items.map(i=><a key={i.href} className="block" href={i.href} onClick={()=>setOpen(false)}>{i.label}</a>)}
      <ThemeToggle/>
      <div className="flex gap-2">{langs.map(l=><button key={l.code} className={`px-2 py-1 rounded ${lang===l.code?'bg-black text-white dark:bg-white dark:text-black':''}`} onClick={()=>setLang(l.code as any)}>{l.label}</button>)}</div>
    </div></div>)}
  </header>);
}
