const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
const port = 3001

routes(app)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app