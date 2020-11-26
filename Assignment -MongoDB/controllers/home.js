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

router.get('/all_product', (req, res)=>{

	userModel.getAll_product(function(results){
	res.render('home/index', {results: results});
});

});
router.get('/user', (req, res)=>{

	userModel.getAll_user(function(results){
	res.render('home/user', {results: results});
});

});
router.get('/review', (req, res)=>{

	userModel.getAll_review(function(results){
	res.render('home/review', {results: results});
});

});


router.get('/add_product', (req, res)=>{

		res.render('home/add_product');

})
router.post('/add_product', (req, res)=>{

		var product={
			name : req.body.name,
			price : req.body.price,
			brand : req.body.brand,
			type : req.body.type,
			subtype : req.body.subtype,
			description : req.body.description,
			image : req.body.image
		}
		userModel.add_product(product, function(status){
			res.redirect('/home/all_product');
		});
		
})

module.exports = router;