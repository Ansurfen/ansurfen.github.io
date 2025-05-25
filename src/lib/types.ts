export interface ExperienceTexts {
    name: string
    showMore: string
    showLess: string
}

export type ExperiencePosition = {
    subtitle: string;
    year: string;
    description: string;
    tags: string[];
};

export type Experience = {
    title: string;
    positions: ExperiencePosition[];
};

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
    segmentfault: KeyValuePair
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

type Link = { label: string, href: string }

export type Links = Link[];

export type Language = "enUS" | "zhCN" | "zhTW" | "jaJP";

export interface Account {
    waitChance: boolean;
    email: string;
    telephone: string;
    resume: string;

    twitter: string;
    discord: string;
    reddit: string;
    linkedin: string;

    /// git
    github: string;
    gitlab: string;
    gitee: string;
    gitea: string;
}

export interface UserProfile {
    role: string;
    logo: string;
    slogan: string;
    displayName: string;
    email: string;
    about: string;
}
