import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});
// console.log(UserSchema)
 // mongoose.model('MUST BE API FILE NAME', UserSchema);
const Auth = mongoose.model('auth', UserSchema);

export default Auth