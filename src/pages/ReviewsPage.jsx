import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  MessageSquareQuote,
  Quote,
  Star,
} from "lucide-react";

const content = {
  hu: {
    back: "Vissza",

    label: "Ügyfélvisszajelzések",

    title1: "Amit az ügyfeleink",
    title2: "mondanak rólunk.",

    description:
      "Webfejlesztés, webshopok, egyedi webalkalmazások és Google Ads. Néhány visszajelzés azoktól, akikkel már együtt dolgoztunk.",

    featuredLabel: "Kiemelt visszajelzés",

    featured: {
      name: "Kovács Márton",
      company: "MK Klíma Kft.",
      project: "Weboldal + Google Ads",
      type: "combined",
      text: "A weboldal elkészítése után a Google Ads kampányainkat is teljesen újragondolták. Már az első hónapban érezhetően több ajánlatkérés érkezett, ráadásul sokkal relevánsabb érdeklődőktől. Gyors kommunikáció, igényes munka és ami a legfontosabb: mérhető eredmények.",
    },

    reviews: [
      {
        name: "Nagy Alexandra",
        company: "BeautyLine Studio",
        project: "Weboldal + Google Ads",
        type: "combined",
        text: "Egy teljesen új weboldalt szerettünk volna, ami modern, gyors és mobilon is jól működik. Pontosan azt kaptuk, amit elképzeltünk. A Google hirdetéseink beállításában is rengeteget segítettek, azóta sokkal több új vendégünk érkezik online.",
      },
      {
        name: "Tóth Bence",
        company: "Magánvállalkozó",
        project: "Webapp fejlesztés",
        type: "webapp",
        text: "Korábban több fejlesztővel is dolgoztam, de itt végre nem kellett heteket várni egy-egy módosításra. A webapp gyors, átlátható és pontosan azokra a funkciókra épült, amikre szükségem volt. Külön pozitívum, hogy a fejlesztés közben is folyamatosan kaptam ötleteket a jobb működéshez.",
      },
      {
        name: "Farkas Dániel",
        company: "AutoPro Detailing Kft.",
        project: "Weboldal + Google Ads",
        type: "combined",
        text: "Weboldal és Google Ads miatt kerestük meg őket. A régi oldalunk lassú és elavult volt, az új viszont teljesen más szint. A kampányok indulása után rövid időn belül megnőtt a telefonos és online megkeresések száma. Teljesen elégedettek vagyunk az együttműködéssel.",
      },
      {
        name: "Szabó Petra",
        company: "P&S Fashion",
        project: "Webshop fejlesztés",
        type: "ecommerce",
        text: "A webshopunk fejlesztését bíztuk rájuk, az egyedi funkcióktól kezdve a fizetési és szállítási megoldásokig. Nagyon fontos volt számunkra, hogy az oldal egyszerű legyen a vásárlóknak, de közben prémium hatást keltsen. Az eredmény minden várakozásunkat felülmúlta.",
      },
      {
        name: "Horváth Gergő",
        company: "HG Solutions Kft.",
        project: "Egyedi webapp",
        type: "webapp",
        text: "Egyedi belső webes rendszert szerettünk volna a napi adminisztráció egyszerűsítésére. A kész webapp rengeteg manuális munkát kiváltott, és azóta sokkal átláthatóbban működnek a folyamataink. Kifejezetten tetszett, hogy nem csak lefejlesztették, amit kértünk, hanem üzleti oldalról is gondolkodtak.",
      },
      {
        name: "Kiss Eszter",
        company: "Luna Home Webshop",
        project: "Webshop + Google Ads",
        type: "ecommerce",
        text: "A teljes webshopunkat újraépítették, majd a Google Ads kampányainkat is átvették. Az oldal gyorsabb lett, mobilon sokkal jobb a vásárlási folyamat, és a hirdetésekből érkező rendelések száma is szépen növekedett. Ritka, hogy a design, a fejlesztés és a marketing ennyire jól össze legyen hangolva.",
      },
    ],

    highlightLabel: "NETGARY",

    highlightTitle1: "Nem csak egy",
    highlightTitle2: "szép weboldal.",

    highlightText:
      "A cél minden projektnél ugyanaz: olyan digitális rendszert építeni, amely gyors, átlátható és üzletileg is működik. A fejlesztéstől a Google Ads kampányokig egyben látjuk a teljes folyamatot.",

    ctaLabel: "Dolgozzunk együtt",

    ctaTitle1: "A következő",
    ctaTitle2: "projekt lehet a tiéd.",

    ctaDescription:
      "Mesélj a projektedről, és nézzük meg, hogyan tudjuk együtt megvalósítani.",

    ctaButton: "Kérj egyedi ajánlatot",

    footer: "Webfejlesztés · Webshop · Webapp · Google Ads",
  },

  en: {
    back: "Back",

    label: "Client reviews",

    title1: "What our clients",
    title2: "say about us.",

    description:
      "Web development, e-commerce, custom web applications and Google Ads. A few words from clients we've already worked with.",

    featuredLabel: "Featured review",

    featured: {
      name: "Márton Kovács",
      company: "MK Klíma Kft.",
      project: "Website + Google Ads",
      type: "combined",
      text: "After completing our website, they completely reworked our Google Ads campaigns as well. We noticed more quote requests in the very first month, and the leads were significantly more relevant. Fast communication, high-quality work and most importantly: measurable results.",
    },

    reviews: [
      {
        name: "Alexandra Nagy",
        company: "BeautyLine Studio",
        project: "Website + Google Ads",
        type: "combined",
        text: "We wanted a completely new website that was modern, fast and worked well on mobile. We got exactly what we had imagined. They also helped us tremendously with our Google Ads setup and since then we've been getting significantly more new clients online.",
      },
      {
        name: "Bence Tóth",
        company: "Entrepreneur",
        project: "Web application",
        type: "webapp",
        text: "I had worked with several developers before, but here I finally didn't have to wait weeks for every small change. The web app is fast, clear and built around exactly the functionality I needed. I particularly appreciated receiving suggestions throughout development on how the system could work even better.",
      },
      {
        name: "Dániel Farkas",
        company: "AutoPro Detailing Kft.",
        project: "Website + Google Ads",
        type: "combined",
        text: "We contacted them for both a website and Google Ads. Our old website was slow and outdated, while the new one is on a completely different level. Shortly after launching the campaigns, both phone and online inquiries increased. We are extremely satisfied with the collaboration.",
      },
      {
        name: "Petra Szabó",
        company: "P&S Fashion",
        project: "E-commerce development",
        type: "ecommerce",
        text: "We trusted them with developing our online store, from custom functionality to payment and shipping solutions. It was very important that the site remained simple for customers while still having a premium feel. The result exceeded all of our expectations.",
      },
      {
        name: "Gergő Horváth",
        company: "HG Solutions Kft.",
        project: "Custom web application",
        type: "webapp",
        text: "We wanted a custom internal web system to simplify our daily administration. The finished application replaced a huge amount of manual work and our processes have become much clearer. What we especially liked was that they didn't simply develop what we requested, but also approached the project from a business perspective.",
      },
      {
        name: "Eszter Kiss",
        company: "Luna Home Webshop",
        project: "E-commerce + Google Ads",
        type: "ecommerce",
        text: "They rebuilt our entire online store and later took over our Google Ads campaigns as well. The site became faster, the mobile purchasing experience improved significantly and orders coming from advertising increased nicely. It's rare to see design, development and marketing work together this well.",
      },
    ],

    highlightLabel: "NETGARY",

    highlightTitle1: "More than just",
    highlightTitle2: "a beautiful website.",

    highlightText:
      "The goal of every project is the same: to build a digital system that is fast, clear and works from a business perspective. From development to Google Ads campaigns, we look at the entire customer journey as one system.",

    ctaLabel: "Let's work together",

    ctaTitle1: "Your project",
    ctaTitle2: "could be next.",

    ctaDescription:
      "Tell us about your project and let's find the right way to build it together.",

    ctaButton: "Request a custom quote",

    footer: "Web Development · E-commerce · Web Apps · Google Ads",
  },
};

