import type { Account, ProfileTexts, Profile } from "@/lib/types";
import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import XIcon from '@/components/ui/icons/x.astro'
import GithubIcon from '@/components/ui/icons/github.astro'
import { Discord, GitHubDark } from "developer-icons";
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
    },
    more: {
        key: "查看我的",
        value: "社交平台"
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
    },
    more: {
        key: "Check out my",
        value: "Social Platforms"
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
    },
    more: {
        key: "查看我的",
        value: "社交平台"
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
    },
    more: {
        key: "私の",
        value: "ソーシャルメディアを見る"
    }
} satisfies ProfileTexts;

const frFRProfile = {
    twitter: {
        key: "Suivez-moi sur",
        value: "Twitter"
    },
    linkedin: {
        key: "Connectons-nous sur",
        value: "LinkedIn"
    },
    github: {
        key: "Consultez mes dépôts sur",
        value: "GitHub"
    },
    discord: {
        key: "Rejoignez-moi sur",
        value: "Discord"
    },
    contact: {
        key: "Je suis ouvert à de nouvelles opportunités, n'hésitez pas à",
        value: "me contacter"
    },
    resume: {
        key: "Jetez un œil à mon",
        value: "CV"
    },
    more: {
        key: "Voir mes",
        value: "plateformes sociales"
    }
} satisfies ProfileTexts;

const esESProfile = {
    twitter: {
        key: "Sígueme en",
        value: "Twitter"
    },
    linkedin: {
        key: "Conectemos en",
        value: "LinkedIn"
    },
    github: {
        key: "Mira mis repositorios en",
        value: "GitHub"
    },
    discord: {
        key: "Únete a mí en",
        value: "Discord"
    },
    contact: {
        key: "Estoy abierto a nuevas oportunidades, no dudes en",
        value: "contactarme"
    },
    resume: {
        key: "Echa un vistazo a mi",
        value: "currículum"
    },
    more: {
        key: "Ver mis",
        value: "redes sociales"
    }
} satisfies ProfileTexts;

const ptPTProfile = {
    twitter: {
        key: "Siga-me no",
        value: "Twitter"
    },
    linkedin: {
        key: "Conecte-se comigo no",
        value: "LinkedIn"
    },
    github: {
        key: "Veja meus repositórios no",
        value: "GitHub"
    },
    discord: {
        key: "Junte-se a mim no",
        value: "Discord"
    },
    contact: {
        key: "Estou aberto a novas oportunidades, sinta-se à vontade para",
        value: "entrar em contato"
    },
    resume: {
        key: "Dê uma olhada no meu",
        value: "Currículo"
    },
    more: {
        key: "Ver minhas",
        value: "redes sociais"
    }
} satisfies ProfileTexts;

const ruProfile = {
    twitter: {
        key: "Подпишитесь на меня в",
        value: "Twitter"
    },
    linkedin: {
        key: "Свяжемся через",
        value: "LinkedIn"
    },
    github: {
        key: "Посмотрите мои репозитории на",
        value: "GitHub"
    },
    discord: {
        key: "Присоединяйтесь ко мне в",
        value: "Discord"
    },
    contact: {
        key: "Открыт для новых возможностей, пожалуйста",
        value: "свяжитесь со мной"
    },
    resume: {
        key: "Посмотрите мое",
        value: "резюме"
    },
    more: {
        key: "Посмотреть мои",
        value: "социальные сети"
    }
} satisfies ProfileTexts;

const arSAProfile = {
    twitter: {
        key: "تابعني على",
        value: "تويتر"
    },
    linkedin: {
        key: "تواصل معي عبر",
        value: "لينكدإن"
    },
    github: {
        key: "اطلع على مستودعاتي في",
        value: "جيت هب"
    },
    discord: {
        key: "انضم إلي على",
        value: "ديسكورد"
    },
    contact: {
        key: "أنا منفتح على فرص جديدة، لا تتردد في",
        value: "الاتصال بي"
    },
    resume: {
        key: "اطلع على",
        value: "السيرة الذاتية"
    },
    more: {
        key: "عرض",
        value: "منصاتي الاجتماعية"
    }
} satisfies ProfileTexts;


