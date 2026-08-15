import { motion, useReducedMotion } from 'framer-motion';
import {
  FiExternalLink,
  FiAward,
  FiArrowUpRight,
} from 'react-icons/fi';

import SectionHeading from './SectionHeading';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function Certifications() {
  const reduceMotion = useReducedMotion();

  if (CERTIFICATIONS.length === 0) {
    return (
      <section
        id="certifications"
        className="
          relative
          overflow-hidden
          py-20
          sm:py-24
        "
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="certifications"
            title="Certifications"
            subtitle="Courses, internships, and professional learning milestones."
          />

          <div
            className="
              mt-10
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.018]
              p-10
              text-center
              backdrop-blur-xl
            "
          >
            <p className="text-sm text-secondary-theme">
              Add your certifications in{' '}
              <span className="font-mono text-electric">
                src/data/portfolioData.js
              </span>{' '}
              →{' '}
              <span className="font-mono text-violet">
                CERTIFICATIONS
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="certifications"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
      "
    >
      {/* Ambient glows */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-160px]
          top-1/3
          h-[360px]
          w-[360px]
          rounded-full
          bg-electric/[0.025]
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-160px]
          bottom-0
          h-[360px]
          w-[360px]
          rounded-full
          bg-violet/[0.025]
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="certifications"
          title="Certifications"
          subtitle="Courses, internships, and learning milestones that complement my engineering experience."
        />

        <div
          className="
            mt-10
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                margin: '-60px',
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.985,
                    }
              }
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.018]
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-violet/25
                hover:bg-white/[0.028]
                hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)]
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-36
                  w-36
                  rounded-full
                  bg-violet/[0.07]
                  blur-[60px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  {/* Certificate icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-violet/15
                      bg-violet/[0.05]
                      text-violet
                      transition-all
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <FiAward size={19} />
                  </div>

                  {/* External link */}
                  <FiArrowUpRight
                    size={17}
                    className="
                      mt-1
                      shrink-0
                      text-secondary-theme
                      opacity-50
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-violet
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* Certificate information */}
                <div className="mt-5">
                  <h3
                    className="
                      font-display
                      text-base
                      font-semibold
                      leading-6
                      text-primary-theme
                    "
                  >
                    {cert.name}
                  </h3>

                  <p className="mt-1.5 text-sm text-secondary-theme">
                    {cert.issuer}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet" />

                    <span className="eyebrow text-[10px] uppercase tracking-[0.14em] text-mist">
                      {cert.year}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.06]
                    pt-4
                  "
                >
                  <span className="eyebrow text-[10px] uppercase tracking-[0.12em] text-secondary-theme transition-colors group-hover:text-violet">
                    View certificate
                  </span>

                  <FiExternalLink
                    size={12}
                    className="
                      text-secondary-theme
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:text-violet
                    "
                  />
                </div>
              </div>

              {/* Shine */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-1/2
                  w-1/3
                  rotate-12
                  bg-white/[0.06]
                  blur-xl
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:left-[130%]
                  group-hover:opacity-100
                "
              />
            </motion.a>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-electric/20" />

          <span className="eyebrow text-[9px] uppercase tracking-[0.18em] text-secondary-theme/60">
            Learn • Build • Grow
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet/20" />
        </div>
      </div>
    </section>
  );
}