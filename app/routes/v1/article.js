var express = require('express');
var router = express.Router();
var ArticleModel = require('../../models/articleModel.js');

// GET http://localhost:3000/api/v1/article/test
router.get('/test', function (req, res) {
	res.json({
		message:"This is article api"
	});
});

// POST method
router.post('/', function (req, res) {

	// create model
	var Article = new ArticleModel();

	// load data
	Article.title = req.body.title;
	Article.text = req.body.text;
	Article.setDate();

	// save
	Article.save(function (err) {
		if (err) {
			res.send(err);
		} else {
			res.json({ message: 'Success !!' });
		}
	});
});

// GET method
router.get('/', function (req, res) {
	ArticleModel
		.find()
		.then(function (articles) {
			res.json(articles);
		});
});

router.get('/:id', function (req, res) {

	var Articleid = req.params.id;
	ArticleModel
		.findById(Articleid, function (err, article) {
			res.json(article);
		});
});

router.delete('/:id', function (req, res) {
	var Articleid = req.params.id;
	ArticleModel
		.remove({ _id: Articleid })
		.then(function() {
			res.json({ message: 'Success !!' });
		});
});

// Register as module
module.exports = router;