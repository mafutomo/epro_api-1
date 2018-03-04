
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('monophasic_hormones').del()
    .then(() => {
      // Inserts seed entries
      return knex('monophasic_hormones').insert([
        { day: 1, progesterone: 0, estrogen: 50 },
        { day: 2, progesterone: 0, estrogen: 50 },
        { day: 3, progesterone: 0, estrogen: 50 },
        { day: 4, progesterone: 0, estrogen: 50 },
        { day: 5, progesterone: 0, estrogen: 50 },
        { day: 6, progesterone: 0, estrogen: 60 },
        { day: 7, progesterone: 0, estrogen: 60 },
        { day: 8, progesterone: 5, estrogen: 60 },
        { day: 9, progesterone: 5, estrogen: 60 },
        { day: 10, progesterone: 5, estrogen: 60 },
        { day: 11, progesterone: 5, estrogen: 60 },
        { day: 12, progesterone: 5, estrogen: 60 },
        { day: 13, progesterone: 5, estrogen: 60 },
        { day: 14, progesterone: 5, estrogen: 60 },
        { day: 15, progesterone: 5, estrogen: 60 },
        { day: 16, progesterone: 5, estrogen: 60 },
        { day: 17, progesterone: 5, estrogen: 60 },
        { day: 18, progesterone: 5, estrogen: 60 },
        { day: 19, progesterone: 5, estrogen: 60 },
        { day: 20, progesterone: 5, estrogen: 60 },
        { day: 21, progesterone: 5, estrogen: 60 },
        { day: 22, progesterone: 5, estrogen: 60 },
        { day: 23, progesterone: 5, estrogen: 60 },
        { day: 24, progesterone: 5, estrogen: 60 },
        { day: 25, progesterone: 5, estrogen: 60 },
        { day: 26, progesterone: 5, estrogen: 60 },
        { day: 27, progesterone: 5, estrogen: 60 },
        { day: 28, progesterone: 5, estrogen: 60 }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('monophasic_hormones_id_seq', (SELECT MAX(id) FROM monophasic_hormones));`
      );
    })
}
