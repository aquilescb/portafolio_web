import type { ContentLang } from "../../../shared/config/lang";
import type { HighlightItem } from "../../../entities/journey/types";

import { highlightsEs } from "./es";
import { highlightsEn } from "./en";

const byLang: Record<ContentLang, readonly HighlightItem[]> = {
   es: highlightsEs,
   en: highlightsEn,
} as const;

export function getHighlights(lang: ContentLang): readonly HighlightItem[] {
   return byLang[lang];
}