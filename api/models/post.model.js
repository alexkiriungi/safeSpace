import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: "https://assets-global.website-files.com/60ef088dd8fef99352abb434/63ec70f2caa31a0f2ead85c6_10-Must-Have-Blog-Post-Templates-for-Improved-Writing-_Free-Download_-100.webp",
        },
        category: {
            type: String,
            default: "uncategorized",
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    }, { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
