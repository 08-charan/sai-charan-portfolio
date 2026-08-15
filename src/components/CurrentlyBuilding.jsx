import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { CURRENTLY_BUILDING } from '../data/portfolioData';

export default function CurrentlyBuilding() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="currently-building" title="What I'm working on"
          subtitle="Active projects and things I'm learning right now — this section stays updated." />

        <div className="grid sm:grid-cols-2 gap-4">
          {CURRENTLY_BUILDING.map((item, i) => (
            <motion.div key={item}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-signal/40 transition-colors">
              <span className="h-8 w-8 rounded-lg bg-signal/10 grid place-items-center shrink-0">
                <FiCode className="text-signal" size={14} />
              </span>
              <p className="text-secondary-theme text-sm">{item}</p>
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-signal animate-pulseRing shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
