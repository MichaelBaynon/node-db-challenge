exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project')
        .notNullable()
        .unique();
      tbl.text('project completed')
        .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };