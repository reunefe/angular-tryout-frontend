'use strict';

let livereload = require('livereload');
let http = require('http');
let express = require('express');
let app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 3000);

let reload = livereload.createServer({});
reload.watch(__dirname + "/dist");
