import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
   Home,
   FolderKanban,
   BriefcaseBusiness,
   Route,
   User,
   Mail,
   Moon,
   Sun,
   Menu,
   X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../app/providers/useTheme";
import { normalizeContentLang, type ContentLang } from "../../config/lang";

const linkBase =
   "inline-flex items-center gap-2 text-base font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors";
const linkActive = "text-[var(--text)]";

type Lang = "es" | "en";

type NavItem = {
   to: string;
   labelKey: string;
   Icon: React.ElementType;
};

export function Navbar() {
   const { theme, toggleTheme } = useTheme();
   const { t, i18n } = useTranslation();
   const location = useLocation();

   const [mobileOpen, setMobileOpen] = useState(false);

   const currentLang = normalizeContentLang(
      i18n.resolvedLanguage ?? i18n.language,
   );

   const handleLangChange = (next: ContentLang) => {
      if (next !== currentLang) i18n.changeLanguage(next);
   };

   const navItems: NavItem[] = useMemo(
      () => [
         { to: "/", labelKey: "nav.home", Icon: Home },
         { to: "/projects", labelKey: "nav.projects", Icon: FolderKanban },
         {
            to: "/experience",
            labelKey: "nav.experience",
            Icon: BriefcaseBusiness,
         },
         { to: "/journey", labelKey: "nav.journey", Icon: Route },
         { to: "/about", labelKey: "nav.about", Icon: User },
         { to: "/contact", labelKey: "nav.contact", Icon: Mail },
      ],
      [],
   );

   // Cerrar menú mobile al navegar
   // (si cambian pathname/search/hash, cierra)
   useMemo(() => {
      if (mobileOpen) setMobileOpen(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location.pathname, location.search, location.hash]);

   return (
      <header
         className="sticky top-0 z-50 backdrop-blur-xl backdrop-saturate-150"
         style={{
            background: "color-mix(in srgb, var(--bg) 60%, transparent)",
            borderBottom:
               "1px solid color-mix(in srgb, var(--text) 10%, transparent)",
         }}
      >
         <div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center px-4">
            {/* Mobile: menu button */}
            <button
               type="button"
               onClick={() => setMobileOpen(true)}
               className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] md:hidden"
               aria-label={t("common.openMenu")}
            >
               <Menu className="h-5 w-5" />
            </button>

            {/* Center: desktop nav (bigger) */}
            <nav className="hidden items-center justify-center gap-8 md:flex">
               {navItems.map(({ to, labelKey, Icon }) => (
                  <NavLink
                     key={to}
                     to={to}
                     className={({ isActive }) =>
                        `${linkBase} ${isActive ? linkActive : ""}`
                     }
                  >
                     <Icon className="h-5 w-5" />
                     {t(labelKey)}
                  </NavLink>
               ))}
            </nav>

            {/* Right controls */}
            <div className="ml-auto flex items-center gap-2">
               <select
                  value={currentLang}
                  onChange={(e) => handleLangChange(e.target.value as Lang)}
                  className="h-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 text-sm outline-none"
                  aria-label={t("common.language")}
               >
                  <option value="es">{t("common.lang.es")}</option>
                  <option value="en">{t("common.lang.en")}</option>
               </select>

               <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:opacity-90"
                  aria-label={t("common.toggleTheme")}
               >
                  {theme === "dark" ? (
                     <Sun className="h-5 w-5" />
                  ) : (
                     <Moon className="h-5 w-5" />
                  )}
               </button>
            </div>
         </div>

         {/* Mobile overlay + sheet */}
         {mobileOpen && (
            <div className="md:hidden">
               {/* overlay */}
               <button
                  type="button"
                  className="fixed inset-0 z-40 bg-black/40"
                  onClick={() => setMobileOpen(false)}
                  aria-label={t("common.closeMenu")}
               />

               {/* sheet */}
               <aside className="fixed left-0 top-0 z-50 h-dvh w-[86%] max-w-sm border-r border-[var(--border)] bg-[var(--bg)] p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                     <div className="text-base font-semibold tracking-tight text-[var(--text)]">
                        {t("nav.menu")}
                     </div>
                     <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                        aria-label={t("common.closeMenu")}
                     >
                        <X className="h-5 w-5" />
                     </button>
                  </div>

                  <div className="mt-4 space-y-2">
                     {navItems.map(({ to, labelKey, Icon }) => (
                        <NavLink
                           key={to}
                           to={to}
                           className={({ isActive }) =>
                              [
                                 "flex items-center gap-3 rounded-2xl border px-4 py-3 text-base transition-colors",
                                 isActive
                                    ? "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                                    : "border-transparent text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]",
                              ].join(" ")
                           }
                        >
                           <Icon className="h-5 w-5" />
                           {t(labelKey)}
                        </NavLink>
                     ))}
                  </div>

                  {/* Bottom controls inside sheet (opcional, queda pro) */}
                  <div className="mt-6 flex items-center gap-2 border-t border-[var(--border)] pt-4">
                     <select
                        value={currentLang}
                        onChange={(e) =>
                           handleLangChange(e.target.value as Lang)
                        }
                        className="h-10 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 text-sm outline-none"
                        aria-label={t("common.language")}
                     >
                        <option value="es">{t("common.lang.es")}</option>
                        <option value="en">{t("common.lang.en")}</option>
                     </select>

                     <button
                        type="button"
                        onClick={toggleTheme}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:opacity-90"
                        aria-label={t("common.toggleTheme")}
                     >
                        {theme === "dark" ? (
                           <Sun className="h-5 w-5" />
                        ) : (
                           <Moon className="h-5 w-5" />
                        )}
                     </button>
                  </div>
               </aside>
            </div>
         )}
      </header>
   );
}
