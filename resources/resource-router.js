const router = require("express").Router();
const DB = require("./resource-model");

router.get("/", (req, res) => {
  const { id } = req.params;

  DB.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/", validateResource, (req, res) => {
  DB.addResource(req.body)
    .then((newResource) => {
      res
        .status(201)
        .json({ message: "Resource was created successfully", newResource });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add resource" });
    });
});

//Custom Middleware

function validateResource(req, res, next) {
  const body = req.body;
  const name = req.body.name;

  if (!body) {
    res.status(400).json({ message: "missing resource data" });
  } else if (!name) {
    res.status(400).json({ message: "missing required name field" });
  } else {
    next();
  }
}
module.exports = router;
