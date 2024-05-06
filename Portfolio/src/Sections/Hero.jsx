import React from 'react';
import { useRef, useEffect } from 'react';
import { RotateDown } from '../Animations/hero';
import LayoutGrid from './layout';

function HomePage() {
  const div2ref = useRef(null)

  useEffect(() => {
    const element = div2ref.current;
    if (element) {
      // RotateDown(div2ref.current)
      // Your animation code here
    }
  }, []);
  const cards = [
    {
      id: 1,
      content: <div>This is card 1</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/600"
    },
    {
      id: 2,
      content: <div>This is card 2</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/400"
    },
    {
      id: 3,
      content: <div>This is card 2</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/300"
    },
    {
      id: 4,
      content: <div>This is card 4</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/100"
    },
    {
      id: 5,
      content: <div>This is card 5</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/200"
    },
    {
      id: 6,
      content: <div>This is card 6</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/600"
    },
    // Add more cards as needed
  ];
  return (
    <div className="hero bg-black pb-6 sm:pb-8 lg:pb-12">
      <header className="mb-8 border-b p-4">
        <div className="mx-auto flex max-w-full items-center justify-between md:px-8">
          {/* logo - start */}
          <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Aadil
          </a>
          {/* logo - end */}

          {/* nav - start */}
          <nav className="hidden gap-10 lg:flex 2xl:ml-16">
            <a href="#" className="text-lg font-semibold text-indigo-500">Home</a>
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
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 ">
            <h1 className="mb-4 text-9xl font-bold text-white sm:text-9xl md:mb-8 md:text-8xl">Aadil<br />Shah</h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">Fullstack Developer</p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">


            {/* <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
            </div>
             */}
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
            <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Men</a>
            <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Women</a>
            <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Teens</a>
          </div>

         
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">Social</span>
            <span className="h-px w-12 bg-gray-200"></span>

            <div className="flex gap-4">
              <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

            </div>
          </div>
        </div> */}
      </section>
      <section ref={div2ref} className='projout absolute  bg-gray-100 border-blue-800   '
        style={{ height: "45vw", width: "80vw", left: "50vw", top: "-15vw", rotate: "-50deg",border:"2pt solid red", borderRadius: "10px" }}>
       
        {/* <LayoutGrid cards={cards} /> */}

      </section>
       {/* <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg h-1/4 w-1/4 bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"> */}
        {/* <img  src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" 
          alt="Photo by Kaung Htet" 
          className="h-full w-full object-cover object-center" /> */}
        {/* </div> */}
    </div>
  );
}

export default HomePage;
