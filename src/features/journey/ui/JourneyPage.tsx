import { journey } from "../../../content/journey";
import { JourneyTimeline } from "../../../entities/journey/ui/JourneyTimeline";

export function JourneyPage() {
   return (
      <section className="space-y-8">
         <div>
            <h1 className="text-2xl font-semibold">Trayectoria</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
               Educación, certificaciones y logros que marcan mi camino técnico.
            </p>
         </div>

         <JourneyTimeline items={journey} />
      </section>
   );
}
