exports.seed = function(knex) {
    return knex('diretores').del()
        .then(function() {
            return knex('diretores').insert([
                { nomediretor: 'Gordon Smith', idade: 34, dataNasc: '1986-06-12' },
                { nomediretor: 'Alfred Hitchcock', idade: 38, dataNasc: '1899-07-06' },
                { nomediretor: 'Ramon Rocha', idade: 32, dataNasc: '1989-01-03' },
            ]);
        });
};