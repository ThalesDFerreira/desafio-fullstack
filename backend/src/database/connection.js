require('dotenv').config();
const { Sequelize } = require('sequelize');

const MYSQL_HOST = process.env.MYSQLHOST;
const MYSQL_USER = process.env.MYSQLUSER;
const MYSQL_PASSWORD = process.env.MYSQLPASSWORD;
const MYSQL_DB_NAME = process.env.MYSQLDATABASE;
const MYSQL_DIALECT = process.env.MYSQL_DIALECT;
const MYSQL_PORT = process.env.MYSQLPORT;

const connection = new Sequelize(MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: MYSQL_DIALECT,
  port: MYSQL_PORT,
  timezone: '-03:00',
});

module.exports = connection;
