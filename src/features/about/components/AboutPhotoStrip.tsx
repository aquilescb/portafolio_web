import { motion } from "framer-motion";

type AboutPhoto = {
   src: string;
   alt: string;
};

type AboutPhotoStripProps = {
   photos: readonly AboutPhoto[];
};

export function AboutPhotoStrip({ photos }: AboutPhotoStripProps) {
   const safe = photos.slice(0, 3);
   const single = safe.length === 1;

   if (single) {
      return (
         <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex justify-center"
         >
            <div className="group relative w-48 overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm">
               <img
                  src={safe[0].src}
                  alt={safe[0].alt}
                  width={192}
                  height={192}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  fetchPriority="high"
                  decoding="async"
               />
            </div>
         </motion.div>
      );
   }

   return (
      <div className="grid gap-4 md:grid-cols-3">
         {safe.map((p, idx) => (
            <motion.div
               key={`${p.src}-${idx}`}
               initial={{ opacity: 0, y: 8 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.25, delay: idx * 0.06 }}
               className="group relative overflow-hidden rounded-2xl border border-[var(--border)]"
            >
               <img
                  src={p.src}
                  alt={p.alt}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading={idx === 0 ? "eager" : "lazy"}
               />
            </motion.div>
         ))}
      </div>
   );
}
