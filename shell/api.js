import { httpGet } from '../src/utility';
import { pipeAsyncFunctions } from '../src/adapter';

const TYPE_CONSTANTS = {
  Adapter: {
    key: 'adapter',
    pageCount: 1
  },
  Array: {
    key: 'array',
    pageCount: 5
  },
  Browser: {
    key: 'browser',
    pageCount: 2
  },
  Date: {
    key: 'date',
    pageCount: 1
  },
  Function: {
    key: 'function',
    pageCount: 2
  },
  Math: {
    key: 'math',
    pageCount: 3
  },
  Node: {
    key: 'node',
    pageCount: 1
  },
  Object: {
    key: 'object',
    pageCount: 2
  },
  String: {
    key: 'string',
    pageCount: 2
  },
  Type: {
    key: 'type',
    pageCount: 1
  },
  Utility: {
    key: 'utility',
    pageCount: 2
  },
};

const genFuncFetchUrl = (type, page) => `{https://www.30secondsofcode.org/page-data/js/t/${type}/p/${page}/page-data.json}`;

const getFunc = () => {
  const urls = Object.values(TYPE_CONSTANTS).map(type => Array.from({length: type.pageCount}).map((item, index) => genFuncFetchUrl(type.key, index + 1)));
  const fetchPromises = urls.map(url => new Promise((resolve, resolve) => {
    httpGet(url, resolve(res), reject(err));
  }));
  // const sum = pipeAsyncFunctions(
  //   x => x + 1,
  //   x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  //   x => x + 3,
  //   async x => (await x) + 4
  // );
}

getFunc();
