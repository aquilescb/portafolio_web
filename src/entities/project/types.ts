import type { StackItem } from "../stack/types";

export type ProjectTech = StackItem["key"];

export type ProjectLink =
   | { kind: "github"; href: string; label?: string }
   | { kind: "youtube"; href: string; label?: string }
   | { kind: "live"; href: string; label?: string };

export type ProjectTimeframe = {
   start: string; // "2025-01" o "2025-01-15"
   end?: string; // si no existe => en curso
};

export type ProjectImage = {
   src: string;
   alt: string;
};

export type ProjectPreview = {
   slug: string;
   title: string;
   summary: string;
   featured?: boolean;
   role?: string;
   timeframe: ProjectTimeframe;
   cover?: ProjectImage;
   tech?: readonly ProjectTech[];
   links: readonly ProjectLink[];
};

export type ProjectDetail = ProjectPreview & {
   problem?: string;
   solution?: string;
   features?: readonly string[];
   screenshots?: readonly ProjectImage[];
   technologies?: readonly ProjectTech[];
   links: readonly ProjectLink[];
};