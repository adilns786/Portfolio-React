import {React ,useRef ,useEffect} from 'react';
import AboutMe from './Sections/About';
import Achievements from './Sections/Achieve';
import Contact from './Sections/Contact';
import HomePage from './Sections/Hero';
import SkillSection from './Sections/skills';
import AnimatedSections from './Components/Gallery';
import { gsap } from 'gsap';
import { FaHome, FaProjectDiagram, FaInfo, FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const navbarRef = useRef(null);

  useEffect(() => {
      const navbar = navbarRef.current;

      gsap.fromTo(navbar, { width: '5vw' }, { width: '15vw', duration: 0.3, paused: true });

      const handleMouseEnter = () => gsap.to(navbar, { width: '15vw', duration: 0.1 });
      const handleMouseLeave = () => gsap.to(navbar, { width: '5vw', duration: 0.1 });

      navbar.addEventListener('mouseenter', handleMouseEnter);
      navbar.addEventListener('mouseleave', handleMouseLeave);

      return () => {
          navbar.removeEventListener('mouseenter', handleMouseEnter);
          navbar.removeEventListener('mouseleave', handleMouseLeave);
      };
  }, []);
  return (
    <>
       <header ref={navbarRef} className="bg-charlie fixed top-0 left-0 z-40 h-screen flex flex-col items-center justify-between transition-all duration-300">
            <div className="mt-5">
                <a href="/" className="flex items-center justify-center text-white text-3xl font-bold">
                    <svg width="50" height="50" viewBox="0 0 95 94" className="w-12 h-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                    </svg>
                </a>
            </div>
                <div className=" w-full flex flex-col items-center space-y-6">
                    <a href="#HomeSection" className="text-white flex items-center space-x-3 group relative w-full">
                        <FaHome className="text-2xl absolute left-1/2 transform -translate-x-1/2" />
                        <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Home</span>
                    </a>
                    <a href="#ProjectSection" className="text-white flex items-center space-x-3 group relative w-full">
                        <FaProjectDiagram className="text-2xl absolute left-1/2 transform -translate-x-1/2" />
                        <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Projects</span>
                    </a>
                    <a href="#AboutSection" className="text-white flex items-center space-x-3 group relative w-full">
                        <FaInfo className="text-2xl absolute left-1/2 transform -translate-x-1/2" />
                        <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">About</span>
                    </a>
                    <a href="#ContactSection" className="text-white flex items-center space-x-3 group relative w-full">
                        <FaEnvelope className="text-2xl absolute left-1/2 transform -translate-x-1/2" />
                        <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact</span>
                    </a>
                </div>
            <div className="mb-1 flex flex-col items-center space-y-6" style={{transform:"scale(0.7)"}}>
                <a href="https://twitter.com" className="text-eigen text-2xl">
                    <FaTwitter />
                </a>
                <a href="https://linkedin.com" className="text-eigen text-2xl">
                    <FaLinkedin />
                </a>
                <a href="https://github.com" className="text-eigen text-2xl">
                    <FaGithub />
                </a>
            </div>
        </header>

      <HomePage />
      <SkillSection />
      <AboutMe />
      <Achievements />
      <Contact />
      
      {/* <AnimatedSections /> */}
    </>
  );
}

export default App;
