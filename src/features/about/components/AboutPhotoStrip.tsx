import { motion } from "framer-motion";
type AboutPhoto = {
   src: string;
   alt: string;
};

type AboutPhotoStripProps = {
   photos: readonly AboutPhoto[];
};

export function AboutPhotoStrip({ photos }: AboutPhotoStripProps) {
   const safe = photos.filter(Boolean);

   return (
      <div className="relative grid gap-4 md:grid-cols-3">
         {safe.slice(0, 3).map((p, idx) => (
            <motion.div
               key={p.src}
               initial={{ opacity: 0, y: 8 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.25, delay: idx * 0.06 }}
               className="
              group relative overflow-hidden rounded-2xl

            "
            >
               <img
                  src={p.src}
                  alt={p.alt}
                  className="
                h-44 w-full object-cover
                transition-transform duration-300
                group-hover:scale-[1.02]
              "
                  loading={idx === 0 ? "eager" : "lazy"}
               />
            </motion.div>
         ))}
      </div>
   );
}
