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

  // Everything through line 7 stays on screen.
  // Only the lower part is edited after the first animation.
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

      const lineStart = usedCharacters;
      const lineEnd = usedCharacters + length;

      usedCharacters += length;

      return {
        ...line,
        length,
        visibleOnLine,
        lineStart,
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
      className="relative overflow-hidden border-b border-border bg-white pt-16 md:pt-20"
    >
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-6 py-12 sm:py-14 lg:min-h-[780px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8 lg:py-24">
        {/* LEFT */}
        <div className="relative z-10 max-w-xl">
          <div className="mb-6 flex items-center gap-3">
            {/* AVAILABLE STATUS */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <p className="text-sm font-medium text-zinc-500">
              {t.hero.available}
            </p>
          </div>

          <h1 className="font-heading text-[56px] font-semibold leading-[0.94] tracking-[-0.045em] text-brand sm:text-[72px] lg:text-[88px]">
            {t.hero.line1}
            <br />
            {t.hero.line2}
            <br />
            <span className="text-brand-light">{t.hero.line3}</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-zinc-500 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:opacity-90"
            >
              {t.hero.primaryButton}

              <ArrowUpRight size={16} strokeWidth={1.8} className="shrink-0" />
            </a>

            <a
              href="#services"
              className="rounded-full border border-border px-6 py-3.5 text-sm font-medium text-brand transition duration-300 hover:border-brand"
            >
              {t.hero.secondaryButton}
            </a>
          </div>
        </div>

        {/* RIGHT - CODE WINDOW */}
        <div className="relative lg:ml-6">
          <div className="relative overflow-hidden rounded-[22px] border border-[#e5e7eb] bg-[#fbfbfc]">
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
            <div className="relative min-h-[520px] overflow-hidden px-4 py-8 sm:px-7">
              <div className="font-mono text-[12px] leading-7 sm:text-[13px]">
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

              {/* SMOOTH WHITE FADE */}
              <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-72 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.03)_15%,rgba(255,255,255,0.1)_30%,rgba(255,255,255,0.25)_45%,rgba(255,255,255,0.5)_62%,rgba(255,255,255,0.75)_78%,rgba(255,255,255,0.92)_91%,#fff_100%)]" />
            </div>
          </div>

          {/* BACKGROUND DETAIL */}
          <div className="absolute -top-16 -right-20 -z-10 h-80 w-80 rounded-full bg-[#f4f6fa] blur-3xl" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
