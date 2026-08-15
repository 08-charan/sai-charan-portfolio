import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

import SectionHeading from './SectionHeading';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { useCountUp } from '../hooks/useCountUp';

const accentStyles = [
  {
    iconBg: 'bg-electric/[0.07]',
    iconBorder: 'border-electric/15',
    iconText: 'text-electric',
    glow: 'bg-electric/[0.07]',
    value: 'text-electric',
    line: 'from-electric/50',
  },
  {
    iconBg: 'bg-violet/[0.07]',
    iconBorder: 'border-violet/15',
    iconText: 'text-violet',
    glow: 'bg-violet/[0.07]',
    value: 'text-violet',
    line: 'from-violet/50',
  },
  {
    iconBg: 'bg-amber-400/[0.07]',
    iconBorder: 'border-amber-400/15',
    iconText: 'text-amber-400',
    glow: 'bg-amber-400/[0.07]',
    value: 'text-amber-300',
    line: 'from-amber-400/50',
  },
];

function StatCard({ item, inView, index }) {
  const Icon = item.icon;
  const reduceMotion = useReducedMotion();

  const count = useCountUp(
    item.number ?? 0,
    inView && item.number != null,
    1000 + index * 150
  );

  const style =
    accentStyles[index % accentStyles.length];

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
            }
      }
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: 'easeOut',
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
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
        sm:p-7
        text-center
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-white/[0.12]
        hover:bg-white/[0.028]
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.20)]
      "
    >
      {/* Ambient card glow */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          blur-[55px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          ${style.glow}
        `}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.08,
                  rotate: 3,
                }
          }
          className={`
            mx-auto
            mb-5
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            ${style.iconBorder}
            ${style.iconBg}
            ${style.iconText}
            transition-all
            duration-300
          `}
        >
          <Icon size={21} />
        </motion.div>

        {/* Small label */}
        <p className="eyebrow text-[10px] uppercase tracking-[0.16em] text-secondary-theme">
          {index === 0
            ? 'Competitive Achievement'
            : index === 1
            ? 'Problem Solving'
            : 'Campus Achievement'}
        </p>

        {/* Main value */}
        <p
          className={`
            mt-3
            font-display
            text-3xl
            sm:text-4xl
            font-semibold
            tracking-tight
            ${style.value}
          `}
        >
          {item.number != null
            ? `${item.prefix ?? ''}${count}${item.suffix ?? ''}`
            : item.staticValue}
        </p>

        {/* Title */}
        <p className="eyebrow mt-2 text-xs font-medium text-primary-theme">
          {item.label}
        </p>

        {/* Details */}
        <p className="mt-1.5 text-sm leading-6 text-secondary-theme">
          {item.detail}
        </p>

        {/* Accent line */}
        <div className="mx-auto mt-5 h-px w-14 overflow-hidden bg-white/[0.05]">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : { width: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35 + index * 0.12,
              ease: 'easeOut',
            }}
            className={`
              h-full
              bg-gradient-to-r
              ${style.line}
              to-transparent
            `}
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
    </motion.article>
  );
}

export default function Achievements() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="achievements"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background glows */}
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
          eyebrow="achievements"
          title="Milestones along the way"
          subtitle="A few competitive, academic, and extracurricular milestones that shaped my journey."
        />

        <div
          ref={ref}
          className="
            mt-10
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {ACHIEVEMENTS.map((item, index) => (
            <StatCard
              key={item.label}
              item={item}
              inView={inView}
              index={index}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-electric/20" />

          <span className="eyebrow text-[9px] uppercase tracking-[0.18em] text-secondary-theme/60">
            Progress • Practice • Persistence
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet/20" />
        </motion.div>
      </div>
    </section>
  );
}