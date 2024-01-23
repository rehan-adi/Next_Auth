import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    image: {

    },
    username: {

    },
});


const Post = mongoose.models.Posts || mongoose.model("Posts", PostSchema);

export default Post;
