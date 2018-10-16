var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var User = require('../user/User');
var Todo = require('./Todo');
var VerifyToken = require('./../auth/VerifyToken');

var today = new Date();
var hh = today.getHours();
var ss = today.getMinutes();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

var today = hh + ':' + ss + ' ' + mm + '/' + dd + '/' + yyyy;

console.log(today);


// CREATE NEW TODO
router.post('/', VerifyToken, function (req, res) {
    Todo.create({
        userId: req.body.userId,
        title: req.body.title,
        text: req.body.text,
        editTime: req.body.editTime,
        isDone: req.body.isDone
    },
        function (err, todo) {
            if (err) return res.status(500).send("There was a problem adding the information to the database. Có vấn đề với kết nối DB");
            res.status(200).send(todo);
        }
    );
});


module.exports = router;