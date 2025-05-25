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
    fr_fr: {
        name: "Expérience",
        showMore: "Afficher plus",
        showLess: "Afficher moins"
    },
    es_es: {
        name: "Experiencia",
        showMore: "Mostrar más",
        showLess: "Mostrar menos"
    },
    pt_pt: {
        name: "Experiência",
        showMore: "Mostrar mais",
        showLess: "Mostrar menos"
    },
    ru: {
        name: "Опыт",
        showMore: "Показать больше",
        showLess: "Показать меньше"
    },
    ar_sa: {
        name: "الخبرة",
        showMore: "إظهار المزيد",
        showLess: "إخفاء المزيد"
    }
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

export const frFR: Experience[] = [
    {
        title: "Université",
        positions: [
            {
                subtitle: "Développement Backend / Développement Golang",
                year: "09.2021 - 06.2025",
                description: `J'ai découvert Golang pendant les vacances d'hiver de ma première année universitaire. Depuis, la majorité de ma pile technologique tourne autour de ce langage.
  
  Comme beaucoup de développeurs Golang, j'ai commencé avec le framework web Gin et l'ORM Gorm. Cette expérience m'a permis de m'adapter rapidement à divers frameworks dans d'autres langages (tels que SpringBoot, Django, Flask, Express, Koa) et à leurs bibliothèques tierces.
  
  Par la suite, je me suis intéressé aux microservices, explorant des technologies modernes et des chaînes d'outils telles que GRPC, ProtoBuf, ETCD, Grafana, Prometheus et Docker.
  
  J'ai beaucoup appris, bien que je n'aie pas eu l'occasion de construire un projet complet de microservices moi-même.`,
                tags: ["Développement Backend", "Golang", "Langage Go", "Conteneurs", "Microservices", "Cloud Native"]
            },
            {
                subtitle: "Développement Frontend",
                year: "05.2022 - 06.2025",
                description: `Mon parcours en développement frontend a également été marqué par des événements fortuits. Si je devais identifier un point de départ, ce serait une compétition et une discussion de groupe.
  
  Grâce à certaines expériences au lycée, j'avais une compréhension de base de jQuery et des technologies frontend (HTML/CSS/JS). J'ai donc directement abordé le framework Vue et sa chaîne d'outils (telles que Pinia, Vite, Vue Router, Vuex) avec un projet simple.
  
  Par intérêt pour TSX, j'ai également appris React et sa chaîne d'outils.
  
  Plus tard, motivé par un intérêt pour le développement mobile, j'ai découvert Flutter et sa fonctionnalité "écrire une fois, exécuter partout". Il est ainsi devenu la principale pile technologique de mon projet de fin d'études.`,
                tags: ["Développement Frontend", "jQuery", "Vue3", "TypeScript", "React", "Dart", "Flutter"]
            },
            {
                subtitle: "Parcours Personnel",
                year: "09.2021 - 12.2022",
                description: `Pendant l'université, j'ai exploré de nombreuses choses par curiosité. Bien que, rétrospectivement, la plupart aient été superficielles, et je n'ai pas construit de projets concrets avec elles.
  
  Néanmoins, le processus d'apprentissage de ces technologies a grandement satisfait ma curiosité à l'époque.
  
  En raison de la longueur, veuillez consulter mon article [“Passé, Présent, Futur”](./articles/past-now-future) pour plus de détails.`,
                tags: ["Résumé", "Réflexion", "Perspective", "Examen d'entrée aux études supérieures", "Blockchain", "Contrats Intelligents", "Solidity", "Unreal Engine 5", "Trading Quantitatif", "Bases de Données", "Systèmes d'Exploitation", "Apprentissage Profond", "Développement Desktop", "Développement de Jeux", "Mods Minecraft"]
            }
        ]
    },
    {
        title: "Stage",
        positions: [
            {
                subtitle: "Développement Backend NodeJS",
                year: "03.2025 - Présent",
                description: `
  - ♦ Mise en œuvre d'une chaîne d'outils en ligne de commande basée sur l'AST TypeScript et JsonSchema pour convertir de manière déclarative les définitions TypeScript en documentation API et synchroniser automatiquement avec la plateforme de gestion d'API.
  - ♦ Maintenance quotidienne de la plateforme DevOps, y compris l'ajout de modèles et la mise en œuvre de la priorisation des tâches.
  - ♦ Refactorisation de la plateforme DevOps d'origine en utilisant Dagger pour implémenter des pipelines CI/CD.
  - ♦ Intégration du service de journalisation Alibaba Cloud, encapsulant ses appels SDK dans une méthode d'invocation semblable à un ORM.
  - ♦ Responsable de la maintenance quotidienne du backend du jeu, intégration de la connexion au mini-jeu OPPO, des téléchargements de fichiers Qiniu Cloud, etc.
          `,
                tags: ["NodeJS", "TypeScript", "Koa", "Express", "Sequelize", "MySQL", "MongoDB", "Redis", "Jaeger", "DevOps", "CI/CD", "Dagger"]
            },
            {
                subtitle: "Développement Frontend Vue",
                year: "03.2025 - Présent",
                description: `
  - ♦ Maintenance quotidienne de la plateforme DevOps
          `,
                tags: ["Vue", "Vue Router", "Vite", "TypeScript", "DevOps", "Element Plus"]
            }
        ]
    }
] as const;


