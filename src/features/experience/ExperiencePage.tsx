import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useContentLang } from "../../shared/hooks/useContentLang";
import { getExperience } from "../../content/experience";
import { ExperienceItem } from "../../entities/experience/ExperienceItem";
import { usePageMeta } from "../../shared/hooks/usePageMeta";

export function ExperiencePage() {
   const { t } = useTranslation();
   const lang = useContentLang();

   usePageMeta({
      title: t("meta.experience.title"),
      description: t("meta.experience.desc"),
      path: "/experience",
   });

   const experience = useMemo(() => getExperience(lang), [lang]);

   return (
      <section className="space-y-8">
         <div>
            <h1 className="text-2xl font-semibold">{t("experience.title")}</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
               {t("experience.subtitle")}
            </p>
         </div>

         {/* Timeline */}
         <ol className="relative space-y-5">
            {/* Rail vertical */}
            <div
               aria-hidden="true"
               className="
            pointer-events-none absolute left-[13px] top-0 h-full w-px
            bg-[color-mix(in_oklab,var(--primary)_45%,transparent)]
          "
            />

            {experience.map((item, idx) => (
               <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className="relative pl-10"
               >
                  {/* Dot */}
                  <span
                     aria-hidden="true"
                     className="
                absolute left-[5px] top-6 h-4 w-4 rounded-full
                bg-[var(--primary)]
                ring-4 ring-[color-mix(in_oklab,var(--primary)_18%,transparent)]
                shadow-sm
              "
                  />

                  {/* Connector (dot -> card) */}
                  <span
                     aria-hidden="true"
                     className="
                absolute left-[21px] top-[30px] h-px w-5
                bg-[color-mix(in_oklab,var(--primary)_45%,transparent)]
              "
                  />

                  <ExperienceItem item={item} />
               </motion.li>
            ))}
         </ol>
      </section>
   );
}
