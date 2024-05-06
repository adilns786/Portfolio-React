import { gsap } from "gsap";

import { RoughEase } from "gsap/EasePack";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, RoughEase);

export const RotateDown = (element) => {
    const element2 = document.querySelector('.hero');

    // const centerX = (window.innerWidth *0.5);
    // console.log("applied",centerX-element.offsetWidth/2)

   // Define the animation for the first position
   gsap.to(element, {
    rotation: 0, // Rotate the element to 0 degrees
    y: window.innerHeight *1.4, // Move the element vertically to 750 pixels from the top
    x:  - (element.offsetWidth / 2), // Move the element horizontally to the center of the screen
    scrollTrigger: {
      trigger: element2,
      start: 10,
      end: "bottom -=10",
      scrub: true,
      markers: true, // For debugging
     
    }
  });
  
  

  // Define the animation for the second position
//   gsap.to(element, {
//     rotation: 720, // Rotate the element 720 degrees
//     scale: 1, // Scale the element to its original size
//     x: 300, // Translate the element horizontally by 300 pixels
//     duration: 1, // Animation duration
//     scrollTrigger: {
//       trigger: element,
//       start: "center center",
//       end: "bottom center",
//       scrub: true,
//     //   markers:true // Smoothly transitions the animation during scrolling
//     }
//   });
};

export const clearAnimation = (element) => {
    gsap.killTweensOf(element);
};
