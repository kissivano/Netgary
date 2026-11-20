import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

function setMeta(selector, content) {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
}

function applyDomainSEO() {
  const hostname = window.location.hostname;

  const isHungarianDomain =
    hostname === "netgary.hu" || hostname.endsWith(".netgary.hu");

  if (isHungarianDomain) {
    document.documentElement.lang = "hu";

    document.title = "NETGARY — Webfejlesztés & Google Ads";

    setMeta(
      'meta[name="description"]',
      "Modern weboldalak, egyedi webes megoldások, webshopok és professzionális Google Ads kampánykezelés vállalkozások számára.",
    );

    setMeta(
      'meta[property="og:title"]',
      "NETGARY — Webfejlesztés & Google Ads",
    );

    setMeta(
      'meta[property="og:description"]',
      "Modern weboldalak, egyedi webes megoldások és adatalapú Google Ads kampányok vállalkozások számára.",
    );

    setMeta('meta[property="og:url"]', "https://netgary.hu/");

    setMeta('meta[property="og:image"]', "https://netgary.hu/socialshare.png");

    setMeta(
      'meta[property="og:image:alt"]',
      "NETGARY — Webfejlesztés & Google Ads",
    );

    setMeta('meta[property="og:locale"]', "hu_HU");

    setMeta('meta[property="og:locale:alternate"]', "de_CH");

    setMeta(
      'meta[name="twitter:title"]',
      "NETGARY — Webfejlesztés & Google Ads",
    );

    setMeta(
      'meta[name="twitter:description"]',
      "Modern weboldalak, egyedi webes megoldások és adatalapú Google Ads kampányok vállalkozások számára.",
    );

    setMeta('meta[name="twitter:image"]', "https://netgary.hu/socialshare.png");

    const canonical = document.querySelector('link[rel="canonical"]');

    if (canonical) {
      canonical.setAttribute("href", "https://netgary.hu/");
    }

    return;
  }

  document.documentElement.lang = "de";

  document.title = "NETGARY — Webentwicklung & Google Ads Schweiz";

  setMeta(
    'meta[name="description"]',
    "NETGARY entwickelt moderne Websites, Webapps und Onlineshops und unterstützt Unternehmen mit professionellem Google Ads Management in der Schweiz.",
  );

  setMeta('meta[property="og:title"]', "NETGARY — Webentwicklung & Google Ads");

  setMeta(
    'meta[property="og:description"]',
    "Moderne Websites, individuelle Weblösungen und datengetriebene Google Ads Kampagnen für Unternehmen in der Schweiz.",
  );

  setMeta('meta[property="og:url"]', "https://netgary.ch/");

  setMeta('meta[property="og:image"]', "https://netgary.ch/socialshare.png");

  setMeta(
    'meta[property="og:image:alt"]',
    "NETGARY — Webentwicklung & Google Ads",
  );

  setMeta('meta[property="og:locale"]', "de_CH");

  setMeta('meta[property="og:locale:alternate"]', "hu_HU");

  setMeta(
    'meta[name="twitter:title"]',
    "NETGARY — Webentwicklung & Google Ads",
  );

  setMeta(
    'meta[name="twitter:description"]',
    "Moderne Websites, individuelle Weblösungen und datengetriebene Google Ads Kampagnen für Unternehmen in der Schweiz.",
  );

  setMeta('meta[name="twitter:image"]', "https://netgary.ch/socialshare.png");

  const canonical = document.querySelector('link[rel="canonical"]');

  if (canonical) {
    canonical.setAttribute("href", "https://netgary.ch/");
  }
}

applyDomainSEO();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
