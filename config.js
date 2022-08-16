const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongoURL: process.env.mongoURL,
  port: process.env.port,
};
