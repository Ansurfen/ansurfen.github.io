import type { Experience, ExperienceTexts } from "@/lib/types";
import type { Locale } from "@/lib/i18n";

export const experienceTexts: Record<Locale, ExperienceTexts> = {
    en_us: {
        name: "Experience",
        showMore: "Show more",
        showLess: "Show less"
    },
    zh_cn: {
        name: "经历",
        showMore: "展开",
        showLess: "收起"
    },
    zh_tw: {
        name: "經歷",
        showMore: "展開",
        showLess: "收起"
    },
    ja_jp: {
        name: "経験",
        showMore: "展開",
        showLess: "閉じる"
    },
};

export const enUS: Experience[] = [
    {
        title: "University",
        positions: [
            {
                subtitle: "Backend Developer / Golang Developer",
                year: "09.2021 - 06.2025",
                description: `I met Golang in the first semester of my freshman year. 
Since then, my technical stack has been almost entirely based on Go language.

As a Gopher, I learned and used the first Web development stack as Gin + Gorm.
Through this experience, it allowed me to quickly get started with various different language frameworks (such as: SpringBoot, Django, Flask, Express, Koa, etc.) and their third-party libraries.

Later, I started to study microservices and researched various modern technologies and toolchains (such as: GRPC, ProtoBuf, ETCD, Grafana, Prometheus, Docker, etc.).
I feel like I've learned quite a lot, but it's a bit regrettable that I didn't get to fully build a complete microservices project myself in the end.
`,
                tags: ["Backend Developer", "Golang", "Go language", "Container", "Microservices", "Cloud Native"]
            },
            {
                subtitle: "Frontend Developer",
                year: "05.2022 - 06.2025",
                description: `Like backend development, my encounter with frontend was also full of serendipitous moments.
If I had to pinpoint a starting point, it would be a competition and a group chat.

Thanks to some experiences in high school, I gained basic knowledge of JQuery and the frontend trifecta (HTML/CSS/JS).
So I jumped straight into a simple project using Vue framework and its ecosystem (Pinia, Vite, Vue Router, Vuex).

Driven by interest in TSX, I later learned React and its toolchain.

Subsequently, my curiosity about mobile development led me to discover Flutter and its "write once, run anywhere" capability,
which eventually became the main technology stack for my graduation project.`,
                tags: ["Frontend Developer", "JQuery", "Vue3", "TypeScript", "React", "Dart", "Flutter"]
            },
            {
                "subtitle": "My Journey",
                "year": "09.2021 - 12.2022",
                "description": `During university, I learned many technologies out of curiosity, though looking back, most were just surface-level explorations without practical project implementation.
However, the learning process greatly satisfied my technical curiosity at the time.
Due to length limitations, please visit my article [《Past, Present, Future》](./articles/past-now-future) for details.`,
                "tags": ["Retrospective", "Memories", "Future", "Graduate Entrance Exam", "Blockchain", "Smart Contracts", "Solidity", "Unreal 5", "Quantitative Trading", "Databases", "Operating Systems", "Deep Learning", "Desktop Development", "Game Development", "Minecraft Modding"]
            }
        ]
    },
    {
        "title": "Internship",
        "positions": [
            {
                "subtitle": "NodeJS Backend Development",
                "year": "03.2025 - Present",
                "description": `
- ♦ Implemented declarative TypeScript definition to API documentation conversion using TypeScript AST and JsonSchema CLI toolchain, with automatic synchronization to API management platform.
- ♦ Maintained daily operations of DevOps platform, including template additions and task priority implementation.
- ♦ Refactored original DevOps platform using Dagger to implement CI/CD pipelines.
- ♦ Integrated Alibaba Cloud Log Service, encapsulating its SDK calls into ORM-like invocation patterns.
- ♦ Responsible for routine maintenance of game backend services, including integrations with OPPO Mini Game login and Qiniu Cloud file upload.
                `,
                "tags": ["NodeJS", "TypeScript", "koa", "express", "sequelize", "mysql", "mongo", "redis", "jaeger", "devops", "CI/CD", "dagger"]
            },
            {
                "subtitle": "Vue Frontend Development",
                "year": "03.2025 - Present",
                "description": `
- ♦ Routine maintenance of DevOps platform
                `,
                "tags": ["vue", "vue-router", "vite", "TypeScript", "devops", "element-plus"]
            }
        ]
    }
] as const;

