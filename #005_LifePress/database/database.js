const Sequelize = require("sequelize");

const connection = new Sequelize('lifepress','root','',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;