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
	res.render('user_home/index');
});


router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('user_home/userlist', {users: results});
	});

})

module.exports = router;