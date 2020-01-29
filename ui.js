class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.string = document.getElementById("w-string");
    this.desc = document.getElementById("w-desc");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.windSpeed = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name}, ${weather.location.region}`;
    this.string.textContent =
      Math.floor((weather.current.temperature * 9) / 5 + 32) + " F";
    this.desc.textContent = weather.current.weather_descriptions;
    this.icon.setAttribute("src", weather.current.weather_icons);
    this.humidity.textContent = `Relative Humidity:${Math.floor(
      (weather.current.humidity * 9) / 5 + 32
    )} F`;
    this.feelsLike.textContent = `Feels Like: ${Math.floor(
      (weather.current.feelslike * 9) / 5 + 32
    )} F`;
    this.windSpeed.textContent = `Wind Speed: ${weather.current.wind_speed}`;
  }
}
