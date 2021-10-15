import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Headers from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import SearchPanel from '../Components/Search-panel/Search-panel';
import Weather from '../Components/Weather/Weather';

configure({ adapter: new Adapter() });

it('should be ok', () => {
    const component = shallow(<Main />);
    const wrapper = component.find('.wrapper');
    expect(wrapper.length).toBe(1);
});

describe('Header component', () => {
    it('should render Main component', () => {
      const component = render(<Headers />);
      expect(component).toMatchSnapshot();
    });
  });

const props = {
    data: {
        name: 'name',
        country: 'US',
        temp: '12',
        feel: '10',
        crntDate: '12.03.2002',
        time: '14:33',
        weather: [{ id: 'das', description: 'desc', icon: '024' }]
    },
    nextWeather: [
        {
          temp: '12',
          feels_like: '10',
          wind: 12,
          time: '12:32',
          id: 13,
        }
    ],
    posts: [
        {
          postname: 'postname',
          country: 'BY',
          id: '2'
        }
    ],
    onSearch: () => {},
    onDelete: () => {}

};

    const setUp = (props) => shallow(<Weather {...props} />);
  describe('testing props...', () => {
    describe('has props', () => {
      const component = setUp(props);

      it('should render 1', () => {
          const srchItem = component.find('.search-item');
          expect(srchItem).toHaveLength(1);
      });

      it('should render 2', () => {
        const itmBody = component.find('.item_body');
        expect(itmBody).toHaveLength(1);
    });
  });
});

// handleSearch

const search = () => shallow(<SearchPanel />);

describe('Search component', () => {
    let component;
    let instance;
    let input;
    beforeEach(() => {
        component = search();
        instance = component.instance();
        input = component.find('.onChange');
    });
    it('should render Search component', () => {
        expect(component).toMatchSnapshot();
      });

      it('handle search input value', () => {
        expect(component.state().value).toBe('');
        instance.onChange('Moscow');
        expect(component.state().value).toBe('Moscow');
    });

    it('should simulate btn click', () => {
      expect(component.state().value).toBe('');
      const btn = component.find('.onSearch');
      btn.simulate('click');
      expect(component.state().value).toBe('');
    })
});
