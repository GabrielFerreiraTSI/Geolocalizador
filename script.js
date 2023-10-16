let h2 = document.querySelector("h2");

function sendSucess(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;
}

function sendError(err) {
    console.log(err);
}

var watchID = navigator.geolocation.getCurrentPosition(sendSucess, sendError, {
    enableHighAccuracy: true,
    timeout: 5000
})

//navigator.geolocation.clearWatch(watchID);