import { useEffect, useState } from "react";

function IntroSection({ t }) {
  const words = t.intro.words;

  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setWordIndex(0);
    setDisplayedWord(words[0]);
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (displayedWord.length < currentWord.length) {
            setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
          } else {
            setTimeout(() => {
              setDeleting(true);
            }, 1200);
          }
        } else {
          if (displayedWord.length > 0) {
            setDisplayedWord(displayedWord.slice(0, -1));
          } else {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 55 : 85,
    );

    return () => clearTimeout(timeout);
  }, [displayedWord, deleting, wordIndex, words]);

  return (
    <section id="about" className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
              {t.intro.label}
            </p>

            <h2 className="font-heading max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-brand sm:text-5xl lg:text-6xl">
              {t.intro.title1}
              <br />

              {t.intro.title2}
              <br />

              <span className="relative inline-block min-w-[190px] text-brand-light sm:min-w-[230px]">
                {displayedWord}

                <span className="ml-[3px] inline-block h-[0.85em] w-[2px] animate-pulse bg-brand-light align-middle" />

                <span
                  key={`${wordIndex}-${words[wordIndex]}`}
                  className="absolute right-0 -bottom-2 left-0 h-[2px] origin-left bg-brand-light/35 animate-[underline_1.4s_ease-in-out]"
                />
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-md lg:justify-self-end">
            <p className="text-[15px] leading-7 text-zinc-500 sm:text-base">
              {t.intro.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6">
              {t.intro.items.map((item) => (
                <span key={item} className="text-sm font-medium text-brand">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
