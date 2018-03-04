
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('non_hormonal').del()
    .then(() => {
      // Inserts seed entries
      return knex('non_hormonal').insert([
        { day: 1, progesterone: 0, estrogen: 50 },
        { day: 2, progesterone: 0, estrogen: 50 },
        { day: 3, progesterone: 0, estrogen: 50 },
        { day: 4, progesterone: 0, estrogen: 50 },
        { day: 5, progesterone: 0, estrogen: 50 },
        { day: 6, progesterone: 0, estrogen: 60 },
        { day: 7, progesterone: 0, estrogen: 80 },
        { day: 8, progesterone: 0, estrogen: 90 },
        { day: 9, progesterone: 0, estrogen: 95 },
        { day: 10, progesterone: 0, estrogen: 100 },
        { day: 11, progesterone: 5, estrogen: 150 },
        { day: 12, progesterone: 10, estrogen: 200 },
        { day: 13, progesterone: 20, estrogen: 300 },
        { day: 14, progesterone: 22, estrogen: 400 },
        { day: 15, progesterone: 25, estrogen: 125 },
        { day: 16, progesterone: 25, estrogen: 100 },
        { day: 17, progesterone: 30, estrogen: 125 },
        { day: 18, progesterone: 50, estrogen: 175 },
        { day: 19, progesterone: 70, estrogen: 190 },
        { day: 20, progesterone: 90, estrogen: 225 },
        { day: 21, progesterone: 105, estrogen: 250 },
        { day: 22, progesterone: 110, estrogen: 290 },
        { day: 23, progesterone: 90, estrogen: 250 },
        { day: 24, progesterone: 70, estrogen: 180 },
        { day: 25, progesterone: 40, estrogen: 140 },
        { day: 26, progesterone: 35, estrogen: 100 },
        { day: 27, progesterone: 20, estrogen: 80 },
        { day: 28, progesterone: 10, estrogen: 50 }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('non_hormonal_id_seq', (SELECT MAX(id) FROM non_hormonal));`
      );
    })
}
