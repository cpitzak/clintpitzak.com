function loadWeather() {
    fetch("https://8ilumi4c2b.execute-api.us-west-2.amazonaws.com/room-weather/weather", {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById('temp-f').innerHTML = Math.round(data.temp_f * 10) / 10;
        document.getElementById('humidity-percent').innerHTML = Math.round(data.humidity_percent * 10) / 10;
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
}
loadWeather();
setInterval(function() {
    loadWeather();
}, 3000);