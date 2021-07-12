import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Category from './Category'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public categoriesId: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public initialPrice: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Category)
  public category: HasOne<typeof Category>
}
