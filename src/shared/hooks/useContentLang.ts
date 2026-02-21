import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { normalizeContentLang, type ContentLang } from "../config/lang";

export function useContentLang(): ContentLang {
   const { i18n } = useTranslation();

   return useMemo(() => {
      return normalizeContentLang(i18n.resolvedLanguage ?? i18n.language);
   }, [i18n.resolvedLanguage, i18n.language]);
}
