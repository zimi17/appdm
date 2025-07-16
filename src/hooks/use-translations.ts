import { useI18n } from './use-i18n';

export const useTranslations = (lang: 'en' | 'id') => {
  const { t } = useI18n(lang);
  return t;
};
