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
   let el = document.head.querySelector(selector) as HTMLMetaElement | null;
   if (!el) {
      el = create();
      document.head.appendChild(el);
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

function setCanonical(href: string) {
   let link = document.head.querySelector(
      'link[rel="canonical"]',
   ) as HTMLLinkElement | null;
   if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
   }
   link.href = href;
}

export function usePageMeta(meta: PageMeta) {
   useEffect(() => {
      const fullTitle = site.titleTemplate.replace("%s", meta.title);
      document.title = fullTitle;

      const desc = meta.description ?? site.description;
      setMetaName("description", desc);

      // Robots
      if (meta.noIndex) setMetaName("robots", "noindex,nofollow");
      else setMetaName("robots", "index,follow");

      // Canonical
      if (meta.path && site.url) {
         setCanonical(`${site.url}${meta.path}`);
      }

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

      // Twitter (opcional)
      setMetaName("twitter:card", "summary_large_image");
      if (site.twitterHandle) setMetaName("twitter:site", site.twitterHandle);
      setMetaName("twitter:title", fullTitle);
      setMetaName("twitter:description", desc);
      setMetaName("twitter:image", ogImage);
   }, [meta.title, meta.description, meta.path, meta.ogImage, meta.noIndex]);
}
