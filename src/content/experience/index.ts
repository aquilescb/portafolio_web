import type { ContentLang } from "../../shared/config/lang";
import type { Experience } from "../../entities/experience/types";
import { experienceEs } from "./es";
import { experienceEn } from "./en";

const byLang: Record<ContentLang, readonly Experience[]> = {
   es: experienceEs,
   en: experienceEn,
} as const;

export function getExperience(lang: ContentLang): readonly Experience[] {
   return byLang[lang];
}
