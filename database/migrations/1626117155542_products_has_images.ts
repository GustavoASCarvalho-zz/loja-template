import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductsHasImages extends BaseSchema {
  protected tableName = 'products_has_images'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').notNullable().references('id').inTable('products')
      table.integer('images_id').notNullable().references('id').inTable('images')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
