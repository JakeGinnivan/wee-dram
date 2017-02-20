var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getWhisky: getWhisky,
  getWhiskys: getWhiskys,
  checkin: checkin,
  getCheckins: getCheckins
}

function getWhiskys (search, testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('whisky')
    .whereRaw("LOWER(name) LIKE '%' || LOWER(?) || '%' ", search) 
    .select()
}

function getWhisky (id, testDb) {
  var db = testDb || connection
  return db('whisky').where('id', id)
}

function checkin(whiskyId, checkinDetails, testDb) {
  var db = testDb || connection
  return db('checkin').insert({
    whisky_id: whiskyId,
    with_water_rating: checkinDetails.withWaterRating,
    without_water_rating: checkinDetails.withoutWaterRating,
    comment: checkinDetails.comment,
  })
}

function getCheckins(testDb) {
  var db = testDb || connection
  return db('checkin')
    .join('whisky', 'checkin.whisky_id', 'whisky.id')
    .select('*')
    .then(checkins => {
      return checkins.map(d => ({
        id: d.id,
        whiskyId: d.whisky_id,
        name: d.name,
        withWaterRating: d.with_water_rating,
        withoutWaterRating: d.without_water_rating,
        comment: d.comment,
      })
    )})
}