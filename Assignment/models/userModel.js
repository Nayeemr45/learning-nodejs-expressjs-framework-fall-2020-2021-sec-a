const db = require('./db');

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

		var sql = "select * from product where type LIKE '%"+search+"%' or brand LIKE '%"+search+"%' or price LIKE '%"+search+"%' or name LIKE '%"+search+"%'";
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
		var sql = "select * from product ORDER BY ID DESC";
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
	getAll_processor: function(callback){
		var sql = "select * from product where type = 'processor'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_amd_processor: function(callback){
		var sql = "select * from product where type = 'processor' AND brand = 'amd'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_intel_processor: function(callback){
		var sql = "select * from product where type = 'processor' AND brand = 'intel'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_cpu_cooler: function(callback){
		var sql = "select * from product where type = 'cpu cooler'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_coorsair_cpu_cooler: function(callback){
		var sql = "select * from product where type = 'cpu cooler' AND brand = 'corsair'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_antec_cpu_cooler: function(callback){
		var sql = "select * from product where type = 'cpu cooler' AND brand = 'antec'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	//Motherboard
	getAll_motherboard: function(callback){
		var sql = "select * from product where type = 'motherboard'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_motherboard_asus_intel: function(callback){
		var sql = "select * from product where type = 'motherboard'  AND brand = 'ASUS(Intel)'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_motherboard_asus_amd: function(callback){
		var sql = "select * from product where type = 'motherboard'  AND brand = 'ASUS(AMD)'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_motherboard_msi_intel: function(callback){
		var sql = "select * from product where type = 'motherboard'  AND brand = 'MSI(Intel)'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_motherboard_msi_amd: function(callback){
		var sql = "select * from product where type = 'motherboard'  AND brand = 'MSI(AMD)'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	//Storage
	getAll_storage: function(callback){
		var sql = "select * from product where type = 'hdd' or type='ssd'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_storage_hdd: function(callback){
		var sql = "select * from product where type = 'hdd'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_storage_hdd_wd: function(callback){
		var sql = "select * from product where type = 'hdd' AND brand = 'Western Digital'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_storage_hdd_sg: function(callback){
		var sql = "select * from product where type = 'hdd' AND brand = 'Seagate'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_storage_ssd: function(callback){
		var sql = "select * from product where type = 'ssd'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_storage_ssd_wd: function(callback){
		var sql = "select * from product where type = 'ssd' AND brand = 'Western Digital'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_storage_ssd_sg: function(callback){
		var sql = "select * from product where type = 'ssd' AND brand = 'Seagate'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	//RAM
	getAll_ram: function(callback){
		var sql = "select * from product where type = 'ram'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_ram_desktop: function(callback){
		var sql = "select * from product where type = 'ram' AND subtype = 'desktop'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_ram_desktop_coorsair: function(callback){
		var sql = "select * from product where type = 'ram' AND subtype = 'desktop' AND brand = 'corsair'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_ram_desktop_gskill: function(callback){
		var sql = "select * from product where type = 'ram' AND subtype = 'desktop' AND brand = 'G.Skill'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_ram_laptop: function(callback){
		var sql = "select * from product where type = 'ram' AND subtype = 'laptop'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_ram_laptop_adata: function(callback){
		var sql = "select * from product where type = 'ram' AND subtype = 'laptop' AND brand = 'adata'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	//Monitors
	getAll_monitor: function(callback){
		var sql = "select * from product where type = 'Monitor'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_monitor_acer: function(callback){
		var sql = "select * from product where type = 'Monitor' AND brand = 'acer'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_monitor_asus: function(callback){
		var sql = "select * from product where type = 'Monitor' AND brand = 'asus'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_monitor_dell: function(callback){
		var sql = "select * from product where type = 'Monitor' AND brand = 'dell'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll_monitor_hp: function(callback){
		var sql = "select * from product where type = 'Monitor' AND brand = 'hp'";
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
