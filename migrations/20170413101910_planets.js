
exports.up = function(knex, Promise) {
  return knex.schema.createTable('planet', (table) => {
    table.increments()
    table.string('name')
    table.integer('value')
    table.integer('distance')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('planet')
};
