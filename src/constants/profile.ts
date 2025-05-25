import type { Account, ProfileTexts, Profile } from "@/lib/types";
import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import XIcon from '@/components/ui/icons/x.astro'
import GithubIcon from '@/components/ui/icons/github.astro'
import type { Locale } from "@/lib/i18n";

const zhCNProfile = {
    twitter: {
        key: "关注我的",
        value: "Twitter"
    },
    linkedin: {
        key: "联系我",
        value: "LinkedIn"
    },
    github: {
        key: "查看我的代码",
        value: "GitHub"
    },
    discord: {
        key: "加入我的",
        value: "Discord"
    },
    contact: {
        key: "我在寻找新的机会",
        value: "联系我"
    },
    resume: {
        key: "查看我的",
        value: "简历"
    },
    qq: {
        key: "添加我的",
        value: "QQ"
    },
    wechat: {
        key: "添加我的",
        value: "微信"
    },
    reddit: {
        key: "添加我的",
        value: "Reddit"
    },
    telegram: {
        key: "添加我的",
        value: "Telegram"
    },
    email: {
        key: "添加我的",
        value: "Email"
    },
    youtube: {
        key: "添加我的",
        value: "YouTube"
    },
    twitch: {
        key: "添加我的",
        value: "Twitch"
    },
    tiktok: {
        key: "添加我的",
        value: "TikTok"
    },
    instagram: {
        key: "添加我的",
        value: "Instagram"
    },
    facebook: {
        key: "添加我的",
        value: "Facebook"
    },
    stackoverflow: {
        key: "查看我的",
        value: "Stack Overflow"
    },
    medium: {
        key: "查看我的",
        value: "Medium"
    },
    devto: {
        key: "查看我的",
        value: "Dev.to"
    },
    hackernews: {
        key: "浏览我的",
        value: "Hacker News"
    }
} satisfies ProfileTexts;

const enUSProfile = {
    twitter: {
        key: "Follow me on",
        value: "Twitter"
    },
    linkedin: {
        key: "Let's connect on",
        value: "LinkedIn"
    },
    github: {
        key: "Check out my repos on",
        value: "GitHub"
    },
    discord: {
        key: "Join me on",
        value: "Discord"
    },
    contact: {
        key: "I'm open to new opportunities",
        value: "get in touch"
    },
    resume: {
        key: "Take a look at my",
        value: "Resume"
    }
} satisfies ProfileTexts;

const zhTWProfile = {
    twitter: {
        key: "追蹤我的",
        value: "Twitter"
    },
    linkedin: {
        key: "與我聯繫於",
        value: "LinkedIn"
    },
    github: {
        key: "查看我的專案於",
        value: "GitHub"
    },
    discord: {
        key: "加入我的",
        value: "Discord"
    },
    contact: {
        key: "我正尋找新機會",
        value: "聯繫我"
    },
    resume: {
        key: "查看我的",
        value: "履歷"  // zh-HK would use "CV" or "個人履歷"
    }
} satisfies ProfileTexts;

const jaJPProfile = {
    twitter: {
        key: "フォローしてください",
        value: "Twitter"
    },
    linkedin: {
        key: "連絡する",
        value: "LinkedIn"
    },
    discord: {
        key: "参加する",
        value: "Discord"
    },
    github: {
        key: "コードを見る",
        value: "GitHub"
    },
    contact: {
        key: "新しい機会を探しています",
        value: "お問い合わせ"
    }
} satisfies ProfileTexts;

export const profileTexts: Record<Locale, ProfileTexts> = {
    en_us: enUSProfile,
    zh_cn: zhCNProfile,
    zh_tw: zhTWProfile,
    ja_jp: jaJPProfile,
};

export const account: Partial<Account> = {
    waitChance: true,
    twitter: "https://x.com/ansurfen",
    discord: "https://discord.gg/#",
    github: "https://github.com/ansurfen",
};

const enUS: Profile = {
    role: 'Programming Enthusiasts / Full-stack Developer',
    logo: 'ansurfen',
    slogan: 'Do your best, and respect what you cannot yet do.',
    displayName: "Surfen An",
    email: "",
    about: `
At present, I am developing what I think is a major open source project —— [Hulo](https://github.com/hulo-lang/hulo). It is a programming language, but it is still at the WIP stage. If you are interested, you can contact me to study or develop :).

In addition, I translate Minecraft mods in my spare time. 
`,
} as const;

const zhCN: Profile = {
    role: '编程爱好者 / 全栈开发',
    logo: 'ansurfen',
    slogan: '尽你所能，敬你所不能',
    displayName: "Surfen An",
    email: "",
    about: `
最近, 我正在开发我认为重要的开源项目 —— [Hulo](https://github.com/hulo-lang/hulo)。它是一个编程语言，但仍然处于未完成阶段。如果你感兴趣，你可以联系我一起学习或开发 :)。

另外，我还在空闲时间翻译 Minecraft 模组。
`,
} as const;

const zhTW: Profile = {
    role: '程式設計愛好者 / 全端開發',  // zh-HK would use "全棧開發"
    logo: 'ansurfen',
    slogan: '盡你所能，敬你所不能',
    displayName: "Surfen An",
    email: "",
    about: `
最近，我正在開發一個我認為重要的開源專案 —— [Hulo](https://github.com/hulo-lang/hulo)。它是一個程式語言，但目前仍處於未完成階段。如果你有興趣，可以聯繫我一起學習或開發 :)

另外，我也在空閒時間翻譯 Minecraft 模組。
`
} as const;

const jaJP: Profile = {
    role: 'プログラミング愛好家 / フルスタック開発者',
    logo: 'ansurfen',
    slogan: 'できる限りのことを尽くし、できないことに敬意を払う',
    displayName: "Surfen An",
    email: "",
    about: `
現在、私は自分が重要だと思っている大規模なオープンソースプロジェクトを開発しています —— [Hulo](https://github.com/hulo-lang/hulo)。これはプログラミング言語ですが、まだ開発中です。興味がある方は、私に連絡して一緒に学びたいと思います :)

また、私は空き時間に Minecraft モッドを翻訳しています。
    `
} as const;

export const profile: Record<Locale, Profile> = {
    en_us: enUS,
    zh_cn: zhCN,
    zh_tw: zhTW,
    ja_jp: jaJP,
} as const;

export const socialLinks = [
    {
        name: 'Github',
        icon: GithubIcon,
        url: "https://github.com/ansurfen",
    },
    {
        name: 'Linkedin',
        icon: LinkedinIcon,
        url: "https://www.linkedin.com",
    },
    {
        name: 'X',
        icon: XIcon,
        url: "https://x.com/ansurfen",
    },
];