const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	if(req.body.username == req.body.password){
		
		req.session.userid = '3';

		var userlist = [
			['1', 'alamin', 'abc@gmail.com', '123'],
			['2', 'pqr', 'pqr@gmail.com', '123'],
			['3', 'xyz', 'xyz@gmail.com', '123'],
		];
		req.session.userlist = userlist;
		userlist = req.session.userlist;

		res.cookie('uname', req.body.username);
		res.redirect('/home');

	}else{
		res.redirect('/login');
	}
}); 


module.exports = router;



