import type { JourneyEvent } from "./types";
import { JourneyTimelineItem } from "./JourneyTimelineItem";
import { motion } from "framer-motion";

export function JourneyTimeline({ items }: { items: JourneyEvent[] }) {
   return (
      <div className="relative">
         {/* Línea */}
         <div className="absolute left-3 top-0 h-full w-px bg-[var(--border)]" />

         <div className="space-y-4">
            {items.map((item, idx) => (
               <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className="relative pl-10"
               >
                  {/* Punto */}
                  <div className="absolute left-[6px] top-6 h-3 w-3 rounded-full bg-[var(--primary)]" />
                  <JourneyTimelineItem item={item} />
               </motion.div>
            ))}
         </div>
      </div>
   );
}
