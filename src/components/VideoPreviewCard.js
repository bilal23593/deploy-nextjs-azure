import Image from "next/image";
import Link from "next/link";
import { studioShowreel } from "@/data/videos";

const VideoPreviewCard = ({
  image = "/og-image.jpg",
  imageAlt = studioShowreel.pageTitle,
  eyebrow = "Studio Showreel",
  title = studioShowreel.pageTitle,
  description,
  watchHref = studioShowreel.watchPagePath,
  youtubeHref = studioShowreel.youtubeWatchUrl,
}) => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-dark/80">
      <Link
        href={watchHref}
        className="group relative block aspect-video overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[11px] font-black tracking-[0.18em] text-dark shadow-xl">
            PLAY
          </span>
        </div>
        <div className="absolute left-5 right-5 bottom-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{eyebrow}</p>
          <p className="mt-2 text-2xl font-black md:text-xl">{title}</p>
        </div>
      </Link>

      {description ? (
        <p className="mt-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={watchHref}
          className="inline-flex items-center rounded-full bg-dark px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-light dark:text-dark"
        >
          Open Watch Page
        </Link>
        <a
          href={youtubeHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-dark transition hover:bg-gray-100 dark:border-gray-600 dark:text-light dark:hover:bg-gray-800"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default VideoPreviewCard;
