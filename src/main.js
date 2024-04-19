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

window.addEventListener('scroll', () => {
    // if the user has scrolled to the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      confetti({ origin: { y: 1 }}); // move origin to bottom center
    }
});

//d3script1
