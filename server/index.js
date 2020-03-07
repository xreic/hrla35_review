const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./router');

const server = express();
const port = 3000;

server.use(morgan('dev'));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/api', router);

/**
 * if no router
 * server.get('/api/students', controller.students.get)
 */

server.listen(port, () => console.log(`listening on ${port}`));
