import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FiSend,
  FiMail,
  FiDownload,
  FiCode,
  FiArrowUpRight,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';

import SectionHeading from './SectionHeading';
import {
  SOCIALS,
  CONTACT_EMAIL,
  RESUME_URL,
  PERSONAL,
} from '../data/portfolioData';

const socialOrder = [
  'github',
  'linkedin',
  'codeforces',
  'leetcode',
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || 'your site'}`
    );

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          AMBIENT GLOWS
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
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet/[0.035]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="contact"
          title="Let's build something"
          subtitle="Open to software engineering internships, AI opportunities, and interesting collaborations."
        />

        <div className="mt-10 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          {/* =================================================
              CONTACT FORM
             ================================================= */}

          <motion.form
            onSubmit={onSubmit}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
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
              duration: 0.65,
              ease: 'easeOut',
            }}
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
              backdrop-blur-xl
            "
          >
            {/* Form glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-electric/[0.06]
                blur-[75px]
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-7">
                <div className="flex items-center gap-2">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-electric/15
                      bg-electric/[0.05]
                      text-electric
                    "
                  >
                    <FiSend size={15} />
                  </span>

                  <div>
                    <p className="eyebrow text-[9px] uppercase tracking-[0.16em] text-secondary-theme">
                      message
                    </p>

                    <p className="mt-0.5 text-sm font-medium text-primary-theme">
                      Get in touch
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-secondary-theme">
                  Have an opportunity, project idea, or collaboration in mind?
                  Send me a message and it will open directly in your email
                  client.
                </p>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="eyebrow text-[10px] uppercase tracking-[0.12em] text-mist"
                  >
                    name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="
                      mt-2
                      w-full
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-4
                      py-3
                      text-sm
                      text-primary-theme
                      placeholder:text-mist/45
                      outline-none
                      transition-all
                      duration-300
                      focus:border-electric/45
                      focus:bg-white/[0.035]
                      focus:ring-2
                      focus:ring-electric/10
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="eyebrow text-[10px] uppercase tracking-[0.12em] text-mist"
                  >
                    email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="
                      mt-2
                      w-full
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-4
                      py-3
                      text-sm
                      text-primary-theme
                      placeholder:text-mist/45
                      outline-none
                      transition-all
                      duration-300
                      focus:border-electric/45
                      focus:bg-white/[0.035]
                      focus:ring-2
                      focus:ring-electric/10
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="eyebrow text-[10px] uppercase tracking-[0.12em] text-mist"
                  >
                    message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about the opportunity or project idea..."
                    className="
                      mt-2
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-4
                      py-3
                      text-sm
                      leading-6
                      text-primary-theme
                      placeholder:text-mist/45
                      outline-none
                      transition-all
                      duration-300
                      focus:border-electric/45
                      focus:bg-white/[0.035]
                      focus:ring-2
                      focus:ring-electric/10
                    "
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <motion.button
                    type="submit"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -2,
                            scale: 1.01,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.98,
                          }
                    }
                    className="
                      glow-button
                      shine
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-brand-gradient
                      px-6
                      py-3
                      text-sm
                      font-medium
                      text-white
                    "
                  >
                    Send Message
                    <FiSend size={13} />
                  </motion.button>

                  <span className="flex items-center gap-2 text-[11px] text-mist">
                    <FiCheckCircle
                      size={12}
                      className="text-signal"
                    />
                    Opens your email client
                  </span>
                </div>
              </div>
            </div>
          </motion.form>

          {/* =================================================
              RIGHT SIDEBAR
             ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
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
              duration: 0.65,
              delay: 0.12,
              ease: 'easeOut',
            }}
            className="flex flex-col gap-4"
          >
            {/* Location */}
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              className="
                group
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.018]
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-violet/25
                hover:bg-white/[0.028]
              "
            >
              <div className="flex items-center gap-3">
                <span
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
                  "
                >
                  <FaMapMarkerAlt size={15} />
                </span>

                <div className="min-w-0">
                  <p className="eyebrow text-[9px] uppercase tracking-[0.14em] text-mist">
                    location
                  </p>

                  <p className="mt-1 text-sm text-primary-theme">
                    {PERSONAL.locationShort}
                  </p>

                  <p className="mt-0.5 text-xs text-secondary-theme">
                    {PERSONAL.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.a
              href={SOCIALS.email.url}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              className="
                group
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.018]
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-electric/25
                hover:bg-white/[0.028]
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-electric/15
                    bg-electric/[0.05]
                    text-electric
                  "
                >
                  <FiMail size={15} />
                </span>

                <div className="min-w-0">
                  <p className="eyebrow text-[9px] uppercase tracking-[0.14em] text-mist">
                    email
                  </p>

                  <p className="mt-1 truncate text-sm text-primary-theme">
                    {CONTACT_EMAIL}
                  </p>
                </div>

                <FiArrowUpRight
                  size={15}
                  className="
                    ml-auto
                    shrink-0
                    text-secondary-theme
                    opacity-40
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-electric
                    group-hover:opacity-100
                  "
                />
              </div>
            </motion.a>

            {/* Resume */}
            <div
              className="
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.018]
                p-5
                backdrop-blur-xl
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="eyebrow text-[9px] uppercase tracking-[0.14em] text-mist">
                    resume
                  </p>

                  <p className="mt-1 text-sm text-primary-theme">
                    View or download my resume
                  </p>
                </div>

                <FiCode
                  size={17}
                  className="text-electric"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    px-3
                    py-2.5
                    text-sm
                    text-primary-theme
                    transition-colors
                    hover:border-electric/35
                  "
                >
                  <FiCode size={13} />
                  Preview
                </a>

                <a
                  href={RESUME_URL}
                  download
                  className="
                    glow-button
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-brand-gradient
                    px-3
                    py-2.5
                    text-sm
                    text-white
                  "
                >
                  <FiDownload size={13} />
                  Download
                </a>
              </div>
            </div>

            {/* Social profiles */}
            <div
              className="
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.018]
                p-5
                backdrop-blur-xl
              "
            >
              <div className="flex items-center justify-between">
                <p className="eyebrow text-[9px] uppercase tracking-[0.14em] text-mist">
                  find me elsewhere
                </p>

                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
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
                        h-10
                        w-10
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
                      <Icon size={14} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
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
            delay: 0.2,
          }}
          className="mt-12 flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-electric/20" />

          <span className="eyebrow text-center text-[9px] uppercase tracking-[0.18em] text-secondary-theme/60">
            Let's turn ideas into working software
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet/20" />
        </motion.div>
      </div>
    </section>
  );
}