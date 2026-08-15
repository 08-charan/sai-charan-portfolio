import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import FeaturedProject from '../components/FeaturedProject';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import CodingProfiles from '../components/CodingProfiles';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import CurrentlyBuilding from '../components/CurrentlyBuilding';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Projects />
      <Achievements />
      <Timeline />
      <Education />
      <CodingProfiles />
      <Experience />
      <Certifications />
      <CurrentlyBuilding />
      <Contact />
      <Footer />
    </>
  );
}
