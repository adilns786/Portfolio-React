import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ProjectData } from '../assets/data';
import useSlider from './useSlider';
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaCss3 } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiFlask } from 'react-icons/si';

const skillIcons = {
    JavaScript: <FaJsSquare className="text-yellow-500 text-4xl" />,
    React: <FaReact className="text-blue-500 text-4xl" />,
    Tailwind: <SiTailwindcss className="text-teal-400 text-4xl" />,
    'Node.js': <FaNodeJs className="text-green-500 text-4xl" />,
    Python: <FaPython className="text-blue-400 text-4xl" />,
    Flutter: <SiFlutter className="text-blue-300 text-4xl" />,
    Flask: <SiFlask className='text-blue-400 text-4xl' />,
    CSS: <FaCss3 className='text-blue-500 text-4xl' />
    // Add more icons as needed
};

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
    const [screen, setscreen] = useState(window.innerWidth);
    const handleResize = () => {
        setscreen(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const {
        current,
        setCurrent,
        nextSlide,
        prevSlide,
        sectionsRef,
        imagesRef,
        headingsRef,
        outerWrappersRef,
        innerWrappersRef,
    } = useSlider(ProjectData);


    useEffect(() => {
        // return
        if (!div2ref.current || screen < 480) { return }
        const element = div2ref.current
        gsap.fromTo(element,
            {
                y: -(window.innerHeight + window.innerWidth * 0.20), // Initial state: Move up slightly
                x: (element.offsetWidth / 2),  // Initial state: Move right slightly
                rotation: -50,
                scale: 1,
                opacity: 1,
            },
            {
                y: 0, // Final state
                x: 0, // Final state
                rotation: 0, // Final 
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: element.previousElementSibling, // Trigger animation based on the previous sibling element
                    start: "top bottom", // When the top of the trigger element hits the top of the viewport
                    end: "top top", // When the bottom of the trigger element hits the top of the viewport
                    scrub: true, // Smooth scrubbing
                    // markers: true, // Markers to visualize the start and end points (for debugging)
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
    //             setCurrent((prevIndex) => (prevIndex === ProjectData.length - 1 ? 0 : prevIndex + 1))
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
    //     setCurrent((prevIndex) => (prevIndex === ProjectData.length - 1 ? 0 : prevIndex + 1));
    // };

    // const prevSlide = () => {
    //     setprev(current);
    //     setCurrent((prevIndex) => (prevIndex === 0 ? ProjectData.length - 1 : prevIndex - 1));
    // };

    return (
        < div className=' font-adlam h-screen
        xs:h-fit'
            style={{ width: `${screen > 480 ? '95vw' : '100vw'}`, marginLeft: `${screen > 480 ? '5vw' : '0'}` }}>
            <section id='ProjectSection' className='Title '>
                {"<"}My Projects/{">"}
            </section>

            <div ref={div2ref} className="flex items-center justify-center h-5/6  relative  mt-4 xs:hidden" >
                <div ref={containerRef} className="relative w-11/12 h-full bg-white rounded-lg shadow-lg overflow-hidden "
                    style={{ boxShadow: "5px 5px 5px rgba(0,0,0,0.5),-2px -2px 5px rgba(0,0,0,0.5)" }}
                >
                    {/* <div ref={imageRef} className="w-full h-fit absolute">
                        <img src={ProjectData[current].image} alt={ProjectData[current].title} className="w-full object-scale-down" />
                    </div>
                    <div ref={textRef} className=" p-8 " >
                        <h2 className="text-3xl font-bold mb-4">{ProjectData[current].title}</h2>
                        <p className="text-gray-700 mb-4">{ProjectData[current].info}</p>
                        <a href={ProjectData[current].link} className="text-blue-500 hover:underline">Demo Link</a>
                        <br />
                        <a href={ProjectData[current].gitlink} className="text-blue-500 hover:underline">GitHub Link</a>
                    </div> */}
                    {ProjectData.map((section, index) => (
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
                                        <div className="overlay absolute w-full h-full top-0 left-0 bg-beta opacity-30 pointer-events-none"></div>
                                        <div className="absolute section-text p-8 w-full h-full text-faf3">
                                            <h2 ref={textRef} className="absolute top-4 left-4 text-3xl font-bold mb-4 bg-beta p-3  text-faf rounded-lg ">{section.title}</h2>
                                            {/* <p className="absolute top-16 left-4  mb-4 bg-beta p-1  text-faf rounded-lg">{section.info}</p> */}
                                            {section.link &&
                                                <button className='flex items-center justify-center absolute bottom-4 right-4 bg-beta p-3 pr-8 text-faf rounded-lg hover:underline' >
                                                    <a href={section.link} className="">Live Link</a>
                                                    <DotLottieReact
                                                        src='https://lottie.host/c9fbabcb-9783-4879-8705-a04c9512cf29/MWO9CPEWI9.lottie'
                                                        style={{ position: "absolute", right: "0px", width: '40px', height: '40px' }}
                                                        loop
                                                        autoplay
                                                    />
                                                </button>
                                            }
                                            <div className='absolute bottom-4 left-4 flex items-center justify-center
                                            xs:flex-col-reverse xs:justify-start xs:items-start'>
                                                <a href={section.gitlink} className=" bg-beta p-3  text-faf rounded-lg hover:underline">GitHub Link</a>
                                                {section.tech.map((item, index) => (
                                                    <div className='group flex flex-col items-center justify-center gap-2
                                                    xs:flex-row  xs:scale-75 '>
                                                        <div className='rounded-full bg-faf bg-opacity-70 ml-1 mr-1 p-2  hover:bg-opacity-100 hover:bg-faf2 transition-all duration-100
                                                        xs:m-0 xs:bg-opacity-100 '>{skillIcons[item]}
                                                        </div>
                                                        <p className='text-sm hidden group-hover:block'>{item}</p>
                                                    </div>
                                                ))}
                                            </div>
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
                    className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-beta text-white p-2 rounded-full focus:outline-none 
                    xs:left-5"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    style={{ zIndex: "5" }}
                    className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-beta text-white p-2 rounded-full focus:outline-none
                    xs:right-5"
                >
                    &#10095;
                </button>
            </div>

            <div className='hidden xs:block h-fit m-0 p-0'>
                <div className=" pb-2 h-fit">
                    {/* <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2> */}
                    <div className="flex overflow-x-scroll p-4 space-x-4 h-fit items-center">
                        {ProjectData.map((project) => (
                            <div key={project.id} className="flex-shrink-0 w-[95%] h-fit rounded-lg overflow-hidden shadow-lg">
                                <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
                                <div className="p-4 bg-white">
                                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{project.info}</p>
                                    <div className="mt-4 flex justify-between">

                                        <a href={project.gitlink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            GitHub
                                        </a>
                                        {project.link ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                Visit
                                            </a>
                                        ) : (
                                            <span className="text-gray-400">No Link</span>
                                        )}
                                    </div>
                                    <div className="mt-2 flex flex-wrap">
                                        {project.tech.map((tech, index) => (
                                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* </div> */}

        </div>

    );
};

export default ProjectCard;
