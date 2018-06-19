import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormattedMessage } from 'react-intl';

import UsernameField from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<UsernameField />', () => {
  const value = 'user-name';

  let component;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    component = shallow(<UsernameField value={value} onChange={onChangeSpy} />);
  });

  it('renders a label', () => expect(component.type()).toBe('label'));
  it('sets the label htmlFor attribute', () => expect(component.prop('htmlFor')).toBe('username'));

  it('sets the field description', () => {
    const description = component.children().first();
    expect(description.prop('id')).toBe('boilerplate.pages.Home.UsernameField.showRepositories');
    expect(description.prop('defaultMessage')).toBe('Show Github repositories by');
    expect(description.type()).toEqual(FormattedMessage);
  });

  it('renders the prefix', () => {
    const prefix = component.find('.prefix').first().childAt(0);
    expect(prefix.prop('id')).toBe('boilerplate.pages.Home.UsernameField.atPrefix');
    expect(prefix.prop('defaultMessage')).toBe('@');
    expect(prefix.type()).toEqual(FormattedMessage);
  });

  describe('input', () => {
    let input;

    beforeEach(() => {
      input = component.find('input[type="text"]').first();
    });

    it('sets the input id', () => expect(input.prop('id')).toBe('username'));
    it('sets the input placeholder', () => expect(input.prop('placeholder')).toBe('username'));
    it('sets the input value', () => expect(input.prop('value')).toBe(value));
    it('sets the input className', () => expect(input.prop('className')).toBe('input'));

    it('sets the input onChange handler', () => {
      const event = 'EVENT';
      input.prop('onChange')(event);
      expect(onChangeSpy).toBeCalledWith(event);
    });
  });
});
