var initOptions = {};
var pgp = require('pg-promise')(initOptions);
var client = new pgp.pg.Client({
    "user": "pxastydfgxeeke",
    "password": "e35771f47a92bdc47b390881d2eb5ae6cea4f7634e6dae00cc7785f21e788fa6",
    "host": "ec2-46-137-177-160.eu-west-1.compute.amazonaws.com",
    "port": 5432,
    "database": "deovrguko7h3jh"
});

var db = pgp(client);

module.exports = db;
