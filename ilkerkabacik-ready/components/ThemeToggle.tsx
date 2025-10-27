'use client';
import {useTheme} from 'next-themes';
import {useEffect,useState} from 'react';
export default function ThemeToggle(){ const {theme,setTheme}=useTheme(); const [m,setM]=useState(false); useEffect(()=>setM(true),[]); if(!m) return null;
  const d=theme==='dark';
  return <button className="px-3 py-2 rounded-xl border" onClick={()=>setTheme(d?'light':'dark')} aria-label="Toggle Theme">{d?'🌙 Dark':'☀️ Light'}</button>;
}
