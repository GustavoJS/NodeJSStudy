const Sequelize = require("sequelize");
const connection = require("../database/database");

const Games = connection.define('games',{

    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    year:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    platform:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    price:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    }
});

// Games.sync({force: true});

module.exports = Games;