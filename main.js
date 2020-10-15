const express = require('express');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Connection
require('./database/connection');

app.listen(PORT, console.log(`listening on PORT ${PORT}`));
