import { describe, it, expect, vi } from 'vitest';
import { getLocale, getTimeLocale, languages } from './i18n';

// 模拟 astro:i18n 模块
// vi.mock('astro:i18n', () => ({
//   getRelativeLocaleUrl: (locale: string, path?: string) => {
//     if (locale === 'en_us') {
//       return path || '/';
//     }
//     return `/${locale}${path || ''}`;
//   }
// }));

describe('i18n utilities', () => {
  describe('getLocale', () => {
    it('should return en_us for root path', () => {
      const url = new URL('http://localhost/');
      expect(getLocale(url)).toBe('en_us');
    });

    it('should return en_us for /en_us path', () => {
      const url = new URL('http://localhost/en_us');
      expect(getLocale(url)).toBe('en_us');
    });

    it('should return zh_cn for /zh_cn path', () => {
      const url = new URL('http://localhost/zh_cn');
      expect(getLocale(url)).toBe('zh_cn');
    });

    it('should return zh_tw for /zh_tw path', () => {
      const url = new URL('http://localhost/zh_tw');
      expect(getLocale(url)).toBe('zh_tw');
    });

    it('should return en_us for unknown path', () => {
      const url = new URL('http://localhost/unknown');
      expect(getLocale(url)).toBe('en_us');
    });

    it('should return correct locale for nested paths', () => {
      const url = new URL('http://localhost/zh_cn/about');
      expect(getLocale(url)).toBe('zh_cn');
    });
  });

  describe('getTimeLocale', () => {
    it('should return en-US for en_us', () => {
      expect(getTimeLocale('en_us')).toBe('en-US');
    });

    it('should return zh-CN for zh_cn', () => {
      expect(getTimeLocale('zh_cn')).toBe('zh-CN');
    });

    it('should return zh-TW for zh_tw', () => {
      expect(getTimeLocale('zh_tw')).toBe('zh-TW');
    });
  });

  describe('languages configuration', () => {
    it('should have correct structure for all languages', () => {
      expect(languages).toHaveProperty('en_us');
      expect(languages).toHaveProperty('zh_cn');
      expect(languages).toHaveProperty('zh_tw');

      expect(languages.en_us).toEqual({
        name: 'English',
        path: 'en_us'
      });

      expect(languages.zh_cn).toEqual({
        name: '简体中文',
        path: 'zh_cn'
      });

      expect(languages.zh_tw).toEqual({
        name: '繁體中文',
        path: 'zh_tw'
      });
    });
  });
});
