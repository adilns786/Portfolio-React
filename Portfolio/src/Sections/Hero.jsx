import React from 'react';
import { useRef, useEffect } from 'react';
import { RotateDown } from '../Animations/hero';
import LayoutGrid from './layout';
import BentoGrid from './bento';
import ItemGrid from './item';
function HomePage() {
  const div2ref = useRef(null)

  useEffect(() => {
    const element = div2ref.current;
    if (element) {
      RotateDown(div2ref.current)
      // Your animation code here
    }
  }, []);

  return (
    <div className="hero bg-faf3  sm:pb-8 lg:pb-12 overflow-visible" style={{ width: "100vw", height: "100vh", marginBottom: "100vh" }}>
      <header className="mb-8 border-b p-4">
        <div className="mx-auto  flex max-w-full items-center justify-start md:px-8" style={{marginLeft:"10vw"}}>
          {/* logo - start */}
          
          {/* logo - end */}

          {/* nav - start */}
          <nav className="hidden gap-5 lg:flex items-center 2xl:ml-16">
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

      <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <div className="mb-8 flex flex-wrap justify-between md:mb-16"> */}
          <div className="mb-6  flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 " style={{marginLeft:"10vw" ,marginTop:"20vh" }}>
            <h6 className="     text-5xl font-bold text-beta sm:text-7xl md:mb-8 md:text-6xl" style={{margin:"10px",padding:"0"}}>Hi ,I'm</h6>
            <h1 className="mb-4 text-9xl font-bold text-beta sm:text-9xl md:mb-8 md:text-8xl">Aadil</h1>
            <p className="max-w-md leading-relaxed text-beta xl:text-lg">Fullstack Developer and <br/>ML Enthusiast</p>
          </div>

          {/* <div className="mb-12 flex w-full md:mb-16 lg:w-2/3"> */}


            {/* <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
            </div>
             */}
          {/* </div> */}
        {/* </div> */}

      </section>
      <section ref={div2ref} className='projout absolute   border-blue-800'
        style={{ height: "45vw", width: "80vw", left: "50vw", top: "-15vw", rotate: "-50deg", borderRadius: "10px" }}>

        {/* <LayoutGrid cards={cards} /> */}
        <BentoGrid />
        {/* <ItemGrid/> */}
      </section>

    </div>
  );
}

export default HomePage;