export const profileTexts: Record<Locale, ProfileTexts> = {
    en_us: enUSProfile,
    zh_cn: zhCNProfile,
    zh_tw: zhTWProfile,
    ja_jp: jaJPProfile,
    fr_fr: frFRProfile,
    es_es: esESProfile,
    pt_pt: ptPTProfile,
    ru: ruProfile,
    ar_sa: arSAProfile,
};

export const account: Partial<Account> = {
    waitChance: true,
    twitter: {
        title: "Twitter",
        href: "https://x.com/ansurfen",
        icon: XIcon,
    },
    discord: {
        title: "Discord",
        href: "https://discord.gg/#",
        icon: Discord,
    },
    github: {
        title: "GitHub",
        href: "https://github.com/ansurfen",
        icon: GitHubDark,
    },
};

export const pinnedAccounts = ["github", "twitter", "discord"]

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

const frFR: Profile = {
    role: "Passionné de programmation / Développeur full-stack",
    logo: "ansurfen",
    slogan: "Fais de ton mieux, honore ce que tu ne peux pas",
    displayName: "Surfen An",
    email: "",
    about: `
  Dernièrement, je travaille sur un projet open-source qui me tient à cœur — [Hulo](https://github.com/hulo-lang/hulo). C’est un langage de programmation encore en développement. Si tu es intéressé(e), n'hésite pas à me contacter pour apprendre ou développer ensemble :)
  
  Je traduis aussi des mods Minecraft pendant mon temps libre.
  `,
} as const;

const esES: Profile = {
    role: "Apasionado de la programación / Desarrollador full-stack",
    logo: "ansurfen",
    slogan: "Haz lo mejor que puedas, honra lo que no puedas",
    displayName: "Surfen An",
    email: "",
    about: `
  Últimamente he estado desarrollando un proyecto de código abierto que considero importante: [Hulo](https://github.com/hulo-lang/hulo). Es un lenguaje de programación que aún está en desarrollo. Si te interesa, puedes contactarme para aprender o desarrollar juntos :)
  
  También traduzco mods de Minecraft en mi tiempo libre.
  `,
} as const;

const ptPT: Profile = {
    role: "Entusiasta de programação / Desenvolvedor full-stack",
    logo: "ansurfen",
    slogan: "Dê o seu melhor, honre o que não pode",
    displayName: "Surfen An",
    email: "",
    about: `
  Recentemente, estou desenvolvendo um projeto open-source que considero importante — [Hulo](https://github.com/hulo-lang/hulo). É uma linguagem de programação, ainda em fase de desenvolvimento. Se estiver interessado, entre em contato para aprender ou desenvolver comigo :)
  
  Também traduzo mods de Minecraft no meu tempo livre.
  `,
} as const;

const ru: Profile = {
    role: "Любитель программирования / Full-Stack разработчик",
    logo: "ansurfen",
    slogan: "Делай всё возможное, уважай невозможное",
    displayName: "Surfen An",
    email: "",
    about: `
  В последнее время я разрабатываю важный для меня open-source проект — [Hulo](https://github.com/hulo-lang/hulo). Это язык программирования, который пока ещё не завершён. Если тебе интересно, присоединяйся — будем учиться и разрабатывать вместе :)
  
  В свободное время я также перевожу моды для Minecraft.
  `,
} as const;


const arSA: Profile = {
    role: "هاوي برمجة / مطور شامل",
    logo: "ansurfen",
    slogan: "افعل ما بوسعك، وكن موقرًا لما لا تستطيع",
    displayName: "Surfen An",
    email: "",
    about: `
  مؤخرًا، أعمل على مشروع مفتوح المصدر أعتبره مهمًا — [Hulo](https://github.com/hulo-lang/hulo). إنه لغة برمجة، لا تزال في مراحل التطوير. إذا كنت مهتمًا، لا تتردد في التواصل معي للتعلم أو التطوير معنا :)
  
  كما أقوم بترجمة إضافات ماينكرافت في أوقات فراغي.
  `,
} as const;


export const profile: Record<Locale, Profile> = {
    en_us: enUS,
    zh_cn: zhCN,
    zh_tw: zhTW,
    ja_jp: jaJP,
    fr_fr: frFR,
    es_es: esES,
    pt_pt: ptPT,
    ru: ru,
    ar_sa: arSA,
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