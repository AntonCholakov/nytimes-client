import React from 'react';
import configureStore from 'redux-mock-store'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainContainer from './MainContainer';

const initialState = {
    article: {
        loading: false,
        selectedArticle: false
    }
};

const mockStore = configureStore();
let wrapper;
let store;

Enzyme.configure({adapter: new Adapter()});

describe('Main Container', () => {

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<MainContainer store={store}/>)
    });

    it('should render self', () => {
    });
});
