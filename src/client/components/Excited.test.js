// import test from 'ava';

import React from 'react';
// import register from 'ignore-styles'
// register(['.sass', '.scss'])
import { ExcitedComponent as Excited, mapStateToProps } from './Excited.react';
import { MemoryRouter } from 'react-router';
import sinon from 'sinon';
// import sum from './sum';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Excited />: ', () => {
  let callback = sinon.spy();

  const wrapper = shallow(<Excited dispatch={callback} exclamation="!!!" />);

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger a callback when <button/> is clicked', () => {
    // manually trigger the callback
    wrapper.find('button').simulate('click');
    expect(callback.called).toBe(true);
  });

  it('should retrieve appropriate props from state', () => {
    let testState = {
      exclamation: '!!'
    };

    let expectedState = {
      exclamation: '!!'
    };

    expect(JSON.stringify(mapStateToProps(testState))).toBe(
      JSON.stringify(expectedState)
    );
  });
});
