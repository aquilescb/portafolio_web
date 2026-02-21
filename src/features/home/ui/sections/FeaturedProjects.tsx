import { getFeaturedProjects } from "../../../../content/projects";
import { ProjectCard } from "../../../../entities/project/ui/ProjectCard";

export function FeaturedProjects() {
   const featured = getFeaturedProjects(3);

   return (
      <section className="space-y-4">
         <div className="flex items-end justify-between gap-4">
            <div>
               <h2 className="text-lg font-semibold">Proyectos destacados</h2>
               <p className="mt-1 text-sm text-[var(--muted)]">
                  Una selección de trabajos donde se ve mi enfoque técnico.
               </p>
            </div>

            <a
               className="text-sm text-[var(--primary)] hover:underline"
               href="/projects"
            >
               Ver todos →
            </a>
         </div>

         <div className="grid gap-4 md:grid-cols-3">
            {featured.map((p) => (
               <ProjectCard key={p.slug} project={p} />
            ))}
         </div>
      </section>
   );
}
