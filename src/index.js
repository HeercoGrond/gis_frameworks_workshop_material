const lon = 5.8;
const lat = 53.2;

//#region Mapbox GL code
import mapboxToken from './token.json'
import mapboxgl from 'mapbox-gl';

console.log(mapboxToken);

mapboxgl.accessToken = mapboxToken.token;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});

var marker = new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map);

map.addControl(new mapboxgl.NavigationControl());
//#endregion

//#region OpenLayers code
// import ol from 'openlayers';
// import image from './test.png';

// var iconStyle = new ol.style.Style({
//     image: new ol.style.Icon({
//         src: image,
//         scale: 0.1
//     })
// });

// var iconFeature = new ol.Feature({
//     geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
// });

// var vectorSource = new ol.source.Vector({
//     features: [iconFeature]
// });

// var vectorLayer = new ol.layer.Vector({
//     source: vectorSource,
//     style: iconStyle
// });

// var map = new ol.Map({
//     target: 'map',
//     layers: [
//         new ol.layer.Tile({
//             source: new ol.source.XYZ({
//                 url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//             })
//         }),
//         vectorLayer
//     ],
//     view: new ol.View({
//         center: ol.proj.fromLonLat([lon, lat]),
//         zoom: 10
//     })
// });

// map.on('moveend', (event) => {
//     console.log("listener for mapmovement");
// });

//#endregion

//#region Leaflet code

// import L from 'leaflet';

// var map = L.map('map').setView([53.2, 5.8], 10);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// var marker = L.marker([lat, lon]).addTo(map);

//#endregion

