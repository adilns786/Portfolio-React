import React, { useState, useEffect, useRef } from "react";
import AboutMe from './About';
import Achievements from './Achieve';
import Contact from './Contact';
import HeroProject from './Hero';
import SkillSection from './Skills';
import NavBar from './Nav';
import Projects from './Projects';
import Skills from "./Skills";

const Snap = () => {
    const containerRef = useRef(null); // Reference to the scroll container
    const sectionRefs = useRef([]); // References to sections
    const [sectionHeights, setSectionHeights] = useState([]); // To store dynamic section heights
    const isScrolling = useRef(false); // Flag to prevent multiple scrolls
    const lastScrollTime = useRef(0); // Timestamp of the last scroll event
    const [currentIndex, setCurrentIndex] = useState(0); // Track current section index

    // Recalculate the height of each section on resize
    useEffect(() => {
        const updateSectionHeights = () => {
            const heights = [];
            sectionRefs.current.forEach((section) => {
                heights.push(section?.clientHeight || window.innerHeight);
            });
            setSectionHeights(heights);
        };

        // Recalculate on resize
        window.addEventListener("resize", updateSectionHeights);
        updateSectionHeights(); // Initial call to set heights

        return () => {
            window.removeEventListener("resize", updateSectionHeights);
        };
    }, []);

    const handleScroll = (direction) => {
        const now = Date.now();
        if (isScrolling.current || now - lastScrollTime.current < 800) {
            return;
        }

        const container = containerRef.current;
        const sections = sectionRefs.current;
        const currentScroll = container.scrollTop;
        const sectionHeight = window.innerHeight; // This may be recalculated dynamically

        const currentSectionIndex = Math.round(currentScroll / sectionHeight);
        let targetIndex = currentSectionIndex;

        if (direction === "down") targetIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        if (direction === "up") targetIndex = Math.max(currentSectionIndex - 1, 0);

        if (targetIndex !== currentSectionIndex) {
            isScrolling.current = true;
            lastScrollTime.current = now;

            setCurrentIndex(targetIndex); // Update current section index

            container.scrollTo({
                top: targetIndex * sectionHeight,
                behavior: "smooth",
            });

            setTimeout(() => {
                isScrolling.current = false;
            }, 800);
        }
    };

    useEffect(() => {
        const handleWheel = (event) => {
            const { deltaY } = event;
            if (deltaY > 0) {
                handleScroll("down");
            } else {
                handleScroll("up");
            }
        };

        const handleTouchStart = (event) => {
            const touchStartY = event.changedTouches[0].clientY;
            const handleTouchMove = (moveEvent) => {
                const touchEndY = moveEvent.changedTouches[0].clientY;
                if (touchEndY < touchStartY) {
                    handleScroll("down");
                } else {
                    handleScroll("up");
                }
                containerRef.current.removeEventListener("touchmove", handleTouchMove);
            };
            containerRef.current.addEventListener("touchmove", handleTouchMove);
        };

        const container = containerRef.current;
        container.addEventListener("wheel", handleWheel);
        container.addEventListener("touchstart", handleTouchStart);

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return (
        <>
        <div ref={(el) => (sectionRefs.current[0] = el)} className="flex items-center justify-center">
                <NavBar />
        </div>
        <div
            ref={containerRef}
            className="h-screen w-[calc(100vw-56px)] overflow-hidden absolute right-0"
            style={{ scrollBehavior: "auto" }} // Disable default snapping behavior
        >
            
            <div ref={(el) => (sectionRefs.current[1] = el)} className="flex items-center justify-center" style={{ height: sectionHeights[1]  }}>
                <HeroProject scrollIndex={currentIndex} />
            </div>
            <div ref={(el) => (sectionRefs.current[2] = el)} className="flex items-center justify-center" style={{ height: sectionHeights[2] }}>
                <Projects scrollIndex={currentIndex} />
            </div>
            <div ref={(el) => (sectionRefs.current[3] = el)} className="flex items-center justify-center" style={{ height: sectionHeights[3] }}>
                <AboutMe scrollIndex={currentIndex} />
            </div>
            <div ref={(el) => (sectionRefs.current[4] = el)} className="flex items-center justify-center" style={{ height: sectionHeights[4] }}>
                <Skills scrollIndex={currentIndex} />
            </div>
            <div ref={(el) => (sectionRefs.current[6] = el)} className="flex items-center justify-center" style={{ height: sectionHeights[6] }}>
                <Contact scrollIndex={currentIndex} />
            </div>
        </div>
        </>
    );
};

export default Snap;
