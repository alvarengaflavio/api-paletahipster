const paletasService = require('../services/paletas.service');
const mongoose = require('mongoose');

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService();
  res.send(allPaletas);
};

const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID not valid!' });
  }

  const chosenPaleta = await paletasService.findByIdPaletaService(idParam);

  if (!chosenPaleta) {
    return res.status(400).send({ message: 'Paleta not found!' });
  }

  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;

  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  )
    return res.status(400).send({
      message: "You didin't fill all the required data fields",
    });

  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'ID not specified!' });
  }

  const paletaEdit = req.body;

  if (
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  )
    return res.status(400).send({
      message: "You didin't fill all the required data fields",
    });

  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam)
    return res.status(400).send({ message: 'ID not valid or not specified!' });

  const index = paletasService
    .findAllPaletasService()
    .findIndex((e) => Number(e.id) === idParam);

  if (index === -1)
    return res.status(400).send({ message: 'ID is not present' });

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
