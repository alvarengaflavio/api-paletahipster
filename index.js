const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/paletas.route');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const port = process.env.NODE_ENV !== 'production' ?  process.env.PORT : 3000;

const connectToDatabase = require('./src/database/database');
/* Novo trecho */
connectToDatabase();
/* Novo Trecho */

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

/*    npm run dev     */
