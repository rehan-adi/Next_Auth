import mongoose from "mongoose";

const {Schema} = mongoose

const PostSchema = new Schema({
    title:{
       
    },
    image:{
       
    },
    username:{
       
    },
})

export default mongoose.model("Post", Schema)