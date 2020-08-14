const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourceById,
  addResource,
};

function getResources() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources").where({ id }).first();
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .returning("id")
    .then((ids) => {
      const id = ids[0];
      return getResourceById(id);
    });
}
