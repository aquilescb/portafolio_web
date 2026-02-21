import { motion } from "framer-motion";
import { Card } from "../../../../shared/ui/primitives/Card";

const STACK = [
   "React 19",
   "TypeScript",
   "Vite",
   "Tailwind v4",
   "React Router",
   "Framer Motion",
   "Lucide",
   "Zustand",
];

export function StackCarousel() {
   return (
      <section className="space-y-4">
         <div>
            <h2 className="text-lg font-semibold">Stack</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
               Tecnologías con las que construyo productos web.
            </p>
         </div>

         <Card className="overflow-hidden p-4">
            <motion.div
               className="flex gap-3"
               initial={{ x: 0 }}
               animate={{ x: ["0%", "-50%"] }}
               transition={{
                  duration: 12,
                  ease: "linear",
                  repeat: Infinity,
               }}
               style={{ willChange: "transform" }}
            >
               {[...STACK, ...STACK].map((item, idx) => (
                  <div
                     key={`${item}-${idx}`}
                     className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm"
                  >
                     {item}
                  </div>
               ))}
            </motion.div>
         </Card>
      </section>
   );
}
