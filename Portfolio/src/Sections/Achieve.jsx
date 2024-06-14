import React from "react";
import { gsap } from "gsap";

function Achievements() {
    const animateOnScroll = () => {
        gsap.to(".element-to-animate", {
          y: () => -window.scrollY * 0.5, // Example LERP effect
          ease: "power3.out",
        });
      };
    const achievements = [
        {
            title: "Award for Excellence in [Your Field]",
            description: "Received for outstanding performance and contributions to [Your Field] in [Year].",
            date: "Year",
        },
        {
            title: "Certification in [Your Specialization]",
            description: "Completed a comprehensive certification program in [Your Specialization] from [Institution] in [Year].",
            date: "Year",
        },
        {
            title: "Top Performer at [Company]",
            description: "Recognized as a top performer for exceptional work and dedication in [Year].",
            date: "Year",
        },
        // Add more achievements as needed
    ];

    return (
        <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24" style={{marginLeft:"5vw"}}>
            <h2 className="text-4xl font-bold mb-8 text-center">Achievements</h2>
            <div className="grid gap-8 lg:grid-cols-2">
                {achievements.map((achievement, index) => (
                    <div key={index} className="element-to-animate bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-gray-700 mb-2">{achievement.description}</p>
                        <p className="text-gray-500 text-sm">{achievement.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
