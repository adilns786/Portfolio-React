import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
// import { RotateDown } from '../Animations/hero';
// import LayoutGrid from './layout';
// import BentoGrid from './Gallery';
// import ItemGrid from './item';
// import Bgimage from '../assets/Animation.gif';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Projects from './Projects';

function HomePage() {

  const playerRef = useRef(null);

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

  return (
    <section id='HomeSection' className=" bg-faf3  sm:pb-8 lg:pb-12 overflow-visible font-adlam" style={{ width: "95vw", height: "100vh", marginBottom: "100vh", marginLeft: "5vw" }}>
     
      <section id='hero' className="m-0 p-0" style={{ width: "50vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
        {/* First div */}
        <div className=" flex flex-col justify-center sm:mb-12 lg:mb-0 font-adlam " style={{ position: "relative", zIndex: 1, maxWidth: "50%", width: "fit-content" }}>
          <h6 className="text-5xl font-bold text-charlie sm:text-7xl md:mb-8 md:text-6xl" style={{ margin: "10px", padding: "0" }}>Hi, I'm</h6>
          <h1 className="mb-4 text-9xl font-bold text-beta sm:text-9xl md:mb-8 md:text-8xl">Aadil</h1>
          <p className="max-w-md leading-relaxed text-charlie xl:text-lg">Fullstack Developer and <br />ML Enthusiast</p>
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


        <Projects/>
        <section id='ProjectSection'></section>
    </section>
  );
}

export default HomePage;
