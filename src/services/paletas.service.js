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

const updatePaletaService = async (id, paletaEdited) => {
  /* The default value for the new option of findByIdAndUpdate/findOneAndUpdate has changed to false, which means returning the old doc. So you need to explicitly set the option to true to get the new version of the doc, after the update is applied */
  const paletaUpdate = await Paletas.findByIdAndUpdate(id, paletaEdited, {
    new: true,
  });
  return paletaUpdate;
};

const deletePaletaService = async (id) => {
  // const deletedPaleta = await Paletas.findByIdAndDelete(id);
  // return deletedPaleta;
  return await Paletas.findByIdAndDelete(id);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
