require('dotenv').config();

const Sequelize = require('sequelize');

const databaseName = 'ecommerce_db';
const databaseUser = 'root';
const databasePassword = 'boca';
const host = 'localhost';
const dialect = 'mysql';

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: host,
  dialect: dialect,
  dialectOptions: {
    decimalNumbers: true,
  },
});
module.exports = sequelize;
