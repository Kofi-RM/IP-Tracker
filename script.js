
const ip = document.getElementById("ip")
const locat = document.getElementById("location")
const timezone = document.getElementById("timezone")
const isp = document.getElementById("isp")

let ipInfo;
let locationInfo;
let timezoneInfo;
let ispInfo;

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);
async function getIp() {

    let response = await fetch("https://geo.ipify.org/api/v2/country?apiKey=at_iQNiAqmMttP2ybQTj2MVnSvCwUDrA");

let results = await response.json();

ipInfo = results.ip;
console.log(results.ip)
console.log(results);
return results;
}

async function init() {

    const results = await getIp();

    console.log(results.location)
     ip.textContent = results.ip;
    locat.textContent = results.location?.region + " " + results.location.country;
    timezone.textContent = results.location?.timezone + " UTC";
    isp.textContent = results.isp.split;
}

// init();