function Stars({ dark = false }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={15}
          strokeWidth={1.5}
          className={dark ? "fill-white text-white" : "fill-brand text-brand"}
        />
      ))}
    </div>
  );
}

function ServiceBadge({ type, children, dark = false }) {
  if (dark) {
    return (
      <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/75">
        {children}
      </span>
    );
  }

  const styles = {
    combined: "border-blue-100 bg-blue-50 text-blue-700",

    webapp: "border-violet-100 bg-violet-50 text-violet-700",

    ecommerce: "border-emerald-100 bg-emerald-50 text-emerald-700",

    default: "border-border bg-zinc-50 text-brand",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] ${
        styles[type] || styles.default
      }`}
    >
      {children}
    </span>
  );
}

function ReviewsPage({ language, setLanguage }) {
  const c = content[language] || content.hu;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-8">
          <Link
            to="/"
            className="font-heading text-2xl font-bold tracking-tight text-brand"
          >
            NETGARY
          </Link>

          <div className="flex items-center gap-5">
            {/* LANGUAGE */}
            <div className="flex items-center gap-2 text-xs font-medium">
              <button
                type="button"
                onClick={() => setLanguage("hu")}
                className={`transition duration-300 ${
                  language === "hu"
                    ? "text-brand"
                    : "text-zinc-300 hover:text-brand"
                }`}
              >
                HU
              </button>

              <span className="text-zinc-300">/</span>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`transition duration-300 ${
                  language === "en"
                    ? "text-brand"
                    : "text-zinc-300 hover:text-brand"
                }`}
              >
                EN
              </button>
            </div>

            {/* BACK */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition duration-300 hover:text-brand"
            >
              <ArrowLeft size={16} strokeWidth={1.8} />

              <span className="hidden sm:inline">{c.back}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-white pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/5 text-brand">
                <MessageSquareQuote size={17} strokeWidth={1.7} />
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                {c.label}
              </p>
            </div>

            <h1 className="font-heading text-[54px] font-semibold leading-[0.94] tracking-[-0.045em] text-brand sm:text-[72px] lg:text-[84px]">
              {c.title1}
              <br />

              <span className="text-brand-light">{c.title2}</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              {c.description}
            </p>
          </div>

          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#f1f4fb] blur-3xl" />
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[30px] bg-brand px-7 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            {/* BACKGROUND DETAILS */}
            <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/[0.06] blur-2xl" />

            <div className="pointer-events-none absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-[#77829b]/20 blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Quote size={18} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                    {c.featuredLabel}
                  </span>
                </div>

                <ServiceBadge type={c.featured.type} dark>
                  {c.featured.project}
                </ServiceBadge>
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
                <div>
                  <BadgeCheck
                    size={22}
                    strokeWidth={1.6}
                    className="text-white/55"
                  />

                  <h2 className="mt-5 font-heading text-3xl font-semibold sm:text-4xl">
                    {c.featured.company}
                  </h2>

                  <p className="mt-2 text-sm text-white/50">
                    {c.featured.name}
                  </p>
                </div>

                <div>
                  <Stars dark />

                  <blockquote className="mt-6 font-heading text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-3xl">
                    “{c.featured.text}”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[#f7f8fa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.reviews.map((review, index) => (
              <article
                key={`${review.company}-${index}`}
                className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[24px] border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(40,54,84,0.08)]"
              >
                {/* SMALL ACCENT */}
                <div
                  className={`absolute top-0 left-0 h-[3px] w-full ${
                    review.type === "combined"
                      ? "bg-blue-400"
                      : review.type === "webapp"
                        ? "bg-violet-400"
                        : review.type === "ecommerce"
                          ? "bg-emerald-400"
                          : "bg-brand"
                  }`}
                />

                <div className="flex items-start justify-between gap-4">
                  <Stars />

                  <span className="font-mono text-[11px] text-zinc-300">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6">
                  <ServiceBadge type={review.type}>
                    {review.project}
                  </ServiceBadge>
                </div>

                <blockquote className="mt-7 flex-1 text-[15px] leading-7 text-zinc-600">
                  “{review.text}”
                </blockquote>

                <div className="mt-8 border-t border-border pt-5">
                  <p className="font-heading text-xl font-semibold text-brand">
                    {review.name}
                  </p>

                  <p className="mt-1 text-sm text-zinc-400">{review.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="relative overflow-hidden bg-brand py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              {c.highlightLabel}
            </p>

            <h2 className="mt-5 font-heading text-5xl font-semibold leading-[0.96] tracking-[-0.035em] sm:text-6xl">
              {c.highlightTitle1}
              <br />

              <span className="text-white/45">{c.highlightTitle2}</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/60">
            {c.highlightText}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-[#fbfbfc] px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -bottom-28 h-72 w-72 rounded-full bg-brand/[0.04] blur-3xl" />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                {c.ctaLabel}
              </p>

              <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                <div>
                  <h2 className="font-heading text-5xl font-semibold leading-[0.96] tracking-[-0.035em] text-brand sm:text-6xl">
                    {c.ctaTitle1}
                    <br />

                    <span className="text-brand-light">{c.ctaTitle2}</span>
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500">
                    {c.ctaDescription}
                  </p>
                </div>

                <div className="lg:text-right">
                  <Link
                    to="/ajanlat"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {c.ctaButton}

                    <ArrowUpRight size={16} strokeWidth={1.8} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-heading text-lg font-semibold text-brand">
            NETGARY
          </p>

          <p className="text-xs text-zinc-400">{c.footer}</p>
        </div>
      </footer>
    </main>
  );
}

export default ReviewsPage;
