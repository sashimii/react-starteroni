// import test from 'ava';

import React from 'react';
// import register from 'ignore-styles'
// register(['.sass', '.scss'])
import { App } from './App.react';
// import sum from './sum';

import renderer from 'react-test-renderer';

test('App renders concatenated string', () => {
  const app = renderer.create(<App a="Testing " b="this!" />).toJSON();
  expect(app).toMatchSnapshot();
});
