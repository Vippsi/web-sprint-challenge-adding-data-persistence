const db = require("../data/db-config");

module.exports = {
  getTasks,
  addTasks,
};

function getTasks(project_id) {
  return db("tasks as t")
    .select(
      "t.id as Task ID",
      "t.description as Task Description",
      "t.notes",
      "t.completed",
      "p.name as Project Name",
      "p.description as Project Description",
      "t.project_id"
    )
    .where({ project_id })
    .join("projects as p", "p.id", "t.project_id");
}

function addTasks(changes) {
  return db("tasks").insert(changes);
}
