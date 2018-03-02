exports.up = function(knex, Promise) {
  return knex.schema.createTable('progestin_hormones', table => {
    table.increments()
    table.integer('day')
    table.integer('progesterone')
    table.integer('estrogen')
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('progestin_hormones')
};
