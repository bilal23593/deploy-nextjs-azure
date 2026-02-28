import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { getRelatedBlogArticles } from "@/data/blogArticles";
import { caseStudyList, getCaseStudyBySlug, getRelatedCaseStudies } from "@/data/caseStudies";

export default function CaseStudyDetailPage({ caseStudy, relatedCaseStudies, relatedArticles }) {
  return (
    <CaseStudyTemplate
      caseStudy={caseStudy}
      relatedCaseStudies={relatedCaseStudies}
      relatedArticles={relatedArticles}
    />
  );
}

export function getStaticPaths() {
  return {
    paths: caseStudyList.map((caseStudy) => ({
      params: { slug: caseStudy.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  return {
    props: {
      caseStudy,
      relatedCaseStudies: getRelatedCaseStudies([], caseStudy.slug).slice(0, 2),
      relatedArticles: getRelatedBlogArticles(caseStudy.articleSlugs || []).slice(0, 3),
    },
  };
}
