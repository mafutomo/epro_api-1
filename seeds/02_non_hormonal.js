
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('non_hormonal').del()
    .then(() => {
      // Inserts seed entries
      return knex('non_hormonal').insert([
        { id: 1, day: 1, progesterone: 0, estrogen: 50 },
        { id: 2, day: 2, progesterone: 0, estrogen: 50 },
        { id: 3, day: 3, progesterone: 0, estrogen: 50 },
        { id: 4, day: 4, progesterone: 0, estrogen: 50 },
        { id: 5, day: 5, progesterone: 0, estrogen: 50 },
        { id: 6, day: 6, progesterone: 0, estrogen: 60 },
        { id: 7, day: 7, progesterone: 0, estrogen: 80 },
        { id: 8, day: 8, progesterone: 0, estrogen: 90 },
        { id: 9, day: 9, progesterone: 0, estrogen: 95 },
        { id: 10, day: 10, progesterone: 0, estrogen: 100 },
        { id: 11, day: 11, progesterone: .5, estrogen: 150 },
        { id: 12, day: 12, progesterone: 1, estrogen: 200 },
        { id: 13, day: 13, progesterone: 2, estrogen: 300 },
        { id: 14, day: 14, progesterone: 2.2, estrogen: 400 },
        { id: 15, day: 15, progesterone: 2.5, estrogen: 125 },
        { id: 16, day: 16, progesterone: 2.5, estrogen: 100 },
        { id: 17, day: 17, progesterone: 3, estrogen: 125 },
        { id: 18, day: 18, progesterone: 5, estrogen: 175 },
        { id: 19, day: 19, progesterone: 7, estrogen: 190 },
        { id: 20, day: 20, progesterone: 9, estrogen: 225 },
        { id: 21, day: 21, progesterone: 10.5, estrogen: 250 },
        { id: 22, day: 22, progesterone: 11, estrogen: 290 },
        { id: 23, day: 23, progesterone: 9, estrogen: 250 },
        { id: 24, day: 24, progesterone: 7, estrogen: 180 },
        { id: 25, day: 25, progesterone: 4, estrogen: 140 },
        { id: 26, day: 26, progesterone: 3.5, estrogen: 100 },
        { id: 27, day: 27, progesterone: 2, estrogen: 80 },
        { id: 28, day: 28, progesterone: 1, estrogen: 50 }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('non_hormonal_id_seq', (SELECT MAX(id) FROM non_hormonal));`
      );
    })
}
