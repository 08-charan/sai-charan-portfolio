import { motion } from 'framer-motion';
export default function Loader() {
  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-base-theme"
      initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex flex-col items-center gap-4">
        <div className="font-mono text-sm text-mist">
          <span className="text-electric">~</span> booting portfolio
          <span className="inline-block w-2 h-4 bg-violet ml-1 align-middle animate-blink" />
        </div>
        <div className="h-px w-48 overflow-hidden rounded bg-white/5">
          <motion.div className="h-full bg-brand-gradient"
            initial={{ x: '-100%' }} animate={{ x: '0%' }} transition={{ duration: 0.9, ease: 'easeInOut' }} />
        </div>
      </div>
    </motion.div>
  );
}
