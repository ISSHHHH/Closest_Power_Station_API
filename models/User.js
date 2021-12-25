const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    last_name:{
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email:{
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    password:{
        type: String,
        required: true,
        min: 8,
        max: 255
    }
});

module.exports =mongoose.model('User',UserSchema);
