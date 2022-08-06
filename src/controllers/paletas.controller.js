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

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Invalid ID!' });
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

  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    paletaEdit,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  try {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      throw new Error('ID not found!');
    }
    const deletedPaleta = await paletasService.deletePaletaService(idParam);
    if (deletedPaleta === null || deletedPaleta === null) {
      throw new Error('ID not found!');
    }

    res.send({
      message: 'Successfully deleted Palette!',
      palette: deletedPaleta,
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
