import reducer from './articles';
import * as actionTypes from '../actions/actionTypes';

describe('articles reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            articles: [],
            selectedArticle: null,
            loading: false
        })
    });

    it('should handle START_LOADER', () => {
        const initialState = {
            articles: [],
            selectedArticle: null
        };

        expect(
            reducer(initialState, {
                type: actionTypes.START_LOADER
            })
        ).toEqual({
            articles: [],
            selectedArticle: null,
            loading: true
        })
    });

    it('should handle SET_ARTICLES', () => {
        const initialState = {
            articles: [],
            selectedArticle: null
        };

        const articles = [
            {
                id: 1,
                title: 'Just a title'
            },
            {
                id: 2,
                title: 'Just another title'
            }
        ];

        expect(
            reducer(initialState, {
                type: actionTypes.SET_ARTICLES,
                articles: articles
            })
        ).toEqual({
            articles: [
                {
                    id: 1,
                    title: 'Just a title'
                },
                {
                    id: 2,
                    title: 'Just another title'
                }
            ],
            selectedArticle: null,
            loading: false
        });
    });

    it('should handle SELECT_ARTICLE', () => {
        const initialState = {
            articles: [
                {
                    id: 1,
                    title: 'Just a title'
                },
                {
                    id: 2,
                    title: 'Just another title'
                }
            ],
            selectedArticle: null
        };

        const selectedArticle = initialState.articles[0];

        expect(
            reducer(initialState, {
                type: actionTypes.SELECT_ARTICLE,
                article: selectedArticle
            })
        ).toEqual({
            articles: [
                {
                    id: 1,
                    title: 'Just a title'
                },
                {
                    id: 2,
                    title: 'Just another title'
                }
            ],
            selectedArticle: {
                id: 1,
                title: 'Just a title'
            },
            loading: false
        });
    });

    it('should handle DESELECT_ARTICLE', () => {
        const initialState = {
            articles: [
                {
                    id: 1,
                    title: 'Just a title'
                },
                {
                    id: 2,
                    title: 'Just another title'
                }
            ],
            selectedArticle: {
                id: 1,
                title: 'Just a title'
            }
        };

        expect(
            reducer(initialState, {
                type: actionTypes.DESELECT_ARTICLE
            })
        ).toEqual({
            articles: [
                {
                    id: 1,
                    title: 'Just a title'
                },
                {
                    id: 2,
                    title: 'Just another title'
                }
            ],
            selectedArticle: null
        });
    })

});
