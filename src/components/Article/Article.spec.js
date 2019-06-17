import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from './Article';

let wrapper;
let props;

Enzyme.configure({adapter: new Adapter()});

describe('Article Component', () => {

    beforeEach(() => {
        props = {
            article: {
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
            },
            onArticleClick: jest.fn()
        };

        wrapper = shallow(<Article {...props} />)
    });

    it('should render self', () => {
        expect(wrapper.find('article').hasClass('Article')).toBe(true);
    });

    it('should render title', () => {
        expect(wrapper.find('.title').text()).toBe(props.article.title);
    });

    it('should render byline', () => {
        expect(wrapper.find('.ArticleByLine').text()).toBe(props.article.byline);
    });

    it('should render date', () => {
        expect(wrapper.find('.ArticlePublishedDate').text()).toBe(props.article.published_date);
    });

    it('should render image', () => {
        expect(wrapper.find('.ArticleImgHolder img').prop('src')).toBe(props.article.media[0]['media-metadata'][0].url);
        expect(wrapper.find('.ArticleImgHolder img').prop('alt')).toBe(props.article.media[0].caption);
    });

    it('should call onArticleClick on article click', () => {
        wrapper.find('.Article').simulate('click');
        expect(props.onArticleClick).toHaveBeenCalled();
    });
});
