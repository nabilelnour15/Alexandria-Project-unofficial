export interface NewsArticle {
    id: string;
    title: string;
    summary: string;
    content: string; // Full HTML/Markdown content
    category: string;
    tags: string[];
    author: string;
    publishDate: string;
    image: string;
    isHot?: boolean;
}
