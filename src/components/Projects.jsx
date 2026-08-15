import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const grid = PROJECTS.filter(
    (project) => project.id !== 'nl-to-sql'
  );

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-14
        sm:py-20
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[450px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-electric/[0.025]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="projects"
          title="More things I've built"
          subtitle="Full-stack systems and AI-powered tools — from production-style apps to developer utilities."
        />

        {/* Small project count indicator */}
        <div className="mb-8 flex items-center justify-between">
          <span className="eyebrow text-[10px] uppercase tracking-[0.16em] text-secondary-theme">
            Selected Work
          </span>

          <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1 text-[10px] text-secondary-theme">
            {grid.length} Projects
          </span>
        </div>

        {/* Project grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-80px',
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {grid.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
              }}
              className="min-w-0"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <div className="mt-12 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-electric/20 to-transparent" />

          <span className="eyebrow text-[9px] uppercase tracking-[0.2em] text-secondary-theme/60">
            More projects on GitHub
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-violet/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}