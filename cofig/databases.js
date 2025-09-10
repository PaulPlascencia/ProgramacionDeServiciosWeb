require('dotenv').config();

const {Sequelize} = require('sequelize');

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: process.env.DB_HOST,
    dialect: 'mysql'

});


module.exports = sequelize; 