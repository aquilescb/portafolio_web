import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { useContentLang } from "../../shared/hooks/useContentLang";
import { usePageMeta } from "../../shared/hooks/usePageMeta";

import type { JourneyTab } from "../../entities/journey/types";
import { Timeline } from "../../entities/journey/JourneyTimeline";

import { EducationItemCard } from "../../entities/journey/EducationItem";
import { CertificateItemCard } from "../../entities/journey/CertificateItem";
import { HighlightItemCard } from "../../entities/journey/HighlightItem";

import { getEducation } from "../../content/journey/education";
import { getCertificates } from "../../content/journey/certificate";
import { getHighlights } from "../../content/journey/highlights";

const TABS: readonly JourneyTab[] = ["education", "certificate", "highlights"];

export function JourneyPage() {
   const { t } = useTranslation();
   const lang = useContentLang();

   usePageMeta({
      title: t("meta.journey.title"),
      description: t("meta.journey.desc"),
      path: "/journey",
   });

   const [activeTab, setActiveTab] = useState<JourneyTab>("education");

   const education = useMemo(() => getEducation(lang), [lang]);
   const certificates = useMemo(() => getCertificates(lang), [lang]);
   const highlights = useMemo(() => getHighlights(lang), [lang]);

   return (
      <section className="space-y-8">
         <div>
            <h1 className="text-2xl font-semibold">{t("journey.title")}</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
               {t("journey.subtitle")}
            </p>
         </div>

         <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => {
               const active = tab === activeTab;

               return (
                  <button
                     key={tab}
                     type="button"
                     onClick={() => setActiveTab(tab)}
                     className={`
                        rounded-full border px-3 py-1 text-sm transition
                        ${
                           active
                              ? "border-[var(--primary)] bg-[color-mix(in_oklab,var(--primary)_14%,transparent)] text-[var(--text)]"
                              : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)]"
                        }
                     `}
                  >
                     {t(`journey.tabs.${tab}`)}
                  </button>
               );
            })}
         </div>

         {activeTab === "education" ? (
            <Timeline
               items={education}
               getKey={(x) => x.id}
               renderItem={(x) => <EducationItemCard item={x} />}
            />
         ) : null}

         {activeTab === "certificate" ? (
            <Timeline
               items={certificates}
               getKey={(x) => x.id}
               renderItem={(x) => <CertificateItemCard item={x} />}
            />
         ) : null}

         {activeTab === "highlights" ? (
            <Timeline
               items={highlights}
               getKey={(x) => x.id}
               renderItem={(x) => <HighlightItemCard item={x} />}
            />
         ) : null}
      </section>
   );
}