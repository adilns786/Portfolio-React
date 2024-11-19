import React from 'react';
import AboutMe from './Sections/About';
import Achievements from './Sections/Achieve';
import Contact from './Sections/Contact';
import HeroProject from './Sections/Hero';
import SkillSection from './Sections/skills';
import NavBar from './Sections/Nav';
import Projects from './Sections/Projects';

function App() {

  return (
    <>
      <NavBar />
      <HeroProject />
      <Projects />
      <AboutMe />
      <SkillSection />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
