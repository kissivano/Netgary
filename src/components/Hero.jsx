import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const token = (text, className = "text-zinc-700") => ({
  text,
  className,
});

const getCodeLines = (variant) => [
  {
    number: "01",
    tokens: [
      token("import", "text-[#c678dd]"),
      token(" "),
      token("{"),
      token(" "),
      token("useState", "text-[#61afef]"),
      token(" "),
      token("}"),
      token(" "),
      token("from", "text-[#c678dd]"),
      token(" "),
      token("'react'", "text-[#98c379]"),
      token(";"),
    ],
  },
  {
    number: "02",
    tokens: [],
  },
  {
    number: "03",
    tokens: [
      token("function", "text-[#c678dd]"),
      token(" "),
      token("Website", "text-[#61afef]"),
      token("() "),
      token("{"),
    ],
  },
  {
    number: "04",
    tokens: [
      token("  "),
      token("const", "text-[#c678dd]"),
      token(" "),
      token("["),
      token("ideas", "text-[#e5c07b]"),
      token(", "),
      token("setIdeas", "text-[#e5c07b]"),
      token("]"),
      token(" "),
      token("=", "text-[#56b6c2]"),
      token(" "),
      token("useState", "text-[#e5c07b]"),
      token("([]);"),
    ],
  },
  {
    number: "05",
    tokens: [],
  },
  {
    number: "06",
    tokens: [token("  "), token("return", "text-[#c678dd]"), token(" (")],
  },
  {
    number: "07",
    tokens: [
      token("    "),
      token("<", "text-zinc-500"),
      token("main", "text-[#e06c75]"),
      token(">", "text-zinc-500"),
    ],
  },
  {
    number: "08",
    tokens: [
      token("      "),
      token("<", "text-zinc-500"),
      token("h1", "text-[#e06c75]"),
      token(">", "text-zinc-500"),
      token(
        variant === 0
          ? "Build something better."
          : variant === 1
            ? "Turn ideas into reality."
            : "Design. Build. Grow.",
        "text-zinc-800",
      ),
      token("</", "text-zinc-500"),
      token("h1", "text-[#e06c75]"),
      token(">", "text-zinc-500"),
    ],
  },
  {
    number: "09",
    tokens: [
      token("      "),
      token("<", "text-zinc-500"),
      token("p", "text-[#e06c75]"),
      token(">", "text-zinc-500"),
      token(
        variant === 0
          ? "Your idea. Our code."
          : variant === 1
            ? "Built for the modern web."
            : "Fast. Clean. Scalable.",
        "text-zinc-800",
      ),
      token("</", "text-zinc-500"),
      token("p", "text-[#e06c75]"),
      token(">", "text-zinc-500"),
    ],
  },
  {
    number: "10",
    tokens: [
      token("    "),
      token("</", "text-zinc-500"),
      token("main", "text-[#e06c75]"),
      token(">", "text-zinc-500"),
    ],
  },
  {
    number: "11",
    tokens: [token("  );")],
  },
  {
    number: "12",
    tokens: [token("}")],
  },
];

const getLineLength = (line) =>
  line.tokens.reduce((total, item) => total + item.text.length, 0);

const getTotalLength = (lines) =>
  lines.reduce((total, line) => total + getLineLength(line), 0);

const getPrefixLength = (lines, amount) =>
  lines
    .slice(0, amount)
    .reduce((total, line) => total + getLineLength(line), 0);

function VisibleTokens({ tokens, visibleCharacters }) {
  let remaining = visibleCharacters;

  return tokens.map((item, index) => {
    if (remaining <= 0) {
      return null;
    }

    const visibleText = item.text.slice(0, remaining);

    remaining -= item.text.length;

    return (
      <span key={index} className={item.className}>
        {visibleText}
      </span>
    );
  });
}

