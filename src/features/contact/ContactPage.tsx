import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Card } from "../../shared/ui/primitives/Card";
import { Button } from "../../shared/ui/primitives/Button";
import { sendContact } from "./sendContact";
import { usePageMeta } from "../../shared/hooks/usePageMeta";

type FormState = "idle" | "submitting" | "success" | "error";

function isValidEmail(email: string) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function ContactPage() {
   const { t } = useTranslation();

   usePageMeta({
      title: t("meta.contact.title"),
      description: t("meta.contact.desc"),
      path: "/contact",
   });

   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [state, setState] = useState<FormState>("idle");
   const [error, setError] = useState<string | null>(null);

   const emailOk = isValidEmail(email);
   const msgOk = message.trim().length >= 10;
   const canSubmit = emailOk && msgOk && state !== "submitting";

   async function onSubmit(e: React.FormEvent) {
      e.preventDefault();
      setError(null);

      if (!emailOk) return setError(t("contact.errors.invalidEmail"));
      if (!msgOk) return setError(t("contact.errors.shortMessage"));

      setState("submitting");
      const res = await sendContact({ email, message });

      if (res.ok) {
         setState("success");
         setEmail("");
         setMessage("");
         return;
      }

      setState("error");
      // si el backend/fallback devuelve error en español/inglés, lo mostramos tal cual
      setError(res.error ?? t("contact.errors.generic"));
   }

   return (
      <section className="space-y-8">
         <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
         >
            <h1 className="text-2xl font-semibold">{t("contact.title")}</h1>
            <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
               {t("contact.subtitle")}
            </p>
         </motion.div>

         <div className="grid gap-6 lg:grid-cols-2">
            {/* Form */}
            <Card className="p-5">
               <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-sm font-medium">
                        {t("contact.form.emailLabel")}
                     </label>
                     <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder={t("contact.form.emailPlaceholder")}
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary-soft)]"
                     />
                     {email.length > 0 && !emailOk && (
                        <p className="text-xs text-red-500">
                           {t("contact.form.emailInvalidInline")}
                        </p>
                     )}
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-medium">
                        {t("contact.form.messageLabel")}
                     </label>
                     <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t("contact.form.messagePlaceholder")}
                        rows={6}
                        className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary-soft)]"
                     />
                     {message.length > 0 && !msgOk && (
                        <p className="text-xs text-red-500">
                           {t("contact.form.messageMinInline")}
                        </p>
                     )}
                  </div>

                  {error && (
                     <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-sm text-red-500">
                        {error}
                     </div>
                  )}

                  {state === "success" && (
                     <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-sm text-[var(--text)]">
                        {t("contact.success")}
                     </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                     <Button type="submit" disabled={!canSubmit}>
                        {state === "submitting"
                           ? t("contact.actions.sending")
                           : t("contact.actions.send")}
                     </Button>

                     <Button
                        type="button"
                        variant="ghost"
                        onClick={() => {
                           setEmail("");
                           setMessage("");
                           setError(null);
                           setState("idle");
                        }}
                     >
                        {t("contact.actions.clear")}
                     </Button>
                  </div>
               </form>
            </Card>

            {/* Side panel */}
            <Card className="p-5">
               <h2 className="text-base font-semibold">
                  {t("contact.side.title")}
               </h2>
               <p className="mt-2 text-sm text-[var(--muted)]">
                  {t("contact.side.subtitle")}
               </p>

               <div className="mt-4 space-y-2 text-sm">
                  <a
                     className="text-[var(--primary)] hover:underline"
                     href="https://github.com/TU_USER"
                     target="_blank"
                     rel="noreferrer"
                  >
                     GitHub
                  </a>

                  <div className="text-[var(--muted)]">
                     {t("contact.side.linkedinHint")}
                  </div>
                  <div className="text-[var(--muted)]">
                     {t("contact.side.emailHint")}
                  </div>
               </div>

               <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--muted)]">
                  {t("contact.side.tip")}
               </div>
            </Card>
         </div>
      </section>
   );
}
