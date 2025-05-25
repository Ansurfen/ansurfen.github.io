import { getRelativeLocaleUrl } from "astro:i18n";
import type { Links } from "./types";

export interface LanguageInfo {
  name: string;
  path: string;
}

export type Locale = 'en_us' | 'zh_cn' | "zh_tw" | "ja_jp" | "fr_fr" | "es_es" | "pt_pt" | "ru" | "ar_sa";

export const languages: Record<Locale, LanguageInfo> = {
  en_us: { name: "English", path: "en_us" },
  zh_cn: { name: "简体中文", path: "zh_cn" },
  zh_tw: { name: "繁體中文", path: "zh_tw" },
  ja_jp: { name: "日本語", path: "ja_jp" },
  fr_fr: { name: "Français", path: "fr_fr" },
  es_es: { name: "Español", path: "es_es" },
  pt_pt: { name: "Português", path: "pt_pt" },
  ru: { name: "Русский", path: "ru" },
  ar_sa: { name: "العربية", path: "ar_sa" }
};

export function getLocale(url: URL): Locale {
  return (Object.keys(languages) as Locale[]).find(key =>
    url.pathname.startsWith(`/${languages[key].path}`)
  ) || "en_us";
}

export function getTimeLocale(locale: Locale): string {
  switch (locale) {
    case "zh_cn":
      return "zh-CN";
    case "zh_tw":
      return "zh-TW";
    case "ja_jp":
      return "ja-JP";
    case "fr_fr":
      return "fr-FR";
    case "es_es":
      return "es-ES";
    case "pt_pt":
      return "pt-PT";
    case "ru":
      return "ru-RU";
    case "ar_sa":
      return "ar-SA";
    default:
      return "en-US";
  }
}

export function getLocalePathByString(locale: string, path?: string): string {
  return getRelativeLocaleUrl(locale, path, { normalizeLocale: false });
}

export function getLocalePathByURL(url: URL, path?: string): string {
  const locale = getLocale(url);
  return getRelativeLocaleUrl(locale, path, { normalizeLocale: false });
}

export const navLinkes: Record<Locale, Links> = {
  en_us: [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Projects", href: "/projects" }
  ],
  zh_cn: [
    { label: "首页", href: "/" },
    { label: "文章", href: "/articles" },
    { label: "项目", href: "/projects" }
  ],
  zh_tw: [
    { label: "首頁", href: "/" },
    { label: "文章", href: "/articles" },
    { label: "專案", href: "/projects" }
  ],
  ja_jp: [
    { label: "ホーム", href: "/" },
    { label: "記事", href: "/articles" },
    { label: "プロジェクト", href: "/projects" }
  ],
  fr_fr: [
    { label: "Accueil", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Projets", href: "/projects" }
  ],
  es_es: [
    { label: "Inicio", href: "/" },
    { label: "Artículos", href: "/articles" },
    { label: "Proyectos", href: "/projects" }
  ],
  pt_pt: [
    { label: "Início", href: "/" },
    { label: "Artigos", href: "/articles" },
    { label: "Projetos", href: "/projects" }
  ],
  ru: [
    { label: "Главная", href: "/" },
    { label: "Статьи", href: "/articles" },
    { label: "Проекты", href: "/projects" }
  ],
  ar_sa: [
    { label: "الرئيسية", href: "/" },
    { label: "مقالات", href: "/articles" },
    { label: "المشاريع", href: "/projects" }
  ]
};

export function getNavLinkes(locale: Locale): Links {
  return navLinkes[locale] || navLinkes.en_us;
}
