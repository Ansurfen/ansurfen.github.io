import Gitee from "@/components/ui/icons/gitee.astro";
import Gitea from "@/components/ui/icons/gitea.astro";
import GitCode from "@/components/ui/icons/gitcode.astro";
import Codepen from "@/components/ui/icons/codepen.astro";
import Sourceforge from "@/components/ui/icons/sourceforge.astro";
import type { BlogMedia, GitMedia, SocialNetworkMedia } from "@/lib/types";
import CSDN from "@/components/ui/icons/csdn.astro";
import Jianshu from "@/components/ui/icons/jianshu.astro";
import { GitHubDark, GitLab, Bitbucket, Facebook, XDark, Discord, YouTube } from "developer-icons";
import {
    Book,
    PenTool,
    Globe,
    Code2,
    FileCode,
    GitFork,
} from "lucide-react";
import V2Ex from "@/components/ui/icons/v2ex.astro";
import Juejin from "@/components/ui/icons/juejin.astro";
import Segmentfault from "@/components/ui/icons/segmentfault.astro";
import Studygolang from "@/components/ui/icons/studygolang.astro";
import Medium from "@/components/ui/icons/medium.astro";
import Devto from "@/components/ui/icons/dev-to.astro";
import Cnblogs from "@/components/ui/icons/cnblogs.astro";

export const gitMedia: Partial<GitMedia> = {
    github: {
        title: "GitHub",
        href: "https://github.com/ansurfen",
        icon: GitHubDark,
    },
    gitlab: {
        title: "GitLab",
        href: "https://gitlab.com/ansurfen",
        icon: GitLab,
    },
    gitee: {
        title: "Gitee",
        href: "https://gitee.com/ansurfen",
        icon: Gitee,
    },
    gitea: {
        title: "Gitea",
        href: "https://gitea.com/ansurfen",
        icon: Gitea,
    },
    gitcode: {
        title: "GitCode",
        href: "https://gitcode.com/Ansurfen1",
        icon: GitCode,
    },
    sourceforge: {
        title: "SourceForge",
        href: "https://sourceforge.net/u/ansurfen",
        icon: Sourceforge,
    },
    codepen: {
        title: "CodePen",
        href: "https://codepen.io/ansurfen",
        icon: Codepen,
    },
    // codebase: {
    //     title: "Codebase",
    //     href: "https://codebasehq.com/ansurfen",
    //     icon: null,
    // },
    bitbucket: {
        title: "Bitbucket",
        href: "https://bitbucket.org/ansurfen",
        icon: Bitbucket,
    },
}

export const blogMedia: Partial<BlogMedia> = {
    csdn: {
        title: "CSDN",
        href: "https://blog.csdn.net/ansurfen",
        icon: CSDN,
    },
    cnblogs: {
        title: "博客园",
        href: "https://www.cnblogs.com/ansurfen/",
        icon: Cnblogs,
    },
    juejin: {
        title: "掘金",
        href: "https://juejin.cn/user/1251662262448877",
        icon: Juejin,
    },
    jianshu: {
        title: "简书",
        href: "https://www.jianshu.com/u/43223a61e460",
        icon: Jianshu,
    },
    v2ex: {
        title: "V2EX",
        href: "https://www.v2ex.com/member/ansurfen",
        icon: V2Ex,
    },
    segmentfault: {
        title: "思否",
        href: "https://segmentfault.com/u/ansurfen",
        icon: Segmentfault,
    },
    studygolang: {
        title: "Go语言中文网",
        href: "https://studygolang.com/user/ansurfen",
        icon: Studygolang,
    },
    devto: {
        title: "Dev.to",
        href: "https://dev.to/ansurfen",
        icon: Devto,
    },
    medium: {
        title: "Medium",
        href: "https://medium.com/@ansurfen",
        icon: Medium,
    },
}

export const socialNetworkMedia: Partial<SocialNetworkMedia> = {
    facebook: {
        title: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100092196586721",
        icon: Facebook,
    },
    twitter: {
        title: "Twitter",
        href: "https://x.com/ansurfen",
        icon: XDark,
    },
    discord: {
        title: "Discord",
        href: "https://discord.com/invite/ansurfen",
        icon: Discord,
    },
}