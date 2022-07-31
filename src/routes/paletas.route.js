const route = require('express').Router();
const controllerPaletas = require('../controllers/paletas.controller');

/* GET ALL */
route.get('/find-all', controllerPaletas.findAllPaletasController);
/* GET BY ID */
route.get('/paleta-id/:id', controllerPaletas.findByIdPaletaController);
/* CREATE PALETA */
route.post('/create', controllerPaletas.createPaletaController);
/* UPDATE BY ID */
route.put('/update/:id', controllerPaletas.updatePaletaController);
/* DELETE BY ID */
route.delete('/delete/:id', controllerPaletas.deletePaletaController);

module.exports = route;
