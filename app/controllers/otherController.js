function index(req, res) {
    res.redirect('/blogs');
}

function about(req, res) {
    res.render('about', { title: 'About' });
}

function notFound(req, res) {
    res.render('404', { title: '404' });
}

module.exports = { index, about, notFound };