import { getRelativeLocaleUrl } from "astro:i18n";
import type { Links } from "./types";
import type { Language } from "./types";

export interface LanguageInfo {
  name: string;
  path: string;
}

export type Locale = 'en_us' | 'zh_cn' | "zh_tw" | "ja_jp";

export const languages: Record<Locale, LanguageInfo> = {
  en_us: { name: "English", path: "en_us" },
  zh_cn: { name: "简体中文", path: "zh_cn" },
  zh_tw: { name: "繁體中文", path: "zh_tw" },
  ja_jp: { name: "日本語", path: "ja_jp" },
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

export const navLinkes: Record<Language, Links> = {
  enUS: [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Projects", href: "/projects" }
  ],
  zhCN: [
    { label: "首页", href: "/" },
    { label: "文章", href: "/articles" },
    { label: "项目", href: "/projects" }
  ],
  zhTW: [
    { label: "首頁", href: "/" },          // zh-HK 可能用「主頁」
    { label: "文章", href: "/articles" },  // 兩地相同
    { label: "專案", href: "/projects" }    // zh-HK 可能用「項目」
  ],
  jaJP: [
    { label: "ホーム", href: "/" },
    { label: "記事", href: "/articles" },
    { label: "プロジェクト", href: "/projects" }
  ],
};
