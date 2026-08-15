import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className="eyebrow text-sm text-electric mb-3"><span className="text-mist">// </span>{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-theme">{title}</h2>
      {subtitle && <p className="mt-4 text-secondary-theme leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
