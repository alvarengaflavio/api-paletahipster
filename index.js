const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/paletas.route');

if (process.env.NODE_ENV !== 'production') {
  const { mongoURL, PORT } = require('./config');
} 

const connectToDatabase = require('./src/database/database');
/* Novo trecho */
connectToDatabase();
/* Novo Trecho */

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});

/*    npm run dev     */
