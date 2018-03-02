
exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercises', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('notes')
    table.integer('sets').notNullable().defaultsTo(1)
    table.integer('reps').notNullable().defaultsTo(1)
    table.integer('weight').notNullable().defaultsTo(0)
    table.string('time').notNullable().defaultsTo('-')
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('exercises')
};
