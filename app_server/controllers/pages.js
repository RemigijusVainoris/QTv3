var mongoose    = require('mongoose');
var Quote       = require('../models/Quote');

mongoose.connect('mongodb://remi:Remiam2015@localhost:27017/QuoTea');

module.exports.index = function(req, res){
    res.render('index', { title: 'QuoTea' });
};

module.exports.random = function(req, res){

    Quote.find(function(err, quotes) {
        if (err)
            res.send(err);
        var rand = Math.floor(Math.random() * quotes.length);
        console.log(rand);

        var quote = quotes[rand];

        var response = {
            quote: quote.quote,
            author: quote.author
        };
        res.json(response);
    });
};

module.exports.submitQuote = function(req, res) {
    var quote = new Quote();
    quote.quote = req.body.quote;
    quote.author = req.body.author;

    quote.save(function(err) {
        if (err)
            res.send(err);
        res.json({message: "OK"});
    });
};