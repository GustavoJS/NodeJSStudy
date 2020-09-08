var knexDB = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'knexjs'
    }
});

module.exports = knexDB