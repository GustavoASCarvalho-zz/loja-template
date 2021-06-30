import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Files extends BaseSchema {
  protected tableName = 'files'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').nullable().references('id').inTable('products')
      table.integer('user_id').nullable().references('id').inTable('users')
      table.string('name').notNullable()
      table.string('key').notNullable()
      table.string('url').notNullable()
      table.string('content_type').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
