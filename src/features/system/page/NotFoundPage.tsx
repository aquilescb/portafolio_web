import { Link } from "react-router-dom";
import { ArrowLeft, House } from "lucide-react";

import { usePageMeta } from "../../../shared/hooks/usePageMeta";
import { Button } from "../../../shared/ui/primitives/Button";

export function NotFoundPage() {
   usePageMeta({
      title: "Página no encontrada",
      description: "La página que intentaste visitar no existe o fue movida.",
      noIndex: true,
   });

   return (
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
         <div className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-[var(--radius-xl)] border border-[var(--color-stroke)] bg-[var(--color-surface)] px-6 py-12 text-center shadow-sm md:px-10">
            <span className="mb-4 inline-flex rounded-full border border-[var(--color-stroke)] bg-white px-4 py-1 text-sm font-medium text-[var(--color-text-muted)] dark:bg-[rgba(255,255,255,0.04)]">
               Error 404
            </span>

            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl">
               Esta página no existe
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-text-muted)] md:text-base">
               La ruta que abriste no fue encontrada. Puede que el enlace esté
               roto o que la página haya sido movida.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
               <Button variant="primary">
                  <Link to="/">
                     <House className="h-4 w-4" />
                     Volver al inicio
                  </Link>
               </Button>

               <Button variant="ghost">
                  <Link to="/projects">
                     <ArrowLeft className="h-4 w-4" />
                     Ver proyectos
                  </Link>
               </Button>
            </div>
         </div>
      </main>
   );
}
