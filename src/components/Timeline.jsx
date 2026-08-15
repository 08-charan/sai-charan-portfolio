import { motion, useReducedMotion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaBullseye,
  FaCircle,
} from 'react-icons/fa';

import SectionHeading from './SectionHeading';
import { TIMELINE } from '../data/portfolioData';

const typeStyles = {
  education: {
    icon: FaGraduationCap,
    color: 'electric',
    badge:
      'text-electric bg-electric/10 border-electric/20',
    glow:
      'shadow-[0_0_22px_rgba(79,125,255,0.16)]',
  },

  experience: {
    icon: FaBriefcase,
    color: 'violet',
    badge:
      'text-violet bg-violet/10 border-violet/20',
    glow:
      'shadow-[0_0_22px_rgba(168,85,247,0.16)]',
  },

  project: {
    icon: FaCode,
    color: 'signal',
    badge:
      'text-signal bg-signal/10 border-signal/20',
    glow:
      'shadow-[0_0_22px_rgba(34,197,94,0.14)]',
  },

  goal: {
    icon: FaBullseye,
    color: 'amber-400',
    badge:
      'text-amber-400 bg-amber-400/10 border-amber-400/20',
    glow:
      'shadow-[0_0_22px_rgba(251,191,36,0.12)]',
  },
};

const colorMap = {
  electric: {
    dot: 'bg-electric',
    text: 'text-electric',
    border: 'border-electric/30',
    line: 'from-electric',
  },

  violet: {
    dot: 'bg-violet',
    text: 'text-violet',
    border: 'border-violet/30',
    line: 'from-violet',
  },

  signal: {
    dot: 'bg-signal',
    text: 'text-signal',
    border: 'border-signal/30',
    line: 'from-signal',
  },

  'amber-400': {
    dot: 'bg-amber-400',
    text: 'text-amber-400',
    border: 'border-amber-400/30',
    line: 'from-amber-400',
  },
};

export default function Timeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="timeline"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
         ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-1/4
          h-[420px]
          w-[420px]
          rounded-full
          bg-electric/[0.03]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-1/4
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet/[0.03]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="journey"
          title="My timeline"
          subtitle="A snapshot of the key moments — academic, professional, and project milestones."
        />

        {/* =================================================
            TIMELINE
           ================================================= */}

        <div className="relative mt-12">
          {/* Main vertical line */}
          <div
            className="
              absolute
              left-5
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-electric
              via-violet
              via-signal
              to-transparent
              sm:left-1/2
              sm:-translate-x-1/2
            "
          />

          {/* Soft line glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-5
              top-0
              bottom-0
              w-[5px]
              -translate-x-1/2
              bg-gradient-to-b
              from-electric/10
              via-violet/10
              to-transparent
              blur-sm
              sm:left-1/2
            "
          />

          <div className="space-y-10 sm:space-y-12">
            {TIMELINE.map((entry, index) => {
              const style =
                typeStyles[entry.type] ||
                typeStyles.education;

              const colors =
                colorMap[style.color] ||
                colorMap.electric;

              const Icon = style.icon;

              const isRight =
                index % 2 === 0;

              return (
                <motion.div
                  key={`${entry.year}-${entry.event}-${index}`}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 28,
                          x: isRight ? -18 : 18,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                          x: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    margin: '-70px',
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: 'easeOut',
                  }}
                  className="
                    relative
                    grid
                    grid-cols-[40px_1fr]
                    items-center
                    gap-4
                    sm:grid-cols-[1fr_46px_1fr]
                    sm:gap-0
                  "
                >
                  {/* =================================================
                      LEFT SIDE
                     ================================================= */}

                  <div
                    className={`
                      hidden
                      sm:block
                      ${
                        isRight
                          ? 'sm:pr-10 sm:text-right'
                          : 'sm:pr-10 sm:text-right'
                      }
                    `}
                  >
                    {!isRight && (
                      <TimelineCard
                        entry={entry}
                        style={style}
                        colors={colors}
                        Icon={Icon}
                      />
                    )}
                  </div>

                  {/* =================================================
                      CENTER NODE
                     ================================================= */}

                  <div className="relative z-20 flex justify-center">
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 1.12,
                            }
                      }
                      className={`
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        ${colors.border}
                        bg-base-theme
                        ${style.glow}
                      `}
                    >
                      {/* Outer pulse */}
                      {!reduceMotion && (
                        <motion.span
                          animate={{
                            scale: [1, 1.25, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: 'easeOut',
                          }}
                          className={`
                            absolute
                            inset-0
                            rounded-full
                            border
                            ${colors.border}
                          `}
                        />
                      )}

                      {/* Inner node */}
                      <span
                        className={`
                          relative
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          ${colors.dot}/10
                          ${colors.text}
                        `}
                      >
                        <Icon size={12} />
                      </span>
                    </motion.div>
                  </div>

                  {/* =================================================
                      RIGHT SIDE
                     ================================================= */}

                  <div
                    className={`
                      ${
                        isRight
                          ? 'sm:pl-10'
                          : 'sm:pl-10'
                      }
                    `}
                  >
                    {isRight ? (
                      <TimelineCard
                        entry={entry}
                        style={style}
                        colors={colors}
                        Icon={Icon}
                      />
                    ) : (
                      <div className="sm:hidden">
                        <TimelineCard
                          entry={entry}
                          style={style}
                          colors={colors}
                          Icon={Icon}
                        />
                      </div>
                    )}
                  </div>

                  {/* Mobile card */}
                  <div className="col-start-2 sm:hidden">
                    {isRight && (
                      <TimelineCard
                        entry={entry}
                        style={style}
                        colors={colors}
                        Icon={Icon}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            BOTTOM LABEL
           ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
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
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-12 flex items-center gap-3 sm:mt-14"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-electric/20" />

          <span className="eyebrow flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-secondary-theme/70">
            <FaCircle size={5} className="text-signal" />
            Still writing the next chapter
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet/20" />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   TIMELINE CARD
   ========================================================= */

function TimelineCard({
  entry,
  style,
  colors,
  Icon,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.018]
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-white/[0.12]
        hover:bg-white/[0.028]
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-28
          w-28
          rounded-full
          bg-white/[0.025]
          blur-[40px]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`
              eyebrow
              rounded-full
              border
              px-2.5
              py-1
              text-[10px]
              ${style.badge}
            `}
          >
            {entry.year}
          </span>

          <span
            className={`
              eyebrow
              rounded-full
              border
              px-2.5
              py-1
              text-[10px]
              capitalize
              ${style.badge}
            `}
          >
            {entry.type}
          </span>
        </div>

        {/* Event */}
        <div className="mt-3 flex items-start gap-3">
          <div
            className={`
              mt-0.5
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              ${colors.dot}/10
              ${colors.text}
            `}
          >
            <Icon size={13} />
          </div>

          <div className="min-w-0">
            <h3
              className="
                font-display
                text-base
                font-semibold
                leading-6
                text-primary-theme
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              {entry.event}
            </h3>

            <p
              className="
                mt-1.5
                text-sm
                leading-6
                text-secondary-theme
              "
            >
              {entry.desc}
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className={`
            mt-4
            h-px
            bg-gradient-to-r
            ${colors.line}
            to-transparent
            opacity-20
            transition-opacity
            duration-300
            group-hover:opacity-50
          `}
        />
      </div>
    </motion.div>
  );
}