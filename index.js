const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/paletas.route');

const port = {};
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
process.env.NODE_ENV !== 'production'
  ? (port.port = 3000)
  : (port.port = process.env.PORT);

const connectToDatabase = require('./src/database/database');
/* Novo trecho */
connectToDatabase();
/* Novo Trecho */

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

app.listen(port.port, () => {
  console.log(`Server listening on ${port.port}`);
});

/*    npm run dev     */
