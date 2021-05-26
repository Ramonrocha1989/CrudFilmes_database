const knex = require('../database/dbConfig')

module.exports = {
    async index(req, res) {

        try {
            const consulta = await knex('filmes')
                .count({ filmes: '*' })
                .min({ menor: 'duracao' })
                .max({ maior: 'duracao' })
                .avg({ media: 'duracao' })
            res.status(200).json({
                filmes: consulta[0].filmes,
                menor: consulta[0].menor,
                maior: consulta[0].maior,
                media: Number(consulta[0].media).toFixed(0)
            })
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }


    }
}