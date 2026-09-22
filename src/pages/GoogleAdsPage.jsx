import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Check,
  MousePointerClick,
  Search,
  Settings2,
  Target,
} from "lucide-react";

const content = {
  hu: {
    back: "Vissza",
    badge: "Google Ads Partner",
    experience: "6 év Google Ads tapasztalat",

    heroTitle1: "Google Ads kampányok,",
    heroTitle2: "amik nem csak költenek.",

    heroDescription:
      "6 éve kezelek Google Ads kampányokat a stratégiától és a méréstől kezdve egészen a folyamatos optimalizálásig. A cél nem egyszerűen több kattintás, hanem több értékes érdeklődő és vásárló.",

    primaryButton: "Kérek kampányelemzést",
    secondaryButton: "Szolgáltatások",

    stats: [
      {
        value: "6 év",
        label: "Google Ads tapasztalat",
      },
      {
        value: "Google",
        label: "Ads Partner",
      },
      {
        value: "Folyamatos",
        label: "optimalizálás",
      },
      {
        value: "Adatalapú",
        label: "döntések",
      },
    ],

    servicesLabel: "Google Ads kezelés",
    servicesTitle1: "Nem elég elindítani",
    servicesTitle2: "egy kampányt.",

    servicesDescription:
      "A jól működő Google Ads rendszer folyamatos elemzést, pontos mérést és rendszeres optimalizálást igényel.",

    services: [
      {
        title: "Kampánystratégia",
        description:
          "A megfelelő kampánytípusok, célzások és struktúra kialakítása az üzleti céljaid alapján.",
        icon: Target,
      },
      {
        title: "Kulcsszókutatás",
        description:
          "A valóban értékes keresések megtalálása és a felesleges kattintások kizárása.",
        icon: Search,
      },
      {
        title: "Hirdetések optimalizálása",
        description:
          "Hirdetésszövegek, ajánlatok, keresési kifejezések és kampánybeállítások folyamatos fejlesztése.",
        icon: MousePointerClick,
      },
      {
        title: "Konverziókövetés",
        description:
          "GA4, Google Tag Manager és Google Ads konverziók megfelelő beállítása, hogy valódi adatok alapján dönthessünk.",
        icon: BarChart3,
      },
      {
        title: "Performance Max",
        description:
          "PMax kampányok felépítése, optimalizálása és az eredmények folyamatos elemzése.",
        icon: Settings2,
      },
      {
        title: "Remarketing",
        description:
          "A korábbi látogatók újbóli megszólítása releváns kampányokkal és ajánlatokkal.",
        icon: ArrowUpRight,
      },
    ],

    processLabel: "Folyamat",
    processTitle1: "Átlátható.",
    processTitle2: "Mérhető. Optimalizálható.",

    process: [
      {
        number: "01",
        title: "Audit",
        description:
          "Megnézem a meglévő fiókot, kampányokat, mérést és a legfontosabb problémákat.",
      },
      {
        number: "02",
        title: "Stratégia",
        description:
          "Meghatározzuk a célokat, kampánystruktúrát, célzásokat és a prioritásokat.",
      },
      {
        number: "03",
        title: "Felépítés",
        description:
          "Elkészülnek vagy újraszervezésre kerülnek a kampányok és a mérési rendszer.",
      },
      {
        number: "04",
        title: "Optimalizálás",
        description:
          "Az adatok alapján folyamatosan finomítom a kampányokat a jobb eredmények érdekében.",
      },
    ],

    advantageLabel: "NETGARY + Google Ads",
    advantageTitle1: "A hirdetés csak",
    advantageTitle2: "az egyik fele.",

    advantageDescription:
      "A kampány eredménye nem csak a Google Ads fiókon múlik. A weboldal sebessége, felépítése, ajánlata és konverziós pontjai ugyanúgy meghatározzák, hogy a kattintásból lesz-e ügyfél.",

    advantages: [
      "Google Ads és webfejlesztés egy helyen",
      "Landing oldalak gyors módosítása",
      "Konverziókövetés technikai beállítása",
      "Adatalapú fejlesztési javaslatok",
      "Közvetlen kommunikáció",
    ],

    ctaLabel: "Google Ads",
    ctaTitle1: "Nézzük meg,",
    ctaTitle2: "hol folyik el a kereted.",
    ctaDescription:
      "Ha már hirdetsz, átnézem a jelenlegi kampányaidat. Ha most kezdenél, felépítjük a megfelelő rendszert az alapoktól.",
    ctaButton: "Kérek egyedi ajánlatot",

    footer: "Google Ads kezelés · Webfejlesztés · Digitális megoldások",
  },

  en: {
    back: "Back",
    badge: "Google Ads Partner",
    experience: "6 years of Google Ads experience",

    heroTitle1: "Google Ads campaigns",
    heroTitle2: "that do more than spend.",

    heroDescription:
      "I've been managing Google Ads campaigns for 6 years, from strategy and tracking to continuous optimization. The goal isn't simply more clicks — it's more valuable leads and customers.",

    primaryButton: "Request a campaign audit",
    secondaryButton: "Services",

    stats: [
      {
        value: "6 years",
        label: "Google Ads experience",
      },
      {
        value: "Google",
        label: "Ads Partner",
      },
      {
        value: "Continuous",
        label: "optimization",
      },
      {
        value: "Data-driven",
        label: "decisions",
      },
    ],

    servicesLabel: "Google Ads management",
    servicesTitle1: "Launching a campaign",
    servicesTitle2: "is only the beginning.",

    servicesDescription:
      "A high-performing Google Ads system requires continuous analysis, accurate tracking and regular optimization.",

    services: [
      {
        title: "Campaign strategy",
        description:
          "Campaign types, targeting and account structure built around your business objectives.",
        icon: Target,
      },
      {
        title: "Keyword research",
        description:
          "Finding valuable searches while filtering out traffic that wastes your advertising budget.",
        icon: Search,
      },
      {
        title: "Ad optimization",
        description:
          "Continuous improvement of ad copy, offers, search terms and campaign settings.",
        icon: MousePointerClick,
      },
      {
        title: "Conversion tracking",
        description:
          "Proper GA4, Google Tag Manager and Google Ads conversion tracking so decisions are based on real data.",
        icon: BarChart3,
      },
      {
        title: "Performance Max",
        description:
          "Building, managing and optimizing Performance Max campaigns based on performance data.",
        icon: Settings2,
      },
      {
        title: "Remarketing",
        description:
          "Reconnect with previous visitors through relevant campaigns and offers.",
        icon: ArrowUpRight,
      },
    ],

    processLabel: "Process",
    processTitle1: "Clear.",
    processTitle2: "Measurable. Optimizable.",

    process: [
      {
        number: "01",
        title: "Audit",
        description:
          "I review the existing account, campaigns, tracking setup and the most important opportunities.",
      },
      {
        number: "02",
        title: "Strategy",
        description:
          "We define objectives, campaign structure, targeting and priorities.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Campaigns and tracking systems are created or reorganized around the strategy.",
      },
      {
        number: "04",
        title: "Optimization",
        description:
          "Campaigns are continuously refined using performance data.",
      },
    ],

    advantageLabel: "NETGARY + Google Ads",
    advantageTitle1: "Advertising is only",
    advantageTitle2: "half the equation.",

    advantageDescription:
      "Campaign performance doesn't depend on Google Ads alone. Website speed, structure, your offer and conversion experience determine whether a click actually becomes a customer.",

    advantages: [
      "Google Ads and web development in one place",
      "Fast landing page improvements",
      "Technical conversion tracking setup",
      "Data-driven website recommendations",
      "Direct communication",
    ],

    ctaLabel: "Google Ads",
    ctaTitle1: "Let's find out",
    ctaTitle2: "where your budget is going.",
    ctaDescription:
      "If you're already advertising, I'll review your current campaigns. If you're starting from scratch, we'll build the right system from the ground up.",
    ctaButton: "Request a custom quote",

    footer: "Google Ads Management · Web Development · Digital Solutions",
  },
};

