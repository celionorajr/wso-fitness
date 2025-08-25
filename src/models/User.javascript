// src/models/User.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

class User extends Model {}

User .init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Admin', 'Professor', 'Aluno'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User ',
});

module.exports = User;
