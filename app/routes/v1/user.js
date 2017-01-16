var express = require('express');
var router = express.Router();
var UserModel = require('../../models/userModel.js');

// TEST method
// GET http://localhost:3000/api/v1/user/test
router.get('/test', function (req, res) {
	res.json({
		message:"This is user api"
	});
});

// POST method
router.post('/', function (req, res) {

	// create model
	var User = new UserModel();

	// add data
	User.name = req.body.name;
	User.screen_name = req.body.screen_name;
	User.bio = req.body.bio;

	// save action
	User.save(function(err) {
		if (err) {
			res.send(err);
		} else {
			res.json({ message: 'Success!!' });
		}
	});
});

// GET method (all result)
router.get('/', function (req, res) {
	UserModel
		.find()
		.then(function (users) {
			res.json(users);
		});
});

// GET method by user id
router.get('/:id', function (req, res) {

	var Userid = req.params.id;
	UserModel
		.findById(Userid, function (err, user) {
			res.json(user);
		});
});

// PUT method by user id
router.put('/:id', function (req, res) {

	var Userid = req.params.id;

	UserModel
		.findById(Userid, function (err, user) {
			if (err) {
				res.send(err);
			} else {

				user.name = req.body.name;
				user.screen_name = req.body.screen_name;
				user.bio = req.body.bio;

				user.save(function(err) {
					if (err) {
						res.send(err);
					} else {
						res.json({ message: "Success !!" });
					}
				});
			}
		});
});




















// Register as module
module.exports = router;