import type { JourneyEventType } from "../model/types";

const map: Record<JourneyEventType, { label: string; bg: string }> = {
   education: { label: "Educación", bg: "bg-[var(--primary)]" },
   certification: { label: "Certificación", bg: "bg-[var(--secondary)]" },
   achievement: { label: "Logro", bg: "bg-[var(--primary-soft)]" },
};

export function JourneyBadge({ type }: { type: JourneyEventType }) {
   const t = map[type];
   return (
      <span
         className={`inline-flex items-center rounded-full px-3 py-1 text-xs text-white ${t.bg}`}
      >
         {t.label}
      </span>
   );
}
