import { gsap } from "gsap";

import { RoughEase } from "gsap/EasePack";
// import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, RoughEase,);

export const RotateDown = (element,setproject) => {
    const element2 = document.querySelector('.hero');

    // const centerX = (window.innerWidth *0.5);
    // console.log("applied",centerX-element.offsetWidth/2)

   // Define the animation for the first position
  //  gsap.to(element, {
  //   rotation: 0, // Rotate the element to 0 degrees
  //   y: window.innerHeight+ window.innerWidth *0.15 , // Move the element vertically to 750 pixels from the top
  //   x:  - (element.offsetWidth / 2), // Move the element horizontally to the center of the screen
  //   scrollTrigger: {
  //     trigger: element2,
  //     start: 10,
  //     end: "bottom -=10",
  //     scrub: true,
  //     markers: true, // For debugging
  //     // once:true,  //animates only once
  //   }
  // })
  gsap.fromTo(element, 
    {
      y: -(window.innerHeight+ window.innerWidth *0.20), // Initial state: Move up slightly
      x: (element.offsetWidth / 2),  // Initial state: Move right slightly
      rotation: -50,
      scale:0.8,
    },
    {
      y: 0, // Final state
      x: 0, // Final state
      rotation: 0, // Final 
      scale:1,
      scrollTrigger: {
        trigger: element.previousElementSibling, // Trigger animation based on the previous sibling element
        start: "top top", // When the top of the trigger element hits the top of the viewport
        end: "bottom top", // When the bottom of the trigger element hits the top of the viewport
        scrub: true, // Smooth scrubbing
        markers: true, // Markers to visualize the start and end points (for debugging)
        onLeave: () => setproject(false), // Call setProject(true) when the scroll leaves the end position
      }
    }
  );

};  





export const flipper=(element)=>{
// record some extra properties (optional)
const state = Flip.getState(".targets", { props: "backgroundColor,color" });
// animate from the previous state to the current one:
Flip.from(state, {
  duration: 1,
  ease: "power1.inOut",
  absolute: true,
  onComplete: myFunc,
});
}

export const clearAnimation = (element) => {
    gsap.killTweensOf(element);
};
