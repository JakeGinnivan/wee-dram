exports.up = function (knex, Promise) {
  return knex.schema.createTable('checkin', function (table) {
    table.increments('id').primary()
    table.string('whisky_id')
    table.integer('rating')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('checkin')
}
