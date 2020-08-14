const router = require("express").Router();
const DB = require("./project-model");

router.get("/", (req, res) => {
  DB.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params

  DB.getProjectResources(id)
  .then(pResources => {
    
    res.status(200).json(pResources)
  }).catch((err) => {
    
    res.status(500).json({ message: "Failed to get project resources"});
  });
})

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params

  DB.getProjectTasks(id)
  .then(pTasks => {
    
    res.status(200).json(pTasks)
  }).catch((err) => {
    
    res.status(500).json({ message: "Failed to get project tasks"});
  });
})

router.post("/", validateProject, (req, res) => {
  DB.addProject(req.body)
    .then((newProject) => {
      res
        .status(201)
        .json({ message: "Project was created successfully", newProject });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add project" });
    });
});

//custom middleware

function validateProject(req, res, next) {
  const body = req.body;
  const name = req.body.name;

  if (!body) {
    res.status(400).json({ message: "missing project data" });
  } else if (!name) {
    res.status(400).json({ message: "missing required name field" });
  } else {
    next();
  }
}

module.exports = router;
