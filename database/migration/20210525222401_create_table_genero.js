exports.up = (knex) => {
    return knex.schema.createTable('genero', (table) => {
        table.increments();
        table.string('genero', 70).notNullable();

    })
};

exports.down = (knex) => knex.schema.dropTable('genero')