import p1 from './Projects/Project1.png';
import p2 from './Projects/Project2.png';
import p3 from './Projects/Project3.png';
import p4 from './Projects/Project4-2.png';
import p5 from './Projects/Project5.png';
import profile from './Profile/profile-pic1.png'
import profile2 from './Profile/profile-pic.png'
import profile3 from './Profile/profile-pic4.jpeg'
import Resume from './resume.pdf';

const SocialData = {
    LinkedIn: "https://www.linkedin.com/in/adilns786/",
    Instagram: "https://www.instagram.com/adilns786/",
    Twitter: "https://x.com/adilns786",
    Github: "https://github.com/AadilShah786",
    Youtube: "",
    Leetcode:"https://leetcode.com/u/adilns786/",
    Portfolio: "https://adilnshah.web.app/",
    Resume: Resume,
    Email: "adilns786@gmail.com"
}

const ProjectData = [
    {
        id: 1,
        image: p5,
        info: "Airaware provides the aqi ",
        title: "AirAware",
        link: "https://airaware-f22c0.web.app/",
        gitlink: "https://github.com/AadilShah786/AirAware",
        tech: ['CSS', 'JavaScript'],
    },
    {
        id: 2,
        image: p4,
        info: "feybh gfeib igufwbas uwids udwnj guwdib d    hu nhud NA UHDx hodangr 8yiofh fedi",
        title: "Trip Sync",
        link: null,
        gitlink: "https://github.com/AadilShah786/TripSync-Travel-Itinerary--Syrus24",
        tech: ['React', 'Tailwind', 'Flask', 'Python'],
    },
    {
        id: 3,
        image: p3,
        info: "feybh gfeib igufwbas uwids udwnj guwdib d    hu nhud NA UHDx hodangr 8yiofh fedi",
        title: "AQI Monitor",
        link: "https://air-monitor-5132e.web.app/",
        gitlink: "https://github.com/AadilShah786/Air-monitoring-react-",
        tech: ['React', 'CSS', 'JavaScript'],

    },
    // {
    //     id: 4,
    //     image: p2,
    //     info: "feybh gfeib igufwbas uwids udwnj guwdib d    hu nhud NA UHDx hodangr 8yiofh fedi",
    //     title: "Project 4",
    //     link: "https://airaware-f22c0.web.app/",
    //     gitlink: "https://airaware-f22c0.web.app/",
    // },
    // {
    //     id: 5,
    //     image: p1,
    //     info: "feybh gfeib igufwbas uwids udwnj guwdib d    hu nhud NA UHDx hodangr 8yiofh fedi",
    //     title: "Project 5",
    //     link: "https://airaware-f22c0.web.app/",
    //     gitlink: "https://airaware-f22c0.web.app/",
    // },
];


const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 70 },
    { name: 'Tailwind', level: 70 },
    { name: 'Node.js', level: 40 },
    { name: 'Python', level: 50 },
    { name: 'Flutter', level: 70 },
    { name: 'Flask', level: 85 },
    { name: 'CSS', level: 90 },
    // { name: 'Node.js', level: 75 },
    // { name: 'Python', level: 70 },
    // Add more skills as needed
]

const AboutMeData = {
    Profile: profile3,   //used in hero section
    Profile2: "https://www.svgrepo.com/show/497407/profile-circle.svg",
    // Profile2:profile3, //used in navbar
    Info: `Hello! I'm a third-year Computer Science Engineering student with a passion for creating innovative web applications and diving into the world of machine learning. Throughout my academic journey, I've actively participated in hackathons and contributed to my college's Computer Society of India (CSI) chapter.\n 
    I specialize in developing dynamic and responsive applications using technologies like React, Tailwind CSS, GSAP, Flutter, Flask, and Python. Currently, I'm expanding my expertise in machine learning, working on exciting projects in Jupyter Notebook.\n
    I love solving complex problems and transforming ideas into functional, aesthetically pleasing applications. If you're interested in collaborating or discussing tech, feel free to reach out!`, //used for animation dont forget to use /n for new line
    CGPA: "9.23",
    HSC: "",
    SSC: "",
}
const achievements = [
    {
        title: "Jr. Technical Officer CSI Vesit",
        description: "Received for outstanding performance and contributions to CSI in 2nd year of my engineering.",
        date: "Oct 2023 - April 2024",
    },
    {
        title: "Udemy Certification in Unity ",
        description: "Completed a comprehensive certification program in Unity game development from Udemy.",
        date: "2023",
    },
    // {
    //     title: "Certification in [Your Specialization]",
    //     description: "Completed a comprehensive certification program in [Your Specialization] from [Institution] in [Year].",
    //     date: "Year",
    // },
    // {
    //     title: "Top Performer at [Company]",
    //     description: "Recognized as a top performer for exceptional work and dedication in [Year].",
    //     date: "Year",
    // },
    // Add more achievements as needed
];

export { ProjectData, SocialData, skills, AboutMeData, achievements }