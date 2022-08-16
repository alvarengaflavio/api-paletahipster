const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.mongoURL);

module.exports = {
  mongoURL: process.env.mongoURL,
  port: process.env.port,
};
