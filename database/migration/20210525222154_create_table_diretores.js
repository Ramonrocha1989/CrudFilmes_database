exports.up = (knex) => {
    return knex.schema.createTable('diretores', (table) => {
        table.increments();
        table.string('nomediretor', 70).notNullable();
        table.integer('idade', 3).notNullable();
        table.date('dataNasc').notNullable();

    })
};

exports.down = (knex) => knex.schema.dropTable('diretores')