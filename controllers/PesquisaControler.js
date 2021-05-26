const knex = require('../database/dbConfig')



module.exports = {
    async index(req, res) {
        const { filme } = req.params

        try {
            const filmes = await knex('filmes').where('nome', 'like', `%${filme}%`);
            res.status(200).json(filmes)
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    }
}