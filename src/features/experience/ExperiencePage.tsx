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

         <div className="space-y-4">
            {experience.map((item, idx) => (
               <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
               >
                  <ExperienceItem item={item} />
               </motion.div>
            ))}
         </div>
      </section>
   );
}
