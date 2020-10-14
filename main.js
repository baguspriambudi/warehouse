const express = require('express');

const PORT = 1000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Connection
require('./database/connection');

app.listen(PORT, console.log(`listening on PORT ${PORT}`));
