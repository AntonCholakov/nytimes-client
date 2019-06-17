import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './articles';
import * as actionTypes from './actionTypes'
import * as constants from '../AppConstants';

describe('actions', () => {

    it('should create an action to start loader', () => {
        const expectedAction = {
            type: actionTypes.START_LOADER
        };

        expect(actions.startLoader()).toEqual(expectedAction);
    })

    it('should create an action to set articles', () => {
        const expectedArticles = [
            {
                id: 1,
                title: 'Just a title'
            },
            {
                id: 2,
                title: 'Just another title'
            }
        ];

        const expectedAction = {
            type: actionTypes.SET_ARTICLES,
            articles: expectedArticles
        };

        expect(actions.setArticles(expectedArticles)).toEqual(expectedAction);
    });

    it('should create an action to select article', () => {
        const selectedArticle = {
            id: 1,
            title: 'Just a title'
        };

        const expectedAction = {
            type: actionTypes.SELECT_ARTICLE,
            article: selectedArticle
        };

        expect(actions.selectArticle(selectedArticle)).toEqual(expectedAction);
    })

    it('should create an action to deselect currently selected article', () => {
        const expectedAction = {
            type: actionTypes.DESELECT_ARTICLE
        };

        expect(actions.deselectArticle()).toEqual(expectedAction);
    })
});

describe('async actions', () => {

    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
        mock.reset();
    });

    it('should create an action to set articles when fetching articles is done', async () => {
        mock.onGet(constants.API_URL).reply(200, {
            results: [
                {
                    id: 1,
                    title: 'Just a title'
                },
                {
                    id: 2,
                    title: 'Just another title'
                }
            ]
        });

        const expectedAction = {
            type: actionTypes.SET_ARTICLES,
            articles: [
                {
                    id: 1,
                    title: 'Just a title'
                },
                {
                    id: 2,
                    title: 'Just another title'
                }
            ]
        };

        const response = await axios.get(constants.API_URL);
        expect(actions.setArticles(response.data.results)).toEqual(expectedAction);
    })

    it('should create an action to select article when fetching article is done', async () => {
        mock.onGet(constants.API_URL).reply(200, {
            results: [
                {
                    id: 1,
                    title: 'Just a title'
                },
                {
                    id: 2,
                    title: 'Just another title'
                }
            ]
        });

        const requestedId = 2;

        const expectedAction = {
            type: actionTypes.SELECT_ARTICLE,
            article: {
                id: 2,
                title: 'Just another title'
            }
        };

        const response = await axios.get(constants.API_URL);
        const article = response.data.results.find(article => article.id === +requestedId);
        expect(actions.selectArticle(article)).toEqual(expectedAction);
    })
})
