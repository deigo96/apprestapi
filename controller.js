'use strict';

var respones = require('./res');
var connection = require('./koneksi');


exports.index = function(req, res) {
    respones.ok("Rest API berjalan", res);
}

// menampilkan semua data
exports.tampilData = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
        if(error) {
            connection.log(error);
        }
        else {
            respones.ok(rows, res);
        }
    })
}
