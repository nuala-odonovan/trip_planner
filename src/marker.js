import mapboxgl, { Marker } from 'mapbox-gl';

function buildMarkerIcon(type) {
    let testMarker = document.createElement('div');
    testMarker.classList.add("marker", `${type}`);
    let activityIconHTML = '<img src = "https://i.imgur.com/WbMOfMl.png">';
    let hotelIconHTML = '<img src = "https://i.imgur.com/D9574Cu.png">';
    let restaurantIconHTML = '<img src = "https://i.imgur.com/cqR6pUI.png">';
    if(type==='activity'){
        testMarker.innerHTML = activityIconHTML;
    } else if(type === 'hotel'){
        testMarker.innerHTML = hotelIconHTML;
    } else if(type === 'restaurant'){
        testMarker.innerHTML = restaurantIconHTML;
    }
    document.body.appendChild(testMarker)
    return testMarker;
}

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    return new mapboxgl.Marker(buildMarkerIcon(type))
    .setLngLat(coords)
};

export default buildMarker;
