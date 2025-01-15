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

const ProjectCard = ({ scrollIndex }) => {
    const [prevScrollIndex, setPrevScrollIndex] = useState(0);
    const [prev, setprev] = useState(0);

    const timeoutRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const div2ref = useRef(null);

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

    const animationTimeline = useRef(gsap.timeline({paused: true}));

    useEffect(() => {
        // Check if the scrollIndex has changed
        if (prevScrollIndex === 0 && scrollIndex === 1) {
            customGsapAnimation(); // Trigger GSAP animation when scrollIndex moves from 0 to 1
        }
    
        // Reverse the GSAP animation when the scrollIndex goes from 1 to 0
        if (prevScrollIndex === 1 && scrollIndex === 0) {
            animationTimeline.current.reverse(); // Reverse the GSAP animation with timeline reverse
        }
    
        setPrevScrollIndex(scrollIndex); // Update the previous index
    }, [scrollIndex, prevScrollIndex]);

    const customGsapAnimation = () => {
        if (!div2ref.current || screen < 480) return;

        const element = div2ref.current;
        
        // Reset timeline if it already exists
        animationTimeline.current.clear();

        // GSAP animation triggered manually
        animationTimeline.current.fromTo(element, 
            {
                y: -(window.innerHeight + window.innerWidth * 0.20),
                x: (element.offsetWidth / 2),
                rotation: -50,
                scale: 0.85,
                opacity: 1,
            },
            {
                y: 0,
                x: 0,
                rotation: 0,
                scale: 1,
                opacity: 1,
            }
        ).play(); // Play the timeline
    };

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


    return (
        < div className=' font-adlam h-screen  w-full
        xs:h-fit'
            style={{
                //  width: `${screen > 480 ? '95vw' : '100vw'}`,
                //   marginLeft: `${screen > 480 ? '3vw' : '0'}` 
                  }}>
            <section id='ProjectSection' className='Title '>
                {/* {"<"}My Projects/{">"} */}
            </section>

            <div ref={div2ref} className="flex items-center justify-center h-full w-full  relative   xs:hidden" >
                <div ref={containerRef} className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden "
                    style={{ boxShadow: "5px 5px 5px rgba(0,0,0,0.5),-2px -2px 5px rgba(0,0,0,0.5)" }}
                >

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

            <div className='hidden xs:block h-screen m-0 p-0'>
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
