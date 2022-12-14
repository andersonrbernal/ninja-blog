const path = require('path');

const ROOT = path.join(__dirname, '../../');
const DIR_VIEWS = ROOT + '/app/views';
const EXT_VIEWS = '.ejs';
const BOOTSTRAP_CSS = path.join(__dirname, '../../node_modules/bootstrap/dist/css');
const BOOTSTRAP_JS = path.join(__dirname, '../../node_modules/bootstrap/dist/js')

module.exports = { ROOT, DIR_VIEWS, EXT_VIEWS, BOOTSTRAP_CSS, BOOTSTRAP_JS };