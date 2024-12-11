const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");
const usuarioController = new UsuarioController();
const autenticado = require('../middleware/autenticado')
const router = Router()
 
router.post("/usuarios", (req, res) => usuarioController.create(req, res));
router.use(autenticado)
router.get("/usuarios", (req, res) => usuarioController.getAll(req, res)); 
router.get("/usuarios/:id", (req, res) => usuarioController.getOne(req, res));
router.put("/usuarios/:id", (req, res) => usuarioController.update(req, res));
router.delete("/usuarios/:id", (req, res) => usuarioController.delete(req, res));

module.exports = router;
 