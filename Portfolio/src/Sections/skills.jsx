import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaCss3 } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiFlask } from 'react-icons/si';

const skillIcons = {
    JavaScript: <FaJsSquare className="text-yellow-500 text-4xl" />,
    React: <FaReact className="text-blue-500 text-4xl" />,
    Tailwind: <SiTailwindcss className="text-teal-400 text-4xl" />,
    'Node.js': <FaNodeJs className="text-green-500 text-4xl" />,
    Python: <FaPython className="text-blue-400 text-4xl" />,
    Flutter: <SiFlutter className="text-blue-300 text-4xl" />,
    Flask:<SiFlask className='text-blue-400 text-4xl'/>,
    CSS:<FaCss3 className='text-blue-500 text-4xl'/>
    // Add more icons as needed
};
function Skills() {
    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 70 },
        { name: 'Tailwind', level: 60 },
        { name: 'Node.js', level: 60 },
        { name: 'Python', level: 60 },
        { name: 'Flutter', level: 70 },
        { name: 'Flask', level: 85 },
        { name: 'CSS', level: 80 },
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
        <div id='SkillSection' className="relative  h-screen font-adlam " style={{ marginLeft: "5vw" }} ref={containerRef}>
            <h2 className="text-4xl font-bold  text-left">My Skills</h2>
            <div className="flex justify-center items-center">
                <div className="relative w-full h-screen flex justify-center items-center"> {/* Adjust height as needed */}
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item absolute flex flex-col items-center opacity-0">
                            <div className="w-24 h-24 relative" style={{borderRadius:"999px", backgroundColor:"" ,boxShadow:"7px 7px 5px rgba(0, 0, 0, 0.3) "}}>
                                <CircularProgressbar
                                    value={skill.level}
                                    // text={`${skill.level}%`}
                                    styles={buildStyles({
                                        pathColor: `rgba(13, 12, 29, ${skill.level / 100})`,
                                        textColor: '#1d4ed8',
                                        trailColor: '##0D0C1D',
                                        backgroundColor: '#f3f4f6',
                                    })}
                                    ref={el => skillRefs.current[index] = el}
                                />
                                <div className="absolute inset-0 flex justify-center items-center " style={{transform:"scale(1.4)"}}>
                                    {skillIcons[skill.name]}
                                </div>
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
