const { Router } = require('express');
const AuthControllers = require('../controllers/AuthControllers'); // Importação correta da classe

const router = Router();

// Chamada direta do método estático
router.post('/auth/login', AuthControllers.login);

module.exports = router;
