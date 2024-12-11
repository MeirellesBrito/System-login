const { Router } = require("express");
const TelefoneController = require("../controllers/TelefoneController");
const telefoneController = new TelefoneController();
const autenticado = require('../middleware/autenticado')
const router = Router()
 
router.use(autenticado)
router.post("/telefones", (req, res) => telefoneController.create(req, res));
router.get("/telefones", (req, res) => telefoneController.getAll(req, res)); 
router.get("/telefones/:id", (req, res) => telefoneController.getOne(req, res));
router.put("/telefones/:id", (req, res) => telefoneController.update(req, res));
router.delete("/telefones/:id", (req, res) => telefoneController.delete(req, res));

module.exports = router;
 