
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.integer('age').notNullable()
    table.integer('weight').notNullable()
    table.integer('cycle_length').notNullable().defaultsTo(28)
    table.string('last_day').notNullable()
    table.string('email').notNullable()
    table.string('password_hash').notNullable()
    table.string('profile_pic').notNullable()
    table.string('bio')
    table.string('certifications')
    table.boolean('is_trainer').notNullable()
    table.boolean('is_public').notNullable()
    table.integer('trainer_id')
    table.foreign('hormone_id').references('hormones.id').onDelete('CASCADE')
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
