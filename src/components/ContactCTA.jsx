import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";

function ContactCTA({ t }) {
  return (
    <section id="contact" className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
              {t.contact.label}
            </p>

            <h2 className="font-heading max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {t.contact.title1}
              <br />

              <span className="text-white/45">{t.contact.title2}</span>
            </h2>

            {/* PROFILE */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src="/adam-profile.png"
                  alt="Kiss Ádám"
                  className="h-14 w-14 rounded-full object-cover object-top ring-1 ring-white/15"
                />

                {/* ONLINE STATUS */}
                <span className="absolute right-0 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                </span>
              </div>

              <div>
                <p className="text-sm font-medium text-white">Kiss Ádám</p>

                <p className="mt-0.5 text-xs leading-5 text-white/45">
                  {t.contact.role}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="max-w-md lg:justify-self-end">
            <p className="text-[15px] leading-7 text-white/65 sm:text-base">
              {t.contact.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* CALL */}
              <a
                href="tel:+36703780054"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-brand transition duration-300 hover:bg-white/90"
              >
                <Phone size={16} strokeWidth={1.8} className="shrink-0" />

                {t.contact.callButton}
              </a>

              {/* CUSTOM QUOTE */}
              <Link
                to="/ajanlat"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/40 hover:bg-white/5"
              >
                {t.contact.quoteButton}

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <p className="mt-5 text-xs leading-5 text-white/35">
              {t.contact.response}
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-6 lg:mt-16">
          <div className="flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>NETGARY — the web partner</p>

            <p>{t.contact.footerLine}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
