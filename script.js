var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);
async function getIp() {

    let response = await fetch("https://geo.ipify.org/api/v2/country?apiKey=at_iQNiAqmMttP2ybQTj2MVnSvCwUDrA");

let results = await response.json();
console.log(results)
return results;
}


getIp();