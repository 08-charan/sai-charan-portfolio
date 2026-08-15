import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1100); return () => clearTimeout(t); }, []);
  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <ParticlesBackground />
      <Navbar />
      <main className="relative"><Home /></main>
      <BackToTop />
    </ThemeProvider>
  );
}
