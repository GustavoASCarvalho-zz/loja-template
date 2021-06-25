import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import Product from 'App/Models/Product'
import AWS from 'aws-sdk'

export default class ProductsController {
  public async index({ view }: HttpContextContract) {
    const products = await Product.all()
    return view.render('products/index', { products })
  }

  public async create({ view }: HttpContextContract) {
    const categories = await Category.all()
    return view.render('products/create', { categories })
  }

  public async store({ request, response, auth }: HttpContextContract) {
    //AWS.config.update({ region: 'sa-east-1' })
    // request.multipart.onFile('input_field_name', {}, (part) => {
    //   someSdk.uploadStream(part)
    // })
    //await request.multipart.process()

    const data = request.only(['name', 'description', 'price', 'categoriesId', 'photo'])
    const user = auth.user
    await user?.related('products').create(data)
    return response.redirect().toRoute('root')
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
