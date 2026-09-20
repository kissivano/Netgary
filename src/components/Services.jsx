import { ArrowUpRight } from "lucide-react";

function Services({ t }) {
  return (
    <section
      id="services"
      className="border-b border-border bg-zinc-50/60 md:bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-8 lg:py-20">
        <div className="mb-7 lg:mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
            {t.services.label}
          </p>

          <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-brand sm:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>
        </div>

        <div className="border-t border-border">
          {t.services.items.map((service) => (
            <div
              key={service.number}
              className="group relative grid cursor-default gap-2 border-b border-border py-5 transition-all duration-300 hover:bg-white/70 sm:grid-cols-[70px_1fr_1fr_40px] sm:items-center sm:gap-4 sm:px-3 sm:py-7"
            >
              <span className="text-xs font-medium text-zinc-300">
                {service.number}
              </span>

              <h3 className="pr-10 font-heading text-xl font-semibold tracking-[-0.02em] text-brand transition-transform duration-300 group-hover:translate-x-1 sm:pr-0 sm:text-2xl">
                {service.title}
              </h3>

              <p className="max-w-md pr-6 text-[13px] leading-5 text-zinc-500 sm:pr-0 sm:text-sm sm:leading-6">
                {service.description}
              </p>

              <ArrowUpRight
                size={19}
                strokeWidth={1.6}
                className="absolute top-5 right-0 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:static"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
