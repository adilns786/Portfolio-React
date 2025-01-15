import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Projects from './Projects';
import { SocialData } from '../assets/data';
import { gsap } from 'gsap';
import { TypeAnimation } from 'react-type-animation';


const HomePage = ({ scrollIndex }) => {
  useEffect(() => {
      // You can implement behavior based on scrollIndex here
      console.log("Current section index in HeroProject:", scrollIndex);
  }, [scrollIndex]);
  const [screen, setscreen] = useState(window.innerWidth);
  const playerRef = useRef(null);
  const handleResize = () => {
    setscreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const player = playerRef.current;

    // Make the player absolute positioned to behave like a background
    if (player) {
      player.style.position = 'absolute';
      player.style.top = '0';
      player.style.left = '0';
      player.style.width = '100%';
      player.style.height = '100%';
      player.style.zIndex = '-1'; // Place the player behind other content
    }
  }, []);
  const text = "Aadil";

  useEffect(() => {
    // Animate each letter with a stagger effect
    gsap.fromTo(".letter", {
      opacity: 0,
      y: -200,

    }, {
      duration: 3,           // Duration of the animation for each letter
      opacity: 1,            // Final opacity
      y: 0,                  // Final position
      ease: "power2.out",    // Easing function
      stagger: 0.5           // Stagger delay between each letter
    });
  }, []);
  // Split text into individual letters and wrap them in spans
  const letters = text.split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter}
    </span>
  ));
  const handleOpenPdf = () => {
    // The path should be relative to the public folder
    const pdfUrl = SocialData.Resume;
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new browser tab
  };
  return (
    <section id='HomeSection' className="h-screen overflow-y-visible overflow-x-hidden font-adlam" style={{ width: `${screen > 480 ? '95vw' : '100vw'}`, marginLeft: `${screen > 480 ? '5vw' : '0'}` }}>

      <section id='hero' className="m-0 p-0 relative items-center justify-center flex h-screen w-1/2
      xs:w-full" >
        {/* First div */}
        <div className=" flex flex-col justify-center mb-0 font-adlam relative w-7/12
        xs:items-center "
          style={{ zIndex: 1 }}>
          <h6 className="text-3xl font-bold text-charlie 
          xs:text-2xl xs:m-0" >Hii, I'm</h6>
          {/* <h1 className=" text-9xl font-bold text-beta 
         xs:text-7xl ">{letters}</h1> */}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              'Aadil',
              2000,
              'Shah',
              2000,
            ]}
            speed={20}
            className='text-9xl font-bold text-beta 
            xs:text-7xl '
            // style={{ fontSize: '2em' }}
            repeat={Infinity}
          />
          <div className="  text-charlie text-lg font-bold
          xs:text-sm xs:items-center xs:flex xs:flex-col xs:justify-center"><p>Fullstack Developer and </p><p>ML Enthusiast</p></div>
          <div className='flex justify-around mt-4 xs:gap-2'>
            <a
              href="#ContactSection"
              className="  bg-beta p-3  text-faf rounded-lg hover:scale-110 hover:rounded-2xl transition-all duration-100 ease-in-out 
            xs:p-2 xs:h-fit xs:w-fit"
            >
              Contact
            </a>
            <a
              onClick={handleOpenPdf}
              download="AadilResume.pdf"
              className="  bg-beta p-3  text-faf rounded-lg hover:scale-110 hover:rounded-2xl transition-all duration-100 ease-in-out
            xs:p-2 xs:h-fit xs:w-fit"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Second div (Lottie animation) */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transform: "scale(1)", zIndex: 0 }}>
          <DotLottieReact
            src="https://lottie.host/a0f4ae17-0ee9-466e-83b5-e5217e5549ce/FPNO1eIkJJ.lottie"
            style={{ width: '100%', height: '100%' }}
            loop
            autoplay
          />
        </div>
      </section>
      {/* <section ref={div2ref} className='projout absolute   border-blue-800'
        style={{ height: "45vw", width: "80vw", left: "50vw", top: "-15vw", rotate: "-50deg", borderRadius: "10px" , backgroundColor:"lightblue" }}>
        <BentoGrid projectTrigger={projecttrigger}/>
      </section> */}



      {/* <div className='hidden xs:block ' style={{height:"50vh"}}>
          <Projects />

        </div> */}
    </section>
  );
}

export default HomePage;
