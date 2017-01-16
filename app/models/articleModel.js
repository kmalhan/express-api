var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var ArticleSchema = new Schema({
	title : String,
	text : String,
	date : String
});

ArticleSchema.methods.setData = function () {
	// creation time
	this.date = moment().format("YYYY-MM-DD HH:mm:ss");
};

// Export schema as model, and compile
module.exports = mongoose.model('ArticleModel', ArticleSchema);