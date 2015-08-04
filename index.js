'use strict';
// jshint esnext:true

require('node-jsx').install();

var engine = require('react-engine');
var app = require('express')();
var path = require('path');

app.engine('.jsx', engine.server.create());

app.set('views', path.join(__dirname, '/components'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

var index = function(req, res) {
	res.render('Index', {
		title: req.params.msg || 'home'
	});
};

app.get('', index);
app.get('/:msg', index);

app.listen(4000, function(err) {
	if (err) { console.log(err); }
	console.log('server running on localhost:4000');
});
