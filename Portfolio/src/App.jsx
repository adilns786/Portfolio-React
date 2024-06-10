import { useEffect } from 'react';
import AboutMe from './Sections/About';
import Achievements from './Sections/Achieve';
import Contact from './Sections/Contact';
import HomePage from './Sections/Hero'
// import LayoutGrid from './Sections/layout'
// import BentoGrid from './Sections/bento';
import Items from './Sections/item';
import SkillSection from './Sections/skills';
// import "./Animations/Blob"
// import './Components/Blob'
import BlobFunction from './Animations/Blob';

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    BlobFunction();
  },[]);
  return (
    <>
      <HomePage />
      <SkillSection />
      <AboutMe />
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900" height="600"
        xmlns="http://www.w3.org/2000/svg"
        xmlns: xlink="http://www.w3.org/1999/xlink"
        version="1.1">
        <g transform="translate(458.77801624319477 301.1991820438724)">
          <path id='blob1' d="M144.3 -159.6C169.3 -119.3 159.6 -59.6 165.2 5.5C170.7 70.7 191.4 141.4 166.4 177.1C141.4 212.8 70.7 213.4 4.4 209C-62 204.7 -124 195.3 -159.1 159.6C-194.3 124 -202.7 62 -191.2 11.4C-179.8 -39.1 -148.6 -78.3 -113.4 -118.6C-78.3 -158.9 -39.1 -200.5 10.3 -210.7C59.6 -221 119.3 -199.9 144.3 -159.6" fill="#6600FF">
          </path>
        </g>
        <g transform="translate(470.48486837232946 271.5849052259867)">
          <path style={{ visibility: 'hidden' }} id='blob2' d="M125.4 -137.9C150.4 -100.4 150.2 -50.2 159.5 9.3C168.8 68.8 187.7 137.7 162.7 187.7C137.7 237.7 68.8 268.8 1.8 267.1C-65.3 265.3 -130.6 230.6 -168.2 180.6C-205.9 130.6 -216 65.3 -216.1 -0.1C-216.2 -65.5 -206.4 -131.1 -168.7 -168.6C-131.1 -206.1 -65.5 -215.5 -7.7 -207.9C50.2 -200.2 100.4 -175.4 125.4 -137.9" fill="#6600FF">
          </path>
        </g>
      </svg>
      {/* <BlobAnimation/> */}
      <Achievements />
      <Contact />
    </>
  )
}

export default App