function GoogleAdsPage({ language, setLanguage }) {
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
            <div className="flex items-center gap-2 text-xs font-medium">
              <button
                type="button"
                onClick={() => setLanguage("hu")}
                className={`transition ${
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
                className={`transition ${
                  language === "en"
                    ? "text-brand"
                    : "text-zinc-300 hover:text-brand"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-brand"
            >
              <ArrowLeft size={16} strokeWidth={1.8} />
              <span className="hidden sm:inline">{c.back}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-white pt-16 md:pt-20">
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-brand">
                <BadgeCheck size={16} strokeWidth={1.8} />
                {c.badge}
              </div>

              <span className="text-sm text-zinc-400">{c.experience}</span>
            </div>

            <h1 className="font-heading text-[54px] font-semibold leading-[0.94] tracking-[-0.045em] text-brand sm:text-[72px] lg:text-[84px]">
              {c.heroTitle1}
              <br />
              <span className="text-brand-light">{c.heroTitle2}</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              {c.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/ajanlat"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                {c.primaryButton}
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>

              <a
                href="#google-services"
                className="rounded-full border border-border px-6 py-3.5 text-sm font-medium text-brand transition hover:border-brand"
              >
                {c.secondaryButton}
              </a>
            </div>
          </div>

          {/* ADS DASHBOARD */}
          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-[24px] border border-border bg-[#fbfbfc]">
              <div className="flex h-14 items-center justify-between border-b border-border px-5">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff605c]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
                </div>

                <span className="text-xs text-zinc-400">Google Ads</span>

                <div className="w-12" />
              </div>

              <div className="p-5 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                      Campaign performance
                    </p>

                    <p className="mt-2 font-heading text-3xl font-semibold text-brand">
                      Optimization
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <BarChart3 size={19} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {["Clicks", "Conversions", "ROAS"].map((item, index) => (
                    <div
                      key={item}
                      className="min-w-0 rounded-[14px] border border-border bg-white p-4"
                    >
                      <p className="truncate text-[10px] uppercase tracking-wider text-zinc-400">
                        {item}
                      </p>

                      <div
                        className={`mt-5 h-1.5 rounded-full bg-brand ${
                          index === 0
                            ? "w-[72%]"
                            : index === 1
                              ? "w-[55%]"
                              : "w-[88%]"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-[18px] border border-border bg-white p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="truncate text-sm font-medium text-brand">
                      Campaign overview
                    </p>

                    <span className="flex shrink-0 items-center gap-2 text-xs text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </div>

                  <div className="mt-8 flex h-40 min-w-0 items-end gap-2">
                    {[35, 52, 44, 67, 58, 78, 64, 84, 72, 94, 82, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="min-w-0 flex-1 rounded-t-md bg-brand/10"
                          style={{ height: `${height}%` }}
                        >
                          <div className="h-full w-full rounded-t-md bg-brand opacity-[0.78]" />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -top-20 -right-20 -z-10 h-80 w-80 rounded-full bg-[#f3f5fa] blur-3xl" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {c.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`min-w-0 py-9 ${
                index % 2 === 0 ? "border-r border-border pr-5" : "pl-5"
              } ${index > 1 ? "border-t border-border lg:border-t-0" : ""} ${
                index !== 3 ? "lg:border-r lg:border-border lg:px-8" : "lg:px-8"
              }`}
            >
              <p className="font-heading text-2xl font-semibold text-brand sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="google-services" className="bg-zinc-50/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                {c.servicesLabel}
              </p>

              <h2 className="mt-5 font-heading text-5xl font-semibold leading-[0.96] tracking-[-0.035em] text-brand sm:text-6xl">
                {c.servicesTitle1}
                <br />
                <span className="text-brand-light">{c.servicesTitle2}</span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-base leading-7 text-zinc-500">
                {c.servicesDescription}
              </p>
            </div>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[22px] border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {c.services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="min-w-0 border-b border-r border-border bg-white p-7 transition duration-300 last:border-b-0 hover:bg-[#fbfbfc]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-brand">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-8 font-heading text-2xl font-semibold text-brand">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            {c.processLabel}
          </p>

          <h2 className="mt-5 font-heading text-5xl font-semibold leading-[0.96] tracking-[-0.035em] text-brand sm:text-6xl">
            {c.processTitle1}
            <br />
            <span className="text-brand-light">{c.processTitle2}</span>
          </h2>

          <div className="mt-14">
            {c.process.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 border-t border-border py-8 md:grid-cols-[100px_1fr_1.25fr] md:items-start"
              >
                <span className="font-mono text-xs text-zinc-300">
                  {step.number}
                </span>

                <h3 className="font-heading text-2xl font-semibold text-brand">
                  {step.title}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-zinc-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="bg-brand py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              {c.advantageLabel}
            </p>

            <h2 className="mt-5 font-heading text-5xl font-semibold leading-[0.96] tracking-[-0.035em] sm:text-6xl">
              {c.advantageTitle1}
              <br />
              <span className="text-white/50">{c.advantageTitle2}</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/60">
              {c.advantageDescription}
            </p>
          </div>

          <div className="lg:pt-10">
            {c.advantages.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-white/10 py-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Check size={14} strokeWidth={2} />
                </div>

                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[28px] border border-border bg-[#fbfbfc] px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
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
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
                >
                  {c.ctaButton}

                  <ArrowUpRight size={16} strokeWidth={1.8} />
                </Link>
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

export default GoogleAdsPage;
