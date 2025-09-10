const express = require('express');
const sequelize = require('./cofig/databases.js');
const routes = require('./routes/index.js');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

async function startServer(){
    try {
        await sequelize.authenticate();
        console.log('Conexion exitosa a la base de datos');
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

app.use(routes.unprotectedRoutes);

startServer();