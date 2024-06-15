import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const useSlider = (boxInfo) => {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(-1);
    const timeoutRef = useRef(null);
    const animating = useRef(false);
    const currentIndex = useRef(0);

    const sectionsRef = useRef([]);
    const imagesRef = useRef([]);
    const headingsRef = useRef([]);
    const outerWrappersRef = useRef([]);
    const innerWrappersRef = useRef([]);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleSlideChange = (newIndex) => {
        // setPrev(current);
        if((newIndex==0 && current==boxInfo.length-1) || (newIndex==boxInfo.length-1 && current==0)){
            gotoSection(newIndex, newIndex > current ? 1 : -1);
        }else{
            gotoSection(newIndex, newIndex > current ? -1 : 1);
        }
        setCurrent(newIndex);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            handleSlideChange((current + 1) % boxInfo.length);
        }, 5000); // Change slide every 5 seconds

        return () => {
            resetTimeout();
        };
    }, [current, boxInfo.length]);

    const gotoSection = (index, direction) => {
        // direction=-1;
        const sections = sectionsRef.current;
        const images = imagesRef.current;
        const headings = headingsRef.current;
        const outerWrappers = outerWrappersRef.current;
        const innerWrappers = innerWrappersRef.current;

        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        const wrap = gsap.utils.wrap(0, sections.length);

        index = wrap(index);
        animating.current = true;
        const fromTop = direction === -1;
        const dFactor = fromTop ? -1 : 1;
        const tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => animating.current = false
        });

        // Fade out the current section
        if (currentIndex.current >= 0) {
            gsap.set(sections[currentIndex.current], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo([outerWrappers[currentIndex.current], innerWrappers[currentIndex.current]], {
                yPercent: 0
            }, {
                yPercent: i => i ? 100 * dFactor : -100 * dFactor
            }, 0)
                .fromTo(images[currentIndex.current], { yPercent: 0 }, { yPercent: -20 * dFactor }, 0)
                .fromTo(headings[currentIndex.current], {
                    autoAlpha: 1,
                    yPercent: 0,
                    duration: 1,
                    ease: "power2",
                    stagger: {
                        each: 0.02,
                        from: "random"
                    }
                }, {
                    autoAlpha: 0,
                    yPercent: -150 * dFactor
                }, 0.1);
        }
        if (currentIndex.current >= 0) {
            gsap.set(sections[currentIndex.current], { autoAlpha: 1, zIndex: 0 });}
        // Animate the new section in
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo([outerWrappers[index], innerWrappers[index]], {
            yPercent: i => i ? -100 * dFactor : 100 * dFactor
        }, {
            yPercent: 0
        }, 0)
            .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
            .fromTo(headings[index], {
                autoAlpha: 0,
                yPercent: 150 * dFactor
            }, {
                autoAlpha: 1,
                yPercent: 0,
                duration: 1,
                ease: "power2",
                stagger: {
                    each: 0.02,
                    from: "random"
                }
            }, 0.2);

        currentIndex.current = index;
    };

    useEffect(() => {
        gotoSection(current, 1);
    }, []); // Run only once

    return {
        current,
        setCurrent: handleSlideChange,
        nextSlide: () => {
            handleSlideChange((current + 1) % boxInfo.length);
        },
        prevSlide: () => {
            handleSlideChange((current === 0) ? boxInfo.length - 1 : current - 1);
        },
        sectionsRef,
        imagesRef,
        headingsRef,
        outerWrappersRef,
        innerWrappersRef
    };
};

export default useSlider;
