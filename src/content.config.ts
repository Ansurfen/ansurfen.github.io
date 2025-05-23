import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

function createBlogCollection(base: string) {
  return defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base }),
    schema: () =>
      z.object({
        pubDatetime: z.date(),
        series: z.string().optional(),
        image: z.string().optional(),
        title: z.string(),
        draft: z.boolean().optional(),
        tags: z.array(z.string()).default(["others"]),
        category: z.string(),
        description: z.string(),
      }),
  });
}

function createProjectCollection(base: string) {
  return defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base }),
    schema: () =>
      z.object({
        name: z.string(),
        technologies: z.array(z.string()),
        description: z.string(),
        image: z.string().optional(),
        sourceCode: z.string().optional(),
        preview: z.string().optional(),
        type: z.union([z.literal("top"), z.literal("normal")]),
      }),
  });
}

export const collections = {
  blog: createBlogCollection("./docs/en_us/blog"),
  projects: createProjectCollection("./docs/en_us/projects"),
  zhCNBlog: createBlogCollection("./docs/zh_cn/blog"),
  zhCNProjects: createProjectCollection("./docs/zh_cn/projects"),
  zhTWBlog: createBlogCollection("./docs/zh_tw/blog"),
  zhTWProjects: createProjectCollection("./docs/zh_tw/projects"),
};

export type BlogCollectionKey = "blog" | "zhCNBlog" | "zhTWBlog";
export type ProjectsCollectionKey = "projects" | "zhCNProjects" | "zhTWProjects";