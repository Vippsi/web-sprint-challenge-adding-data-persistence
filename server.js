const express = require("express");
const helmet = require("helmet");
const server = express();
const projectRouter = require('./projects/project-router')
const taskRouter = require('./tasks/task-router')
const resourceRouter = require('./resources/resource-router')
server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)
server.use('/api/resources', resourceRouter)

module.exports = server;
