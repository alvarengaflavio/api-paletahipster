const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/paletas.route');

const port = 3000;
const app = express();

/* Novo trecho */
app.use(express.json());
app.use(cors());
app.use('/paletas', routes);
/* Novo Trecho */

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

/*    npm run dev     */
