import React, { useRef, useEffect, useState } from 'react';
import AboutMe from './Sections/About';
import Achievements from './Sections/Achieve';
import Contact from './Sections/Contact';
import HomePage from './Sections/Hero';
import SkillSection from './Sections/skills';
import AnimatedSections from './Components/Gallery';
import NavBar from './Sections/Nav';

function App() {

  return (
    <>
      <NavBar />
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
