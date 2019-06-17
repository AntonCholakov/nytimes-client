import React from 'react';
import configureStore from 'redux-mock-store'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticlesContainer from './ArticlesContainer';

const initialState = {
    article: {
        loading: false,
        selectedArticle: false
    }
};

const mockStore = configureStore();
let wrapper;
let props;
let store;

Enzyme.configure({adapter: new Adapter()});

describe('Articles Container', () => {

    beforeEach(() => {
        store = mockStore(initialState);

        props = {
            articles: [
                {
                    id: 1,
                    title: 'Just a title',
                    byline: 'by John Doe',
                    published_date: '2019-05-19',
                    media: [
                        {
                            type: 'image',
                            caption: 'Sample Caption',
                            'media-metadata': [
                                {
                                    url: 'http://placehold.it/180',
                                    width: 75,
                                    height: 75
                                }
                            ]
                        }
                    ]
                }
            ],
            getArticles: jest.fn(),
            selectArticle: jest.fn(),
            history: {
                push: jest.fn()
            }
        };

        wrapper = shallow(<ArticlesContainer store={store} {...props} />);
    });

    it('should call getArticles() on render', () => {
        expect(props.getArticles).toHaveBeenCalled();
    });

    it('should render articles on render', () => {
        console.log('SECTION');
        console.log(wrapper.find('section'));
        const renderedArticles = wrapper.find('section').children();
        expect(renderedArticles.length).toEqual(1);
    });

    it('should call selectArticle onArticleClicked', () => {
        wrapper.instance().onArticleClicked(props.articles[0]);
        expect(props.selectArticle).toHaveBeenCalled();
        expect(props.history.push).toHaveBeenCalled();
    });
});
