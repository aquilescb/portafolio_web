import type { CertificateItem } from "../../../entities/journey/types";

export const certificatesEs: readonly CertificateItem[] = [
   // Oracle Next Education (ONE) - Especialización Backend & Cloud
   {
      id: "cert-oracle-next-education-full",
      title: "Oracle Next Education (ONE) - Especialización Backend & Cloud",
      issuer: "Oracle / Alura Latam",
      kind: "bootcamp",
      date: { start: "2025-01", end: "2025-11" },

      summary:
         "Programa intensivo de formación técnica y profesional de 11 meses, enfocado en desarrollo backend con Java/Spring Boot, infraestructura en la nube (OCI), análisis de datos con SQL y habilidades socioemocionales.",

      skills: [
         "Java",
         "Spring Boot 3",
         "SQL (MySQL)",
         "Oracle Cloud (OCI)",
         "JavaScript",
         "Soft Skills",
         "Metodologías Ágiles",
      ] as const,

      learnings: [
         "Desarrollo de APIs REST escalables con Spring Boot 3 y persistencia de datos con Spring Data JPA.",
         "Gestión avanzada de bases de datos relacionales, incluyendo procedimientos almacenados y optimización en MySQL.",
         "Fundamentos de computación e infraestructura en la nube con certificación hacia Oracle Cloud Infrastructure (OCI).",
         "Construcción de interfaces web responsivas y lógica de programación moderna con JavaScript.",
         "Integración de Inteligencia Artificial (OpenAI) en aplicaciones Java para optimización de procesos.",
         "Desarrollo de proyectos bajo metodologías ágiles, enfoque en resolución de problemas y comunicación asertiva.",
      ] as const,

      issuerLogo: {
         src: "/assets/images/journey/Certificates/oracle-logo.webp",
         alt: "Logo Oracle Next Education",
      },

      verifyUrl:
         "https://app.aluracursos.com/user/aquilescancinos/fullCertificate/269be2134588e6712fdf11c2f315a970",
   },
   // Oracle Cloud Infrastructure 2025 Certified Foundations Associate
   {
      id: "cert-oci-2025-foundations",
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      kind: "certificate",
      date: { start: "2025-11" },

      summary:
         "Certificación oficial de Oracle que valida el conocimiento fundamental en servicios de infraestructura en la nube, seguridad, arquitectura y gestión de costos en OCI.",

      skills: [
         "Oracle Cloud Infrastructure (OCI)",
         "Computación en la Nube",
         "Seguridad en la Nube",
         "Infraestructura de Red",
         "Gestión de Costos",
         "Gobernanza",
      ] as const,

      learnings: [
         "Comprensión profunda de conceptos de computación en la nube pública.",
         "Configuración y uso de servicios core: Compute, Storage, Networking y Database.",
         "Implementación del modelo de seguridad, identidad y cumplimiento de Oracle.",
         "Gestión de facturación, modelos de precios y administración de recursos en la nube.",
      ] as const,

      issuerLogo: {
         src: "/assets/logos/oracle-certified.webp",
         alt: "Logo Oracle Certified",
      },

      verifyUrl:
         "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BF32548D9B1283BB867DF8A266B7812F195B2288E2D5DFD512481C6C0D3FA102",
   },
   // Certificación en Data Analytics - Universidad Blas Pascal
   {
      id: "cert-ubp-data-analytics",
      title: "Certificación en Data Analytics",
      issuer: "Universidad Blas Pascal",
      kind: "course",
      date: { start: "2025-04", end: "2025-06" },

      summary:
         "Formación especializada en el ciclo de vida del análisis de datos bajo la metodología de IBM, aplicada al caso de negocio internacional 'Adventure Works Cycles'.",

      skills: [
         "Power BI",
         "Data Modeling",
         "Metodología IBM",
         "Análisis Descriptivo",
         "Análisis Predictivo",
         "Excel Avanzado",
         "Limpieza de Datos",
      ] as const,

      learnings: [
         "Aplicación de la metodología IBM para la toma de decisiones estratégicas basadas en datos.",
         "Modelado de datos complejo integrando múltiples fuentes (ventas, productos, regiones y objetivos).",
         "Desarrollo de Dashboards interactivos en Power BI para el seguimiento de KPIs de ventas y marketing.",
         "Implementación de técnicas de limpieza y preparación de datos para asegurar la calidad de la información.",
      ] as const,

      issuerLogo: {
         src: "/assets/logos/ubp.webp",
         alt: "Logo Universidad Blas Pascal",
      },

      verifyUrl:
         "https://ss.ubp.edu.ar/TramitesCertificadosValidacionProcesar.do/Code=8E7F-DA2A-4E4F-4E3C-AAB3-5B48-B010-252D",

      image: {
         src: "/assets/certificates/ubp-data-analytics.webp",
         alt: "Certificado Data Analytics UBP",
      },
   },
] as const;
