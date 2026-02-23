import type {
   ProjectPreview,
   ProjectDetail,
   ProjectTech,
} from "../../entities/project/types";
import type { ContentLang } from "../../shared/config/lang";
import { normalizeContentLang } from "../../shared/config/lang";

import {
   projectPreviews as previewsEs,
   projectDetails as detailsEs,
} from "./es";

import {
   projectPreviews as previewsEn,
   projectDetails as detailsEn,
} from "./en";

const previewsByLang: Record<ContentLang, readonly ProjectPreview[]> = {
   es: previewsEs,
   en: previewsEn,
} as const;

const detailsByLang: Record<ContentLang, ReadonlyMap<string, ProjectDetail>> = {
   es: new Map(previewsEs.map((p) => [p.slug, detailsEs[p.slug]])),
   en: new Map(previewsEn.map((p) => [p.slug, detailsEn[p.slug]])),
};

// ---------- Public API ----------

export function getProjects(lang: ContentLang): readonly ProjectPreview[] {
   const l = normalizeContentLang(lang);
   return previewsByLang[l];
}

export function getFeaturedProjects(
   lang: ContentLang,
   limit = 3,
): readonly ProjectPreview[] {
   const l = normalizeContentLang(lang);
   const featured = previewsByLang[l].filter((p) => p.featured);
   return limit > 0 ? featured.slice(0, limit) : featured;
}

export function getProjectDetail(
   lang: ContentLang,
   slug: string,
): ProjectDetail | undefined {
   const l = normalizeContentLang(lang);
   return detailsByLang[l].get(slug);
}

export function getAllTech(lang: ContentLang): readonly ProjectTech[] {
   const l = normalizeContentLang(lang);
   const set = new Set<ProjectTech>();

   previewsByLang[l].forEach((p) => {
      if ("tech" in p && Array.isArray(p.tech)) {
         (p.tech as ProjectTech[]).forEach((t) => set.add(t));
      }
   });

   return Array.from(set).sort();
}
