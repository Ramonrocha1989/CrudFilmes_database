const knex = require('../database/dbConfig')



module.exports = {
    async index(req, res) {

        const comentarios = await knex
            .select("c.id", "c.usuario", "c.comentario", "f.nome")
            .from("comentarios as c")
            .join("filmes as f", "c.filmes_id", "f.id")
        res.status(200).json(comentarios)

    },

    async postacomen(req, res) {

        const id = req.params.id
        
        const comentarios = await knex
            .select("c.id", "c.usuario", "c.comentario", "f.nome")
            .from("comentarios as c")
            .join("filmes as f", "c.filmes_id", "f.id")
            .where("f.id", id)
        res.status(200).json(comentarios)

    },

    async store(req, res) {

        const { usuario, comentario, filmes_id } = req.body;

        if (!comentario || !filmes_id) {
            res.status(400).json({ erro: "Preencha todos os campos" });
            return;
        }

        try {
            const novo = await knex("comentarios").insert({ usuario, comentario, filmes_id });
            res.status(200).json({ id: novo[0] });
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },
    async delete(req, res) {
        const { id } = req.params
        try {
            await knex('comentarios').del().where({ id })
            res.status(200).json("Comentario deletado")
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }

    }


}