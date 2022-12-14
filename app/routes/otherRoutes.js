const otherController = require('../controllers/otherController');
const express = require('express');
const router = express.Router();

router.get('/', otherController.index);

router.get('/about', otherController.about);

router.use('/404', otherController.notFound);

module.exports = router;