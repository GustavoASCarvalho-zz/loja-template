import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/products', 'ProductsController')
  Route.resource('/category', 'CategoriesController')
}).middleware('auth')

Route.get('/register', 'AuthController.register').as('auth.register')
Route.post('/register', 'AuthController.store').as('auth.store')
Route.get('/login', 'AuthController.login').as('auth.login')
Route.post('/login', 'AuthController.verify').as('auth.verify')
Route.get('/logout', 'AuthController.logout').as('auth.logout')

Route.get('/', 'HomeController.index').as('root')
