import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../../src/components/App';

describe('<App/>', () => {
  it('should have state for risk level', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state().riskLevel).to.be.defined;
  });

  it('should have state for dollar value', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state().dollarValue).to.be.defined;
  });

  it('should have initial risk level set to 5 in state', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state().riskLevel).to.equal(5);
  });

  it('should have intial dollar value set to $100 in state', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state().dollarValue).to.equal(100);
  });
});