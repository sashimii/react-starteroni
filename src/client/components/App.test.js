import test from 'ava';

import React from 'react';
import {shallow} from 'enzyme';
import App from './App.react';

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});
