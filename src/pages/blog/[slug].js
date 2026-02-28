import BlogArticleTemplate from "@/components/BlogArticleTemplate";
import {
  blogArticleList,
  getBlogArticleBySlug,
  getRelatedBlogArticles,
} from "@/data/blogArticles";
import { getRelatedCaseStudies } from "@/data/caseStudies";

export default function BlogArticleDetailPage({ article, relatedArticles, relatedCaseStudies }) {
  return (
    <BlogArticleTemplate
      article={article}
      relatedArticles={relatedArticles}
      relatedCaseStudies={relatedCaseStudies}
    />
  );
}

export function getStaticPaths() {
  return {
    paths: blogArticleList.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const article = getBlogArticleBySlug(params.slug);

  return {
    props: {
      article,
      relatedArticles: getRelatedBlogArticles([], article.slug).slice(0, 3),
      relatedCaseStudies: getRelatedCaseStudies(article.caseStudySlugs || []).slice(0, 2),
    },
  };
}
