import { useTranslation } from "react-i18next";

export function Footer() {
   const { t } = useTranslation();

   return (
      <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
         <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Aquiles Cancinos — {t("footer.rights")}
         </div>
      </footer>
   );
}
