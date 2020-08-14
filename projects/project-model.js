const db = require("../data/db-config");

module.exports = {
  getProjects,
  addProject,
  getProjectById,
  getProjectResources,
  getProjectTasks
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects").where({ id }).first();
}

function getProjectResources(project_id) {
return db("resources as r")
.select("p.name as Project","r.name as Resource", "p.id as Project ID")
.where({project_id})
.join("project_resource as pr", "pr.resource_id", "r.id")
.join("projects as p", "p.id", "pr.project_id")
}

function getProjectTasks(project_id) {
  return db("tasks as t")
  .select("p.name as Project","t.description as Task", "t.completed as Task Completed:", "p.id as Project ID")
  .where({project_id})
  .join("projects as p", "p.id", "t.project_id")
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
