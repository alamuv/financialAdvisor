import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import AssetPlan from '../../src/components/AssetPlan';

var riskLevel = 8;

describe('<AssetPlan/>', () => {
  it('should have a svg to display the donut chart', () => {
    const wrapper = mount(<AssetPlan/>);
    expect(wrapper.find('svg')).to.have.length(1);
  });

  it('should have props for risk level', () => {
    const wrapper = shallow(<AssetPlan/>);
    expect(wrapper.props().riskLevel).to.be.defined;
  });

  it('should have props for risk level', () => {
    const wrapper = shallow(<AssetPlan/>);
    expect(wrapper.props().riskLevel).to.be.defined;
  });
});