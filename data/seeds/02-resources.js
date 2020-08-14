
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'MacBook Pro', description: 'A pricey computer'},
        {id: 2, name: 'Photoshop', description: 'Workplace for image editing'},
        {id: 3, name: 'Meeting Room 101', description: 'You know the one...'}
      ]);
    });
};
