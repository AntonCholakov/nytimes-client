import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ArticlesContainer} from './ArticlesContainer';

enzyme.configure({adapter: new Adapter()});

describe('Articles Container', () => {

    const props = {
        articles: [
            {
                id: 1,
                title: 'Title 1',
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
            {
                id: 2,
                title: 'Title 2',
                byline: 'by Jack',
                published_date: '2019-04-19',
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
            {
                id: 3,
                title: 'Title 3',
                byline: 'by Anna',
                published_date: '2019-04-01',
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

    it('should call getArticles() if there are no articles on render', () => {
        enzyme.mount(
            <ArticlesContainer articles={[]}
                               getArticles={props.getArticles}
                               selectArticle={props.selectArticle}/>
        );

        expect(props.getArticles).toHaveBeenCalled();
    });

    it('should call getArticles() if there are articles on render', () => {
        enzyme.mount(
            <ArticlesContainer articles={props.articles}
                               getArticles={props.getArticles}
                               selectArticle={props.selectArticle}/>
        );

        expect(props.getArticles).toHaveBeenCalled();
    });

    it('should render 3 articles on render', () => {
        const wrapper = enzyme.mount(
            <ArticlesContainer articles={props.articles}
                               getArticles={props.getArticles}
                               selectArticle={props.selectArticle}/>
        );

        const renderedArticles = wrapper.find('section').children();
        expect(renderedArticles.length).toEqual(3);
    });

    it('should call selectArticle onArticleClicked', () => {
        const wrapper = enzyme.mount(
            <ArticlesContainer {...props}/>
        );

        wrapper.instance().onArticleClicked(props.articles[0]);
        expect(props.selectArticle).toHaveBeenCalled();
        expect(props.history.push).toHaveBeenCalled();
    });
});
