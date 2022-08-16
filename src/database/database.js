const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.mongoURL ||'mongodb://localhost:27017/paletas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB CONNECTED!'))
    .catch((error) => {
      console.log(`Error connecting to MongoDB.\nError: ${error}`);
    });
};

module.exports = connectToDatabase;
