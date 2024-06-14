import React from 'react';
import AboutMe from './Sections/About';
import Achievements from './Sections/Achieve';
import Contact from './Sections/Contact';
import HomePage from './Sections/Hero';
import SkillSection from './Sections/skills';
import AnimatedSections from './Components/Gallery';

function App() {
  return (
    <>
      <header className="bg-faf" style={{ position: "fixed", top: "0", left: "0", zIndex: "40", width: "5vw" }}>
        <div className="flex max-w-full items-center justify-start" style={{ marginLeft: "0" }}>
          <nav className="hidden gap-5 flex-col h-screen lg:flex items-center 2xl:ml-16" style={{ width: "2vw" }}>
            <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl" aria-label="logo">
              <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-faf" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              AS
            </a>
            <a href="#" className="text-lg font-semibold text-alpha">Home</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Projects</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Contact</a>
          </nav>
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
