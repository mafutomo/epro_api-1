
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(() => {
      // Inserts seed entries
      return knex('workouts').insert([
        { id: 1, client_id: 1, trainer_id: 1, date: '03/05/18', name: 'Power Hour', created_by_trainer: true },
        { id: 2, client_id: 2, date: '03/05/18', name: 'Fitness for Feminists', created_by_trainer: false },
        { id: 3, client_id: 3, trainer_id: 1, date: '03/05/18', name: 'Triples', created_by_trainer: true }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('workouts_id_seq', (SELECT MAX(id) FROM workouts));`
      );
    })
}
