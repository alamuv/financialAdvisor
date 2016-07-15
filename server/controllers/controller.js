let config = '../config/dbConfig.js';

let Sequelize = require('sequelize');

let sequelize = new Sequelize('investment', config.sqluid || 'root', config.sqlpw || '', {logging: false});
