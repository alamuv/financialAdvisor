import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../../src/components/App';

describe('<App/>', () => {
  it('should have a svg to display the donut chart', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('svg')).to.have.length(1);
  });

  it('should have state for risk level', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state().riskLevel).to.be.defined;
  });

  it('should have risk level set to 5 in state', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state().riskLevel).to.equal(5);
  });
});