export const zhCN: Experience[] = [
    {
        title: "大学",
        positions: [
            {
                subtitle: "后端开发/ Golang 开发",
                year: "09.2021 - 06.2025",
                description: `我与 Golang 的相识始于大一上学期末的寒假。 
从此， 我大部分的技术栈几乎都围绕 Go 语言展开。

同大部分 Gopher 一样，我学习和使用首个 Web 开发的技术栈就是 Gin + Gorm。 通过这个经历， 让我往后能够直接上手各种不同的语言框架(如：SpringBoot, Django, Flask, Express, Koa 等)以及其第三方库。

再后来开始接触微服务，陆陆续续研究起了 GRPC、ProtoBuf、ETCD、Grafana、Prometheus、Docker 等现代化技术及工具链。
感觉还是学到挺多东西的，不过比较可惜的是后面没有自己完整的搭建一套微服务项目。`,
                tags: ["后端开发", "Golang", "Go语言", "容器", "微服务", "云原生"]
            },
            {
                subtitle: "前端开发",
                year: "05.2022 - 06.2025",
                description: `同后端开发一样，接触前端也同样充斥着各种机缘巧合。
如果非要说一个起点的话，应该是一次比赛和一个群聊吧。

由于高中的一些经历，使我对编写JQuery以及前端三件套（HTML/CSS/JS）有一定的了解。
因此，我就找了个简单的项目直接上手了 Vue 框架及其工具链 （如：Pinia、Vite、Vue Router、Vuex）。

出于对 TSX 的兴趣，我还学习了 React 及其工具链。

再后来，由于对移动端开发的兴趣，得知了 Flutter 这个技术栈以及它 “一次编写，多端运行” 的特性。
它也因此成为了我毕业设计的主要技术栈。
`,
                tags: ["前端开发", "JQuery", "Vue3", "TypeScript", "React", "Dart", "Flutter"]
            },
            {
                subtitle: "心路历程",
                year: "09.2021 - 12.2022",
                description: `在大学期间出于好奇陆陆续续学了挺多东西，虽然回忆起来基本上都是浅尝辄止，没有用他们写出实际的项目。
不过，学习这些项目的过程极大的满足了我当时对技术的好奇心。
由于篇幅过长，请移步我的文章 [《过去，现在，未来》](./articles/past-now-future) 查看详情。
`,
                tags: ["总结", "回忆", "展望", "考研", "区块链", "智能合约", "Solidity", "虚幻5", "量化交易", "数据库", "操作系统", "深度学习", "桌面开发", "游戏开发", "我的世界模组"]
            },
        ]
    },
    {
        title: "实习",
        positions: [
            {
                subtitle: "NodeJS 后端开发",
                year: "03.2025 - 至今",
                description: `
- ♦ 基于 TypeScript 语法树以及 JsonSchema 命令行工具链实现声明式 TypeScript 定义转接口文档，并自动同步到 API 管理平台。
- ♦ 维护 DevOps 平台日常工作，包括添加模板，实现任务优先级。
- ♦ 使用 Dagger 重构原 DevOps 平台实现 CI/CD 流水线。
- ♦ 对接过阿里云日志服务，将其 SDK 调用方式封装成和 ORM 一样同样的方式调用。
- ♦ 负责游戏后台日常维护，对接过 OPPO 小游戏登录，七牛云文件上传等。
                `,
                tags: ["NodeJS", "TypeScript", "koa", "express", "sequelize", "mysql", "mongo", "redis", "jaeger", "devops", "CI/CD", "dagger"]
            },
            {
                subtitle: "Vue 前端开发",
                year: "03.2025 - 至今",
                description: `
- ♦ DevOps 平台日常维护
                `,
                tags: ["vue", "vue-router", "vite", "TypeScript", "devops", "element-plus"]
            }
        ]
    }
] as const;

