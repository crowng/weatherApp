// init local storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();

// init weather class
const weather = new Weather(weatherLocation.location);
const ui = new UI();

// get weather when dom load
document.addEventListener("DOMContentLoaded", getWeather);

// change location event
document.getElementById("w-change-btn"),
  addEventListener("click", e => {
    const oldlocation = document.getElementById("city").value;
    const location = oldlocation.charAt(0).toUpperCase() + oldlocation.slice(1);
    weather.changeLocation(location);

    // set location in local storage
    storage.setLocationData(location);

    // get and display weather
    getWeather();

    // close modal
    $("#locModal").modal("hide");
  });

// weather.changeLocation("Miami");

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}
