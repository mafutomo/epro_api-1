
exports.up = function(knex, Promise) {
  return knex.schema.createTable('workouts', table => {
    table.increments()
    table.integer('client_id').notNullable()
    table.foreign('client_id').references('users.id').onDelete('CASCADE')
    table.integer('trainer_id').nullable()
    table.foreign('trainer_id').references('users.id').onDelete('CASCADE')
    table.date('date').notNullable()
    table.string('name')
    table.boolean('created_by_trainer').notNullable()
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workouts')
};
