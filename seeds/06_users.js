
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
        cycle_length: 27,
        last_day: '03/03/18',
        email: 'marvez@gmail.com',
        secret: 'AsfiewnChillAF',
        password_hash: '$2a$10$v.XPaPHLpUdt1EtkntQf5ulEHwEwLfZaLR8bXUFqE/ASGsS1QUhMe',
        profile_pic: '',
        bio: "I'm awesome!",
        certifications: '',
        trainer_id: 0,
        is_trainer: false,
        is_public: false,
        birth_control_type: 'non_hormonal'
      },{
        id: 2,
        first_name: 'Melissa',
        last_name: 'Utomo',
        age: 26, weight: 105,
        cycle_length: 25,
        last_day: '02/09/18',
        email: 'mafutomo@gmail.com',
        secret: 'AsfiewnChillAF',
        password_hash: '$2a$10$WC04I2HwLRyxw3t2UH/71O3qrFTJqw0tI7vaWz6Xha/DWTqYuXx5e',
        profile_pic: '',
        bio: "I'm a feminist!",
        certifications: '',
        trainer_id: 0,
        is_trainer: false,
        is_public: false,
        birth_control_type: 'triphasic',
      },{
        id: 3,
        first_name: 'Andrew',
        last_name: 'Kuklinski',
        age: 35,
        weight: 165,
        cycle_length: 29,
        last_day: '02/23/18',
        email: 'andrew@gmail.com',
        secret: 'AsfiewnChillAF',
        password_hash: '$2a$10$qPsT.sBZgn0Z0fJqxAKJDuhTmPeWURgENOraseocdfOa6zWjcsjhe',
        profile_pic: '',
        bio: "I need to stop eating cheeseburgers",
        certifications: '',
        trainer_id: 0,
        is_trainer: false,
        is_public: false,
        birth_control_type: 'monophasic',
      },{
        id: 4,
        first_name: 'Reiko',
        last_name: 'Matsuda-Dunn', age: 31, weight: 110, cycle_length: 28, last_day: '02/15/18', email: 'reiko@gmail.com', secret: 'AsfiewnChillAF', password_hash: '$2a$10$k6d4gXCp/GCLpacdkU.ua.mPG4uVJ40/GF.NvNU1BUio/cpcqncXa',  profile_pic: '', bio: "Hi I'm Reiko", certifications: '', trainer_id: 1, is_trainer: true, is_public: false, birth_control_type: 'non_hormonal'
      }
      ])
    .then(function(){
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
      )})
    })
}
