import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../../../content/I18n/en";
import { es } from "../../../content/I18n/es";

const STORAGE_KEY = "portfolio_lang";
const SUPPORTED = ["es", "en"] as const;
type Lang = (typeof SUPPORTED)[number];

function isLang(value: string | null | undefined): value is Lang {
   return value === "es" || value === "en";
}

function getInitialLang(): Lang {
   // Seguridad para tests/SSR
   if (typeof window === "undefined") return "es";

   const saved = localStorage.getItem(STORAGE_KEY);
   if (isLang(saved)) return saved;

   const browserLang = navigator.language?.toLowerCase() ?? "";
   if (browserLang.startsWith("es")) return "es";
   if (browserLang.startsWith("en")) return "en";

   return "es";
}

i18n.use(initReactI18next).init({
   resources: {
      es: { translation: es },
      en: { translation: en },
   },
   lng: getInitialLang(),
   fallbackLng: "es",
   supportedLngs: SUPPORTED as unknown as string[],
   // Importante: evita devolver "dev" keys por defaults raros
   nonExplicitSupportedLngs: true,
   interpolation: { escapeValue: false },
});

// Persistir + sincronizar <html lang="">
i18n.on("languageChanged", (lng) => {
   if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lng);
   }
   if (typeof document !== "undefined") {
      document.documentElement.lang = lng;
   }
});

// Set inicial de lang en html (solo si hay document)
if (typeof document !== "undefined") {
   document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language;
}

export default i18n;
