const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

router.get('/', Controller.homePage);
router.post('/create', Controller.createCandy);

module.exports = router;