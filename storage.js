class Storage {
  constructor() {
    this.location;
    this.defaultLoaction = "Los Angeles";
  }

  // Get Location Data
  getLocationData() {
    if (localStorage.getItem("location") === null) {
      this.location = this.defaultLoaction;
    } else {
      this.location = localStorage.getItem("location");
    }

    return {
      location: this.location
    };
  }

  // Set Location Data
  setLocationData(location) {
    localStorage.setItem("location", location);
  }
}
