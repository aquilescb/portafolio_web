import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../app/providers/useTheme";
import { useTranslation } from "react-i18next";

const linkBase =
   "text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors";
const linkActive = "text-[var(--text)]";

function normalizeLang(lng: string) {
   return lng.startsWith("es") ? "es" : "en";
}

export function Navbar() {
   const { theme, toggleTheme } = useTheme();
   const { t, i18n } = useTranslation();

   const currentLang = normalizeLang(i18n.resolvedLanguage ?? i18n.language);

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
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className="h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-sm outline-none"
                  aria-label={t("common.language")}
               >
                  <option value="es">Español</option>
                  <option value="en">English</option>
               </select>

               <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-[var(--text)] hover:opacity-90"
                  aria-label="Toggle theme"
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
