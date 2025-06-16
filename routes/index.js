import express from 'express';
import testController from '../controller/testController.js';
import initializeDb from '../config/db.js';
import studentController from '../controller/studentController.js';
import employeeController from '../controller/employeeController.js';

var router = express();

router.use('/test',testController());

initializeDb((db) => {
  router.use('/students',studentController({db}));
  router.use('/employees',employeeController({db}));
});

export default router;