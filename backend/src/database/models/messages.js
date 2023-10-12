'use strict';
const { DataTypes } = require('sequelize');
const conn = require('../connection');

const Messages = conn.define(
  'Messages',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

module.exports = Messages;
