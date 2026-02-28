import Link from "next/link";
import { trackLeadCtaClick } from "@/lib/leadRouting";

const TrackedInternalLink = ({
  href,
  label,
  location,
  route,
  ctaType,
  onClick,
  children,
  ...props
}) => {
  const destination = typeof href === "string" ? href : href?.pathname || "/";

  const handleClick = (event) => {
    trackLeadCtaClick({
      label: label || (typeof children === "string" ? children : destination),
      destination,
      location,
      route,
      ctaType,
    });

    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default TrackedInternalLink;
