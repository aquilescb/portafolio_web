import type { AboutContent } from "../../entities/about/types";

export const aboutEs: AboutContent = {
   whoIAm: [
      "Soy Aquiles Cancinos, estudiante de Ingeniería Informática con foco en crear productos que resuelvan problemas reales.",
      "Me considero disciplinado, adaptable y autodidacta. Aprendo algo nuevo cada día y busco crecer a largo plazo, tanto en lo técnico como en lo personal.",
      "Disfruto el trabajo en equipo: creo que la colaboración y la comunicación son claves para tomar mejores decisiones y construir mejor software.",
   ],

   howIThink: [
      {
         title: "Arranco por el problema real",
         text: "Antes de codear, traduzco el contexto en requerimientos y flujos: usuarios, restricciones, estados y riesgos. Busco impacto, no solo que “funcione”.",
      },
      {
         title: "Diseño modular para escalar",
         text: "Me gusta separar por features y entidades, con límites claros y contratos. Así el sistema crece (roles, módulos, backend) sin reescribirlo.",
      },
      {
         title: "Consistencia y calidad de datos",
         text: "Prioritizo tipado fuerte, validaciones donde suman y naming coherente. Reducir estados imposibles baja bugs y mejora mantenimiento.",
      },
      {
         title: "UX también es sistema",
         text: "Un sistema no es solo backend. Estados de UI, navegación, loading/empty states y accesibilidad definen si realmente se usa.",
      },
   ],

   disciplineBridge: [
      "La disciplina personal (hábitos, entrenamiento, objetivos) se refleja en cómo construyo: foco, estándares y mejora continua.",
      "Me ayuda a sostener proyectos largos, manejar presión y mantener calidad incluso cuando se complica.",
   ],
} as const;
