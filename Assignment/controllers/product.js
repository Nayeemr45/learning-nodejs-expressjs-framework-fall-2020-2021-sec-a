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

router.get('/casing', (req, res)=>{
	res.render('product/casing');
});



router.get('/edit/:id', (req, res)=>{
	
	userModel.getById(req.params.id, function(results){
		var users ={
			username : results[0].username,
			password : results[0].password,
			email : results[0].email
		}
		//console.log(results)
		res.render('user/edit', {users: users});
	});
});

router.post('/edit/:id', (req, res)=>{
	var user = {
		id: req.params.id,
		username : req.body.username,
		password : req.body.password,
		email : req.body.email
	}
	userModel.update(user, function(status){
		//console.log(status)
		res.redirect('/home/userlist');
	});
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

	userModel.delete(req.params.id, function(status){
		res.redirect('/home/userlist');
	});
});

module.exports = router;

