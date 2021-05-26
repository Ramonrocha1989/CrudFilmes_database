exports.seed = function(knex) {
    return knex('filmes').del()
        .then(function() {
            return knex('filmes').insert([
                { nome: "Better caul Saul", foto: "rastreadores.org/wp-content/uploads/2018/11/rastreadores-palio.jpg", duracao: 120, diretores_id: 1, genero_id: 1 },

            ]);
        });
};