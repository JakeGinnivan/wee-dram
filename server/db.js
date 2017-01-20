var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getWhisky: getWhisky,
  getWhiskys: getWhiskys
}

function getWhiskys (search, testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('whisky').where('name', 'like', '%' + search + '%').select()
}

function getWhisky (id, testDb) {
  var db = testDb || connection
  return db('whisky').where('id', id)
}
