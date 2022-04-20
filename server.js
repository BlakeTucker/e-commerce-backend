const express = require('express');
const sequelize = require('./config/connection');
const routes = requires('./routes');

const app = express();
const PORT = process.env.PORT || 3001;