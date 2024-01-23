import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
    name:{
       
    },
    password:{
       
    },
    email:{
       
    },
})

export default mongoose.model("User", Schema)