export type Experience = {
   id: string;
   role: string;
   org: string;
   orgType?: "Empresa" | "Proyecto" | "Freelance" | "Académico";
   location?: string;
   start: string; // "YYYY-MM" o "YYYY"
   end?: string; // "YYYY-MM" | "YYYY" | undefined => "Actualidad"
   summary: string;
   responsibilities: string[]; // 3–5
   impact: string[]; // medible si podés
   tech?: string[];
   links?: Array<{ label: string; href: string }>;
};
