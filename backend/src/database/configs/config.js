require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: Number(process.env.MYSQLPORT),
    host: process.env.MYSQLHOST,
    dialect: process.env.MYSQL_DIALECT,
    logging: true,
    define: {
      timestamps: true,
      underscored: true,
    },
    timezone: '-03:00',
    dialectOptions: {
      useUTC: false
    }
  },
  test: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: Number(process.env.MYSQLPORT),
    host: process.env.MYSQLHOST,
    dialect: process.env.MYSQL_DIALECT,
    logging: true,
    define: {
      timestamps: true,
      underscored: true,
    },
    timezone: '-03:00',
    dialectOptions: {
      useUTC: false
    }
  },
  production: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: Number(process.env.MYSQLPORT),
    host: process.env.MYSQLHOST,
    dialect: process.env.MYSQL_DIALECT,
    logging: true,
    define: {
      timestamps: true,
      underscored: true,
    },
    timezone: '-03:00',
    dialectOptions: {
      useUTC: false
    }
  },
};
