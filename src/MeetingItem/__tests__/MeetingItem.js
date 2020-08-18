import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MeetingItem from '../MeetingItem';

describe('MeetingItem component', () => {
  it('should render without issues', () => {
    const component = shallow(<MeetingItem />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
