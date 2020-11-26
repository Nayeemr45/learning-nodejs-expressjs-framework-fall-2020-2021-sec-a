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
	userModel.getById_delete(req.params.id, function(results){
		var product ={
			name : results[0].name,
			price : results[0].price,
			brand : results[0].brand,
			type : results[0].type,
			subtype : results[0].subtype,
			description : results[0].description
		}
		res.render('product/delete', {product : product});
	});
});

router.post('/delete/:id', (req, res)=>{

	userModel.delete(req.params.id, function(status){
		res.redirect('/home/all_product');
	});
});

module.exports = router;

