const express = require('express')
const routes = express.Router()

const FilmesController = require('./controllers/FilmesControllers')
const UsuariosController = require('./controllers/UsuarioController')
const EstatisticasController = require('./controllers/EstatisticasController')
const DestaquesController = require('./controllers/DestaquesController')
const PesquisaController = require('./controllers/PesquisaControler')
const DiretoresController = require('./controllers/DiretoresController')
const GeneroControllers = require('./controllers/GeneroController')
const ComentariosControllers = require('./controllers/ComentariosController')
const login = require('./middleware/login')

routes.get('/filmes', FilmesController.index)
    .post('/filmes', login, FilmesController.store)
    .put('/filmes/:id', FilmesController.update)
    .delete('/delete/:id',FilmesController.delete)
    .get('/filme/:id', FilmesController.deleteId)

routes.get('/totalfilmes', EstatisticasController.index)

routes.get('/destaques', DestaquesController.index)
    .put('/destaques/:id', DestaquesController.destaque)

routes.get('/pesq/:filme', PesquisaController.index)

routes.get('/diretores', DiretoresController.index)
    .post('/diretores', DiretoresController.store)
    .put('/diretores/:id', DiretoresController.update)
    .delete('/deletediretor/:diretor', DiretoresController.deletefilme)

routes.get('/generos', GeneroControllers.index )
      .get('/generosgrafico', GeneroControllers.marca_filmes)

routes.get('/comentarios', ComentariosControllers.index)
      .post('/cadcomentario', ComentariosControllers.store)
      .delete('/delcomentarios/:id', ComentariosControllers.delete)
      



routes.get('/usuarios', UsuariosController.index)
    .post('/usuarios', UsuariosController.store)
    .post('/login', UsuariosController.login)



module.exports = routes;

//https://crudfilmesdatabase.herokuapp.com/destaques