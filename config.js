  require('dotenv').config();


module.exports = {
  mongoURL: process.env.mongoURL,
  PORT: process.env.PORT,
  devPORT: process.env.devPORT,
  devURL: process.env.devURL,
};
