import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { getProjectBySlug } from "../../content/projects";
import { useContentLang } from "../../shared/hooks/useContentLang";
import { Card } from "../../shared/ui/primitives/Card";
import { ProjectHero } from "./components/ProjectHero";
import { ProjectSection } from "./components/ProjectSection";
import { ResourceLinks } from "./components/ResourceLinks";
import { MotionSection } from "../../shared/ui/layout/MotionSection";
import { usePageMeta } from "../../shared/hooks/usePageMeta";

export function ProjectDetailPage() {
   const { slug } = useParams<{ slug: string }>();
   const { t } = useTranslation();
   const lang = useContentLang();

   const project = useMemo(() => {
      if (!slug) return undefined;
      return getProjectBySlug(lang, slug);
   }, [lang, slug]);

   // Hooks siempre arriba, sin conditional returns
   usePageMeta({
      title: project ? project.title : t("meta.projectNotFound.title"),
      description: project ? project.summary : t("meta.projectNotFound.desc"),
      path: slug ? `/projects/${slug}` : "/projects",
   });

   if (!project) {
      return (
         <section className="space-y-4">
            <h1 className="text-2xl font-semibold">
               {t("projects.notFound.title")}
            </h1>
            <Card className="p-5 text-sm text-[var(--muted)]">
               {t("projects.notFound.desc")}
               <div className="mt-3">
                  <Link
                     className="text-[var(--primary)] hover:underline"
                     to="/projects"
                  >
                     {t("common.backToProjects")}
                  </Link>
               </div>
            </Card>
         </section>
      );
   }

   const problem = project.problem ?? t("projects.detail.placeholders.problem");
   const solution =
      project.solution ?? t("projects.detail.placeholders.solution");
   const architecture =
      project.architecture ?? t("projects.detail.placeholders.architecture");
   const results = project.results?.length
      ? project.results
      : [t("projects.detail.placeholders.results")];

   const tradeoffs =
      project.tradeoffs ?? t("projects.detail.placeholders.tradeoffs");
   const learnings =
      project.learnings ?? t("projects.detail.placeholders.learnings");
   const nextSteps =
      project.nextSteps ?? t("projects.detail.placeholders.nextSteps");

   const resources = project.resources?.length
      ? project.resources
      : project.links;

   return (
      <div className="space-y-10">
         <MotionSection>
            <ProjectHero project={project} />

            <ProjectSection title={t("projects.detail.sections.problem")}>
               {problem}
            </ProjectSection>

            <ProjectSection title={t("projects.detail.sections.solution")}>
               {solution}
            </ProjectSection>

            <ProjectSection title={t("projects.detail.sections.architecture")}>
               {architecture}
            </ProjectSection>

            <ProjectSection title={t("projects.detail.sections.results")}>
               <ul className="list-disc pl-5 space-y-1">
                  {results.map((r, idx) => (
                     <li key={idx}>{r}</li>
                  ))}
               </ul>
            </ProjectSection>

            <div className="grid gap-4 lg:grid-cols-3">
               <ProjectSection title={t("projects.detail.sections.tradeoffs")}>
                  {tradeoffs}
               </ProjectSection>
               <ProjectSection title={t("projects.detail.sections.learnings")}>
                  {learnings}
               </ProjectSection>
               <ProjectSection title={t("projects.detail.sections.nextSteps")}>
                  {nextSteps}
               </ProjectSection>
            </div>
         </MotionSection>

         <ResourceLinks links={resources} />

         <div className="pt-2">
            <Link
               className="text-sm text-[var(--primary)] hover:underline"
               to="/projects"
            >
               {t("common.backToProjects")}
            </Link>
         </div>
      </div>
   );
}
