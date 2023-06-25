'use strict'

const { start } = require("./src/server.js")
require('dotenv').config();
const { db } = require('./src/models');

const PORT = process.env.PORT || 3000;
 

db.sync().then(() => {
  start(PORT)
}).catch(err => console.log(err))