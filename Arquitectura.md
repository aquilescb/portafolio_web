src/
app/
providers/
AppProviders.tsx
ThemeProvider.tsx
I18nProvider.tsx
router/
routes.tsx
lazy.ts
layouts/
RootLayout.tsx
PageLayout.tsx
ProjectsLayout.tsx
styles/
globals.css
tailwind.css
main.tsx
App.tsx

shared/
ui/
primitives/ # Button, Badge, Card, Input, Textarea, Skeleton...
layout/ # Container, Section, Grid, Stack...
feedback/ # Toast, EmptyState, Loading...
navigation/ # Navbar, Footer, LanguageToggle, ThemeToggle
lib/
cn.ts
motion.ts # presets framer-motion
routes.ts # helpers (buildProjectUrl)
hooks/
useLocalStorage.ts
useMediaQuery.ts
config/
site.ts # name, socials, SEO defaults
constants.ts
types/
common.ts

entities/
project/
model/
types.ts
selectors.ts
ui/
ProjectCard.tsx
TechStackBadges.tsx
timeline/
model/types.ts
ui/Timeline.tsx

features/
home/
ui/HomePage.tsx
ui/sections/
Hero.tsx
StackCarousel.tsx
FeaturedProjects.tsx
projects/
model/
getProjects.ts # usa content/
ui/
ProjectsPage.tsx
ProjectDetailPage.tsx
components/
ProjectHero.tsx
ProjectSection.tsx
ResourceLinks.tsx
VideoGallery.tsx
experience/
ui/ExperiencePage.tsx
ui/components/ExperienceItem.tsx
journey/
ui/JourneyPage.tsx
ui/components/
JourneyTimeline.tsx
CertificationsGrid.tsx
Achievements.tsx
about/
ui/AboutPage.tsx
contact/
ui/ContactPage.tsx
model/sendContact.ts # stub / mailto / form endpoint futuro

content/
projects/
index.ts # lista + lookup por slug
sgi-fundacion.ts
ciro-nova.ts
experience.ts
journey.ts
education.ts
certifications.ts
achievements.ts
i18n/
es.ts
en.ts

assets/
images/
certificates/
cv/
Aquiles-Cancinos-CV.pdf
