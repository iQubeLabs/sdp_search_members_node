'use strict';

const router = require('express').Router();

router.route('/search').get((req, res) => {
	console.log('get index request');
});

module.exports = router;
