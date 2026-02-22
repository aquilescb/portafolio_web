import type { ContentLang } from "../../shared/config/lang";
import type { AboutContent } from "../../entities/about/types";
import { aboutEs } from "./es";
import { aboutEn } from "./en";

const byLang: Record<ContentLang, readonly AboutContent[]> = {
   es: aboutEs,
   en: aboutEn,
} as const;

export function getAbout(lang: ContentLang): readonly AboutContent[] {
   return byLang[lang];
}
