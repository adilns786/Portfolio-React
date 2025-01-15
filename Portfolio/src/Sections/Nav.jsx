import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FaHome, FaProjectDiagram, FaInfo, FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
// import Profile from '../assets/Profile/profile-pic.png';
import { AboutMeData, SocialData } from '../assets/data';
function NavBar() {
    const navbarRef = useRef(null);
    const navbuttonRef = useRef(null);
    const [activeSection, setActiveSection] = useState('HomeSection');

    useEffect(() => {
        const navbar = navbarRef.current;
        const navsec = navbuttonRef.current;

        // gsap.fromTo(navsec, { width: '5vw' }, { width: '15vw', duration: 0.3, paused: true });

        const handleMouseEnter = () => {
            // gsap.to(navsec, { width: '5vw', duration: 0.1 });
            gsap.to(navsec, { marginLeft: '3vw', duration: 0.2 });
            gsap.to(navsec, { opacity: 1, duration: 0.2 });
            gsap.to(navsec, { display:"flex", duration: 0.2 });
        }
        const handleMouseLeave = () => {
            // return
            // gsap.to(navsec, { width: '5vw', duration: 0.1 });
            gsap.to(navsec, { marginLeft: '0vw', duration: 0.2 });
            gsap.to(navsec, { opacity: 0, duration: 0.2 });

        }

        navbar.addEventListener('mouseenter', handleMouseEnter);
        navbar.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            navbar.removeEventListener('mouseenter', handleMouseEnter);
            navbar.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    console.log(activeSection);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
    useEffect(() => {
        console.log(window.innerWidth);
    }, [])

    return (
        <header
            ref={navbarRef}
            className="bg-charlie bg-opacity-25 fixed w-[calc(56px)]  left-0 top-0 z-40 h-screen  flex flex-col items-center justify-between transition-all duration-300 font-adlam
        xs:flex-row xs:w-screen xs:h-12"
            style={{ overflowX: "visible" }}
        >
            <div className="mt-5  xs:mt-0">
                <a href={SocialData.Portfolio} className="flex flex-col items-center justify-center text-white text-3xl font-bold gap-2
                xs:flex-row">
                    <img src={AboutMeData.Profile2} className='w-12
                    xs:w-10 xs:ml-1'
                        alt="Profile" />
                    <p className='text-base text-faf'>AS</p>
                </a>
            </div>
            <div className='relative h-2/6 w-full flex flex-col justify-center
             xs:hidden'>
                <div ref={navbuttonRef} className=" flex-col items-center justify-center h-full absolute left-1/3 top-0 opacity-0 px-4 rounded-r-xl bg-charlie 
                ">
                    <a href="#HomeSection" className={`text-white h-1/4 flex items-center justify-center  group relative w-full ${activeSection === 'SkillSection' ? 'text-active' : ''}`}>
                        <span className=" text-lg font-semibold ">Home</span>
                    </a>
                    <a href="#ProjectSection" className={`text-white h-1/4 flex items-center justify-center group relative w-full ${activeSection === 'SkillSection' ? 'text-active' : ''}`}>
                        <span className=" text-lg font-semibold ">Projects</span>
                    </a>
                    <a href="#AboutSection" className={`text-white h-1/4 flex items-center justify-center  group relative w-full ${activeSection === 'AboutSection' ? 'text-active' : ''}`}>
                        <span className=" text-lg font-semibold ">About</span>
                    </a>
                    <a href="#ContactSection" className={`text-white h-1/4 flex items-center justify-center group relative w-full ${activeSection === 'ContactSection' ? 'text-active' : ''}`}>
                        <span className="text-lg font-semibold">Contact</span>
                    </a>
                </div>


                <div className="flex flex-col items-center  justify-between h-full  w-full
                xs:flex-row xs:invisible">
                    <a href="#HomeSection" className={`text-white h-1/4 flex items-center justify-center group relative w-full group`}>
                        <FaHome className="text-2xl left-0 group-hover:bg-faf group-hover:p-1 group-hover:scale-150 group-hover:text-charlie rounded-md transition-all duration-75" />
                        <span></span>
                    </a>
                    <a href="#ProjectSection" className={`text-white h-1/4 flex items-center justify-center group relative w-full scale-90 group
                    ${activeSection === 'SkillSection' ? 'text-active' : ''}`}>
                        <FaProjectDiagram className="text-2xl left-0 group-hover:bg-faf group-hover:p-1 group-hover:text-charlie group-hover:scale-150 rounded-md transition-all duration-75" />
                    </a>
                    <a href="#AboutSection" className={`text-white h-1/4 flex items-center justify-center group relative w-full scale-90 group
                    ${activeSection === 'AboutSection' ? 'text-active' : ''}`}>
                        <FaInfo className="text-2xl left-0 group-hover:bg-faf group-hover:p-1 group-hover:text-charlie  group-hover:scale-150 rounded-md transition-all duration-75" />
                    </a>
                    <a href="#ContactSection" className={`text-white h-1/4 flex items-center justify-center group relative w-full scale-90 group
                    ${activeSection === 'ContactSection' ? 'text-active' : ''}`}>
                        <FaEnvelope className="text-2xl left-0 group-hover:bg-faf group-hover:p-1 group-hover:text-charlie  group-hover:scale-150 rounded-md transition-all duration-75" />
                    </a>
                </div>

            </div>

            <div className="mb-1 flex flex-col items-center justify-center  gap-4
            xs:flex-row xs:gap-2"
                style={{ transform: "scale(0.7)" }}>
                {/* <a href={SocialData.Twitter} className="text-eigen text-2xl hover:scale-125 transition-all duration-75 hover:text-faf">
                    <FaTwitter />
                </a> */}
                <a href={SocialData.LinkedIn} className="text-eigen text-2xl hover:scale-125 transition-all duration-75 hover:text-faf">
                    <FaLinkedin />
                </a>
                <a href={SocialData.Github} className="text-eigen text-2xl hover:scale-125 transition-all duration-75 hover:text-faf">
                    <FaGithub />
                </a>
                <a href={SocialData.Leetcode} className="text-eigen text-2xl hover:scale-125 transition-all duration-75 hover:text-faf">
                    <SiLeetcode />
                </a>
            </div>
        </header>
    );
}

export default NavBar;
