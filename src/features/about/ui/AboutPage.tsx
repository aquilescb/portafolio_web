import { motion } from "framer-motion";
import { about } from "../../../content/about";
import { AboutSection } from "./components/AboutSection";
import { InfoCard } from "./components/InfoCard";

export function AboutPage() {
   return (
      <section className="space-y-8">
         {/* Hero */}
         <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
         >
            <h1 className="text-2xl font-semibold">Sobre mí</h1>
            <p className="mt-2 text-sm text-[var(--muted)] max-w-3xl">
               {about.headline}
            </p>
         </motion.div>

         {/* Who I am */}
         <AboutSection title="Quién soy profesionalmente">
            <div className="space-y-2">
               {about.whoIAm.map((p, idx) => (
                  <p key={idx}>{p}</p>
               ))}
            </div>
         </AboutSection>

         {/* How I think */}
         <div className="space-y-3">
            <h2 className="text-lg font-semibold">Cómo pienso los sistemas</h2>
            <p className="text-sm text-[var(--muted)]">
               Mi forma de trabajo prioriza claridad, escalabilidad y decisiones
               justificadas.
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
         <AboutSection title="Mentalidad de trabajo">
            <ul className="list-disc pl-5 space-y-1">
               {about.workMindset.map((i, idx) => (
                  <li key={idx}>{i}</li>
               ))}
            </ul>
         </AboutSection>

         {/* Differentiators */}
         <div className="space-y-3">
            <h2 className="text-lg font-semibold">Rasgos diferenciales</h2>
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
         <AboutSection title="Disciplina personal ↔ desarrollo técnico">
            <div className="space-y-2">
               {about.disciplineBridge.map((p, idx) => (
                  <p key={idx}>{p}</p>
               ))}
            </div>
         </AboutSection>
      </section>
   );
}
