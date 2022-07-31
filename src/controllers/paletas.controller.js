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

const createPaletaController = (req, res) => {
  const paleta = req.body;
  const newPaleta = paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletaEdit = req.body;
  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const deletedPaleta = paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deleted with success!', paleta: deletedPaleta });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
