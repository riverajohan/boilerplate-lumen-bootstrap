window.jQuery = window.$ = require('jquery');
const swal = require('sweetalert2');
const nunjucks = require('nunjucks');
require('./vendor/bootstrap.js');
require('./vendor/slick.js');
require('./vendor/jquery.validate.min.js');
require('./vendor/jquery.mask.min.js');
require('../sass/main.scss');

$(function () {

    var app = {
        app: this,
        requestInfo: {},
        setup: function(){
            nunjucks.configure('/views-njk', { autoescape: true });
        },
        init: function () {
            app.setup();
        }
    };

    app.init();
});
