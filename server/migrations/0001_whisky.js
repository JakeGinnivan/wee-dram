exports.up = function (knex, Promise) {
  return knex.schema.createTable('whisky', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('region')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('whisky')
}
