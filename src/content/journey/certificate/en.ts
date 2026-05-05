import type { CertificateItem } from "../../../entities/journey/types";
import oracleLogo from "../../../assets/images/journey/Certificates/oracle-logo.webp";
import aluraLogo from "../../../assets/images/journey/Certificates/alura-latam-logo.webp";
import unipascalLogo from "../../../assets/images/journey/Certificates/uni-blas-pascal.webp";
import certificateUniPascal from "../../../assets/images/journey/Certificates/certificado-universidad-blas-pascal.webp";
export const certificatesEn: readonly CertificateItem[] = [
   {
      id: "cert-oracle-next-education-full",
      title: "Oracle Next Education (ONE) - Backend & Cloud Specialization",
      issuer: "Oracle / Alura Latam",
      kind: "bootcamp",
      date: { start: "2025-01", end: "2025-11" },

      summary:
         "An intensive 11-month technical and professional training program focused on backend development with Java/Spring Boot, cloud infrastructure (OCI), data analysis with SQL, and soft skills.",

      skills: [
         "Java",
         "Spring Boot 3",
         "SQL (MySQL)",
         "Oracle Cloud (OCI)",
         "JavaScript",
         "Soft Skills",
         "Agile Methodologies",
      ] as const,

      learnings: [
         "Developing scalable REST APIs using Spring Boot 3 and data persistence with Spring Data JPA.",
         "Advanced relational database management, including stored procedures and optimization in MySQL.",
         "Cloud computing and infrastructure fundamentals geared towards Oracle Cloud Infrastructure (OCI) certification.",
         "Building responsive web interfaces and modern programming logic using JavaScript.",
         "Integrating Artificial Intelligence (OpenAI) into Java applications for process optimization.",
         "Project development using agile methodologies, focusing on problem-solving and assertive communication.",
      ] as const,

      issuerLogo: {
         src: aluraLogo,
         alt: "Oracle Next Education Logo",
      },

      verifyUrl:
         "https://app.aluracursos.com/user/aquilescancinos/fullCertificate/269be2134588e6712fdf11c2f315a970",
   },
   {
      id: "cert-oci-2025-foundations",
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      kind: "certificate",
      date: { start: "2025-11" },

      summary:
         "Official Oracle certification validating fundamental knowledge of cloud infrastructure services, security, architecture, and cost management in OCI.",

      skills: [
         "Oracle Cloud Infrastructure (OCI)",
         "Cloud Computing",
         "Cloud Security",
         "Network Infrastructure",
         "Cost Management",
         "Governance",
      ] as const,

      learnings: [
         "In-depth understanding of public cloud computing concepts.",
         "Configuration and usage of core services: Compute, Storage, Networking, and Database.",
         "Implementation of Oracle's security, identity, and compliance model.",
         "Billing management, pricing models, and cloud resource administration.",
      ] as const,

      issuerLogo: {
         src: oracleLogo,
         alt: "Oracle Certified Logo",
      },

      verifyUrl:
         "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BF32548D9B1283BB867DF8A266B7812F195B2288E2D5DFD512481C6C0D3FA102",
   },
   // Data Analytics Certification - Universidad Blas Pascal
   {
      id: "cert-ubp-data-analytics",
      title: "Data Analytics Certification",
      issuer: "Universidad Blas Pascal",
      kind: "course",
      date: { start: "2025" },

      summary:
         "Specialized training in the data analysis lifecycle using the IBM methodology, applied to the international business case study 'Adventure Works Cycles'.",

      skills: [
         "Power BI",
         "Data Modeling",
         "IBM Methodology",
         "Descriptive Analytics",
         "Predictive Analytics",
         "Advanced Excel",
         "Data Cleansing",
      ] as const,

      learnings: [
         "Application of IBM methodology for data-driven strategic decision-making.",
         "Complex data modeling integrating multiple sources including sales, products, regions, and targets.",
         "Developing interactive Power BI Dashboards to track Sales and Marketing KPIs.",
         "Implementing data cleansing and preparation techniques to ensure data quality and integrity.",
      ] as const,

      issuerLogo: {
         src: unipascalLogo,
         alt: "Universidad Blas Pascal Logo",
      },

      verifyUrl:
         "https://ss.ubp.edu.ar/TramitesCertificadosValidacionProcesar.do/Code=8E7F-DA2A-4E4F-4E3C-AAB3-5B48-B010-252D",

      image: {
         src: certificateUniPascal,
         alt: "UBP Data Analytics Certificate",
      },
   },
] as const;
