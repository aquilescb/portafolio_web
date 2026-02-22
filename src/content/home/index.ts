import type { ContentLang } from "../../shared/config/lang";
import type { HeroContent } from "../../entities/home/types";
import { heroEs } from "./es";
import { heroEn } from "./en";

const byLang: Record<ContentLang, HeroContent> = {
   es: heroEs,
   en: heroEn,
} as const;

export function getHeroContent(lang: ContentLang): HeroContent {
   return byLang[lang];
}
