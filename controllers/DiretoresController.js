const knex = require('../database/dbConfig')

module.exports = {
    // listagem
    async index(req, res) {
        const filmes = await knex('diretores')
        res.status(400).json(filmes)
    },

    //inclusão
    async store(req, res) {

        const { nomediretor, idade, dataNasc } = req.body;

        if (!nomediretor || !idade || !dataNasc) {
            res.status(400).json({ erro: "Preencha todos os campos" });
            return;
        }

        try {
            const novo = await knex("diretores").insert({ nomediretor, idade, dataNasc });
            res.status(201).json({ id: novo[0] });
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },

    async update(req, res) {
        const { id } = req.params
        const { nomediretor, idade } = req.body

        try {
            novo = await knex('diretores').update({ nomediretor, idade }).where({ id })
            res.status(201).json()
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    },

    async deletefilme(req, res) {
        const { diretor } = req.params

        try {
            await knex('diretores').del().where({ nomediretor: diretor })
            res.status(201).json("diretor deletado")
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }

    }

}