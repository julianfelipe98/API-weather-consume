/**
 * yargs config file
 */
const city = {
        alias: "c",
        desc: "City for getting the wether",
        demand: true,
};
const argv = require('yargs').options({city}).argv;

module.exports = {argv}