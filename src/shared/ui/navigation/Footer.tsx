import { NavLink } from "react-router-dom";
import { Github, Linkedin, Instagram, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
   const { t } = useTranslation();

   return (
      <footer className="mt-10 border-t border-[var(--border)] bg-[var(--bg)]">
         <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid gap-10 md:grid-cols-3">
               {/* Columna 1 */}
               <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Aquiles Cancinos</h3>
                  <p className="text-sm text-[var(--muted)]">
                     {t("footer.role")}
                  </p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                     {t("footer.tagline")}
                  </p>
               </div>

               {/* Columna 2 */}
               <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--text)]">
                     {t("footer.navigation")}
                  </h4>
                  <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                     <NavLink to="/" className="hover:text-[var(--text)]">
                        {t("footer.links.home")}
                     </NavLink>
                     <NavLink
                        to="/projects"
                        className="hover:text-[var(--text)]"
                     >
                        {t("footer.links.projects")}
                     </NavLink>
                     <NavLink
                        to="/experience"
                        className="hover:text-[var(--text)]"
                     >
                        {t("footer.links.experience")}
                     </NavLink>
                     <NavLink
                        to="/journey"
                        className="hover:text-[var(--text)]"
                     >
                        {t("footer.links.journey")}
                     </NavLink>
                     <NavLink to="/about" className="hover:text-[var(--text)]">
                        {t("footer.links.about")}
                     </NavLink>
                     <NavLink
                        to="/contact"
                        className="hover:text-[var(--text)]"
                     >
                        {t("footer.links.contact")}
                     </NavLink>
                  </div>
               </div>

               {/* Columna 3 */}
               <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--text)]">
                     {t("footer.social")}
                  </h4>
                  <div className="flex flex-col gap-3 text-sm">
                     <a
                        href="https://github.com/aquilescb"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)]"
                     >
                        <Github className="h-4 w-4" />
                        GitHub
                     </a>

                     <a
                        href="https://www.linkedin.com/in/aquilescb123/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)]"
                     >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                     </a>

                     <a
                        href="/cv/Aquiles-Cancinos-CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)]"
                     >
                        <FileText className="h-4 w-4" />
                        CV
                     </a>

                     <a
                        href="https://www.instagram.com/aquiles_cb/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)]"
                     >
                        <Instagram className="h-4 w-4" />
                        Instagram
                     </a>
                  </div>
               </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)]">
               © {new Date().getFullYear()} Aquiles Cancinos —{" "}
               {t("footer.rights")}
               <div className="mt-2">
                  {t("footer.builtWith")} React · TypeScript · Tailwind
               </div>
            </div>
         </div>
      </footer>
   );
}
