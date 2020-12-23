const argv = require("./config/yargs").argv;
const weather = require("./weather/weather");
const city =encodeURI(argv.city);

weather.getWeather(city).then(console.log).catch(console.log);