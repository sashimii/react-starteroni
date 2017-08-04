import test from 'ava';

import React from 'react';
import register from 'ignore-styles'
register(['.sass', '.scss'])
import App from './App.react';

import shallow from 'react-test-renderer/shallow';



test('App', (t) => {
	const renderer = new shallow();
  const result = renderer.render(<App a="Bonjour " b="Monde! " />);
	console.log(result);
	t.is(result.props.children, 'Bonjour Monde! ')
});
