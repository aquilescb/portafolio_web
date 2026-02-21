import { motion } from "framer-motion";
import { experience } from "../../../content/experience";
import { ExperienceItem } from "../../../entities/experience/ui/ExperienceItem";

export function ExperiencePage() {
   return (
      <section className="space-y-8">
         <div>
            <h1 className="text-2xl font-semibold">Experiencia</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
               Roles, responsabilidades e impacto medible.
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
