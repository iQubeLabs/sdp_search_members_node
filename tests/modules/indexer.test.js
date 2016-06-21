'use strict';

const process = require('process');
const sinon = require('sinon');
const indexer = require(process.cwd() + '/modules/indexer.js');

// test here is a tape instance
module.exports = function(test){
	const configMock = {
		esClient: {
			index: function(){}
		}
	};

	const esMock = sinon.mock(configMock.esClient);

	test('indexer.index calls index on es and callback function', function(t){
		esMock.expects('index').once();
		const index = indexer(configMock);

		const input = {
			name: 'Perfect Makanju',
			age: 50
		};

		const mapping = {
			name: 'full_name'
		};

		const callback = function(){};

		const mockObj = { cb: callback };
		const expectation = sinon.mock(mockObj).expects('cb').once();

		index.index('iqubers', 'members', input, mockObj.cb, mapping);

		t.doesNotThrow(function(){ esMock.verify(); }, 'verify that es clients index function is called once');
		t.doesNotThrow(function(){ expectation.verify(); }, 'verify that the callback function is called');

		t.end();
	});

	test('indexer.indexAll calls index on es twice and callback function', function(t){
		esMock.expects('index').twice();
		const index = indexer(configMock);

		const input = [
		{
			name: 'Perfect Makanju',
			age: 50
		},
		{
			name: 'James Fowe',
			age: 40
		}];

		const mapping = {
			name: 'full_name'
		};

		const callback = function(){};

		const mockObj = { cb: callback };
		const expectation = sinon.mock(mockObj).expects('cb').once();

		index.indexAll('iqubers', 'members', input, mockObj.cb, mapping);

		t.doesNotThrow(function(){ esMock.verify(); }, 'verify that es clients index function is called once');
		t.doesNotThrow(function(){ expectation.verify(); }, 'verify that the callback function is called');

		t.end();
	});
};
