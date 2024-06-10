import KUTE from 'kute.js'; // Make sure the path to your KUTE library is correct

const BlobFunction = () => {
    console.log("animation blobber");
    const tween = KUTE.fromTo(
        '#blob1',
        { path: document.querySelector("#blob1").getAttribute("d") },
        { path: document.querySelector("#blob2").getAttribute("d") },
        { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
};


export default BlobFunction;