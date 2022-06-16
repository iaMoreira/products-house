const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController.index)
router.get('/produtos/:id', homeController.viewProduto)

module.exports = router;