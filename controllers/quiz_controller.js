var models = require('../models/models.js');

//GET /quizes/question
exports.question = function(req, res){
	models.Quiz.findAll().success(function(quiz){
		res.render('quizes/question', {pregunta: quiz[0].pregunta});
	})
};

//GET /quizes/answer
exports.answer = function(req, res){
	models.Quiz.findAll().success(function(quiz){
		res.locals.expReg = /^Roma$/i; 
		if (res.locals.expReg.test(req.query.respuesta)){
			res.render('quizes/answer', {respuesta: 'Correcto'});
		} else {
			res.render('quizes/answer', {respuesta: 'Incorrecto'});
		}	
	})
	
};

//GET /author
exports.author = function(req,res){
	res.render('author', {name: "Manuel Arias Cortés", urlPhoto:'/images/author.png', urlVideo:'https://www.youtube.com/embed/Yp79gBt56HU'})
};