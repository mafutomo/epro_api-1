
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
        id: 1,
        first_name: 'Stephanie',
        last_name: 'Marvez',
        age: 32,
        weight: 120,
        cycle_length: 28,
        last_day: '02/04/18',
        email: 'marvez@gmail.com',
        secret: 'AsfiewnChillAF',
        password_hash: '',
        profile_pic: '',
        bio: "I'm awesome!",
        certifications: '',
        trainer_id: 0,
        is_trainer: false,
        is_public: false,
        non_hormonal: true,
        triphasic: false,
        monophasic: false,
        progestin: false },
        {
        id: 2,
        first_name: 'Melissa',
        last_name: 'Utomo',
        age: 26, weight: 105,
        cycle_length: 25,
        last_day: '02/09/18',
        email: 'mafutomo@gmail.com',
        secret: 'AsfiewnChillAF',
        password_hash: '',
        profile_pic: '',
        bio: "I'm a feminist!",
        certifications: '',
        trainer_id: 0,
        is_trainer: false,
        is_public: false,
        non_hormonal: true,
        triphasic: false,
        monophasic: false, progestin: false  },
        {
        id: 3,
        first_name: 'Andrew',
        last_name: 'Kuklinski',
        age: 35,
        weight: 165,
        cycle_length: 29,
        last_day: '02/23/18',
        email: 'andrew@gmail.com',
        secret: 'AsfiewnChillAF',
        password_hash: '',
        profile_pic: '',
        bio: "I need to stop eating cheeseburgers",
        certifications: '',
        trainer_id: 0,
        is_trainer: false,
        is_public: false,
        non_hormonal: true,
        triphasic: false, monophasic: false,
        progestin: false  },
        {
        id: 4,
        first_name: 'Reiko',
        last_name: 'Matsuda-Dunn', age: 31, weight: 110, cycle_length: 28, last_day: '02/15/18', email: 'reiko@gmail.com', secret: 'AsfiewnChillAF', password_hash: '',  profile_pic: '', bio: "Hi I'm Reiko", certifications: '', trainer_id: 1, is_trainer: true, is_public: false, non_hormonal: false, triphasic: false, monophasic: false, progestin: true  }
      ])
    .then(function(){
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
      )})
    })
}
