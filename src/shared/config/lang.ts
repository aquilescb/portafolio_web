export const CONTENT_LANGS = ["es", "en"] as const;
export type ContentLang = (typeof CONTENT_LANGS)[number];

export function normalizeContentLang(input?: string | null): ContentLang {
   if (!input) return "es";
   const lng = input.toLowerCase();
   return lng.startsWith("en") ? "en" : "es";
}

export function isContentLang(value: unknown): value is ContentLang {
   return value === "es" || value === "en";
}
