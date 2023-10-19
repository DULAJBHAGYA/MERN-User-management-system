const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    username:{
        type:String,
        required:[true, "Please provide a user name"],
        trim:true,
        maxlength: [30, "Name cannot be more than 30 characters"],
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
    }

});

module.exports = mongoose.model('Admins',adminSchema);