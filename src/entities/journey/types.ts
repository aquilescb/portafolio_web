export type JourneyEventType = "education" | "certification" | "achievement";

export type JourneyEvent = {
   id: string;
   type: JourneyEventType;
   title: string;
   org?: string;
   date: string; // "YYYY" | "YYYY-MM" | "YYYY-MM-DD"
   description: string;
   tags?: string[];
   image?: string; // ruta pública: "/certs/x.png" o "/img/x.jpg"
   links?: Array<{ label: string; href: string }>;
};
