'use strict';

var respones = require('./res');
var connection = require('./koneksi');


exports.index = function(req, res) {
    respones.ok("Rest API berjalan", res);
}

// menampilkan semua data
exports.tampilData = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error) {
            console.log(error);
        }
        else {
            respones.ok(rows, res);
        }
    })
}

// menampilkan data by ID
exports.tampilDataById = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], function(error, rows, fields){
        if(error) {
            console.log(error);
        }
        else {
            respones.ok(rows, res);
        }
    })
}
