import express from 'express';
import testController from '../controller/testController.js';
import initializeDb from '../config/db.js';

var router = express();

router.use('/test',testController());

initializeDb((db) => {});

export default router;