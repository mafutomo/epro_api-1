
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {
          id: 1,
          client_id: 2,
          trainer_id:2,
          date:'2018-01-30',
          name: 'sample1',
          created_by_trainer: false,
        },{
          id: 2,
          client_id: 1,
          trainer_id:1,
          date:'2018-01-29',
          name: 'sample2',
          created_by_trainer: false,
        },{
          id: 3,
          client_id: 1,
          trainer_id: 1,
          date:'2018-01-31',
          name: 'sample2a',
          created_by_trainer: false,
        },{
          id: 4,
          client_id: 3,
          trainer_id: 3,
          date:'2018-01-29',
          name: 'sample2b',
          created_by_trainer: false,
        }
      ])
      .then(function(){
        return knex.raw("SELECT setval('workouts_id_seq', (SELECT MAX(id) FROM workouts))")
        })
    });
};
