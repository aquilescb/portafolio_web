```
src/
   app/
      layouts/
         RootLayout.tsx
      providers/
         AppProviders.tsx
         ThemeProvider.tsx
         I18nProvider.tsx
         I18nContext.ts
         ThemeContext.ts
         useI18n.ts
         useTheme.ts
         router/
            routes.tsx
            lazy.ts
      styles/
         globals.css

   assets/
      images/
      certificates/

   content/
      i18n/
         es.ts
         en.ts
      projects/
         index.ts
      experience.ts
      journey.ts
      about.ts

   entities/
      project/
         model/
            types.ts
         ui/
            ProjectCard.tsx
      journey/
         model/
            types.ts
         ui/
            JourneyBadge.tsx
            JourneyTimeLine.tsx
            JourneyTimelineItem.tsx
      experiencie/
         model/
            types.ts
         ui/
            Experience.tsx

   features/
      about/
         ui/
            componenets/
                InfoCard.tsx
                AboutSection.tsx
            AboutPage.tsx

      contact/
         model/
            sendContact.ts
         ui/
            ContactPage.tsx

      experience/
         ui/
            ExperiencePage.tsx

      home/
         ui/
            sections/
               Hero.tsx
               StackCarousel.tsx
               FeaturedProjects.tsx
            HomePage.tsx

      journey/
         ui/
            JourneyPage.tsx

      projects/
         model/
            projectFilters.ts
         ui/
            components/
               ProjectHero.tsx
               ProjectSection.tsx
               ResourceLinks.tsx
            skeletons/
               ProjectDetailSkeleton.tsx
               ProjectsGridSkeleton.tsx
            ProjectsPage.tsx
            ProjectDetailPage.tsx

   shared/
      ui/
         primitives/
            Button.tsx
         layout/
            MotionSection.tsx
         feedback/
            RouteLoading.tsx
            Skeleton.tsx
         navigation/
            Footer.tsx
            Navbar.tsx
      lib/
         cn.ts
      hooks/
         usePageMeta.ts
      config/
         site.ts
   main.tsx
   App.tsx
public/cv
   Aquiles-Cancinos-CV.pdf

```

COMMITS
`feat:` nueva funcionalidad

- `fix:` bug
- `refactor:` refactor sin cambiar comportamiento
- `style:` estilos (no lógica)
- `chore:` tooling/config
- `docs:` documentación/README
- `perf:` performance
- `test:` tests
