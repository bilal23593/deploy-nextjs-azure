import { getSocialLink } from "@/data/social";
import { trackLeadChannelClick } from "@/lib/leadRouting";

const TrackedExternalLink = ({
  channel,
  href,
  location,
  route,
  surface,
  onClick,
  children,
  ...props
}) => {
  const channelData = channel ? getSocialLink(channel) : null;
  const resolvedHref = href || channelData?.url;

  if (!resolvedHref) return null;

  const handleClick = (event) => {
    trackLeadChannelClick({
      channel: channel || "External Link",
      targetUrl: resolvedHref,
      location,
      route,
      surface,
    });

    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <a
      href={resolvedHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default TrackedExternalLink;
