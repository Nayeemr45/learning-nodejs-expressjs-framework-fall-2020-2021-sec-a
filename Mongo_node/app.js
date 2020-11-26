const mongodb   = require('mongodb').MongoClient

const URL       = "mongodb+srv://nayeem:n017710587890%40%23@cluster0.lcdib.mongodb.net/computer_shop?retryWrites=true&w=majority"
const config    =  { useUnifiedTopology: true };



mongodb.connect(URL , config , function(error , MyMongoClient){
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection SuccessFull")
        //InsertData(MyMongoClient);
        DeleteOneItem(MyMongoClient);
    }

function InsertData(MyMongoClient){
    var MyDataBase = MyMongoClient.db("computer_shop");

    var MyCollection = MyDataBase.collection('user');

    var MyData = {
        username : "ahmed",
        password : "1234",
        email : "ahmed@gmail.com",
        contact_no : "01532547896",
        type : "admin"
    }

    MyCollection.insertOne(MyData , function(error){
        if(error){
            console.log("Data Insert Fail")
        }
        else{
            console.log("Data Insert SuccessFull")
        }
    });
}

function DeleteOneItem(MyMongoClient){
    var MyDataBase = MyMongoClient.db("computer_shop");

    var MyCollection = MyDataBase.collection('user');

    var DeleteItem = {
        email : "ahmed@gmail.com"
    }

    MyCollection.deleteOne(DeleteItem , function(error){
        if(error){
            console.log("Data Delete Fail")
        }
        else{
            console.log("Data Delete SuccessFull")
        }
    });
}

});