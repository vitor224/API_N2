const express = require("express");
const Produto = require("../controller/produto_controller.js");

const router = express.Router()

router.get('/Buscar', Produto.all)
router.post('/Create', Produto.create)
router.put('/Update/:id', Produto.update)
router.delete('/Delete/:id', Produto.delete)

module.exports = {router};