
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'Stephanie', last_name: 'Marvez', age: 32, weight: 120, cycle_length: 28, last_day: 'Sun Feb 04 2018 00:00:00 GMT-0700 (MST)', email: 'marvez@gmail.com', password_hash: '', profile_pic: '', bio: "I'm awesome!", certifications: '', trainer_id: '', is_trainer: true, is_public: false },
        { name: 'Puerto Rico', population: 3663131 },
        { name: 'Qatar', population: 2639211 }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('countries_id_seq', (SELECT MAX(id) FROM countries));`
      );
    })
}
