const ENV = process.env.NODE_ENV || 'development';
const devData = require("./dev-data");

const data = { development: devData };

module.exports = data[ENV];