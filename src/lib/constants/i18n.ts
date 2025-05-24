type KeyValuePair = { key: string, value: string }

interface GitTexts {
    github: KeyValuePair
    gitlab: KeyValuePair
    bitbucket: KeyValuePair
    sourceforge: KeyValuePair
    codepen: KeyValuePair
    codebase: KeyValuePair
    gitee: KeyValuePair
    gitea: KeyValuePair
}

interface ChineseBlogTexts {
    csdn: KeyValuePair
    jianshu: KeyValuePair
    zcool: KeyValuePair
    cnblogs: KeyValuePair
    studygolang: KeyValuePair
}

interface ChineseSocialTexts {
    qq: KeyValuePair
    wechat: KeyValuePair
    weibo: KeyValuePair
    zhihu: KeyValuePair
    acfun: KeyValuePair
    bilibili: KeyValuePair
    douyin: KeyValuePair
    kuaishou: KeyValuePair
    rednote: KeyValuePair
    netease: KeyValuePair
}

interface ChinesePlatformTexts extends ChineseBlogTexts, ChineseSocialTexts { }

interface EnglishSocialTexts {
    twitter: KeyValuePair
    linkedin: KeyValuePair
    reddit: KeyValuePair
    telegram: KeyValuePair
    youtube: KeyValuePair
    twitch: KeyValuePair
    tiktok: KeyValuePair
    instagram: KeyValuePair
    facebook: KeyValuePair
    stackoverflow: KeyValuePair
    medium: KeyValuePair
    devto: KeyValuePair
    discord: KeyValuePair
    hackernews: KeyValuePair
    v2ex: KeyValuePair
    quora: KeyValuePair
}

export interface ProfileTexts extends
    Partial<GitTexts>, Partial<ChinesePlatformTexts>, Partial<EnglishSocialTexts> {
    contact?: KeyValuePair
    resume?: KeyValuePair
    email?: KeyValuePair
    leetcode?: KeyValuePair
}

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

export const profileTexts = {
    enUS: enUSProfile,
    zhCN: zhCNProfile,
    zhTW: zhTWProfile,
    jaJP: jaJPProfile,
};

export interface ExperienceTexts {
    name: string
    showMore: string
    showLess: string
}

export const experienceTexts = {
    enUS: {
        name: "Experience",
        showMore: "Show more",
        showLess: "Show less"
    } satisfies ExperienceTexts,
    zhCN: {
        name: "经历",
        showMore: "展开",
        showLess: "收起"
    } satisfies ExperienceTexts,
    zhTW: {
        name: "經歷",
        showMore: "展開",
        showLess: "收起"
    } satisfies ExperienceTexts,
    jaJP: {
        name: "経験",
        showMore: "展開",
        showLess: "閉じる"
    } satisfies ExperienceTexts,
};

type Link = { label: string, href: string }

export type Links = Link[];

export const navLinkes: Record<"enUS" | "zhCN" | "zhTW" | "jaJP", Links> = {
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
