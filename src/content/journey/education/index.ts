import type { ContentLang } from "../../../shared/config/lang";
import type { EducationItem } from "../../../entities/journey/types";
import { journeyEs } from "./es";
import { journeyEn } from "./en";

const byLang: Record<ContentLang, readonly EducationItem[]> = {
   es: journeyEs,
   en: journeyEn,
} as const;

export function getEducation(lang: ContentLang): readonly EducationItem[] {
   return byLang[lang];
}
