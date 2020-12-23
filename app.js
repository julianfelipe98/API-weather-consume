const argv = require("./config/yargs").argv;
const wether = require("./wether/wether");
const city =encodeURI(argv.city);

wether.getWether(city).then(console.log).catch(console.log);