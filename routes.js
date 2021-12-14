'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/login-admin')
        .get(jsonku.loginAdmin);

    app.route('/tampil-model')
        .get(jsonku.tampilModel);

    app.route('/tampil-model/:id')
        .get(jsonku.tampilModelById);

    app.route('/tambah-model')
        .post(jsonku.tambahModel);

    app.route('/ubah-model/:id')
        .put(jsonku.ubahModelById);

    app.route('/hapus-model/:id')
        .delete(jsonku.hapusModel);

    app.route('/tampil-product')
        .get(jsonku.tampilProduct);

    app.route('/tampil-product/:id')
        .get(jsonku.tampilProductById);

    app.route('/tambah-product')
        .post(jsonku.tambahProduct);

    app.route('/ubah-product/:id')
        .put(jsonku.ubahProductById);

    app.route('/hapus-product/:id')
        .delete(jsonku.hapusProduct);

}