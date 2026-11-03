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
  de: {
    back: "Zurück",
    badge: "Google Ads Partner",
    experience: "6 Jahre Google Ads Erfahrung",

    heroTitle1: "Google Ads Kampagnen,",
    heroTitle2: "die mehr als nur Budget ausgeben.",

    heroDescription:
      "Seit 6 Jahren betreue ich Google Ads Kampagnen – von Strategie und Tracking bis zur laufenden Optimierung. Das Ziel sind nicht einfach mehr Klicks, sondern mehr relevante Anfragen und Kunden.",

    primaryButton: "Kampagnenanalyse anfragen",
    secondaryButton: "Leistungen",

    stats: [
      {
        value: "6 Jahre",
        label: "Google Ads Erfahrung",
      },
      {
        value: "Google",
        label: "Ads Partner",
      },
      {
        value: "Laufend",
        label: "optimiert",
      },
      {
        value: "Datenbasiert",
        label: "entscheiden",
      },
    ],

    servicesLabel: "Google Ads Management",
    servicesTitle1: "Eine Kampagne zu starten",
    servicesTitle2: "ist erst der Anfang.",

    servicesDescription:
      "Ein erfolgreiches Google Ads System benötigt kontinuierliche Analyse, präzises Tracking und regelmässige Optimierung.",

    services: [
      {
        title: "Kampagnenstrategie",
        description:
          "Die passenden Kampagnentypen, Zielgruppen und Kontostrukturen werden auf Ihre Geschäftsziele abgestimmt.",
        icon: Target,
      },
      {
        title: "Keyword-Recherche",
        description:
          "Wir identifizieren relevante Suchanfragen und reduzieren unnötige Klicks, die Werbebudget verschwenden.",
        icon: Search,
      },
      {
        title: "Anzeigenoptimierung",
        description:
          "Anzeigentexte, Angebote, Suchbegriffe und Kampagneneinstellungen werden kontinuierlich weiterentwickelt.",
        icon: MousePointerClick,
      },
      {
        title: "Conversion Tracking",
        description:
          "GA4, Google Tag Manager und Google Ads Conversions werden korrekt eingerichtet, damit Entscheidungen auf echten Daten basieren.",
        icon: BarChart3,
      },
      {
        title: "Performance Max",
        description:
          "Aufbau, Betreuung und Optimierung von Performance-Max-Kampagnen auf Basis der tatsächlichen Performance.",
        icon: Settings2,
      },
      {
        title: "Remarketing",
        description:
          "Frühere Websitebesucher werden mit relevanten Kampagnen und Angeboten erneut angesprochen.",
        icon: ArrowUpRight,
      },
    ],

    processLabel: "Prozess",
    processTitle1: "Transparent.",
    processTitle2: "Messbar. Optimierbar.",

    process: [
      {
        number: "01",
        title: "Audit",
        description:
          "Ich analysiere das bestehende Konto, die Kampagnen, das Tracking und die wichtigsten Optimierungsmöglichkeiten.",
      },
      {
        number: "02",
        title: "Strategie",
        description:
          "Wir definieren Ziele, Kampagnenstruktur, Targeting und die wichtigsten Prioritäten.",
      },
      {
        number: "03",
        title: "Aufbau",
        description:
          "Die Kampagnen und das Tracking werden neu aufgebaut oder entsprechend der Strategie überarbeitet.",
      },
      {
        number: "04",
        title: "Optimierung",
        description:
          "Auf Grundlage der Daten werden die Kampagnen kontinuierlich weiterentwickelt und verbessert.",
      },
    ],

    advantageLabel: "NETGARY + Google Ads",
    advantageTitle1: "Werbung ist nur",
    advantageTitle2: "die eine Hälfte.",

    advantageDescription:
      "Der Erfolg einer Kampagne hängt nicht nur vom Google Ads Konto ab. Geschwindigkeit, Aufbau, Angebot und Conversion-Punkte Ihrer Website entscheiden genauso darüber, ob aus einem Klick ein Kunde wird.",

    advantages: [
      "Google Ads und Webentwicklung aus einer Hand",
      "Schnelle Optimierung von Landingpages",
      "Technische Einrichtung des Conversion Trackings",
      "Datenbasierte Empfehlungen für Ihre Website",
      "Direkte Kommunikation",
    ],

    ctaLabel: "Google Ads",
    ctaTitle1: "Finden wir heraus,",
    ctaTitle2: "wo Ihr Budget verloren geht.",

    ctaDescription:
      "Wenn Sie bereits Google Ads nutzen, analysiere ich Ihre bestehenden Kampagnen. Wenn Sie neu starten, bauen wir das passende System von Grund auf auf.",

    ctaButton: "Individuelle Offerte anfragen",

    footer: "Google Ads Management · Webentwicklung · Digitale Lösungen",

    dashboard: {
      performance: "Kampagnen-Performance",
      optimization: "Optimierung",
      clicks: "Klicks",
      conversions: "Conversions",
      roas: "ROAS",
      overview: "Kampagnenübersicht",
      active: "Aktiv",
    },
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

    dashboard: {
      performance: "Campaign performance",
      optimization: "Optimization",
      clicks: "Clicks",
      conversions: "Conversions",
      roas: "ROAS",
      overview: "Campaign overview",
      active: "Active",
    },
  },
};

function GoogleAdsPage({ language, setLanguage }) {
  const c = content[language] || content.de;

  const dashboardMetrics = [
    c.dashboard.clicks,
    c.dashboard.conversions,
    c.dashboard.roas,
  ];

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
                onClick={() => setLanguage("de")}
                className={`transition duration-300 ${
                  language === "de"
                    ? "text-brand"
                    : "text-zinc-300 hover:text-brand"
                }`}
              >
                DE
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
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          {/* LEFT */}
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
                to="/angebot"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:opacity-90"
              >
                {c.primaryButton}

                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>

              <a
                href="#google-services"
                className="rounded-full border border-border px-6 py-3.5 text-sm font-medium text-brand transition duration-300 hover:border-brand"
              >
                {c.secondaryButton}
              </a>
            </div>
          </div>

          {/* ADS DASHBOARD */}
          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-[24px] border border-border bg-[#fbfbfc]">
              {/* DASHBOARD HEADER */}
              <div className="flex h-14 items-center justify-between border-b border-border px-5">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff605c]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
                </div>

                <span className="text-xs text-zinc-400">Google Ads</span>

                <div className="w-12" />
              </div>

              {/* DASHBOARD CONTENT */}
              <div className="p-5 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                      {c.dashboard.performance}
                    </p>

                    <p className="mt-2 font-heading text-3xl font-semibold text-brand">
                      {c.dashboard.optimization}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <BarChart3 size={19} strokeWidth={1.7} />
                  </div>
                </div>

                {/* METRICS */}
                <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {dashboardMetrics.map((item, index) => (
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

                {/* GRAPH */}
                <div className="mt-5 overflow-hidden rounded-[18px] border border-border bg-white p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="truncate text-sm font-medium text-brand">
                      {c.dashboard.overview}
                    </p>

                    <span className="flex shrink-0 items-center gap-2 text-xs text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />

                      {c.dashboard.active}
                    </span>
                  </div>

                  <div className="mt-8 flex h-40 min-w-0 items-end gap-2">
                    {[35, 52, 44, 67, 58, 78, 64, 84, 72, 94, 82, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="min-w-0 flex-1 rounded-t-md bg-brand/10"
                          style={{
                            height: `${height}%`,
                          }}
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
                  to="/angebot"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:opacity-90"
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
