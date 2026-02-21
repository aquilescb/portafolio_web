export type ContactPayload = {
   email: string;
   message: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

function isValidEmail(email: string) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function sendContact(
   payload: ContactPayload,
): Promise<ContactResult> {
   const email = payload.email.trim();
   const message = payload.message.trim();

   if (!isValidEmail(email)) return { ok: false, error: "Email inválido." };
   if (message.length < 10)
      return {
         ok: false,
         error: "El mensaje es muy corto (mínimo 10 caracteres).",
      };

   const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

   // Fallback si no configuraste endpoint: mailto (no ideal pero funcional)
   if (!endpoint) {
      const subject = encodeURIComponent("Contacto desde portfolio");
      const body = encodeURIComponent(
         `Email: ${email}\n\nMensaje:\n${message}`,
      );
      window.location.href = `mailto:TU_MAIL@DOMINIO.com?subject=${subject}&body=${body}`;
      return { ok: true };
   }

   try {
      const res = await fetch(endpoint, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify({ email, message }),
      });

      if (!res.ok) {
         // Formspree suele devolver JSON con error, pero no dependemos de eso
         return {
            ok: false,
            error: "No se pudo enviar el mensaje. Probá de nuevo.",
         };
      }

      return { ok: true };
   } catch {
      return {
         ok: false,
         error: "Error de red. Revisá tu conexión e intentá de nuevo.",
      };
   }
}
