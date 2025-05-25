import { getCollection } from "astro:content";
import { SITE } from "@/lib/config";
import type { GetStaticPaths } from "astro";
import type { BlogCollection } from "@/content.config";

export async function getArticlePaths(collection: BlogCollection) {
    const articles = await getCollection(collection, ({ data }) => !data.draft);
    const sortedArticles = articles.sort(
        (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
    );
    return async ({ paginate }: Parameters<GetStaticPaths>[0]) => {
        return paginate(sortedArticles, { pageSize: SITE.postPerPage });
    };
}

export async function getSeriesPaths(collection: BlogCollection) {
    const articles = await getCollection(collection);
    return articles
        .map(article => ({
            params: { series: article.data.series || "" },
        }))
        .filter(({ params }) => params.series !== "");
}

export async function getSeriesArticles(collection: BlogCollection, series: string) {
    const articles = await getCollection(collection);
    return articles.filter(article => article.data.series === series);
}

export async function getCategoryPaths(collection: BlogCollection) {
    const articles = await getCollection(collection);
    return articles.map(article => ({
        params: { category: article.data.category },
    }));
} 
