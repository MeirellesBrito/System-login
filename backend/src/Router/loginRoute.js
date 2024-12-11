const { Router } = require("express");
const LoginControllers = require("../controllers/LoginControllers");

const router = Router();

router.post("/login", LoginControllers.cadastrar);
// .get("/loginsystem")
// .get("/loginsystem/id/:id")
// .put("/loginsystem/id/:id")
// .delete("/loginsystem/id/:id");

module.exports = router;
