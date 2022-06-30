import sq from "sequelize";
import database from "../services/bdorm.js";

const Produto = database.define('produto', {
  id: {
    type: sq.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  valor: sq.FLOAT,
  qntdEstoque: sq.FLOAT,
  desc: sq.STRING,
  imageURL: sq.STRING
});

export default Produto;