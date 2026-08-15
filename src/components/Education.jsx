import { motion, useReducedMotion } from 'framer-motion';
import {
  FaGraduationCap,
  FaCheckCircle,
  FaUniversity,
} from 'react-icons/fa';

import SectionHeading from './SectionHeading';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Ambient glows */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-170px]
          top-1/3
          h-[400px]
          w-[400px]
          rounded-full
          bg-electric/[0.03]
          blur-[115px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-170px]
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-violet/[0.03]
          blur-[115px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="education"
          title="Academic background"
          subtitle="My academic journey and current dual-degree programme at IIT Kharagpur."
        />

        <div className="mt-10 space-y-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.institute}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 28,
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
                margin: '-80px',
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
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
                sm:p-8
                lg:p-9
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/[0.12]
                hover:bg-white/[0.025]
                hover:shadow-[0_24px_75px_rgba(0,0,0,0.18)]
              "
            >
              {/* Card glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-electric/[0.055]
                  blur-[75px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-electric/15
                    bg-electric/[0.055]
                    text-electric
                    shadow-[0_0_30px_rgba(79,125,255,0.08)]
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <FaGraduationCap size={26} />
                </div>

                {/* Main academic info */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="
                        eyebrow
                        rounded-full
                        border
                        border-electric/15
                        bg-electric/[0.05]
                        px-3
                        py-1.5
                        text-[10px]
                        text-electric
                      "
                    >
                      {edu.year}
                    </span>

                    <span
                      className="
                        eyebrow
                        rounded-full
                        border
                        border-violet/15
                        bg-violet/[0.05]
                        px-3
                        py-1.5
                        text-[10px]
                        text-violet
                      "
                    >
                      Dual Degree
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      font-display
                      text-xl
                      font-semibold
                      leading-tight
                      text-primary-theme
                      sm:text-2xl
                    "
                  >
                    {edu.institute}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-secondary-theme sm:text-base">
                    {edu.program}
                  </p>

                  <p className="mt-2 text-sm text-mist">
                    {edu.note}
                  </p>

                  {/* Institute */}
                  <div className="mt-5 flex items-center gap-2 text-xs text-secondary-theme">
                    <FaUniversity className="text-violet" />

                    <span>
                      Computer Science & Engineering
                    </span>
                  </div>
                </div>

                {/* Status */}
                <div className="shrink-0 lg:min-w-[180px]">
                  <div className="rounded-xl border border-signal/10 bg-signal/[0.03] p-4">
                    <p className="eyebrow text-[9px] uppercase tracking-[0.16em] text-secondary-theme">
                      Current status
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <FaCheckCircle
                        className="shrink-0 text-signal"
                        size={14}
                      />

                      <span className="eyebrow text-xs text-signal">
                        On Track
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-secondary-theme">
                      Expected graduation:{' '}
                      <span className="text-primary-theme">
                        {edu.note.replace(
                          'Expected Graduation: ',
                          ''
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="relative z-10 mt-7 h-px overflow-hidden bg-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '28%' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35,
                    ease: 'easeOut',
                  }}
                  className="h-full bg-gradient-to-r from-electric to-violet"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
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
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-electric/20" />

          <span className="eyebrow text-[9px] uppercase tracking-[0.18em] text-secondary-theme/60">
            IIT Kharagpur • CSE • Class of 2028
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet/20" />
        </motion.div>
      </div>
    </section>
  );
}