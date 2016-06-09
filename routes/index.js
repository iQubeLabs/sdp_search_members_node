'use strict';

const router = require('express').Router();
const multer = require('multer');

// multer is to easily handle multipart-file upload
const upload = multer({ dest: 'uploads/' });

router.route('/index').get((req, res) => {
	const indexInstructions = 'For now, just upload the csv file. with the name \'file\' :)';

	res.send(indexInstructions);
}).post(upload.single('file'), (req, res) => {
	console.log(req.file);

	res.send('file indexed');
});

module.exports = router;
