exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable();
      tbl.string("description");
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("id");
      tbl.string("description", 255).notNullable();
      tbl.string("notes");
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable('resources', tbl => {
        tbl.increments("id")
        tbl.string("name", 255).notNullable().unique()
        tbl.string("description")
    })
    .createTable('project_resource', tbl => {
        tbl.increments("id")
        
        tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

        tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
};
