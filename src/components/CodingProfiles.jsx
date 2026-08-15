import { motion, useReducedMotion } from 'framer-motion';
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi';

import SectionHeading from './SectionHeading';
import {
  CODING_PROFILES,
  GITHUB_USERNAME,
} from '../data/portfolioData';

const profileStyles = {
  GitHub: {
    accent: 'text-electric',
    bg: 'bg-electric/[0.06]',
    border: 'border-electric/15',
    hoverBorder: 'hover:border-electric/35',
  },

  LeetCode: {
    accent: 'text-amber-400',
    bg: 'bg-amber-400/[0.06]',
    border: 'border-amber-400/15',
    hoverBorder: 'hover:border-amber-400/35',
  },

  Codeforces: {
    accent: 'text-violet',
    bg: 'bg-violet/[0.06]',
    border: 'border-violet/15',
    hoverBorder: 'hover:border-violet/35',
  },

  LinkedIn: {
    accent: 'text-cyan-400',
    bg: 'bg-cyan-400/[0.06]',
    border: 'border-cyan-400/15',
    hoverBorder: 'hover:border-cyan-400/35',
  },
};

export default function CodingProfiles() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="profiles"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
         ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-160px]
          top-1/3
          h-[380px]
          w-[380px]
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
          h-[380px]
          w-[380px]
          rounded-full
          bg-violet/[0.025]
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="coding-profiles"
          title="Where I write code"
          subtitle="A snapshot of my coding, problem-solving, and professional profiles."
        />

        {/* =================================================
            PROFILE CARDS
           ================================================= */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CODING_PROFILES.map((profile, index) => {
            const Icon = profile.icon;

            const style =
              profileStyles[profile.name] ||
              profileStyles.GitHub;

            return (
              <motion.a
                key={profile.name}
                href={profile.url}
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
                        y: -7,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                className={`
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
                  hover:bg-white/[0.028]
                  hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)]
                  ${style.hoverBorder}
                `}
              >
                {/* Glow */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-14
                    -top-14
                    h-32
                    w-32
                    rounded-full
                    ${style.bg}
                    blur-[55px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  `}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      ${style.border}
                      ${style.bg}
                      ${style.accent}
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    `}
                  >
                    <Icon size={21} />
                  </div>

                  {/* Name */}
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-display text-base font-semibold text-primary-theme">
                        {profile.name}
                      </p>

                      <p className="mt-1 text-sm leading-5 text-secondary-theme">
                        {profile.stat}
                      </p>
                    </div>

                    <FiArrowUpRight
                      size={16}
                      className={`
                        mt-0.5
                        shrink-0
                        text-secondary-theme
                        opacity-50
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:opacity-100
                        ${style.accent}
                      `}
                    />
                  </div>

                  {/* CTA */}
                  <div
                    className={`
                      eyebrow
                      mt-5
                      inline-flex
                      items-center
                      gap-1.5
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-secondary-theme
                      transition-colors
                      duration-300
                      group-hover:${style.accent}
                    `}
                  >
                    Visit profile
                    <FiExternalLink size={11} />
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-5 h-px w-full bg-white/[0.05]">
                    <div
                      className={`
                        h-full
                        w-0
                        bg-current
                        transition-all
                        duration-500
                        group-hover:w-1/3
                        ${style.accent}
                      `}
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* =================================================
            GITHUB CONTRIBUTION GRAPH
           ================================================= */}

        <motion.div
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
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            group
            relative
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.018]
            p-6
            sm:p-8
            backdrop-blur-xl
          "
        >
          {/* Graph glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-electric/[0.05]
              blur-[80px]
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div className="relative z-10">
            {/* Graph header */}
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-[10px] uppercase tracking-[0.16em] text-mist">
                  // github_contribution_graph
                </p>

                <p className="mt-2 text-sm font-medium text-primary-theme">
                  Consistency over time
                </p>

                <p className="mt-1 text-xs text-secondary-theme">
                  A visual snapshot of GitHub activity.
                </p>
              </div>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  px-3
                  py-1.5
                  text-xs
                  text-secondary-theme
                  transition-colors
                  hover:border-electric/30
                  hover:text-electric
                "
              >
                GitHub
                <FiExternalLink size={11} />
              </a>
            </div>

            {/* Graph */}
            <div className="mt-6 overflow-x-auto rounded-xl border border-white/[0.05] bg-black/[0.08] p-3 sm:p-4">
              <img
                src={`https://ghchart.rshah.org/4F7DFF/${GITHUB_USERNAME}`}
                alt={`GitHub contribution graph for ${GITHUB_USERNAME}`}
                className="
                  block
                  w-full
                  min-w-[640px]
                  rounded-lg
                  opacity-90
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom accent */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-electric/20" />

          <span className="eyebrow text-[9px] uppercase tracking-[0.18em] text-secondary-theme/60">
            Build • Solve • Ship
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet/20" />
        </div>
      </div>
    </section>
  );
}