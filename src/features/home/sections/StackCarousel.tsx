import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../../../shared/ui/primitives/Card";
import { STACK } from "../../../entities/stack/stack";

export function StackCarousel() {
   const items = useMemo(() => [...STACK, ...STACK], []);
   const trackRef = useRef<HTMLDivElement | null>(null);
   const [halfWidth, setHalfWidth] = useState(0);

   useLayoutEffect(() => {
      if (!trackRef.current) return;

      const el = trackRef.current;

      const measure = () => {
         // Como duplicamos, la mitad del scrollWidth es el ancho del 1er set
         const w = el.scrollWidth / 2;
         setHalfWidth(w);
      };

      measure();

      const ro = new ResizeObserver(measure);
      ro.observe(el);

      return () => ro.disconnect();
   }, []);

   // velocidad: px por segundo (más alto = más rápido)
   const speed = 80;
   const duration = halfWidth ? halfWidth / speed : 10;

   return (
      <section className="space-y-4">
         <div className="text-center">
            <h2 className="text-xl font-semibold">Stack</h2>
         </div>

         <Card className="relative overflow-hidden p-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--bg)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--bg)] to-transparent" />

            <motion.div
               ref={trackRef}
               className="flex gap-3 whitespace-nowrap"
               animate={halfWidth ? { x: [0, -halfWidth] } : { x: 0 }}
               transition={{
                  duration,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
               }}
               style={{ willChange: "transform" }}
            >
               {items.map(({ key, label, icon }, idx) => (
                  <div key={`${key}-${idx}`} className="shrink-0">
                     <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)] transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--primary)]/40">
                        <img src={icon} width={16} height={16} alt={label} />
                        <span>{label}</span>
                     </div>
                  </div>
               ))}
            </motion.div>
         </Card>
      </section>
   );
}
