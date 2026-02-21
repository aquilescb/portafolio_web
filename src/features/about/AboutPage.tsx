import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useContentLang } from "../../shared/hooks/useContentLang";
import { getAbout } from "../../content/about";
import { AboutSection } from "./components/AboutSection";
import { InfoCard } from "./components/InfoCard";
import { usePageMeta } from "../../shared/hooks/usePageMeta";

export function AboutPage() {
   const { t } = useTranslation();
   const lang = useContentLang();

   usePageMeta({
      title: t("meta.about.title"),
      description: t("meta.about.desc"),
      path: "/about",
   });

   const about = useMemo(() => getAbout(lang), [lang]);

   return (
      <section className="space-y-8">
         {/* Hero */}
         <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
         >
            <h1 className="text-2xl font-semibold">{t("about.title")}</h1>
            <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
               {about.headline}
            </p>
         </motion.div>

         {/* Who I am */}
         <AboutSection title={t("about.sections.whoIAm")}>
            <div className="space-y-2">
               {about.whoIAm.map((p, idx) => (
                  <p key={idx}>{p}</p>
               ))}
            </div>
         </AboutSection>

         {/* How I think */}
         <div className="space-y-3">
            <h2 className="text-lg font-semibold">
               {t("about.sections.howIThink.title")}
            </h2>
            <p className="text-sm text-[var(--muted)]">
               {t("about.sections.howIThink.subtitle")}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
               {about.howIThink.map((item, idx) => (
                  <motion.div
                     key={item.title}
                     initial={{ opacity: 0, y: 8 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.25, delay: idx * 0.05 }}
                  >
                     <InfoCard title={item.title} text={item.text} />
                  </motion.div>
               ))}
            </div>
         </div>

         {/* Work mindset */}
         <AboutSection title={t("about.sections.workMindset")}>
            <ul className="list-disc space-y-1 pl-5">
               {about.workMindset.map((i, idx) => (
                  <li key={idx}>{i}</li>
               ))}
            </ul>
         </AboutSection>

         {/* Differentiators */}
         <div className="space-y-3">
            <h2 className="text-lg font-semibold">
               {t("about.sections.differentiators")}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
               {about.differentiators.map((d, idx) => (
                  <motion.div
                     key={d.title}
                     initial={{ opacity: 0, y: 8 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.25, delay: idx * 0.05 }}
                  >
                     <InfoCard title={d.title} text={d.text} />
                  </motion.div>
               ))}
            </div>
         </div>

         {/* Discipline bridge */}
         <AboutSection title={t("about.sections.disciplineBridge")}>
            <div className="space-y-2">
               {about.disciplineBridge.map((p, idx) => (
                  <p key={idx}>{p}</p>
               ))}
            </div>
         </AboutSection>
      </section>
   );
}
