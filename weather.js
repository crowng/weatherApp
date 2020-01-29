class Weather {
  constructor(location, region) {
    this.apiKey = "71aa0d3fe447f70136b18d477f5e54d4";
    this.location = location;
    this.region = region;
  }

  // fetch weather from api

  async getWeather(location) {
    const weatherResponse = await fetch(
      `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.location}`
    );

    const weatherData = await weatherResponse.json();

    return weatherData;
  }

  // change weather location
  changeLocation(location) {
    this.location = location;
  }
}
