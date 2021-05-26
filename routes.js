const express = require('express')
const routes = express.Router()

const FilmesController = require('./controllers/FilmesControllers')
const UsuariosController = require('./controllers/UsuarioController')
const EstatisticasController = require('./controllers/EstatisticasController')
const DestaquesController = require('./controllers/DestaquesController')
const PesquisaController = require('./controllers/PesquisaControler')
const DiretoresController = require('./controllers/DiretoresController')
const login = require('./middleware/login')

routes.get('/filmes', FilmesController.index)
    .post('/filmes', login, FilmesController.store)
    .put('/filmes/:id', FilmesController.update)
    .delete('/delete/:filme', FilmesController.delete)

routes.get('/totalfilmes', EstatisticasController.index)

routes.get('/destaques', DestaquesController.index)
    .get('/destaques/:id', DestaquesController.destaque)

routes.get('/pesq/:filme', PesquisaController.index)

routes.get('/diretores', DiretoresController.index)
    .post('/diretores', DiretoresController.store)
    .put('/diretores/:id', DiretoresController.update)
    .delete('/deletediretor/:diretor', DiretoresController.deletefilme)

routes.get('/usuarios', UsuariosController.index)
    .post('/usuarios', UsuariosController.store)
    .post('/login', UsuariosController.login)



module.exports = routes;