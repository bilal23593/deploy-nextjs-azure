import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const ProjectCard = ({ project, index, featured = false }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.article
      className="group h-full rounded-3xl border border-dark/15 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: -7, boxShadow: "0 24px 50px rgba(0, 0, 0, 0.14)" }}
    >
      <div className={`relative ${featured ? "h-[26rem] md:h-80" : "h-72 md:h-72"} overflow-hidden`}>
        {showVideo && project.video ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={project.video}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-white/25 text-white border border-white/30 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.video ? (
            <button
              type="button"
              onClick={() => setShowVideo((prev) => !prev)}
              className="w-11 h-11 rounded-full border border-white/45 bg-white/25 text-white text-sm font-bold backdrop-blur-sm hover:bg-white/35 transition-colors"
            >
              {showVideo ? "IMG" : "PLAY"}
            </button>
          ) : null}
        </div>

        <div className="absolute left-4 right-4 bottom-4 text-white">
          <h3 className="text-2xl font-black mb-1">{project.title}</h3>
          <p className="text-sm text-white/85 font-medium">{project.client}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-dark/75 leading-relaxed mb-5">{project.description}</p>

        {project.cast?.length ? (
          <div className="flex items-center justify-between gap-3 mb-5">
            <p className="text-xs tracking-[0.18em] uppercase text-dark/60 font-semibold">Characters</p>
            <div className="flex -space-x-2">
              {project.cast.slice(0, 3).map((avatar, idx) => (
                <span
                  key={`${avatar}-${idx}`}
                  className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-100"
                >
                  <Image src={avatar} alt={`${project.title} character ${idx + 1}`} fill className="object-cover" />
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {project.results ? (
          <div className="mb-5 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primaryDark/10 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary mb-1">Result</p>
            <p className="text-sm text-dark/80">{project.results}</p>
          </div>
        ) : null}

        <div className="flex gap-3">
          <MotionLink
            href="/contact"
            className="flex-1 text-center py-2.5 rounded-xl bg-dark text-white font-semibold"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Inquire
          </MotionLink>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-xl border-2 border-dark text-dark font-semibold hover:bg-dark hover:text-white transition-colors"
            >
              View Live
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
