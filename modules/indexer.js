'use strict';

const config = require('../config');

const indexer = function(options){

	if(typeof options === 'undefined')	
		options = {};


	const es = options.esClient || config.esClient;

	/**
	 * Indexes an array of input data into the index and type specified using the fields mapping 
	 * if any
how to 
	 * Signature:
	 * (index: String, type: String, inputData: Array, callback: Function, fieldMapping?: Object) => Void
	 */
	const indexAll = function(index, type, inputData, callback, fieldMapping){
		var obj = {};
		obj[type] = {"properties": fieldMapping};
		es.indices.create({
			index: index,
			body: {
				"mappings": obj
				}
		}).then(function(){
			for(i=0; i<inputData.length; i++) {
				es.index({
					index: index,
					type: type,
					body: inputData[i]
				})
			}}).then(callback);
		};
	

	/**
	 * Index the input data object into the index and type using the fields mapping
	 *
	 * Signature:
	 * (index: String, type: String, inputData: Object, callback: Function, fieldMapping?: Object) => Void
	 */

	const index = function(index, type, inputData, callback, fieldMapping) {
		var obj = {};
		obj[type] = {"properties": fieldMapping};
		es.indices.create({
			index: index,
			body: {
				"mappings": obj
			}
		}).then(es.index({
			index:index,
			type:type,
			body:inputData

		})).then(callback);
	};
	

	return {
		indexAll : indexAll,
		index: index
	};
};

module.exports = indexer;
