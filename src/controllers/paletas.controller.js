const paletasService = require('../services/paletas.service');

const findAllPaletasController = (req, res) => {
  const allPaletas = paletasService.findAllPaletasService();
  res.send(allPaletas);
};

const findByIdPaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenPaleta = paletasService.findByIdPaletaService(idParam);
  res.send(chosenPaleta);
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
};
