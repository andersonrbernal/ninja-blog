const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogStructure = {
    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true }
};

const opt = {
    timestamps: true
}

const blogSchema = new Schema(blogStructure, opt);
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;