import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import RiskInput from '../../src/components/RiskInput';

var riskLevel = 8;

describe('<RiskInput/>', () => {
  it('should have a svg to display the donut chart', () => {
    const wrapper = shallow(<RiskInput/>);
    expect(wrapper.find('svg')).to.have.length(1);
  });

  it('should have props for risk level', () => {
    const wrapper = shallow(<RiskInput/>);
    expect(wrapper.props().riskLevel).to.be.defined;
  });

  it('should have props for risk change event', () => {
    const wrapper = shallow(<RiskInput/>);
    expect(wrapper.props().onRiskChange).to.be.defined;
  });
});