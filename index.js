const express = require('express');
const port = 3000;
const app = express();

/* Novo trecho */
app.use(express.json());
/* Novo Trecho */

/* NOVO TRECHO */
const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.jpg',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

/* NOVO TRECHO */
/* GET ALL */
app.get('/paletas/find-all', (req, res) => {
  res.send(paletas);
});

/* GET BY ID */
app.get('/paletas/paleta-id/:id', (req, res) => {
  const idParam = +req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id === idParam);
  res.send(chosenPaleta);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
