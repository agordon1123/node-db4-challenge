const express = require('express');
const recipesRouter = require('./api/routers/recipes-router');
const ingredientsRouter = require('./api/routers/ingredients-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter)
server.use('/api/ingredients', ingredientsRouter)

module.exports = server;
