import express from "express";

var Router = express.Router();


import usuarioBD from "../../model/repositories/UsuarioRepository.js";
import {
  ocultarSenha
} from "../../model/components/segurança.js";

Router.get("/login", (req, res) => {
  if (req.query.fail) {
    res.render("usuario/Login", {
      mensagemLogin: "Usuário e/ou senha incorretos!",
    });
  } else {
    res.render("usuario/Login", {
      mensagemLogin: null
    });
  }
});

Router.get("/cadastro", (req, res) => {
  if (req.query.fail) {
    res.render("usuario/CadastroUsuario", {
      mensagem: "Cadastro"
    });
  } else {
    res.render("usuario/CadastroUsuario", {
      mensagem: null
    });
  }
});

Router.get("/lista/usuario", async (req, res, next) => {
  try {
    const docs = await usuarioBD.selectUsuario();
    res.render("usuario/lista", {
      mensagem: "lista de Usuários",
      docs
    });
  } catch (err) {
    next(err);
  }
});

Router.get("/delete/usuario/:id", async (req, res, next) => {
  try {
    var id = req.params.id;
    await usuarioBD.deleteUsuario(id);
    const docs = await usuarioBD.selectUsuario()
    res.render("usuario/Lista", {
      mensagem: "",
      docs
    });
    //JMeter
  } catch (err) {
    next(err);
  }
});

Router.get("/edit/usuario/:id", async (req, res, next) => {
  try {
    var id = req.params.id;
    const response = await usuarioBD.getUsuarioId(id);
    const usuario = response.dataValues;
    console.log(response);
    console.log(usuario);
    res.render("usuario/EditUsuario", {
      mensagem: "",
      usuario
    });
  } catch (err) {
    next(err);
  }
});

Router.post("/cadastro/usuario/edit/salvar", (req, res) => {

  try {
    usuarioBD.updateUsuario({
      login: req.body.login,
      senha: req.body.senha,
      id: req.body.id,
    });
    res.render("usuario/Sucesso", {
      mensagem: "alterado"
    });
  } catch (error) {
    res.render("usuario/EditUsuario", {
      title: "Edição Cadastro",
      mensagem: "Erro no cadastrado",
    });
  }
});

Router.post("/cadastro/usuario/salvar", async (req, res) => {
  try {
    await usuarioBD.insertUsuario({
      login: req.body.nome,
      senha: req.body.senha,
      hash: ocultarSenha(req.body.senha),
    });
    res.render("usuario/Sucesso", {
      mensagem: "cadastrado"
    });
  } catch (error) {
    console.log(error);
    res.render("usuario/CadastroUsuario", {
      title: "Cadastrado",
      mensagem: "Erro no Cadastro",
    });
  }
});

Router.post("/login/executar", (req, res) => {
  if (req.body.nome === "rafael" && req.body.senha === "starlis123") {
    res.render("/lista/usuario", {
      mensagem: "cadsatrado"
    });
  } else {
    res.render("login/?fail=true");
  }
});

export default Router;