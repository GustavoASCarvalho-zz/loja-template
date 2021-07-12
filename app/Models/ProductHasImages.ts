import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Category from './Category'

export default class ProductsHasImages extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public imagesId: number

  @column()
  public productId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Category)
  public category: HasOne<typeof Category>
}
