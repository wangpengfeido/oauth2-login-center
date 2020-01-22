const path = require('path');
const jsonfile = require('jsonfile');
const Sequelize = require('sequelize');

const mysqlConf = jsonfile.readFileSync(path.resolve(__dirname, '../../config/mysql.json'));

const sequelize=new Sequelize


