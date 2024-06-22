import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { TextPlugin } from "gsap/dist/TextPlugin";
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import {AboutMeData} from '../assets/data';
// gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const titleRef = useRef(null);
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
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.5, // Trigger when 50% of the component is in view
    });

    useEffect(() => {
        if (screen < 480) return;
        gsap.fromTo(
            imageRef.current,
            {
                // opacity: 0,
                // scale: 0.5,
                // x: -500,
                // rotation: -180,
            },
            {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 120%",
                    scrub: true,
                },
                opacity: 1,
                scale: 1,
                x: 0,
                rotation: 0,
                duration: 1.5,
            }
        );

        gsap.fromTo(
            " .textref",
            {
                opacity: 0,
                x: 500,
            },
            {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "bottom 90%",
                    scrub: true,
                    // markers: true,
                },
                stagger: 0.1,
                opacity: 1,
                x: 0,
                // duration: 1.5,
            }
        );

    }, []);


    useEffect(() => {
        // Ensure GSAP and TextPlugin are loaded
        return
        if (!gsap || !TextPlugin) return;

        // Initialize intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animation using GSAP
                        gsap.fromTo(
                            titleRef.current,
                            { text: '<ABOUT ME>' },
                            { text: '</ABOUT ME>', duration: 1, ease: 'power3.out' }
                        );
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        // Start observing the titleRef
        observer.observe(titleRef.current);

        // Cleanup
        return () => observer.disconnect();
    }, []);
    return (
        <section id="AboutSection" ref={sectionRef} className="font-adlam" style={{ width: `${screen > 480 ? '95vw' : '100vw'}`, marginLeft: `${screen > 480 ? '5vw' : '0'}` }}>
            <div className="Title" ref={titleRef}>{"<"}ABOUT ME/{">"}</div>
            <div className="sub-title">//A brief introduction about me... </div>

            <div className="flex flex-col md:flex-row items-center  py-12 px-6 md:px-12 lg:px-24">
                {/* Image Section */}
                <div ref={imageRef} className="md:w-1/3 mb-6 md:mb-0 
                xs:w-3/5 ">
                    <img
                        src={AboutMeData.Profile}
                        alt="Aadil Shah"
                        className="rounded-full shadow-md object-cover mx-auto md:mx-0"
                        style={{ border: "1pt solid rgba(7, 6, 15,0.7)", boxShadow: "3px 3px 2px rgba(7, 6, 15,0.7)" }}
                    />
                </div>
                <div ref={ref} className="md:w-2/3 md:pl-12 font-adlam">
                    {inView && (
                        <TypeAnimation
                            sequence={[
                                `${AboutMeData.Info}`,
                            ]}
                            speed={100}
                            wrapper="span"
                            cursor={true}
                            // repeat={none}
                            className=" text-gray-700  mb-4 xs:text-sm"
                            style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                        />
                    )}
                    <h3 className="textref2 text-2xl font-semibold mb-2 
                    xs:text-lg">Education & Certifications</h3>
                    <ul className="textref2 list-disc list-inside mb-4 text-gray-700">
                        <li>CGPA: {AboutMeData.CGPA}</li>
                        {/* <li>HSC: 84.3%</li> */}
                        {/* <li>SSC: 92%</li> */}
                    </ul>
                </div>

            </div>

        </section>
    );
}

export default AboutMe;
