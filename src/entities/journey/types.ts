export type JourneyTab = "education" | "certificate" | "highlights";

/** ISO flexible: "YYYY" | "YYYY-MM" | "YYYY-MM-DD" */
export type JourneyDate = string;

export type DateRange = {
   start: JourneyDate;
   end?: JourneyDate | "Present";
};

export type Link = {
   label: string;
   href: string;
};

/** EDUCATION */
export type EducationItem = {
   id: string;
   title: string;
   org: string;
   location?: string;
   date: DateRange;
   description: string;
   logo?: { src: string; alt: string };
   tags?: readonly string[];
   links?: readonly Link[];
};

/** CERTIFICATES */
export type CertificateKind = "course" | "certificate" | "bootcamp";

export type CertificateItem = {
   id: string;
   title: string;
   issuer: string; // Udemy, Google, UCASAL, etc.
   date: DateRange; // normalmente start (y end opcional)
   kind: CertificateKind;

   // contenido
   summary: string; // 1-2 líneas
   learnings?: readonly string[]; // bullets “lo que aprendí”
   skills?: readonly string[]; // tags

   // evidencia
   verifyUrl?: string; // link verificable
   credentialId?: string; // opcional
   image?: { src: string; alt: string }; // preview certificado (webp)
   issuerLogo?: { src: string; alt: string };
};
export type HighlightKind =
   | "achievement"
   | "award"
   | "hackathon"
   | "community"
   | "speaker"
   | "milestone"
   | "team";

/** HIGHLIGHTS */
export type HighlightItem = {
   id: string;
   title: string;
   org?: string;
   kind: HighlightKind;
   date: DateRange;
   location?: string;
   description: string;
   tags?: readonly string[];
   links?: readonly Link[];
   images?: { src: string; alt: string } [];
   featured?: boolean;
};
