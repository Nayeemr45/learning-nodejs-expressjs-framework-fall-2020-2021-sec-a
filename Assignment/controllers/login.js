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
			console.log(status[0].type)

			if(status[0].type == "admin"){
			res.cookie('uname', req.body.username);
			res.redirect('/home/all_product');
			}
			else if(status[0].type == "user") {
				res.cookie('uname', req.body.username);
				res.redirect('/user_home');
			}

		else{
			res.redirect('/login');
		}
	});
	
}); 

module.exports = router;