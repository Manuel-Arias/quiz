//GET /quizes/question
exports.question = function(req, res){
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

//GET /quizes/answer
exports.answer = function(req, res){
	res.locals.expReg = /^Roma$/i; 
	if (res.locals.expReg.test(req.query.respuesta)){
		res.render('quizes/answer', {respuesta: 'Correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};

//GET /author
exports.author = function(req,res){
	res.render('author', {name: "Manuel Arias Cortés", urlPhoto:'/images/author.png', urlVideo:'https://www.youtube.com/embed/Yp79gBt56HU'})
};