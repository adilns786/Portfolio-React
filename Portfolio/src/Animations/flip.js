// animationUtils.js
import gsap from 'gsap';
import { Flip } from 'gsap/all';

// Ensure that Flip plugin is registered with GSAP
gsap.registerPlugin(Flip);

export const extra=(state)=>{
    // const state = Flip.getState(element);
    console.log(state);
    Flip.from(state, {
        absolute: true, // uses position: absolute during the flip to work around flexbox challenges
        duration: 1, 
        simple:true,
        // stagger: 0.1,
        // ease: "power1.inOut"
        // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
      });
}

export const animateGridPosition = (initialDivRef, updatedDivRef, initialPosition, updatedPosition, onCompleteCallback) => {
    gsap.to(initialDivRef.current, {
      x: updatedPosition.x,
      y: updatedPosition.y,
      duration: 0.5,
      ease: 'power2.inOut',
      modifiers: {
        x: gsap.utils.unitize((value) => parseFloat(value) + 'px'),
        y: gsap.utils.unitize((value) => parseFloat(value) + 'px'),
      },
      scrollTrigger: {
        trigger: updatedDivRef.current,
        start: 'top center', // Adjust as needed
        end: 'bottom center', // Adjust as needed
        scrub: true,
      },
      onComplete: () => {
        if (onCompleteCallback) {
          onCompleteCallback();
        }
      }
    });
  };
  