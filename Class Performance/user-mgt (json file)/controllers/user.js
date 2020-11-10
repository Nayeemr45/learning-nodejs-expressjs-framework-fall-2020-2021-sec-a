const { json } = require('body-parser');
const express 	= require('express');
const router 	= express.Router();
const fs		= require('fs');

var id=0;

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/create', (req, res)=>{
	res.render('user/create');
});

router.post('/create', (req, res)=>{
	var user = [++req.session.userid,req.body.username, req.body.password, req.body.email];
	console.log(user);
	var newlist = [req.session.userlist];
	newlist.push(user);
	console.log(newlist);
	//req.session.userlist.push(user);
	//console.log(req.session.userlist);
	//console.log(JSON.stringify(newlist));
	var userobj = [];
	newlist.forEach(function(user){
		userobj.push({
			id : user[0],
			username : user[1],
			email : user[2],
			password : user[3]
		});

	});
	fs.writeFile("./controllers/userlist.json", JSON.stringify(userobj, null, 4), (err) => {
		if (err) {
			console.error(err);
			return;
		}
	});
	//fs.writeFileSync( './controllers/userlist.json', 'vhdgsbsdhs ajhgdsfjbsdh fhsj');

		res.redirect('/home/userlist');		

	
});

router.get('/edit/:id', (req, res)=>{

		res.render('user/edit', user);
	
	
});

router.post('/edit/:id', (req, res)=>{
	
		res.redirect('/home/userlist');

});

router.get('/delete/:id', (req, res)=>{
	
	
		res.render('user/delete', user);
	
});

router.post('/delete/:id', (req, res)=>{
	
	
		res.redirect('/home/userlist');
	
});

module.exports = router;

