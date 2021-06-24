import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ view }: HttpContextContract) {
    const categories = await Category.all()
    return view.render('categories/index', { categories })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('categories/create')
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['title'])
    await Category.create(data)
    return response.redirect().toRoute('root')
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
