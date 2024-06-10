import { gsap } from "gsap";

import { RoughEase } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, RoughEase,Flip);

export const RotateDown = (element) => {
    const element2 = document.querySelector('.hero');

    // const centerX = (window.innerWidth *0.5);
    // console.log("applied",centerX-element.offsetWidth/2)

   // Define the animation for the first position
   gsap.to(element, {
    rotation: 0, // Rotate the element to 0 degrees
    y: window.innerHeight+ window.innerWidth *0.15 , // Move the element vertically to 750 pixels from the top
    x:  - (element.offsetWidth / 2), // Move the element horizontally to the center of the screen
    scrollTrigger: {
      trigger: element2,
      start: 10,
      end: "bottom -=10",
      scrub: true,
      markers: true, // For debugging
      // once:true,  //animates only once
    }
  });
  
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
