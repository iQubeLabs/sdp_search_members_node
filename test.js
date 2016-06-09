'use strict';

const tap = require('tap');
const glob = require('glob');

//runs all tests in the tests file
glob('./tests/**/*.test.js', (err, files) => {
	files.forEach((file) => {
		require(file)(tap.test);
	});
});
