const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/paletas.route');
const port = {};

process.env.NODE_ENV !== 'production'
  ? (require('dotenv').config(),
    (port.port = process.env.devPORT),
    (port.url = process.env.devURL))
  : ((port.port = process.env.PORT), (port.url = port.port));

const connectToDatabase = require('./src/database/database');
/* Novo trecho */
connectToDatabase();
/* Novo Trecho */

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

app.listen(port.port, () => {
  console.log(`Server listening on ${port.url}`);
});

/*    npm run dev     */
