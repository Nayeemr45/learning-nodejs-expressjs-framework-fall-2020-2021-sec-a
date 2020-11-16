const express 	= require('express');
//const { param } = require('./home');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();



router.get('/create', (req, res)=>{
	res.render('register/create');
});


router.post('/create', (req, res)=>{
	
			var user = {
				username : req.body.username,
				password : req.body.password,
				email : req.body.email,
				contact_no : req.body.contact_no,
				type : req.body.type
			}
			userModel.insert_user(user, function(status){
				res.redirect('/login');
			});


});


module.exports = router;

