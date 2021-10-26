'use strict';

var respones = require('./res');
var connection = require('./koneksi');


exports.index = function(req, res) {
    respones.ok("Rest API berjalan");
}