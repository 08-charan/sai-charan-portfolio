import { motion } from 'framer-motion';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const chips = [
  {
    Icon: FaReact,
    cls: '-top-3 -left-6',
    delay: 0,
  },
  {
    Icon: FaPython,
    cls: '-bottom-4 -right-5',
    delay: 0.6,
  },
  {
    Icon: SiTailwindcss,
    cls: 'top-1/2 -right-9',
    delay: 1.1,
  },
];

export default function Avatar() {
  return (
    <div className="relative h-40 w-40 sm:h-44 sm:w-44 mx-auto sm:mx-0">

      {/* Outer glow */}
      <motion.div
        className="
          absolute
          -inset-3
          rounded-full
          bg-brand-gradient
          opacity-60
          blur-xl
        "
        animate={{
          opacity: [0.35, 0.65, 0.35],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Gradient border */}
      <div className="relative h-full w-full rounded-full bg-brand-gradient p-[3px]">

        {/* Photo container */}
        <div className="relative h-full w-full overflow-hidden rounded-full bg-base-theme">

          <img
            src="/images/profile.jpg"
            alt="Lakavath Sai Charan"
            className="
              h-full
              w-full
              object-cover
              object-center
              
            
              
            "
          />

          {/* Subtle photo overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              bg-gradient-to-t
              from-black/15
              via-transparent
              to-white/5
            "
          />
        </div>
      </div>

      {/* Online status */}
      <span
        className="
          absolute
          bottom-1
          right-1
          flex
          h-5
          w-5
          rounded-full
          border-2
          border-base-theme
          bg-signal
          animate-pulseRing
          shadow-[0_0_12px_rgba(34,197,94,0.5)]
        "
      />

      {/* Floating tech chips */}
      {chips.map(({ Icon, cls, delay }, index) => (
        <motion.div
          key={index}
          className={`
            absolute
            ${cls}
            h-9
            w-9
            rounded-xl
            glass
            grid
            place-items-center
            text-electric
            animate-floaty
            shadow-[0_8px_25px_rgba(0,0,0,0.18)]
          `}
          style={{
            animationDelay: `${delay}s`,
          }}
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.8 + delay,
          }}
        >
          <Icon size={16} />
        </motion.div>
      ))}
    </div>
  );
}