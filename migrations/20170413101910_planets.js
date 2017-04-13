
exports.up = function(knex, Promise) {
  return knex.schema.createTable('planet', (table) => {
    table.increments()
    table.string('name')
    table.double('value')
    table.double('distance')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('planet')
};
