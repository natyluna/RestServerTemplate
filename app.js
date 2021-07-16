require('dotenv').config();
const SERVER = require('./models/server');

const server = new SERVER();

server.listem();
