const db = require("../data/db-config");

module.exports = {
  getProjects,
  addProject,
  getProjectById,
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects").where({ id }).first();
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .returning("id")
    .then((ids) => {
      const id = ids[0];
      return getProjectById(id);
    });
}
