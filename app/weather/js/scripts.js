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
        const temp = Math.round(data.temp_f * 10) / 10;
        document.getElementById('title').innerHTML = temp + '&degF';
        document.getElementById('temp-f').innerHTML = temp;
        const spinnerElem = document.getElementById('spinner');
        if (spinnerElem) {
            spinnerElem.remove();
            const tempReaderElem = document.getElementById('temp-reader');
            tempReaderElem.style = "";
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
}
loadWeather();
setInterval(function() {
    loadWeather();
}, 300000);
