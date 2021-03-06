import type { Article, Articles } from "~/types";
import type { getEnv } from "~/utils";

/**
 * Used inside of LoaderFunction and ActionFunction
 * Used along with useLoaderData() and useActionData()
 */

export type LoaderDataSession = {
  user: any;
  theme: any;
  error: any;
  ENV: ReturnType<typeof getEnv>;
};

export type LoaderDataBlog = {
  articles: Articles;
};

export type LoaderDataBlogArticle = {
  slug: string;
  article: Article;
  content: any;
};
