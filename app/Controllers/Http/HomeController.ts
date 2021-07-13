import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import Image from 'App/Models/Image'
import Product from 'App/Models/Product'
import ProductHasImages from 'App/Models/ProductHasImages'

export default class HomeController {
  public async index({ view }: HttpContextContract) {
    const products = await Product.all()
    const categories = await Category.all()
    const productHasImages = await ProductHasImages.all()
    const images = await Image.all()
    let productImage: Array<Object> = []
    products.forEach((e) => {
      productHasImages.forEach((e2) => {
        if (e.id === e2.productId) {
          images.forEach((e3) => {
            if (e2.imagesId === e3.id) {
              productImage.push({
                productId: e.id,
                image: `images/${e3.url}`,
              })
            }
          })
        }
      })
    })

    return view.render('home', { products, categories, productImage })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
