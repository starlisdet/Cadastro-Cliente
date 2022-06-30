import sq from "sequelize";
import database from "../services/bdorm.js";

import Cliente from './cliente.js';

const Usuario = database.define('usuarios', {
  id: {
    type: sq.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  login: {
    type: sq.STRING,
    allowNull: false,
  },
  senha: {
    type: sq.STRING,
    allowNull: false,
  },
  hash: {
    type: sq.STRING,
    allowNull: false,
  },
  tipo: sq.STRING,

});

export default Usuario;