import { ArrowUpRight } from "lucide-react";

const codeLines = [
  {
    number: "01",
    code: (
      <>
        <span className="text-[#c678dd]">import</span>{" "}
        <span className="text-zinc-700">{"{"}</span>{" "}
        <span className="text-[#61afef]">useState</span>{" "}
        <span className="text-zinc-700">{"}"}</span>{" "}
        <span className="text-[#c678dd]">from</span>{" "}
        <span className="text-[#98c379]">'react'</span>;
      </>
    ),
  },
  {
    number: "02",
    code: "",
  },
  {
    number: "03",
    code: (
      <>
        <span className="text-[#c678dd]">function</span>{" "}
        <span className="text-[#61afef]">Website</span>
        <span className="text-zinc-700">()</span> {"{"}
      </>
    ),
  },
  {
    number: "04",
    code: (
      <>
        &nbsp;&nbsp;
        <span className="text-[#c678dd]">const</span>{" "}
        <span className="text-zinc-700">[</span>
        <span className="text-[#e5c07b]">ideas</span>
        <span className="text-zinc-700">, </span>
        <span className="text-[#e5c07b]">setIdeas</span>
        <span className="text-zinc-700">]</span>{" "}
        <span className="text-[#56b6c2]">=</span>{" "}
        <span className="text-[#e5c07b]">useState</span>
        <span className="text-zinc-700">([]);</span>
      </>
    ),
  },
  {
    number: "05",
    code: "",
  },
  {
    number: "06",
    code: (
      <>
        &nbsp;&nbsp;
        <span className="text-[#c678dd]">return</span> (
      </>
    ),
  },
  {
    number: "07",
    code: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-zinc-500">&lt;</span>
        <span className="text-[#e06c75]">main</span>
        <span className="text-zinc-500">&gt;</span>
      </>
    ),
  },
  {
    number: "08",
    code: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-zinc-500">&lt;</span>
        <span className="text-[#e06c75]">h1</span>
        <span className="text-zinc-500">&gt;</span>
        <span className="text-zinc-800">Build something better.</span>
        <span className="text-zinc-500">&lt;/</span>
        <span className="text-[#e06c75]">h1</span>
        <span className="text-zinc-500">&gt;</span>
      </>
    ),
  },
  {
    number: "09",
    code: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-zinc-500">&lt;</span>
        <span className="text-[#e06c75]">p</span>
        <span className="text-zinc-500">&gt;</span>
        <span className="text-zinc-800">Your idea. Our code.</span>
        <span className="text-zinc-500">&lt;/</span>
        <span className="text-[#e06c75]">p</span>
        <span className="text-zinc-500">&gt;</span>
      </>
    ),
  },
  {
    number: "10",
    code: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-zinc-500">&lt;/</span>
        <span className="text-[#e06c75]">main</span>
        <span className="text-zinc-500">&gt;</span>
      </>
    ),
  },
  {
    number: "11",
    code: <>&nbsp;&nbsp;);</>,
  },
  {
    number: "12",
    code: "}",
  },
];

function Hero({ t }) {
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
                {codeLines.map((line) => (
                  <div key={line.number} className="flex">
                    <span className="mr-5 w-5 select-none text-right text-zinc-300">
                      {line.number}
                    </span>

                    <span className="whitespace-nowrap">{line.code}</span>
                  </div>
                ))}

                <div className="flex">
                  <span className="mr-5 w-5 select-none text-right text-zinc-300">
                    13
                  </span>

                  <span className="inline-flex items-center">
                    <span className="h-[18px] w-[1.5px] animate-pulse bg-brand" />
                  </span>
                </div>
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
