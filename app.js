const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./app/routes/blogRoutes');
const otherRoutes = require('./app/routes/otherRoutes');
const config = require('./app/helpers/config');

// express app
const app = express();

const dbURI = 'mongodb+srv://Anderson:Mysql%4001@cluster0.ndyubpj.mongodb.net/node-tuts?retryWrites=true&w=majority';
const opt = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('strictQuery', false);

// connect to mongoDB and listen to requests
mongoose.connect(dbURI, opt)
    .then(result => app.listen(80))
    .catch(err => console.error(err));

// register view engine
app.set('view engine', 'ejs');
app.set('views', config.DIR_VIEWS);

// middlware and static files
const public = express.static('public');
app.use(public);

// converts the buffer to json
const qs = express.urlencoded({ extended: true });
app.use(qs);

// logs http requests on the console
const logger = morgan('dev');
app.use(logger);

// routes
app.use('/', otherRoutes);
app.use('/blogs', blogRoutes);