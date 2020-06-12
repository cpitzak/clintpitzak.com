fetch("https://8ilumi4c2b.execute-api.us-west-2.amazonaws.com/room-weather/weather", {
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
      }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson.ip);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });