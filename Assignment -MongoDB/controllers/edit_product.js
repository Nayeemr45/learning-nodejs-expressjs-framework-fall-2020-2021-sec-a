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


router.get('/edit/:id', (req, res)=>{
	
	userModel.getById_edit(req.params.id, function(results){
		var product ={
			name : results[0].name,
			price : results[0].price,
			description : results[0].description
		}
		//console.log(results)
		res.render('product/edit', {product: product});
	});
});

router.post('/edit/:id', (req, res)=>{
	var product = {
		id: req.params.id,
		name : req.body.name,
		price : req.body.price,
		description : req.body.description
	}
	userModel.update_product(product, function(status){
		//console.log(status)
		res.redirect('/home/all_product');
	});
});

module.exports = router;

