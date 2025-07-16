import en from '../i18n/en.json';
import id from '../i18n/id.json';

const translations = {
  en,
  id,
};

export const useI18n = (lang: 'en' | 'id') => {
  const t = (key: string) => {
    return key.split('.').reduce((obj, i) => (obj as any)[i], translations[lang]);
  };
  return { t };
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return 'en';
}