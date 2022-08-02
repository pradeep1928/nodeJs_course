const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("please provide an address");
} else {
  geoCode(address, (error, {location}) => {
    if (error) {
      return console.log(error);
    }

    forecast(location, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
