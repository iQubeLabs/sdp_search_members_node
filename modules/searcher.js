'use strict';

const config = require('../config');

const searcher = function(options){

	if(typeof options === 'undefined')	
		options = {};


	const es = options.esClient || config.esClient;

	/**
	 * Search an index and type using Simple Request Query
	 *
	 * Signature:
	 * (index: String, type: String, inputData: String, callback: Function) => Void
	 */
	const simpleSearch = function(index, type, query, callback){
		
	};

	/**
	 * Search an index and type using Elastic Query DSL
	 *
	 * Signature:
	 * (index: String, type: String, query:Object, callback: Function) => Void
	 */
	const search = function(index, type, query, callback) {
		es.search({
			index: index,
			type: type,
			body: query
		}).then(callback)
	};

	return {
		simpleSearch : simpleSearch,
		search: search
	};
};

module.exports = searcher;
