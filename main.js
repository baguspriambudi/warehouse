const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const routes = require('./router');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== 'test') app.use(morgan('combined'));

// DB Connection
require('./database/connection');
// DB Associate
require('./models/associations');
// routes
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'system warehouse service up and running',
    environment: process.env.NODE_ENV,
    timestamp: new Date(),
  });
});

app.use((req, res, next) => {
  const error = new Error('not found');
  error.status = 400;
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    status: error.status || 500,
    error: error.message,
  });
});

app.listen(PORT, console.log(`listening on PORT ${PORT}`));
module.exports = app;
