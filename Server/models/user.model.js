import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : [true, "Provide name"]
    },
    email : {
        type : String,
        required : [true, "Provide email"],
        unique : true
    }
})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;