
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoes', shoes => {
    shoes.increments();
    shoes.string('name', 128).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('hobbits');
};
