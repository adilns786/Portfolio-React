// src/BlobAnimation.js
import React, { useEffect, useRef } from 'react';
import KUTE from 'kute.js';
import './BlobAnimation.css';

// Extracted path data from SVG files
const blobPath1 = "M125.4 -137.9C150.4 -100.4 150.2 -50.2 159.5 9.3C168.8 68.8 187.7 137.7 162.7 187.7C137.7 237.7 68.8 268.8 1.8 267.1C-65.3 265.3 -130.6 230.6 -168.2 180.6C-205.9 130.6 -216 65.3 -216.1 -0.1C-216.2 -65.5 -206.4 -131.1 -168.7 -168.6C-131.1 -206.1 -65.5 -215.5 -7.7 -207.9C50.2 -200.2 100.4 -175.4 125.4 -137.9"; // Example path data from blob1.svg
const blobPath2 = "M144.3 -159.6C169.3 -119.3 159.6 -59.6 165.2 5.5C170.7 70.7 191.4 141.4 166.4 177.1C141.4 212.8 70.7 213.4 4.4 209C-62 204.7 -124 195.3 -159.1 159.6C-194.3 124 -202.7 62 -191.2 11.4C-179.8 -39.1 -148.6 -78.3 -113.4 -118.6C-78.3 -158.9 -39.1 -200.5 10.3 -210.7C59.6 -221 119.3 -199.9 144.3 -159.6"; // Example path data from blob2.svg
const blobPath3 = "M178.2 -153.2C228.2 -128.2 264.1 -64.1 251.7 -12.4C239.4 39.4 178.7 78.7 128.7 120.2C78.7 161.7 39.4 205.4 -6.2 211.6C-51.9 217.9 -103.7 186.7 -135.5 145.2C-167.4 103.7 -179.2 51.9 -188.1 -9C-197.1 -69.8 -203.2 -139.5 -171.4 -164.5C-139.5 -189.5 -69.8 -169.8 -2.8 -166.9C64.1 -164.1 128.2 -178.2 178.2 -153.2"; // Example path data from blob3.svg
const blobPath4 = "M144.3 -159.6C169.3 -119.3 159.6 -59.6 165.2 5.5C170.7 70.7 191.4 141.4 166.4 177.1C141.4 212.8 70.7 213.4 4.4 209C-62 204.7 -124 195.3 -159.1 159.6C-194.3 124 -202.7 62 -191.2 11.4C-179.8 -39.1 -148.6 -78.3 -113.4 -118.6C-78.3 -158.9 -39.1 -200.5 10.3 -210.7C59.6 -221 119.3 -199.9 144.3 -159.6"; // Example path data from blob4.svg

const BlobAnimation = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const tween1 = KUTE.fromTo(
      blobRef.current,
      { path: blobPath1 },
      { path: blobPath2 },
      { duration: 2000, yoyo:true ,repeat:999}
    );

    const tween2 = KUTE.fromTo(
      blobRef.current,
      { path: blobPath2 },
      { path: blobPath3 },
      { duration: 2000, yoyo:true,repeat:999}
    );

    const tween3 = KUTE.fromTo(
      blobRef.current,
      { path: blobPath3 },
      { path: blobPath4 },
      { duration: 2000,  }
    );

    const tween4 = KUTE.fromTo(
      blobRef.current,
      { path: blobPath4 },
      { path: blobPath1 },
      { duration: 2000,  }
    );

    tween1.chain(tween2);
    tween2.chain(tween3);
    tween3.chain(tween4);
    tween4.chain(tween1);

    tween1.start();
  }, []);

  return (
    <div className="blob-container">
      <svg className="blob-svg" viewBox="-250 -250 500 500">
        <path ref={blobRef} d={blobPath1} fill="none" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default BlobAnimation;
