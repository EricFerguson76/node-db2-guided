// describe the changes
exports.up = function(knex) {
  // DO NOT FORGET TO RETURN
  return knex.schema.createTable('characters', tbl => {
    tbl.increments();

    tbl
      .string('name, 256')
      .notNullable()
      .index();

    tbl.string('house', 128);

    tbl.string('origin', 256);

    tbl.boolean('alive').defaultTo(true);
  });
};

//how to undo the changes => knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters');
};
