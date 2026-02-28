import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackedInternalLink from "@/components/TrackedInternalLink";
import { getLeadChannels } from "@/lib/leadRouting";

const LeadRoutingPanel = ({
  eyebrow = "Lead Routing",
  title,
  description,
  location,
  route,
  primaryChannel = "WhatsApp",
  secondaryChannel = "Fiverr",
  showTrustLinks = true,
  helperText = "Use WhatsApp for the fastest response. Use Fiverr if you prefer marketplace checkout. Use LinkedIn and Google for validation.",
}) => {
  const primary = getLeadChannels([primaryChannel])[0];
  const secondary = getLeadChannels([secondaryChannel])[0];
  const trustLinks = showTrustLinks
    ? getLeadChannels(["LinkedIn", "Google Profile"]).filter(
        (item) => item.name !== primaryChannel && item.name !== secondaryChannel
      )
    : [];

  return (
    <section className="rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white via-violet-50/70 to-cyan-50/70 dark:from-dark dark:via-violet-900/20 dark:to-cyan-900/20 p-7">
      <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl md:text-2xl font-black text-dark dark:text-light">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <TrackedInternalLink
          href="/contact"
          label="Send Project Brief"
          location={location}
          route={route}
          ctaType="lead_brief"
          className="rounded-full bg-dark text-light dark:bg-light dark:text-dark px-6 py-3 text-sm font-bold hover:scale-[1.02] transition"
        >
          Send Project Brief
        </TrackedInternalLink>

        <TrackedInternalLink
          href="/start-here"
          label="Compare Lead Routes"
          location={location}
          route={route}
          ctaType="routing_hub"
          className="rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-dark dark:text-light hover:border-primary hover:text-primary transition"
        >
          Compare All Options
        </TrackedInternalLink>

        {primary ? (
          <TrackedExternalLink
            channel={primary.name}
            location={location}
            route={route}
            surface="lead_panel"
            className="rounded-full border border-green-400/30 bg-green-500/10 px-6 py-3 text-sm font-semibold text-dark dark:text-light hover:border-green-500 hover:bg-green-500/15 transition"
          >
            {primary.cta}
          </TrackedExternalLink>
        ) : null}

        {secondary ? (
          <TrackedExternalLink
            channel={secondary.name}
            location={location}
            route={route}
            surface="lead_panel"
            className="rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-dark dark:text-light hover:border-primary hover:text-primary transition"
          >
            {secondary.cta}
          </TrackedExternalLink>
        ) : null}
      </div>

      {trustLinks.length ? (
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-1 gap-3">
          {trustLinks.map((item) => (
            <TrackedExternalLink
              key={item.name}
              channel={item.name}
              location={location}
              route={route}
              surface="lead_panel_trust"
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-black/20 px-4 py-4 hover:border-primary/40 transition"
            >
              <p className="text-sm font-black text-dark dark:text-light">{item.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-primary">{item.badge}</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.shortDescription}
              </p>
            </TrackedExternalLink>
          ))}
        </div>
      ) : null}

      <p className="mt-5 text-xs text-gray-600 dark:text-gray-400">{helperText}</p>
    </section>
  );
};

export default LeadRoutingPanel;
