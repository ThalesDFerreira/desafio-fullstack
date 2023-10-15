'use strict';
const { DataTypes } = require('sequelize');
const conn = require('../connection');

const Messages = conn.define(
  'Messages',
  {
    // Model attributes are defined here
    client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operator: {
      type: DataTypes.STRING,
      allowNull: false,
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
