import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { defaultImage, getCanonicalUrl, getEmploymentAgencySchema, getSeo, siteName } from "../utils/seo.js";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertJsonLd(id, data) {
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeo(location.pathname);
    const canonical = getCanonicalUrl(location.pathname);
    const socialDescription =
      location.pathname === "/"
        ? "Connecting employers with reliable talent and helping job seekers access professional career opportunities in Rustenburg and surrounding areas."
        : seo.description;

    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonical });

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: socialDescription });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: siteName });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: defaultImage });
    upsertMeta('meta[property="og:image:secure_url"]', { property: "og:image:secure_url", content: defaultImage });
    upsertMeta('meta[property="og:image:type"]', { property: "og:image:type", content: "image/png" });
    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: "3508" });
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: "2480" });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: "Funeka Placements recruitment agency logo",
    });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: socialDescription });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: defaultImage });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: "twitter:image:alt",
      content: "Funeka Placements recruitment agency logo",
    });

    upsertJsonLd("funeka-employment-agency-schema", getEmploymentAgencySchema());
  }, [location.pathname]);

  return null;
}
