const router = require("express").Router();
const DB = require("./task-model");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  DB.getTasks(id)
    .then((tasks) => {
      if (tasks.length > 0) {
        res.status(200).json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find a project with that ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/", (req, res) => {
  const changes = req.body;

  DB.addTasks(changes)
    .then((newTask) => {
      res
        .status(201)
        .json({ message: "Task was created successfully", newTask });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add task" });
    });
});

function validateTask(req, res, next) {
  const body = req.body;
  const description = req.body.description;

  if (!body) {
    res.status(400).json({ message: "missing task data" });
  } else if (!description) {
    res.status(400).json({ message: "missing required description field" });
  } else {
    next();
  }
}

module.exports = router;
