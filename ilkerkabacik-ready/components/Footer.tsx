import {useI18n} from './Language';
export default function Footer(){ const {t}=useI18n(); return (<footer className="border-t py-10"><div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-sm opacity-80">
  <p>© {new Date().getFullYear()} İlker Kabacık • {t('footer_rights')}</p>
  <div className="flex gap-4"><a href="mailto:ilkerkabacik@defipayusdt.io">Email</a><a href="https://github.com/" target="_blank">GitHub</a><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></div>
</div></footer>); }
