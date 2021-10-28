import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchPanel from './SearchPanel';

configure({ adapter: new Adapter() });

const setUp = shallow(<SearchPanel />);
describe('Search component', () => {
	const mockCallBack = jest.fn();
	let component;
	let instance;

	beforeEach(() => {
		component = setUp();
		instance = component.instance();
	});
	it('snapShot component', () => {
		expect(component).toMatchSnapshot();
	});
	it.skip('testing click', () => {
		expect(mockCallBack.mock.calls.length).toBe(0);
		component.find('.onSearch').simulate('click');
		expect(mockCallBack.mock.calls.length).toBe(1);
	});

});
