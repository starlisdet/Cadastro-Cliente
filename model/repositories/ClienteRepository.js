import ClienteRepository from '../entities/cliente.js';
import database from '../services/bdorm.js';

//criando a tabela
console.log("CRIANDO TABELA AAAAAAAAAAA")
const result = await database.sync({
  force: false
});
console.log(result);

//crud
export async function selectCliente() {
  return await ClienteRepository.findAll();
}

export async function getClienteId(id) {
  return await ClienteRepository.findByPk(id)
}

export async function insertCliente(cliente) {
  return await ClienteRepository.create(cliente);
}

export async function deleteCliente(id) {
  return await ClienteRepository.destroy({where: {id: id}});
}

export async function updateCliente(cliente) {
  return await ClienteRepository.upsert(cliente);
}

var usuarioBanco = {
  deleteCliente,
  getClienteId,
  insertCliente,
  selectCliente,
  updateCliente,
};

export default usuarioBanco;