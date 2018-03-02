
exports.up = function(knex, Promise) {
  return knex.schema.createTable('phase_tips', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('phase').notNullable()
    table.string('exercise_tip').notNullable()
    table.string('nutrition_tip').notNullable()
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('phase_tips')
};
