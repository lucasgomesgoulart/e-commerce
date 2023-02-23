const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('../../routes')

module.exports = app => {
  app.use(
    bodyParser.json(),
    cors(),
    routes
    )
  }