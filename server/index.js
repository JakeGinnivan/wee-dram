var server = require('./server')

var PORT = process.env.PORT || 3001

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
