import { useState,useEffect } from "react";
import React from "react";
import { gsap } from "gsap";
import { achievements } from "../assets/data";

function Achievements() {
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
    const animateOnScroll = () => {
        gsap.to(".element-to-animate", {
            y: () => -window.scrollY * 0.5, // Example LERP effect
            ease: "power3.out",
        });
    };
    

    return (
        <div className="mb-12 px-6 md:px-12 lg:px-24 font-adlam w-full
        xs:px-4 " 
        // style={{ width: `${screen > 480 ? '95vw' : '100vw'}`, marginLeft: `${screen > 480 ? '5vw' : '0'}`}}
        >
            {/* <h2 className="text-4xl font-bold mb-8 text-center">Achievements</h2> */}
            <div className="grid gap-8  lg:grid-cols-2">
                {achievements.map((achievement, index) => (
                    <div key={index} className="bg-white element-to-animate  rounded-lg shadow-md">
                    <div  className=" bg-beta bg-opacity-25 p-6  rounded-lg 
                    xs:p-4">
                        <h3 className="text-2xl font-semibold mb-2 xs:text-lg">{achievement.title}</h3>
                        <p className="text-gray-700  mb-2 xs:text-sm text-justify">{achievement.description}</p>
                        <p className="text-gray-500 text-sm xs:text-xs">{achievement.date}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
