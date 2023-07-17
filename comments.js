// Create web server

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

router.get('/', function(req, res, next) {
    Comment.find(function(err, comments){
        if(err){ return next(err); }

        res.json(comments);
    });
});

router.post('/', function(req, res, next) {
    var comment = new Comment(req.body);

    comment.save(function(err, comment){
        if(err){ return next(err); }

        res.json(comment);
    });
});

module.exports = router;

