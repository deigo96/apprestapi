'use strict';

var respones = require('./res');
var connection = require('./koneksi');


exports.index = function(req, res) {
    respones.ok("Rest API berjalan", res);
}

// menampilkan semua data
exports.tampilModel = function(req, res){
    connection.query('SELECT * FROM models', function(error, rows, fields){
        if(error) {
            console.log(error);
        }
        else {
            respones.ok(rows, res);
        }
    })
}

// menampilkan Model by ID
exports.tampilModelById = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM models WHERE mId = ?', [id], function(error, rows, fields){
        if(error) {
            console.log(error);
        }
        else {
            respones.ok(rows, res);
        }
    })
}

// menambah Model 
exports.tambahModel = function(req, res) {
    var mName = req.body.mName;
    var price = req.body.price;
    var location = req.body.location;

    connection.query('INSERT INTO models (mName, price, location) VALUES(?,?,?)',
        [mName, price, location],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            }
            else {
                respones.ok("Model berhasil ditamabah", res);
            }
        }
    )
}

// mengubah Model berdasarkan id
exports.ubahModelById = function(req, res) {
    var mId = req.body.mId;
    var mName = req.body.mName;
    var price = req.body.price;
    var location = req.body.location;

    connection.query('UPDATE models SET mName=?, price=?, location=? WHERE mId=?', [mName, price, location, mId],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            }
            else {
                respones.ok("Model berhasil diubah", res);
            }
        }
    )
}

// menghapus Model by id
exports.hapusModel = function(req, res) {
    var id = req.body.mId;
    connection.query('DELETE FROM models WHERE mId=?', [id],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            }
            else {
                respones.ok("Model berhasil diubah", res);
            }
        }
    )
}

exports.tampilProduct = function(req, res){
    connection.query('SELECT * FROM products', function(error, rows, fields){
        if(error) {
            console.log(error);
        }
        else {
            respones.ok(rows, res);
        }
    })
}

// menampilkan Product by ID
exports.tampilProductById = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM products WHERE pId = ?', [id], function(error, rows, fields){
        if(error) {
            console.log(error);
        }
        else {
            respones.ok(rows, res);
        }
    })
}

// menambah Product 
exports.tambahProduct = function(req, res) {
    var pName = req.body.pName;
    var pDp = req.body.pDp;
    var pDate = req.body.pDate;

    connection.query('INSERT INTO products (pName, pDp, pDate) VALUES(?,?,?)',
        [pName, pDp, pDate],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            }
            else {
                respones.ok("Product berhasil ditamabah", res);
            }
        }
    )
}

// mengubah Product berdasarkan id
exports.ubahProductById = function(req, res) {
    var pId = req.body.pId;
    var pName = req.body.pName;
    var pDp = req.body.pDp;
    var pDate = req.body.pDate;

    connection.query('UPDATE products SET pName=?, pDp=?, pDate=? WHERE pId=?', [pName, pDp, pDate, pId],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            }
            else {
                respones.ok("Product berhasil diubah", res);
            }
        }
    )
}

// menghapus Product by id
exports.hapusProduct = function(req, res) {
    var id = req.body.pId;
    connection.query('DELETE FROM products WHERE pId=?', [id],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            }
            else {
                respones.ok("Product berhasil diubah", res);
            }
        }
    )
}
