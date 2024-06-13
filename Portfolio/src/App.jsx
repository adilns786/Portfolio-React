import { useEffect } from 'react';
import AboutMe from './Sections/About';
import Achievements from './Sections/Achieve';
import Contact from './Sections/Contact';
import HomePage from './Sections/Hero'
// import LayoutGrid from './Sections/layout'
// import BentoGrid from './Sections/bento';
import Items from './Sections/item';
import SkillSection from './Sections/skills';
// import Bento from './Sections/Gallery'
function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    // BlobFunction();
  }, []);
  return (
    <>
      <HomePage />
      <SkillSection />
      <AboutMe />
      {/* <svg
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
        <g transform="translate(448.8382457381267 329.1087944836386)">
          <path style={{ visibility: 'hidden' }} id='blob3' d="M145.5 -144.2C192.5 -98.5 237.3 -49.3 236.7 -0.6C236.1 48.1 190.2 96.2 143.2 121.2C96.2 146.2 48.1 148.1 -11.3 159.4C-70.7 170.7 -141.4 191.4 -183.6 166.4C-225.8 141.4 -239.4 70.7 -232.8 6.6C-226.2 -57.5 -199.4 -115 -157.2 -160.7C-115 -206.4 -57.5 -240.2 -4.1 -236.1C49.3 -231.9 98.5 -189.9 145.5 -144.2" fill="#6600FF">
          </path>
        </g>
        <g transform="translate(420.5766634970985 282.30008727506043)">
          <path style={{ visibility: 'hidden' }} id='blob4' d="M178.2 -153.2C228.2 -128.2 264.1 -64.1 251.7 -12.4C239.4 39.4 178.7 78.7 128.7 120.2C78.7 161.7 39.4 205.4 -6.2 211.6C-51.9 217.9 -103.7 186.7 -135.5 145.2C-167.4 103.7 -179.2 51.9 -188.1 -9C-197.1 -69.8 -203.2 -139.5 -171.4 -164.5C-139.5 -189.5 -69.8 -169.8 -2.8 -166.9C64.1 -164.1 128.2 -178.2 178.2 -153.2" fill="#6600FF">
          </path>
          </g>
      </svg> */}
      {/* <BlobAnimation/> */}
      <Achievements />
      <Contact />
      {/* <Bento/> */}
    </>
  )
}

export default App
