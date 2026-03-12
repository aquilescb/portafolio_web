import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { getProjectDetail } from "../../content/projects";
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
      return getProjectDetail(lang, slug) ?? undefined;
   }, [lang, slug]);

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

            <Card variant="glass" className="p-5 text-sm text-[var(--muted)]">
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

   const features = project.features ?? [];
   const screenshots = project.screenshots ?? [];
   const resources = project.links ?? [];

   return (
      <div className="space-y-10">
         <MotionSection>
            <div className="space-y-4">
               <ProjectHero project={project} />

               <div className="space-y-4">
                  <ProjectSection title={t("projects.detail.sections.problem")}>
                     {problem}
                  </ProjectSection>

                  <ProjectSection title={t("projects.detail.sections.solution")}>
                     {solution}
                  </ProjectSection>

                  {features.length > 0 && (
                     <ProjectSection title={t("projects.detail.sections.features")}>
                        <ul className="list-disc space-y-2 pl-5">
                           {features.map((feature, idx) => (
                              <li key={`${project.slug}-feature-${idx}`}>{feature}</li>
                           ))}
                        </ul>
                     </ProjectSection>
                  )}

                  {screenshots.length > 0 && (
                     <ProjectSection title={t("projects.detail.sections.screenshots")}>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                           {screenshots.map((image) => (
                              <div
                                 key={`${project.slug}-${image.src}`}
                                 className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)]/30"
                              >
                                 <div className="relative aspect-[16/10] w-full">
                                    <img
                                       src={image.src}
                                       alt={image.alt}
                                       className="h-full w-full object-cover"
                                       loading="lazy"
                                       decoding="async"
                                    />
                                 </div>
                              </div>
                           ))}
                        </div>
                     </ProjectSection>
                  )}
               </div>
               
               <ResourceLinks
                  title={t("projects.detail.sections.links")}
                  links={resources}
               />
            </div>
         </MotionSection>

 
      </div>
   );
}