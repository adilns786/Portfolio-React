import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Observer, ScrollTrigger);

const AnimatedSections = () => {
    const [localtrigger, setlocal] = useState(true);

    const sectionsRef = useRef([]);
    const imagesRef = useRef([]);
    const headingsRef = useRef([]);
    const outerWrappersRef = useRef([]);
    const innerWrappersRef = useRef([]);
    const observerRef = useRef(null);
    const currentIndex = useRef(-1);
    const animating = useRef(false);
    const div2ref = useRef(null);

    useEffect(() => {
        const sections = sectionsRef.current;
        const images = imagesRef.current;
        const headings = headingsRef.current;
        const outerWrappers = outerWrappersRef.current;
        const innerWrappers = innerWrappersRef.current;
    
        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });
    
        const wrap = gsap.utils.wrap(0, sections.length);
    
        const gotoSection = (index, direction) => {
            index = wrap(index);
            animating.current = true;
            const fromTop = direction === -1;
            const dFactor = fromTop ? -1 : 1;
            const tl = gsap.timeline({
                defaults: { duration: 1.25, ease: "power1.inOut" },
                onComplete: () => (animating.current = false)
            });
    
            if (currentIndex.current >= 0) {
                gsap.set(sections[currentIndex.current], { zIndex: 0 });
                tl.to(images[currentIndex.current], { yPercent: -15 * dFactor }).set(
                    sections[currentIndex.current],
                    { autoAlpha: 0 }
                );
            }
    
            gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo(
                [outerWrappers[index], innerWrappers[index]],
                { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
                { yPercent: 0 },
                0
            )
                .fromTo(
                    images[index],
                    { yPercent: 15 * dFactor },
                    { yPercent: 0 },
                    0
                )
                .fromTo(
                    headings[index],
                    { autoAlpha: 0, yPercent: 150 * dFactor },
                    {
                        autoAlpha: 1,
                        yPercent: 0,
                        duration: 1,
                        ease: "power2",
                        stagger: { each: 0.02, from: "random" }
                    },
                    0.2
                );
    
            currentIndex.current = index;
        };
    
        if (div2ref.current) {
            const element = div2ref.current;
    
            // Animation for 'div2ref'
            const tl = gsap.timeline({
                onComplete: () => {
                    console.log("First animation complete");
    
                    // Setup scroll triggers and observer after the first animation completes
                    // observerRef.current = ScrollTrigger.create({
                    //     trigger: element.previousElementSibling, // Trigger animation based on the previous sibling element
                    //     start: "top top", // When the top of the trigger element hits the top of the viewport
                    //     end: "bottom top", // When the bottom of the trigger element hits the top of the viewport
                    //     scrub: true, // Smooth scrubbing
                    //     markers: true, // Markers to visualize the start and end points (for debugging)
                    //     onLeave: () => {
                    //         // Call setProject(true) when the scroll leaves the end position
                    //         console.log("Scroll left the trigger position");
                    //     }
                    // });
    
                    // Setup wheel/touch/pointer events
                    observerRef.current.addEventListener("wheel,touch,pointer", (event) => {
                        if (!animating.current) {
                            if (event.type === "wheel") {
                                const direction = event.deltaY > 0 ? 1 : -1;
                                const nextIndex = currentIndex.current + direction;
                                if (nextIndex >= 0 && nextIndex < sections.length) {
                                    gotoSection(nextIndex, direction);
                                } else {
                                    if (direction === 1) {
                                        console.log("Reached end, do something");
                                    } else {
                                        console.log("Reached beginning, do something");
                                    }
                                }
                            }
                        }
                    });
                }
            });
    
            tl.fromTo(
                element,
                {
                    y: -(window.innerHeight + window.innerWidth * 0.2), // Initial state: Move up slightly
                    x: element.offsetWidth / 2, // Initial state: Move right slightly
                    rotation: -50,
                    scale: 0.8
                },
                {
                    y: 0, // Final state
                    x: 0, // Final state
                    rotation: 0, // Final
                    scale: 1,
                    scrollTrigger: {
                        trigger: element.previousElementSibling, // Trigger animation based on the previous sibling element
                        start: "top top", // When the top of the trigger element hits the top of the viewport
                        end: "bottom top", // When the bottom of the trigger element hits the top of the viewport
                        scrub: true, // Smooth scrubbing
                        // markers: true, // Markers to visualize the start and end points (for debugging)
                        // onLeave: () => setproject(false), // Call setProject(true) when the scroll leaves the end position
                      }
                }
            );
    
            console.log("rotate2");
        }
    
        // Initial call to gotoSection to start the animation sequence
        gotoSection(0, 1);
    }, []);
    
    useEffect(() => {

    }, []);


    const sections = [
        {
            bg: "bg-gradient-to-b from-black to-transparent",
            image: "url('https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920')",
            heading: "Scroll down"
        },
        {
            bg: "bg-gradient-to-b from-black to-transparent",
            image: "url('https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920')",
            heading: "Animated with GSAP"
        },
        {
            bg: "bg-gradient-to-b from-black to-transparent",
            image: "url('https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920')",
            heading: "GreenSock"
        },
        {
            bg: "bg-gradient-to-b from-black to-transparent",
            image: "url('https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920')",
            heading: "Animation platform"
        },
        {
            bg: "bg-gradient-to-b from-black to-transparent",
            image: "url('https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75w=1920')",
            heading: "Keep scrolling"
        }
    ];

    return (
        <section ref={div2ref} className=' border-blue-800'
            style={{
                height: "100vh", width: "100vw", left: "0", top: "100vh", rotate: "0",
                borderRadius: "10px", backgroundColor: "lightblue", position: 'absolute', zIndex: "50"
            }}>
            <header className="fixed flex items-center justify-between p-4 w-full z-30 h-16 font-bold tracking-wide uppercase text-white bg-black">
                <div>Animated Sections</div>
                <div><a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a></div>
            </header>
            {sections.map((section, index) => (
                <section
                    key={index}
                    ref={el => {
                        sectionsRef.current[index] = el;
                        imagesRef.current[index] = el?.querySelector('.bg');
                        headingsRef.current[index] = el?.querySelector('.section-heading');
                        outerWrappersRef.current[index] = el?.querySelector('.outer');
                        innerWrappersRef.current[index] = el?.querySelector('.inner');
                    }}
                    className="absolute top-0 w-full h-screen"
                >
                    <div className="outer w-full h-full overflow-hidden">
                        <div className="inner w-full h-full overflow-hidden">
                            <div
                                className="bg flex items-center justify-center absolute w-full h-full top-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75w=1920')` }}
                            >
                                <h2 className="section-heading text-center text-5xl font-light uppercase tracking-wide text-gray-200">{section.heading}</h2>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </section>
    );
};

export default AnimatedSections;
