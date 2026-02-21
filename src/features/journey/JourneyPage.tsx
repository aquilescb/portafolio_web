import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useContentLang } from "../../shared/hooks/useContentLang";
import { getJourney } from "../../content/journey";
import { JourneyTimeline } from "../../entities/journey/JourneyTimeline";
import { usePageMeta } from "../../shared/hooks/usePageMeta";

export function JourneyPage() {
   const { t } = useTranslation();
   const lang = useContentLang();

   usePageMeta({
      title: t("meta.journey.title"),
      description: t("meta.journey.desc"),
      path: "/journey",
   });

   const items = useMemo(() => getJourney(lang), [lang]);

   return (
      <section className="space-y-8">
         <div>
            <h1 className="text-2xl font-semibold">{t("journey.title")}</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
               {t("journey.subtitle")}
            </p>
         </div>

         <JourneyTimeline items={items} />
      </section>
   );
}
