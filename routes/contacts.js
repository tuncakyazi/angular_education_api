var express = require('express');
var router = express.Router();
var db = require('./../postgreSQL');

router.post('/', function(req, res, next) {
    db.any(`INSERT INTO contacts (firstname, lastname, email, message) VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${req.body.message}')`)
        .then(function (data) {
            console.log(data);
            res.sendStatus(200);
        })
        .catch(function (error) {
            console.log('ERROR:', error);
            res.sendStatus(404);
        });
});

module.exports = router;
