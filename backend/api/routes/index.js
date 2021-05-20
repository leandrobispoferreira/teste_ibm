const clients = require('./clientsRoute')
const extracts = require('./extractsRoutes.js')
module.exports = app => {
    app.use(clients)
    app.use(extracts)
}