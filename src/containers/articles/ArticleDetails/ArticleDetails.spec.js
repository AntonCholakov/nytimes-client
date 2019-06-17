import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ArticleDetails} from "./ArticleDetails";

enzyme.configure({adapter: new Adapter()});

describe('Article Details Container', () => {

    const props = {
        selectedArticle: {
            id: 1,
            title: 'Just a title',
            url: '/',
            abstract: '...',
            byline: 'by John Doe',
            published_date: '2019-05-19',
            media: [
                {
                    type: 'image',
                    caption: 'Sample Caption',
                    'media-metadata': [
                        {
                            url: 'http://placehold.it/75',
                            width: 75,
                            height: 75
                        },
                        {
                            url: 'http://placehold.it/140',
                            width: 210,
                            height: 140
                        },
                        {
                            url: 'http://placehold.it/440x2933',
                            width: 440,
                            height: 293
                        }
                    ]
                }
            ]
        },
        getArticle: jest.fn(),
        deselectArticle: jest.fn(),
        match: {
            params: {}
        },
        history: {
            push: jest.fn()
        }
    };

    it('should render title', () => {
        const wrapper = shallow(<ArticleDetails {...props} />);
        expect(wrapper.find('.Title a').text()).toBe(props.selectedArticle.title);
    });

    it('should render byline', () => {
        const wrapper = shallow(<ArticleDetails {...props} />);
        expect(wrapper.find('.ByLine').text()).toBe(props.selectedArticle.byline);
    });

    it('should render date', () => {
        const wrapper = shallow(<ArticleDetails {...props} />);
        expect(wrapper.find('.PublishedDate time').text()).toBe(props.selectedArticle.published_date);
    });

    it('should render image', () => {
        const wrapper = shallow(<ArticleDetails {...props} />);
        expect(wrapper.find('.MainImageHolder img').prop('src')).toBe(props.selectedArticle.media[0]['media-metadata'][2].url);
        expect(wrapper.find('.MainImageHolder img').prop('alt')).toBe(props.selectedArticle.media[0].caption);
    });

    it('should call deselectArticle on "Back to list" click', () => {
        const wrapper = shallow(<ArticleDetails {...props} />);
        wrapper.find('.BackToList button').simulate('click');
        expect(props.deselectArticle).toHaveBeenCalled();
    });
});
