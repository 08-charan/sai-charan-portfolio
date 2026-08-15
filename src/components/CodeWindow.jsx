import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { PERSONAL, TYPING_ROLES } from '../data/portfolioData';

export default function CodeWindow() {
  const role = useTypewriter(TYPING_ROLES);
  return (
    <motion.div initial={{ opacity: 0, y: 30, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="glass-strong rounded-2xl shadow-glow w-full max-w-md font-mono text-[13px] sm:text-sm leading-relaxed">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-theme">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-mist text-xs">developer.js</span>
      </div>
      <div className="px-5 py-5">
        <p><span className="text-violet">const</span> <span className="text-electric">developer</span> <span className="text-mist">= {'{'}</span></p>
        <p className="pl-4"><span className="text-signal">name</span><span className="text-mist">: </span><span className="text-amber-300">"{PERSONAL.name}"</span><span className="text-mist">,</span></p>
        <p className="pl-4">
          <span className="text-signal">role</span><span className="text-mist">: </span>
          <span className="text-amber-300">"{role}<span className="inline-block w-[2px] h-[1em] bg-electric align-middle animate-blink ml-0.5" />"</span>
          <span className="text-mist">,</span>
        </p>
        <p className="pl-4"><span className="text-signal">institute</span><span className="text-mist">: </span><span className="text-amber-300">"IIT Kharagpur"</span><span className="text-mist">,</span></p>
        <p className="pl-4"><span className="text-signal">status</span><span className="text-mist">: </span><span className="text-amber-300">"{PERSONAL.status}"</span></p>
        <p className="text-mist">{'};'}</p>
      </div>
    </motion.div>
  );
}
