import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "../../../shared/ui/primitives/Button";

import { useContentLang } from "../../../shared/hooks/useContentLang";
import { getHeroContent } from "../../../content/home";

// ajustá a tu path real
import avatar from "../../../assets/images/profile.jpg";

const fadeUp = {
   hidden: { opacity: 0, y: 10 },
   show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay },
   }),
};

export function Hero() {
   const lang = useContentLang();
   const hero = getHeroContent(lang);

   return (
      <section className="relative py-10 md:py-14">
         {/* fondo suave con tus tokens (más vida sin imagen) */}
         <div
            className="pointer-events-none absolute left-1/2 top-[-140px] h-[420px] w-[min(920px,92vw)] -translate-x-1/2 rounded-[999px] blur-3xl opacity-40"
            style={{
               background:
                  "radial-gradient(circle at 20% 40%, var(--primary-soft), transparent 60%), radial-gradient(circle at 80% 25%, var(--secondary-soft), transparent 55%)",
            }}
         />

         <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            {/* Avatar grande */}
            <motion.div
               initial={{ opacity: 0, y: 10, scale: 0.98 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="relative"
            >
               {/* glow */}
               <div
                  className="pointer-events-none absolute inset-0 rounded-full blur-2xl opacity-70"
                  style={{
                     background:
                        "radial-gradient(circle at 30% 30%, var(--primary-soft), transparent 60%), radial-gradient(circle at 70% 70%, var(--secondary-soft), transparent 60%)",
                  }}
               />

               {/* foto */}
               <div
                  className="relative overflow-hidden rounded-full border shadow-sm"
                  style={{
                     width: 160,
                     height: 160,
                     borderColor: "var(--border)",
                     background: "var(--surface)",
                  }}
               >
                  <img
                     src={avatar}
                     alt={hero.name}
                     className="h-full w-full object-cover"
                     loading="eager"
                  />
               </div>

               {/* ring */}
               <div
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{
                     boxShadow:
                        "0 0 0 6px rgba(255,255,255,0.02), 0 0 0 1px var(--border)",
                  }}
               />
            </motion.div>

            {/* Name */}
            <motion.h1
               className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl"
               initial="hidden"
               animate="show"
               variants={fadeUp}
               custom={0.08}
            >
               {hero.name}
            </motion.h1>

            {/* Role line */}
            <motion.p
               className="mt-3 text-sm text-[var(--muted)] sm:text-base"
               initial="hidden"
               animate="show"
               variants={fadeUp}
               custom={0.12}
            >
               {hero.role}
            </motion.p>

            {/* Description */}
            <motion.p
               className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
               initial="hidden"
               animate="show"
               variants={fadeUp}
               custom={0.16}
            >
               {hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
               className="mt-7 flex flex-wrap justify-center gap-3"
               initial="hidden"
               animate="show"
               variants={fadeUp}
               custom={0.2}
            >
               <a
                  href="/cv/Aquiles-Cancinos-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
               >
                  <Button>
                     <Download className="mr-2 h-4 w-4" />
                     {hero.ctas.cvLabel}
                  </Button>
               </a>

               <a href="/projects">
                  <Button
                     variant="ghost"
                     className="border border-[var(--border)] bg-[var(--surface)]"
                  >
                     {hero.ctas.projectsLabel}
                     <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
               </a>
            </motion.div>
         </div>
      </section>
   );
}
