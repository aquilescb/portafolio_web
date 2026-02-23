import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { useContentLang } from "../../shared/hooks/useContentLang";
import { getAbout } from "../../content/about";
import { AboutSection } from "./components/AboutSection";
import { InfoCard } from "./components/InfoCard";
import { usePageMeta } from "../../shared/hooks/usePageMeta";
import { STACK } from "../../entities/stack/stack";
import me from "../../assets/images/profile.jpg";

import { AboutPhotoStrip } from "./components/AboutPhotoStrip";
export function AboutPage() {
   const { t } = useTranslation();
   const lang = useContentLang();

   usePageMeta({
      title: t("meta.about.title"),
      description: t("meta.about.desc"),
      path: "/about",
   });

   const about = useMemo(() => getAbout(lang), [lang]);
   const photos = useMemo(
      () =>
         [
            { src: me, alt: "Aquiles — foto 1" },
            { src: me, alt: "Aquiles — foto 2" },
            { src: me, alt: "Aquiles — foto 3" },
         ] as const,
      [],
   );
   const groupedStack = useMemo(() => {
      return {
         frontend: STACK.filter((s) => s.category === "frontend"),
         backend: STACK.filter((s) => s.category === "backend and runtime"),
         language: STACK.filter((s) => s.category === "language"),
         database: STACK.filter((s) => s.category === "database"),
      };
   }, []);
   return (
      <section className="space-y-8">
         {/* FOTO Strip*/}
         <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
         >
            <AboutPhotoStrip photos={photos} />
         </motion.div>
         {/* Who I am */}
         <AboutSection title={t("about.sections.whoIAm")}>
            <div className="space-y-2">
               {about.whoIAm.map((p, idx) => (
                  <p key={idx}>{p}</p>
               ))}
            </div>
         </AboutSection>

         {/* Tech stack */}
         <div className="space-y-4">
            <h2 className="text-lg font-semibold">
               {t("about.sections.stack.title")}
            </h2>

            <p className="text-sm text-[var(--muted)]">
               {t("about.sections.stack.subtitle")}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
               {Object.entries(groupedStack).map(([category, items]) => {
                  if (!items.length) return null;

                  return (
                     <div
                        key={category}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
                     >
                        <div className="text-sm font-semibold capitalize">
                           {category}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-3">
                           {items.map((tech) => (
                              <div
                                 key={tech.key}
                                 className="
                  flex items-center gap-2 rounded-full
                  border border-[var(--border)]
                  bg-[var(--bg)]
                  px-3 py-1.5 text-xs
                  text-[var(--text)]
                  transition hover:border-[var(--primary)]/40
                "
                              >
                                 <img
                                    src={tech.icon}
                                    alt={tech.label}
                                    className="h-4 w-4"
                                 />
                                 {tech.label}
                              </div>
                           ))}
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>

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
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.25, delay: idx * 0.05 }}
                  >
                     <InfoCard title={item.title} text={item.text} />
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

         {/* CTA */}
         <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <div className="pointer-events-none absolute -inset-6 bg-[var(--gradient-brand)] opacity-10 blur-3xl" />

            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
               <div>
                  <h2 className="text-base font-semibold">
                     {t("about.cta.title")}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
                     {t("about.cta.subtitle")}
                  </p>
               </div>

               <div className="flex flex-wrap gap-2">
                  <NavLink
                     to="/contact"
                     className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
                  >
                     {t("about.cta.primary")}
                  </NavLink>

                  <NavLink
                     to="/projects"
                     className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                  >
                     {t("about.cta.secondary")}
                  </NavLink>
               </div>
            </div>
         </div>
      </section>
   );
}
