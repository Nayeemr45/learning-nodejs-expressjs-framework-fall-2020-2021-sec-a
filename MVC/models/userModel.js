const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from user where id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		username= user.username;
		password= user.password;
		email= user.email;
		//console.log(user)
		var sql = "INSERT INTO user (username, password, email) VALUES ('"+username+"', '"+password+"','"+email+"')";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	update:function(user, callback){
		id= user.id;
		username= user.username;
		password= user.password;
		email= user.email;
		//console.log(user)
		var sql = "update user SET username = '"+username+"',password = '"+password+"',email = '"+email+"' WHERE id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	delete: function(id, callback){
		var sql = "DELETE FROM user WHERE id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	}
}
