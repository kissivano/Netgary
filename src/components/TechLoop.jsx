import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiVite,
  SiVercel,
} from "react-icons/si";

const tech = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Supabase", icon: SiSupabase },
  { name: "Vite", icon: SiVite },
  { name: "Vercel", icon: SiVercel },
];

function TechGroup() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {tech.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.name} className="flex shrink-0 items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon className="text-[22px] text-brand sm:text-[26px]" />

              <span className="font-heading text-2xl font-medium tracking-[-0.03em] text-brand sm:text-3xl">
                {item.name}
              </span>
            </div>

            <span className="h-1.5 w-1.5 rounded-full bg-brand-light/40" />
          </div>
        );
      })}
    </div>
  );
}

function CapabilityGroup({ items }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <div key={item} className="flex shrink-0 items-center gap-8">
          <span className="font-heading text-xl font-medium tracking-[-0.03em] text-brand sm:text-2xl">
            {item}
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-brand-light/40" />
        </div>
      ))}
    </div>
  );
}

function TechMarquee() {
  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-[marquee_28s_linear_infinite]">
        <TechGroup />
        <TechGroup />
      </div>
    </div>
  );
}

function CapabilityMarquee({ items }) {
  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-[marqueeReverse_30s_linear_infinite]">
        <CapabilityGroup items={items} />
        <CapabilityGroup items={items} />
      </div>
    </div>
  );
}

function TechLoop({ t }) {
  return (
    <section className="overflow-hidden border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-14">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
          {t.tech.label}
        </p>
      </div>

      <div className="mt-7 space-y-5 pb-10 lg:mt-9 lg:space-y-6 lg:pb-14">
        <TechMarquee />

        <div className="border-y border-border bg-zinc-50/60 py-5">
          <CapabilityMarquee items={t.tech.capabilities} />
        </div>
      </div>
    </section>
  );
}

export default TechLoop;
