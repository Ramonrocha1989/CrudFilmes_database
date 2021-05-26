const knex = require('../database/dbConfig')



module.exports = {
    async index(req, res) {
        try {
            const filmes = await knex('filmes').where('destaque', '=', true)

            if (filmes.length >= 1) {
                res.status(200).json(filmes)
            } else {
                res.status(400).json("Não a filmes em destaques")
            }


        } catch (error) {
            res.status(400).json({ msg: error.message })
        }

    },

    async destaque(req, res) {
        const { id } = req.params

        if (!id) {
            res.status(400).json({ erro: "Campos incompletos!" })
            return
        }
        try {
            const dest = await knex("filmes").where({ id });
            if (dest[0].destaque) {

                novo = await knex('filmes').where({ id }).update({ destaque: false });
                res.status(201).json({ msg: "Filme " + dest[0].nome + " agora NÃO é mais destaque!!!" });

            } else {

                novo = await knex('filmes').where({ id }).update({ destaque: true });
                res.status(201).json({ msg: "Filme " + dest[0].nome + " agora é destaque!!!" });

            }

        } catch (error) {
            res.status(400).json({ erros: error.message });
        }


    }
}