
exports.up = function(knex, Promise) {
  return knex.schema.createTable('workouts_exercises', table => {
    table.integer('workout_id').notNullable()
    table.foreign('workout_id').references('workouts.id').onDelete('CASCADE')
    table.integer('exercise_id').notNullable()
    table.foreign('exercise_id').references('exercises.id').onDelete('CASCADE')
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workouts_exercises')
};
