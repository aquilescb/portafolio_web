import { motion } from "framer-motion";
import { Card } from "../../../shared/ui/primitives/Card";

const STACK = [
   { label: "React 19", icon: "src/assets/stack/react.svg" },
   { label: "TypeScript", icon: "src/assets/stack/typescript.svg" },
   { label: "Vite", icon: "src/assets/stack/vite.svg" },
   { label: "Tailwind v4", icon: "src/assets/stack/tailwindcss.svg" },
   { label: "Python", icon: "src/assets/stack/python.svg" },
   { label: "PostgreSQL", icon: "src/assets/stack/postgresql.svg" },
   { label: "Docker", icon: "src/assets/stack/docker.svg" },
   { label: "Java", icon: "src/assets/stack/java.svg" },
   { label: "Node.js", icon: "src/assets/stack/nodejs.svg" },
   { label: "HTML", icon: "src/assets/stack/html5.svg" },
   { label: "CSS", icon: "src/assets/stack/css3.svg" },
   { label: "JavaScript", icon: "src/assets/stack/javascript.svg" },
];

export function StackCarousel() {
   const items = [...STACK, ...STACK];

   return (
      <section className="space-y-4">
         <div className="text-center">
            <h2 className="text-xl font-semibold">Stack</h2>
         </div>

         <Card className="relative overflow-hidden p-4">
            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--bg)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--bg)] to-transparent" />

            <motion.div
               className="flex gap-3"
               initial={{ x: 0 }}
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 14, ease: "linear", repeat: Infinity }}
               style={{ willChange: "transform" }}
            >
               {items.map(({ label, icon }, idx) => (
                  <motion.div
                     key={`${label}-${idx}`}
                     whileHover={{ y: -2 }}
                     className="shrink-0"
                  >
                     <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)] transition-colors hover:border-[var(--text)]/30">
                        <img src={icon} className="h-4 w-4" />
                        <span>{label}</span>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </Card>
      </section>
   );
}
