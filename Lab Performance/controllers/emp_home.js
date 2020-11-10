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
	res.render('emp_home/index', {name: req.cookies['uname'], id:'123'});
});


router.get('/userlist', (req, res)=>{

	userModel.getAll_job(function(results){
		res.render('emp_home/userlist', {users: results});
	});

})

module.exports = router;