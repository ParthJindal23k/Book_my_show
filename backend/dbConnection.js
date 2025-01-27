const mongoose = require("mongoose");

const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/bookmyshow');
        console.log("Connect to DATABASE")
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;