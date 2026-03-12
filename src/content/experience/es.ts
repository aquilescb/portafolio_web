import type { Experience } from "../../entities/experience/types";

export const experienceEs: readonly Experience[] = [
   {
      id: "freelancer",
      role: "Desarrollador Fullstack",
      org: "Proyectos Freelance y Colaborativos",
      orgType: "Freelance",
      start: "2025",
      end: "Actualidad",
      summary:
         "Desarrollo de sistemas web Fullstack orientados a negocio, con arquitectura modular, tipado fuerte y enfoque en escalabilidad, mantenibilidad y experiencia de usuario. Disponible para nuevos proyectos y colaboraciones técnicas.",

      responsibilities: [
         "Diseño e implementación de arquitecturas Fullstack (Frontend + Backend) con separación clara de responsabilidades y enfoque modular.",
         "Construcción de APIs y modelado de datos orientados a procesos reales de negocio.",
         "Desarrollo de interfaces por rol con React Router y control de acceso (RBAC).",
         "Trabajo colaborativo mediante Git (branching strategy, code reviews y PRs) y comunicación fluida con clientes o equipos técnicos.",
         "Validación de datos consistente entre frontend y backend (DTOs + schemas) garantizando robustez y tipado fuerte.",
      ],

      impact: [
         "Entrega de productos escalables y mantenibles alineados a requerimientos reales de negocio.",
         "Mejora en tiempos de desarrollo gracias a arquitectura reutilizable y componentización consistente.",
         "Experiencia de usuario optimizada mediante diseño responsive y enfoque UX.",
      ],
   },
   {
      id: "electoral-operator",
      role: "Operador de Sistemas Electorales",
      org: "Tribunal Electoral de Salta",
      orgType: "Gobierno",
      start: "Abril 2025",
      end: "Mayo 2025",
      summary:
         "Responsable de supervisar y dar soporte operativo al sistema de voto electrónico durante las elecciones provinciales. Coordiné auxiliares, resolví incidentes técnicos en tiempo real y aseguré una transmisión confiable de los votos en los establecimientos asignados.",

      responsibilities: [
         "Soporte técnico en sitio: diagnóstico y resolución de inconvenientes con equipos informáticos durante la jornada.",
         "Verificación previa y durante la elección de conectividad y condiciones necesarias para la transmisión de datos.",
         "Coordinación y comunicación constante con auxiliares para asegurar el cumplimiento de tareas y procedimientos.",
         "Control y seguimiento del proceso de transmisión para garantizar consistencia y confiabilidad en el envío de resultados.",
      ],

      impact: [
         "Contribuí a una entrega confiable y ordenada de los votos en los establecimientos asignados, minimizando interrupciones operativas.",
         "Mejoré habilidades de comunicación, organización y liderazgo coordinando múltiples personas en un contexto de alta presión y tiempos críticos.",
      ],
   },
] as const;
