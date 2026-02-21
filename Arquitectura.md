```
src/
   app/
      layouts/
         RootLayout.tsx
      providers/
         i18n/
            i18m.ts
         AppProviders.tsx
         ThemeProvider.tsx
         ThemeContext.ts
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
      about/
         es.ts
         en.ts
         index.ts
      experience/
         es.ts
         en.ts
         index.ts
      i18n/
         es.ts
         en.ts
      journey/
         es.ts
         en.ts
         index.ts
      projects/
         es.ts
         en.ts
         index.ts

   entities/
      about/
         types.ts
      experience/
         ExperienceItem.tsx
         types.ts
      journey/
         JourneyBadge.tsx
         JourneyTimeLine.tsx
         JourneyTimelineItem.tsx
         types.ts
      project/
         ProjectCard.tsx
         types.ts


   features/
      about/
         componenets/
            InfoCard.tsx
            AboutSection.tsx
         AboutPage.tsx

      contact/
         sendContact.ts
         ContactPage.tsx

      experience/
         ExperiencePage.tsx

      home/
         sections/
            Hero.tsx
            StackCarousel.tsx
            FeaturedProjects.tsx
         HomePage.tsx

      journey/
         JourneyPage.tsx

      projects/
         projectFilters.ts
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
         useContentLang.ts
      config/
         site.ts
         lang.ts

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
