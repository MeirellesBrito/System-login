const { verify, decode } = require("jsonwebtoken");
const jsonSecret = require("../config/jsonSecret");

module.exports = async (req, res, next) => { 
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Access token não informado" });
    }

    const [, accessToken] = token.split(" ");

    try {
        verify(accessToken, jsonSecret.secret);
        const { id, login } = await decode(accessToken);

        req.usuarioId = id;
        req.usuarioLogin = login;

        return next();
    } catch (error) {
        res.status(401).json({ message: "Usuário não autorizado" });
    }
};
