// Add console.log to check logic.js is being accessed in the Chrome console
console.log("working");

// Create the map object with a center and zoom level -- approximate geographical center of US
let map = L.map('mapid').setView([34.0522, -118.2437, 14);


//  Add a marker for Los Angeles, California

L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);

// Create the tile layer for map background
// We create the tile layer that will be the background of our map.
// Dark Mode: 
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);