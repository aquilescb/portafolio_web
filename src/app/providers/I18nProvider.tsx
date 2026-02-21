import React, { useMemo, useState, useEffect } from "react";
import { I18nContext, type Lang } from "./I18nContext";
import { en } from "../../content/I18n/en";
import { es } from "../../content/I18n/es";

const STORAGE_KEY = "ac-lang";

const DICTS = { es, en };

function getInitialLang(): Lang {
   const saved = localStorage.getItem(STORAGE_KEY);
   if (saved === "es" || saved === "en") return saved;

   const nav = navigator.language?.toLowerCase() ?? "";
   return nav.startsWith("es") ? "es" : "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
   const [lang, setLang] = useState<Lang>(() => getInitialLang());

   const value = useMemo(() => {
      const dict = DICTS[lang];

      return {
         lang,
         setLang: (l: Lang) => {
            setLang(l);
            localStorage.setItem(STORAGE_KEY, l);
         },
         t: (key: string) => dict[key as keyof typeof dict] ?? key,
      };
   }, [lang]);

   useEffect(() => {
      document.documentElement.lang = lang;
   }, [lang]);

   return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
