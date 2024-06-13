import React from "react";

function AboutMe() {
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24" style={{marginLeft:"5vw"}}>
            <div className="flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <img
                        src="your-image-url.jpg"
                        alt="Your Name"
                        className="rounded-full shadow-md w-48 h-48 object-cover mx-auto md:mx-0"
                    />
                </div>
                {/* Text Section */}
                <div className="md:w-2/3 md:pl-12">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700 mb-4">
                        Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. With a passion for [Your Passion], I have been working in the field of [Your Field] for [X] years. I specialize in [Your Specialization] and have a keen interest in [Your Interests].
                    </p>
                    <p className="text-gray-700 mb-4">
                        My journey started [Your Background Story] and since then, I've had the privilege of working with some amazing teams and clients. My mission is to [Your Mission or Vision].
                    </p>
                    <h3 className="text-2xl font-semibold mb-2">Skills & Expertise</h3>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                        <li>Skill 4</li>
                    </ul>
                    <h3 className="text-2xl font-semibold mb-2">Education & Certifications</h3>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li>Degree or Certification 1</li>
                        <li>Degree or Certification 2</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
