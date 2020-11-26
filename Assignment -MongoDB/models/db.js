const mongodb = require('mongodb').MongoClient;

const URL       = "mongodb+srv://nayeem:n017710587890%40%23@cluster0.lcdib.mongodb.net/computer_shop?retryWrites=true&w=majority"
const config    =  { useUnifiedTopology: true };



mongodb.connect(URL , config , function(error , MyMongoClient){
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection SuccessFull")
        //FindOnewithData(MyMongoClient);
        //DeleteOneItem(MyMongoClient);
	}
});
module.exports = {

	FindOnewithData: function (FindObj , MyMongoClient){
	var MyDataBase = MyMongoClient.db("computer_shop");
	var MyCollection = MyDataBase.collection('user');
	
    MyCollection.findOne(FindObj , function(error , result){
		//MyMongoClient(result);
		console.log(result);
    });
}



}








/* const mysql 	= require('mysql');

var getConnection = function(callback){
	var connection = mysql.createConnection({
		  host     : '127.0.0.1',
		  database : 'computer_shop',
		  user     : 'root',
		  password : ''
		});
	 
	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	  console.log('connected as id ' + connection.threadId);

	});

	callback(connection);

}

module.exports = {
	getResults: function (sql, callback){
		getConnection(function(connection){
			connection.query(sql , function (error, results) {
				callback(results);
			});
			
			connection.end(function(err) {
			  console.log('connection end...');
			});		
		});

	},
	execute: function (sql, callback){
		getConnection(function(connection){
			connection.query(sql , function (error, status) {
				
				if(status){
					callback(true);
				}else{
					callback(false);
				}
			});
			
			connection.end(function(err) {
			  console.log('connection end...');
			});		
		});
	}
}




 */