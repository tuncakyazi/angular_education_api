var express = require('express');
var router = express.Router();
var db = require('./../postgreSQL');

/* POST home page. */
router.get('/', function(req, res, next) {
    db.any(`SELECT * FROM contacts`)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (error) {
            console.log('ERROR:', error);
            res.sendStatus(404);
        });
});

module.exports = router;
