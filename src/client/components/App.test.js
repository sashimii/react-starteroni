// import test from 'ava';

import React from 'react';
// import register from 'ignore-styles'
// register(['.sass', '.scss'])
// import App from './App.react';
import sum from './sum';

import shallow from 'react-test-renderer/shallow';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
