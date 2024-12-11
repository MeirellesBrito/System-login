require('dotenv').config(); // Carrega o .env

const app = require('./app');

// Obtém o PORT do arquivo .env ou usa 3000 como padrão
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});
 