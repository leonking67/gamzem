'use client';
import React,{createContext,useContext,useEffect,useState} from 'react';
type Lang='tr'|'en'|'ar'|'zh'|'ja';
type Dict=Record<string,string>;
const C=createContext<any>(null);
export function LanguageProvider({children}:{children:React.ReactNode}){
  const [lang,setLang]=useState<Lang>('tr'); const [dict,setDict]=useState<Dict>({});
  useEffect(()=>{(async()=>{const r=await fetch(`/locales/${lang}.json`); setDict(await r.json()); document.documentElement.dir=(lang==='ar')?'rtl':'ltr'; document.documentElement.lang=lang; })();},[lang]);
  const t=(k:string)=>dict[k]??k;
  return <C.Provider value={{lang,setLang,t}}>{children}</C.Provider>;
}
export function useI18n(){const ctx=useContext(C); if(!ctx) throw new Error('useI18n inside provider'); return ctx;}
