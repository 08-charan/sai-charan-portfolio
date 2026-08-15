import { motion } from 'framer-motion';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { PERSONAL } from '../data/portfolioData';

const chips = [
  { Icon: FaReact,       cls: '-top-3 -left-6',    delay: 0   },
  { Icon: FaPython,      cls: '-bottom-4 -right-5', delay: 0.6 },
  { Icon: SiTailwindcss, cls: 'top-1/2 -right-9',  delay: 1.1 },
];

export default function Avatar() {
  return (
    <div className="relative h-40 w-40 sm:h-44 sm:w-44 mx-auto sm:mx-0">
      <motion.div className="absolute -inset-3 rounded-full bg-brand-gradient opacity-60 blur-xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 4, repeat: Infinity }} />
      <div className="relative h-full w-full rounded-full bg-brand-gradient p-[3px]">
        <div className="h-full w-full rounded-full bg-base-theme grid place-items-center">
          <span className="font-display text-4xl font-semibold gradient-text">{PERSONAL.initials}</span>
        </div>
      </div>
      <span className="absolute bottom-1 right-1 flex h-5 w-5 rounded-full bg-signal border-2 border-base-theme animate-pulseRing" />
      {chips.map(({ Icon, cls, delay }, i) => (
        <motion.div key={i} className={`absolute ${cls} h-9 w-9 rounded-xl glass grid place-items-center text-electric animate-floaty`}
          style={{ animationDelay: `${delay}s` }} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + delay }}>
          <Icon size={16} />
        </motion.div>
      ))}
    </div>
  );
}