const zhTW: Experience[] = [
    {
        title: "大學",
        positions: [
            {
                subtitle: "後端開發/ Golang 開發",
                year: "09.2021 - 06.2025",
                description: `我與 Golang 的相識始於大一上學期末的寒假。
從此，我大部分的技術棧幾乎都圍繞 Go 語言展開。

同大部分 Gopher 一樣，我學習和使用的首個 Web 開發技術棧就是 Gin + Gorm。通過這個經歷，讓我往後能夠直接上手各種不同的語言框架（如：SpringBoot、Django、Flask、Express、Koa 等）及其第三方函式庫。

後來開始接觸微服務，陸續研究了 GRPC、ProtoBuf、ETCD、Grafana、Prometheus、Docker 等現代化技術及工具鏈。
感覺還是學到不少東西，不過比較可惜的是後來沒有自己完整搭建一套微服務專案。`,
                tags: ["後端開發", "Golang", "Go語言", "容器", "微服務", "雲端原生"]
            },
            {
                subtitle: "前端開發",
                year: "05.2022 - 06.2025",
                description: `同後端開發一樣，接觸前端也充滿各種機緣巧合。
如果非要說一個起點的話，應該是一次比賽和一個群組聊天吧。

由於高中的一些經歷，使我對編寫 JQuery 以及前端三件套（HTML/CSS/JS）有一定的了解。
因此，我找了個簡單的專案直接上手了 Vue 框架及其工具鏈（如：Pinia、Vite、Vue Router、Vuex）。

出於對 TSX 的興趣，我還學習了 React 及其工具鏈。

後來，由於對行動端開發的興趣，得知了 Flutter 這個技術棧及其「一次編寫，多端運行」的特性。
它也因此成為了我畢業設計的主要技術棧。`,
                tags: ["前端開發", "JQuery", "Vue3", "TypeScript", "React", "Dart", "Flutter"]
            },
            {
                subtitle: "心路歷程",
                year: "09.2021 - 12.2022",
                description: `在大學期間出於好奇陸續學了不少技術，雖然回憶起來基本上都是淺嘗輒止，沒有用它們寫出實際的專案。
不過，學習這些技術的過程極大滿足了我當時對技術的好奇心。
由於篇幅過長，請移步我的文章 [《過去，現在，未來》](./articles/past-now-future) 查看詳情。`,
                tags: ["總結", "回憶", "展望", "考研", "區塊鏈", "智能合約", "Solidity", "虛幻5", "量化交易", "資料庫", "作業系統", "深度學習", "桌面開發", "遊戲開發", "Minecraft 模組"]
            },
        ]
    },
    {
        title: "實習",
        positions: [
            {
                subtitle: "NodeJS 後端開發",
                year: "03.2025 - 至今",
                description: `
- ♦ 基於 TypeScript 語法樹及 JsonSchema 命令列工具鏈實現宣告式 TypeScript 定義轉接口文件，並自動同步至 API 管理平台。
- ♦ 維護 DevOps 平台日常工作，包括新增模板、實現任務優先級。
- ♦ 使用 Dagger 重構原 DevOps 平台實現 CI/CD 流水線。
- ♦ 對接過阿里雲日誌服務，將其 SDK 呼叫方式封裝成類似 ORM 的形式呼叫。
- ♦ 負責遊戲後台日常維護，對接過 OPPO 小遊戲登入、七牛雲文件上傳等。`,
                tags: ["NodeJS", "TypeScript", "koa", "express", "sequelize", "mysql", "mongo", "redis", "jaeger", "devops", "CI/CD", "dagger"]
            },
            {
                subtitle: "Vue 前端開發",
                year: "03.2025 - 至今",
                description: `
- ♦ DevOps 平台日常維護`,
                tags: ["vue", "vue-router", "vite", "TypeScript", "devops", "element-plus"]
            }
        ]
    }
] as const;

