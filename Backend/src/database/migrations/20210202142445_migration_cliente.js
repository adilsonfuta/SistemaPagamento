exports.up = function(knex) {
    return knex.schema.createTable('cliente',
    function (table) {
        table.increments('id');
           table.string('nome').notNullable();
           table.string('sede').notNullable();
           table.integer('nfilial').notNullable();
           table.string('datacriacao').notNullable();      
    });  
};

exports.down = function(knex) {
 return knex.schema.droptable('cliente');
};