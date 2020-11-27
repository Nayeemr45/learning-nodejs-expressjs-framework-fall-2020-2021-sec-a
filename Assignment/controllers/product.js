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
router.get('/processor', (req, res)=>{
	userModel.getAll_processor(function(results){
		res.render('product/processor/index', {results: results});
	});
});
router.get('/processor/amd', (req, res)=>{
	userModel.getAll_amd_processor(function(results){
		res.render('product/processor/amd', {results: results});
	});
});
router.get('/processor/intel', (req, res)=>{
	userModel.getAll_intel_processor(function(results){
		res.render('product/processor/intel', {results: results});
	});
});
router.get('/cpu_cooler', (req, res)=>{
	userModel.getAll_cpu_cooler(function(results){
		res.render('product/cpu_cooler/index', {results: results});
	});
});
router.get('/cpu_cooler/coorsair', (req, res)=>{
	userModel.getAll_coorsair_cpu_cooler(function(results){
		res.render('product/cpu_cooler/coorsair', {results: results});
	});
});
router.get('/cpu_cooler/antec', (req, res)=>{
	userModel.getAll_antec_cpu_cooler(function(results){
		res.render('product/cpu_cooler/antec', {results: results});
	});
});
//motherboard
router.get('/motherboard', (req, res)=>{
	userModel.getAll_motherboard(function(results){
		res.render('product/motherboard/index', {results: results});
	});
});
router.get('/motherboard/asus_intel', (req, res)=>{
	userModel.getAll_motherboard_asus_intel(function(results){
		res.render('product/motherboard/asus_intel', {results: results});
	});
});
router.get('/motherboard/asus_amd', (req, res)=>{
	userModel.getAll_motherboard_asus_amd(function(results){
		res.render('product/motherboard/asus_amd', {results: results});
	});
});
router.get('/motherboard/msi_intel', (req, res)=>{
	userModel.getAll_motherboard_msi_intel(function(results){
		res.render('product/motherboard/msi_intel', {results: results});
	});
});
router.get('/motherboard/msi_amd', (req, res)=>{
	userModel.getAll_motherboard_msi_amd(function(results){
		res.render('product/motherboard/msi_amd', {results: results});
	});
});
//Storage
router.get('/storage', (req, res)=>{
	userModel.getAll_storage(function(results){
		res.render('product/storage/index', {results: results});
	});
});
router.get('/storage/hdd', (req, res)=>{
	userModel.getAll_storage_hdd(function(results){
		res.render('product/storage/hdd/index', {results: results});
	});
});
router.get('/storage/hdd/wd', (req, res)=>{
	userModel.getAll_storage_hdd_wd(function(results){
		res.render('product/storage/hdd/wd', {results: results});
	});
});
router.get('/storage/hdd/sg', (req, res)=>{
	userModel.getAll_storage_hdd_sg(function(results){
		res.render('product/storage/hdd/sg', {results: results});
	});
});
router.get('/storage/ssd', (req, res)=>{
	userModel.getAll_storage_ssd(function(results){
		res.render('product/storage/ssd/index', {results: results});
	});
});
router.get('/storage/ssd/wd', (req, res)=>{
	userModel.getAll_storage_ssd_wd(function(results){
		res.render('product/storage/ssd/wd', {results: results});
	});
});
router.get('/storage/ssd/sg', (req, res)=>{
	userModel.getAll_storage_ssd_sg(function(results){
		res.render('product/storage/ssd/sg', {results: results});
	});
});
//Ram
router.get('/ram', (req, res)=>{
	userModel.getAll_ram(function(results){
		res.render('product/ram/index', {results: results});
	});
});
router.get('/ram/desktop', (req, res)=>{
	userModel.getAll_ram_desktop(function(results){
		res.render('product/ram/desktop/index', {results: results});
	});
});
router.get('/ram/desktop/coorsair', (req, res)=>{
	userModel.getAll_ram_desktop_coorsair(function(results){
		res.render('product/ram/desktop/coorsair', {results: results});
	});
});
router.get('/ram/desktop/gskill', (req, res)=>{
	userModel.getAll_ram_desktop_gskill(function(results){
		res.render('product/ram/desktop/gskill', {results: results});
	});
});
router.get('/ram/laptop', (req, res)=>{
	userModel.getAll_ram_laptop(function(results){
		res.render('product/ram/laptop/index', {results: results});
	});
});
router.get('/ram/laptop/adata', (req, res)=>{
	userModel.getAll_ram_laptop_adata(function(results){
		res.render('product/ram/laptop/adata', {results: results});
	});
});
//Monitors
router.get('/monitor', (req, res)=>{
	userModel.getAll_monitor(function(results){
        console.log("🚀 ~ file: product.js ~ line 160 ~ userModel.getAll_monitor ~ results", results)
		res.render('product/monitor/index', {results: results});
	});
});
router.get('/monitor/acer', (req, res)=>{
	userModel.getAll_monitor_acer(function(results){
		res.render('product/monitor/acer', {results: results});
	});
});
router.get('/monitor/asus', (req, res)=>{
	userModel.getAll_monitor_asus(function(results){
		res.render('product/monitor/asus', {results: results});
	});
});
router.get('/monitor/dell', (req, res)=>{
	userModel.getAll_monitor_dell(function(results){
		res.render('product/monitor/dell', {results: results});
	});
});
router.get('/monitor/hp', (req, res)=>{
	userModel.getAll_monitor_hp(function(results){
		res.render('product/monitor/hp', {results: results});
	});
});















//////// Post



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
router.post('/processor', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/processor/intel', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/processor/amd', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/cpu_cooler', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/cpu_cooler/coorsair', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/cpu_cooler/antec', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/motherboard', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/motherboard/asus_intel', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/motherboard/asus_amd', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/motherboard/msi_intel', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/motherboard/msi_amd', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/storage', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/storage/hdd', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/storage/hdd/wd', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/storage/hdd/sg', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});

router.post('/storage/ssd', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});

router.post('/storage/ssd/sg', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/storage/ssd/wd', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});

router.post('/ram', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/ram/desktop', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/ram/desktop/coorsair', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/ram/desktop/gskill', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/ram/laptop', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});
router.post('/ram/laptop/adata', (req, res)=>{
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