export const esES: Experience[] = [
    {
        title: "Universidad",
        positions: [
            {
                subtitle: "Desarrollo Backend / Desarrollo Golang",
                year: "09.2021 - 06.2025",
                description: `Descubrí Golang durante las vacaciones de invierno al final de mi primer semestre universitario. Desde entonces, la mayoría de mi stack tecnológico ha girado en torno a este lenguaje.
  
  Como muchos desarrolladores de Golang, comencé con el framework web Gin y el ORM Gorm. Esta experiencia me permitió adaptarme rápidamente a diversos frameworks en otros lenguajes (como SpringBoot, Django, Flask, Express, Koa) y sus bibliotecas de terceros.
  
  Posteriormente, me adentré en los microservicios, explorando tecnologías modernas y cadenas de herramientas como GRPC, ProtoBuf, ETCD, Grafana, Prometheus y Docker.
  
  Aprendí mucho, aunque es una pena que no haya tenido la oportunidad de construir un proyecto completo de microservicios por mi cuenta.`,
                tags: ["Desarrollo Backend", "Golang", "Lenguaje Go", "Contenedores", "Microservicios", "Cloud Native"]
            },
            {
                subtitle: "Desarrollo Frontend",
                year: "05.2022 - 06.2025",
                description: `Mi camino en el desarrollo frontend también estuvo lleno de eventos fortuitos. Si tuviera que señalar un punto de partida, sería una competencia y una conversación grupal.
  
  Gracias a algunas experiencias en la escuela secundaria, tenía una comprensión básica de jQuery y las tecnologías frontend (HTML/CSS/JS). Por lo tanto, abordé directamente el framework Vue y su cadena de herramientas (como Pinia, Vite, Vue Router, Vuex) con un proyecto simple.
  
  Por interés en TSX, también aprendí React y su cadena de herramientas.
  
  Más tarde, motivado por un interés en el desarrollo móvil, descubrí Flutter y su característica de "escribir una vez, ejecutar en todas partes". Así se convirtió en la principal pila tecnológica de mi proyecto de graduación.`,
                tags: ["Desarrollo Frontend", "jQuery", "Vue3", "TypeScript", "React", "Dart", "Flutter"]
            },
            {
                subtitle: "Trayectoria Personal",
                year: "09.2021 - 12.2022",
                description: `Durante la universidad, exploré muchas cosas por curiosidad. Aunque, en retrospectiva, la mayoría fueron superficiales y no construí proyectos concretos con ellas.
  
  Sin embargo, el proceso de aprendizaje de estas tecnologías satisfizo en gran medida mi curiosidad en ese momento.
  
  Debido a la extensión, por favor consulte mi artículo [“Pasado, Presente, Futuro”](./articles/past-now-future) para más detalles.`,
                tags: ["Resumen", "Reflexión", "Perspectiva", "Examen de ingreso a posgrado", "Blockchain", "Contratos Inteligentes", "Solidity", "Unreal Engine 5", "Trading Cuantitativo", "Bases de Datos", "Sistemas Operativos", "Aprendizaje Profundo", "Desarrollo de Escritorio", "Desarrollo de Juegos", "Mods de Minecraft"]
            }
        ]
    },
    {
        title: "Pasantía",
        positions: [
            {
                subtitle: "Desarrollo Backend NodeJS",
                year: "03.2025 - Presente",
                description: `
  - ♦ Implementación de una cadena de herramientas de línea de comandos basada en AST de TypeScript y JsonSchema para convertir de manera declarativa definiciones de TypeScript en documentación de API y sincronizar automáticamente con la plataforma de gestión de API.
  - ♦ Mantenimiento diario de la plataforma DevOps, incluyendo la adición de plantillas y la implementación de priorización de tareas.
  - ♦ Refactorización de la plataforma DevOps original utilizando Dagger para implementar pipelines CI/CD.
  - ♦ Integración del servicio de registros de Alibaba Cloud, encapsulando sus llamadas SDK en un método de invocación similar a un ORM.
  - ♦ Responsable del mantenimiento diario del backend del juego, integración del inicio de sesión del mini-juego OPPO, cargas de archivos en Qiniu Cloud, etc.
          `,
                tags: ["NodeJS", "TypeScript", "Koa", "Express", "Sequelize", "MySQL", "MongoDB", "Redis", "Jaeger", "DevOps", "CI/CD", "Dagger"]
            },
            {
                subtitle: "Desarrollo Frontend Vue",
                year: "03.2025 - Presente",
                description: `
  - ♦ Mantenimiento diario de la plataforma DevOps
          `,
                tags: ["Vue", "Vue Router", "Vite", "TypeScript", "DevOps", "Element Plus"]
            }
        ]
    }
] as const;

