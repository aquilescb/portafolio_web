import type { Project } from "../../entities/project/types";
import type { ContentLang } from "../../shared/config/lang";
import { projectsEs } from "./es";
import { projectsEn } from "./en";

const byLang: Record<ContentLang, readonly Project[]> = {
   es: projectsEs,
   en: projectsEn,
} as const;

// Índice por slug (O(1))
const bySlug: Record<ContentLang, ReadonlyMap<string, Project>> = {
   es: new Map(projectsEs.map((p) => [p.slug, p])),
   en: new Map(projectsEn.map((p) => [p.slug, p])),
};

export function getProjects(lang: ContentLang): readonly Project[] {
   return byLang[lang];
}

export function getFeaturedProjects(
   lang: ContentLang,
   limit = 3,
): readonly Project[] {
   const featured = byLang[lang].filter((p) => p.featured);
   return limit > 0 ? featured.slice(0, limit) : featured;
}

export function getProjectBySlug(
   lang: ContentLang,
   slug: string,
): Project | undefined {
   return bySlug[lang].get(slug);
}

export function getAllTech(lang: ContentLang): readonly string[] {
   const set = new Set<string>();
   byLang[lang].forEach((p) => p.tech.forEach((t) => set.add(t)));
   return Array.from(set).sort();
}
