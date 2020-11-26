const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var FindObj = {
			username : user.username,
			password : user.password
		}
		db.FindOnewithData(FindObj, function(results){
			if(results.length >0 ){
				callback(results);
			}else{
				callback(false);
			}
		});
	}
}





/* const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results);
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
	get_search_product: function(search, callback){

		var sql = "select * from product where type='"+search+"' or brand='"+search+"' or price='"+search+"' or name='"+search+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getById_edit: function(id, callback){
		var sql = "select * from product where id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getById_delete: function(id, callback){
		var sql = "select * from product where id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getById_see_review: function(id, callback){
		var sql = "select * from review where p_id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getById_review: function(id, callback){
		var sql = "select * from review where id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_product: function(callback){
		var sql = "select * from product";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_user: function(callback){
		var sql = "select * from user where type = 'user'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_review: function(callback){
		var sql = "select * from review";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_casing: function(callback){
		var sql = "select * from product where type = 'casing'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_power_supply: function(callback){
		var sql = "select * from product where type = 'Power Supply'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_power_supply_coorsair: function(callback){
		var sql = "select * from product where type = 'Power Supply' AND brand = 'Corsair'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_power_supply_antec: function(callback){
		var sql = "select * from product where type = 'Power Supply' AND brand = 'Antec'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert_user: function(user, callback){
		username= user.username;
		password= user.password;
		email= user.email;
		contact_no= user.contact_no;
		type= user.type;
		//console.log(user)
		var sql = "INSERT INTO user (username, password, email, contact_no ,type) VALUES ('"+username+"', '"+password+"','"+email+"','"+contact_no+"','"+type+"')";
		db.getResults(sql, function(results){
        console.log("results", results.insertId)
			
			callback(results);
		});
	},
	insert_review: function(review, callback){
		p_id= review.p_id;
		name= review.name;
		comment= review.comment;
		var sql = "INSERT INTO review (p_id, name, comment) VALUES ('"+p_id+"', '"+name+"','"+comment+"')";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	add_product: function(product, callback){
		name = product.name;
			price = product.price;
			brand = product.brand;
			type = product.type;
			subtype = product.subtype;
			description = product.description;
			image = product.image;
		//console.log(user)
		var sql = "INSERT INTO product (name, price, brand, type ,subtype, description, image) VALUES ('"+name+"', '"+price+"','"+brand+"','"+type+"','"+subtype+"','"+description+"','"+image+"')";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	update_product:function(product, callback){
		id= product.id;
		name= product.name;
		price= product.price;
		description= product.description;
		var sql = "update product SET name = '"+name+"',price = '"+price+"',description = '"+description+"' WHERE id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	delete: function(id, callback){
		var sql = "DELETE FROM product WHERE id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	delete_user: function(id, callback){
		var sql = "DELETE FROM user WHERE id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	delete_review: function(id, callback){
		var sql = "DELETE FROM review WHERE id='"+id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	}
}
 */