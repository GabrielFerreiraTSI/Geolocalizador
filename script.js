let h2 = document.querySelector("h2");
var map;

function sendSucess(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;

    if (map === undefined) {
        map = L.map("mapid").setView([pos.coords.latitude, pos.coords.longitude], 13);
    } else {
        map.remove();
        map = L.map("mapid").setView([pos.coords.latitude, pos.coords.longitude], 13);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map).bindPopup("Estou aqui!").openPopup();
}

function sendError(err) {
    console.log(err);
}

var watchID = navigator.geolocation.getCurrentPosition(sendSucess, sendError, {
    enableHighAccuracy: true,
    timeout: 5000
})

//navigator.geolocation.clearWatch(watchID);