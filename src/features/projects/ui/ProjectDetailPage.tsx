import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../../../content/projects";
import { Card } from "../../../shared/ui/primitives/Card";
import { ProjectHero } from "./components/ProjectHero";
import { ProjectSection } from "./components/ProjectSection";
import { ResourceLinks } from "./components/ResourceLinks";
import { MotionSection } from "../../../shared/ui/layout/MotionSection";
import { usePageMeta } from "../../../shared/hooks/usePageMeta";
export function ProjectDetailPage() {
   const { slug } = useParams();
   const project = slug ? getProjectBySlug(slug) : undefined;

   if (!project) {
      return (
         <section className="space-y-4">
            <h1 className="text-2xl font-semibold">Proyecto no encontrado</h1>
            <Card className="p-5 text-sm text-[var(--muted)]">
               El proyecto no existe o el slug es incorrecto.
               <div className="mt-3">
                  <Link
                     className="text-[var(--primary)] hover:underline"
                     to="/projects"
                  >
                     ← Volver a proyectos
                  </Link>
               </div>
            </Card>
         </section>
      );
   }

   const problem =
      project.problem ??
      "Definí el problema real: contexto, restricciones y por qué importaba resolverlo.";
   const solution =
      project.solution ??
      "Explicá cómo lo resolviste: enfoque, flujo, componentes clave y por qué funciona.";
   const architecture =
      project.architecture ??
      "Describí arquitectura, decisiones técnicas, trade-offs, y cómo soporta crecimiento.";
   const results = project.results?.length
      ? project.results
      : [
           "Agregá 2–4 resultados medibles (tiempo, calidad, reducción de errores, etc.).",
        ];

   // Extras pro (si no los tenés aún, quedan como placeholders)
   const tradeoffs =
      project.tradeoffs ??
      "Trade-offs: qué decidiste NO hacer, qué opciones comparaste y por qué.";
   const learnings =
      project.learnings ??
      "Lecciones aprendidas: 2–4 aprendizajes concretos (técnicos y de proceso).";
   const nextSteps =
      project.nextSteps ??
      "Próximos pasos: mejoras futuras (perf, tests, accesibilidad, backend, etc.).";

   const resources = project.resources?.length
      ? project.resources
      : project.links;

   // eslint-disable-next-line react-hooks/rules-of-hooks
   usePageMeta({
      title: project.title,
      description: project.summary,
      path: `/projects/${project.slug}`,
   });
   return (
      <div className="space-y-10">
         {/* 1) Hero */}
         <MotionSection>
            <ProjectHero project={project} />

            {/* 2) Problema */}
            <ProjectSection title="Problema">{problem}</ProjectSection>

            {/* 3) Solución */}
            <ProjectSection title="Solución">{solution}</ProjectSection>

            {/* 4) Arquitectura y decisiones técnicas */}
            <ProjectSection title="Arquitectura y decisiones técnicas">
               {architecture}
            </ProjectSection>

            {/* 5) Impacto / Resultados */}
            <ProjectSection title="Impacto / Resultados">
               <ul className="list-disc pl-5 space-y-1">
                  {results.map((r, idx) => (
                     <li key={idx}>{r}</li>
                  ))}
               </ul>
            </ProjectSection>

            {/* Extras que suman MUCHO (ingeniería real) */}
            <div className="grid gap-4 lg:grid-cols-3">
               <ProjectSection title="Trade-offs">{tradeoffs}</ProjectSection>
               <ProjectSection title="Lecciones aprendidas">
                  {learnings}
               </ProjectSection>
               <ProjectSection title="Próximos pasos">
                  {nextSteps}
               </ProjectSection>
            </div>
         </MotionSection>
         {/* 6) Recursos */}
         <ResourceLinks links={resources} />

         <div className="pt-2">
            <Link
               className="text-sm text-[var(--primary)] hover:underline"
               to="/projects"
            >
               ← Volver a proyectos
            </Link>
         </div>
      </div>
   );
}
