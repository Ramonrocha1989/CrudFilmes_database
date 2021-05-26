const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const knex = require('../database/dbConfig')


module.exports = {

        async index(req, res) {

            const usuarios = await knex('usuarios');
            res.status(200).json(usuarios)
        },

        async store(req, res) {

            const { nome, email, senha } = req.body;

            if (!nome || !email || !senha) {
                res.status(400).json({ erro: "Preencha todos os campos" });
                return;
            }

            try {
                const dadosUsuario = await knex("usuarios").where({ email });
                if (dadosUsuario.length) {
                    res.status(400).json({ erro: "E-mail já esta cadastrado" });
                    return
                }
            } catch (error) {
                res.status(400).json({ erro: error.message });
            }

            const hash = bcrypt.hashSync(senha, 10);

            try {
                const novo = await knex("usuarios").insert({ nome, email, senha: hash });
                res.status(201).json({ id: novo[0] });
            } catch (error) {
                res.status(400).json({ erro: error.message });
            }
        },
        async login(req, res) {

            const { email, senha } = req.body;

            if (!email || !senha) {
                res.status(400).json({ erro: "Preencha todos os campos" });
                return;
            }

            try {
                const dadosUsuario = await knex("usuarios").where({ email });
                if (!dadosUsuario.length) {
                    res.status(400).json({ erro: "Dados incorretos" });
                    return
                }

                if (bcrypt.compareSync(senha, dadosUsuario[0].senha)) {
                    const token = jwt.sign({
                        usuario_id: dadosUsuario[0].id,
                        usuario_nome: dadosUsuario[0].nome
                    }, process.env.JWT_KEY, {
                        expiresIn: "1h"
                    })
                    res.status(200).json({ msg: "Ok acesso permitido", token });
                } else {
                    res.status(400).json({ erro: "Dados incorretos" });
                }

            } catch (error) {
                res.status(400).json({ erro: error.message });
            }
        }

    }
    //parei no video duracao 1:34