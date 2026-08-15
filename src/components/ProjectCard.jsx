import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaStar, FaRegStar } from 'react-icons/fa';
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi';

const accentText = {
  electric: 'text-electric',
  violet: 'text-violet',
};

const accentBorder = {
  electric: 'hover:border-electric/50',
  violet: 'hover:border-violet/50',
};

const accentDot = {
  electric: 'bg-electric',
  violet: 'bg-violet',
};

const accentGlow = {
  electric: 'rgba(79, 125, 255, 0.16)',
  violet: 'rgba(168, 85, 247, 0.16)',
};

function ProjectCover({ gradient, fileName, accent }) {
  return (
    <div className="group relative h-44 w-full overflow-hidden bg-void-soft">
      {/* Main gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-700 group-hover:scale-110`}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-fade opacity-40" />

      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${
            accentGlow[accent]
          }, transparent 60%)`,
        }}
      />

      {/* Fake code */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="font-mono text-[10px] leading-5 text-secondary-theme transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">
          {[
            'import { AI } from "sdk"',
            'const model = await load()',
            'model.analyze(input)',
            '// processing...',
            'return results',
          ].map((line, index) => (
            <p
              key={line}
              style={{
                opacity: 1 - index * 0.14,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Window controls */}
      <div className="absolute left-3 right-3 top-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
        <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
        <span className="h-2 w-2 rounded-full bg-[#27C93F]" />

        <span className="ml-2 truncate font-mono text-[10px] text-mist">
          {fileName}
        </span>
      </div>

      {/* Shine */}
      <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-white/[0.08] blur-xl opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
    </div>
  );
}

export default function ProjectCard({ project }) {
  const {
    fileName,
    title,
    description,
    features,
    tech,
    github,
    demo,
    accent,
    rating,
    coverGradient,
  } = project;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 22,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 22,
    mass: 0.4,
  });

  const rotateX = useTransform(springY, [-0.5, 0.5], [2.5, -2.5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2.5, 2.5]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const safeGithub = github && github !== '#';
  const safeDemo = demo && demo !== '#';

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 32,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-70px',
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative flex h-full flex-col
        overflow-hidden rounded-2xl
        border border-theme
        bg-white/[0.015]
        shadow-[0_10px_45px_rgba(0,0,0,0.12)]
        transition-[border-color,box-shadow,background-color]
        duration-300
        hover:bg-white/[0.025]
        hover:shadow-[0_24px_80px_rgba(0,0,0,0.24)]
        ${accentBorder[accent]}
      `}
    >
      {/* Animated outer glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            accent === 'electric'
              ? 'linear-gradient(135deg, rgba(79,125,255,0.16), transparent 55%, rgba(34,211,238,0.08))'
              : 'linear-gradient(135deg, rgba(168,85,247,0.16), transparent 55%, rgba(236,72,153,0.08))',
        }}
      />

      {/* Cursor highlight */}
      <motion.div
        className="pointer-events-none absolute h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          left: `calc(50% + ${useTransform(springX, [-0.5, 0.5], [-45, 45]).get()}px)`,
          top: `calc(45% + ${useTransform(springY, [-0.5, 0.5], [-45, 45]).get()}px)`,
          background:
            accent === 'electric'
              ? 'rgba(79,125,255,0.10)'
              : 'rgba(168,85,247,0.10)',
        }}
      />

      <ProjectCover
        gradient={coverGradient}
        fileName={fileName}
        accent={accent}
      />

      <div className="relative z-10 flex flex-1 flex-col p-6">
        {/* Title */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-semibold leading-snug text-primary-theme transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>

          <FiArrowUpRight
            size={17}
            className={`
              mt-0.5 shrink-0
              text-secondary-theme
              opacity-60
              transition-all duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:opacity-100
              ${accentText[accent]}
            `}
          />
        </div>

        {/* Rating */}
        {rating > 0 && (
          <div className="mt-2 flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }, (_, index) =>
              index < rating ? (
                <FaStar key={index} size={12} />
              ) : (
                <FaRegStar key={index} size={12} />
              )
            )}
          </div>
        )}

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary-theme">
          {description}
        </p>

        {/* Features */}
        <ul className="mt-5 space-y-2">
          {features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-[12px] leading-5 text-secondary-theme"
            >
              <span
                className={`
                  mt-[7px]
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  ${accentDot[accent]}
                  shadow-[0_0_10px_currentColor]
                `}
              />

              <span className="transition-colors duration-300 group-hover:text-primary-theme">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Technology badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {tech.map((technology) => (
            <span
              key={technology}
              className="
                eyebrow
                rounded-md
                border
                border-theme
                bg-white/[0.035]
                px-2.5
                py-1
                text-[10px]
                text-secondary-theme
                transition-all
                duration-300
                hover:border-electric/30
                hover:text-primary-theme
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center gap-3 border-t border-theme pt-4">
          {safeGithub ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="
                glow-button
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                px-2.5
                py-1.5
                text-sm
                text-secondary-theme
                transition-colors
                hover:bg-white/[0.04]
                hover:text-primary-theme
              "
            >
              <FaGithub size={14} />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-sm text-secondary-theme/50">
              <FaGithub size={14} />
              GitHub
            </span>
          )}

          {safeDemo ? (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={`
                glow-button
                ml-auto
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                px-3
                py-1.5
                text-sm
                transition-all
                hover:bg-white/[0.04]
                ${accentText[accent]}
              `}
            >
              Live Demo
              <FiExternalLink size={12} />
            </a>
          ) : (
            <span
              className={`
                ml-auto
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                px-3
                py-1.5
                text-sm
                ${accentText[accent]}
                opacity-45
              `}
            >
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}