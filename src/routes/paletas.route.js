const route = require('express').Router();
const controllerPaletas = require('../controllers/paletas.controller');

/* GET ALL */
route.get('/find-all', controllerPaletas.findAllPaletasController);
/* GET BY ID */
route.get('/paleta-id/:id', controllerPaletas.findByIdPaletaController);

module.exports = route;
