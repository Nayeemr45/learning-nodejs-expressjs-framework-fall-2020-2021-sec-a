const express 	= require('express');
//const { param } = require('./home');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});



router.get('/delete/:id', (req, res)=>{
	userModel.getById(req.params.id, function(results){
		var users ={
			username : results[0].username,
			password : results[0].password,
			email : results[0].email
		}
		//console.log(results[0].username)
		console.log(users)
		res.render('user/delete', {users : users});
	});
});

router.post('/delete/:id', (req, res)=>{

	userModel.delete_user(req.params.id, function(status){
		res.redirect('/home/user');
	});
});

router.get('/delete_review/:id', (req, res)=>{
	userModel.getById_review(req.params.id, function(results){
		var review ={

			id : results[0].id,
			p_id : results[0].p_id,
			name : results[0].name,
			comment : results[0].comment
		}
		res.render('user/delete_review', {review : review});
	});
});

router.post('/delete_review/:id', (req, res)=>{

	userModel.delete_review(req.params.id, function(status){
		res.redirect('/home/review');
	});
});



module.exports = router;

