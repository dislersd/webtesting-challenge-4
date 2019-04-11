exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('shoes')
    .truncate()
    .then(function() {
      return knex('shoes').insert([
        { name: 'jordans' },
        { name: 'vans' },
        { name: 'ultraBoost' },
        { name: 'sketchers' },
      ]);
    });
};
