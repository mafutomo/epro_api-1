
exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercises', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('description')
    table.integer('sets').notNullable().defaultsTo(1)
    table.integer('sets_actual')
    table.integer('reps').notNullable().defaultsTo(1)
    table.integer('reps_actual')
    table.string('weight').notNullable().defaultsTo('- Ibs')
    table.string('weight_actual')
    table.string('time').notNullable().defaultsTo('-')
    table.integer('time_actual')
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('exercises')
};
