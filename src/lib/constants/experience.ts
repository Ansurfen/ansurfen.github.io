import type { Experience } from "../types";

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
                "subtitle": "Vue3 Frontend Development",
                "year": "03.2025 - Present",
                "description": `
- ♦ Routine maintenance of DevOps platform
                `,
                "tags": ["Vue3", "TypeScript", "devops", "element-plus"]
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
                subtitle: "NodeJS后端开发",
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
                subtitle: "Vue3前端开发",
                year: "03.2025 - 至今",
                description: `
- ♦ DevOps 平台日常维护
                `,
                tags: ["Vue3", "TypeScript", "devops", "element-plus"]
            }
        ]
    }
] as const;

export const experiences = {
    enUS,
    zhCN,
} as const;