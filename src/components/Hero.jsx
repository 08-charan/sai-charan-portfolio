import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import {
  FiArrowRight,
  FiMail,
  FiCode,
  FiStar,
} from 'react-icons/fi';

import CodeWindow from './CodeWindow';
import Avatar from './Avatar';

import {
  PERSONAL,
  SOCIALS,
  RESUME_URL,
  INTERNSHIP_STATUS,
  TYPING_ROLES,
  CURRENTLY_BUILDING,
} from '../data/portfolioData';

const wrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const [roleIndex, setRoleIndex] = useState(0);
  const [buildingIndex, setBuildingIndex] = useState(0);

  /* =========================================================
     ROTATING PROFESSIONAL ROLES
     ========================================================= */
  useEffect(() => {
    if (reduceMotion || TYPING_ROLES.length <= 1) return;

    const interval = setInterval(() => {
      setRoleIndex(
        (prev) => (prev + 1) % TYPING_ROLES.length
      );
    }, 2600);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  /* =========================================================
     ROTATING CURRENTLY-BUILDING PROJECTS
     ========================================================= */
  useEffect(() => {
    if (reduceMotion || CURRENTLY_BUILDING.length <= 1) return;

    const interval = setInterval(() => {
      setBuildingIndex(
        (prev) => (prev + 1) % CURRENTLY_BUILDING.length
      );
    }, 3200);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        pt-28
        pb-20
        bg-grid-fade
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
         ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <motion.div
          className="
            ambient-glow
            ambient-blue
            -top-32
            -left-24
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 40, -20, 0],
                  y: [0, -25, 15, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Purple glow */}
        <motion.div
          className="
            ambient-glow
            ambient-purple
            -right-32
            top-1/3
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -30, 20, 0],
                  y: [0, 20, -25, 0],
                  scale: [1, 0.95, 1.08, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Cyan glow */}
        <motion.div
          className="
            ambient-glow
            ambient-cyan
            bottom-[-180px]
            left-1/3
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 25, -30, 0],
                  y: [0, -20, 15, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Center spotlight */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-500/[0.025]
            blur-[100px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
         ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          sm:px-8
          lg:px-10
          grid
          lg:grid-cols-[1.08fr_0.92fr]
          gap-12
          xl:gap-20
          items-center
        "
      >
        {/* ===================================================
            LEFT SIDE
           =================================================== */}

        <motion.div
          variants={wrap}
          initial="hidden"
          animate="show"
          className="
            min-w-0
            w-full
            max-w-2xl
          "
        >
          {/* Internship status */}
          {INTERNSHIP_STATUS.seeking && (
            <motion.div
              variants={item}
              className="
                inline-flex
                items-center
                gap-2.5
                mb-7
                px-4
                py-2
                rounded-full
                glass
                border
                border-signal/20
                hover:border-signal/40
                transition-colors
                max-w-full
              "
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
              </span>

              <span className="eyebrow text-xs text-signal whitespace-nowrap">
                {INTERNSHIP_STATUS.label}
              </span>

              <span className="text-mist">·</span>

              <span className="eyebrow text-xs text-secondary-theme truncate">
                {INTERNSHIP_STATUS.role}
              </span>

              <span className="hidden lg:inline text-mist">·</span>

              <span className="hidden lg:inline eyebrow text-xs text-secondary-theme whitespace-nowrap">
                {INTERNSHIP_STATUS.timeline}
              </span>
            </motion.div>
          )}

          {/* Small AI label */}
          <motion.div
            variants={item}
            className="
              mb-4
              flex
              items-center
              gap-2
              text-sm
            "
          >
            <FiStar className="text-electric shrink-0" />

            <span className="eyebrow text-electric">
              AI • SOFTWARE • FULL STACK
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="
              font-display
              text-[2.7rem]
              sm:text-[3.4rem]
              lg:text-6xl
              xl:text-[4.25rem]
              font-semibold
              leading-[1.02]
              tracking-tight
              text-primary-theme
            "
          >
            <span className="block">
              Lakavath
            </span>

            <span className="block gradient-text">
              Sai Charan
            </span>
          </motion.h1>

          {/* Professional identity */}
          <motion.div
            variants={item}
            className="mt-5"
          >
            <p
              className="
                font-display
                text-base
                sm:text-lg
                text-secondary-theme
                leading-relaxed
              "
            >
              {PERSONAL.headline}
            </p>

            <div className="mt-3 flex items-center gap-2 min-h-[28px]">
              <span className="text-secondary-theme">
                Building
              </span>

              <motion.span
                key={roleIndex}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 8,
                      }
                }
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.35,
                }}
                className="
                  gradient-text
                  font-semibold
                  truncate
                "
              >
                {TYPING_ROLES[roleIndex]}
              </motion.span>

              {!reduceMotion && (
                <span
                  className="
                    h-5
                    w-[2px]
                    rounded-full
                    bg-electric
                    animate-pulse
                    shrink-0
                  "
                />
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="
              mt-6
              max-w-lg
              text-sm
              sm:text-base
              leading-7
              text-secondary-theme
            "
          >
            {PERSONAL.subheadline}. I enjoy building
            practical AI-powered applications, scalable
            backend systems, and developer-focused tools.
          </motion.p>

          {/* =================================================
              CTA BUTTONS
             ================================================= */}

          <motion.div
            variants={item}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="
                glow-button
                shine
                inline-flex
                items-center
                gap-2
                px-6
                py-3.5
                rounded-full
                bg-brand-gradient
                text-white
                text-sm
                font-medium
              "
            >
              View Projects
              <FiArrowRight />
            </a>

            {/* Preview Resume */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="
                glow-button
                inline-flex
                items-center
                gap-2
                px-5
                py-3.5
                rounded-full
                glass
                text-primary-theme
                text-sm
                font-medium
                hover:border-electric/50
              "
            >
              <FiCode size={14} />
              Preview Resume
            </a>

            {/* Download */}
            <a
              href={RESUME_URL}
              download
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-3
                rounded-full
                text-sm
                font-medium
                text-secondary-theme
                hover:text-electric
                transition-colors
              "
            >
              <FaDownload size={12} />
              Download
            </a>
          </motion.div>

          {/* =================================================
              SOCIAL LINKS
             ================================================= */}

          <motion.div
            variants={item}
            className="
              mt-8
              flex
              items-center
              gap-3
            "
          >
            {[
              'github',
              'linkedin',
              'codeforces',
              'leetcode',
            ].map((key) => {
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
                          scale: 1.06,
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
                    h-10
                    w-10
                    shrink-0
                    grid
                    place-items-center
                    rounded-full
                    glass
                    text-secondary-theme
                    hover:text-electric
                    hover:border-electric/50
                    transition-colors
                  "
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}

            {/* Email */}
            <motion.a
              href={SOCIALS.email.url}
              aria-label="Email"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.06,
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
                h-10
                w-10
                shrink-0
                grid
                place-items-center
                rounded-full
                glass
                text-secondary-theme
                hover:text-violet
                hover:border-violet/50
                transition-colors
              "
            >
              <FiMail size={15} />
            </motion.a>
          </motion.div>

          {/* =================================================
              CURRENTLY BUILDING
             ================================================= */}

          <motion.div
            variants={item}
            className="
              mt-8
              w-full
              max-w-lg
              rounded-2xl
              glass
              p-4
              border-white/[0.07]
            "
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  eyebrow
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-secondary-theme
                "
              >
                Currently Building
              </span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-electric
                  animate-pulse
                "
              />
            </div>

            <motion.div
              key={buildingIndex}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 8,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                    }
              }
              transition={{
                duration: 0.4,
              }}
              className="
                mt-2
                text-sm
                font-medium
                text-primary-theme
                truncate
              "
            >
              {CURRENTLY_BUILDING[buildingIndex]}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ===================================================
            RIGHT SIDE
           =================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 35,
                }
          }
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  x: 0,
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: 'easeOut',
          }}
          className="
            relative
            flex
            justify-center
            lg:justify-end
            min-w-0
            w-full
            pt-4
            lg:pt-0
          "
        >
          {/* Outer glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[2rem]
              bg-violet-500/[0.06]
              blur-[70px]
              scale-90
            "
          />

          {/* Code Window */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              relative
              z-10
              w-full
              max-w-[500px]
              xl:max-w-[540px]
            "
          >
            <CodeWindow />
          </motion.div>

          {/* Avatar */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -10, 0],
                    rotate: [0, 1.5, 0],
                  }
            }
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              -bottom-10
              right-[-8px]
              sm:right-[-18px]
              lg:right-[-12px]
              xl:right-[-20px]
              scale-[0.40]
              sm:scale-[0.46]
              lg:scale-[0.48]
              origin-bottom-right
              hidden
              sm:block
              z-20
            "
          >
            <Avatar />
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
         ===================================================== */}

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
          text-mist
          hover:text-electric
          transition-colors
        "
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 7, 0],
              }
        }
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span
          className="
            eyebrow
            text-[9px]
            uppercase
            tracking-[0.2em]
          "
        >
          Explore
        </span>

        <FaArrowDown size={13} />
      </motion.a>
    </section>
  );
}