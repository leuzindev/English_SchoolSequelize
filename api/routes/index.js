const bodyParser = require('body-parser')
 
const pessoas = require('./pessoasRoute')
const niveis = require('../routes/niveisRoute')
const turmas = require('../routes/turmasRoute')

module.exports = app => {
 app.use(
   bodyParser.json(),
   pessoas,
   niveis,
   turmas
   )
 }
