const knex = require('../database/dbConfig')

module.exports = {
    // listagem
    async index(req, res) {
        //const filmes = await knex('filmes')
        const filmes = await knex
            .select("f.id", "f.nome", "f.foto", "f.duracao", "d.nomediretor as diretor", "g.genero as genero", "f.destaque")
            .from("filmes as f")
            .join("genero as g", "f.genero_id", "g.id")
            .join("diretores as d", "f.diretores_id", "d.id")
            .orderBy('f.id', 'desc')
        res.status(200).json(filmes)
    },

    async deleteId(req, res) {

        const id = req.params.id

        const filmes = await knex
            .select("f.id", "f.nome", "f.foto", "f.duracao", "d.nomediretor as diretor", "g.genero as genero", "f.destaque")
            .from("filmes as f")
            .join("genero as g", "f.genero_id", "g.id")
            .join("diretores as d", "f.diretores_id", "d.id")
            .orderBy('f.id', 'desc')
            .where("f.id", id)
        res.status(200).json(filmes[0])
    },

    //inclusão
    async store(req, res) {

        const { nome, foto, duracao, diretores_id, genero_id } = req.body;
      
        if (!nome || !foto || !duracao || !diretores_id || !genero_id) {
            res.status(400).json({ erro: "Preencha todos os campos" });
            return;
        }

        try {
            const novo = await knex("filmes").insert({ nome, foto, duracao, diretores_id, genero_id });
            res.status(201).json({ id: novo[0] });
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },

    async update(req, res) {
        const { id } = req.params
        const { nome, genero_id, duracao, diretores_id, foto } = req.body

        try {
            novo = await knex('filmes').update({nome, genero_id, duracao, diretores_id, foto }).where({ id })
            res.status(201).json()
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    },

    async delete(req, res) {
        const { id } = req.params
        try {
            await knex('filmes').del().where({ id })
            res.status(200).json("filme deletado")
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }

    }

}