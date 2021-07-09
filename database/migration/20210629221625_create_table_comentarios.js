
exports.up = (knex) => {
    return knex.schema.createTable('comentarios', (table) => {
        table.increments();
        table.string('usuario', 100).notNullable();
        table.string('comentario', 500).notNullable();       


        table.integer('filmes_id').notNullable().unsigned();
        table.foreign('filmes_id')
            .references('filmes.id')
            .onDelete('restrict')
            .onUpdate('cascade')


        table.timestamps(true, true);
    })
};

exports.down = (knex) => knex.schema.dropTable('comentarios')