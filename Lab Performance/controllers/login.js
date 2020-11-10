const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(status){
		console.log(user.username)
		if(status){
			if(user.username == "nayeem"){
				res.cookie('uname', req.body.username);
				res.redirect('/home');
			}
			else {
				res.cookie('uname', req.body.username);
				res.redirect('/emp_home');
			}
			
		}else{
			res.redirect('/login');
		}
	});
}); 

module.exports = router;