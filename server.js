const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
var cors = require('cors');
app.use(cors());
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});