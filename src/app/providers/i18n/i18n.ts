import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { es } from "../../../content/i18n/es";
import { en } from "../../../content/i18n/en";

const STORAGE_KEY = "portfolio_lang";

// Detectar idioma inicial
function getInitialLang(): "es" | "en" {
   if (typeof window === "undefined") return "es";

   const saved = localStorage.getItem(STORAGE_KEY);
   if (saved === "es" || saved === "en") return saved;

   // fallback al idioma del navegador
   const browserLang = navigator.language.toLowerCase();

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
   supportedLngs: ["es", "en"],
   interpolation: {
      escapeValue: false,
   },
});

// Persistir idioma + actualizar html lang (SEO/accessibility)
i18n.on("languageChanged", (lng) => {
   localStorage.setItem(STORAGE_KEY, lng);
   document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language;

export default i18n;
