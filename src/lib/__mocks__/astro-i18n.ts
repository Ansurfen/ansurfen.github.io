export function getRelativeLocaleUrl(locale: string, path?: string, options?: { normalizeLocale: boolean }): string {
  if (locale === 'en_us') {
    return path || '/';
  }
  return `/${locale}${path || ''}`;
} 