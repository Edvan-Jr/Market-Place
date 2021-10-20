const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-3-225-204-194.compute-1.amazonaws.com',
        user: 'ncfyqqpedmafac',
        password: '0e17be582895c64cc806e8c6905faa2a6599635da885467d5a4bc228488bdd3e',
        port: 5432,
        database: 'd1tc21ibnjgeq8',
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = knex;