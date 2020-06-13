const express = require('express')
const routes = express.Router()
const funct = require('./controllers/funcionalitiesController')

routes.post('/post', funct.newOne)
routes.delete('/destroy/:id', funct.destroy)
routes.get('/find', funct.find)
routes.put('/update/:id', funct.update)
// routes.get('/titlesid', funct.titlesAndId)
// routes.get('/findbytitle', funct.findByTitle)

module.exports = routes