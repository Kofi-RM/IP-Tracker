
const ip = document.getElementById("ip")
const locat = document.getElementById("location")
const timezone = document.getElementById("timezone")
const isp = document.getElementById("isp")
const submit = document.getElementById("submit-btn");
const ipBar = document.getElementById("ip-bar")

let lat;
let long;

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

    let response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_iQNiAqmMttP2ybQTj2MVnSvCwUDrA");

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
    locat.textContent = results.location?.city + ", " + results.location.region + " " + results.location.postalCode;
    timezone.textContent = results.location?.timezone + " UTC";
    isp.textContent = results.isp;
    lat = results.location.lat;
    long = results.location.lng;

    
map.setView([lat, long],13)
L.marker([lat, long]).addTo(map);
}

async function searchIp(searchIp) {
let response;
    if (isNaN(searchIp.replace(/\./g, ""))) {
    response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_iQNiAqmMttP2ybQTj2MVnSvCwUDrA&domain=${searchIp}`);
} else {
    response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_iQNiAqmMttP2ybQTj2MVnSvCwUDrA&ipAddress=${searchIp}`);
}


    let results = await response.json();

    console.log(results);
       ip.textContent = results.ip;
    locat.textContent = results.location?.city + ", " + results.location.region + " " + results.location.postalCode;
    timezone.textContent = results.location?.timezone + " UTC";
    isp.textContent = results.isp;
    lat = results.location.lat;
    long = results.location.lng;

    
map.setView([lat, long],13)
L.marker([lat, long]).addTo(map);
    }

    submit.addEventListener("click", () => {
        console.log(ipBar.value)
        const searchValue = ipBar.value;
        searchIp(searchValue);
    })
init();

