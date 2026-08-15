import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../data/portfolioData';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ stat, inView, index }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.number, inView, 900 + index * 120);
  const isElectric = stat.accent === 'electric';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform group">
      <div className={`mx-auto mb-3 h-10 w-10 rounded-xl grid place-items-center ${isElectric ? 'bg-electric/10' : 'bg-violet/10'}`}>
        <Icon size={18} className={isElectric ? 'text-electric' : 'text-violet'} />
      </div>
      <p className="font-display text-2xl sm:text-3xl font-semibold text-primary-theme">
        {stat.prefix ?? ''}{count}{stat.suffix}
      </p>
      <p className="eyebrow text-[11px] text-secondary-theme mt-1.5 leading-tight">{stat.label}</p>
    </motion.div>
  );
}

export default function StatsCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
      {STATS.map((s, i) => <StatCard key={s.label} stat={s} inView={inView} index={i} />)}
    </div>
  );
}
