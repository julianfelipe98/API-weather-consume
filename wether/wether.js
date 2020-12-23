const axios = require("axios");
const apiKey = require("../config/api").apiConfig.apiKey;
/**
 * method for getting the wether from a city
 * @date 2020-12-22
 * @param {String} city
 * @returns {String}
 */
const getWether = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return `${city} wether is around ${response.data.main.temp} celcius degrees`;
  } catch (error) {
    return `${city} wether could not be determinated`;
  }
};

module.exports = {
  getWether,
};