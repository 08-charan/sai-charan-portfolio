import { motion, useReducedMotion } from 'framer-motion';
import {
  FiArrowUp,
  FiArrowUpRight,
} from 'react-icons/fi';

import {
  NAV_LINKS,
  SOCIALS,
  PERSONAL,
} from '../data/portfolioData';

const socialOrder = [
  'github',
  'linkedin',
  'codeforces',
  'leetcode',
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.07]
        pt-12
        pb-8
      "
    >
      {/* =====================================================
          AMBIENT GLOW
         ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[220px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-violet/[0.025]
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =================================================
            MAIN FOOTER ROW
           ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-8
            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          {/* Brand */}
          <div className="max-w-sm text-center sm:text-left">
            <motion.a
              href="#home"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.02,
                    }
              }
              className="
                inline-flex
                items-center
                gap-2
                font-mono
                text-lg
                font-semibold
              "
            >
              <span className="gradient-text">
                &lt;{PERSONAL.initials}/&gt;
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            </motion.a>

            <p className="mt-4 text-sm leading-6 text-secondary-theme">
              Building AI-powered applications, full-stack
              systems, and practical developer tools.
            </p>

            <p className="mt-3 text-xs text-mist">
              {PERSONAL.institute}
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left">
            <p className="eyebrow text-[9px] uppercase tracking-[0.18em] text-mist">
              navigation
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 sm:block sm:space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      text-xs
                      text-secondary-theme
                      transition-colors
                      hover:text-electric
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="text-center sm:text-right">
            <p className="eyebrow text-[9px] uppercase tracking-[0.18em] text-mist">
              connect
            </p>

            <div className="mt-4 flex justify-center gap-2.5 sm:justify-end">
              {socialOrder.map((key) => {
                const social = SOCIALS[key];
                const Icon = social.icon;

                return (
                  <motion.a
                    key={key}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                            scale: 1.05,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.96,
                          }
                    }
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      text-secondary-theme
                      transition-colors
                      hover:border-electric/35
                      hover:text-electric
                    "
                  >
                    <Icon size={13} />
                  </motion.a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="
                mt-4
                inline-flex
                items-center
                gap-1
                text-xs
                text-secondary-theme
                transition-colors
                hover:text-violet
              "
            >
              Let's talk
              <FiArrowUpRight size={11} />
            </a>
          </div>
        </div>

        {/* =================================================
            DIVIDER
           ================================================= */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* =================================================
            BOTTOM ROW
           ================================================= */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-4
            text-center
            sm:flex-row
            sm:justify-between
            sm:text-left
          "
        >
          <div>
            <p className="text-sm text-secondary-theme">
              Designed &amp; Developed by{' '}
              <span className="gradient-text font-medium">
                {PERSONAL.name}
              </span>
            </p>

            <p className="mt-1 text-[11px] text-mist">
              React · Tailwind CSS · Framer Motion · Vite
            </p>
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -3,
                  }
            }
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.95,
                  }
            }
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-4
              py-2
              text-xs
              text-secondary-theme
              transition-colors
              hover:border-electric/30
              hover:text-electric
            "
          >
            Back to top
            <FiArrowUp size={12} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="mt-7 text-center text-[11px] text-mist/50">
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}