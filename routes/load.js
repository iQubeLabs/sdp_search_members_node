'use strict';

const glob = require('glob');
const process = require('process');

const routesDir = process.cwd() + '/routes';

module.exports = (expressApp) => {

	//load all routes middleware
	glob('./**/!(load.js)', {
		cwd: routesDir
	}, (err, files) => {
		if(err) {
			console.err('Error occurred while loading routes', err);
		}

		files.forEach((file) => {
			const route = require(file);
			expressApp.use(route);
		});
	});
	console.log('loading all app routes');
};
