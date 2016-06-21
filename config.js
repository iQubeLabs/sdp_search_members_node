'use strict';


const elasticsearch = require('elasticsearch');

const config = {
	appPort: process.env.PORT || 3000, //application listening port
	esPort: 9200 //elasticsearch port

}; 

// this would risk there being too much clients connected to the elasticsearch
// find a way to make this singleton, so a single connection can be reused.
config.esClient = new elasticsearch.Client({
	host: 'localhost:' + config.esPort,
	log: 'trace'
});

module.exports = config;
