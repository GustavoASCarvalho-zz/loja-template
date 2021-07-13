import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { cuid } from '@poppinss/utils/build/helpers'
import Category from 'App/Models/Category'
import Image from 'App/Models/Image'
import Product from 'App/Models/Product'
import ProductsHasImages from 'App/Models/ProductHasImages'

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
    const data = request.only(['name', 'description', 'initialPrice', 'categoriesId'])
    const user = auth.user
    const file = request.file('photo', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })

    const filename = `${cuid()}.${file?.extname}`

    if (file) {
      await file.move(Application.publicPath('images'), { name: filename })
    }

    const image = await Image.create({ url: filename })
    const product = await user?.related('products').create(data)
    ProductsHasImages.create({ imagesId: image.id, productId: product?.id })

    return response.redirect().toRoute('root')
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
