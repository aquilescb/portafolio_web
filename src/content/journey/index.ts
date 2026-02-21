import type { ContentLang } from "../../shared/config/lang";
import type { JourneyEvent } from "../../entities/journey/types";
import { journeyEs } from "./es";
import { journeyEn } from "./en";

const byLang: Record<ContentLang, readonly JourneyEvent[]> = {
   es: journeyEs,
   en: journeyEn,
} as const;

export function getJourney(lang: ContentLang): readonly JourneyEvent[] {
   return byLang[lang];
}
