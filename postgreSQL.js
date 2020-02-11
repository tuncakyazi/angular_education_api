var initOptions = {};
// var connection = 'postgres://username:password@host:port/database';
// var connection = 'postgres://postgres:Adesso123@localhost:5432/adesso_angular_db';
var pgp = require('pg-promise')(initOptions);
var client = new pgp.pg.Client({
    "user": "akyazi",
    "password": "Adesso123",
    "host": "localhost",
    "port": 5432,
    "database": "adesso_angular_db"
});

var db = pgp(client);

module.exports = db;
