import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getAlternateUrls(url: URL, site: URL | string) {
  const path = url.pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  return {
    en: new URL(path, site).href,
    es: new URL(path === '/' ? '/es/' : `/es${path}`, site).href,
  };
}
