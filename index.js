const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/paletas.route');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();


console.log(process.env.mongoURL);
/* Novo trecho */
connectToDatabase();
/* Novo Trecho */

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

/*    npm run dev     */
