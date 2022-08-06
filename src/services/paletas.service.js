// const db = require('../../mocks/paletas');
// const paletas = db.paletas;

const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const paletas = await Paletas.find();
  return paletas;
};

const findByIdPaletaService = async (id) => {
  return await Paletas.findById(id);
};

const createPaletaService = async (newPaleta) => {
  const paletaCreated = await Paletas.create(newPaleta);
  return paletaCreated;
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
