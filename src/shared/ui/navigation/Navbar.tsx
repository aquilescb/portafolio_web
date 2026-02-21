import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../app/providers/useTheme";
import { normalizeContentLang, type ContentLang } from "../../config/lang";

const linkBase =
   "text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors";
const linkActive = "text-[var(--text)]";

type Lang = "es" | "en";

export function Navbar() {
   const { theme, toggleTheme } = useTheme();
   const { t, i18n } = useTranslation();

   const currentLang = normalizeContentLang(
      i18n.resolvedLanguage ?? i18n.language,
   );

   const handleLangChange = (next: ContentLang) => {
      if (next !== currentLang) i18n.changeLanguage(next);
   };

   return (
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
         <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
            <NavLink to="/" className="flex items-center gap-2">
               <div className="h-8 w-8 rounded-lg bg-[var(--surface)] border border-[var(--border)]" />
               <span className="text-sm font-semibold tracking-tight">
                  Aquiles
               </span>
            </NavLink>

            <nav className="hidden items-center gap-5 md:flex">
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     `${linkBase} ${isActive ? linkActive : ""}`
                  }
               >
                  {t("nav.home")}
               </NavLink>
               <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                     `${linkBase} ${isActive ? linkActive : ""}`
                  }
               >
                  {t("nav.projects")}
               </NavLink>
               <NavLink
                  to="/experience"
                  className={({ isActive }) =>
                     `${linkBase} ${isActive ? linkActive : ""}`
                  }
               >
                  {t("nav.experience")}
               </NavLink>
               <NavLink
                  to="/journey"
                  className={({ isActive }) =>
                     `${linkBase} ${isActive ? linkActive : ""}`
                  }
               >
                  {t("nav.journey")}
               </NavLink>
               <NavLink
                  to="/about"
                  className={({ isActive }) =>
                     `${linkBase} ${isActive ? linkActive : ""}`
                  }
               >
                  {t("nav.about")}
               </NavLink>
               <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                     `${linkBase} ${isActive ? linkActive : ""}`
                  }
               >
                  {t("nav.contact")}
               </NavLink>
            </nav>

            <div className="flex items-center gap-2">
               <select
                  value={currentLang}
                  onChange={(e) => handleLangChange(e.target.value as Lang)}
                  className="h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-sm outline-none"
                  aria-label={t("common.language")}
               >
                  <option value="es">{t("common.lang.es")}</option>
                  <option value="en">{t("common.lang.en")}</option>
               </select>

               <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-[var(--text)] hover:opacity-90"
                  aria-label={t("common.toggleTheme")}
               >
                  {theme === "dark" ? (
                     <Sun className="h-4 w-4" />
                  ) : (
                     <Moon className="h-4 w-4" />
                  )}
               </button>
            </div>
         </div>
      </header>
   );
}
