import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import StatsCards from './StatsCards';
import { ABOUT, PERSONAL } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="about" title="A bit about me" />

        {/* Stats row */}
        <StatsCards />

        {/* Bio + interests */}
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-secondary-theme leading-relaxed text-[15px] sm:text-base">{p}</p>
            ))}
            <div className="flex flex-col gap-3 pt-2 text-sm">
              <div className="flex items-center gap-3 text-secondary-theme">
                <FaGraduationCap className="text-electric shrink-0" />
                <span>{PERSONAL.degree}</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-theme">
                <FaMapMarkerAlt className="text-violet shrink-0" />
                <span>{PERSONAL.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 glass rounded-2xl p-6">
            <p className="eyebrow text-xs text-mist mb-4">interests[]</p>
            <div className="flex flex-wrap gap-2">
              {ABOUT.interests.map(tag => (
                <span key={tag}
                  className="eyebrow text-xs px-3 py-1.5 rounded-full border border-theme text-secondary-theme hover:text-electric hover:border-electric/50 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
