'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
    .get(jsonku.tampilData);

    app.route('/tampil/:id')
    .get(jsonku.tampilDataById);

    app.route('/tambah')
    .post(jsonku.tambahData);
}