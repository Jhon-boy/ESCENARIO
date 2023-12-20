import { Router } from 'express';

import { getRol, getRoles } from '../Services/roles/controller.js';
import { editarLicencia, eliminarLicencia, getLicencia, getLicencias, insertarLicencia , uploadLicencias } from '../Services/licencias/controller.js';
import { DatosVar, editaVars } from '../Services/Configs/Controller.js';

// import { rolesRutas } from '../Services/roles/routes.js'
// const roles = require('../Services/roles/routes.js');


const router = new Router();

router.get('/config', DatosVar)
router.put('/config', editaVars);
router.get('/roles', getRoles);
router.get('/roles/:id', getRol);

router.get('/licencia', getLicencias);
router.get('/licencia/:id', getLicencia);
router.put('/licencia/:id', uploadLicencias, editarLicencia);
router.post('/licencia', uploadLicencias,  insertarLicencia);
router.delete('/licencia:id', eliminarLicencia);

    
// router.get('/autos', getAutos);
// router.get('/autos/:id', getAuto);
// router.post('/autos', upload, insertarAuto);
// router.delete('/autos/:id', eliminarAutos);
// // router.put('/autos/:id', upload, editarAutos);
// router.put('/autosfile/:id', editarAutosSinFoto);
// router.put('/autosEstado/:id', cambiarEstadoAuto)



export default router;