const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== 'test') app.use(morgan('combined'));

// DB Connection
require('./database/connection');

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'system warehouse service up and running',
    environment: process.env.NODE_ENV,
    timestamp: new Date(),
  });
});

const routeApiV1 = express.Router();
routeApiV1.use('/auth/user', require('./router/user_route'));

app.use('/api/v1', routeApiV1);

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
