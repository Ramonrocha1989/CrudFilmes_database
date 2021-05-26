exports.seed = function(knex) {
    return knex('genero').del()
        .then(function() {
            return knex('genero').insert([
                { genero: 'Ação', },
                { genero: 'Aventura' },
                { genero: 'Ficção' },
                { genero: 'Suspense' },
                { genero: 'Terror' },
            ]);
        });
};