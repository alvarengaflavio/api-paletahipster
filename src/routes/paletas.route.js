const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const route = require('express').Router();
const controllerPaletas = require('../controllers/paletas.controller');
const {
  validadeId,
  validadeBodyObject,
} = require('../middlewares/paleta.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

/* GET ALL */
route.get('/find-all', controllerPaletas.findAllPaletasController);
/* GET BY ID */
route.get(
  '/paleta-id/:id',
  validadeId,
  controllerPaletas.findByIdPaletaController,
);
/* CREATE PALETA */
route.post(
  '/create',
  validadeBodyObject,
  controllerPaletas.createPaletaController,
);
/* UPDATE BY ID */
route.put(
  '/update/:id',
  validadeId,
  validadeBodyObject,
  controllerPaletas.updatePaletaController,
);
/* DELETE BY ID */
route.delete(
  '/delete/:id',
  validadeId,
  controllerPaletas.deletePaletaController,
);

module.exports = route;
