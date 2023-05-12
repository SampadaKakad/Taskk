var mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/Customer" , {  
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(function (){
    console.log("connection successful");
}).catch(function(err){
    console.log(err);
})
    