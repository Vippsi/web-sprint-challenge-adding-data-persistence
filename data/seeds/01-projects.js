
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Project 1', description: 'Project 1 Description', completed: 'False'},
        {id: 2, name: 'Project 2', description: 'Project 2 Description', completed: 'True'},
        {id: 3, name: 'Project 3', description: 'Project 3 Description', completed: 'False'},
      ]);
    });
};
