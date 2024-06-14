import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from '../assets/react.svg'

function AboutMe() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const titleRef = useRef(null);
    useEffect(() => {
        // return;
        gsap.registerPlugin(ScrollTrigger);

        // Animation for image
        gsap.fromTo(
            imageRef.current,
            {
                opacity: 0,
                scale: 0.5,
                x: -500,
                rotation: -180,
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

        // Animation for text
        // gsap.fromTo(
        //     ".textref",
        //     {
        //         opacity: 0,
        //         y: 200,
        //     },
        //     {
        //         scrollTrigger: {
        //             trigger: sectionRef.current,
        //             start: "top 80%",
        //             end: "bottom 120%",
        //             scrub: true,
        //             markers: true,
        //         },
        //         opacity: 1,
        //         y: 0,
        //         // duration: 1.5,
        //     }
        // );
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
                    markers: true,
                },
                stagger:0.1,
                opacity: 1,
                x: 0,
                // duration: 1.5,
            }
        );

    }, []);

    return (
        <div ref={sectionRef} className="bg-white py-12 px-6 md:px-12 lg:px-24" style={{ marginLeft: "5vw" }}>
            <div className="flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div ref={imageRef} className="md:w-1/3 mb-6 md:mb-0">
                    <img
                        src={profile}
                        alt="Your Name"
                        className="rounded-full shadow-md w-48 h-48 object-cover mx-auto md:mx-0"
                    />
                </div>
                {/* Text Section */}
                <div  className="md:w-2/3 md:pl-12">
                    <h2  className="textref text-4xl font-bold mb-4">About Me</h2>
                    <p className="textref text-gray-700 mb-4">
                        Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. With a passion for [Your Passion], I have been working in the field of [Your Field] for [X] years. I specialize in [Your Specialization] and have a keen interest in [Your Interests].
                    </p>
                    <p className="textref text-gray-700 mb-4">
                        My journey started [Your Background Story] and since then, I've had the privilege of working with some amazing teams and clients. My mission is to [Your Mission or Vision].
                    </p>
                    <h3  className="textref text-2xl font-semibold mb-2">Skills & Expertise</h3>
                    <ul className="textref list-disc list-inside mb-4 text-gray-700">
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                        <li>Skill 4</li>
                    </ul>
                    <h3  className="textref text-2xl font-semibold mb-2">Education & Certifications</h3>
                    <ul className="textref list-disc list-inside mb-4 text-gray-700">
                        <li>Degree or Certification 1</li>
                        <li>Degree or Certification 2</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
