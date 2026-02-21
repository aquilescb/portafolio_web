import type { Project, ProjectTech } from "../../entities/project/types";

export function getAllTechs(items: Project[]): ProjectTech[] {
   const set = new Set<ProjectTech>();
   for (const p of items) for (const t of p.tech) set.add(t);
   return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function filterProjects(
   items: Project[],
   q: string,
   tech: ProjectTech | "all",
) {
   const query = q.trim().toLowerCase();

   return items.filter((p) => {
      const matchesQuery =
         query.length === 0 ||
         p.title.toLowerCase().includes(query) ||
         p.summary.toLowerCase().includes(query) ||
         p.description.toLowerCase().includes(query);

      const matchesTech = tech === "all" || p.tech.includes(tech);

      return matchesQuery && matchesTech;
   });
}
