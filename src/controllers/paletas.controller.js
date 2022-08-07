const paletasService = require('../services/paletas.service');
const mongoose = require('mongoose');

const findAllPaletasController = async (req, res) => {
  try {
    const allPaletas = await paletasService.findAllPaletasService();
    res.send(allPaletas);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const findByIdPaletaController = async (req, res) => {
  try {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      throw new Error('Invalid ID parameter');
    }
    const chosenPaleta = await paletasService.findByIdPaletaService(idParam);
    if (!chosenPaleta) {
      throw new Error('ID not found');
    }

    res.send(chosenPaleta);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const createPaletaController = async (req, res) => {
  try {
    const paleta = req.body;
    if (
      !paleta ||
      !paleta.sabor ||
      !paleta.descricao ||
      !paleta.foto ||
      !paleta.preco
    ) {
      throw new Error('Invalid Paleta Json body');
    }

    const newPaleta = await paletasService.createPaletaService(paleta);
    res.status(201).send(newPaleta);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const updatePaletaController = async (req, res) => {
  try {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      throw new Error('Invalid ID parameter');
    }

    const paletaEdit = req.body;
    if (
      !paletaEdit ||
      !paletaEdit.sabor ||
      !paletaEdit.descricao ||
      !paletaEdit.foto ||
      !paletaEdit.preco
    ) {
      throw new Error('Invalid Paleta Json body');
    }
    const updatedPaleta = await paletasService.updatePaletaService(
      idParam,
      paletaEdit,
    );
    res.send(updatedPaleta);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
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
    return res.status(400).send({ message: err.message });
  }
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
