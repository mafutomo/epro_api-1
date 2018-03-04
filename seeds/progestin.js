
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('progestin_hormones').del()
    .then(() => {
      // Inserts seed entries
      return knex('progestin_hormones').insert([
        { day: 1, progesterone: 2, estrogen: 50 },
        { day: 2, progesterone: 2, estrogen: 50 },
        { day: 3, progesterone: 2, estrogen: 50 },
        { day: 4, progesterone: 2, estrogen: 50 },
        { day: 5, progesterone: 2, estrogen: 50 },
        { day: 6, progesterone: 2, estrogen: 50 },
        { day: 7, progesterone: 2, estrogen: 50 },
        { day: 8, progesterone: 2, estrogen: 50 },
        { day: 9, progesterone: 2, estrogen: 50 },
        { day: 10, progesterone: 2, estrogen: 50 },
        { day: 11, progesterone: 2, estrogen: 50 },
        { day: 12, progesterone: 2, estrogen: 50 },
        { day: 13, progesterone: 2, estrogen: 50 },
        { day: 14, progesterone: 2, estrogen: 50 },
        { day: 15, progesterone: 2, estrogen: 50 },
        { day: 16, progesterone: 2, estrogen: 50 },
        { day: 17, progesterone: 2, estrogen: 50 },
        { day: 18, progesterone: 2, estrogen: 50 },
        { day: 19, progesterone: 2, estrogen: 50 },
        { day: 20, progesterone: 2, estrogen: 50 },
        { day: 21, progesterone: 2, estrogen: 50 },
        { day: 22, progesterone: 2, estrogen: 50 },
        { day: 23, progesterone: 2, estrogen: 50 },
        { day: 24, progesterone: 2, estrogen: 50 },
        { day: 25, progesterone: 2, estrogen: 50 },
        { day: 26, progesterone: 2, estrogen: 50 },
        { day: 27, progesterone: 2, estrogen: 50 },
        { day: 28, progesterone: 2, estrogen: 50 }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('progestin_hormones_id_seq', (SELECT MAX(id) FROM progestin_hormones));`
      );
    })
}
