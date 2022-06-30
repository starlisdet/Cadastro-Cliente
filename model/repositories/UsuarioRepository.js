import UsuarioRepository from '../entities/usuario.js';
import database from '../services/bdorm.js';

//criando a tabela
console.log("CRIANDO TABELA AAAAAAAAAAA")
const result = await database.sync({
  force: false
});
console.log(result);

//crud
export async function selectUsuario() {
  return await UsuarioRepository.findAll();
}

export async function getUsuarioId(id) {
  return await UsuarioRepository.findByPk(id)
}

export async function login(nome, senha) {
  return await UsuarioRepository.findAll({where: {nome: nome, senha: senha}});
}

export async function insertUsuario(usuario) {
  return await UsuarioRepository.create(usuario);
}

export async function deleteUsuario(id) {
  return await UsuarioRepository.destroy({where: {id: id}});
}

export async function updateUsuario(usuario) {
  return await UsuarioRepository.upsert(usuario);
}

var usuarioBanco = {
  deleteUsuario,
  getUsuarioId,
  insertUsuario,
  login,
  selectUsuario,
  updateUsuario,
};

export default usuarioBanco;