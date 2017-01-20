var knex = require('knex')

var config = require('../knexfile').test
var db = require('../db')
var path = require('path')

describe('Server', function() {
  let context

  // Create a separate in-memory database before each test.
  // In our tests, we can get at the database as `t.context.db`.
  beforeEach(function () {
    context = {
      db: knex(config)
    }
    return context.db.migrate.latest({
      directory: path.resolve(__dirname, '../migrations')
    })
      .then(function () {
        return context.db('whisky').insert({id: 1, name: 'Bruichladdich Octomore 6.1', region: 'Islay'})
      })
  })

  // Destroy the database connection after each test.
  afterEach(function () {
    return context.db.destroy()
  })

  it('should return all whiskys when getWhiskys is called', function () {
    return db.getWhiskys('', context.db)
      .then(function (result) {
        expect(result.length).toBe(1)
      })
  })
})
