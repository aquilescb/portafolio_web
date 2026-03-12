import { motion } from "framer-motion";

type TimelineProps<T> = {
   items: readonly T[];
   getKey: (item: T) => string;
   renderItem: (item: T) => React.ReactNode;
};

export function Timeline<T>({ items, getKey, renderItem }: TimelineProps<T>) {
   return (
      <ol className="relative space-y-5">
         {/* Rail vertical */}
         <div
            aria-hidden="true"
            className="
          pointer-events-none absolute left-[13px] top-0 h-full w-px
          bg-[color-mix(in_oklab,var(--primary)_45%,transparent)]
        "
         />

         {items.map((item, idx) => (
            <motion.li
               key={getKey(item)}
               initial={{ opacity: 0, y: 8 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.25, delay: idx * 0.05 }}
               className="relative pl-10"
            >
               {/* Dot */}
               <span
                  aria-hidden="true"
                  className="
              absolute left-[5px] top-6 h-4 w-4 rounded-full
              bg-[var(--primary)]
              ring-4 ring-[color-mix(in_oklab,var(--primary)_18%,transparent)]
              shadow-sm
            "
               />

               {/* Connector (dot -> card) */}
               <span
                  aria-hidden="true"
                  className="
              absolute left-[21px] top-[30px] h-px w-5
              bg-[color-mix(in_oklab,var(--primary)_45%,transparent)]
            "
               />

               {renderItem(item)}
            </motion.li>
         ))}
      </ol>
   );
}
