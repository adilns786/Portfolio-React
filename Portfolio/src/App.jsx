import React, { useRef, useEffect, useState } from 'react';
import AboutMe from './Sections/About';
import Achievements from './Sections/Achieve';
import Contact from './Sections/Contact';
import HomePage from './Sections/Hero';
import SkillSection from './Sections/skills';
import AnimatedSections from './Components/Gallery';
import { gsap } from 'gsap';
import { FaHome, FaProjectDiagram, FaInfo, FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Profile from './assets/Profile/profile-pic.png';

function App() {
  const navbarRef = useRef(null);
  const navbuttonRef = useRef(null);
  const [activeSection, setActiveSection] = useState('HomeSection');

  useEffect(() => {
    const navbar = navbarRef.current;
    const navsec = navbuttonRef.current;

    gsap.fromTo(navsec, { width: '5vw' }, { width: '15vw', duration: 0.3, paused: true });

    const handleMouseEnter = () => gsap.to(navsec, { width: '15vw', duration: 0.1 });
    const handleMouseLeave = () => gsap.to(navsec, { width: '5vw', duration: 0.1 });

    navbar.addEventListener('mouseenter', handleMouseEnter);
    navbar.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      navbar.removeEventListener('mouseenter', handleMouseEnter);
      navbar.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          console.log(activeSection);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header
        ref={navbarRef}
        className="bg-charlie fixed top-0 left-0 z-40 h-screen flex flex-col items-center justify-between transition-all duration-300 font-adlam"
        style={{ overflowX: "visible" }}
      >
        <div className="mt-5">
          <a href="/" className="flex flex-col items-center justify-center text-white text-3xl font-bold">
            <img src={Profile} width={"50px"} alt="Profile" />
            <p className='text-base'>Aadil</p>
          </a>
        </div>
        <div ref={navbuttonRef} className="w-full flex flex-col items-center space-y-6">
          <a href="#HomeSection" className={`text-white flex items-center space-x-3 group relative w-full ${activeSection === 'HomeSection' ? 'text-active' : ''}`}>
            <FaHome className="text-2xl absolute left-1/2 transform -translate-x-1/2" />
            <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Home</span>
          </a>
          <a href="#SkillSection" className={`text-white flex items-center space-x-3 group relative w-full ${activeSection === 'SkillSection' ? 'text-active' : ''}`}>
            <FaProjectDiagram className="text-2xl absolute left-1/2 transform -translate-x-1/2" />
            <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Projects</span>
          </a>
          <a href="#AboutSection" className={`text-white flex items-center space-x-3 group relative w-full ${activeSection === 'AboutSection' ? 'text-active' : ''}`}>
            <FaInfo className="text-2xl absolute left-1/2 transform -translate-x-1/2" />
            <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">About</span>
          </a>
          <a href="#ContactSection" className={`text-white flex items-center space-x-3 group relative w-full ${activeSection === 'ContactSection' ? 'text-active' : ''}`}>
            <FaEnvelope className="text-2xl absolute left-1/2 transform -translate-x-1/2" />
            <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact</span>
          </a>
        </div>
        <div className="mb-1 flex flex-col items-center space-y-6" style={{ transform: "scale(0.7)" }}>
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

      {/* <section id="HomeSection"> */}
        <HomePage />
      {/* </section> */}
      {/* <section id="SkillSection"> */}
        <SkillSection />
      {/* </section> */}
      {/* <section id="AboutSection"> */}
        <AboutMe />
      {/* </section> */}
      {/* <section id="AchievementsSection"> */}
        <Achievements />
      {/* </section> */}
      {/* <section id="ContactSection"> */}
        <Contact />
      {/* </section> */}

      {/* <AnimatedSections /> */}
    </>
  );
}

export default App;
