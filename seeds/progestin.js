
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('progestin_hormones').del()
    .then(() => {
      // Inserts seed entries
      return knex('progestin_hormones').insert([
        { id: 1, day: 1, progesterone: 2, estrogen: 50 },
        { id: 2, day: 2, progesterone: 2, estrogen: 50 },
        { id: 3, day: 3, progesterone: 2, estrogen: 50 },
        { id: 4, day: 4, progesterone: 2, estrogen: 50 },
        { id: 5, day: 5, progesterone: 2, estrogen: 50 },
        { id: 6, day: 6, progesterone: 2, estrogen: 50 },
        { id: 7, day: 7, progesterone: 2, estrogen: 50 },
        { id: 8, day: 8, progesterone: 2, estrogen: 50 },
        { id: 9, day: 9, progesterone: 2, estrogen: 50 },
        { id: 10, day: 10, progesterone: 2, estrogen: 50 },
        { id: 11, day: 11, progesterone: 2, estrogen: 50 },
        { id: 12, day: 12, progesterone: 2, estrogen: 50 },
        { id: 13, day: 13, progesterone: 2, estrogen: 50 },
        { id: 14, day: 14, progesterone: 2, estrogen: 50 },
        { id: 15, day: 15, progesterone: 2, estrogen: 50 },
        { id: 16, day: 16, progesterone: 2, estrogen: 50 },
        { id: 17, day: 17, progesterone: 2, estrogen: 50 },
        { id: 18, day: 18, progesterone: 2, estrogen: 50 },
        { id: 19, day: 19, progesterone: 2, estrogen: 50 },
        { id: 20, day: 20, progesterone: 2, estrogen: 50 },
        { id: 21, day: 21, progesterone: 2, estrogen: 50 },
        { id: 22, day: 22, progesterone: 2, estrogen: 50 },
        { id: 23, day: 23, progesterone: 2, estrogen: 50 },
        { id: 24, day: 24, progesterone: 2, estrogen: 50 },
        { id: 25, day: 25, progesterone: 2, estrogen: 50 },
        { id: 26, day: 26, progesterone: 2, estrogen: 50 },
        { id: 27, day: 27, progesterone: 2, estrogen: 50 },
        { id: 28, day: 28, progesterone: 2, estrogen: 50 }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('progestin_hormones_id_seq', (SELECT MAX(id) FROM progestin_hormones));`
      );
    })
}
