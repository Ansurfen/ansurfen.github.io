interface Account {
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

export const account = {
  waitChance: true,
  twitter: "https://x.com/ansurfen",
  discord: "https://discord.gg/#",
  github: "https://github.com/ansurfen",
} satisfies Partial<Account>;

export interface UserProfile {
  role: string;
  logo: string;
  slogan: string;
  displayName: string;
  email: string;
  about: string;
}

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

export const PROFILE = {
  enUS,
  zhCN,
} as const;
