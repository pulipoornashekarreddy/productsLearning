import express from 'express';
import testController from '../controller/testController.js';

var router = express();

router.use('/test',testController());

export default router;