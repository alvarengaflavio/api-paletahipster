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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, distinctio!',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, totam!',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 4,
    sabor: 'Napotilano',
    descricao:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nisi?',
    foto: 'assets/images/napolitano.png',
    preco: 8.5,
  },
  {
    id: 5,
    sabor: 'Limão',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nihil.',
    foto: 'assets/images/limao.png',
    preco: 6.0,
  },
];

const findAllPaletasService = () => {
  return paletas;
};

const findByIdPaletaService = (id) => {
  return paletas.find((paleta) => paleta.id === id);
};

const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;
  newPaleta.id = newId;
  paletas.push(newPaleta);
  return newPaleta;
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id === id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id === id);
  return paletas.splice(paletaIndex, 1);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};