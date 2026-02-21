import { usePageMeta } from "../../../shared/hooks/usePageMeta";
import { useI18n } from "../../../app/providers/useI18n";
import { Hero } from "./sections/Hero";
import { StackCarousel } from "./sections/StackCarousel";
import { FeaturedProjects } from "./sections/FeaturedProjects";

export function HomePage() {
   const { t, lang } = useI18n();

   usePageMeta({
      title: t("meta.home.title"),
      description: t("meta.home.desc"),
      path: lang === "es" ? "/" : "/",
   });

   return (
      <div className="space-y-14">
         <Hero />
         <StackCarousel />
         <FeaturedProjects />
      </div>
   );
}
