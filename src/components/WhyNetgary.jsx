function WhyNetgary({ t }) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
              {t.why.label}
            </p>

            <h2 className="font-heading text-3xl font-semibold leading-[1] tracking-[-0.04em] text-brand sm:text-4xl lg:text-5xl">
              {t.why.title1}
              <br />

              {t.why.title2}
              <br />

              <span className="text-brand-light">{t.why.title3}</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="border-t border-border">
            {t.why.items.map((point) => (
              <div
                key={point.number}
                className="group grid gap-2 border-b border-border py-5 transition-all duration-300 hover:bg-zinc-50/60 sm:grid-cols-[60px_1fr_1fr] sm:items-start sm:gap-4 sm:px-3 sm:py-6"
              >
                <span className="text-xs font-medium text-zinc-300">
                  {point.number}
                </span>

                <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] text-brand transition-transform duration-300 group-hover:translate-x-1">
                  {point.title}
                </h3>

                <p className="max-w-md text-[13px] leading-5 text-zinc-500 sm:text-sm sm:leading-6">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyNetgary;
