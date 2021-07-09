const knex = require('../database/dbConfig')

module.exports = {

    async index(req, res) {
        const generos = await knex('genero')
        res.status(200).json(generos)
    },

    async marca_filmes(req, res) {
        const generos = await knex('genero')
            .select("g.genero")
            .count('g.id as num')
            .from("genero as g")
            .leftOuterJoin("filmes as f", "g.id", "f.genero_id")
            .groupBy("g.genero")
            .having("num", ">", 0)
        res.status(200).json(generos)
    },


}