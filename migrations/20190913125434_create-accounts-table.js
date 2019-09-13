exports.up = function(knex, Promise) {
    return knex.schema.createTable('accounts', tbl => {
      tbl.increments();
      tbl.string('name')
        .notNullable()
        .unique();
      tbl.text('completed')
        .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('accounts');
  };

