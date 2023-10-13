'use strict';
const { DataTypes } = require('sequelize');
const conn = require('../connection');

const Users = conn.define(
  'Users',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

module.exports = Users;
