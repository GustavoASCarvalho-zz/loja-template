import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import Product from 'App/Models/Product'

export default class HomeController {
  public async index({ view, response, request }: HttpContextContract) {
    const products = await Product.all()
    const categories = await Category.all()
    console.log(request)

    return view.render('home', { products, categories })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
