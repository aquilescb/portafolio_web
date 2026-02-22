import { useTranslation } from "react-i18next";
import { usePageMeta } from "../../shared/hooks/usePageMeta";

import { Hero } from "./sections/Hero";
import { StackCarousel } from "./sections/StackCarousel";
import { FeaturedProjects } from "./sections/FeaturedProjects";

export function HomePage() {
   const { t } = useTranslation();

   usePageMeta({
      title: t("meta.home.title"),
      description: t("meta.home.desc"),
      path: "/",
   });

   return (
      <div className="space-y-16">
         <Hero />
         <StackCarousel />
         <FeaturedProjects />
      </div>
   );
}
