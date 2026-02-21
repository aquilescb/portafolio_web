import { useEffect } from "react";
import { site } from "../config/site";

type PageMeta = {
   title: string;
   description?: string;
   path?: string; // "/projects"
   ogImage?: string; // "/og/xxx.png"
   noIndex?: boolean;
};

function ensureMeta(selector: string, create: () => HTMLMetaElement) {
   const head = document.head;
   let el = head.querySelector(selector) as HTMLMetaElement | null;
   if (!el) {
      el = create();
      head.appendChild(el);
   }
   return el;
}

function setMetaName(name: string, content: string) {
   const el = ensureMeta(`meta[name="${name}"]`, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", name);
      return m;
   });
   el.setAttribute("content", content);
}

function setMetaProperty(property: string, content: string) {
   const el = ensureMeta(`meta[property="${property}"]`, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", property);
      return m;
   });
   el.setAttribute("content", content);
}

function setCanonical(href?: string) {
   const head = document.head;
   let link = head.querySelector(
      'link[rel="canonical"]',
   ) as HTMLLinkElement | null;

   if (!href) {
      // Si no hay href, removemos canonical si existe (opcional pero prolijo)
      if (link) link.remove();
      return;
   }

   if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      head.appendChild(link);
   }

   link.href = href;
}

export function usePageMeta(meta: PageMeta) {
   useEffect(() => {
      if (typeof document === "undefined") return;

      const fullTitle = site.titleTemplate.replace("%s", meta.title);
      document.title = fullTitle;

      const desc = meta.description ?? site.description;
      setMetaName("description", desc);

      // Robots
      setMetaName("robots", meta.noIndex ? "noindex,nofollow" : "index,follow");

      // Canonical
      const canonical =
         meta.path && site.url ? `${site.url}${meta.path}` : undefined;
      setCanonical(canonical);

      // Open Graph
      const ogImage = meta.ogImage ?? site.ogImage;
      const ogUrl =
         meta.path && site.url ? `${site.url}${meta.path}` : site.url;

      setMetaProperty("og:site_name", site.name);
      setMetaProperty("og:title", fullTitle);
      setMetaProperty("og:description", desc);
      if (ogUrl) setMetaProperty("og:url", ogUrl);
      setMetaProperty("og:type", "website");
      setMetaProperty("og:image", ogImage);

      // Twitter
      setMetaName("twitter:card", "summary_large_image");
      if (site.twitterHandle) setMetaName("twitter:site", site.twitterHandle);
      setMetaName("twitter:title", fullTitle);
      setMetaName("twitter:description", desc);
      setMetaName("twitter:image", ogImage);
   }, [meta.title, meta.description, meta.path, meta.ogImage, meta.noIndex]);
}
