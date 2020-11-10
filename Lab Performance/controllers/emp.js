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
	res.render('job/create');
});


router.post('/create', (req, res)=>{
	
			var user = {
				c_name : req.body.c_name,
				job_tittle : req.body.job_tittle,
				job_loc : req.body.job_loc,
				salary : req.body.salary
			}
			userModel.insert_job(user, function(status){
				//console.log(status)
				res.redirect('/emp_home/userlist');
			});


});

router.get('/edit/:id', (req, res)=>{
	
	userModel.getById_job(req.params.id, function(results){
		var users ={
			c_name : results[0].c_name,
			job_tittle : results[0].job_tittle,
			job_loc : results[0].job_loc,
			salary : results[0].salary
		}
		//console.log(results)
		res.render('job/edit', {users: users});
	});
});

router.post('/edit/:id', (req, res)=>{
	var user = {
		id: req.params.id,
		c_name : req.body.c_name,
		job_tittle : req.body.job_tittle,
		job_loc : req.body.job_loc,
		salary : req.body.salary
	}
	userModel.update_job(user, function(status){
		//console.log(status)
		res.redirect('/emp_home/userlist');
	});
});

router.get('/delete/:id', (req, res)=>{
	userModel.getById_job(req.params.id, function(results){
		var users ={
			c_name : results[0].c_name,
			job_tittle : results[0].job_tittle,
			job_loc : results[0].job_loc,
			salary : results[0].salary
		}
		//console.log(results[0].username)
		//console.log(users)
		res.render('job/delete', {users : users});
	});
});

router.post('/delete/:id', (req, res)=>{

	userModel.delete_job(req.params.id, function(status){
		res.redirect('/emp_home/userlist');
	});
});

module.exports = router;

