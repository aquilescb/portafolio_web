import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
   CheckCircle2,
   AlertTriangle,
   Github,
   Linkedin,
   Instagram,
   Youtube,
   ExternalLink,
} from "lucide-react";

import { Card } from "../../shared/ui/primitives/Card";
import { Button } from "../../shared/ui/primitives/Button";
import { sendContact } from "./sendContact";
import { usePageMeta } from "../../shared/hooks/usePageMeta";

type FormState = "idle" | "submitting" | "success" | "error";

function isValidEmail(email: string) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

type Channel = {
   key: string;
   label: string;
   href: string;
   Icon: React.ElementType;
   kind?: "primary" | "neutral";
};

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

   // 🔧 Cambiá estos links por los tuyos (o movelos a content si después querés)
   const channels = useMemo<Channel[]>(
      () => [
         {
            key: "github",
            label: t("contact.channels.github"),
            href: "https://github.com/aquilescb",
            Icon: Github,
            kind: "neutral",
         },
         {
            key: "linkedin",
            label: t("contact.channels.linkedin"),
            href: "https://www.linkedin.com/in/aquilescb123/",
            Icon: Linkedin,
            kind: "neutral",
         },
         {
            key: "instagram",
            label: t("contact.channels.instagram"),
            href: "https://www.instagram.com/aquiles_cb/",
            Icon: Instagram,
            kind: "neutral",
         },
         {
            key: "youtube",
            label: t("contact.channels.youtube"),
            href: "https://www.youtube.com/@aquiles_cb",
            Icon: Youtube,
            kind: "neutral",
         },
      ],
      [t],
   );

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

         // opcional: volver a idle después de unos segundos
         window.setTimeout(() => setState("idle"), 3500);
         return;
      }

      setState("error");
      setError(res.error ?? t("contact.errors.generic"));
   }

   return (
      <section className="space-y-8">
         <div>
            <h1 className="text-2xl font-semibold">{t("contact.title")}</h1>
            <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
               {t("contact.subtitle")}
            </p>
         </div>
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

                  <AnimatePresence mode="wait">
                     {error && (
                        <motion.div
                           key="error"
                           initial={{ opacity: 0, y: 6 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: 6 }}
                           className="flex gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-sm text-red-500"
                        >
                           <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                           <span>{error}</span>
                        </motion.div>
                     )}

                     {state === "success" && (
                        <motion.div
                           key="success"
                           initial={{ opacity: 0, y: 8, scale: 0.98 }}
                           animate={{ opacity: 1, y: 0, scale: 1 }}
                           exit={{ opacity: 0, y: 8, scale: 0.98 }}
                           transition={{ duration: 0.25 }}
                           className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/40"
                        >
                           <div className="flex items-start gap-3">
                              <motion.div
                                 initial={{ scale: 0.8 }}
                                 animate={{ scale: 1 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 22,
                                 }}
                                 className="mt-0.5 shrink-0"
                              >
                                 <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-400" />
                              </motion.div>

                              <div className="space-y-1">
                                 <div className="font-semibold text-[var(--text)]">
                                    {t("contact.success.title")}
                                 </div>
                                 <div className="text-sm text-[var(--muted)]">
                                    {t("contact.success.body")}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>

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

               <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {channels.map(({ key, label, href, Icon, kind }) => (
                     <a
                        key={key}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className={[
                           "group flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm transition",
                           "hover:-translate-y-[1px] hover:border-[var(--primary-soft)] hover:shadow-sm",
                           kind === "primary"
                              ? "ring-1 ring-emerald-500/20"
                              : "",
                        ].join(" ")}
                     >
                        <span className="flex items-center gap-2">
                           <span className="grid size-8 place-items-center rounded-lg border border-[var(--border)] bg-[var(--bg)]">
                              <Icon className="size-4 text-[var(--text)] opacity-80 group-hover:opacity-100" />
                           </span>
                           <span className="font-medium">{label}</span>
                        </span>

                        <ExternalLink className="size-4 text-[var(--muted)] opacity-70 group-hover:opacity-100" />
                     </a>
                  ))}
               </div>
               <p className="mt-4 text-1xl text-[var(--muted)] text-center ">
                  Email: aquilescancinos@email.com
               </p>
            </Card>
         </div>
      </section>
   );
}
