const WhatsAppGlyph = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      fill="currentColor"
      d="M20.52 3.48A11.93 11.93 0 0 0 12.05 0C5.5 0 .17 5.3.17 11.82c0 2.08.54 4.11 1.57 5.9L0 24l6.46-1.68a11.93 11.93 0 0 0 5.59 1.42h.01c6.55 0 11.88-5.3 11.89-11.82A11.75 11.75 0 0 0 20.52 3.48Zm-8.47 18.2h-.01a9.96 9.96 0 0 1-5.08-1.39l-.36-.21-3.83.99 1.02-3.72-.24-.38a9.8 9.8 0 0 1-1.53-5.15c0-5.43 4.44-9.85 9.9-9.85a9.82 9.82 0 0 1 7.02 2.9 9.74 9.74 0 0 1 2.89 6.95c-.01 5.43-4.45 9.86-9.78 9.86Zm5.43-7.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.45.13-.6.13-.12.3-.32.44-.47.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.08-.15-.66-1.57-.91-2.16-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.09 3.18 5.06 4.45.7.3 1.25.48 1.68.62.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.42.24-.7.24-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
    />
  </svg>
);

const SocialChannelMark = ({ channel, size = "md" }) => {
  const sizeClasses =
    size === "sm"
      ? "h-9 w-9 text-sm"
      : size === "lg"
      ? "h-12 w-12 text-base"
      : "h-10 w-10 text-sm";

  if (channel === "LinkedIn") {
    return (
      <div
        className={`${sizeClasses} rounded-xl bg-[#0A66C2] text-white flex items-center justify-center font-black tracking-tight shadow-sm`}
      >
        in
      </div>
    );
  }

  if (channel === "Fiverr") {
    return (
      <div
        className={`${sizeClasses} rounded-xl bg-[#1dbf73] text-white flex items-center justify-center font-black tracking-tight shadow-sm`}
      >
        fi
      </div>
    );
  }

  if (channel === "Google Profile") {
    return (
      <div
        className={`${sizeClasses} rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm`}
      >
        <span className="text-base font-black bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
          G
        </span>
      </div>
    );
  }

  if (channel === "WhatsApp") {
    return (
      <div
        className={`${sizeClasses} rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm`}
      >
        <WhatsAppGlyph className="h-5 w-5" />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses} rounded-xl bg-gray-200 text-dark flex items-center justify-center font-black shadow-sm`}
    >
      {channel?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
};

export default SocialChannelMark;
