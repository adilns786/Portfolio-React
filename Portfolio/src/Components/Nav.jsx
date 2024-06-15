import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

// Import SVG icons as images
import HomeOutlined from '../assets/Icons/HomeIcon.svg';
import HomeFilled from '../assets/Icons/HomeFilled.svg';
import ProjectOutlined from '../assets/Icons/ProjectIcon.svg';
import ProjectFilled from '../assets/Icons/ProjectFilled.svg';
import ContactOutlined from '../assets/Icons/ContactIcon.svg';
import ContactFilled from '../assets/Icons/ContactFilled.svg';
import AboutOutlined from '../assets/Icons/AboutIcon.svg';
import AboutFilled from '../assets/Icons/AboutFilled.svg';

function NavBar() {
    const navbarRef = useRef(null);
    const [selected, setSelected] = useState('home');

    useEffect(() => {
        const navbar = navbarRef.current;

        gsap.fromTo(navbar, { width: '5vw' }, { width: '15vw', duration: 0.3, paused: true });

        const handleMouseEnter = () => gsap.to(navbar, { width: '15vw', duration: 0.3 });
        const handleMouseLeave = () => gsap.to(navbar, { width: '5vw', duration: 0.3 });

        navbar.addEventListener('mouseenter', handleMouseEnter);
        navbar.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            navbar.removeEventListener('mouseenter', handleMouseEnter);
            navbar.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <header ref={navbarRef} className="bg-gray-900 fixed top-0 left-0 z-40 h-screen flex flex-col items-center justify-between transition-all duration-300">
            <div className="mt-5">
                <a href="/" className="flex items-center justify-center text-white text-3xl font-bold">
                    <svg width="50" height="50" viewBox="0 0 95 94" className="w-12 h-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                    </svg>
                </a>
            </div>
            <nav className="flex flex-col items-center space-y-6 relative w-full">
                <div className="absolute w-full flex flex-col items-center space-y-6">
                    <a href="/" className="text-white flex items-center space-x-3 group relative w-full" onClick={() => setSelected('home')}>
                        {selected === 'home' ? <img src={HomeFilled} alt="Home Filled" className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300" /> : <img src={HomeOutlined} alt="Home Outline" className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300" />}
                        <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Home</span>
                    </a>
                    <a href="#" className="text-white flex items-center space-x-3 group relative w-full" onClick={() => setSelected('projects')}>
                        {selected === 'projects' ? <img src={ProjectFilled} alt="Project Filled" className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300" /> : <img src={ProjectOutlined} alt="Project Outline" className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300" />}
                        <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Projects</span>
                    </a>
                    <a href="#" className="text-white flex items-center space-x-3 group relative w-full" onClick={() => setSelected('about')}>
                        {selected === 'about' ? <img src={AboutFilled} alt="About Filled" className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300" /> : <img src={AboutOutlined} alt="About Outline" className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300" />}
                        <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">About</span>
                    </a>
                    <a href="#" className="text-white flex items-center space-x-3 group relative w-full" onClick={() => setSelected('contact')}>
                        {selected === 'contact' ? <img src={ContactFilled} alt="Contact Filled" className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300" /> : <img src={ContactOutlined} alt="Contact Outline" className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300" />}
                        <span className="ml-10 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact</span>
                    </a>
                </div>
            </nav>
            <div className="mb-5 flex flex-col items-center space-y-6">
                <a href="https://twitter.com" className="text-white text-2xl hover:scale-125 transition-transform duration-300">
                    <FaTwitter />
                </a>
                <a href="https://linkedin.com" className="text-white text-2xl hover:scale-125 transition-transform duration-300">
                    <FaLinkedin />
                </a>
                <a href="https://github.com" className="text-white text-2xl hover:scale-125 transition-transform duration-300">
                    <FaGithub />
                </a>
            </div>
        </header>
    );
}

export default NavBar;
