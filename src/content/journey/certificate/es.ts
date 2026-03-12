import type { CertificateItem } from "../../../entities/journey/types";

export const certificatesEs: readonly CertificateItem[] = [
   {
      id: "cert-react-udemy",
      title: "React: De cero a avanzado",
      issuer: "Udemy",
      kind: "course",
      date: { start: "2024-07" },

      summary:
         "Curso enfocado en el desarrollo de interfaces modernas con React y buenas prácticas de arquitectura.",

      skills: [
         "React",
         "Hooks",
         "TypeScript",
         "Arquitectura Frontend",
      ] as const,

      learnings: [
         "Creación de componentes reutilizables",
         "Gestión de estado con hooks",
         "Buenas prácticas para aplicaciones escalables",
      ] as const,

      issuerLogo: {
         src: "",
         alt: "Udemy logo",
      },

      verifyUrl: "https://www.udemy.com/certificate/XXXX",

      image: {
         src: "",
         alt: "Certificado React Udemy",
      },
   },

   {
      id: "cert-typescript",
      title: "TypeScript Moderno",
      issuer: "Udemy",
      kind: "course",
      date: { start: "2024-08" },

      summary:
         "Curso orientado al desarrollo de aplicaciones JavaScript tipadas utilizando TypeScript.",

      skills: ["TypeScript", "Types", "Interfaces", "Frontend"] as const,

      learnings: [
         "Tipado fuerte en aplicaciones JS",
         "Uso de interfaces y generics",
         "Mejores prácticas para proyectos escalables",
      ] as const,

      issuerLogo: {
         src: "",
         alt: "Udemy logo",
      },

      verifyUrl: "https://www.udemy.com/certificate/YYYY",

      image: {
         src: "",
         alt: "Certificado TypeScript",
      },
   },
] as const;
