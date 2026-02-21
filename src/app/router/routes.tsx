import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../../app/layouts/RootLayout";
import { withSuspense } from "./lazy";
import { ProjectsGridSkeleton } from "../../features/projects/skeletons/ProjectsGridSkeleton";
import { ProjectDetailSkeleton } from "../../features/projects/skeletons/ProjectDetailSkeleton";

const HomePage = React.lazy(() =>
   import("../../features/home/HomePage").then((m) => ({
      default: m.HomePage,
   })),
);

const ProjectsPage = React.lazy(() =>
   import("../../features/projects/ProjectsPage").then((m) => ({
      default: m.ProjectsPage,
   })),
);

const ProjectDetailPage = React.lazy(() =>
   import("../../features/projects/ProjectDetailPage").then((m) => ({
      default: m.ProjectDetailPage,
   })),
);

const ExperiencePage = React.lazy(() =>
   import("../../features/experience/ExperiencePage").then((m) => ({
      default: m.ExperiencePage,
   })),
);

const JourneyPage = React.lazy(() =>
   import("../../features/journey/JourneyPage").then((m) => ({
      default: m.JourneyPage,
   })),
);

const AboutPage = React.lazy(() =>
   import("../../features/about/AboutPage").then((m) => ({
      default: m.AboutPage,
   })),
);

const ContactPage = React.lazy(() =>
   import("../../features/contact/ContactPage").then((m) => ({
      default: m.ContactPage,
   })),
);

export const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         { index: true, element: withSuspense(<HomePage />) },

         {
            path: "projects",
            element: withSuspense(<ProjectsPage />, <ProjectsGridSkeleton />),
         },
         {
            path: "projects/:slug",
            element: withSuspense(
               <ProjectDetailPage />,
               <ProjectDetailSkeleton />,
            ),
         },

         { path: "experience", element: withSuspense(<ExperiencePage />) },
         { path: "journey", element: withSuspense(<JourneyPage />) },
         { path: "about", element: withSuspense(<AboutPage />) },
         { path: "contact", element: withSuspense(<ContactPage />) },
      ],
   },
]);
