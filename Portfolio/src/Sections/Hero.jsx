import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { RotateDown } from '../Animations/hero';
import LayoutGrid from './layout';
import BentoGrid from './Gallery';
import ItemGrid from './item';
import Bgimage from '../assets/Animation.gif';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { transform } from 'framer-motion';

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
    <div className=" bg-faf3  sm:pb-8 lg:pb-12 overflow-visible" style={{ width: "100vw", height: "100vh", marginBottom: "100vh", marginLeft: "5vw" }}>
      <header className="bg-faf" style={{ position: "fixed", top: "0", left: "0", zIndex: "40", width: "5vw" }}>
        <div className=" flex max-w-full items-center justify-start " style={{ marginLeft: "0" }}>

          <nav className="hidden gap-5 flex-col  h-screen lg:flex items-center 2xl:ml-16" style={{ width: "2vw", overflow: "", }}>
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
          {/* nav - end */}

          {/* buttons - start */}
          {/* <div className="flex divide-x border-r sm:border-l"> */}
          {/* <a href="#" className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">Wishlist</span>
            </a> */}
          {/* Other buttons */}
          {/* </div> */}
          {/* buttons - end */}
        </div>
      </header>

      <section id='hero' className="m-0 p-0" style={{ width: "50vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
        {/* First div */}
        <div className=" flex flex-col justify-center sm:mb-12 lg:mb-0 " style={{ position: "relative", zIndex: 1, maxWidth: "50%", width: "fit-content" }}>
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


        <BentoGrid/>
    </div>
  );
}

export default HomePage;
