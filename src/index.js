import mapboxgl, { Marker } from 'mapbox-gl';
const marker = document.getElementById('marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVjY2EwMjAyIiwiYSI6ImNra2U4OHVpYzA5dnYydWp6NGcwMjVubjAifQ.sXvk2AHWtGjok2-H_BvEAw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
