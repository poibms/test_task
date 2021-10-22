import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchPanel from './Search-panel';

configure({ adapter: new Adapter() });

// describe('Search component', () => {
// 	it('should be render input component', () => {
// 		const component = shallow(<SearchPanel />);
// 		expect(component).toMatchSnapshot();
// 	});
//
// 	it('should call click method', () => {
// 		const mockCallBack = jest.fn();
// 		const component = shallow(<SearchPanel />);
// 		const input = component.find('input').first();
// 		const inputt = shallow(<input onChange={mockCallBack} />);
// 		inputt.simulate('change');
// 		// component.find('.onSearch').simulate('click');
// 		expect(mockCallBack.mock.calls.length).toEqual(1);
// 	});
// });
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

	// it('testing onchange', () => {
	//
	// })
});
