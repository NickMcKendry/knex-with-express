
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('planet').del()
    .then(function () {
      // Inserts seed entries
      return knex('planet').insert([
        {
          name: 'Jupiter',
          value: 312,
          distance: 7
        },
        {
          name: 'Mars',
          value: 214,
          distance: 312

        },
        {
          name: 'Pluto',
          value: 222,
          distance: 312
        }
      ]);
    });
};
