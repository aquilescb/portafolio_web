import type { ContentLang } from "../../../shared/config/lang";
import type { CertificateItem } from "../../../entities/journey/types";

import { certificatesEs } from "./es";
import { certificatesEn } from "./en";

const byLang: Record<ContentLang, readonly CertificateItem[]> = {
   es: certificatesEs,
   en: certificatesEn,
} as const;

export function getCertificates(lang: ContentLang): readonly CertificateItem[] {
   return byLang[lang];
}
