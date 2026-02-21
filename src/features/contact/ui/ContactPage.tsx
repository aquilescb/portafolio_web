import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../../../shared/ui/primitives/Card";
import { Button } from "../../../shared/ui/primitives/Button";
import { sendContact } from "../model/sendContact";

type FormState = "idle" | "submitting" | "success" | "error";

function isValidEmail(email: string) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function ContactPage() {
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

      if (!emailOk) return setError("Ingresá un email válido.");
      if (!msgOk)
         return setError("El mensaje es muy corto (mínimo 10 caracteres).");

      setState("submitting");
      const res = await sendContact({ email, message });

      if (res.ok) {
         setState("success");
         setEmail("");
         setMessage("");
         return;
      }

      setState("error");
      setError(res.error);
   }

   return (
      <section className="space-y-8">
         <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
         >
            <h1 className="text-2xl font-semibold">Contacto</h1>
            <p className="mt-2 text-sm text-[var(--muted)] max-w-2xl">
               Si querés hablar de un proyecto, una oportunidad o simplemente
               conectar, dejame tu mensaje.
            </p>
         </motion.div>

         <div className="grid gap-6 lg:grid-cols-2">
            {/* Form */}
            <Card className="p-5">
               <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-sm font-medium">Tu email</label>
                     <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary-soft)]"
                     />
                     {email.length > 0 && !emailOk && (
                        <p className="text-xs text-red-500">Email inválido.</p>
                     )}
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-medium">Mensaje</label>
                     <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Contame qué estás buscando..."
                        rows={6}
                        className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary-soft)]"
                     />
                     {message.length > 0 && !msgOk && (
                        <p className="text-xs text-red-500">
                           Mínimo 10 caracteres.
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
                        ✅ Mensaje enviado. ¡Gracias! Te respondo apenas pueda.
                     </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                     <Button type="submit" disabled={!canSubmit}>
                        {state === "submitting" ? "Enviando..." : "Enviar"}
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
                        Limpiar
                     </Button>
                  </div>
               </form>
            </Card>

            {/* Side panel */}
            <Card className="p-5">
               <h2 className="text-base font-semibold">Otros canales</h2>
               <p className="mt-2 text-sm text-[var(--muted)]">
                  También podés encontrarme en:
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
                     LinkedIn (opcional): agregalo cuando lo tengas listo.
                  </div>
                  <div className="text-[var(--muted)]">Email: tu@email.com</div>
               </div>

               <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--muted)]">
                  Tip: si todavía no configuraste Formspree, el envío usa{" "}
                  <b>mailto</b> como fallback. Para dejarlo 100% pro, agregá{" "}
                  <code>VITE_CONTACT_ENDPOINT</code> en <code>.env</code>.
               </div>
            </Card>
         </div>
      </section>
   );
}
