const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1Ijoid2dyaWZmaW4xMyIsImEiOiJjanNmZThqZTgwNTY2NDR0N2FpcWhiN21yIn0.z913-AGo9Vpf6OLehajKgQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
console.log(marker)
marker.addTo(map);
