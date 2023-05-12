
var mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
        rel_man_name:{
            type:String
        },
        name:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        address:{
            type:String
        },
        pan:{
            type:String
        },
        adhar:{
            type:String
        },
        dob:{
            type:String
        },
        phone:{
            type:Number
        },
        role:{
            type:String
        },
        products:[
            String
        ],
        status:{
            type:String
        },
        

});



const Person = new mongoose.model("Person" , personSchema);



module.exports =  Person ;
