import { ArrowUpRight, ArrowUp } from "lucide-react";

function ContactCTA({ t }) {
  return (
    <section id="contact" className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
              {t.contact.label}
            </p>

            <h2 className="font-heading max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {t.contact.title1}
              <br />
              {t.contact.title2}
              <br />

              <span className="text-white/45">{t.contact.title3}</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-7 text-white/65">
              {t.contact.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@netgary.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-brand transition duration-300 hover:bg-white/90"
              >
                {t.contact.emailButton}

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0"
                />
              </a>

              <a
                href="#home"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/40"
              >
                {t.contact.backToTop}

                <ArrowUp size={15} strokeWidth={1.8} className="shrink-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 lg:mt-20">
          <div className="flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>NETGARY — the web partner</p>

            <p>{t.contact.footerLine}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
