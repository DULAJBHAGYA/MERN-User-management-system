const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:[true, "Please provide a user name"],
        trim:true,
        maxlength: [30, "Name cannot be more than 30 characters"],
    },
    password:{
        type:String,
        required:[true, "Please provide a password"],
        required:true
    },
    email:{
        type:String,
        required:[true, "Please provide a email"],
        trim:true,
    },
    name:{
        type:String,
        required:[true, "Please provide a name"],
        trim:true,
        maxlength: [30, "Name cannot be more than 30 characters"],
    },
    age:{
        type:String,
        required:[true, "Please provide age"],
        trim:true,
        maxlength: [3, "Name cannot be more than 3 characters"],
    },
    dob:{
        type:String,
        required:[true, "Please provide dob"],
        trim:true,
    }

});

module.exports = mongoose.model('Users',userSchema);