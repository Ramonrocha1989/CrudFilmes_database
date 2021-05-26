exports.up = (knex) => {
    return knex.schema.createTable('filmes', (table) => {
        table.increments();
        table.string('nome', 70).notNullable();
        table.string('foto').notNullable();
        table.integer('duracao', 4).notNullable();
        table.boolean('destaque').notNullable().defaultTo(false);


        table.integer('diretores_id').notNullable().unsigned();
        table.foreign('diretores_id')
            .references('diretores.id')
            .onDelete('restrict')
            .onUpdate('cascade')

        table.integer('genero_id').notNullable().unsigned();
        table.foreign('genero_id')
            .references('genero.id')
            .onDelete('restrict')
            .onUpdate('cascade')

        table.timestamps(true, true);
    })
};

exports.down = (knex) => knex.schema.dropTable('filmes')