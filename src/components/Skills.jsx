import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="skills" title="What I work with"
          subtitle="Languages, frameworks, tools, and AI systems I reach for when building production-grade applications." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SKILLS.map((group, gi) => (
            <motion.div key={group.category}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: (gi % 4) * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 hover:border-electric/40 transition-colors">
              <p className="eyebrow text-xs text-violet mb-4">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => {
                  const Icon = skill.icon;
                  return (
                    <span key={skill.name}
                      className="inline-flex items-center gap-1.5 text-[12px] px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-theme text-secondary-theme hover:text-primary-theme hover:border-electric/40 transition-colors">
                      <Icon className="text-electric" size={13} />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
