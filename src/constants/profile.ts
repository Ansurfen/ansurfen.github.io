import type { Account, Language, ProfileTexts, UserProfile } from "@/lib/types";
import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import XIcon from '@/components/ui/icons/x.astro'
import GithubIcon from '@/components/ui/icons/github.astro'

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
        key: "フォローする",
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
} satisfies ProfileTexts;

export const profileTexts: Record<Language, ProfileTexts> = {
    enUS: enUSProfile,
    zhCN: zhCNProfile,
    zhTW: zhTWProfile,
    jaJP: jaJPProfile,
};

export const account: Partial<Account> = {
    waitChance: true,
    twitter: "https://x.com/ansurfen",
    discord: "https://discord.gg/#",
    github: "https://github.com/ansurfen",
};

const enUS: UserProfile = {
    role: 'Programming Enthusiasts / Full-stack Developer',
    logo: 'ansurfen',
    slogan: 'I have a bold idea...',
    displayName: "Surfen An",
    email: "",
    about: `
At present, I am developing what I think is a major open source project —— [Hulo](https://github.com/hulo-lang/hulo). It is a programming language, but it is still at the WIP stage. If you are interested, you can contact me to study or develop :).

In addition, I translate Minecraft mods in my spare time. 
`,
} as const;

const zhCN: UserProfile = {
    role: '编程爱好者 / 全栈开发',
    logo: 'ansurfen',
    slogan: '我有一个大胆的想法...',
    displayName: "Surfen An",
    email: "",
    about: `
最近, 我正在开发我认为重要的开源项目 —— [Hulo](https://github.com/hulo-lang/hulo)。它是一个编程语言，但仍然处于未完成阶段。如果你感兴趣，你可以联系我一起学习或开发 :)。

另外，我还在空闲时间翻译 Minecraft 模组。
`,
} as const;

const zhTW: UserProfile = {
    role: '程式設計愛好者 / 全端開發',  // zh-HK would use "全棧開發"
    logo: 'ansurfen',
    slogan: '我有個大膽的想法...',
    displayName: "Surfen An",
    email: "",
    about: `
最近，我正在開發一個我認為重要的開源專案 —— [Hulo](https://github.com/hulo-lang/hulo)。它是一個程式語言，但目前仍處於未完成階段。如果你有興趣，可以聯繫我一起學習或開發 :)

另外，我也在空閒時間翻譯 Minecraft 模組。
`
} as const;

export const profile = {
    enUS,
    zhCN,
    zhTW,
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