const { Router } = require("express");
const EnderecoController = require("../controllers/EnderecoController");
const enderecoController = new EnderecoController();
const autenticado = require('../middleware/autenticado')
const router = Router()
 
router.use(autenticado)
router.post("/enderecos", (req, res) => enderecoController.create(req, res));
router.get("/enderecos", (req, res) => enderecoController.getAll(req, res)); 
router.get("/enderecos/:id", (req, res) => enderecoController.getOne(req, res));
router.put("/enderecos/:id", (req, res) => enderecoController.update(req, res));
router.delete("/enderecos/:id", (req, res) => enderecoController.delete(req, res));

module.exports = router;
 