export const ptPT: Experience[] = [
    {
        title: "Universidade",
        positions: [
            {
                subtitle: "Desenvolvimento Backend / Golang",
                year: "09.2021 - 06.2025",
                description: `Conheci a linguagem Go durante as férias de inverno do primeiro ano. 
  Desde então, a maioria das minhas stacks giram em torno do Golang.
  
  Como a maioria dos Gophers, comecei com o stack Gin + Gorm para desenvolvimento web. Essa experiência me permitiu adaptar-me rapidamente a outros frameworks (como SpringBoot, Django, Flask, Express, Koa) e bibliotecas de terceiros.
  
  Mais tarde, comecei a explorar microsserviços e tecnologias modernas como GRPC, ProtoBuf, ETCD, Grafana, Prometheus e Docker.
  Aprendi bastante, embora infelizmente não tenha construído um sistema completo de microsserviços.`,
                tags: ["Desenvolvimento Backend", "Golang", "Contêineres", "Microsserviços", "Cloud Native"]
            },
            {
                subtitle: "Desenvolvimento Frontend",
                year: "05.2022 - 06.2025",
                description: `Minha jornada no frontend também começou com algumas coincidências interessantes.
  Talvez o ponto de partida tenha sido uma competição e um grupo de bate-papo.
  
  Graças a experiências anteriores no ensino médio, eu já tinha algum conhecimento em JQuery e no trio HTML/CSS/JS.
  Assim, comecei com Vue e suas ferramentas (Pinia, Vite, Vue Router, Vuex).
  
  Por interesse no TSX, também aprendi React e seu ecossistema.
  
  Mais tarde, descobri o Flutter e sua proposta de "escreva uma vez, execute em qualquer lugar", o que acabou sendo a base do meu projeto de graduação.`,
                tags: ["Frontend", "JQuery", "Vue3", "TypeScript", "React", "Dart", "Flutter"]
            },
            {
                subtitle: "Jornada de Aprendizado",
                year: "09.2021 - 12.2022",
                description: `Durante a universidade, explorei muitos assuntos por curiosidade. Embora a maioria tenha sido superficial, me diverti bastante.
  
  Essas experiências satisfizeram minha curiosidade tecnológica.
  
  Para mais detalhes, consulte meu artigo [Passado, Presente e Futuro](./articles/past-now-future).`,
                tags: ["Resumo", "Memórias", "Futuro", "Mestrado", "Blockchain", "Solidity", "Unreal Engine", "Trading", "Banco de Dados", "SO", "IA", "Desktop", "GameDev", "Minecraft Mods"]
            }
        ]
    },
    {
        title: "Estágio",
        positions: [
            {
                subtitle: "Desenvolvedor Backend com NodeJS",
                year: "03.2025 - presente",
                description: `
  - ♦ Ferramenta CLI baseada em AST do TypeScript e JsonSchema para gerar docs e sincronizar com plataforma de APIs.
  - ♦ Manutenção de plataforma DevOps, incluindo criação de templates e tarefas com prioridade.
  - ♦ Refatoração do CI/CD com Dagger.
  - ♦ Integração com Alibaba Cloud Logs com estilo ORM.
  - ♦ Manutenção do backend de jogos, integração com login OPPO MiniGames, upload com Qiniu.`,
                tags: ["NodeJS", "TypeScript", "koa", "express", "sequelize", "mysql", "mongo", "redis", "jaeger", "devops", "CI/CD", "dagger"]
            },
            {
                subtitle: "Desenvolvedor Frontend com Vue",
                year: "03.2025 - presente",
                description: `
  - ♦ Manutenção da plataforma DevOps.`,
                tags: ["vue", "vue-router", "vite", "TypeScript", "devops", "element-plus"]
            }
        ]
    }
];

