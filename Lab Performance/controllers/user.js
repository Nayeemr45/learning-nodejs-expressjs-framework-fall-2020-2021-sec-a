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

router.get('/create', (req, res)=>{
	res.render('user/create');
});


router.post('/create', (req, res)=>{
	
			var user = {
				emp_name : req.body.emp_name,
				c_name : req.body.c_name,
				contact_no : req.body.contact_no,
				username : req.body.username,
				password : req.body.password
			}
			userModel.insert_emp(user, function(status){
				//console.log(status)
				res.redirect('/home/userlist');
			});


});

router.get('/edit/:id', (req, res)=>{
	
	userModel.getById_emp(req.params.id, function(results){
		var users ={
			emp_name : results[0].emp_name,
			c_name : results[0].c_name,
			contact_no : results[0].contact_no,
			username : results[0].username,
			password : results[0].password
		}
		//console.log(results)
		res.render('user/edit', {users: users});
	});
});

router.post('/edit/:id', (req, res)=>{
	var user = {
		id: req.params.id,
		emp_name : req.body.emp_name,
		c_name : req.body.c_name,
		contact_no : req.body.contact_no,
		username : req.body.username,
		password : req.body.password
	}
	userModel.update_emp(user, function(status){
		//console.log(status)
		res.redirect('/home/userlist');
	});
});

router.get('/delete/:id', (req, res)=>{
	userModel.getById_emp(req.params.id, function(results){
		var users ={
			emp_name : results[0].emp_name,
			c_name : results[0].c_name,
			contact_no : results[0].contact_no,
			username : results[0].username,
			password : results[0].password
		}
		//console.log(results[0].username)
		//console.log(users)
		res.render('user/delete', {users : users});
	});
});

router.post('/delete/:id', (req, res)=>{

	userModel.delete_emp(req.params.id, function(status){
		res.redirect('/home/userlist');
	});
});

module.exports = router;

