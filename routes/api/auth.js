const express = require('express');
const router = express.Router();
require('dotenv').config() 

router.get('/test', async (req, res) => {
    try{
        const users = [
            {name: 'Isaac', cellphone: '3123123123'}
        ]

        if (users.length === 0) {
            return res.status(404).json({message: 'No hay usuarios'});
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: 'Error al obtener los usuarios'});
    }
});