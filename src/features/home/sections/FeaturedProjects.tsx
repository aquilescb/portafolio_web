import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { getFeaturedProjects } from "../../../content/projects";
import { useContentLang } from "../../../shared/hooks/useContentLang";
import { ProjectCard } from "../../../entities/project/ProjectCard";

export function FeaturedProjects() {
   const { t } = useTranslation();
   const lang = useContentLang();

   const featured = useMemo(() => {
      return getFeaturedProjects(lang, 3);
   }, [lang]);

   return (
      <section className="space-y-4">
         <div className="flex items-end justify-between gap-4">
            <div>
               <h2 className="text-lg font-semibold">
                  {t("home.featured.title")}
               </h2>
               <p className="mt-1 text-sm text-[var(--muted)]">
                  {t("home.featured.subtitle")}
               </p>
            </div>

            <Link
               to="/projects"
               className="text-sm text-[var(--primary)] hover:underline"
            >
               {t("home.featured.viewAll")}
            </Link>
         </div>

         <div className="grid gap-4 md:grid-cols-3">
            {featured.map((p) => (
               <ProjectCard key={p.slug} project={p} />
            ))}
         </div>
      </section>
   );
}
