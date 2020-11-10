const express 	= require('express');
const bodyParser 		= require('body-parser');

const { check, validationResult } = require('express-validator');

const { param } = require('./home');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

const urlencodedParser  =bodyParser.urlencoded({ extended:false })


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


router.post('/create',urlencodedParser,[
	check('c_name' , 'Company Name must be 2 character')
	.exists()
	.isLength({min : 2}),
	check('job_tittle' , 'Job Tittle must be 3 character')
	.exists()
	.isLength({min : 3}),
	check('job_loc' , 'Job Location must be 3 character')
	.exists()
	.isLength({min : 3}),
	check('salary' , 'Salary must be 3 character')
	.exists()
	.isLength({min : 3}),
], (req, res)=>{
			const errors = validationResult(req)
			if(!errors.isEmpty()){
				return res.status(422).jsonp(errors.array())
			}
			else{
				var user = {
					c_name : req.body.c_name,
					job_tittle : req.body.job_tittle,
					job_loc : req.body.job_loc,
					salary : req.body.salary
				}
	
				/* console.log(user)
				var file = req.body.file;
				console.log(file) */
	
				/* file.mv('./abc/img/' +file, function(err){
					if(err){
						res.send(err)
					}
					else{
						res.send("file uploaded")
					}
				}); */
				
				
				 userModel.insert_job(user, function(status){
					//console.log(status)
					res.redirect('/emp_home/userlist');
				}); 
	
			}
	
			

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

router.post('/edit/:id',urlencodedParser,[
	check('c_name' , 'Company Name must be 2 character')
	.exists()
	.isLength({min : 2}),
	check('job_tittle' , 'Job Tittle must be 3 character')
	.exists()
	.isLength({min : 3}),
	check('job_loc' , 'Job Location must be 3 character')
	.exists()
	.isLength({min : 3}),
	check('salary' , 'Salary must be 3 character')
	.exists()
	.isLength({min : 3}),
], (req, res)=>{
			const errors = validationResult(req)
			if(!errors.isEmpty()){
				return res.status(422).jsonp(errors.array())
			}
			else{
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
			}
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

