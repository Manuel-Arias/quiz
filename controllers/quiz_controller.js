var models = require('../models/models.js');


//GET /quizes
exports.index = function(req, res){
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index', {quizes: quizes});
	})
};


//GET /quizes/:id
exports.show = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		res.render('quizes/show', {quiz: quiz});
	})
};

//GET /quizes/:id/answer
exports.answer = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		//res.locals.expReg = /^Roma$/i; 
		//if (res.locals.expReg.test(req.query.respuesta)){
		if (req.query.respuesta.toLowerCase() === quiz.respuesta){
			res.render('quizes/answer', 
				{	quiz:quiz,
					respuesta: 'Correcto'});
		} else {
			res.render('quizes/answer',
				{	quiz: quiz,
					respuesta: 'Incorrecto'});
		}	
	})
	
};

//GET /author
exports.author = function(req,res){
	res.render('author', {name: "Manuel Arias Cortés", urlPhoto:'/images/author.png', urlVideo:'https://www.youtube.com/embed/Yp79gBt56HU'})
};