export const jaJP: Experience[] = [
    {
        title: "大学",
        positions: [
            {
                subtitle: "バックエンド開発 / Golang 開発",
                year: "09.2021 - 06.2025",
                description: `Golangとの出会いは、大学1年の冬休みに始まりました。
  それ以来、私の技術スタックはほぼGo言語を中心に展開しています。
  
  多くのGopherと同じように、私が最初に学び使ったWeb開発スタックは Gin + Gorm でした。
  この経験により、SpringBoot、Django、Flask、Express、Koaなど、他の多くの言語フレームワークやサードパーティライブラリにもすぐに対応できるようになりました。
  
  その後、マイクロサービスにも触れ始め、GRPC、ProtoBuf、ETCD、Grafana、Prometheus、Dockerなどのモダンな技術やツールチェーンを順に学んできました。
  多くのことを学べたと思いますが、残念ながら完全なマイクロサービスプロジェクトを一から構築することはできませんでした。`,
                tags: ["バックエンド開発", "Golang", "Go言語", "コンテナ", "マイクロサービス", "クラウドネイティブ"]
            },
            {
                subtitle: "フロントエンド開発",
                year: "05.2022 - 06.2025",
                description: `バックエンド開発と同様に、フロントエンドとの出会いも偶然の積み重ねでした。
  出発点を挙げるなら、それはあるコンテストとチャットグループです。
  
  高校時代の経験から、JQueryやHTML/CSS/JSの基本にはある程度慣れていました。
  そのため、簡単なプロジェクトからVueフレームワークとそのツールチェーン（Pinia、Vite、Vue Router、Vuex）に手を出しました。
  
  TSXに興味を持ったことから、Reactとそのエコシステムにも取り組みました。
  
  さらに、モバイル開発への興味から、"一度書けば複数プラットフォームで動作する"という特徴を持つFlutterを知り、卒業制作の主要技術スタックとして採用しました。`,
                tags: ["フロントエンド開発", "JQuery", "Vue3", "TypeScript", "React", "Dart", "Flutter"]
            },
            {
                subtitle: "学びの道のり",
                year: "09.2021 - 12.2022",
                description: `大学生活中、好奇心から多くの技術に手を出しましたが、振り返ってみるとほとんどが表面的な学習に留まり、実際のプロジェクトとして形にすることはできませんでした。
  とはいえ、それらを学ぶ過程は、当時の技術への強い興味を十分に満たしてくれました。
  詳細については、私の記事 [《過去、現在、未来》](./articles/past-now-future) をご覧ください。`,
                tags: ["まとめ", "思い出", "展望", "大学院試験", "ブロックチェーン", "スマートコントラクト", "Solidity", "Unreal Engine 5", "クオンツ取引", "データベース", "OS", "ディープラーニング", "デスクトップ開発", "ゲーム開発", "Minecraft Mod"]
            }
        ]
    },
    {
        title: "インターンシップ",
        positions: [
            {
                subtitle: "NodeJS バックエンド開発",
                year: "03.2025 - 現在",
                description: `
  - ♦ TypeScriptの構文木とJsonSchemaを利用し、コマンドラインツールを作成。宣言的なTypeScript定義からAPIドキュメントを生成し、API管理プラットフォームに自動同期。
  - ♦ DevOpsプラットフォームの日常的な保守業務（テンプレート追加、タスク優先度管理など）を担当。
  - ♦ Daggerを用いて既存のDevOpsプラットフォームのCI/CDパイプラインをリファクタリング。
  - ♦ Alibaba Cloudのログサービスを接続し、ORMのような呼び出し方ができるSDKラッパーを実装。
  - ♦ ゲームバックエンドの保守、OPPOミニゲームログインや七牛クラウドのファイルアップロード対応などを担当。
          `,
                tags: ["NodeJS", "TypeScript", "koa", "express", "sequelize", "mysql", "mongo", "redis", "jaeger", "devops", "CI/CD", "dagger"]
            },
            {
                subtitle: "Vue フロントエンド開発",
                year: "03.2025 - 現在",
                description: `
  - ♦ DevOpsプラットフォームの日常保守
          `,
                tags: ["vue", "vue-router", "vite", "TypeScript", "devops", "element-plus"]
            }
        ]
    }
] as const;

export const experiences: Record<Locale, Experience[]> = {
    en_us: enUS,
    zh_cn: zhCN,
    zh_tw: zhTW,
    ja_jp: jaJP,
} as const;