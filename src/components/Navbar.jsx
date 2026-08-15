import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiArrowUpRight,
} from 'react-icons/fi';

import { NAV_LINKS, PERSONAL } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { theme, toggleTheme } = useTheme();

  /* =========================================================
     SCROLL STATE
     ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     ACTIVE SECTION
     ========================================================= */
  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visible[0]) {
          setActiveSection(
            `#${visible[0].target.id}`
          );
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
     ========================================================= */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`
        fixed
        top-0
        inset-x-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? 'navbar-glass scrolled'
            : 'bg-transparent'
        }
      `}
    >
      <nav
        className="
          mx-auto
          flex
          h-[4.25rem]
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            LOGO
           =================================================== */}

        <motion.a
          href="#home"
          onClick={closeMenu}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
            group
            relative
            flex
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

          {/* tiny status dot */}
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-signal
              shadow-[0_0_10px_rgba(34,197,94,0.55)]
              animate-pulse
            "
          />

          {/* Hover underline */}
          <span
            className="
              pointer-events-none
              absolute
              -bottom-1
              left-0
              h-px
              w-0
              bg-brand-gradient
              transition-all
              duration-300
              group-hover:w-full
            "
          />
        </motion.a>

        {/* ===================================================
            DESKTOP NAV
           =================================================== */}

        <ul className="hidden items-center gap-6 lg:gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              activeSection === link.href;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    group
                    relative
                    inline-flex
                    py-2
                    eyebrow
                    text-[12px]
                    lg:text-[13px]
                    transition-colors
                  "
                  style={{
                    color: active
                      ? 'var(--text-primary)'
                      : undefined,
                  }}
                >
                  <span
                    className={
                      active
                        ? 'text-electric'
                        : 'text-secondary-theme group-hover:text-primary-theme'
                    }
                  >
                    {link.label}
                  </span>

                  {/* active line */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      rounded-full
                      bg-brand-gradient
                      transition-all
                      duration-300
                      ${
                        active
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-70'
                      }
                    `}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* ===================================================
            DESKTOP ACTIONS
           =================================================== */}

        <div className="hidden items-center gap-2.5 md:flex">
          {/* Theme */}
          <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ rotate: 10, scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            className="
              h-9
              w-9
              grid
              place-items-center
              rounded-full
              glass
              text-primary-theme
              transition-all
              hover:border-electric/40
              hover:text-electric
            "
          >
            {theme === 'dark' ? (
              <FiSun size={15} />
            ) : (
              <FiMoon size={15} />
            )}
          </motion.button>

          {/* Let's talk */}
          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              glow-button
              shine
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-brand-gradient
              px-4
              py-2
              text-white
              eyebrow
              text-[12px]
              font-medium
            "
          >
            Let's talk
            <FiArrowUpRight size={13} />
          </motion.a>
        </div>

        {/* ===================================================
            MOBILE ACTIONS
           =================================================== */}

        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileTap={{ scale: 0.94 }}
            className="
              h-9
              w-9
              grid
              place-items-center
              rounded-full
              glass
              text-primary-theme
              transition-colors
              hover:text-electric
            "
          >
            {theme === 'dark' ? (
              <FiSun size={15} />
            ) : (
              <FiMoon size={15} />
            )}
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open ? 'Close menu' : 'Open menu'
            }
            aria-expanded={open}
            whileTap={{ scale: 0.94 }}
            className="
              h-9
              w-9
              grid
              place-items-center
              rounded-full
              glass
              text-primary-theme
              transition-colors
              hover:text-electric
            "
          >
            {open ? (
              <FiX size={18} />
            ) : (
              <FiMenu size={18} />
            )}
          </motion.button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
         ===================================================== */}

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={closeMenu}
              className="
                fixed
                inset-0
                top-[4.25rem]
                z-[-1]
                cursor-default
                bg-black/35
                backdrop-blur-[2px]
                md:hidden
              "
            />

            {/* Menu */}
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
              className="
                md:hidden
                overflow-hidden
                border-t
                border-white/[0.06]
                bg-black/50
                backdrop-blur-xl
              "
            >
              <ul className="flex flex-col px-5 py-4">
                {NAV_LINKS.map((link, index) => {
                  const active =
                    activeSection === link.href;

                  return (
                    <motion.li
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.035,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3
                          transition-all
                          hover:bg-white/[0.035]
                        "
                      >
                        <span
                          className={`
                            eyebrow
                            text-sm
                            transition-colors
                            ${
                              active
                                ? 'text-electric'
                                : 'text-secondary-theme group-hover:text-primary-theme'
                            }
                          `}
                        >
                          {link.label}
                        </span>

                        {active && (
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-electric
                              shadow-[0_0_10px_rgba(79,125,255,0.55)]
                            "
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}

                <li className="mt-2 border-t border-white/[0.06] pt-3">
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-brand-gradient
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-white
                    "
                  >
                    Let's talk
                    <FiArrowUpRight size={14} />
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}