function Hero({ t }) {
  const [variant, setVariant] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [mode, setMode] = useState("typing");

  const codeLines = useMemo(() => getCodeLines(variant), [variant]);

  const totalLength = useMemo(() => getTotalLength(codeLines), [codeLines]);

  const editPoint = useMemo(() => getPrefixLength(codeLines, 7), [codeLines]);

  useEffect(() => {
    let timeout;

    if (mode === "typing") {
      if (visibleCharacters < totalLength) {
        const typingDelay = 24 + ((visibleCharacters * 13) % 34);

        timeout = setTimeout(() => {
          setVisibleCharacters((current) => Math.min(current + 1, totalLength));
        }, typingDelay);
      } else {
        timeout = setTimeout(() => {
          setMode("deleting");
        }, 1400);
      }
    }

    if (mode === "deleting") {
      if (visibleCharacters > editPoint) {
        const deleteDelay = 12 + ((visibleCharacters * 7) % 15);

        timeout = setTimeout(() => {
          setVisibleCharacters((current) => Math.max(current - 1, editPoint));
        }, deleteDelay);
      } else {
        timeout = setTimeout(() => {
          setVariant((current) => (current + 1) % 3);
          setMode("typing");
        }, 450);
      }
    }

    return () => clearTimeout(timeout);
  }, [mode, visibleCharacters, totalLength, editPoint]);

  const lineData = useMemo(() => {
    let usedCharacters = 0;

    return codeLines.map((line) => {
      const length = getLineLength(line);

      const visibleOnLine = Math.max(
        0,
        Math.min(length, visibleCharacters - usedCharacters),
      );

      const lineEnd = usedCharacters + length;

      usedCharacters += length;

      return {
        ...line,
        length,
        visibleOnLine,
        lineEnd,
      };
    });
  }, [codeLines, visibleCharacters]);

  let activeLineIndex = 0;

  for (let i = 0; i < lineData.length; i += 1) {
    if (visibleCharacters <= lineData[i].lineEnd) {
      activeLineIndex = i;
      break;
    }

    activeLineIndex = i;
  }

  return (
    <section
      id="home"
      className="relative min-h-[780px] overflow-hidden border-b border-border bg-white pt-16 md:pt-20 lg:min-h-[900px]"
    >
      {/* AMBIENT LIGHT */}
      <div className="pointer-events-none absolute top-[70px] right-[-120px] h-[620px] w-[620px] rounded-full bg-brand/[0.07] blur-[100px]" />

      <div className="pointer-events-none absolute top-[250px] right-[220px] h-[300px] w-[300px] rounded-full bg-[#8ca0d8]/10 blur-[90px]" />

      {/* CODE WINDOW */}
      <div className="pointer-events-none absolute top-[115px] right-[-135px] z-0 hidden w-[820px] rotate-[2.8deg] lg:block">
        <div className="relative overflow-hidden rounded-[30px] border border-[#e4e7ee] bg-white/85 shadow-[0_45px_140px_rgba(40,54,84,0.12)] backdrop-blur-sm">
          {/* TOP BAR */}
          <div className="flex h-14 items-center justify-between border-b border-[#e8e8eb] px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff605c]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-[#61dafb]">⚛</span>
              Hero.jsx
            </div>

            <div className="w-12" />
          </div>

          {/* CODE */}
          <div className="relative min-h-[590px] overflow-hidden px-8 py-9">
            <div className="font-mono text-[13px] leading-7">
              {lineData.map((line, index) => (
                <div key={line.number} className="flex min-h-7">
                  <span className="mr-5 w-5 shrink-0 select-none text-right text-zinc-300">
                    {line.number}
                  </span>

                  <span className="whitespace-pre">
                    <VisibleTokens
                      tokens={line.tokens}
                      visibleCharacters={line.visibleOnLine}
                    />

                    {index === activeLineIndex && (
                      <span className="ml-[1px] inline-block h-[18px] w-[1.5px] translate-y-[4px] animate-pulse bg-brand" />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* INTERNAL OVERLAY */}
          <div className="absolute inset-0 bg-white/[0.08]" />

          <div className="absolute inset-x-0 bottom-0 h-80 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0.3)_45%,rgba(255,255,255,0.72)_72%,rgba(255,255,255,0.97)_100%)]" />
        </div>
      </div>

      {/* MAIN FADE */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden lg:block">
        <div className="absolute inset-y-0 left-0 w-[58%] bg-[linear-gradient(to_right,#ffffff_0%,#ffffff_62%,rgba(255,255,255,0.92)_78%,rgba(255,255,255,0)_100%)]" />

        <div className="absolute top-0 right-0 h-full w-[50%] bg-white/18 backdrop-blur-[1.5px]" />
      </div>

      {/* MOBILE CODE */}
      <div className="pointer-events-none absolute right-[-170px] bottom-[-65px] z-0 block w-[590px] rotate-[3deg] opacity-45 blur-[0.35px] lg:hidden">
        <div className="overflow-hidden rounded-[26px] border border-border bg-white shadow-[0_30px_90px_rgba(40,54,84,0.08)]">
          <div className="h-[450px] px-6 py-8">
            <div className="font-mono text-[11px] leading-6">
              {lineData.map((line, index) => (
                <div key={`mobile-${line.number}`} className="flex min-h-6">
                  <span className="mr-4 w-5 shrink-0 text-right text-zinc-300">
                    {line.number}
                  </span>

                  <span className="whitespace-pre">
                    <VisibleTokens
                      tokens={line.tokens}
                      visibleCharacters={line.visibleOnLine}
                    />

                    {index === activeLineIndex && (
                      <span className="ml-[1px] inline-block h-[15px] w-[1px] translate-y-[3px] animate-pulse bg-brand" />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FADE */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,#ffffff_0%,rgba(255,255,255,0.98)_45%,rgba(255,255,255,0.82)_68%,rgba(255,255,255,0.55)_100%)] lg:hidden" />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-16 sm:py-20 lg:min-h-[820px] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          {/* STATUS */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-brand/10 bg-white/80 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <p className="text-sm font-medium text-zinc-500">
              {t.hero.available}
            </p>
          </div>

          {/* TITLE */}
          <h1 className="max-w-4xl font-heading text-[60px] font-semibold leading-[0.91] tracking-[-0.052em] text-brand sm:text-[82px] lg:text-[104px]">
            {t.hero.line1}
            <br />
            {t.hero.line2}
            <br />

            <span className="text-brand-light">{t.hero.line3}</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            {t.hero.description}
          </p>

          {/* CTA PANEL */}
          <div className="mt-10 inline-flex flex-wrap items-center gap-3 rounded-[22px] border border-white/70 bg-white/72 p-2 shadow-[0_20px_60px_rgba(40,54,84,0.08)] backdrop-blur-xl">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[16px] bg-brand px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(40,54,84,0.18)]"
            >
              {t.hero.primaryButton}

              <ArrowUpRight size={16} strokeWidth={1.8} className="shrink-0" />
            </a>

            <a
              href="#services"
              className="rounded-[16px] px-6 py-3.5 text-sm font-medium text-brand transition duration-300 hover:bg-brand/[0.05]"
            >
              {t.hero.secondaryButton}
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-[2] h-40 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_65%,#ffffff_100%)]" />
    </section>
  );
}

export default Hero;