export const ru: Experience[] = [
    {
        title: "Университет",
        positions: [
            {
                subtitle: "Бэкенд-разработка / Golang",
                year: "09.2021 - 06.2025",
                description: `С Go я познакомился в зимние каникулы первого курса.
  С тех пор большинство моих стеков сосредоточены вокруг Go.
  
  Как и многие Gopher'ы, я начал с Gin + Gorm. Этот опыт позволил мне быстро освоить другие фреймворки (SpringBoot, Django, Flask, Express, Koa) и сторонние библиотеки.
  
  Позже я начал изучать микросервисы и современные технологии: GRPC, ProtoBuf, ETCD, Grafana, Prometheus, Docker.
  Многое удалось изучить, но, к сожалению, не получилось создать полноценную систему микросервисов.`,
                tags: ["Бэкенд", "Golang", "Контейнеры", "Микросервисы", "Облачные технологии"]
            },
            {
                subtitle: "Фронтенд-разработка",
                year: "05.2022 - 06.2025",
                description: `Моя история с фронтендом началась также случайно — благодаря конкурсу и чату.
  
  Благодаря опыту в школе, я знал JQuery и HTML/CSS/JS.
  Сразу начал с Vue и его экосистемы (Pinia, Vite, Vue Router, Vuex).
  
  Из интереса к TSX я изучил React и его инструменты.
  
  Позже узнал о Flutter и его кросс-платформенной возможности. Это стало основой моего дипломного проекта.`,
                tags: ["Фронтенд", "JQuery", "Vue3", "TypeScript", "React", "Dart", "Flutter"]
            },
            {
                subtitle: "Личный путь",
                year: "09.2021 - 12.2022",
                description: `В университете я изучал многое ради интереса. Пусть это и было поверхностно, но я получал удовольствие.
  
  Этот путь удовлетворил моё техническое любопытство.
  
  Подробнее читайте в моей статье [Прошлое, Настоящее, Будущее](./articles/past-now-future).`,
                tags: ["Итоги", "Воспоминания", "Будущее", "Магистратура", "Блокчейн", "Solidity", "Unreal Engine", "Алготрейдинг", "БД", "ОС", "ИИ", "Desktop", "GameDev", "Моды Minecraft"]
            }
        ]
    },
    {
        title: "Стажировка",
        positions: [
            {
                subtitle: "NodeJS Бэкенд-разработчик",
                year: "03.2025 - по настоящее время",
                description: `
  - ♦ CLI-инструмент на основе AST TypeScript и JsonSchema для генерации документации и синхронизации с платформой API.
  - ♦ Поддержка DevOps-платформы: шаблоны, приоритет задач.
  - ♦ Переписал CI/CD на Dagger.
  - ♦ Интеграция с Alibaba Cloud Logs в стиле ORM.
  - ♦ Поддержка игрового бэкенда, логин OPPO, загрузка файлов на Qiniu.`,
                tags: ["NodeJS", "TypeScript", "koa", "express", "sequelize", "mysql", "mongo", "redis", "jaeger", "devops", "CI/CD", "dagger"]
            },
            {
                subtitle: "Frontend-разработчик на Vue",
                year: "03.2025 - по настоящее время",
                description: `
  - ♦ Поддержка платформы DevOps.`,
                tags: ["vue", "vue-router", "vite", "TypeScript", "devops", "element-plus"]
            }
        ]
    }
];

