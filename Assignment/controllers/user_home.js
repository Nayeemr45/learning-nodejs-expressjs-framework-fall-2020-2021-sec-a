const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('user_home/index',{user: req.cookies['uname']});
});
router.post('/', (req, res)=>{
	var search = req.body.search;
	userModel.get_search_product( search , function(results){
		res.render('user_home/search', {results: results});
	});
});




module.exports = router;