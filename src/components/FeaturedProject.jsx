import { motion } from 'framer-motion';
import { FaGithub, FaStar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { PROJECTS } from '../data/portfolioData';

const featured = PROJECTS.find(p => p.id === 'nl-to-sql');

function MockupScreen() {
  return (
    <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden bg-void-soft border border-theme">
      <div className={`absolute inset-0 bg-gradient-to-br ${featured.coverGradient}`} />
      <div className="absolute inset-0 bg-grid-fade opacity-60" />
      {/* Mock terminal UI */}
      <div className="absolute inset-4 glass rounded-lg p-4 font-mono text-xs leading-relaxed">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="h-2 w-2 rounded-full bg-[#FF5F56]" /><span className="h-2 w-2 rounded-full bg-[#FFBD2E]" /><span className="h-2 w-2 rounded-full bg-[#27C93F]" />
          <span className="ml-2 text-mist text-[10px]">nl_interface.py</span>
        </div>
        <p className="text-mist"><span className="text-violet">query</span> = <span className="text-amber-300">"Show top 10 customers by revenue"</span></p>
        <p className="text-mist mt-1"><span className="text-electric">→</span> <span className="text-signal">Translating...</span></p>
        <p className="text-mist mt-2"><span className="text-violet">SELECT</span> customer_id, <span className="text-signal">SUM</span>(revenue) <span className="text-violet">AS</span> total</p>
        <p className="text-mist pl-4"><span className="text-violet">FROM</span> orders</p>
        <p className="text-mist pl-4"><span className="text-violet">GROUP BY</span> customer_id</p>
        <p className="text-mist pl-4"><span className="text-violet">ORDER BY</span> total <span className="text-violet">DESC</span> <span className="text-violet">LIMIT</span> <span className="text-amber-300">10</span><span className="text-mist">;</span></p>
      </div>
    </div>
  );
}

export default function FeaturedProject() {
  if (!featured) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-electric/30" />
          <span className="eyebrow text-xs text-electric flex items-center gap-1.5">
            <FaStar size={10} /> Featured Project
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-violet/30" />
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65 }}
          className="glass-strong rounded-2xl overflow-hidden">

          {/* Top gradient banner */}
          <div className="h-2 bg-brand-gradient" />

          <div className="p-7 sm:p-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Left: content */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {featured.tech.map(t => (
                  <span key={t} className="eyebrow text-[11px] px-3 py-1 rounded-full bg-brand-gradient-soft border border-violet/20 text-violet">
                    {t}
                  </span>
                ))}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary-theme">{featured.title}</h2>

              <div className="flex items-center gap-1 mt-2 text-amber-400">
                {Array.from({ length: 5 }, (_, i) => <FaStar key={i} size={13} />)}
              </div>

              <p className="mt-4 text-secondary-theme leading-relaxed">{featured.description}</p>

              {featured.highlight && (
                <p className="mt-5 text-sm text-mist italic border-l-2 border-violet/50 pl-3">
                  "{featured.highlight}"
                </p>
              )}

              <ul className="mt-6 space-y-2">
                {featured.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-secondary-theme">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-8">
                <a href={featured.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-primary-theme text-sm hover:border-electric/50 transition-colors">
                  <FaGithub size={15} /> GitHub
                </a>
                <a href={featured.demo} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-gradient text-white text-sm hover:shadow-glow-violet transition-shadow">
                  Live Demo <FiExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Right: visual mockup */}
            <div>
              <MockupScreen />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