export const arSA: Experience[] = [
    {
        title: "الجامعة",
        positions: [
            {
                subtitle: "تطوير الخلفية / Golang",
                year: "09.2021 - 06.2025",
                description: `بدأت التعرف على Golang في عطلة الشتاء من السنة الأولى.
  منذ ذلك الحين، أصبحت معظم تقنياتي تدور حول لغة Go.
  
  مثل معظم المبرمجين، بدأت باستخدام Gin + Gorm لتطوير الويب، مما ساعدني لاحقًا على التكيف بسهولة مع أطر عمل أخرى مثل SpringBoot وDjango وFlask وExpress وKoa.
  
  لاحقًا، بدأت في استكشاف الخدمات المصغرة والتقنيات الحديثة مثل GRPC وProtoBuf وETCD وGrafana وPrometheus وDocker.
  تعلمت الكثير، رغم أنني لم أبني نظام خدمات مصغرة متكامل.`,
                tags: ["تطوير الخلفية", "Golang", "الحاويات", "الخدمات المصغرة", "الحوسبة السحابية"]
            },
            {
                subtitle: "تطوير الواجهة الأمامية",
                year: "05.2022 - 06.2025",
                description: `بدأت رحلتي في الواجهة الأمامية بسبب بعض الصدف.
  ربما كان نقطة البداية هي مسابقة ومجموعة دردشة.
  
  بفضل تجربتي في المدرسة الثانوية، كنت أعرف JQuery وثلاثي HTML/CSS/JS.
  ثم بدأت باستخدام Vue وأدواته (Pinia وVite وVue Router وVuex).
  
  بدافع الفضول، تعلمت أيضًا React.
  
  لاحقًا، اكتشفت Flutter وإمكانيته لتشغيل التطبيقات على عدة منصات. أصبح هو التقنية الرئيسية لمشروعي التخرج.`,
                tags: ["الواجهة الأمامية", "JQuery", "Vue3", "TypeScript", "React", "Dart", "Flutter"]
            },
            {
                subtitle: "رحلة التعلم",
                year: "09.2021 - 12.2022",
                description: `خلال الجامعة، تعلمت أشياء كثيرة بدافع الفضول. ربما لم أقم بإنشاء مشاريع عملية بها، لكنها أشبعت فضولي.
  
  لمزيد من التفاصيل، راجع مقالتي [الماضي، الحاضر، المستقبل](./articles/past-now-future).`,
                tags: ["ملخص", "ذكريات", "مستقبل", "الدراسات العليا", "البلوك تشين", "Solidity", "Unreal Engine", "تداول آلي", "قواعد البيانات", "أنظمة التشغيل", "الذكاء الاصطناعي", "تطوير سطح المكتب", "تطوير الألعاب", "مودات Minecraft"]
            }
        ]
    },
    {
        title: "التدريب العملي",
        positions: [
            {
                subtitle: "مطور خلفي باستخدام NodeJS",
                year: "03.2025 - حتى الآن",
                description: `
  - ♦ أداة سطر أوامر تعتمد على AST وJsonSchema لتوليد الوثائق ومزامنتها مع منصة API.
  - ♦ صيانة منصة DevOps، بما في ذلك القوالب وأولوية المهام.
  - ♦ إعادة بناء خطوط CI/CD باستخدام Dagger.
  - ♦ دمج خدمات السجلات من Aliyun بأسلوب ORM.
  - ♦ دعم الواجهة الخلفية للألعاب، تسجيل الدخول عبر OPPO، رفع الملفات إلى Qiniu.`,
                tags: ["NodeJS", "TypeScript", "koa", "express", "sequelize", "mysql", "mongo", "redis", "jaeger", "devops", "CI/CD", "dagger"]
            },
            {
                subtitle: "مطور واجهة أمامية باستخدام Vue",
                year: "03.2025 - حتى الآن",
                description: `
  - ♦ صيانة منصة DevOps.`,
                tags: ["vue", "vue-router", "vite", "TypeScript", "devops", "element-plus"]
            }
        ]
    }
];


export const experiences: Record<Locale, Experience[]> = {
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