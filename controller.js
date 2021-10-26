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

// menambah data 
exports.tambahData = function(req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            }
            else {
                respones.ok("Data berhasil ditamabah", res);
            }
        }
    )
}

// mengubah data berdasarkan id
exports.ubahDataById = function(req, res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            }
            else {
                respones.ok("Data berhasil diubah", res);
            }
        }
    )
}

// menghapus data by id
exports.hapusData = function(req, res) {
    var id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            }
            else {
                respones.ok("Data berhasil diubah", res);
            }
        }
    )
}
