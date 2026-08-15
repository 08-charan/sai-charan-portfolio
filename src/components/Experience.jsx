import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="experience" title="Leadership & experience" />

        <div className="relative pl-12">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-violet to-transparent" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div key={exp.role}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative">
                  <span className="absolute -left-12 top-0 h-9 w-9 rounded-full glass-strong grid place-items-center text-electric">
                    <Icon size={15} />
                  </span>
                  <div className="glass rounded-xl p-5 hover:border-electric/40 transition-colors">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display font-semibold text-primary-theme">{exp.role}</h3>
                      <span className="eyebrow text-xs text-mist">{exp.period}</span>
                    </div>
                    <p className="text-electric text-sm mt-0.5">{exp.org}</p>
                    <p className="text-secondary-theme text-sm mt-2 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
