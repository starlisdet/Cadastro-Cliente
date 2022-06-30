import sq from "sequelize";
import database from "../services/bdorm.js";

import Usuario from './usuario.js';

const Cliente = database.define("clientes", {
  id: {
    type: sq.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: sq.STRING,
    allowNull: false,
  },
  idade: {
    type: sq.INTEGER,
  },
  cpf: {
    type: sq.STRING,
  },
  endereco: {
    type: sq.STRING,
  },
});

// Usuario.belongsTo(Cliente, {foreignKey: {
//   name: "idCliente",
// }})
// Cliente.hasOne(Usuario, {foreignKey: {
//   name: "idUsario",
// }})

export default Cliente;