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
	userModel.getAll_casing(function(results){
		res.render('product/casing', {results: results});
	});
});
router.get('/power_supply', (req, res)=>{
	userModel.getAll_power_supply(function(results){
		res.render('product/power_supply', {results: results});
	});
});
router.get('/power_supply_coorsair', (req, res)=>{
	userModel.getAll_power_supply_coorsair(function(results){
		res.render('product/power_supply_coorsair', {results: results});
	});
});
router.get('/power_supply_antec', (req, res)=>{
	userModel.getAll_power_supply_antec(function(results){

		res.render('product/power_supply_antec', {results: results});
	});
});

router.post('/power_supply_antec', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/power_supply_coorsair', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/power_supply', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/casing', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
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





router.get('/see_review/:id', (req, res)=>{


	userModel.getById_see_review(req.params.id, function(results){
		
		res.render('product/see_review', {results: results});
	});
});

router.get('/give_review/:id', (req, res)=>{
	
		res.render('product/give_review');
	
});
router.post('/give_review/:id', (req, res)=>{
	var review = {
		p_id : req.params.id,
		name : req.body.name,
		comment : req.body.comment
	}
	userModel.insert_review(review, function(result){

		userModel.getById_see_review(review.p_id, function(results){
		
			res.render('product/see_review', {results: results});
		}); 

		//res.render('product/casing');

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

