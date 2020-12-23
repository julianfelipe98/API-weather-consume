const axios = require("axios");
const apiKey = require("../config/api").apiConfig.apiKey;
/**
 * method for getting the weather from a city
 * @date 2020-12-22
 * @param {String} city
 * @returns {String}
 */
const getWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return `${city}s weather is around ${response.data.main.temp} celcius degrees`;
  } catch (error) {
    return `${city}s weather could not be determinated`;
  }
};

module.exports = {
  getWeather,
};