import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "../../../../shared/ui/primitives/Button";

export function Hero() {
   return (
      <section className="grid gap-8 md:grid-cols-12 md:items-center">
         <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
         >
            <p className="text-sm text-[var(--muted)]">Portfolio</p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
               Aquiles Cancinos
            </h1>

            <p className="mt-3 text-[var(--muted)]">
               Estudiante de Ingeniería Informática. Desarrollador de software
               fullstack (en progreso).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
               <a
                  href="/cv/Aquiles-Cancinos-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
               >
                  <Button>
                     <Download className="mr-2 h-4 w-4" />
                     Descargar CV
                  </Button>
               </a>

               <a href="/projects">
                  <Button variant="ghost">
                     Ver proyectos <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
               </a>
            </div>
         </motion.div>

         <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
         >
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
               <div className="text-sm text-[var(--muted)]">Focus actual</div>
               <ul className="mt-3 space-y-2 text-sm">
                  <li>• Arquitectura modular + escalable</li>
                  <li>• UI/UX consistente con Tailwind</li>
                  <li>• Tipado fuerte con TypeScript</li>
                  <li>• Ruteo, estados y validaciones</li>
               </ul>
            </div>
         </motion.div>
      </section>
   );
}
