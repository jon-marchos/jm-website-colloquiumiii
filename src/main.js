import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import QRCode from "qrcode";
import confetti from "canvas-confetti";

// mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ud2FzaGVyZSIsImEiOiJja3A2NTQ4b2swbzN2MnB0ODU2MTJnNGt3In0.FfGZwDnaq0VL2mficPz7Ow';
// const map = new mapboxgl.Map({
//   container: 'map', // container ID
//   center: [-73.997, 40.706], // starting position [lng, lat]
//   zoom: 13 // starting zoom
// });

// await QRCode.toCanvas(
//   document.getElementById('qr'),
//   'https://www.poetryfoundation.org/poems/43262/the-bridge-to-brooklyn-bridge',
//   { margin: 0}
// );

document.addEventListener("DOMContentLoaded", function() {
    var animated = false;  // Flag to ensure animation runs only once

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function runAnimation() {
        if (!animated && isElementInViewport(document.getElementById('graph4'))) {
            animated = true;
            // Your D3.js animation code here
            console.log('Animating graph4');
        }
    }

    window.addEventListener('scroll', runAnimation);
    runAnimation(); // Run on initial load in case the element is already in view
});