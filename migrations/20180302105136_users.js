
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.integer('age').notNullable()
    table.integer('weight').notNullable()
    table.integer('cycle_length').notNullable().defaultsTo(28)
    table.date('last_day').notNullable()
    table.string('email').notNullable()
    table.string('secret').notNull();
    table.string('password_hash').notNullable()
    table.string('profile_pic')
    table.string('bio')
    table.string('certifications')
    table.integer('trainer_id').defaultsTo(0)
    table.boolean('is_trainer').notNullable()
    table.boolean('is_public').notNullable()
    table.string('birth_control_type').notNullable().defaultsTo('non_hormonal')
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
