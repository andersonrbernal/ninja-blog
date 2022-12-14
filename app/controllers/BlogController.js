const Blog = require('../models/Blog');
// READ
function blog_index(req, res) {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('blogs/index', { title: 'All blogs', blogs: result });
        })
        .catch(err => {
            console.error(err);
        });
}
// GET BLOG BY ID
function blog_details(req, res) {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blogs/blog-details', { title: 'Blog Details', blog: result });
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Blog not found' });
        });
}

function blog_create_get(req, res) {
    res.render('blogs/create-blogs', { title: 'Create a new blog' });
}
// CREATE
function blog_create_post(req, res) {
    const blogs = new Blog(req.body);

    blogs.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => console.error(err));
}

function blog_delete(req, res) {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => console.error(err));
}

module.exports = { blog_index, blog_details, blog_create_get, blog_create_post, blog_delete };
