const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

router.get('/', Controller.homePage);
router.get('/:id', Controller.candyID)
router.post('/create', Controller.createCandy);
router.post('/createCategory', Controller.createCategory);

module.exports = router;