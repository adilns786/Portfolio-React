import KUTE from 'kute.js'; // Make sure the path to your KUTE library is correct

const BlobFunction = () => {
    console.log("animation blobber");

    const path1 = document.querySelector("#blob1").getAttribute("d");
    const path2 = document.querySelector("#blob2").getAttribute("d");
    const path3 = document.querySelector("#blob3").getAttribute("d");
    const path4 = document.querySelector("#blob4").getAttribute("d");

    const tween1 = KUTE.fromTo(
        '#blob1',
        { path: path1 },
        { path: path2 },
        { duration: 3000, yoyo: false }
    );

    const tween2 = KUTE.fromTo(
        '#blob1',
        { path: path2 },
        { path: path3 },
        { duration: 3000, yoyo: false }
    );

    const tween3 = KUTE.fromTo(
        '#blob1',
        { path: path3 },
        { path: path4 },
        { duration: 3000, yoyo: false }
    );

    const tween4 = KUTE.fromTo(
        '#blob1',
        { path: path4 },
        { path: path2 },
        { duration: 3000, yoyo: false }
    );

    // tween1.chain(tween2);
    tween2.chain(tween3);
    tween3.chain(tween4);
    tween4.chain(tween2); 
    // This makes it loop back to the start

    tween2.start();
};

export default BlobFunction;
