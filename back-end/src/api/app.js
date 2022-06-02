const express = require('express');
const cors = require('cors');

const routes = require('../routes/routes');

const app = express();

// app.get('/coffee', (_req, res) => res.status(418).end());
app.use(express.json());
app.use(cors());

app.use('/login', routes.loginRouter);

module.exports = app;
