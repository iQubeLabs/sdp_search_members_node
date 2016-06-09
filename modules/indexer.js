'use strict';

const config = require('../config');

const indexer = (options) => {

	if(typeof options === 'undefined')	
		options = {};


	const es = options.esClient || config.esClient;

	/**
	 * Indexes an array of input data into the index and type specified using the fields mapping 
	 * if any
	 *
	 * Signature:
	 * (index: String, type: String, inputData: Array, callback: Function, fieldMapping?: Object) => Void
	 */
	const indexAll = (index, type, inputData, callback, fieldMapping) => {
	};

	/**
	 * Index the input data object into the index and type using the fields mapping
	 *
	 * Signature:
	 * (index: String, type: String, inputData: Object, callback: Function, fieldMapping?: Object) => Void
	 */
	const index = (index, type, inputData, callback, fieldMapping) => {
		
	};

	return {
		indexAll : indexAll,
		index: index
	};
};

module.exports = indexer;
