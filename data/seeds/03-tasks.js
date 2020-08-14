
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Go to the meeting room', notes: 'This is a note for task 1', completed: 'False', project_id: 1},
        {id: 2, description: 'Buy the new Mac', notes: 'This is a note for task 2', completed: 'False', project_id: 1},
        {id: 3, description: 'Buy the office coffee', notes: 'This is a note for task 3', completed: 'False', project_id: 2},
        {id: 4, description: 'Gather the lumber', notes: 'This is a note for task 4', completed: 'True', project_id: 2},
        {id: 5, description: 'Get work done', notes: 'This is a note for task 5', completed: 'False', project_id: 2},
        {id: 6, description: 'Buy the office coffee', notes: 'This is a note for task 6', completed: 'True', project_id: 3}
      ]);
    });
};
