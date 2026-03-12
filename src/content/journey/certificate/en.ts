import type { CertificateItem } from "../../../entities/journey/types";

export const certificatesEn: readonly CertificateItem[] = [
   {
      id: "cert-react-udemy",
      title: "React: From Zero to Advanced",
      issuer: "Udemy",
      kind: "course",
      date: { start: "2024-07" },

      summary:
         "Course focused on building modern user interfaces using React and scalable architecture practices.",

      skills: [
         "React",
         "Hooks",
         "TypeScript",
         "Frontend Architecture",
      ] as const,

      learnings: [
         "Designing reusable components",
         "Managing state with React hooks",
         "Best practices for scalable applications",
      ] as const,

      issuerLogo: {
         src: "",
         alt: "Udemy logo",
      },

      verifyUrl: "https://www.udemy.com/certificate/XXXX",

      image: {
         src: "reactCert",
         alt: "React certificate",
      },
   },

   {
      id: "cert-typescript",
      title: "Modern TypeScript",
      issuer: "Udemy",
      kind: "course",
      date: { start: "2024-08" },

      summary:
         "Course focused on building strongly typed JavaScript applications using TypeScript.",

      skills: ["TypeScript", "Types", "Interfaces", "Frontend"] as const,

      learnings: [
         "Strong typing in JavaScript applications",
         "Using interfaces and generics",
         "Best practices for scalable projects",
      ] as const,

      issuerLogo: {
         src: "",
         alt: "Udemy logo",
      },

      verifyUrl: "https://www.udemy.com/certificate/YYYY",

      image: {
         src: "",
         alt: "TypeScript certificate",
      },
   },
] as const;
