import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import p1 from '../assets/Projects/Project1.png';
import p2 from '../assets/Projects/Project2.png';
import p3 from '../assets/Projects/Project3.png';
import p4 from '../assets/Projects/Project4.png';
import p5 from '../assets/Projects/Project5.png';
import useSlider from './useSlider';


const boxInfo = [
    {
        id: 1,
        image: p5,
        info: "feybh gfeib igufwbas uwids udwnj guwdib d    hu nhud NA UHDx hodangr 8yiofh fedi",
        title: "AirAware",
        link: "https://airaware-f22c0.web.app/",
        gitlink: "https://airaware-f22c0.web.app/",
    },
    {
        id: 2,
        image: p4,
        info: "feybh gfeib igufwbas uwids udwnj guwdib d    hu nhud NA UHDx hodangr 8yiofh fedi",
        title: "Trip Sync",
        link: "https://air-monitor-5132e.web.app/",
        gitlink: "https://airaware-f22c0.web.app/",
    },
    {
        id: 3,
        image: p3,
        info: "feybh gfeib igufwbas uwids udwnj guwdib d    hu nhud NA UHDx hodangr 8yiofh fedi",
        title: "AQI Monitor",
        link: "https://air-monitor-5132e.web.app/",
        gitlink: "https://airaware-f22c0.web.app/",
    },
    {
        id: 4,
        image: p2,
        info: "feybh gfeib igufwbas uwids udwnj guwdib d    hu nhud NA UHDx hodangr 8yiofh fedi",
        title: "Project 4",
        link: "https://airaware-f22c0.web.app/",
        gitlink: "https://airaware-f22c0.web.app/",
    },
    {
        id: 5,
        image: p1,
        info: "feybh gfeib igufwbas uwids udwnj guwdib d    hu nhud NA UHDx hodangr 8yiofh fedi",
        title: "Project 5",
        link: "https://airaware-f22c0.web.app/",
        gitlink: "https://airaware-f22c0.web.app/",
    },
];

gsap.registerPlugin(Observer, ScrollTrigger);

