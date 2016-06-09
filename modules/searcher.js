'use strict';

const config = require('../config');

const searcher = (options) => {

	if(typeof options === 'undefined')	
		options = {};


	const es = options.esClient || config.esClient;

	/**
	 * Search an index and type using Simple Request Query
	 *
	 * Signature:
	 * (index: String, type: String, inputData: String, callback: Function) => Void
	 */
	const simpleSearch = (index, type, query, callback) => {
		
	};

	/**
	 * Search an index and type using Elastic Query DSL
	 *
	 * Signature:
	 * (index: String, type: String, query:Object, callback: Function) => Void
	 */
	const search = (index, type, query, callback) => {
	};

	return {
		simpleSearch : simpleSearch,
		search: search
	};
};

module.exports = searcher;
