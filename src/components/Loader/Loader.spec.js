import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from './Loader';

let wrapper;

Enzyme.configure({adapter: new Adapter()});

describe('Loader Component', () => {

    beforeEach(() => {
        wrapper = shallow(<Loader/>)
    });

    it('should render self', () => {
        expect(wrapper.find('.LoaderContainer').exists()).toBe(true);
    });
});
