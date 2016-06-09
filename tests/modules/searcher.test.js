'use strict';

const process = require('process');
const sinon = require('sinon');
const searcher = require(process.cwd() + '/modules/searcher.js');

// test here is a tape instance
module.exports = (test) => {
	const configMock = {
		esClient: {
			search: () => {}
		}
	};
	const index = 'iqubers';
	const type = 'members';

	const mockCallbackObj = { cb: () => {} };

	const esMock = sinon.mock(configMock.esClient);

	test('searcher.search calls search on es and callback function', (t) => {
		esMock.expects('search').once();
		const search = searcher(configMock);

		const query = {
			query: {
				match: {
					'fullname': 'Perfect Makanju'
				}
			}
		};

		const mock = sinon.mock(mockCallbackObj);
		mock.expects('cb').once();

		search.search(index, type, query, mockCallbackObj.cb);

		t.doesNotThrow(() => { esMock.verify(); }, 'verify that es clients search function is called once');
		t.doesNotThrow(() => { mock.verify(); }, 'verify that the callback function is called');
		t.end();
	});

	test('searcher.simpleSearch throws exception if query is not string', (t) => {
		const search = searcher(configMock);
		t.throws(search.simpleSearch(index, type, {}, mockCallbackObj.cb));		
		t.end();
	});
		
	test('searcher.simpleSearch calls search on es and callback function', (t) => {
		esMock.expects('search').once();
		const search = searcher(configMock);

		const query = '';

		const mock = sinon.mock(mockCallbackObj);
		mock.expects('cb').once();

		search.simpleSearch(index, type, query, mockCallbackObj.cb);

		t.doesNotThrow(() => { esMock.verify(); }, 'verify that es clients search function is called once');
		t.doesNotThrow(() => { mock.verify(); }, 'verify that the callback function is called');
		t.end();
	});
};