const ProjectCard = () => {
    // const [current, setCurrent] = useState(0);
    const [prev, setprev] = useState(0);

    const timeoutRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const div2ref = useRef(null);

    // const sectionsRef = useRef([]);
    // const imagesRef = useRef([]);
    // const headingsRef = useRef([]);
    // const outerWrappersRef = useRef([]);
    // const innerWrappersRef = useRef([]);
    // const observerRef = useRef(null);
    // const currentIndex = useRef(-1);
    // const animating = useRef(false);
    // const div2ref = useRef(null);
    const {
        current,
        setCurrent,
        nextSlide,
        prevSlide,
        sectionsRef,
        imagesRef,
        headingsRef,
        outerWrappersRef,
        innerWrappersRef
    } = useSlider(boxInfo);


    useEffect(() => {
        if (!div2ref.current) { return }
        const element = div2ref.current
        gsap.fromTo(element,
            {
                y: -(window.innerHeight + window.innerWidth * 0.20), // Initial state: Move up slightly
                x: (element.offsetWidth / 2),  // Initial state: Move right slightly
                rotation: -50,
                scale: 1,
                opacity:0.7,
            },
            {
                y: 0, // Final state
                x: 0, // Final state
                rotation: 0, // Final 
                scale: 1,
                opacity:1,
                scrollTrigger: {
                    trigger: element.previousElementSibling, // Trigger animation based on the previous sibling element
                    start: "top top", // When the top of the trigger element hits the top of the viewport
                    end: "bottom top", // When the bottom of the trigger element hits the top of the viewport
                    scrub: true, // Smooth scrubbing
                    markers: true, // Markers to visualize the start and end points (for debugging)
                    // onLeave: () => setproject(false), // Call setProject(true) when the scroll leaves the end position
                    // once: true,
                }
            }
        );
    }, []);

    // const resetTimeout = () => {
    //     if (timeoutRef.current) {
    //         clearTimeout(timeoutRef.current);
    //     }
    // };
    // useEffect(() => {
    //     resetTimeout();
    //     timeoutRef.current = setTimeout(
    //         () => {
    //             setprev(current);
    //             console.log(current,prev)
    //             setCurrent((prevIndex) => (prevIndex === boxInfo.length - 1 ? 0 : prevIndex + 1))
    //         },
    //         5000 // Change slide every 5 seconds
    //     );

    //     // const tl = gsap.timeline();
    //     // tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    //     // tl.fromTo(imageRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.5");
    //     // tl.fromTo(textRef.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.5");

    //     return () => {
    //         resetTimeout();
    //     };
    // }, [current]);
   
    // useEffect(() => {
    //     const sections = sectionsRef.current;
    //     const images = imagesRef.current;
    //     const headings = headingsRef.current;
    //     const outerWrappers = outerWrappersRef.current;
    //     const innerWrappers = innerWrappersRef.current;

    //     gsap.set(outerWrappers, { yPercent: 100 });
    //     gsap.set(innerWrappers, { yPercent: -100 });

    //     const wrap = gsap.utils.wrap(0, sections.length);

    //     const gotoSection = (index, direction) => {
    //         index = wrap(index);
    //         animating.current = true;
    //         const fromTop = direction === -1;
    //         const dFactor = fromTop ? -1 : 1;
    //         const tl = gsap.timeline({
    //             defaults: { duration: 1.25, ease: "power1.inOut" },
    //             onComplete: () => animating.current = false
    //         });

    //         if (prev >= 0) {

    //             gsap.set(sections[prev], { zIndex: 0 });
    //             tl.to(images[prev], { yPercent: -15 * dFactor })
    //                 .set(sections[prev], { autoAlpha: 0 });
    //             // console.log(`this is important2 prev--${prev} curr--${current}`)

    //         }

    //         gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    //         tl.fromTo([outerWrappers[index], innerWrappers[index]], {
    //             yPercent: i => i ? -100 * dFactor : 100 * dFactor
    //         }, {
    //             yPercent: 0
    //         }, 0)
    //             .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
    //             .fromTo(headings[index], {
    //                 autoAlpha: 0,
    //                 yPercent: 150 * dFactor
    //             }, {
    //                 autoAlpha: 1,
    //                 yPercent: 0,
    //                 duration: 1,
    //                 ease: "power2",
    //                 stagger: {
    //                     each: 0.02,
    //                     from: "random"
    //                 }
    //             }, 0.2);

    //         currentIndex.current = index;
    //     };
    //     gotoSection(current, -1);

    // }, [current]);



    // const nextSlide = () => {
    //     setprev(current);
    //     setCurrent((prevIndex) => (prevIndex === boxInfo.length - 1 ? 0 : prevIndex + 1));
    // };

    // const prevSlide = () => {
    //     setprev(current);
    //     setCurrent((prevIndex) => (prevIndex === 0 ? boxInfo.length - 1 : prevIndex - 1));
    // };
    
    return (
        <section ref={div2ref} className=' border-blue-800' id=''
            style={{
                height: "100vh", width: "95vw", left: "0vw", top: "100vh", rotate: "0",
                borderRadius: "10px", backgroundColor: "", position: 'absolute', zIndex: ""
                ,marginLeft:"5vw"
            }}>
            <div className="flex items-center justify-center h-screen  relative" >
                <div ref={containerRef} className="relative w-11/12 h-5/6 bg-white rounded-lg shadow-lg overflow-hidden"
                style={{boxShadow:"10px 10px 5px rgba(0,0,0,0.5),-2px -2px 5px rgba(0,0,0,0.5)"}}
                >
                    {/* <div ref={imageRef} className="w-full h-fit absolute">
                        <img src={boxInfo[current].image} alt={boxInfo[current].title} className="w-full object-scale-down" />
                    </div>
                    <div ref={textRef} className=" p-8 " >
                        <h2 className="text-3xl font-bold mb-4">{boxInfo[current].title}</h2>
                        <p className="text-gray-700 mb-4">{boxInfo[current].info}</p>
                        <a href={boxInfo[current].link} className="text-blue-500 hover:underline">Demo Link</a>
                        <br />
                        <a href={boxInfo[current].gitlink} className="text-blue-500 hover:underline">GitHub Link</a>
                    </div> */}
                    {boxInfo.map((section, index) => (
                        <section
                            key={index}
                            ref={el => {
                                sectionsRef.current[index] = el;
                                imagesRef.current[index] = el?.querySelector('.bg');
                                headingsRef.current[index] = el?.querySelector('.section-text');
                                outerWrappersRef.current[index] = el?.querySelector('.outer');
                                innerWrappersRef.current[index] = el?.querySelector('.inner');
                            }}
                            className="w-full h-full absolute"
                        >
                            <div className="outer w-full h-full overflow-hidden">
                                <div className="inner w-full h-full overflow-hidden">
                                    <div
                                        className="bg flex items-center justify-center absolute w-full h-full top-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${section.image})` }}
                                    >
                                        <div ref={textRef} className="section-text p-8 " >
                                            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                                            <p className="text-gray-700 mb-4">{section.info}</p>
                                            <a href={section.link} className="text-blue-500 hover:underline">Demo Link</a>
                                            <br />
                                            <a href={section.gitlink} className="text-blue-500 hover:underline">GitHub Link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    style={{ zIndex: "5" }}
                    className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    style={{ zIndex: "5" }}
                    className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default ProjectCard;
