import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 70 },
        { name: 'Tailwind', level: 60 },
        { name: 'Node.js', level: 60 },
        { name: 'Python', level: 60 },
        { name: 'Flutter', level: 70 },
        // { name: 'Flask', level: 85 },
        // { name: 'CSS', level: 80 },
        // { name: 'Node.js', level: 75 },
        // { name: 'Python', level: 70 },
        // Add more skills as needed
    ];

    const skillRefs = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startAnimation();
                observer.unobserve(container);
            }
        }, { threshold: 0.5 });

        observer.observe(container);

        return () => {
            observer.disconnect();
        };
    }, []);

    const startAnimation = () => {
        skillRefs.current.forEach((ref, index) => {
            gsap.fromTo(ref.current,
                { value: 0 },
                { value: skills[index].level, duration: 2, ease: 'power4.out', delay: index * 0.3 }
            );
        });

        const container = containerRef.current;
        const center = { x: container.clientWidth / 2, y: container.clientHeight / 2 };
        const radius = 200; // Radius of the circle layout

        gsap.utils.toArray('.skill-item').forEach((item, index) => {
            const angle = (index / skills.length) * Math.PI * 2;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            gsap.fromTo(item, 
                {
                    x: 0,
                    y: 0,
                    opacity: 0
                },
                {
                    x: x,
                    y: y,
                    opacity: 1,
                    duration: 2,
                    ease: 'power4.out',
                    delay: index * 0.3
                }
            );
        });
    };

    return (
        <div className="relative bg-gray-100 py-24" style={{marginLeft:"5vw"}} ref={containerRef}>
            <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
            <div className="flex justify-center items-center">
                <div className="relative w-full h-[600px] flex justify-center items-center"> {/* Adjust height as needed */}
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item absolute flex flex-col items-center opacity-0">
                            <div className="w-24 h-24">
                                <CircularProgressbar
                                    value={skill.level}
                                    text={`${skill.level}%`}
                                    styles={buildStyles({
                                        pathColor: `rgba(29, 78, 216, ${skill.level / 100})`,
                                        textColor: '#1d4ed8',
                                        trailColor: '#d1d5db',
                                        backgroundColor: '#f3f4f6',
                                    })}
                                    ref={el => skillRefs.current[index] = el}
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-2">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
