var express = require('express');
var router = express.Router();
var db = require('./../postgreSQL');

/* POST home page. */
router.post('/', function(req, res, next) {
    // console.log('Got body:', req.body);
    db.one("INSERT INTO contacts (firstname, lastname, email, message) VALUES ('firstname', 'lastname', 'email', 'message')")
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
