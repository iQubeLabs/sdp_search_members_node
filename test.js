'use strict';

const tap = require('tap');
const glob = require('glob');

//runs all tests in the tests file
glob('./tests/**/*.test.js', function(err, files){
	files.forEach(function(file){
		require(file)(tap.test);
	});
});
