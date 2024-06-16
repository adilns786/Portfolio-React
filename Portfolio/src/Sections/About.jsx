import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from '../assets/Profile/profile-pic1.png'

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
                    markers: true,
                },
                stagger: 0.1,
                opacity: 1,
                x: 0,
                // duration: 1.5,
            }
        );

    }, []);

    return (
        <section id="AboutSection" ref={sectionRef} className=" py-12 px-6 md:px-12 lg:px-24" style={{ marginLeft: "5vw" }}>
            <div className="flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div ref={imageRef} className="md:w-1/3 mb-6 md:mb-0">
                    <img
                        src={profile}
                        alt="Your Name"
                        className="rounded-full shadow-md object-cover mx-auto md:mx-0"
                        style={{border:"1pt solid rgba(7, 6, 15,0.7)", boxShadow:"3px 3px 2px rgba(7, 6, 15,0.7)"}}
                    />
                </div>
                {/* Text Section */}
                <div className="md:w-2/3 md:pl-12 font-adlam">
                    <h2 className="textref text-4xl  mb-4">About Me</h2>
                    <p className="textref text-gray-700  mb-4">
                        Hello! I'm a third-year Computer Science Engineering student with a passion for creating innovative web applications and diving into the world of machine learning. Throughout my academic journey, I've actively participated in hackathons and contributed to my college's Computer Society of India (CSI) chapter.

                    </p>
                    <p className="textref text-gray-700  mb-4">

                        I specialize in developing dynamic and responsive applications using technologies like React, Tailwind CSS, GSAP, Flutter, Flask, and Python. Currently, I'm expanding my expertise in machine learning, working on exciting projects in Jupyter Notebook.

                    </p>
                    <p className="textref text-gray-700  mb-4">

                        I love solving complex problems and transforming ideas into functional, aesthetically pleasing applications. If you're interested in collaborating or discussing tech, feel free to reach out!
                    </p>

                    {/* <h3  className="textref text-2xl font-semibold mb-2">Skills & Expertise</h3> */}
                    {/* <ul className="textref list-disc list-inside mb-4 text-gray-700">
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                        <li>Skill 4</li>
                    </ul> */}
                    <h3 className="textref text-2xl font-semibold mb-2">Education & Certifications</h3>
                    <ul className="textref list-disc list-inside mb-4 text-gray-700">
                        <li>Degree or Certification 1</li>
                        <li>Degree or Certification 2</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
