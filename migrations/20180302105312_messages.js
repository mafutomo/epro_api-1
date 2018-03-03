
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments()
    table.integer('to_user_id').notNullable()
    table.foreign('to_user_id').references('users.id').onDelete('CASCADE')
    table.integer('from_user_id').notNullable()
    table.foreign('from_user_id').references('users.id').onDelete('CASCADE')
    table.date('date').notNullable()
    table.string('message').notNullable()
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
};
