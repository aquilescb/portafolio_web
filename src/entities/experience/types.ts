export type Experience = {
   id: string;
   role: string;
   org: string;
   orgType?:
      | "Empresa"
      | "Proyecto"
      | "Freelance"
      | "Académico"
      | "Project"
      | "Government"
      | "Gobierno";
   location?: string;
   start: string; // "YYYY-MM" o "YYYY"
   end?: string; // "YYYY-MM" | "YYYY" | undefined => "Actualidad"
   summary: string;
   responsibilities: string[];
   impact: string[];
};
